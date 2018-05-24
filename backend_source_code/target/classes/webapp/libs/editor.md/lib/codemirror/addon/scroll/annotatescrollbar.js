!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";function e(t,e){function i(t){clearTimeout(o.doRedraw),o.doRedraw=setTimeout(function(){o.redraw()},t)}this.cm=t,this.options=e,this.buttonHeight=e.scrollButtonHeight||t.getOption("scrollButtonHeight"),this.annotations=[],this.doRedraw=this.doUpdate=null,this.div=t.getWrapperElement().appendChild(document.createElement("div")),this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",this.computeScale();var o=this;t.on("refresh",this.resizeHandler=function(){clearTimeout(o.doUpdate),o.doUpdate=setTimeout(function(){o.computeScale()&&i(20)},100)}),t.on("markerAdded",this.resizeHandler),t.on("markerCleared",this.resizeHandler),e.listenForChanges!==!1&&t.on("change",this.changeHandler=function(){i(250)})}t.defineExtension("annotateScrollbar",function(t){return"string"==typeof t&&(t={className:t}),new e(this,t)}),t.defineOption("scrollButtonHeight",0),e.prototype.computeScale=function(){var t=this.cm,e=(t.getWrapperElement().clientHeight-t.display.barHeight-2*this.buttonHeight)/t.heightAtLine(t.lastLine()+1,"local");if(e!=this.hScale)return this.hScale=e,!0},e.prototype.update=function(t){this.annotations=t,this.redraw()},e.prototype.redraw=function(t){t!==!1&&this.computeScale();var e=this.cm,i=this.hScale,o=document.createDocumentFragment(),n=this.annotations;if(e.display.barWidth)for(var r,a=0;a<n.length;a++){for(var s=n[a],h=r||e.charCoords(s.from,"local").top*i,d=e.charCoords(s.to,"local").bottom*i;a<n.length-1&&(r=e.charCoords(n[a+1].from,"local").top*i,!(r>d+.9));)s=n[++a],d=e.charCoords(s.to,"local").bottom*i;if(d!=h){var c=Math.max(d-h,3),l=o.appendChild(document.createElement("div"));l.style.cssText="position: absolute; right: 0px; width: "+Math.max(e.display.barWidth-1,2)+"px; top: "+(h+this.buttonHeight)+"px; height: "+c+"px",l.className=this.options.className}}this.div.textContent="",this.div.appendChild(o)},e.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler),this.cm.off("markerAdded",this.resizeHandler),this.cm.off("markerCleared",this.resizeHandler),this.changeHandler&&this.cm.off("change",this.changeHandler),this.div.parentNode.removeChild(this.div)}});