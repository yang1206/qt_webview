var Go=Object.defineProperty;var Jo=(e,r,t)=>r in e?Go(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var Ve=(e,r,t)=>Jo(e,typeof r!="symbol"?r+"":r,t);import{Q as Zo,r as $,o as Ht,w as wt,d as ue,g as At,a as er,b as tr,i as it,p as Zt,c as W,e as Lt,f as Ot,h as or,j as d,k as rr,l as w,m as eo,n as I,q as B,s as p,u as ge,t as lt,v as st,x as nr,y as xt,z as Tt,V as Wt,F as Vt,T as Yt,A as ar,B as jt,C as Ct,D as St,E as to,N as oo,G as at,H as zt,I as ro,J as ir,K as lr,L as Ae,M as Pt,O as sr,P as He,R as cr,S as Dt,U as dr,W as R,X as he,Y as ae,Z as no,_ as ur,$ as fr,a0 as hr,a1 as vr,a2 as br,a3 as pr,a4 as gr,a5 as je,a6 as mr,a7 as yr,a8 as wr,a9 as xr,aa as Cr,ab as Sr,ac as zr,ad as tt,ae as ot,af as pt,ag as Mt,ah as we,ai as Ne,aj as Pr,ak as Tr,al as $r,am as Rr,an as Br,ao as Et,ap as kr}from"./index-oDmgEOBe.js";class Mr{constructor(r){Ve(this,"channel",null);Ve(this,"qtObject",null);Ve(this,"messageId",0);Ve(this,"callbacks",new Map);Ve(this,"eventListeners",new Map);this.options=r,this.init()}async init(){try{await this.waitForTransport(),console.log("WebChannel transport ready"),new Zo(window.qt.webChannelTransport,r=>{if(this.channel=r,this.qtObject=r.objects[this.options.objectName],!this.qtObject)throw new Error(`Qt object "${this.options.objectName}" not found`);this.qtObject[this.options.receiveSignal].connect(this.handleResponse.bind(this)),console.log("QtBridge initialized successfully")})}catch(r){throw console.error("Failed to initialize QtBridge:",r),r}}waitForTransport(){return new Promise((r,t)=>{var l;if((l=window.qt)!=null&&l.webChannelTransport){r();return}let i=0;const n=50,c=setInterval(()=>{var b;if((b=window.qt)!=null&&b.webChannelTransport){clearInterval(c),r();return}++i>=n&&(clearInterval(c),t(new Error("Timeout waiting for WebChannel transport")))},100)})}on(r,t){var i;this.eventListeners.has(r)||this.eventListeners.set(r,[]),(i=this.eventListeners.get(r))==null||i.push(t)}off(r,t){const i=this.eventListeners.get(r);if(i){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}handleResponse(r){try{const t=JSON.parse(r),i=this.callbacks.get(t.id);i&&(i(t),this.callbacks.delete(t.id));const n=this.eventListeners.get(this.options.receiveSignal);if(n&&n.forEach(c=>c(r)),this.options.messageSignal){const c=this.eventListeners.get(this.options.messageSignal);c&&c.forEach(l=>l(r))}}catch(t){console.error("Failed to handle response:",t)}}send(r){return new Promise((t,i)=>{if(!this.qtObject){i(new Error("Bridge not initialized"));return}const n=++this.messageId,c={id:n,...r};this.callbacks.set(n,l=>{l.success?t(l.data):i(new Error(l.error||"Unknown error"))});try{this.qtObject[this.options.sendMethod](JSON.stringify(c))}catch(l){this.callbacks.delete(n),i(l)}})}}function Er(e={objectName:"bridge",sendMethod:"requestFromClient",receiveSignal:"responseFromServer"}){const r=$(null),t=$(!1),i=$(!1),n=$(null),c=async()=>{try{console.log("Creating QtBridge..."),r.value=new Mr(e),t.value=!0,i.value=!0,n.value=null}catch(l){console.error("Failed to create QtBridge:",l),n.value=l,t.value=!1,i.value=!1}};return Ht(()=>{c()}),{bridge:r,isConnected:t,isReady:i,error:n}}function Fr(e){const r=$([]);return wt(()=>{if(!e.value)return;const i=c=>{try{const l=JSON.parse(c);l.action==="qt-message"&&(r.value=[...r.value,{content:l.data,timestamp:Date.now(),type:"receive"}])}catch(l){console.error("Failed to parse Qt message:",l)}},n=c=>{try{const l=JSON.parse(c);l.action==="qt-message"&&(r.value=[...r.value,{content:l.data,timestamp:Date.now(),type:"receive"}])}catch(l){console.error("Failed to parse Qt message:",l)}};return e.value.on("responseFromServer",i),e.value.on("messageFromServer",n),()=>{var c,l;(c=e.value)==null||c.off("responseFromServer",i),(l=e.value)==null||l.off("messageFromServer",n)}}),{messages:r,sendMessage:async i=>{if(!e.value)throw new Error("Bridge not initialized");await e.value.send({action:"web-message",data:i}),r.value=[...r.value,{content:i,timestamp:Date.now(),type:"send"}]}}}function _r(e){return e.composedPath()[0]||null}function Wr(e,r="default",t=[]){const n=e.$slots[r];return n===void 0?t:n()}const qt=ue({render(){var e,r;return(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)}});function Xt(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}function Kt(e){const{left:r,right:t,top:i,bottom:n}=At(e);return`${i} ${t} ${n} ${r}`}const ct=typeof document<"u"&&typeof window<"u";function yt(e){return e.composedPath()[0]}const Dr={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Ir(e,r,t){if(e==="mousemoveoutside"){const i=n=>{r.contains(yt(n))||t(n)};return{mousemove:i,touchstart:i}}else if(e==="clickoutside"){let i=!1;const n=l=>{i=!r.contains(yt(l))},c=l=>{i&&(r.contains(yt(l))||t(l))};return{mousedown:n,mouseup:c,touchstart:n,touchend:c}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ao(e,r,t){const i=Dr[e];let n=i.get(r);n===void 0&&i.set(r,n=new WeakMap);let c=n.get(t);return c===void 0&&n.set(t,c=Ir(e,r,t)),c}function Hr(e,r,t,i){if(e==="mousemoveoutside"||e==="clickoutside"){const n=ao(e,r,t);return Object.keys(n).forEach(c=>{Le(c,document,n[c],i)}),!0}return!1}function Ar(e,r,t,i){if(e==="mousemoveoutside"||e==="clickoutside"){const n=ao(e,r,t);return Object.keys(n).forEach(c=>{xe(c,document,n[c],i)}),!0}return!1}function Lr(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,r=new WeakMap;function t(){e.set(this,!0)}function i(){e.set(this,!0),r.set(this,!0)}function n(a,g,S){const k=a[g];return a[g]=function(){return S.apply(a,arguments),k.apply(a,arguments)},a}function c(a,g){a[g]=Event.prototype[g]}const l=new WeakMap,b=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function v(){var a;return(a=l.get(this))!==null&&a!==void 0?a:null}function h(a,g){b!==void 0&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:g??b.get})}const f={bubble:{},capture:{}},m={};function z(){const a=function(g){const{type:S,eventPhase:k,bubbles:H}=g,A=yt(g);if(k===2)return;const J=k===1?"capture":"bubble";let V=A;const q=[];for(;V===null&&(V=window),q.push(V),V!==window;)V=V.parentNode||null;const N=f.capture[S],_=f.bubble[S];if(n(g,"stopPropagation",t),n(g,"stopImmediatePropagation",i),h(g,v),J==="capture"){if(N===void 0)return;for(let ee=q.length-1;ee>=0&&!e.has(g);--ee){const le=q[ee],re=N.get(le);if(re!==void 0){l.set(g,le);for(const de of re){if(r.has(g))break;de(g)}}if(ee===0&&!H&&_!==void 0){const de=_.get(le);if(de!==void 0)for(const ve of de){if(r.has(g))break;ve(g)}}}}else if(J==="bubble"){if(_===void 0)return;for(let ee=0;ee<q.length&&!e.has(g);++ee){const le=q[ee],re=_.get(le);if(re!==void 0){l.set(g,le);for(const de of re){if(r.has(g))break;de(g)}}}}c(g,"stopPropagation"),c(g,"stopImmediatePropagation"),h(g)};return a.displayName="evtdUnifiedHandler",a}function M(){const a=function(g){const{type:S,eventPhase:k}=g;if(k!==2)return;const H=m[S];H!==void 0&&H.forEach(A=>A(g))};return a.displayName="evtdUnifiedWindowEventHandler",a}const T=z(),oe=M();function K(a,g){const S=f[a];return S[g]===void 0&&(S[g]=new Map,window.addEventListener(g,T,a==="capture")),S[g]}function ie(a){return m[a]===void 0&&(m[a]=new Set,window.addEventListener(a,oe)),m[a]}function O(a,g){let S=a.get(g);return S===void 0&&a.set(g,S=new Set),S}function j(a,g,S,k){const H=f[g][S];if(H!==void 0){const A=H.get(a);if(A!==void 0&&A.has(k))return!0}return!1}function x(a,g){const S=m[a];return!!(S!==void 0&&S.has(g))}function E(a,g,S,k){let H;if(typeof k=="object"&&k.once===!0?H=N=>{F(a,g,H,k),S(N)}:H=S,Hr(a,g,H,k))return;const J=k===!0||typeof k=="object"&&k.capture===!0?"capture":"bubble",V=K(J,a),q=O(V,g);if(q.has(H)||q.add(H),g===window){const N=ie(a);N.has(H)||N.add(H)}}function F(a,g,S,k){if(Ar(a,g,S,k))return;const A=k===!0||typeof k=="object"&&k.capture===!0,J=A?"capture":"bubble",V=K(J,a),q=O(V,g);if(g===window&&!j(g,A?"bubble":"capture",a,S)&&x(a,S)){const _=m[a];_.delete(S),_.size===0&&(window.removeEventListener(a,oe),m[a]=void 0)}q.has(S)&&q.delete(S),q.size===0&&V.delete(g),V.size===0&&(window.removeEventListener(a,T,J==="capture"),f[J][a]=void 0)}return{on:E,off:F}}const{on:Le,off:xe}=Lr(),Or=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Vr(){return Or}function jr(e){const r={isDeactivated:!1};let t=!1;return er(()=>{if(r.isDeactivated=!1,!t){t=!0;return}e()}),tr(()=>{r.isDeactivated=!0,t||(t=!0)}),r}const Qt=Ot("n-form-item");function io(e,{defaultSize:r="medium",mergedSize:t,mergedDisabled:i}={}){const n=it(Qt,null);Zt(Qt,null);const c=W(t?()=>t(n):()=>{const{size:v}=e;if(v)return v;if(n){const{mergedSize:h}=n;if(h.value!==void 0)return h.value}return r}),l=W(i?()=>i(n):()=>{const{disabled:v}=e;return v!==void 0?v:n?n.disabled.value:!1}),b=W(()=>{const{status:v}=e;return v||(n==null?void 0:n.mergedValidationStatus.value)});return Lt(()=>{n&&n.restoreValidation()}),{mergedSizeRef:c,mergedDisabledRef:l,mergedStatusRef:b,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Nr={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};function Ft(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function rt(e){return(r,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let n;if(i==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,b=t!=null&&t.width?String(t.width):l;n=e.formattingValues[b]||e.formattingValues[l]}else{const l=e.defaultWidth,b=t!=null&&t.width?String(t.width):e.defaultWidth;n=e.values[b]||e.values[l]}const c=e.argumentCallback?e.argumentCallback(r):r;return n[c]}}function nt(e){return(r,t={})=>{const i=t.width,n=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],c=r.match(n);if(!c)return null;const l=c[0],b=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(b)?Yr(b,m=>m.test(l)):Ur(b,m=>m.test(l));let h;h=e.valueCallback?e.valueCallback(v):v,h=t.valueCallback?t.valueCallback(h):h;const f=r.slice(l.length);return{value:h,rest:f}}}function Ur(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Yr(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function qr(e){return(r,t={})=>{const i=r.match(e.matchPattern);if(!i)return null;const n=i[0],c=r.match(e.parsePattern);if(!c)return null;let l=e.valueCallback?e.valueCallback(c[0]):c[0];l=t.valueCallback?t.valueCallback(l):l;const b=r.slice(n.length);return{value:l,rest:b}}}const Xr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Kr=(e,r,t)=>{let i;const n=Xr[e];return typeof n=="string"?i=n:r===1?i=n.one:i=n.other.replace("{{count}}",r.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i},Qr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Gr=(e,r,t,i)=>Qr[e],Jr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Zr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},en={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},on={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nn=(e,r)=>{const t=Number(e),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},an={ordinalNumber:nn,era:rt({values:Jr,defaultWidth:"wide"}),quarter:rt({values:Zr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:rt({values:en,defaultWidth:"wide"}),day:rt({values:tn,defaultWidth:"wide"}),dayPeriod:rt({values:on,defaultWidth:"wide",formattingValues:rn,defaultFormattingWidth:"wide"})},ln=/^(\d+)(th|st|nd|rd)?/i,sn=/\d+/i,cn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},dn={any:[/^b/i,/^(a|c)/i]},un={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fn={any:[/1/i,/2/i,/3/i,/4/i]},hn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},vn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},pn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},gn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},mn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},yn={ordinalNumber:qr({matchPattern:ln,parsePattern:sn,valueCallback:e=>parseInt(e,10)}),era:nt({matchPatterns:cn,defaultMatchWidth:"wide",parsePatterns:dn,defaultParseWidth:"any"}),quarter:nt({matchPatterns:un,defaultMatchWidth:"wide",parsePatterns:fn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:nt({matchPatterns:hn,defaultMatchWidth:"wide",parsePatterns:vn,defaultParseWidth:"any"}),day:nt({matchPatterns:bn,defaultMatchWidth:"wide",parsePatterns:pn,defaultParseWidth:"any"}),dayPeriod:nt({matchPatterns:gn,defaultMatchWidth:"any",parsePatterns:mn,defaultParseWidth:"any"})},wn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Cn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Sn={date:Ft({formats:wn,defaultWidth:"full"}),time:Ft({formats:xn,defaultWidth:"full"}),dateTime:Ft({formats:Cn,defaultWidth:"full"})},zn={code:"en-US",formatDistance:Kr,formatLong:Sn,formatRelative:Gr,localize:an,match:yn,options:{weekStartsOn:0,firstWeekContainsDate:1}},Pn={name:"en-US",locale:zn};function Tn(e){const{mergedLocaleRef:r,mergedDateLocaleRef:t}=it(or,null)||{},i=W(()=>{var c,l;return(l=(c=r==null?void 0:r.value)===null||c===void 0?void 0:c[e])!==null&&l!==void 0?l:Nr[e]});return{dateLocaleRef:W(()=>{var c;return(c=t==null?void 0:t.value)!==null&&c!==void 0?c:Pn}),localeRef:i}}const $n=ue({name:"Eye",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},d("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),d("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Rn=ue({name:"EyeOff",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},d("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),d("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),d("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),d("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),d("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Bn=ue({name:"ChevronDown",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),kn=rr("clear",d("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},d("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},d("g",{fill:"currentColor","fill-rule":"nonzero"},d("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),{cubicBezierEaseInOut:Gt}=eo;function Mn({name:e="fade-in",enterDuration:r="0.2s",leaveDuration:t="0.2s",enterCubicBezier:i=Gt,leaveCubicBezier:n=Gt}={}){return[w(`&.${e}-transition-enter-active`,{transition:`all ${r} ${i}!important`}),w(`&.${e}-transition-leave-active`,{transition:`all ${t} ${n}!important`}),w(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),w(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const En=I("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[w(">",[I("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[w("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),w(">",[I("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),w(">, +",[I("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,[B("horizontal",`
 height: var(--n-scrollbar-height);
 `,[w(">",[p("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),B("horizontal--top",`
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `),B("horizontal--bottom",`
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `),B("vertical",`
 width: var(--n-scrollbar-width);
 `,[w(">",[p("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),B("vertical--left",`
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `),B("vertical--right",`
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `),B("disabled",[w(">",[p("scrollbar","pointer-events: none;")])]),w(">",[p("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[Mn(),w("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),Fn=Object.assign(Object.assign({},ge.props),{duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),_n=ue({name:"Scrollbar",props:Fn,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t,mergedRtlRef:i}=lt(e),n=st("Scrollbar",i,r),c=$(null),l=$(null),b=$(null),v=$(null),h=$(null),f=$(null),m=$(null),z=$(null),M=$(null),T=$(null),oe=$(null),K=$(0),ie=$(0),O=$(!1),j=$(!1);let x=!1,E=!1,F,a,g=0,S=0,k=0,H=0;const A=Vr(),J=ge("Scrollbar","-scrollbar",En,nr,e,r),V=W(()=>{const{value:u}=z,{value:y}=f,{value:P}=T;return u===null||y===null||P===null?0:Math.min(u,P*u/y+xt(J.value.self.width)*1.5)}),q=W(()=>`${V.value}px`),N=W(()=>{const{value:u}=M,{value:y}=m,{value:P}=oe;return u===null||y===null||P===null?0:P*u/y+xt(J.value.self.height)*1.5}),_=W(()=>`${N.value}px`),ee=W(()=>{const{value:u}=z,{value:y}=K,{value:P}=f,{value:U}=T;if(u===null||P===null||U===null)return 0;{const te=P-u;return te?y/te*(U-V.value):0}}),le=W(()=>`${ee.value}px`),re=W(()=>{const{value:u}=M,{value:y}=ie,{value:P}=m,{value:U}=oe;if(u===null||P===null||U===null)return 0;{const te=P-u;return te?y/te*(U-N.value):0}}),de=W(()=>`${re.value}px`),ve=W(()=>{const{value:u}=z,{value:y}=f;return u!==null&&y!==null&&y>u}),Ce=W(()=>{const{value:u}=M,{value:y}=m;return u!==null&&y!==null&&y>u}),Se=W(()=>{const{trigger:u}=e;return u==="none"||O.value}),ze=W(()=>{const{trigger:u}=e;return u==="none"||j.value}),L=W(()=>{const{container:u}=e;return u?u():l.value}),Pe=W(()=>{const{content:u}=e;return u?u():b.value}),Be=(u,y)=>{if(!e.scrollable)return;if(typeof u=="number"){be(u,y??0,0,!1,"auto");return}const{left:P,top:U,index:te,elSize:se,position:fe,behavior:G,el:ce,debounce:pe=!0}=u;(P!==void 0||U!==void 0)&&be(P??0,U??0,0,!1,G),ce!==void 0?be(0,ce.offsetTop,ce.offsetHeight,pe,G):te!==void 0&&se!==void 0?be(0,te*se,se,pe,G):fe==="bottom"?be(0,Number.MAX_SAFE_INTEGER,0,!1,G):fe==="top"&&be(0,0,0,!1,G)},D=jr(()=>{e.container||Be({top:K.value,left:ie.value})}),ke=()=>{D.isDeactivated||ye()},Me=u=>{if(D.isDeactivated)return;const{onResize:y}=e;y&&y(u),ye()},Ue=(u,y)=>{if(!e.scrollable)return;const{value:P}=L;P&&(typeof u=="object"?P.scrollBy(u):P.scrollBy(u,y||0))};function be(u,y,P,U,te){const{value:se}=L;if(se){if(U){const{scrollTop:fe,offsetHeight:G}=se;if(y>fe){y+P<=fe+G||se.scrollTo({left:u,top:y+P-G,behavior:te});return}}se.scrollTo({left:u,top:y,behavior:te})}}function Ye(){Ke(),Q(),ye()}function qe(){Ee()}function Ee(){Xe(),Te()}function Xe(){a!==void 0&&window.clearTimeout(a),a=window.setTimeout(()=>{j.value=!1},e.duration)}function Te(){F!==void 0&&window.clearTimeout(F),F=window.setTimeout(()=>{O.value=!1},e.duration)}function Ke(){F!==void 0&&window.clearTimeout(F),O.value=!0}function Q(){a!==void 0&&window.clearTimeout(a),j.value=!0}function ne(u){const{onScroll:y}=e;y&&y(u),me()}function me(){const{value:u}=L;u&&(K.value=u.scrollTop,ie.value=u.scrollLeft*(n!=null&&n.value?-1:1))}function $t(){const{value:u}=Pe;u&&(f.value=u.offsetHeight,m.value=u.offsetWidth);const{value:y}=L;y&&(z.value=y.offsetHeight,M.value=y.offsetWidth);const{value:P}=h,{value:U}=v;P&&(oe.value=P.offsetWidth),U&&(T.value=U.offsetHeight)}function Fe(){const{value:u}=L;u&&(K.value=u.scrollTop,ie.value=u.scrollLeft*(n!=null&&n.value?-1:1),z.value=u.offsetHeight,M.value=u.offsetWidth,f.value=u.scrollHeight,m.value=u.scrollWidth);const{value:y}=h,{value:P}=v;y&&(oe.value=y.offsetWidth),P&&(T.value=P.offsetHeight)}function ye(){e.scrollable&&(e.useUnifiedContainer?Fe():($t(),me()))}function dt(u){var y;return!(!((y=c.value)===null||y===void 0)&&y.contains(_r(u)))}function Rt(u){u.preventDefault(),u.stopPropagation(),E=!0,Le("mousemove",window,Qe,!0),Le("mouseup",window,ut,!0),S=ie.value,k=n!=null&&n.value?window.innerWidth-u.clientX:u.clientX}function Qe(u){if(!E)return;F!==void 0&&window.clearTimeout(F),a!==void 0&&window.clearTimeout(a);const{value:y}=M,{value:P}=m,{value:U}=N;if(y===null||P===null)return;const se=(n!=null&&n.value?window.innerWidth-u.clientX-k:u.clientX-k)*(P-y)/(y-U),fe=P-y;let G=S+se;G=Math.min(fe,G),G=Math.max(G,0);const{value:ce}=L;if(ce){ce.scrollLeft=G*(n!=null&&n.value?-1:1);const{internalOnUpdateScrollLeft:pe}=e;pe&&pe(G)}}function ut(u){u.preventDefault(),u.stopPropagation(),xe("mousemove",window,Qe,!0),xe("mouseup",window,ut,!0),E=!1,ye(),dt(u)&&Ee()}function Bt(u){u.preventDefault(),u.stopPropagation(),x=!0,Le("mousemove",window,Ge,!0),Le("mouseup",window,Je,!0),g=K.value,H=u.clientY}function Ge(u){if(!x)return;F!==void 0&&window.clearTimeout(F),a!==void 0&&window.clearTimeout(a);const{value:y}=z,{value:P}=f,{value:U}=V;if(y===null||P===null)return;const se=(u.clientY-H)*(P-y)/(y-U),fe=P-y;let G=g+se;G=Math.min(fe,G),G=Math.max(G,0);const{value:ce}=L;ce&&(ce.scrollTop=G)}function Je(u){u.preventDefault(),u.stopPropagation(),xe("mousemove",window,Ge,!0),xe("mouseup",window,Je,!0),x=!1,ye(),dt(u)&&Ee()}wt(()=>{const{value:u}=Ce,{value:y}=ve,{value:P}=r,{value:U}=h,{value:te}=v;U&&(u?U.classList.remove(`${P}-scrollbar-rail--disabled`):U.classList.add(`${P}-scrollbar-rail--disabled`)),te&&(y?te.classList.remove(`${P}-scrollbar-rail--disabled`):te.classList.add(`${P}-scrollbar-rail--disabled`))}),Ht(()=>{e.container||ye()}),Lt(()=>{F!==void 0&&window.clearTimeout(F),a!==void 0&&window.clearTimeout(a),xe("mousemove",window,Ge,!0),xe("mouseup",window,Je,!0)});const ft=W(()=>{const{common:{cubicBezierEaseInOut:u},self:{color:y,colorHover:P,height:U,width:te,borderRadius:se,railInsetHorizontalTop:fe,railInsetHorizontalBottom:G,railInsetVerticalRight:ce,railInsetVerticalLeft:pe,railColor:ht}}=J.value;return{"--n-scrollbar-bezier":u,"--n-scrollbar-color":y,"--n-scrollbar-color-hover":P,"--n-scrollbar-border-radius":se,"--n-scrollbar-width":te,"--n-scrollbar-height":U,"--n-scrollbar-rail-inset-horizontal-top":fe,"--n-scrollbar-rail-inset-horizontal-bottom":G,"--n-scrollbar-rail-inset-vertical-right":n!=null&&n.value?Kt(ce):ce,"--n-scrollbar-rail-inset-vertical-left":n!=null&&n.value?Kt(pe):pe,"--n-scrollbar-rail-color":ht}}),$e=t?Tt("scrollbar",void 0,ft,e):void 0;return Object.assign(Object.assign({},{scrollTo:Be,scrollBy:Ue,sync:ye,syncUnifiedContainer:Fe,handleMouseEnterWrapper:Ye,handleMouseLeaveWrapper:qe}),{mergedClsPrefix:r,rtlEnabled:n,containerScrollTop:K,wrapperRef:c,containerRef:l,contentRef:b,yRailRef:v,xRailRef:h,needYBar:ve,needXBar:Ce,yBarSizePx:q,xBarSizePx:_,yBarTopPx:le,xBarLeftPx:de,isShowXBar:Se,isShowYBar:ze,isIos:A,handleScroll:ne,handleContentResize:ke,handleContainerResize:Me,handleYScrollMouseDown:Bt,handleXScrollMouseDown:Rt,cssVars:t?void 0:ft,themeClass:$e==null?void 0:$e.themeClass,onRender:$e==null?void 0:$e.onRender})},render(){var e;const{$slots:r,mergedClsPrefix:t,triggerDisplayManually:i,rtlEnabled:n,internalHoistYRail:c,yPlacement:l,xPlacement:b,xScrollable:v}=this;if(!this.scrollable)return(e=r.default)===null||e===void 0?void 0:e.call(r);const h=this.trigger==="none",f=(M,T)=>d("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`,`${t}-scrollbar-rail--vertical--${l}`,M],"data-scrollbar-rail":!0,style:[T||"",this.verticalRailStyle],"aria-hidden":!0},d(h?qt:Yt,h?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?d("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),m=()=>{var M,T;return(M=this.onRender)===null||M===void 0||M.call(this),d("div",ar(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,n&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:i?void 0:this.handleMouseEnterWrapper,onMouseleave:i?void 0:this.handleMouseLeaveWrapper}),[this.container?(T=r.default)===null||T===void 0?void 0:T.call(r):d("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},d(Wt,{onResize:this.handleContentResize},{default:()=>d("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},r)})),c?null:f(void 0,void 0),v&&d("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`,`${t}-scrollbar-rail--horizontal--${b}`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},d(h?qt:Yt,h?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?d("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:n?this.xBarLeftPx:void 0,left:n?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},z=this.container?m():d(Wt,{onResize:this.handleContainerResize},{default:m});return c?d(Vt,null,z,f(this.themeClass,this.cssVars)):z}}),Wn=I("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Dn=ue({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){jt("-base-wave",Wn,Ct(e,"clsPrefix"));const r=$(null),t=$(!1);let i=null;return Lt(()=>{i!==null&&window.clearTimeout(i)}),{active:t,selfRef:r,play(){i!==null&&(window.clearTimeout(i),t.value=!1,i=null),St(()=>{var n;(n=r.value)===null||n===void 0||n.offsetHeight,t.value=!0,i=window.setTimeout(()=>{t.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:e}=this;return d("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),In=I("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[w(">",[p("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[w("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),w("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),p("placeholder",`
 display: flex;
 `),p("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[to({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),It=ue({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return jt("-base-clear",In,Ct(e,"clsPrefix")),{handleMouseDown(r){r.preventDefault()}}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-base-clear`},d(oo,null,{default:()=>{var r,t;return this.show?d("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},at(this.$slots.icon,()=>[d(zt,{clsPrefix:e},{default:()=>d(kn,null)})])):d("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(r=this.$slots).placeholder)===null||t===void 0?void 0:t.call(r))}}))}}),Hn=ue({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:r}){return()=>{const{clsPrefix:t}=e;return d(ro,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?d(It,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>d(zt,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>at(r.default,()=>[d(Bn,null)])})}):null})}}}),{cubicBezierEaseInOut:Re}=eo;function An({duration:e=".2s",delay:r=".1s"}={}){return[w("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),w("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),w("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Re},
 max-width ${e} ${Re} ${r},
 margin-left ${e} ${Re} ${r},
 margin-right ${e} ${Re} ${r};
 `),w("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Re} ${r},
 max-width ${e} ${Re},
 margin-left ${e} ${Re},
 margin-right ${e} ${Re};
 `)]}const Ln=ct&&"chrome"in window;ct&&navigator.userAgent.includes("Firefox");const lo=ct&&navigator.userAgent.includes("Safari")&&!Ln;function On(e){const{textColor2:r,textColor3:t,textColorDisabled:i,primaryColor:n,primaryColorHover:c,inputColor:l,inputColorDisabled:b,borderColor:v,warningColor:h,warningColorHover:f,errorColor:m,errorColorHover:z,borderRadius:M,lineHeight:T,fontSizeTiny:oe,fontSizeSmall:K,fontSizeMedium:ie,fontSizeLarge:O,heightTiny:j,heightSmall:x,heightMedium:E,heightLarge:F,actionColor:a,clearColor:g,clearColorHover:S,clearColorPressed:k,placeholderColor:H,placeholderColorDisabled:A,iconColor:J,iconColorDisabled:V,iconColorHover:q,iconColorPressed:N}=e;return Object.assign(Object.assign({},lr),{countTextColorDisabled:i,countTextColor:t,heightTiny:j,heightSmall:x,heightMedium:E,heightLarge:F,fontSizeTiny:oe,fontSizeSmall:K,fontSizeMedium:ie,fontSizeLarge:O,lineHeight:T,lineHeightTextarea:T,borderRadius:M,iconSize:"16px",groupLabelColor:a,groupLabelTextColor:r,textColor:r,textColorDisabled:i,textDecorationColor:r,caretColor:n,placeholderColor:H,placeholderColorDisabled:A,color:l,colorDisabled:b,colorFocus:l,groupLabelBorder:`1px solid ${v}`,border:`1px solid ${v}`,borderHover:`1px solid ${c}`,borderDisabled:`1px solid ${v}`,borderFocus:`1px solid ${c}`,boxShadowFocus:`0 0 0 2px ${Ae(n,{alpha:.2})}`,loadingColor:n,loadingColorWarning:h,borderWarning:`1px solid ${h}`,borderHoverWarning:`1px solid ${f}`,colorFocusWarning:l,borderFocusWarning:`1px solid ${f}`,boxShadowFocusWarning:`0 0 0 2px ${Ae(h,{alpha:.2})}`,caretColorWarning:h,loadingColorError:m,borderError:`1px solid ${m}`,borderHoverError:`1px solid ${z}`,colorFocusError:l,borderFocusError:`1px solid ${z}`,boxShadowFocusError:`0 0 0 2px ${Ae(m,{alpha:.2})}`,caretColorError:m,clearColor:g,clearColorHover:S,clearColorPressed:k,iconColor:J,iconColorDisabled:V,iconColorHover:q,iconColorPressed:N,suffixTextColor:r})}const Vn={name:"Input",common:ir,self:On},so=Ot("n-input");function jn(e){let r=0;for(const t of e)r++;return r}function gt(e){return e===""||e==null}function Nn(e){const r=$(null);function t(){const{value:c}=e;if(!(c!=null&&c.focus)){n();return}const{selectionStart:l,selectionEnd:b,value:v}=c;if(l==null||b==null){n();return}r.value={start:l,end:b,beforeText:v.slice(0,l),afterText:v.slice(b)}}function i(){var c;const{value:l}=r,{value:b}=e;if(!l||!b)return;const{value:v}=b,{start:h,beforeText:f,afterText:m}=l;let z=v.length;if(v.endsWith(m))z=v.length-m.length;else if(v.startsWith(f))z=f.length;else{const M=f[h-1],T=v.indexOf(M,h-1);T!==-1&&(z=T+1)}(c=b.setSelectionRange)===null||c===void 0||c.call(b,z,z)}function n(){r.value=null}return Pt(e,n),{recordCursor:t,restoreCursor:i}}const Jt=ue({name:"InputWordCount",setup(e,{slots:r}){const{mergedValueRef:t,maxlengthRef:i,mergedClsPrefixRef:n,countGraphemesRef:c}=it(so),l=W(()=>{const{value:b}=t;return b===null||Array.isArray(b)?0:(c.value||jn)(b)});return()=>{const{value:b}=i,{value:v}=t;return d("span",{class:`${n.value}-input-word-count`},sr(r.default,{value:v===null||Array.isArray(v)?"":v},()=>[b===void 0?l.value:`${l.value} / ${b}`]))}}}),Un=I("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[p("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),p("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),p("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[w("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),w("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),w("&:-webkit-autofill ~",[p("placeholder","display: none;")])]),B("round",[He("textarea","border-radius: calc(var(--n-height) / 2);")]),p("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[w("span",`
 width: 100%;
 display: inline-block;
 `)]),B("textarea",[p("placeholder","overflow: visible;")]),He("autosize","width: 100%;"),B("autosize",[p("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),I("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),p("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),p("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[w("&[type=password]::-ms-reveal","display: none;"),w("+",[p("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),He("textarea",[p("placeholder","white-space: nowrap;")]),p("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),B("textarea","width: 100%;",[I("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),B("resizable",[I("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),p("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),p("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),B("pair",[p("input-el, placeholder","text-align: center;"),p("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[I("icon",`
 color: var(--n-icon-color);
 `),I("base-icon",`
 color: var(--n-icon-color);
 `)])]),B("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[p("border","border: var(--n-border-disabled);"),p("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),p("placeholder","color: var(--n-placeholder-color-disabled);"),p("separator","color: var(--n-text-color-disabled);",[I("icon",`
 color: var(--n-icon-color-disabled);
 `),I("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),I("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),p("suffix, prefix","color: var(--n-text-color-disabled);",[I("icon",`
 color: var(--n-icon-color-disabled);
 `),I("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),He("disabled",[p("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[w("&:hover",`
 color: var(--n-icon-color-hover);
 `),w("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),w("&:hover",[p("state-border","border: var(--n-border-hover);")]),B("focus","background-color: var(--n-color-focus);",[p("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),p("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),p("state-border",`
 border-color: #0000;
 z-index: 1;
 `),p("prefix","margin-right: 4px;"),p("suffix",`
 margin-left: 4px;
 `),p("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[I("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),I("base-clear",`
 font-size: var(--n-icon-size);
 `,[p("placeholder",[I("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),w(">",[I("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),I("base-icon",`
 font-size: var(--n-icon-size);
 `)]),I("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>B(`${e}-status`,[He("disabled",[I("base-loading",`
 color: var(--n-loading-color-${e})
 `),p("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),p("state-border",`
 border: var(--n-border-${e});
 `),w("&:hover",[p("state-border",`
 border: var(--n-border-hover-${e});
 `)]),w("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[p("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),B("focus",`
 background-color: var(--n-color-focus-${e});
 `,[p("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Yn=I("input",[B("disabled",[p("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),qn=Object.assign(Object.assign({},ge.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Xn=ue({name:"Input",props:qn,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:t,inlineThemeDisabled:i,mergedRtlRef:n}=lt(e),c=ge("Input","-input",Un,Vn,e,r);lo&&jt("-input-safari",Yn,r);const l=$(null),b=$(null),v=$(null),h=$(null),f=$(null),m=$(null),z=$(null),M=Nn(z),T=$(null),{localeRef:oe}=Tn("Input"),K=$(e.defaultValue),ie=Ct(e,"value"),O=cr(ie,K),j=io(e),{mergedSizeRef:x,mergedDisabledRef:E,mergedStatusRef:F}=j,a=$(!1),g=$(!1),S=$(!1),k=$(!1);let H=null;const A=W(()=>{const{placeholder:o,pair:s}=e;return s?Array.isArray(o)?o:o===void 0?["",""]:[o,o]:o===void 0?[oe.value.placeholder]:[o]}),J=W(()=>{const{value:o}=S,{value:s}=O,{value:C}=A;return!o&&(gt(s)||Array.isArray(s)&&gt(s[0]))&&C[0]}),V=W(()=>{const{value:o}=S,{value:s}=O,{value:C}=A;return!o&&C[1]&&(gt(s)||Array.isArray(s)&&gt(s[1]))}),q=Dt(()=>e.internalForceFocus||a.value),N=Dt(()=>{if(E.value||e.readonly||!e.clearable||!q.value&&!g.value)return!1;const{value:o}=O,{value:s}=q;return e.pair?!!(Array.isArray(o)&&(o[0]||o[1]))&&(g.value||s):!!o&&(g.value||s)}),_=W(()=>{const{showPasswordOn:o}=e;if(o)return o;if(e.showPasswordToggle)return"click"}),ee=$(!1),le=W(()=>{const{textDecoration:o}=e;return o?Array.isArray(o)?o.map(s=>({textDecoration:s})):[{textDecoration:o}]:["",""]}),re=$(void 0),de=()=>{var o,s;if(e.type==="textarea"){const{autosize:C}=e;if(C&&(re.value=(s=(o=T.value)===null||o===void 0?void 0:o.$el)===null||s===void 0?void 0:s.offsetWidth),!b.value||typeof C=="boolean")return;const{paddingTop:X,paddingBottom:Z,lineHeight:Y}=window.getComputedStyle(b.value),_e=Number(X.slice(0,-2)),We=Number(Z.slice(0,-2)),De=Number(Y.slice(0,-2)),{value:Ze}=v;if(!Ze)return;if(C.minRows){const et=Math.max(C.minRows,1),kt=`${_e+We+De*et}px`;Ze.style.minHeight=kt}if(C.maxRows){const et=`${_e+We+De*C.maxRows}px`;Ze.style.maxHeight=et}}},ve=W(()=>{const{maxlength:o}=e;return o===void 0?void 0:Number(o)});Ht(()=>{const{value:o}=O;Array.isArray(o)||ce(o)});const Ce=dr().proxy;function Se(o,s){const{onUpdateValue:C,"onUpdate:value":X,onInput:Z}=e,{nTriggerFormInput:Y}=j;C&&ae(C,o,s),X&&ae(X,o,s),Z&&ae(Z,o,s),K.value=o,Y()}function ze(o,s){const{onChange:C}=e,{nTriggerFormChange:X}=j;C&&ae(C,o,s),K.value=o,X()}function L(o){const{onBlur:s}=e,{nTriggerFormBlur:C}=j;s&&ae(s,o),C()}function Pe(o){const{onFocus:s}=e,{nTriggerFormFocus:C}=j;s&&ae(s,o),C()}function Be(o){const{onClear:s}=e;s&&ae(s,o)}function D(o){const{onInputBlur:s}=e;s&&ae(s,o)}function ke(o){const{onInputFocus:s}=e;s&&ae(s,o)}function Me(){const{onDeactivate:o}=e;o&&ae(o)}function Ue(){const{onActivate:o}=e;o&&ae(o)}function be(o){const{onClick:s}=e;s&&ae(s,o)}function Ye(o){const{onWrapperFocus:s}=e;s&&ae(s,o)}function qe(o){const{onWrapperBlur:s}=e;s&&ae(s,o)}function Ee(){S.value=!0}function Xe(o){S.value=!1,o.target===m.value?Te(o,1):Te(o,0)}function Te(o,s=0,C="input"){const X=o.target.value;if(ce(X),o instanceof InputEvent&&!o.isComposing&&(S.value=!1),e.type==="textarea"){const{value:Y}=T;Y&&Y.syncUnifiedContainer()}if(H=X,S.value)return;M.recordCursor();const Z=Ke(X);if(Z)if(!e.pair)C==="input"?Se(X,{source:s}):ze(X,{source:s});else{let{value:Y}=O;Array.isArray(Y)?Y=[Y[0],Y[1]]:Y=["",""],Y[s]=X,C==="input"?Se(Y,{source:s}):ze(Y,{source:s})}Ce.$forceUpdate(),Z||St(M.restoreCursor)}function Ke(o){const{countGraphemes:s,maxlength:C,minlength:X}=e;if(s){let Y;if(C!==void 0&&(Y===void 0&&(Y=s(o)),Y>Number(C))||X!==void 0&&(Y===void 0&&(Y=s(o)),Y<Number(C)))return!1}const{allowInput:Z}=e;return typeof Z=="function"?Z(o):!0}function Q(o){D(o),o.relatedTarget===l.value&&Me(),o.relatedTarget!==null&&(o.relatedTarget===f.value||o.relatedTarget===m.value||o.relatedTarget===b.value)||(k.value=!1),Fe(o,"blur"),z.value=null}function ne(o,s){ke(o),a.value=!0,k.value=!0,Ue(),Fe(o,"focus"),s===0?z.value=f.value:s===1?z.value=m.value:s===2&&(z.value=b.value)}function me(o){e.passivelyActivated&&(qe(o),Fe(o,"blur"))}function $t(o){e.passivelyActivated&&(a.value=!0,Ye(o),Fe(o,"focus"))}function Fe(o,s){o.relatedTarget!==null&&(o.relatedTarget===f.value||o.relatedTarget===m.value||o.relatedTarget===b.value||o.relatedTarget===l.value)||(s==="focus"?(Pe(o),a.value=!0):s==="blur"&&(L(o),a.value=!1))}function ye(o,s){Te(o,s,"change")}function dt(o){be(o)}function Rt(o){Be(o),Qe()}function Qe(){e.pair?(Se(["",""],{source:"clear"}),ze(["",""],{source:"clear"})):(Se("",{source:"clear"}),ze("",{source:"clear"}))}function ut(o){const{onMousedown:s}=e;s&&s(o);const{tagName:C}=o.target;if(C!=="INPUT"&&C!=="TEXTAREA"){if(e.resizable){const{value:X}=l;if(X){const{left:Z,top:Y,width:_e,height:We}=X.getBoundingClientRect(),De=14;if(Z+_e-De<o.clientX&&o.clientX<Z+_e&&Y+We-De<o.clientY&&o.clientY<Y+We)return}}o.preventDefault(),a.value||P()}}function Bt(){var o;g.value=!0,e.type==="textarea"&&((o=T.value)===null||o===void 0||o.handleMouseEnterWrapper())}function Ge(){var o;g.value=!1,e.type==="textarea"&&((o=T.value)===null||o===void 0||o.handleMouseLeaveWrapper())}function Je(){E.value||_.value==="click"&&(ee.value=!ee.value)}function ft(o){if(E.value)return;o.preventDefault();const s=X=>{X.preventDefault(),xe("mouseup",document,s)};if(Le("mouseup",document,s),_.value!=="mousedown")return;ee.value=!0;const C=()=>{ee.value=!1,xe("mouseup",document,C)};Le("mouseup",document,C)}function $e(o){e.onKeyup&&ae(e.onKeyup,o)}function Nt(o){switch(e.onKeydown&&ae(e.onKeydown,o),o.key){case"Escape":y();break;case"Enter":u(o);break}}function u(o){var s,C;if(e.passivelyActivated){const{value:X}=k;if(X){e.internalDeactivateOnEnter&&y();return}o.preventDefault(),e.type==="textarea"?(s=b.value)===null||s===void 0||s.focus():(C=f.value)===null||C===void 0||C.focus()}}function y(){e.passivelyActivated&&(k.value=!1,St(()=>{var o;(o=l.value)===null||o===void 0||o.focus()}))}function P(){var o,s,C;E.value||(e.passivelyActivated?(o=l.value)===null||o===void 0||o.focus():((s=b.value)===null||s===void 0||s.focus(),(C=f.value)===null||C===void 0||C.focus()))}function U(){var o;!((o=l.value)===null||o===void 0)&&o.contains(document.activeElement)&&document.activeElement.blur()}function te(){var o,s;(o=b.value)===null||o===void 0||o.select(),(s=f.value)===null||s===void 0||s.select()}function se(){E.value||(b.value?b.value.focus():f.value&&f.value.focus())}function fe(){const{value:o}=l;o!=null&&o.contains(document.activeElement)&&o!==document.activeElement&&y()}function G(o){if(e.type==="textarea"){const{value:s}=b;s==null||s.scrollTo(o)}else{const{value:s}=f;s==null||s.scrollTo(o)}}function ce(o){const{type:s,pair:C,autosize:X}=e;if(!C&&X)if(s==="textarea"){const{value:Z}=v;Z&&(Z.textContent=`${o??""}\r
`)}else{const{value:Z}=h;Z&&(o?Z.textContent=o:Z.innerHTML="&nbsp;")}}function pe(){de()}const ht=$({top:"0"});function co(o){var s;const{scrollTop:C}=o.target;ht.value.top=`${-C}px`,(s=T.value)===null||s===void 0||s.syncUnifiedContainer()}let vt=null;wt(()=>{const{autosize:o,type:s}=e;o&&s==="textarea"?vt=Pt(O,C=>{!Array.isArray(C)&&C!==H&&ce(C)}):vt==null||vt()});let bt=null;wt(()=>{e.type==="textarea"?bt=Pt(O,o=>{var s;!Array.isArray(o)&&o!==H&&((s=T.value)===null||s===void 0||s.syncUnifiedContainer())}):bt==null||bt()}),Zt(so,{mergedValueRef:O,maxlengthRef:ve,mergedClsPrefixRef:r,countGraphemesRef:Ct(e,"countGraphemes")});const uo={wrapperElRef:l,inputElRef:f,textareaElRef:b,isCompositing:S,clear:Qe,focus:P,blur:U,select:te,deactivate:fe,activate:se,scrollTo:G},fo=st("Input",n,r),Ut=W(()=>{const{value:o}=x,{common:{cubicBezierEaseInOut:s},self:{color:C,borderRadius:X,textColor:Z,caretColor:Y,caretColorError:_e,caretColorWarning:We,textDecorationColor:De,border:Ze,borderDisabled:et,borderHover:kt,borderFocus:ho,placeholderColor:vo,placeholderColorDisabled:bo,lineHeightTextarea:po,colorDisabled:go,colorFocus:mo,textColorDisabled:yo,boxShadowFocus:wo,iconSize:xo,colorFocusWarning:Co,boxShadowFocusWarning:So,borderWarning:zo,borderFocusWarning:Po,borderHoverWarning:To,colorFocusError:$o,boxShadowFocusError:Ro,borderError:Bo,borderFocusError:ko,borderHoverError:Mo,clearSize:Eo,clearColor:Fo,clearColorHover:_o,clearColorPressed:Wo,iconColor:Do,iconColorDisabled:Io,suffixTextColor:Ho,countTextColor:Ao,countTextColorDisabled:Lo,iconColorHover:Oo,iconColorPressed:Vo,loadingColor:jo,loadingColorError:No,loadingColorWarning:Uo,[R("padding",o)]:Yo,[R("fontSize",o)]:qo,[R("height",o)]:Xo}}=c.value,{left:Ko,right:Qo}=At(Yo);return{"--n-bezier":s,"--n-count-text-color":Ao,"--n-count-text-color-disabled":Lo,"--n-color":C,"--n-font-size":qo,"--n-border-radius":X,"--n-height":Xo,"--n-padding-left":Ko,"--n-padding-right":Qo,"--n-text-color":Z,"--n-caret-color":Y,"--n-text-decoration-color":De,"--n-border":Ze,"--n-border-disabled":et,"--n-border-hover":kt,"--n-border-focus":ho,"--n-placeholder-color":vo,"--n-placeholder-color-disabled":bo,"--n-icon-size":xo,"--n-line-height-textarea":po,"--n-color-disabled":go,"--n-color-focus":mo,"--n-text-color-disabled":yo,"--n-box-shadow-focus":wo,"--n-loading-color":jo,"--n-caret-color-warning":We,"--n-color-focus-warning":Co,"--n-box-shadow-focus-warning":So,"--n-border-warning":zo,"--n-border-focus-warning":Po,"--n-border-hover-warning":To,"--n-loading-color-warning":Uo,"--n-caret-color-error":_e,"--n-color-focus-error":$o,"--n-box-shadow-focus-error":Ro,"--n-border-error":Bo,"--n-border-focus-error":ko,"--n-border-hover-error":Mo,"--n-loading-color-error":No,"--n-clear-color":Fo,"--n-clear-size":Eo,"--n-clear-color-hover":_o,"--n-clear-color-pressed":Wo,"--n-icon-color":Do,"--n-icon-color-hover":Oo,"--n-icon-color-pressed":Vo,"--n-icon-color-disabled":Io,"--n-suffix-text-color":Ho}}),Oe=i?Tt("input",W(()=>{const{value:o}=x;return o[0]}),Ut,e):void 0;return Object.assign(Object.assign({},uo),{wrapperElRef:l,inputElRef:f,inputMirrorElRef:h,inputEl2Ref:m,textareaElRef:b,textareaMirrorElRef:v,textareaScrollbarInstRef:T,rtlEnabled:fo,uncontrolledValue:K,mergedValue:O,passwordVisible:ee,mergedPlaceholder:A,showPlaceholder1:J,showPlaceholder2:V,mergedFocus:q,isComposing:S,activated:k,showClearButton:N,mergedSize:x,mergedDisabled:E,textDecorationStyle:le,mergedClsPrefix:r,mergedBordered:t,mergedShowPasswordOn:_,placeholderStyle:ht,mergedStatus:F,textAreaScrollContainerWidth:re,handleTextAreaScroll:co,handleCompositionStart:Ee,handleCompositionEnd:Xe,handleInput:Te,handleInputBlur:Q,handleInputFocus:ne,handleWrapperBlur:me,handleWrapperFocus:$t,handleMouseEnter:Bt,handleMouseLeave:Ge,handleMouseDown:ut,handleChange:ye,handleClick:dt,handleClear:Rt,handlePasswordToggleClick:Je,handlePasswordToggleMousedown:ft,handleWrapperKeydown:Nt,handleWrapperKeyup:$e,handleTextAreaMirrorResize:pe,getTextareaScrollContainer:()=>b.value,mergedTheme:c,cssVars:i?void 0:Ut,themeClass:Oe==null?void 0:Oe.themeClass,onRender:Oe==null?void 0:Oe.onRender})},render(){var e,r;const{mergedClsPrefix:t,mergedStatus:i,themeClass:n,type:c,countGraphemes:l,onRender:b}=this,v=this.$slots;return b==null||b(),d("div",{ref:"wrapperElRef",class:[`${t}-input`,n,i&&`${t}-input--${i}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:c==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&c!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},d("div",{class:`${t}-input-wrapper`},he(v.prefix,h=>h&&d("div",{class:`${t}-input__prefix`},h)),c==="textarea"?d(_n,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var h,f;const{textAreaScrollContainerWidth:m}=this,z={width:this.autosize&&m&&`${m}px`};return d(Vt,null,d("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(h=this.inputProps)===null||h===void 0?void 0:h.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(f=this.inputProps)===null||f===void 0?void 0:f.style,z],onBlur:this.handleInputBlur,onFocus:M=>{this.handleInputFocus(M,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?d("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,z],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?d(Wt,{onResize:this.handleTextAreaMirrorResize},{default:()=>d("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):d("div",{class:`${t}-input__input`},d("input",Object.assign({type:c==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":c},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(r=this.inputProps)===null||r===void 0?void 0:r.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,0)},onInput:h=>{this.handleInput(h,0)},onChange:h=>{this.handleChange(h,0)}})),this.showPlaceholder1?d("div",{class:`${t}-input__placeholder`},d("span",null,this.mergedPlaceholder[0])):null,this.autosize?d("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&he(v.suffix,h=>h||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?d("div",{class:`${t}-input__suffix`},[he(v["clear-icon-placeholder"],f=>(this.clearable||f)&&d(It,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>f,icon:()=>{var m,z;return(z=(m=this.$slots)["clear-icon"])===null||z===void 0?void 0:z.call(m)}})),this.internalLoadingBeforeSuffix?null:h,this.loading!==void 0?d(Hn,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?h:null,this.showCount&&this.type!=="textarea"?d(Jt,null,{default:f=>{var m;return(m=v.count)===null||m===void 0?void 0:m.call(v,f)}}):null,this.mergedShowPasswordOn&&this.type==="password"?d("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?at(v["password-visible-icon"],()=>[d(zt,{clsPrefix:t},{default:()=>d($n,null)})]):at(v["password-invisible-icon"],()=>[d(zt,{clsPrefix:t},{default:()=>d(Rn,null)})])):null]):null)),this.pair?d("span",{class:`${t}-input__separator`},at(v.separator,()=>[this.separator])):null,this.pair?d("div",{class:`${t}-input-wrapper`},d("div",{class:`${t}-input__input`},d("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,1)},onInput:h=>{this.handleInput(h,1)},onChange:h=>{this.handleChange(h,1)}}),this.showPlaceholder2?d("div",{class:`${t}-input__placeholder`},d("span",null,this.mergedPlaceholder[1])):null),he(v.suffix,h=>(this.clearable||h)&&d("div",{class:`${t}-input__suffix`},[this.clearable&&d(It,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var f;return(f=v["clear-icon"])===null||f===void 0?void 0:f.call(v)},placeholder:()=>{var f;return(f=v["clear-icon-placeholder"])===null||f===void 0?void 0:f.call(v)}}),h]))):null,this.mergedBordered?d("div",{class:`${t}-input__border`}):null,this.mergedBordered?d("div",{class:`${t}-input__state-border`}):null,this.showCount&&c==="textarea"?d(Jt,null,{default:h=>{var f;const{renderCount:m}=this;return m?m(h):(f=v.count)===null||f===void 0?void 0:f.call(v,h)}}):null)}});function Ie(e){return no(e,[255,255,255,.16])}function mt(e){return no(e,[0,0,0,.12])}const Kn=Ot("n-button-group"),Qn=w([I("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[B("color",[p("border",{borderColor:"var(--n-border-color)"}),B("disabled",[p("border",{borderColor:"var(--n-border-color-disabled)"})]),He("disabled",[w("&:focus",[p("state-border",{borderColor:"var(--n-border-color-focus)"})]),w("&:hover",[p("state-border",{borderColor:"var(--n-border-color-hover)"})]),w("&:active",[p("state-border",{borderColor:"var(--n-border-color-pressed)"})]),B("pressed",[p("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),B("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[p("border",{border:"var(--n-border-disabled)"})]),He("disabled",[w("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[p("state-border",{border:"var(--n-border-focus)"})]),w("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[p("state-border",{border:"var(--n-border-hover)"})]),w("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[p("state-border",{border:"var(--n-border-pressed)"})]),B("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[p("state-border",{border:"var(--n-border-pressed)"})])]),B("loading","cursor: wait;"),I("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[B("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ct&&"MozBoxSizing"in document.createElement("div").style?w("&::moz-focus-inner",{border:0}):null,p("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),p("border",{border:"var(--n-border)"}),p("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),p("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[I("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[to({top:"50%",originalTransform:"translateY(-50%)"})]),An()]),p("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[w("~",[p("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),B("block",`
 display: flex;
 width: 100%;
 `),B("dashed",[p("border, state-border",{borderStyle:"dashed !important"})]),B("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),w("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),w("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Gn=Object.assign(Object.assign({},ge.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!lo}}),Jn=ue({name:"Button",props:Gn,setup(e){const r=$(null),t=$(null),i=$(!1),n=Dt(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),c=it(Kn,{}),{mergedSizeRef:l}=io({},{defaultSize:"medium",mergedSize:x=>{const{size:E}=e;if(E)return E;const{size:F}=c;if(F)return F;const{mergedSize:a}=x||{};return a?a.value:"medium"}}),b=W(()=>e.focusable&&!e.disabled),v=x=>{var E;b.value||x.preventDefault(),!e.nativeFocusBehavior&&(x.preventDefault(),!e.disabled&&b.value&&((E=r.value)===null||E===void 0||E.focus({preventScroll:!0})))},h=x=>{var E;if(!e.disabled&&!e.loading){const{onClick:F}=e;F&&ae(F,x),e.text||(E=t.value)===null||E===void 0||E.play()}},f=x=>{switch(x.key){case"Enter":if(!e.keyboard)return;i.value=!1}},m=x=>{switch(x.key){case"Enter":if(!e.keyboard||e.loading){x.preventDefault();return}i.value=!0}},z=()=>{i.value=!1},{inlineThemeDisabled:M,mergedClsPrefixRef:T,mergedRtlRef:oe}=lt(e),K=ge("Button","-button",Qn,ur,e,T),ie=st("Button",oe,T),O=W(()=>{const x=K.value,{common:{cubicBezierEaseInOut:E,cubicBezierEaseOut:F},self:a}=x,{rippleDuration:g,opacityDisabled:S,fontWeight:k,fontWeightStrong:H}=a,A=l.value,{dashed:J,type:V,ghost:q,text:N,color:_,round:ee,circle:le,textColor:re,secondary:de,tertiary:ve,quaternary:Ce,strong:Se}=e,ze={"--n-font-weight":Se?H:k};let L={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Pe=V==="tertiary",Be=V==="default",D=Pe?"default":V;if(N){const Q=re||_;L={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":Q||a[R("textColorText",D)],"--n-text-color-hover":Q?Ie(Q):a[R("textColorTextHover",D)],"--n-text-color-pressed":Q?mt(Q):a[R("textColorTextPressed",D)],"--n-text-color-focus":Q?Ie(Q):a[R("textColorTextHover",D)],"--n-text-color-disabled":Q||a[R("textColorTextDisabled",D)]}}else if(q||J){const Q=re||_;L={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":_||a[R("rippleColor",D)],"--n-text-color":Q||a[R("textColorGhost",D)],"--n-text-color-hover":Q?Ie(Q):a[R("textColorGhostHover",D)],"--n-text-color-pressed":Q?mt(Q):a[R("textColorGhostPressed",D)],"--n-text-color-focus":Q?Ie(Q):a[R("textColorGhostHover",D)],"--n-text-color-disabled":Q||a[R("textColorGhostDisabled",D)]}}else if(de){const Q=Be?a.textColor:Pe?a.textColorTertiary:a[R("color",D)],ne=_||Q,me=V!=="default"&&V!=="tertiary";L={"--n-color":me?Ae(ne,{alpha:Number(a.colorOpacitySecondary)}):a.colorSecondary,"--n-color-hover":me?Ae(ne,{alpha:Number(a.colorOpacitySecondaryHover)}):a.colorSecondaryHover,"--n-color-pressed":me?Ae(ne,{alpha:Number(a.colorOpacitySecondaryPressed)}):a.colorSecondaryPressed,"--n-color-focus":me?Ae(ne,{alpha:Number(a.colorOpacitySecondaryHover)}):a.colorSecondaryHover,"--n-color-disabled":a.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":ne,"--n-text-color-hover":ne,"--n-text-color-pressed":ne,"--n-text-color-focus":ne,"--n-text-color-disabled":ne}}else if(ve||Ce){const Q=Be?a.textColor:Pe?a.textColorTertiary:a[R("color",D)],ne=_||Q;ve?(L["--n-color"]=a.colorTertiary,L["--n-color-hover"]=a.colorTertiaryHover,L["--n-color-pressed"]=a.colorTertiaryPressed,L["--n-color-focus"]=a.colorSecondaryHover,L["--n-color-disabled"]=a.colorTertiary):(L["--n-color"]=a.colorQuaternary,L["--n-color-hover"]=a.colorQuaternaryHover,L["--n-color-pressed"]=a.colorQuaternaryPressed,L["--n-color-focus"]=a.colorQuaternaryHover,L["--n-color-disabled"]=a.colorQuaternary),L["--n-ripple-color"]="#0000",L["--n-text-color"]=ne,L["--n-text-color-hover"]=ne,L["--n-text-color-pressed"]=ne,L["--n-text-color-focus"]=ne,L["--n-text-color-disabled"]=ne}else L={"--n-color":_||a[R("color",D)],"--n-color-hover":_?Ie(_):a[R("colorHover",D)],"--n-color-pressed":_?mt(_):a[R("colorPressed",D)],"--n-color-focus":_?Ie(_):a[R("colorFocus",D)],"--n-color-disabled":_||a[R("colorDisabled",D)],"--n-ripple-color":_||a[R("rippleColor",D)],"--n-text-color":re||(_?a.textColorPrimary:Pe?a.textColorTertiary:a[R("textColor",D)]),"--n-text-color-hover":re||(_?a.textColorHoverPrimary:a[R("textColorHover",D)]),"--n-text-color-pressed":re||(_?a.textColorPressedPrimary:a[R("textColorPressed",D)]),"--n-text-color-focus":re||(_?a.textColorFocusPrimary:a[R("textColorFocus",D)]),"--n-text-color-disabled":re||(_?a.textColorDisabledPrimary:a[R("textColorDisabled",D)])};let ke={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};N?ke={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ke={"--n-border":a[R("border",D)],"--n-border-hover":a[R("borderHover",D)],"--n-border-pressed":a[R("borderPressed",D)],"--n-border-focus":a[R("borderFocus",D)],"--n-border-disabled":a[R("borderDisabled",D)]};const{[R("height",A)]:Me,[R("fontSize",A)]:Ue,[R("padding",A)]:be,[R("paddingRound",A)]:Ye,[R("iconSize",A)]:qe,[R("borderRadius",A)]:Ee,[R("iconMargin",A)]:Xe,waveOpacity:Te}=a,Ke={"--n-width":le&&!N?Me:"initial","--n-height":N?"initial":Me,"--n-font-size":Ue,"--n-padding":le||N?"initial":ee?Ye:be,"--n-icon-size":qe,"--n-icon-margin":Xe,"--n-border-radius":N?"initial":le||ee?Me:Ee};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":E,"--n-bezier-ease-out":F,"--n-ripple-duration":g,"--n-opacity-disabled":S,"--n-wave-opacity":Te},ze),L),ke),Ke)}),j=M?Tt("button",W(()=>{let x="";const{dashed:E,type:F,ghost:a,text:g,color:S,round:k,circle:H,textColor:A,secondary:J,tertiary:V,quaternary:q,strong:N}=e;E&&(x+="a"),a&&(x+="b"),g&&(x+="c"),k&&(x+="d"),H&&(x+="e"),J&&(x+="f"),V&&(x+="g"),q&&(x+="h"),N&&(x+="i"),S&&(x+=`j${Xt(S)}`),A&&(x+=`k${Xt(A)}`);const{value:_}=l;return x+=`l${_[0]}`,x+=`m${F[0]}`,x}),O,e):void 0;return{selfElRef:r,waveElRef:t,mergedClsPrefix:T,mergedFocusable:b,mergedSize:l,showBorder:n,enterPressed:i,rtlEnabled:ie,handleMousedown:v,handleKeydown:m,handleBlur:z,handleKeyup:f,handleClick:h,customColorCssVars:W(()=>{const{color:x}=e;if(!x)return null;const E=Ie(x);return{"--n-border-color":x,"--n-border-color-hover":E,"--n-border-color-pressed":mt(x),"--n-border-color-focus":E,"--n-border-color-disabled":x}}),cssVars:M?void 0:O,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{mergedClsPrefix:e,tag:r,onRender:t}=this;t==null||t();const i=he(this.$slots.default,n=>n&&d("span",{class:`${e}-button__content`},n));return d(r,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,d(fr,{width:!0},{default:()=>he(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&d("span",{class:`${e}-button__icon`,style:{margin:hr(this.$slots.default)?"0":""}},d(oo,null,{default:()=>this.loading?d(ro,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):d("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&i,this.text?null:d(Dn,{ref:"waveElRef",clsPrefix:e}),this.showBorder?d("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?d("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Zn=w([I("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[vr({background:"var(--n-color-modal)"}),B("hoverable",[w("&:hover","box-shadow: var(--n-box-shadow);")]),B("content-segmented",[w(">",[p("content",{paddingTop:"var(--n-padding-bottom)"})])]),B("content-soft-segmented",[w(">",[p("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),B("footer-segmented",[w(">",[p("footer",{paddingTop:"var(--n-padding-bottom)"})])]),B("footer-soft-segmented",[w(">",[p("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),w(">",[I("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[p("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),p("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),p("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),p("content","flex: 1; min-width: 0;"),p("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[w("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),p("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),I("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[w("img",`
 display: block;
 width: 100%;
 `)]),B("bordered",`
 border: 1px solid var(--n-border-color);
 `,[w("&:target","border-color: var(--n-color-target);")]),B("action-segmented",[w(">",[p("action",[w("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),B("content-segmented, content-soft-segmented",[w(">",[p("content",{transition:"border-color 0.3s var(--n-bezier)"},[w("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),B("footer-segmented, footer-soft-segmented",[w(">",[p("footer",{transition:"border-color 0.3s var(--n-bezier)"},[w("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),B("embedded",`
 background-color: var(--n-color-embedded);
 `)]),br(I("card",`
 background: var(--n-color-modal);
 `,[B("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),pr(I("card",`
 background: var(--n-color-popover);
 `,[B("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ea={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ta=Object.assign(Object.assign({},ge.props),ea),oa=ue({name:"Card",props:ta,setup(e){const r=()=>{const{onClose:h}=e;h&&ae(h)},{inlineThemeDisabled:t,mergedClsPrefixRef:i,mergedRtlRef:n}=lt(e),c=ge("Card","-card",Zn,gr,e,i),l=st("Card",n,i),b=W(()=>{const{size:h}=e,{self:{color:f,colorModal:m,colorTarget:z,textColor:M,titleTextColor:T,titleFontWeight:oe,borderColor:K,actionColor:ie,borderRadius:O,lineHeight:j,closeIconColor:x,closeIconColorHover:E,closeIconColorPressed:F,closeColorHover:a,closeColorPressed:g,closeBorderRadius:S,closeIconSize:k,closeSize:H,boxShadow:A,colorPopover:J,colorEmbedded:V,colorEmbeddedModal:q,colorEmbeddedPopover:N,[R("padding",h)]:_,[R("fontSize",h)]:ee,[R("titleFontSize",h)]:le},common:{cubicBezierEaseInOut:re}}=c.value,{top:de,left:ve,bottom:Ce}=At(_);return{"--n-bezier":re,"--n-border-radius":O,"--n-color":f,"--n-color-modal":m,"--n-color-popover":J,"--n-color-embedded":V,"--n-color-embedded-modal":q,"--n-color-embedded-popover":N,"--n-color-target":z,"--n-text-color":M,"--n-line-height":j,"--n-action-color":ie,"--n-title-text-color":T,"--n-title-font-weight":oe,"--n-close-icon-color":x,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":F,"--n-close-color-hover":a,"--n-close-color-pressed":g,"--n-border-color":K,"--n-box-shadow":A,"--n-padding-top":de,"--n-padding-bottom":Ce,"--n-padding-left":ve,"--n-font-size":ee,"--n-title-font-size":le,"--n-close-size":H,"--n-close-icon-size":k,"--n-close-border-radius":S}}),v=t?Tt("card",W(()=>e.size[0]),b,e):void 0;return{rtlEnabled:l,mergedClsPrefix:i,mergedTheme:c,handleCloseClick:r,cssVars:t?void 0:b,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{segmented:e,bordered:r,hoverable:t,mergedClsPrefix:i,rtlEnabled:n,onRender:c,embedded:l,tag:b,$slots:v}=this;return c==null||c(),d(b,{class:[`${i}-card`,this.themeClass,l&&`${i}-card--embedded`,{[`${i}-card--rtl`]:n,[`${i}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${i}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${i}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${i}-card--bordered`]:r,[`${i}-card--hoverable`]:t}],style:this.cssVars,role:this.role},he(v.cover,h=>{const f=this.cover?je([this.cover()]):h;return f&&d("div",{class:`${i}-card-cover`,role:"none"},f)}),he(v.header,h=>{const{title:f}=this,m=f?je(typeof f=="function"?[f()]:[f]):h;return m||this.closable?d("div",{class:[`${i}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},d("div",{class:`${i}-card-header__main`,role:"heading"},m),he(v["header-extra"],z=>{const M=this.headerExtra?je([this.headerExtra()]):z;return M&&d("div",{class:[`${i}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},M)}),this.closable&&d(mr,{clsPrefix:i,class:`${i}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),he(v.default,h=>{const{content:f}=this,m=f?je(typeof f=="function"?[f()]:[f]):h;return m&&d("div",{class:[`${i}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},m)}),he(v.footer,h=>{const f=this.footer?je([this.footer()]):h;return f&&d("div",{class:[`${i}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},f)}),he(v.action,h=>{const f=this.action?je([this.action()]):h;return f&&d("div",{class:`${i}-card__action`,role:"none"},f)}))}});function ra(){return yr}const na={name:"Space",self:ra};let _t;function aa(){if(!ct)return!0;if(_t===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const r=e.scrollHeight===1;return document.body.removeChild(e),_t=r}return _t}const ia=Object.assign(Object.assign({},ge.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),la=ue({name:"Space",props:ia,setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:t}=lt(e),i=ge("Space","-space",void 0,na,e,r),n=st("Space",t,r);return{useGap:aa(),rtlEnabled:n,mergedClsPrefix:r,margin:W(()=>{const{size:c}=e;if(Array.isArray(c))return{horizontal:c[0],vertical:c[1]};if(typeof c=="number")return{horizontal:c,vertical:c};const{self:{[R("gap",c)]:l}}=i.value,{row:b,col:v}=wr(l);return{horizontal:xt(v),vertical:xt(b)}})}},render(){const{vertical:e,reverse:r,align:t,inline:i,justify:n,itemClass:c,itemStyle:l,margin:b,wrap:v,mergedClsPrefix:h,rtlEnabled:f,useGap:m,wrapItem:z,internalUseGap:M}=this,T=xr(Wr(this),!1);if(!T.length)return null;const oe=`${b.horizontal}px`,K=`${b.horizontal/2}px`,ie=`${b.vertical}px`,O=`${b.vertical/2}px`,j=T.length-1,x=n.startsWith("space-");return d("div",{role:"none",class:[`${h}-space`,f&&`${h}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e&&!r?"column":e&&r?"column-reverse":!e&&r?"row-reverse":"row",justifyContent:["start","end"].includes(n)?`flex-${n}`:n,flexWrap:!v||e?"nowrap":"wrap",marginTop:m||e?"":`-${O}`,marginBottom:m||e?"":`-${O}`,alignItems:t,gap:m?`${b.vertical}px ${b.horizontal}px`:""}},!z&&(m||M)?T:T.map((E,F)=>E.type===Cr?E:d("div",{role:"none",class:c,style:[l,{maxWidth:"100%"},m?"":e?{marginBottom:F!==j?ie:""}:f?{marginLeft:x?n==="space-between"&&F===j?"":K:F!==j?oe:"",marginRight:x?n==="space-between"&&F===0?"":K:"",paddingTop:O,paddingBottom:O}:{marginRight:x?n==="space-between"&&F===j?"":K:F!==j?oe:"",marginLeft:x?n==="space-between"&&F===0?"":K:"",paddingTop:O,paddingBottom:O}]},E)))}});function sa(){const e=it(zr,null);return e===null&&Sr("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const ca={class:"message-container"},da={key:0,class:"empty-message"},ua={key:1,class:"empty-message"},fa={class:"message-sender"},ha={class:"message-bubble"},va={class:"message-content"},ba={class:"message-time"},pa={class:"input-section"},ga=ue({__name:"AboutView",setup(e){const r=sa(),t=$(""),{bridge:i,isConnected:n,isReady:c}=Er({objectName:"bridge",sendMethod:"requestFromClient",receiveSignal:"responseFromServer",messageSignal:"messageFromServer"}),{messages:l,sendMessage:b}=Fr(i),v=$();function h(){St(()=>{if(v.value){const z=v.value;z.scrollTop=z.scrollHeight}})}Pt(()=>l.value.length,()=>{h()});async function f(){if(!t.value.trim()){r.warning("消息内容不能为空");return}if(!n.value||!c.value){r.error("Qt桥接尚未就绪");return}try{await b(t.value),r.success("发送成功"),t.value=""}catch(z){r.error(`发送失败: ${z}`)}}function m(z){return new Date(z).toLocaleString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}return(z,M)=>(tt(),ot("div",ca,[pt(we(oa),{title:"消息记录",class:"message-list"},{default:Mt(()=>[Ne("div",{ref_key:"messageListRef",ref:v,class:"message-content-wrapper"},[we(n)?we(l).length===0?(tt(),ot("div",ua," 暂无消息记录 ")):Pr("",!0):(tt(),ot("div",da," 未连接到Qt ")),(tt(!0),ot(Vt,null,Tr(we(l),(T,oe)=>(tt(),ot("div",{key:oe,class:Br(["message-item",[T.type==="send"?"message-send":"message-receive"]])},[Ne("div",fa,Et(T.type==="send"?"Web":"Qt"),1),Ne("div",ha,[Ne("div",va,Et(T.content),1),Ne("div",ba,Et(m(T.timestamp)),1)])],2))),128))],512)]),_:1}),Ne("div",pa,[pt(we(la),{vertical:""},{default:Mt(()=>[pt(we(Xn),{value:t.value,"onUpdate:value":M[0]||(M[0]=T=>t.value=T),type:"text",placeholder:"请输入消息",disabled:!we(c),onKeyup:$r(f,["enter"])},null,8,["value","disabled"]),pt(we(Jn),{type:"primary",block:"",disabled:!we(c),onClick:f},{default:Mt(()=>M[1]||(M[1]=[Rr(" 发送消息 ")])),_:1},8,["disabled"])]),_:1})])]))}}),wa=kr(ga,[["__scopeId","data-v-a3b0ee88"]]);export{wa as default};
