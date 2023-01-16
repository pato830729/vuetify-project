import{r as x,m as g,M as H,a2 as F,n as Y,a1 as G,aM as ee,x as te,aN as ae,aO as ne,aP as oe,aQ as le,aL as ue,B as ie,az as re,G as se,aR as ce,K as X,t as z,aS as ve,aw as de,aT as me,aB as fe,l as he,aU as ge,a0 as we,aV as ye,aW as be,y as pe,aX as Se,b as c,T as _e,aE as Ee,R as K,aa as Te,ac as ke,aY as Me,aH as xe,o as Be,c as Ve,w as L,aZ as Ce,$ as A,e as Re,a_ as Le}from"./index.1db97491.js";import{V as U,a as P}from"./VList.a3465597.js";function He(e){let{rootEl:r,isSticky:s,layoutItemStyles:a}=e;const o=x(!1),t=x(0),v=g(()=>{const h=typeof o.value=="boolean"?"top":o.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[h]:H(t.value)}:{top:a.value.top}]});F(()=>{Y(s,h=>{h?window.addEventListener("scroll",_,{passive:!0}):window.removeEventListener("scroll",_)},{immediate:!0})}),G(()=>{document.removeEventListener("scroll",_)});let w=0;function _(){var T;const h=w>window.scrollY?"up":"down",l=r.value.getBoundingClientRect(),f=parseFloat((T=a.value.top)!=null?T:0),m=window.scrollY-Math.max(0,t.value-f),u=l.height+Math.max(t.value,f)-window.scrollY-window.innerHeight;l.height<window.innerHeight-f?(o.value="top",t.value=f):h==="up"&&o.value==="bottom"||h==="down"&&o.value==="top"?(t.value=window.scrollY+l.top,o.value=!0):h==="down"&&u<=0?(t.value=0,o.value="bottom"):h==="up"&&m<=0&&(t.value=l.top+m,o.value="top"),w=window.scrollY}return{isStuck:o,stickyStyles:v}}const Pe=100,Ye=20;function Z(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const a=Z(r),o=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);r+=(o-a)*Math.abs(o),s===e.length-1&&(r*=.5)}return Z(r)*1e3}function $e(){const e={};function r(o){Array.from(o.changedTouches).forEach(t=>{var w;((w=e[t.identifier])!=null?w:e[t.identifier]=new ee(Ye)).push([o.timeStamp,t])})}function s(o){Array.from(o.changedTouches).forEach(t=>{delete e[t.identifier]})}function a(o){var t;const v=(t=e[o])==null?void 0:t.values().reverse();if(!v)throw new Error(`No samples for touch id ${o}`);const w=v[0],_=[],h=[];for(const l of v){if(w[0]-l[0]>Pe)break;_.push({t:l[0],d:l[1].clientX}),h.push({t:l[0],d:l[1].clientY})}return{x:q(_),y:q(h),get direction(){const{x:l,y:f}=this,[m,u]=[Math.abs(l),Math.abs(f)];return m>u&&l>=0?"right":m>u&&l<=0?"left":u>m&&f>=0?"down":u>m&&f<=0?"up":Ne()}}}return{addMovement:r,endTouch:s,getVelocity:a}}function Ne(){throw new Error}function We(e){let{isActive:r,isTemporary:s,width:a,touchless:o,position:t}=e;F(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",p,{passive:!0})}),G(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",p)});const v=g(()=>t.value!=="bottom"),{addMovement:w,endTouch:_,getVelocity:h}=$e();let l=!1;const f=x(!1),m=x(0),u=x(0);let T;function B(n,i){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="bottom"?document.documentElement.clientHeight-n:C())-(i?a.value:0)}function k(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const d=t.value==="left"?(n-u.value)/a.value:t.value==="right"?(document.documentElement.clientWidth-n-u.value)/a.value:t.value==="bottom"?(document.documentElement.clientHeight-n-u.value)/a.value:C();return i?Math.max(0,Math.min(1,d)):d}function V(n){if(o.value)return;const i=n.changedTouches[0].clientX,d=n.changedTouches[0].clientY,y=25,E=t.value==="left"?i<y:t.value==="right"?i>document.documentElement.clientWidth-y:t.value==="bottom"?d>document.documentElement.clientHeight-y:C(),b=r.value&&(t.value==="left"?i<a.value:t.value==="right"?i>document.documentElement.clientWidth-a.value:t.value==="bottom"?d>document.documentElement.clientHeight-a.value:C());(E||b||r.value&&s.value)&&(l=!0,T=[i,d],u.value=B(v.value?i:d,r.value),m.value=k(v.value?i:d),_(n),w(n))}function M(n){const i=n.changedTouches[0].clientX,d=n.changedTouches[0].clientY;if(l){if(!n.cancelable){l=!1;return}const E=Math.abs(i-T[0]),b=Math.abs(d-T[1]);(v.value?E>b&&E>3:b>E&&b>3)?(f.value=!0,l=!1):(v.value?b:E)>3&&(l=!1)}if(!f.value)return;n.preventDefault(),w(n);const y=k(v.value?i:d,!1);m.value=Math.max(0,Math.min(1,y)),y>1?u.value=B(v.value?i:d,!0):y<0&&(u.value=B(v.value?i:d,!1))}function p(n){if(l=!1,!f.value)return;w(n),f.value=!1;const i=h(n.changedTouches[0].identifier),d=Math.abs(i.x),y=Math.abs(i.y);(v.value?d>y&&d>400:y>d&&y>3)?r.value=i.direction===({left:"right",right:"left",bottom:"up"}[t.value]||C()):r.value=m.value>.5}const R=g(()=>f.value?{transform:t.value==="left"?`translateX(calc(-100% + ${m.value*a.value}px))`:t.value==="right"?`translateX(calc(100% - ${m.value*a.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${m.value*a.value}px))`:C(),transition:"none"}:void 0);return{isDragging:f,dragProgress:m,dragStyles:R}}function C(){throw new Error}const Ie=["start","end","left","right","bottom"],De=te({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ie.includes(e)},sticky:Boolean,...ae(),...ne(),...oe(),...le(),...ue({tag:"nav"}),...ie()},emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:s,slots:a}=r;const{isRtl:o}=re(),{themeClasses:t}=se(e),{borderClasses:v}=ce(e),{backgroundColorClasses:w,backgroundColorStyles:_}=X(z(e,"color")),{elevationClasses:h}=ve(e),{mobile:l}=de(),{roundedClasses:f}=me(e),m=fe(),u=he(e,"modelValue",null,S=>!!S),{ssrBootStyles:T}=ge(),B=x(),k=x(!1),V=g(()=>e.rail&&e.expandOnHover&&k.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=g(()=>Se(e.location,o.value)),p=g(()=>!e.permanent&&(l.value||e.temporary)),R=g(()=>e.sticky&&!p.value&&M.value!=="bottom");e.disableResizeWatcher||Y(p,S=>!e.permanent&&Te(()=>u.value=!S)),!e.disableRouteWatcher&&m&&Y(m.currentRoute,()=>p.value&&(u.value=!1)),Y(()=>e.permanent,S=>{S&&(u.value=!0)}),we(()=>{e.modelValue!=null||p.value||(u.value=e.permanent||!l.value)});const{isDragging:n,dragProgress:i,dragStyles:d}=We({isActive:u,isTemporary:p,width:V,touchless:z(e,"touchless"),position:M}),y=g(()=>{const S=p.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value;return n.value?S*i.value:S}),{layoutItemStyles:E,layoutRect:b,layoutItemScrimStyles:$}=ye({id:e.name,order:g(()=>parseInt(e.order,10)),position:M,layoutSize:y,elementSize:V,active:g(()=>u.value||n.value),disableTransitions:g(()=>n.value),absolute:g(()=>e.absolute||R.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:Q}=He({rootEl:B,isSticky:R,layoutItemStyles:E}),W=X(g(()=>typeof e.scrim=="string"?e.scrim:null)),j=g(()=>({...n.value?{opacity:i.value*.2,transition:"none"}:void 0,...b.value?{left:H(b.value.left),right:H(b.value.right),top:H(b.value.top),bottom:H(b.value.bottom)}:void 0,...$.value}));return be({VList:{bgColor:"transparent"}}),pe(()=>{var S,I,D,O;const J=a.image||e.image;return c(K,null,[c(e.tag,_e({ref:B,onMouseenter:()=>k.value=!0,onMouseleave:()=>k.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":k.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":p.value,"v-navigation-drawer--active":u.value,"v-navigation-drawer--sticky":R.value},t.value,w.value,v.value,h.value,f.value],style:[_.value,E.value,d.value,T.value,Q.value]},s),{default:()=>[J&&c("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(S=a.image)==null?void 0:S.call(a,{image:e.image}):c("img",{src:e.image,alt:""},null)]),a.prepend&&c("div",{class:"v-navigation-drawer__prepend"},[(I=a.prepend)==null?void 0:I.call(a)]),c("div",{class:"v-navigation-drawer__content"},[(D=a.default)==null?void 0:D.call(a)]),a.append&&c("div",{class:"v-navigation-drawer__append"},[(O=a.append)==null?void 0:O.call(a)])]}),c(Ee,{name:"fade-transition"},{default:()=>[p.value&&(n.value||u.value)&&!!e.scrim&&c("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[j.value,W.backgroundColorStyles.value],onClick:()=>u.value=!1},null)]})])}),{isStuck:N}}}),ze={__name:"AdminLayout",setup(e){const r=ke(),{avatar:s,account:a}=Me(r);return(o,t)=>{const v=xe("router-view");return Be(),Ve(K,null,[c(De,{permanent:""},{default:L(()=>[c(U,null,{default:L(()=>[c(P,{"prepend-avatar":A(s),title:A(a)},null,8,["prepend-avatar","title"])]),_:1}),c(Re),c(U,null,{default:L(()=>[c(P,{to:"/admin/products",title:"\u5546\u54C1\u7BA1\u7406","prepend-icon":"mdi-shopping"}),c(P,{to:"/admin/orders",title:"\u8A02\u55AE\u7BA1\u7406","prepend-icon":"mdi-format-list-bulleted"}),c(P,{to:"/",title:"\u56DE\u9996\u9801","prepend-icon":"mdi-home"})]),_:1})]),_:1}),c(Ce,null,{default:L(()=>[c(Le,null,{default:L(()=>[c(v)]),_:1})]),_:1})],64)}}};export{ze as default};
