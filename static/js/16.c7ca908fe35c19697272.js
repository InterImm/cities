webpackJsonp([16],{"0keZ":function(e,n,o){n=e.exports=o("FZ+f")(!0),n.push([e.i,".google-map{height:100%}","",{version:3,sources:["/Users/leima/github/interimm/cities/src/components/maps/google-maps/GoogleMap.vue"],names:[],mappings:"AACA,YACE,WAAa,CACd",file:"GoogleMap.vue",sourcesContent:["\n.google-map {\n  height: 100%;\n}\n"],sourceRoot:""}])},B2vT:function(e,n,o){"use strict";function l(e){o("IaM/")}Object.defineProperty(n,"__esModule",{value:!0});var t=o("k/FT"),a=o("Jqv/"),i=o("VU/8"),r=l,c=i(t.a,a.a,!1,r,null,null);n.default=c.exports},"IaM/":function(e,n,o){var l=o("0keZ");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);o("rjj0")("cf894576",l,!0)},"Jqv/":function(e,n,o){"use strict";var l=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"google-map"})},t=[],a={render:l,staticRenderFns:t};n.a=a},"k/FT":function(e,n,o){"use strict";var l=o("NYxO"),t=o("lMsw");o.n(t);n.a={name:"google-map",computed:Object(l.c)({config:"config"}),mounted:function(){var e=this;t.KEY=this.config.googleMaps.apiKey,t.load(function(n){new n.maps.Map(e.$el,{center:new n.maps.LatLng(44.5403,-78.5463),zoom:8,mapTypeId:n.maps.MapTypeId.ROADMAP})})}}},lMsw:function(e,n,o){var l,t;!function(a,i){if(null===a)throw new Error("Google-maps package can be used only in browser");l=i,void 0!==(t="function"==typeof l?l.call(n,o,n,e):l)&&(e.exports=t)}("undefined"!=typeof window?window:null,function(){"use strict";var e=null,n=null,o=!1,l=[],t=[],a=null,i={};i.URL="https://maps.googleapis.com/maps/api/js",i.KEY=null,i.LIBRARIES=[],i.CLIENT=null,i.CHANNEL=null,i.LANGUAGE=null,i.REGION=null,i.VERSION="3.18",i.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",i._googleMockApiObject={},i.load=function(e){null===n?!0===o?e&&l.push(e):(o=!0,window[i.WINDOW_CALLBACK_NAME]=function(){r(e)},i.createLoader()):e&&e(n)},i.createLoader=function(){e=document.createElement("script"),e.type="text/javascript",e.src=i.createUrl(),document.body.appendChild(e)},i.isLoaded=function(){return null!==n},i.createUrl=function(){var e=i.URL;return e+="?callback="+i.WINDOW_CALLBACK_NAME,i.KEY&&(e+="&key="+i.KEY),i.LIBRARIES.length>0&&(e+="&libraries="+i.LIBRARIES.join(",")),i.CLIENT&&(e+="&client="+i.CLIENT+"&v="+i.VERSION),i.CHANNEL&&(e+="&channel="+i.CHANNEL),i.LANGUAGE&&(e+="&language="+i.LANGUAGE),i.REGION&&(e+="&region="+i.REGION),e},i.release=function(r){var c=function(){i.KEY=null,i.LIBRARIES=[],i.CLIENT=null,i.CHANNEL=null,i.LANGUAGE=null,i.REGION=null,i.VERSION="3.18",n=null,o=!1,l=[],t=[],void 0!==window.google&&delete window.google,void 0!==window[i.WINDOW_CALLBACK_NAME]&&delete window[i.WINDOW_CALLBACK_NAME],null!==a&&(i.createLoader=a,a=null),null!==e&&(e.parentElement.removeChild(e),e=null),r&&r()};o?i.load(function(){c()}):c()},i.onLoad=function(e){t.push(e)},i.makeMock=function(){a=i.createLoader,i.createLoader=function(){window.google=i._googleMockApiObject,window[i.WINDOW_CALLBACK_NAME]()}};var r=function(e){var a;for(o=!1,null===n&&(n=window.google),a=0;a<t.length;a++)t[a](n);for(e&&e(n),a=0;a<l.length;a++)l[a](n);l=[]};return i})}});
//# sourceMappingURL=16.c7ca908fe35c19697272.js.map