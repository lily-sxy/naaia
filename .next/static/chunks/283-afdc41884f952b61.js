"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{9538:function(e,t,n){n.d(t,{p:function(){return F}});var r,u,o,i=n(6006),l=n(9325),a=n(2810),s=n(8496),c=n(3858),d=n(8277),f=n(4373),p=n(546),m=n(1795),v=n(3432),h=n(3562);let g=null!=(o=i.startTransition)?o:function(e){e()};var E=((r=E||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),b=((u=b||{})[u.ToggleDisclosure=0]="ToggleDisclosure",u[u.CloseDisclosure=1]="CloseDisclosure",u[u.SetButtonId=2]="SetButtonId",u[u.SetPanelId=3]="SetPanelId",u[u.LinkPanel=4]="LinkPanel",u[u.UnlinkPanel=5]="UnlinkPanel",u);let y={0:e=>({...e,disclosureState:(0,l.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,i.createContext)(null);function S(e){let t=(0,i.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return t}I.displayName="DisclosureContext";let R=(0,i.createContext)(null);R.displayName="DisclosureAPIContext";let P=(0,i.createContext)(null);function T(e,t){return(0,l.E)(t.type,y,e,t)}P.displayName="DisclosurePanelContext";let x=i.Fragment,w=a.AN.RenderStrategy|a.AN.Static,F=Object.assign((0,a.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,u=(0,i.useRef)(null),o=(0,s.T)(t,(0,s.h)(e=>{u.current=e},void 0===e.as||e.as===i.Fragment)),c=(0,i.useRef)(null),d=(0,i.useRef)(null),f=(0,i.useReducer)(T,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:g},E]=f,b=(0,h.z)(e=>{E({type:1});let t=(0,v.r)(u);if(!t||!g)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==n||n.focus()}),y=(0,i.useMemo)(()=>({close:b}),[b]),S=(0,i.useMemo)(()=>({open:0===m,close:b}),[m,b]);return i.createElement(I.Provider,{value:f},i.createElement(R.Provider,{value:y},i.createElement(p.up,{value:(0,l.E)(m,{0:p.ZM.Open,1:p.ZM.Closed})},(0,a.sY)({ourProps:{ref:o},theirProps:r,slot:S,defaultTag:x,name:"Disclosure"}))))}),{Button:(0,a.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-button-${n}`,...u}=e,[o,l]=S("Disclosure.Button"),p=(0,i.useContext)(P),v=null!==p&&p===o.panelId,g=(0,i.useRef)(null),E=(0,s.T)(g,t,v?null:o.buttonRef);(0,i.useEffect)(()=>{if(!v)return l({type:2,buttonId:r}),()=>{l({type:2,buttonId:null})}},[r,l,v]);let b=(0,h.z)(e=>{var t;if(v){if(1===o.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0}),null==(t=o.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0})}}),y=(0,h.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),I=(0,h.z)(t=>{var n;(0,f.P)(t.currentTarget)||e.disabled||(v?(l({type:0}),null==(n=o.buttonRef.current)||n.focus()):l({type:0}))}),R=(0,i.useMemo)(()=>({open:0===o.disclosureState}),[o]),T=(0,m.f)(e,g),x=v?{ref:E,type:T,onKeyDown:b,onClick:I}:{ref:E,id:r,type:T,"aria-expanded":e.disabled?void 0:0===o.disclosureState,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:b,onKeyUp:y,onClick:I};return(0,a.sY)({ourProps:x,theirProps:u,slot:R,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,a.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...u}=e,[o,l]=S("Disclosure.Panel"),{close:d}=function e(t){let n=(0,i.useContext)(R);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),f=(0,s.T)(t,o.panelRef,e=>{g(()=>l({type:e?4:5}))});(0,i.useEffect)(()=>(l({type:3,panelId:r}),()=>{l({type:3,panelId:null})}),[r,l]);let m=(0,p.oJ)(),v=null!==m?(m&p.ZM.Open)===p.ZM.Open:0===o.disclosureState,h=(0,i.useMemo)(()=>({open:0===o.disclosureState,close:d}),[o,d]);return i.createElement(P.Provider,{value:o.panelId},(0,a.sY)({ourProps:{ref:f,id:r},theirProps:u,slot:h,defaultTag:"div",features:w,visible:v,name:"Disclosure.Panel"}))})})},8277:function(e,t,n){n.d(t,{R:function(){return u}});var r,u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},5303:function(e,t,n){n.d(t,{v:function(){return W}});var r,u,o,i,l,a,s,c,d,f=n(6006),p=n(9325),m=n(2810),v=n(2145),h=n(8807),g=n(961),E=n(8496),b=n(3858),y=n(8277),I=((r=I||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r),S=n(4373),R=n(3432);let P=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=((u=T||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),x=((o=x||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),w=((i=w||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function F(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(P)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var M=((l=M||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function k(e,t=0){var n;return e!==(null==(n=(0,R.r)(e))?void 0:n.body)&&(0,p.E)(t,{0:()=>e.matches(P),1(){let t=e;for(;null!==t;){if(t.matches(P))return!0;t=t.parentElement}return!1}})}function C(e){let t=(0,R.r)(e);(0,v.k)().nextFrame(()=>{t&&!k(t.activeElement,0)&&(null==e||e.focus({preventScroll:!0}))})}var N=((a=N||{})[a.Keyboard=0]="Keyboard",a[a.Mouse=1]="Mouse",a);function O(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let o=r.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var D=n(1485);function A(e,t,n){let r=(0,D.E)(t);(0,f.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var L=n(546),j=n(1795),H=n(3562);function z(e){return[e.screenX,e.screenY]}var U=((s=U||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),V=((c=V||{})[c.Pointer=0]="Pointer",c[c.Other=1]="Other",c),Z=((d=Z||{})[d.OpenMenu=0]="OpenMenu",d[d.CloseMenu=1]="CloseMenu",d[d.GoToItem=2]="GoToItem",d[d.Search=3]="Search",d[d.ClearSearch=4]="ClearSearch",d[d.RegisterItem=5]="RegisterItem",d[d.UnregisterItem=6]="UnregisterItem",d);function B(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=O(t(e.items.slice()),e=>e.dataRef.current.domRef.current),u=n?r.indexOf(n):null;return -1===u&&(u=null),{items:r,activeItemIndex:u}}let _={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=B(e),u=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),u=null!=r?r:-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===u||!(r.length-n-1>=u))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=u)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===o?r:o}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:u,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),u=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),o=u?e.items.indexOf(u):-1;return -1===o||o===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=B(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=B(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},$=(0,f.createContext)(null);function K(e){let t=(0,f.useContext)($);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return t}function Y(e,t){return(0,p.E)(t.type,_,e,t)}$.displayName="MenuContext";let G=f.Fragment,q=m.AN.RenderStrategy|m.AN.Static,Q=f.Fragment,W=Object.assign((0,m.yV)(function(e,t){let n=(0,f.useReducer)(Y,{menuState:1,buttonRef:(0,f.createRef)(),itemsRef:(0,f.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:u,buttonRef:o},i]=n,l=(0,E.T)(t);!function(e,t,n=!0){let r=(0,f.useRef)(!1);function u(n,u){if(!r.current||n.defaultPrevented)return;let o=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),i=u(n);if(null!==i&&i.getRootNode().contains(i)){for(let e of o){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i)||n.composed&&n.composedPath().includes(t))return}return k(i,M.Loose)||-1===i.tabIndex||n.preventDefault(),t(n,i)}}(0,f.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let o=(0,f.useRef)(null);A("mousedown",e=>{var t,n;r.current&&(o.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),A("click",e=>{o.current&&(u(e,()=>o.current),o.current=null)},!0),A("blur",e=>u(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([o,u],(e,t)=>{var n;i({type:1}),k(t,M.Loose)||(e.preventDefault(),null==(n=o.current)||n.focus())},0===r);let a=(0,H.z)(()=>{i({type:1})}),s=(0,f.useMemo)(()=>({open:0===r,close:a}),[r,a]);return f.createElement($.Provider,{value:n},f.createElement(L.up,{value:(0,p.E)(r,{0:L.ZM.Open,1:L.ZM.Closed})},(0,m.sY)({ourProps:{ref:l},theirProps:e,slot:s,defaultTag:G,name:"Menu"})))}),{Button:(0,m.yV)(function(e,t){var n;let r=(0,b.M)(),{id:u=`headlessui-menu-button-${r}`,...o}=e,[i,l]=K("Menu.Button"),a=(0,E.T)(i.buttonRef,t),s=(0,h.G)(),c=(0,H.z)(e=>{switch(e.key){case y.R.Space:case y.R.Enter:case y.R.ArrowDown:e.preventDefault(),e.stopPropagation(),l({type:0}),s.nextFrame(()=>l({type:2,focus:I.First}));break;case y.R.ArrowUp:e.preventDefault(),e.stopPropagation(),l({type:0}),s.nextFrame(()=>l({type:2,focus:I.Last}))}}),d=(0,H.z)(e=>{e.key===y.R.Space&&e.preventDefault()}),p=(0,H.z)(t=>{if((0,S.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===i.menuState?(l({type:1}),s.nextFrame(()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),l({type:0})))}),v=(0,f.useMemo)(()=>({open:0===i.menuState}),[i]),g={ref:a,id:u,type:(0,j.f)(e,i.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=i.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===i.menuState,onKeyDown:c,onKeyUp:d,onClick:p};return(0,m.sY)({ourProps:g,theirProps:o,slot:v,defaultTag:"button",name:"Menu.Button"})}),Items:(0,m.yV)(function(e,t){var n,r;let u=(0,b.M)(),{id:o=`headlessui-menu-items-${u}`,...i}=e,[l,a]=K("Menu.Items"),s=(0,E.T)(l.itemsRef,t),c=function(...e){return(0,f.useMemo)(()=>(0,R.r)(...e),[...e])}(l.itemsRef),d=(0,h.G)(),p=(0,L.oJ)(),S=null!==p?(p&L.ZM.Open)===L.ZM.Open:0===l.menuState;(0,f.useEffect)(()=>{let e=l.itemsRef.current;e&&0===l.menuState&&e!==(null==c?void 0:c.activeElement)&&e.focus({preventScroll:!0})},[l.menuState,l.itemsRef,c]),function({container:e,accept:t,walk:n,enabled:r=!0}){let u=(0,f.useRef)(t),o=(0,f.useRef)(n);(0,f.useEffect)(()=>{u.current=t,o.current=n},[t,n]),(0,g.e)(()=>{if(!e||!r)return;let t=(0,R.r)(e);if(!t)return;let n=u.current,i=o.current,l=Object.assign(e=>n(e),{acceptNode:n}),a=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;a.nextNode();)i(a.currentNode)},[e,r,u,o])}({container:l.itemsRef.current,enabled:0===l.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let P=(0,H.z)(e=>{var t,n;switch(d.dispose(),e.key){case y.R.Space:if(""!==l.searchQuery)return e.preventDefault(),e.stopPropagation(),a({type:3,value:e.key});case y.R.Enter:if(e.preventDefault(),e.stopPropagation(),a({type:1}),null!==l.activeItemIndex){let{dataRef:e}=l.items[l.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}C(l.buttonRef.current);break;case y.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:I.Next});case y.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:I.Previous});case y.R.Home:case y.R.PageUp:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:I.First});case y.R.End:case y.R.PageDown:return e.preventDefault(),e.stopPropagation(),a({type:2,focus:I.Last});case y.R.Escape:e.preventDefault(),e.stopPropagation(),a({type:1}),(0,v.k)().nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case y.R.Tab:e.preventDefault(),e.stopPropagation(),a({type:1}),(0,v.k)().nextFrame(()=>{var t,n;t=l.buttonRef.current,n=e.shiftKey?T.Previous:T.Next,function(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){var o,i,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?O(e):e:F(e);u.length>0&&s.length>1&&(s=s.filter(e=>!u.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,v;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(v=s[e])||v.focus(f),p+=c}while(v!==a.activeElement);6&t&&null!=(l=null==(i=null==(o=v)?void 0:o.matches)?void 0:i.call(o,"textarea,input"))&&l&&v.select()}(F(),n,{relativeTo:t})});break;default:1===e.key.length&&(a({type:3,value:e.key}),d.setTimeout(()=>a({type:4}),350))}}),x=(0,H.z)(e=>{e.key===y.R.Space&&e.preventDefault()}),w=(0,f.useMemo)(()=>({open:0===l.menuState}),[l]),M={"aria-activedescendant":null===l.activeItemIndex||null==(n=l.items[l.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=l.buttonRef.current)?void 0:r.id,id:o,onKeyDown:P,onKeyUp:x,role:"menu",tabIndex:0,ref:s};return(0,m.sY)({ourProps:M,theirProps:i,slot:w,defaultTag:"div",features:q,visible:S,name:"Menu.Items"})}),Item:(0,m.yV)(function(e,t){let n,r=(0,b.M)(),{id:u=`headlessui-menu-item-${r}`,disabled:o=!1,...i}=e,[l,a]=K("Menu.Item"),s=null!==l.activeItemIndex&&l.items[l.activeItemIndex].id===u,c=(0,f.useRef)(null),d=(0,E.T)(t,c);(0,g.e)(()=>{if(0!==l.menuState||!s||0===l.activationTrigger)return;let e=(0,v.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=c.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[c,s,l.menuState,l.activationTrigger,l.activeItemIndex]);let p=(0,f.useRef)({disabled:o,domRef:c});(0,g.e)(()=>{p.current.disabled=o},[p,o]),(0,g.e)(()=>{var e,t;p.current.textValue=null==(t=null==(e=c.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[p,c]),(0,g.e)(()=>(a({type:5,id:u,dataRef:p}),()=>a({type:6,id:u})),[p,u]);let h=(0,H.z)(()=>{a({type:1})}),y=(0,H.z)(e=>{if(o)return e.preventDefault();a({type:1}),C(l.buttonRef.current)}),S=(0,H.z)(()=>{if(o)return a({type:2,focus:I.Nothing});a({type:2,focus:I.Specific,id:u})}),R=(n=(0,f.useRef)([-1,-1]),{wasMoved(e){let t=z(e);return(n.current[0]!==t[0]||n.current[1]!==t[1])&&(n.current=t,!0)},update(e){n.current=z(e)}}),P=(0,H.z)(e=>R.update(e)),T=(0,H.z)(e=>{R.wasMoved(e)&&(o||s||a({type:2,focus:I.Specific,id:u,trigger:0}))}),x=(0,H.z)(e=>{R.wasMoved(e)&&(o||s&&a({type:2,focus:I.Nothing}))}),w=(0,f.useMemo)(()=>({active:s,disabled:o,close:h}),[s,o,h]);return(0,m.sY)({ourProps:{id:u,ref:d,role:"menuitem",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,disabled:void 0,onClick:y,onFocus:S,onPointerEnter:P,onMouseEnter:P,onPointerMove:T,onMouseMove:T,onPointerLeave:x,onMouseLeave:x},theirProps:i,slot:w,defaultTag:Q,name:"Menu.Item"})})})},4450:function(e,t,n){n.d(t,{u:function(){return N}});var r,u=n(6006),o=n(2810),i=n(546),l=n(9325),a=n(961);function s(){let e=(0,u.useRef)(!1);return(0,a.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(1485),d=n(1405),f=n(8496),p=n(2145);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(8807),g=n(3562),E=n(4339);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,u.createContext)(null);y.displayName="TransitionContext";var I=((r=I||{}).Visible="visible",r.Hidden="hidden",r);let S=(0,u.createContext)(null);function R(e){return"children"in e?R(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function P(e,t){let n=(0,c.E)(e),r=(0,u.useRef)([]),i=s(),a=(0,h.G)(),d=(0,g.z)((e,t=o.l4.Hidden)=>{let u=r.current.findIndex(({el:t})=>t===e);-1!==u&&((0,l.E)(t,{[o.l4.Unmount](){r.current.splice(u,1)},[o.l4.Hidden](){r.current[u].state="hidden"}}),a.microTask(()=>{var e;!R(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,o.l4.Unmount)}),p=(0,u.useRef)([]),m=(0,u.useRef)(Promise.resolve()),v=(0,u.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:r,register:f,unregister:d,onStart:E,onStop:b,wait:m,chains:v}),[f,d,r,E,b,v,m])}function T(){}S.displayName="NestingContext";let x=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function w(e){var t;let n={};for(let r of x)n[r]=null!=(t=e[r])?t:T;return n}let F=o.AN.RenderStrategy,M=(0,o.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l,...s}=e,c=(0,u.useRef)(null),p=(0,f.T)(c,t);(0,d.H)();let m=(0,i.oJ)();if(void 0===n&&null!==m&&(n=(m&i.ZM.Open)===i.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,u.useState)(n?"visible":"hidden"),g=P(()=>{h("hidden")}),[E,b]=(0,u.useState)(!0),I=(0,u.useRef)([n]);(0,a.e)(()=>{!1!==E&&I.current[I.current.length-1]!==n&&(I.current.push(n),b(!1))},[I,n]);let T=(0,u.useMemo)(()=>({show:n,appear:r,initial:E}),[n,r,E]);(0,u.useEffect)(()=>{if(n)h("visible");else if(R(g)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,g]);let x={unmount:l};return u.createElement(S.Provider,{value:g},u.createElement(y.Provider,{value:T},(0,o.sY)({ourProps:{...x,as:u.Fragment,children:u.createElement(k,{ref:p,...x,...s})},theirProps:{},defaultTag:u.Fragment,features:F,visible:"visible"===v,name:"Transition"})))}),k=(0,o.yV)(function(e,t){var n;let r,{beforeEnter:I,afterEnter:T,beforeLeave:x,afterLeave:M,enter:k,enterFrom:C,enterTo:N,entered:O,leave:D,leaveFrom:A,leaveTo:L,...j}=e,H=(0,u.useRef)(null),z=(0,f.T)(H,t),U=j.unmount?o.l4.Unmount:o.l4.Hidden,{show:V,appear:Z,initial:B}=function(){let e=(0,u.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[_,$]=(0,u.useState)(V?"visible":"hidden"),K=function(){let e=(0,u.useContext)(S);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Y,unregister:G}=K,q=(0,u.useRef)(null);(0,u.useEffect)(()=>Y(H),[Y,H]),(0,u.useEffect)(()=>{if(U===o.l4.Hidden&&H.current){if(V&&"visible"!==_){$("visible");return}return(0,l.E)(_,{hidden:()=>G(H),visible:()=>Y(H)})}},[_,H,Y,G,V,U]);let Q=(0,c.E)({enter:b(k),enterFrom:b(C),enterTo:b(N),entered:b(O),leave:b(D),leaveFrom:b(A),leaveTo:b(L)}),W=(n={beforeEnter:I,afterEnter:T,beforeLeave:x,afterLeave:M},r=(0,u.useRef)(w(n)),(0,u.useEffect)(()=>{r.current=w(n)},[n]),r),J=(0,d.H)();(0,u.useEffect)(()=>{if(J&&"visible"===_&&null===H.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[H,_,J]);let X=B&&!Z,ee=!J||X||q.current===V?"idle":V?"enter":"leave",et=function(e=0){let[t,n]=(0,u.useState)(e),r=s(),o=(0,u.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),i=(0,u.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{et.addFlag(i.ZM.Opening),W.current.beforeEnter()},leave:()=>{et.addFlag(i.ZM.Closing),W.current.beforeLeave()},idle:()=>{}})),er=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{et.removeFlag(i.ZM.Opening),W.current.afterEnter()},leave:()=>{et.removeFlag(i.ZM.Closing),W.current.afterLeave()},idle:()=>{}})),eu=P(()=>{$("hidden"),G(H)},K);(function({container:e,direction:t,classes:n,onStart:r,onStop:u}){let o=s(),i=(0,h.G)(),d=(0,c.E)(t);(0,a.e)(()=>{let t=(0,p.k)();i.add(t.dispose);let a=e.current;if(a&&"idle"!==d.current&&o.current){var s,c,f,h;let e,o,i,g,E,b,y;return t.dispose(),r.current(d.current),t.add((s=a,c=n.current,f="enter"===d.current,h=()=>{t.dispose(),u.current(d.current)},o=f?"enter":"leave",i=(0,p.k)(),g=void 0!==h?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,h(...t)}):()=>{},"enter"===o&&(s.removeAttribute("hidden"),s.style.display=""),E=(0,l.E)(o,{enter:()=>c.enter,leave:()=>c.leave}),b=(0,l.E)(o,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),y=(0,l.E)(o,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),v(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),m(s,...E,...y),i.nextFrame(()=>{v(s,...y),m(s,...b),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[o,i]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=o+i;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(s,()=>(v(s,...E),m(s,...c.entered),g()))}),i.dispose)),t.dispose}},[t])})({container:H,classes:Q,direction:ee,onStart:(0,c.E)(e=>{eu.onStart(H,e,en)}),onStop:(0,c.E)(e=>{eu.onStop(H,e,er),"leave"!==e||R(eu)||($("hidden"),G(H))})}),(0,u.useEffect)(()=>{X&&(U===o.l4.Hidden?q.current=null:q.current=V)},[V,X,_]);let eo=j;return Z&&V&&(eo={...eo,className:(0,E.A)(j.className,...Q.current.enter,...Q.current.enterFrom)}),u.createElement(S.Provider,{value:eu},u.createElement(i.up,{value:(0,l.E)(_,{visible:i.ZM.Open,hidden:i.ZM.Closed})|et.flags},(0,o.sY)({ourProps:{ref:z},theirProps:eo,defaultTag:"div",features:F,visible:"visible"===_,name:"Transition.Child"})))}),C=(0,o.yV)(function(e,t){let n=null!==(0,u.useContext)(y),r=null!==(0,i.oJ)();return u.createElement(u.Fragment,null,!n&&r?u.createElement(M,{ref:t,...e}):u.createElement(k,{ref:t,...e}))}),N=Object.assign(M,{Child:C,Root:M})},8807:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(6006),u=n(2145);function o(){let[e]=(0,r.useState)(u.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3562:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(6006),u=n(1485);let o=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},3858:function(e,t,n){n.d(t,{M:function(){return a}});var r,u=n(6006),o=n(961),i=n(1405),l=n(28);let a=null!=(r=u.useId)?r:function(){let e=(0,i.H)(),[t,n]=u.useState(e?()=>l.O.nextId():null);return(0,o.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},961:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(6006),u=n(28);let o=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1485:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(6006),u=n(961);function o(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},1795:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(6006),u=n(961);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function i(e,t){let[n,i]=(0,r.useState)(()=>o(e));return(0,u.e)(()=>{i(o(e))},[e.type,e.as]),(0,u.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")},[n,t]),n}},1405:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(6006),u=n(28);function o(){let[e,t]=(0,r.useState)(u.O.isHandoffComplete);return e&&!1===u.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>u.O.handoff(),[]),e}},8496:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return i}});var r=n(6006),u=n(3562);let o=Symbol();function i(e,t=!0){return Object.assign(e,{[o]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[o]))?void 0:n}},546:function(e,t,n){n.d(t,{ZM:function(){return i},oJ:function(){return l},up:function(){return a}});var r,u=n(6006);let o=(0,u.createContext)(null);o.displayName="OpenClosedContext";var i=((r=i||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,u.useContext)(o)}function a({value:e,children:t}){return u.createElement(o.Provider,{value:e},t)}},4373:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},4339:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return e.filter(Boolean).join(" ")}},2145:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){var t;let r={current:!0};return t=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}})},28:function(e,t,n){n.d(t,{O:function(){return i}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);let i=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},9325:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},3432:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(28);function u(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},2810:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var r,u,o=n(6006),i=n(4339),l=n(9325),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:o=!0,name:i}){let a=f(t,e);if(o)return d(a,n,r,i);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=a;if(e)return d(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return d(a,n,r,i)}function d(e,t={},n,r){let{as:u=n,children:l,refName:a="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(u===o.Fragment&&Object.keys(m(s)).length>0){if(!(0,o.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className);return(0,o.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,o.createElement)(u,Object.assign({},v(s,["ref"]),u!==o.Fragment&&c,u!==o.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function p(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);