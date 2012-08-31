/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'htmlFile',
            display:'none',
            type:'rect',
            rect:['182','18px','auto','auto','auto','auto']
         },
         {
            id:'Ellipse',
            display:'none',
            type:'ellipse',
            rect:['-130px','-117px','273px','248px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(139,143,138,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'edgeFile',
            type:'rect',
            rect:['13px','192','auto','auto','auto','auto']
         },
         {
            id:'Group',
            display:'none',
            type:'group',
            rect:['434','294','163','121','auto','auto'],
            c:[
            {
               id:'Text-index_edgeActions',
               type:'text',
               rect:['0px','90px','163px','32px','auto','auto'],
               text:"index_edgeActions.js<br>",
               align:"center",
               font:['Courier, Courier New, monospace',14,"rgba(0,0,0,1.00)","normal","none",""]
            },
            {
               id:'jsfile-actions',
               type:'image',
               rect:['-602px','203px','41px','51px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"jsfile-actions.png",'0px','0px']
            }]
         },
         {
            id:'jsfile_edge_group',
            display:'none',
            type:'group',
            rect:['243px','250px','118','179','auto','auto'],
            c:[
            {
               id:'Text-index_edgejs',
               type:'text',
               rect:['-2px','138px','118px','32px','auto','auto'],
               text:"index_edge.js",
               align:"center",
               font:['Courier, Courier New, monospace',14,"rgba(0,0,0,1.00)","normal","none",""]
            },
            {
               id:'jsfile-edge',
               type:'image',
               rect:['29px','63px','46px','58px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"jsfile-edge.png",'0px','0px']
            }]
         },
         {
            id:'Edge-includes_group',
            display:'none',
            type:'group',
            rect:['28px','278px','132','132','auto','auto'],
            c:[
            {
               id:'edge-includes-folder',
               type:'image',
               rect:['0px','0px','123px','106px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"edge-includes-folder.png",'0px','0px']
            },
            {
               id:'Text-edge_includes',
               type:'text',
               rect:['10px','109px','auto','auto','auto','auto'],
               text:"edge_includes",
               align:"center",
               font:['Courier, Courier New, monospace',14,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'content-edgefile',
            type:'image',
            rect:['116px','114px','353px','228px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"content-edgefile.png",'0px','0px'],
            boxShadow:["",3,3,10,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'jsfile_preload_group',
            display:'none',
            type:'group',
            rect:['206px','92px','209','190','auto','auto'],
            c:[
            {
               id:'Text-index_edgePredload',
               type:'text',
               rect:['-15px','145px','209px','32px','auto','auto'],
               text:"index_edgePreload.js<br>",
               align:"center",
               font:['Courier, Courier New, monospace',14,"rgba(0,0,0,1.00)","normal","none",""]
            },
            {
               id:'jsfile-preload',
               type:'image',
               rect:['21px','7px','133px','171px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"jsfile-preload.png",'0px','0px'],
               transform:[[],[],[],['0.557','0.557']]
            }]
         },
         {
            id:'content-html',
            display:'none',
            type:'image',
            rect:['28px','138px','531px','301px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"content-html.png",'0px','0px'],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'Text_Edge_file_descript',
            display:'none',
            type:'text',
            rect:['32px','409px','536px','48px','auto','auto'],
            text:"The edge file is just a project description for the authoring environment.<br>It holds a reference to the host HTML file.",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',16,"rgba(108,108,108,1.00)","400","none","italic"]
         },
         {
            id:'Text_HTML_file_descript',
            display:'none',
            type:'text',
            rect:['29px','460px','542px','48px','auto','auto'],
            text:"The HTML file contains the Stage Div and loads the Edge Preloader script. The Stage div is empty, unless you chose to \"publish as static content\"",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',16,"rgba(108,108,108,1.00)","normal","none","italic"]
         },
         {
            id:'Text-edgePreload_desc',
            display:'none',
            type:'text',
            rect:['92px','286px','429px','55px','auto','auto'],
            text:"The Edge preloader is a yepnope based script loader. It loads everything the composition needs",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',16,"rgba(108,108,108,1.00)","normal","none","italic"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['88px','268px','407px','0px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text-edge_includes_content_desc',
            display:'none',
            type:'text',
            rect:['6px','423px','181px','54px','auto','auto'],
            text:"Required libraries:<br>jQuery, jQuery easing, Edge, JSON2",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',16,"rgba(108,108,108,1.00)","normal","none","italic"]
         },
         {
            id:'Text-edge_desc',
            display:'none',
            type:'text',
            rect:['206px','423px','191px','54px','auto','auto'],
            text:"Composition Description: assets, symbols, fonts and timelines.",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',16,"rgba(108,108,108,1.00)","normal","none","italic"]
         },
         {
            id:'Text-edgeActions-desc',
            display:'none',
            type:'text',
            rect:['431px','423px','164px','54px','auto','auto'],
            text:"Actions: custom Javascript code",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',16,"rgba(108,108,108,1.00)","normal","none","italic"]
         },
         {
            id:'TreeLinesGroup',
            display:'none',
            type:'group',
            rect:['71px','268','439','10','auto','auto'],
            c:[
            {
               id:'HLINE',
               type:'rect',
               rect:['18px','0px','420px','1px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'VLINE1',
               type:'rect',
               rect:['17px','0px','1px','30px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'VLINE2',
               type:'rect',
               rect:['220px','0px','1px','30px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'VLINE0',
               type:'rect',
               rect:['220px','-10px','1px','10px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'VLINE3',
               type:'rect',
               rect:['437px','1px','1px','30px','auto','auto'],
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'Text-Title',
            type:'text',
            rect:['74px','19px','451px','158px','auto','auto'],
            text:"Anatomy of an Edge animate project file structure<br><br>Click / Tap to play",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',26,"rgba(0,0,0,1)","normal","none","italic"]
         },
         {
            id:'VLine-HTML-to-Preload',
            display:'none',
            type:'rect',
            rect:['289px','123px','1px','16px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [
         {
            id:'htmlFile',
            symbolName:'htmlFile'
         },
         {
            id:'edgeFile',
            symbolName:'edgeFile'
         }
         ]
      },
   states: {
      "Base State": {
         "${_VLINE2}": [
            ["style", "top", '0px'],
            ["style", "height", '30px'],
            ["style", "left", '220px'],
            ["style", "width", '1px']
         ],
         "${_VLINE0}": [
            ["style", "top", '-10px'],
            ["style", "height", '10px'],
            ["style", "left", '220px'],
            ["style", "width", '1px']
         ],
         "${_content-edgefile}": [
            ["style", "-webkit-transform-origin", [0.84,56.5], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0.84,56.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0.84,56.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0.84,56.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0.84,56.5],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "boxShadow.blur", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '115.87px'],
            ["style", "top", '136px'],
            ["style", "display", 'block'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_jsfile_preload_group}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '206.32px'],
            ["style", "top", '91.62px']
         ],
         "${_TreeLinesGroup}": [
            ["style", "display", 'none']
         ],
         "${_jsfile-edge}": [
            ["style", "top", '63.11px'],
            ["transform", "scaleY", '1.53118'],
            ["transform", "scaleX", '1.53118'],
            ["style", "height", '58.466127015056px'],
            ["style", "left", '29.12px'],
            ["style", "width", '45.716375605742px']
         ],
         "${_htmlFile}": [
            ["style", "display", 'none'],
            ["style", "left", '-102.53px'],
            ["style", "top", '18.13px']
         ],
         "${_jsfile-preload}": [
            ["style", "top", '7.47px'],
            ["transform", "scaleY", '0.55713'],
            ["transform", "scaleX", '0.55713'],
            ["style", "height", '171.05951136691px'],
            ["style", "left", '20.59px'],
            ["style", "width", '132.82357798px']
         ],
         "${_Text-Title}": [
            ["style", "top", '19.28px'],
            ["style", "width", '450.51666259766px'],
            ["style", "height", '157.74427032471px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '74px'],
            ["style", "font-size", '26px']
         ],
         "${_Edge-includes_group}": [
            ["style", "top", '278px'],
            ["style", "opacity", '0'],
            ["style", "left", '28.1px'],
            ["style", "display", 'none']
         ],
         "${_Text-edgePreload_desc}": [
            ["color", "color", 'rgba(108,108,108,1.00)'],
            ["style", "left", '92.13px'],
            ["style", "font-size", '16px'],
            ["style", "top", '286px'],
            ["style", "text-align", 'center'],
            ["style", "width", '429.01666259766px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "height", '54.875px'],
            ["style", "display", 'none']
         ],
         "${_Group}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Text-index_edgePredload}": [
            ["style", "top", '145.17px'],
            ["style", "width", '209.27265930176px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31.533332824707px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '-15px'],
            ["style", "font-size", '14px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(139,143,138,1.00)'],
            ["style", "display", 'none'],
            ["style", "top", '-117px'],
            ["style", "height", '248.0546875px'],
            ["style", "opacity", '0'],
            ["style", "left", '-130px'],
            ["style", "width", '272.58756868132px']
         ],
         "${_jsfile-actions}": [
            ["style", "top", '18.36px'],
            ["transform", "scaleY", '1.71684'],
            ["style", "height", '51.194440891796px'],
            ["transform", "scaleX", '1.71684'],
            ["style", "left", '55.63px'],
            ["style", "width", '40.772582185876px']
         ],
         "${_Text-index_edgeActions}": [
            ["style", "top", '89.73px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31.533332824707px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '0.02px'],
            ["style", "width", '162.92291259766px']
         ],
         "${_Text_HTML_file_descript}": [
            ["color", "color", 'rgba(108,108,108,1.00)'],
            ["style", "left", '29px'],
            ["style", "font-size", '16px'],
            ["style", "top", '459.97px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "width", '542.33541870117px'],
            ["style", "height", '48.183334350586px']
         ],
         "${_VLINE1}": [
            ["style", "height", '30px'],
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["style", "width", '1px']
         ],
         "${_edgeFile}": [
            ["style", "left", '253px'],
            ["style", "top", '200px']
         ],
         "${_VLINE3}": [
            ["style", "top", '1px'],
            ["style", "height", '30px'],
            ["style", "left", '437px'],
            ["style", "width", '1px']
         ],
         "${_jsfile_edge_group}": [
            ["style", "top", '249.87px'],
            ["style", "opacity", '0'],
            ["style", "left", '243px'],
            ["style", "display", 'none']
         ],
         "${_Text-edgeActions-desc}": [
            ["color", "color", 'rgba(108,108,108,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '431.02px'],
            ["style", "width", '163.96662902832px'],
            ["style", "top", '423px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "display", 'none'],
            ["style", "font-size", '16px']
         ],
         "${_VLine-HTML-to-Preload}": [
            ["style", "top", '123px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "left", '289px'],
            ["style", "width", '1px']
         ],
         "${_Text_Edge_file_descript}": [
            ["color", "color", 'rgba(108,108,108,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '32px'],
            ["style", "font-size", '16px'],
            ["style", "top", '408.7px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "height", '48.183334350586px'],
            ["style", "width", '535.92266845703px']
         ],
         "${_content-html}": [
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "opacity", '0'],
            ["style", "left", '28px'],
            ["style", "width", '531.03515625px'],
            ["style", "top", '138px'],
            ["style", "display", 'none'],
            ["style", "height", '300.98054232663px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '10px']
         ],
         "${_HLINE}": [
            ["style", "height", '1px'],
            ["style", "top", '0px'],
            ["style", "left", '18px'],
            ["style", "width", '420px']
         ],
         "${_Text-edge_includes}": [
            ["style", "top", '109px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '10px'],
            ["style", "font-size", '14px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '0px'],
            ["style", "top", '268px'],
            ["style", "left", '88px'],
            ["style", "width", '406.81640625px']
         ],
         "${_Text-index_edgejs}": [
            ["style", "top", '138.27px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31.533332824707px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '-2px'],
            ["style", "width", '118.02056884766px']
         ],
         "${_Stage}": [
            ["style", "height", '520px'],
            ["style", "overflow", 'hidden'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '600px']
         ],
         "${_Text-edge_includes_content_desc}": [
            ["color", "color", 'rgba(108,108,108,1.00)'],
            ["style", "left", '6px'],
            ["style", "width", '181px'],
            ["style", "top", '423px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "font-size", '16px'],
            ["style", "font-style", 'italic']
         ],
         "${_edge-includes-folder}": [
            ["style", "top", '0px'],
            ["style", "height", '106.30224731608px'],
            ["style", "left", '0px'],
            ["style", "width", '123px']
         ],
         "${_Text-edge_desc}": [
            ["color", "color", 'rgba(108,108,108,1.00)'],
            ["style", "left", '206px'],
            ["style", "font-size", '16px'],
            ["style", "top", '423px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "width", '191px'],
            ["style", "font-style", 'italic']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5750,
         autoPlay: true,
         timeline: [
            { id: "eid1051", tween: [ "style", "${_TreeLinesGroup}", "display", 'block', { fromValue: 'none'}], position: 3511, duration: 0, easing: "easeInOutQuad" },
            { id: "eid410", tween: [ "transform", "${_jsfile-actions}", "scaleX", '1.71684', { fromValue: '1.71684'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid1067", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid133", tween: [ "style", "${_htmlFile}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid213", tween: [ "style", "${_htmlFile}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1048", tween: [ "style", "${_edgeFile}", "left", '253px', { fromValue: '253px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1047", tween: [ "style", "${_edgeFile}", "left", '13px', { fromValue: '253px'}], position: 1000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid227", tween: [ "style", "${_jsfile_preload_group}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid671", tween: [ "style", "${_Text_Edge_file_descript}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid672", tween: [ "style", "${_Text_Edge_file_descript}", "display", 'none', { fromValue: 'block'}], position: 1011, duration: 0, easing: "easeInOutQuad" },
            { id: "eid485", tween: [ "style", "${_edgeFile}", "top", '12.91px', { fromValue: '200px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid677", tween: [ "style", "${_Text_HTML_file_descript}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid678", tween: [ "style", "${_Text_HTML_file_descript}", "display", 'none', { fromValue: 'block'}], position: 2511, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1058", tween: [ "style", "${_Text-Title}", "display", 'none', { fromValue: 'block'}], position: 8, duration: 0, easing: "easeInOutQuad" },
            { id: "eid202", tween: [ "style", "${_content-html}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid203", tween: [ "style", "${_content-html}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid215", tween: [ "style", "${_content-html}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid365", tween: [ "style", "${_content-html}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid411", tween: [ "transform", "${_jsfile-actions}", "scaleY", '1.71684', { fromValue: '1.71684'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid727", tween: [ "style", "${_Edge-includes_group}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid719", tween: [ "style", "${_Edge-includes_group}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid443", tween: [ "style", "${_jsfile_edge_group}", "display", 'block', { fromValue: 'none'}], position: 3759, duration: 0, easing: "easeInQuad" },
            { id: "eid416", tween: [ "style", "${_jsfile-actions}", "left", '55.63px', { fromValue: '55.63px'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid444", tween: [ "style", "${_jsfile_edge_group}", "opacity", '1', { fromValue: '0'}], position: 3759, duration: 500, easing: "easeInOutQuad" },
            { id: "eid482", tween: [ "style", "${_content-edgefile}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_content-html}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "style", "${_content-html}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid1057", tween: [ "style", "${_Text-edge_includes_content_desc}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1056", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid414", tween: [ "style", "${_jsfile-actions}", "top", '18.36px', { fromValue: '18.36px'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid776", tween: [ "style", "${_Text-edgePreload_desc}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid777", tween: [ "style", "${_Text-edgePreload_desc}", "display", 'none', { fromValue: 'block'}], position: 3511, duration: 0 },
            { id: "eid868", tween: [ "style", "${_Text-edgeActions-desc}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0 },
            { id: "eid867", tween: [ "style", "${_Text-edge_desc}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
            { id: "eid1052", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1060", tween: [ "style", "${_VLine-HTML-to-Preload}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1063", tween: [ "style", "${_jsfile_preload_group}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid489", tween: [ "style", "${_htmlFile}", "left", '243px', { fromValue: '-102.53px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid210", tween: [ "style", "${_content-edgefile}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid212", tween: [ "style", "${_content-edgefile}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid211", tween: [ "style", "${_content-edgefile}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid28", tween: [ "style", "${_content-edgefile}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid214", tween: [ "style", "${_content-edgefile}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid1064", tween: [ "style", "${_Group}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"htmlFile": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','333px','98px','32px','auto','auto'],
      font: ['Courier, Courier New, monospace',14,'rgba(0,0,0,1.00)','normal','none',''],
      id: 'Text-indexhtml',
      text: 'index.html<br>',
      align: 'center',
      type: 'text'
   },
   {
      id: 'html-logo',
      type: 'image',
      rect: ['11px','-14px','71px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/html-logo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_html-logo}": [
            ["style", "top", '-14px'],
            ["style", "height", '93.681084459612px'],
            ["style", "left", '11.12px'],
            ["style", "width", '71px']
         ],
         "${symbolSelector}": [
            ["style", "height", '113.85001373291px'],
            ["style", "width", '97.550003051758px']
         ],
         "${_Text-indexhtml}": [
            ["style", "top", '82.32px'],
            ["style", "width", '97.555732727051px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31.533332824707px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"edgeFile": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-10px','74px','98px','32px','auto','auto'],
      font: ['Courier, Courier New, monospace',14,'rgba(0,0,0,1.00)','normal','none',''],
      id: 'Text-indexedge',
      text: 'index.edge<br>',
      align: 'center',
      type: 'text'
   },
   {
      id: 'edge-logo',
      type: 'image',
      rect: ['0px','0px','72px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/edge-logo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_edge-logo}": [
            ["style", "top", '0px'],
            ["style", "height", '70.566665649414px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "width", '72.056299575392px']
         ],
         "${_Text-indexedge}": [
            ["style", "top", '74.3px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31.533332824707px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '-10px'],
            ["style", "width", '97.555732727051px']
         ],
         "${symbolSelector}": [
            ["style", "height", '115.83332061768px'],
            ["style", "width", '97.550003051758px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-67625263");
