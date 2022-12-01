// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,a,u,i,f;if(null==r)return t.call(r);a=r[e],f=e,o=null!=(i=r)&&n.call(i,f);try{r[e]=void 0}catch(n){return t.call(r)}return u=t.call(r),o?r[e]=a:delete r[e],u}:function(r){return t.call(r)},a="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var i,f="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,t,n;if("function"!=typeof u)return!1;try{t=new u(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(a&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?f:function(){throw new Error("not implemented")};var c=i,l="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,t,n;if("function"!=typeof y)return!1;try{t=new y([1,3.14,-3.14,NaN]),n=t,r=(l&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?p:function(){throw new Error("not implemented")};var b=v,s="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var A,_="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,t,n;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),n=t,r=(s&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Uint16Array;var h="function"==typeof Uint16Array?Uint16Array:null;var U,g="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,65536,65537]),n=t,r=(m&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,N={uint16:U,uint8:d};(j=new N.uint16(1))[0]=4660;var I=52===new N.uint8(j.buffer)[0],O=!0===I?1:0,S=new b(1),E=new c(S.buffer);function F(r){return S[0]=r,E[O]}function H(r,t){var n,e,o,a;return o=(a=r*r)*a,e=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(o=1-(n=.5*a))+(1-o-n+(a*e-r*t))}var T=-.16666666666666632;function G(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(T+o*n):r-(o*(.5*t-e*n)-t-e*T)}var P,L,V=!0===I?0:1,W=new b(1),k=new c(W.buffer);!0===I?(P=1,L=0):(P=0,L=1);var M={HIGH:P,LOW:L},x=new b(1),Y=new c(x.buffer),C=M.HIGH,q=M.LOW;function z(r,t){return Y[C]=r,Y[q]=t,x[0]}var B=Math.floor,D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r!=r}function Q(r){return r===D||r===J}var R="function"==typeof Object.defineProperty?Object.defineProperty:null;var X=Object.defineProperty,Z=Object.prototype,$=Z.toString,rr=Z.__defineGetter__,tr=Z.__defineSetter__,nr=Z.__lookupGetter__,er=Z.__lookupSetter__;var or,ar,ur=function(){try{return R({},"x",{}),!0}catch(r){return!1}}()?X:function(r,t,n){var e,o,a,u;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===$.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(nr.call(r,t)||er.call(r,t)?(e=r.__proto__,r.__proto__=Z,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,u="set"in n,o&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&rr&&rr.call(r,t,n.get),u&&tr&&tr.call(r,t,n.set),r};function ir(r,t,n){ur(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===I?(or=1,ar=0):(or=0,ar=1);var fr={HIGH:or,LOW:ar},cr=new b(1),lr=new c(cr.buffer),yr=fr.HIGH,vr=fr.LOW;function pr(r,t,n,e){return cr[0]=r,t[e]=lr[yr],t[e+n]=lr[vr],t}function br(r){return pr(r,[0,0],1,0)}ir(br,"assign",pr);var sr=[0,0];function wr(r,t,n,e){return K(r)||Q(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}ir((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var Ar=[0,0],_r=[0,0];function dr(r,t){var n,e,o,a,u,i;return 0===t||0===r||K(r)||Q(r)?r:(wr(r,Ar,1,0),t+=Ar[1],t+=function(r){var t=F(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Ar[0]),t<-1074?(o=0,a=r,br.assign(o,sr,1,0),u=sr[0],u&=2147483647,i=F(a),z(u|=i&=2147483648,sr[1])):t>1023?r<0?J:D:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,br.assign(r,_r,1,0),n=_r[0],n&=2148532223,e*z(n|=t+1023<<20,_r[1])))}function mr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gr=5.960464477539063e-8,jr=mr(20),Nr=mr(20),Ir=mr(20),Or=mr(20);function Sr(r,t,n,e,o,a,u,i,f){var c,l,y,v,p,b,s,w,A;for(v=a,A=e[n],w=n,p=0;w>0;p++)l=gr*A|0,Or[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=dr(A,o),A-=8*B(.125*A),A-=s=0|A,y=0,o>0?(s+=p=Or[n-1]>>24-o,Or[n-1]-=p<<24-o,y=Or[n-1]>>23-o):0===o?y=Or[n-1]>>23:A>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<n;p++)w=Or[p],0===c?0!==w&&(c=1,Or[p]=16777216-w):Or[p]=16777215-w;if(o>0)switch(o){case 1:Or[n-1]&=8388607;break;case 2:Or[n-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=dr(1,o)))}if(0===A){for(w=0,p=n-1;p>=a;p--)w|=Or[p];if(0===w){for(b=1;0===Or[a-b];b++);for(p=n+1;p<=n+b;p++){for(f[i+p]=hr[u+p],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(p-w)];e[p]=l}return Sr(r,t,n+=b,e,o,a,u,i,f)}}if(0===A)for(n-=1,o-=24;0===Or[n];)n-=1,o-=24;else(A=dr(A,-o))>=16777216?(l=gr*A|0,Or[n]=A-16777216*l|0,o+=24,Or[n+=1]=l):Or[n]=0|A;for(l=dr(1,o),p=n;p>=0;p--)e[p]=l*Or[p],l*=gr;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=Ur[b]*e[p+b];Ir[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Ir[p];for(t[0]=0===y?l:-l,l=Ir[0]-l,p=1;p<=n;p++)l+=Ir[p];return t[1]=0===y?l:-l,7&s}function Er(r,t,n,e){var o,a,u,i,f,c,l;for(4,(a=(n-3)/24|0)<0&&(a=0),i=n-24*(a+1),c=a-(u=e-1),l=u+4,f=0;f<=l;f++)jr[f]=c<0?0:hr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*jr[u+(f-c)];Nr[f]=o}return 4,Sr(r,t,4,Nr,i,4,a,u,jr)}var Fr=Math.round;function Hr(r,t,n){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),u=6077100506506192e-26*e,i=t>>20|0,n[0]=a-u,i-(F(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),n[0]=a-u,i-(F(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),n[0]=a-u)),n[1]=a-n[0]-u,e}var Tr=1.5707963267341256,Gr=6077100506506192e-26,Pr=2*Gr,Lr=4*Gr,Vr=[0,0,0],Wr=[0,0];function kr(r,t){var n,e,o,a,u,i,f;if((o=2147483647&F(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Hr(r,o,t):o<=1073928572?r>0?(f=r-Tr,t[0]=f-Gr,t[1]=f-t[0]-Gr,1):(f=r+Tr,t[0]=f+Gr,t[1]=f-t[0]+Gr,-1):r>0?(f=r-2*Tr,t[0]=f-Pr,t[1]=f-t[0]-Pr,2):(f=r+2*Tr,t[0]=f+Pr,t[1]=f-t[0]+Pr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Hr(r,o,t):r>0?(f=r-3*Tr,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Tr,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Hr(r,o,t):r>0?(f=r-4*Tr,t[0]=f-Lr,t[1]=f-t[0]-Lr,4):(f=r+4*Tr,t[0]=f+Lr,t[1]=f-t[0]+Lr,-4);if(o<1094263291)return Hr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return W[0]=r,k[V]}(r),f=z(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Vr[u]=0|f,f=16777216*(f-Vr[u]);for(Vr[2]=f,a=3;0===Vr[a-1];)a-=1;return i=Er(Vr,Wr,e,a),r<0?(t[0]=-Wr[0],t[1]=-Wr[1],-i):(t[0]=Wr[0],t[1]=Wr[1],i)}var Mr=[0,0];function xr(r){return 1-function(r){var t;if(t=F(r),(t&=2147483647)<=1072243195)return t<1044381696?1:H(r,0);if(t>=2146435072)return NaN;switch(3&kr(r,Mr)){case 0:return H(Mr[0],Mr[1]);case 1:return-G(Mr[0],Mr[1]);case 2:return-H(Mr[0],Mr[1]);default:return G(Mr[0],Mr[1])}}(r)}export{xr as default};
//# sourceMappingURL=mod.js.map
