(()=>{var ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wd=0,hh=1,qd=2;var xs=1,Xd=2,hr=3,Qn=0,Xt=1,wn=2,Pt=0,ur=1,uh=2,dh=3,fh=4,ec=5;var Tn=100,jd=101,Kd=102,Yd=103,Jd=104,bs=200,$d=201,Zd=202,Qd=203,ph=204,mh=205,pa=206,ef=207,ma=208,tf=209,nf=210,sf=211,rf=212,af=213,of=214,Ro=0,Co=1,Po=2,Xs=3,Io=4,Do=5,Lo=6,Fo=7,tc=0,cf=1,lf=2,zn=0,ga=1,xa=2,ba=3,_s=4,_a=5,va=6,zi=7,eh="attached",hf="detached",gh=300,Bi=301,vs=302,nc=303,ic=304,ya=306,$t=1e3,ln=1001,js=1002,Mt=1003,sc=1004;var ys=1005;var gt=1006,dr=1007;var En=1008;var Zt=1009,xh=1010,bh=1011,fr=1012,rc=1013,Bn=1014,Qt=1015,Tt=1016,ac=1017,oc=1018,Gi=1020,_h=35902,vh=35899,yh=1021,Mh=1022,rn=1023,jn=1026,ei=1027,cc=1028,lc=1029,Vi=1030,hc=1031;var uc=1033,Ma=33776,Sa=33777,wa=33778,Ta=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,xc=37492,bc=37496,_c=37488,vc=37489,Ea=37490,yc=37491,Mc=37808,Sc=37809,wc=37810,Tc=37811,Ec=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Dc=37818,Lc=37819,Fc=37820,Nc=37821,Uc=36492,kc=36494,Oc=36495,zc=36283,Bc=36284,Aa=36285,Gc=36286,uf=2200,df=2201,ff=2202,as=2300,os=2301,To=2302,th=2303,is=2400,ss=2401,Br=2402,Vc=2500,pf=2501,Sh=0,Ra=1,pr=2,mf=3200;var mr=0,gf=1,Gn="",St="srgb",qt="srgb-linear",Gr="linear",rt="srgb";var Eo=7680;var xf=519,bf=512,_f=513,vf=514,Hc=515,yf=516,Mf=517,Wc=518,Sf=519,wh=35044;var Th="300 es",Nn=2e3,Ks=2001;function Mm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wf(){let i=Ys("canvas");return i.style.display="block",i}var rd={},Js=null;function Vr(...i){let e="THREE."+i.shift();Js?Js("log",e,...i):console.log(e,...i)}function Tf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=Tf(i);let e="THREE."+i.shift();if(Js)Js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Tf(i);let e="THREE."+i.shift();if(Js)Js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rs(...i){let e=i.join(" ");e in rd||(rd[e]=!0,Ue(...i))}function Ef(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Af={[Ro]:Co,[Po]:Lo,[Io]:Fo,[Xs]:Do,[Co]:Ro,[Lo]:Po,[Fo]:Io,[Do]:Xs},vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,Or=Math.PI/180,cs=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Eh(i,e){return(i%e+e)%e}function wm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tm(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function Em(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Am(i,e=1){return e-Math.abs(Eh(i,e*2)-e)}function Rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Im(i,e){return i+Math.random()*(e-i)}function Dm(i){return i*(.5-Math.random())}function Lm(i){i!==void 0&&(ad=i);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fm(i){return i*Or}function Nm(i){return i*cs}function Um(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*b,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*b,o*l);break;case"ZYZ":i.set(c*b,c*p,o*h,o*l);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ca={DEG2RAD:Or,RAD2DEG:cs,generateUUID:Un,clamp:Je,euclideanModulo:Eh,mapLinear:wm,inverseLerp:Tm,lerp:zr,damp:Em,pingpong:Am,smoothstep:Rm,smootherstep:Cm,randInt:Pm,randFloat:Im,randFloatSpread:Dm,seededRandom:Lm,degToRad:Fm,radToDeg:Nm,isPowerOfTwo:Um,ceilPowerOfTwo:km,floorPowerOfTwo:Om,setQuaternionFromProperEuler:zm,normalize:ht,denormalize:Fn},Ih=class Ih{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ih.prototype.isVector2=!0;var Re=Ih,Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],b=r[a+2],g=r[a+3];if(d!==g||c!==u||l!==p||h!==b){let m=c*u+l*p+h*b+d*g;m<0&&(u=-u,p=-p,b=-b,g=-g,m=-m);let f=1-o;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);f=Math.sin(f*M)/T,o=Math.sin(o*M)/T,c=c*f+u*o,l=l*f+p*o,h=h*f+b*o,d=d*f+g*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+b*o,d=d*f+g*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+h*d+c*p-l*u,e[t+1]=c*b+h*u+l*d-o*p,e[t+2]=l*b+h*p+o*u-c*d,e[t+3]=h*b-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),b=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*b,this._y=l*p*d-u*h*b,this._z=l*h*b+u*p*d,this._w=l*h*d-u*p*b;break;case"YXZ":this._x=u*h*d+l*p*b,this._y=l*p*d-u*h*b,this._z=l*h*b-u*p*d,this._w=l*h*d+u*p*b;break;case"ZXY":this._x=u*h*d-l*p*b,this._y=l*p*d+u*h*b,this._z=l*h*b+u*p*d,this._w=l*h*d-u*p*b;break;case"ZYX":this._x=u*h*d-l*p*b,this._y=l*p*d+u*h*b,this._z=l*h*b-u*p*d,this._w=l*h*d+u*p*b;break;case"YZX":this._x=u*h*d+l*p*b,this._y=l*p*d+u*h*b,this._z=l*h*b-u*p*d,this._w=l*h*d-u*p*b;break;case"XZY":this._x=u*h*d-l*p*b,this._y=l*p*d-u*h*b,this._z=l*h*b+u*p*d,this._w=l*h*d+u*p*b;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dh=class Dh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;var G=Dh,Pl=new G,od=new Nt,Lh=class Lh{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],b=n[8],g=s[0],m=s[3],f=s[6],M=s[1],T=s[4],x=s[7],v=s[2],S=s[5],A=s[8];return r[0]=a*g+o*M+c*v,r[3]=a*m+o*T+c*S,r[6]=a*f+o*x+c*A,r[1]=l*g+h*M+d*v,r[4]=l*m+h*T+d*S,r[7]=l*f+h*x+d*A,r[2]=u*g+p*M+b*v,r[5]=u*m+p*T+b*S,r[8]=u*f+p*x+b*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,b=t*d+n*u+s*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/b;return e[0]=d*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;var qe=Lh,Il=new qe,cd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){let i={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qt]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:cd,fromXYZ:ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:cd,fromXYZ:ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var Ke=Bm();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,No=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Ys("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gm=0,$s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dl(s[a].image)):r.push(Dl(s[a]))}else r=Dl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Vm=0,Ll=new G,Vt=class i extends vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ln,s=ln,r=gt,a=En,o=rn,c=Zt,l=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Un(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=gh;Vt.DEFAULT_ANISOTROPY=1;var Fh=class Fh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],b=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(b+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,x=(p+1)/2,v=(f+1)/2,S=(h+u)/4,A=(d+g)/4,_=(b+m)/4;return T>x&&T>v?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=S/n,r=A/n):x>v?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=_/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-b)*(m-b)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-b)/M,this.y=(d-g)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;var ut=Fh,Uo=class extends vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Vt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rt=class extends Uo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ko=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qo=class Qo{constructor(e,t,n,s,r,a,o,c,l,h,d,u,p,b,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,p,b,g,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,p,b,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=b,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,b=o*h,g=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+b*l,t[5]=u-g*l,t[9]=-o*c,t[2]=g-u*l,t[6]=b+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,b=l*h,g=l*d;t[0]=u+g*o,t[4]=b*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-b,t[6]=g+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,b=l*h,g=l*d;t[0]=u-g*o,t[4]=-a*d,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,b=o*h,g=o*d;t[0]=c*h,t[4]=b*l-p,t[8]=u*l+g,t[1]=c*d,t[5]=g*l+u,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,b=o*c,g=o*l;t[0]=c*h,t[4]=g-u*d,t[8]=b*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+b,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*c,p=a*l,b=o*c,g=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+g,t[5]=a*h,t[9]=p*d-b,t[2]=b*d-p,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Wm)}lookAt(e,t,n){let s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ai.crossVectors(n,fn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ai.crossVectors(n,fn)),Ai.normalize(),Qa.crossVectors(fn,Ai),s[0]=Ai.x,s[4]=Qa.x,s[8]=fn.x,s[1]=Ai.y,s[5]=Qa.y,s[9]=fn.y,s[2]=Ai.z,s[6]=Qa.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],b=n[2],g=n[6],m=n[10],f=n[14],M=n[3],T=n[7],x=n[11],v=n[15],S=s[0],A=s[4],_=s[8],E=s[12],C=s[1],I=s[5],L=s[9],O=s[13],F=s[2],H=s[6],q=s[10],ne=s[14],ce=s[3],Y=s[7],ie=s[11],ae=s[15];return r[0]=a*S+o*C+c*F+l*ce,r[4]=a*A+o*I+c*H+l*Y,r[8]=a*_+o*L+c*q+l*ie,r[12]=a*E+o*O+c*ne+l*ae,r[1]=h*S+d*C+u*F+p*ce,r[5]=h*A+d*I+u*H+p*Y,r[9]=h*_+d*L+u*q+p*ie,r[13]=h*E+d*O+u*ne+p*ae,r[2]=b*S+g*C+m*F+f*ce,r[6]=b*A+g*I+m*H+f*Y,r[10]=b*_+g*L+m*q+f*ie,r[14]=b*E+g*O+m*ne+f*ae,r[3]=M*S+T*C+x*F+v*ce,r[7]=M*A+T*I+x*H+v*Y,r[11]=M*_+T*L+x*q+v*ie,r[15]=M*E+T*O+x*ne+v*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],b=e[3],g=e[7],m=e[11],f=e[15],M=c*p-l*u,T=o*p-l*d,x=o*u-c*d,v=a*p-l*h,S=a*u-c*h,A=a*d-o*h;return t*(g*M-m*T+f*x)-n*(b*M-m*v+f*S)+s*(b*T-g*v+f*A)-r*(b*x-g*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],b=e[12],g=e[13],m=e[14],f=e[15],M=t*o-n*a,T=t*c-s*a,x=t*l-r*a,v=n*c-s*o,S=n*l-r*o,A=s*l-r*c,_=h*g-d*b,E=h*m-u*b,C=h*f-p*b,I=d*m-u*g,L=d*f-p*g,O=u*f-p*m,F=M*O-T*L+x*I+v*C-S*E+A*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/F;return e[0]=(o*O-c*L+l*I)*H,e[1]=(s*L-n*O-r*I)*H,e[2]=(g*A-m*S+f*v)*H,e[3]=(u*S-d*A-p*v)*H,e[4]=(c*C-a*O-l*E)*H,e[5]=(t*O-s*C+r*E)*H,e[6]=(m*x-b*A-f*T)*H,e[7]=(h*A-u*x+p*T)*H,e[8]=(a*L-o*C+l*_)*H,e[9]=(n*C-t*L-r*_)*H,e[10]=(b*S-g*x+f*M)*H,e[11]=(d*x-h*S-p*M)*H,e[12]=(o*E-a*I-c*_)*H,e[13]=(t*I-n*E+s*_)*H,e[14]=(g*T-b*v-m*M)*H,e[15]=(h*v-d*T+u*M)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,b=r*d,g=a*h,m=a*d,f=o*d,M=c*l,T=c*h,x=c*d,v=n.x,S=n.y,A=n.z;return s[0]=(1-(g+f))*v,s[1]=(p+x)*v,s[2]=(b-T)*v,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(u+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(b+T)*A,s[9]=(m-M)*A,s[10]=(1-(u+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ds.set(s[0],s[1],s[2]).length(),o=Ds.set(s[4],s[5],s[6]).length(),c=Ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let l=1/a,h=1/o,d=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Nn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),b,g;if(c)b=r/(a-r),g=a*r/(a-r);else if(o===Nn)b=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ks)b=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=b,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),b,g;if(c)b=1/(a-r),g=a/(a-r);else if(o===Nn)b=-2/(a-r),g=-(a+r)/(a-r);else if(o===Ks)b=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=b,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Qo.prototype.isMatrix4=!0;var He=Qo,Ds=new G,In=new He,Hm=new G(0,0,0),Wm=new G(1,1,1),Ai=new G,Qa=new G,fn=new G,hd=new He,ud=new Nt,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qm=0,dd=new G,Ls=new Nt,ci=new He,eo=new G,Pr=new G,Xm=new G,jm=new Nt,fd=new G(1,0,0),pd=new G(0,1,0),md=new G(0,0,1),gd={type:"added"},Km={type:"removed"},Fs={type:"childadded",child:null},Fl={type:"childremoved",child:null},yt=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new Kn,n=new Nt,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Pr,eo,this.up):ci.lookAt(eo,Pr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ci),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Km),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.DEFAULT_UP=new G(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ym={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,b=.005;l.inputState.pinching&&u>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},to={h:0,s:0,l:0};function Nl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Eh(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Nl(a,r,e+1/3),this.g=Nl(a,r,e),this.b=Nl(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ke.workingToColorSpace(Jt.copy(this),e),Math.round(Je(Jt.r*255,0,255))*65536+Math.round(Je(Jt.g*255,0,255))*256+Math.round(Je(Jt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=St){Ke.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(to);let n=zr(Ri.h,to.h,t),s=zr(Ri.s,to.s,t),r=zr(Ri.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new ke;ke.NAMES=Rf;var ls=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new G,li=new G,Ul=new G,hi=new G,Ns=new G,Us=new G,xd=new G,kl=new G,Ol=new G,zl=new G,Bl=new ut,Gl=new ut,Vl=new ut,Li=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),li.subVectors(n,t),Ul.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(li),c=Dn.dot(Ul),l=li.dot(li),h=li.dot(Ul),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,b=(a*h-o*c)*u;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(a,hi.y),c.addScaledVector(o,hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bl.setScalar(0),Gl.setScalar(0),Vl.setScalar(0),Bl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Vl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bl,r.x),a.addScaledVector(Gl,r.y),a.addScaledVector(Vl,r.z),a}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),li.subVectors(e,t),Dn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Dn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,n),Us.subVectors(r,n),kl.subVectors(e,n);let c=Ns.dot(kl),l=Us.dot(kl);if(c<=0&&l<=0)return t.copy(n);Ol.subVectors(e,s);let h=Ns.dot(Ol),d=Us.dot(Ol);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ns,a);zl.subVectors(e,r);let p=Ns.dot(zl),b=Us.dot(zl);if(b>=0&&p<=b)return t.copy(r);let g=p*l-c*b;if(g<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(Us,o);let m=h*b-p*d;if(m<=0&&d-h>=0&&p-b>=0)return xd.subVectors(r,s),o=(d-h)/(d-h+(p-b)),t.copy(s).addScaledVector(xd,o);let f=1/(m+g+u);return a=g*f,o=u*f,t.copy(n).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),io.subVectors(this.max,Ir),ks.subVectors(e.a,Ir),Os.subVectors(e.b,Ir),zs.subVectors(e.c,Ir),Ci.subVectors(Os,ks),Pi.subVectors(zs,Os),Qi.subVectors(ks,zs);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!Hl(t,ks,Os,zs,io)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,ks,Os,zs,io))?!1:(so.crossVectors(Ci,Pi),t=[so.x,so.y,so.z],Hl(t,ks,Os,zs,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new G,new G,new G,new G,new G,new G,new G,new G],Ln=new G,no=new sn,ks=new G,Os=new G,zs=new G,Ci=new G,Pi=new G,Qi=new G,Ir=new G,io=new G,so=new G,es=new G;function Hl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){es.fromArray(i,r);let o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var pi=Jm();function Jm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function $m(i){Math.abs(i)>65504&&Ue("DataUtils.toHalfFloat(): Value out of range."),i=Je(i,-65504,65504),pi.floatView[0]=i;let e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function Zm(i){let e=i>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(i&1023)]+pi.exponentTable[e],pi.floatView[0]}var Fi=class{static toHalfFloat(e){return $m(e)}static fromHalfFloat(e){return Zm(e)}},Lt=new G,ro=new Re,Qm=0,At=class extends vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wr=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},e0=new sn,Dr=new G,Wl=new G,hn=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):e0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Wl)),this.expandByPoint(Dr.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},t0=0,_n=new He,ql=new yt,Bs=new G,pn=new sn,Lr=new sn,Gt=new G,Ct=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mm(e)?qr:Wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(pn.min,Lr.min),pn.expandByPoint(Gt),Gt.addVectors(pn.max,Lr.max),pn.expandByPoint(Gt)):(pn.expandByPoint(Lr.min),pn.expandByPoint(Lr.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Gt.fromBufferAttribute(o,l),c&&(Bs.fromBufferAttribute(e,l),Gt.add(Bs)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new G,c[_]=new G;let l=new G,h=new G,d=new G,u=new Re,p=new Re,b=new Re,g=new G,m=new G;function f(_,E,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,E),b.fromBufferAttribute(r,C),h.sub(l),d.sub(l),p.sub(u),b.sub(u);let I=1/(p.x*b.y-b.x*p.y);isFinite(I)&&(g.copy(h).multiplyScalar(b.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-b.x).multiplyScalar(I),o[_].add(g),o[E].add(g),o[C].add(g),c[_].add(m),c[E].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let C=M[_],I=C.start,L=C.count;for(let O=I,F=I+L;O<F;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let T=new G,x=new G,v=new G,S=new G;function A(_){v.fromBufferAttribute(s,_),S.copy(v);let E=o[_];T.copy(E),T.sub(v.multiplyScalar(v.dot(E))).normalize(),x.crossVectors(S,E);let I=x.dot(c[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,I)}for(let _=0,E=M.length;_<E;++_){let C=M[_],I=C.start,L=C.count;for(let O=I,F=I+L;O<F;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,h=new G,d=new G;if(e)for(let u=0,p=e.count;u<p;u+=3){let b=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,b=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)u[b++]=l[p++]}return new At(u,h,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new G,tr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xl=new G,n0=new G,i0=new qe,mn=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xl.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||i0.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},s0=0,Ut=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=ur,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new G,jl=new G,ao=new G,oo=new G,Yn=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jl.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),oo.copy(this.origin).sub(jl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ao),o=oo.dot(this.direction),c=-oo.dot(ao),l=oo.lengthSq(),h=Math.abs(1-a*a),d,u,p,b;if(h>0)if(d=a*c-o,u=a*o-c,b=r*h,d>=0)if(u>=-b)if(u<=b){let g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-b?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=b?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jl).addScaledVector(ao,u),p}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,b=t.x-a.x,g=t.y-a.y,m=t.z-a.z,f=n.x-a.x,M=n.y-a.y,T=n.z-a.z,x=Math.abs(c),v=Math.abs(l),S=Math.abs(h),A,_,E,C,I,L,O,F,H,q,ne,ce;if(x>=v&&x>=S?(E=c,L=d,H=b,ce=f,c>=0?(A=l,_=h,C=u,I=p,O=g,F=m,q=M,ne=T):(A=h,_=l,C=p,I=u,O=m,F=g,q=T,ne=M)):v>=S?(E=l,L=u,H=g,ce=M,l>=0?(A=h,_=c,C=p,I=d,O=m,F=b,q=T,ne=f):(A=c,_=h,C=d,I=p,O=b,F=m,q=f,ne=T)):(E=h,L=p,H=m,ce=T,h>=0?(A=c,_=l,C=d,I=u,O=b,F=g,q=f,ne=M):(A=l,_=c,C=u,I=d,O=g,F=b,q=M,ne=f)),E===0)return null;let Y=A/E,ie=_/E,ae=1/E,ge=C-Y*L,_e=I-ie*L,We=O-Y*H,De=F-ie*H,Oe=q-Y*ce,$=ne-ie*ce,re=Oe*De-$*We,me=ge*$-_e*Oe,Ce=We*_e-De*ge;if(s){if(re<0||me<0||Ce<0)return null}else if((re<0||me<0||Ce<0)&&(re>0||me>0||Ce>0))return null;let xe=re+me+Ce;if(xe===0)return null;let Be=ae*(re*L+me*H+Ce*ce);return(xe>0?Be<0:Be>0)?null:this.at(Be/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends Ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bd=new He,ts=new Yn,co=new hn,_d=new G,lo=new G,ho=new G,uo=new G,Kl=new G,fo=new G,vd=new G,po=new G,lt=class extends yt{constructor(e=new Ct,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Kl.fromBufferAttribute(d,e),a?fo.addScaledVector(Kl,h):fo.addScaledVector(Kl.sub(t),h))}t.add(fo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(co.containsPoint(ts.origin)===!1&&(ts.intersectSphere(co,_d)===null||ts.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(bd.copy(r).invert(),ts.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,g=u.length;b<g;b++){let m=u[b],f=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,v=T;x<v;x+=3){let S=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);s=mo(this,f,e,n,l,h,d,S,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){let M=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);s=mo(this,a,e,n,l,h,d,M,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,g=u.length;b<g;b++){let m=u[b],f=a[m.materialIndex],M=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,v=T;x<v;x+=3){let S=x,A=x+1,_=x+2;s=mo(this,f,e,n,l,h,d,S,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){let M=m,T=m+1,x=m+2;s=mo(this,a,e,n,l,h,d,M,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function r0(i,e,t,n,s,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Qn,o),c===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(po);return l<t.near||l>t.far?null:{distance:l,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lo),i.getVertexPosition(c,ho),i.getVertexPosition(l,uo);let h=r0(i,e,t,n,lo,ho,uo,vd);if(h){let d=new G;Li.getBarycoord(vd,lo,ho,uo,d),s&&(h.uv=Li.getInterpolatedAttribute(s,o,c,l,d,new Re)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,c,l,d,new Re)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,c,l,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new G,materialIndex:0};Li.getNormal(lo,ho,uo,u.normal),h.face=u,h.barycoord=d}return h}var Fr=new ut,yd=new ut,Md=new ut,a0=new ut,Sd=new He,go=new G,Yl=new hn,wd=new He,Jl=new Yn,Xr=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,go),this.boundingSphere.expandByPoint(go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yl.copy(this.boundingSphere),Yl.applyMatrix4(s),e.ray.intersectsSphere(Yl)!==!1&&(wd.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(wd),!(this.boundingBox!==null&&Jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yd.fromBufferAttribute(s.attributes.skinIndex,e),Md.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Fr.copy(t),t.set(0,0,0,0)):(Fr.set(...t,1),t.set(0,0,0)),Fr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Md.getComponent(r);if(a!==0){let o=yd.getComponent(r);Sd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(a0.copy(Fr).applyMatrix4(Sd),a)}}return t.isVector4&&(t.w=Fr.w),t.applyMatrix4(this.bindMatrixInverse)}},nr=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},yn=class extends Vt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Mt,h=Mt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Td=new He,o0=new He,jr=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:o0;Td.multiplyMatrices(o,t[r]),Td.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new yn(t,e,e,rn,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ue("Skeleton: No bone found with UUID:",r),a=new nr),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},gi=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new He,Ed=new He,xo=[],Ad=new sn,c0=new He,Nr=new lt,Ur=new hn,hs=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ad.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ur.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Ed.multiplyMatrices(n,Gs),Nr.matrixWorld=Ed,Nr.raycast(e,xo);for(let a=0,o=xo.length;a<o;a++){let c=xo[a];c.instanceId=r,c.object=this,t.push(c)}xo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yn(new Float32Array(s*this.count),s,this.count,cc,Qt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new hn,l0=new Re(.5,.5),bo=new G,ir=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],b=r[8],g=r[9],m=r[10],f=r[11],M=r[12],T=r[13],x=r[14],v=r[15];if(s[0].setComponents(l-a,p-h,f-b,v-M).normalize(),s[1].setComponents(l+a,p+h,f+b,v+M).normalize(),s[2].setComponents(l+o,p+d,f+g,v+T).normalize(),s[3].setComponents(l-o,p-d,f-g,v-T).normalize(),n)s[4].setComponents(c,u,m,x).normalize(),s[5].setComponents(l-c,p-u,f-m,v-x).normalize();else if(s[4].setComponents(l-c,p-u,f-m,v-x).normalize(),t===Nn)s[5].setComponents(l+c,p+u,f+m,v+x).normalize();else if(t===Ks)s[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=l0.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sr=class extends Ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oo=new G,zo=new G,Rd=new He,kr=new Yn,_o=new hn,$l=new G,Cd=new G,us=class extends yt{constructor(e=new Ct,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oo.fromBufferAttribute(t,s-1),zo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oo.distanceTo(zo);e.setAttribute("lineDistance",new xt(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Rd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=l){let f=h.getX(g),M=h.getX(g+1),T=vo(this,e,kr,c,f,M,g);T&&t.push(T)}if(this.isLineLoop){let g=h.getX(b-1),m=h.getX(p),f=vo(this,e,kr,c,g,m,b-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),b=Math.min(u.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=l){let f=vo(this,e,kr,c,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){let g=vo(this,e,kr,c,b-1,p,b-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Oo.fromBufferAttribute(o,s),zo.fromBufferAttribute(o,r),t.distanceSqToSegment(Oo,zo,$l,Cd)>n)return;$l.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo($l);if(!(l<e.near||l>e.far))return{distance:l,point:Cd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Pd=new G,Id=new G,Kr=class extends us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pd.fromBufferAttribute(t,s),Id.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pd.distanceTo(Id);e.setAttribute("lineDistance",new xt(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yr=class extends us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rr=class extends Ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dd=new He,nh=new Yn,yo=new hn,Mo=new G,Jr=class extends yt{constructor(e=new Ct,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Dd.copy(s).invert(),nh.copy(e.ray).applyMatrix4(Dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let b=u,g=p;b<g;b++){let m=l.getX(b);Mo.fromBufferAttribute(d,m),Ld(Mo,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let b=u,g=p;b<g;b++)Mo.fromBufferAttribute(d,b),Ld(Mo,b,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ld(i,e,t,n,s,r,a){let o=nh.distanceSqToPoint(i);if(o<t){let c=new G;nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $r=class extends Vt{constructor(e=[],t=Bi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Jn=class extends Vt{constructor(e,t,n=Bn,s,r,a,o=Mt,c=Mt,l,h=jn,d=1){if(h!==jn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bo=class extends Jn{constructor(e,t=Bn,n=Bi,s,r,a=Mt,o=Mt,c,l=jn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mn=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function b(g,m,f,M,T,x,v,S,A,_,E){let C=x/A,I=v/_,L=x/2,O=v/2,F=S/2,H=A+1,q=_+1,ne=0,ce=0,Y=new G;for(let ie=0;ie<q;ie++){let ae=ie*I-O;for(let ge=0;ge<H;ge++){let _e=ge*C-L;Y[g]=_e*M,Y[m]=ae*T,Y[f]=F,l.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ge/A),d.push(1-ie/_),ne+=1}}for(let ie=0;ie<_;ie++)for(let ae=0;ae<A;ae++){let ge=u+ae+H*ie,_e=u+ae+H*(ie+1),We=u+(ae+1)+H*(ie+1),De=u+(ae+1)+H*ie;c.push(ge,_e,De),c.push(_e,We,De),ce+=6}o.addGroup(p,ce,E),p+=ce,u+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Qr=class i extends Ct{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,b=n*2+r,g=s+1,m=new G,f=new G;for(let M=0;M<=b;M++){let T=0,x=0,v=0,S=0;if(M<=n){let E=M/n,C=E*Math.PI/2;x=-h-e*Math.cos(C),v=e*Math.sin(C),S=-e*Math.cos(C),T=E*d}else if(M<=n+r){let E=(M-n)/r;x=-h+E*t,v=e,S=0,T=d+E*u}else{let E=(M-n-r)/n,C=E*Math.PI/2;x=h+e*Math.sin(C),v=e*Math.cos(C),S=e*Math.sin(C),T=d+u+E*d}let A=Math.max(0,Math.min(1,T/p)),_=0;M===0?_=.5/s:M===b&&(_=-.5/s);for(let E=0;E<=s;E++){let C=E/s,I=C*Math.PI*2,L=Math.sin(I),O=Math.cos(I);f.x=-v*O,f.y=x,f.z=v*L,o.push(f.x,f.y,f.z),m.set(-v*O,S,v*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+_,A)}if(M>0){let E=(M-1)*g;for(let C=0;C<s;C++){let I=E+C,L=E+C+1,O=M*g+C,F=M*g+C+1;a.push(I,L,O),a.push(L,F,O)}}}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ea=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],b=0,g=[],m=n/2,f=0;M(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(p,2));function M(){let x=new G,v=new G,S=0,A=(t-e)/n;for(let _=0;_<=r;_++){let E=[],C=_/r,I=C*(t-e)+e;for(let L=0;L<=s;L++){let O=L/s,F=O*c+o,H=Math.sin(F),q=Math.cos(F);v.x=I*H,v.y=-C*n+m,v.z=I*q,d.push(v.x,v.y,v.z),x.set(H,A,q).normalize(),u.push(x.x,x.y,x.z),p.push(O,1-C),E.push(b++)}g.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let C=g[E][_],I=g[E+1][_],L=g[E+1][_+1],O=g[E][_+1];(e>0||E!==0)&&(h.push(C,I,O),S+=3),(t>0||E!==r-1)&&(h.push(I,L,O),S+=3)}l.addGroup(f,S,0),f+=S}function T(x){let v=b,S=new Re,A=new G,_=0,E=x===!0?e:t,C=x===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),b++;let I=b;for(let L=0;L<=s;L++){let F=L/s*c+o,H=Math.cos(F),q=Math.sin(F);A.x=E*q,A.y=m*C,A.z=E*H,d.push(A.x,A.y,A.z),u.push(0,C,0),S.x=H*.5+.5,S.y=q*.5*C+.5,p.push(S.x,S.y),b++}for(let L=0;L<s;L++){let O=v+L,F=I+L;x===!0?h.push(F,F+1,O):h.push(F+1,F,O),_+=3}l.addGroup(f,_,x===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ds=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,p=[],b=[],g=[],m=[];for(let f=0;f<h;f++){let M=f*u-a;for(let T=0;T<l;T++){let x=T*d-r;b.push(x,-M,0),g.push(0,0,1),m.push(T/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let T=M+l*f,x=M+l*(f+1),v=M+1+l*(f+1),S=M+1+l*f;p.push(T,x,S),p.push(x,v,S)}this.setIndex(p),this.setAttribute("position",new xt(b,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ar=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new G,u=new G,p=[],b=[],g=[],m=[];for(let f=0;f<=n;f++){let M=[],T=f/n,x=a+T*o,v=e*Math.cos(x),S=Math.sqrt(e*e-v*v),A=0;f===0&&a===0?A=.5/t:f===n&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let E=_/t,C=s+E*r;d.x=-S*Math.cos(C),d.y=v,d.z=S*Math.sin(C),b.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(E+A,1-T),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){let T=h[f][M+1],x=h[f][M],v=h[f+1][M],S=h[f+1][M+1];(f!==0||a>0)&&p.push(T,x,S),(f!==n-1||c<Math.PI)&&p.push(x,v,S)}this.setIndex(p),this.setAttribute("position",new xt(b,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ta=class extends Ut{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fd(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=Ms(i[t]);for(let s in n)e[s]=n[s]}return e}function Fd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function h0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var An={clone:Ms,merge:en},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends Ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},or=class extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends Ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kt=class extends gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var na=class extends Ut{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ia=class extends Ut{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Go=class extends Ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vo=class extends Ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Di(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ao(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function f0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Nd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function p0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var $n=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ho=class extends $n{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ss:r=e,o=2*t-n;break;case Br:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ss:a=e,c=2*n-t;break;case Br:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,b=(n-t)/(s-t),g=b*b,m=g*b,f=-u*m+2*u*g-u*b,M=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*b+1,T=(-1-p)*m+(1.5+p)*g+.5*b,x=p*m-p*g;for(let v=0;v!==o;++v)r[v]=f*a[h+v]+M*a[l+v]+T*a[c+v]+x*a[d+v];return r}},sa=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Wo=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends $n{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let b=(n-t)/(s-t),g=1-b;for(let m=0;m!==o;++m)r[m]=a[l+m]*g+a[c+m]*b;return r}let u=o*2,p=e-1;for(let b=0;b!==o;++b){let g=a[l+b],m=a[c+b],f=p*u+b*2,M=d[f],T=d[f+1],x=e*u+b*2,v=h[x],S=h[x+1],A=g0(n,t,M,v,s);r[b]=Cf(A,g,T,S,m)}return r}};function Cf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function m0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function g0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Cf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=m0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Di(t,this.TimeBufferType),this.values=Di(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Di(e.times,Array),values:Di(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ao(e.settings)&&(n.settings={inTangents:Di(e.settings.inTangents,Array),outTangents:Di(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case as:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case th:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ao(this.settings)&&(Ud(this.settings.inTangents,e),Ud(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Sm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,p=d+n;for(let b=0;b!==n;++b){let g=t[d+b];if(g!==t[u+b]||g!==t[p+b]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ao(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ud(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=os;var xi=class extends un{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=as;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var bi=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};bi.prototype.ValueTypeName="number";var Xo=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Nt.slerpFlat(r,0,a,l-o,a,l,c);return r}},_i=class extends un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends un{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=as;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Ni.prototype.ValueTypeName="vector";var fs=class{constructor(e="",t=-1,n=[],s=Vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(b0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=f0(c);c=Nd(c,1,h),l=Nd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new bi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function x0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return ra;case"quaternion":return _i;case"bool":case"boolean":return xi;case"string":return vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function b0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=x0(i.type);if(i.times===void 0){let n=[],s=[];p0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ao(i.settings)&&(t.settings={inTangents:Di(i.settings.inTangents,Float32Array),outTangents:Di(i.settings.outTangents,Float32Array)}),t}var Xn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(kd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!kd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var jo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],b=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pf=new jo,On=class{constructor(e){this.manager=e!==void 0?e:Pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};On.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},ih=class extends Error{constructor(e,t){super(e),this.response=t}},ps=class extends On{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=fi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=u?parseInt(u):0,b=p!==0,g=0,m=new ReadableStream({start(f){M();function M(){d.read().then(({done:T,value:x})=>{if(T)f.close();else{g+=x.byteLength;let v=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:p});for(let S=0,A=h.length;S<A;S++){let _=h[S];_.onProgress&&_.onProgress(v)}f.enqueue(x),M()}},T=>{f.error(T)})}}});return new Response(m)}else throw new ih(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(b=>p.decode(b))}}}).then(l=>{Xn.add(`file:${e}`,l);let h=fi[e];delete fi[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=new WeakMap,Ko=class extends On{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Xn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Vs.get(a);d===void 0&&(d=[],Vs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Ys("img");function c(){h(),t&&t(this);let d=Vs.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Xn.remove(`image:${e}`);let u=Vs.get(this)||[];for(let p=0;p<u.length;p++){let b=u[p];b.onError&&b.onError(d)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var aa=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new yn,o=new ps(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Ve(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new yn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:ln,e.wrapT=t.wrapT!==void 0?t.wrapT:ln,e.magFilter=t.magFilter!==void 0?t.magFilter:gt,e.minFilter=t.minFilter!==void 0?t.minFilter:gt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=En),t.mipmapCount===1&&(e.minFilter=gt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ms=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,a=new Ko(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Zl=new He,Od=new G,zd=new G,lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Od.setFromMatrixPosition(e.matrixWorld),t.position.copy(Od),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=new G,wo=new Nt,qn=new G,oa=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,wo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,wo,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(So,wo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,wo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new G,Bd=new Re,Gd=new Re,Ft=class extends oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Bd,Gd),t.subVectors(Gd,Bd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sh=class extends lr{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ca=class extends cr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},rh=class extends lr{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},gs=class extends cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends lr{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ql=new WeakMap,la=class extends On{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Xn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Ql.has(a)===!0?(s&&s(Ql.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ql.set(c,l),Xn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=-90,Ws=1,Yo=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Hs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Hs,Ws,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Hs,Ws,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Hs,Ws,e,t);o.layers=this.layers,this.add(o);let c=new Ft(Hs,Ws,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Hs,Ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Jo=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _0(){this._document.hidden===!1&&this.reset()}var $o=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Nt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Nt.multiplyQuaternionsFlat(e,a,e,t,e,n),Nt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Rh="\\[\\]\\.:\\/",v0=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",y0="[^"+Rh.replace("\\.","")+"]",M0=/((?:WC+[\/:])*)/.source.replace("WC",Ch),S0=/(WCOD+)?/.source.replace("WCOD",y0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),E0=new RegExp("^"+M0+S0+w0+T0+"$"),A0=["material","materials","bones","map"],oh=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){let t=E0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=oh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zo=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:is,endingEnd:is};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=df,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case pf:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Vc:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===ff;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===uf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ss,s.endingEnd=ss):(e?s.endingStart=this.zeroSlopeAtStart?ss:is:s.endingStart=Br,t?s.endingEnd=this.zeroSlopeAtEnd?ss:is:s.endingEnd=Br)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},R0=new Float32Array(1),ua=class extends vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){let u=s[d],p=u.name,b=h[p];if(b!==void 0)++b.referenceCount,a[d]=b;else{if(b=a[d],b!==void 0){b._cacheIndex===null&&(++b.referenceCount,this._addInactiveBinding(b,c,p));continue}let g=t&&t._propertyBindings[d].binding.parsedPath;b=new $o(pt.create(n,p,g),u.ValueTypeName,u.getValueSize()),++b.referenceCount,this._addInactiveBinding(b,c,p),a[d]=b}o[d].resultBuffer=b.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new sa(new Float32Array(2),new Float32Array(2),1,R0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?fs.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Vc),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Zo(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?fs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Vd=new He,da=class{constructor(e,t,n=0,s=1/0){this.ray=new Yn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(e,t=!0,n=[]){return ch(e,this,n,t),n.sort(Hd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ch(e[s],this,n,t);return n.sort(Hd),n}};function Hd(i,e){return i.distance-e.distance}function ch(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ch(r[a],e,t,!0)}}var Sn=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Nh=class Nh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Nh.prototype.isMatrix2=!0;var lh=Nh;var fa=class extends vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ph(i,e,t,n){let s=C0(n);switch(t){case yh:return i*e;case cc:return i*e/s.components*s.byteLength;case lc:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case Mh:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case xc:case _c:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ea:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uc:case kc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(i){switch(i){case Zt:case xh:return{byteLength:1,components:1};case fr:case bh:case Tt:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case Bn:case rc:case Qt:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Zf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function I0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,b)=>p.start-b.start);let u=0;for(let p=1;p<d.length;p++){let b=d[u],g=d[p];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,b=d.length;p<b;p++){let g=d[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ax=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ib=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:D0,alphahash_pars_fragment:L0,alphamap_fragment:F0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:k0,aomap_fragment:O0,aomap_pars_fragment:z0,batching_pars_vertex:B0,batching_vertex:G0,begin_vertex:V0,beginnormal_vertex:H0,bsdfs:W0,iridescence_fragment:q0,bumpmap_pars_fragment:X0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:J0,color_fragment:$0,color_pars_fragment:Z0,color_pars_vertex:Q0,color_vertex:eg,common:tg,cube_uv_reflection_fragment:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:ag,emissivemap_pars_fragment:og,colorspace_fragment:cg,colorspace_pars_fragment:lg,envmap_fragment:hg,envmap_common_pars_fragment:ug,envmap_pars_fragment:dg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:wg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:xg,fog_pars_fragment:bg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:vg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Eg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Ig,lights_fragment_maps:Dg,lights_fragment_end:Lg,lightprobes_pars_fragment:Fg,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Og,map_fragment:zg,map_pars_fragment:Bg,map_particle_fragment:Gg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:qg,morphcolor_vertex:Xg,morphnormal_vertex:jg,morphtarget_pars_vertex:Kg,morphtarget_vertex:Yg,normal_fragment_begin:Jg,normal_fragment_maps:$g,normal_pars_fragment:Zg,normal_pars_vertex:Qg,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ax,packing:ox,premultiplied_alpha_fragment:cx,project_vertex:lx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:dx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:xx,skinbase_vertex:bx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:yx,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:wx,tonemapping_pars_fragment:Tx,transmission_fragment:Ex,transmission_pars_fragment:Ax,uv_pars_fragment:Rx,uv_pars_vertex:Cx,uv_vertex:Px,worldpos_vertex:Ix,background_vert:Dx,background_frag:Lx,backgroundCube_vert:Fx,backgroundCube_frag:Nx,cube_vert:Ux,cube_frag:kx,depth_vert:Ox,depth_frag:zx,distance_vert:Bx,distance_frag:Gx,equirect_vert:Vx,equirect_frag:Hx,linedashed_vert:Wx,linedashed_frag:qx,meshbasic_vert:Xx,meshbasic_frag:jx,meshlambert_vert:Kx,meshlambert_frag:Yx,meshmatcap_vert:Jx,meshmatcap_frag:$x,meshnormal_vert:Zx,meshnormal_frag:Qx,meshphong_vert:eb,meshphong_frag:tb,meshphysical_vert:nb,meshphysical_frag:ib,meshtoon_vert:sb,meshtoon_frag:rb,points_vert:ab,points_frag:ob,shadow_vert:cb,shadow_frag:lb,sprite_vert:hb,sprite_frag:ub},ye={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ni={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ni.physical={uniforms:en([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var qc={r:0,b:0,g:0},db=new He,Qf=new qe;Qf.set(-1,0,0,0,1,0,0,0,1);function fb(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let x=M.backgroundBlurriness>0;T=e.get(T,x)}return T}function b(M){let T=!1,x=p(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,T){let x=p(T);x&&(x.isCubeTexture||x.mapping===ya)?(l===void 0&&(l=new lt(new Mn(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Ms(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(db.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qf),l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==rt,(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new ds(2,2),new wt({name:"BackgroundMaterial",uniforms:Ms(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(qc,Ah(i)),t.buffers.color.setClear(qc.r,qc.g,qc.b,T,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:b,addToRenderList:g,dispose:f}}function pb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,L,O,F,H){let q=!1,ne=d(I,F,O,L);r!==ne&&(r=ne,l(r.object)),q=p(I,F,O,H),q&&b(I,F,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(I,L,O,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,L,O,F){let H=F.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let ne=I.isInstancedMesh===!0?I.id:0,ce=q[ne];ce===void 0&&(ce={},q[ne]=ce);let Y=ce[O.id];Y===void 0&&(Y={},ce[O.id]=Y);let ie=Y[H];return ie===void 0&&(ie=u(c()),Y[H]=ie),ie}function u(I){let L=[],O=[],F=[];for(let H=0;H<t;H++)L[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:F,object:I,attributes:{},index:null}}function p(I,L,O,F){let H=r.attributes,q=L.attributes,ne=0,ce=O.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let ae=H[Y],ge=q[Y];if(ge===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;ne++}return r.attributesNum!==ne||r.index!==F}function b(I,L,O,F){let H={},q=L.attributes,ne=0,ce=O.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let ae=q[Y];ae===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor));let ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),H[Y]=ge,ne++}r.attributes=H,r.attributesNum=ne,r.index=F}function g(){let I=r.newAttributes;for(let L=0,O=I.length;L<O;L++)I[L]=0}function m(I){f(I,0)}function f(I,L){let O=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;O[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),H[I]!==L&&(i.vertexAttribDivisor(I,L),H[I]=L)}function M(){let I=r.newAttributes,L=r.enabledAttributes;for(let O=0,F=L.length;O<F;O++)L[O]!==I[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function T(I,L,O,F,H,q,ne){ne===!0?i.vertexAttribIPointer(I,L,O,H,q):i.vertexAttribPointer(I,L,O,F,H,q)}function x(I,L,O,F){g();let H=F.attributes,q=O.getAttributes(),ne=L.defaultAttributeValues;for(let ce in q){let Y=q[ce];if(Y.location>=0){let ie=H[ce];if(ie===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){let ae=ie.normalized,ge=ie.itemSize,_e=e.get(ie);if(_e===void 0)continue;let We=_e.buffer,De=_e.type,Oe=_e.bytesPerElement,$=De===i.INT||De===i.UNSIGNED_INT||ie.gpuType===rc;if(ie.isInterleavedBufferAttribute){let re=ie.data,me=re.stride,Ce=ie.offset;if(re.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)f(Y.location+xe,re.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<Y.locationSize;xe++)m(Y.location+xe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let xe=0;xe<Y.locationSize;xe++)T(Y.location+xe,ge/Y.locationSize,De,ae,me*Oe,(Ce+ge/Y.locationSize*xe)*Oe,$)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)f(Y.location+re,ie.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);i.bindBuffer(i.ARRAY_BUFFER,We);for(let re=0;re<Y.locationSize;re++)T(Y.location+re,ge/Y.locationSize,De,ae,ge*Oe,ge/Y.locationSize*re*Oe,$)}}else if(ne!==void 0){let ae=ne[ce];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Y.location,ae);break;case 3:i.vertexAttrib3fv(Y.location,ae);break;case 4:i.vertexAttrib4fv(Y.location,ae);break;default:i.vertexAttrib1fv(Y.location,ae)}}}}M()}function v(){E();for(let I in n){let L=n[I];for(let O in L){let F=L[O];for(let H in F){let q=F[H];for(let ne in q)h(q[ne].object),delete q[ne];delete F[H]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let O in L){let F=L[O];for(let H in F){let q=F[H];for(let ne in q)h(q[ne].object),delete q[ne];delete F[H]}}delete n[I.id]}function A(I){for(let L in n){let O=n[L];for(let F in O){let H=O[F];if(H[I.id]===void 0)continue;let q=H[I.id];for(let ne in q)h(q[ne].object),delete q[ne];delete H[I.id]}}}function _(I){for(let L in n){let O=n[L],F=I.isInstancedMesh===!0?I.id:0,H=O[F];if(H!==void 0){for(let q in H){let ne=H[q];for(let ce in ne)h(ne[ce].object),delete ne[ce];delete H[q]}delete O[F],Object.keys(O).length===0&&delete n[L]}}}function E(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function mb(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Tt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zt&&A!==Qt&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,maxSamples:v,samples:S}}function xb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let b=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||b===null||b.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,T=M*4,x=f.clippingState||null;c.value=x,x=h(b,u,T,p);for(let v=0;v!==T;++v)x[v]=t[v];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,b){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,b!==!0||m===null){let f=p+g*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,x=p;T!==g;++T,x+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var xr=4,bb=6,_b=20,vb=256,Pa=new Zn,If=new ke,Uh=null,kh=0,Oh=0,zh=!1,yb=new G,Ss=new G,Hi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=yb}=r;Uh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,kh,Oh),this._renderer.xr.enabled=zh,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Tt,format:rn,colorSpace:qt,depthBuffer:!1},s=Df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mb(r)),this._blurMaterial=wb(r,e,t),this._ggxMaterial=Sb(r,e,t)}return s}_compileMaterial(e){let t=new lt(new Ct,e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,s,r){let c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(If),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Mn,new kn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,f=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(If),f=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let v=this._cubeSize;gr(s,x*v,T>2?v:0,v,v),d.setRenderTarget(s),f&&d.render(g,c),d.render(e,c)}d.toneMapping=p,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bi||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;gr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,p=d*u,{_lodMax:b}=this,g=this._sizeLods[n],m=3*g*(n>b-xr?n-b+xr:0),f=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=b-t,gr(r,m,f,3*g,2*g),s.setRenderTarget(r),s.render(o,Pa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=b-n,gr(e,m,f,3*g,2*g),s.setRenderTarget(e),s.render(o,Pa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-xr?s-this._lodMax+xr:0),u=4*(this._cubeSize-h);gr(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,Pa)}};function Mb(i){let e=[],t=[],n=i,s=i-xr+1+bb;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,p=3,b=new Float32Array(p*u*d),g=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,T=f>2?0:-1,x=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];b.set(x,p*u*f);for(let v=0;v<u;v++){let S=h[v*2]*2-1,A=h[v*2+1]*2-1;f===0?Ss.set(1,A,S):f===1?Ss.set(-S,1,-A):f===2?Ss.set(-S,A,1):f===3?Ss.set(-1,A,-S):f===4?Ss.set(-S,-1,A):Ss.set(S,A,-1),Ss.toArray(g,(f*u+v)*p)}}let m=new Ct;m.setAttribute("position",new At(b,p)),m.setAttribute("outputDirection",new At(g,p)),t.push(new lt(m,null)),n>xr&&n--}return{lodMeshes:t,sizeLods:e}}function Df(i,e,t){let n=new Rt(i,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sb(i,e,t){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function wb(i,e,t){return new wt({name:"SphericalGaussianBlur",defines:{SAMPLES:_b,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Lf(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Ff(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jc=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $r(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mn(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Pt});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===En&&(t.minFilter=gt),new Yo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Tb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===nc||p===ic)if(e.has(u)){let b=e.get(u).texture;return o(b,u.mapping)}else{let b=u.image;if(b&&b.height>0){let g=new jc(b.height);return g.fromEquirectangularTexture(i,u),e.set(u,g),u.addEventListener("dispose",l),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,b=p===nc||p===ic,g=p===Bi||p===vs;if(b||g){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Hi(i)),m=b?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return b&&M&&M.height>0||g&&M&&c(M)?(n===null&&(n=new Hi(i)),m=b?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===nc?u.mapping=Bi:p===ic&&(u.mapping=vs),u}function c(u){let p=0,b=6;for(let g=0;g<b;g++)u[g]!==void 0&&p++;return p===b}function l(u){let p=u.target;p.removeEventListener("dispose",l);let b=e.get(p);b!==void 0&&(e.delete(p),b.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let b=t.get(p);b!==void 0&&(t.delete(p),b.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Eb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ab(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let b in u.attributes)e.remove(u.attributes[b]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function l(d){let u=[],p=d.index,b=d.attributes.position,g=0;if(b===void 0)return;if(p!==null){let M=p.array;g=p.version;for(let T=0,x=M.length;T<x;T+=3){let v=M[T+0],S=M[T+1],A=M[T+2];u.push(v,S,S,A,A,v)}}else{let M=b.array;g=b.version;for(let T=0,x=M.length/3-1;T<x;T+=3){let v=T+0,S=T+1,A=T+2;u.push(v,S,S,A,A,v)}}let m=new(b.count>=65535?qr:Wr)(u,1);m.version=g;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Rb(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=u[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Cb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pb(i,e,t){let n=new WeakMap,s=new ut;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;p===!0&&(T=1),b===!0&&(T=2),g===!0&&(T=3);let x=o.attributes.position.count*T,v=1;x>e.maxTextureSize&&(v=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*v*4*d),A=new Hr(S,x,v,d);A.type=Qt,A.needsUpdate=!0;let _=T*4;for(let C=0;C<d;C++){let I=m[C],L=f[C],O=M[C],F=x*v*4*C;for(let H=0;H<I.count;H++){let q=H*_;p===!0&&(s.fromBufferAttribute(I,H),S[F+q+0]=s.x,S[F+q+1]=s.y,S[F+q+2]=s.z,S[F+q+3]=0),b===!0&&(s.fromBufferAttribute(L,H),S[F+q+4]=s.x,S[F+q+5]=s.y,S[F+q+6]=s.z,S[F+q+7]=0),g===!0&&(s.fromBufferAttribute(O,H),S[F+q+8]=s.x,S[F+q+9]=s.y,S[F+q+10]=s.z,S[F+q+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Re(x,v)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];let b=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ib(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Db={[ga]:"LINEAR_TONE_MAPPING",[xa]:"REINHARD_TONE_MAPPING",[ba]:"CINEON_TONE_MAPPING",[_s]:"ACES_FILMIC_TONE_MAPPING",[va]:"AGX_TONE_MAPPING",[zi]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function Lb(i,e,t,n,s,r){let a=new Rt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ct;l.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xt([0,2,0,0,2,0],2));let h=new or({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new lt(l,h),u=new Zn(-1,1,1,-1,0,1),p=null,b=null,g=!1,m,f=null,M=[],T=!1;this.setSize=function(x,v){a.setSize(x,v),o!==null&&o.setSize(x,v),c!==null&&c.setSize(x,v);for(let S=0;S<M.length;S++){let A=M[S];A.setSize&&A.setSize(x,v)}},this.setEffects=function(x){M=x,T=M.length>0&&M[0].isRenderPass===!0;let v=a.width,S=a.height;M.length>0&&o===null&&(o=new Rt(v,S,{type:Tt,depthBuffer:!1,stencilBuffer:!1}),c=new Rt(v,S,{type:Tt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let _=M[A];_.setSize&&_.setSize(v,S)}},this.begin=function(x,v){if(g||x.toneMapping===zn&&M.length===0)return!1;if(f=v,v!==null){let S=v.width,A=v.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return T===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return T},this.end=function(x,v){x.toneMapping=m,g=!0;let S=a,A=o;for(let _=0;_<M.length;_++){let E=M[_];E.enabled!==!1&&(E.render(x,A,S,v),E.needsSwap!==!1&&(S=A,A=A===o?c:o))}if(p!==x.outputColorSpace||b!==x.toneMapping){p=x.outputColorSpace,b=x.toneMapping,h.defines={},Ke.getTransfer(p)===rt&&(h.defines.SRGB_TRANSFER="");let _=Db[b];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(f),x.render(d,u),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ep=new Vt,Vh=new Jn(1,1),tp=new Hr,np=new ko,ip=new $r,Nf=[],Uf=[],kf=new Float32Array(16),Of=new Float32Array(9),zf=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nf[s];if(r===void 0&&(r=new Float32Array(s),Nf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jc(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Ob(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;zf.set(n),i.uniformMatrix2fv(this.addr,!1,zf),zt(t,n)}}function zb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;Of.set(n),i.uniformMatrix3fv(this.addr,!1,Of),zt(t,n)}}function Bb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;kf.set(n),i.uniformMatrix4fv(this.addr,!1,kf),zt(t,n)}}function Gb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function qb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function jb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Yb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=t.isReversedDepthBuffer()?Wc:Hc,r=Vh):r=ep,t.setTexture2D(e||r,s)}function Jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||np,s)}function $b(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ip,s)}function Zb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tp,s)}function Qb(i){switch(i){case 5126:return Fb;case 35664:return Nb;case 35665:return Ub;case 35666:return kb;case 35674:return Ob;case 35675:return zb;case 35676:return Bb;case 5124:case 35670:return Gb;case 35667:case 35671:return Vb;case 35668:case 35672:return Hb;case 35669:case 35673:return Wb;case 5125:return qb;case 36294:return Xb;case 36295:return jb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Zb}}function e_(i,e){i.uniform1fv(this.addr,e)}function t_(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function n_(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function i_(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function s_(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r_(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a_(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o_(i,e){i.uniform1iv(this.addr,e)}function c_(i,e){i.uniform2iv(this.addr,e)}function l_(i,e){i.uniform3iv(this.addr,e)}function h_(i,e){i.uniform4iv(this.addr,e)}function u_(i,e){i.uniform1uiv(this.addr,e)}function d_(i,e){i.uniform2uiv(this.addr,e)}function f_(i,e){i.uniform3uiv(this.addr,e)}function p_(i,e){i.uniform4uiv(this.addr,e)}function m_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Vh:a=ep;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||np,r[a])}function x_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ip,r[a])}function b_(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tp,r[a])}function __(i){switch(i){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return c_;case 35668:case 35672:return l_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return b_}}var Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qb(t.type)}},Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Bh=/(\w+)(\])?(\[|\.)?/g;function Bf(i,e){i.seq.push(e),i.map[e.id]=e}function v_(i,e,t){let n=i.name,s=n.length;for(Bh.lastIndex=0;;){let r=Bh.exec(n),a=Bh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bf(t,l===void 0?new Hh(o,i,e):new Wh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new qh(o),Bf(t,d)),t=d}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);v_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Gf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var y_=37297,M_=0;function S_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Vf=new qe;function w_(i){Ke._getMatrix(Vf,Ke.workingColorSpace,i);let e=`mat3( ${Vf.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),o)}else return r}function T_(i,e){let t=w_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var E_={[ga]:"Linear",[xa]:"Reinhard",[ba]:"Cineon",[_s]:"ACESFilmic",[va]:"AgX",[zi]:"Neutral",[_a]:"Custom"};function A_(i,e){let t=E_[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xc=new G;function R_(){Ke.getLuminanceCoefficients(Xc);let i=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function P_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Da(i){return i!==""}function Wf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(D_,F_)}var L_=new Map;function F_(i,e){let t=$e[e];if(t===void 0){let n=L_.get(e);if(n!==void 0)t=$e[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xh(t)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(i){return i.replace(N_,U_)}function U_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var k_={[xs]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function O_(i){return k_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var z_={[Bi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function B_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":z_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var G_={[vs]:"ENVMAP_MODE_REFRACTION"};function V_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H_={[tc]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function W_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H_[i.combine]||"ENVMAP_BLENDING_NONE"}function q_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=O_(t),l=B_(t),h=V_(t),d=W_(t),u=q_(t),p=C_(t),b=P_(r),g=s.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Da).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Da).join(`
`),f.length>0&&(f+=`
`)):(m=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),f=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?$e.tonemapping_pars_fragment:"",t.toneMapping!==zn?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),R_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=Xh(a),a=Wf(a,t),a=qf(a,t),o=Xh(o),o=Wf(o,t),o=qf(o,t),a=Xf(a),o=Xf(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=M+m+a,x=M+f+o,v=Gf(s,s.VERTEX_SHADER,T),S=Gf(s,s.FRAGMENT_SHADER,x);s.attachShader(g,v),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(v)||"",F=s.getShaderInfoLog(S)||"",H=L.trim(),q=O.trim(),ne=F.trim(),ce=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,S);else{let ie=Hf(s,v,"vertex"),ae=Hf(s,S,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ie+`
`+ae)}else H!==""?Ue("WebGLProgram: Program Info Log:",H):(q===""||ne==="")&&(Y=!1);Y&&(I.diagnostics={runnable:ce,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(v),s.deleteShader(S),_=new br(s,g),E=I_(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,y_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=S,this}var j_=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kh(e),t.set(e,n)),n}},Kh=class{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}};function K_(i){return i===Vi||i===Ea||i===Aa}function Y_(i,e,t,n,s,r){let a=new Zs,o=new jh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,E,C,I,L,O){let F=I.fog,H=L.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,ne=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ce=e.get(_.envMap||q,ne),Y=ce&&ce.mapping===ya?ce.image.height:null,ie=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ge=ae!==void 0?ae.length:0,_e=0;H.morphAttributes.position!==void 0&&(_e=1),H.morphAttributes.normal!==void 0&&(_e=2),H.morphAttributes.color!==void 0&&(_e=3);let We,De,Oe,$;if(ie){let bt=ni[ie];We=bt.vertexShader,De=bt.fragmentShader}else{We=_.vertexShader,De=_.fragmentShader;let bt=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,bt,ot),Oe=bt.id,$=ot.id}let re=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Be=!!_.map,st=!!_.matcap,j=!!ce,he=!!_.aoMap,pe=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,Le=!!_.normalMap,Ge=!!_.displacementMap,je=!!_.emissiveMap,Xe=!!_.metalnessMap,et=!!_.roughnessMap,z=_.anisotropy>0,at=_.clearcoat>0,Ze=_.dispersion>0,w=_.retroreflectivity>0,y=_.iridescence>0,k=_.sheen>0,V=_.transmission>0,J=z&&!!_.anisotropyMap,P=at&&!!_.clearcoatMap,U=at&&!!_.clearcoatNormalMap,D=at&&!!_.clearcoatRoughnessMap,N=y&&!!_.iridescenceMap,K=y&&!!_.iridescenceThicknessMap,Q=k&&!!_.sheenColorMap,X=k&&!!_.sheenRoughnessMap,Z=!!_.specularMap,le=!!_.specularColorMap,fe=!!_.specularIntensityMap,Te=V&&!!_.transmissionMap,B=V&&!!_.thicknessMap,be=!!_.gradientMap,oe=!!_.alphaMap,ve=_.alphaTest>0,we=!!_.alphaHash,ue=!!_.extensions,ze=zn;_.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=i.toneMapping);let Fe={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:We,fragmentShader:De,defines:_.defines,customVertexShaderID:Oe,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:st,envMap:j,envMapMode:j&&ce.mapping,envMapCubeUVHeight:Y,aoMap:he,lightMap:pe,bumpMap:de,normalMap:Le,displacementMap:Ge,emissiveMap:je,normalMapObjectSpace:Le&&_.normalMapType===gf,normalMapTangentSpace:Le&&_.normalMapType===mr,packedNormalMap:Le&&_.normalMapType===mr&&K_(_.normalMap.format),metalnessMap:Xe,roughnessMap:et,anisotropy:z,anisotropyMap:J,clearcoat:at,clearcoatMap:P,clearcoatNormalMap:U,clearcoatRoughnessMap:D,dispersion:Ze,retroreflection:w,iridescence:y,iridescenceMap:N,iridescenceThicknessMap:K,sheen:k,sheenColorMap:Q,sheenRoughnessMap:X,specularMap:Z,specularColorMap:le,specularIntensityMap:fe,transmission:V,transmissionMap:Te,thicknessMap:B,gradientMap:be,opaque:_.transparent===!1&&_.blending===ur&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:ve,alphaHash:we,combine:_.combine,mapUv:Be&&b(_.map.channel),aoMapUv:he&&b(_.aoMap.channel),lightMapUv:pe&&b(_.lightMap.channel),bumpMapUv:de&&b(_.bumpMap.channel),normalMapUv:Le&&b(_.normalMap.channel),displacementMapUv:Ge&&b(_.displacementMap.channel),emissiveMapUv:je&&b(_.emissiveMap.channel),metalnessMapUv:Xe&&b(_.metalnessMap.channel),roughnessMapUv:et&&b(_.roughnessMap.channel),anisotropyMapUv:J&&b(_.anisotropyMap.channel),clearcoatMapUv:P&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:U&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:X&&b(_.sheenRoughnessMap.channel),specularMapUv:Z&&b(_.specularMap.channel),specularColorMapUv:le&&b(_.specularColorMap.channel),specularIntensityMapUv:fe&&b(_.specularIntensityMap.channel),transmissionMapUv:Te&&b(_.transmissionMap.channel),thicknessMapUv:B&&b(_.thicknessMap.channel),alphaMapUv:oe&&b(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Le||z),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Be||oe),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&Le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:je&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wn,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(E,_),M(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let E=p[_.type],C;if(E){let I=ni[E];C=An.clone(I.uniforms)}else C=_.uniforms;return C}function x(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new X_(i,E,_,s),l.push(C),h.set(E,C)),C}function v(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:v,releaseShaderCache:S,programs:l,dispose:A}}function J_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,b,g,m,f){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:b,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=b,M.materialVariant=a(u),M.groupOrder=g,M.renderOrder=u.renderOrder,M.z=m,M.group=f),e++,M}function c(u,p,b,g,m,f,M){M.reversedDepth===!0&&(m=-m);let T=o(u,p,b,g,m,f);b.transmission>0?n.push(T):b.transparent===!0?s.push(T):t.push(T)}function l(u,p,b,g,m,f){let M=o(u,p,b,g,m,f);b.transmission>0?n.unshift(M):b.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||$_),n.length>1&&n.sort(p||Kf),s.length>1&&s.sort(p||Kf)}function d(){for(let u=e,p=i.length;u<p;u++){let b=i[u];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Z_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Yf,i.set(n,[a])):s>=r.length?(a=new Yf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ke};break;case"SpotLight":t={position:new G,direction:new G,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tv=0;function nv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iv(i){let e=new Q_,t=ev(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new He,a=new He;function o(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,b=0,g=0,m=0,f=0,M=0,T=0,x=0,v=0,S=0,A=0,_=0,E=0,C=0;l.sort(nv);for(let L=0,O=l.length;L<O;L++){let F=l[L],H=F.color,q=F.intensity,ne=F.distance,ce=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Vi?ce=F.shadow.map.texture:ce=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(F.sh.coefficients[Y],q);C++}else if(F.isSunLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ie=F.shadow,ae=t.get(F);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[b]=ae,n.sunShadowMap[b]=ce;let ge=ie.getViewportCount();for(let _e=0;_e<ge;_e++)n.sunShadowMatrix[g+_e]=ie.getMatrix(_e),n.sunShadowCascade[g+_e]=ie._cascadeData[_e];g+=ge,b++}n.sun[p]=Y,p++}else if(F.isDirectionalLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ie=F.shadow,ae=t.get(F);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=ce,n.directionalShadowMatrix[m]=F.shadow.matrix,v++}n.directional[m]=Y,m++}else if(F.isSpotLight){let Y=e.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(H).multiplyScalar(q),Y.distance=ne,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,n.spot[M]=Y;let ie=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,ie.updateMatrices(F),F.castShadow&&E++),n.spotLightMatrix[M]=ie.matrix,F.castShadow){let ae=t.get(F);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,n.spotShadow[M]=ae,n.spotShadowMap[M]=ce,A++}M++}else if(F.isRectAreaLight){let Y=e.get(F);Y.color.copy(H).multiplyScalar(q),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),n.rectArea[T]=Y,T++}else if(F.isPointLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){let ie=F.shadow,ae=t.get(F);ae.shadowIntensity=ie.intensity,ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,n.pointShadow[f]=ae,n.pointShadowMap[f]=ce,n.pointShadowMatrix[f]=F.shadow.matrix,S++}n.point[f]=Y,f++}else if(F.isHemisphereLight){let Y=e.get(F);Y.skyColor.copy(F.color).multiplyScalar(q),Y.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[x]=Y,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==x||I.numSunShadows!==b||I.numDirectionalShadows!==v||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=f,n.hemi.length=x,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=x,I.numSunShadows=b,I.numDirectionalShadows=v,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=C,n.version=tv++)}function c(l,h){let d=0,u=0,p=0,b=0,g=0,m=0,f=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let x=l[M];if(x.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(x.isSpotLight){let v=n.spot[b];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),b++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function Jf(i){let e=new iv(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function sv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Jf(i),e.set(s,[o])):r>=a.length?(o=new Jf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ov=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],cv=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],$f=new He,Ia=new G,Gh=new G;function lv(i,e,t){let n=new ir,s=new Re,r=new Re,a=new ut,o=new Go,c=new Vo,l={},h=t.maxTextureSize,d={[Qn]:Xt,[Xt]:Qn,[wn]:wn},u=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:rv,fragmentShader:av}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let b=new Ct;b.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(b,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let f=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Xd&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Pt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=f!==this.type;O&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=S.length;F<H;F++){let q=S[F],ne=q.shadow;if(ne===void 0){Ue("WebGLShadowMap:",q,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let ce=ne.getFrameExtents();s.multiply(ce),r.copy(ne.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,ne.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,ne.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=Y,ne.map===null||O===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===hr){if(q.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new Rt(s.x,s.y,{format:Vi,type:Tt,minFilter:gt,magFilter:gt,generateMipmaps:!1}),ne.map.texture.name=q.name+".shadowMap",ne.map.depthTexture=new Jn(s.x,s.y,Qt),ne.map.depthTexture.name=q.name+".shadowMapDepth",ne.map.depthTexture.format=jn,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Mt,ne.map.depthTexture.magFilter=Mt}else q.isPointLight?(ne.map=new jc(s.x),ne.map.depthTexture=new Bo(s.x,Bn)):(ne.map=new Rt(s.x,s.y),ne.map.depthTexture=new Jn(s.x,s.y,Bn)),ne.map.depthTexture.name=q.name+".shadowMap",ne.map.depthTexture.format=jn,this.type===xs?(ne.map.depthTexture.compareFunction=Y?Wc:Hc,ne.map.depthTexture.minFilter=gt,ne.map.depthTexture.magFilter=gt):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Mt,ne.map.depthTexture.magFilter=Mt);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==s.x||ne.map.height!==s.y)&&ne.map.setSize(s.x,s.y);let ie=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();q.isPointLight!==!0&&ne.updateMatrices(q,_);for(let ae=0;ae<ie;ae++){let ge=ne.getCamera(ae);if(q.isPointLight){let _e=ne.camera,We=ne.matrix,De=q.distance||_e.far;De!==_e.far&&(_e.far=De,_e.updateProjectionMatrix()),Ia.setFromMatrixPosition(q.matrixWorld),_e.position.copy(Ia),Gh.copy(_e.position),Gh.add(ov[ae]),_e.up.copy(cv[ae]),_e.lookAt(Gh),_e.updateMatrixWorld(),We.makeTranslation(-Ia.x,-Ia.y,-Ia.z),$f.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),ne._frustum.setFromProjectionMatrix($f,_e.coordinateSystem,_e.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)i.setRenderTarget(ne.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(ne.map),i.clear());let _e=ne.getViewport(ae);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),L.viewport(a)}n=ne.getFrustum(ae),x(A,_,ge,q,this.type)}ne.isPointLightShadow!==!0&&this.type===hr&&M(ne,_),ne.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,I)};function M(S,A){let _=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Rt(s.x,s.y,{format:Vi,type:Tt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,_,p,g,null)}function T(S,A,_,E){let C=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,O=A.uuid,F=l[L];F===void 0&&(F={},l[L]=F);let H=F[O];H===void 0&&(H=C.clone(),F[O]=H,A.addEventListener("dispose",v)),C=H}if(C.visible=A.visible,C.wireframe=A.wireframe,E===hr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=_}return C}function x(S,A,_,E,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===hr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let O=e.update(S),F=S.material;if(Array.isArray(F)){let H=O.groups;for(let q=0,ne=H.length;q<ne;q++){let ce=H[q],Y=F[ce.materialIndex];if(Y&&Y.visible){let ie=T(S,Y,E,C);S.onBeforeShadow(i,S,A,_,O,ie,ce),i.renderBufferDirect(_,null,O,ie,S,ce),S.onAfterShadow(i,S,A,_,O,ie,ce)}}}else if(F.visible){let H=T(S,F,E,C);S.onBeforeShadow(i,S,A,_,O,H,null),i.renderBufferDirect(_,null,O,H,S,null),S.onAfterShadow(i,S,A,_,O,H,null)}}let L=S.children;for(let O=0,F=L.length;O<F;O++)x(L[O],A,_,E,C)}function v(S){S.target.removeEventListener("dispose",v);for(let _ in l){let E=l[_],C=S.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function hv(i,e){function t(){let B=!1,be=new ut,oe=null,ve=new ut(0,0,0,0);return{setMask:function(we){oe!==we&&!B&&(i.colorMask(we,we,we,we),oe=we)},setLocked:function(we){B=we},setClear:function(we,ue,ze,Fe,bt){bt===!0&&(we*=Fe,ue*=Fe,ze*=Fe),be.set(we,ue,ze,Fe),ve.equals(be)===!1&&(i.clearColor(we,ue,ze,Fe),ve.copy(be))},reset:function(){B=!1,oe=null,ve.set(-1,0,0,0)}}}function n(){let B=!1,be=!1,oe=null,ve=null,we=null;return{setReversed:function(ue){if(be!==ue){let ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),be=ue;let Fe=we;we=null,this.setClear(Fe)}},getReversed:function(){return be},setTest:function(ue){ue?re(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!B&&(i.depthMask(ue),oe=ue)},setFunc:function(ue){if(be&&(ue=Af[ue]),ve!==ue){switch(ue){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ue}},setLocked:function(ue){B=ue},setClear:function(ue){we!==ue&&(we=ue,be&&(ue=1-ue),i.clearDepth(ue))},reset:function(){B=!1,oe=null,ve=null,we=null,be=!1}}}function s(){let B=!1,be=null,oe=null,ve=null,we=null,ue=null,ze=null,Fe=null,bt=null;return{setTest:function(ot){B||(ot?re(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ot){be!==ot&&!B&&(i.stencilMask(ot),be=ot)},setFunc:function(ot,Pn,Hn){(oe!==ot||ve!==Pn||we!==Hn)&&(i.stencilFunc(ot,Pn,Hn),oe=ot,ve=Pn,we=Hn)},setOp:function(ot,Pn,Hn){(ue!==ot||ze!==Pn||Fe!==Hn)&&(i.stencilOp(ot,Pn,Hn),ue=ot,ze=Pn,Fe=Hn)},setLocked:function(ot){B=ot},setClear:function(ot){bt!==ot&&(i.clearStencil(ot),bt=ot)},reset:function(){B=!1,be=null,oe=null,ve=null,we=null,ue=null,ze=null,Fe=null,bt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},p=new WeakMap,b=[],g=null,m=!1,f=null,M=null,T=null,x=null,v=null,S=null,A=null,_=new ke(0,0,0),E=0,C=!1,I=null,L=null,O=null,F=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,ce=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=ce>=2);let ie=null,ae={},ge=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),We=new ut().fromArray(ge),De=new ut().fromArray(_e);function Oe(B,be,oe,ve){let we=new Uint8Array(4),ue=i.createTexture();i.bindTexture(B,ue),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<oe;ze++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(be+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return ue}let $={};$[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Xs),de(!1),Le(hh),re(i.CULL_FACE),he(Pt);function re(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function me(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ce(B,be){return u[B]!==be?(i.bindFramebuffer(B,be),u[B]=be,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=be),!0):!1}function xe(B,be){let oe=b,ve=!1;if(B){oe=p.get(be),oe===void 0&&(oe=[],p.set(be,oe));let we=B.textures;if(oe.length!==we.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,ze=we.length;ue<ze;ue++)oe[ue]=i.COLOR_ATTACHMENT0+ue;oe.length=we.length,ve=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ve=!0);ve&&i.drawBuffers(oe)}function Be(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let st={[Tn]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Kd]:i.FUNC_REVERSE_SUBTRACT};st[Yd]=i.MIN,st[Jd]=i.MAX;let j={[bs]:i.ZERO,[$d]:i.ONE,[Zd]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[ma]:i.DST_COLOR,[pa]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[tf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[af]:i.CONSTANT_ALPHA,[of]:i.ONE_MINUS_CONSTANT_ALPHA};function he(B,be,oe,ve,we,ue,ze,Fe,bt,ot){if(B===Pt){m===!0&&(me(i.BLEND),m=!1);return}if(m===!1&&(re(i.BLEND),m=!0),B!==ec){if(B!==f||ot!==C){if((M!==Tn||v!==Tn)&&(i.blendEquation(i.FUNC_ADD),M=Tn,v=Tn),ot)switch(B){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",B);break}else switch(B){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",B);break}T=null,x=null,S=null,A=null,_.set(0,0,0),E=0,f=B,C=ot}return}we=we||be,ue=ue||oe,ze=ze||ve,(be!==M||we!==v)&&(i.blendEquationSeparate(st[be],st[we]),M=be,v=we),(oe!==T||ve!==x||ue!==S||ze!==A)&&(i.blendFuncSeparate(j[oe],j[ve],j[ue],j[ze]),T=oe,x=ve,S=ue,A=ze),(Fe.equals(_)===!1||bt!==E)&&(i.blendColor(Fe.r,Fe.g,Fe.b,bt),_.copy(Fe),E=bt),f=B,C=!1}function pe(B,be){B.side===wn?me(i.CULL_FACE):re(i.CULL_FACE);let oe=B.side===Xt;be&&(oe=!oe),de(oe),B.blending===ur&&B.transparent===!1?he(Pt):he(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ve=B.stencilWrite;o.setTest(ve),ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),je(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(B){I!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),I=B)}function Le(B){B!==Wd?(re(i.CULL_FACE),B!==L&&(B===hh?i.cullFace(i.BACK):B===qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=B}function Ge(B){B!==O&&(ne&&i.lineWidth(B),O=B)}function je(B,be,oe){B?(re(i.POLYGON_OFFSET_FILL),(F!==be||H!==oe)&&(F=be,H=oe,a.getReversed()&&(be=-be),i.polygonOffset(be,oe))):me(i.POLYGON_OFFSET_FILL)}function Xe(B){B?re(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function et(B){B===void 0&&(B=i.TEXTURE0+q-1),ie!==B&&(i.activeTexture(B),ie=B)}function z(B,be,oe){oe===void 0&&(ie===null?oe=i.TEXTURE0+q-1:oe=ie);let ve=ae[oe];ve===void 0&&(ve={type:void 0,texture:void 0},ae[oe]=ve),(ve.type!==B||ve.texture!==be)&&(ie!==oe&&(i.activeTexture(oe),ie=oe),i.bindTexture(B,be||$[B]),ve.type=B,ve.texture=be)}function at(){let B=ae[ie];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function y(){try{i.texSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function k(){try{i.texSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function P(){try{i.texStorage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function U(){try{i.texStorage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function D(){try{i.texImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function N(){try{i.texImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function K(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Q(B,be){d[B]!==be&&(i.pixelStorei(B,be),d[B]=be)}function X(B){We.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function Z(B){De.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),De.copy(B))}function le(B,be){let oe=l.get(be);oe===void 0&&(oe=new WeakMap,l.set(be,oe));let ve=oe.get(B);ve===void 0&&(ve=i.getUniformBlockIndex(be,B.name),oe.set(B,ve))}function fe(B,be){let ve=l.get(be).get(B);c.get(be)!==ve&&(i.uniformBlockBinding(be,ve,B.__bindingPointIndex),c.set(be,ve))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,ae={},u={},p=new WeakMap,b=[],g=null,m=!1,f=null,M=null,T=null,x=null,v=null,S=null,A=null,_=new ke(0,0,0),E=0,C=!1,I=null,L=null,O=null,F=null,H=null,We.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:me,bindFramebuffer:Ce,drawBuffers:xe,useProgram:Be,setBlending:he,setMaterial:pe,setFlipSided:de,setCullFace:Le,setLineWidth:Ge,setPolygonOffset:je,setScissorTest:Xe,activeTexture:et,bindTexture:z,unbindTexture:at,compressedTexImage2D:Ze,compressedTexImage3D:w,texImage2D:D,texImage3D:N,pixelStorei:Q,getParameter:K,updateUBOMapping:le,uniformBlockBinding:fe,texStorage2D:P,texStorage3D:U,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:X,viewport:Z,reset:Te}}function uv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,h=new WeakMap,d=new Set,u,p=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return b?new OffscreenCanvas(w,y):Ys("canvas")}function m(w,y,k){let V=1,J=Ze(w);if((J.width>k||J.height>k)&&(V=k/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let P=Math.floor(V*J.width),U=Math.floor(V*J.height);u===void 0&&(u=g(P,U));let D=y?g(P,U):u;return D.width=P,D.height=U,D.getContext("2d").drawImage(w,0,0,P,U),Ue("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+P+"x"+U+")."),D}else return"data"in w&&Ue("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function f(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,y,k,V,J,P=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let U;V&&(U=e.get("EXT_texture_norm16"),U||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=y;if(y===i.RED&&(k===i.FLOAT&&(D=i.R32F),k===i.HALF_FLOAT&&(D=i.R16F),k===i.UNSIGNED_BYTE&&(D=i.R8),k===i.UNSIGNED_SHORT&&U&&(D=U.R16_EXT),k===i.SHORT&&U&&(D=U.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.R8UI),k===i.UNSIGNED_SHORT&&(D=i.R16UI),k===i.UNSIGNED_INT&&(D=i.R32UI),k===i.BYTE&&(D=i.R8I),k===i.SHORT&&(D=i.R16I),k===i.INT&&(D=i.R32I)),y===i.RG&&(k===i.FLOAT&&(D=i.RG32F),k===i.HALF_FLOAT&&(D=i.RG16F),k===i.UNSIGNED_BYTE&&(D=i.RG8),k===i.UNSIGNED_SHORT&&U&&(D=U.RG16_EXT),k===i.SHORT&&U&&(D=U.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.RG8UI),k===i.UNSIGNED_SHORT&&(D=i.RG16UI),k===i.UNSIGNED_INT&&(D=i.RG32UI),k===i.BYTE&&(D=i.RG8I),k===i.SHORT&&(D=i.RG16I),k===i.INT&&(D=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.RGB8UI),k===i.UNSIGNED_SHORT&&(D=i.RGB16UI),k===i.UNSIGNED_INT&&(D=i.RGB32UI),k===i.BYTE&&(D=i.RGB8I),k===i.SHORT&&(D=i.RGB16I),k===i.INT&&(D=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(D=i.RGBA16UI),k===i.UNSIGNED_INT&&(D=i.RGBA32UI),k===i.BYTE&&(D=i.RGBA8I),k===i.SHORT&&(D=i.RGBA16I),k===i.INT&&(D=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&U&&(D=U.RGB16_EXT),k===i.SHORT&&U&&(D=U.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(D=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(D=i.R11F_G11F_B10F)),y===i.RGBA){let N=P?Gr:Ke.getTransfer(J);k===i.FLOAT&&(D=i.RGBA32F),k===i.HALF_FLOAT&&(D=i.RGBA16F),k===i.UNSIGNED_BYTE&&(D=N===rt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&U&&(D=U.RGBA16_EXT),k===i.SHORT&&U&&(D=U.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(D=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(D=i.RGB5_A1)}return(D===i.R16F||D===i.R32F||D===i.RG16F||D===i.RG32F||D===i.RGBA16F||D===i.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function v(w,y){let k;return w?y===null||y===Bn||y===Gi?k=i.DEPTH24_STENCIL8:y===Qt?k=i.DEPTH32F_STENCIL8:y===fr&&(k=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bn||y===Gi?k=i.DEPTH_COMPONENT24:y===Qt?k=i.DEPTH_COMPONENT32F:y===fr&&(k=i.DEPTH_COMPONENT16),k}function S(w,y){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Mt&&w.minFilter!==gt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){let y=w.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function _(w){let y=w.target;y.removeEventListener("dispose",_),I(y)}function E(w){let y=n.get(w);if(y.__webglInit===void 0)return;let k=w.source,V=p.get(k);if(V){let J=V[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(w),Object.keys(V).length===0&&p.delete(k)}n.remove(w)}function C(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let k=w.source,V=p.get(k);delete V[y.__cacheKey],a.memory.textures--}function I(w){let y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let J=0;J<y.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[V][J]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=w.textures;for(let V=0,J=k.length;V<J;V++){let P=n.get(k[V]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(k[V])}n.remove(w)}let L=0;function O(){L=0}function F(){return L}function H(w){L=w}function q(){let w=L;return w>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function ne(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ce(w,y){let k=n.get(w);if(w.isVideoTexture&&z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){let V=w.image;if(V===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{me(k,w,y);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function Y(w,y){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){me(k,w,y);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function ie(w,y){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){me(k,w,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function ae(w,y){let k=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&k.__version!==w.version){Ce(k,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let ge={[$t]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},_e={[Mt]:i.NEAREST,[sc]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[gt]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},We={[bf]:i.NEVER,[Sf]:i.ALWAYS,[_f]:i.LESS,[Hc]:i.LEQUAL,[vf]:i.EQUAL,[Wc]:i.GEQUAL,[yf]:i.GREATER,[Mf]:i.NOTEQUAL};function De(w,y){if(y.type===Qt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===gt||y.magFilter===dr||y.magFilter===ys||y.magFilter===En||y.minFilter===gt||y.minFilter===dr||y.minFilter===ys||y.minFilter===En)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ge[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ge[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ge[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,We[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mt||y.minFilter!==ys&&y.minFilter!==En||y.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));let V=y.source,J=p.get(V);J===void 0&&(J={},p.set(V,J));let P=ne(y);if(P!==w.__cacheKey){J[P]===void 0&&(J[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[P].usedTimes++;let U=J[w.__cacheKey];U!==void 0&&(J[w.__cacheKey].usedTimes--,U.usedTimes===0&&C(y)),w.__cacheKey=P,w.__webglTexture=J[P].texture}return k}function $(w,y,k){return Math.floor(Math.floor(w/k)/y)}function re(w,y,k,V){let P=w.updateRanges;if(P.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,V,y.data);else{P.sort((Q,X)=>Q.start-X.start);let U=0;for(let Q=1;Q<P.length;Q++){let X=P[U],Z=P[Q],le=X.start+X.count,fe=$(Z.start,y.width,4),Te=$(X.start,y.width,4);Z.start<=le+1&&fe===Te&&$(Z.start+Z.count-1,y.width,4)===fe?X.count=Math.max(X.count,Z.start+Z.count-X.start):(++U,P[U]=Z)}P.length=U+1;let D=t.getParameter(i.UNPACK_ROW_LENGTH),N=t.getParameter(i.UNPACK_SKIP_PIXELS),K=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Q=0,X=P.length;Q<X;Q++){let Z=P[Q],le=Math.floor(Z.start/4),fe=Math.ceil(Z.count/4),Te=le%y.width,B=Math.floor(le/y.width),be=fe,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Te,B,be,oe,k,V,y.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,D),t.pixelStorei(i.UNPACK_SKIP_PIXELS,N),t.pixelStorei(i.UNPACK_SKIP_ROWS,K)}}function me(w,y,k){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);let J=Oe(w,y),P=y.source;t.bindTexture(V,w.__webglTexture,i.TEXTURE0+k);let U=n.get(P);if(P.version!==U.__version||J===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let oe=Ke.getPrimaries(Ke.workingColorSpace),ve=y.colorSpace===Gn?null:Ke.getPrimaries(y.colorSpace),we=y.colorSpace===Gn||oe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let N=m(y.image,!1,s.maxTextureSize);N=at(y,N);let K=r.convert(y.format,y.colorSpace),Q=r.convert(y.type),X=x(y.internalFormat,K,Q,y.normalized,y.colorSpace,y.isVideoTexture);De(V,y);let Z,le=y.mipmaps,fe=y.isVideoTexture!==!0,Te=U.__version===void 0||J===!0,B=P.dataReady,be=S(y,N);if(y.isDepthTexture)X=v(y.format===ei,y.type),Te&&(fe?t.texStorage2D(i.TEXTURE_2D,1,X,N.width,N.height):t.texImage2D(i.TEXTURE_2D,0,X,N.width,N.height,0,K,Q,null));else if(y.isDataTexture)if(le.length>0){fe&&Te&&t.texStorage2D(i.TEXTURE_2D,be,X,le[0].width,le[0].height);for(let oe=0,ve=le.length;oe<ve;oe++)Z=le[oe],fe?B&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Z.width,Z.height,K,Q,Z.data):t.texImage2D(i.TEXTURE_2D,oe,X,Z.width,Z.height,0,K,Q,Z.data);y.generateMipmaps=!1}else fe?(Te&&t.texStorage2D(i.TEXTURE_2D,be,X,N.width,N.height),B&&re(y,N,K,Q)):t.texImage2D(i.TEXTURE_2D,0,X,N.width,N.height,0,K,Q,N.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){fe&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,X,le[0].width,le[0].height,N.depth);for(let oe=0,ve=le.length;oe<ve;oe++)if(Z=le[oe],y.format!==rn)if(K!==null)if(fe){if(B)if(y.layerUpdates.size>0){let we=Ph(Z.width,Z.height,y.format,y.type);for(let ue of y.layerUpdates){let ze=Z.data.subarray(ue*we/Z.data.BYTES_PER_ELEMENT,(ue+1)*we/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ue,Z.width,Z.height,1,K,ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,N.depth,K,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,X,Z.width,Z.height,N.depth,0,Z.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,N.depth,K,Q,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,X,Z.width,Z.height,N.depth,0,K,Q,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{fe&&Te&&t.texStorage2D(i.TEXTURE_2D,be,X,le[0].width,le[0].height);for(let oe=0,ve=le.length;oe<ve;oe++)Z=le[oe],y.format!==rn?K!==null?fe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Z.width,Z.height,K,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,X,Z.width,Z.height,0,Z.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?B&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Z.width,Z.height,K,Q,Z.data):t.texImage2D(i.TEXTURE_2D,oe,X,Z.width,Z.height,0,K,Q,Z.data)}else if(y.isDataArrayTexture)if(fe){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,X,N.width,N.height,N.depth),B)if(y.layerUpdates.size>0){let oe=Ph(N.width,N.height,y.format,y.type);for(let ve of y.layerUpdates){let we=N.data.subarray(ve*oe/N.data.BYTES_PER_ELEMENT,(ve+1)*oe/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,N.width,N.height,1,K,Q,we)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,K,Q,N.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,N.width,N.height,N.depth,0,K,Q,N.data);else if(y.isData3DTexture)fe?(Te&&t.texStorage3D(i.TEXTURE_3D,be,X,N.width,N.height,N.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,K,Q,N.data)):t.texImage3D(i.TEXTURE_3D,0,X,N.width,N.height,N.depth,0,K,Q,N.data);else if(y.isFramebufferTexture){if(Te)if(fe)t.texStorage2D(i.TEXTURE_2D,be,X,N.width,N.height);else{let oe=N.width,ve=N.height;for(let we=0;we<be;we++)t.texImage2D(i.TEXTURE_2D,we,X,oe,ve,0,K,Q,null),oe>>=1,ve>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),N.parentNode!==oe){oe.appendChild(N),d.add(y),oe.onpaint=ve=>{let we=ve.changedElements;for(let ue of d)we.includes(ue.image)&&(ue.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,N);else{let we=i.RGBA,ue=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,ue,ze,N)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(fe&&Te){let oe=Ze(le[0]);t.texStorage2D(i.TEXTURE_2D,be,X,oe.width,oe.height)}for(let oe=0,ve=le.length;oe<ve;oe++)Z=le[oe],fe?B&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,K,Q,Z):t.texImage2D(i.TEXTURE_2D,oe,X,K,Q,Z);y.generateMipmaps=!1}else if(fe){if(Te){let oe=Ze(N);t.texStorage2D(i.TEXTURE_2D,be,X,oe.width,oe.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K,Q,N)}else t.texImage2D(i.TEXTURE_2D,0,X,K,Q,N);f(y)&&M(V),U.__version=P.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ce(w,y,k){if(y.image.length!==6)return;let V=Oe(w,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let P=n.get(J);if(J.version!==P.__version||V===!0){t.activeTexture(i.TEXTURE0+k);let U=Ke.getPrimaries(Ke.workingColorSpace),D=y.colorSpace===Gn?null:Ke.getPrimaries(y.colorSpace),N=y.colorSpace===Gn||U===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let K=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,X=[];for(let ue=0;ue<6;ue++)!K&&!Q?X[ue]=m(y.image[ue],!0,s.maxCubemapSize):X[ue]=Q?y.image[ue].image:y.image[ue],X[ue]=at(y,X[ue]);let Z=X[0],le=r.convert(y.format,y.colorSpace),fe=r.convert(y.type),Te=x(y.internalFormat,le,fe,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,be=P.__version===void 0||V===!0,oe=J.dataReady,ve=S(y,Z);De(i.TEXTURE_CUBE_MAP,y);let we;if(K){B&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Te,Z.width,Z.height);for(let ue=0;ue<6;ue++){we=X[ue].mipmaps;for(let ze=0;ze<we.length;ze++){let Fe=we[ze];y.format!==rn?le!==null?B?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Fe.width,Fe.height,le,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,Te,Fe.width,Fe.height,0,Fe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Fe.width,Fe.height,le,fe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,Te,Fe.width,Fe.height,0,le,fe,Fe.data)}}}else{if(we=y.mipmaps,B&&be){we.length>0&&ve++;let ue=Ze(X[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Te,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Q){B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,X[ue].width,X[ue].height,le,fe,X[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Te,X[ue].width,X[ue].height,0,le,fe,X[ue].data);for(let ze=0;ze<we.length;ze++){let bt=we[ze].image[ue].image;B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,bt.width,bt.height,le,fe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,Te,bt.width,bt.height,0,le,fe,bt.data)}}else{B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,le,fe,X[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Te,le,fe,X[ue]);for(let ze=0;ze<we.length;ze++){let Fe=we[ze];B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,le,fe,Fe.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,Te,le,fe,Fe.image[ue])}}}f(y)&&M(i.TEXTURE_CUBE_MAP),P.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function xe(w,y,k,V,J,P){let U=r.convert(k.format,k.colorSpace),D=r.convert(k.type),N=x(k.internalFormat,U,D,k.normalized,k.colorSpace),K=n.get(y),Q=n.get(k);if(Q.__renderTarget=y,!K.__hasExternalTextures){let X=Math.max(1,y.width>>P),Z=Math.max(1,y.height>>P);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,P,N,X,Z,y.depth,0,U,D,null):t.texImage2D(J,P,N,X,Z,0,U,D,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),et(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,Q.__webglTexture,0,Xe(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,Q.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(w,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let V=y.depthTexture,J=V&&V.isDepthTexture?V.type:null,P=v(y.stencilBuffer,J),U=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(y),P,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(y),P,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,P,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,w)}else{let V=y.textures;for(let J=0;J<V.length;J++){let P=V[J],U=r.convert(P.format,P.colorSpace),D=r.convert(P.type),N=x(P.internalFormat,U,D,P.normalized,P.colorSpace);et(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(y),N,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(y),N,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,N,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(w,y,k){let V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),De(i.TEXTURE_CUBE_MAP,y.depthTexture);let K=r.convert(y.depthTexture.format),Q=r.convert(y.depthTexture.type),X;y.depthTexture.format===jn?X=i.DEPTH_COMPONENT24:y.depthTexture.format===ei&&(X=i.DEPTH24_STENCIL8);for(let Z=0;Z<6;Z++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,X,y.width,y.height,0,K,Q,null)}}else ce(y.depthTexture,0);let P=J.__webglTexture,U=Xe(y),D=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,N=y.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===jn)et(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,D,P,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,N,D,P,0);else if(y.depthTexture.format===ei)et(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,D,P,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,N,D,P,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(w){let y=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let V=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=V}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)st(y.__webglFramebuffer[V],w,V);else{let V=w.texture.mipmaps;V&&V.length>0?st(y.__webglFramebuffer[0],w,0):st(y.__webglFramebuffer,w,0)}else if(k){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),Be(y.__webglDepthbuffer[V],w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,P)}}else{let V=w.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Be(y.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,P)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(w,y,k){let V=n.get(w);y!==void 0&&xe(V.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&j(w)}function pe(w){let y=w.texture,k=n.get(w),V=n.get(y);w.addEventListener("dispose",_);let J=w.textures,P=w.isWebGLCubeRenderTarget===!0,U=J.length>1;if(U||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,a.memory.textures++),P){k.__webglFramebuffer=[];for(let D=0;D<6;D++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[D]=[];for(let N=0;N<y.mipmaps.length;N++)k.__webglFramebuffer[D][N]=i.createFramebuffer()}else k.__webglFramebuffer[D]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let D=0;D<y.mipmaps.length;D++)k.__webglFramebuffer[D]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(U)for(let D=0,N=J.length;D<N;D++){let K=n.get(J[D]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&et(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let D=0;D<J.length;D++){let N=J[D];k.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[D]);let K=r.convert(N.format,N.colorSpace),Q=r.convert(N.type),X=x(N.internalFormat,K,Q,N.normalized,N.colorSpace,w.isXRRenderTarget===!0),Z=Xe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,X,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,k.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),De(i.TEXTURE_CUBE_MAP,y);for(let D=0;D<6;D++)if(y.mipmaps&&y.mipmaps.length>0)for(let N=0;N<y.mipmaps.length;N++)xe(k.__webglFramebuffer[D][N],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,N);else xe(k.__webglFramebuffer[D],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);f(y)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let D=0,N=J.length;D<N;D++){let K=J[D],Q=n.get(K),X=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(X=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,Q.__webglTexture),De(X,K),xe(k.__webglFramebuffer,w,K,i.COLOR_ATTACHMENT0+D,X,0),f(K)&&M(X)}t.unbindTexture()}else{let D=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(D=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(D,V.__webglTexture),De(D,y),y.mipmaps&&y.mipmaps.length>0)for(let N=0;N<y.mipmaps.length;N++)xe(k.__webglFramebuffer[N],w,y,i.COLOR_ATTACHMENT0,D,N);else xe(k.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,D,0);f(y)&&M(D),t.unbindTexture()}w.depthBuffer&&j(w)}function de(w){let y=w.textures;for(let k=0,V=y.length;k<V;k++){let J=y[k];if(f(J)){let P=T(w),U=n.get(J).__webglTexture;t.bindTexture(P,U),M(P),t.unbindTexture()}}}let Le=[],Ge=[];function je(w){if(w.samples>0){if(et(w)===!1){let y=w.textures,k=w.width,V=w.height,J=i.COLOR_BUFFER_BIT,P=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=n.get(w),D=y.length>1;if(D)for(let K=0;K<y.length;K++)t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let N=w.texture.mipmaps;N&&N.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let K=0;K<y.length;K++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),D){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let Q=n.get(y[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,k,V,0,0,k,V,J,i.NEAREST),c===!0&&(Le.length=0,Ge.length=0,Le.push(i.COLOR_ATTACHMENT0+K),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Le.push(P),Ge.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),D)for(let K=0;K<y.length;K++){t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let Q=n.get(y[K]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Xe(w){return Math.min(s.maxSamples,w.samples)}function et(w){let y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(w){let y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function at(w,y){let k=w.colorSpace,V=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==qt&&k!==Gn&&(Ke.getTransfer(k)===rt?(V!==rn||J!==Zt)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",k)),y}function Ze(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=ce,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=he,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dv(i,e){function t(n,s=Gn){let r,a=Ke.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===bh)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===Tt)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===rn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===Ma||n===Sa||n===wa||n===Ta)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===xc||n===bc||n===_c||n===vc||n===Ea||n===yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===xc)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_c)return r.COMPRESSED_R11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ea)return r.COMPRESSED_RG11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Fc||n===Nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===kc||n===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uc)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===Bc||n===Aa||n===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,b=null,g=typeof XRWebGLBinding<"u",m=new Yh,f={},M=t.getContextAttributes(),T=null,x=null,v=[],S=[],A=new Re,_=null,E=null,C=new Ft;C.viewport=new ut;let I=new Ft;I.viewport=new ut;let L=[C,I],O=new Jo,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=v[$];return re===void 0&&(re=new Qs,v[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=v[$];return re===void 0&&(re=new Qs,v[$]=re),re.getGripSpace()},this.getHand=function($){let re=v[$];return re===void 0&&(re=new Qs,v[$]=re),re.getHandSpace()};function q($){let re=S.indexOf($.inputSource);if(re===-1)return;let me=v[re];me!==void 0&&(me.update($.inputSource,$.frame,l||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function ne(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",ce);for(let $=0;$<v.length;$++){let re=S[$];re!==null&&(S[$]=null,v[$].disconnect(re))}F=null,H=null,m.reset();for(let $ in f)delete f[$];if(e.setRenderTarget(T),p=null,u=null,d=null,s=null,x=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",ce),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ce=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?ei:jn,Ce=M.stencil?Gi:Bn);let Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Rt(u.textureWidth,u.textureHeight,{format:rn,type:Zt,depthTexture:new Jn(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Rt(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce($){for(let re=0;re<$.removed.length;re++){let me=$.removed[re],Ce=S.indexOf(me);Ce>=0&&(S[Ce]=null,v[Ce].disconnect(me))}for(let re=0;re<$.added.length;re++){let me=$.added[re],Ce=S.indexOf(me);if(Ce===-1){for(let Be=0;Be<v.length;Be++)if(Be>=S.length){S.push(me),Ce=Be;break}else if(S[Be]===null){S[Be]=me,Ce=Be;break}if(Ce===-1)break}let xe=v[Ce];xe&&xe.connect(me)}}let Y=new G,ie=new G;function ae($,re,me){Y.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(me.matrixWorld);let Ce=Y.distanceTo(ie),xe=re.projectionMatrix.elements,Be=me.projectionMatrix.elements,st=xe[14]/(xe[10]-1),j=xe[14]/(xe[10]+1),he=(xe[9]+1)/xe[5],pe=(xe[9]-1)/xe[5],de=(xe[8]-1)/xe[0],Le=(Be[8]+1)/Be[0],Ge=st*de,je=st*Le,Xe=Ce/(-de+Le),et=Xe*-de;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(et),$.translateZ(Xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let z=st+Xe,at=j+Xe,Ze=Ge-et,w=je+(Ce-et),y=he*j/at*z,k=pe*j/at*z;$.projectionMatrix.makePerspective(Ze,w,y,k,z,at),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ge($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let re=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(me=m.depthFar)),O.near=I.near=C.near=re,O.far=I.far=C.far=me,(F!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,H=O.far),O.layers.mask=$.layers.mask|6,C.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Ce=$.parent,xe=O.cameras;ge(O,Ce);for(let Be=0;Be<xe.length;Be++)ge(xe[Be],Ce);xe.length===2?ae(O,C,I):O.projectionMatrix.copy(C.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),_e($,O,Ce)};function _e($,re,me){me===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=cs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return f[$]};let We=null;function De($,re){if(h=re.getViewerPose(l||a),b=re,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ce=!1;me.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let j=0;j<me.length;j++){let he=me[j],pe=null;if(p!==null)pe=p.getViewport(he);else{let Le=d.getViewSubImage(u,he);pe=Le.viewport,j===0&&(e.setRenderTargetTextures(x,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(x))}let de=L[j];de===void 0&&(de=new Ft,de.layers.enable(j),de.viewport=new ut,L[j]=de),de.matrix.fromArray(he.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(he.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(pe.x,pe.y,pe.width,pe.height),j===0&&(O.matrix.copy(de.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(de)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let j=d.getDepthInformation(me[0]);j&&j.isValid&&j.texture&&m.init(j,s.renderState)}if(xe&&xe.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let j=0;j<me.length;j++){let he=me[j].camera;if(he){let pe=f[he];pe||(pe=new Zr,f[he]=pe);let de=d.getCameraImage(he);pe.sourceTexture=de}}}}for(let me=0;me<v.length;me++){let Ce=S[me],xe=v[me];Ce!==null&&xe!==void 0&&xe.update(Ce,re,l||a)}We&&We($,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),b=null}let Oe=new Zf;Oe.setAnimationLoop(De),this.setAnimationLoop=function($){We=$},this.dispose=function(){}}},mv=new He,sp=new qe;sp.set(-1,0,0,0,1,0,0,0,1);function gv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,T,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),b(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),T=M.envMap,x=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sp),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){let S=v.program;n.uniformBlockBinding(x,S)}function l(x,v){let S=s[x.id];S===void 0&&(m(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",M));let A=v.program;n.updateUBOMapping(x,A);let _=e.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let v=d();x.__bindingPointIndex=v;let S=i.createBuffer(),A=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let v=s[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let _=0,E=S.length;_<E;_++){let C=S[_];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)p(C[I],_,I,A);else p(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,S,A){if(g(x,v,S,A)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let C=0;for(let I=0;I<E.length;I++){let L=E[I],O=f(L);b(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function b(x,v,S){typeof x=="number"||typeof x=="boolean"?v[0]=x:x.isMatrix3?(v[0]=x.elements[0],v[1]=x.elements[1],v[2]=x.elements[2],v[3]=0,v[4]=x.elements[3],v[5]=x.elements[4],v[6]=x.elements[5],v[7]=0,v[8]=x.elements[6],v[9]=x.elements[7],v[10]=x.elements[8],v[11]=0):ArrayBuffer.isView(x)?v.set(new x.constructor(x.buffer,x.byteOffset,v.length)):x.toArray(v,S)}function g(x,v,S,A){let _=x.value,E=v+"_"+S;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let C=A[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){let v=x.uniforms,S=0,A=16;for(let E=0,C=v.length;E<C;E++){let I=Array.isArray(v[E])?v[E]:[v[E]];for(let L=0,O=I.length;L<O;L++){let F=I[L],H=Array.isArray(F.value)?F.value:[F.value];for(let q=0,ne=H.length;q<ne;q++){let ce=H[q],Y=f(ce),ie=S%A,ae=ie%Y.boundary,ge=ie+ae;S+=ae,ge!==0&&A-ge<Y.storage&&(S+=A-ge),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Y.storage}}}let _=S%A;return _>0&&(S+=A-_),x.__size=S,x.__cache={},this}function f(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",x),v}function M(x){let v=x.target;v.removeEventListener("dispose",M);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function T(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function _v(){return ti===null&&(ti=new yn(bv,16,16,Vi,Tt),ti.name="DFG_LUT",ti.minFilter=gt,ti.magFilter=gt,ti.wrapS=ln,ti.wrapT=ln,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Kc=class{constructor(e={}){let{canvas:t=wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Zt}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;let g=p,m=new Set([uc,hc,lc]),f=new Set([Zt,Bn,fr,Gi,ac,oc]),M=new Uint32Array(4),T=new Int32Array(4),x=new G,v=null,S=null,A=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,L=null,O=null,F=null,H=null;this._outputColorSpace=St;let q=0,ne=0,ce=null,Y=-1,ie=null,ae=new ut,ge=new ut,_e=null,We=new ke(0),De=0,Oe=t.width,$=t.height,re=1,me=null,Ce=null,xe=new ut(0,0,Oe,$),Be=new ut(0,0,Oe,$),st=!1,j=new ir,he=!1,pe=!1,de=new He,Le=new G,Ge=new ut,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function et(){return ce===null?re:1}let z=n;function at(R,W){return t.getContext(R,W)}let Ze,w,y,k,V,J,P,U,D,N,K,Q,X,Z,le,fe,Te,B,be,oe,ve,we,ue;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),z===null){let W="webgl2";if(z=at(W,R),z===null)throw at(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(R){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Ve("WebGLRenderer: "+R.message),R}function ze(){Ze=new Eb(z),Ze.init(),ve=new dv(z,Ze),w=new gb(z,Ze,e,ve),y=new hv(z,Ze),w.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),O=z.createFramebuffer(),F=z.createFramebuffer(),H=z.createFramebuffer(),k=new Cb(z),V=new J_,J=new uv(z,Ze,y,V,w,ve,k),P=new Tb(C),U=new I0(z),we=new pb(z,U),D=new Ab(z,U,k,we),N=new Ib(z,D,U,we,k),B=new Pb(z,w,J),le=new xb(V),K=new Y_(C,P,Ze,w,we,le),Q=new gv(C,V),X=new Z_,Z=new sv(Ze),Te=new fb(C,P,y,N,b,c),fe=new lv(C,N,w),ue=new xv(z,k,w,y),be=new mb(z,Ze,k),oe=new Rb(z,Ze,k),k.programs=K.programs,C.capabilities=w,C.extensions=Ze,C.properties=V,C.renderLists=X,C.shadowMap=fe,C.state=y,C.info=k}g!==Zt&&(E=new Lb(g,t.width,t.height,o,s,r));let Fe=new Jh(C,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(Oe,$,!1))},this.getSize=function(R){return R.set(Oe,$)},this.setSize=function(R,W,se=!0){if(Fe.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=R,$=W,t.width=Math.floor(R*re),t.height=Math.floor(W*re),se===!0&&(t.style.width=R+"px",t.style.height=W+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Oe*re,$*re).floor()},this.setDrawingBufferSize=function(R,W,se){Oe=R,$=W,re=se,t.width=Math.floor(R*se),t.height=Math.floor(W*se),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(g===Zt){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ae)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,W,se,ee){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,W,se,ee),y.viewport(ae.copy(xe).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(Be)},this.setScissor=function(R,W,se,ee){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,W,se,ee),y.scissor(ge.copy(Be).multiplyScalar(re).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){y.setScissorTest(st=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){Ce=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,se=!0){let ee=0;if(R){let te=!1;if(ce!==null){let Se=ce.texture.format;te=m.has(Se)}if(te){let Se=ce.texture.type,Ae=f.has(Se),Me=Te.getClearColor(),Pe=Te.getClearAlpha(),Ne=Me.r,Ye=Me.g,tt=Me.b;Ae?(M[0]=Ne,M[1]=Ye,M[2]=tt,M[3]=Pe,z.clearBufferuiv(z.COLOR,0,M)):(T[0]=Ne,T[1]=Ye,T[2]=tt,T[3]=Pe,z.clearBufferiv(z.COLOR,0,T))}else ee|=z.COLOR_BUFFER_BIT}W&&(ee|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Te.dispose(),X.dispose(),Z.dispose(),V.dispose(),P.dispose(),N.dispose(),we.dispose(),ue.dispose(),K.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ju),Fe.removeEventListener("sessionend",$u),Zi.stop()};function bt(R){R.preventDefault(),Vr("WebGLRenderer: Context Lost."),I=!0}function ot(){Vr("WebGLRenderer: Context Restored."),I=!1;let R=k.autoReset,W=fe.enabled,se=fe.autoUpdate,ee=fe.needsUpdate,te=fe.type;ze(),k.autoReset=R,fe.enabled=W,fe.autoUpdate=se,fe.needsUpdate=ee,fe.type=te}function Pn(R){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Hn(R){let W=R.target;W.removeEventListener("dispose",Hn),mm(W)}function mm(R){gm(R),V.remove(R)}function gm(R){let W=V.get(R).programs;W!==void 0&&(W.forEach(function(se){K.releaseProgram(se)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,se,ee,te,Se){W===null&&(W=je);let Ae=te.isMesh&&te.matrixWorld.determinantAffine()<0,Me=_m(R,W,se,ee,te);y.setMaterial(ee,Ae);let Pe=se.index,Ne=1;if(ee.wireframe===!0){if(Pe=D.getWireframeAttribute(se),Pe===void 0)return;Ne=2}let Ye=se.drawRange,tt=se.attributes.position,Ie=Ye.start*Ne,ct=(Ye.start+Ye.count)*Ne;Se!==null&&(Ie=Math.max(Ie,Se.start*Ne),ct=Math.min(ct,(Se.start+Se.count)*Ne)),Pe!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,Pe.count)):tt!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,tt.count));let Dt=ct-Ie;if(Dt<0||Dt===1/0)return;we.setup(te,ee,Me,se,Pe);let vt,mt=be;if(Pe!==null&&(vt=U.get(Pe),mt=oe,mt.setIndex(vt)),te.isMesh)ee.wireframe===!0?(y.setLineWidth(ee.wireframeLinewidth*et()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(te.isLine){let Kt=ee.linewidth;Kt===void 0&&(Kt=1),y.setLineWidth(Kt*et()),te.isLineSegments?mt.setMode(z.LINES):te.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else te.isPoints?mt.setMode(z.POINTS):te.isSprite&&mt.setMode(z.TRIANGLES);if(te.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))mt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Kt=te._multiDrawStarts,Ee=te._multiDrawCounts,tn=te._multiDrawCount,it=Pe?U.get(Pe).bytesPerElement:1,bn=V.get(ee).currentProgram.getUniforms();for(let Wn=0;Wn<tn;Wn++)bn.setValue(z,"_gl_DrawID",Wn),mt.render(Kt[Wn]/it,Ee[Wn])}else if(te.isInstancedMesh)mt.renderInstances(Ie,Dt,te.count);else if(se.isInstancedBufferGeometry){let Kt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ee=Math.min(se.instanceCount,Kt);mt.renderInstances(Ie,Dt,Ee)}else mt.render(Ie,Dt)};function Yu(R,W,se,ee){L!==null&&R.isNodeMaterial&&L.setObject(ee,R),he===!0&&le.setState(R,se,!1),R.transparent===!0&&R.side===wn&&R.forceSinglePass===!1?(R.side=Xt,R.needsUpdate=!0,Za(R,W,ee),R.side=Qn,R.needsUpdate=!0,Za(R,W,ee),R.side=wn):Za(R,W,ee)}this.compile=function(R,W,se=null){se===null&&(se=R),L!==null&&L.renderStart(R,W,se),S=Z.get(se),S.init(W),_.push(S),se.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),R!==se&&R.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),pe=this.localClippingEnabled,he=le.init(this.clippingPlanes,pe),he===!0&&le.setGlobalState(this.clippingPlanes,W),L!==null&&fe.render(S.state.shadowsArray,se,W);let ee=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Se=te.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Me=Se[Ae];Yu(Me,se,W,te),ee.add(Me)}else Yu(Se,se,W,te),ee.add(Se)}),S=_.pop(),L!==null&&L.renderEnd(),ee},this.compileAsync=function(R,W,se=null){let ee=this.compile(R,W,se);return new Promise(te=>{function Se(){if(ee.forEach(function(Ae){let Pe=V.get(Ae).currentProgram;(Pe===void 0||Pe.isReady())&&ee.delete(Ae)}),ee.size===0){te(R);return}setTimeout(Se,10)}Ze.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Rl=null;function xm(R){Rl&&Rl(R)}function Ju(){Zi.stop()}function $u(){Zi.start()}let Zi=new Zf;Zi.setAnimationLoop(xm),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(R){Rl=R,Fe.setAnimationLoop(R),R===null?Zi.stop():Zi.start()},Fe.addEventListener("sessionstart",Ju),Fe.addEventListener("sessionend",$u),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(R,W);let se=Fe.enabled===!0&&Fe.isPresenting===!0,ee=E!==null&&(ce===null||se)&&E.begin(C,ce);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(W),W=Fe.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,W,ce),S=Z.get(R,_.length),S.init(W),S.state.textureUnits=J.getTextureUnits(),_.push(S),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(de,Nn,W.reversedDepth),pe=this.localClippingEnabled,he=le.init(this.clippingPlanes,pe),v=X.get(R,A.length),v.init(),A.push(v),Fe.enabled===!0&&Fe.isPresenting===!0){let Ae=C.xr.getDepthSensingMesh();Ae!==null&&Cl(Ae,W,-1/0,C.sortObjects)}Cl(R,W,0,C.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),C.sortObjects===!0&&v.sort(me,Ce),Xe=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Xe&&Te.addToRenderList(v,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&le.beginShadows();let te=S.state.shadowsArray;if(fe.render(te,R,W),he===!0&&le.endShadows(),(ee&&E.hasRenderPass())===!1){let Ae=v.opaque,Me=v.transmissive;if(S.setupLights(),W.isArrayCamera){let Pe=W.cameras;if(Me.length>0)for(let Ne=0,Ye=Pe.length;Ne<Ye;Ne++){let tt=Pe[Ne];Qu(Ae,Me,R,tt)}Xe&&Te.render(R);for(let Ne=0,Ye=Pe.length;Ne<Ye;Ne++){let tt=Pe[Ne];Zu(v,R,tt,tt.viewport)}}else Me.length>0&&Qu(Ae,Me,R,W),Xe&&Te.render(R),Zu(v,R,W)}ce!==null&&ne===0&&(J.updateMultisampleRenderTarget(ce),J.updateRenderTargetMipmap(ce)),ee&&E.end(C),R.isScene===!0&&R.onAfterRender(C,R,W),we.resetDefaultState(),Y=-1,ie=null,_.pop(),_.length>0?(S=_[_.length-1],J.setTextureUnits(S.state.textureUnits),he===!0&&le.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,L!==null&&L.renderEnd()};function Cl(R,W,se,ee){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(j)){ee&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);let Ae=N.update(R),Me=R.material;Me.visible&&v.push(R,Ae,Me,se,Ge.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(j))){let Ae=N.update(R),Me=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ge.copy(Ae.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Me)){let Pe=Ae.groups;for(let Ne=0,Ye=Pe.length;Ne<Ye;Ne++){let tt=Pe[Ne],Ie=Me[tt.materialIndex];Ie&&Ie.visible&&v.push(R,Ae,Ie,se,Ge.z,tt,W)}}else Me.visible&&v.push(R,Ae,Me,se,Ge.z,null,W)}}let Se=R.children;for(let Ae=0,Me=Se.length;Ae<Me;Ae++)Cl(Se[Ae],W,se,ee)}function Zu(R,W,se,ee){let{opaque:te,transmissive:Se,transparent:Ae}=R;S.setupLightsView(se),he===!0&&le.setGlobalState(C.clippingPlanes,se),ee&&y.viewport(ae.copy(ee)),te.length>0&&$a(te,W,se),Se.length>0&&$a(Se,W,se),Ae.length>0&&$a(Ae,W,se),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Qu(R,W,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let Ie=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Rt(1,1,{generateMipmaps:!0,type:Ie?Tt:Zt,minFilter:En,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let Se=S.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||ae;Se.setSize(Ae.z*C.transmissionResolutionScale,Ae.w*C.transmissionResolutionScale);let Me=C.getRenderTarget(),Pe=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(Se),C.getClearColor(We),De=C.getClearAlpha(),De<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&Te.render(se);let Ye=C.toneMapping;C.toneMapping=zn;let tt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),he===!0&&le.setGlobalState(C.clippingPlanes,ee),$a(R,se,ee),J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,Dt=W.length;ct<Dt;ct++){let vt=W[ct],{object:mt,geometry:Kt,material:Ee,group:tn}=vt;if(Ee.side===wn&&mt.layers.test(ee.layers)){let it=Ee.side;Ee.side=Xt,Ee.needsUpdate=!0,ed(mt,se,ee,Kt,Ee,tn),Ee.side=it,Ee.needsUpdate=!0,Ie=!0}}Ie===!0&&(J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se))}C.setRenderTarget(Me,Pe,Ne),C.setClearColor(We,De),tt!==void 0&&(ee.viewport=tt),C.toneMapping=Ye}function $a(R,W,se){let ee=W.isScene===!0?W.overrideMaterial:null;for(let te=0,Se=R.length;te<Se;te++){let Ae=R[te],{object:Me,geometry:Pe,group:Ne}=Ae,Ye=Ae.material;Ye.allowOverride===!0&&ee!==null&&(Ye=ee),Me.layers.test(se.layers)&&ed(Me,W,se,Pe,Ye,Ne)}}function ed(R,W,se,ee,te,Se){L!==null&&te.isNodeMaterial&&L.setObject(R,te),R.onBeforeRender(C,W,se,ee,te,Se),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(C,W,se,ee,R,Se),te.transparent===!0&&te.side===wn&&te.forceSinglePass===!1?(te.side=Xt,te.needsUpdate=!0,C.renderBufferDirect(se,W,ee,te,R,Se),te.side=Qn,te.needsUpdate=!0,C.renderBufferDirect(se,W,ee,te,R,Se),te.side=wn):C.renderBufferDirect(se,W,ee,te,R,Se),R.onAfterRender(C,W,se,ee,te,Se)}function Za(R,W,se){W.isScene!==!0&&(W=je);let ee=V.get(R),te=S.state.lights,Se=S.state.shadowsArray,Ae=te.state.version,Me=K.getParameters(R,te.state,Se,W,se,S.state.lightProbeGridArray),Pe=K.getProgramCacheKey(Me),Ne=ee.programs;ee.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;let Ye=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ee.envMap=P.get(R.envMap||ee.environment,Ye),ee.envMapRotation=ee.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",Hn),Ne=new Map,ee.programs=Ne);let tt=Ne.get(Pe);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Ae)return nd(R,Me),tt}else Me.uniforms=K.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,se,Me),R.onBeforeCompile(Me,C),tt=K.acquireProgram(Me,Pe),Ne.set(Pe,tt),ee.uniforms=Me.uniforms;let Ie=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=le.uniform),nd(R,Me),ee.needsLights=ym(R),ee.lightsStateVersion=Ae,ee.needsLights&&(Ie.ambientLightColor.value=te.state.ambient,Ie.lightProbe.value=te.state.probe,Ie.sunLights.value=te.state.sun,Ie.sunLightShadows.value=te.state.sunShadow,Ie.directionalLights.value=te.state.directional,Ie.directionalLightShadows.value=te.state.directionalShadow,Ie.spotLights.value=te.state.spot,Ie.spotLightShadows.value=te.state.spotShadow,Ie.rectAreaLights.value=te.state.rectArea,Ie.ltc_1.value=te.state.rectAreaLTC1,Ie.ltc_2.value=te.state.rectAreaLTC2,Ie.pointLights.value=te.state.point,Ie.pointLightShadows.value=te.state.pointShadow,Ie.hemisphereLights.value=te.state.hemi,Ie.sunShadowMatrix.value=te.state.sunShadowMatrix,Ie.sunShadowCascade.value=te.state.sunShadowCascade,Ie.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ie.spotLightMatrix.value=te.state.spotLightMatrix,Ie.spotLightMap.value=te.state.spotLightMap,Ie.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=S.state.lightProbeGridArray.length>0,ee.currentProgram=tt,ee.uniformsList=null,tt}function td(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=br.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function nd(R,W){let se=V.get(R);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function bm(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let se=0,ee=R.length;se<ee;se++){let te=R[se];if(te.texture!==null&&te.boundingBox.containsPoint(x))return te}return null}function _m(R,W,se,ee,te){W.isScene!==!0&&(W=je),J.resetTextureUnits();let Se=W.fog,Ae=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,Me=ce===null?C.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ke.workingColorSpace,Pe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ne=P.get(ee.envMap||Ae,Pe),Ye=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ie=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,Dt=!!se.morphAttributes.color,vt=zn;ee.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(vt=C.toneMapping);let mt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Kt=mt!==void 0?mt.length:0,Ee=V.get(ee),tn=S.state.lights;if(he===!0&&(pe===!0||R!==ie)){let _t=R===ie&&ee.id===Y;le.setState(ee,R,_t)}let it=!1;ee.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==tn.state.version||Ee.outputColorSpace!==Me||te.isBatchedMesh&&Ee.batching===!1||!te.isBatchedMesh&&Ee.batching===!0||te.isBatchedMesh&&Ee.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ee.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ee.instancing===!1||!te.isInstancedMesh&&Ee.instancing===!0||te.isSkinnedMesh&&Ee.skinning===!1||!te.isSkinnedMesh&&Ee.skinning===!0||te.isInstancedMesh&&Ee.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ee.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ee.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ee.instancingMorph===!1&&te.morphTexture!==null||Ee.envMap!==Ne||ee.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==le.numPlanes||Ee.numIntersection!==le.numIntersection)||Ee.vertexAlphas!==Ye||Ee.vertexTangents!==tt||Ee.morphTargets!==Ie||Ee.morphNormals!==ct||Ee.morphColors!==Dt||Ee.toneMapping!==vt||Ee.morphTargetsCount!==Kt||!!Ee.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Ee.__version=ee.version);let bn=Ee.currentProgram;it===!0&&(bn=Za(ee,W,te),L&&ee.isNodeMaterial&&L.onUpdateProgram(ee,bn,Ee));let Wn=!1,wi=!1,Cs=!1,ft=bn.getUniforms(),Et=Ee.uniforms;if(y.useProgram(bn.program)&&(Wn=!0,wi=!0,Cs=!0),ee.id!==Y&&(Y=ee.id,wi=!0),Ee.needsLights){let _t=bm(S.state.lightProbeGridArray,te);Ee.lightProbeGrid!==_t&&(Ee.lightProbeGrid=_t,wi=!0)}if(Wn||ie!==R){y.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ft.setValue(z,"projectionMatrix",R.projectionMatrix),ft.setValue(z,"viewMatrix",R.matrixWorldInverse);let Ei=ft.map.cameraPosition;Ei!==void 0&&Ei.setValue(z,Le.setFromMatrixPosition(R.matrixWorld)),w.logarithmicDepthBuffer&&ft.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ft.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),ie!==R&&(ie=R,wi=!0,Cs=!0)}if(Ee.needsLights&&(tn.state.sunShadowMap.length>0&&ft.setValue(z,"sunShadowMap",tn.state.sunShadowMap,J),tn.state.directionalShadowMap.length>0&&ft.setValue(z,"directionalShadowMap",tn.state.directionalShadowMap,J),tn.state.spotShadowMap.length>0&&ft.setValue(z,"spotShadowMap",tn.state.spotShadowMap,J),tn.state.pointShadowMap.length>0&&ft.setValue(z,"pointShadowMap",tn.state.pointShadowMap,J)),te.isSkinnedMesh){ft.setOptional(z,te,"bindMatrix"),ft.setOptional(z,te,"bindMatrixInverse");let _t=te.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ft.setValue(z,"boneTexture",_t.boneTexture,J))}te.isBatchedMesh&&(ft.setOptional(z,te,"batchingTexture"),ft.setValue(z,"batchingTexture",te._matricesTexture,J),ft.setOptional(z,te,"batchingIdTexture"),ft.setValue(z,"batchingIdTexture",te._indirectTexture,J),ft.setOptional(z,te,"batchingColorTexture"),te._colorsTexture!==null&&ft.setValue(z,"batchingColorTexture",te._colorsTexture,J));let Ti=se.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&B.update(te,se,bn),(wi||Ee.receiveShadow!==te.receiveShadow)&&(Ee.receiveShadow=te.receiveShadow,ft.setValue(z,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(Et.envMapIntensity.value=W.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=_v()),wi){if(ft.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&vm(Et,Cs),Se&&ee.fog===!0&&Q.refreshFogUniforms(Et,Se),Q.refreshMaterialUniforms(Et,ee,re,$,S.state.transmissionRenderTarget[R.id]),Ee.needsLights&&Ee.lightProbeGrid){let _t=Ee.lightProbeGrid;Et.probesSH.value=_t.texture,Et.probesMin.value.copy(_t.boundingBox.min),Et.probesMax.value.copy(_t.boundingBox.max),Et.probesResolution.value.copy(_t.resolution)}br.upload(z,td(Ee),Et,J)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(br.upload(z,td(Ee),Et,J),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ft.setValue(z,"center",te.center),ft.setValue(z,"modelViewMatrix",te.modelViewMatrix),ft.setValue(z,"normalMatrix",te.normalMatrix),ft.setValue(z,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let _t=ee.uniformsGroups;for(let Ei=0,Ps=_t.length;Ei<Ps;Ei++){let sd=_t[Ei];ue.update(sd,bn),ue.bind(sd,bn)}}return bn}function vm(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ym(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(R,W,se){let ee=V.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),V.get(R.texture).__webglTexture=W,V.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){let se=V.get(R);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,se=0){ce=R,q=W,ne=se;let ee=null,te=!1,Se=!1;if(R){let Me=V.get(R);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(z.FRAMEBUFFER,Me.__webglFramebuffer),ae.copy(R.viewport),ge.copy(R.scissor),_e=R.scissorTest,y.viewport(ae),y.scissor(ge),y.setScissorTest(_e),Y=-1;return}else if(Me.__webglFramebuffer===void 0)J.setupRenderTarget(R);else if(Me.__hasExternalTextures)J.rebindTextures(R,V.get(R.texture).__webglTexture,V.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ye=R.depthTexture;if(Me.__boundDepthTexture!==Ye){if(Ye!==null&&V.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(R)}}let Pe=R.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);let Ne=V.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[W])?ee=Ne[W][se]:ee=Ne[W],te=!0):R.samples>0&&J.useMultisampledRTT(R)===!1?ee=V.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?ee=Ne[se]:ee=Ne,ae.copy(R.viewport),ge.copy(R.scissor),_e=R.scissorTest}else ae.copy(xe).multiplyScalar(re).floor(),ge.copy(Be).multiplyScalar(re).floor(),_e=st;if(se!==0&&(ee=O),y.bindFramebuffer(z.FRAMEBUFFER,ee)&&y.drawBuffers(R,ee),y.viewport(ae),y.scissor(ge),y.setScissorTest(_e),te){let Me=V.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Me.__webglTexture,se)}else if(Se){let Me=W;for(let Pe=0;Pe<R.textures.length;Pe++){let Ne=V.get(R.textures[Pe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,se,Me)}}else if(R!==null&&se!==0){let Me=V.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Me.__webglTexture,se)}Y=-1};function id(R){let W=V.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=w.textureFormatReadable(R.format),W.__typeReadable=w.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,se,ee,te,Se,Ae,Me=0){if(!(R&&R.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=V.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){y.bindFramebuffer(z.FRAMEBUFFER,Pe);try{let Ne=R.textures[Me],Ye=Ne.format,tt=Ne.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Me);let Ie=id(Ne);if(Ie.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ee&&se>=0&&se<=R.height-te&&z.readPixels(W,se,ee,te,ve.convert(Ye),ve.convert(tt),Se)}finally{let Ne=ce!==null?V.get(ce).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,W,se,ee,te,Se,Ae,Me=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=V.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(W>=0&&W<=R.width-ee&&se>=0&&se<=R.height-te){y.bindFramebuffer(z.FRAMEBUFFER,Pe);let Ne=R.textures[Me],Ye=Ne.format,tt=Ne.type;R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Me);let Ie=id(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(W,se,ee,te,ve.convert(Ye),ve.convert(tt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Dt=ce!==null?V.get(ce).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,Dt);let vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ef(z,vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ct),z.deleteSync(vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,se=0){let ee=Math.pow(2,-se),te=Math.floor(R.image.width*ee),Se=Math.floor(R.image.height*ee),Ae=W!==null?W.x:0,Me=W!==null?W.y:0;J.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Ae,Me,te,Se),y.unbindTexture()},this.copyTextureToTexture=function(R,W,se=null,ee=null,te=0,Se=0){let Ae,Me,Pe,Ne,Ye,tt,Ie,ct,Dt,vt=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(se!==null)Ae=se.max.x-se.min.x,Me=se.max.y-se.min.y,Pe=se.isBox3?se.max.z-se.min.z:1,Ne=se.min.x,Ye=se.min.y,tt=se.isBox3?se.min.z:0;else{let Et=Math.pow(2,-te);Ae=Math.floor(vt.width*Et),Me=Math.floor(vt.height*Et),R.isDataArrayTexture?Pe=vt.depth:R.isData3DTexture?Pe=Math.floor(vt.depth*Et):Pe=1,Ne=0,Ye=0,tt=0}ee!==null?(Ie=ee.x,ct=ee.y,Dt=ee.z):(Ie=0,ct=0,Dt=0);let mt=ve.convert(W.format),Kt=ve.convert(W.type),Ee;W.isData3DTexture?(J.setTexture3D(W,0),Ee=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(J.setTexture2DArray(W,0),Ee=z.TEXTURE_2D_ARRAY):(J.setTexture2D(W,0),Ee=z.TEXTURE_2D),y.activeTexture(z.TEXTURE0),y.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let tn=y.getParameter(z.UNPACK_ROW_LENGTH),it=y.getParameter(z.UNPACK_IMAGE_HEIGHT),bn=y.getParameter(z.UNPACK_SKIP_PIXELS),Wn=y.getParameter(z.UNPACK_SKIP_ROWS),wi=y.getParameter(z.UNPACK_SKIP_IMAGES);y.pixelStorei(z.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(z.UNPACK_SKIP_ROWS,Ye),y.pixelStorei(z.UNPACK_SKIP_IMAGES,tt);let Cs=R.isDataArrayTexture||R.isData3DTexture,ft=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){let Et=V.get(R),Ti=V.get(W),_t=V.get(Et.__renderTarget),Ei=V.get(Ti.__renderTarget);y.bindFramebuffer(z.READ_FRAMEBUFFER,_t.__webglFramebuffer),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ps=0;Ps<Pe;Ps++)Cs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(R).__webglTexture,te,tt+Ps),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(W).__webglTexture,Se,Dt+Ps)),z.blitFramebuffer(Ne,Ye,Ae,Me,Ie,ct,Ae,Me,z.DEPTH_BUFFER_BIT,z.NEAREST);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||V.has(R)){let Et=V.get(R),Ti=V.get(W);y.bindFramebuffer(z.READ_FRAMEBUFFER,F),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<Pe;_t++)Cs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Et.__webglTexture,te,tt+_t):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Et.__webglTexture,te),ft?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ti.__webglTexture,Se,Dt+_t):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ti.__webglTexture,Se),te!==0?z.blitFramebuffer(Ne,Ye,Ae,Me,Ie,ct,Ae,Me,z.COLOR_BUFFER_BIT,z.NEAREST):ft?z.copyTexSubImage3D(Ee,Se,Ie,ct,Dt+_t,Ne,Ye,Ae,Me):z.copyTexSubImage2D(Ee,Se,Ie,ct,Ne,Ye,Ae,Me);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ft?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Ee,Se,Ie,ct,Dt,Ae,Me,Pe,mt,Kt,vt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ee,Se,Ie,ct,Dt,Ae,Me,Pe,mt,vt.data):z.texSubImage3D(Ee,Se,Ie,ct,Dt,Ae,Me,Pe,mt,Kt,vt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,Ie,ct,Ae,Me,mt,Kt,vt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,Ie,ct,vt.width,vt.height,mt,vt.data):z.texSubImage2D(z.TEXTURE_2D,Se,Ie,ct,Ae,Me,mt,Kt,vt);y.pixelStorei(z.UNPACK_ROW_LENGTH,tn),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),y.pixelStorei(z.UNPACK_SKIP_PIXELS,bn),y.pixelStorei(z.UNPACK_SKIP_ROWS,Wn),y.pixelStorei(z.UNPACK_SKIP_IMAGES,wi),Se===0&&W.generateMipmaps&&z.generateMipmap(Ee),y.unbindTexture()},this.initRenderTarget=function(R){V.get(R).__webglFramebuffer===void 0&&J.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?J.setTextureCube(R,0):R.isData3DTexture?J.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?J.setTexture2DArray(R,0):J.setTexture2D(R,0),y.unbindTexture()},this.resetState=function(){q=0,ne=0,ce=null,y.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var rp={type:"change"},Qh={type:"start"},op={type:"end"},$c=new Yn,ap=new mn,vv=Math.cos(70*Ca.DEG2RAD),Bt=new G,dn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6,Zc=class extends fa{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Nt,this._lastTargetPosition=new G,this._quat=new Nt().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sn,this._sphericalDelta=new Sn,this._scale=1,this._panOffset=new G,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new G,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mv.bind(this),this._onPointerDown=yv.bind(this),this._onPointerUp=Sv.bind(this),this._onContextMenu=Pv.bind(this),this._onMouseWheel=Ev.bind(this),this._onKeyDown=Av.bind(this),this._onTouchStart=Rv.bind(this),this._onTouchMove=Cv.bind(this),this._onMouseDown=wv.bind(this),this._onMouseMove=Tv.bind(this),this._interceptControlDown=Iv.bind(this),this._interceptControlUp=Dv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rp),this.update(),this.state=dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=dn:n>Math.PI&&(n-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Bt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<vv?this.object.lookAt(this.target):(ap.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(ap,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(rp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Mv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(op),this.state=dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=dt.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Qh)}function Tv(i){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ev(i){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(i.preventDefault(),this.dispatchEvent(Qh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(op))}function Av(i){this.enabled!==!1&&this._handleKeyDown(i)}function Rv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=dt.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=dt.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Qh)}function Cv(i){switch(this._trackPointer(i),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=dt.NONE}}function Pv(i){this.enabled!==!1&&i.preventDefault()}function Iv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var La=new G;function Rn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;La.copy(e),La[n]=0,La.normalize();let l=.5*a/(a+o),h=1-La.angleTo(i)/c;return Math.sign(La[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Qc=class i extends Mn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new G,l=new G,h=new G(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,b=d.length/6,g=new G,m=.5/a;for(let f=0,M=0;f<d.length;f+=3,M+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=h.x*Math.sign(c.x)+l.x*r,d[f+1]=h.y*Math.sign(c.y)+l.y*r,d[f+2]=h.z*Math.sign(c.z)+l.z*r,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/b)){case 0:g.set(1,0,0),p[M+0]=Rn(g,l,"z","y",r,n),p[M+1]=1-Rn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),p[M+0]=1-Rn(g,l,"z","y",r,n),p[M+1]=1-Rn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),p[M+0]=1-Rn(g,l,"x","z",r,e),p[M+1]=Rn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),p[M+0]=1-Rn(g,l,"x","z",r,e),p[M+1]=1-Rn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),p[M+0]=1-Rn(g,l,"x","y",r,e),p[M+1]=1-Rn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),p[M+0]=Rn(g,l,"x","y",r,e),p[M+1]=1-Rn(g,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var el=class extends ls{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Mn;e.deleteAttribute("uv");let t=new gn({side:Xt}),n=new gn,s=new gs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new hs(e,n,6),o=new yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new lt(e,vr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new lt(e,vr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new lt(e,vr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new lt(e,vr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new lt(e,vr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new lt(e,vr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function vr(i){return new ia({color:0,emissive:16777215,emissiveIntensity:i})}var yr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Lv=new Zn(-1,1,1,-1,0,1),eu=class extends Ct{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},Fv=new eu,Wi=class{constructor(e){this._mesh=new lt(Fv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var tl=class extends xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=An.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},nl=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var il=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tl(yr),this.copyPass.material.blending=Pt,this.timer=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fa!==void 0&&(a instanceof Fa?n=!0:a instanceof nl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sl=class extends xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Na={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new He},cameraProjectionMatrixInverse:{value:new He},cameraWorldMatrix:{value:new He},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ua={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},rl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function cp(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Nv(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new G(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new yn(s,e,e);return r.wrapS=$t,r.wrapT=$t,r.needsUpdate=!0,r}function Nv(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var ka={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:tu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Re},cameraProjectionMatrixInverse:{value:new He},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function tu(i,e,t){let n=Uv(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Uv(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new G(Math.cos(r),Math.sin(r),a))}return n}var al=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,u=c-d,p=l-d,b=e-u,g=t-p,m,f;b>g?(m=1,f=0):(m=0,f=1);let M=b-m+h,T=g-f+h,x=b-1+2*h,v=g-1+2*h,S=c&255,A=l&255,_=this.perm[S+this.perm[A]]%12,E=this.perm[S+m+this.perm[A+f]]%12,C=this.perm[S+1+this.perm[A+1]]%12,I=.5-b*b-g*g;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[_],b,g));let L=.5-M*M-T*T;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[E],M,T));let O=.5-x*x-v*v;return O<0?r=0:(O*=O,r=O*O*this._dot(this.grad3[C],x,v)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),d=Math.floor(t+l),u=Math.floor(n+l),p=1/6,b=(h+d+u)*p,g=h-b,m=d-b,f=u-b,M=e-g,T=t-m,x=n-f,v,S,A,_,E,C;M>=T?T>=x?(v=1,S=0,A=0,_=1,E=1,C=0):M>=x?(v=1,S=0,A=0,_=1,E=0,C=1):(v=0,S=0,A=1,_=1,E=0,C=1):T<x?(v=0,S=0,A=1,_=0,E=1,C=1):M<x?(v=0,S=1,A=0,_=0,E=1,C=1):(v=0,S=1,A=0,_=1,E=1,C=0);let I=M-v+p,L=T-S+p,O=x-A+p,F=M-_+2*p,H=T-E+2*p,q=x-C+2*p,ne=M-1+3*p,ce=T-1+3*p,Y=x-1+3*p,ie=h&255,ae=d&255,ge=u&255,_e=this.perm[ie+this.perm[ae+this.perm[ge]]]%12,We=this.perm[ie+v+this.perm[ae+S+this.perm[ge+A]]]%12,De=this.perm[ie+_+this.perm[ae+E+this.perm[ge+C]]]%12,Oe=this.perm[ie+1+this.perm[ae+1+this.perm[ge+1]]]%12,$=.6-M*M-T*T-x*x;$<0?s=0:($*=$,s=$*$*this._dot3(this.grad3[_e],M,T,x));let re=.6-I*I-L*L-O*O;re<0?r=0:(re*=re,r=re*re*this._dot3(this.grad3[We],I,L,O));let me=.6-F*F-H*H-q*q;me<0?a=0:(me*=me,a=me*me*this._dot3(this.grad3[De],F,H,q));let Ce=.6-ne*ne-ce*ce-Y*Y;return Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this._dot3(this.grad3[Oe],ne,ce,Y)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,u,p,b,g=(e+t+n+s)*c,m=Math.floor(e+g),f=Math.floor(t+g),M=Math.floor(n+g),T=Math.floor(s+g),x=(m+f+M+T)*l,v=m-x,S=f-x,A=M-x,_=T-x,E=e-v,C=t-S,I=n-A,L=s-_,O=E>C?32:0,F=E>I?16:0,H=C>I?8:0,q=E>L?4:0,ne=C>L?2:0,ce=I>L?1:0,Y=O+F+H+q+ne+ce,ie=a[Y][0]>=3?1:0,ae=a[Y][1]>=3?1:0,ge=a[Y][2]>=3?1:0,_e=a[Y][3]>=3?1:0,We=a[Y][0]>=2?1:0,De=a[Y][1]>=2?1:0,Oe=a[Y][2]>=2?1:0,$=a[Y][3]>=2?1:0,re=a[Y][0]>=1?1:0,me=a[Y][1]>=1?1:0,Ce=a[Y][2]>=1?1:0,xe=a[Y][3]>=1?1:0,Be=E-ie+l,st=C-ae+l,j=I-ge+l,he=L-_e+l,pe=E-We+2*l,de=C-De+2*l,Le=I-Oe+2*l,Ge=L-$+2*l,je=E-re+3*l,Xe=C-me+3*l,et=I-Ce+3*l,z=L-xe+3*l,at=E-1+4*l,Ze=C-1+4*l,w=I-1+4*l,y=L-1+4*l,k=m&255,V=f&255,J=M&255,P=T&255,U=o[k+o[V+o[J+o[P]]]]%32,D=o[k+ie+o[V+ae+o[J+ge+o[P+_e]]]]%32,N=o[k+We+o[V+De+o[J+Oe+o[P+$]]]]%32,K=o[k+re+o[V+me+o[J+Ce+o[P+xe]]]]%32,Q=o[k+1+o[V+1+o[J+1+o[P+1]]]]%32,X=.6-E*E-C*C-I*I-L*L;X<0?h=0:(X*=X,h=X*X*this._dot4(r[U],E,C,I,L));let Z=.6-Be*Be-st*st-j*j-he*he;Z<0?d=0:(Z*=Z,d=Z*Z*this._dot4(r[D],Be,st,j,he));let le=.6-pe*pe-de*de-Le*Le-Ge*Ge;le<0?u=0:(le*=le,u=le*le*this._dot4(r[N],pe,de,Le,Ge));let fe=.6-je*je-Xe*Xe-et*et-z*z;fe<0?p=0:(fe*=fe,p=fe*fe*this._dot4(r[K],je,Xe,et,z));let Te=.6-at*at-Ze*Ze-w*w-y*y;return Te<0?b=0:(Te*=Te,b=Te*Te*this._dot4(r[Q],at,Ze,w,y)),27*(h+d+u+p+b)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Mr=class i extends xn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=cp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Rt(this.width,this.height,{type:Tt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new wt({defines:Object.assign({},Na.defines),uniforms:An.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,blending:Pt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new na,this.normalMaterial.blending=Pt,this.pdMaterial=new wt({defines:Object.assign({},ka.defines),uniforms:An.clone(ka.uniforms),vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new wt({defines:Object.assign({},Ua.defines),uniforms:An.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:Pt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new wt({uniforms:An.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ma,blendDst:bs,blendEquation:Tn,blendSrcAlpha:pa,blendDstAlpha:bs,blendEquationAlpha:Tn}),this.blendMaterial=new wt({uniforms:An.clone(rl.uniforms),vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ec,blendSrc:ma,blendDst:bs,blendEquation:Tn,blendSrcAlpha:pa,blendDstAlpha:bs,blendEquationAlpha:Tn}),this._fsQuad=new Wi(null),this._originalClearColor=new ke,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Jn,this.depthTexture.format=ei,this.depthTexture.type=Gi,this.normalRenderTarget=new Rt(this.width,this.height,{minFilter:Mt,magFilter:Mt,type:Tt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=tu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new al,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new yn(s,e,e,rn,Zt);return r.wrapS=$t,r.wrapT=$t,r.needsUpdate=!0,r}};Mr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ol=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=An.clone(Oa.uniforms),this.material=new or({name:Oa.name,uniforms:this.uniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader}),this._fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===va?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zi?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_a&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vn=[{id:"floor",name:"Boden",def:"fliese_hell",opts:[{id:"fliese_hell",name:"Fliese hell",tex:"fliese_hell",size:1.8,rough:.26,clear:.35},{id:"fliese_anthrazit",name:"Fliese Anthrazit",tex:"fliese_anthrazit",size:1.8,rough:.3,clear:.3},{id:"laminat_eiche",name:"Laminat Eiche",tex:"laminat_eiche",size:2,rough:.5,clear:.15},{id:"parkett_fischgraet",name:"Parkett Fischgr\xE4t",tex:"parkett_fischgraet",size:1.4,rough:.42,clear:.3},{id:"dielen_nuss",name:"Dielen Nuss",tex:"dielen_nuss",size:2,rough:.46,clear:.2},{id:"estrich",name:"Estrich",tex:"estrich",size:2.6,rough:.34,clear:.2},{id:"terrazzo",name:"Terrazzo",tex:"terrazzo",size:1.6,rough:.3,clear:.35},{id:"terrakotta",name:"Terrakotta",tex:"terrakotta",size:3.3,rough:.78}]},{id:"wall",name:"W\xE4nde",def:"putz_weiss",opts:[{id:"putz_weiss",name:"Putz wei\xDF",tex:"putz_weiss",size:2.4,rough:.82},{id:"beton",name:"Sichtbeton",tex:"beton",size:2.4,rough:.8},{id:"ziegel_weiss",name:"Ziegel wei\xDF",tex:"ziegel_weiss",size:2,rough:.88},{id:"ziegel_rot",name:"Ziegel rot",tex:"ziegel_rot",size:2,rough:.9},{id:"holzlamellen",name:"Holzlamellen",tex:"holzlamellen",size:1,rough:.55},{id:"metro_fliese",name:"Metrofliese",tex:"metro_fliese",size:.9,rough:.12,clear:.5},{id:"putz_sand",name:"Kalkputz Sand",tex:"putz_sand",size:2.4,rough:.85}]},{id:"counter",name:"Theke",def:"rot_lack",opts:[{id:"rot_lack",name:"Rot lackiert",color:9049875,rough:.38,clear:.55},{id:"marmor_weiss",name:"Marmor",tex:"marmor_weiss",size:1.6,rough:.12,clear:.6},{id:"holz_eiche",name:"Eiche",tex:"holz_eiche",size:1.2,rough:.5,clear:.15},{id:"holz_nuss",name:"Nuss",tex:"holz_nuss",size:1.2,rough:.48,clear:.2},{id:"beton",name:"Beton",tex:"beton",size:1.6,rough:.7},{id:"metro_fliese",name:"Fliese wei\xDF",tex:"metro_fliese",size:.9,rough:.12,clear:.5},{id:"edelstahl",name:"Edelstahl",color:13225169,rough:.28,metal:1}]},{id:"chair",name:"St\xFChle",def:"holz_eiche",opts:[{id:"holz_eiche",name:"Eiche",tex:"holz_eiche",size:.9,rough:.5,clear:.12},{id:"holz_nuss",name:"Nuss",tex:"holz_nuss",size:.9,rough:.46,clear:.18},{id:"leder_cognac",name:"Leder Cognac",tex:"leder_cognac",size:.7,rough:.5,clear:.2},{id:"stoff_grau",name:"Stoff Grau",tex:"stoff_grau",size:.6,rough:.95},{id:"schwarz",name:"Schwarz",color:1908e3,rough:.4,clear:.2},{id:"weiss_lack",name:"Wei\xDF lackiert",color:15921387,rough:.42,clear:.4},{id:"rot_lack",name:"Rot lackiert",color:9049875,rough:.38,clear:.55}]},{id:"table",name:"Tische und Regale",def:"holz_nuss",opts:[{id:"holz_eiche",name:"Eiche",tex:"holz_eiche",size:1.2,rough:.5,clear:.15},{id:"holz_nuss",name:"Nuss",tex:"holz_nuss",size:1.2,rough:.46,clear:.2},{id:"marmor_weiss",name:"Marmor",tex:"marmor_weiss",size:1.6,rough:.12,clear:.6},{id:"weiss_lack",name:"Wei\xDF lackiert",color:15921387,rough:.42,clear:.4},{id:"schwarz",name:"Schwarz",color:1908e3,rough:.4,clear:.2},{id:"beton",name:"Beton",tex:"beton",size:1.6,rough:.7}]}],za=Object.fromEntries(Vn.map(i=>[i.id,i])),hp={w:{color:16052973,rough:.6,clear:.12},g:{color:13617857,rough:.72},r:{color:9049875,rough:.38,clear:.55},k:{color:1644827,rough:.22,clear:.4},s:{tex:"beton",size:2,rough:.82,tint:14210510},leaf:{color:7309906,rough:.9},bark:{color:6966582,rough:.9},pot:{color:15723750,rough:.5,clear:.2},frame:{color:2105893,rough:.35,metal:.6}},kv=/^(tisch|a\d+t\d|tafel|nische|bank|warten|lounge|nagel|pedi|bar\d)/,Ov=/^(tisch|a\d+t\d|tafel|nische|bank|bar\d|bierbank|nagel|podest|umkleide|kprep|a\d+tisch|a\d+reg|regal|wand[LR]|produkte|tabak|kshelf|brot|stange)/;function up(i){let e=i.k.split(".").pop(),t=i.g,n=i.m;return n==="glass"?"glass":/^floor/.test(i.k)?"floor":/^walk/.test(i.k)||i.k==="plinth"?"s":/^(wall|iw)/.test(i.k)||/^part[LRT]$/.test(i.k)?"wall":i.struct?n==="k"?"k":"frame":/^(krone\d*|leaf\d*)$/.test(e)?"leaf":e==="stamm"?"bark":e==="pot"?"pot":kv.test(t)?/^nagel/.test(t)?/^(cs|cb|st)$/.test(e)?"chair":n==="w"?"table":n:/^(c\d*[sb]|st\d*|cs|cb|seat|back|a[01]|b-?1|s-?1|base|pod)$/.test(e)||/^tafel/.test(t)&&/^b[01]$/.test(e)?"chair":n==="w"||n==="g"?"table":n:/^(theke|buffet|vitrine|kasse\d*|siebtraeger)$/.test(t)?/^(body|top|base)$/.test(e)?"counter":n:Ov.test(t)&&(n==="w"||n==="g")?"table":n}var zv=new ms,dp=8,fp=i=>{dp=i};function lp(i,e,t){let n,s=new Promise(a=>{n=a}),r=zv.load(i,()=>n(),void 0,()=>n());return r.wrapS=r.wrapT=$t,r.anisotropy=dp,r.colorSpace=e?St:Gn,r.repeat.set(1/t,1/t),{t:r,ready:s}}var Sr=new Map;function Ba(i){let e=(i.id||JSON.stringify(i))+"|"+(i.size||"")+"|"+(i.tint||"");if(Sr.has(e))return Sr.get(e);let t=new kt({color:i.tint??i.color??16777215,roughness:i.rough??.7,metalness:i.metal??0,clearcoat:i.clear??0,clearcoatRoughness:.12,envMapIntensity:1});if(t.userData.ready=Promise.resolve(),i.tex){let n=lp(`assets/tex/${i.tex}.jpg`,!0,i.size),s=lp(`assets/tex/${i.tex}_n.jpg`,!1,i.size);t.map=n.t,t.normalMap=s.t,t.normalScale=new Re(1,1),t.userData.ready=Promise.all([n.ready,s.ready]).then(()=>{t.needsUpdate=!0})}return Sr.set(e,t),t}var cl=i=>Ba({id:"fix_"+i,...hp[i]}),pp=()=>(Sr.has("glass")||Sr.set("glass",new kt({color:15397877,roughness:.03,metalness:0,transparent:!0,opacity:.2,envMapIntensity:2.2,depthWrite:!1,ior:1.5})),Sr.get("glass")),nu=i=>i in hp;function iu(i,e){if(e===Sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pr||e===Ra){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===pr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function ll(i){let e=new Map,t=new Map,n=i.clone();return mp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)mp(i.children[n],e.children[n],t)}var hl=class extends On{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new ul(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ul(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Su(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=yi.extractUrlBase(e);a=yi.resolveURL(l,this.path)}else a=yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ps(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vp){try{a[Qe.KHR_BINARY_GLTF]=new wu(e)}catch(d){s&&s(d);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Iu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:a[d]=new cu;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[d]=new Tu(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[d]=new Eu;break;case Qe.KHR_MESH_QUANTIZATION:a[d]=new Au;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Gv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function It(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ou=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ke(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ui(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new gs(h),l.distance=d;break;case"spot":l=new ca(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},cu=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){let s=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(r,r)}return Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},pu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(r[0],r[1],r[2],qt),Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(r[0],r[1],r[2],qt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?kt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},vu=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},yu=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Mu=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ul=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(p),h,d,u,s.mode,s.filter),p})})}else return null}},Su=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,p=[];for(let b of d){let g=new He,m=new G,f=new Nt,M=new G(1,1,1),T=new hs(b.geometry,b.material,u);for(let v=0;v<u;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),T.setMatrixAt(v,g.compose(m,f,M));let x=null;for(let v in c)if(v==="_COLOR_0"){let S=c[v];T.instanceColor=new gi(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(x===null){let A=T.geometry;x=new Ct,x.name=A.name;for(let _ in A.attributes)x.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)x.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&x.setIndex(A.index),x.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)x.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(x.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(x.boundingSphere=A.boundingSphere.clone()),x.drawRange.start=A.drawRange.start,x.drawRange.count=A.drawRange.count,x.userData=Object.assign({},A.userData),T.geometry=x}let S=c[v];x.setAttribute(v,new gi(S.array,S.itemSize,S.normalized))}yt.prototype.copy.call(T,b),this.parser.assignFinalMaterial(T),p.push(T)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},vp="glTF",Ga=12,gp={JSON:1313821514,BIN:5130562},wu=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ga,r=new DataView(e,Ga),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===gp.JSON){let l=new Uint8Array(e,Ga+a,o);this.content=n.decode(l)}else if(c===gp.BIN){let l=Ga+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Cu[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Cu[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],p=wr[u.componentType];l[d]=p.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(p){for(let b in p.attributes){let g=p.attributes[b],m=c[b];m!==void 0&&(g.normalized=m)}d(p)},o,l,qt,u)})})}},Eu=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Au=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},dl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,p=u*d,b=e*l,g=b-l,m=-2*p+3*u,f=p-u,M=1-m,T=f-u+d;for(let x=0;x!==o;x++){let v=a[g+x+o],S=a[g+x+c]*h,A=a[b+x+o],_=a[b+x]*h;r[x]=M*v+T*S+m*A+f*_}return r}},Vv=new Nt,Ru=class extends dl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Vv.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xp={9728:Mt,9729:gt,9984:sc,9985:dr,9986:ys,9987:En},bp={33071:ln,33648:js,10497:$t},su={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hv={CUBICSPLINE:void 0,LINEAR:os,STEP:as},ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),i.DefaultMaterial}function ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Xv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jv(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+au(t.attributes):e=i.indices+":"+au(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+au(i.targets[n]);return e}function au(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Yv=new He,Iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ms(this.options.manager):this.textureLoader=new la(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ws(r,o,s),ii(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(yi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=su[s.type],o=wr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new At(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=su[s.type],l=wr[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,g,m;if(p&&p!==d){let f=Math.floor(u/p),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,T=t.cache.get(M);T||(g=new l(o,f*p,s.count*p/h),T=new er(g,p/h),t.cache.add(M,T)),m=new tr(T,c,u%p/h,b)}else o===null?g=new l(s.count*c):g=new l(o,u,s.count*c),m=new At(g,c,b);if(s.sparse!==void 0){let f=su.SCALAR,M=wr[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,v=new M(a[1],T,s.sparse.count*f),S=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=v.length;A<_;A++){let E=v[A];if(m.setX(E,S[A*c]),c>=2&&m.setY(E,S[A*c+1]),c>=3&&m.setZ(E,S[A*c+2]),c>=4&&m.setW(E,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=xp[u.magFilter]||gt,h.minFilter=xp[u.minFilter]||En,h.wrapS=bp[u.wrapS]||$t,h.wrapT=bp[u.wrapT]||$t,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Mt&&h.minFilter!==gt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,p){let b=u;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Vt(g);m.needsUpdate=!0,u(m)}),t.load(yi.resolveURL(d,r.path),b,void 0,p)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),ii(d,a),d.userData.mimeType=a.mimeType||Kv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new rr,Ut.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new sr,Ut.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let d=s[Qe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],qt),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,St)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=wn);let h=r.alphaMode||ru.OPAQUE;if(h===ru.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ru.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==kn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==kn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==kn){let d=r.emissiveFactor;o.emissive=new ke().setRGB(d[0],d[1],d[2],qt)}return r.emissiveTexture!==void 0&&a!==kn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),ii(d,r),t.associations.set(d,{materials:e}),r.extensions&&ws(s,d,r),d})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return _p(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=jv(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=_p(new Ct,l,t),l.mode===Cn.TRIANGLE_STRIP?u=u.then(p=>iu(p,Ra)):l.mode===Cn.TRIANGLE_FAN&&(u=u.then(p=>iu(p,pr))),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Wv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let p=0,b=h.length;p<b;p++){let g=h[p],m=a[p],f,M=l[p];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,x=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");T&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=T&&x?new Xr(g,M):new lt(g,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Cn.LINES)f=new Kr(g,M);else if(m.mode===Cn.LINE_STRIP)f=new us(g,M);else if(m.mode===Cn.LINE_LOOP)f=new Yr(g,M);else if(m.mode===Cn.POINTS)f=new Jr(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Xv(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),ii(f,r),m.extensions&&ws(s,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,b=d.length;p<b;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&ws(s,d[0],r),d[0];let u=new Wt;r.extensions&&ws(s,u,r),t.associations.set(u,{meshes:e});for(let p=0,b=d.length;p<b;p++)u.add(d[p]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Ca.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new He;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let p=s.channels[d],b=s.samplers[p.sampler],g=p.target,m=g.node,f=s.parameters!==void 0?s.parameters[b.input]:b.input,M=s.parameters!==void 0?s.parameters[b.output]:b.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(b),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],p=d[1],b=d[2],g=d[3],m=d[4],f=[];for(let T=0,x=u.length;T<x;T++){let v=u[T],S=p[T],A=b[T],_=g[T],E=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,S,A,_,E);if(C)for(let I=0;I<C.length;I++)f.push(C[I])}let M=new fs(r,void 0,f);return ii(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,Yv)});for(let p=0,b=d.length;p<b;p++)h.add(d[p]);if(h.userData.pivot!==void 0&&d.length>0){let p=h.userData.pivot,b=d[0];h.pivot=new G().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],b.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new nr:l.length>1?h=new Wt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ii(h,r),r.extensions&&ws(n,h,r),r.matrix!==void 0){let d=new He;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Wt;n.name&&(r.name=s.createUniqueName(n.name)),ii(r,n),n.extensions&&ws(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(ll(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,p]of s.associations)(u instanceof Ut||u instanceof Vt)&&d.set(u,p);return h.traverse(u=>{let p=s.associations.get(u);p!=null&&d.set(u,p)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}qi[r.path]===qi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(qi[r.path]){case qi.weights:h=bi;break;case qi.rotation:h=_i;break;case qi.translation:case qi.scale:h=Ni;break;default:n.itemSize===1?h=bi:h=Ni;break}let d=s.interpolation!==void 0?Hv[s.interpolation]:os,u=this._getArrayFromAccessor(n);for(let p=0,b=c.length;p<b;p++){let g=new h(c[p]+"."+qi[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Pu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?Ru:dl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Jv(i,e,t){let n=e.attributes,s=new sn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new G(c[0],c[1],c[2]),new G(l[0],l[1],l[2])),o.normalized){let h=Pu(wr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new G,c=new G;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],p=u.min,b=u.max;if(p!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),u.normalized){let g=Pu(wr[u.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function _p(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Cu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ke.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),ii(i,e),Jv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qv(i,e.targets,t):i})}var fl=class extends aa{constructor(e){super(e),this.type=Tt}parse(e){let a=function(_,E){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(E||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(E||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(E||""))}},d=function(_,E,C){E=E||1024;let L=_.pos,O=-1,F=0,H="",q=String.fromCharCode.apply(null,new Uint16Array(_.subarray(L,L+128)));for(;0>(O=q.indexOf(`
`))&&F<E&&L<_.byteLength;)H+=q,F+=q.length,L+=128,q=String.fromCharCode.apply(null,new Uint16Array(_.subarray(L,L+128)));return-1<O?(C!==!1&&(_.pos+=F+O+1),H+q.slice(0,O)):!1},u=function(_){let E=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},H,q;for((_.pos>=_.byteLength||!(H=d(_)))&&a(1,"no header found"),(q=H.match(E))||a(3,"bad initial token"),F.valid|=1,F.programtype=q[1],F.string+=H+`
`;H=d(_),H!==!1;){if(F.string+=H+`
`,H.charAt(0)==="#"){F.comments+=H+`
`;continue}if((q=H.match(C))&&(F.gamma=parseFloat(q[1])),(q=H.match(I))&&(F.exposure=parseFloat(q[1])),(q=H.match(L))&&(F.valid|=2,F.format=q[1]),(q=H.match(O))&&(F.valid|=4,F.height=parseInt(q[1],10),F.width=parseInt(q[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||a(3,"missing format specifier"),F.valid&4||a(3,"missing image size specifier"),F},p=function(_,E,C){let I=E;if(I<8||I>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);I!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");let L=new Uint8Array(4*E*C);L.length||a(4,"unable to allocate buffer space");let O=0,F=0,H=4*I,q=new Uint8Array(4),ne=new Uint8Array(H),ce=C;for(;ce>0&&F<_.byteLength;){F+4>_.byteLength&&a(1),q[0]=_[F++],q[1]=_[F++],q[2]=_[F++],q[3]=_[F++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=I)&&a(3,"bad rgbe scanline format");let Y=0,ie;for(;Y<H&&F<_.byteLength;){ie=_[F++];let ge=ie>128;if(ge&&(ie-=128),(ie===0||Y+ie>H)&&a(3,"bad scanline data"),ge){let _e=_[F++];for(let We=0;We<ie;We++)ne[Y++]=_e}else ne.set(_.subarray(F,F+ie),Y),Y+=ie,F+=ie}let ae=I;for(let ge=0;ge<ae;ge++){let _e=0;L[O]=ne[ge+_e],_e+=I,L[O+1]=ne[ge+_e],_e+=I,L[O+2]=ne[ge+_e],_e+=I,L[O+3]=ne[ge+_e],O+=4}ce--}return L},b=function(_,E,C,I){let L=_[E+3],O=Math.pow(2,L-128)/255;C[I+0]=_[E+0]*O,C[I+1]=_[E+1]*O,C[I+2]=_[E+2]*O,C[I+3]=1},g=function(_,E,C,I){let L=_[E+3],O=Math.pow(2,L-128)/255;C[I+0]=Fi.toHalfFloat(Math.min(_[E+0]*O,65504)),C[I+1]=Fi.toHalfFloat(Math.min(_[E+1]*O,65504)),C[I+2]=Fi.toHalfFloat(Math.min(_[E+2]*O,65504)),C[I+3]=Fi.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let f=u(m),M=f.width,T=f.height,x=p(m.subarray(m.pos),M,T),v,S,A;switch(this.type){case Qt:A=x.length/4;let _=new Float32Array(A*4);for(let C=0;C<A;C++)b(x,C*4,_,C*4);v=_,S=Qt;break;case Tt:A=x.length/4;let E=new Uint16Array(A*4);for(let C=0;C<A;C++)g(x,C*4,E,C*4);v=E,S=Tt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:T,data:v,header:f.string,gamma:f.gamma,exposure:f.exposure,type:S,colorSpace:qt,minFilter:gt,magFilter:gt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var yp=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var M=new Uint8Array(f.length),T=0;T<f.length;++T){var x=f.charCodeAt(T);M[T]=x>96?x-97:x>64?x-39:x+4}for(var v=0,T=0;T<f.length;++T)M[v++]=M[T]<60?n[M[T]]:(M[T]-60)*64+M[++T];return M.buffer.slice(0,v)}function c(f,M,T,x,v,S,A){var _=f.exports.sbrk,E=x+3&-4,C=_(E*v),I=_(S.length),L=new Uint8Array(f.exports.memory.buffer);L.set(S,I);var O=M(C,x,v,I,S.length);if(O==0&&A&&A(C,E,v),T.set(L.subarray(C,C+x*v)),_(C-_(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function p(f){var M={object:new Worker(f),pending:0,requests:{}};return M.object.onmessage=function(T){var x=T.data;M.pending-=x.count,M.requests[x.id][x.action](x.value),delete M.requests[x.id]},M}function b(f){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),T=new Blob([M],{type:"text/javascript"}),x=URL.createObjectURL(T),v=d.length;v<f;++v)d[v]=p(x);for(var v=f;v<d.length;++v)d[v].object.postMessage({});d.length=f,URL.revokeObjectURL(x)}function g(f,M,T,x,v){for(var S=d[0],A=1;A<d.length;++A)d[A].pending<S.pending&&(S=d[A]);return new Promise(function(_,E){var C=new Uint8Array(T),I=++u;S.pending+=f,S.requests[I]={resolve:_,reject:E},S.object.postMessage({id:I,count:f,size:M,source:C,mode:x,filter:v},[C.buffer])})}function m(f){var M=f.data;self.ready.then(function(T){if(!M.id)return self.close();try{var x=new Uint8Array(M.count*M.size);c(T,T.exports[M.mode],x,M.count,M.size,M.source,T.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(f){b(f)},decodeVertexBuffer:function(f,M,T,x,v){c(r,r.exports.meshopt_decodeVertexBuffer,f,M,T,x,r.exports[l[v]])},decodeIndexBuffer:function(f,M,T,x){c(r,r.exports.meshopt_decodeIndexBuffer,f,M,T,x)},decodeIndexSequence:function(f,M,T,x){c(r,r.exports.meshopt_decodeIndexSequence,f,M,T,x)},decodeGltfBuffer:function(f,M,T,x,v,S){c(r,r.exports[h[v]],f,M,T,x,r.exports[l[S]])},decodeGltfBufferAsync:function(f,M,T,x,v){return d.length>0?g(f,M,T,h[x],l[v]):a.then(function(){var S=new Uint8Array(f*M);return c(r,r.exports[h[x]],S,f,M,T,r.exports[l[v]]),S})}}})();var $v=[{id:"hf_frau_cap",h:1.68},{id:"hf_mann_jacke",h:1.82},{id:"hf_frau_locken",h:1.65},{id:"hf_mann_hoodie",h:1.78},{id:"hf_frau_mantel",h:1.66},{id:"hf_mann_anzug",h:1.8},{id:"hf_frau_kopftuch",h:1.66}],Zv=["stehen","reden_a","reden_b","umschauen"],Qv=/^(team|gast|passant|drauss)(\d+)b$/,Mp=i=>/^(team|gast|passant|drauss)\d+[bh]$/.test(i.k);function ey(i){let e=2166136261;for(let t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}var pl=class{constructor(e){this.eng=e,this.group=new Wt,this.group.visible=!1,e.scene.add(this.group),this.loader=new hl().setMeshoptDecoder(yp),this.src=new Map,this.moves=null,this.persons=new Map,this.hdri=null,this.loading=null}async loadHdri(){return this.hdri?this.hdri:(this.hdri??(this.hdri=await new Promise(e=>{new fl().load("assets/hdri/himmel.hdr",t=>{let n=new Hi(this.eng.renderer),s=n.fromEquirectangular(t).texture;t.dispose(),n.dispose(),e(s)},void 0,()=>e(null))})),this.hdri)}async loadPeople(){return this.loading??(this.loading=(async()=>{let e=await Promise.all(Zv.map(t=>this.loader.loadAsync(`assets/people/anim/${t}.glb`).then(n=>{let s=n.animations[0];for(let r of s.tracks)if(/hips\.position$/i.test(r.name)){let a=r.values,o=a[0],c=a[2];for(let l=0;l<a.length;l+=3)a[l]=o,a[l+2]=c}return s.name=t,[t,s]}).catch(()=>null)));this.moves=new Map(e.filter(Boolean)),await Promise.all($v.map(t=>this.loader.loadAsync(`assets/people/${t.id}.glb`).then(n=>{let s=new sn().setFromObject(n.scene);n.scene.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.frustumCulled=!1,r.material&&(r.material.envMapIntensity=.9))}),this.src.set(t.id,{scene:n.scene,scale:t.h/(s.max.y-s.min.y),minY:s.min.y})}).catch(()=>null)))})()),this.loading}sync(e){if(!this.src.size)return;let t=new Map;for(let s of e){let r=Qv.exec(s.k);r&&t.set(s.k.slice(0,-1),{x:s.x,z:s.z,kind:r[1]})}for(let[s,r]of this.persons)t.has(s)||(r.leaving=performance.now());let n=[...this.src.keys()];for(let[s,r]of t){let a=this.persons.get(s);if(a&&!a.leaving){a.to={x:r.x,z:r.z};continue}a&&(this.group.remove(a.obj),this.persons.delete(s));let o=ey(s+(this.eng.P?this.eng.P.cat:"")),c=this.src.get(n[o%n.length]);if(!c)continue;let l=ll(c.scene);l.scale.setScalar(c.scale),l.position.y=-c.minY*c.scale;let h=new Wt;h.add(l);let d=r.kind==="team"?0:r.kind==="gast"?Math.PI:(o>>3)%8*(Math.PI/4);h.rotation.y=d,h.position.set(r.x,0,r.z);let u=new ua(l),p=r.kind==="team"?["reden_a","reden_b","stehen"]:r.kind==="gast"?["stehen","umschauen"]:["umschauen","stehen"],b=this.moves&&this.moves.get(p[(o>>5)%p.length]);if(b){let g=u.clipAction(b);g.time=(o>>7)%100/100*b.duration,g.play()}this.group.add(h),h.scale.setScalar(.001),this.persons.set(s,{obj:h,mixer:u,to:{x:r.x,z:r.z},born:performance.now()+250+o%400})}this.eng.need=!0}update(e,t){let n=!1;for(let[s,r]of this.persons){if(r.mixer.update(e),r.leaving){let h=Math.min(1,(t-r.leaving)/320);r.obj.scale.setScalar(Math.max(.001,1-h*h)),h>=1&&(this.group.remove(r.obj),this.persons.delete(s)),n=!0;continue}let a=Math.min(1,Math.max(0,(t-r.born)/420)),o=1-(1-a)**3;r.obj.scale.setScalar(Math.max(.001,a<1?o*(1+.06*Math.sin(Math.PI*a)):1)),a<1&&(n=!0);let c=r.to.x-r.obj.position.x,l=r.to.z-r.obj.position.z;Math.abs(c)+Math.abs(l)>.002&&(r.obj.position.x+=c*.12,r.obj.position.z+=l*.12,n=!0)}return n||this.persons.size>0}show(e){this.group.visible=e}};var an=Math.PI,Ts=(i,e,t)=>Math.max(e,Math.min(t,i)),ml=(i,e,t)=>i+(e-i)*t,Tr={outCubic:i=>1-(1-i)**3,inOutCubic:i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,outBack:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,inBack:i=>2.70158*i*i*i-1.70158*i*i},Sp=["x","y","z","w","h","d","ry","rx"];function Du(i,e,t,n,s=.92){let r=new gn({color:i,roughness:s,metalness:0});return r.customProgramCacheKey=()=>`grid${e}_${t}_${n}`,r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <map_fragment>",`#include <map_fragment>
        vec2 gc = vWp.xz / ${e.toFixed(3)};
        vec2 gd = abs(fract(gc - 0.5) - 0.5) / max(fwidth(gc), vec2(1e-4));
        float gl = 1.0 - min(min(gd.x, gd.y) / ${t.toFixed(2)}, 1.0);
        diffuseColor.rgb *= 1.0 - gl * ${n.toFixed(3)};`)},r}function ty(){let i=(n,s=.84,r={})=>new gn({color:n,roughness:s,metalness:0,...r}),e={w:i(15855851),g:i(14342354,.86),r:i(11082520,.58),k:i(2763308,.32),glass:new kt({color:15331827,roughness:.04,metalness:0,transparent:!0,opacity:.17,envMapIntensity:1.6,depthWrite:!1}),f:Du(15328991,.6,1.1,.08),f2:Du(15789801,1.2,1.1,.06),s:Du(14211026,.5,1.3,.1)},t={};for(let[n,s]of Object.entries(e)){let r=s.clone();s.customProgramCacheKey!==Ut.prototype.customProgramCacheKey&&(r.onBeforeCompile=s.onBeforeCompile,r.customProgramCacheKey=s.customProgramCacheKey),n==="glass"?(r.opacity=.32,r.color.set(16173510)):(r.emissive=new ke(11082520),r.emissiveIntensity=n==="r"?.35:.16),t[n]=r}return{M:e,H:t}}var si=new Map,ri=i=>Math.round(i*1e3)/1e3;function ny(i){let e,t;if(i.t==="box"){let n=i.plain?0:i.rad??Math.min(.026,Math.min(i.w,i.h,i.d)*.22);e=`b${ri(i.w)}_${ri(i.h)}_${ri(i.d)}_${ri(n)}`,(t=si.get(e))||si.set(e,t=n<.004?new Mn(i.w,i.h,i.d):new Qc(i.w,i.h,i.d,2,n))}else if(i.t==="cyl"){let n=i.rt??1,s=i.w/2;e=`c${ri(i.w)}_${ri(i.h)}_${n}`,(t=si.get(e))||si.set(e,t=new ea(s*n,s,i.h,i.w>.25?48:24))}else i.t==="sph"?(e=`s${ri(i.w)}`,(t=si.get(e))||si.set(e,t=new ar(i.w/2,40,26))):i.t==="dome"?(e=`d${ri(i.w)}`,(t=si.get(e))||si.set(e,t=new ar(i.w/2,48,18,0,an*2,0,an/2))):(e=`p${ri(i.w)}_${ri(i.h)}`,(t=si.get(e))||si.set(e,t=new Qr(i.w/2,Math.max(.01,i.h-i.w),8,20)));return iy(t)}function iy(i){if(i.userData.uvBaked||!i.attributes.normal)return i;i.computeBoundingBox();let e=i.boundingBox,t=i.attributes.position,n=i.attributes.normal,s=new Float32Array(t.count*2);for(let r=0;r<t.count;r++){let a=t.getX(r)-e.min.x,o=t.getY(r)-e.min.y,c=t.getZ(r)-e.min.z,l=Math.abs(n.getX(r)),h=Math.abs(n.getY(r)),d=Math.abs(n.getZ(r));h>=l&&h>=d?(s[r*2]=a,s[r*2+1]=c):l>=d?(s[r*2]=c,s[r*2+1]=o):(s[r*2]=a,s[r*2+1]=o)}return i.setAttribute("uv",new At(s,2)),i.userData.uvBaked=!0,i}var Lu=i=>({x:i.x,y:i.y,z:i.z,w:i.w,h:i.h,d:i.d,ry:i.ry,rx:i.rx}),Fu=class{constructor(e,t){this.eng=t,this.obj=new Wt,this.mesh=new lt,this.mesh.userData.blk=this,this.obj.add(this.mesh),this.setSpec(e),this.st=Lu(e),this.anim=null,this.lift=0,this.sq=1,this.sxz=1,this.wig=0,this.grow=1}setSpec(e){this.spec=e,this.mesh.geometry=ny(e),this.gw=e.w,this.gh=e.h,this.gd=e.d,this.mesh.position.y=e.t==="dome"?0:e.h/2,this.mesh.castShadow=e.cast,this.mesh.receiveShadow=e.m!=="glass",this.mesh.renderOrder=e.m==="glass"?2:0,this.role=up(e),this.isFig=Mp(e),this.setMat(e.m)}setMat(e){this.m=e,this.mesh.material=this.eng.matFor(this,e),this.mesh.visible=!(this.isFig&&this.eng.look==="real")}apply(e){let t=this.obj,n=this.st;t.position.set(n.x,n.y+this.lift,n.z),t.rotation.set(n.rx,n.ry+this.wig,0,"YXZ");let s=this.grow;t.scale.set(n.w/this.gw*this.sxz*s,n.h/this.gh*this.sq*s*e,n.d/this.gd*this.sxz*s)}},gl=class{constructor(e,t,n={}){this.stage=e,this.canvas=t,this.opt=n,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.blocks=new Map,this.leaving=new Set,this.picks=[],this.cut={back:1,left:1,right:1,front:1,inner:1},this.need=!0,this.view="3d",this.visible=!0,this.lastInput=performance.now(),this.tw=null,this.idleBase=null,this.frameMs=[],this.quality=this.mobile?1:2,this.aoScale=1;let s=this.renderer=new Kc({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setClearColor(0,0),s.outputColorSpace=St,s.toneMapping=zi,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=xs;let{M:r,H:a}=ty();this.M=r,this.H=a;let o=this.scene=new ls,c=new Hi(s);o.environment=c.fromScene(new el,.04).texture,o.environmentIntensity=.5,c.dispose();let l=this.sun=new Ui(16775150,3);l.castShadow=!0,l.shadow.mapSize.set(this.mobile?2048:4096,this.mobile?2048:4096),l.shadow.bias=-25e-5,l.shadow.normalBias=.025,l.shadow.radius=4,o.add(l,l.target);let h=new Ui(15134198,.28);h.position.set(8,6,-6),o.add(h);let d=this.ground=new lt(new ds(220,220),new ta({opacity:.2,color:2760728}));d.rotation.x=-an/2,d.position.y=-.52,d.receiveShadow=!0,d.userData.noAO=!0,o.add(d),this.root=new Wt,o.add(this.root),this.look="concept",this.sel=Object.fromEntries(Vn.map(b=>[b.id,b.def])),this.hoverReal=new Map,this.envConcept=o.environment,this.fillLight=h,fp(Math.min(8,s.capabilities.getMaxAnisotropy())),this.real=new pl(this);let u=this.cam=new Ft(26,1,.3,300);u.position.set(14,16,22);let p=this.controls=new Zc(u,t);p.enableDamping=!0,p.dampingFactor=.075,p.rotateSpeed=.55,p.panSpeed=.7,p.zoomSpeed=.9,p.screenSpacePanning=!1,p.minPolarAngle=0,p.maxPolarAngle=1.3,p.addEventListener("start",()=>this.input()),p.addEventListener("change",()=>{this.need=!0}),t.style.touchAction="pan-y",this.ray=new da,this.ptr=new Re,this.ptrDirty=!1,this.hoverG=null,this.bindPointer(),this.setupComposer(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),this.io=new IntersectionObserver(b=>{this.visible=b[0].isIntersecting,this.visible&&(this.need=!0)},{threshold:0}),this.io.observe(e),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}setupComposer(){if(this.composer&&(this.composer.dispose(),this.composer=null,this.gtao=null),this.quality<2)return;let e=this.renderer,t=new Rt(2,2,{type:Tt,samples:4}),n=this.composer=new il(e,t);n.addPass(new sl(this.scene,this.cam));let s=this.gtao=new Mr(this.scene,this.cam,2,2);s.output=Mr.OUTPUT.Default,s.blendIntensity=1,s.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.2,scale:1.15,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:16});let r=s._overrideVisibility.bind(s);s._overrideVisibility=()=>{r(),this.scene.traverse(o=>{o.visible&&(o.userData.noAO||o.isMesh&&o.material&&o.material.transparent)&&(o.visible=!1,s._visibilityCache.push(o))})};let a=s.setSize.bind(s);s.setSize=(o,c)=>a(Math.max(2,Math.round(o*this.aoScale)),Math.max(2,Math.round(c*this.aoScale))),n.addPass(s),n.addPass(new ol)}dpr(){return this.quality>=2?2:Math.min(window.devicePixelRatio||1,this.quality>=1?2:1.5)}resize(){let e=this.stage.clientWidth,t=this.stage.clientHeight;if(!e||!t)return;let n=this.dpr();this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t)),this.size={w:e,h:t},this.applyOffset(),this.need=!0}input(){this.lastInput=performance.now(),this.idleBase=null,this.tw&&this.tw.soft&&(this.tw=null)}bindPointer(){let e=this.canvas,t=null;e.addEventListener("pointermove",n=>{let s=e.getBoundingClientRect();this.ptr.set((n.clientX-s.left)/s.width*2-1,-((n.clientY-s.top)/s.height)*2+1),this.ptrPx={x:n.clientX-s.left,y:n.clientY-s.top},this.ptrDirty=n.pointerType==="mouse"}),e.addEventListener("pointerleave",()=>{this.setHover(null)}),e.addEventListener("pointerdown",n=>{t={x:n.clientX,y:n.clientY,t:performance.now()},this.input(),this.opt.onGesture&&this.opt.onGesture()}),e.addEventListener("pointerup",n=>{if(!t)return;if(Math.hypot(n.clientX-t.x,n.clientY-t.y)<6&&performance.now()-t.t<450){let r=e.getBoundingClientRect();this.ptr.set((n.clientX-r.left)/r.width*2-1,-((n.clientY-r.top)/r.height)*2+1);let a=this.pick();a&&(this.hop(a.spec.g),this.opt.onTap&&this.opt.onTap(a.spec.lab))}t=null})}pick(){this.ray.setFromCamera(this.ptr,this.cam);let e=this.ray.intersectObjects(this.picks,!1);for(let t of e){let n=t.object.userData.blk;if(n&&n.spec.lab&&!this.leaving.has(n))return n}return null}setHover(e){if(e!==this.hoverG){this.hoverG=e;for(let t of this.blocks.values()){let n=e!==null&&t.spec.g===e;n!==!!t.hover&&(t.hover=n,t.setMat(t.m))}this.canvas.style.cursor=e?"pointer":"",this.need=!0}}hop(e){let t=performance.now();for(let n of this.blocks.values())n.spec.g===e&&!n.anim&&(n.anim={type:"hop",t0:t+n.spec.i*18,dur:520});this.opt.sound&&this.opt.sound.pop()}hopAll(){let e=performance.now();for(let t of this.blocks.values())!t.spec.struct&&!t.anim&&(t.anim={type:"hop",t0:e+Math.random()*260,dur:520});this.opt.sound&&this.opt.sound.pop()}matFor(e,t){if(this.look!=="real")return(e.hover?this.H:this.M)[t];let n=this.realMat(e.role,t);if(!e.hover)return n;let s=this.hoverReal.get(n);return s||(s=n.clone(),s.emissive=new ke(11082520),s.emissiveIntensity=.18,this.hoverReal.set(n,s)),s}realMat(e,t){if(e==="glass")return pp();let n=za[e];return n?Ba(n.opts.find(s=>s.id===this.sel[e])||n.opts[0]):nu(e)?cl(e):cl(nu(t)?t:"w")}preload(){let e=Vn.map(t=>Ba(t.opts.find(n=>n.id===this.sel[t.id])||t.opts[0]));return["w","g","r","k","s","leaf","bark","pot","frame"].forEach(t=>e.push(cl(t))),Promise.race([Promise.all(e.map(t=>t.userData.ready)),new Promise(t=>setTimeout(t,7e3))])}applyLighting(e){let t=this.renderer,n=this.scene;e&&this.real.hdri?(n.environment=this.real.hdri,n.environmentIntensity=1.15,t.toneMapping=_s,t.toneMappingExposure=1,this.sun.intensity=3.3,this.sun.color.set(16773080),this.fillLight.intensity=.3,this.sun.shadow.radius=6,this.ground.material.opacity=.32):(n.environment=this.envConcept,n.environmentIntensity=.5,t.toneMapping=zi,t.toneMappingExposure=1,this.sun.intensity=3,this.sun.color.set(16775150),this.fillLight.intensity=.28,this.sun.shadow.radius=4,this.ground.material.opacity=.2),this.need=!0}async setLook(e,t=!1){if(e!==this.look){if(e==="real"){let n=this.look;this.look="real";let s=Promise.all([this.real.loadHdri(),this.real.loadPeople(),this.preload()]);this.look=n,await s}this.look=e,this.applyLighting(e==="real"),this.real.show(e==="real"),e==="real"&&this.specs&&this.real.sync(this.specs),e==="concept"&&this.real.sync([]),this.waveMat(null,t),this.opt.onLook&&this.opt.onLook(e)}}async setSlot(e,t){let n=za[e],s=n&&n.opts.find(r=>r.id===t);return!s||this.sel[e]===t?!1:(await Promise.race([Ba(s).userData.ready,new Promise(r=>setTimeout(r,4e3))]),this.sel[e]=t,this.look==="real"&&this.waveMat(e),!0)}waveMat(e,t=!1){let n=performance.now(),s=this.P,r=s?s.door.x:0,a=s?s.zF:0,o=1;for(let h of this.blocks.values())o=Math.max(o,Math.hypot(h.st.x-r,h.st.z-a));let c=this.reduced||t?.02:1,l=0;for(let h of this.blocks.values()){if(e&&h.role!==e)continue;if(h.anim&&h.anim.type!=="hop"){h.setMat(h.m);continue}let d=Math.hypot(h.st.x-r,h.st.z-a)/o,u=!!h.spec.struct;h.anim={type:"mat",t0:n+(d*560+(u?0:h.spec.i%7*14))*c,dur:(u?760:580)*c,amp:u?0:.3,swapped:!1},l++}!t&&l&&this.opt.sound&&this.opt.sound.swap(e?Vn.findIndex(h=>h.id===e):-1),this.need=!0}setLayout(e,t="switch"){let{blocks:n,P:s}=e,r=performance.now(),a=t==="first"||this.blocks.size===0,o=t==="live",c=this.P,l=!c||c.id!==s.id,h=!!c&&(c.sig!==s.sig||Math.abs(c.W-s.W)>.04||Math.abs(c.D-s.D)>.04||c.glassRight!==s.glassRight);this.quiet=o,this.P=s;let d=new Map(n.map(x=>[x.k,x])),u=s.door.x,p=s.zF,b=1;for(let x of n)b=Math.max(b,Math.hypot(x.x-u,x.z-p));let g=x=>Math.hypot(x.x-u,x.z-p)/b,m=a?1.35:1,f=this.reduced?.02:o?.3:1,M=r,T=0;for(let[x,v]of this.blocks){let S=d.get(x);if(!(S&&S.t===v.spec.t)){if(this.blocks.delete(x),!v.obj.visible){this.root.remove(v.obj);continue}this.leaving.add(v),v.anim={type:"out",t0:r+((4-v.spec.L)*45+Math.random()*140)*f,dur:360*f},T++}}T&&!a&&!o&&this.opt.sound&&this.opt.sound.whoosh();for(let x of n){let v=this.blocks.get(x.k);if(v&&!v.obj.visible&&(this.root.remove(v.obj),this.blocks.delete(x.k),v=null),v){let E={...v.st},C=Sp.every(O=>Math.abs(E[O]-x[O])<1e-4),I=Math.abs(v.gw-x.w)<1e-4&&Math.abs(v.gh-x.h)<1e-4&&Math.abs(v.gd-x.d)<1e-4&&v.spec.rt===x.rt;if(C&&I&&v.m===x.m){v.spec=x;continue}let L=(x.struct?120:200+g(x)*380+x.i*12)*f;v.anim={type:"morph",t0:r+L,dur:(x.struct?900:760)*(o?.45:f),from:E,to:Lu(x),spec:x,arc:x.struct?0:.28+Math.random()*.2},M=Math.max(M,v.anim.t0+v.anim.dur);continue}let S=new Fu(x,this);S.obj.visible=!1,this.root.add(S.obj),this.blocks.set(x.k,S);let A;x.L===0?A=(a?0:150)+g(x)*150:x.L===1?A=380+g(x)*520:A=(a?950:560)+(x.L-2)*380+g(x)*900+x.i*45,A*=m*f;let _=(x.L<=1?640:560)*f;S.anim={type:"in",t0:r+A,dur:_,drop:x.L<=1?0:1.6+Math.random()*1.4,landed:!1},M=Math.max(M,r+A+_)}this.specs=n,this.look==="real"&&this.real.sync(n),this.picks=[];for(let x of this.blocks.values())x.spec.lab&&this.picks.push(x.mesh);this.buildEnd=M,this.doneSent=!1,this.fitShadow(),a?this.fit(this.view,!1,!1):l&&s.id!=="custom"?this.fit(this.view,!0,!1):(l||h)&&this.fit(this.view,!0,!0,o?520:1150),this.need=!0}fitShadow(){let e=this.P,t=(e.px0+e.px1)/2,n=(e.pz0+e.pz1)/2,s=Math.max(e.px1-e.px0,e.pz1-e.pz0)*.62+2,r=this.sun;r.target.position.set(t,0,n),r.position.set(t-7,26,n+10);let a=r.shadow.camera;a.left=-s,a.right=s,a.top=s,a.bottom=-s,a.near=1,a.far=60,a.updateProjectionMatrix()}applyOffset(){let{w:e,h:t}=this.size,n=this.opt.safe?this.opt.safe():{top:0,bottom:0,left:0,right:0},s=Math.max(60,e-n.left-n.right),r=Math.max(60,t-n.top-n.bottom),a=n.left+s/2,o=n.top+r/2,c=2*Math.max(a,e-a),l=2*Math.max(o,t-o);this.cam.aspect=c/l,this.cam.setViewOffset(c,l,c/2-a,l/2-o,e,t),this.cam.updateProjectionMatrix(),this.safeN={x0:n.left/e*2-1,x1:(e-n.right)/e*2-1,y0:1-(t-n.bottom)/t*2,y1:1-n.top/t*2}}fitDist(e,t,n){let s=this.P,r=this.cam,a=r.position.clone(),o=r.quaternion.clone(),c=[];for(let m of[s.px0,s.px1])for(let f of[-.52,3.1])for(let M of[s.pz0,s.pz1])c.push(new G(m,f,M));let l=new G,h=new G,d=new Sn,u=this.safeN,p=m=>{r.position.copy(e).add(l.setFromSpherical(d.set(m,t,n))),r.lookAt(e),r.updateMatrixWorld();for(let f of c)if(h.copy(f).project(r),h.x<u.x0||h.x>u.x1||h.y<u.y0||h.y>u.y1||h.z>1)return!1;return!0},b=2,g=260;for(let m=0;m<22;m++){let f=(b+g)/2;p(f)?g=f:b=f}return r.position.copy(a),r.quaternion.copy(o),r.updateMatrixWorld(),g}fit(e,t=!0,n=!1,s=1150){let r=this.P;if(!r)return;this.view=e,this.applyOffset();let a=this.controls,o=new G((r.px0+r.px1)/2,e==="plan"?0:.6,(r.pz0+r.pz1)/2),c=e==="plan"?1e-4:.9,l=e==="plan"?0:.62,h=new Sn().setFromVector3(this.cam.position.clone().sub(a.target));n&&e!=="plan"&&(c=h.phi,l=h.theta);let d=this.fitDist(o,c,l)*(e==="plan"?1:.93);this.frameGoal={dist:d,target:o},a.minDistance=d*.3,a.maxDistance=d*1.9;let u={target:o,dist:d,phi:c,theta:l};if(!t||this.reduced){this.setCam(u),this.tw=null;return}this.tw={t0:performance.now(),dur:s,from:{target:a.target.clone(),dist:h.radius,phi:h.phi,theta:h.theta},to:u}}setCam(e){this.controls.target.copy(e.target);let n=new G().setFromSpherical(new Sn(e.dist,e.phi,e.theta));this.cam.position.copy(e.target).add(n),this.cam.lookAt(e.target),this.need=!0}zoom(e){let t=this.controls,n=this.cam.position.clone().sub(t.target),s=Ts(n.length()*e,t.minDistance,t.maxDistance),r=new Sn().setFromVector3(n);this.input(),this.tw={t0:performance.now(),dur:380,from:{target:t.target.clone(),dist:r.radius,phi:r.phi,theta:r.theta},to:{target:t.target.clone(),dist:s,phi:r.phi,theta:r.theta}}}wheel(e){let t=this.controls,n=this.cam.position.clone().sub(t.target),s=Math.exp(e.deltaY*(e.deltaMode?.05:.0022));n.setLength(Ts(n.length()*s,t.minDistance,t.maxDistance)),this.cam.position.copy(t.target).add(n),this.input(),this.need=!0}loop(e){if(this.raf=requestAnimationFrame(this.loop),!this.visible)return;let t=performance.now(),n=!1;if(this.tw){let h=Ts((e-this.tw.t0)/this.tw.dur,0,1),d=Tr.inOutCubic(h),u=this.tw.from,p=this.tw.to,b=p.theta-u.theta;b>an?b-=an*2:b<-an&&(b+=an*2),this.setCam({target:u.target.clone().lerp(p.target,d),dist:ml(u.dist,p.dist,d),phi:ml(u.phi,p.phi,d),theta:u.theta+b*d}),h>=1&&(this.tw=null),n=!0}else if(!this.reduced&&this.view==="3d"&&!this.mobile&&e-this.lastInput>6e3&&e>(this.buildEnd||0)+1500){let h=this.controls,d=this.cam.position.clone().sub(h.target),u=new Sn().setFromVector3(d);this.idleBase===null&&(this.idleBase=u.theta,this.idleT0=e),u.theta=this.idleBase+Math.sin((e-this.idleT0)*11e-5)*.32,this.cam.position.copy(h.target).add(d.setFromSpherical(u)),this.cam.lookAt(h.target),n=!0}if(this.controls.update()&&(n=!0),this.P){let h=this.controls.target,d=this.P,u=Ts(h.x,d.px0,d.px1),p=Ts(h.z,d.pz0,d.pz1),b=Ts(h.y,-.2,2);if(u!==h.x||p!==h.z||b!==h.y){let g=new G(u-h.x,b-h.y,p-h.z);h.add(g),this.cam.position.add(g)}}let s=this.cam.position.x-this.controls.target.x,r=this.cam.position.z-this.controls.target.z,a=Math.hypot(s,r)||1,o=this.view==="plan"||this.cam.position.y-this.controls.target.y>a*4,c=.42/3.1,l={back:!o&&-r/a>.18?c:1,left:!o&&-s/a>.18?c:1,right:!o&&s/a>.18?c:1,front:!o&&r/a>.18?c:1,inner:o?1:c};for(let h in l){let d=this.cut[h],u=l[h];Math.abs(d-u)>.002?(this.cut[h]=ml(d,u,.14),n=!0):this.cut[h]=u}if(this.look==="real"){let h=Math.min(.1,(e-(this.lastT||e))/1e3);this.lastT=e,this.real.update(h,e)&&(n=!0)}else this.lastT=0;for(let h of this.blocks.values())(h.anim||h.spec.cut)&&(n=this.step(h,e)||n);for(let h of this.leaving)n=this.step(h,e)||n;if(this.buildEnd&&e>this.buildEnd&&!this.doneSent&&(this.doneSent=!0,this.opt.onDone&&this.opt.onDone()),this.ptrDirty&&!this.tw){this.ptrDirty=!1;let h=this.pick();this.setHover(h?h.spec.g:null),this.opt.onHover&&this.opt.onHover(h?h.spec.lab:"",this.ptrPx)}(n||this.need)&&(this.need=!1,this.composer?this.composer.render():this.renderer.render(this.scene,this.cam),this.opt.onFrame&&this.opt.onFrame(),this.measure(performance.now()-t,e))}measure(e,t){if(this.prevFrame&&t-this.prevFrame<40&&this.frameMs.push(t-this.prevFrame),this.prevFrame=t,this.frameMs.length>=90){let n=[...this.frameMs].sort((r,a)=>r-a),s=n[Math.floor(n.length*.5)];this.frameMs.length=0,this.stats={p50:s},s>24&&this.quality>0&&(this.quality--,this.setupComposer(),this.resize())}}step(e,t){let n=e.anim,s=e.spec.cut?this.cut[e.spec.cut]:1;if(!n)return e.apply(s),!1;if(t<n.t0)return n.type==="in"?e.obj.visible=!1:e.apply(s),!0;let r=Ts((t-n.t0)/n.dur,0,1);if(e.lift=0,e.sq=1,e.sxz=1,e.wig=0,e.grow=1,n.type==="in"){e.obj.visible=!0;let a=e.spec;if(a.L===0){let o=Tr.outCubic(r);e.lift=-.35*(1-o),e.grow=.94+.06*o}else if(a.L===1)e.sq=Math.max(.001,Tr.outBack(r));else{let o=Math.min(1,r/.72);if(e.lift=n.drop*(1-o*o),e.grow=.3+.7*Tr.outCubic(o),r>.72){let c=(r-.72)/.28;e.sq=1-.2*Math.sin(an*c)*(1-c*.4),e.sxz=1+.09*Math.sin(an*c)}!n.landed&&o>=1&&(n.landed=!0,this.opt.sound&&!this.quiet&&this.opt.sound.tick(Math.cbrt(a.w*a.h*a.d)))}}else if(n.type==="out"){let a=Tr.inBack(r);if(e.lift=.45*Math.sin(an*Math.min(1,r*1.2))*.6,e.grow=Math.max(1e-4,1-a),r>=1)return this.leaving.delete(e),this.root.remove(e.obj),!0}else if(n.type==="morph"){let a=Tr.inOutCubic(r);for(let o of Sp)e.st[o]=ml(n.from[o],n.to[o],a);e.lift=n.arc*Math.sin(an*r),r>=.5&&e.m!==n.spec.m&&e.setMat(n.spec.m),r>=1&&(e.setSpec(n.spec),e.st=Lu(n.spec))}else if(n.type==="mat"){let a=Math.sin(an*r);e.lift=n.amp*a,e.wig=n.amp?.12*a*(1-r):0,e.sq=1-(n.amp?.08:.025)*a,!n.swapped&&r>=.5&&(n.swapped=!0,e.setMat(e.m),!this.quiet&&this.opt.sound&&this.opt.sound.tick(Math.cbrt(e.spec.w*e.spec.h*e.spec.d)))}else n.type==="hop"&&(e.lift=.42*Math.sin(an*r),e.wig=.16*Math.sin(an*2*r)*(1-r),e.sq=1+.06*Math.sin(an*2*r));return e.apply(s),r>=1&&e.anim===n&&(e.anim=null,e.lift=0,e.sq=1,e.sxz=1,e.wig=0,e.grow=1,e.apply(s)),!0}project(e,t,n){let s=new G(e,t,n).project(this.cam);return{x:(s.x*.5+.5)*this.size.w,y:(-s.y*.5+.5)*this.size.h,ok:s.z<1}}snapshot(){return this.composer?this.composer.render():this.renderer.render(this.scene,this.cam),this.canvas.toDataURL("image/png")}dispose(){cancelAnimationFrame(this.raf),this.ro.disconnect(),this.io.disconnect(),this.controls.dispose(),this.renderer.dispose()}};var Xi=Math.PI,on=i=>i.toFixed(1).replace(".",","),xl=class{constructor(e){this.rnd=e,this.list=[],this.stack=[{x:0,z:0,r:0}],this.g="",this.lab="",this.L=2,this.sub=0,this.stats={seats:0,counter:0,shelf:0,places:0},this.depth=0,this.rec=[],this.open=null}closeRec(){if(!this.open)return;let e={};for(let t of Object.keys(this.stats))e[t]=this.stats[t]-(this.open.s0[t]||0);this.rec.push({g:this.open.g,d:e}),this.open=null}removeGroups(e){this.closeRec();let t=new Set(e);for(let n of this.rec)if(t.has(n.g))for(let s of Object.keys(n.d))this.stats[s]-=n.d[s];this.rec=this.rec.filter(n=>!t.has(n.g)),this.list=this.list.filter(n=>!t.has(n.g))}get f(){return this.stack[this.stack.length-1]}at(e,t,n,s){let r=this.f,a=Math.cos(r.r),o=Math.sin(r.r);this.stack.push({x:r.x+e*a+t*o,z:r.z-e*o+t*a,r:r.r+n}),s(),this.stack.pop()}group(e,t,n,s){this.depth===0&&(this.closeRec(),this.open={g:e,s0:{...this.stats}}),this.depth++;let r=[this.g,this.lab,this.L,this.sub];this.g=e,this.lab=t,this.L=n,this.sub=0,s(),[this.g,this.lab,this.L,this.sub]=r,this.depth--}add(e,t,n,s,r,a,o,c,l,h={}){let d=this.f,u=Math.cos(d.r),p=Math.sin(d.r);this.list.push({t:e,k:(this.g?this.g+".":"")+t,g:this.g||t,lab:h.lab??this.lab,L:h.L??this.L,i:this.sub++,x:d.x+n*u+r*p,y:s,z:d.z-n*p+r*u,w:a,h:o,d:c,ry:d.r+(h.ry||0),rx:h.rx||0,m:l,rt:h.rt,cut:h.cut,cast:h.cast??l!=="glass",plain:h.plain,struct:h.struct,rad:h.rad})}box(e,t,n,s,r,a,o,c="w",l){this.add("box",e,t,n,s,r,a,o,c,l)}cyl(e,t,n,s,r,a,o="w",c){this.add("cyl",e,t,n,s,r*2,a,r*2,o,c)}sph(e,t,n,s,r,a="w",o){this.add("sph",e,t,n,s,r*2,r*2,r*2,a,o)}dome(e,t,n,s,r,a="w",o){this.add("dome",e,t,n,s,r*2,r,r*2,a,o)}cap(e,t,n,s,r,a,o="w",c){this.add("cap",e,t,n,s,r*2,a,r*2,o,c)}};function ai(i,e,t,n,s){i.at(t,n,s,()=>{i.box(e+"s",0,0,0,.42,.46,.42),i.box(e+"b",0,.46,-.18,.42,.4,.06)})}function Nu(i,e){i.group(e,"Tisch f\xFCr 2",2,()=>{i.cyl("leg",0,0,0,.05,.71),i.box("top",0,.71,0,.7,.04,.7),ai(i,"c0",-.62,0,Xi/2),ai(i,"c1",.62,0,-Xi/2)}),i.stats.seats+=2}function wp(i,e){i.group(e,"Tisch f\xFCr 4",2,()=>{i.cyl("leg",0,0,0,.06,.71),i.box("top",0,.71,0,.82,.04,.82),ai(i,"c0",-.67,0,Xi/2),ai(i,"c1",.67,0,-Xi/2),ai(i,"c2",0,-.67,0),ai(i,"c3",0,.67,Xi)}),i.stats.seats+=4}function Tp(i,e,t=3){i.group(e,`Runder Tisch f\xFCr ${t}`,2,()=>{i.cyl("leg",0,0,0,.05,.71),i.cyl("top",0,.71,0,.4,.04);for(let n=0;n<t;n++){let s=n/t*Xi*2+.4;ai(i,"c"+n,Math.sin(s)*.68,Math.cos(s)*.68,s+Xi)}}),i.stats.seats+=t}function Ep(i,e){i.group(e,"Sitznische f\xFCr 4",2,()=>{for(let t of[-1,1])i.box("s"+t,t*.72,0,0,.52,.45,1.2),i.box("b"+t,t*1,.45,0,.1,.52,1.2);i.box("top",0,.72,-.1,.78,.04,1),i.box("leg",0,0,.2,.08,.72,.08)}),i.stats.seats+=4}function Ap(i,e,t){i.group(e,`Gemeinschaftstisch ${on(t)} m`,2,()=>{i.box("top",0,.72,0,t,.05,.9),i.box("l0",-t/2+.25,0,0,.1,.72,.7),i.box("l1",t/2-.25,0,0,.1,.72,.7),i.box("b0",0,0,-.72,t-.2,.45,.36),i.box("b1",0,0,.72,t-.2,.45,.36)}),i.stats.seats+=Math.floor(t/.6)*2}function sy(i,e,t,n,s=.76){i.cyl(e,t,0,n,.17,s,"w",{rt:1.15})}function Uu(i,e,t){let n=0;i.group(e,`Fensterbar ${on(t)} m`,2,()=>{i.box("top",0,1.02,0,t,.04,.42),i.box("s0",-t/2+.12,0,.1,.06,1.02,.14),i.box("s1",t/2-.12,0,.1,.06,1.02,.14),n=Math.max(1,Math.floor(t/.62));let s=t/n;for(let r=0;r<n;r++)sy(i,"st"+r,-t/2+s*(r+.5),-.48)}),i.stats.seats+=n}function Rp(i,e){i.group(e,"Stehtisch",2,()=>{i.cyl("base",0,0,0,.22,.03,"g"),i.cyl("leg",0,.03,0,.04,1.02),i.cyl("top",0,1.05,0,.36,.04)}),i.stats.seats+=2}function Va(i,e,t,n="Sofa"){i.group(e,n,2,()=>{i.box("base",0,0,0,t,.42,.86),i.box("back",0,.42,-.33,t,.4,.2),i.box("a0",-t/2+.09,.42,0,.18,.2,.86),i.box("a1",t/2-.09,.42,0,.18,.2,.86)}),i.stats.seats+=Math.max(1,Math.round(t/.7))}function Cp(i,e){i.group(e,"Beistelltisch",3,()=>i.cyl("t",0,0,0,.3,.4))}function Es(i,e,t,n={}){i.group(e,n.label||`Theke ${on(t)} m`,2,()=>{if(i.box("body",0,0,0,t,.98,.72,n.m||"r"),i.box("top",0,.98,.04,t+(n.flush?0:.08),.05,.84),n.reg!==!1){let s=(n.regX??1)*(t/2-.42);i.box("reg",s,1.03,-.12,.34,.07,.28,"g",{L:3}),i.box("scr",s,1.1,-.22,.3,.22,.03,"k",{L:3,rx:-.3})}}),i.stats.counter+=t}function Pp(i,e,t){i.group(e,`R\xFCckbuffet ${on(t)} m`,2,()=>{i.box("body",0,0,0,t,.9,.6),i.box("top",0,.9,0,t+.04,.04,.62)})}function Ip(i,e,t,n=1.95){let s=Math.max(1,Math.min(4,Math.floor(t/1.05)));i.group(e,"Men\xFCboard",3,()=>{for(let r=0;r<s;r++)i.box("m"+r,(r-(s-1)/2)*1.04,n,.03,.98,.56,.04,"k")})}function Dp(i,e,t){i.group(e,`Vitrine ${on(t)} m`,2,()=>{i.box("base",0,0,0,t,.9,.76),i.box("glass",0,.9,.02,t-.04,.42,.68,"glass"),i.box("tray",0,.92,.04,t-.2,.05,.5,"g",{L:3});let n=Math.max(2,Math.floor(t/.32));for(let s=0;s<n;s++)i.sph("p"+s,-t/2+.22+s*((t-.44)/Math.max(1,n-1)),.97,.04+(s%2?.1:-.08),.07,"w",{L:4})}),i.stats.counter+=t}function Lp(i,e,t=1.03){i.group(e,"Siebtr\xE4ger",3,()=>{i.box("body",0,t,0,.74,.4,.5,"r"),i.box("top",0,t+.4,-.02,.7,.05,.42),i.box("g0",-.18,t+.12,.27,.08,.08,.06,"k"),i.box("g1",.18,t+.12,.27,.08,.08,.06,"k"),i.cyl("mill",.55,t,0,.09,.42)})}function ku(i,e,t=.94){i.group(e,"D\xF6nerspie\xDF",3,()=>{i.cyl("plate",0,t,0,.2,.04,"g"),i.cyl("meat",0,t+.04,0,.17,.62,"r",{rt:.62}),i.cyl("rod",0,t+.66,0,.015,.2,"g"),i.box("heat",0,t,-.28,.46,.6,.08,"g")})}function Ou(i,e){i.group(e,"Steinofen",2,()=>{i.box("base",0,0,0,1.5,.92,1.5),i.dome("dome",0,.92,0,.72,"w"),i.box("mouth",0,.98,.64,.5,.3,.12,"k"),i.box("arch",0,1.28,.66,.66,.08,.12,"r",{L:3}),i.cyl("chim",0,1.6,-.1,.12,.85)})}function Fp(i,e,t,n=.94){let s=Math.max(2,Math.min(5,Math.floor(t/.35)));i.group(e,"Mixer",3,()=>{for(let r=0;r<s;r++){let a=(r-(s-1)/2)*.32;i.box("b"+r,a,n,0,.18,.16,.2,"g"),i.cyl("j"+r,a,n+.16,0,.07,.24,"glass",{rt:1.2})}})}function Np(i,e,t,n=1.03){let s=Math.max(3,Math.floor(t/.24));i.group(e,"Toppingbar",3,()=>{i.box("tray",0,n,-.05,t-.1,.05,.36,"g");for(let r=0;r<s;r++)i.box("t"+r,-t/2+.17+r*((t-.34)/(s-1)),n+.05,-.05,.18,.09,.26,r%3===1?"r":"w",{L:4})})}function Up(i,e){i.group(e,"Bestellterminal",3,()=>{i.box("base",0,0,0,.5,.06,.4,"g"),i.box("col",0,.06,-.04,.14,1,.1),i.box("scr",0,.92,0,.56,.86,.08,"k",{rx:-.12}),i.box("frame",0,.9,-.05,.62,.92,.04)})}function kp(i,e,t,n=!0,s="K\xFCchenzeile"){let r=Math.max(1,Math.round(t/.8)),a=t/r;i.group(e,`${s} ${on(t)} m`,2,()=>{for(let o=0;o<r;o++)i.box("u"+o,-t/2+a*(o+.5),0,0,a-.02,.88,.7,o%3===1?"g":"w");i.box("top",0,.88,0,t,.04,.72),n&&i.box("hood",0,1.95,0,t,.42,.72,"w",{L:3})})}function Op(i,e){i.group(e,"Etagenofen",2,()=>{i.box("base",0,0,0,1.4,.55,1,"g");for(let t=0;t<3;t++)i.box("d"+t,0,.55+t*.42,0,1.4,.4,1),i.box("h"+t,0,.68+t*.42,.51,1,.04,.04,"k",{L:3});i.box("hood",0,1.85,0,1.4,.18,1,"g")})}function ji(i,e,t,n=.45,s=2){i.group(e,`Lagerregal ${on(t)} m`,2,()=>{i.box("u0",-t/2+.03,0,0,.05,s,n),i.box("u1",t/2-.03,0,0,.05,s,n),[.08,.6,1.12,1.64].forEach((a,o)=>{i.box("s"+o,0,a,0,t-.06,.03,n);let c=-t/2+.12,l=0;for(;c<t/2-.3&&l<4;){let h=.22+i.rnd()*.3;if(c+h>t/2-.08)break;i.rnd()>.25&&i.box(`x${o}_${l}`,c+h/2,a+.03,0,h,.18+i.rnd()*.22,n-.08,"g",{L:4}),c+=h+.06,l++}})})}function Ha(i,e,t){i.group(e,`Arbeitstisch ${on(t)} m`,2,()=>{i.box("top",0,.86,0,t,.04,.7),i.box("shelf",0,.18,0,t-.1,.03,.62,"g");for(let n of[-1,1])i.box("l"+n,n*(t/2-.05),0,0,.05,.86,.66)})}function Wa(i,e,t=.9,n="K\xFChlregal"){i.group(e,n,2,()=>{i.box("body",0,0,0,t,2.05,.72),i.box("in",0,.16,-.02,t-.12,1.74,.6,"g"),i.box("glass",0,.14,.355,t-.06,1.8,.02,"glass"),i.box("head",0,1.94,.37,t-.04,.1,.02,"r",{L:3})}),i.stats.shelf+=t}function qa(i,e,t){i.group(e,`Regal ${on(t)} m`,2,()=>{i.box("base",0,0,0,t,.12,.9,"g"),i.box("mid",0,.12,0,t,1.42,.06),i.box("cap",0,1.54,0,t+.04,.04,.12);for(let n of[-1,1])for(let s=0;s<3;s++){let r=.36+s*.4;i.box(`s${n}${s}`,0,r,n*.24,t-.04,.03,.4),i.box(`p${n}${s}`,0,r+.03,n*.24,t-.16,.2+(s+(n>0?1:0))%2*.08,.32,s===1&&n>0?"w":"g",{L:4})}i.box("end0",-t/2-.02,.12,0,.04,1.42,.9),i.box("end1",t/2+.02,.12,0,.04,1.42,.9)}),i.stats.shelf+=t*2}function Ki(i,e,t,n=2,s){i.group(e,s||`Wandregal ${on(t)} m`,2,()=>{i.box("back",0,0,-.17,t,n,.06);let r=Math.floor((n-.2)/.42);for(let a=0;a<r;a++){let o=.3+a*.42;i.box("s"+a,0,o,0,t,.03,.34),i.box("p"+a,0,o+.03,.01,t-.12,.22,.26,a%2?"w":"g",{L:4})}}),i.stats.shelf+=t}function zp(i,e){i.group(e,"Kasse",2,()=>{i.box("body",0,0,0,.8,.88,1.8),i.box("belt",0,.88,.25,.46,.03,1.1,"g"),i.box("reg",-.22,.88,-.6,.3,.1,.32,"g",{L:3}),i.box("scr",-.22,.98,-.6,.04,.24,.3,"k",{L:3,rx:0}),i.box("div",.3,.88,-.35,.04,.32,.5,"glass")})}function Bp(i,e,t=3){i.group(e,"Einkaufswagen",3,()=>{for(let n=0;n<t;n++)i.box("b"+n,0,.34,n*.22,.52,.46,.8,"g"),i.box("f"+n,0,.08,n*.22+.04,.48,.04,.82),i.box("h"+n,0,.84,n*.22-.42,.52,.04,.04)})}function Gp(i,e,t=1.6){i.group(e,"Obst und Gem\xFCse",2,()=>{i.box("base",0,0,0,t,.55,.92),i.box("tier",0,.55,-.22,t,.24,.46);let n=Math.floor(t/.32);for(let s=0;s<n;s++)i.sph("f"+s,-t/2+.2+s*.3,.55,.2,.1,s%3===0?"r":"g",{L:4}),i.sph("t"+s,-t/2+.2+s*.3,.79,-.2,.09,"g",{L:4})})}function Vp(i,e){i.group(e,"Eistruhe",2,()=>{i.box("body",0,0,0,1.3,.8,.7),i.box("in",0,.62,0,1.2,.18,.6,"g"),i.box("lid",0,.8,0,1.24,.03,.64,"glass")})}function Hp(i,e){i.group(e,"Zeitungsst\xE4nder",3,()=>{i.box("body",0,0,-.06,.9,1.3,.24);for(let t=0;t<3;t++)i.box("m"+t,0,.3+t*.36,.08,.84,.3,.05,t===1?"r":"g",{rx:.3,L:4})})}function Wp(i,e){i.group(e,"Bierbank drau\xDFen",2,()=>{i.box("top",0,.74,0,2,.04,.5),i.box("l0",-.8,0,0,.04,.74,.44),i.box("l1",.8,0,0,.04,.74,.44);for(let t of[-1,1])i.box("b"+t,0,.42,t*.55,2,.04,.25),i.box("bl"+t,-.8,0,t*.55,.04,.42,.22),i.box("br"+t,.8,0,t*.55,.04,.42,.22)}),i.stats.seats+=6}function qp(i,e,t=4){i.group(e,"Getr\xE4nkekisten",3,()=>{for(let n=0;n<t;n++)i.box("c"+n,n%2*.42,Math.floor(n/2)*.29,0,.4,.28,.3,"r")})}function Xp(i,e){i.group(e,"Kundenstopper",3,()=>{i.box("a",0,0,.12,.6,.95,.04,"k",{rx:.22}),i.box("b",0,0,-.12,.6,.95,.04,"w",{rx:-.22})})}function Xa(i,e,t,n){i.group(e,n||`Kleiderstange ${on(t)} m`,2,()=>{i.box("u0",-t/2+.03,0,0,.04,1.62,.04),i.box("u1",t/2-.03,0,0,.04,1.62,.04),i.box("f0",-t/2+.03,0,0,.06,.03,.5,"g"),i.box("f1",t/2-.03,0,0,.06,.03,.5,"g"),i.box("bar",0,1.56,0,t,.03,.03);let s=Math.min(14,Math.floor((t-.2)/.11));for(let r=0;r<s;r++){let a=.75+r*7%5*.06;i.box("c"+r,-t/2+.16+r*((t-.32)/Math.max(1,s-1)),1.52-a,0,.035,a,.46,r%4===2?"g":"w",{L:4})}}),i.stats.shelf+=t}function jp(i,e){i.group(e,"Schaufensterpuppe",3,()=>{i.cyl("base",0,0,0,.18,.03,"g"),i.cyl("pole",0,.03,0,.02,.92),i.cap("torso",0,.9,0,.16,.66),i.sph("head",0,1.58,0,.1)})}function zu(i,e){i.group(e,"Pr\xE4sentationstisch",2,()=>{i.box("a",0,0,0,1.3,.76,.75),i.box("b",.35,0,.5,.8,.52,.55),i.box("i0",-.35,.76,.05,.36,.08,.28,"g",{L:4}),i.box("i1",.1,.76,-.05,.36,.12,.28,"w",{L:4}),i.box("i2",.35,.52,.55,.32,.07,.24,"g",{L:4})})}function Kp(i,e,t){i.group(e,`${t} Umkleiden`,2,()=>{let s=t*1;i.box("back",0,0,-.6,s+.06,2.25,.06);for(let r=0;r<=t;r++)i.box("w"+r,-s/2+r*1,0,0,.06,2.25,1.2);for(let r=0;r<t;r++){let a=-s/2+1*(r+.5);i.box("cur"+r,a+(r%2?.12:-.12),.1,.56,.7,2,.04,"g",{L:3}),i.box("seat"+r,a,0,-.42,.6,.45,.3,"w",{L:3})}})}function Yp(i,e){i.group(e,"Spiegel",3,()=>{i.box("f",0,0,0,.7,1.9,.05),i.box("g",0,.06,.03,.6,1.78,.01,"glass")})}function ja(i,e){i.group(e,"Nagelplatz",2,()=>{i.box("t",0,0,0,1.15,.76,.52),i.box("pad",.1,.76,.06,.24,.05,.16,"g",{L:3}),i.cyl("lamp",-.45,.76,-.12,.05,.36,"w",{L:3}),i.box("lh",-.36,1.1,-.12,.26,.05,.12,"w",{L:3}),ai(i,"c",0,.62,Xi),i.cyl("st",0,0,-.56,.2,.52,"w",{rt:1.05})}),i.stats.places+=1}function Jp(i,e){i.group(e,"Pedik\xFCre Sessel",2,()=>{i.box("pod",0,0,-.2,.95,.36,1.3),i.box("seat",0,.36,-.25,.72,.42,.7),i.box("back",0,.78,-.56,.72,.72,.14),i.box("a0",-.38,.6,-.25,.1,.26,.64),i.box("a1",.38,.6,-.25,.1,.26,.64),i.box("bas",0,0,.72,.5,.22,.42,"g",{L:3}),i.cyl("st",0,0,1.25,.18,.44,"w",{rt:1.05})}),i.stats.places+=1}function Bu(i,e,t=1){i.group(e,"Pflanze",3,()=>{i.cyl("pot",0,0,0,.2*t,.42*t,"w",{rt:1.18}),i.sph("leaf",0,.36*t,0,.36*t,"g"),t>1.1&&i.sph("leaf2",.12*t,.82*t,-.05,.24*t,"g",{L:4})})}function cn(i,e,t,n){let s=1.28+i.rnd()*.12;i.cap(e+"b",t,0,n,.16,s,"w",{L:4,lab:""}),i.sph(e+"h",t,s+.02,n,.105,"w",{L:4,lab:""})}var Er=(i,e,t)=>Math.max(e,Math.min(t,i)),Ht=i=>Math.round(i*100)/100,Mi=[{id:"rect",name:"Rechteck",min:30,pts:[[0,0],[1,0],[1,1],[0,1]]},{id:"lb",min:44,name:"L Form, Anbau hinten",pts:[[0,0],[.6,0],[.6,.42],[1,.42],[1,1],[0,1]]},{id:"lf",min:44,name:"L Form, Einschnitt vorn",pts:[[0,0],[1,0],[1,.55],[.55,.55],[.55,1],[0,1]]},{id:"t",min:60,name:"T Form, Hallenteil vorn",pts:[[.28,0],[.72,0],[.72,.42],[1,.42],[1,1],[0,1],[0,.42],[.28,.42]]},{id:"tu",min:60,name:"T Form, Hallenteil hinten",pts:[[0,0],[1,0],[1,.55],[.72,.55],[.72,1],[.28,1],[.28,.55],[0,.55]]},{id:"u",min:70,name:"U Form mit Hof vorn",pts:[[0,0],[1,0],[1,1],[.68,1],[.68,.5],[.32,.5],[.32,1],[0,1]]},{id:"z",min:54,name:"Versatz",pts:[[0,.3],[.5,.3],[.5,0],[1,0],[1,.7],[.5,.7],[.5,1],[0,1]]}];function Hu(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2}var oi=i=>Math.abs(Hu(i));function Zp(i,e=1e-4){let t=i.map(s=>[s[0],s[1]]),n=!0;for(;n&&t.length>3;){n=!1;for(let s=0;s<t.length;s++){let r=t[(s+t.length-1)%t.length],a=t[s],o=t[(s+1)%t.length],c=Math.hypot(a[0]-r[0],a[1]-r[1])<e,l=(a[0]-r[0])*(o[1]-a[1])-(a[1]-r[1])*(o[0]-a[0]);if(c||Math.abs(l)<e*Math.max(1,Math.hypot(o[0]-r[0],o[1]-r[1]))){t.splice(s,1),n=!0;break}}}return t}function ry(i,e=.001){for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];if(Math.abs(n[0]-s[0])>e&&Math.abs(n[1]-s[1])>e)return!1}return!0}var Qp=(i,e,t)=>{let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let a=i[s],o=i[r];a[1]>t!=o[1]>t&&e<(o[0]-a[0])*(t-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n};function ay(i,e=.1){let t=i.map(b=>b[0]),n=i.map(b=>b[1]),s=Math.min(...t),r=Math.max(...t),a=Math.min(...n),o=Math.max(...n),c=Math.max(4,Math.ceil((r-s)/e)),l=Math.max(4,Math.ceil((o-a)/e)),h=(r-s)/c,d=(o-a)/l,u=new Uint8Array(c*l);for(let b=0;b<l;b++)for(let g=0;g<c;g++)u[b*c+g]=Qp(i,s+(g+.5)*h,a+(b+.5)*d)?1:0;let p=bl(u,c,l);return p?p.map(([b,g])=>[s+b*h,a+g*d]):null}function bl(i,e,t,n=.085){let s=e,r=-1,a=t,o=-1;for(let x=0;x<t;x++)for(let v=0;v<e;v++)i[x*e+v]&&(v<s&&(s=v),v>r&&(r=v),x<a&&(a=x),x>o&&(o=x));if(r<0)return null;r++,o++;let c=r-s,l=o-a,h=new Float32Array(e+1),d=new Float32Array(t+1);for(let x=a;x<o;x++)for(let v=s;v<=r;v++){let S=v>0?i[x*e+v-1]:0,A=v<e?i[x*e+v]:0;S!==A&&h[v]++}for(let x=a;x<=o;x++)for(let v=s;v<r;v++){let S=x>0?i[(x-1)*e+v]:0,A=x<t?i[x*e+v]:0;S!==A&&d[x]++}let u=(x,v,S,A,_)=>{let E=new Float32Array(x.length);for(let L=v;L<=S;L++)E[L]=x[L]+.5*(x[L-1]||0)+.5*(x[L+1]||0);let C=[];for(let L=v+1;L<S;L++)E[L]>=A&&E[L]>=E[L-1]&&E[L]>=E[L+1]&&C.push(L);C.sort((L,O)=>E[O]-E[L]);let I=[];for(let L of C)I.every(O=>Math.abs(O-L)>=_)&&I.push(L);return I.push(v,S),I.sort((L,O)=>L-O).filter((L,O,F)=>O===0||L!==F[O-1])},p=u(h,s,r,Math.max(3,l*n),Math.max(2,Math.round(Math.min(c,l)*.05))),b=u(d,a,o,Math.max(3,c*n),Math.max(2,Math.round(Math.min(c,l)*.05))),g=new Int32Array((e+1)*(t+1));for(let x=0;x<t;x++){let v=0;for(let S=0;S<e;S++)v+=i[x*e+S],g[(x+1)*(e+1)+S+1]=g[x*(e+1)+S+1]+v}let m=(x,v,S,A)=>g[A*(e+1)+S]-g[v*(e+1)+S]-g[A*(e+1)+x]+g[v*(e+1)+x],f=p.length-1,M=b.length-1,T=new Uint8Array(f*M);for(let x=0;x<M;x++)for(let v=0;v<f;v++){let S=p[v],A=p[v+1],_=b[x],E=b[x+1];T[x*f+v]=m(S,_,A,E)*2>(A-S)*(E-_)?1:0}return oy(T,f,M,p,b)}function oy(i,e,t,n,s){let r=new Int32Array(e*t).fill(-1),a=[];for(let v=0;v<e*t;v++){if(!i[v]||r[v]>=0)continue;let S=a.length,A=[v];r[v]=S;let _=0;for(;A.length;){let E=A.pop(),C=E%e,I=(E-C)/e;_+=(n[C+1]-n[C])*(s[I+1]-s[I]);for(let[L,O]of[[1,0],[-1,0],[0,1],[0,-1]]){let F=C+L,H=I+O;if(F<0||H<0||F>=e||H>=t)continue;let q=H*e+F;i[q]&&r[q]<0&&(r[q]=S,A.push(q))}}a.push(_)}if(!a.length)return null;let o=a.indexOf(Math.max(...a)),c=(v,S)=>v>=0&&S>=0&&v<e&&S<t&&r[S*e+v]===o,l=new Uint8Array(e*t),h=[];for(let v=-1;v<=e;v++)for(let S of[-1,t])h.push([v,S]);for(let v=0;v<t;v++)for(let S of[-1,e])h.push([S,v]);let d=new Set(h.map(([v,S])=>`${v},${S}`));for(;h.length;){let[v,S]=h.pop();v>=0&&S>=0&&v<e&&S<t&&(l[S*e+v]=1);for(let[A,_]of[[1,0],[-1,0],[0,1],[0,-1]]){let E=v+A,C=S+_;E<-1||C<-1||E>e||C>t||d.has(`${E},${C}`)||E>=0&&C>=0&&E<e&&C<t&&c(E,C)||(d.add(`${E},${C}`),h.push([E,C]))}}let u=(v,S)=>v>=0&&S>=0&&v<e&&S<t&&!l[S*e+v],p=new Map,b=(v,S)=>`${v},${S}`,g=(v,S)=>{let A=b(...v);p.has(A)||p.set(A,[]),p.get(A).push(S)};for(let v=0;v<t;v++)for(let S=0;S<e;S++)u(S,v)&&(u(S,v-1)||g([S,v],[S+1,v]),u(S+1,v)||g([S+1,v],[S+1,v+1]),u(S,v+1)||g([S+1,v+1],[S,v+1]),u(S-1,v)||g([S,v+1],[S,v]));let m=[...p.keys()][0];if(!m)return null;let f=m.split(",").map(Number),M=null,T=[];for(let v=0;v<1e4;v++){T.push(f);let S=p.get(b(...f))||[];if(!S.length)return null;let A=S[0];if(S.length>1&&M){let _=[f[0]-M[0],f[1]-M[1]],E=C=>{let I=[C[0]-f[0],C[1]-f[1]];return _[0]*I[1]-_[1]*I[0]};A=S.slice().sort((C,I)=>E(I)-E(C))[0]}if(M=f,f=A,f[0]===T[0][0]&&f[1]===T[0][1])break}let x=Zp(T.map(([v,S])=>[n[v],s[S]]),1e-9);return x.length>=4?x:null}function em(i){if(i.form==="rect"||!i.form)return Gu(i);let e=Mi.find(n=>n.id===i.form)||Mi[0],t=Math.max(i.m2,e.min||0);for(let n=0;n<40;n++)for(let s=0;s<=12;s++)for(let r of s?[1,-1]:[1]){let a=Gu({...i,m2:t*1.04**n,ratio:Er(i.ratio*1.1**(r*s),.4,4)}),o=Wu(a,{doorW:1.2});if(o&&o.W>=5-1e-6&&o.D>=6-1e-6)return a}return Gu(i)}function Gu(i){let e=Mi.find(p=>p.id===i.form)||Mi[0],t=Math.max(i.m2,e.min||0),n=i.ratio,s=oi(e.pts),r=Math.sqrt(t/(s*n));r=Er(r,e.id==="rect"?5:8,30);let a=t/(s*r);a<6&&(a=6,r=t/(s*a));let o=e.pts.map(([p,b])=>[(i.flip?1-p:p)*r,b*a]);i.flip&&(o=o.reverse()),o=o.map(([p,b])=>[Ht(p),Ht(b)]);let c=Vu(o),l=-1;c.forEach((p,b)=>{p.nz>.5&&(l<0||p.z0>c[l].z0+1e-6||Math.abs(p.z0-c[l].z0)<1e-6&&p.len>c[l].len)&&(l=b)});let h=[];if(c.forEach((p,b)=>{b!==l&&p.nz>.5&&h.push(b)}),i.corner){let p=c[l],b=f=>f.nx>.5,m=c.map((f,M)=>[f,M]).filter(([f,M])=>M!==l&&b(f)&&(Math.hypot(f.x0-p.x1,f.z0-p.z1)<1e-6||Math.hypot(f.x1-p.x1,f.z1-p.z1)<1e-6||Math.hypot(f.x0-p.x0,f.z0-p.z0)<1e-6||Math.hypot(f.x1-p.x0,f.z1-p.z0)<1e-6)).sort((f,M)=>M[0].len-f[0].len)[0];m&&!h.includes(m[1])&&h.push(m[1])}let d=i.door==="m"?.5:i.door==="l"?.14:.86,u=c[l];return{pts:o,fi:l,ft:u.x0<=u.x1?d:1-d,gl:h,door:i.door}}function Vu(i){let e=Hu(i),t=e>=0?1:-1;return i.map((n,s)=>{let r=i[(s+1)%i.length],a=r[0]-n[0],o=r[1]-n[1],c=Math.hypot(a,o)||1;return{x0:n[0],z0:n[1],x1:r[0],z1:r[1],len:c,nx:o/c*t,nz:-a/c*t}})}function Wu(i,e={}){let t=e.doorW??1.2,n=i.pts.map(j=>[j[0],j[1]]);if(n.length<4)return null;let s=n.length,r=Er(i.fi|0,0,s-1),a=n[r],o=n[(r+1)%s],c=Er(i.ft??.5,.02,.98),l=[a[0]+(o[0]-a[0])*c,a[1]+(o[1]-a[1])*c],h=(i.gl||[]).filter(j=>j>=0&&j<s&&j!==r).map(j=>{let he=n[j],pe=n[(j+1)%s];return[(he[0]+pe[0])/2,(he[1]+pe[1])/2]});if(!ry(n)){let j=ay(n);if(!j)return null;n=j}if(n=Zp(n),n.length<4||oi(n)<8)return null;Hu(n)<0&&n.reverse();let d=Vu(n),u=j=>{let he=0,pe=1/0;return d.forEach((de,Le)=>{let Ge=Er(((j[0]-de.x0)*(de.x1-de.x0)+(j[1]-de.z0)*(de.z1-de.z0))/(de.len*de.len),0,1),je=Math.hypot(j[0]-(de.x0+(de.x1-de.x0)*Ge),j[1]-(de.z0+(de.z1-de.z0)*Ge));je<pe&&(pe=je,he=Le)}),he},p=u(l),b=new Set(h.map(u));b.delete(p);let g=d[p],m=0,f=`${Math.round(g.nx)},${Math.round(g.nz)}`;m={"0,1":0,"1,0":1,"0,-1":2,"-1,0":3}[f]??0;let M=j=>[-j[1],j[0]],T=j=>{let he=j;for(let pe=0;pe<m;pe++)he=he.map(M);return he};n=T(n),l=T([l])[0],d=Vu(n);let x=d.map((j,he)=>he===p?"front":b.has(he)?"glass":"wall"),v=j=>[...new Set(j.map(he=>Math.round(he*1e3)/1e3))].sort((he,pe)=>he-pe),S=v(n.map(j=>j[0])),A=v(n.map(j=>j[1])),_=S.length-1,E=A.length-1,C=new Uint8Array(_*E);for(let j=0;j<E;j++)for(let he=0;he<_;he++)C[j*_+he]=Qp(n,(S[he]+S[he+1])/2,(A[j]+A[j+1])/2)?1:0;let I=d[p],L=I.z0,O=Math.min(I.x0,I.x1),F=Math.max(I.x0,I.x1);(i.door==="l"||i.door==="m"||i.door==="r")&&(l=[O+(F-O)*(i.door==="l"?.14:i.door==="m"?.5:.86),L]);let H=A.findIndex(j=>Math.abs(j-L)<.001),q=(j,he,pe,de)=>{for(let Le=pe;Le<de;Le++)for(let Ge=j;Ge<he;Ge++)if(!C[Le*_+Ge])return!1;return!0},ne=t,ce=(j,he)=>{let pe=j/he;return pe>=.5&&pe<=2.6?1:pe<.5?(pe/.5)**1.5:(2.6/pe)**1.5},Y=[];for(let[j,he]of[[5,6],[4.4,5.2],[3.6,4.2],[2.6,2.6]]){for(let pe=0;pe<_;pe++)for(let de=pe+1;de<=_;de++)if(!(S[pe]<O-.001||S[de]>F+.001))for(let Le=0;Le<H;Le++){if(!q(pe,de,Le,H))continue;let Ge=S[de]-S[pe],je=L-A[Le];if(Ge<j||je<he)continue;let Xe=l[0]>=S[pe]+ne/2+.25-.001&&l[0]<=S[de]-ne/2-.25+.001,et=0;for(let z=0;z<Le;z++)for(let at=0;at<_;at++)C[z*_+at]&&A[z+1]<=A[Le]+1e-6&&(et+=(S[at+1]-S[at])*(A[z+1]-A[z]));Y.push({i0:pe,i1:de,j0:Le,W:Ge,D:je,sc:Ge*je*ce(je,Ge)*(Xe?1:.45)*(1-.5*Math.min(1,et/oi(n)))})}if(Y.length)break}if(!Y.length)return null;Y.sort((j,he)=>he.sc-j.sc||he.W-j.W);let ie=Y[0],ae={i0:ie.i0,i1:ie.i1,j0:ie.j0,j1:H},ge=new Uint8Array(_*E);for(let j=ae.j0;j<ae.j1;j++)for(let he=ae.i0;he<ae.i1;he++)ge[j*_+he]=1;let _e=[{i0:ae.i0,i1:ae.i1,j0:ae.j0,j1:ae.j1,core:!0}];for(let j=0;j<24;j++){let he=null;for(let pe=0;pe<E;pe++)for(let de=0;de<_;de++)if(!(!C[pe*_+de]||ge[pe*_+de]))for(let Le=pe+1;Le<=E;Le++)for(let Ge=de+1;Ge<=_;Ge++){let je=!0;for(let et=pe;et<Le&&je;et++)for(let z=de;z<Ge;z++)if(!C[et*_+z]||ge[et*_+z]){je=!1;break}if(!je)break;let Xe=(S[Ge]-S[de])*(A[Le]-A[pe]);(!he||Xe>he.ar+1e-9)&&(he={i0:de,i1:Ge,j0:pe,j1:Le,ar:Xe})}if(!he)break;for(let pe=he.j0;pe<he.j1;pe++)for(let de=he.i0;de<he.i1;de++)ge[pe*_+de]=1;_e.push({i0:he.i0,i1:he.i1,j0:he.j0,j1:he.j1})}let We=(S[ae.i0]+S[ae.i1])/2,De=(A[ae.j0]+A[ae.j1])/2,Oe=_e.map((j,he)=>({id:he,core:!!j.core,x0:Ht(S[j.i0]-We),x1:Ht(S[j.i1]-We),z0:Ht(A[j.j0]-De),z1:Ht(A[j.j1]-De)}));Oe.forEach(j=>{j.w=Ht(j.x1-j.x0),j.d=Ht(j.z1-j.z0),j.m2=j.w*j.d});let $=Oe[0],re=d.map((j,he)=>({x0:Ht(j.x0-We),z0:Ht(j.z0-De),x1:Ht(j.x1-We),z1:Ht(j.z1-De),nx:Math.round(j.nx),nz:Math.round(j.nz),len:Ht(j.len),kind:x[he]})),me=[];for(let j=0;j<Oe.length;j++)for(let he=j+1;he<Oe.length;he++){let pe=Oe[j],de=Oe[he],Le=Math.max(pe.z0,de.z0),Ge=Math.min(pe.z1,de.z1),je=Math.max(pe.x0,de.x0),Xe=Math.min(pe.x1,de.x1);Math.abs(pe.x1-de.x0)<.011&&Ge-Le>.3?me.push({a:j,b:he,axis:"v",pos:pe.x1,lo:Le,hi:Ge,bSide:1}):Math.abs(de.x1-pe.x0)<.011&&Ge-Le>.3?me.push({a:j,b:he,axis:"v",pos:pe.x0,lo:Le,hi:Ge,bSide:-1}):Math.abs(pe.z1-de.z0)<.011&&Xe-je>.3?me.push({a:j,b:he,axis:"h",pos:pe.z1,lo:je,hi:Xe,bSide:1}):Math.abs(de.z1-pe.z0)<.011&&Xe-je>.3&&me.push({a:j,b:he,axis:"h",pos:pe.z0,lo:je,hi:Xe,bSide:-1})}let Ce={x0:Math.min(...re.map(j=>Math.min(j.x0,j.x1))),x1:Math.max(...re.map(j=>Math.max(j.x0,j.x1))),z0:Math.min(...re.map(j=>Math.min(j.z0,j.z1))),z1:Math.max(...re.map(j=>Math.max(j.z0,j.z1)))},xe=oi(n),Be=Ht(Er(l[0]-We,$.x0+.7+t/2,$.x1-.7-t/2));Oe.slice(1).forEach(j=>{let he=me.some(pe=>pe.a===0&&pe.b===j.id||pe.b===0&&pe.a===j.id);j.role=j.z1<=$.z0+.011?"rear":"side",j.touchCore=he});let st=[Oe.map(j=>`${j.x0},${j.x1},${j.z0},${j.z1}`).join(";"),re.map(j=>j.kind[0]).join("")].join("|");return{pts:n.map(j=>[Ht(j[0]-We),Ht(j[1]-De)]),rects:Oe,edges:re,links:me,bbox:Ce,area:xe,core:$,W:$.w,D:$.d,doorX:Be,front:re[p],sig:st,rot:m,coreGlassR:re.some(j=>j.kind==="glass"&&j.nx===1&&Math.abs(j.x0-$.x1)<.011&&Math.min(j.z0,j.z1)<$.z1-.5&&Math.max(j.z0,j.z1)>$.z0+.5),glassR:re.some(j=>j.kind==="glass"&&j.nx===1&&Math.abs(j.x0-Ce.x1)<.011),glassL:re.some(j=>j.kind==="glass"&&j.nx===-1&&Math.abs(j.x0-Ce.x0)<.011)}}function tm(i,e){let t=oi(i.pts),n=t>0?Math.sqrt(e/t):1,s=Math.min(...i.pts.map(a=>a[0])),r=Math.min(...i.pts.map(a=>a[1]));return{...i,pts:i.pts.map(a=>[Ht((a[0]-s)*n),Ht((a[1]-r)*n)])}}var ly=Math.PI,hy={two:[1.85,1.5,2],twoR:[1.15,2.05,2],four:[2.15,2.15,4],round:[1.95,1.95,3],high:[1.2,1.2,2]};function Ka(i,e,t,n,s,r,a,o,c=[]){let l=t-e,h=s-n;if(l<1.1||h<1.1)return;let d=null;if([...r,...r.includes("two")?["twoR"]:[]].forEach((g,m)=>{let[f,M,T]=hy[g],x=_l({x0:e,x1:t,z0:n,z1:s},f,M,c),v=x.length*T*(m===0?1.15:1)*(1+a()*.08);x.length&&(!d||v>d.seats)&&(d={t:g,cells:x,seats:v})}),!d)return;let{t:p,cells:b}=d;for(let g of b){let m=o();p==="two"?i.at(g.x,g.z,0,()=>Nu(i,m)):p==="twoR"?i.at(g.x,g.z,ly/2,()=>Nu(i,m)):p==="four"?i.at(g.x,g.z,0,()=>wp(i,m)):p==="round"?i.at(g.x,g.z,0,()=>Tp(i,m,3)):i.at(g.x,g.z,0,()=>Rp(i,m))}}function _l(i,e,t,n=[]){let s=i.x1-i.x0,r=i.z1-i.z0,a=Math.floor(s/e),o=Math.floor(r/t);if(a<1||o<1)return[];let c=i.x0+(s-a*e)/2,l=i.z0+(r-o*t)/2,h=[];for(let d=0;d<a;d++)for(let u=0;u<o;u++){let p={x0:c+d*e,x1:c+(d+1)*e,z0:l+u*t,z1:l+(u+1)*t};n.some(b=>p.x0<b.x1-.02&&p.x1>b.x0+.02&&p.z0<b.z1-.02&&p.z1>b.z0+.02)||h.push({x:(p.x0+p.x1)/2,z:(p.z0+p.z1)/2,i:d,j:u})}return h}function nm(i,e,t){let n=[[i,e]];for(let[s,r]of t)n=n.flatMap(([a,o])=>r<=a||s>=o?[[a,o]]:[[a,Math.max(a,s)],[Math.min(o,r),o]].filter(([c,l])=>l-c>.01));return n}function Ar(i,e,t,n){let s=e-i;if(s<.9)return[];let r=Math.max(1,Math.ceil((s+n)/(t+n))),a=(s-n*(r-1))/r;return Array.from({length:r},(o,c)=>[i+c*(a+n),i+c*(a+n)+a])}var nt=Math.PI,jt=(i,e,t)=>Math.max(e,Math.min(t,i)),Ji=[{id:"kiosk",name:"Kiosk",W:5.4,D:6.6,door:{x:-1.5,w:1.1},aisle:[-2.55,-.65]},{id:"eck",name:"Eckladen",W:8.4,D:9,door:{x:2.9,w:1.2},glassRight:!0,aisle:[1.5,2.95]},{id:"schlauch",name:"Schlauch",W:5.6,D:15.6,door:{x:0,w:1.2},aisle:[-.8,.8]},{id:"center",name:"Center",W:13.2,D:10.2,door:{x:0,w:3.2},open:!0,aisle:[-1.7,1.7]}];Ji.forEach(i=>{i.m2=Math.round(i.W*i.D)});var yl=30,Ml=260,Yi={s:2.3,n:1.12,b:.72};function Sl(i){if(i.plan)return uy(i.plan,i.m2,i);let e=jt(Math.round(i.m2),yl,Ml);if(i.form&&i.form!=="rect"){let c=em({form:i.form,flip:!!i.flip,m2:e,ratio:Yi[i.shape]??Yi.n,door:i.door,corner:!!i.corner}),l=rm(c,{id:"custom",open:!!i.open});if(l)return l.form=i.form,l}let t=!!i.open,n=Math.sqrt(e/(Yi[i.shape]??Yi.n));n=jt(n,5,24),e/n<6&&(n=e/6),n=Math.round(n*10)/10;let s=e/n,r=t?Math.round(jt(n*.26,2.4,4.2)*10)/10:1.2,a=i.door==="m"?0:(i.door==="l"?-1:1)*(n/2-.7-r/2),o=[jt(a-r/2-.55,-n/2+.3,n/2),jt(a+r/2+.55,-n/2,n/2-.3)];return{id:"custom",name:"Eigene Fl\xE4che",W:n,D:s,m2:e,bw:n,bd:s,door:{x:Math.round(a*100)/100,w:r},glassRight:!!i.corner,open:t,aisle:o}}function rm(i,e={}){let t=!!e.open,n=t?3:1.2,s=null;for(let l=0;l<3;l++){if(s=Wu(i,{doorW:n}),!s)return null;let h=t?Math.round(jt(s.W*.26,2.4,4.2)*10)/10:1.2;if(Math.abs(h-n)<.01)break;n=h}let r=s.W,a=s.D,o=s.doorX,c=[jt(o-n/2-.55,-r/2+.3,r/2),jt(o+n/2+.55,-r/2,r/2-.3)];return{id:e.id||"custom",name:"Eigene Fl\xE4che",W:r,D:a,m2:Math.round(s.area),bw:s.bbox.x1-s.bbox.x0,bd:s.bbox.z1-s.bbox.z0,door:{x:o,w:n},glassRight:s.coreGlassR,open:t,aisle:c,fp:s}}function uy(i,e,t={}){let n=tm(i,jt(e,10,800)),s=rm(n,{id:"plan",open:t.open});return s&&(s.name="Ihr Plan"),s}function qu(i){let e=i.D/i.W,t=Math.abs(Math.log(e/Yi.s))<Math.abs(Math.log(e/Yi.n))?"s":Math.abs(Math.log(e/Yi.b))<Math.abs(Math.log(e/Yi.n))?"b":"n";return{m2:i.m2,shape:t,form:"rect",flip:!1,door:Math.abs(i.door.x)<.5?"m":i.door.x<0?"l":"r",corner:!!i.glassRight,open:!!i.open}}var dy={burger:{boh:.27,kitchen:"fast",counterMax:6,counter:"solid",back:["boards"],kiosks:!0,leftFill:"fridges",rightFill:"pickup",bar:!0,booth:!0,tables:["two","four"],facade:{blade:!0}},doener:{boh:.24,kitchen:"small",counterMax:5,counter:"guard",back:["spits","boards"],leftFill:"fridges",rightFill:"plant",bar:!0,bench:!0,tables:["four","two"],facade:{blade:!0}},pizza:{boh:.24,kitchen:"pizza",counterMax:4.4,counter:"guard",back:["boards"],leftW:1.85,leftFill:"oven",rightFill:"plant",bar:"auto",booth:"rnd",tables:["four","two","round"],facade:{awning:"w",blade:!0}},cafe:{boh:.2,bohMax:2.4,kitchen:"mini",counterMax:4.6,counter:"display",back:["grinder","boards"],espresso:!0,leftFill:"plant",rightFill:"plant",bar:!0,lounge:!0,communal:!0,tables:["round","two"],facade:{awning:"w"}},baecker:{boh:.24,kitchen:"bakery",counterMax:6,counter:"bakery",back:["bread"],leftFill:"fridges",rightFill:"plant",bar:!0,tables:["high","two"],facade:{awning:"r"}},bowl:{boh:.2,bohMax:2.6,kitchen:"mini",counterMax:5,counter:"toppings",back:["blenders","boards"],leftFill:"plant",rightFill:"fridges",bar:!0,bench:!0,communal:!0,tables:["two","round"],facade:{}}},As=[{id:"burger",name:"Burger",kind:"gastro"},{id:"doener",name:"D\xF6ner",kind:"gastro"},{id:"pizza",name:"Pizzeria",kind:"gastro"},{id:"cafe",name:"Caf\xE9",kind:"gastro"},{id:"baecker",name:"B\xE4ckerei",kind:"gastro"},{id:"bowl",name:"Bowl Bar",kind:"gastro"},{id:"spaeti",name:"Sp\xE4ti",kind:"retail"},{id:"markt",name:"Mini Markt",kind:"retail"},{id:"nails",name:"Nagelstudio",kind:"beauty"},{id:"mode",name:"Boutique",kind:"mode"}];function fy(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function py(i){let e=2166136261;for(let t of i)e=Math.imul(e^t.charCodeAt(0),16777619);return e>>>0}function am(i,e,t=0){let n=typeof e=="object"?e:Ji.find(b=>b.id===e)||Ji[0],s=As.find(b=>b.id===i)||As[0],r=fy(py(i+n.id+(n.fp?n.fp.sig:""))^t*7919+13),a=new xl(r),o=n.fp||null,c={...n,H:3,t:.24,SW:2.6,zB:-n.D/2,zF:n.D/2,cat:s.id,seed:t};if(c.px0=-n.W/2-1,c.px1=n.W/2+1+(n.glassRight?1.8:0),c.pz0=c.zB-1,c.pz1=c.zF+.12+c.SW+.2,c.zS=c.zF,o){let b=o.bbox;c.zS=b.z1,c.px0=b.x0-1-(o.glassL?1.8:0),c.px1=b.x1+1+(o.glassR?1.8:0),c.pz0=b.z0-1,c.pz1=c.zS+.12+c.SW+.2,c.recess=c.zS-c.zF>.05}c.sig=`${n.W.toFixed(2)}_${n.D.toFixed(2)}_${n.glassRight}_${o?o.sig:""}`;let l=dy[s.id],h=l?jt(n.D*l.boh,1.6,l.bohMax??3.2):s.id==="markt"?jt(n.D*.16,1.4,2.2):1.3;c.zPart=c.zB+h,o&&(c.pass=wy(c)),o?Ty(a,c,l?l.facade:im[s.id]):my(a,c,l?l.facade:im[s.id]),l?gy(a,c,l,r):{spaeti:_y,markt:vy,nails:My,mode:yy}[s.id](a,c,r),o&&(Ry(a,c),Py(a,c,s,l,r),Cy(a,c)),Sy(a,c,r),a.closeRec();let d=Math.round(n.W*(c.zPart-c.zB)),u=n.m2;o&&o.rects.forEach(b=>{!b.core&&om(c,b)&&(d+=Math.round(b.m2))}),d=Math.min(d,u-1);let p={back:d,front:u-d,backLabel:s.kind==="gastro"?"K\xFCche und Lager":"Lager",frontLabel:s.kind==="gastro"?"Gastraum":s.kind==="beauty"?"Behandlung":"Verkaufsfl\xE4che"};return{blocks:a.list,stats:Ny(a,c,s),P:c,split:p}}var im={spaeti:{awning:"r",blade:!0},markt:{},nails:{},mode:{}};function my(i,e,t={}){let{W:n,D:s,H:r,t:a,zB:o,zF:c}=e,l={struct:!0,L:0,lab:""};i.box("plinth",(e.px0+e.px1)/2,-.52,(e.pz0+e.pz1)/2,e.px1-e.px0,.42,e.pz1-e.pz0,"w",{...l,rad:.09,cast:!1}),i.box("floor",0,-.1,.06,n,.1,s+.12,"f",{...l,plain:!0,cast:!1}),i.box("walk",(e.px0+e.px1)/2,-.1,c+.12+e.SW/2+.1,e.px1-e.px0,.075,e.SW+.2,e.open?"f2":"s",{...l,plain:!0,cast:!1}),e.glassRight&&i.box("walk2",(n/2+.12+e.px1)/2,-.1,(e.pz0+c+.12)/2,e.px1-n/2-.12,.075,c+.12-e.pz0,"s",{...l,plain:!0,cast:!1});let h={struct:!0,L:1,lab:""};i.box("wallB",0,-.1,o-a/2,n+2*a,r+.1,a,"w",{...h,cut:"back"}),i.box("wallL",-n/2-a/2,-.1,(o+c+.12)/2,a,r+.1,s+.12,"w",{...h,cut:"left"}),e.glassRight?i.box("wallR",n/2+a/2,-.1,(o+e.zPart)/2,a,r+.1,e.zPart-o,"w",{...h,cut:"right"}):i.box("wallR",n/2+a/2,-.1,(o+c+.12)/2,a,r+.1,s+.12,"w",{...h,cut:"right"}),i.at(0,c+.06,0,()=>vl(i,"fac",n+2*a,e.door.x,e.door.w,e.open,t,e,!0)),e.glassRight&&i.at(n/2+.06,(e.zPart+c+.12)/2,nt/2,()=>vl(i,"facR",c+.12-e.zPart,0,0,!1,{},e,!1))}function vl(i,e,t,n,s,r,a,o,c){let l={struct:!0,L:1,lab:""},h=s?[[-t/2,n-s/2],[n+s/2,t/2]]:[[-t/2,t/2]],d=0,u=0;if(h.forEach(([g,m],f)=>{let M=m-g;if(M<.12)return;let T=Math.max(1,Math.ceil(M/1.6));i.box(e+"s"+f,(g+m)/2,0,0,M,.3,.22,"w",l);for(let x=0;x<=T;x++)i.box(e+"m"+d++,g+M*x/T,0,0,.07,2.55,.13,"w",l);for(let x=0;x<T;x++)i.box(e+"g"+u++,g+M*(x+.5)/T,.3,0,M/T-.07,2.25,.02,"glass",l)}),s&&!r&&(i.box(e+"door",n,0,-.02,s-.08,2.3,.03,"glass",l),i.box(e+"dtop",n,2.3,0,s,.25,.02,"glass",l),i.box(e+"dh",n+s/2-.16,.85,.05,.04,.55,.05,"k",{...l,L:3})),i.box(e+"fas",0,2.55,.04,t,.45,.34,"w",l),!c)return;let p=Math.min(3.4,t*.48),b=jt(n,-t/2+p/2+.2,t/2-p/2-.2);if(i.box(e+"sign",b,2.6,.24,p,.34,.08,"r",{...l,L:3}),i.box(e+"sgt",b,2.72,.29,p*.6,.1,.02,"w",{...l,L:4}),a.blade){let g=jt(n+s/2+.55,-t/2+.4,t/2-.4);i.box(e+"bladeA",g,2.32,.4,.04,.04,.5,"w",{...l,L:3}),i.box(e+"blade",g,1.72,.52,.06,.56,.56,"r",{...l,L:3})}a.awning&&h.forEach(([g,m],f)=>{let M=m-g-.15;M<1||(i.box(e+"aw"+f,(g+m)/2,2.4,.56,M,.03,1.1,a.awning,{...l,L:3,rx:.38}),i.box(e+"awf"+f,(g+m)/2,2.02,1.07,M,.2,.02,a.awning,{...l,L:3}))})}function Ya(i,e,t){let{W:n}=e,s=n/2-1.1,r=n/2-.15,a=2.4,o={struct:!0,L:1,lab:""};i.box("partL",(-n/2+s)/2,0,t,s+n/2,a,.12,"w",o),i.box("partR",(r+n/2)/2,0,t,n/2-r,a,.12,"w",o),i.box("partT",(s+r)/2,2.12,t,r-s,a-2.12,.12,"w",o)}function Ja(i,e,t,n){let{W:s,zB:r}=e,a=n??e.zPart,o=a-r-.06,c=-s/2+.15,l=s/2-.15,h=(u,p,b)=>i.at(c+u/2,r+.36,0,()=>kp(i,"kline",u,p,b)),d=u=>i.at(l-u/2,r+.24,0,()=>ji(i,"kshelf",u));if(t==="fast"||t==="small"){let u=t==="fast"?Math.min(s-1.6,9):Math.max(1.6,Math.min(s*.55,6));h(u,!0),t==="small"&&s-.3-u>1.9&&i.at(c+u+.55,r+.37,0,()=>Wa(i,"kfr",.9,"K\xFChlschrank")),d(Math.min(1,s-.5-u-(t==="small"&&s-.3-u>1.9?1:0))),o>=2.6&&i.at(-s/2+.15+Math.min(2.4,s-3.2)/2+.6,r+.7+.95+.35,0,()=>Ha(i,"kprep",Math.min(2.4,s-3.2)))}else if(t==="pizza"){let u=Math.min(3,s-1.8);i.at(c+u/2,r+.36,0,()=>Ha(i,"kprep",u)),d(Math.min(1.2,s-.6-u)),o>=2.4&&i.at(c+.4,(r+a)/2+.3,nt/2,()=>ji(i,"kshelf2",Math.min(1.4,o-1.2)))}else if(t==="bakery"){let u=s>7?2:1;for(let p=0;p<u;p++)i.at(c+.7+p*1.5,r+.5,0,()=>Op(i,"koven"+p));d(Math.min(1.2,s-.6-u*1.5)),o>=2.95&&i.at(-.3,r+1+.95+.35,0,()=>Ha(i,"kprep",Math.min(2.6,s-3)))}else if(t==="mini"){let u=Math.min(1.8,s*.35);h(u,!1,"Sp\xFClzeile"),i.at((c+u+.2+l)/2,r+.24,0,()=>ji(i,"kshelf",l-c-u-.2))}else i.at((c+l-.2)/2,r+.24,0,()=>ji(i,"kshelf",l-c-.2)),o>=1.9&&s>7&&i.at(c+.24,(r+a)/2+.25,nt/2,()=>ji(i,"kshelf2",Math.min(1.6,o-.9)))}function gy(i,e,t,n){let{W:s,zF:r}=e,a=e.zPart;Ya(i,e,a);let o=a+.06+.3,c=a+.06+.6+.95+.36,l=c+.42,h=t.leftFill==="oven"&&s-1.15-t.leftW>=1.9;t.leftFill==="oven"&&!h&&(t={...t,kitchen:"pizza-oven"}),Ja(i,e,t.kitchen==="pizza-oven"?"pizza":t.kitchen),t.kitchen==="pizza-oven"&&i.at(s/2-1.4-.75,e.zB+.8,0,()=>Ou(i,"ofen"));let d=-s/2+.15+(h?t.leftW:0),u=s/2-1,p=Math.max(1.6,Math.min(t.counterMax+jt((s-8.5)*.45,0,4),u-d)),b=u-d-p,g=d+(b>1.2?b/2:0),m=g+p,f=(g+m)/2;if(t.counter==="display"||t.counter==="bakery"){let S=t.counter==="bakery"?Math.max(1.2,p-1.2):Math.min(1.8,p*.42);i.at(g+S/2,c,0,()=>Dp(i,"vitrine",S)),i.at(g+S+(p-S)/2,c,0,()=>Es(i,"theke",p-S,{label:`Theke ${on(p-S)} m`,flush:!0}))}else i.at(f,c,0,()=>Es(i,"theke",p)),t.counter==="guard"&&i.box("guard",f-.3,1.03,c+.18,Math.max(.8,p-1.4),.36,.03,"glass",{L:3,lab:"Spuckschutz"}),t.counter==="toppings"&&i.at(f-.3,c,0,()=>Np(i,"topping",Math.max(1,p-1.5)));t.espresso&&i.at(g+Math.min(1.8,p*.42)+.5,c-.08,0,()=>Lp(i,"siebtraeger"));let M=-s/2+.15+(h?t.leftW:0),T=s/2-1.25,x=T-M;if(x>1.2){t.back.includes("bread")||i.at((M+T)/2,o,0,()=>Pp(i,"buffet",x));let S=(M+T)/2;t.back.includes("spits")&&(i.at(S-.45,o+.05,0,()=>ku(i,"spiess0")),x>2.6&&i.at(S+.45,o+.05,0,()=>ku(i,"spiess1"))),t.back.includes("blenders")&&i.at(S,o+.02,0,()=>Fp(i,"mixer",Math.min(1.6,x-.4))),t.back.includes("grinder")&&(i.cyl("muehle",S-.6,.94,o,.09,.42,"w",{L:3,lab:"M\xFChle"}),i.box("kasse2",S+.6,.94,o,.5,.32,.4,"g",{L:3,lab:"Kaffeeger\xE4te"})),t.back.includes("boards")&&i.at(S,a+.06,0,()=>Ip(i,"menue",x,1.6)),t.back.includes("bread")&&i.at(S,a+.06+.21,0,()=>Ki(i,"brot",x,2.2,`Brotregal ${on(x)} m`))}h&&i.at(-s/2+.15+.78,a+.06+.82,0,()=>Ou(i,"ofen"));let v=(S,A,_,E)=>{let C=_-A;if(!(C<.85))if(S==="fridges"){let I=Math.min(3,Math.floor(C/.82));for(let L=0;L<I;L++)i.at(A+.41+L*.82,l-.36,0,()=>Wa(i,E+L,.8,"Getr\xE4nkek\xFChler"))}else if(S==="pickup"){let I=Math.min(2.2,C);i.at(A+I/2,l-.36,0,()=>Es(i,E,I,{m:"w",reg:!1,label:"Abholtheke"}))}else i.at(A+.45,l-.4,0,()=>Bu(i,E,1.25))};if(h||v(t.leftFill,-s/2+.15,g-.2,"linksA"),v(t.rightFill,m+.95,s/2-.15,"rechtsA"),t.kiosks){let S=p>4.5?3:2;for(let A=0;A<S;A++)i.at(g+.95+A*.72,l+.32,0,()=>Up(i,"terminal"+A))}cn(i,"team0",g+p*.32,a+.06+.6+.46),p>3&&cn(i,"team1",g+p*.78,a+.06+.6+.5),cn(i,"gast0",m-.65,l+.5),n()>.4&&cn(i,"gast1",m-.55+n()*.3,l+1.05),xy(i,e,t,n,{x0:-s/2+.15,x1:s/2-.15,z0:l+1.25,z1:r-.15})}function xy(i,e,t,n,s){let{W:r,zF:a}=e,{x0:o,x1:c,z0:l,z1:h}=s;if(h-l<.9)return;let d=e.door.x-e.door.w/2-.45,u=e.door.x+e.door.w/2+.45,p=t.bar==="auto"?h-l<3.2:t.bar;if(p&&h-l>=1){let x=!1;[[o,Math.min(d,c)],[Math.max(u,o),c]].forEach(([v,S],A)=>{S-v>=1.2&&(i.at((v+S)/2,a-.23,0,()=>Uu(i,"bar"+A,S-v)),x=!0)}),x&&(h=a-1.3)}if(p&&e.glassRight){let x=l+.1,v=a-1.9;v-x>=1.2&&(i.at(r/2-.23,(x+v)/2,nt/2,()=>Uu(i,"barR",v-x)),c=Math.min(c,r/2-1.3))}let b=t.booth==="rnd"?n()>.5:t.booth,g=e.door.x-e.door.w/2<-r/2+2.3?Math.min(h,a-1.45):h;if(b&&g-l>=2.2){let x=Math.floor((g-l)/2.15),v=(g-l-x*2.15)/2;for(let S=0;S<x;S++)i.at(-r/2+.6,l+v+1.075+S*2.15,nt/2,()=>Ep(i,"nische"+S));o=-r/2+1.25+.35}else if(t.bench&&g-l>=1.4){let x=g-l-.2;i.at(-r/2+.35,(l+g)/2,nt/2,()=>by(i,"bank",x)),o=-r/2+1.9+.3}let m=[],[f,M]=e.aisle;f>o+.5&&m.push([o,Math.min(f,c)]),M<c-.5&&m.push([Math.max(M,o),c]);let T=0;m.forEach(([x,v],S)=>{let A=l,_=h;if(t.communal&&S===m.length-1&&v-x>=3.4&&_-A>=2.5){let E=Math.min(4.2,v-x-.9);i.at((x+v)/2,A+1.2,0,()=>Ap(i,"tafel",E)),A+=2.5}if(t.lounge&&S===m.length-1&&v-x>=3.9&&_-A>=2.5){let E=v-1.05,C=_-1.45;i.at(E,C-.5,0,()=>Va(i,"lounge",1.6,"Lounge Sofa")),i.at(E,C+.35,0,()=>Cp(i,"lounge_t")),i.at(E,C+1.15,nt,()=>Va(i,"lounge_s",.86,"Sessel")),Ka(i,x,v-2.15,A,_,t.tables,n,()=>"tisch"+T++),Ka(i,v-2.15,v,A,_-2.55,t.tables,n,()=>"tisch"+T++);return}Ka(i,x,v,A,_,t.tables,n,()=>"tisch"+T++)})}function by(i,e,t){let n=Math.max(1,Math.floor(t/1.3)),s=t/n;i.group(e,`Wandbank ${on(t)} m`,2,()=>{i.box("seat",0,0,0,t,.45,.5),i.box("back",0,.45,-.3,t,.45,.1)});for(let r=0;r<n;r++){let a=-t/2+s*(r+.5);i.group(e+"t"+r,"Tisch an der Wandbank",2,()=>{i.cyl("leg",a,0,.66,.05,.71),i.box("top",a,.71,.66,.7,.04,.7),ai(i,"c",a,1.28,nt)}),i.stats.seats+=2}}function _y(i,e,t){let{W:n,zF:s}=e,r=e.zPart;Ya(i,e,r),Ja(i,e,"store");let a=e.door.x<=0?1:-1,o=a>0?-nt/2:nt/2,c=Math.max(r+2.15,s-2.5);i.at(a*(n/2-1.42),c,o,()=>Es(i,"theke",2,{label:"Kasse und Theke"})),i.at(a*(n/2-.21),c,o,()=>Ki(i,"tabak",2.6,2.1,"Tabak und Spirituosen")),cn(i,"team0",a*(n/2-.68),c+.3),cn(i,"gast0",a*(n/2-2.3),c-.2);let l=a*(n/2-.85);Math.abs(l-e.door.x)<e.door.w/2+.75&&(l=e.door.x+a*(e.door.w/2+.75)),Math.abs(l)<n/2-.65&&i.at(l,s-.55,0,()=>Vp(i,"eis"));let h=r+.25+(a<0?.85:0),d=s-1.45,u=Math.floor((d-h)/.9);for(let _=0;_<u;_++)i.at(-a*(n/2-.37),h+.45+_*.9,-o,()=>Wa(i,"kuehl"+_,.9));let p=-n/2+.74+1,b=n/2-1.78-.95,[g,m]=a>0?[p,b]:[-b,-p],f=Math.max(0,Math.floor((m-g+1)/1.95)),M=r+1,T=s-1.7;for(let _=0;_<f;_++){let E=g+(m-g-(f*1.95-1.05))/2+.45+_*1.95;Ar(M,T,3.6,1).forEach(([C,I],L)=>i.at(E,(C+I)/2,nt/2,()=>qa(i,`regal${_}_${L}`,I-C)))}let x=e.door.x+a*(e.door.w/2+.75);if(Math.abs(x)<n/2-.5&&Math.abs(x-a*(n/2-.85))>1.2&&i.at(x,s-.32,0,()=>Hp(i,"zeitung")),e.recess)return;let v=e.open?2.1:0,S=jt(e.door.x+a*2.3,e.px0+1.2+v,e.px1-1.2-v);i.at(S,s+1.45,0,()=>Wp(i,"bierbank")),cn(i,"drauss0",S-.5,s+2.25),i.at(jt(e.door.x-a*1.35,e.px0+.4+v,e.px1-.8-v),s+.42,0,()=>qp(i,"kisten",4));let A=[e.door.x+a*.95,e.door.x-a*.95].find(_=>Math.abs(_-S)>=1.5);A!==void 0&&i.at(A,s+.95,.3*a,()=>Xp(i,"aufsteller")),e.walkBusy=[S-1.3,S+1.3]}function vy(i,e,t){let{W:n,zF:s}=e,r=e.zPart;Ya(i,e,r),Ja(i,e,"store");let a=-n/2+.15,o=n/2-1.3,c=Math.floor((o-a)/.9);for(let _=0;_<c;_++)i.at(a+.45+_*.9,r+.06+.37,0,()=>Wa(i,"kuehl"+_,.9));let l=e.door.x<=0?1:-1,h=n>=10?3:n>=7?2:1,d=e.door.x-e.door.w/2-.35,u=e.door.x+e.door.w/2+.35,p=0;for(let _=0;_<4&&p<h;_++){let E=l*(n/2-.62-_*1.55);E+.45>d&&E-.45<u||l*(E-e.door.x)<e.door.w/2+.6||(i.at(E,s-1.65,0,()=>zp(i,"kasse"+p)),cn(i,"team"+p,E-.68*l,s-1.9),p++)}let b=l*(n/2-.62-(p-1)*1.55)-l*.9,g=e.door.x-l*(e.door.w/2+.55);Math.abs(g)<n/2-.35&&i.at(g,s-1.25,0,()=>Bp(i,"wagen",3));let m=e.door.x-l*(e.door.w/2+1.95);Math.abs(m)+.85<n/2-.1&&i.at(m,s-1.6,0,()=>Gp(i,"obst",1.6));let f=r+.06+.74+1,M=s-2.75;M-f>1.2&&(i.at(-n/2+.21,(f+M)/2,nt/2,()=>Ki(i,"wandL",M-f,1.9)),e.glassRight||i.at(n/2-.21,(f+M-.6)/2,-nt/2,()=>Ki(i,"wandR",M-f-.6,1.9)));let T=-n/2+.42+1.05,x=n/2-(e.glassRight?1.4:.42+1.05),v=Math.max(0,Math.floor((x-T+1.1)/2)),S=r+.06+.74+1.15,A=s-3.1;if(A-S>1.2)for(let _=0;_<v;_++){let E=T+(x-T-(v*2-1.1))/2+.45+_*2;Ar(S,A,4.2,1.2).forEach(([C,I],L)=>i.at(E,(C+I)/2,nt/2,()=>qa(i,`regal${_}_${L}`,I-C)))}cn(i,"gast0",e.aisle[0]*.3+b*0,s-2.6),i.stats.kassen=p}function yy(i,e,t){let{W:n,zF:s}=e,r=e.zPart;Ya(i,e,r),Ja(i,e,"store");let a=n>=8?3:2,o=-n/2+.15;i.at(o+a*.5,r+.06+.63,0,()=>Kp(i,"umkleide",a)),i.at(o+a+.55,r+.09,0,()=>Yp(i,"spiegel")),i.stats.kabinen=a;let c=n/2-1.62;i.at(c,r+.06+.95+.36,0,()=>Es(i,"theke",1.8,{label:"Kasse"})),cn(i,"team0",c+.2,r+.06+.5);let l=(f,M,T,x,v)=>Ar(M,T,2.6,.35).forEach(([S,A],_)=>i.at(f,(S+A)/2,x,()=>Xa(i,`${v}${_}`,A-S)));if(l(-n/2+.34,r+1.6,s-1.25,nt/2,"stangeL"),!e.glassRight)l(n/2-.34,r+2.35,s-1.25,-nt/2,"stangeR");else for(let f=0;f<3&&r+3+f*1.1<s-1.75;f++)i.at(n/2-.55,r+3+f*1.1,-nt/2,()=>jp(i,"puppeR"+f));let h=-n/2+.6+1.1,d=n/2-(e.glassRight?1.4:.6+1.1),u=r+2.5,p=s-1.55,b=Math.max(1,Math.floor((d-h)/2.6));for(let f=0;f<b;f++){let M=h+(d-h)*(f+.5)/b,T=Math.max(0,Math.floor((p-u)/2.1));for(let x=0;x<T;x++){let v=u+(p-u-T*2.1)/2+1.05+x*2.1;(f+x)%2===0?i.at(M,v,f%2*nt,()=>zu(i,`tisch${f}_${x}`)):i.at(M,v,0,()=>Xa(i,`st\xE4nder${f}_${x}`,1.5,"Kleiderst\xE4nder"))}}s-r>7&&n<8&&i.at(o+a*.5,r+2.35,nt,()=>Va(i,"warten",1.3,"Sitzbank"));let g=e.door.x-e.door.w/2-.4,m=e.door.x+e.door.w/2+.4;[[-n/2+.2,g],[m,n/2-.2]].forEach(([f,M],T)=>{let x=Math.min(2.6,M-f);if(x<1)return;let v=T===0?M-x/2:f+x/2;i.box("podest"+T,v,0,s-.5,x,.16,.7,"w",{L:2,lab:"Schaufenster Podest"});let S=Math.max(1,Math.min(3,Math.floor(x/.75)));for(let A=0;A<S;A++)i.at(v-x/2+x*(A+.5)/S,s-.5,0,()=>i.group("puppe"+T+A,"Schaufensterpuppe",3,()=>{i.cyl("base",0,.16,0,.18,.03,"g"),i.cyl("pole",0,.19,0,.02,.92),i.cap("torso",0,1.06,0,.16,.66),i.sph("head",0,1.74,0,.1)}))}),i.at(-n/2+.5,r+1.6-.05,0,()=>{}),cn(i,"gast0",(h+d)/2+1,s-1)}function My(i,e,t){let{W:n,zF:s}=e,r=e.zPart;Ya(i,e,r),Ja(i,e,"store");let a=e.door.x<=0?1:-1,o=n>=7,c=o?s-2.7:s-2.2;if(i.at(a*(n/2-1.55),c,0,()=>Es(i,"theke",1.5,{label:"Empfang"})),cn(i,"team0",a*(n/2-1.55),c-.75),o){i.at(a*(n/2-1.25),s-.62,nt,()=>Va(i,"warten",1.7,"Wartebereich"));let f=a*(n/2-2.55);Math.abs(f-e.door.x)>e.door.w/2+1&&i.at(f,s-.75,0,()=>Bu(i,"pflanze0",1.2))}let l=r+1,h=c-.9,d=r+.9;if(s-r>=7.5){let f=Math.min(4,Math.floor((n-1.4-.3)/1.05));for(let M=0;M<f;M++)i.at(-n/2+.65+M*1.05,r+.06+.86,0,()=>Jp(i,"pedi"+M));d=r+2.55,l=r+2.55}let u=-a,p=u<0?nt/2:-nt/2,b=s-(e.door.x*u>0?1.6:1.1),g=b-d<4?1.3:1.6,m=Math.max(0,Math.floor((b-d)/g));for(let f=0;f<m;f++)i.at(u*(n/2-.92),d+g/2+f*g,p,()=>ja(i,"nagel"+f));if(n>=10)for(let f=0;f<m&&d+.8+f*1.6<s-2.2;f++)i.at(-.95-e.aisle[1]*0+.3,d+.8+f*1.6,-nt/2,()=>ja(i,"nagelM"+f)),i.at(.95+.3,d+.8+f*1.6,nt/2,()=>ja(i,"nagelN"+f));h-l>1&&(!e.glassRight||a<0)&&i.at(a*(n/2-.21),(l+Math.min(h,l+2.4))/2,a>0?-nt/2:nt/2,()=>Ki(i,"produkte",Math.min(2.4,h-l),1.9,"Produktregal")),cn(i,"gast0",a*(n/2-1.55),c+.75)}function Sy(i,e,t){let n=e.walkBusy||[99,99],s=(e.zS??e.zF)+.12+e.SW/2+.1,r=[e.px0+.85,e.px1-.85].filter(o=>o<n[0]-.9||o>n[1]+.9);if(!e.open&&r.length){let o=r[0];i.group("baum","Stra\xDFenbaum",2,()=>{i.box("grate",o,-.03,s+.3,.9,.03,.9,"g"),i.cyl("stamm",o,0,s+.3,.07,1.9),i.sph("krone",o,1.55,s+.3,.6,"g"),i.sph("krone2",o+.25,1.95,s+.15,.4,"g",{L:4})})}else e.open&&[e.px0+1.4,e.px1-1.4].forEach((o,c)=>i.group("kuebel"+c,"Pflanzk\xFCbel",2,()=>{i.box("k",o,0,s+.4,1.4,.45,.55,"w"),i.sph("g",o,.3,s+.4,.4,"g")}));let a=1+(t()>.5?1:0);for(let o=0;o<a;o++){let c=e.px0+1.6+t()*(e.px1-e.px0-3.2);c>n[0]-.4&&c<n[1]+.4&&(c=n[0]-.8),cn(i,"passant"+o,c,s+(t()-.5)*.9)}}var sm=i=>Math.round(i*100)/100;function wy(i){let e=i.fp,t=e.core,n=i.zPart;return e.links.map(s=>{let r=s.a===0||s.b===0,a,o;if(r&&s.axis==="h"&&Math.abs(s.pos-t.z0)<.02)o=Math.min(s.hi,t.x1-.15),a=Math.max(s.lo,o-1),o-a<.8&&(a=s.lo,o=Math.min(s.hi,s.lo+1));else{let c=s.lo,l=s.hi;r&&s.axis==="v"&&(c=Math.max(c,Math.min(l-1.4,n+.35)),l-c<1&&(c=s.lo));let h=l-c,d=h<=3.6?Math.max(1,h-.5):jt(h*.55,3,7),u=(c+l)/2;a=Math.max(s.lo+.15,u-d/2),o=Math.min(s.hi-.15,u+d/2)}return{a:sm(a),b:sm(o)}})}function om(i,e){return!e.core&&(e.role==="rear"||e.z1<=i.zPart+.4)}function Ty(i,e,t={}){let{fp:n,H:s,t:r}=e,a=n.bbox,o=e.zS,c={struct:!0,L:0,lab:""},l={struct:!0,L:1,lab:""};i.box("plinth",(e.px0+e.px1)/2,-.52,(e.pz0+e.pz1)/2,e.px1-e.px0,.42,e.pz1-e.pz0,"w",{...c,rad:.09,cast:!1}),n.rects.forEach((g,m)=>{let f=g.w+(m?.04:0),M=g.d+(g.core?.12:.04);i.box(m?"floor"+m:"floor",(g.x0+g.x1)/2,-.1,(g.z0+g.z1)/2+(g.core?.06:0),f,.1,M,"f",{...c,plain:!0,cast:!1})}),i.box("walk",(e.px0+e.px1)/2,-.1,o+.12+e.SW/2+.1,e.px1-e.px0,.075,e.SW+.2,e.open?"f2":"s",{...c,plain:!0,cast:!1}),n.edges.forEach((g,m)=>{if((g.kind==="front"||g.kind==="glass")&&g.nz===1&&o-g.z0>.05){let f=Math.min(g.x0,g.x1),M=Math.max(g.x0,g.x1),T=g.z0+.12;i.box("walkR"+m,(f+M)/2,-.1,(T+o+.12)/2,M-f,.075,o+.12-T,"s",{...c,plain:!0,cast:!1})}}),n.glassR&&i.box("walk2",(a.x1+.12+e.px1)/2,-.1,(e.pz0+o+.12)/2,e.px1-a.x1-.12,.075,o+.12-e.pz0,"s",{...c,plain:!0,cast:!1}),n.glassL&&i.box("walk3",(e.px0+a.x0-.12)/2,-.1,(e.pz0+o+.12)/2,a.x0-.12-e.px0,.075,o+.12-e.pz0,"s",{...c,plain:!0,cast:!1});let h=n.edges.length,d=g=>{let m=n.edges[(g+h-1)%h],f=n.edges[g];return(m.x1-m.x0)*(f.z1-f.z0)-(m.z1-m.z0)*(f.x1-f.x0)>0},u=g=>g.nz===1?0:g.nx===1?nt/2:g.nx===-1?-nt/2:nt,p=g=>g.nz===-1?"back":g.nx===-1?"left":g.nx===1?"right":"front";n.edges.forEach((g,m)=>{let f=(g.x1-g.x0)/g.len,M=(g.z1-g.z0)/g.len,T=d(m)?r:0,x=d((m+1)%h)?r:0,v=[[0,g.len,g.kind]];if(g.kind==="glass"&&g.nz!==1){let S=e.zPart,A=Math.min(g.z0,g.z1),_=Math.max(g.z0,g.z1),E=Math.max(A,S);if(g.nx!==0&&_-E>=.8){let C=H=>M===0?0:(H-g.z0)/M,I=C(E),L=C(_),[O,F]=I<L?[I,L]:[L,I];v=[],O>.05&&v.push([0,O,"wall"]),v.push([O,F,"glass"]),F<g.len-.05&&v.push([F,g.len,"wall"])}else g.nx!==0&&(v=[[0,g.len,"wall"]])}v.forEach(([S,A,_],E)=>{let C=S-(S===0?T:0),I=A+(A===g.len?x:0),L=I-C,O=(C+I)/2,F=g.x0+f*O,H=g.z0+M*O;if(_==="wall"){let q=Math.abs(M)<1e-6;i.box(`wall${m}_${E}`,F+g.nx*r/2,-.1,H+g.nz*r/2,q?L:r,s+.1,q?r:L,"w",{...l,cut:p(g)})}else _==="front"?i.at(F,H+.06,0,()=>vl(i,"fac",L,e.door.x-F,e.door.w,e.open,t,e,!0)):i.at(F+g.nx*.06,H+g.nz*.06,u(g),()=>vl(i,`fac${m}_${E}`,L,0,0,!1,{},e,!1))})});let b=.14;n.links.forEach((g,m)=>{let f=e.pass[m];[[g.lo,f.a],[f.b,g.hi]].forEach(([M,T],x)=>{T-M<.06||(g.axis==="v"?i.box(`iw${m}_${x}`,g.pos+g.bSide*b/2,-.1,(M+T)/2,b,s+.1,T-M,"w",{...l,cut:"inner"}):i.box(`iw${m}_${x}`,(M+T)/2,-.1,g.pos+g.bSide*b/2,T-M,s+.1,b,"w",{...l,cut:"inner"}))})})}function Ey(i){let e=new Map;for(let t of i.list){if(t.struct)continue;let n=Math.abs(Math.cos(t.ry)),s=Math.abs(Math.sin(t.ry)),r=(t.w*n+t.d*s)/2,a=(t.w*s+t.d*n)/2,o=e.get(t.g)||{x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9};o.x0=Math.min(o.x0,t.x-r),o.x1=Math.max(o.x1,t.x+r),o.z0=Math.min(o.z0,t.z-a),o.z1=Math.max(o.z1,t.z+a),o.y0=Math.min(o.y0,t.y),e.set(t.g,o)}return e}var Ay=(i,e)=>i.x0<e.x1&&i.x1>e.x0&&i.z0<e.z1&&i.z1>e.z0;function Ry(i,e){let t=e.fp,n=[];if(t.links.forEach((r,a)=>{if(r.a!==0&&r.b!==0)return;let o=e.pass[a],c=r.a===0?r.bSide:-r.bSide,l=1.1;r.axis==="v"?n.push({x0:c>0?r.pos-l:r.pos,x1:c>0?r.pos:r.pos+l,z0:o.a-.1,z1:o.b+.1}):n.push({x0:o.a-.1,x1:o.b+.1,z0:c>0?r.pos-l:r.pos,z1:c>0?r.pos:r.pos+l})}),!n.length)return;let s=[];for(let[r,a]of Ey(i))a.y0<2.2&&n.some(o=>Ay(a,o))&&s.push(r);i.removeGroups(s)}function Cy(i,e){let t=e.fp,n=.02,s=/^(bierbank|kisten|aufsteller|baum|kuebel|passant|drauss)/,r=m=>{let f=Math.abs(Math.cos(m.ry)),M=Math.abs(Math.sin(m.ry)),T=(m.w*f+m.d*M)/2,x=(m.w*M+m.d*f)/2;return{x0:m.x-T,x1:m.x+T,z0:m.z-x,z1:m.z+x,y0:m.y,y1:m.y+m.h}},a=new Map;for(let m of i.list){if(m.struct)continue;let f=r(m),M=a.get(m.g)||{x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9,list:[]};M.x0=Math.min(M.x0,f.x0),M.x1=Math.max(M.x1,f.x1),M.z0=Math.min(M.z0,f.z0),M.z1=Math.max(M.z1,f.z1),M.y0=Math.min(M.y0,f.y0),M.list.push(f),a.set(m.g,M)}let o=.14,c=[],l=[];t.links.forEach((m,f)=>{let M=e.pass[f],T=Math.min(m.pos,m.pos+m.bSide*o)+.01,x=Math.max(m.pos,m.pos+m.bSide*o)-.01;[[m.lo,M.a],[M.b,m.hi]].filter(([v,S])=>S-v>.06).forEach(([v,S])=>c.push(m.axis==="v"?{x0:T,x1:x,z0:v,z1:S}:{x0:v,x1:S,z0:T,z1:x})),l.push(m.axis==="v"?{x0:m.pos-1,x1:m.pos+1,z0:M.a+.1,z1:M.b-.1}:{x0:M.a+.1,x1:M.b-.1,z0:m.pos-1,z1:m.pos+1})});let h=e.door.x-e.door.w/2,d=e.door.x+e.door.w/2,u=e.W/2,p=(m,f)=>Math.max(0,Math.min(m.x1,f.x1)-Math.max(m.x0,f.x0))*Math.max(0,Math.min(m.z1,f.z1)-Math.max(m.z0,f.z0)),b=[],g=[];for(let[m,f]of a){if(s.test(m))continue;let M=/^(team|gast|passant|drauss)/.test(m),T=!t.rects.some(x=>f.x0>=x.x0-n&&f.x1<=x.x1+n&&f.z0>=x.z0-n&&f.z1<=x.z1+n);if(T||(T=c.some(x=>f.y0<2.3&&f.x0<x.x1&&f.x1>x.x0&&f.z0<x.z1&&f.z1>x.z0)||l.some(x=>f.y0<2&&f.x0<x.x1-n&&f.x1>x.x0+n&&f.z0<x.z1-n&&f.z1>x.z0+n)),!T&&!M&&(f.x1>-u&&f.x0<u&&f.z0<e.zPart+.06-n&&f.z1>e.zPart-.06+n&&f.y0<2.3||f.x1>h+n&&f.x0<d-n&&f.z1>e.zF-1.1&&f.y0<2||f.x1>u-1.05&&f.x0<u-.2&&f.z0<e.zPart+.75&&f.z1>e.zPart-.75&&f.y0<2)&&(T=!0),!T&&!M){for(let[x,v]of a)if(!(x===m||!b.includes(x)||/^(team|gast|passant|drauss)/.test(x))&&!(p(f,v)<.003)&&f.list.some(S=>v.list.some(A=>p(S,A)>.003&&Math.min(S.y1,A.y1)-Math.max(S.y0,A.y0)>.02))){T=!0;break}}T?g.push(m):b.push(m)}i.removeGroups(g),e.dropped=g.length}function Py(i,e,t,n,s){let r=e.fp;r.rects.forEach((a,o)=>{if(a.core)return;let c={x0:"wall",x1:"wall",z0:"wall",z1:"wall"},l=[],h={x0:.15,x1:.15,z0:.15,z1:.15};r.links.forEach((m,f)=>{if(m.a!==o&&m.b!==o)return;let M=e.pass[f],T=o===m.b?m.bSide:-m.bSide,x=1.2,v=o===m.b;if(m.axis==="v"){l.push({x0:T>0?m.pos:m.pos-x,x1:T>0?m.pos+x:m.pos,z0:M.a-.1,z1:M.b+.1});let S=Math.abs(m.pos-a.x0)<.02?"x0":"x1";c[S]="link",v&&(h[S]=.3)}else{l.push({x0:M.a-.1,x1:M.b+.1,z0:T>0?m.pos:m.pos-x,z1:T>0?m.pos+x:m.pos});let S=Math.abs(m.pos-a.z0)<.02?"z0":"z1";c[S]="link",v&&(h[S]=.3)}}),r.edges.forEach(m=>{if(m.kind==="wall")return;let f=m.nz!==0,M=f?m.z0:m.x0,T=f?Math.abs(M-a.z0)<.02?"z0":Math.abs(M-a.z1)<.02?"z1":null:Math.abs(M-a.x0)<.02?"x0":Math.abs(M-a.x1)<.02?"x1":null;T&&c[T]==="wall"&&(c[T]="glass")});let d=`a${o}`,p=om(e,a)?"store":t.kind==="gastro"?"gastro":t.id==="spaeti"||t.id==="markt"?"retail":t.id==="mode"?"mode":"nails",b=p==="retail"||p==="mode"||p==="nails"?.5:0;if(b){let m=0,f=(T,x,v,S)=>{p==="retail"?i.at(T,x,v,()=>Ki(i,`${d}w${m++}`,S,1.9)):p==="mode"?i.at(T,x,v,()=>Xa(i,`${d}w${m++}`,S)):i.at(T,x,v,()=>Ki(i,`${d}w${m++}`,S,1.9,"Produktregal"))},M=(T,x,v)=>Ar(T,x,p==="retail"?3.4:3,.3).forEach(([S,A])=>A-S>=.9&&v((S+A)/2,A-S));c.z0==="wall"&&a.w>=2.6&&(M(a.x0+.5,a.x1-.5,(T,x)=>f(T,a.z0+(p==="mode"?.3:.22),0,x)),h.z0+=b),c.x0==="wall"&&a.d>=2.6&&(M(a.z0+.5,a.z1-.5,(T,x)=>f(a.x0+(p==="mode"?.3:.22),T,nt/2,x)),h.x0+=b),c.x1==="wall"&&a.d>=2.6&&(M(a.z0+.5,a.z1-.5,(T,x)=>f(a.x1-(p==="mode"?.3:.22),T,-nt/2,x)),h.x1+=b),c.z1==="wall"&&a.w>=2.6&&a.d>=3.4&&(M(a.x0+.5,a.x1-.5,(T,x)=>f(T,a.z1-(p==="mode"?.3:.22),nt,x)),h.z1+=b)}let g={x0:a.x0+h.x0,x1:a.x1-h.x1,z0:a.z0+h.z0,z1:a.z1-h.z1};if(!(g.x1-g.x0<1||g.z1-g.z0<1))if(p==="store")Iy(i,d,g,l);else if(p==="gastro"){let m=0;Ka(i,g.x0,g.x1,g.z0,g.z1,n.tables,s,()=>`${d}t${m++}`,l)}else p==="retail"?Dy(i,d,g,l):p==="mode"?Ly(i,d,g,l):Fy(i,d,g,l)})}function Iy(i,e,t,n){let s=t.x1-t.x0,r=t.z1-t.z0,a=o=>n.some(c=>o.x0<c.x1&&o.x1>c.x0&&o.z0<c.z1&&o.z1>c.z0);if(s>=1.2){let o=Math.min(4.4,s-.2),c=(t.x0+t.x1)/2,l=t.z0+.235;a({x0:c-o/2,x1:c+o/2,z0:l-.25,z1:l+.25})||i.at(c,l,0,()=>ji(i,e+"reg0",o))}if(r>=3.2&&s>=3){let o=Math.min(3.4,r-1.2),c=(t.z0+t.z1)/2+.3,l=t.x0+.235;a({x0:l-.25,x1:l+.25,z0:c-o/2,z1:c+o/2})||i.at(l,c,nt/2,()=>ji(i,e+"reg1",o))}if(r>=3.6&&s>=3.4){let o=Math.min(2.4,s-2),c=(t.x0+t.x1)/2+.5,l=t.z0+1.9;a({x0:c-o/2,x1:c+o/2,z0:l-.4,z1:l+.4})||i.at(c,l,0,()=>Ha(i,e+"tisch",o))}}function Dy(i,e,t,n){let s=0,r=t.x1-t.x0,a=t.z1-t.z0;if(r<1.8||a<1.8)return;let o=r>=a,c=o?a:r,l=(o?t.x0:t.z0)+.4,h=(o?t.x1:t.z1)-.4,d=Math.max(0,Math.floor((c+1.1)/2));for(let u=0;u<d;u++){let p=(o?t.z0:t.x0)+.45+(c-(d*2-1.1))/2+u*2,b=n.filter(g=>o?g.z0<p+.6&&g.z1>p-.6:g.x0<p+.6&&g.x1>p-.6).map(g=>o?[g.x0-.1,g.x1+.1]:[g.z0-.1,g.z1+.1]);nm(l,h,b).forEach(([g,m])=>{m-g<1.4||Ar(g,m,3.6,1.2).forEach(([f,M])=>{o?i.at((f+M)/2,p,0,()=>qa(i,`${e}g${s++}`,M-f)):i.at(p,(f+M)/2,nt/2,()=>qa(i,`${e}g${s++}`,M-f))})})}}function Ly(i,e,t,n){let s=0;_l(t,2.4,2.1,n).forEach(r=>{(r.i+r.j)%2===0?i.at(r.x-.1,r.z-.2,r.i%2*nt,()=>zu(i,`${e}n${s++}`)):i.at(r.x,r.z,0,()=>Xa(i,`${e}s${s++}`,1.5,"Kleiderst\xE4nder"))})}function Fy(i,e,t,n){let s=0;_l(t,1.6,2.1,n).forEach(r=>i.at(r.x,r.z-.05,0,()=>ja(i,`${e}m${s++}`)))}function Ny(i,e,t){let n=i.stats,s=[{k:"Fl\xE4che",v:e.m2,u:"m\xB2"}];return t.kind==="gastro"?s.push({k:"Sitzpl\xE4tze",v:n.seats,u:""},{k:"Theke",v:+n.counter.toFixed(1),u:"m"}):t.id==="spaeti"?s.push({k:"Regalmeter",v:Math.round(n.shelf),u:"m"},{k:"Pl\xE4tze drau\xDFen",v:n.seats,u:""}):t.id==="markt"?s.push({k:"Regalmeter",v:Math.round(n.shelf),u:"m"},{k:"Kassen",v:n.kassen||0,u:""}):t.id==="mode"?s.push({k:"Stangen",v:+n.shelf.toFixed(1),u:"m"},{k:"Umkleiden",v:n.kabinen||0,u:""}):s.push({k:"Behandlungspl\xE4tze",v:n.places,u:""}),s.push({k:"Bauteile",v:i.list.length,u:""}),s}var Uy=(i,e,t)=>Math.max(e,Math.min(t,i));function cm(i,e,t){let n=new Uint8ClampedArray(e*t);for(let s=0,r=0;s<e*t;s++,r+=4){let a=i[r+3]/255;n[s]=(i[r]*.299+i[r+1]*.587+i[r+2]*.114)*a+255*(1-a)}return n}function ky(i){let e=new Float64Array(256);for(let t=0;t<i.length;t++)e[i[t]]++;return e}function Oy(i,e){let t=new Float64Array(257),n=new Float64Array(257);for(let c=0;c<256;c++)t[c+1]=t[c]+i[c],n[c+1]=n[c]+i[c]*c;let s=n[256],r=-1,a=85,o=170;for(let c=8;c<250;c+=2)for(let l=c+8;l<252;l+=2){let h=t[c],d=t[l]-t[c],u=e-t[l];if(h<1||d<1||u<1)continue;let p=n[c]/h,b=(n[l]-n[c])/d,g=(s-n[l])/u,m=h*(p-s/e)**2+d*(b-s/e)**2+u*(g-s/e)**2;m>r&&(r=m,a=c,o=l)}return[a,o]}function hm(i,e,t){let n=e*t,s=i,r=0;for(let d=0;d<n;d+=7)r+=i[d];if(r/Math.ceil(n/7)<95){s=new Uint8ClampedArray(n);for(let d=0;d<n;d++)s[d]=255-i[d]}let a=ky(s),[o]=Oy(a,n),c=0;for(let d=110;d<=200;d++)c+=a[d];let l=c/n>.18?Uy(o+25,70,150):175,h=new Uint8Array(n);for(let d=0;d<n;d++)h[d]=s[d]<l?1:0;return h}function zy(i,e,t){let n=[],s=[],r=Math.max(e,t),a=e/2,o=t/2,c=Math.max(1,Math.round(r/420));for(let m=0;m<t;m+=c)for(let f=0;f<e;f+=c)i[m*e+f]&&(n.push(f-a),s.push(m-o));if(n.length<50)return 0;let l=(m,f,M,T)=>{let x=Math.cos(m*Math.PI/180),v=Math.sin(m*Math.PI/180),S=Math.ceil(r*1.5/T)+4,A=S>>1,_=new Float64Array(S),E=new Float64Array(S);for(let I=0;I<f.length;I++)_[Math.floor((f[I]*x-M[I]*v)/T)+A]++,E[Math.floor((f[I]*v+M[I]*x)/T)+A]++;let C=0;for(let I=1;I<S;I++)C+=(_[I]-_[I-1])**2+(E[I]-E[I-1])**2;return C},h=0,d=-1;for(let m=-45;m<45;m+=1){let f=l(m,n,s,c*2.2);f>d&&(d=f,h=m)}let u=[],p=[],b=Math.max(1,Math.round(r/1100));for(let m=0;m<t;m+=b)for(let f=0;f<e;f+=b)i[m*e+f]&&(u.push(f-a),p.push(m-o));let g=h;d=-1;for(let m=h-1.4;m<=h+1.4;m+=.1){let f=l(m,u,p,b*1.2);f>d&&(d=f,g=m)}return g}function um(i,e,t){let n=cm(i,e,t),s=zy(hm(n,e,t),e,t);if(Math.abs(s)<.35)return{rgba:i,w:e,h:t,gray:n,angle:0};let r=By(i,e,t,s);return{rgba:r.rgba,w:r.w,h:r.h,gray:cm(r.rgba,r.w,r.h),angle:s}}function By(i,e,t,n){let s=n*Math.PI/180,r=Math.cos(s),a=Math.sin(s),o=Math.ceil(Math.abs(e*r)+Math.abs(t*a)),c=Math.ceil(Math.abs(e*a)+Math.abs(t*r)),l=new Uint8ClampedArray(o*c*4),h=e/2,d=t/2,u=o/2,p=c/2;for(let b=0;b<c;b++)for(let g=0;g<o;g++){let m=g+.5-u,f=b+.5-p,M=r*m+a*f+h-.5,T=-a*m+r*f+d-.5,x=(b*o+g)*4;if(M<0||T<0||M>=e-1||T>=t-1){l[x]=l[x+1]=l[x+2]=l[x+3]=255;continue}let v=Math.floor(M),S=Math.floor(T),A=M-v,_=T-S;for(let E=0;E<4;E++){let C=i[(S*e+v)*4+E],I=i[(S*e+v+1)*4+E],L=i[((S+1)*e+v)*4+E],O=i[((S+1)*e+v+1)*4+E];l[x+E]=C*(1-A)*(1-_)+I*A*(1-_)+L*(1-A)*_+O*A*_}}return{rgba:l,w:o,h:c}}function Gy(i,e,t){let n=new Int32Array((e+1)*(t+1));for(let s=0;s<t;s++){let r=0;for(let a=0;a<e;a++)r+=i[s*e+a],n[(s+1)*(e+1)+a+1]=n[s*(e+1)+a+1]+r}return n}function Rr(i,e,t,n){if(n<=0)return i.slice();let s=Gy(i,e,t),r=new Uint8Array(e*t),a=e+1;for(let o=0;o<t;o++){let c=Math.max(0,o-n),l=Math.min(t,o+n+1);for(let h=0;h<e;h++){let d=Math.max(0,h-n),u=Math.min(e,h+n+1);r[o*e+h]=s[l*a+u]-s[c*a+u]-s[l*a+d]+s[c*a+d]>0?1:0}}return r}function Rs(i){let e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i[t]?0:1;return e}var wl=(i,e,t,n)=>Rs(Rr(Rs(i),e,t,n));function lm(i,e,t){let{lab:n,stats:s}=$i(Rs(i),e,t),r=new Set(s.filter(o=>o.border).map(o=>o.id)),a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i[o]||n[o]>=0&&!r.has(n[o])?1:0;return a}function $i(i,e,t){let n=new Int32Array(e*t).fill(-1),s=[],r=new Int32Array(e*t);for(let a=0;a<e*t;a++){if(!i[a]||n[a]>=0)continue;let o=s.length,c=0,l=0,h=0,d=e,u=t,p=-1,b=-1,g=!1;for(r[l++]=a,n[a]=o;c<l;){let m=r[c++],f=m%e,M=(m-f)/e;h++,f<d&&(d=f),f>p&&(p=f),M<u&&(u=M),M>b&&(b=M),(f===0||M===0||f===e-1||M===t-1)&&(g=!0),f>0&&i[m-1]&&n[m-1]<0&&(n[m-1]=o,r[l++]=m-1),f<e-1&&i[m+1]&&n[m+1]<0&&(n[m+1]=o,r[l++]=m+1),M>0&&i[m-e]&&n[m-e]<0&&(n[m-e]=o,r[l++]=m-e),M<t-1&&i[m+e]&&n[m+e]<0&&(n[m+e]=o,r[l++]=m+e)}s.push({id:o,area:h,x0:d,y0:u,x1:p+1,y1:b+1,border:g})}return{lab:n,stats:s}}function dm(i,e,t){let n=hm(i,e,t),s=e*t,r=Math.max(e,t),a=[.003,.006,.01,.015,.022,.03].map(g=>Math.max(2,Math.round(g*r))),o=[],c=$i(n,e,t).stats;for(let g of a){let m=Rr(n,e,t,g),{lab:f,stats:M}=$i(Rs(m),e,t),T=M.filter(x=>!x.border&&x.area>=5e-4*s&&x.area<=.5*s&&!(x.x1-x.x0>=.9*e&&x.y1-x.y0>=.9*t)&&Math.min(x.x1-x.x0,x.y1-x.y0)>=.012*r&&!c.some(v=>v.x0>=x.x0&&v.y0>=x.y0&&v.x1<=x.x1&&v.y1<=x.y1&&(v.x1-v.x0)*(v.y1-v.y0)>=.35*(x.x1-x.x0)*(x.y1-x.y0)));o.push({R:g,lab:f,rooms:T,total:T.reduce((x,v)=>x+v.area,0)})}let l=Math.max(...o.map(g=>g.total)),h=o.find(g=>g.total>=.9*l&&g.rooms.length)||o[o.length-1];if(!h||!h.rooms.length)return{ink:n,w:e,h:t,R:h?h.R:0,rooms:[],label:new Int32Array(s).fill(-1)};let d=new Map(h.rooms.sort((g,m)=>m.area-g.area).map((g,m)=>[g.id,m])),u=new Int32Array(s).fill(-1),p=[];for(let g=0;g<s;g++){let m=d.get(h.lab[g]);m!==void 0&&h.lab[g]>=0&&(u[g]=m,p.push(g))}for(let g=0;g<h.R+1&&p.length;g++){let m=[];for(let f of p){let M=f%e,T=(f-M)/e,x=u[f];for(let[v,S]of[[1,0],[-1,0],[0,1],[0,-1]]){let A=M+v,_=T+S;if(A<0||_<0||A>=e||_>=t)continue;let E=_*e+A;u[E]<0&&!n[E]&&(u[E]=x,m.push(E))}}p=m}let b=h.rooms.map((g,m)=>({id:m,area:g.area,x0:g.x0,y0:g.y0,x1:g.x1,y1:g.y1}));return{ink:n,w:e,h:t,R:h.R,rooms:b,label:u,open:Math.ceil((h.R+1)/2)+1}}function Xu(i){let{rooms:e,w:t,h:n,label:s}=i;if(!e.length)return[];let r=Math.max(3,Math.round(.018*Math.max(t,n))),a=e.map((d,u)=>u),o=d=>{for(;a[d]!==d;)a[d]=a[a[d]],d=a[d];return d},c=(d,u)=>{let p=o(d),b=o(u);p!==b&&(a[p]=b)},l=(d,u,p)=>{for(let b=0;b<d;b+=2){let g=-1,m=-1e9;for(let f=0;f<u;f++){let M=s[p(b,f)];M<0||(g>=0&&g!==M&&f-m<=r&&c(g,M),g=M,m=f)}}};l(n,t,(d,u)=>d*t+u),l(t,n,(d,u)=>u*t+d);let h=o(0);return e.filter((d,u)=>o(u)===h).map(d=>d.id)}function Vy(i,e,t){let{w:n,h:s,ink:r,label:a}=e,o=n*s,c=new Uint8Array(o);for(let g=0;g<o;g++)c[g]=i[g]||r[g]?1:0;let{lab:l,stats:h}=$i(Rs(c),n,s),d=new Uint8Array(h.length),u=new Uint8Array(h.length);for(let g=0;g<o;g++){let m=l[g];if(m<0||(a[g]>=0&&!t.has(a[g])&&(u[m]=1),i[g]))continue;let f=g%n;(f>0&&i[g-1]||f<n-1&&i[g+1]||g>=n&&i[g-n]||g<o-n&&i[g+n])&&(d[m]=1)}let p=0;for(let g=0;g<o;g++)p+=i[g];let b=i.slice();for(let g=0;g<o;g++){let m=l[g];m>=0&&d[m]&&!u[m]&&!h[m].border&&h[m].area<=.25*p&&(b[g]=1)}return b}function Tl(i,e){let{w:t,h:n,label:s}=i,r=t*n,a=new Set(e);if(!a.size)return null;let o=new Uint8Array(r);for(let g=0;g<r;g++)a.has(s[g])&&(o[g]=1);let c=Math.round(.04*Math.max(t,n)),l=g=>$i(g,t,n).stats.filter(m=>m.area>.002*r).length,h=o,d=i.open||0;if(l(h)>1)for(let g=2;g<=c&&(o=wl(Rr(h,t,n,g),t,n,g),!(l(o)<=1));g+=2);o=Vy(o,i,a),o=lm(o,t,n);let u=Math.max(d,Math.round(.03*Math.max(t,n)));o=wl(Rr(o,t,n,u),t,n,u),d>0&&(o=Rr(wl(o,t,n,d),t,n,d)),o=lm(o,t,n);let p=bl(o,t,n);if(!p)return null;let b=0;for(let g=0;g<p.length;g++){let m=p[g],f=p[(g+1)%p.length];b+=m[0]*f[1]-f[0]*m[1]}return{pts:p,areaPx:Math.abs(b)/2}}function ju(i){let{ink:e,w:t,h:n}=i,s=t*n,r=Math.max(t,n),a=Math.round(.02*r),o=wl(Rr(e,t,n,a),t,n,a),{lab:c,stats:l}=$i(Rs(o),t,n),h=$i(o,t,n);if(!h.stats.length)return null;let d=h.stats.slice().sort((M,T)=>T.area-M.area)[0],u=new Uint8Array(s);for(let M=0;M<s;M++)h.lab[M]===d.id&&(u[M]=1);let p=$i(Rs(u),t,n),b=new Uint8Array(s),g=new Set(p.stats.filter(M=>M.border).map(M=>M.id));for(let M=0;M<s;M++)b[M]=p.lab[M]>=0&&g.has(p.lab[M])?0:1;let m=bl(b,t,n);if(!m)return null;let f=0;for(let M=0;M<m.length;M++){let T=m[M],x=m[(M+1)%m.length];f+=T[0]*x[1]-x[0]*T[1]}return{pts:m,areaPx:Math.abs(f)/2}}var Cr=(i,e=1)=>i.toFixed(e).replace(".",","),Ku=i=>{let e=0;for(let t=0;t<i.length;t++){let n=i[(t+1)%i.length];e+=i[t][0]*n[1]-n[0]*i[t][1]}return e/2},Hy=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1]),fm=1800,Wy=[20,25,50,75,100,200,250,500],El=null;async function qy(){if(!El){let i=new URL("assets/js/pdfjs/",document.baseURI).href;El=await import(i+"pdf.min.mjs"),El.GlobalWorkerOptions.workerSrc=i+"pdf.worker.min.mjs"}return El}var Xy=`
<div class="lplan__box" role="document">
  <header class="lplan__h"><h3 id="lplan-t">Grundriss einlesen</h3><button type="button" class="lplan__x" data-x aria-label="Schlie\xDFen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>
  <div class="lplan__drop" data-drop>
    <input type="file" data-file accept=".pdf,.png,.jpg,.jpeg,.webp,application/pdf,image/png,image/jpeg,image/webp" hidden>
    <div class="lplan__dz" data-dz tabindex="0" role="button" aria-label="Datei ausw\xE4hlen">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V4M7.5 8.5L12 4l4.5 4.5M4 14.5V19a1 1 0 001 1h14a1 1 0 001-1v-4.5"/></svg>
      <b>Plan hierher ziehen oder ausw\xE4hlen</b>
      <span>PDF, JPG oder PNG, auch ein Foto oder Scan. Gedrehte Pl\xE4ne richten wir selbst aus.</span>
    </div>
    <ul class="lplan__notes">
      <li>Die Datei bleibt in Ihrem Browser und wird nicht hochgeladen.</li>
      <li>Haben Sie eine DWG Datei, drucken Sie sie bitte als PDF (in AutoCAD: Plotten, PDF) und laden Sie die PDF.</li>
      <li>Am besten klappt es mit dem Grundriss nur Ihrer Fl\xE4che. Sp\xE4ter k\xF6nnen Sie alles von Hand anpassen.</li>
    </ul>
    <p class="lplan__err" data-err role="alert" hidden></p>
  </div>
  <div class="lplan__busy" data-busy hidden><i></i><span data-busy-t>Plan wird gelesen</span></div>
  <div class="lplan__ed" data-ed hidden>
    <div class="lplan__stage" data-stage>
      <canvas data-cv></canvas>
      <div class="lplan__tools">
        <button type="button" data-zoom="1.3" aria-label="N\xE4her" title="N\xE4her"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
        <button type="button" data-zoom="0.77" aria-label="Weiter weg" title="Weiter weg"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg></button>
        <button type="button" data-zoom="0" aria-label="Ganzer Plan" title="Ganzer Plan"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>
      </div>
      <div class="lplan__pop" data-pop hidden></div>
    </div>
    <aside class="lplan__side">
      <div class="lplan__pages" data-pages hidden></div>
      <section class="lplan__sec">
        <h4><i>1</i>Fl\xE4che markieren</h4>
        <p data-hint1>Tippen Sie in die R\xE4ume, die zu Ihrer Fl\xE4che geh\xF6ren. Ecken und W\xE4nde lassen sich ziehen.</p>
        <div class="lplan__row">
          <button type="button" class="lplan__b" data-draw>Umriss selbst zeichnen</button>
          <button type="button" class="lplan__b" data-auto>Neu erkennen</button>
          <button type="button" class="lplan__b" data-undo disabled>Zur\xFCck</button>
        </div>
        <label class="lplan__chk"><input type="checkbox" data-ortho checked><span>Rechte Winkel halten</span></label>
      </section>
      <section class="lplan__sec">
        <h4><i>2</i>Gr\xF6\xDFe angeben</h4>
        <label class="lplan__num"><span>Fl\xE4che der markierten R\xE4ume</span><span class="lplan__in"><input type="number" inputmode="decimal" min="5" max="2000" step="0.1" data-area placeholder="z. B. 78" aria-label="Fl\xE4che in Quadratmetern"><em>m\xB2</em></span></label>
        <label class="lplan__num" data-scale-row hidden><span>oder Ma\xDFstab des PDF</span><select data-scale><option value="">unbekannt</option></select></label>
        <p class="lplan__small" data-hint2>Oder tippen Sie auf eine Wand und geben die L\xE4nge an.</p>
      </section>
      <section class="lplan__sec">
        <h4><i>3</i>Stra\xDFenseite w\xE4hlen</h4>
        <p data-hint3>Tippen Sie auf die Wand mit Schaufenster und Eingang. Weitere Fensterw\xE4nde markieren Sie genauso.</p>
      </section>
      <div class="lplan__read" data-read></div>
      <footer class="lplan__f"><button type="button" class="lplan__b" data-x>Abbrechen</button><button type="button" class="lplan__b lplan__b--p" data-apply disabled>In den Baukasten \xFCbernehmen</button></footer>
    </aside>
  </div>
</div>`;function pm({onApply:i,current:e}){let t=document.createElement("div");t.className="lplan",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-labelledby","lplan-t"),t.innerHTML=Xy,document.body.appendChild(t);let n=P=>t.querySelector(P),s=P=>[...t.querySelectorAll(P)],r=n("[data-cv]"),a=r.getContext("2d"),o=n("[data-stage]"),c=n("[data-pop]"),l=n("[data-area]"),h=n("[data-scale]"),d=n("[data-ortho]");Wy.forEach(P=>{let U=document.createElement("option");U.value=P,U.textContent=`1 : ${P}`,h.appendChild(U)});let u=null,p={k:1,tx:0,ty:0},b="select",g=[],m=[],f=null,M={v:-1,e:-1,mid:-1,room:-1},T=0,x=null,v=document.createElement("canvas"),S=document.createElement("canvas"),A=document.createElement("canvas"),_=P=>{n("[data-drop]").hidden=P!=="drop",n("[data-busy]").hidden=P!=="busy",n("[data-ed]").hidden=P!=="ed",t.dataset.view=P},E=P=>{let U=n("[data-err]");U.textContent=P||"",U.hidden=!P};function C(P){x=document.activeElement,t.hidden=!1,document.documentElement.classList.add("lplan-lock"),E(""),P?O(P):u&&u.img?(_("ed"),ne(),ce(),k()):_("drop"),setTimeout(()=>{let U=u&&u.img?n("[data-draw]"):n("[data-dz]");U&&U.focus()},50)}function I(){t.hidden=!0,document.documentElement.classList.remove("lplan-lock"),w(),x&&x.focus&&x.focus()}let L=P=>P.type==="application/pdf"||/\.pdf$/i.test(P.name);async function O(P){if(E(""),/\.(dwg|dxf)$/i.test(P.name)){_("drop"),E("DWG und DXF lesen wir hier nicht direkt. Bitte drucken Sie den Plan als PDF (in AutoCAD: Plotten, PDF) oder speichern Sie ihn als Bild.");return}if(!L(P)&&!/^image\//.test(P.type)&&!/\.(png|jpe?g|webp)$/i.test(P.name)){_("drop"),E("Dieses Dateiformat kennen wir nicht. Bitte PDF, JPG oder PNG w\xE4hlen.");return}if(P.size>60*1024*1024){_("drop"),E("Die Datei ist gr\xF6\xDFer als 60 MB. Bitte verkleinern Sie sie oder geben Sie nur die Seite mit dem Grundriss an.");return}_("busy"),n("[data-busy-t]").textContent="Plan wird ge\xF6ffnet",await new Promise(U=>setTimeout(U,30));try{let U={name:P.name,pdf:null,page:1,pages:1,renderScale:0};if(L(P)){let N=await(await qy()).getDocument({data:new Uint8Array(await P.arrayBuffer())}).promise;U.pdf=N,U.pages=N.numPages,await F(U,1)}else{let D=await createImageBitmap(P).catch(()=>null),N,K,Q;if(D)N=D.width,K=D.height,Q=(le,fe)=>le.drawImage(D,0,0,N*fe,K*fe);else{let le=URL.createObjectURL(P),fe=new Image;await new Promise((Te,B)=>{fe.onload=Te,fe.onerror=B,fe.src=le}),N=fe.naturalWidth,K=fe.naturalHeight,Q=(Te,B)=>Te.drawImage(fe,0,0,N*B,K*B)}let X=Math.max(1e3,Math.min(fm,Math.max(N,K)))/Math.max(N,K);v.width=Math.round(N*X),v.height=Math.round(K*X);let Z=v.getContext("2d");Z.fillStyle="#fff",Z.fillRect(0,0,v.width,v.height),Q(Z,X)}await H(U)}catch(U){console.error(U),_("drop"),E(L(P)?"Diese PDF konnten wir nicht \xF6ffnen. Ist sie mit einem Passwort gesch\xFCtzt? Alternativ als Bild speichern und das Bild laden.":"Dieses Bild konnten wir nicht \xF6ffnen. Bitte versuchen Sie JPG oder PNG.")}}async function F(P,U){let D=await P.pdf.getPage(U),N=D.getViewport({scale:1}),K=fm/Math.max(N.width,N.height),Q=D.getViewport({scale:K});v.width=Math.round(Q.width),v.height=Math.round(Q.height);let X=v.getContext("2d");X.fillStyle="#fff",X.fillRect(0,0,v.width,v.height),await D.render({canvasContext:X,viewport:Q}).promise,P.page=U,P.renderScale=K}async function H(P){_("busy"),n("[data-busy-t]").textContent="R\xE4ume werden erkannt",await new Promise(X=>setTimeout(X,40));let U=v.getContext("2d"),D=U.getImageData(0,0,v.width,v.height),N=um(D.data,v.width,v.height);v.width=N.w,v.height=N.h,v.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(N.rgba),N.w,N.h),0,0);let K=dm(N.gray,N.w,N.h);u={src:P,w:N.w,h:N.h,angle:N.angle,an:K,img:!0,sel:new Set,poly:[],fi:null,ft:.5,gl:new Set,mpp:null,scaleFrom:"",userArea:null},m=[],g=[],b="select",S.width=A.width=N.w,S.height=A.height=N.h;let Q="";if(K.rooms.length){u.sel=new Set(Xu(K));let X=Tl(K,[...u.sel]);X&&(u.poly=X.pts)}if(u.poly.length<4){let X=ju(K);X&&(u.poly=X.pts,u.sel=new Set,Q="Wir haben keine geschlossenen R\xE4ume gefunden und die Au\xDFenkontur genommen. Bitte pr\xFCfen Sie den Umriss.")}u.poly.length<4&&(Q="Die Fl\xE4che konnten wir nicht erkennen. Zeichnen Sie den Umriss von Hand: Ecke f\xFCr Ecke anklicken.",b="draw"),u.note=Q,q(),$(),_("ed"),ne(),ce(),k(),u.poly.length<4&&xe("draw")}function q(){let P=n("[data-scale-row]");P.hidden=!u.src.pdf,h.value="";let U=n("[data-pages]");u.src.pdf&&u.src.pages>1?(U.hidden=!1,U.innerHTML="<span>Seite</span>"+Array.from({length:Math.min(u.src.pages,12)},(D,N)=>`<button type="button" data-page="${N+1}" aria-pressed="${N+1===u.src.page}">${N+1}</button>`).join("")):U.hidden=!0}function ne(){let P=o.getBoundingClientRect(),U=window.devicePixelRatio||1;r.width=Math.max(10,Math.round(P.width*U)),r.height=Math.max(10,Math.round(P.height*U)),r.style.width=P.width+"px",r.style.height=P.height+"px",De()}function ce(){if(!u)return;let P=o.getBoundingClientRect(),U=24,D=0,N=0,K=u.w,Q=u.h;if(u.poly.length>=3){D=Math.min(...u.poly.map(fe=>fe[0])),K=Math.max(...u.poly.map(fe=>fe[0])),N=Math.min(...u.poly.map(fe=>fe[1])),Q=Math.max(...u.poly.map(fe=>fe[1]));let Z=(K-D)*.25+40,le=(Q-N)*.25+40;D-=Z,K+=Z,N-=le,Q+=le}let X=Math.min((P.width-U)/(K-D),(P.height-U)/(Q-N));p.k=X,p.tx=P.width/2-(D+K)/2*X,p.ty=P.height/2-(N+Q)/2*X,De()}let Y=(P,U)=>[(P-p.tx)/p.k,(U-p.ty)/p.k],ie=P=>[P[0]*p.k+p.tx,P[1]*p.k+p.ty];function ae(P,U,D){let[N,K]=Y(U,D),Q=Math.max(.05,Math.min(12,p.k*P));p.k=Q,p.tx=U-N*Q,p.ty=D-K*Q,Oe()}function ge(){let P=u.poly,U=P.length,D=Ku(P)>=0?1:-1;return P.map((N,K)=>{let Q=P[(K+1)%U],X=Q[0]-N[0],Z=Q[1]-N[1],le=Math.hypot(X,Z)||1;return{a:N,b:Q,len:le,mid:[(N[0]+Q[0])/2,(N[1]+Q[1])/2],nx:Z/le*D,nz:-X/le*D}})}let _e=()=>u.mpp?Math.abs(Ku(u.poly))*u.mpp*u.mpp:null,We=P=>u.mpp?`${Cr(P*u.mpp)} m`:"";function De(){if(!u||t.hidden)return;let P=window.devicePixelRatio||1,U=r.width,D=r.height;a.setTransform(1,0,0,1,0,0),a.fillStyle="#e9e7e2",a.fillRect(0,0,U,D),a.setTransform(P*p.k,0,0,P*p.k,P*p.tx,P*p.ty),a.imageSmoothingQuality="high",a.drawImage(v,0,0),a.globalAlpha=.34,a.drawImage(S,0,0),M.room>=0&&!u.sel.has(M.room)&&b==="select"&&(a.globalAlpha=.18,a.drawImage(A,0,0)),a.globalAlpha=1,a.setTransform(P,0,0,P,0,0);let N=u.poly.map(ie),K=N.length;if(b==="draw"){if(a.lineWidth=2.5,a.strokeStyle="#a91b18",a.fillStyle="#a91b18",a.beginPath(),g.map(ie).forEach((Q,X)=>X?a.lineTo(Q[0],Q[1]):a.moveTo(Q[0],Q[1])),g.length&&f&&f.cur){let Q=ie(f.cur);a.lineTo(Q[0],Q[1])}a.stroke(),g.map(ie).forEach((Q,X)=>{a.beginPath(),a.arc(Q[0],Q[1],X===0?8:5,0,7),a.fill()});return}if(K>=3){a.beginPath(),N.forEach((X,Z)=>Z?a.lineTo(X[0],X[1]):a.moveTo(X[0],X[1])),a.closePath(),a.fillStyle="rgba(169,27,24,.07)",a.fill(),a.lineWidth=3,a.strokeStyle="#a91b18",a.lineJoin="round",a.stroke();let Q=ge();if(Q.forEach((X,Z)=>{let le=ie(X.a),fe=ie(X.b),Te=Z===u.fi,B=u.gl.has(Z),be=M.e===Z;(Te||B||be)&&(a.beginPath(),a.moveTo(le[0],le[1]),a.lineTo(fe[0],fe[1]),a.lineWidth=Te?7:B?6:5,a.strokeStyle=Te?"#111":B?"#2f7fa8":"rgba(17,17,17,.4)",a.setLineDash(B&&!Te?[10,6]:[]),a.stroke(),a.setLineDash([])),u.fi===null&&!B&&X.len>.06*Math.max(u.w,u.h)&&!be&&(a.beginPath(),a.moveTo(le[0],le[1]),a.lineTo(fe[0],fe[1]),a.lineWidth=4,a.strokeStyle="rgba(17,17,17,.22)",a.setLineDash([2,8]),a.lineCap="round",a.stroke(),a.setLineDash([]),a.lineCap="butt")}),u.fi!==null&&Q[u.fi]){let X=Q[u.fi],Z=ie([X.a[0]+(X.b[0]-X.a[0])*u.ft,X.a[1]+(X.b[1]-X.a[1])*u.ft]);a.fillStyle="#fff",a.strokeStyle="#111",a.lineWidth=3,a.beginPath(),a.arc(Z[0],Z[1],11,0,7),a.fill(),a.stroke(),a.fillStyle="#111",a.font="700 11px Geist, system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("T\xFCr",Z[0],Z[1]+.5)}Q.forEach(X=>{let Z=We(X.len);if(!Z||X.len*p.k<50)return;let le=ie(X.mid);a.font="600 12px Geist Mono, ui-monospace, monospace";let fe=a.measureText(Z).width+12,Te=X.nx*(fe/2+14),B=X.nz*24;a.fillStyle="rgba(255,255,255,.94)",a.beginPath(),a.roundRect(le[0]+Te-fe/2,le[1]+B-10,fe,20,6),a.fill(),a.fillStyle="#222",a.textAlign="center",a.textBaseline="middle",a.fillText(Z,le[0]+Te,le[1]+B+.5)}),Q.forEach((X,Z)=>{if(X.len*p.k<36)return;let le=ie(X.mid);a.fillStyle=M.mid===Z?"#a91b18":"#fff",a.strokeStyle="#a91b18",a.lineWidth=2,a.beginPath(),a.roundRect(le[0]-7,le[1]-7,14,14,4),a.fill(),a.stroke()}),N.forEach((X,Z)=>{a.fillStyle=M.v===Z?"#a91b18":"#fff",a.strokeStyle="#a91b18",a.lineWidth=2.5,a.beginPath(),a.arc(X[0],X[1],8,0,7),a.fill(),a.stroke()})}}let Oe=()=>{T||(T=requestAnimationFrame(()=>{T=0,De()}))};function $(){let P=u.w,U=u.h,D=u.an,N=S.getContext("2d"),K=N.createImageData(P,U),Q=K.data;for(let X=0;X<P*U;X++)u.sel.has(D.label[X])&&(Q[X*4]=169,Q[X*4+1]=27,Q[X*4+2]=24,Q[X*4+3]=255);N.putImageData(K,0,0)}function re(P){let U=u.w,D=u.h,N=A.getContext("2d");if(N.clearRect(0,0,U,D),P<0)return;let K=N.createImageData(U,D),Q=K.data,X=u.an;for(let Z=0;Z<U*D;Z++)X.label[Z]===P&&(Q[Z*4]=40,Q[Z*4+1]=40,Q[Z*4+2]=40,Q[Z*4+3]=255);N.putImageData(K,0,0)}function me(){m.push(JSON.stringify({poly:u.poly,fi:u.fi,ft:u.ft,gl:[...u.gl],sel:[...u.sel],mpp:u.mpp})),m.length>60&&m.shift(),n("[data-undo]").disabled=!1}function Ce(){let P=m.pop();if(!P)return;let U=JSON.parse(P);u.poly=U.poly,u.fi=U.fi,u.ft=U.ft,u.gl=new Set(U.gl),u.sel=new Set(U.sel),u.mpp=U.mpp,$(),w(),k(),n("[data-undo]").disabled=!m.length}function xe(P){b=P,g=[],w(),t.dataset.mode=P,n("[data-draw]").setAttribute("aria-pressed",String(P==="draw")),n("[data-draw]").textContent=P==="draw"?"Zeichnen beenden":"Umriss selbst zeichnen",n("[data-hint1]").textContent=P==="draw"?"Klicken Sie die Ecken der Fl\xE4che nacheinander an. Zum Schlie\xDFen auf die erste Ecke klicken oder Enter dr\xFCcken.":"Tippen Sie in die R\xE4ume, die zu Ihrer Fl\xE4che geh\xF6ren. Ecken und W\xE4nde lassen sich ziehen.",De()}let Be=(P,U)=>!d.checked||!U?P:Math.abs(P[0]-U[0])>=Math.abs(P[1]-U[1])?[P[0],U[1]]:[U[0],P[1]];function st(){let P=g.slice();if(P.length<3){g=[],xe("select");return}if(d.checked){let U=P[P.length-1],D=P[0];Math.abs(U[0]-D[0])>1&&Math.abs(U[1]-D[1])>1&&P.push([D[0],U[1]])}me(),u.poly=P,u.sel=new Set,u.fi=null,u.gl=new Set,$(),xe("select"),k()}function j(P,U){let D=u.poly.map(ie),N=14;for(let Z=0;Z<D.length;Z++)if(Math.hypot(D[Z][0]-P,D[Z][1]-U)<N)return{t:"v",i:Z};let K=ge();for(let Z=0;Z<K.length;Z++){let le=ie(K[Z].mid);if(K[Z].len*p.k>=36&&Math.abs(le[0]-P)<11&&Math.abs(le[1]-U)<11)return{t:"m",i:Z}}let Q=-1,X=9;for(let Z=0;Z<K.length;Z++){let le=D[Z],fe=D[(Z+1)%D.length],Te=(fe[0]-le[0])**2+(fe[1]-le[1])**2||1,B=Math.max(0,Math.min(1,((P-le[0])*(fe[0]-le[0])+(U-le[1])*(fe[1]-le[1]))/Te)),be=Math.hypot(le[0]+(fe[0]-le[0])*B-P,le[1]+(fe[1]-le[1])*B-U);be<X&&(X=be,Q=Z)}return Q>=0?{t:"e",i:Q}:null}let he=P=>{let U=o.getBoundingClientRect();return[P.clientX-U.left,P.clientY-U.top]},pe=new Map,de=null;o.addEventListener("pointerdown",P=>{if(P.target.closest(".lplan__tools, .lplan__pop"))return;w(),o.setPointerCapture(P.pointerId);let[U,D]=he(P);if(pe.set(P.pointerId,[U,D]),pe.size===2){let[K,Q]=[...pe.values()];de={d:Math.hypot(K[0]-Q[0],K[1]-Q[1]),k:p.k,cx:(K[0]+Q[0])/2,cy:(K[1]+Q[1])/2},f=null;return}if(b==="draw"){f={type:"draw",sx:U,sy:D,moved:!1,cur:Y(U,D)};return}let N=j(U,D);if(N&&(N.t==="v"||N.t==="m")){me(),f={type:N.t,i:N.i,sx:U,sy:D,moved:!1};return}f={type:"pan",sx:U,sy:D,tx:p.tx,ty:p.ty,moved:!1,hit:N}}),o.addEventListener("pointermove",P=>{let[U,D]=he(P);if(pe.has(P.pointerId)&&pe.set(P.pointerId,[U,D]),de&&pe.size===2){let[K,Q]=[...pe.values()],X=Math.hypot(K[0]-Q[0],K[1]-Q[1]),Z=Math.max(.05,Math.min(12,de.k*(X/de.d))),[le,fe]=Y(de.cx,de.cy);p.k=Z,p.tx=de.cx-le*Z,p.ty=de.cy-fe*Z,Oe();return}if(!f){Ge(U,D);return}Math.hypot(U-f.sx,D-f.sy)>5&&(f.moved=!0),f.type==="pan"&&f.moved?(p.tx=f.tx+U-f.sx,p.ty=f.ty+D-f.sy,Oe()):f.type==="draw"?(f.cur=Be(Y(U,D),g[g.length-1]),Oe()):f.type==="v"&&f.moved?je(f.i,Y(U,D)):f.type==="m"&&f.moved&&Xe(f.i,Y(U,D))});let Le=P=>{if(pe.delete(P.pointerId),de){pe.size<2&&(de=null),f=null;return}let U=f;if(f=null,!U)return;let[D,N]=he(P);if(U.type==="draw"&&!U.moved){let K=Be(Y(D,N),g[g.length-1]);if(g.length>=3&&Math.hypot(ie(g[0])[0]-D,ie(g[0])[1]-N)<14){st();return}g.push(K),De();return}if(U.type==="v"||U.type==="m"){U.moved?k():(m.pop(),n("[data-undo]").disabled=!m.length,U.type==="m"&&Ze(U.i,D,N));return}if(U.type==="pan"&&!U.moved){if(U.hit&&U.hit.t==="e"){Ze(U.hit.i,D,N);return}let[K,Q]=Y(D,N),X=u.an.label[Math.floor(Q)*u.w+Math.floor(K)];X!==void 0&&X>=0&&z(X)}};o.addEventListener("pointerup",Le),o.addEventListener("pointercancel",Le),o.addEventListener("wheel",P=>{P.preventDefault();let[U,D]=he(P);ae(Math.exp(-P.deltaY*(P.deltaMode?.05:.0015)),U,D)},{passive:!1}),o.addEventListener("dblclick",P=>{b==="draw"&&P.preventDefault()});function Ge(P,U){if(b==="draw"){o.style.cursor="crosshair";return}let D=j(P,U),N={v:D&&D.t==="v"?D.i:-1,mid:D&&D.t==="m"?D.i:-1,e:D&&D.t==="e"?D.i:-1,room:-1};if(!D){let[Q,X]=Y(P,U);Q>=0&&X>=0&&Q<u.w&&X<u.h&&(N.room=u.an.label[Math.floor(X)*u.w+Math.floor(Q)])}N.room!==M.room&&re(N.room);let K=N.v!==M.v||N.mid!==M.mid||N.e!==M.e||N.room!==M.room;M=N,o.style.cursor=N.v>=0||N.mid>=0?"grab":N.e>=0||N.room>=0?"pointer":"default",K&&Oe()}function je(P,U){let D=u.poly.length,N=u.poly,K=N[P],Q=(P+D-1)%D,X=(P+1)%D,Z=d.checked&&et(N),le=U[0],fe=U[1];if(Z)for(let Te of[Q,X])Math.abs(N[Te][0]-K[0])<1e-6?N[Te][0]=le:Math.abs(N[Te][1]-K[1])<1e-6&&(N[Te][1]=fe);K[0]=le,K[1]=fe,Oe(),y()}function Xe(P,U){let D=u.poly.length,N=u.poly,K=N[P],Q=N[(P+1)%D];Math.abs(K[0]-Q[0])<Math.abs(K[1]-Q[1])?(K[0]=U[0],Q[0]=U[0]):(K[1]=U[1],Q[1]=U[1]),Oe(),y()}let et=P=>P.every((U,D)=>{let N=P[(D+1)%P.length];return Math.abs(U[0]-N[0])<1e-6||Math.abs(U[1]-N[1])<1e-6});function z(P){if(me(),u.sel.has(P)?u.sel.delete(P):u.sel.add(P),$(),!u.sel.size){u.poly=[],k();return}let U={poly:u.poly,edges:u.poly.length>=3?ge():[],fi:u.fi,gl:[...u.gl]},D=Tl(u.an,[...u.sel]);D&&(u.poly=D.pts,at(U)),k()}function at(P){u.fi=null,u.gl=new Set;let U=ge(),D=.04*Math.max(u.w,u.h),N=K=>{let Q=-1,X=D;return U.forEach((Z,le)=>{let fe=Hy(Z.mid,K);fe<X&&(X=fe,Q=le)}),Q};if(P.fi!==null&&P.edges[P.fi]){let K=N(P.edges[P.fi].mid);K>=0&&(u.fi=K)}P.gl.forEach(K=>{if(P.edges[K]){let Q=N(P.edges[K].mid);Q>=0&&Q!==u.fi&&u.gl.add(Q)}})}function Ze(P,U,D){let N=ge(),K=N[P],Q=P===u.fi,X=u.gl.has(P);c.innerHTML=[`<button type="button" data-a="front">${Q?"Eingang hierhin verschieben":"Schaufenster und Eingang hier"}</button>`,Q?"":`<button type="button" data-a="glass">${X?"Kein Fenster hier":"Fensterwand"}</button>`,!Q&&!X||Q?"":'<button type="button" data-a="wall">Normale Wand</button>','<button type="button" data-a="len">L\xE4nge dieser Wand angeben</button>'].join("");let Z=o.getBoundingClientRect();c.hidden=!1,c.style.left=Math.max(8,Math.min(Z.width-230,U+10))+"px",c.style.top=Math.max(8,Math.min(Z.height-160,D+10))+"px",c.dataset.i=P,c.dataset.sx=U,c.dataset.sy=D,De()}function w(){c.hidden=!0}c.addEventListener("click",P=>{let U=P.target.closest("button");if(!U)return;let D=+c.dataset.i,N=ge(),K=N[D],Q=U.dataset.a;if(me(),Q==="front"){let[X,Z]=Y(+c.dataset.sx,+c.dataset.sy),le=K.len*K.len;u.ft=Math.max(.08,Math.min(.92,((X-K.a[0])*(K.b[0]-K.a[0])+(Z-K.a[1])*(K.b[1]-K.a[1]))/le)),u.gl.delete(D),u.fi=D}else if(Q==="glass")u.gl.has(D)?u.gl.delete(D):u.gl.add(D);else if(Q==="wall")u.gl.delete(D),u.fi===D&&(u.fi=null);else if(Q==="len"){w();let X=window.prompt("Wie lang ist diese Wand in Metern?",u.mpp?Cr(K.len*u.mpp,2):"");if(X){let Z=parseFloat(X.replace(",","."));Z>.3&&Z<200&&(u.mpp=Z/K.len,u.scaleFrom="Kante",l.value="")}}w(),k()}),document.addEventListener("pointerdown",P=>{!c.hidden&&!P.target.closest(".lplan__pop")&&w()});function y(){let P=n("[data-read]"),U=_e();if(!u.poly.length){P.innerHTML="<b>Noch keine Fl\xE4che</b>";return}let D=u.poly.map(fe=>fe[0]),N=u.poly.map(fe=>fe[1]),K=Math.max(...D)-Math.min(...D),Q=Math.max(...N)-Math.min(...N);P.innerHTML=U?`<div><span>Fl\xE4che</span><b>${Cr(U)} m\xB2</b></div><div><span>Gr\xF6\xDFte Ma\xDFe</span><b>${Cr(K*u.mpp)} \xD7 ${Cr(Q*u.mpp)} m</b></div><div><span>Ecken</span><b>${u.poly.length}</b></div>`:`<div><span>Ecken</span><b>${u.poly.length}</b></div><div class="lplan__warn">Gr\xF6\xDFe fehlt noch</div>`;let X=U&&u.fi!==null&&u.poly.length>=4,Z=n("[data-apply]");Z.disabled=!X,Z.title=X?"":U?"Bitte die Stra\xDFenseite w\xE4hlen":"Bitte zuerst die Gr\xF6\xDFe angeben",n("[data-hint3]").classList.toggle("is-todo",u.fi===null&&u.poly.length>=4),n("[data-hint2]").classList.toggle("is-todo",!U&&u.poly.length>=4);let le=u.note?u.note:"";n("[data-hint2]").textContent=U?u.scaleFrom?`Gr\xF6\xDFe aus ${u.scaleFrom}. Sie k\xF6nnen jederzeit korrigieren.`:"Sie k\xF6nnen die Fl\xE4che jederzeit korrigieren.":"Oder tippen Sie auf eine Wand und geben die L\xE4nge an.",le&&(n("[data-hint1]").textContent=le)}function k(){y(),De(),n("[data-undo]").disabled=!m.length}s("[data-x]").forEach(P=>P.addEventListener("click",I)),t.addEventListener("pointerdown",P=>{P.target===t&&I()}),document.addEventListener("keydown",P=>{if(!t.hidden){if(P.key==="Escape")b==="draw"?xe("select"):I(),P.stopPropagation();else if((P.key==="z"||P.key==="Z")&&(P.metaKey||P.ctrlKey))Ce(),P.preventDefault();else if(P.key==="Enter"&&b==="draw")st();else if(P.key==="Backspace"&&b==="draw"&&!P.target.closest("input"))g.pop(),De(),P.preventDefault();else if(P.key==="Tab"){let U=[...t.querySelectorAll('button, input, select, [tabindex="0"]')].filter(N=>N.offsetParent&&!N.disabled);if(!U.length)return;let D=U.indexOf(document.activeElement);P.shiftKey&&D<=0?(U[U.length-1].focus(),P.preventDefault()):!P.shiftKey&&D===U.length-1&&(U[0].focus(),P.preventDefault())}}},!0);let V=n("[data-file]"),J=n("[data-dz]");return J.addEventListener("click",()=>V.click()),J.addEventListener("keydown",P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),V.click())}),V.addEventListener("change",()=>{V.files[0]&&O(V.files[0]),V.value=""}),["dragenter","dragover"].forEach(P=>t.addEventListener(P,U=>{U.preventDefault(),J.classList.add("is-over")})),["dragleave","drop"].forEach(P=>t.addEventListener(P,U=>{U.preventDefault(),(P==="drop"||U.target===t)&&J.classList.remove("is-over")})),t.addEventListener("drop",P=>{let U=P.dataTransfer&&P.dataTransfer.files[0];U&&O(U)}),s("[data-zoom]").forEach(P=>P.addEventListener("click",()=>{let U=+P.dataset.zoom,D=o.getBoundingClientRect();U?ae(U,D.width/2,D.height/2):ce()})),n("[data-draw]").addEventListener("click",()=>xe(b==="draw"?"select":"draw")),n("[data-undo]").addEventListener("click",Ce),n("[data-auto]").addEventListener("click",()=>{me(),u.sel=new Set(Xu(u.an)),$();let P=u.sel.size?Tl(u.an,[...u.sel]):ju(u.an);P&&(u.poly=P.pts,u.fi=null,u.gl=new Set),xe("select"),ce(),k()}),l.addEventListener("input",()=>{let P=parseFloat(l.value.replace(",","."));P>4&&u.poly.length>=3?(u.mpp=Math.sqrt(P/Math.abs(Ku(u.poly))),u.scaleFrom="",h.value="",k()):l.value||(u.mpp=null,k())}),h.addEventListener("change",()=>{let P=+h.value;if(!P||!u.src.pdf)return;let U=25.4/72/u.src.renderScale*P;u.mpp=U/1e3,u.scaleFrom=`Ma\xDFstab 1 : ${P}`;let D=_e();D&&(l.value=Cr(D).replace(",",".")),k()}),n("[data-pages]").addEventListener("click",async P=>{let U=P.target.closest("[data-page]");if(!U)return;_("busy"),n("[data-busy-t]").textContent="Seite wird ge\xF6ffnet",await new Promise(N=>setTimeout(N,30));let D=u.src;await F(D,+U.dataset.page),await H(D)}),n("[data-apply]").addEventListener("click",()=>{if(!_e()||u.fi===null)return;let U=u.poly.map(N=>[N[0]*u.mpp,N[1]*u.mpp]),D=i({pts:U,fi:u.fi,ft:u.ft,gl:[...u.gl],door:null});if(typeof D=="string"){n("[data-read]").insertAdjacentHTML("beforeend",`<div class="lplan__warn">${D}</div>`);return}I()}),new ResizeObserver(()=>{!t.hidden&&u&&ne()}).observe(o),t._dbg=()=>({S:u,view:p,edges:u&&u.poly.length?ge():[],toScr:ie}),{open:C,has:()=>!!(u&&u.img)}}var Al=class{constructor(){this.on=!0,this.ctx=null,this.last=0,this.buf=null}ensure(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.3;let t=this.ctx.createDynamicsCompressor();this.master.connect(t).connect(this.ctx.destination);let n=Math.floor(this.ctx.sampleRate*.4);this.buf=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.buf.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}ready(){return this.on&&this.ctx&&this.ctx.state==="running"}tick(e=.5){if(!this.ready())return;let t=this.ctx,n=t.currentTime;if(n-this.last<.03)return;this.last=n;let s=380+(1-Math.min(1,e))*900+Math.random()*140,r=t.createOscillator(),a=t.createGain();r.type="triangle",r.frequency.setValueAtTime(s,n),r.frequency.exponentialRampToValueAtTime(s*.5,n+.08),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.42,n+.004),a.gain.exponentialRampToValueAtTime(1e-4,n+.1),r.connect(a).connect(this.master),r.start(n),r.stop(n+.12),this.noise(n,2200+Math.random()*900,.22,.035)}noise(e,t,n,s,r="bandpass"){let a=this.ctx,o=a.createBufferSource(),c=a.createBiquadFilter(),l=a.createGain();return o.buffer=this.buf,c.type=r,c.frequency.value=t,c.Q.value=1.1,l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(1e-4,e+s),o.connect(c).connect(l).connect(this.master),o.start(e,Math.random()*.2),o.stop(e+s+.02),c}whoosh(){if(!this.ready())return;let e=this.ctx.currentTime,t=this.noise(e,300,.16,.42,"lowpass");t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(2600,e+.3)}pop(){if(!this.ready())return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(520,t),n.frequency.exponentialRampToValueAtTime(980,t+.09),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.35,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+.16),n.connect(s).connect(this.master),n.start(t),n.stop(t+.18)}swap(e=0){if(!this.ready())return;let t=this.ctx,n=t.currentTime,s=this.noise(n,500,.12,.36,"bandpass");s.frequency.setValueAtTime(500,n),s.frequency.exponentialRampToValueAtTime(3400,n+.3);let r=[392,440,523.25,587.33,659.25,783.99][(e%6+6)%6];[r,r*1.5].forEach((a,o)=>{let c=t.createOscillator(),l=t.createGain(),h=n+.05+o*.09;c.type="sine",c.frequency.value=a,l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(.1,h+.015),l.gain.exponentialRampToValueAtTime(1e-4,h+.5),c.connect(l).connect(this.master),c.start(h),c.stop(h+.55)})}look(e=!0){if(!this.ready())return;let t=this.ctx,n=t.currentTime,s=this.noise(n,e?400:3200,.18,.7,"lowpass");s.frequency.setValueAtTime(e?400:3200,n),s.frequency.exponentialRampToValueAtTime(e?3600:400,n+.55),(e?[523.25,659.25,783.99,1046.5]:[1046.5,783.99,659.25,523.25]).forEach((r,a)=>{let o=t.createOscillator(),c=t.createGain(),l=n+a*.075;o.type="triangle",o.frequency.value=r,c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(.1,l+.02),c.gain.exponentialRampToValueAtTime(1e-4,l+.6),o.connect(c).connect(this.master),o.start(l),o.stop(l+.65)})}done(){if(!this.ready())return;let e=this.ctx,t=e.currentTime;[659.25,830.6,987.8].forEach((n,s)=>{let r=e.createOscillator(),a=e.createGain(),o=t+s*.07;r.type="sine",r.frequency.value=n,a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.12,o+.02),a.gain.exponentialRampToValueAtTime(1e-4,o+.7),r.connect(a).connect(this.master),r.start(o),r.stop(o+.75)})}};var jy="info@conceptsmedia.de",Ky={kiosk:"im Kiosk",eck:"im Eckladen",schlauch:"im Schlauch",center:"im Center"},Yy={l:"links",m:"in der Mitte",r:"rechts"},Jy={s:"schmal",n:"kompakt",b:"breit"},Si=i=>i.toFixed(1).replace(".",",");function $y(i){let e=Math.min(...i.pts.map(s=>s[0])),t=Math.min(...i.pts.map(s=>s[1])),n=i.pts.map(s=>`${Math.round((s[0]-e)*10).toString(36)}.${Math.round((s[1]-t)*10).toString(36)}`).join(",");return[i.fi,Math.round((i.ft??.5)*100).toString(36),(i.gl||[]).join("_"),i.door||"",n].join("~")}function Zy(i){let[e,t,n,s,r]=i.split("~");if(r===void 0)return null;let a=r.split(",").map(o=>o.split(".").map(c=>parseInt(c,36)/10));return a.length<4||a.some(o=>o.length!==2||o.some(c=>!Number.isFinite(c)))?null:{pts:a,fi:Math.min(+e||0,a.length-1),ft:parseInt(t,36)/100||.5,gl:n?n.split("_").map(Number).filter(o=>o<a.length):[],door:s||null}}function Qy(i){let e=i.querySelector("[data-lgen-stage]"),t=e.querySelector("canvas"),n=w=>i.querySelector(w),s=w=>[...i.querySelectorAll(w)],r=n(".lgen__tip"),a=n(".lgen__toast"),o=n(".lgen__stats"),c=n('[data-dim="w"]'),l=n('[data-dim="d"]'),h={cat:"burger",area:"eck",seed:0,view:"3d",m2:76,shape:"n",door:"r",corner:!0,open:!1,form:"rect",flip:!1,plan:null},d=w=>{Object.assign(h,qu(Ji.find(y=>y.id===w)||Ji[1]))};d(h.area);let u=/&l=r/.test(location.hash),p=/&mt=([a-z_]+)\.([a-z_]+)\.([a-z_]+)\.([a-z_]+)\.([a-z_]+)/.exec(location.hash),b=/baukasten=([a-z]+)-([a-z]+)-(\d+)/.exec(location.hash);if(b&&As.some(w=>w.id===b[1])&&(b[2]==="custom"||b[2]==="plan"||Ji.some(w=>w.id===b[2])))if(h.cat=b[1],h.area=b[2],h.seed=+b[3],h.area==="custom"){let w=/&f=(\d+)\.([snb])\.([lmr])\.([01])\.([01])(?:\.([a-z]+)\.([01]))?/.exec(location.hash);w&&Object.assign(h,{m2:Math.max(yl,Math.min(Ml,+w[1])),shape:w[2],door:w[3],corner:w[4]==="1",open:w[5]==="1",form:Mi.some(y=>y.id===w[6])?w[6]:"rect",flip:w[7]==="1"})}else if(h.area==="plan"){let w=/&p=([0-9a-z.,~_]+)/.exec(location.hash),y=/&m=(\d+)\.([01])/.exec(location.hash),k=w&&Zy(w[1]);k&&y?Object.assign(h,{plan:k,m2:+y[1],open:y[2]==="1"}):h.area="eck"}else d(h.area);let g={key:"",A:null},m=0,f=()=>{let w=[h.area,h.m2,h.shape,h.door,h.corner,h.open,h.form,h.flip,m,h.plan&&h.plan.door].join("|");if(g.key===w&&g.A)return g.A;let y;return h.area==="plan"&&h.plan&&(y=Sl({plan:h.plan,m2:h.m2,open:h.open}),y||(h.area="custom")),y||(y=h.area==="custom"?Sl(h):Ji.find(k=>k.id===h.area)),g={key:w,A:y},y},M=()=>h.area==="plan"&&h.plan?[Math.max(12,Math.round(oi(h.plan.pts)*.5)),Math.round(oi(h.plan.pts)*1.8)]:[yl,Ml],T=new Al;try{T.on=localStorage.getItem("lgen-ton")!=="0"}catch{}let x=null,v=!1,S=0,A=w=>{a.textContent=w,a.classList.add("is-on"),clearTimeout(S),S=setTimeout(()=>a.classList.remove("is-on"),1700)},_;try{_=new gl(e,t,{sound:T,onGesture:()=>T.ensure(),onHover:(w,y)=>{if(!w||!y){r.classList.remove("is-on");return}r.textContent=w,r.style.transform=`translate(${Math.round(y.x+16)}px, ${Math.round(y.y+18)}px)`,r.classList.add("is-on")},onTap:w=>{matchMedia("(pointer: coarse)").matches&&A(w)},onDone:()=>{i.classList.add("is-built"),_.quiet||T.done()},onFrame:()=>E(),safe:()=>{let w=e.getBoundingClientRect(),y=N=>{let K=i.querySelector(N);return K&&K.offsetParent?K.getBoundingClientRect():null},k=y(".lgen__areas"),V=y(".lgen__stats"),J=y(".lgen__tools"),P=y(".lgen__bar"),U=y(".lgen__hint"),D={top:16,bottom:16,left:18,right:18};return k&&(D.top=Math.max(D.top,k.bottom-w.top+14)),V&&V.top-w.top<w.height/2&&(D.top=Math.max(D.top,V.bottom-w.top+14)),V&&V.top-w.top>=w.height/2&&(D.bottom=Math.max(D.bottom,w.bottom-V.top+10)),P&&P.top<w.bottom-4&&(D.bottom=Math.max(D.bottom,w.bottom-P.top+34)),U&&(D.bottom=Math.max(D.bottom,w.bottom-U.top+8)),J&&(D.right=Math.max(D.right,w.right-J.left+12)),D.left=Math.max(D.left,w.width<700?12:D.right*.6),D}})}catch{i.classList.add("lgen--nogl");return}i.classList.add("is-ready"),window.__lgen=_,p&&Vn.forEach((w,y)=>{w.opts.some(k=>k.id===p[y+1])&&(_.sel[w.id]=p[y+1])});function E(){if(!x)return;let w=x.P,y=_.project(w.fp?(w.fp.bbox.x0+w.fp.bbox.x1)/2:0,-.1,w.pz1),k=_.project(w.px0,-.1,(w.pz0+w.pz1)/2);c.style.transform=`translate(${y.x}px, ${y.y}px)`,l.style.transform=`translate(${k.x}px, ${k.y}px)`,c.style.opacity=y.ok?"":"0",l.style.opacity=k.ok?"":"0"}let C={},I="",L=0;function O(w,y){let k=w.map(N=>N.k+N.u).join("|");if(k!==I){I=k;for(let N in C)delete C[N];o.innerHTML=w.map(N=>`<div class="lgen__stat"><span>${N.k}</span><b data-k="${N.k}">0</b>${N.u?`<i>${N.u}</i>`:""}</div>`).join("")}let V=++L,J=performance.now(),P=y?320:900,U={};w.forEach(N=>{U[N.k]=C[N.k]??0});let D=N=>{if(V!==L)return;let K=Math.min(1,(N-J)/P),Q=1-(1-K)**3;w.forEach(X=>{let Z=o.querySelector(`[data-k="${X.k}"]`);if(!Z)return;let le=U[X.k]+(X.v-U[X.k])*Q;C[X.k]=le,Z.textContent=Number.isInteger(X.v)?Math.round(le):Si(le)}),K<1&&requestAnimationFrame(D)};requestAnimationFrame(D)}function F(){let w=As.find(J=>J.id===h.cat),y=f(),k=Mi.find(J=>J.id===h.form),V=h.area==="plan"?`${w.name} im eigenen Grundriss, ${y.m2} m\xB2`:h.area==="custom"?`${w.name} auf ${y.m2} m\xB2${h.form!=="rect"&&k?`, ${k.name}`:""}`:`${w.name} ${Ky[y.id]}, ${y.m2} m\xB2`;return{C:w,A:y,txt:V}}function H(){let w=h.area==="custom"?`&f=${h.m2}.${h.shape}.${h.door}.${h.corner?1:0}.${h.open?1:0}${h.form!=="rect"||h.flip?`.${h.form}.${h.flip?1:0}`:""}`:h.area==="plan"&&h.plan?`&p=${$y(h.plan)}&m=${h.m2}.${h.open?1:0}`:"",y=_.look==="real"?`&l=r&mt=${Vn.map(k=>_.sel[k.id]).join(".")}`:"";return location.href.split("#")[0]+`#baukasten=${h.cat}-${h.area}-${h.seed}${w}${y}`}let q=n("[data-size-num]"),ne=n("[data-size-range]"),ce=n("[data-size-dim]"),Y=n("[data-custom-m2]"),ie=n("[data-size]"),ae=n("[data-size-toggle]"),ge=n("[data-plan-chip]");function _e(){let w=f(),[y,k]=M(),V=h.area==="plan";ne.min=y,ne.max=k,q.min=y,q.max=k,document.activeElement!==q&&(q.value=w.m2),q.style.width=`${String(q.value).length*.62+.25}em`,ne.value=w.m2,ne.style.setProperty("--p",`${(w.m2-y)/(k-y)*100}%`),n("[data-sl-min]").textContent=`${y} m\xB2`,n("[data-sl-max]").textContent=`${k} m\xB2`,ce.textContent=`${Si(w.bw??w.W)} \xD7 ${Si(w.bd??w.D)} m`,Y.textContent=h.area==="custom"?`${w.m2} m\xB2`:"frei w\xE4hlen",s('[data-seg="shape"] [data-v]').forEach(J=>J.setAttribute("aria-pressed",String(!V&&J.dataset.v===h.shape))),s('[data-seg="shape"] [data-v]').forEach(J=>{J.disabled=V}),s('[data-seg="door"] [data-v]').forEach(J=>J.setAttribute("aria-pressed",String(V?h.plan&&h.plan.door===J.dataset.v:J.dataset.v===h.door))),n('[data-tg="corner"]').setAttribute("aria-pressed",String(!V&&h.corner)),n('[data-tg="corner"]').disabled=V,n('[data-tg="open"]').setAttribute("aria-pressed",String(h.open)),s("[data-form]").forEach(J=>J.setAttribute("aria-pressed",String(!V&&h.area==="custom"&&J.dataset.form===h.form))),n("[data-forms]").classList.toggle("is-flip",h.flip),n("[data-flip]").setAttribute("aria-pressed",String(h.flip)),n("[data-flip]").disabled=V||h.form==="rect",ge.hidden=!h.plan,n('[data-area="plan"]').hidden=!h.plan,n("[data-plan-sum]").textContent=h.plan?`${Math.round(oi(h.plan.pts))} m\xB2, ${h.plan.pts.length} Ecken`:"",n('[data-area="plan"] span').textContent=h.plan?`${w.m2} m\xB2`:"",ie.classList.toggle("is-plan",V)}function We(){if(!x)return;let w=x.split,y=w.back+w.front;n('[data-split="back"]').style.flexGrow=w.back,n('[data-split="front"]').style.flexGrow=w.front,n('[data-split-l="back"]').textContent=w.backLabel,n('[data-split-l="front"]').textContent=w.frontLabel,n('[data-split-v="back"]').textContent=`${w.back} m\xB2 \xB7 ${Math.round(w.back/y*100)} %`,n('[data-split-v="front"]').textContent=`${w.front} m\xB2 \xB7 ${Math.round(w.front/y*100)} %`}function De(){s("[data-cat]").forEach(D=>D.setAttribute("aria-pressed",String(D.dataset.cat===h.cat))),s("[data-area]").forEach(D=>D.setAttribute("aria-pressed",String(D.dataset.area===h.area)));let{C:w,A:y,txt:k}=F();n("[data-sum]").textContent=k;let V=Mi.find(D=>D.id===h.form),J=h.area==="plan"?`Eigener Grundriss (aus Plan eingelesen), ${y.m2} m\xB2, gr\xF6\xDFte Ma\xDFe ${Si(y.bw)} x ${Si(y.bd)} m, ${y.fp.pts.length} Ecken${h.open?", offene Front":""}`:h.area==="custom"?`Eigene Fl\xE4che, ${y.m2} m\xB2 (${Si(y.bw)} x ${Si(y.bd)} m)${h.form!=="rect"&&V?`, Form ${V.name}${h.flip?" gespiegelt":""}`:""}, Zuschnitt ${Jy[h.shape]}, Eingang ${Yy[h.door]}${h.corner?", Ecklage mit Seitenfenster":""}${h.open?", offene Front":""}`:`${y.name}, ${y.m2} m\xB2`,P=_.look==="real"?`
Darstellung: realistisch (${Vn.map(D=>`${D.name} ${D.opts.find(N=>N.id===_.sel[D.id]).name}`).join(", ")})`:"",U=`Hallo Concepts Team,

ich interessiere mich f\xFCr einen Laden wie im 3D Baukasten auf Ihrer Website.

Branche: ${w.name}
Fl\xE4che: ${J}${P}
Variante: ${h.seed+1}
Ansicht: ${H()}

Bitte melden Sie sich bei mir.

Viele Gr\xFC\xDFe
`;n("[data-mail]").href=`mailto:${jy}?subject=${encodeURIComponent(`Ladenbau Anfrage: ${k}`)}&body=${encodeURIComponent(U)}`,t.setAttribute("aria-label",`3D Modell: ${k}. Ziehen zum Drehen.`),c.textContent=Si(y.bw??y.W)+" m",l.textContent=Si(y.bd??y.D)+" m",_e()}let Oe=0;function $(w="switch"){let y=f();(h.area==="custom"||h.area==="plan")&&y.m2!==h.m2&&(h.m2=y.m2),x=am(h.cat,y,h.seed),O(x.stats,w==="live"),_.setLayout(x,w),i.classList.remove("is-built"),De(),We(),v&&(clearTimeout(Oe),Oe=setTimeout(()=>{try{history.replaceState(null,"",H())}catch{}},w==="live"?450:0)),v=!0}let re=0,me=0;function Ce(){let w=140-(performance.now()-re);clearTimeout(me);let y=()=>{re=performance.now(),$("live")};w<=0?y():me=setTimeout(y,w)}function xe(w,y=!0){if(!Number.isFinite(w))return;h.area!=="plan"&&(h.area="custom");let[k,V]=M();if(h.m2=Math.max(k,Math.min(V,Math.round(w))),!v){De();return}y?Ce():$("live")}De();let Be=new IntersectionObserver(w=>{w[0].isIntersecting&&!v&&($("first"),Be.disconnect())},{threshold:.3});if(Be.observe(e),b){let w=()=>setTimeout(()=>i.scrollIntoView({behavior:"smooth",block:"center"}),500);document.readyState==="complete"?w():addEventListener("load",w,{once:!0})}let st=(w,y)=>{if(T.ensure(),h[w]===y){_.hopAll&&_.hopAll();return}h[w]=y,w==="cat"&&(h.seed=0),w==="area"&&y!=="custom"&&d(y),$()};s("[data-cat]").forEach(w=>w.addEventListener("click",()=>st("cat",w.dataset.cat))),s("[data-area]").forEach(w=>w.addEventListener("click",()=>st("area",w.dataset.area))),ne.addEventListener("input",()=>{T.ensure(),xe(+ne.value)}),ne.addEventListener("change",()=>xe(+ne.value,!1)),q.addEventListener("input",()=>{let w=+q.value,[y,k]=M();q.value!==""&&w>=y&&w<=k&&xe(w)}),q.addEventListener("change",()=>{xe(+q.value||h.m2,!1),q.value=f().m2}),q.addEventListener("keydown",w=>{w.key==="Enter"&&q.blur(),w.stopPropagation()}),s("[data-size-step]").forEach(w=>w.addEventListener("click",()=>{T.ensure(),xe(f().m2+ +w.dataset.sizeStep)})),s("[data-seg] [data-v]").forEach(w=>w.addEventListener("click",()=>{T.ensure();let y=w.parentElement.dataset.seg;if(h.area==="plan"&&h.plan){if(y!=="door")return;h.plan={...h.plan,door:w.dataset.v},m++,$();return}h.area==="custom"&&h[y]===w.dataset.v||(h.area="custom",h[y]=w.dataset.v,$())})),s("[data-tg]").forEach(w=>w.addEventListener("click",()=>{T.ensure();let y=w.dataset.tg;if(h.area==="plan"){if(y!=="open")return}else h.area="custom";h[y]=!h[y],y==="open"&&h.open&&h.m2<40&&h.area!=="plan"&&(h.m2=40),$()}));let j=w=>`M${w.map(([y,k])=>`${(3+y*18).toFixed(1)} ${(3+k*18).toFixed(1)}`).join("L")}Z`;s("[data-form]").forEach(w=>{let y=Mi.find(V=>V.id===w.dataset.form);if(!y)return;let k=y.pts.map((V,J)=>[V,y.pts[(J+1)%y.pts.length]]).filter(([V,J])=>V[1]===1&&J[1]===1);w.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${j(y.pts)}"/>${k.map(([V,J])=>`<path class="fr" d="M${(3+V[0]*18).toFixed(1)} 21L${(3+J[0]*18).toFixed(1)} 21"/>`).join("")}</svg>`,w.title=y.name,w.setAttribute("aria-label",y.name),w.addEventListener("click",()=>{if(T.ensure(),h.area==="custom"&&h.form===y.id){y.id!=="rect"?(h.flip=!h.flip,$(),A(h.flip?"Form gespiegelt":"Form zur\xFCckgespiegelt")):_.hopAll&&_.hopAll();return}if(h.area!=="custom"){let V=h.area==="plan"?{m2:h.m2}:qu(f());Object.assign(h,V)}h.area="custom",h.form=y.id,y.id==="rect"&&(h.flip=!1),$()})}),n("[data-flip]").addEventListener("click",()=>{h.form==="rect"||h.area!=="custom"||(T.ensure(),h.flip=!h.flip,$())}),ae.addEventListener("click",()=>{let w=ae.getAttribute("aria-expanded")!=="true";ae.setAttribute("aria-expanded",String(w)),ie.classList.toggle("is-open",w)});let he=pm({onApply:w=>{let y={pts:w.pts,fi:w.fi,ft:w.ft,gl:w.gl,door:null},k=Math.round(oi(w.pts));return Sl({plan:y,m2:k,open:!1})?(T.ensure(),h.plan=y,h.m2=k,h.area="plan",m++,$(),A("Ihr Grundriss ist im Baukasten"),!0):"Mit dieser Stra\xDFenseite l\xE4sst sich kein Laden einrichten. Bitte w\xE4hlen Sie eine Wand von mindestens 3 m als Stra\xDFenseite oder pr\xFCfen Sie den Umriss."}});n("[data-plan-open]").addEventListener("click",()=>he.open()),n("[data-plan-edit]").addEventListener("click",()=>he.open()),n("[data-plan-del]").addEventListener("click",()=>{h.plan=null,h.area==="plan"?(d("eck"),h.area="eck",$()):De()}),["dragenter","dragover"].forEach(w=>e.addEventListener(w,y=>{y.dataTransfer&&[...y.dataTransfer.types].includes("Files")&&y.preventDefault()})),e.addEventListener("drop",w=>{let y=w.dataTransfer&&w.dataTransfer.files[0];y&&(w.preventDefault(),he.open(y))});let pe=n("[data-mats]");pe.innerHTML=Vn.map(w=>`<div class="lgen__mat"><p class="lgen__cap"><span>${w.name}</span><b data-mat-name="${w.id}"></b></p><div class="lgen__sw" role="radiogroup" aria-label="${w.name}">${w.opts.map(y=>`<button type="button" role="radio" aria-checked="false" data-slot="${w.id}" data-opt="${y.id}" title="${y.name}" aria-label="${w.name}: ${y.name}" style="${y.tex?`background-image:url(assets/tex/th_${y.tex}.jpg)`:`background:#${y.color.toString(16).padStart(6,"0")}`}"></button>`).join("")}</div></div>`).join("");let de=()=>{Vn.forEach(w=>{let y=w.opts.find(k=>k.id===_.sel[w.id])||w.opts[0];n(`[data-mat-name="${w.id}"]`).textContent=y.name,s(`[data-slot="${w.id}"]`).forEach(k=>k.setAttribute("aria-checked",String(k.dataset.opt===y.id)))}),s("[data-look]").forEach(w=>w.setAttribute("aria-pressed",String(w.dataset.look===_.look))),i.classList.toggle("is-real",_.look==="real")},Le=!1;async function Ge(w){if(!(Le||w===_.look)){Le=!0,T.ensure(),i.classList.add("is-loading-look"),w==="real"&&A("Materialien und Menschen werden geladen");try{await _.setLook(w),T.look(w==="real")}catch(y){console.error(y),A("Der realistische Modus konnte nicht geladen werden")}i.classList.remove("is-loading-look"),Le=!1,de();try{history.replaceState(null,"",H())}catch{}De()}}if(s("[data-look]").forEach(w=>w.addEventListener("click",()=>Ge(w.dataset.look))),pe.addEventListener("click",async w=>{let y=w.target.closest("[data-slot]");if(y&&(T.ensure(),await _.setSlot(y.dataset.slot,y.dataset.opt))){de(),A(`${za[y.dataset.slot].name}: ${y.title}`);try{history.replaceState(null,"",H())}catch{}De()}}),de(),u){let w=setInterval(()=>{v&&(clearInterval(w),_.setLook("real",!0).then(de))},200)}let je=n('[data-act="view"]'),Xe=n('[data-act="sound"]'),et=()=>{Xe.setAttribute("aria-pressed",String(T.on)),Xe.title=T.on?"Ton aus":"Ton an",Xe.setAttribute("aria-label",Xe.title)};et();let z={dice:()=>{T.ensure(),h.seed=(h.seed+1)%9,$(),A(`Variante ${h.seed+1}`)},view:()=>{h.view=h.view==="3d"?"plan":"3d",_.fit(h.view,!0),je.setAttribute("aria-pressed",String(h.view==="plan")),je.title=h.view==="plan"?"3D Ansicht":"Grundriss",je.setAttribute("aria-label",je.title),i.classList.toggle("is-plan",h.view==="plan")},reset:()=>{h.view="3d",i.classList.remove("is-plan"),je.setAttribute("aria-pressed","false"),_.fit("3d",!0)},zoomin:()=>_.zoom(.78),zoomout:()=>_.zoom(1.28),sound:()=>{T.on=!T.on,T.on&&(T.ensure(),T.pop());try{localStorage.setItem("lgen-ton",T.on?"1":"0")}catch{}et()},full:()=>at(!i.classList.contains("lgen--full")),link:async()=>{try{await navigator.clipboard.writeText(H()),A("Link kopiert")}catch{prompt("Link zu diesem Laden",H())}},shot:()=>{let w=document.createElement("a");w.href=_.snapshot(),w.download=`laden-${h.cat}-${h.area}.png`,w.click(),A("Bild gespeichert")}};s("[data-act]").forEach(w=>w.addEventListener("click",()=>z[w.dataset.act]&&z[w.dataset.act]()));function at(w){i.classList.toggle("lgen--full",w),document.documentElement.classList.toggle("lgen-lock",w),t.style.touchAction=w?"none":"pan-y",n('[data-act="full"]').setAttribute("aria-pressed",String(w)),requestAnimationFrame(()=>requestAnimationFrame(()=>_.fit(h.view,!0,!0)))}let Ze=0;e.addEventListener("wheel",w=>{if(w.ctrlKey||w.metaKey||i.classList.contains("lgen--full")){w.preventDefault(),w.stopPropagation(),_.wheel(w);return}w.stopPropagation(),i.classList.add("is-hint"),clearTimeout(Ze),Ze=setTimeout(()=>i.classList.remove("is-hint"),1400)},{capture:!0,passive:!1}),document.addEventListener("keydown",w=>{if(w.target.closest("input, textarea, select")||w.metaKey||w.ctrlKey||w.altKey)return;if(w.key==="Escape"&&i.classList.contains("lgen--full")){at(!1);return}let y=e.getBoundingClientRect();if(y.bottom<0||y.top>innerHeight)return;let k="1234567890".indexOf(w.key);if(k>=0&&As[k]){st("cat",As[k].id);return}let V=w.key.toLowerCase();if(V==="m"){Ge(_.look==="real"?"concept":"real");return}V==="r"?z.dice():V==="g"?z.view():V==="f"&&z.full()})}document.querySelectorAll("[data-lgen]").forEach(Qy);})();
