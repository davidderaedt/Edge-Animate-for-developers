# EDGE ANIMATE FOR WEB DEVELOPERS

At its core, *Edge Animate* is a tool which lets you animate DOM elements in visual way. The resulting animations, called *compositions*, can be published in any context capable of displaying modern web content, whether it's a web page, or, say, the Web View control of a native mobile app.

An Edge composition is typically displayed in a `<div>` of an HTML page. An HTML page can hold several compositions -- even though the tool can only edit one composition at a time.

The tool also lets you edit a whole pre-existing HTML page. In that case, the page itself is the composition, and each animated element will be added a single CSS class (edgeLoad-XXXXX). But the overall idea is pretty much the same in both cases.

By default, DOM elements created within the tool will be injected at runtime (ie in the HTML page source file, the stage `<div>` is empty). You can also choose to publish it as static content for better SEO.

Compositions manipulate DOM elements using a javascript framework called the *Edge runtime*, which has several dependencies, including jQuery.


--------------------------
##File structure of an Edge Animate project

Here's a short description of each file involved (assuming your page was named *index*).

* *index.edge* is a JSON file used by the authoring tool to open the project (not to be published).
* *index.html* is the host HTML file
* *index_edgePreload.js* is the yepnope based loader which loads everything else.
* *index_edge.js* describes the composition content (assets, symbols, timelines)
* *index_edgeActions.js* holds the custom javascript code added by the user
* *images* (folder) contains all images used by the tool
* *edge_includes* (folder) contains all required libraries:
	*  JSON2: a library for working with the JSON format
	*  jQuery
	*  jQuery easing: a jQuery plugin describing easing functions for animations
	*  Edge: the core Edge Animate library describing all JavaScript objects and classes used by an animation

Let's take a deeper look at the latter and what it creates exactly.

--------------------------
##Main Javascript architecture

The role of compositions is to animate visual elements like text and images through their corresponding DOM element. If using javascript, you can typically manipulate those DOM elements using jQuery and, optionally, some of its plugins.

Rather than being an alternative to this method, the Edge animate library augments it in several ways, by describing a framework to make it easier to work with animations.

At the very top level of a page containing Edge Animate compositions, attached to jQuery, is one unique global `Edge` object, which knows about all compositions in the page.

Each `composition` object has exactly one `Stage` object, which can be considered as the root of the scene graph (the equivalent of `root` in flash animations).

`jQuery -> Edge -(1-n)-> Composition -> Stage -(1-n)-> child symbols`

![image](tree.png)

The stage has a timeline using which lets you define animations of its child elements over time. That is because the stage is a particular kind of object named `symbol`.

--------------------------

##Symbols vs. DOM elements

`Symbols` are objects which have a timleline using which you can animate its child elements. To manipulate this timeline, `symbols` have an API with methods such as `play()` and `stop()`.

`Symbols` are reusable, so we need to distinguish between the `symbol definition` --which you can find in the Library panel-- and a `symbol instance` -- which you place on the stage and is actually used in the DOM.

For those of view coming from a Flash background, this will probably remind you of the notion of a `MovieClip`.

However, **a symbol instance is not to be confused with its corresponding DOM element**. It is not a visual object. A symbol instance can access its underlying DOM elements (usually through a jQuery handle), but those are different objects altogether.

`Symbols` can have child symbols, but again, those children are other symbol instances, not DOM elements.

`symbol -(1-n)-> child symbols -(1-n)-> child symbols (…)`

The DOM element tree is a parralel but separated hierarchical tree.

`div -(1-n)-> child elements -(1-n)-> child elements (…)`

![image](dom-vs-symbols.png)


> Note: The stage itself is a `symbol`, which is why it has timeline. However, it cannot be reused (you don't see it in the Library panel).

As a reminder, all Symbol definitions, DOM Elements descriptions, timeline content are all described in the  `index_edge.js` file. You could edit this file manually to modify the content of a composition, however you should be careful in doing so because it might break the ability of the tool to reopen and modify the composition. The best advice is to stay as close as possible to the syntax originally generated, including comments.


--------------------------

##Coding Basics

Edge Animate users can create code snippets called *Actions* in response to *Events* or *Triggers*. *Events* can be dispacthed by an element or a symbol (e.g. `click`) or event the document. *Triggers* are dispatched by the timeline when the playhead hits a certain point.

Inside this code, users should use `sym` over `this` to  access the *symbol instance* of the *symbol definition* currently being open in the tool. So it's important to remember that `sym` ** does not represent the currently selected element **.

For instance, consider an Edge Animate composition open on the stage (which is the default), in which there is an animation. We want users to click on an element named `greenButton` to replay the composition. We select the `greenButton`, and select *Open Actions > click* to open the code editor. In the code displayed, `sym` is the stage, not the image on which users will click to trigger the code.

	sym.play();

Edge Animate inserts this code into the `[page-name]_edgeActions.js`, but it hides the whole file structure to make it easier to edit for regular users.


This is what the generated edgeAction file will look like:

	(function($, Edge, compId){
	var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

	   //Edge symbol: 'stage'
	   (function(symbolName) {
            
      	Symbol.bindElementAction(compId, symbolName, "${_greenButton}", "click", function(sym, e) {
			sym.play();
      	});
      	//Edge binding end


You can edit this file directly, either using the tool's "full code editor", or by using another text editor. Here we see that we use the `Symbol` class uses the `bindElementAction` method to register an action on a element. The last parameter is the callback to be executed when the specified event is triggered. It is the body of this callback users will edit using the Edge Animate code editor.

This callback is also passed an `e` parameter representing the event. Using `e.target`, you can access the element which triggered the event (`greenButton`, in our example).

Technically, only symbols can have javascript code attached to them, but this code can access and manipulate any other symbol or DOM elements, using a dedicated API.

--------------------------

##Traversing the object tree

Since those are two completely different objects, we access symbols and elements differently. But you can access any symbol instance or any element from anywhere using the appropriate API.

`sym.getSymbol("name");` returns a child symbol instance from its name
	
	var square = sym.getSymbol("square");
	square.play();


`sym.$("name")` returns the jQuery handle of a child element from the name.

	var greenButton = sym.$("greenButton");
	greenButton.hide();

Note that, to get the jQuery handle corresponding to `sym` itself, you can simply use	`sym.getSymbolElement();`

In both cases, the `name` parameter is the one chosen in the properties panel, **not** the DOM selector. If you want to retrieve the name of the DOM selector from the edge name, you use `sym.lookupSelector(name)`.

You can get an array of all child symbol instances like this:

	sym.getChildSymbols();

To get an array of all child DOM elements, you'd use the jQuery method `children()` on the corresponding element:

	sym.getSymbolElement().children();

You can move up the symbol tree to get to the parent symbol.

	sym.getParentSymbol();


To get to the root of the tree (ie the stage), you first get the composition with ` sym.getComposition()` and then call `getStage()`. You can then descend the object tree:

	sym.getComposition().getStage().getSymbol("leftContainer").getSymbol("square").play(); 


##Dynamic symbols manipulation

You can create or delete symbols dynamically.

To create a new Symbol instance anywhere, you use:

	var instance = sym.createChildSymbol("SymbolDefinitionName", "parentSymbolInstanceName", index) ;

But the second parameter can be a jQuery-like selector, so that you can use things like:

	sym.createChildSymbol("SymbolDefinitionName", "body > div") ;

Likewise, you can dynamically delete symbol instances:

	sym.getSymbol("square2").deleteSymbol();


Note that the composition object return the list of all instances of a given symbol definition, using `getSymbols(definitionName);`

	var allSquares = sym.getComposition().getSymbols("Square");




