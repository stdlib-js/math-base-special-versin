// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",i=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,i,u,f,a;if(null==r)return t.call(r);i=r[o],a=o,n=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(n){return t.call(r)}return u=t.call(r),n?r[o]=i:delete r[o],u}:function(r){return t.call(r)},u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,n,t;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,l=r,y="function"==typeof Float64Array,p="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(y&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?v:function(){throw new Error("not implemented")};var s,b=c,d="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(d&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=s,h="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,N={uint16:_,uint8:m};(j=new N.uint16(1))[0]=4660;var I=52===new N.uint8(j.buffer)[0],O=!0===I?1:0,S=new b(1),E=new l(S.buffer);function F(r){return S[0]=r,E[O]}function T(r,n){var t,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*e-r*n))}var H=-.16666666666666632;function G(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(H+o*t):r-(o*(.5*n-e*t)-n-e*H)}var P,L,V=!0===I?0:1,W=new b(1),k=new l(W.buffer);!0===I?(P=1,L=0):(P=0,L=1);var x={HIGH:P,LOW:L},M=new b(1),Y=new l(M.buffer),C=x.HIGH,q=x.LOW;function z(r,n){return Y[C]=r,Y[q]=n,M[0]}var B=Math.floor,D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r!=r}function Q(r){return r===D||r===J}var R,X,Z="function"==typeof Object.defineProperty?Object.defineProperty:null,$=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,or=rr.__lookupGetter__,ir=rr.__lookupSetter__,ur=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(or.call(r,n)||ir.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tr&&tr.call(r,n,t.get),u&&er&&er.call(r,n,t.set),r};function fr(r,n,t){ur(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===I?(R=1,X=0):(R=0,X=1);var ar={HIGH:R,LOW:X},cr=new b(1),lr=new l(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[pr],n}function sr(r){return vr(r,[0,0],1,0)}fr(sr,"assign",vr);var br=[0,0];function dr(r,n,t,e){return K(r)||Q(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}fr((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var wr=[0,0],Ar=[0,0];function _r(r,n){var t,e,o,i,u,f;return 0===n||0===r||K(r)||Q(r)?r:(dr(r,wr,1,0),n+=wr[1],n+=function(r){var n=F(r);return(n=(2146435072&n)>>>20)-1023|0}(r=wr[0]),n<-1074?(o=0,i=r,sr.assign(o,br,1,0),u=br[0],u&=2147483647,f=F(i),z(u|=f&=2147483648,br[1])):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr.assign(r,Ar,1,0),t=Ar[0],t&=2148532223,e*z(t|=n+1023<<20,Ar[1])))}function mr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gr=16777216,jr=5.960464477539063e-8,Nr=mr(20),Ir=mr(20),Or=mr(20),Sr=mr(20);function Er(r,n,t,e,o,i,u,f,a){var c,l,y,p,v,s,b,d,w;for(p=i,w=e[t],d=t,v=0;d>0;v++)l=jr*w|0,Sr[v]=w-gr*l|0,w=e[d-1]+l,d-=1;if(w=_r(w,o),w-=8*B(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Sr[t-1]>>24-o,Sr[t-1]-=v<<24-o,y=Sr[t-1]>>23-o):0===o?y=Sr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<t;v++)d=Sr[v],0===c?0!==d&&(c=1,Sr[v]=16777216-d):Sr[v]=16777215-d;if(o>0)switch(o){case 1:Sr[t-1]&=8388607;break;case 2:Sr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=_r(1,o)))}if(0===w){for(d=0,v=t-1;v>=i;v--)d|=Sr[v];if(0===d){for(s=1;0===Sr[i-s];s++);for(v=t+1;v<=t+s;v++){for(a[f+v]=hr[u+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Er(r,n,t+=s,e,o,i,u,f,a)}}if(0===w)for(t-=1,o-=24;0===Sr[t];)t-=1,o-=24;else(w=_r(w,-o))>=gr?(l=jr*w|0,Sr[t]=w-gr*l|0,o+=24,Sr[t+=1]=l):Sr[t]=0|w;for(l=_r(1,o),v=t;v>=0;v--)e[v]=l*Sr[v],l*=jr;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=Ur[s]*e[v+s];Or[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Or[v];for(n[0]=0===y?l:-l,l=Or[0]-l,v=1;v<=t;v++)l+=Or[v];return n[1]=0===y?l:-l,7&b}function Fr(r,n,t,e){var o,i,u,f,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(u=e-1),l=u+4,a=0;a<=l;a++)Nr[a]=c<0?0:hr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*Nr[u+(a-c)];Ir[a]=o}return Er(r,n,4,Ir,f,4,i,u,Nr)}var Tr=Math.round;function Hr(r,n,t){var e,o,i,u,f;return i=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),u=6077100506506192e-26*e,f=n>>20|0,t[0]=i-u,f-(F(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),t[0]=i-u,f-(F(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),t[0]=i-u)),t[1]=i-t[0]-u,e}var Gr=1.5707963267341256,Pr=6077100506506192e-26,Lr=2*Pr,Vr=3*Pr,Wr=4*Pr,kr=[0,0,0],xr=[0,0];function Mr(r,n){var t,e,o,i,u,f,a;if((o=2147483647&F(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Hr(r,o,n):o<=1073928572?r>0?(a=r-Gr,n[0]=a-Pr,n[1]=a-n[0]-Pr,1):(a=r+Gr,n[0]=a+Pr,n[1]=a-n[0]+Pr,-1):r>0?(a=r-2*Gr,n[0]=a-Lr,n[1]=a-n[0]-Lr,2):(a=r+2*Gr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Hr(r,o,n):r>0?(a=r-3*Gr,n[0]=a-Vr,n[1]=a-n[0]-Vr,3):(a=r+3*Gr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-3):1075388923===o?Hr(r,o,n):r>0?(a=r-4*Gr,n[0]=a-Wr,n[1]=a-n[0]-Wr,4):(a=r+4*Gr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-4);if(o<1094263291)return Hr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return W[0]=r,k[V]}(r),a=z(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)kr[u]=0|a,a=16777216*(a-kr[u]);for(kr[2]=a,i=3;0===kr[i-1];)i-=1;return f=Fr(kr,xr,e,i),r<0?(n[0]=-xr[0],n[1]=-xr[1],-f):(n[0]=xr[0],n[1]=xr[1],f)}var Yr=[0,0];return function(r){return 1-function(r){var n;if(n=F(r),(n&=2147483647)<=1072243195)return n<1044381696?1:T(r,0);if(n>=2146435072)return NaN;switch(3&Mr(r,Yr)){case 0:return T(Yr[0],Yr[1]);case 1:return-G(Yr[0],Yr[1]);case 2:return-T(Yr[0],Yr[1]);default:return G(Yr[0],Yr[1])}}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).versin=n();
//# sourceMappingURL=index.js.map
