// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,f;if(null==r)return t.call(r);i=r[a],f=a,e=null!=(c=r)&&n.call(c,f);try{r[a]=void 0}catch(e){return t.call(r)}return o=t.call(r),e?r[a]=i:delete r[a],o}:function(r){return t.call(r)},c="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?u:function(){throw new Error("not implemented")};var s,l=r,p="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),t=e,r=(p&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var g,h=s,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),t=e,r=(v&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=g,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var I,S={uint16:m,uint8:A};(I=new S.uint16(1))[0]=4660;var k=52===new S.uint8(I.buffer)[0],x=!0===k?1:0,F=new h(1),j=new l(F.buffer);function N(r){return F[0]=r,j[x]}function T(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var O=-.16666666666666632;function V(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(O+i*t):r-(i*(.5*e-n*t)-e-n*O)}var $,G,H=2147483647,W=2146435072,C=!0===k?0:1,L=new h(1),P=new l(L.buffer);!0===k?($=1,G=0):($=0,G=1);var R={HIGH:$,LOW:G},Z=new h(1),M=new l(Z.buffer),X=R.HIGH,Y=R.LOW;function z(r,e){return M[X]=r,M[Y]=e,Z[0]}var q=Math.floor,B=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY;function J(r){return r!=r}function K(r){return r===B||r===D}var Q="function"==typeof Object.defineProperty?Object.defineProperty:null,rr=Object.defineProperty;function er(r){return"number"==typeof r}function tr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function nr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+tr(i):tr(i)+r,n&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!er(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=nr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=nr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ar.call(r.specifier)?ar.call(t):ir.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function cr(r){return"string"==typeof r}var fr=Math.abs,ur=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,yr=/e-(\d)$/,dr=/^(\d+)$/,gr=/^(\d+)e/,hr=/\.0$/,vr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":fr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=lr.call(t,wr,"$1e"),t=lr.call(t,vr,"e"),t=lr.call(t,hr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=lr.call(t,pr,"e+0$1"),t=lr.call(t,yr,"e-0$1"),r.alternate&&(t=lr.call(t,dr,"$1."),t=lr.call(t,gr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===sr.call(r.specifier)?sr.call(t):ur.call(t)}function mr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Ar(r,e,t){var n=e-r.length;return n<0?r:r=t?r+mr(n):mr(n)+r}var _r=String.fromCharCode,Er=isNaN,Ur=Array.isArray;function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Sr(r){var e,t,n,i,a,o,c,f,u;if(!Ur(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(cr(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Ir(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Er(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Er(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=or(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Er(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Er(a)?String(n.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=br(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ar(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fr(r){var e,t,n,i;for(t=[],i=0,n=kr.exec(r);n;)(e=r.slice(i,kr.lastIndex-n[0].length)).length&&t.push(e),t.push(xr(n)),i=kr.lastIndex,n=kr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function jr(r){return"string"==typeof r}function Nr(r){var e,t;if(!jr(r))throw new TypeError(Nr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Fr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Sr.apply(null,e)}var Tr,Or,Vr=Object.prototype,$r=Vr.toString,Gr=Vr.__defineGetter__,Hr=Vr.__defineSetter__,Wr=Vr.__lookupGetter__,Cr=Vr.__lookupSetter__,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$r.call(r))throw new TypeError(Nr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$r.call(t))throw new TypeError(Nr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Wr.call(r,e)||Cr.call(r,e)?(n=r.__proto__,r.__proto__=Vr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gr&&Gr.call(r,e,t.get),o&&Hr&&Hr.call(r,e,t.set),r};function Pr(r,e,t){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Tr=1,Or=0):(Tr=0,Or=1);var Rr={HIGH:Tr,LOW:Or},Zr=new h(1),Mr=new l(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,t,n){return Zr[0]=r,e[n]=Mr[Xr],e[n+t]=Mr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}Pr(qr,"assign",zr);var Br=[0,0];function Dr(r,e,t,n){return J(r)||K(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Pr((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,e){var t,n,i,a,o,c;return 0===e||0===r||J(r)||K(r)?r:(Dr(r,Jr,1,0),e+=Jr[1],e+=function(r){var e=N(r);return(e=(e&W)>>>20)-1023|0}(r=Jr[0]),e<-1074?(i=0,a=r,qr.assign(i,Br,1,0),o=Br[0],o&=H,c=N(a),z(o|=c&=2147483648,Br[1])):e>1023?r<0?D:B:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,qr.assign(r,Kr,1,0),t=Kr[0],t&=2148532223,n*z(t|=e+1023<<20,Kr[1])))}function re(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ne=16777216,ie=5.960464477539063e-8,ae=re(20),oe=re(20),ce=re(20),fe=re(20);function ue(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,d,g,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ie*v|0,fe[y]=v-ne*s|0,v=n[h-1]+s,h-=1;if(v=Qr(v,i),v-=8*q(.125*v),v-=g=0|v,l=0,i>0?(g+=y=fe[t-1]>>24-i,fe[t-1]-=y<<24-i,l=fe[t-1]>>23-i):0===i?l=fe[t-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,u=0,y=0;y<t;y++)h=fe[y],0===u?0!==h&&(u=1,fe[y]=16777216-h):fe[y]=16777215-h;if(i>0)switch(i){case 1:fe[t-1]&=8388607;break;case 2:fe[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=Qr(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=fe[y];if(0===h){for(d=1;0===fe[a-d];d++);for(y=t+1;y<=t+d;y++){for(f[c+y]=ee[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return ue(r,e,t+=d,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===fe[t];)t-=1,i-=24;else(v=Qr(v,-i))>=ne?(s=ie*v|0,fe[t]=v-ne*s|0,i+=24,fe[t+=1]=s):fe[t]=0|v;for(s=Qr(1,i),y=t;y>=0;y--)n[y]=s*fe[y],s*=ie;for(y=t;y>=0;y--){for(s=0,d=0;d<=p&&d<=t-y;d++)s+=te[d]*n[y+d];ce[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ce[y];for(e[0]=0===l?s:-s,s=ce[0]-s,y=1;y<=t;y++)s+=ce[y];return e[1]=0===l?s:-s,7&g}function se(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)ae[f]=u<0?0:ee[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ae[o+(f-u)];oe[f]=i}return ue(r,e,4,oe,c,4,a,o,ae)}var le=Math.round;function pe(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=le(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-(N(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-(N(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var ye=1.5707963267341256,de=6077100506506192e-26,ge=2*de,he=3*de,ve=4*de,we=[0,0,0],be=[0,0];function me(r,e){var t,n,i,a,o,c,f;if((i=N(r)&H|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?pe(r,i,e):i<=1073928572?r>0?(f=r-ye,e[0]=f-de,e[1]=f-e[0]-de,1):(f=r+ye,e[0]=f+de,e[1]=f-e[0]+de,-1):r>0?(f=r-2*ye,e[0]=f-ge,e[1]=f-e[0]-ge,2):(f=r+2*ye,e[0]=f+ge,e[1]=f-e[0]+ge,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?pe(r,i,e):r>0?(f=r-3*ye,e[0]=f-he,e[1]=f-e[0]-he,3):(f=r+3*ye,e[0]=f+he,e[1]=f-e[0]+he,-3):1075388923===i?pe(r,i,e):r>0?(f=r-4*ye,e[0]=f-ve,e[1]=f-e[0]-ve,4):(f=r+4*ye,e[0]=f+ve,e[1]=f-e[0]+ve,-4);if(i<1094263291)return pe(r,i,e);if(i>=W)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return L[0]=r,P[C]}(r),f=z(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)we[o]=0|f,f=16777216*(f-we[o]);for(we[2]=f,a=3;0===we[a-1];)a-=1;return c=se(we,be,n,a),r<0?(e[0]=-be[0],e[1]=-be[1],-c):(e[0]=be[0],e[1]=be[1],c)}var Ae=[0,0];return function(r){return 1-function(r){var e;if(e=N(r),(e&=2147483647)<=1072243195)return e<1044381696?1:T(r,0);if(e>=2146435072)return NaN;switch(3&me(r,Ae)){case 0:return T(Ae[0],Ae[1]);case 1:return-V(Ae[0],Ae[1]);case 2:return-T(Ae[0],Ae[1]);default:return V(Ae[0],Ae[1])}}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).versin=e();
//# sourceMappingURL=index.js.map
