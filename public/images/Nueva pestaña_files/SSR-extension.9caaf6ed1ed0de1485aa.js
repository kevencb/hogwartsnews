!function(){"use strict";!function(){if("undefined"!=typeof __webpack_require__){const t=__webpack_require__.e,n={};var e;const o=document.head.getAttribute("data-info");__webpack_require__.e=function(i){return t(i).catch((function(t){const r=n.hasOwnProperty(i)?n[i]:2;if(void 0===e&&(e=!!(o&&o.indexOf("prg-afdretry-t")>-1)),e&&2===r&&(__webpack_require__.p=__webpack_require__.p.replace("/assets.","/assets2.")),1===r)if(e){const e=new URL(__webpack_require__.p,window.location.href);__webpack_require__.p=e.href.replace(e.host,window.location.host)}else __webpack_require__.p=__webpack_require__.p.replace("/assets.","/assets2.");if(r<1)throw t;return new Promise((function(e){setTimeout((function(){n[i]=r-1,e(__webpack_require__.e(i))}),100)}))}))}}}();let e=new Map;const t=Object.freeze({set(t,n){return e.set(t,n),this},get:function(t,n){let o=e.get(t);return void 0===o&&n&&(o=n(),e.set(t,o)),o},clear(){e.clear()},delete:t=>e.delete(t),has:t=>e.has(t)});function n(){return"undefined"!=typeof window&&window.document&&window.document.createElement&&!window.isRenderServiceEnv?window._pageTimings||(window._pageTimings={}):t.get("__diagnostics_pageTimings",(()=>({})))}let o,i,r;function a(){if(r)return r;const e=document.head.getAttribute("data-info");return r=((/f:\s*([^;]+)/i.exec(e)||{})[1]||"").toLowerCase(),r}var s;!function(e){e.JSON="application/json;charset=UTF-8",e.HTML="text/html;charset=UTF-8"}(s=s||(s={}));function c(){const e=performance.getEntriesByType("navigation")[0].serverTiming;if(e){const t=e.find((e=>"rsClusterName"===e.name));if(t)return t.description}}const d="1.0.19";let l,u,w;(new Date).getTime();try{u="sessionStorage"in window&&window.sessionStorage}catch(e){}try{navigator&&navigator.userAgentData&&"Windows"===navigator.userAgentData.platform&&navigator.userAgentData.getHighEntropyValues&&navigator.userAgentData.getHighEntropyValues(["platformVersion"])&&navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then((e=>{w=e.platformVersion}))}catch(e){}function h(e){if(e)return e.scrollTop||0;return p&&(window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop)||0}function m(){const e="undefined"!=typeof document&&document.cookie;if(!p&&!e)return"";const t=new RegExp("\\bMUID\\s*=\\s*([^;]*)","i").exec(e);return t&&t.length>1?t[1]:""}const p=!("undefined"==typeof window||!window.document||!window.document.createElement||window.isRenderServiceEnv);function g(){let e=!1;if(p)try{if(w&&parseInt(w.split(".")[0])>=11&&(e=!0),!e&&window&&window.external&&window.external.getHostEnvironmentValue("os-build")){const t=JSON.parse(window.external.getHostEnvironmentValue("os-build"))["os-build"].split(".");(t[0]>10||10===t[0]&&t[1]>0||t[2]>=22e3)&&(e=!0)}}catch(e){}return l=!0===e||null,l}const f="1.0.19";var v;const y=JSON.parse((null===(v=document.head.dataset)||void 0===v?void 0:v.clientSettings)||"{}");let b,S,T=null;function _(e){T=e}function R(e,t){var n,o;const i=m(),r=T||{},s=new URLSearchParams(y.queryparams).get("edgessr");return{name:e,time:t.toISOString(),ver:"4.0",iKey:`o:${null===(n=window.oneDSConfig)||void 0===n?void 0:n.key.split("-")[0]}`,data:{...r,baseType:"MS.News.Web.Base",baseData:{},page:{...r.page,canvas:"Browser",appType:y.apptype,content:{...null===(o=r.page)||void 0===o?void 0:o.content,title:document.title}},flight:{id:a(),tmpl:`ssrscope:1;ssr-enabled:1;${s?`edgessr:${s};`:""}edge.mem:${navigator.deviceMemory+""};edge.concurrency:${navigator.hardwareConcurrency+""};edge.connection:${navigator.connection.effectiveType+""}`},browser:{width:window.outerWidth,height:window.outerHeight,screenSize:[screen.width,screen.height].join("x"),clientId:i,scrollOffset:h(),anoncknm:"app_anon",cookieEnabled:navigator.cookieEnabled,isWin11:g(),muid:i},request:{activityId:y.aid,requestId:y.aid,afdMuid:y.fd_muid},timestamp:t.getTime(),sdk:{name:"peregrine-lite-telemetry",ver:f,schemaVer:d},build:y.bundleInfo.v,custom:{...r.custom,"rs-cluster-name":c(),"ssr-enabled":1}},ext:{user:{localId:`t:${i}`}}}}function k(e){try{return decodeURIComponent(e)}catch(e){}}function A(e,t){if(!e)return null;if(t)return function(e){var t;const n=null===(t=document.cookie)||void 0===t?void 0:t.match(`\\b${e}=([^;]*)`);return n?k(n[1]):null}(e);if(!b){const e="undefined"!=typeof document&&document.cookie.split("; ");b={};const t=e&&e.length;for(let n=0;n<t;n++){const t=e[n].indexOf("=");b[e[n].slice(0,t).toLocaleLowerCase()]=k(e[n].slice(t+1))}}const n=e.toLocaleLowerCase();return b[n]||null}var x;!function(e){e[e.Alert=0]="Alert",e[e.NoAlert=1]="NoAlert",e[e.HighImpact=2]="HighImpact",e[e.Critical=3]="Critical"}(x||(x={}));const E=new class{constructor(e=20){this.maxLength=20,this.list=[],this.maxLength=e}push(e){this.list.push(e),this.list.length>this.maxLength&&this.list.shift()}get data(){return this.list}};function N(e,t,n,o=x.Alert){try{const r=function(){if(!i){const e=document.head.getAttribute("data-client-settings");e&&(i=JSON.parse(e))}return i}(),s=a(),c=function(e){if(e){const{pcsInfo:t,pageGenTime:n}=e,o=new Date(n).getTime(),i=!t||["prod","prod-ssr","prod-ssrntp"].includes(t.env);S=i?"browser.events.data.msn.com":"events-sandbox.data.msn.com";return{cors:"true","content-type":"application/x-json-stream","client-id":"NO_AUTH","client-version":"1DS-Web-JS-2.2.2",apikey:i?"0ded60c75e44443aa3484c42c1c43fe8-9fc57d3f-fdac-4bcf-b927-75eafe60192e-7279":"f8857dedc6f54ca8962cfb713e01e7d7-e9250191-fe0b-446f-95ae-07516262f98c-7028","upload-time":o,w:"0",anoncknm:"app_anon"}}return null}(r);let d="";c&&c.apikey&&""!==c.apikey&&(d=function(e){if(e){const t=e.indexOf("-");if(t>0)return e.substring(0,t)}return""}(c.apikey));const l=function(e,t,n,o,i,r,a=x.Alert){if(n){i=i||{};const{apptype:c,audienceMode:d,pagetype:l,pageGenTime:u,bundleInfo:w,deviceFormFactor:h="",fd_muid:m,os:p}=n;i.pageGenTime=u,i.build=w&&w.v,i.appType=c;const g=function(e,t,n){const o=n&&"phone"===n.toLowerCase(),i=t&&"enterprise"===t;return{bingHomepage:"binghomepage",mmx:"emmx",edge:"spartan",edgeChromium:i?"entnews":"anaheim",hybrid:"spartan",hub:o?"prime_mobile":"prime",microsoftNews:"msnews",office:"entnews",views:o?"prime_mobile":"prime",windowsShell:"windowsshell"}[e]}(c,d,h),f=g||c,v=document.getElementsByTagName("html")[0].getAttribute("lang");let y,b="",S="muid";try{if("edgeChromium"===c&&"object"==typeof window&&window.location&&window.location.search){const e=new URLSearchParams(window.location.search);y=e.has("startpage")?"msedgdhp":"msedgntp","enterprise"===d?y="entnewsntp":"xbox"===p&&(y="xboxntp")}window&&window.getCookieConsentRequired&&"function"==typeof window.getCookieConsentRequired&&window.getCookieConsentRequired()||(b=A("muid"))}catch{}b||(b=n.aid,S="aid");const T={name:"MS.News.Web.AppError",time:u,ver:"4.0",iKey:`o:${o}`,data:{baseData:{},baseType:"MS.News.Web.Base",page:{name:"default",product:f,type:L(l),content:{category:"standaloneError"},ocid:y},browser:{clientId:b,clientIdType:S},flight:{id:r},request:{activityId:n.aid,requestId:n.aid,afdMuid:m},locale:{mkt:v},extSchema:{id:e,severity:a,pb:i,message:t}}};var s;if(b&&"muid"===S)T.ext={...null==T?void 0:T.ext,user:{...null==T||null===(s=T.ext)||void 0===s?void 0:s.user,localId:`t:${b}`}};return T.data.flight.tmpl="",i.isSSRScope&&(T.data.flight.tmpl+="ssrscope:1"),"object"==typeof window&&(window.isSSREnabled&&(T.data.flight.tmpl+=";ssr-enabled:1"),window.isSSRCompleted&&(T.data.flight.tmpl+=";ssr-completed:1")),T?JSON.stringify(T):null}return null}(t,e,r,d,n,s,o);if(c&&l){console.error(l),E.push(l);const e="https://"+S+"/OneCollector/1.0"+function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}(c);navigator.sendBeacon(e,l)}}catch{}}function L(e){let t=e;switch(e){case"windowsshellhp":t="dhp";break;case"video":t="watch"}return t}const C="data-t";function V(e){try{const t=function(){const e=new URL(window.oneDSConfig.endpoint);return e.searchParams.append("cors","true"),e.searchParams.append("content-type","application/x-json-stream"),e.searchParams.append("client-id","NO_AUTH"),e.searchParams.append("client-version",`peregrine-lite-telemetry-${y.bundleInfo.v}`),e.searchParams.append("apikey",window.oneDSConfig.key),e.searchParams.append("upload-time",Date.now().toString()),e.searchParams.append("w","0"),e.searchParams.append("anoncknm","app_anon"),e.searchParams.append("NoResponseBody","true"),e}();navigator.sendBeacon(t,JSON.stringify(e))}catch(e){N("Error sending Lite Telemetry",34019,{error:e.message})}}function q(){try{if(sessionStorage.getItem("sign-in-active")||sessionStorage.getItem("sign-in-pending")||sessionStorage.getItem("sign-in-refreshed-page")||sessionStorage.getItem("sign-in-refresh-session"))return}catch(e){}window.__peregrine_litePVSent=!0;const e=R("MS.News.Web.PageView",new Date);(o||(o=new Promise((e=>{"visible"===document.visibilityState&&e(),document.addEventListener("visibilitychange",(function t(){"visible"===document.visibilityState&&(e(),document.removeEventListener("visibilitychange",t))}))}))),o).then((()=>{n().TimeToSendPageView=Math.round(performance.now()),V(e)}))}function D(e,t){if(e)try{const n=R("MS.News.Web.PageAction",new Date);n.data.actionType=t,["click","rightclick"].includes(t)&&(n.data.gesture=t);const o=$(e);if(o){if("search_websearch"===o.n)return;n.data.behavior=o.b,n.data.object={name:o.n,type:o.t,content:{id:o["c.i"],type:o["c.t"],headline:o["c.hl"],vertical:o["c.v"],brandId:o["c.bi"],category:o["c.c"]},ext:o.ext,destinationUrl:e.getAttribute("action")||e.href||""};let t=o.n||"",i=e.parentElement;for(;i&&i!==document.body;){const e=$(i);null!=e&&e.n&&(t=`${e.n}>${t}`),i=i.assignedSlot||i.parentElement||i.parentNode.host}n.data.object.placement={lineage:t}}V(n)}catch(e){N("Error sending Lite Action Telemetry",34019,{error:e.message})}}function I(e){try{if("auxclick"===e.type&&1!==e.button)return;const t=function(e){if(!e)return;if(!e.composedPath||"function"!=typeof e.composedPath)return e.target;{const t=e.composedPath();if(t.length>2&&"hasAttribute"in t[0]&&!t[0].hasAttribute(C)&&"[object ShadowRoot]"===Object.prototype.toString.call(t[1])&&"hasAttribute"in t[2]&&t[2].hasAttribute(C))return t[2];if(t.length>0)return t[0]}}(e);D(t&&function(e){const t=20;for(let o=0;o<t&&e&&!P(e);o++){var n;e=e.assignedSlot||e.parentElement||(null===(n=e.parentNode)||void 0===n?void 0:n.host)}if(!P(e))return;return e}(t),H[e.type]||"click")}catch(e){N("Error sending Click Event Telemetry",34019,{error:e.message})}}function P(e){if(!e)return!1;if("BUTTON"===e.nodeName||e.hasAttribute("href")||e.getAttribute&&"button"===e.getAttribute("role")||e.form)return!0;const t=$(e);return t&&(5===t.t||11===t.t||t.b&&e.tagName.includes("-"))}function $(e){try{const t=e.getAttribute(C);return t&&JSON.parse(t)}catch(e){N("Error parsing telemetry attribute",34019,{error:e.message})}}const H={auxclick:"middleclick",contextmenu:"rightclick"};var O;!function(e){e.visibility="visibility",e.adServed="adserved",e.click="click"}(O||(O={}));const M=["control icon-only","menu","ad-label","ad-choice"];function B(){var e,t;if(!window.isSSRCompleted)return;const n=null===(o=document.querySelector("edge-chromium-page"))||void 0===o||null===(i=o.shadowRoot)||void 0===i||null===(r=i.querySelector("grid-view-feed"))||void 0===r||null===(a=r.shadowRoot)||void 0===a||null===(s=a.querySelector("cs-super-container"))||void 0===s||null===(c=s.shadowRoot)||void 0===c||null===(d=c.querySelector("cs-personalized-feed"))||void 0===d||null===(l=d.shadowRoot)||void 0===l?void 0:l.querySelector("cs-feed-layout");var o,i,r,a,s,c,d,l;const u=(null==n||null===(e=n.shadowRoot)||void 0===e?void 0:e.querySelectorAll("cs-native-ad-card"))||[];null===(t=window.ssrAdData)||void 0===t||t.forEach(((e,t)=>{var o,i;W(e.beaconsJson,O.adServed);const r=null===(o=u[t])||void 0===o||null===(i=o.shadowRoot)||void 0===i?void 0:i.querySelector(`#${e.id}`);if(!r){var a,s,c,d,l;const o=(null==n||null===(a=n.shadowRoot)||void 0===a||null===(s=a.children)||void 0===s?void 0:s.length)||0,i=[];for(let e=0;e<o;e++){var w,h,m;i.push(null==n||null===(w=n.shadowRoot)||void 0===w||null===(h=w.children)||void 0===h||null===(m=h.item(e))||void 0===m?void 0:m.tagName)}const r=(null===(c=u[t])||void 0===c||null===(d=c.shadowRoot)||void 0===d||null===(l=d.querySelector("cs-card"))||void 0===l?void 0:l.outerHTML)||"";return void N("Ad render doesn't match ssr ad data",20193,{renderedCardTags:JSON.stringify(i),adDataId:e.id,renderedId:JSON.stringify(r)})}window.adsListened?window.adsListened.push(r.id):window.adsListened=[r.id],r.addEventListener("click",(t=>{const n=t.composedPath();for(let e=0;e<7&&e<n.length;e++){const t=n[e];if(t.className&&M.includes(t.className.replace(/\s/g,"")))return}W(e.beaconsJson,O.click,e.clickBeaconJson)}));new IntersectionObserver(U(e.beaconsJson),{root:null,rootMargin:"0px",threshold:.5}).observe(r)}))}const U=e=>(t,n)=>{t&&t.forEach((t=>{t.intersectionRatio>=.5&&window.setTimeout((()=>{W(e,O.visibility)}),1e3,n,t.target)}))};function W(e,t,n){var o;if(null!=e&&e.length)try{const a=JSON.parse(e);let s;switch(t){case O.adServed:s=a&&a.trb;break;case O.visibility:s=a&&a.tvb;break;case O.click:s=n&&(null===(o=JSON.parse(n))||void 0===o?void 0:o.tcb)}for(let e=0;e<s.length;e++){var i,r;const n=s[e];t===O.visibility&&null!==(i=window.viewedBeaconUrls)&&void 0!==i&&i.includes(n)||t===O.adServed&&null!==(r=window.servedBeaconUrls)&&void 0!==r&&r.includes(n)||z(n,t,a.e)}}catch(t){N(`Fail to fire ad served call, Fail to parse beacon json tracking data: ${e}`,20179,{error:t.message})}}function z(e,t,n){n||(e=decodeURIComponent(e)),e&&function(e,t){try{let t=new Image(1,1);t.src=e,t=null}catch(t){N(`Invalid beacon URL, Fail to parse beacon json tracking data: ${e}`,20189,{error:t.message})}finally{t===O.visibility?window.viewedBeaconUrls?window.viewedBeaconUrls.push(e):window.viewedBeaconUrls=[e]:t==O.adServed&&(window.servedBeaconUrls?window.servedBeaconUrls.push(e):window.servedBeaconUrls=[e])}}(e,t)}const J={17:"8",31:"31",49:"14",41:"14",35:"8",4:"4",19:"19",22:"14",23:"23",34:"7",47:"20",60:"7",81:"26",11:"10",37:"10",38:"10",69:"10",70:"10",71:"10",72:"10",92:"91",32:"5",2:"2",101:"1",42:"15",33:"6",61:"6",62:"6",87:"6",88:"6",93:"6",94:"6",95:"6",96:"6",67:"27",68:"27",18:"9",21:"9",36:"9",45:"9",48:"9",63:"9",64:"9",29:"29",102:"28",44:"44",46:"19",80:"50",76:"24",75:"24",83:"77",84:"78",85:"24",86:"24",39:"39"};function F(e){const t=performance.getEntriesByType("visibility-state").filter((t=>t.startTime<e));if(0===t.length)return e;let n=0;for(let i=0;i<t.length;i++){const r=t[i];var o;if("visible"===r.name)n+=((null===(o=t[i+1])||void 0===o?void 0:o.startTime)??e)-r.startTime}return n}const j={23:"HeavyDrizzle",40:"HeavyDrizzle",26:"SnowShowersDayV2",6:"BlowingHailV2",5:"CloudyV3",20:"LightSnowV2",91:"WindyV2",27:"ThunderstormsV2",10:"FreezingRainV2",77:"RainSnowV2",12:"Haze",13:"HeavyDrizzle",39:"Fair",24:"RainSnowV2",78:"RainSnowShowersNightV2",9:"FogV2",3:"PartlyCloudyDayV3",43:"IcePelletsV2",16:"IcePellets",8:"LightRainV2",15:"HeavySnowV2",28:"ClearNightV3",30:"PartlyCloudyNightV2",14:"ModerateRainV2",1:"SunnyDayV3",7:"BlowingSnowV2",50:"RainShowersNightV2",82:"LightSnowShowersNight",81:"LightSnowShowersDay",2:"MostlySunnyDay",29:"MostlyClearNight",4:"MostlyCloudyDayV2",31:"MostlyCloudyNightV2",19:"LightRainV3",17:"LightRainShowerDay",53:"N422Snow",52:"Snow",25:"Snow",44:"LightRainShowerNight",65:"HailDayV2",73:"HailDayV2",74:"HailNightV2",79:"RainShowersDayV2",89:"HazySmokeV2",90:"HazeSmokeNightV2_106",66:"HailNightV2",59:"WindyV2",56:"ThunderstormsV2",58:"FogV2",54:"HazySmokeV2",55:"Dust1",57:"Haze"};class G{constructor(){this._published=[],this._subscribers=[]}publish(e){this._published.push(e),this._subscribers.forEach((t=>t(e)))}subscribe(e){this._subscribers.push(e),this._published.forEach((t=>e(t)))}bulkPublish(e){e.forEach((e=>this.publish(e)))}}(()=>{const e=location.search.toLowerCase().indexOf("ssronly=true")>-1;if(e&&(window.SSRONLY=e),!window.isSSREnabled)return;history.scrollRestoration="manual",window.setLiteTelemetryContract=_,window.sendLitePV=q,window.sendAdBeacon=B,window.ssrLoadedExperience=new G,window.ssrLoadedBundles=new G,window.standbyClickEventsHandler=e=>{I(e)},window.addEventListener("click",window.standbyClickEventsHandler),window.addEventListener("auxclick",window.standbyClickEventsHandler),window.addEventListener("contextmenu",window.standbyClickEventsHandler),window.addEventListener("beforeunload",(()=>{window.isSSRCompleted||window.isCSRFallback||N("SSR streaming not complete during page unload",34017,{eventTimeStamp:(new Date).toISOString(),markerTime:Math.round(performance.now()),hasSSRData:!!window.ssrWpoData})})),window.searchFormSubmitListener=e=>{D(e.target,"submit")};const t=function(e){const t=a();return!!t&&t.split(",").includes(e)}("ntp-ttht-tracking");window.markTTSR=e=>{window._pageTimings[`${e}-Init`]=Math.round(performance.now()),requestAnimationFrame((()=>{window._pageTimings[`${e}-RAF`]=t?F(Math.round(performance.now())):Math.round(performance.now()),setTimeout((()=>{window._pageTimings[e]=t?F(Math.round(performance.now())):Math.round(performance.now())}))}))},window.addEventListener("TTSR.SearchBox",(()=>{try{const e=document.querySelector("edge-chromium-page").shadowRoot.querySelector("cs-header-core").shadowRoot.querySelector("common-search-box-edgenext").shadowRoot.querySelector("cs-common-search-box").shadowRoot.querySelector("form");if(!e)throw"Search box form element not found";e.addEventListener("submit",window.searchFormSubmitListener)}catch(e){N("Exception occurred while adding search box form submit event listener",34018,{error:e.message})}}),{once:!0}),window.addEventListener("ssrWpoDataAvailable",(()=>{let e,t;try{const t=window.ssrWpoData.sections[0].subSections;for(const n of t){const t=n.cards.find((e=>"WeatherSummary"===e.type));if(t){if(e=JSON.parse(t.data),!e)return;break}}}catch(e){N("No valid weather data in feed for WelcomeGreetingLight in SSR extension",34026,{error:e.message})}try{t=document.getElementsByTagName("edge-chromium-page")[0].shadowRoot.querySelector("cs-header-core").shadowRoot.querySelector("welcome-greeting-light"),t.removeAttribute("needs-hydration"),t.removeAttribute("defer-hydration");const e={n:"WelcomeGreetingLight"};t.setAttribute("data-t",e)}catch(e){N("No welcome-greeting-light placeholder found in SSR extension",34026,{error:e.message})}try{var n;const o=t.shadowRoot.querySelector("#i_weather > div.weather-temperature > span"),i=t.shadowRoot.querySelector("#i_weather > div.weather-temperature > div > span"),r=t.shadowRoot.querySelector("#i_location"),a=t.shadowRoot.querySelector("#i_weather > div.weather-glyph-location.text-wrapper-image-hidden"),s=t.shadowRoot.querySelector("#i_weather"),c=e.userProfile.location.City,d=c.length>15?`${null==c?void 0:c.substring(0,15)}…`:c,l=e.userProfile.location.State,u=e.responses[0].weather[0],w=(null===(n=u.alerts)||void 0===n?void 0:n.length)>0&&u.alerts[0].title?`${u.alerts[0].title.replace(" - "," ")}`:"",h=u.current.cap,m=u.current.temp+" "+e.units.temperature,p=w?`${c}: ${w}, ${h}, ${m}`:`${c}: ${h}, ${m}`;t.setAttribute("shortlocation",d),t.setAttribute("locationsearchplaceholder",`${c}, ${l}`),t.setAttribute("weatherinfohint",p),o.textContent=u.current.temp,i.textContent=e.units.temperature;const g=document.createElement("img");g.className="icon-svg";const f=function(e,t){const n=Object.prototype.hasOwnProperty.call(J,e)?J[e]:e,o=j[n]||"",i=t||"weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/";return o?`https://assets.msn.${window.isChina?"cn":"com"}/${i}${o}.svg`:""}(u.current.pvdrIcon);g.setAttribute("src",`${f}`),g.setAttribute("alt",u.current.cap),a.innerHTML="",a.appendChild(g);const v=s.getAttribute("title").replace("undefined",p);return s.setAttribute("title",v),window.innerWidth>=1089?(r.textContent=d,r.setAttribute("title",v)):r.remove(),window.weatherData={pvdrIcon:u.current.pvdrIcon,tempText:u.current.temp,tempUnitText:e.units.temperature,shortLocation:r?r.textContent:void 0,skycode:h,rootMaxWidthSet:!1},void(window._pageTimings["TTVR.WelcomeGreetingLight"]=Math.round(performance.now()))}catch(e){N("Exception occurred while trying to parse weather data for WelcomeGreetingLight in SSR extension",34026,{error:e.message})}}),{once:!0}),window.addEventListener("TTSR.HeaderTag",(()=>{try{const e=["ms-rewards","notification-bell","common-settings-edgenext"],t=document.getElementsByTagName("edge-chromium-page")[0].shadowRoot.querySelector("cs-header-core").shadowRoot;for(const n of e){const e=t.querySelector(n);e&&(e.removeAttribute("needs-hydration"),e.setAttribute("needs-recreation",""))}}catch(e){N("SSR header components not found",20203,{error:e.message})}})),window.addEventListener("TTSR.TopSitesTag",(()=>{const e=document.getElementsByTagName("edge-chromium-page")[0].shadowRoot.querySelector("top-sites-edgenext");if(!e)return;let t;e.removeAttribute("needs-hydration"),e.setAttribute("needs-recreation","");try{t=JSON.parse(localStorage["TSNP1.topsites"])}catch(e){return void N("Failed to get topsites data for SSR TopSites",34020,{error:e.message})}const n=e.shadowRoot,o=null==n?void 0:n.querySelectorAll("div.pill-top-site:not(.add-placeholder)");if(o.length>0){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++){const e=t[n],i=o[n];e.contentViewTelemetryTag&&i.setAttribute("data-t",e.contentViewTelemetryTag),i.setAttribute("title",e.title),i.setAttribute("aria-label",e.title),i.querySelector(".image img").setAttribute("src",e.faviconUrl);const r=i.querySelector("a.control");r.setAttribute("href",e.url),e.anchorTelemetryTag?r.setAttribute("data-t",e.anchorTelemetryTag):N("No anchorTelemetryTag",34021,{error:`contentViewTelemetryTag is ${i.getAttribute("data-t")}`}),i.querySelector("a.control .top-site-title span").innerText=e.title}if(o.length>t.length)for(let t=e;t<o.length;t++)o[t].remove();return void window.markTTSR("TTSR.TopSitesEdgeNextWC")}const i=null==n?void 0:n.querySelectorAll("a.pill-top-site");if(i.length>0){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++){const e=t[n],o=i[n];o.setAttribute("href",e.url),o.setAttribute("title",e.title),o.setAttribute("aria-label",e.title),o.querySelector(".left-part img").setAttribute("src",e.faviconUrl),o.querySelector(".left-part span").innerText=e.title,e.anchorTelemetryTag&&o.setAttribute("data-t",e.anchorTelemetryTag)}if(i.length>t.length)for(let t=e;t<i.length;t++)i[t].remove();window.markTTSR("TTSR.TopSitesEdgeNextWC")}else;}),{once:!0}),window.initCrsRequest=e=>{const{url:t}=e||{};t&&(window.crsRequestData=e,window.crsPromise=new Promise(((e,n)=>{fetch(t).then((t=>{e(t)})).catch((e=>{n(e)}))})))},window.isResized=!1,window.addEventListener("resize",(()=>window.isResized=!0),{once:!0})})()}();