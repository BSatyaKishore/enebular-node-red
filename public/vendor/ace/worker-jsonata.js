!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).jsonata=e()}}(function(){return function(){return function e(t,r,n){function o(a,s){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(e){var r=t[a][1][e];return o(r||e)},f,f.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}}()({1:[function(e,t,r){(function(r){"use strict";var n=b(e("babel-runtime/core-js/symbol")),o=b(e("babel-runtime/core-js/object/is")),i=b(e("babel-runtime/core-js/array/from")),a=b(e("babel-runtime/core-js/json/stringify")),s=b(e("babel-runtime/core-js/symbol/iterator")),u=b(e("babel-runtime/core-js/is-iterable")),c=b(e("babel-runtime/core-js/object/keys")),f=b(e("babel-runtime/regenerator")),l=b(e("babel-runtime/core-js/promise")),p=b(e("babel-runtime/core-js/number/is-integer")),d=b(e("babel-runtime/core-js/object/create")),h="function"==typeof n.default&&"symbol"==typeof s.default?function(e){return typeof e}:function(e){return e&&"function"==typeof n.default&&e.constructor===n.default&&e!==n.default.prototype?"symbol":typeof e};function b(e){return e&&e.__esModule?e:{default:e}}var v=function(){var e=f.default.mark(J),t=f.default.mark(V),n=f.default.mark(K),b=f.default.mark(H),v=f.default.mark(Q),g=f.default.mark(Z),m=f.default.mark(X),y=f.default.mark(ce),_=f.default.mark(le),x=f.default.mark(pe),k=f.default.mark(de),w=f.default.mark(ve),j=f.default.mark(_e),S=f.default.mark(je),O=f.default.mark(Se),E=f.default.mark(Oe),A=f.default.mark(Ae),T=f.default.mark(Pe),P=f.default.mark(Ye),D=f.default.mark(Ce),M=f.default.mark(ze),Y=f.default.mark(qe),L=f.default.mark(Ue),N=f.default.mark(Be),F={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":75,"#":70,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},I={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},R=function(e){var t=0,r=e.length,n=function(e,r){return{type:e,value:r,position:t}};return function(o){if(t>=r)return null;for(var i=e.charAt(t);t<r&&" \t\n\r\v".indexOf(i)>-1;)t++,i=e.charAt(t);if(!0!==o&&"/"===i)return t++,n("regex",function(){for(var n,o,i=t,a=0;t<r;){var s=e.charAt(t);if("/"===s&&"\\"!==e.charAt(t-1)&&0===a){if(""===(n=e.substring(i,t)))throw{code:"S0301",stack:(new Error).stack,position:t};for(t++,s=e.charAt(t),i=t;"i"===s||"m"===s;)t++,s=e.charAt(t);return o=e.substring(i,t)+"g",new RegExp(n,o)}"("!==s&&"["!==s&&"{"!==s||"\\"===e.charAt(t-1)||a++,")"!==s&&"]"!==s&&"}"!==s||"\\"===e.charAt(t-1)||a--,t++}throw{code:"S0302",stack:(new Error).stack,position:t}}());if("."===i&&"."===e.charAt(t+1))return t+=2,n("operator","..");if(":"===i&&"="===e.charAt(t+1))return t+=2,n("operator",":=");if("!"===i&&"="===e.charAt(t+1))return t+=2,n("operator","!=");if(">"===i&&"="===e.charAt(t+1))return t+=2,n("operator",">=");if("<"===i&&"="===e.charAt(t+1))return t+=2,n("operator","<=");if("*"===i&&"*"===e.charAt(t+1))return t+=2,n("operator","**");if("~"===i&&">"===e.charAt(t+1))return t+=2,n("operator","~>");if(F.hasOwnProperty(i))return t++,n("operator",i);if('"'===i||"'"===i){var a=i;t++;for(var s="";t<r;){if("\\"===(i=e.charAt(t)))if(t++,i=e.charAt(t),I.hasOwnProperty(i))s+=I[i];else{if("u"!==i)throw{code:"S0103",stack:(new Error).stack,position:t,token:i};var u=e.substr(t+1,4);if(!/^[0-9a-fA-F]+$/.test(u))throw{code:"S0104",stack:(new Error).stack,position:t};var c=parseInt(u,16);s+=String.fromCharCode(c),t+=4}else{if(i===a)return t++,n("string",s);s+=i}t++}throw{code:"S0101",stack:(new Error).stack,position:t}}var f,l=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/.exec(e.substring(t));if(null!==l){var p=parseFloat(l[0]);if(!isNaN(p)&&isFinite(p))return t+=l[0].length,n("number",p);throw{code:"S0102",stack:(new Error).stack,position:t,token:l[0]}}if("`"===i){t++;var d=e.indexOf("`",t);if(-1!==d)return f=e.substring(t,d),t=d+1,n("name",f);throw t=r,{code:"S0105",stack:(new Error).stack,position:t}}for(var h,b=t;;)if(h=e.charAt(b),b===r||" \t\n\r\v".indexOf(h)>-1||F.hasOwnProperty(h)){if("$"===e.charAt(t))return f=e.substring(t+1,b),t=b,n("variable",f);switch(f=e.substring(t,b),t=b,f){case"or":case"in":case"and":return n("operator",f);case"true":return n("value",!0);case"false":return n("value",!1);case"null":return n("value",null);default:return t===r&&""===f?null:n("name",f)}}else b++}};function C(e){for(var t=1,r=[],n={},o=n;t<e.length;){var i=e.charAt(t);if(":"===i)break;var a=function(){r.push(n),o=n,n={}},s=function(e,t,r,n){for(var o=1,a=t;a<e.length;)if(a++,(i=e.charAt(a))===n){if(0===--o)break}else i===r&&o++;return a};switch(i){case"s":case"n":case"b":case"l":case"o":n.regex="["+i+"m]",n.type=i,a();break;case"a":n.regex="[asnblfom]",n.type=i,n.array=!0,a();break;case"f":n.regex="f",n.type=i,a();break;case"j":n.regex="[asnblom]",n.type=i,a();break;case"x":n.regex="[asnblfom]",n.type=i,a();break;case"-":o.context=!0,o.contextRegex=new RegExp(o.regex),o.regex+="?";break;case"?":case"+":o.regex+=i;break;case"(":var u=s(e,t,"(",")"),c=e.substring(t+1,u);if(-1!==c.indexOf("<"))throw{code:"S0402",stack:(new Error).stack,value:c,offset:t};n.regex="["+c+"m]",n.type="("+c+")",t=u,a();break;case"<":if("a"!==o.type&&"f"!==o.type)throw{code:"S0401",stack:(new Error).stack,value:o.type,offset:t};var f=s(e,t,"<",">");o.subtype=e.substring(t+1,f),t=f}t++}var l="^"+r.map(function(e){return"("+e.regex+")"}).join("")+"$",p=new RegExp(l),d=function(e){var t;if(xe(e))t="f";else switch(void 0===e?"undefined":h(e)){case"string":t="s";break;case"number":t="n";break;case"boolean":t="b";break;case"object":t=null===e?"l":Array.isArray(e)?"a":"o";break;case"undefined":default:t="m"}return t};return{definition:e,validate:function(e,t){var n="";e.forEach(function(e){n+=d(e)});var o=p.exec(n);if(o){var i=[],a=0;return r.forEach(function(r,n){var s=e[a],u=o[n+1];if(""===u)if(r.context&&r.contextRegex){var c=d(t);if(!r.contextRegex.test(c))throw{code:"T0411",stack:(new Error).stack,value:t,index:a+1};i.push(t)}else i.push(s),a++;else u.split("").forEach(function(t){if("a"===r.type){if("m"===t)s=void 0;else{s=e[a];var n=!0;if(void 0!==r.subtype)if("a"!==t&&u!==r.subtype)n=!1;else if("a"===t&&s.length>0){var o=d(s[0]);if(o!==r.subtype.charAt(0))n=!1;else n=0===s.filter(function(e){return d(e)!==o}).length}if(!n)throw{code:"T0412",stack:(new Error).stack,value:s,index:a+1,type:r.subtype};"a"!==t&&(s=[s])}i.push(s),a++}else i.push(s),a++})}),i}!function(e,t){for(var n="^",o=0,i=0;i<r.length;i++){n+=r[i].regex;var a=t.match(n);if(null===a)throw{code:"T0410",stack:(new Error).stack,value:e[o],index:o+1};o=a[0].length}throw{code:"T0410",stack:(new Error).stack,value:e[o],index:o+1}}(e,n)}}}var G=function(e,t){var r,n,o={},i=[],a=function(){var e=[];"(end)"!==r.id&&e.push({type:r.type,value:r.value,position:r.position});for(var t=n();null!==t;)e.push(t),t=n();return e},s={nud:function(){var e={code:"S0211",token:this.value,position:this.position};if(t)return e.remaining=a(),e.type="error",i.push(e),e;throw e.stack=(new Error).stack,e}},u=function(e,t){var r=o[e];return t=t||0,r?t>=r.lbp&&(r.lbp=t):((r=(0,d.default)(s)).id=r.value=e,r.lbp=t,o[e]=r),r},c=function(e){if(t){e.remaining=a(),i.push(e);var n=o["(error)"];return(r=(0,d.default)(n)).error=e,r.type="(error)",r}throw e.stack=(new Error).stack,e},f=function(t,i){if(t&&r.id!==t){var a={code:"(end)"===r.id?"S0203":"S0202",position:r.position,token:r.value,value:t};return c(a)}var s=n(i);if(null===s)return(r=o["(end)"]).position=e.length,r;var u,f=s.value,l=s.type;switch(l){case"name":case"variable":u=o["(name)"];break;case"operator":if(!(u=o[f]))return c({code:"S0204",stack:(new Error).stack,position:s.position,token:f});break;case"string":case"number":case"value":u=o["(literal)"];break;case"regex":l="regex",u=o["(regex)"];break;default:return c({code:"S0205",stack:(new Error).stack,position:s.position,token:f})}return(r=(0,d.default)(u)).value=f,r.type=l,r.position=s.position,r},l=function(e){var t,n=r;for(f(null,!0),t=n.nud();e<r.lbp;)n=r,f(),t=n.led(t);return t},p=function(e){u(e,0).nud=function(){return this}},h=function(e,t,r){var n=t||F[e],o=u(e,n);return o.led=r||function(e){return this.lhs=e,this.rhs=l(n),this.type="binary",this},o},b=function(e,t,r){var n=u(e,t);return n.led=r,n},v=function(e,t){var r=u(e);return r.nud=t||function(){return this.expression=l(70),this.type="unary",this},r};p("(end)"),p("(name)"),p("(literal)"),p("(regex)"),u(":"),u(";"),u(","),u(")"),u("]"),u("}"),u(".."),h("."),h("+"),h("-"),h("*"),h("/"),h("%"),h("="),h("<"),h(">"),h("!="),h("<="),h(">="),h("&"),h("and"),h("or"),h("in"),p("and"),p("or"),p("in"),v("-"),h("~>"),b("(error)",10,function(e){return this.lhs=e,this.error=r.error,this.remaining=a(),this.type="error",this}),v("*",function(){return this.type="wildcard",this}),v("**",function(){return this.type="descendant",this}),h("(",F["("],function(e){if(this.procedure=e,this.type="function",this.arguments=[],")"!==r.id)for(;"operator"===r.type&&"?"===r.id?(this.type="partial",this.arguments.push(r),f("?")):this.arguments.push(l(0)),","===r.id;)f(",");if(f(")",!0),"name"===e.type&&("function"===e.value||"λ"===e.value)){if(this.arguments.forEach(function(e,t){if("variable"!==e.type)return c({code:"S0208",stack:(new Error).stack,position:e.position,token:e.value,value:t+1})}),this.type="lambda","<"===r.id){for(var t=r.position,n=1,o="<";n>0&&"{"!==r.id&&"(end)"!==r.id;){var i=f();">"===i.id?n--:"<"===i.id&&n++,o+=i.value}f(">");try{this.signature=C(o)}catch(e){return e.position=t+e.offset,c(e)}}f("{"),this.body=l(0),f("}")}return this}),v("(",function(){for(var e=[];")"!==r.id&&(e.push(l(0)),";"===r.id);)f(";");return f(")",!0),this.type="block",this.expressions=e,this}),v("[",function(){var e=[];if("]"!==r.id)for(;;){var t=l(0);if(".."===r.id){var n={type:"binary",value:"..",position:r.position,lhs:t};f(".."),n.rhs=l(0),t=n}if(e.push(t),","!==r.id)break;f(",")}return f("]",!0),this.expressions=e,this.type="unary",this}),h("[",F["["],function(e){if("]"===r.id){for(var t=e;t&&"binary"===t.type&&"["===t.value;)t=t.lhs;return t.keepArray=!0,f("]"),e}return this.lhs=e,this.rhs=l(F["]"]),this.type="binary",f("]",!0),this}),h("^",F["^"],function(e){f("(");for(var t=[];;){var n={descending:!1};if("<"===r.id?f("<"):">"===r.id&&(n.descending=!0,f(">")),n.expression=l(0),t.push(n),","!==r.id)break;f(",")}return f(")"),this.lhs=e,this.rhs=t,this.type="binary",this});var g=function(e){var t=[];if("}"!==r.id)for(;;){var n=l(0);f(":");var o=l(0);if(t.push([n,o]),","!==r.id)break;f(",")}return f("}",!0),void 0===e?(this.lhs=t,this.type="unary"):(this.lhs=e,this.rhs=t,this.type="binary"),this};v("{",g),h("{",F["{"],g),b(":=",F[":="],function(e){return"variable"!==e.type?c({code:"S0212",stack:(new Error).stack,position:e.position,token:e.value}):(this.lhs=e,this.rhs=l(F[":="]-1),this.type="binary",this)}),h("?",F["?"],function(e){return this.type="condition",this.condition=e,this.then=l(0),":"===r.id&&(f(":"),this.else=l(0)),this}),v("|",function(){return this.type="transform",this.pattern=l(0),f("|"),this.update=l(0),","===r.id&&(f(","),this.delete=l(0)),f("|"),this});n=R(e),f();var m=l(0);if("(end)"!==r.id){var y={code:"S0201",position:r.position,token:r.value};c(y)}return m=function e(r){var n;switch(r.type){case"binary":switch(r.value){case".":var o=e(r.lhs);n={type:"path",steps:[]},"path"===o.type?Array.prototype.push.apply(n.steps,o.steps):n.steps=[o];var a=e(r.rhs);"function"===a.type&&"path"===a.procedure.type&&1===a.procedure.steps.length&&"name"===a.procedure.steps[0].type&&"function"===n.steps[n.steps.length-1].type&&(n.steps[n.steps.length-1].nextFunction=a.procedure.steps[0].value),"path"!==a.type&&(a={type:"path",steps:[a]}),Array.prototype.push.apply(n.steps,a.steps),n.steps.filter(function(e){if("number"===e.type||"value"===e.type)throw{code:"S0213",stack:(new Error).stack,position:e.position,value:e.value};return"string"===e.type}).forEach(function(e){e.type="name"}),n.steps.filter(function(e){return!0===e.keepArray}).length>0&&(n.keepSingletonArray=!0);var s=n.steps[0];"unary"===s.type&&"["===s.value&&(s.consarray=!0);var u=n.steps[n.steps.length-1];"unary"===u.type&&"["===u.value&&(u.consarray=!0);break;case"[":var c=n=e(r.lhs);if("path"===n.type&&(c=n.steps[n.steps.length-1]),void 0!==c.group)throw{code:"S0209",stack:(new Error).stack,position:r.position};void 0===c.predicate&&(c.predicate=[]),c.predicate.push(e(r.rhs));break;case"{":if(void 0!==(n=e(r.lhs)).group)throw{code:"S0210",stack:(new Error).stack,position:r.position};n.group={lhs:r.rhs.map(function(t){return[e(t[0]),e(t[1])]}),position:r.position};break;case"^":(n={type:"sort",value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=r.rhs.map(function(t){return{descending:t.descending,expression:e(t.expression)}});break;case":=":(n={type:"bind",value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=e(r.rhs);break;case"~>":(n={type:"apply",value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=e(r.rhs);break;default:(n={type:r.type,value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=e(r.rhs)}break;case"unary":n={type:r.type,value:r.value,position:r.position},"["===r.value?n.expressions=r.expressions.map(function(t){return e(t)}):"{"===r.value?n.lhs=r.lhs.map(function(t){return[e(t[0]),e(t[1])]}):(n.expression=e(r.expression),"-"===r.value&&"number"===n.expression.type&&((n=n.expression).value=-n.value));break;case"function":case"partial":(n={type:r.type,name:r.name,value:r.value,position:r.position}).arguments=r.arguments.map(function(t){return e(t)}),n.procedure=e(r.procedure);break;case"lambda":n={type:r.type,arguments:r.arguments,signature:r.signature,position:r.position};var f=e(r.body);n.body=function e(t){var r;if("function"!==t.type||t.predicate)if("condition"===t.type)t.then=e(t.then),void 0!==t.else&&(t.else=e(t.else)),r=t;else if("block"===t.type){var n=t.expressions.length;n>0&&(t.expressions[n-1]=e(t.expressions[n-1])),r=t}else r=t;else{var o={type:"lambda",thunk:!0,arguments:[],position:t.position};o.body=t,r=o}return r}(f);break;case"condition":(n={type:r.type,position:r.position}).condition=e(r.condition),n.then=e(r.then),void 0!==r.else&&(n.else=e(r.else));break;case"transform":(n={type:r.type,position:r.position}).pattern=e(r.pattern),n.update=e(r.update),void 0!==r.delete&&(n.delete=e(r.delete));break;case"block":(n={type:r.type,position:r.position}).expressions=r.expressions.map(function(t){return e(t)});break;case"name":n={type:"path",steps:[r]},r.keepArray&&(n.keepSingletonArray=!0);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":n=r;break;case"operator":if("and"===r.value||"or"===r.value||"in"===r.value)r.type="name",n=e(r);else{if("?"!==r.value)throw{code:"S0201",stack:(new Error).stack,position:r.position,token:r.value};n=r}break;case"error":n=r,r.lhs&&(n=e(r.lhs));break;default:var l="S0206";"(end)"===r.id&&(l="S0207");var p={code:l,position:r.position,token:r.value};if(t)return i.push(p),{type:"error",error:p};throw p.stack=(new Error).stack,p}return n}(m),i.length>0&&(m.errors=i),m},$=Ke(null);function z(e){var t=!1;if("number"==typeof e&&(t=!isNaN(e))&&!isFinite(e))throw{code:"D1001",value:e,stack:(new Error).stack};return t}function q(e){var t=!1;return Array.isArray(e)&&(t=0===e.filter(function(e){return"string"!=typeof e}).length),t}function U(e){var t=!1;return Array.isArray(e)&&(t=0===e.filter(function(e){return!z(e)}).length),t}function J(t,r,n){var o,i,a;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(i=n.lookup("__evaluate_entry"))&&i(t,r,n),e.t0=t.type,e.next="path"===e.t0?5:"binary"===e.t0?8:"unary"===e.t0?11:"name"===e.t0?14:"string"===e.t0?16:"number"===e.t0?16:"value"===e.t0?16:"wildcard"===e.t0?18:"descendant"===e.t0?20:"condition"===e.t0?22:"block"===e.t0?25:"bind"===e.t0?28:"regex"===e.t0?31:"function"===e.t0?33:"variable"===e.t0?36:"lambda"===e.t0?38:"partial"===e.t0?40:"apply"===e.t0?43:"sort"===e.t0?46:"transform"===e.t0?49:51;break;case 5:return e.delegateYield(V(t,r,n),"t1",6);case 6:return o=e.t1,e.abrupt("break",51);case 8:return e.delegateYield(Z(t,r,n),"t2",9);case 9:return o=e.t2,e.abrupt("break",51);case 11:return e.delegateYield(X(t,r,n),"t3",12);case 12:return o=e.t3,e.abrupt("break",51);case 14:return o=ee(t,r,n),e.abrupt("break",51);case 16:return o=te(t),e.abrupt("break",51);case 18:return o=re(t,r),e.abrupt("break",51);case 20:return o=ne(t,r),e.abrupt("break",51);case 22:return e.delegateYield(pe(t,r,n),"t4",23);case 23:return o=e.t4,e.abrupt("break",51);case 25:return e.delegateYield(de(t,r,n),"t5",26);case 26:return o=e.t5,e.abrupt("break",51);case 28:return e.delegateYield(le(t,r,n),"t6",29);case 29:return o=e.t6,e.abrupt("break",51);case 31:return o=he(t),e.abrupt("break",51);case 33:return e.delegateYield(je(t,r,n),"t7",34);case 34:return o=e.t7,e.abrupt("break",51);case 36:return o=be(t,r,n),e.abrupt("break",51);case 38:return o=Ee(t,r,n),e.abrupt("break",51);case 40:return e.delegateYield(Ae(t,r,n),"t8",41);case 41:return o=e.t8,e.abrupt("break",51);case 43:return e.delegateYield(_e(t,r,n),"t9",44);case 44:return o=e.t9,e.abrupt("break",51);case 46:return e.delegateYield(ve(t,r,n),"t10",47);case 47:return o=e.t10,e.abrupt("break",51);case 49:return o=ge(t,r,n),e.abrupt("break",51);case 51:if(!n.lookup("__jsonata_async")||void 0!==o&&null!==o&&"function"==typeof o.then||(o=l.default.resolve(o)),!n.lookup("__jsonata_async")||"function"!=typeof o.then||!t.nextFunction||"function"!=typeof o[t.nextFunction]){e.next=55;break}e.next=58;break;case 55:return e.next=57,o;case 57:o=e.sent;case 58:if(!t.hasOwnProperty("predicate")){e.next=61;break}return e.delegateYield(H(t.predicate,o,n),"t11",60);case 60:o=e.t11;case 61:if(!t.hasOwnProperty("group")){e.next=64;break}return e.delegateYield(ce(t.group,o,n),"t12",63);case 63:o=e.t12;case 64:return(a=n.lookup("__evaluate_exit"))&&a(t,r,n,o),o&&o.sequence&&(o=o.value()),e.abrupt("return",o);case 68:case"end":return e.stop()}},e,this)}function B(){var e=W([]);return 1===arguments.length&&e.push(arguments[0]),e}function W(e){return Object.defineProperty(e,"sequence",{enumerable:!1,configurable:!1,get:function(){return!0}}),Object.defineProperty(e,"keepSingleton",{enumerable:!1,configurable:!1,writable:!0,value:!1}),Object.defineProperty(e,"value",{enumerable:!1,configurable:!1,get:function(){return function(){switch(this.length){case 0:return;case 1:return this.keepSingleton?this:this[0];default:return this}}}}),e}function V(e,r,n){var o,i,a,s;return f.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o="variable"===e.steps[0].type?B(r):Array.isArray(r)?r:B(r),a=0;case 2:if(!(a<e.steps.length)){t.next=17;break}if(s=e.steps[a],0!==a||!s.consarray){t.next=9;break}return t.delegateYield(J(s,o,n),"t0",6);case 6:i=t.t0,t.next=11;break;case 9:return t.delegateYield(K(s,o,n,a===e.steps.length-1),"t1",10);case 10:i=t.t1;case 11:if(void 0!==i&&0!==i.length){t.next=13;break}return t.abrupt("break",17);case 13:o=i;case 14:a++,t.next=2;break;case 17:return e.keepSingletonArray&&(i.keepSingleton=!0),t.abrupt("return",i);case 19:case"end":return t.stop()}},t,this)}function K(e,t,r,o){var i,a,s,u;return f.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:i=B(),a=0;case 2:if(!(a<t.length)){n.next=9;break}return n.delegateYield(J(e,t[a],r),"t0",4);case 4:void 0!==(s=n.t0)&&i.push(s);case 6:a++,n.next=2;break;case 9:return u=B(),o&&1===i.length&&Array.isArray(i[0])&&!i[0].sequence?u=i[0]:i.forEach(function(e){!Array.isArray(e)||e.cons||e.keepSingleton?u.push(e):Array.prototype.push.apply(u,e)}),n.abrupt("return",u);case 12:case"end":return n.stop()}},n,this)}function H(e,t,r){var n,o,i,a,s;return f.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:n=t,o=B(),i=0;case 3:if(!(i<e.length)){u.next=20;break}if(a=e[i],Array.isArray(n)||(n=B(n)),o=B(),"number"!==a.type){u.next=14;break}s=a.value,(0,p.default)(s)||(s=Math.floor(s)),s<0&&(s=n.length+s),o=n[s],u.next=16;break;case 14:return u.delegateYield(Q(a,n,r),"t0",15);case 15:o=u.t0;case 16:n=o;case 17:i++,u.next=3;break;case 20:return u.abrupt("return",o);case 21:case"end":return u.stop()}},b,this)}function Q(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:n=B(),o=0;case 2:if(!(o<t.length)){s.next=11;break}return i=t[o],s.delegateYield(J(e,i,r),"t0",5);case 5:z(a=s.t0)&&(a=[a]),U(a)?a.forEach(function(e){(0,p.default)(e)||(e=Math.floor(e)),e<0&&(e=t.length+e),e===o&&n.push(i)}):$e(a)&&n.push(i);case 8:o++,s.next=2;break;case 11:return s.abrupt("return",n);case 12:case"end":return s.stop()}},v,this)}function Z(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.delegateYield(J(e.lhs,t,r),"t0",1);case 1:return o=s.t0,s.delegateYield(J(e.rhs,t,r),"t1",3);case 3:i=s.t1,a=e.value,s.prev=5,s.t2=a,s.next="+"===s.t2?9:"-"===s.t2?9:"*"===s.t2?9:"/"===s.t2?9:"%"===s.t2?9:"="===s.t2?11:"!="===s.t2?11:"<"===s.t2?11:"<="===s.t2?11:">"===s.t2?11:">="===s.t2?11:"&"===s.t2?13:"and"===s.t2?15:"or"===s.t2?15:".."===s.t2?17:"in"===s.t2?19:21;break;case 9:return n=oe(o,i,a),s.abrupt("break",21);case 11:return n=ie(o,i,a),s.abrupt("break",21);case 13:return n=ue(o,i),s.abrupt("break",21);case 15:return n=se(o,i,a),s.abrupt("break",21);case 17:return n=fe(o,i),s.abrupt("break",21);case 19:return n=ae(o,i),s.abrupt("break",21);case 21:s.next=28;break;case 23:throw s.prev=23,s.t3=s.catch(5),s.t3.position=e.position,s.t3.token=a,s.t3;case 28:return s.abrupt("return",n);case 29:case"end":return s.stop()}},g,this,[[5,23]])}function X(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:s.t0=e.value,s.next="-"===s.t0?3:"["===s.t0?15:"{"===s.t0?27:30;break;case 3:return s.delegateYield(J(e.expression,t,r),"t1",4);case 4:if(void 0!==(n=s.t1)){s.next=9;break}n=void 0,s.next=14;break;case 9:if(!z(n)){s.next=13;break}n=-n,s.next=14;break;case 13:throw{code:"D1002",stack:(new Error).stack,position:e.position,token:e.value,value:n};case 14:return s.abrupt("break",30);case 15:n=[],o=0;case 17:if(!(o<e.expressions.length)){s.next=25;break}return i=e.expressions[o],s.delegateYield(J(i,t,r),"t2",20);case 20:void 0!==(a=s.t2)&&("["===i.value?n.push(a):n=Je(n,a));case 22:o++,s.next=17;break;case 25:return e.consarray&&Object.defineProperty(n,"cons",{enumerable:!1,configurable:!1,value:!0}),s.abrupt("break",30);case 27:return s.delegateYield(ce(e,t,r),"t3",28);case 28:return n=s.t3,s.abrupt("break",30);case 30:return s.abrupt("return",n);case 31:case"end":return s.stop()}},m,this)}function ee(e,t,r){var n;if(Array.isArray(t)){n=B();for(var o=0;o<t.length;o++){var i=ee(e,t[o],r);void 0!==i&&n.push(i)}}else null!==t&&"object"===(void 0===t?"undefined":h(t))&&(n=t[e.value]);return n}function te(e){return e.value}function re(e,t){var r=B();return null!==t&&"object"===(void 0===t?"undefined":h(t))&&(0,c.default)(t).forEach(function(e){var n=t[e];Array.isArray(n)?(n=function e(t,r){void 0===r&&(r=[]);Array.isArray(t)?t.forEach(function(t){e(t,r)}):r.push(t);return r}(n),r=Je(r,n)):r.push(n)}),r}function ne(e,t){var r,n=B();return void 0!==t&&(!function e(t,r){Array.isArray(t)||r.push(t);Array.isArray(t)?t.forEach(function(t){e(t,r)}):null!==t&&"object"===(void 0===t?"undefined":h(t))&&(0,c.default)(t).forEach(function(n){e(t[n],r)})}(t,n),r=1===n.length?n[0]:n),r}function oe(e,t,r){var n;if(void 0===e||void 0===t)return n;if(!z(e))throw{code:"T2001",stack:(new Error).stack,value:e};if(!z(t))throw{code:"T2002",stack:(new Error).stack,value:t};switch(r){case"+":n=e+t;break;case"-":n=e-t;break;case"*":n=e*t;break;case"/":n=e/t;break;case"%":n=e%t}return n}function ie(e,t,r){var n,o=void 0===e?"undefined":h(e),i=void 0===t?"undefined":h(t);if("undefined"===o||"undefined"===i)return!1;var a=function(){if("string"!==o&&"number"!==o||"string"!==i&&"number"!==i)throw{code:"T2010",stack:(new Error).stack,value:"string"!==o&&"number"!==o?e:t};if(o!==i)throw{code:"T2009",stack:(new Error).stack,value:e,value2:t}};switch(r){case"=":n=e===t;break;case"!=":n=e!==t;break;case"<":a(),n=e<t;break;case"<=":a(),n=e<=t;break;case">":a(),n=e>t;break;case">=":a(),n=e>=t}return n}function ae(e,t){var r=!1;if(void 0===e||void 0===t)return!1;Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++)if(t[n]===e){r=!0;break}return r}function se(e,t,r){var n;switch(r){case"and":n=$e(e)&&$e(t);break;case"or":n=$e(e)||$e(t)}return n}function ue(e,t){var r="",n="";return void 0!==e&&(r=Fe(e)),void 0!==t&&(n=Fe(t)),r.concat(n)}function ce(e,t,r){var n,o,i,a,s,u,c,l,p;return f.default.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:n={},o={},Array.isArray(t)||(t=B(t)),i=0;case 4:if(!(i<t.length)){d.next=27;break}a=t[i],s=0;case 7:if(!(s<e.lhs.length)){d.next=24;break}return u=e.lhs[s],d.delegateYield(J(u[0],a,r),"t0",10);case 10:if("string"==typeof(c=d.t0)){d.next=13;break}throw{code:"T1003",stack:(new Error).stack,position:e.position,value:c};case 13:if(l={data:a,exprIndex:s},!o.hasOwnProperty(c)){d.next=20;break}if(o[c].exprIndex===s){d.next=17;break}throw{code:"D1009",stack:(new Error).stack,position:e.position,value:c};case 17:o[c].data=Je(o[c].data,a),d.next=21;break;case 20:o[c]=l;case 21:s++,d.next=7;break;case 24:i++,d.next=4;break;case 27:d.t1=f.default.keys(o);case 28:if((d.t2=d.t1()).done){d.next=36;break}return c=d.t2.value,l=o[c],d.delegateYield(J(e.lhs[l.exprIndex][1],l.data,r),"t3",32);case 32:void 0!==(p=d.t3)&&(n[c]=p),d.next=28;break;case 36:return d.abrupt("return",n);case 37:case"end":return d.stop()}},y,this)}function fe(e,t){var r;if(void 0===e||void 0===t)return r;if(e>t)return r;if(!(0,p.default)(e))throw{code:"T2003",stack:(new Error).stack,value:e};if(!(0,p.default)(t))throw{code:"T2004",stack:(new Error).stack,value:t};r=new Array(t-e+1);for(var n=e,o=0;n<=t;n++,o++)r[o]=n;return W(r)}function le(e,t,r){var n;return f.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.delegateYield(J(e.rhs,t,r),"t0",1);case 1:return n=o.t0,r.bind(e.lhs.value,n),o.abrupt("return",n);case 4:case"end":return o.stop()}},_,this)}function pe(e,t,r){var n;return f.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.delegateYield(J(e.condition,t,r),"t0",1);case 1:if(!$e(o.t0)){o.next=7;break}return o.delegateYield(J(e.then,t,r),"t1",4);case 4:n=o.t1,o.next=10;break;case 7:if(void 0===e.else){o.next=10;break}return o.delegateYield(J(e.else,t,r),"t2",9);case 9:n=o.t2;case 10:return o.abrupt("return",n);case 11:case"end":return o.stop()}},x,this)}function de(e,t,r){var n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:o=Ke(r),i=0;case 2:if(!(i<e.expressions.length)){a.next=8;break}return a.delegateYield(J(e.expressions[i],t,o),"t0",4);case 4:n=a.t0;case 5:i++,a.next=2;break;case 8:return a.abrupt("return",n);case 9:case"end":return a.stop()}},k,this)}function he(e){e.value.lastIndex=0;return function t(r){var n,o=e.value,i=o.exec(r);if(null!==i){if(n={match:i[0],start:i.index,end:i.index+i[0].length,groups:[]},i.length>1)for(var a=1;a<i.length;a++)n.groups.push(i[a]);n.next=function(){if(!(o.lastIndex>=r.length)){var n=t(r);if(n&&""===n.match&&o.lastIndex===e.value.lastIndex)throw{code:"D1004",stack:(new Error).stack,position:e.position,value:e.value.source};return n}}}return n}}function be(e,t,r){return""===e.value?t:r.lookup(e.value)}function ve(e,t,r){var n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.delegateYield(J(e.lhs,t,r),"t0",1);case 1:return o=i.t0,n=We(o,function(t,n){for(var o=0,i=0;0===o&&i<e.rhs.length;i++){var a=e.rhs[i],s=me(a.expression,t,r),u=me(a.expression,n,r),c=void 0===s?"undefined":h(s),f=void 0===u?"undefined":h(u);if("undefined"!==c)if("undefined"!==f){if("string"!==c&&"number"!==c||"string"!==f&&"number"!==f)throw{code:"T2008",stack:(new Error).stack,position:e.position,value:"string"!==c&&"number"!==c?s:u};if(c!==f)throw{code:"T2007",stack:(new Error).stack,position:e.position,value:s,value2:u};s!==u&&(o=s<u?-1:1,!0===a.descending&&(o=-o))}else o=-1;else o="undefined"===f?0:1}return 1===o}),i.abrupt("return",n);case 5:case"end":return i.stop()}},w,this)}function ge(e,t,r){return Ne(f.default.mark(function t(n){var o,i,a,s,u,c,l,p,d,b,v;return f.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=2;break}return t.abrupt("return",void 0);case 2:if(xe(o=r.lookup("clone"))){t.next=5;break}throw{code:"T2013",stack:(new Error).stack,position:e.position};case 5:return t.delegateYield(Se(o,[n],r),"t0",6);case 6:return i=t.t0,t.delegateYield(J(e.pattern,i,r),"t1",8);case 8:if(void 0===(a=t.t1)){t.next=33;break}Array.isArray(a)||(a=[a]),s=0;case 12:if(!(s<a.length)){t.next=33;break}return u=a[s],t.delegateYield(J(e.update,u,r),"t2",15);case 15:if(c=t.t2,"undefined"===(l=void 0===c?"undefined":h(c))){t.next=21;break}if("object"===l&&null!==c){t.next=20;break}throw{code:"T2011",stack:(new Error).stack,position:e.update.position,value:c};case 20:for(p in c)u[p]=c[p];case 21:if(void 0===e.delete){t.next=30;break}return t.delegateYield(J(e.delete,u,r),"t3",23);case 23:if(void 0===(d=t.t3)){t.next=30;break}if(b=d,Array.isArray(d)||(d=[d]),q(d)){t.next=29;break}throw{code:"T2012",stack:(new Error).stack,position:e.delete.position,value:b};case 29:for(v=0;v<d.length;v++)delete u[d[v]];case 30:s++,t.next=12;break;case 33:return t.abrupt("return",i);case 34:case"end":return t.stop()}},t,this)}),"<(oa):o>")}function me(e,t,r){for(var n=J(e,t,r),o=n.next();!o.done;)o=n.next(o.value);return o.value}Number.isInteger=p.default||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e};var ye=me(G("function($f, $g) { function($x){ $g($f($x)) } }"),null,$);function _e(e,t,r){var n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("function"!==e.rhs.type){a.next=7;break}return e.rhs.arguments.unshift(e.lhs),a.delegateYield(je(e.rhs,t,r),"t0",3);case 3:n=a.t0,e.rhs.arguments.shift(),a.next=20;break;case 7:return a.delegateYield(J(e.lhs,t,r),"t1",8);case 8:return o=a.t1,a.delegateYield(J(e.rhs,t,r),"t2",10);case 10:if(xe(i=a.t2)){a.next=13;break}throw{code:"T2006",stack:(new Error).stack,position:e.position,value:i};case 13:if(!xe(o)){a.next=18;break}return a.delegateYield(Se(ye,[o,i],r),"t3",15);case 15:n=a.t3,a.next=20;break;case 18:return a.delegateYield(Se(i,[o],r),"t4",19);case 19:n=a.t4;case 20:return a.abrupt("return",n);case 21:case"end":return a.stop()}},j,this)}function xe(e){return e&&(!0===e._jsonata_function||!0===e._jsonata_lambda)||"function"==typeof e}function ke(e){return e&&!0===e._jsonata_lambda}function we(e){return"object"===(void 0===e?"undefined":h(e))&&null!==e&&(0,u.default)(e)&&"function"==typeof e[s.default]&&"next"in e&&"function"==typeof e.next}function je(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.delegateYield(J(e.procedure,t,r),"t0",1);case 1:if(void 0!==(o=s.t0)||"path"!==e.procedure.type||!r.lookup(e.procedure.steps[0].value)){s.next=4;break}throw{code:"T1005",stack:(new Error).stack,position:e.position,token:e.procedure.steps[0].value};case 4:i=[],a=0;case 6:if(!(a<e.arguments.length)){s.next=14;break}return s.t1=i,s.delegateYield(J(e.arguments[a],t,r),"t2",9);case 9:s.t3=s.t2,s.t1.push.call(s.t1,s.t3);case 11:a++,s.next=6;break;case 14:return s.prev=14,s.delegateYield(Se(o,i,t),"t4",16);case 16:n=s.t4,s.next=24;break;case 19:throw s.prev=19,s.t5=s.catch(14),s.t5.position=e.position,s.t5.token="path"===e.procedure.type?e.procedure.steps[0].value:e.procedure.value,s.t5;case 24:return s.abrupt("return",n);case 25:case"end":return s.stop()}},S,this,[[14,19]])}function Se(e,t,r){var n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.delegateYield(Oe(e,t,r),"t0",1);case 1:n=s.t0;case 2:if(!ke(n)||!0!==n.thunk){s.next=19;break}return s.delegateYield(J(n.body.procedure,n.input,n.environment),"t1",4);case 4:o=s.t1,i=[],a=0;case 7:if(!(a<n.body.arguments.length)){s.next=15;break}return s.t2=i,s.delegateYield(J(n.body.arguments[a],n.input,n.environment),"t3",10);case 10:s.t4=s.t3,s.t2.push.call(s.t2,s.t4);case 12:a++,s.next=7;break;case 15:return s.delegateYield(Oe(o,i,r),"t5",16);case 16:n=s.t5,s.next=2;break;case 19:return s.abrupt("return",n);case 20:case"end":return s.stop()}},O,this)}function Oe(e,t,r){var n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o=t,e&&(o=Te(e.signature,t,r)),!ke(e)){i.next=7;break}return i.delegateYield(Pe(e,o),"t0",4);case 4:n=i.t0,i.next=22;break;case 7:if(!e||!0!==e._jsonata_function){i.next=14;break}if(!we(n=e.implementation.apply(r,o))){i.next=12;break}return i.delegateYield(n,"t1",11);case 11:n=i.t1;case 12:i.next=22;break;case 14:if("function"!=typeof e){i.next=21;break}if(!we(n=e.apply(r,o))){i.next=19;break}return i.delegateYield(n,"t2",18);case 18:n=i.t2;case 19:i.next=22;break;case 21:throw{code:"T1006",stack:(new Error).stack};case 22:return i.abrupt("return",n);case 23:case"end":return i.stop()}},E,this)}function Ee(e,t,r){var n={_jsonata_lambda:!0,input:t,environment:r,arguments:e.arguments,signature:e.signature,body:e.body};return!0===e.thunk&&(n.thunk=!0),n}function Ae(e,t,r){var n,o,i,a,s;return f.default.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:o=[],i=0;case 2:if(!(i<e.arguments.length)){u.next=15;break}if("operator"!==(a=e.arguments[i]).type||"?"!==a.value){u.next=8;break}o.push(a),u.next=12;break;case 8:return u.t0=o,u.delegateYield(J(a,t,r),"t1",10);case 10:u.t2=u.t1,u.t0.push.call(u.t0,u.t2);case 12:i++,u.next=2;break;case 15:return u.delegateYield(J(e.procedure,t,r),"t3",16);case 16:if(void 0!==(s=u.t3)||"path"!==e.procedure.type||!r.lookup(e.procedure.steps[0].value)){u.next=19;break}throw{code:"T1007",stack:(new Error).stack,position:e.position,token:e.procedure.steps[0].value};case 19:if(!ke(s)){u.next=23;break}n=De(s,o),u.next=32;break;case 23:if(!s||!0!==s._jsonata_function){u.next=27;break}n=Me(s.implementation,o),u.next=32;break;case 27:if("function"!=typeof s){u.next=31;break}n=Me(s,o),u.next=32;break;case 31:throw{code:"T1008",stack:(new Error).stack,position:e.position,token:"path"===e.procedure.type?e.procedure.steps[0].value:e.procedure.value};case 32:return u.abrupt("return",n);case 33:case"end":return u.stop()}},A,this)}function Te(e,t,r){return void 0===e?t:e.validate(t,r)}function Pe(e,t){var r,n;return f.default.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(n=Ke(e.environment),e.arguments.forEach(function(e,r){n.bind(e.value,t[r])}),"function"!=typeof e.body){o.next=7;break}return o.delegateYield(Ye(e.body,n),"t0",4);case 4:r=o.t0,o.next=9;break;case 7:return o.delegateYield(J(e.body,e.input,n),"t1",8);case 8:r=o.t1;case 9:return o.abrupt("return",r);case 10:case"end":return o.stop()}},T,this)}function De(e,t){var r=Ke(e.environment),n=[];return e.arguments.forEach(function(e,o){var i=t[o];i&&"operator"===i.type&&"?"===i.value?n.push(e):r.bind(e.value,i)}),{_jsonata_lambda:!0,input:e.input,environment:r,arguments:n,body:e.body}}function Me(e,t){var r=Le(e),n="function("+(r=r.map(function(e){return"$"+e.trim()})).join(", ")+"){ _ }",o=G(n);return o.body=e,De(o,t)}function Ye(e,t){var r,n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(r=Le(e),n=r.map(function(e){return t.lookup(e.trim())}),!we(o=e.apply(null,n))){i.next=6;break}return i.delegateYield(o,"t0",5);case 5:o=i.t0;case 6:return i.abrupt("return",o);case 7:case"end":return i.stop()}},P,this)}function Le(e){var t=e.toString();return/\(([^)]*)\)/.exec(t)[1].split(",")}function Ne(e,t){var r={_jsonata_function:!0,implementation:e};return void 0!==t&&(r.signature=C(t)),r}function Fe(e){if(void 0!==e){var t;if("string"==typeof e)t=e;else if(xe(e))t="";else{if("number"==typeof e&&!isFinite(e))throw{code:"D3001",value:e,stack:(new Error).stack};t=(0,a.default)(e,function(e,t){return void 0!==t&&null!==t&&t.toPrecision&&z(t)?Number(t.toPrecision(13)):t&&xe(t)?"":t})}return t}}function Ie(e,t,r){if(void 0!==e){var n=(0,i.default)(e);if(void 0!==r){var o=t>=0?t+r:n.length-t+r;return n.slice(t,o).join("")}return n.slice(t).join("")}}function Re(e){if(void 0!==e)return(0,i.default)(e).length}function Ce(e,t,r,n){var o,i,a,s,u,c,l;return f.default.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(void 0!==e){f.next=2;break}return f.abrupt("return",void 0);case 2:if(""!==t){f.next=4;break}throw{code:"D3010",stack:(new Error).stack,value:t,index:2};case 4:if(!(n<0)){f.next=6;break}throw{code:"D3011",stack:(new Error).stack,value:n,index:4};case 6:if(o="string"==typeof r?function(e){for(var t="",n=0,o=r.indexOf("$",n);-1!==o&&n<r.length;){t+=r.substring(n,o),n=o+1;var i=r.charAt(n);if("$"===i)t+="$",n++;else if("0"===i)t+=e.match,n++;else{var a;if(a=0===e.groups.length?1:Math.floor(Math.log(e.groups.length)*Math.LOG10E)+1,o=parseInt(r.substring(n,n+a),10),a>1&&o>e.groups.length&&(o=parseInt(r.substring(n,n+a-1),10)),isNaN(o))t+="$";else{if(e.groups.length>0){var s=e.groups[o-1];void 0!==s&&(t+=s)}n+=o.toString().length}}o=r.indexOf("$",n)}return t+=r.substring(n)}:r,i="",a=0,!(void 0===n||n>0)){f.next=39;break}if(s=0,"string"!=typeof t){f.next=17;break}for(u=e.indexOf(t,a);-1!==u&&(void 0===n||s<n);)i+=e.substring(a,u),i+=r,a=u+t.length,s++,u=e.indexOf(t,a);i+=e.substring(a),f.next=37;break;case 17:if(void 0===(c=t(e))){f.next=36;break}case 19:if(void 0===c||!(void 0===n||s<n)){f.next=33;break}return i+=e.substring(a,c.start),f.delegateYield(Se(o,[c],null),"t0",22);case 22:if("string"!=typeof(l=f.t0)){f.next=27;break}i+=l,f.next=28;break;case 27:throw{code:"D3012",stack:(new Error).stack,value:l};case 28:a=c.start+c.match.length,s++,c=c.next(),f.next=19;break;case 33:i+=e.substring(a),f.next=37;break;case 36:i=e;case 37:f.next=40;break;case 39:i=e;case 40:return f.abrupt("return",i);case 41:case"end":return f.stop()}},D,this)}function Ge(e,t){var r;if(void 0!==e){if(t){var n=e.toString().split("e");e=+(n[0]+"e"+(n[1]?+n[1]+t:t))}var i=(r=Math.round(e))-e;return.5===Math.abs(i)&&1===Math.abs(r%2)&&(r-=1),t&&(r=+((n=r.toString().split("e"))[0]+"e"+(n[1]?+n[1]-t:-t))),(0,o.default)(r,-0)&&(r=0),r}}function $e(e){if(void 0!==e){var t=!1;if(Array.isArray(e)){if(1===e.length)t=$e(e[0]);else if(e.length>1){t=e.filter(function(e){return $e(e)}).length>0}}else"string"==typeof e?e.length>0&&(t=!0):z(e)?0!==e&&(t=!0):null!==e&&"object"===(void 0===e?"undefined":h(e))?(0,c.default)(e).length>0&&(ke(e)||e._jsonata_function||(t=!0)):"boolean"==typeof e&&!0===e&&(t=!0);return t}}function ze(e,t){var r,n,o,i,a;return f.default.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(void 0!==e){s.next=2;break}return s.abrupt("return",void 0);case 2:r=B(),n=0;case 4:if(!(n<e.length)){s.next=15;break}return o=[e[n]],(i="function"==typeof t?t.length:!0===t._jsonata_function?t.implementation.length:t.arguments.length)>=2&&o.push(n),i>=3&&o.push(e),s.delegateYield(Se(t,o,null),"t0",10);case 10:void 0!==(a=s.t0)&&r.push(a);case 12:n++,s.next=4;break;case 15:return s.abrupt("return",r);case 16:case"end":return s.stop()}},M,this)}function qe(e,t){var r,n,o,i;return f.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0!==e){a.next=2;break}return a.abrupt("return",void 0);case 2:for(r=B(),n=function(e,r,n){for(var o=Se(t,[e,r,n],null),i=o.next();!i.done;)i=o.next(i.value);return i.value},o=0;o<e.length;o++)i=e[o],$e(n(i,o,e))&&r.push(i);return a.abrupt("return",r);case 6:case"end":return a.stop()}},Y,this)}function Ue(e,t,r){var n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(void 0!==e){i.next=2;break}return i.abrupt("return",void 0);case 2:if(2===t.length||!0===t._jsonata_function&&2===t.implementation.length||2===t.arguments.length){i.next=4;break}throw{stack:(new Error).stack,code:"D3050",index:1};case 4:void 0===r&&e.length>0?(n=e[0],o=1):(n=r,o=0);case 5:if(!(o<e.length)){i.next=11;break}return i.delegateYield(Se(t,[n,e[o]],null),"t0",7);case 7:n=i.t0,o++,i.next=5;break;case 11:return i.abrupt("return",n);case 12:case"end":return i.stop()}},L,this)}function Je(e,t){return void 0===e?t:void 0===t?e:(Array.isArray(e)||(e=B(e)),Array.isArray(t)||(t=[t]),e.concat(t))}function Be(e,t){var r,n,o;return f.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:r=B(),i.t0=f.default.keys(e);case 2:if((i.t1=i.t0()).done){i.next=11;break}return n=i.t1.value,o=[e[n],n],i.t2=r,i.delegateYield(Se(t,o,null),"t3",7);case 7:i.t4=i.t3,i.t2.push.call(i.t2,i.t4),i.next=2;break;case 11:return i.abrupt("return",r);case 12:case"end":return i.stop()}},N,this)}function We(e,t){if(void 0!==e){if(e.length<=1)return e;var r;if(void 0===t){if(!U(e)&&!q(e))throw{stack:(new Error).stack,code:"D3070",index:1};r=function(e,t){return e>t}}else r="function"==typeof t?t:function(e,r){for(var n=Se(t,[e,r],null),o=n.next();!o.done;)o=n.next(o.value);return o.value};return function e(t){if(t.length<=1)return t;var n,o=Math.floor(t.length/2),i=t.slice(0,o),a=t.slice(o);return i=e(i),a=e(a),function e(t,n,o){0===n.length?Array.prototype.push.apply(t,o):0===o.length?Array.prototype.push.apply(t,n):r(n[0],o[0])?(t.push(o[0]),e(t,n,o.slice(1))):(t.push(n[0]),e(t,n.slice(1),o))}(n=[],i,a),n}(e)}}var Ve=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ke(e){var t={};return{bind:function(e,r){t[e]=r},lookup:function(r){var n;return t.hasOwnProperty(r)?n=t[r]:e&&(n=e.lookup(r)),n}}}$.bind("sum",Ne(function(e){if(void 0!==e){var t=0;return e.forEach(function(e){t+=e}),t}},"<a<n>:n>")),$.bind("count",Ne(function(e){return void 0===e?0:e.length},"<a:n>")),$.bind("max",Ne(function(e){if(void 0!==e&&0!==e.length)return Math.max.apply(Math,e)},"<a<n>:n>")),$.bind("min",Ne(function(e){if(void 0!==e&&0!==e.length)return Math.min.apply(Math,e)},"<a<n>:n>")),$.bind("average",Ne(function(e){if(void 0!==e&&0!==e.length){var t=0;return e.forEach(function(e){t+=e}),t/e.length}},"<a<n>:n>")),$.bind("string",Ne(Fe,"<x-:s>")),$.bind("substring",Ne(Ie,"<s-nn?:s>")),$.bind("substringBefore",Ne(function(e,t){if(void 0!==e){var r=e.indexOf(t);return r>-1?e.substr(0,r):e}},"<s-s:s>")),$.bind("substringAfter",Ne(function(e,t){if(void 0!==e){var r=e.indexOf(t);return r>-1?e.substr(r+t.length):e}},"<s-s:s>")),$.bind("lowercase",Ne(function(e){if(void 0!==e)return e.toLowerCase()},"<s-:s>")),$.bind("uppercase",Ne(function(e){if(void 0!==e)return e.toUpperCase()},"<s-:s>")),$.bind("length",Ne(Re,"<s-:n>")),$.bind("trim",Ne(function(e){if(void 0!==e){var t=e.replace(/[ \t\n\r]+/gm," ");return" "===t.charAt(0)&&(t=t.substring(1))," "===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t}},"<s-:s>")),$.bind("pad",Ne(function(e,t,r){if(void 0!==e){var n;void 0!==r&&0!==r.length||(r=" ");var o=Math.abs(t)-Re(e);if(o>0){var i=new Array(o+1).join(r);r.length>1&&(i=Ie(i,0,o)),n=t>0?e+i:i+e}else n=e;return n}},"<s-ns?:s>")),$.bind("match",Ne(function(e,t,r){if(void 0!==e){if(r<0)throw{stack:(new Error).stack,value:r,code:"D3040",index:3};var n=B();if(void 0===r||r>0){var o=0,i=t(e);if(void 0!==i)for(;void 0!==i&&(void 0===r||o<r);)n.push({match:i.match,index:i.start,groups:i.groups}),i=i.next(),o++}return n}},"<s-f<s:o>n?:a<o>>")),$.bind("contains",Ne(function(e,t){if(void 0!==e){return"string"==typeof t?-1!==e.indexOf(t):void 0!==t(e)}},"<s-(sf):b>")),$.bind("replace",Ne(Ce,"<s-(sf)(sf)n?:s>")),$.bind("split",Ne(function(e,t,r){if(void 0!==e){if(r<0)throw{code:"D3020",stack:(new Error).stack,value:r,index:3};var n=[];if(void 0===r||r>0)if("string"==typeof t)n=e.split(t,r);else{var o=0,i=t(e);if(void 0!==i){for(var a=0;void 0!==i&&(void 0===r||o<r);)n.push(e.substring(a,i.start)),a=i.end,i=i.next(),o++;(void 0===r||o<r)&&n.push(e.substring(a))}else n.push(e)}return n}},"<s-(sf)n?:a<s>>")),$.bind("join",Ne(function(e,t){if(void 0!==e)return void 0===t&&(t=""),e.join(t)},"<a<s>s?:s>")),$.bind("formatNumber",Ne(function(e,t,r){if(void 0!==e){var n={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"};void 0!==r&&(0,c.default)(r).forEach(function(e){n[e]=r[e]});for(var o=[],i=n["zero-digit"].charCodeAt(0),s=i;s<i+10;s++)o.push(String.fromCharCode(s));var u=o.concat([n["decimal-separator"],n["exponent-separator"],n["grouping-separator"],n.digit,n["pattern-separator"]]),f=t.split(n["pattern-separator"]);if(f.length>2)throw{code:"D3080",stack:(new Error).stack};var l=f.map(function(e){var t,r,o,i,a=function(){for(var t,r=0;r<e.length;r++)if(t=e.charAt(r),-1!==u.indexOf(t)&&t!==n["exponent-separator"])return e.substring(0,r)}(),s=function(){for(var t,r=e.length-1;r>=0;r--)if(t=e.charAt(r),-1!==u.indexOf(t)&&t!==n["exponent-separator"])return e.substring(r+1)}(),c=e.substring(a.length,e.length-s.length),f=e.indexOf(n["exponent-separator"],a.length);-1===f||f>e.length-s.length?(t=c,r=void 0):(t=c.substring(0,f),r=c.substring(f+1));var l=t.indexOf(n["decimal-separator"]);return-1===l?(o=t,i=s):(o=t.substring(0,l),i=t.substring(l+1)),{prefix:a,suffix:s,activePart:c,mantissaPart:t,exponentPart:r,integerPart:o,fractionalPart:i,subpicture:e}});l.forEach(function(e){var t,r,i=e.subpicture,a=i.indexOf(n["decimal-separator"]);a!==i.lastIndexOf(n["decimal-separator"])&&(t="D3081"),i.indexOf(n.percent)!==i.lastIndexOf(n.percent)&&(t="D3082"),i.indexOf(n["per-mille"])!==i.lastIndexOf(n["per-mille"])&&(t="D3083"),-1!==i.indexOf(n.percent)&&-1!==i.indexOf(n["per-mille"])&&(t="D3084");var s=!1;for(r=0;r<e.mantissaPart.length;r++){var c=e.mantissaPart.charAt(r);if(-1!==o.indexOf(c)||c===n.digit){s=!0;break}}s||(t="D3085"),-1!==e.activePart.split("").map(function(e){return-1===u.indexOf(e)?"p":"a"}).join("").indexOf("p")&&(t="D3086"),-1!==a?i.charAt(a-1)!==n["grouping-separator"]&&i.charAt(a+1)!==n["grouping-separator"]||(t="D3087"):e.integerPart.charAt(e.integerPart.length-1)===n["grouping-separator"]&&(t="D3088"),-1!==i.indexOf(n["grouping-separator"]+n["grouping-separator"])&&(t="D3089");var f=e.integerPart.indexOf(n.digit);-1!==f&&e.integerPart.substring(0,f).split("").filter(function(e){return o.indexOf(e)>-1}).length>0&&(t="D3090"),-1!==(f=e.fractionalPart.lastIndexOf(n.digit))&&e.fractionalPart.substring(f).split("").filter(function(e){return o.indexOf(e)>-1}).length>0&&(t="D3091");var l="string"==typeof e.exponentPart;if(l&&e.exponentPart.length>0&&(-1!==i.indexOf(n.percent)||-1!==i.indexOf(n["per-mille"]))&&(t="D3092"),l&&(0===e.exponentPart.length||e.exponentPart.split("").filter(function(e){return-1===o.indexOf(e)}).length>0)&&(t="D3093"),t)throw{code:t,stack:(new Error).stack}});var p,d,h,b,v=l.map(function(e){var t=function(t,r){for(var i=[],a=t.indexOf(n["grouping-separator"]);-1!==a;){var s=(r?t.substring(0,a):t.substring(a)).split("").filter(function(e){return-1!==o.indexOf(e)||e===n.digit}).length;i.push(s),a=e.integerPart.indexOf(n["grouping-separator"],a+1)}return i},r=t(e.integerPart),i=function(e){if(0===e.length)return 0;for(var t=e.reduce(function e(t,r){return 0===r?t:e(r,t%r)}),r=1;r<=e.length;r++)if(-1===e.indexOf(r*t))return 0;return t}(r),a=t(e.fractionalPart,!0),s=e.integerPart.split("").filter(function(e){return-1!==o.indexOf(e)}).length,u=s,c=e.fractionalPart.split(""),f=c.filter(function(e){return-1!==o.indexOf(e)}).length,l=c.filter(function(e){return-1!==o.indexOf(e)||e===n.digit}).length,p="string"==typeof e.exponentPart;0===s&&0===l&&(p?(f=1,l=1):s=1),p&&0===s&&-1!==e.integerPart.indexOf(n.digit)&&(s=1),0===s&&0===f&&(f=1);var d=0;return p&&(d=e.exponentPart.split("").filter(function(e){return-1!==o.indexOf(e)}).length),{integerPartGroupingPositions:r,regularGrouping:i,minimumIntegerPartSize:s,scalingFactor:u,prefix:e.prefix,fractionalPartGroupingPositions:a,minimumFactionalPartSize:f,maximumFactionalPartSize:l,minimumExponentSize:d,suffix:e.suffix,picture:e.subpicture}}),g=n["minus-sign"],m=n["zero-digit"],y=n["decimal-separator"],_=n["grouping-separator"];if(1===v.length&&(v.push(JSON.parse((0,a.default)(v[0]))),v[1].prefix=g+v[1].prefix),d=-1!==(p=e>=0?v[0]:v[1]).picture.indexOf(n.percent)?100*e:-1!==p.picture.indexOf(n["per-mille"])?1e3*e:e,0===p.minimumExponentSize)h=d;else{var x=Math.pow(10,p.scalingFactor),k=Math.pow(10,p.scalingFactor-1);for(h=d,b=0;h<k;)h*=10,b-=1;for(;h>x;)h/=10,b+=1}var w=function(e,t){var r=Math.abs(e).toFixed(t);return"0"!==m&&(r=r.split("").map(function(e){return e>="0"&&e<="9"?o[e.charCodeAt(0)-48]:e}).join("")),r},j=w(Ge(h,p.maximumFactionalPartSize),p.maximumFactionalPartSize),S=j.indexOf(".");for(-1===S?j+=y:j=j.replace(".",y);j.charAt(0)===m;)j=j.substring(1);for(;j.charAt(j.length-1)===m;)j=j.substring(0,j.length-1);S=j.indexOf(y);var O=p.minimumIntegerPartSize-S,E=p.minimumFactionalPartSize-(j.length-S-1);if(j=(O>0?new Array(O+1).join(m):"")+j,j+=E>0?new Array(E+1).join(m):"",S=j.indexOf(y),p.regularGrouping>0)for(var A=Math.floor((S-1)/p.regularGrouping),T=1;T<=A;T++)j=[j.slice(0,S-T*p.regularGrouping),_,j.slice(S-T*p.regularGrouping)].join("");else p.integerPartGroupingPositions.forEach(function(e){j=[j.slice(0,S-e),_,j.slice(S-e)].join(""),S++});if(S=j.indexOf(y),p.fractionalPartGroupingPositions.forEach(function(e){j=[j.slice(0,e+S+1),_,j.slice(e+S+1)].join("")}),S=j.indexOf(y),-1!==p.picture.indexOf(y)&&S!==j.length-1||(j=j.substring(0,j.length-1)),void 0!==b){var P=w(b,0);(O=p.minimumExponentSize-P.length)>0&&(P=new Array(O+1).join(m)+P),j=j+n["exponent-separator"]+(b<0?g:"")+P}return j=p.prefix+j+p.suffix}},"<n-so?:s>")),$.bind("formatBase",Ne(function(e,t){if(void 0!==e){if(e=Ge(e),(t=void 0===t?10:Ge(t))<2||t>36)throw{code:"D3100",stack:(new Error).stack,value:t};return e.toString(t)}},"<n-n?:s>")),$.bind("number",Ne(function(e){var t;if(void 0!==e){if("number"==typeof e)t=e;else{if("string"!=typeof e||!/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(e)||isNaN(parseFloat(e))||!isFinite(e))throw{code:"D3030",value:e,stack:(new Error).stack,index:1};t=parseFloat(e)}return t}},"<(ns)-:n>")),$.bind("floor",Ne(function(e){if(void 0!==e)return Math.floor(e)},"<n-:n>")),$.bind("ceil",Ne(function(e){if(void 0!==e)return Math.ceil(e)},"<n-:n>")),$.bind("round",Ne(Ge,"<n-n?:n>")),$.bind("abs",Ne(function(e){if(void 0!==e)return Math.abs(e)},"<n-:n>")),$.bind("sqrt",Ne(function(e){if(void 0!==e){if(e<0)throw{stack:(new Error).stack,code:"D3060",index:1,value:e};return Math.sqrt(e)}},"<n-:n>")),$.bind("power",Ne(function(e,t){var r;if(void 0!==e){if(r=Math.pow(e,t),!isFinite(r))throw{stack:(new Error).stack,code:"D3061",index:1,value:e,exp:t};return r}},"<n-n:n>")),$.bind("random",Ne(function(){return Math.random()},"<:n>")),$.bind("boolean",Ne($e,"<x-:b>")),$.bind("not",Ne(function(e){return!$e(e)},"<x-:b>")),$.bind("map",Ne(ze,"<af>")),$.bind("zip",Ne(function(){for(var e=[],t=Array.prototype.slice.call(arguments),r=Math.min.apply(Math,t.map(function(e){return Array.isArray(e)?e.length:0})),n=0;n<r;n++){var o=t.map(function(e){return e[n]});e.push(o)}return e},"<a+>")),$.bind("filter",Ne(qe,"<af>")),$.bind("reduce",Ne(Ue,"<afj?:j>")),$.bind("sift",Ne(function(e,t){var r={},n=function(e,r,n){for(var o=Se(t,[e,r,n],null),i=o.next();!i.done;)i=o.next(i.value);return i.value};for(var o in e){var i=e[o];$e(n(i,o,e))&&(r[o]=i)}return 0===(0,c.default)(r).length&&(r=void 0),r},"<o-f?:o>")),$.bind("keys",Ne(function e(t){var r=B();if(Array.isArray(t)){var n={};t.forEach(function(t){var r=e(t);Array.isArray(r)&&r.forEach(function(e){n[e]=!0})}),r=e(n)}else null===t||"object"!==(void 0===t?"undefined":h(t))||ke(t)?r=void 0:0===(r=(0,c.default)(t)).length&&(r=void 0);return r},"<x-:a<s>>")),$.bind("lookup",Ne(function(e,t){return ee({value:t},e)},"<x-s:x>")),$.bind("append",Ne(Je,"<xx:a>")),$.bind("exists",Ne(function(e){return void 0!==e},"<x:b>")),$.bind("spread",Ne(function e(t){var r=B();if(Array.isArray(t))t.forEach(function(t){r=Je(r,e(t))});else if(null===t||"object"!==(void 0===t?"undefined":h(t))||ke(t))r=t;else for(var n in t){var o={};o[n]=t[n],r.push(o)}return r},"<x-:a<o>>")),$.bind("merge",Ne(function(e){if(void 0!==e){var t={};return e.forEach(function(e){for(var r in e)t[r]=e[r]}),t}},"<a<o>:o>")),$.bind("reverse",Ne(function(e){if(void 0!==e){if(e.length<=1)return e;for(var t=e.length,r=new Array(t),n=0;n<t;n++)r[t-n-1]=e[n];return r}},"<a:a>")),$.bind("each",Ne(Be,"<o-f:a>")),$.bind("sort",Ne(We,"<af?:a>")),$.bind("shuffle",Ne(function(e){if(void 0!==e){if(e.length<=1)return e;for(var t=new Array(e.length),r=0;r<e.length;r++){var n=Math.floor(Math.random()*(r+1));r!==n&&(t[r]=t[n]),t[n]=e[r]}return t}},"<a:a>")),$.bind("base64encode",Ne(function(e){if(void 0!==e)return("undefined"!=typeof window?window.btoa:function(e){return new r.Buffer(e,"binary").toString("base64")})(e)},"<s-:s>")),$.bind("base64decode",Ne(function(e){if(void 0!==e)return("undefined"!=typeof window?window.atob:function(e){return new r.Buffer(e,"base64").toString("binary")})(e)},"<s-:s>")),$.bind("toMillis",Ne(function(e){if(void 0!==e){if(!Ve.test(e))throw{stack:(new Error).stack,code:"D3110",value:e};return Date.parse(e)}},"<s-:n>")),$.bind("fromMillis",Ne(function(e){if(void 0!==e)return new Date(e).toISOString()},"<n-:s>")),$.bind("clone",Ne(function(e){if(void 0!==e)return JSON.parse(Fe(e))},"<(oa)-:o>"));var He={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"First argument of reduce function must be a function with two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}"};function Qe(e){var t="Unknown error";void 0!==e.message&&(t=e.message);var r=He[e.code];return void 0!==r&&(t=(t=r.replace(/\{\{\{([^}]+)}}}/g,function(){return e[arguments[1]]})).replace(/\{\{([^}]+)}}/g,function(){return(0,a.default)(e[arguments[1]])})),t}function Ze(e,t){var r,n;try{r=G(e,t&&t.recover),n=r.errors,delete r.errors}catch(e){throw e.message=Qe(e),e}var o=Ke($),i=new Date;return o.bind("now",Ne(function(){return i.toJSON()},"<:s>")),o.bind("millis",Ne(function(){return i.getTime()},"<:n>")),{evaluate:function(e,t,a){if(void 0!==n){var s={code:"S0500",position:0};throw s.message=Qe(s),s}var u,c,f;if(void 0!==t)for(var l in u=Ke(o),t)u.bind(l,t[l]);else u=o;if(u.bind("$",e),i=new Date,"function"==typeof a){u.bind("__jsonata_async",!0);f=J(r,e,u),(c=f.next()).value.then(function e(t){(c=f.next(t)).done?a(null,c.value):c.value.then(e).catch(function(e){e.message=Qe(e),a(e,null)})})}else try{for(f=J(r,e,u),c=f.next();!c.done;)c=f.next(c.value);return c.value}catch(s){throw s.message=Qe(s),s}},assign:function(e,t){o.bind(e,t)},registerFunction:function(e,t,r){var n=Ne(t,r);o.bind(e,n)},ast:function(){return r},errors:function(){return n}}}return Ze.parser=G,Ze}();void 0!==t&&(t.exports=v)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"babel-runtime/core-js/array/from":2,"babel-runtime/core-js/is-iterable":3,"babel-runtime/core-js/json/stringify":4,"babel-runtime/core-js/number/is-integer":5,"babel-runtime/core-js/object/create":6,"babel-runtime/core-js/object/is":7,"babel-runtime/core-js/object/keys":8,"babel-runtime/core-js/promise":9,"babel-runtime/core-js/symbol":10,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/regenerator":12}],2:[function(e,t,r){t.exports={default:e("core-js/library/fn/array/from"),__esModule:!0}},{"core-js/library/fn/array/from":13}],3:[function(e,t,r){t.exports={default:e("core-js/library/fn/is-iterable"),__esModule:!0}},{"core-js/library/fn/is-iterable":14}],4:[function(e,t,r){t.exports={default:e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":15}],5:[function(e,t,r){t.exports={default:e("core-js/library/fn/number/is-integer"),__esModule:!0}},{"core-js/library/fn/number/is-integer":16}],6:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":17}],7:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/is"),__esModule:!0}},{"core-js/library/fn/object/is":18}],8:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":19}],9:[function(e,t,r){t.exports={default:e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":20}],10:[function(e,t,r){t.exports={default:e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":21}],11:[function(e,t,r){t.exports={default:e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":22}],12:[function(e,t,r){t.exports=e("regenerator-runtime")},{"regenerator-runtime":114}],13:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/es6.array.from"),t.exports=e("../../modules/_core").Array.from},{"../../modules/_core":30,"../../modules/es6.array.from":99,"../../modules/es6.string.iterator":107}],14:[function(e,t,r){e("../modules/web.dom.iterable"),e("../modules/es6.string.iterator"),t.exports=e("../modules/core.is-iterable")},{"../modules/core.is-iterable":98,"../modules/es6.string.iterator":107,"../modules/web.dom.iterable":113}],15:[function(e,t,r){var n=e("../../modules/_core"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(e){return o.stringify.apply(o,arguments)}},{"../../modules/_core":30}],16:[function(e,t,r){e("../../modules/es6.number.is-integer"),t.exports=e("../../modules/_core").Number.isInteger},{"../../modules/_core":30,"../../modules/es6.number.is-integer":101}],17:[function(e,t,r){e("../../modules/es6.object.create");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.create(e,t)}},{"../../modules/_core":30,"../../modules/es6.object.create":102}],18:[function(e,t,r){e("../../modules/es6.object.is"),t.exports=e("../../modules/_core").Object.is},{"../../modules/_core":30,"../../modules/es6.object.is":103}],19:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":30,"../../modules/es6.object.keys":104}],20:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),e("../modules/es7.promise.finally"),e("../modules/es7.promise.try"),t.exports=e("../modules/_core").Promise},{"../modules/_core":30,"../modules/es6.object.to-string":105,"../modules/es6.promise":106,"../modules/es6.string.iterator":107,"../modules/es7.promise.finally":109,"../modules/es7.promise.try":110,"../modules/web.dom.iterable":113}],21:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":30,"../../modules/es6.object.to-string":105,"../../modules/es6.symbol":108,"../../modules/es7.symbol.async-iterator":111,"../../modules/es7.symbol.observable":112}],22:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":95,"../../modules/es6.string.iterator":107,"../../modules/web.dom.iterable":113}],23:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],24:[function(e,t,r){t.exports=function(){}},{}],25:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],26:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":51}],27:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-absolute-index");t.exports=function(e){return function(t,r,a){var s,u=n(t),c=o(u.length),f=i(a,c);if(e&&r!=r){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},{"./_to-absolute-index":87,"./_to-iobject":89,"./_to-length":90}],28:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?r:i?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},{"./_cof":29,"./_wks":96}],29:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],30:[function(e,t,r){var n=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=n)},{}],31:[function(e,t,r){"use strict";var n=e("./_object-dp"),o=e("./_property-desc");t.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},{"./_object-dp":63,"./_property-desc":76}],32:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":23}],33:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],34:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":39}],35:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":41,"./_is-object":51}],36:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],37:[function(e,t,r){var n=e("./_object-keys"),o=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=n(e),r=o.f;if(r)for(var a,s=r(e),u=i.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},{"./_object-gops":68,"./_object-keys":71,"./_object-pie":72}],38:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),a=e("./_hide"),s=e("./_has"),u=function(e,t,r){var c,f,l,p=e&u.F,d=e&u.G,h=e&u.S,b=e&u.P,v=e&u.B,g=e&u.W,m=d?o:o[t]||(o[t]={}),y=m.prototype,_=d?n:h?n[t]:(n[t]||{}).prototype;for(c in d&&(r=t),r)(f=!p&&_&&void 0!==_[c])&&s(m,c)||(l=f?_[c]:r[c],m[c]=d&&"function"!=typeof _[c]?r[c]:v&&f?i(l,n):g&&_[c]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):b&&"function"==typeof l?i(Function.call,l):l,b&&((m.virtual||(m.virtual={}))[c]=l,e&u.R&&y&&!y[c]&&a(y,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},{"./_core":30,"./_ctx":32,"./_global":41,"./_has":42,"./_hide":43}],39:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],40:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),a=e("./_an-object"),s=e("./_to-length"),u=e("./core.get-iterator-method"),c={},f={};(r=t.exports=function(e,t,r,l,p){var d,h,b,v,g=p?function(){return e}:u(e),m=n(r,l,t?2:1),y=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(i(g)){for(d=s(e.length);d>y;y++)if((v=t?m(a(h=e[y])[0],h[1]):m(e[y]))===c||v===f)return v}else for(b=g.call(e);!(h=b.next()).done;)if((v=o(b,m,h.value,t))===c||v===f)return v}).BREAK=c,r.RETURN=f},{"./_an-object":26,"./_ctx":32,"./_is-array-iter":48,"./_iter-call":52,"./_to-length":90,"./core.get-iterator-method":97}],41:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],42:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],43:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":34,"./_object-dp":63,"./_property-desc":76}],44:[function(e,t,r){var n=e("./_global").document;t.exports=n&&n.documentElement},{"./_global":41}],45:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":34,"./_dom-create":35,"./_fails":39}],46:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],47:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":29}],48:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":57,"./_wks":96}],49:[function(e,t,r){var n=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./_cof":29}],50:[function(e,t,r){var n=e("./_is-object"),o=Math.floor;t.exports=function(e){return!n(e)&&isFinite(e)&&o(e)===e}},{"./_is-object":51}],51:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],52:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(t){var i=e.return;throw void 0!==i&&n(i.call(e)),t}}},{"./_an-object":26}],53:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),a={};e("./_hide")(a,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(a,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":43,"./_object-create":62,"./_property-desc":76,"./_set-to-string-tag":81,"./_wks":96}],54:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),a=e("./_hide"),s=e("./_iterators"),u=e("./_iter-create"),c=e("./_set-to-string-tag"),f=e("./_object-gpo"),l=e("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(e,t,r,h,b,v,g){u(r,t,h);var m,y,_,x=function(e){if(!p&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",w="values"==b,j=!1,S=e.prototype,O=S[l]||S["@@iterator"]||b&&S[b],E=O||x(b),A=b?w?x("entries"):E:void 0,T="Array"==t&&S.entries||O;if(T&&(_=f(T.call(new e)))!==Object.prototype&&_.next&&(c(_,k,!0),n||"function"==typeof _[l]||a(_,l,d)),w&&O&&"values"!==O.name&&(j=!0,E=function(){return O.call(this)}),n&&!g||!p&&!j&&S[l]||a(S,l,E),s[t]=E,s[k]=d,b)if(m={values:w?E:x("values"),keys:v?E:x("keys"),entries:A},g)for(y in m)y in S||i(S,y,m[y]);else o(o.P+o.F*(p||j),t,m);return m}},{"./_export":38,"./_hide":43,"./_iter-create":53,"./_iterators":57,"./_library":58,"./_object-gpo":69,"./_redefine":78,"./_set-to-string-tag":81,"./_wks":96}],55:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(e){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],a=i[n]();a.next=function(){return{done:r=!0}},i[n]=function(){return a},e(i)}catch(e){}return r}},{"./_wks":96}],56:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],57:[function(e,t,r){t.exports={}},{}],58:[function(e,t,r){t.exports=!0},{}],59:[function(e,t,r){var n=e("./_uid")("meta"),o=e("./_is-object"),i=e("./_has"),a=e("./_object-dp").f,s=0,u=Object.isExtensible||function(){return!0},c=!e("./_fails")(function(){return u(Object.preventExtensions({}))}),f=function(e){a(e,n,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";f(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;f(e)}return e[n].w},onFreeze:function(e){return c&&l.NEED&&u(e)&&!i(e,n)&&f(e),e}}},{"./_fails":39,"./_has":42,"./_is-object":51,"./_object-dp":63,"./_uid":93}],60:[function(e,t,r){var n=e("./_global"),o=e("./_task").set,i=n.MutationObserver||n.WebKitMutationObserver,a=n.process,s=n.Promise,u="process"==e("./_cof")(a);t.exports=function(){var e,t,r,c=function(){var n,o;for(u&&(n=a.domain)&&n.exit();e;){o=e.fn,e=e.next;try{o()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};if(u)r=function(){a.nextTick(c)};else if(!i||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var f=s.resolve();r=function(){f.then(c)}}else r=function(){o.call(n,c)};else{var l=!0,p=document.createTextNode("");new i(c).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(n){var o={fn:n,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},{"./_cof":29,"./_global":41,"./_task":86}],61:[function(e,t,r){"use strict";var n=e("./_a-function");t.exports.f=function(e){return new function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)}(e)}},{"./_a-function":23}],62:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),a=e("./_shared-key")("IE_PROTO"),s=function(){},u=function(){var t,r=e("./_dom-create")("iframe"),n=i.length;for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;n--;)delete u.prototype[i[n]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[a]=e):r=u(),void 0===t?r:o(r,t)}},{"./_an-object":26,"./_dom-create":35,"./_enum-bug-keys":36,"./_html":44,"./_object-dps":64,"./_shared-key":82}],63:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),a=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":26,"./_descriptors":34,"./_ie8-dom-define":45,"./_to-primitive":92}],64:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,a=i(t),s=a.length,u=0;s>u;)n.f(e,r=a[u++],t[r]);return e}},{"./_an-object":26,"./_descriptors":34,"./_object-dp":63,"./_object-keys":71}],65:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),a=e("./_to-primitive"),s=e("./_has"),u=e("./_ie8-dom-define"),c=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?c:function(e,t){if(e=i(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return o(!n.f.call(e,t),e[t])}},{"./_descriptors":34,"./_has":42,"./_ie8-dom-define":45,"./_object-pie":72,"./_property-desc":76,"./_to-iobject":89,"./_to-primitive":92}],66:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopn").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return a.slice()}}(e):o(n(e))}},{"./_object-gopn":67,"./_to-iobject":89}],67:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},{"./_enum-bug-keys":36,"./_object-keys-internal":70}],68:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],69:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},{"./_has":42,"./_shared-key":82,"./_to-object":91}],70:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),a=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,s=o(e),u=0,c=[];for(r in s)r!=a&&n(s,r)&&c.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(c,r)||c.push(r));return c}},{"./_array-includes":27,"./_has":42,"./_shared-key":82,"./_to-iobject":89}],71:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":36,"./_object-keys-internal":70}],72:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],73:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",a)}},{"./_core":30,"./_export":38,"./_fails":39}],74:[function(e,t,r){t.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},{}],75:[function(e,t,r){var n=e("./_an-object"),o=e("./_is-object"),i=e("./_new-promise-capability");t.exports=function(e,t){if(n(e),o(t)&&t.constructor===e)return t;var r=i.f(e);return(0,r.resolve)(t),r.promise}},{"./_an-object":26,"./_is-object":51,"./_new-promise-capability":61}],76:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],77:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":43}],78:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":43}],79:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},{}],80:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),a=e("./_descriptors"),s=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];a&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},{"./_core":30,"./_descriptors":34,"./_global":41,"./_object-dp":63,"./_wks":96}],81:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":42,"./_object-dp":63,"./_wks":96}],82:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":83,"./_uid":93}],83:[function(e,t,r){var n=e("./_global"),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(e){return o[e]||(o[e]={})}},{"./_global":41}],84:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||void 0==(r=n(a)[i])?t:o(r)}},{"./_a-function":23,"./_an-object":26,"./_wks":96}],85:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,a,s=String(o(t)),u=n(r),c=s.length;return u<0||u>=c?e?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):i:e?s.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},{"./_defined":33,"./_to-integer":88}],86:[function(e,t,r){var n,o,i,a=e("./_ctx"),s=e("./_invoke"),u=e("./_html"),c=e("./_dom-create"),f=e("./_global"),l=f.process,p=f.setImmediate,d=f.clearImmediate,h=f.MessageChannel,b=f.Dispatch,v=0,g={},m=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},y=function(e){m.call(e.data)};p&&d||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){s("function"==typeof e?e:Function(e),t)},n(v),v},d=function(e){delete g[e]},"process"==e("./_cof")(l)?n=function(e){l.nextTick(a(m,e,1))}:b&&b.now?n=function(e){b.now(a(m,e,1))}:h?(i=(o=new h).port2,o.port1.onmessage=y,n=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",y,!1)):n="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),m.call(e)}}:function(e){setTimeout(a(m,e,1),0)}),t.exports={set:p,clear:d}},{"./_cof":29,"./_ctx":32,"./_dom-create":35,"./_global":41,"./_html":44,"./_invoke":46}],87:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return(e=n(e))<0?o(e+t,0):i(e,t)}},{"./_to-integer":88}],88:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],89:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":33,"./_iobject":47}],90:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":88}],91:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":33}],92:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":51}],93:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],94:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_library"),a=e("./_wks-ext"),s=e("./_object-dp").f;t.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},{"./_core":30,"./_global":41,"./_library":58,"./_object-dp":63,"./_wks-ext":95}],95:[function(e,t,r){r.f=e("./_wks")},{"./_wks":96}],96:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,a="function"==typeof i;(t.exports=function(e){return n[e]||(n[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=n},{"./_global":41,"./_shared":83,"./_uid":93}],97:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":28,"./_core":30,"./_iterators":57,"./_wks":96}],98:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(n(t))}},{"./_classof":28,"./_core":30,"./_iterators":57,"./_wks":96}],99:[function(e,t,r){"use strict";var n=e("./_ctx"),o=e("./_export"),i=e("./_to-object"),a=e("./_iter-call"),s=e("./_is-array-iter"),u=e("./_to-length"),c=e("./_create-property"),f=e("./core.get-iterator-method");o(o.S+o.F*!e("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,l,p=i(e),d="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,v=void 0!==b,g=0,m=f(p);if(v&&(b=n(b,h>2?arguments[2]:void 0,2)),void 0==m||d==Array&&s(m))for(r=new d(t=u(p.length));t>g;g++)c(r,g,v?b(p[g],g):p[g]);else for(l=m.call(p),r=new d;!(o=l.next()).done;g++)c(r,g,v?a(l,b,[o.value,g],!0):o.value);return r.length=g,r}})},{"./_create-property":31,"./_ctx":32,"./_export":38,"./_is-array-iter":48,"./_iter-call":52,"./_iter-detect":55,"./_to-length":90,"./_to-object":91,"./core.get-iterator-method":97}],100:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),a=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":24,"./_iter-define":54,"./_iter-step":56,"./_iterators":57,"./_to-iobject":89}],101:[function(e,t,r){var n=e("./_export");n(n.S,"Number",{isInteger:e("./_is-integer")})},{"./_export":38,"./_is-integer":50}],102:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{create:e("./_object-create")})},{"./_export":38,"./_object-create":62}],103:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{is:e("./_same-value")})},{"./_export":38,"./_same-value":79}],104:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":71,"./_object-sap":73,"./_to-object":91}],105:[function(e,t,r){},{}],106:[function(e,t,r){"use strict";var n,o,i,a,s=e("./_library"),u=e("./_global"),c=e("./_ctx"),f=e("./_classof"),l=e("./_export"),p=e("./_is-object"),d=e("./_a-function"),h=e("./_an-instance"),b=e("./_for-of"),v=e("./_species-constructor"),g=e("./_task").set,m=e("./_microtask")(),y=e("./_new-promise-capability"),_=e("./_perform"),x=e("./_promise-resolve"),k=u.TypeError,w=u.process,j=u.Promise,S="process"==f(w),O=function(){},E=o=y.f,A=!!function(){try{var t=j.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(O,O)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof r}catch(e){}}(),T=function(e){var t;return!(!p(e)||"function"!=typeof(t=e.then))&&t},P=function(e,t){if(!e._n){e._n=!0;var r=e._c;m(function(){for(var n=e._v,o=1==e._s,i=0,a=function(t){var r,i,a,s=o?t.ok:t.fail,u=t.resolve,c=t.reject,f=t.domain;try{s?(o||(2==e._h&&Y(e),e._h=1),!0===s?r=n:(f&&f.enter(),r=s(n),f&&(f.exit(),a=!0)),r===t.promise?c(k("Promise-chain cycle")):(i=T(r))?i.call(r,u,c):u(r)):c(n)}catch(e){f&&!a&&f.exit(),c(e)}};r.length>i;)a(r[i++]);e._c=[],e._n=!1,t&&!e._h&&D(e)})}},D=function(e){g.call(u,function(){var t,r,n,o=e._v,i=M(e);if(i&&(t=_(function(){S?w.emit("unhandledRejection",o,e):(r=u.onunhandledrejection)?r({promise:e,reason:o}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=S||M(e)?2:1),e._a=void 0,i&&t.e)throw t.v})},M=function(e){return 1!==e._h&&0===(e._a||e._c).length},Y=function(e){g.call(u,function(){var t;S?w.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},L=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),P(t,!0))},N=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw k("Promise can't be resolved itself");(t=T(e))?m(function(){var n={_w:r,_d:!1};try{t.call(e,c(N,n,1),c(L,n,1))}catch(e){L.call(n,e)}}):(r._v=e,r._s=1,P(r,!1))}catch(e){L.call({_w:r,_d:!1},e)}}};A||(j=function(e){h(this,j,"Promise","_h"),d(e),n.call(this);try{e(c(N,this,1),c(L,this,1))}catch(e){L.call(this,e)}},(n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e("./_redefine-all")(j.prototype,{then:function(e,t){var r=E(v(this,j));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=S?w.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&P(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new n;this.promise=e,this.resolve=c(N,e,1),this.reject=c(L,e,1)},y.f=E=function(e){return e===j||e===a?new i(e):o(e)}),l(l.G+l.W+l.F*!A,{Promise:j}),e("./_set-to-string-tag")(j,"Promise"),e("./_set-species")("Promise"),a=e("./_core").Promise,l(l.S+l.F*!A,"Promise",{reject:function(e){var t=E(this);return(0,t.reject)(e),t.promise}}),l(l.S+l.F*(s||!A),"Promise",{resolve:function(e){return x(s&&this===a?j:this,e)}}),l(l.S+l.F*!(A&&e("./_iter-detect")(function(e){j.all(e).catch(O)})),"Promise",{all:function(e){var t=this,r=E(t),n=r.resolve,o=r.reject,i=_(function(){var r=[],i=0,a=1;b(e,!1,function(e){var s=i++,u=!1;r.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,r[s]=e,--a||n(r))},o)}),--a||n(r)});return i.e&&o(i.v),r.promise},race:function(e){var t=this,r=E(t),n=r.reject,o=_(function(){b(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},{"./_a-function":23,"./_an-instance":25,"./_classof":28,"./_core":30,"./_ctx":32,"./_export":38,"./_for-of":40,"./_global":41,"./_is-object":51,"./_iter-detect":55,"./_library":58,"./_microtask":60,"./_new-promise-capability":61,"./_perform":74,"./_promise-resolve":75,"./_redefine-all":77,"./_set-species":80,"./_set-to-string-tag":81,"./_species-constructor":84,"./_task":86,"./_wks":96}],107:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":54,"./_string-at":85}],108:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_has"),i=e("./_descriptors"),a=e("./_export"),s=e("./_redefine"),u=e("./_meta").KEY,c=e("./_fails"),f=e("./_shared"),l=e("./_set-to-string-tag"),p=e("./_uid"),d=e("./_wks"),h=e("./_wks-ext"),b=e("./_wks-define"),v=e("./_enum-keys"),g=e("./_is-array"),m=e("./_an-object"),y=e("./_is-object"),_=e("./_to-iobject"),x=e("./_to-primitive"),k=e("./_property-desc"),w=e("./_object-create"),j=e("./_object-gopn-ext"),S=e("./_object-gopd"),O=e("./_object-dp"),E=e("./_object-keys"),A=S.f,T=O.f,P=j.f,D=n.Symbol,M=n.JSON,Y=M&&M.stringify,L=d("_hidden"),N=d("toPrimitive"),F={}.propertyIsEnumerable,I=f("symbol-registry"),R=f("symbols"),C=f("op-symbols"),G=Object.prototype,$="function"==typeof D,z=n.QObject,q=!z||!z.prototype||!z.prototype.findChild,U=i&&c(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=A(G,t);n&&delete G[t],T(e,t,r),n&&e!==G&&T(G,t,n)}:T,J=function(e){var t=R[e]=w(D.prototype);return t._k=e,t},B=$&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},W=function(e,t,r){return e===G&&W(C,t,r),m(e),t=x(t,!0),m(r),o(R,t)?(r.enumerable?(o(e,L)&&e[L][t]&&(e[L][t]=!1),r=w(r,{enumerable:k(0,!1)})):(o(e,L)||T(e,L,k(1,{})),e[L][t]=!0),U(e,t,r)):T(e,t,r)},V=function(e,t){m(e);for(var r,n=v(t=_(t)),o=0,i=n.length;i>o;)W(e,r=n[o++],t[r]);return e},K=function(e){var t=F.call(this,e=x(e,!0));return!(this===G&&o(R,e)&&!o(C,e))&&(!(t||!o(this,e)||!o(R,e)||o(this,L)&&this[L][e])||t)},H=function(e,t){if(e=_(e),t=x(t,!0),e!==G||!o(R,t)||o(C,t)){var r=A(e,t);return!r||!o(R,t)||o(e,L)&&e[L][t]||(r.enumerable=!0),r}},Q=function(e){for(var t,r=P(_(e)),n=[],i=0;r.length>i;)o(R,t=r[i++])||t==L||t==u||n.push(t);return n},Z=function(e){for(var t,r=e===G,n=P(r?C:_(e)),i=[],a=0;n.length>a;)!o(R,t=n[a++])||r&&!o(G,t)||i.push(R[t]);return i};$||(s((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===G&&t.call(C,r),o(this,L)&&o(this[L],e)&&(this[L][e]=!1),U(this,e,k(1,r))};return i&&q&&U(G,e,{configurable:!0,set:t}),J(e)}).prototype,"toString",function(){return this._k}),S.f=H,O.f=W,e("./_object-gopn").f=j.f=Q,e("./_object-pie").f=K,e("./_object-gops").f=Z,i&&!e("./_library")&&s(G,"propertyIsEnumerable",K,!0),h.f=function(e){return J(d(e))}),a(a.G+a.W+a.F*!$,{Symbol:D});for(var X="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;X.length>ee;)d(X[ee++]);for(var te=E(d.store),re=0;te.length>re;)b(te[re++]);a(a.S+a.F*!$,"Symbol",{for:function(e){return o(I,e+="")?I[e]:I[e]=D(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in I)if(I[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!$,"Object",{create:function(e,t){return void 0===t?w(e):V(w(e),t)},defineProperty:W,defineProperties:V,getOwnPropertyDescriptor:H,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),M&&a(a.S+a.F*(!$||c(function(){var e=D();return"[null]"!=Y([e])||"{}"!=Y({a:e})||"{}"!=Y(Object(e))})),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(y(t)||void 0!==e)&&!B(e))return g(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!B(t))return t}),n[1]=t,Y.apply(M,n)}}),D.prototype[N]||e("./_hide")(D.prototype,N,D.prototype.valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},{"./_an-object":26,"./_descriptors":34,"./_enum-keys":37,"./_export":38,"./_fails":39,"./_global":41,"./_has":42,"./_hide":43,"./_is-array":49,"./_is-object":51,"./_library":58,"./_meta":59,"./_object-create":62,"./_object-dp":63,"./_object-gopd":65,"./_object-gopn":67,"./_object-gopn-ext":66,"./_object-gops":68,"./_object-keys":71,"./_object-pie":72,"./_property-desc":76,"./_redefine":78,"./_set-to-string-tag":81,"./_shared":83,"./_to-iobject":89,"./_to-primitive":92,"./_uid":93,"./_wks":96,"./_wks-define":94,"./_wks-ext":95}],109:[function(e,t,r){"use strict";var n=e("./_export"),o=e("./_core"),i=e("./_global"),a=e("./_species-constructor"),s=e("./_promise-resolve");n(n.P+n.R,"Promise",{finally:function(e){var t=a(this,o.Promise||i.Promise),r="function"==typeof e;return this.then(r?function(r){return s(t,e()).then(function(){return r})}:e,r?function(r){return s(t,e()).then(function(){throw r})}:e)}})},{"./_core":30,"./_export":38,"./_global":41,"./_promise-resolve":75,"./_species-constructor":84}],110:[function(e,t,r){"use strict";var n=e("./_export"),o=e("./_new-promise-capability"),i=e("./_perform");n(n.S,"Promise",{try:function(e){var t=o.f(this),r=i(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},{"./_export":38,"./_new-promise-capability":61,"./_perform":74}],111:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":94}],112:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":94}],113:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),a=e("./_wks")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],f=n[c],l=f&&f.prototype;l&&!l[a]&&o(l,a,c),i[c]=i.Array}},{"./_global":41,"./_hide":43,"./_iterators":57,"./_wks":96,"./es6.array.iterator":100}],114:[function(e,t,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e("./runtime"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},{"./runtime":115}],115:[function(e,t,r){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"==typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{(f=e.regeneratorRuntime=c?t.exports:{}).wrap=_;var l="suspendedStart",p="suspendedYield",d="executing",h="completed",b={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(D([])));m&&m!==n&&o.call(m,a)&&(v=m);var y=j.prototype=k.prototype=Object.create(v);w.prototype=y.constructor=j,j.constructor=w,j[u]=w.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(y),e},f.awrap=function(e){return{__await:e}},S(O.prototype),O.prototype[s]=function(){return this},f.AsyncIterator=O,f.async=function(e,t,r,n){var o=new O(_(e,t,r,n));return f.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},S(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=D,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return s.type="throw",s.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),b}}}function _(e,t,r,n){var o=t&&t.prototype instanceof k?t:k,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(e,t,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function k(){}function w(){}function j(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function O(e){var t;this._invoke=function(r,n){function i(){return new Promise(function(t,i){!function t(r,n,i,a){var s=x(e[r],e,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(c).then(function(e){u.value=e,i(u)},a)}a(s.arg)}(r,n,t,i)})}return t=t?t.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,E(e,t),"throw"===t.method))return b;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=x(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,b;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,b):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function D(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},{}]},{},[1])(1)});;// jsonata-es5.min.js is prepended to this file as part of the Grunt build

;(function(window) {
    if (typeof window.window != "undefined" && window.document)
    return;
    if (window.require && window.define)
    return;

    if (!window.console) {
        window.console = function() {
            var msgs = Array.prototype.slice.call(arguments, 0);
            postMessage({type: "log", data: msgs});
        };
        window.console.error =
        window.console.warn =
        window.console.log =
        window.console.trace = window.console;
    }
    window.window = window;
    window.ace = window;
    window.onerror = function(message, file, line, col, err) {
        postMessage({type: "error", data: {
            message: message,
            data: err.data,
            file: file,
            line: line,
            col: col,
            stack: err.stack
        }});
    };

    window.normalizeModule = function(parentId, moduleName) {
        // normalize plugin requires
        if (moduleName.indexOf("!") !== -1) {
            var chunks = moduleName.split("!");
            return window.normalizeModule(parentId, chunks[0]) + "!" + window.normalizeModule(parentId, chunks[1]);
        }
        // normalize relative requires
        if (moduleName.charAt(0) == ".") {
            var base = parentId.split("/").slice(0, -1).join("/");
            moduleName = (base ? base + "/" : "") + moduleName;

            while (moduleName.indexOf(".") !== -1 && previous != moduleName) {
                var previous = moduleName;
                moduleName = moduleName.replace(/^\.\//, "").replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
            }
        }

        return moduleName;
    };

    window.require = function require(parentId, id) {
        if (!id) {
            id = parentId;
            parentId = null;
        }
        if (!id.charAt)
        throw new Error("worker.js require() accepts only (parentId, id) as arguments");

        id = window.normalizeModule(parentId, id);

        var module = window.require.modules[id];
        if (module) {
            if (!module.initialized) {
                module.initialized = true;
                module.exports = module.factory().exports;
            }
            return module.exports;
        }

        if (!window.require.tlns)
        return console.log("unable to load " + id);

        var path = resolveModuleId(id, window.require.tlns);
        if (path.slice(-3) != ".js") path += ".js";

        window.require.id = id;
        window.require.modules[id] = {}; // prevent infinite loop on broken modules
        importScripts(path);
        return window.require(parentId, id);
    };
    function resolveModuleId(id, paths) {
        var testPath = id, tail = "";
        while (testPath) {
            var alias = paths[testPath];
            if (typeof alias == "string") {
                return alias + tail;
            } else if (alias) {
                return  alias.location.replace(/\/*$/, "/") + (tail || alias.main || alias.name);
            } else if (alias === false) {
                return "";
            }
            var i = testPath.lastIndexOf("/");
            if (i === -1) break;
            tail = testPath.substr(i) + tail;
            testPath = testPath.slice(0, i);
        }
        return id;
    }
    window.require.modules = {};
    window.require.tlns = {};

    window.define = function(id, deps, factory) {
        if (arguments.length == 2) {
            factory = deps;
            if (typeof id != "string") {
                deps = id;
                id = window.require.id;
            }
        } else if (arguments.length == 1) {
            factory = id;
            deps = [];
            id = window.require.id;
        }

        if (typeof factory != "function") {
            window.require.modules[id] = {
                exports: factory,
                initialized: true
            };
            return;
        }

        if (!deps.length)
        // If there is no dependencies, we inject "require", "exports" and
        // "module" as dependencies, to provide CommonJS compatibility.
        deps = ["require", "exports", "module"];

        var req = function(childId) {
            return window.require(id, childId);
        };

        window.require.modules[id] = {
            exports: {},
            factory: function() {
                var module = this;
                var returnExports = factory.apply(this, deps.map(function(dep) {
                    switch (dep) {
                        // Because "require", "exports" and "module" aren't actual
                        // dependencies, we must handle them seperately.
                        case "require": return req;
                        case "exports": return module.exports;
                        case "module":  return module;
                        // But for all other dependencies, we can just go ahead and
                        // require them.
                        default:        return req(dep);
                    }
                }));
                if (returnExports)
                module.exports = returnExports;
                return module;
            }
        };
    };
    window.define.amd = {};
    require.tlns = {};
    window.initBaseUrls  = function initBaseUrls(topLevelNamespaces) {
        for (var i in topLevelNamespaces)
        require.tlns[i] = topLevelNamespaces[i];
    };

    window.initSender = function initSender() {

        var EventEmitter = window.require("ace/lib/event_emitter").EventEmitter;
        var oop = window.require("ace/lib/oop");

        var Sender = function() {};

        (function() {

            oop.implement(this, EventEmitter);

            this.callback = function(data, callbackId) {
                postMessage({
                    type: "call",
                    id: callbackId,
                    data: data
                });
            };

            this.emit = function(name, data) {
                postMessage({
                    type: "event",
                    name: name,
                    data: data
                });
            };

        }).call(Sender.prototype);

        return new Sender();
    };

    var main = window.main = null;
    var sender = window.sender = null;

    window.onmessage = function(e) {
        var msg = e.data;
        if (msg.event && sender) {
            sender._signal(msg.event, msg.data);
        }
        else if (msg.command) {
            if (main[msg.command])
            main[msg.command].apply(main, msg.args);
            else if (window[msg.command])
            window[msg.command].apply(window, msg.args);
            else
            throw new Error("Unknown command:" + msg.command);
        }
        else if (msg.init) {
            window.initBaseUrls(msg.tlns);
            require("ace/lib/es5-shim");
            sender = window.sender = window.initSender();
            var clazz = require(msg.module)[msg.classname];
            main = window.main = new clazz(sender);
        }
    };
})(this);

define("ace/lib/oop",["require","exports","module"], function(require, exports, module) {
    "use strict";

    exports.inherits = function(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };

    exports.mixin = function(obj, mixin) {
        for (var key in mixin) {
            obj[key] = mixin[key];
        }
        return obj;
    };

    exports.implement = function(proto, mixin) {
        exports.mixin(proto, mixin);
    };

});

define("ace/range",["require","exports","module"], function(require, exports, module) {
    "use strict";
    var comparePoints = function(p1, p2) {
        return p1.row - p2.row || p1.column - p2.column;
    };
    var Range = function(startRow, startColumn, endRow, endColumn) {
        this.start = {
            row: startRow,
            column: startColumn
        };

        this.end = {
            row: endRow,
            column: endColumn
        };
    };

    (function() {
        this.isEqual = function(range) {
            return this.start.row === range.start.row &&
            this.end.row === range.end.row &&
            this.start.column === range.start.column &&
            this.end.column === range.end.column;
        };
        this.toString = function() {
            return ("Range: [" + this.start.row + "/" + this.start.column +
            "] -> [" + this.end.row + "/" + this.end.column + "]");
        };

        this.contains = function(row, column) {
            return this.compare(row, column) == 0;
        };
        this.compareRange = function(range) {
            var cmp,
            end = range.end,
            start = range.start;

            cmp = this.compare(end.row, end.column);
            if (cmp == 1) {
                cmp = this.compare(start.row, start.column);
                if (cmp == 1) {
                    return 2;
                } else if (cmp == 0) {
                    return 1;
                } else {
                    return 0;
                }
            } else if (cmp == -1) {
                return -2;
            } else {
                cmp = this.compare(start.row, start.column);
                if (cmp == -1) {
                    return -1;
                } else if (cmp == 1) {
                    return 42;
                } else {
                    return 0;
                }
            }
        };
        this.comparePoint = function(p) {
            return this.compare(p.row, p.column);
        };
        this.containsRange = function(range) {
            return this.comparePoint(range.start) == 0 && this.comparePoint(range.end) == 0;
        };
        this.intersects = function(range) {
            var cmp = this.compareRange(range);
            return (cmp == -1 || cmp == 0 || cmp == 1);
        };
        this.isEnd = function(row, column) {
            return this.end.row == row && this.end.column == column;
        };
        this.isStart = function(row, column) {
            return this.start.row == row && this.start.column == column;
        };
        this.setStart = function(row, column) {
            if (typeof row == "object") {
                this.start.column = row.column;
                this.start.row = row.row;
            } else {
                this.start.row = row;
                this.start.column = column;
            }
        };
        this.setEnd = function(row, column) {
            if (typeof row == "object") {
                this.end.column = row.column;
                this.end.row = row.row;
            } else {
                this.end.row = row;
                this.end.column = column;
            }
        };
        this.inside = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isEnd(row, column) || this.isStart(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.insideStart = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isEnd(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.insideEnd = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isStart(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.compare = function(row, column) {
            if (!this.isMultiLine()) {
                if (row === this.start.row) {
                    return column < this.start.column ? -1 : (column > this.end.column ? 1 : 0);
                }
            }

            if (row < this.start.row)
            return -1;

            if (row > this.end.row)
            return 1;

            if (this.start.row === row)
            return column >= this.start.column ? 0 : -1;

            if (this.end.row === row)
            return column <= this.end.column ? 0 : 1;

            return 0;
        };
        this.compareStart = function(row, column) {
            if (this.start.row == row && this.start.column == column) {
                return -1;
            } else {
                return this.compare(row, column);
            }
        };
        this.compareEnd = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
                return 1;
            } else {
                return this.compare(row, column);
            }
        };
        this.compareInside = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
                return 1;
            } else if (this.start.row == row && this.start.column == column) {
                return -1;
            } else {
                return this.compare(row, column);
            }
        };
        this.clipRows = function(firstRow, lastRow) {
            if (this.end.row > lastRow)
            var end = {row: lastRow + 1, column: 0};
            else if (this.end.row < firstRow)
            var end = {row: firstRow, column: 0};

            if (this.start.row > lastRow)
            var start = {row: lastRow + 1, column: 0};
            else if (this.start.row < firstRow)
            var start = {row: firstRow, column: 0};

            return Range.fromPoints(start || this.start, end || this.end);
        };
        this.extend = function(row, column) {
            var cmp = this.compare(row, column);

            if (cmp == 0)
            return this;
            else if (cmp == -1)
            var start = {row: row, column: column};
            else
            var end = {row: row, column: column};

            return Range.fromPoints(start || this.start, end || this.end);
        };

        this.isEmpty = function() {
            return (this.start.row === this.end.row && this.start.column === this.end.column);
        };
        this.isMultiLine = function() {
            return (this.start.row !== this.end.row);
        };
        this.clone = function() {
            return Range.fromPoints(this.start, this.end);
        };
        this.collapseRows = function() {
            if (this.end.column == 0)
            return new Range(this.start.row, 0, Math.max(this.start.row, this.end.row-1), 0)
            else
            return new Range(this.start.row, 0, this.end.row, 0)
        };
        this.toScreenRange = function(session) {
            var screenPosStart = session.documentToScreenPosition(this.start);
            var screenPosEnd = session.documentToScreenPosition(this.end);

            return new Range(
                screenPosStart.row, screenPosStart.column,
                screenPosEnd.row, screenPosEnd.column
            );
        };
        this.moveBy = function(row, column) {
            this.start.row += row;
            this.start.column += column;
            this.end.row += row;
            this.end.column += column;
        };

    }).call(Range.prototype);
    Range.fromPoints = function(start, end) {
        return new Range(start.row, start.column, end.row, end.column);
    };
    Range.comparePoints = comparePoints;

    Range.comparePoints = function(p1, p2) {
        return p1.row - p2.row || p1.column - p2.column;
    };


    exports.Range = Range;
});

define("ace/apply_delta",["require","exports","module"], function(require, exports, module) {
    "use strict";

    function throwDeltaError(delta, errorText){
        console.log("Invalid Delta:", delta);
        throw "Invalid Delta: " + errorText;
    }

    function positionInDocument(docLines, position) {
        return position.row    >= 0 && position.row    <  docLines.length &&
        position.column >= 0 && position.column <= docLines[position.row].length;
    }

    function validateDelta(docLines, delta) {
        if (delta.action != "insert" && delta.action != "remove")
        throwDeltaError(delta, "delta.action must be 'insert' or 'remove'");
        if (!(delta.lines instanceof Array))
        throwDeltaError(delta, "delta.lines must be an Array");
        if (!delta.start || !delta.end)
        throwDeltaError(delta, "delta.start/end must be an present");
        var start = delta.start;
        if (!positionInDocument(docLines, delta.start))
        throwDeltaError(delta, "delta.start must be contained in document");
        var end = delta.end;
        if (delta.action == "remove" && !positionInDocument(docLines, end))
        throwDeltaError(delta, "delta.end must contained in document for 'remove' actions");
        var numRangeRows = end.row - start.row;
        var numRangeLastLineChars = (end.column - (numRangeRows == 0 ? start.column : 0));
        if (numRangeRows != delta.lines.length - 1 || delta.lines[numRangeRows].length != numRangeLastLineChars)
        throwDeltaError(delta, "delta.range must match delta lines");
    }

    exports.applyDelta = function(docLines, delta, doNotValidate) {

        var row = delta.start.row;
        var startColumn = delta.start.column;
        var line = docLines[row] || "";
        switch (delta.action) {
            case "insert":
            var lines = delta.lines;
            if (lines.length === 1) {
                docLines[row] = line.substring(0, startColumn) + delta.lines[0] + line.substring(startColumn);
            } else {
                var args = [row, 1].concat(delta.lines);
                docLines.splice.apply(docLines, args);
                docLines[row] = line.substring(0, startColumn) + docLines[row];
                docLines[row + delta.lines.length - 1] += line.substring(startColumn);
            }
            break;
            case "remove":
            var endColumn = delta.end.column;
            var endRow = delta.end.row;
            if (row === endRow) {
                docLines[row] = line.substring(0, startColumn) + line.substring(endColumn);
            } else {
                docLines.splice(
                    row, endRow - row + 1,
                    line.substring(0, startColumn) + docLines[endRow].substring(endColumn)
                );
            }
            break;
        }
    }
});

define("ace/lib/event_emitter",["require","exports","module"], function(require, exports, module) {
    "use strict";

    var EventEmitter = {};
    var stopPropagation = function() { this.propagationStopped = true; };
    var preventDefault = function() { this.defaultPrevented = true; };

    EventEmitter._emit =
    EventEmitter._dispatchEvent = function(eventName, e) {
        this._eventRegistry || (this._eventRegistry = {});
        this._defaultHandlers || (this._defaultHandlers = {});

        var listeners = this._eventRegistry[eventName] || [];
        var defaultHandler = this._defaultHandlers[eventName];
        if (!listeners.length && !defaultHandler)
        return;

        if (typeof e != "object" || !e)
        e = {};

        if (!e.type)
        e.type = eventName;
        if (!e.stopPropagation)
        e.stopPropagation = stopPropagation;
        if (!e.preventDefault)
        e.preventDefault = preventDefault;

        listeners = listeners.slice();
        for (var i=0; i<listeners.length; i++) {
            listeners[i](e, this);
            if (e.propagationStopped)
            break;
        }

        if (defaultHandler && !e.defaultPrevented)
        return defaultHandler(e, this);
    };


    EventEmitter._signal = function(eventName, e) {
        var listeners = (this._eventRegistry || {})[eventName];
        if (!listeners)
        return;
        listeners = listeners.slice();
        for (var i=0; i<listeners.length; i++)
        listeners[i](e, this);
    };

    EventEmitter.once = function(eventName, callback) {
        var _self = this;
        callback && this.addEventListener(eventName, function newCallback() {
            _self.removeEventListener(eventName, newCallback);
            callback.apply(null, arguments);
        });
    };


    EventEmitter.setDefaultHandler = function(eventName, callback) {
        var handlers = this._defaultHandlers
        if (!handlers)
        handlers = this._defaultHandlers = {_disabled_: {}};

        if (handlers[eventName]) {
            var old = handlers[eventName];
            var disabled = handlers._disabled_[eventName];
            if (!disabled)
            handlers._disabled_[eventName] = disabled = [];
            disabled.push(old);
            var i = disabled.indexOf(callback);
            if (i != -1)
            disabled.splice(i, 1);
        }
        handlers[eventName] = callback;
    };
    EventEmitter.removeDefaultHandler = function(eventName, callback) {
        var handlers = this._defaultHandlers
        if (!handlers)
        return;
        var disabled = handlers._disabled_[eventName];

        if (handlers[eventName] == callback) {
            var old = handlers[eventName];
            if (disabled)
            this.setDefaultHandler(eventName, disabled.pop());
        } else if (disabled) {
            var i = disabled.indexOf(callback);
            if (i != -1)
            disabled.splice(i, 1);
        }
    };

    EventEmitter.on =
    EventEmitter.addEventListener = function(eventName, callback, capturing) {
        this._eventRegistry = this._eventRegistry || {};

        var listeners = this._eventRegistry[eventName];
        if (!listeners)
        listeners = this._eventRegistry[eventName] = [];

        if (listeners.indexOf(callback) == -1)
        listeners[capturing ? "unshift" : "push"](callback);
        return callback;
    };

    EventEmitter.off =
    EventEmitter.removeListener =
    EventEmitter.removeEventListener = function(eventName, callback) {
        this._eventRegistry = this._eventRegistry || {};

        var listeners = this._eventRegistry[eventName];
        if (!listeners)
        return;

        var index = listeners.indexOf(callback);
        if (index !== -1)
        listeners.splice(index, 1);
    };

    EventEmitter.removeAllListeners = function(eventName) {
        if (this._eventRegistry) this._eventRegistry[eventName] = [];
    };

    exports.EventEmitter = EventEmitter;

});

define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"], function(require, exports, module) {
    "use strict";

    var oop = require("./lib/oop");
    var EventEmitter = require("./lib/event_emitter").EventEmitter;

    var Anchor = exports.Anchor = function(doc, row, column) {
        this.$onChange = this.onChange.bind(this);
        this.attach(doc);

        if (typeof column == "undefined")
        this.setPosition(row.row, row.column);
        else
        this.setPosition(row, column);
    };

    (function() {

        oop.implement(this, EventEmitter);
        this.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
        };
        this.getDocument = function() {
            return this.document;
        };
        this.$insertRight = false;
        this.onChange = function(delta) {
            if (delta.start.row == delta.end.row && delta.start.row != this.row)
            return;

            if (delta.start.row > this.row)
            return;

            var point = $getTransformedPoint(delta, {row: this.row, column: this.column}, this.$insertRight);
            this.setPosition(point.row, point.column, true);
        };

        function $pointsInOrder(point1, point2, equalPointsInOrder) {
            var bColIsAfter = equalPointsInOrder ? point1.column <= point2.column : point1.column < point2.column;
            return (point1.row < point2.row) || (point1.row == point2.row && bColIsAfter);
        }

        function $getTransformedPoint(delta, point, moveIfEqual) {
            var deltaIsInsert = delta.action == "insert";
            var deltaRowShift = (deltaIsInsert ? 1 : -1) * (delta.end.row    - delta.start.row);
            var deltaColShift = (deltaIsInsert ? 1 : -1) * (delta.end.column - delta.start.column);
            var deltaStart = delta.start;
            var deltaEnd = deltaIsInsert ? deltaStart : delta.end; // Collapse insert range.
            if ($pointsInOrder(point, deltaStart, moveIfEqual)) {
                return {
                    row: point.row,
                    column: point.column
                };
            }
            if ($pointsInOrder(deltaEnd, point, !moveIfEqual)) {
                return {
                    row: point.row + deltaRowShift,
                    column: point.column + (point.row == deltaEnd.row ? deltaColShift : 0)
                };
            }

            return {
                row: deltaStart.row,
                column: deltaStart.column
            };
        }
        this.setPosition = function(row, column, noClip) {
            var pos;
            if (noClip) {
                pos = {
                    row: row,
                    column: column
                };
            } else {
                pos = this.$clipPositionToDocument(row, column);
            }

            if (this.row == pos.row && this.column == pos.column)
            return;

            var old = {
                row: this.row,
                column: this.column
            };

            this.row = pos.row;
            this.column = pos.column;
            this._signal("change", {
                old: old,
                value: pos
            });
        };
        this.detach = function() {
            this.document.removeEventListener("change", this.$onChange);
        };
        this.attach = function(doc) {
            this.document = doc || this.document;
            this.document.on("change", this.$onChange);
        };
        this.$clipPositionToDocument = function(row, column) {
            var pos = {};

            if (row >= this.document.getLength()) {
                pos.row = Math.max(0, this.document.getLength() - 1);
                pos.column = this.document.getLine(pos.row).length;
            }
            else if (row < 0) {
                pos.row = 0;
                pos.column = 0;
            }
            else {
                pos.row = row;
                pos.column = Math.min(this.document.getLine(pos.row).length, Math.max(0, column));
            }

            if (column < 0)
            pos.column = 0;

            return pos;
        };

    }).call(Anchor.prototype);

});

define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"], function(require, exports, module) {
    "use strict";
    var oop = require("./lib/oop");
    var applyDelta = require("./apply_delta").applyDelta;
    var EventEmitter = require("./lib/event_emitter").EventEmitter;
    var Range = require("./range").Range;
    var Anchor = require("./anchor").Anchor;

    var Document = function(textOrLines) {
        this.$lines = [""];
        if (textOrLines.length === 0) {
            this.$lines = [""];
        } else if (Array.isArray(textOrLines)) {
            this.insertMergedLines({row: 0, column: 0}, textOrLines);
        } else {
            this.insert({row: 0, column:0}, textOrLines);
        }
    };

    (function() {

        oop.implement(this, EventEmitter);
        this.setValue = function(text) {
            var len = this.getLength() - 1;
            this.remove(new Range(0, 0, len, this.getLine(len).length));
            this.insert({row: 0, column: 0}, text);
        };
        this.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
        };
        this.createAnchor = function(row, column) {
            return new Anchor(this, row, column);
        };
        if ("aaa".split(/a/).length === 0) {
            this.$split = function(text) {
                return text.replace(/\r\n|\r/g, "\n").split("\n");
            };
        } else {
            this.$split = function(text) {
                return text.split(/\r\n|\r|\n/);
            };
        }


        this.$detectNewLine = function(text) {
            var match = text.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = match ? match[1] : "\n";
            this._signal("changeNewLineMode");
        };
        this.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
                case "windows":
                return "\r\n";
                case "unix":
                return "\n";
                default:
                return this.$autoNewLine || "\n";
            }
        };

        this.$autoNewLine = "";
        this.$newLineMode = "auto";
        this.setNewLineMode = function(newLineMode) {
            if (this.$newLineMode === newLineMode)
            return;

            this.$newLineMode = newLineMode;
            this._signal("changeNewLineMode");
        };
        this.getNewLineMode = function() {
            return this.$newLineMode;
        };
        this.isNewLine = function(text) {
            return (text == "\r\n" || text == "\r" || text == "\n");
        };
        this.getLine = function(row) {
            return this.$lines[row] || "";
        };
        this.getLines = function(firstRow, lastRow) {
            return this.$lines.slice(firstRow, lastRow + 1);
        };
        this.getAllLines = function() {
            return this.getLines(0, this.getLength());
        };
        this.getLength = function() {
            return this.$lines.length;
        };
        this.getTextRange = function(range) {
            return this.getLinesForRange(range).join(this.getNewLineCharacter());
        };
        this.getLinesForRange = function(range) {
            var lines;
            if (range.start.row === range.end.row) {
                lines = [this.getLine(range.start.row).substring(range.start.column, range.end.column)];
            } else {
                lines = this.getLines(range.start.row, range.end.row);
                lines[0] = (lines[0] || "").substring(range.start.column);
                var l = lines.length - 1;
                if (range.end.row - range.start.row == l)
                lines[l] = lines[l].substring(0, range.end.column);
            }
            return lines;
        };
        this.insertLines = function(row, lines) {
            console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");
            return this.insertFullLines(row, lines);
        };
        this.removeLines = function(firstRow, lastRow) {
            console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");
            return this.removeFullLines(firstRow, lastRow);
        };
        this.insertNewLine = function(position) {
            console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");
            return this.insertMergedLines(position, ["", ""]);
        };
        this.insert = function(position, text) {
            if (this.getLength() <= 1)
            this.$detectNewLine(text);

            return this.insertMergedLines(position, this.$split(text));
        };
        this.insertInLine = function(position, text) {
            var start = this.clippedPos(position.row, position.column);
            var end = this.pos(position.row, position.column + text.length);

            this.applyDelta({
                start: start,
                end: end,
                action: "insert",
                lines: [text]
            }, true);

            return this.clonePos(end);
        };

        this.clippedPos = function(row, column) {
            var length = this.getLength();
            if (row === undefined) {
                row = length;
            } else if (row < 0) {
                row = 0;
            } else if (row >= length) {
                row = length - 1;
                column = undefined;
            }
            var line = this.getLine(row);
            if (column == undefined)
            column = line.length;
            column = Math.min(Math.max(column, 0), line.length);
            return {row: row, column: column};
        };

        this.clonePos = function(pos) {
            return {row: pos.row, column: pos.column};
        };

        this.pos = function(row, column) {
            return {row: row, column: column};
        };

        this.$clipPosition = function(position) {
            var length = this.getLength();
            if (position.row >= length) {
                position.row = Math.max(0, length - 1);
                position.column = this.getLine(length - 1).length;
            } else {
                position.row = Math.max(0, position.row);
                position.column = Math.min(Math.max(position.column, 0), this.getLine(position.row).length);
            }
            return position;
        };
        this.insertFullLines = function(row, lines) {
            row = Math.min(Math.max(row, 0), this.getLength());
            var column = 0;
            if (row < this.getLength()) {
                lines = lines.concat([""]);
                column = 0;
            } else {
                lines = [""].concat(lines);
                row--;
                column = this.$lines[row].length;
            }
            this.insertMergedLines({row: row, column: column}, lines);
        };
        this.insertMergedLines = function(position, lines) {
            var start = this.clippedPos(position.row, position.column);
            var end = {
                row: start.row + lines.length - 1,
                column: (lines.length == 1 ? start.column : 0) + lines[lines.length - 1].length
            };

            this.applyDelta({
                start: start,
                end: end,
                action: "insert",
                lines: lines
            });

            return this.clonePos(end);
        };
        this.remove = function(range) {
            var start = this.clippedPos(range.start.row, range.start.column);
            var end = this.clippedPos(range.end.row, range.end.column);
            this.applyDelta({
                start: start,
                end: end,
                action: "remove",
                lines: this.getLinesForRange({start: start, end: end})
            });
            return this.clonePos(start);
        };
        this.removeInLine = function(row, startColumn, endColumn) {
            var start = this.clippedPos(row, startColumn);
            var end = this.clippedPos(row, endColumn);

            this.applyDelta({
                start: start,
                end: end,
                action: "remove",
                lines: this.getLinesForRange({start: start, end: end})
            }, true);

            return this.clonePos(start);
        };
        this.removeFullLines = function(firstRow, lastRow) {
            firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1);
            lastRow  = Math.min(Math.max(0, lastRow ), this.getLength() - 1);
            var deleteFirstNewLine = lastRow == this.getLength() - 1 && firstRow > 0;
            var deleteLastNewLine  = lastRow  < this.getLength() - 1;
            var startRow = ( deleteFirstNewLine ? firstRow - 1                  : firstRow                    );
            var startCol = ( deleteFirstNewLine ? this.getLine(startRow).length : 0                           );
            var endRow   = ( deleteLastNewLine  ? lastRow + 1                   : lastRow                     );
            var endCol   = ( deleteLastNewLine  ? 0                             : this.getLine(endRow).length );
            var range = new Range(startRow, startCol, endRow, endCol);
            var deletedLines = this.$lines.slice(firstRow, lastRow + 1);

            this.applyDelta({
                start: range.start,
                end: range.end,
                action: "remove",
                lines: this.getLinesForRange(range)
            });
            return deletedLines;
        };
        this.removeNewLine = function(row) {
            if (row < this.getLength() - 1 && row >= 0) {
                this.applyDelta({
                    start: this.pos(row, this.getLine(row).length),
                    end: this.pos(row + 1, 0),
                    action: "remove",
                    lines: ["", ""]
                });
            }
        };
        this.replace = function(range, text) {
            if (!(range instanceof Range))
            range = Range.fromPoints(range.start, range.end);
            if (text.length === 0 && range.isEmpty())
            return range.start;
            if (text == this.getTextRange(range))
            return range.end;

            this.remove(range);
            var end;
            if (text) {
                end = this.insert(range.start, text);
            }
            else {
                end = range.start;
            }

            return end;
        };
        this.applyDeltas = function(deltas) {
            for (var i=0; i<deltas.length; i++) {
                this.applyDelta(deltas[i]);
            }
        };
        this.revertDeltas = function(deltas) {
            for (var i=deltas.length-1; i>=0; i--) {
                this.revertDelta(deltas[i]);
            }
        };
        this.applyDelta = function(delta, doNotValidate) {
            var isInsert = delta.action == "insert";
            if (isInsert ? delta.lines.length <= 1 && !delta.lines[0]
                : !Range.comparePoints(delta.start, delta.end)) {
                    return;
                }

                if (isInsert && delta.lines.length > 20000)
                this.$splitAndapplyLargeDelta(delta, 20000);
                applyDelta(this.$lines, delta, doNotValidate);
                this._signal("change", delta);
            };

            this.$splitAndapplyLargeDelta = function(delta, MAX) {
                var lines = delta.lines;
                var l = lines.length;
                var row = delta.start.row;
                var column = delta.start.column;
                var from = 0, to = 0;
                do {
                    from = to;
                    to += MAX - 1;
                    var chunk = lines.slice(from, to);
                    if (to > l) {
                        delta.lines = chunk;
                        delta.start.row = row + from;
                        delta.start.column = column;
                        break;
                    }
                    chunk.push("");
                    this.applyDelta({
                        start: this.pos(row + from, column),
                        end: this.pos(row + to, column = 0),
                        action: delta.action,
                        lines: chunk
                    }, true);
                } while(true);
            };
            this.revertDelta = function(delta) {
                this.applyDelta({
                    start: this.clonePos(delta.start),
                    end: this.clonePos(delta.end),
                    action: (delta.action == "insert" ? "remove" : "insert"),
                    lines: delta.lines.slice()
                });
            };
            this.indexToPosition = function(index, startRow) {
                var lines = this.$lines || this.getAllLines();
                var newlineLength = this.getNewLineCharacter().length;
                for (var i = startRow || 0, l = lines.length; i < l; i++) {
                    index -= lines[i].length + newlineLength;
                    if (index < 0)
                    return {row: i, column: index + lines[i].length + newlineLength};
                }
                return {row: l-1, column: lines[l-1].length};
            };
            this.positionToIndex = function(pos, startRow) {
                var lines = this.$lines || this.getAllLines();
                var newlineLength = this.getNewLineCharacter().length;
                var index = 0;
                var row = Math.min(pos.row, lines.length);
                for (var i = startRow || 0; i < row; ++i)
                index += lines[i].length + newlineLength;

                return index + pos.column;
            };

        }).call(Document.prototype);

        exports.Document = Document;
    });

    define("ace/lib/lang",["require","exports","module"], function(require, exports, module) {
        "use strict";

        exports.last = function(a) {
            return a[a.length - 1];
        };

        exports.stringReverse = function(string) {
            return string.split("").reverse().join("");
        };

        exports.stringRepeat = function (string, count) {
            var result = '';
            while (count > 0) {
                if (count & 1)
                result += string;

                if (count >>= 1)
                string += string;
            }
            return result;
        };

        var trimBeginRegexp = /^\s\s*/;
        var trimEndRegexp = /\s\s*$/;

        exports.stringTrimLeft = function (string) {
            return string.replace(trimBeginRegexp, '');
        };

        exports.stringTrimRight = function (string) {
            return string.replace(trimEndRegexp, '');
        };

        exports.copyObject = function(obj) {
            var copy = {};
            for (var key in obj) {
                copy[key] = obj[key];
            }
            return copy;
        };

        exports.copyArray = function(array){
            var copy = [];
            for (var i=0, l=array.length; i<l; i++) {
                if (array[i] && typeof array[i] == "object")
                copy[i] = this.copyObject(array[i]);
                else
                copy[i] = array[i];
            }
            return copy;
        };

        exports.deepCopy = function deepCopy(obj) {
            if (typeof obj !== "object" || !obj)
            return obj;
            var copy;
            if (Array.isArray(obj)) {
                copy = [];
                for (var key = 0; key < obj.length; key++) {
                    copy[key] = deepCopy(obj[key]);
                }
                return copy;
            }
            if (Object.prototype.toString.call(obj) !== "[object Object]")
            return obj;

            copy = {};
            for (var key in obj)
            copy[key] = deepCopy(obj[key]);
            return copy;
        };

        exports.arrayToMap = function(arr) {
            var map = {};
            for (var i=0; i<arr.length; i++) {
                map[arr[i]] = 1;
            }
            return map;

        };

        exports.createMap = function(props) {
            var map = Object.create(null);
            for (var i in props) {
                map[i] = props[i];
            }
            return map;
        };
        exports.arrayRemove = function(array, value) {
            for (var i = 0; i <= array.length; i++) {
                if (value === array[i]) {
                    array.splice(i, 1);
                }
            }
        };

        exports.escapeRegExp = function(str) {
            return str.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
        };

        exports.escapeHTML = function(str) {
            return str.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
        };

        exports.getMatchOffsets = function(string, regExp) {
            var matches = [];

            string.replace(regExp, function(str) {
                matches.push({
                    offset: arguments[arguments.length-2],
                    length: str.length
                });
            });

            return matches;
        };
        exports.deferredCall = function(fcn) {
            var timer = null;
            var callback = function() {
                timer = null;
                fcn();
            };

            var deferred = function(timeout) {
                deferred.cancel();
                timer = setTimeout(callback, timeout || 0);
                return deferred;
            };

            deferred.schedule = deferred;

            deferred.call = function() {
                this.cancel();
                fcn();
                return deferred;
            };

            deferred.cancel = function() {
                clearTimeout(timer);
                timer = null;
                return deferred;
            };

            deferred.isPending = function() {
                return timer;
            };

            return deferred;
        };


        exports.delayedCall = function(fcn, defaultTimeout) {
            var timer = null;
            var callback = function() {
                timer = null;
                fcn();
            };

            var _self = function(timeout) {
                if (timer == null)
                timer = setTimeout(callback, timeout || defaultTimeout);
            };

            _self.delay = function(timeout) {
                timer && clearTimeout(timer);
                timer = setTimeout(callback, timeout || defaultTimeout);
            };
            _self.schedule = _self;

            _self.call = function() {
                this.cancel();
                fcn();
            };

            _self.cancel = function() {
                timer && clearTimeout(timer);
                timer = null;
            };

            _self.isPending = function() {
                return timer;
            };

            return _self;
        };
    });

    define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"], function(require, exports, module) {
        "use strict";

        var Range = require("../range").Range;
        var Document = require("../document").Document;
        var lang = require("../lib/lang");

        var Mirror = exports.Mirror = function(sender) {
            this.sender = sender;
            var doc = this.doc = new Document("");

            var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));

            var _self = this;
            sender.on("change", function(e) {
                var data = e.data;
                if (data[0].start) {
                    doc.applyDeltas(data);
                } else {
                    for (var i = 0; i < data.length; i += 2) {
                        if (Array.isArray(data[i+1])) {
                            var d = {action: "insert", start: data[i], lines: data[i+1]};
                        } else {
                            var d = {action: "remove", start: data[i], end: data[i+1]};
                        }
                        doc.applyDelta(d, true);
                    }
                }
                if (_self.$timeout)
                return deferredUpdate.schedule(_self.$timeout);
                _self.onUpdate();
            });
        };

        (function() {

            this.$timeout = 500;

            this.setTimeout = function(timeout) {
                this.$timeout = timeout;
            };

            this.setValue = function(value) {
                this.doc.setValue(value);
                this.deferredUpdate.schedule(this.$timeout);
            };

            this.getValue = function(callbackId) {
                this.sender.callback(this.doc.getValue(), callbackId);
            };

            this.onUpdate = function() {
            };

            this.isPending = function() {
                return this.deferredUpdate.isPending();
            };

        }).call(Mirror.prototype);

    });

    define("ace/lib/es5-shim",["require","exports","module"], function(require, exports, module) {

        function Empty() {}

        if (!Function.prototype.bind) {
            Function.prototype.bind = function bind(that) { // .length is 1
                var target = this;
                if (typeof target != "function") {
                    throw new TypeError("Function.prototype.bind called on incompatible " + target);
                }
                var args = slice.call(arguments, 1); // for normal call
                var bound = function () {

                    if (this instanceof bound) {

                        var result = target.apply(
                            this,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return this;

                    } else {
                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };
                if(target.prototype) {
                    Empty.prototype = target.prototype;
                    bound.prototype = new Empty();
                    Empty.prototype = null;
                }
                return bound;
            };
        }
        var call = Function.prototype.call;
        var prototypeOfArray = Array.prototype;
        var prototypeOfObject = Object.prototype;
        var slice = prototypeOfArray.slice;
        var _toString = call.bind(prototypeOfObject.toString);
        var owns = call.bind(prototypeOfObject.hasOwnProperty);
        var defineGetter;
        var defineSetter;
        var lookupGetter;
        var lookupSetter;
        var supportsAccessors;
        if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
            defineGetter = call.bind(prototypeOfObject.__defineGetter__);
            defineSetter = call.bind(prototypeOfObject.__defineSetter__);
            lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
            lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
        }
        if ([1,2].splice(0).length != 2) {
            if(function() { // test IE < 9 to splice bug - see issue #138
                function makeArray(l) {
                    var a = new Array(l+2);
                    a[0] = a[1] = 0;
                    return a;
                }
                var array = [], lengthBefore;

                array.splice.apply(array, makeArray(20));
                array.splice.apply(array, makeArray(26));

                lengthBefore = array.length; //46
                array.splice(5, 0, "XXX"); // add one element

                lengthBefore + 1 == array.length

                if (lengthBefore + 1 == array.length) {
                    return true;// has right splice implementation without bugs
                }
            }()) {//IE 6/7
                var array_splice = Array.prototype.splice;
                Array.prototype.splice = function(start, deleteCount) {
                    if (!arguments.length) {
                        return [];
                    } else {
                        return array_splice.apply(this, [
                            start === void 0 ? 0 : start,
                            deleteCount === void 0 ? (this.length - start) : deleteCount
                        ].concat(slice.call(arguments, 2)))
                    }
                };
            } else {//IE8
                Array.prototype.splice = function(pos, removeCount){
                    var length = this.length;
                    if (pos > 0) {
                        if (pos > length)
                        pos = length;
                    } else if (pos == void 0) {
                        pos = 0;
                    } else if (pos < 0) {
                        pos = Math.max(length + pos, 0);
                    }

                    if (!(pos+removeCount < length))
                    removeCount = length - pos;

                    var removed = this.slice(pos, pos+removeCount);
                    var insert = slice.call(arguments, 2);
                    var add = insert.length;
                    if (pos === length) {
                        if (add) {
                            this.push.apply(this, insert);
                        }
                    } else {
                        var remove = Math.min(removeCount, length - pos);
                        var tailOldPos = pos + remove;
                        var tailNewPos = tailOldPos + add - remove;
                        var tailCount = length - tailOldPos;
                        var lengthAfterRemove = length - remove;

                        if (tailNewPos < tailOldPos) { // case A
                            for (var i = 0; i < tailCount; ++i) {
                                this[tailNewPos+i] = this[tailOldPos+i];
                            }
                        } else if (tailNewPos > tailOldPos) { // case B
                            for (i = tailCount; i--; ) {
                                this[tailNewPos+i] = this[tailOldPos+i];
                            }
                        } // else, add == remove (nothing to do)

                        if (add && pos === lengthAfterRemove) {
                            this.length = lengthAfterRemove; // truncate array
                            this.push.apply(this, insert);
                        } else {
                            this.length = lengthAfterRemove + add; // reserves space
                            for (i = 0; i < add; ++i) {
                                this[pos+i] = insert[i];
                            }
                        }
                    }
                    return removed;
                };
            }
        }
        if (!Array.isArray) {
            Array.isArray = function isArray(obj) {
                return _toString(obj) == "[object Array]";
            };
        }
        var boxedString = Object("a"),
        splitString = boxedString[0] != "a" || !(0 in boxedString);

        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function forEach(fun /*, thisp*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                thisp = arguments[1],
                i = -1,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(); // TODO message
                }

                while (++i < length) {
                    if (i in self) {
                        fun.call(thisp, self[i], i, object);
                    }
                }
            };
        }
        if (!Array.prototype.map) {
            Array.prototype.map = function map(fun /*, thisp*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                result = Array(length),
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self)
                    result[i] = fun.call(thisp, self[i], i, object);
                }
                return result;
            };
        }
        if (!Array.prototype.filter) {
            Array.prototype.filter = function filter(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                result = [],
                value,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self) {
                        value = self[i];
                        if (fun.call(thisp, value, i, object)) {
                            result.push(value);
                        }
                    }
                }
                return result;
            };
        }
        if (!Array.prototype.every) {
            Array.prototype.every = function every(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self && !fun.call(thisp, self[i], i, object)) {
                        return false;
                    }
                }
                return true;
            };
        }
        if (!Array.prototype.some) {
            Array.prototype.some = function some(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self && fun.call(thisp, self[i], i, object)) {
                        return true;
                    }
                }
                return false;
            };
        }
        if (!Array.prototype.reduce) {
            Array.prototype.reduce = function reduce(fun /*, initial*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }
                if (!length && arguments.length == 1) {
                    throw new TypeError("reduce of empty array with no initial value");
                }

                var i = 0;
                var result;
                if (arguments.length >= 2) {
                    result = arguments[1];
                } else {
                    do {
                        if (i in self) {
                            result = self[i++];
                            break;
                        }
                        if (++i >= length) {
                            throw new TypeError("reduce of empty array with no initial value");
                        }
                    } while (true);
                }

                for (; i < length; i++) {
                    if (i in self) {
                        result = fun.call(void 0, result, self[i], i, object);
                    }
                }

                return result;
            };
        }
        if (!Array.prototype.reduceRight) {
            Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }
                if (!length && arguments.length == 1) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }

                var result, i = length - 1;
                if (arguments.length >= 2) {
                    result = arguments[1];
                } else {
                    do {
                        if (i in self) {
                            result = self[i--];
                            break;
                        }
                        if (--i < 0) {
                            throw new TypeError("reduceRight of empty array with no initial value");
                        }
                    } while (true);
                }

                do {
                    if (i in this) {
                        result = fun.call(void 0, result, self[i], i, object);
                    }
                } while (i--);

                return result;
            };
        }
        if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
            Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
                var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
                length = self.length >>> 0;

                if (!length) {
                    return -1;
                }

                var i = 0;
                if (arguments.length > 1) {
                    i = toInteger(arguments[1]);
                }
                i = i >= 0 ? i : Math.max(0, length + i);
                for (; i < length; i++) {
                    if (i in self && self[i] === sought) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
            Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
                var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
                length = self.length >>> 0;

                if (!length) {
                    return -1;
                }
                var i = length - 1;
                if (arguments.length > 1) {
                    i = Math.min(i, toInteger(arguments[1]));
                }
                i = i >= 0 ? i : length - Math.abs(i);
                for (; i >= 0; i--) {
                    if (i in self && sought === self[i]) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!Object.getPrototypeOf) {
            Object.getPrototypeOf = function getPrototypeOf(object) {
                return object.__proto__ || (
                    object.constructor ?
                    object.constructor.prototype :
                    prototypeOfObject
                );
            };
        }
        if (!Object.getOwnPropertyDescriptor) {
            var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a " +
            "non-object: ";
            Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
                if ((typeof object != "object" && typeof object != "function") || object === null)
                throw new TypeError(ERR_NON_OBJECT + object);
                if (!owns(object, property))
                return;

                var descriptor, getter, setter;
                descriptor =  { enumerable: true, configurable: true };
                if (supportsAccessors) {
                    var prototype = object.__proto__;
                    object.__proto__ = prototypeOfObject;

                    var getter = lookupGetter(object, property);
                    var setter = lookupSetter(object, property);
                    object.__proto__ = prototype;

                    if (getter || setter) {
                        if (getter) descriptor.get = getter;
                        if (setter) descriptor.set = setter;
                        return descriptor;
                    }
                }
                descriptor.value = object[property];
                return descriptor;
            };
        }
        if (!Object.getOwnPropertyNames) {
            Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
                return Object.keys(object);
            };
        }
        if (!Object.create) {
            var createEmpty;
            if (Object.prototype.__proto__ === null) {
                createEmpty = function () {
                    return { "__proto__": null };
                };
            } else {
                createEmpty = function () {
                    var empty = {};
                    for (var i in empty)
                    empty[i] = null;
                    empty.constructor =
                    empty.hasOwnProperty =
                    empty.propertyIsEnumerable =
                    empty.isPrototypeOf =
                    empty.toLocaleString =
                    empty.toString =
                    empty.valueOf =
                    empty.__proto__ = null;
                    return empty;
                }
            }

            Object.create = function create(prototype, properties) {
                var object;
                if (prototype === null) {
                    object = createEmpty();
                } else {
                    if (typeof prototype != "object")
                    throw new TypeError("typeof prototype["+(typeof prototype)+"] != 'object'");
                    var Type = function () {};
                    Type.prototype = prototype;
                    object = new Type();
                    object.__proto__ = prototype;
                }
                if (properties !== void 0)
                Object.defineProperties(object, properties);
                return object;
            };
        }

        function doesDefinePropertyWork(object) {
            try {
                Object.defineProperty(object, "sentinel", {});
                return "sentinel" in object;
            } catch (exception) {
            }
        }
        if (Object.defineProperty) {
            var definePropertyWorksOnObject = doesDefinePropertyWork({});
            var definePropertyWorksOnDom = typeof document == "undefined" ||
            doesDefinePropertyWork(document.createElement("div"));
            if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
                var definePropertyFallback = Object.defineProperty;
            }
        }

        if (!Object.defineProperty || definePropertyFallback) {
            var ERR_NON_OBJECT_DESCRIPTOR = "Property description must be an object: ";
            var ERR_NON_OBJECT_TARGET = "Object.defineProperty called on non-object: "
            var ERR_ACCESSORS_NOT_SUPPORTED = "getters & setters can not be defined " +
            "on this javascript engine";

            Object.defineProperty = function defineProperty(object, property, descriptor) {
                if ((typeof object != "object" && typeof object != "function") || object === null)
                throw new TypeError(ERR_NON_OBJECT_TARGET + object);
                if ((typeof descriptor != "object" && typeof descriptor != "function") || descriptor === null)
                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
                if (definePropertyFallback) {
                    try {
                        return definePropertyFallback.call(Object, object, property, descriptor);
                    } catch (exception) {
                    }
                }
                if (owns(descriptor, "value")) {

                    if (supportsAccessors && (lookupGetter(object, property) ||
                    lookupSetter(object, property)))
                    {
                        var prototype = object.__proto__;
                        object.__proto__ = prototypeOfObject;
                        delete object[property];
                        object[property] = descriptor.value;
                        object.__proto__ = prototype;
                    } else {
                        object[property] = descriptor.value;
                    }
                } else {
                    if (!supportsAccessors)
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                    if (owns(descriptor, "get"))
                    defineGetter(object, property, descriptor.get);
                    if (owns(descriptor, "set"))
                    defineSetter(object, property, descriptor.set);
                }

                return object;
            };
        }
        if (!Object.defineProperties) {
            Object.defineProperties = function defineProperties(object, properties) {
                for (var property in properties) {
                    if (owns(properties, property))
                    Object.defineProperty(object, property, properties[property]);
                }
                return object;
            };
        }
        if (!Object.seal) {
            Object.seal = function seal(object) {
                return object;
            };
        }
        if (!Object.freeze) {
            Object.freeze = function freeze(object) {
                return object;
            };
        }
        try {
            Object.freeze(function () {});
        } catch (exception) {
            Object.freeze = (function freeze(freezeObject) {
                return function freeze(object) {
                    if (typeof object == "function") {
                        return object;
                    } else {
                        return freezeObject(object);
                    }
                };
            })(Object.freeze);
        }
        if (!Object.preventExtensions) {
            Object.preventExtensions = function preventExtensions(object) {
                return object;
            };
        }
        if (!Object.isSealed) {
            Object.isSealed = function isSealed(object) {
                return false;
            };
        }
        if (!Object.isFrozen) {
            Object.isFrozen = function isFrozen(object) {
                return false;
            };
        }
        if (!Object.isExtensible) {
            Object.isExtensible = function isExtensible(object) {
                if (Object(object) === object) {
                    throw new TypeError(); // TODO message
                }
                var name = '';
                while (owns(object, name)) {
                    name += '?';
                }
                object[name] = true;
                var returnValue = owns(object, name);
                delete object[name];
                return returnValue;
            };
        }
        if (!Object.keys) {
            var hasDontEnumBug = true,
            dontEnums = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
            ],
            dontEnumsLength = dontEnums.length;

            for (var key in {"toString": null}) {
                hasDontEnumBug = false;
            }

            Object.keys = function keys(object) {

                if (
                    (typeof object != "object" && typeof object != "function") ||
                    object === null
                ) {
                    throw new TypeError("Object.keys called on a non-object");
                }

                var keys = [];
                for (var name in object) {
                    if (owns(object, name)) {
                        keys.push(name);
                    }
                }

                if (hasDontEnumBug) {
                    for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                        var dontEnum = dontEnums[i];
                        if (owns(object, dontEnum)) {
                            keys.push(dontEnum);
                        }
                    }
                }
                return keys;
            };

        }
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
        "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
        "\u2029\uFEFF";
        if (!String.prototype.trim || ws.trim()) {
            ws = "[" + ws + "]";
            var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
            trimEndRegexp = new RegExp(ws + ws + "*$");
            String.prototype.trim = function trim() {
                return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
            };
        }

        function toInteger(n) {
            n = +n;
            if (n !== n) { // isNaN
                n = 0;
            } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            return n;
        }

        function isPrimitive(input) {
            var type = typeof input;
            return (
                input === null ||
                type === "undefined" ||
                type === "boolean" ||
                type === "number" ||
                type === "string"
            );
        }

        function toPrimitive(input) {
            var val, valueOf, toString;
            if (isPrimitive(input)) {
                return input;
            }
            valueOf = input.valueOf;
            if (typeof valueOf === "function") {
                val = valueOf.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            toString = input.toString;
            if (typeof toString === "function") {
                val = toString.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            throw new TypeError();
        }
        var toObject = function (o) {
            if (o == null) { // this matches both null and undefined
                throw new TypeError("can't convert "+o+" to object");
            }
            return Object(o);
        };

    });
    define("ace/mode/jsonata_worker",["require","exports","ace/lib/oop","ace/worker/mirror"], function(require, exports) {
        var oop = require("../lib/oop");
        var Mirror = require("../worker/mirror").Mirror;

        var JSONataWorker = exports.JSONataWorker = function(sender) {
            Mirror.call(this, sender);
            this.setTimeout(200);
        };

        oop.inherits(JSONataWorker, Mirror);

        (function() {

            this.onUpdate = function() {
                var value = this.doc.getValue();
                var errors = [];
                try {
                    if (value) {
                        jsonata(value);
                    }
                } catch (e) {
                    var pos = this.doc.indexToPosition(e.position-1);
                    var msg = e.message;
                    msg = msg.replace(/ at column \d+/,"");
                    errors.push({
                        row: pos.row,
                        column: pos.column,
                        text: msg,
                        type: "error"
                    });
                }
                this.sender.emit("annotate", errors);
            };

        }).call(JSONataWorker.prototype);

    });