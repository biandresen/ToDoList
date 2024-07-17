(()=>{"use strict";var t={669:(t,n,e)=>{e.d(n,{A:()=>s});var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());i.push([t.id,'/* RESET */\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nbutton,\ndiv,\ni,\nlabel,\ninput {\n  font-size: 16px;\n  font-family: var(--main-font);\n}\n/* VARIABLES */\n:root {\n  --background-color: #26355d;\n  --primary-color: #ff8f00;\n  --primary-faded: hsla(34, 100%, 45%, 1);\n  --secondary-color: hsla(34, 100%, 45%, 1);\n  --detail-color: #ffdb00;\n  --text-color: white;\n  --success-color: #0a6847;\n  --warning-color: #e6c700;\n  --error-color: #b31312;\n  --box-shadow: 0px 5px 5px rgb(73, 73, 73);\n  --box-shadow-top: 0px 0px 5px 5px rgb(73, 73, 73);\n  --text-shadow: 0px 2px 2px rgb(73, 73, 73);\n  --main-font: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n  --text-title: 24px bold;\n  --text-body: 18px bold;\n  --text-small: 14px;\n  --margin-left1: 15px;\n}\nhtml {\n  height: -webkit-fill-available;\n  margin: auto;\n}\nbody {\n  height: 100vh;\n  height: 100svh;\n  /* height: 100dvh; */\n  /* height: 100%; */\n  /* width: 100%; */\n  background: var(--background-color);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.9fr 0.1fr;\n}\n.container {\n  grid-row: 1 / 2;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--secondary-color);\n  display: grid;\n  grid-template-rows: 0.3fr 5.55fr 0.5fr;\n  grid-template-columns: 1fr;\n}\n/* HEADER AREA */\n.header {\n  background: var(--primary-color);\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  box-shadow: var(--box-shadow);\n  z-index: 10;\n}\n.profile-area {\n  grid-column: 1 / 2;\n  display: flex;\n  align-items: center;\n}\n.profile-picture {\n  display: grid;\n  background: var(--detail-color);\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: var(--margin-left1);\n  margin-right: 8px;\n}\n.fa-user {\n  font-size: 26px;\n  color: var(--background-color);\n  place-self: center;\n}\n.profile-names {\n  color: var(--text-color);\n}\n.profile-username {\n  font: var(--text-title);\n  font-weight: 800;\n  margin: 0;\n  padding: 0;\n}\n.profile-id {\n  font-size: 12px;\n  font-weight: 100;\n  margin: 0;\n  padding: 0;\n}\n.app-name-area {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n.app-name {\n  color: var(--detail-color);\n  font: var(--text-title);\n  font-weight: 1000;\n  letter-spacing: 0.5px;\n  margin: 20px 20px 0 0;\n}\n.menu-button {\n  cursor: pointer;\n  color: var(--text-color);\n  border: none;\n  background: transparent;\n  font-weight: 800;\n  font-size: 12px;\n  margin: 0 20px 10px 0;\n}\n.menu-expand-text {\n  margin: 0 5px 0 0;\n  position: relative;\n  bottom: 4px;\n}\n.nav {\n  background: var(--primary-faded);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  height: 109%;\n}\n.filter-area {\n  margin-top: 15px;\n  margin-left: var(--margin-left1);\n}\n.filters-button,\n.projects-button {\n  cursor: pointer;\n  margin-bottom: 10px;\n  color: var(--text-color);\n  background: transparent;\n  border: none;\n  font: var(--text-title);\n  font-weight: 800;\n  text-decoration: underline;\n}\n.filters,\n.projects {\n  color: var(--text-color);\n  margin-left: 10px;\n}\n\n.projects.hide,\n.filters.hide,\n.nav.hide {\n  display: none;\n}\n.all-tasks,\n.today,\n.tomorrow,\n.this-week,\n.this-month,\n.project-list-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  border-bottom: 1px dotted var(--primary-color);\n}\n.all-tasks-button,\n.today-button,\n.tomorrow-button,\n.week-button,\n.month-button,\n.project-list-item-button {\n  cursor: pointer;\n  color: var(--text-color);\n  background: transparent;\n  border: none;\n  font: var(--text-body);\n  font-weight: 800;\n}\nh4 {\n  margin-right: 15px;\n}\n.project-area {\n  margin-top: 10px;\n  margin-left: var(--margin-left1);\n}\n.content-area {\n  display: none;\n  grid-template-rows: 1fr;\n  background-color: #fff;\n}\n.content-area.hide {\n  display: grid;\n}\n.task-area {\n  display: flex;\n  flex-direction: column;\n  background: var(--secondary-color);\n}\n.task-list {\n  margin: 15px 15px 10px 15px;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  box-shadow: var(--box-shadow);\n}\n.task-list-item {\n  display: flex;\n  flex-direction: column;\n  background: var(--primary-color);\n  border-radius: 5px;\n  color: var(--text-color);\n}\n.task-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.task-priority-color {\n  position: absolute;\n  width: 10px;\n  height: 40px;\n  border-radius: 3px;\n}\n.task-priority-color.low {\n  background-color: var(--success-color);\n}\n.task-priority-color.med {\n  background-color: var(--warning-color);\n}\n.task-priority-color.high {\n  background-color: var(--error-color);\n}\n.task-field {\n  cursor: pointer;\n  display: flex;\n  margin-left: 15px;\n}\n.task-text {\n  align-self: center;\n  width: 110px;\n  overflow: auto;\n}\n.check-box-unchecked {\n  align-self: center;\n  margin-right: 5px;\n  font-size: 26px;\n}\n.check-box-unchecked.hide {\n  display: none;\n}\n.check-box-checked {\n  align-self: center;\n  margin-right: 5px;\n  font-size: 26px;\n  color: red;\n  display: none;\n}\n.check-box-checked.hide {\n  display: inline-block;\n}\n.low-opacity {\n  opacity: 0.5;\n}\n.line-through {\n  text-decoration: line-through;\n}\n.task-box-buttons {\n  position: relative;\n  display: flex;\n  gap: 45px;\n  margin-right: 20px;\n}\n.expand-button {\n  display: flex;\n  background: transparent;\n  border-style: none;\n  color: var(--text-color);\n  font-weight: 800;\n  cursor: pointer;\n}\n.filter-expand,\n.projects-expand {\n  transform: rotate(180deg);\n}\n.fa-caret-down {\n  color: var(--detail-color);\n  font-size: 24px;\n}\n.fa-pen-to-square,\n.fa-trash {\n  color: var(--detail-color);\n  font-size: 17px;\n  align-self: center;\n  margin-top: 3px;\n}\n.edit-expand-icon {\n  display: flex;\n}\n.rotate-180 {\n  transform: rotate(180deg);\n}\n.rotate-0 {\n  transform: rotate(0deg);\n}\n.edit-expand-icon::after {\n  content: "Edit";\n  font-family: var(--main-font);\n  font-size: 14px;\n  color: var(--text-color);\n  align-self: center;\n  position: relative;\n  right: 47px;\n}\n.delete-expand-icon {\n  display: flex;\n  width: 10px;\n}\n.delete-expand-icon::after {\n  content: "Delete";\n  font-family: var(--main-font);\n  font-size: 14px;\n  color: var(--text-color);\n  align-self: center;\n  align-self: center;\n  position: relative;\n  right: 60px;\n}\n.task-info-area {\n  display: none;\n  border-radius: 5px;\n  background: var(--primary-faded);\n  padding-bottom: 5px;\n  box-shadow: var(--box-shadow);\n}\n.task-info-area.hide {\n  display: inline-block;\n}\n.task-note-area,\n.task-extra-info {\n  position: relative;\n  background: var(--primary-color);\n  border-radius: 5px;\n  margin: 10px 20px 10px 20px;\n  padding-bottom: 5px;\n  box-shadow: var(--box-shadow);\n  overflow: auto;\n  text-wrap: wrap;\n  max-width: 320px;\n}\n.note-header,\n.project-header,\n.due-date-header,\n.priority-header,\n.color-info-header {\n  font: var(--text-body);\n  font-weight: 800;\n  padding-top: 5px;\n  margin: 0px 0 10px 10px;\n}\n.note-paragraph {\n  margin: 5px 0 0 10px;\n  font: var(--text-small);\n  height: auto;\n  max-width: 80%;\n  text-wrap: wrap;\n}\n.project-info,\n.due-date-info {\n  display: flex;\n}\n.project-paragraph,\n.due-date-paragraph {\n  margin: 8px 0 0 5px;\n  font: var(--text-small);\n}\n.color-info-icon {\n  border-radius: 50%;\n  font-size: 24px;\n  margin-left: 8px;\n  position: relative;\n  top: 5px;\n}\n.priority-info {\n  display: flex;\n  justify-content: space-between;\n}\n.priority-boxes {\n  display: flex;\n  margin: 5px 10px 10px 0;\n}\n.priority-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 60px;\n  height: auto;\n  margin: 0px 0 0 5px;\n  font-size: var(--text-small);\n  padding: 2px;\n  border-radius: 5px;\n  border-style: none;\n  color: var(--text-color);\n  font-weight: 800;\n}\n.low-priority-box {\n  background: var(--success-color);\n}\n.med-priority-box {\n  background: var(--warning-color);\n}\n.high-priority-box {\n  background: var(--error-color);\n}\n.new-task-button {\n  position: fixed;\n  right: 20px;\n  bottom: 90px;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  color: var(--background-color);\n  box-shadow: var(--box-shadow);\n  background: var(--detail-color);\n  font-size: 50px;\n  border-style: none;\n  cursor: pointer;\n  z-index: 10;\n}\n.color-info {\n  display: flex;\n  position: absolute;\n  top: 0px;\n  left: 200px;\n}\n.modal {\n  width: max(375px, 98%);\n  height: max(290px, 50%);\n  margin: auto;\n  background: var(--primary-color);\n  border-color: var(--detail-color);\n  border-radius: 15px;\n}\n.modal-content {\n  padding: 15px 0 0 8px;\n  color: var(--text-color);\n}\n.new-task-area,\n.new-project-area,\n.new-note-area,\n.new-date-area {\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n}\n.new-task-form {\n  width: 86vw;\n  height: 45vh;\n  display: grid;\n  overflow-y: hidden;\n  display: flex;\n}\n.task-left-side {\n  display: flex;\n  flex-direction: column;\n}\n.new-task-label,\n.new-note-label,\n.new-project-label,\n.new-color-label,\n.new-date-label,\n.new-priority-label {\n  font: var(--text-body);\n  font-weight: 800;\n  text-shadow: var(--text-shadow);\n}\n.new-task-input,\n.new-project-input,\n.new-note-input,\n.new-date-input {\n  background: var(--background-color);\n  outline-color: var(--detail-color);\n  color: var(--text-color);\n  font: var(--text-small);\n  width: 145px;\n  border-radius: 7px;\n  margin: 5px 0 10px 0;\n  text-indent: 6px;\n}\n.new-note-area {\n  height: 100%;\n}\n.new-note-input {\n  overflow: hidden;\n  height: 65%;\n}\n.new-color-input {\n  background: transparent;\n  border-color: transparent;\n  width: 25px;\n  margin-top: 10px;\n}\n.new-priority-area {\n  margin-top: 25px;\n  display: flex;\n  flex-direction: column;\n}\n.priority-input {\n  -webkit-appearance: none;\n  appearance: none;\n  border-radius: 5px;\n  width: 40px;\n  height: 20px;\n  padding-top: 2px;\n  margin: 5px 10px 0 0;\n  color: var(--text-color);\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.priority-input:checked {\n  border: 2px solid black;\n  transform: scale(1.1);\n  padding-bottom: 17px;\n}\n.new-priority-input-low {\n  background: var(--success-color);\n}\n.new-priority-input-med {\n  background: var(--warning-color);\n}\n.new-priority-input-high {\n  background: var(--error-color);\n}\n.new-priority-input-low::before {\n  content: "LOW";\n  margin-left: 4px;\n}\n.new-priority-input-med::before {\n  content: "MED";\n  margin-left: 5px;\n}\n.new-priority-input-high::before {\n  content: "HIGH";\n  margin-left: 3px;\n}\n.new-task-submit-area {\n  margin-top: 15px;\n}\n.new-task-cancel,\n.new-task-create {\n  margin-top: 10px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: var(--text-color);\n  font: var(--text-body);\n  font-weight: 800;\n  text-decoration: underline;\n}\n.footer {\n  background: var(--primary-color);\n  color: var(--text-color);\n  grid-row: 2 / 3;\n  position: sticky;\n  height: 100%;\n  box-shadow: var(--box-shadow-top);\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: 10px;\n}\n.color-theme {\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-size: 14px;\n  border-style: none;\n  font-weight: 800;\n  color: var(--background-color);\n  background: var(--detail-color);\n  transition: transform 0.3s ease-in-out;\n}\n.color-theme:hover {\n  transform: scale(1.1);\n}\n.priority-border {\n  border: 3px solid black;\n}\n.fa-github {\n  color: var(--background-color);\n  font-size: 25px;\n  margin: 0 0 0 5px;\n  transition: transform 0.3s ease-in-out;\n}\n.fa-github:hover {\n  transform: scale(1.2);\n}\n',""]);const s=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),n.push(c))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var l=t[s],d=o.base?l[0]+o.base:l[0],c=a[d]||0,p="".concat(d," ").concat(c);a[d]=c+1;var u=e(p),x={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(x);else{var f=r(x,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var l=o(t,r),d=0;d<a.length;d++){var c=e(a[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=l}}},659:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return t[o](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,e.d({},{Tv:()=>lt,ZE:()=>U,yl:()=>tt,gj:()=>it,K$:()=>et,ig:()=>nt,Yb:()=>st,MI:()=>ot,ju:()=>rt,pN:()=>at});var o=e(72),r=e.n(o),a=e(825),i=e.n(a),s=e(659),l=e.n(s),d=e(56),c=e.n(d),p=e(540),u=e.n(p),x=e(113),f=e.n(x),h=e(669),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const m=function(t,n,e=""){const o=document.createElement(t);return o.classList.add(n),o.textContent=e,o},y=["false"];let b=0;function v(){document.querySelector("[data-nav]").classList.toggle("hide"),document.querySelector("[data-content-area]").classList.toggle("hide"),document.querySelector("[data-menu-expand]").classList.toggle("rotate-180")}function k(){"allTasks"==lt[0]?T(nt):"todayTasks"==lt[0]?T(rt):"tomorrowTasks"==lt[0]?T(at):"monthTasks"==lt[0]?T(it):"project"==lt[0]&&T(ot)}document.querySelector("[data-theme-button]").addEventListener("click",(function(){const t=document.documentElement;"#161B22"===t.style.getPropertyValue("--primary-color")?(t.style.setProperty("--primary-color","#ff8f00"),t.style.setProperty("--primary-faded","hsla(34, 100%, 45%, 1)"),t.style.setProperty("--secondary-color","#af47d2"),t.style.setProperty("--detail-color","#ffdb00"),t.style.setProperty("--text-color","white"),t.style.setProperty("--background-color","#26355d"),t.style.setProperty("--success-color","#0a6847"),t.style.setProperty("--warning-color","#e6c700"),t.style.setProperty("--error-color","#b31312"),t.style.setProperty("--box-shadow","0px 5px 5px rgb(73, 73, 73)"),t.style.setProperty("--box-shadow-top","0px 0px 5px 5px rgb(73, 73, 73)")):(t.style.setProperty("--primary-color","#161B22"),t.style.setProperty("--primary-faded","#0D1117"),t.style.setProperty("--secondary-color","#0D1117"),t.style.setProperty("--detail-color","#FF7B72"),t.style.setProperty("--text-color","#FFA657"),t.style.setProperty("--background-color","#443b3e"),t.style.setProperty("--success-color","#014421"),t.style.setProperty("--warning-color","#594D50"),t.style.setProperty("--error-color","#b31312"),t.style.setProperty("--box-shadow","0px 5px 5px black"),t.style.setProperty("--box-shadow-top","0px 0px 5px 5px black"))}));let w=P(),[,L,C]=w.split("-");const E=document.querySelector("[data-all-tasks-number]"),N=document.querySelector("[data-today-number]"),j=document.querySelector("[data-tomorrow-number]"),S=document.querySelector("[data-month-number]");function q(){et.forEach((t=>{let n=t.getAttribute("name"),e=0;for(let t=0;t<nt.length;t++)nt[t].getElementsByClassName("project-paragraph")[0].innerText===n&&e++;et.forEach((t=>{t.getAttribute("name")===n&&(t.querySelector(".project-span-h4").textContent=e)}))})),function(){const t=document.querySelector("[data-projects-list]");t.innerHTML="",et.forEach((t=>{const n=t.getAttribute("id");0==t.querySelector(".project-span-h4").textContent&&et.splice(n,1)})),t.append(...et)}(),E.textContent=nt.length,N.textContent=(nt.forEach((t=>{let n=t.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent;rt.includes(t)||n!==w||rt.push(t)})),rt.length),j.textContent=(nt.forEach((t=>{let n=t.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent,[,,e]=n.split("-");at.includes(t)||Number(e)!==Number(C)+1||at.push(t)})),at.length),S.textContent=(nt.forEach((t=>{let n=t.childNodes[1].childNodes[1].childNodes[1].childNodes[1].textContent,[,e]=n.split("-");it.includes(t)||Number(e)!==Number(L)||it.push(t)})),it.length)}function A(t){T(t),v()}function P(){let t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function T(t){const n=document.querySelector("[data-task-list]");n.innerHTML="",n.append(...t)}document.querySelector("[data-projects-list]");const B=function(t,n,e,o,r,a,i,s=!1){this.title=t||"Task",this.note=n||"...",this.project=e||"Project",this.date=o,this.priority=r,this.color=a,this.checked=s,this.id=i},z="submit",M=document.querySelector("[data-new-task-form]"),I=document.querySelector("[data-new-task-input]"),D=document.querySelector("[data-new-note-input]"),H=document.querySelector("[data-new-project-input]"),F=document.querySelector("[data-new-date-input]"),O=document.querySelector("[data-new-color-input]");function R(t){if(t.target.getAttribute("type")===z&&"true"===y[0])$(function(t){const n=nt.find((n=>n.getAttribute("id")==t)),e=n.getElementsByClassName("task-priority-color")[0],o=n.getElementsByClassName("task-text")[0],r=n.getElementsByClassName("note-paragraph")[0],a=n.getElementsByClassName("project-paragraph")[0],i=n.getElementsByClassName("due-date-paragraph")[0],s=n.getElementsByClassName("color-info-icon")[0],l=n.getElementsByClassName("low-priority-box")[0],d=n.getElementsByClassName("med-priority-box")[0],c=n.getElementsByClassName("high-priority-box")[0],p=n.getElementsByClassName("check-box-unchecked")[0],u=n.getElementsByClassName("check-box-checked")[0],x=M[0].value,f=M[1].value,h=M[2].value,g=M[3].value,m=M[4].value,y=M[5],b=M[6],v=[l,d,c];return o.textContent=x,r.textContent=f,a.textContent=h,i.textContent=g,s.style.color=m,p.style.color=m,u.style.color=m,v.forEach((t=>{t.classList.contains("priority-border")&&t.classList.remove("priority-border")})),1==y.checked?(l.classList.add("priority-border"),G(e),e.classList.add("low")):1==b.checked?(d.classList.add("priority-border"),G(e),e.classList.add("med")):(c.classList.add("priority-border"),G(e),e.classList.add("high")),tt.close(),n}(b).querySelector(".project-paragraph").textContent),k(),q(),y[0]="false";else if(t.target.getAttribute("type")===z&&"false"==y[0]){const t=function(){const t=document.querySelector('input[name="priority"]:checked').getAttribute("data-value");return new B(I.value,D.value,H.value,F.value,t,O.value)}();(function(t){const n=nt.length,e=m("li","task-list-item");e.setAttribute("id",n);const o=m("div","task-header"),r=m("div","task-priority-color"),a=m("div","task-field"),i=m("i","fa-solid");i.classList.add("fa-circle"),i.classList.add("check-box-unchecked");const s=m("i","fa-solid");s.classList.add("fa-circle-check"),s.classList.add("check-box-checked");const l=m("h2","task-text"),d=m("div","task-box-buttons"),c=m("button","task-expand-button");c.classList.add("expand-button");const p=m("i","fa-solid");p.classList.add("fa-caret-down"),p.classList.add("task-expand-icon");const u=m("div","edit"),x=m("button","edit-button");x.classList.add("expand-button"),x.setAttribute("data-edit-flag","false");const f=m("i","fa-solid");f.classList.add("fa-pen-to-square"),f.classList.add("edit-expand-icon");const h=m("div","delete"),g=m("button","delete-button");g.classList.add("expand-button");const v=m("i","fa-solid");v.classList.add("fa-trash"),v.classList.add("delete-expand-icon");const w=m("div","task-info-area"),L=m("div","task-note-area"),C=m("h2","note-header"),E=m("p","note-paragraph"),N=m("div","task-extra-info"),j=m("div","project-info"),S=m("h3","project-header"),A=m("p","project-paragraph"),T=m("div","due-date-info"),B=m("h3","due-date-header"),z=m("p","due-date-paragraph"),I=m("div","priority-info"),D=m("h3","priority-header"),H=m("div","priority-boxes"),F=m("div","low-priority-box");F.classList.add("priority-box");const O=m("div","med-priority-box");O.classList.add("priority-box");const R=m("div","high-priority-box");R.classList.add("priority-box");const $=m("div","color-info"),G=m("h3","color-info-header"),W=m("i","color-info-icon");W.classList.add("fa-solid"),W.classList.add("fa-circle"),l.textContent=t.title,C.textContent="Note",E.textContent=t.note,S.textContent="Project: ",A.textContent=t.project,B.textContent="Due Date: ",""==t.date?z.textContent=P():z.textContent=t.date,G.textContent="Color: ",W.style.color=t.color,i.style.color=t.color,s.style.color=t.color,D.textContent="Priority: ",F.textContent="LOW",O.textContent="MED",R.textContent="HIGH","LOW"===t.priority?(F.classList.add("priority-border"),r.classList.add("low")):"MED"===t.priority?(O.classList.add("priority-border"),r.classList.add("med")):(R.classList.add("priority-border"),r.classList.add("high")),e.append(o,w),o.append(r,a,d),a.append(i,s,l),d.append(c,u,h),c.append(p),u.appendChild(x),x.appendChild(f),h.appendChild(g),g.appendChild(v),w.append(L,N),w.append(C,E),N.append(j,T,I),L.append(C,E),j.append(S,A),T.append(B,z),I.append(D,H,$),H.append(F,O,R),$.append(G,W),nt.push(e),c.addEventListener("click",(()=>{!function(t,n){t.classList.toggle("hide"),n.classList.toggle("rotate-180")}(w,p)})),x.addEventListener("click",(t=>{!function(t){y[0]="true",b=t.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("id");const n=nt.find((t=>t.getAttribute("id")==b)),e=n.getElementsByClassName("task-text")[0],o=n.getElementsByClassName("note-paragraph")[0],r=n.getElementsByClassName("project-paragraph")[0],a=n.getElementsByClassName("due-date-paragraph")[0],i=n.getElementsByClassName("color-info-icon")[0],s=n.getElementsByClassName("low-priority-box")[0],l=n.getElementsByClassName("med-priority-box")[0],d=M[0],c=M[1],p=M[2],u=M[3],x=M[4],f=M[5],h=M[6],g=M[7];d.setAttribute("value",e.textContent),c.textContent=o.textContent,p.setAttribute("value",r.textContent),u.setAttribute("value",a.textContent),x.setAttribute("value",i.style.color),s.classList.contains("priority-border")?f.checked=!0:l.classList.contains("priority-border")?h.checked=!0:g.checked=!0,tt.showModal()}(t)})),g.addEventListener("click",(t=>{!function(t){const n=t.target.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("id"),e=nt.findIndex((t=>t.id===n)),o=rt.findIndex((t=>t.id===n)),r=at.findIndex((t=>t.id===n)),a=it.findIndex((t=>t.id===n)),i=ot.findIndex((t=>t.id===n));nt.splice(e,1),rt.splice(o,1),at.splice(r,1),it.splice(a,1),ot.splice(i,1),k(),q()}(t)})),a.addEventListener("click",(()=>{!function(t,n,e,o){n.classList.toggle("hide"),t.classList.toggle("hide"),e.classList.toggle("low-opacity"),o.classList.toggle("line-through")}(s,i,o,l)}))})(t),$(t.project),k(),q(),tt.close()}else tt.close();M.reset()}function $(t){et.some((n=>n.getAttribute("name")==t))||function(t){const n=et.length,e=m("li","project-list-item");e.setAttribute("id",n),e.setAttribute("name",t);const o=m("button","project-list-item-button",t),r=m("span","project-task-number-span"),a=m("h4","project-span-h4");e.append(o,r),r.appendChild(a),et.push(e),o.addEventListener("click",(t=>{!function(t){const n=t.target.textContent;nt.forEach((t=>{t.childNodes[1].childNodes[1].childNodes[0].childNodes[1].textContent==n&&st.push(t)}))}(t)})),e.addEventListener("click",(t=>{!function(t){ot.length=0,lt[0]="project";const n=t.target.textContent;U.textContent=n,nt.forEach((t=>{t.childNodes[1].childNodes[1].childNodes[0].childNodes[1].textContent==n&&ot.push(t)})),A(ot)}(t)}))}(t)}function G(t){t.classList.remove("low"),t.classList.remove("med"),t.classList.remove("high")}const W=document.querySelector("[data-menu-button]"),U=document.querySelector("[data-menu-expand-text]"),V=document.querySelector("[data-filters-button]"),Y=document.querySelector("[data-all-tasks-button]"),_=document.querySelector("[data-today-button]"),J=document.querySelector("[data-tomorrow-button]"),K=document.querySelector("[data-month-button]"),Z=document.querySelector("[data-projects-button]"),Q=document.querySelector("[data-new-task-button]"),X=document.querySelector("[data-new-task-submit-area]"),tt=document.querySelector("[data-modal]"),nt=[],et=[],ot=[],rt=[],at=[],it=[],st=[],lt=["allTasks"];W.addEventListener("click",v),V.addEventListener("click",(function(){document.querySelector("[data-filters]").classList.toggle("hide"),document.querySelector("[data-filter-expand]").classList.toggle("rotate-0")})),Y.addEventListener("click",(()=>{U.textContent="All Tasks",lt[0]="allTasks",A(nt)})),_.addEventListener("click",(()=>{U.textContent="Today",lt[0]="todayTasks",A(rt)})),J.addEventListener("click",(()=>{U.textContent="Tomorrow",lt[0]="tomorrowTasks",A(at)})),K.addEventListener("click",(()=>{U.textContent="This Month",lt[0]="monthTasks",A(it)})),Z.addEventListener("click",(function(){document.querySelector("[data-projects]").classList.toggle("hide"),document.querySelector("[data-projects-expand]").classList.toggle("rotate-0")})),Q.addEventListener("click",(()=>{document.querySelectorAll("[data-new-task-form] input, [data-new-task-form] textarea").forEach((t=>{t.value=""})),tt.showModal()})),X.addEventListener("click",(t=>{t.preventDefault(),R(t)}))})();