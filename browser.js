// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,f,u,i,a;if(null==r)return t.call(r);f=r[o],a=o,n=null!=(i=r)&&e.call(i,a);try{r[o]=void 0}catch(n){return t.call(r)}return u=t.call(r),n?r[o]=f:delete r[o],u}:function(r){return t.call(r)},u="function"==typeof Uint32Array,i="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,n,t;if("function"!=typeof i)return!1;try{n=new i(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,y=r,l="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,p="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A,s=c,b="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,d="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,U=A,m="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,65536,65537]),t=n,r=(m&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F={uint16:h,uint8:U};(g=new F.uint16(1))[0]=4660;var S=52===new F.uint8(g.buffer)[0],H=!0===S?1:0,O=new s(1),T=new y(O.buffer);function j(r){return O[0]=r,T[H]}function E(r,n){var t,e,o,f;return o=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(o=1-(t=.5*f))+(1-o-t+(f*e-r*n))}var G=-.16666666666666632;function L(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(G+o*t):r-(o*(.5*n-e*t)-n-e*G)}var W,M,x=!0===S?0:1,P=new s(1),V=new y(P.buffer);!0===S?(W=1,M=0):(W=0,M=1);var Y={HIGH:W,LOW:M},_=new s(1),k=new y(_.buffer),q=Y.HIGH,z=Y.LOW;function B(r,n){return k[q]=r,k[z]=n,_[0]}var C,D,J=Math.floor,K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY;function R(r){return r!=r}function X(r){return r===K||r===Q}!0===S?(C=1,D=0):(C=0,D=1);var Z={HIGH:C,LOW:D},$=new s(1),rr=new y($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return $[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function or(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var fr=[0,0];function ur(r,n){return R(n)||X(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var ir=[0,0],ar=[0,0];function cr(r,n){var t,e,o,f,u;return 0===n||0===r||R(r)||X(r)?r:(function(r,n){1===arguments.length?ur([0,0],r):ur(r,n)}(ir,r),n+=ir[1],n+=function(r){var n=j(r);return(n=(2146435072&n)>>>20)-1023|0}(r=ir[0]),n<-1074?(o=r,or(fr,0),f=fr[0],f&=2147483647,u=j(o),B(f|=u&=2147483648,fr[1])):n>1023?r<0?Q:K:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,or(ar,r),t=ar[0],t&=2148532223,e*B(t|=n+1023<<20,ar[1])))}function yr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var lr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pr=16777216,Ar=5.960464477539063e-8,sr=yr(20),br=yr(20),wr=yr(20),dr=yr(20);function hr(r,n,t,e,o,f,u,i,a){var c,y,l,v,p,A,s,b,w;for(v=f,w=e[t],b=t,p=0;b>0;p++)y=Ar*w|0,dr[p]=w-pr*y|0,w=e[b-1]+y,b-=1;if(w=cr(w,o),w-=8*J(.125*w),w-=s=0|w,l=0,o>0?(s+=p=dr[t-1]>>24-o,dr[t-1]-=p<<24-o,l=dr[t-1]>>23-o):0===o?l=dr[t-1]>>23:w>=.5&&(l=2),l>0){for(s+=1,c=0,p=0;p<t;p++)b=dr[p],0===c?0!==b&&(c=1,dr[p]=16777216-b):dr[p]=16777215-b;if(o>0)switch(o){case 1:dr[t-1]&=8388607;break;case 2:dr[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=cr(1,o)))}if(0===w){for(b=0,p=t-1;p>=f;p--)b|=dr[p];if(0===b){for(A=1;0===dr[f-A];A++);for(p=t+1;p<=t+A;p++){for(a[i+p]=lr[u+p],y=0,b=0;b<=i;b++)y+=r[b]*a[i+(p-b)];e[p]=y}return hr(r,n,t+=A,e,o,f,u,i,a)}}if(0===w)for(t-=1,o-=24;0===dr[t];)t-=1,o-=24;else(w=cr(w,-o))>=pr?(y=Ar*w|0,dr[t]=w-pr*y|0,o+=24,dr[t+=1]=y):dr[t]=0|w;for(y=cr(1,o),p=t;p>=0;p--)e[p]=y*dr[p],y*=Ar;for(p=t;p>=0;p--){for(y=0,A=0;A<=v&&A<=t-p;A++)y+=vr[A]*e[p+A];wr[t-p]=y}for(y=0,p=t;p>=0;p--)y+=wr[p];for(n[0]=0===l?y:-y,y=wr[0]-y,p=1;p<=t;p++)y+=wr[p];return n[1]=0===l?y:-y,7&s}function Ur(r,n,t,e){var o,f,u,i,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),c=f-(u=e-1),y=u+4,a=0;a<=y;a++)sr[a]=c<0?0:lr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*sr[u+(a-c)];br[a]=o}return hr(r,n,4,br,i,4,f,u,sr)}var mr=Math.round;function Nr(r,n,t){var e,o,f,u,i;return f=r-1.5707963267341256*(e=mr(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=f-u,i-(j(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(j(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var Ir=1.5707963267341256,gr=6077100506506192e-26,Fr=2*gr,Sr=3*gr,Hr=4*gr,Or=[0,0,0],Tr=[0,0];function jr(r,n){var t,e,o,f,u,i,a;if((o=2147483647&j(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Nr(r,o,n):o<=1073928572?r>0?(a=r-Ir,n[0]=a-gr,n[1]=a-n[0]-gr,1):(a=r+Ir,n[0]=a+gr,n[1]=a-n[0]+gr,-1):r>0?(a=r-2*Ir,n[0]=a-Fr,n[1]=a-n[0]-Fr,2):(a=r+2*Ir,n[0]=a+Fr,n[1]=a-n[0]+Fr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Nr(r,o,n):r>0?(a=r-3*Ir,n[0]=a-Sr,n[1]=a-n[0]-Sr,3):(a=r+3*Ir,n[0]=a+Sr,n[1]=a-n[0]+Sr,-3):1075388923===o?Nr(r,o,n):r>0?(a=r-4*Ir,n[0]=a-Hr,n[1]=a-n[0]-Hr,4):(a=r+4*Ir,n[0]=a+Hr,n[1]=a-n[0]+Hr,-4);if(o<1094263291)return Nr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return P[0]=r,V[x]}(r),a=B(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Or[u]=0|a,a=16777216*(a-Or[u]);for(Or[2]=a,f=3;0===Or[f-1];)f-=1;return i=Ur(Or,Tr,e,f),r<0?(n[0]=-Tr[0],n[1]=-Tr[1],-i):(n[0]=Tr[0],n[1]=Tr[1],i)}var Er=[0,0];return function(r){return 1-function(r){var n;if(n=j(r),(n&=2147483647)<=1072243195)return n<1044381696?1:E(r,0);if(n>=2146435072)return NaN;switch(3&jr(r,Er)){case 0:return E(Er[0],Er[1]);case 1:return-L(Er[0],Er[1]);case 2:return-E(Er[0],Er[1]);default:return L(Er[0],Er[1])}}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).versin=n();
//# sourceMappingURL=browser.js.map
