// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,c,f;if(null==r)return t.call(r);i=r[a],f=a,e=null!=(c=r)&&n.call(c,f);try{r[a]=void 0}catch(e){return t.call(r)}return o=t.call(r),e?r[a]=i:delete r[a],o}:function(r){return t.call(r)},c="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?u:function(){throw new Error("not implemented")};var s,l=r,p="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),t=e,r=(p&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var d,h=s,v="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,b="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),t=e,r=(v&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=d,_="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S,I={uint16:m,uint8:A};(S=new I.uint16(1))[0]=4660;var k=52===new I.uint8(S.buffer)[0],x=!0===k?1:0,F=new h(1),j=new l(F.buffer);function T(r){return F[0]=r,j[x]}function N(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var O=-.16666666666666632,V=.00833333333332249,$=-.0001984126982985795,G=27557313707070068e-22,H=-2.5050760253406863e-8,W=1.58969099521155e-10;function C(r,e){var t,n,i;return t=V+(i=r*r)*($+i*G)+i*(i*i)*(H+i*W),n=i*r,0===e?r+n*(O+i*t):r-(i*(.5*e-n*t)-e-n*O)}var L,P,R=2147483647,Z=2146435072,M=1048575,X=!0===k?0:1,Y=new h(1),z=new l(Y.buffer);!0===k?(L=1,P=0):(L=0,P=1);var q={HIGH:L,LOW:P},B=new h(1),D=new l(B.buffer),J=q.HIGH,K=q.LOW;function Q(r,e){return D[J]=r,D[K]=e,B[0]}var rr=Math.floor,er=Number.POSITIVE_INFINITY,tr=Number.NEGATIVE_INFINITY,nr=1023,ir=1023,ar=-1023,or=-1074;function cr(r){return r!=r}function fr(r){return r===er||r===tr}var ur=2147483648,sr="function"==typeof Object.defineProperty?Object.defineProperty:null,lr=Object.defineProperty;function pr(r){return"number"==typeof r}function yr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function gr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+yr(i):yr(i)+r,n&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function vr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!pr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===hr.call(r.specifier)?hr.call(t):dr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var wr=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,Ir=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Fr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":wr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ar.call(t,xr,"$1e"),t=Ar.call(t,kr,"e"),t=Ar.call(t,Ir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ar.call(t,_r,"e+0$1"),t=Ar.call(t,Er,"e-0$1"),r.alternate&&(t=Ar.call(t,Ur,"$1."),t=Ar.call(t,Sr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):br.call(t)}function jr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Tr=String.fromCharCode,Nr=Array.isArray;function Or(r){return r!=r}function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,n,i,a,o,c,f,u,s,l,p,y;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Vr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Or(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Or(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=vr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Or(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Or(a)?String(n.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Fr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=gr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+jr(y):jr(y)+s)),o+=n.arg||"",c+=1}return o}var Gr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Hr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Wr(r){var e,t,n,i;for(t=[],i=0,n=Gr.exec(r);n;)(e=r.slice(i,Gr.lastIndex-n[0].length)).length&&t.push(e),t.push(Hr(n)),i=Gr.lastIndex,n=Gr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Cr(r){var e,t;if("string"!=typeof r)throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Wr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $r.apply(null,e)}var Lr,Pr,Rr=Object.prototype,Zr=Rr.toString,Mr=Rr.__defineGetter__,Xr=Rr.__defineSetter__,Yr=Rr.__lookupGetter__,zr=Rr.__lookupSetter__,qr=function(){try{return sr({},"x",{}),!0}catch(r){return!1}}()?lr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Zr.call(t))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Yr.call(r,e)||zr.call(r,e)?(n=r.__proto__,r.__proto__=Rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Mr&&Mr.call(r,e,t.get),o&&Xr&&Xr.call(r,e,t.set),r};function Br(r,e,t){qr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Lr=1,Pr=0):(Lr=0,Pr=1);var Dr={HIGH:Lr,LOW:Pr},Jr=new h(1),Kr=new l(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,t,n){return Jr[0]=r,e[n]=Kr[Qr],e[n+t]=Kr[re],e}function te(r){return ee(r,[0,0],1,0)}Br(te,"assign",ee);var ne=[0,0],ie=22250738585072014e-324,ae=4503599627370496;function oe(r,e,t,n){return cr(r)||fr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ie?(e[n]=r*ae,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Br((function(r){return oe(r,[0,0],1,0)}),"assign",oe);var ce=2220446049250313e-31,fe=2148532223,ue=[0,0],se=[0,0];function le(r,e){var t,n,i,a,o,c;return 0===e||0===r||cr(r)||fr(r)?r:(oe(r,ue,1,0),r=ue[0],e+=ue[1],e+=function(r){var e=T(r);return(e=(e&Z)>>>20)-nr|0}(r),e<or?(i=0,a=r,te.assign(i,ne,1,0),o=ne[0],o&=R,c=T(a),Q(o|=c&=ur,ne[1])):e>ir?r<0?tr:er:(e<=ar?(e+=52,n=ce):n=1,te.assign(r,se,1,0),t=se[0],t&=fe,n*Q(t|=e+nr<<20,se[1])))}function pe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ye=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],de=16777216,he=5.960464477539063e-8,ve=pe(20),we=pe(20),be=pe(20),me=pe(20);function Ae(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=he*v|0,me[y]=v-de*s|0,v=n[h-1]+s,h-=1;if(v=le(v,i),v-=8*rr(.125*v),v-=d=0|v,l=0,i>0?(d+=y=me[t-1]>>24-i,me[t-1]-=y<<24-i,l=me[t-1]>>23-i):0===i?l=me[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<t;y++)h=me[y],0===u?0!==h&&(u=1,me[y]=16777216-h):me[y]=16777215-h;if(i>0)switch(i){case 1:me[t-1]&=8388607;break;case 2:me[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=le(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=me[y];if(0===h){for(g=1;0===me[a-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=ye[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return Ae(r,e,t+=g,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===me[t];)t-=1,i-=24;else(v=le(v,-i))>=de?(s=he*v|0,me[t]=v-de*s|0,i+=24,me[t+=1]=s):me[t]=0|v;for(s=le(1,i),y=t;y>=0;y--)n[y]=s*me[y],s*=he;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=ge[g]*n[y+g];be[t-y]=s}for(s=0,y=t;y>=0;y--)s+=be[y];for(e[0]=0===l?s:-s,s=be[0]-s,y=1;y<=t;y++)s+=be[y];return e[1]=0===l?s:-s,7&d}function _e(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)ve[f]=u<0?0:ye[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ve[o+(f-u)];we[f]=i}return Ae(r,e,4,we,c,4,a,o,ve)}var Ee=Math.round,Ue=.6366197723675814,Se=1.5707963267341256,Ie=6077100506506192e-26,ke=6077100506303966e-26,xe=20222662487959506e-37,Fe=20222662487111665e-37,je=84784276603689e-45,Te=2047;function Ne(r,e,t){var n,i,a,o,c;return a=r-(n=Ee(r*Ue))*Se,o=n*Ie,c=e>>20|0,t[0]=a-o,c-(T(t[0])>>20&Te)>16&&(o=n*xe-((i=a)-(a=i-(o=n*ke))-o),t[0]=a-o,c-(T(t[0])>>20&Te)>49&&(o=n*je-((i=a)-(a=i-(o=n*Fe))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Oe=0,Ve=16777216,$e=1.5707963267341256,Ge=6077100506506192e-26,He=2*Ge,We=3*Ge,Ce=4*Ge,Le=598523,Pe=1072243195,Re=1073928572,Ze=1074752122,Me=1074977148,Xe=1075183036,Ye=1075388923,ze=1075594811,qe=1094263291,Be=[0,0,0],De=[0,0];function Je(r,e){var t,n,i,a,o,c,f;if((i=T(r)&R|0)<=Pe)return e[0]=r,e[1]=0,0;if(i<=Ze)return(i&M)===Le?Ne(r,i,e):i<=Re?r>0?(f=r-$e,e[0]=f-Ge,e[1]=f-e[0]-Ge,1):(f=r+$e,e[0]=f+Ge,e[1]=f-e[0]+Ge,-1):r>0?(f=r-2*$e,e[0]=f-He,e[1]=f-e[0]-He,2):(f=r+2*$e,e[0]=f+He,e[1]=f-e[0]+He,-2);if(i<=ze)return i<=Xe?i===Me?Ne(r,i,e):r>0?(f=r-3*$e,e[0]=f-We,e[1]=f-e[0]-We,3):(f=r+3*$e,e[0]=f+We,e[1]=f-e[0]+We,-3):i===Ye?Ne(r,i,e):r>0?(f=r-4*$e,e[0]=f-Ce,e[1]=f-e[0]-Ce,4):(f=r+4*$e,e[0]=f+Ce,e[1]=f-e[0]+Ce,-4);if(i<qe)return Ne(r,i,e);if(i>=Z)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Y[0]=r,z[X]}(r),f=Q(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Be[o]=0|f,f=(f-Be[o])*Ve;for(Be[2]=f,a=3;Be[a-1]===Oe;)a-=1;return c=_e(Be,De,n,a),r<0?(e[0]=-De[0],e[1]=-De[1],-c):(e[0]=De[0],e[1]=De[1],c)}var Ke=[0,0],Qe=1072243195,rt=1044381696;return function(r){return 1-function(r){var e;if(e=T(r),(e&=R)<=Qe)return e<rt?1:N(r,0);if(e>=Z)return NaN;switch(3&Je(r,Ke)){case 0:return N(Ke[0],Ke[1]);case 1:return-C(Ke[0],Ke[1]);case 2:return-N(Ke[0],Ke[1]);default:return C(Ke[0],Ke[1])}}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).versin=e();
//# sourceMappingURL=index.js.map