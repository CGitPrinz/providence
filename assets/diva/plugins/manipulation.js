!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/build/plugins/",a(a.s=1)}([,function(t,e,a){"use strict";a.r(e);let n=[],i=!1;function s(){n=[],i=!1}function l(t,e,a,l){let r=n.findIndex(t=>t.filter.name===e.name);if(-1!==r){let t=n[r];t.adjust=a,"Sharpness"===t.name?0===t.adjust[1]?t.postData=t.prevData:t.postData=N(t.prevData,t.adjust):"Invert"===t.name?(t.postData=o(t.postData,t.filter,t.adjust),i=!i):t.postData=o(t.prevData,t.filter,t.adjust);for(let t=r+1,e=n.length;t<e;t++){let a=n[t];if(("Invert"!==a.name||i)&&(a.prevData=n[t-1].postData,"Sharpness"===a.name?0===a.adjust[1]?a.postData=a.prevData:a.postData=N(a.prevData,a.adjust):a.postData=o(a.prevData,a.filter,a.adjust),t===e-1))return a.postData}return t.postData}{if("Threshold"===l||n[0]&&"Threshold"===n[0].name){s();let t=document.getElementsByClassName("manipulation-tools")[0];for(let e=0,a=t.children.length;e<a;e++){let a=t.children[e].children[0];if(a&&"range"===a.type){let t=a.parentElement.textContent.includes("Threshold"),e=a.parentElement.textContent.includes("Zoom"),n=a.parentElement.textContent.includes("Rotation");"Threshold"!==l||t||e||n?"Threshold"!==l&&t&&(a.value=0):a.value=0}}document.getElementById("filter-log").innerHTML="<h3> Filter Application Order <h3>"}n.push({filter:e,prevData:0===n.length?t:n[n.length-1].postData,adjust:a,name:l});let r=n[n.length-1];"Sharpness"===r.name?r.postData=N(r.prevData,r.adjust):r.postData=o(r.prevData,r.filter,r.adjust),"Invert"===r.name&&(i=!0);let d=document.createElement("p");return d.setAttribute("style","color: white; margin: 0;"),d.innerText=r.name,document.getElementById("filter-log").appendChild(d),r.postData}}function r(t,e){return document.createElement("canvas").getContext("2d").createImageData(t,e)}function o(t,e,a){let n=function(t,e,a){let n=t.length;for(let i=0;i<n;i+=4){let n=e(t[i],t[i+1],t[i+2],a);t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3]}return t}(new Uint8ClampedArray(t.data),e,a),i=r(t.width,t.height);return i.data.set(n),i}function d(t){return l(t,c,null,"Grayscale")}function c(t,e,a){let n=.3*t+.59*e+.11*a;return[n,n,n,255]}function h(t,e){return l(t,u,e,"Saturation")}function u(t,e,a,n){let i=-.01*n,s=Math.max(t,e,a);return[t!==s?t+(s-t)*i:t,e!==s?e+(s-e)*i:e,a!==s?a+(s-a)*i:a,255]}function m(t,e){return l(t,p,e,"Vibrance")}function p(t,e,a,n){let i=-1*n,s=Math.max(t,e,a),l=t+e+a/3,r=2*Math.abs(s-l)/255*i/100;return[t!==s?t+(s-t)*r:t,e!==s?e+(s-e)*r:e,a!==s?a+(s-a)*r:a,255]}function g(t,e){return l(t,v,e,"Brightness")}function v(t,e,a,n){let i=Math.floor(n/100*255);return[t+i,e+i,a+i,255]}function f(t,e){return l(t,b,e,"Contrast")}function b(t,e,a,n){let i=Math.pow((n+100)/100,2),s=t,l=e,r=a;return s/=255,s-=.5,s*=i,s+=.5,l/=255,l-=.5,l*=i,l+=.5,r/=255,r-=.5,r*=i,r+=.5,[s*=255,l*=255,r*=255,255]}function _(t){return l(t,C,null,"Invert")}function C(t,e,a){return[255-t,255-e,255-a,255]}function E(t,e){return l(t,y,e,"Threshold")}function y(t,e,a,n){let i=.2126*t+.7152*e+.0722*a>=n?255:0;return[i,i,i,255]}function A(t,e){return l(t,x,e,"Hue")}function x(t,e,a,n){let{h:i,s:s,v:l}=function(t,e,a){let n=t,i=e,s=a;n/=255,i/=255,s/=255;let l,r=Math.max(n,i,s),o=Math.min(n,i,s),d=r,c=r-o,h=0===r?0:c/r;if(r===o)l=0;else{switch(r){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4}l/=6}return{h:l,s:h,v:d}}(t,e,a);i*=100,i+=Math.abs(n),i%=100;let r=function(t,e,a){let n,i,s,l,r,o,d,c;switch(l=Math.floor(6*t),r=a*(1-e),o=a*(1-(i=6*t-l)*e),c=a*(1-(1-i)*e),l%6){case 0:d=a,s=c,n=r;break;case 1:d=o,s=a,n=r;break;case 2:d=r,s=a,n=c;break;case 3:d=r,s=o,n=a;break;case 4:d=c,s=r,n=a;break;case 5:d=a,s=r,n=o}return{r:Math.floor(255*d),g:Math.floor(255*s),b:Math.floor(255*n)}}(i/=100,s,l);return[r.r,r.g,r.b,255]}function T(t,e){return l(t,L,e,"Gamma")}function L(t,e,a,n){let i=n/100+1;return i<0&&(i*=-1),[255*Math.pow(t/255,i),255*Math.pow(e/255,i),255*Math.pow(a/255,i),255]}function w(t,e){return l(t,I,e,"CC Red")}function I(t,e,a,n){let i=n/100;return[i>0?t+(255-t)*i:t-t*Math.abs(i),e,a,255]}function D(t,e){return l(t,M,e,"CC Green")}function M(t,e,a,n){let i=n/100;return[t,i>0?e+(255-e)*i:e-e*Math.abs(i),a,255]}function k(t,e){return l(t,z,e,"CC Blue")}function z(t,e,a,n){let i=n/100;return[t,e,i>0?a+(255-a)*i:a-a*Math.abs(i),255]}function N(t,e,a){let n=Math.round(Math.sqrt(e.length)),i=Math.floor(n/2),s=t.data,l=t.width,o=t.height,d=l,c=o,h=r(d,c),u=h.data,m=a?1:0;for(let t=0;t<c;t++)for(let a=0;a<d;a++){let r=t,c=a,h=4*(t*d+a),p=0,g=0,v=0,f=0;for(let t=0;t<n;t++)for(let a=0;a<n;a++){let d=r+t-i,h=c+a-i;if(d>=0&&d<o&&h>=0&&h<l){let i=4*(d*l+h),r=e[t*n+a];p+=s[i]*r,g+=s[i+1]*r,v+=s[i+2]*r,f+=s[i+3]*r}}u[h]=p,u[h+1]=g,u[h+2]=v,u[h+3]=f+m*(255-f)}return h}function j(t,e){let a=e||100;return a/=100,0===e&&(a=0),l(t,N,[0,-a,0,-a,4*a+1,-a,0,-a,0],"Sharpness")}var S={onDoubleClick:function(t,e){t.addEventListener("dblclick",function(t){t.ctrlKey||e(t,R(t.currentTarget,t))});const a=V(X);t.addEventListener("contextmenu",function(t){t.preventDefault(),t.ctrlKey&&(a.isTriggered()?(a.reset(),e(t,R(t.currentTarget,t))):a.trigger())})},onPinch:function(t,e){let a=0;t.addEventListener("touchstart",function(t){t.preventDefault(),2===t.originalEvent.touches.length&&(a=O(t.originalEvent.touches[0].clientX,t.originalEvent.touches[0].clientY,t.originalEvent.touches[1].clientX,t.originalEvent.touches[1].clientY))}),t.addEventListener("touchmove",function(t){if(t.preventDefault(),2===t.originalEvent.touches.length){const n=t.originalEvent.touches,i=O(n[0].clientX,n[0].clientY,n[1].clientX,n[1].clientY),s=i-a;if(Math.abs(s)>0){const s={pageX:(n[0].clientX+n[1].clientX)/2,pageY:(n[0].clientY+n[1].clientY)/2};e(t,R(t.currentTarget,s),a,i)}}})},onDoubleTap:function(t,e){const a=V(B);let n=null;t.addEventListener("touchend",t=>{if(t.preventDefault(),a.isTriggered()){a.reset();const i={pageX:t.originalEvent.changedTouches[0].clientX,pageY:t.originalEvent.changedTouches[0].clientY},s=O(n.pageX,n.pageY,i.pageX,i.pageY);s<Y&&e(t,R(t.currentTarget,i)),n=null}else n={pageX:t.originalEvent.changedTouches[0].clientX,pageY:t.originalEvent.changedTouches[0].clientY},a.trigger()})}};const X=500,Y=50,B=250;function O(t,e,a,n){return Math.sqrt((a-t)*(a-t)+(n-e)*(n-e))}function V(t){let e=!1,a=null;return{trigger(){e=!0,n(),a=setTimeout(function(){e=!1,a=null},t)},isTriggered:()=>e,reset(){e=!1,n()}};function n(){null!==a&&(clearTimeout(a),a=null)}}function R(t,e){const a=t.getBoundingClientRect();return{left:e.pageX-a.left,top:e.pageY-a.top}}function H(t,e,a){let n;return function(){let i=this,s=arguments,l=a&&!n;clearTimeout(n),n=setTimeout(function(){n=null,a||t.apply(i,s)},e),l&&t.apply(i,s)}}a.d(e,"default",function(){return Z});class Z{constructor(t){this._core=t,this.pageToolsIcon=this.createIcon(),this._backdrop=null,this._page=null,this._mainImage=null,this._canvas=null,this._originalData=null,this.maxZoom=4,this.minZoom=1,this.zoom=1,this.rotate=0,this.mirrorHorizontal=1,this.mirrorVertical=1,this.boundEscapeListener=this.escapeListener.bind(this),this.currentImageURL=null}handleClick(t,e,a,n){document.body.style.overflow="hidden",this._backdrop=document.createElement("div"),this._backdrop.classList.add("manipulation-fullscreen"),this._sidebar=document.createElement("div"),this._sidebar.classList.add("manipulation-sidebar"),this._mainArea=document.createElement("div"),this._mainArea.classList.add("manipulation-main-area"),this._mainArea.classList.add("dragscroll"),this._mainArea.addEventListener("mousedown",()=>{this._mainArea.classList.add("grabbing")}),this._mainArea.addEventListener("mouseup",()=>{this._mainArea.classList.remove("grabbing")}),S.onDoubleClick(this._mainArea,this.handleDblClick.bind(this)),this._tools=document.createElement("div"),this._tools.classList.add("manipulation-tools"),this._backdrop.appendChild(this._sidebar),this._backdrop.appendChild(this._mainArea),this._backdrop.appendChild(this._tools),this._core.parentObject.appendChild(this._backdrop),document.addEventListener("keyup",this.boundEscapeListener),this._page=e.manifest.pages[n],this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._mainArea.appendChild(this._canvas),this._initializeSidebar(),this._initializeTools(),window.resetDragscroll(),this._loadImageInMainArea(t,this._page.url),e.inFullscreen&&(document.getElementById(e.selector+"tools").style.display="none")}handleDblClick(t){let e=t.ctrlKey?this.zoom-1:this.zoom+1;e<this.minZoom||e>this.maxZoom||(document.getElementById("zoom-slider").value=e,this.handleZoom(t,e,!0))}createIcon(){const t=document.createElement("div");t.classList.add("diva-manipulation-icon");let e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("x","0px"),e.setAttribute("y","0px"),e.setAttribute("viewBox","0 0 25 25"),e.id=`${this._core.settings.selector}manipulation-icon`;let a=document.createElementNS("http://www.w3.org/2000/svg","g");a.id=`${this._core.settings.selector}manipulation-icon-glyph`,a.setAttribute("transform","matrix(1, 0, 0, 1, -11.5, -11.5)"),a.setAttribute("class","diva-pagetool-icon");let n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","M27,21h-1v-9h-3v9h-1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h1h3h1c0.55,0,1-0.45,1-1v-3C28,21.45,27.55,21,27,21z M27,24h-5v-0.5h5V24z");let i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M35,16h-1v-4h-3v4h-1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h1h3h1c0.55,0,1-0.45,1-1v-3C36,16.45,35.55,16,35,16z M35,19h-5v-0.5h5V19z");let s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d","M19,26h-1V12h-3v14h-1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h1h3h1c0.55,0,1-0.45,1-1v-3C20,26.45,19.55,26,19,26zM19,29h-5v-0.5h5V29z");let l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("x","23"),l.setAttribute("y","27"),l.setAttribute("width","3"),l.setAttribute("height","9");let r=document.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("x","31"),r.setAttribute("y","22"),r.setAttribute("width","3"),r.setAttribute("height","14");let o=document.createElementNS("http://www.w3.org/2000/svg","rect");return o.setAttribute("x","15"),o.setAttribute("y","32"),o.setAttribute("width","3"),o.setAttribute("height","4"),a.appendChild(n),a.appendChild(i),a.appendChild(l),a.appendChild(s),a.appendChild(r),a.appendChild(o),e.appendChild(a),t.appendChild(e),t}escapeListener(t){27===t.keyCode&&(document.removeEventListener("keyup",this.boundEscapeListener),document.body.style.overflow="auto",this._core.parentObject.removeChild(this._backdrop),document.getElementById(`${this._core.settings.selector}tools`).style.display="block")}_initializeSidebar(){let t=`${this._page.url}full/150,/0/default.jpg`,e=this._page.otherImages.map(t=>`${t.url}full/150,/0/default.jpg`),a=document.createElement("div");a.classList.add("manipulation-sidebar-primary-image");let n=document.createElement("img");n.setAttribute("src",t);let i=document.createElement("div");i.textContent=this._page.il,a.appendChild(n),a.appendChild(i),this._sidebar.appendChild(a),a.addEventListener("click",()=>{this._loadImageInMainArea.call(this,event,this._page.url)}),e.map((t,e)=>{let a=document.createElement("div");a.classList.add("manipulation-sidebar-secondary-image");let n=document.createElement("img");n.setAttribute("src",t);let i=document.createElement("div");i.textContent=this._page.otherImages[e].il,a.appendChild(n),a.appendChild(i),this._sidebar.appendChild(a),a.addEventListener("click",()=>this._loadImageInMainArea.call(this,event,this._page.otherImages[e].url))})}_initializeTools(){let t=document.createElement("button");t.innerHTML="&#10006",t.classList.add("close-button"),t.setAttribute("style","display: absolute; top: 1em; right: 1em;"),t.onclick=(()=>{document.body.style.overflow="auto",this._core.parentObject.removeChild(this._backdrop),document.getElementById(this._core.settings.selector+"tools").style.display="block"});let e=document.createElement("h1");e.setAttribute("style","margin-bottom: 0.3em;"),e.classList.add("manipulation-tools-text"),e.innerText="Tools";let a=document.createElement("div"),n=document.createElement("input"),i=document.createTextNode("Zoom");a.classList.add("manipulation-tools-text"),n.setAttribute("type","range"),n.setAttribute("max",this.maxZoom),n.setAttribute("min",this.minZoom),n.setAttribute("value",this.zoom),n.id="zoom-slider",a.addEventListener("change",H(t=>this.handleZoom(t,t.target.value,!0),250)),a.appendChild(n),a.appendChild(i);let s=document.createElement("div"),l=document.createElement("input"),r=document.createTextNode("Rotation");s.classList.add("manipulation-tools-text"),l.setAttribute("type","range"),l.setAttribute("max",359),l.setAttribute("min",0),l.setAttribute("value",0),s.addEventListener("input",t=>{this.handleTransform(t,null,t.target.value)}),s.appendChild(l),s.appendChild(r);let o=document.createElement("div"),c=document.createElement("button");c.id="vertical-mirror-button";let u=document.createElement("button");u.id="horizontal-mirror-button",c.textContent="Mirror Vertically",u.textContent="Mirror Horizontally",c.addEventListener("click",t=>this.handleTransform(t,"vertical",this.rotate)),u.addEventListener("click",t=>this.handleTransform(t,"horizontal",this.rotate)),o.appendChild(c),o.appendChild(u);let p=document.createElement("div");p.setAttribute("style","margin: 1em 0;");let v=document.createElement("h3");v.setAttribute("style","margin: 0;"),v.classList.add("manipulation-tools-text"),v.innerText="Filters";let b=document.createElement("select");b.id="filter-select",b.style.backgroundColor="white";let C=document.createElement("option");C.value="colours",C.innerText="Color Filters";let y=document.createElement("option");y.value="threshold",y.innerText="Threshold",b.addEventListener("change",function(){let t=document.getElementsByClassName("color-filters");if("threshold"===this.value){for(let e=0,a=t.length;e<a;e++)t[e].style.display="none";ct.style.display="block"}else{for(let e=0,a=t.length;e<a;e++)t[e].style.display="block";ct.style.display="none"}}),b.appendChild(C),b.appendChild(y),p.appendChild(v),p.appendChild(b);let x=document.createElement("div");x.classList.add("color-filters");let L=document.createElement("button");L.textContent="Grayscale",L.addEventListener("click",t=>this._applyTransformationToImageData(t,d)),x.appendChild(L);let I=document.createElement("div");I.classList.add("color-filters"),I.classList.add("manipulation-tools-text");let M=document.createElement("input"),z=document.createTextNode("Saturation");M.setAttribute("type","range"),M.setAttribute("max",100),M.setAttribute("min",-100),M.setAttribute("value",0),M.addEventListener("change",H(t=>this._applyTransformationToImageData(t,h,t.target.value),250)),I.appendChild(M),I.appendChild(z);let N=document.createElement("div");N.classList.add("color-filters"),N.classList.add("manipulation-tools-text");let S=document.createElement("input"),X=document.createTextNode("Vibrance");S.setAttribute("type","range"),S.setAttribute("max",100),S.setAttribute("min",-100),S.setAttribute("value",0),S.addEventListener("change",H(t=>this._applyTransformationToImageData(t,m,t.target.value),250)),N.appendChild(S),N.appendChild(X);let Y=document.createElement("div");Y.classList.add("color-filters"),Y.classList.add("manipulation-tools-text");let B=document.createElement("input"),O=document.createTextNode("Brightness");B.setAttribute("type","range"),B.setAttribute("max",100),B.setAttribute("min",-100),B.setAttribute("value",0),B.addEventListener("change",H(t=>this._applyTransformationToImageData(t,g,t.target.value),250)),Y.appendChild(B),Y.appendChild(O);let V=document.createElement("div");V.classList.add("color-filters"),V.classList.add("manipulation-tools-text");let R=document.createElement("input"),Z=document.createTextNode("Contrast");R.setAttribute("type","range"),R.setAttribute("max",100),R.setAttribute("min",-100),R.setAttribute("value",0),R.addEventListener("change",H(t=>this._applyTransformationToImageData(t,f,t.target.value),250)),V.appendChild(R),V.appendChild(Z);let P=document.createElement("div");P.classList.add("color-filters");let F=document.createElement("button");F.textContent="Invert Colours",F.addEventListener("click",t=>this._applyTransformationToImageData(t,_)),P.appendChild(F);let G=document.createElement("div");G.classList.add("color-filters"),G.classList.add("manipulation-tools-text");let $=document.createElement("input"),U=document.createTextNode("Sharpness");$.setAttribute("type","range"),$.setAttribute("max",100),$.setAttribute("min",0),$.setAttribute("value",0),$.addEventListener("change",H(t=>this._applyTransformationToImageData(t,j,t.target.value),250)),G.appendChild($),G.appendChild(U);let q=document.createElement("div");q.classList.add("color-filters"),q.classList.add("manipulation-tools-text");let K=document.createElement("input"),W=document.createTextNode("Hue");K.setAttribute("type","range"),K.setAttribute("max",100),K.setAttribute("min",0),K.setAttribute("value",0),K.addEventListener("change",H(t=>this._applyTransformationToImageData(t,A,t.target.value),250)),q.appendChild(K),q.appendChild(W);let J=document.createElement("div");J.classList.add("color-filters"),J.classList.add("manipulation-tools-text");let Q=document.createElement("input"),tt=document.createTextNode("Gamma");Q.setAttribute("type","range"),Q.setAttribute("max",300),Q.setAttribute("min",-100),Q.setAttribute("value",0),Q.addEventListener("change",H(t=>this._applyTransformationToImageData(t,T,t.target.value),250)),J.appendChild(Q),J.appendChild(tt);let et=document.createElement("div");et.classList.add("color-filters"),et.classList.add("manipulation-tools-text");let at=document.createElement("input"),nt=document.createTextNode("CC Red");at.setAttribute("type","range"),at.setAttribute("max",100),at.setAttribute("min",-100),at.setAttribute("value",0);let it=document.createElement("div");it.classList.add("color-filters"),it.classList.add("manipulation-tools-text");let st=document.createElement("input"),lt=document.createTextNode("CC Green");st.setAttribute("type","range"),st.setAttribute("max",100),st.setAttribute("min",-100),st.setAttribute("value",0);let rt=document.createElement("div");rt.classList.add("color-filters"),rt.classList.add("manipulation-tools-text");let ot=document.createElement("input"),dt=document.createTextNode("CC Blue");ot.setAttribute("type","range"),ot.setAttribute("max",100),ot.setAttribute("min",-100),ot.setAttribute("value",0),at.addEventListener("change",H(t=>this._applyTransformationToImageData(t,w,t.target.value),250)),st.addEventListener("change",H(t=>this._applyTransformationToImageData(t,D,t.target.value),250)),ot.addEventListener("change",H(t=>this._applyTransformationToImageData(t,k,t.target.value),250)),et.appendChild(at),et.appendChild(nt),it.appendChild(st),it.appendChild(lt),rt.appendChild(ot),rt.appendChild(dt);let ct=document.createElement("div");ct.style.display="none";let ht=document.createElement("input"),ut=document.createTextNode("Threshold");ct.classList.add("manipulation-tools-text"),ht.setAttribute("type","range"),ht.setAttribute("max",255),ht.setAttribute("min",64),ht.setAttribute("value",0),ht.addEventListener("change",H(t=>this._applyTransformationToImageData(t,E,t.target.value),250)),ct.appendChild(ht),ct.appendChild(ut);let mt=document.createElement("button");mt.setAttribute("style","margin-top: 1em;");let pt=document.createTextNode("Reset");mt.appendChild(pt),mt.onclick=(t=>{this._loadImageInMainArea(t,this.currentImageURL)});let gt=document.createElement("div");gt.classList.add("manipulation-tools-text"),gt.innerHTML="<h3> Filter Application Order <h3>",gt.id="filter-log",this._tools.appendChild(t),this._tools.appendChild(e),this._tools.appendChild(a),this._tools.appendChild(s),this._tools.appendChild(o),this._tools.appendChild(p),this._tools.appendChild(x),this._tools.appendChild(P),this._tools.appendChild(I),this._tools.appendChild(N),this._tools.appendChild(Y),this._tools.appendChild(V),this._tools.appendChild(G),this._tools.appendChild(q),this._tools.appendChild(J),this._tools.appendChild(et),this._tools.appendChild(it),this._tools.appendChild(rt),this._tools.appendChild(ct),this._tools.appendChild(mt),this._tools.appendChild(gt),this._tools.setAttribute("style","padding: 0 1em;")}_resetSliders(){for(let t=0,e=this._tools.children.length;t<e;t++){let e=this._tools.children[t].children[0];e&&"range"===e.type&&(e.value=0)}document.getElementById("filter-log").innerHTML="<h3> Filter Application Order <h3>",this.zoom=1,this.rotate=0,this.mirrorHorizontal=1,this.mirrorVertical=1,this.handleTransform(null,null,this.rotate),s()}_loadImageInMainArea(t,e){this.currentImageURL=e;let a=`${e}full/full/0/default.jpg`;this._mainImage=new Image,this._mainImage.crossOrigin="anonymous",this._mainImage.addEventListener("load",()=>{this._canvas.size=Math.sqrt(this._mainImage.width*this._mainImage.width+this._mainImage.height*this._mainImage.height),this._canvas.width=this._canvas.size,this._canvas.height=this._canvas.size,this._canvas.cornerX=(this._canvas.size-this._mainImage.width)/2,this._canvas.cornerY=(this._canvas.size-this._mainImage.height)/2,this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._ctx.drawImage(this._mainImage,this._canvas.cornerX,this._canvas.cornerY,this._mainImage.width,this._mainImage.height),this._originalData=this._ctx.getImageData(this._canvas.cornerX,this._canvas.cornerY,this._mainImage.width,this._mainImage.height),this._alteredData=this._originalData,this.dims={w:this._canvas.width,h:this._canvas.height},this._mainImage=null,this.centerView()}),this._mainImage.src=a,this._resetSliders()}_applyTransformationToImageData(t,e,a){let n,i=this._canvas.width,s=this._canvas.height;a&&(n=parseInt(a,10));let l=e(this._originalData,n);this._alteredData=l,this._ctx.clearRect(0,0,i,s),this._ctx.putImageData(l,this._canvas.cornerX,this._canvas.cornerY),this.handleZoom(t,this.zoom,!1)}handleZoom(t,e,a){let n=.5*e+.5,i=this.dims.w,s=this.dims.h,l=document.createElement("canvas"),r=l.getContext("2d");l.width=i,l.height=s,r.putImageData(this._alteredData,this._canvas.cornerX,this._canvas.cornerY),this._canvas.width=i*n,this._canvas.height=s*n,this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._ctx.scale(n,n),this._ctx.drawImage(l,0,0);let o=e>this.zoom;if(this.zoom=parseInt(e,10),a){let e=t.target.getBoundingClientRect(),a=t.clientX-e.left,n=t.clientY-e.top;if(!o){let t=(.5*this.zoom+.5)/(.5*(this.zoom+1)+.5);a*=t,n*=t}this.centerView(a,n,o)}}centerView(t,e,a){let n=document.getElementsByClassName("manipulation-main-area")[0];if(a){let a=(.5*this.zoom+.5)/(.5*(this.zoom-1)+.5);t*=a,e*=a}let i=this._canvas.height/2,s=e-i,l=t-i,r=this._canvas.height,o=this._canvas.width,d=(r-n.clientHeight)/2,c=(o-n.clientWidth)/2,h=e?d+s:d,u=t?c+l:c;n.scrollTop=h,n.scrollLeft=u}handleTransform(t,e,a){let n=document.getElementsByClassName("manipulation-main-area")[0].children[0];"vertical"===e?this.mirrorVertical*=-1:"horizontal"===e&&(this.mirrorHorizontal*=-1),n.style.transform="scale("+this.mirrorHorizontal+","+this.mirrorVertical+") rotate("+a+"deg)",this.rotate=a}}Z.prototype.pluginName="manipulation",Z.prototype.isPageTool=!0,window.Diva.ManipulationPlugin=Z}]);
//# sourceMappingURL=manipulation.js.map