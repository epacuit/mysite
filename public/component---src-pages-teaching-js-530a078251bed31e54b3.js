(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r),a=n(64),o=n.n(a),s=(n(450),n(0)),l=n.n(s),c=n(224),u=n(452),d=n(217),m=n(230),f=n.n(m),p=n(222),h=f()("li")({marginBottom:15,marginLeft:15}),g=f()("ul")({marginBottom:20});var y=function(e){e.activePage,e.children;return l.a.createElement(d.StaticQuery,{query:"2551388456",render:function(e){var t=["Carnegie Mellon University","Tilburg University","Stanford University","Institute for Logic, Language and Computation, University of Amsterdam","Brooklyn College","New York University","Case Western Reserve University"].map(function(t,n){return l.a.createElement("div",{key:n},l.a.createElement("div",{className:"has-text-weight-semibold",style:{marginBottom:10}},t),l.a.createElement(g,null,e.allPastCoursesCsv.edges.filter(function(e){return e.node.school===t}).map(function(e,t){return l.a.createElement(h,{key:t},l.a.createElement("div",{style:null!==e.node.website&&{marginBottom:5}},e.node.description),""!==e.node.website&&l.a.createElement("div",null,l.a.createElement("a",{href:e.node.website,target:"_blank",rel:"noopener noreferrer",className:"button is-small is-light",style:{marginRight:20}},l.a.createElement("span",{className:"icon is-small"}," ",l.a.createElement(p.g,null)," "),"  website")))})))});return l.a.createElement(l.a.Fragment,null,t)},data:u})};n(220);n.d(t,"query",function(){return w});function v(e,t){new Array;return t>=7&&t<=12?["Fall "+e.toString(),"Spring "+(e+1).toString()]:["Spring "+e.toString(),"Fall "+(e-1).toString()]}var b=function(e){function t(t){var n;n=e.call(this)||this;var r=new Date,i=r.getMonth()+1,a=r.getFullYear(),s=t.data.allMarkdownRemark.edges.filter(function(e){return"Introduction to Logic"===e.node.frontmatter.short_name})[0],l=t.data.allMarkdownRemark.edges.indexOf(s),c=l<t.data.allMarkdownRemark.edges.length-1?t.data.allMarkdownRemark.edges[l+1].node.frontmatter.short_name:null,u=l>0?t.data.allMarkdownRemark.edges[l-1].node.frontmatter.short_name:null;return n.state={showClassLists:!0,currentSemesters:v(a,i),currentCourse:s,nextCourse:c,prevCourse:u},n.handleAllClassesClick=n.handleAllClassesClick.bind(o()(o()(n))),n.handleLoadClass=n.handleLoadClass.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.handleAllClassesClick=function(){this.setState({showClassLists:!0})},n.handleLoadClass=function(e){var t=this.props.data.allMarkdownRemark.edges.filter(function(t){return t.node.frontmatter.short_name===e})[0],n=this.props.data.allMarkdownRemark.edges.indexOf(t),r=n<this.props.data.allMarkdownRemark.edges.length-1?this.props.data.allMarkdownRemark.edges[n+1].node.frontmatter.short_name:null,i=n>0?this.props.data.allMarkdownRemark.edges[n-1].node.frontmatter.short_name:null;this.setState({showClassLists:!1,currentCourse:t,nextCourse:r,prevCourse:i})},n.render=function(){var e=this,t=this.state.currentSemesters.map(function(t,n){return l.a.createElement("div",{key:n},l.a.createElement("div",{style:{marginBottom:10}},l.a.createElement("p",{className:"has-text-weight-semibold"},t)),e.props.data.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.current_semester===t}).length>0?l.a.createElement("ul",{style:{marginBottom:30}},e.props.data.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.current_semester===t}).map(function(e,t){return l.a.createElement("li",{key:t,style:{marginBottom:20}},l.a.createElement("div",{style:{marginBottom:5}},e.node.frontmatter.title),l.a.createElement("div",null,e.node.frontmatter.syllabus[0].file&&l.a.createElement("a",{href:e.node.frontmatter.syllabus[0].file.publicURL,className:"button is-small is-light",style:{marginRight:20}},l.a.createElement("span",{className:"icon is-small"}," ",l.a.createElement(p.h,null)," "),"  syllabus"),e.node.frontmatter.website[0].www&&l.a.createElement("a",{href:e.node.frontmatter.website[0].www,target:"_blank",rel:"noopener noreferrer",className:"button is-small is-light",style:{marginRight:20}},l.a.createElement("span",{className:"icon is-small"}," ",l.a.createElement(p.g,null)," "),"  website"),l.a.createElement("span",{onClick:function(){return Object(d.navigate)(e.node.fields.slug)},className:"button is-small is-light"},l.a.createElement("span",{className:"icon is-small"}," ",l.a.createElement(p.d,null)," "),"  description"))," ")})):l.a.createElement("div",{style:{marginBottom:30}},"I'm on sabbatical, so I am not teaching this semester."))}),n=this.props.data.allMarkdownRemark.edges.map(function(t,n){var r=n<e.props.data.allMarkdownRemark.edges.length-1?e.props.data.allMarkdownRemark.edges[n+1].node.fields.slug:null,i=n>0?e.props.data.allMarkdownRemark.edges[n-1].node.fields.slug:null;return l.a.createElement("li",{key:n,style:{marginBottom:20}},l.a.createElement("div",{style:{marginBottom:5}},t.node.frontmatter.title),l.a.createElement("div",null,l.a.createElement("span",{onClick:function(){return Object(d.navigate)(t.node.fields.slug,{state:{nextCourse:r,prevCourse:i}})},target:"_blank",rel:"noopener noreferrer",className:"button is-small is-light",style:{marginRight:20}},l.a.createElement("span",{className:"icon is-small"}," ",l.a.createElement(p.d,null)," "),"  description")))});return l.a.createElement(c.a,{activePage:"teaching"},l.a.createElement("section",{style:{minHeight:"250px",marginBottom:"150px"}},l.a.createElement("div",{className:"  tile is-vertical is-ancestor is-parent is-paddingless",style:{marginTop:"20px"}},l.a.createElement("article",{className:this.state.showClassLists?" tile is-child is-white front-page-tile is-paddingless":"is-hidden tile is-child is-white front-page-tile is-paddingless"},l.a.createElement("h1",{className:"title"},"Current Courses"),t),l.a.createElement("article",{className:this.state.showClassLists?" tile is-child is-white front-page-tile is-paddingless":"is-hidden tile is-child is-white front-page-tile is-paddingless",style:{marginTop:"-10"}},l.a.createElement("h1",{className:"title is-3"},"University of Maryland Courses"),l.a.createElement("ul",{style:{marginBottom:20}},n)),l.a.createElement("article",{className:this.state.showClassLists?" tile is-child   is-white front-page-tile is-paddingless":"is-hidden tile is-child   is-white front-page-tile is-paddingless"},l.a.createElement("h1",{className:"title"},"Previous Courses"),l.a.createElement(y,null)),l.a.createElement("div",{className:this.state.showClassLists?"is-hidden tabs is-fullwidth is-paddingless":" tabs is-fullwidth is-paddingless"}))))},t}(s.Component),w="2752771774";t.default=b},226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=[],n=e.length,r=0;r<n;r++)e[r]&&t.push(e[r]);return t.join(" ")}},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.injectStyled=t.Styled=t.ThemeProvider=void 0;var r=n(65);Object.defineProperty(t,"ThemeProvider",{enumerable:!0,get:function(){return r.ThemeProvider}});var i=n(239);Object.defineProperty(t,"injectStyled",{enumerable:!0,get:function(){return l(i).default}});var a=n(66),o=l(n(97)),s=l(n(240));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.create)((0,o.default)()),u=t.Styled=(0,s.default)(c);t.default=u()},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),a=n(226),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return function(t){var n=e.mountSheet(),r=Object.keys(n.classes).reduce(function(e,t){return Object.assign({},e,(r={},i=t,a=(0,o.default)([n.classes[t]]),i in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r));var r,i,a},{});return function(e){return(0,i.createElement)(t,Object.assign({classes:r},e))}}}},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(241),a=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=void 0,r=function(){return n||(n=e.createStyleSheet(t,{link:!0,meta:"styled-jss"}).attach()),n},i=function(t){return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return(0,a.default)({element:t,ownStyle:i,mountSheet:r,jss:e})}};return Object.defineProperty(i,"sheet",{get:function(){return n}}),Object.assign(i,{jss:e,mountSheet:r,styles:t})}}},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(1),o=n(65),s=d(n(242)),l=d(n(226)),c=d(n(253)),u=d(n(254));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){return e.displayName||e.name||"StyledElement"};t.default=function(e){var t,n,d,f=e.element,p=e.ownStyle,h=e.mountSheet,g=e.jss,y=function(e){return"string"==typeof e?{tagName:e}:e.tagName?e:{tagName:m(e),reactComponent:e}}(f),v=y.style,b=void 0===v?[]:v,w=y.tagName,k=y.reactComponent,C=b.concat(p),S=u.default.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(C)),O=S.dynamicStyle,M=S.staticStyle,_=M&&(0,c.default)(w),E=[],j={},x=void 0,P=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.setTheme=function(e){return r.setState({theme:e})},r.dynamicTagName="",r.staticClassName="",!r.dynamicTagName&&O&&(r.dynamicTagName=E.pop()||(0,c.default)(w)),r.state={},n[o.channel]&&(r.state.theme=o.themeListener.initial(n)),r.staticClassName=x,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentWillMount",value:function(){this.sheet=this.sheet||h();var e=this.sheet.rules.index,t=e.length;M&&!this.sheet.getRule(_)&&this.sheet.addRule(_,M),O&&(this.sheet.getRule(this.dynamicTagName)||this.sheet.addRule(this.dynamicTagName,O),j[this.dynamicTagName]=j[this.dynamicTagName]||e.slice(t),this.updateSheet(this.props,this.state))}},{key:"componentDidMount",value:function(){this.state.theme&&(this.subscriptionId=o.themeListener.subscribe(this.context,this.setTheme))}},{key:"componentWillUpdate",value:function(e,t){O&&this.updateSheet(e,t)}},{key:"componentWillUnmount",value:function(){E.push(this.dynamicTagName),this.subscriptionId&&o.themeListener.unsubscribe(this.context,this.subscriptionId)}},{key:"updateSheet",value:function(e,t){for(var n=void 0,r=0,i=t.theme?Object.assign({},t,e):e;r<j[this.dynamicTagName].length;r++)n=j[this.dynamicTagName][r],this.sheet.update(n.key,i)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","className"]),a=k?r:(0,s.default)(w,r),o=(0,l.default)([this.staticClassName,_&&this.sheet.classes[_],this.dynamicTagName&&this.sheet.classes[this.dynamicTagName],n]);return(0,i.createElement)(k||w,Object.assign({},a,{className:o}),t)}}]),t}();return P.tagName=w,P.style=C,P.reactComponent=k,P.contextTypes=(t={},n=o.channel,d=a.object,n in t?Object.defineProperty(t,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):t[n]=d,t),P.valueOf=function(){return x||(x=""+g.generateClassName({key:(0,c.default)("static")})),"."+x},P.toString=P.valueOf,P}},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(243),a=(r=i)&&r.__esModule?r:{default:r};t.default=function(e,t){for(var n={},r=Object.keys(t),i=void 0,o=0;o<r.length;o++)i=r[o],(0,a.default)(e,i)&&(n[i]=t[i]);return n}},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=s(n(244)),a=s(n(245)),o=s(n(246));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(o.default[t])return!0;var n="string"==typeof e?(0,i.default)(e):e;if(t in n)return!0;var s=t.toLowerCase();if(s in n)return!0;if((0,a.default)(s))return!0;var l=t.split("Capture"),c=r(l,1)[0];return c in o.default||c.toLowerCase()in n}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["http://www.w3.org/1999/xhtml","http://www.w3.org/2000/svg"],i={};t.default=function(e){if(e in i)return i[e];for(var t=window.HTMLUnknownElement,n=0;n<r.length;n+=1)if(!((t=document.createElementNS(r[n],e))instanceof window.HTMLUnknownElement))return i[e]=t,t;return t}},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return 0===e.indexOf("data-")||0===e.indexOf("aria-")}},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(247));var i={};for(var a in r)Object.assign(i,r[a]);t.default=i},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(248);Object.defineProperty(t,"events",{enumerable:!0,get:function(){return l(r).default}});var i=n(249);Object.defineProperty(t,"html",{enumerable:!0,get:function(){return l(i).default}});var a=n(250);Object.defineProperty(t,"react",{enumerable:!0,get:function(){return l(a).default}});var o=n(251);Object.defineProperty(t,"schema",{enumerable:!0,get:function(){return l(o).default}});var s=n(252);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"svg",{enumerable:!0,get:function(){return l(s).default}})},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={onDoubleClick:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onDragExit:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={role:!0,scoped:!0,allowTransparency:!0,capture:!0,challenge:!0,classID:!0,contextMenu:!0,formEncType:!0,icon:!0,inputMode:!0,is:!0,keyParams:!0,keyType:!0,manifest:!0,mediaGroup:!0,nonce:!0,profile:!0,radioGroup:!0,seamless:!0,wmode:!0,about:!0,datatype:!0,inlist:!0,property:!0,resource:!0,typeof:!0,vocab:!0,autoCorrect:!0,autoSave:!0,results:!0,security:!0,unselectable:!0}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0,autoFocus:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,onFocusIn:!0,onFocusOut:!0,valueLink:!0,checkedLink:!0,allowFullScreen:!0}},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={itemProp:!0,itemScope:!0,itemType:!0,itemID:!0,itemRef:!0}},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={accentHeight:!0,accumulate:!0,additive:!0,alignmentBaseline:!0,allowReorder:!0,alphabetic:!0,amplitude:!0,arabicForm:!0,ascent:!0,attributeName:!0,attributeType:!0,autoReverse:!0,azimuth:!0,baseFrequency:!0,baseProfile:!0,baselineShift:!0,bbox:!0,begin:!0,bias:!0,by:!0,calcMode:!0,capHeight:!0,clip:!0,clipPath:!0,clipRule:!0,clipPathUnits:!0,colorInterpolation:!0,colorInterpolationFilters:!0,colorProfile:!0,colorRendering:!0,contentScriptType:!0,contentStyleType:!0,cursor:!0,cx:!0,cy:!0,d:!0,decelerate:!0,descent:!0,diffuseConstant:!0,direction:!0,display:!0,divisor:!0,dominantBaseline:!0,dur:!0,dx:!0,dy:!0,edgeMode:!0,elevation:!0,enableBackground:!0,end:!0,exponent:!0,externalResourcesRequired:!0,fill:!0,fillOpacity:!0,fillRule:!0,filter:!0,filterRes:!0,filterUnits:!0,floodColor:!0,floodOpacity:!0,focusable:!0,fontFamily:!0,fontSize:!0,fontSizeAdjust:!0,fontStretch:!0,fontStyle:!0,fontVariant:!0,fontWeight:!0,format:!0,from:!0,fx:!0,fy:!0,g1:!0,g2:!0,glyphName:!0,glyphOrientationHorizontal:!0,glyphOrientationVertical:!0,glyphRef:!0,gradientTransform:!0,gradientUnits:!0,hanging:!0,horizAdvX:!0,horizOriginX:!0,ideographic:!0,imageRendering:!0,in:!0,in2:!0,intercept:!0,k:!0,k1:!0,k2:!0,k3:!0,k4:!0,kernelMatrix:!0,kernelUnitLength:!0,kerning:!0,keyPoints:!0,keySplines:!0,keyTimes:!0,lengthAdjust:!0,letterSpacing:!0,lightingColor:!0,limitingConeAngle:!0,local:!0,markerEnd:!0,markerMid:!0,markerStart:!0,markerHeight:!0,markerUnits:!0,markerWidth:!0,mask:!0,maskContentUnits:!0,maskUnits:!0,mathematical:!0,mode:!0,numOctaves:!0,offset:!0,opacity:!0,operator:!0,order:!0,orient:!0,orientation:!0,origin:!0,overflow:!0,overlinePosition:!0,overlineThickness:!0,paintOrder:!0,panose1:!0,pathLength:!0,patternContentUnits:!0,patternTransform:!0,patternUnits:!0,pointerEvents:!0,points:!0,pointsAtX:!0,pointsAtY:!0,pointsAtZ:!0,preserveAlpha:!0,preserveAspectRatio:!0,primitiveUnits:!0,r:!0,radius:!0,refX:!0,refY:!0,renderingIntent:!0,repeatCount:!0,repeatDur:!0,requiredExtensions:!0,requiredFeatures:!0,restart:!0,result:!0,rotate:!0,rx:!0,ry:!0,scale:!0,seed:!0,shapeRendering:!0,slope:!0,spacing:!0,specularConstant:!0,specularExponent:!0,speed:!0,spreadMethod:!0,startOffset:!0,stdDeviation:!0,stemh:!0,stemv:!0,stitchTiles:!0,stopColor:!0,stopOpacity:!0,strikethroughPosition:!0,strikethroughThickness:!0,string:!0,stroke:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeLinecap:!0,strokeLinejoin:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,surfaceScale:!0,systemLanguage:!0,tableValues:!0,targetX:!0,targetY:!0,textAnchor:!0,textDecoration:!0,textRendering:!0,textLength:!0,to:!0,transform:!0,u1:!0,u2:!0,underlinePosition:!0,underlineThickness:!0,unicode:!0,unicodeBidi:!0,unicodeRange:!0,unitsPerEm:!0,vAlphabetic:!0,vHanging:!0,vIdeographic:!0,vMathematical:!0,values:!0,vectorEffect:!0,version:!0,vertAdvY:!0,vertOriginX:!0,vertOriginY:!0,viewBox:!0,viewTarget:!0,visibility:!0,widths:!0,wordSpacing:!0,writingMode:!0,x:!0,xHeight:!0,x1:!0,x2:!0,xChannelSelector:!0,xlinkActuate:!0,xlinkArcrole:!0,xlinkHref:!0,xlinkRole:!0,xlinkShow:!0,xlinkTitle:!0,xlinkType:!0,xmlBase:!0,xmlns:!0,xmlnsXlink:!0,xmlLang:!0,xmlSpace:!0,y:!0,y1:!0,y2:!0,yChannelSelector:!0,z:!0,zoomAndPan:!0}},253:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=0;t.default=function(e){return e+"-"+ ++r}},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(255),o=(r=a)&&r.__esModule?r:{default:r};n(258);var s=function(e){return"object"===(void 0===e?"undefined":i(e))&&null!==e&&!Array.isArray(e)};t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r={},i=[],a=0;a<t.length;a++){var l=t[a];"function"==typeof l?i.push(l):Object.assign(r,l)}var c=function e(t){for(var n={},r=Object.keys(t),i=0;i<r.length;i++){var a=r[i],l=t[a],c=Object.create(null);for(var u in"function"==typeof l||(0,o.default)(l)?c.dynamicStyle=l:s(l)?Object.assign(c,e(l)):c.staticStyle=l,c)n[u]=n[u]||{},n[u][a]=c[u]}return n}(r);if(i.length){var u=c.dynamicStyle,d=void 0===u?{}:u;c.dynamicStyle=function(e){for(var t=[],n={},r=0;r<i.length;r++)t.push(i[r](e));for(var a=Object.keys(d),o=0;o<a.length;o++)n[a[o]]=d[a[o]](e);return Object.assign.apply(Object,[n].concat(t))}}return c}},255:function(e,t,n){"use strict";var r=n(256);e.exports=function(e){return Boolean(e&&e[r])}},256:function(e,t,n){"use strict";(function(t){e.exports=n(257)(t||window||this)}).call(this,n(28))},257:function(e,t,n){"use strict";e.exports=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}},258:function(e,t,n){},450:function(e,t,n){"use strict";n(451);var r=n(5),i=n(96),a=n(18),o=/./.toString,s=function(e){n(20)(RegExp.prototype,"toString",e,!0)};n(19)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},451:function(e,t,n){n(18)&&"g"!=/./g.flags&&n(29).f(RegExp.prototype,"flags",{configurable:!0,get:n(96)})},452:function(e){e.exports={data:{allPastCoursesCsv:{edges:[{node:{description:"Logic and Artificial Intelligence",semester:"Fall 2012",website:"http://web.pacuit.io/classes/logicai-cmu.html",school:"Carnegie Mellon University"}},{node:{description:"Rationality, Masters in Philosophy Program",semester:"Fall 2010, Spring 2011",website:"http://web.pacuit.io/classes/rationality.html",school:"Tilburg University"}},{node:{description:"Computability and Logic",semester:"Spring 2009",website:"http://web.pacuit.io/classes/phil152spr09.html",school:"Stanford University"}},{node:{description:"Rational Agency and Intelligent Interaction",semester:"Spring 2009",website:"http://web.stanford.edu/class/cs222/",school:"Stanford University"}},{node:{description:"First Order Logic",semester:"Winter 2009",website:"http://web.pacuit.io/classes/phil151winter09.html",school:"Stanford University"}},{node:{description:"Model Theory",semester:"Fall 2008",website:"http://web.pacuit.io/classes/modelfall08.html",school:"Stanford University"}},{node:{description:"Can Machines Know? Can Machines Feel? ",semester:"Spring 2008, with Yoav Shoham",website:"",school:"Stanford University"}},{node:{description:"Model Theory",semester:"Spring 2006",website:"http://web.pacuit.io/classes/illc/model-illc.html",school:"Institute for Logic, Language and Computation, University of Amsterdam"}},{node:{description:"CAPUT Logic, Language and Information",semester:"Spring 2006",website:"http://web.pacuit.io/classes/illc/caputLLI-illc.html",school:"Institute for Logic, Language and Computation, University of Amsterdam"}},{node:{description:"Neighborhood Models and Their Applications",semester:"Winter 2006",website:"http://web.pacuit.io/classes/illc/nbhd.html",school:"Institute for Logic, Language and Computation, University of Amsterdam"}},{node:{description:"Introduction to Modal Logic",semester:"Fall 2005",website:"http://web.pacuit.io/classes/illc/modal-illc.html",school:"Institute for Logic, Language and Computation, University of Amsterdam"}},{node:{description:"Recursion Theory",semester:"Fall 2005",website:"http://web.pacuit.io/classes/illc/recth-illc.html",school:"Institute for Logic, Language and Computation, University of Amsterdam"}},{node:{description:"Introduction to Theoretical Computer Science",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Analysis of Algorithms",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Discrete Mathematics",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Advanced C Programming",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Unix Shell Programming (Korn Shell)",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Introduction to C Programming",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Multimedia Programming",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Introduction to Computer Science",semester:"",website:"",school:"Brooklyn College"}},{node:{description:"Introduction to Symbolic Logic",semester:"Fall 2003",website:"",school:"New York University"}},{node:{description:"Calculus",semester:"",website:"",school:"Case Western Reserve University"}},{node:{description:"College Algebra",semester:"",website:"",school:"Case Western Reserve University"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-teaching-js-530a078251bed31e54b3.js.map