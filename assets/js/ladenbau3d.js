(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zh=0,$l=1,Bh=2;var Ni=1,kh=2,vs=3,fi=0,Ne=1,Dn=2,Se=0,ys=1,Zl=2,Kl=3,Jl=4,Za=5;var hn=100,Vh=101,Gh=102,Hh=103,Wh=104,Ui=200,Xh=201,qh=202,Yh=203,jl=204,Ql=205,xr=206,$h=207,_r=208,Zh=209,Kh=210,Jh=211,jh=212,Qh=213,tu=214,Ma=0,Sa=1,ba=2,ls=3,wa=4,Ea=5,Ta=6,Aa=7,Ka=0,eu=1,nu=2,yn=0,vr=1,yr=2,Mr=3,Sr=4,br=5,wr=6,Fi=7;var tc=300,pi=301,Oi=302,Ja=303,ja=304,Er=306,An=1e3,En=1001,Ca=1002,ye=1003,iu=1004;var Tr=1005;var Le=1006,Qa=1007;var mi=1008;var Be=1009,ec=1010,nc=1011,Ms=1012,to=1013,Mn=1014,un=1015,Re=1016,eo=1017,no=1018,gi=1020,ic=35902,sc=35899,rc=1021,ac=1022,$e=1023,Cn=1026,Nn=1027,io=1028,so=1029,xi=1030,ro=1031;var ao=1033,Ar=33776,Cr=33777,Rr=33778,Pr=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Ir=37490,xo=37491,_o=37808,vo=37809,yo=37810,Mo=37811,So=37812,bo=37813,wo=37814,Eo=37815,To=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Io=37821,Lo=36492,Do=36494,No=36495,Uo=36283,Fo=36284,Lr=36285,Oo=36286;var Xs=2300,Ra=2301,va=2302,Bl=2303,kl=2400,Vl=2401,Gl=2402;var su=3200;var Ss=0,ru=1,$n="",He="srgb",qs="srgb-linear",Ys="linear",re="srgb";var ya=7680;var au=519,ou=512,lu=513,cu=514,zo=515,hu=516,uu=517,Bo=518,du=519,fu=35044;var oc="300 es",_n=2e3,cs=2001;function jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){let i=$s("canvas");return i.style.display="block",i}var dh={},hs=null;function lc(...i){let t="THREE."+i.shift();hs?hs("log",t,...i):console.log(t,...i)}function mu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=mu(i);let t="THREE."+i.shift();if(hs)hs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=mu(i);let t="THREE."+i.shift();if(hs)hs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Pi(...i){let t=i.join(" ");t in dh||(dh[t]=!0,Ht(...i))}function gu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xu={[Ma]:Sa,[ba]:Ta,[wa]:Aa,[ls]:Ea,[Sa]:Ma,[Ta]:ba,[Aa]:wa,[Ea]:ls},vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,Hs=Math.PI/180,us=180/Math.PI;function bs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function tf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ef(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function nf(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function sf(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function of(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lf(i,t){return i+Math.random()*(t-i)}function cf(i){return i*(.5-Math.random())}function hf(i){i!==void 0&&(fh=i);let t=fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uf(i){return i*Hs}function df(i){return i*us}function ff(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hc={DEG2RAD:Hs,RAD2DEG:us,generateUUID:bs,clamp:jt,euclideanModulo:cc,mapLinear:tf,inverseLerp:ef,lerp:Ws,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:af,randInt:of,randFloat:lf,randFloatSpread:cf,seededRandom:hf,degToRad:uf,radToDeg:df,isPowerOfTwo:ff,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:Ge,denormalize:as},mc=class mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;var Ft=mc,en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(m!==g||l!==u||c!==p||h!==_){let f=l*u+c*p+h*_+m*g;f<0&&(u=-u,p=-p,_=-_,g=-g,f=-f);let d=1-o;if(f<.9995){let S=Math.acos(f),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,m=m*d+g*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,m=m*d+g*o;let S=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=S,c*=S,h*=S,m*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*m+l*p-c*u,t[e+1]=l*_+h*u+c*m-o*p,t[e+2]=c*_+h*p+o*u-l*m,t[e+3]=h*_-o*m-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*m+c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m-u*p*_;break;case"YXZ":this._x=u*h*m+c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m+u*p*_;break;case"ZXY":this._x=u*h*m-c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m-u*p*_;break;case"ZYX":this._x=u*h*m-c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m+u*p*_;break;case"YZX":this._x=u*h*m+c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m-u*p*_;break;case"XZY":this._x=u*h*m-c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m+u*p*_;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],u=n+o+m;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gc=class gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;var H=gc,_l=new H,ph=new en,xc=class xc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],p=n[5],_=n[8],g=s[0],f=s[3],d=s[6],S=s[1],A=s[4],x=s[7],v=s[2],y=s[5],T=s[8];return r[0]=a*g+o*S+l*v,r[3]=a*f+o*A+l*y,r[6]=a*d+o*x+l*T,r[1]=c*g+h*S+m*v,r[4]=c*f+h*A+m*y,r[7]=c*d+h*x+m*T,r[2]=u*g+p*S+_*v,r[5]=u*f+p*A+_*y,r[8]=u*d+p*x+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=e*m+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=m*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vl.makeScale(t,e)),this}rotate(t){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;var Yt=xc,vl=new Yt,mh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){let i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:re,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var Qt=xf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qi,Pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=$s("canvas")),qi.width=t.width,qi.height=t.height;let s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_f=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yl(s[a].image)):r.push(yl(s[a]))}else r=yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var vf=0,Ml=new H,Ye=class i extends vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=En,s=En,r=Le,a=mi,o=$e,l=Be,c=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=bs(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case An:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case An:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=tc;Ye.DEFAULT_ANISOTROPY=1;var _c=class _c{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],u=l[1],p=l[5],_=l[9],g=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,x=(p+1)/2,v=(d+1)/2,y=(h+u)/4,T=(m+g)/4,M=(_+f)/4;return A>x&&A>v?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=y/n,r=T/n):x>v?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=M/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=M/r),this.set(n,s,r,e),this}let S=Math.sqrt((f-_)*(f-_)+(m-g)*(m-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(m-g)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_c.prototype.isVector4=!0;var xe=_c,Ia=class extends vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ye(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Me=class extends Ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zs=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,n,s,r,a,o,l,c,h,m,u,p,_,g,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,u,p,_,g,f)}set(t,e,n,s,r,a,o,l,c,h,m,u,p,_,g,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=m,d[14]=u,d[3]=p,d[7]=_,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),a=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*m,_=o*h,g=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=p+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*m,_=c*h,g=c*m;e[0]=u+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*m,_=c*h,g=c*m;e[0]=u-g*o,e[4]=-a*m,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*m,_=o*h,g=o*m;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+g,e[1]=l*m,e[5]=g*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*m,e[8]=_*m+p,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*m+_,e[10]=u-g*m}else if(t.order==="XZY"){let u=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=u*m+g,e[5]=a*h,e[9]=p*m-_,e[2]=_*m-p,e[6]=o*h,e[10]=g*m+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,Mf)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ti.crossVectors(n,Je),ti.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ti.crossVectors(n,Je)),ti.normalize(),Qr.crossVectors(Je,ti),s[0]=ti.x,s[4]=Qr.x,s[8]=Je.x,s[1]=ti.y,s[5]=Qr.y,s[9]=Je.y,s[2]=ti.z,s[6]=Qr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],p=n[13],_=n[2],g=n[6],f=n[10],d=n[14],S=n[3],A=n[7],x=n[11],v=n[15],y=s[0],T=s[4],M=s[8],w=s[12],R=s[1],I=s[5],L=s[9],V=s[13],F=s[2],W=s[6],nt=s[10],rt=s[14],ht=s[3],$=s[7],at=s[11],lt=s[15];return r[0]=a*y+o*R+l*F+c*ht,r[4]=a*T+o*I+l*W+c*$,r[8]=a*M+o*L+l*nt+c*at,r[12]=a*w+o*V+l*rt+c*lt,r[1]=h*y+m*R+u*F+p*ht,r[5]=h*T+m*I+u*W+p*$,r[9]=h*M+m*L+u*nt+p*at,r[13]=h*w+m*V+u*rt+p*lt,r[2]=_*y+g*R+f*F+d*ht,r[6]=_*T+g*I+f*W+d*$,r[10]=_*M+g*L+f*nt+d*at,r[14]=_*w+g*V+f*rt+d*lt,r[3]=S*y+A*R+x*F+v*ht,r[7]=S*T+A*I+x*W+v*$,r[11]=S*M+A*L+x*nt+v*at,r[15]=S*w+A*V+x*rt+v*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],u=t[10],p=t[14],_=t[3],g=t[7],f=t[11],d=t[15],S=l*p-c*u,A=o*p-c*m,x=o*u-l*m,v=a*p-c*h,y=a*u-l*h,T=a*m-o*h;return e*(g*S-f*A+d*x)-n*(_*S-f*v+d*y)+s*(_*A-g*v+d*T)-r*(_*x-g*y+f*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],u=t[10],p=t[11],_=t[12],g=t[13],f=t[14],d=t[15],S=e*o-n*a,A=e*l-s*a,x=e*c-r*a,v=n*l-s*o,y=n*c-r*o,T=s*c-r*l,M=h*g-m*_,w=h*f-u*_,R=h*d-p*_,I=m*f-u*g,L=m*d-p*g,V=u*d-p*f,F=S*V-A*L+x*I+v*R-y*w+T*M;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/F;return t[0]=(o*V-l*L+c*I)*W,t[1]=(s*L-n*V-r*I)*W,t[2]=(g*T-f*y+d*v)*W,t[3]=(u*y-m*T-p*v)*W,t[4]=(l*R-a*V-c*w)*W,t[5]=(e*V-s*R+r*w)*W,t[6]=(f*x-_*T-d*A)*W,t[7]=(h*T-u*x+p*A)*W,t[8]=(a*L-o*R+c*M)*W,t[9]=(n*R-e*L-r*M)*W,t[10]=(_*y-g*x+d*S)*W,t[11]=(m*x-h*y-p*S)*W,t[12]=(o*w-a*I-l*M)*W,t[13]=(e*I-n*w+s*M)*W,t[14]=(g*A-_*v-f*S)*W,t[15]=(h*v-m*A+u*S)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,u=r*c,p=r*h,_=r*m,g=a*h,f=a*m,d=o*m,S=l*c,A=l*h,x=l*m,v=n.x,y=n.y,T=n.z;return s[0]=(1-(g+d))*v,s[1]=(p+x)*v,s[2]=(_-A)*v,s[3]=0,s[4]=(p-x)*y,s[5]=(1-(u+d))*y,s[6]=(f+S)*y,s[7]=0,s[8]=(_+A)*T,s[9]=(f-S)*T,s[10]=(1-(u+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Yi.set(s[0],s[1],s[2]).length(),o=Yi.set(s[4],s[5],s[6]).length(),l=Yi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,h=1/o,m=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=m,mn.elements[9]*=m,mn.elements[10]*=m,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=_n,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===_n)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===cs)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===_n)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===cs)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var ie=$a,Yi=new H,mn=new ie,yf=new H(0,0,0),Mf=new H(1,1,1),ti=new H,Qr=new H,Je=new H,xh=new ie,_h=new en,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _h.setFromEuler(this),this.setFromQuaternion(_h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,vh=new H,$i=new en,Vn=new ie,ta=new H,Os=new H,bf=new H,wf=new en,yh=new H(1,0,0),Mh=new H(0,1,0),Sh=new H(0,0,1),bh={type:"added"},Ef={type:"removed"},Zi={type:"childadded",child:null},Sl={type:"childremoved",child:null},De=class i extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Rn,n=new en,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Yt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Os,ta,this.up):Vn.lookAt(ta,Os,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Vn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),Sl.child=t,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new H(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tf={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let f=e.getJointPose(g,n),d=this._getHandJoint(c,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},ea={h:0,s:0,l:0};function bl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=cc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bl(a,r,t+1/3),this.g=bl(a,r,t),this.b=bl(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Qt.workingToColorSpace(ze.copy(this),t),Math.round(jt(ze.r*255,0,255))*65536+Math.round(jt(ze.g*255,0,255))*256+Math.round(jt(ze.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=He){Qt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(ea);let n=Ws(ei.h,ea.h,e),s=Ws(ei.s,ea.s,e),r=Ws(ei.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new qt;qt.NAMES=_u;var Ii=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new H,Gn=new H,wl=new H,Hn=new H,Ki=new H,Ji=new H,wh=new H,El=new H,Tl=new H,Al=new H,Cl=new xe,Rl=new xe,Pl=new xe,ri=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Gn.subVectors(n,e),wl.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Gn),l=gn.dot(wl),c=Gn.dot(Gn),h=Gn.dot(wl),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let u=1/m,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Cl,r.x),a.addScaledVector(Rl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Gn.subVectors(t,e),gn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Ji.subVectors(r,n),El.subVectors(t,n);let l=Ki.dot(El),c=Ji.dot(El);if(l<=0&&c<=0)return e.copy(n);Tl.subVectors(t,s);let h=Ki.dot(Tl),m=Ji.dot(Tl);if(h>=0&&m<=h)return e.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ki,a);Al.subVectors(t,r);let p=Ki.dot(Al),_=Ji.dot(Al);if(_>=0&&p<=_)return e.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ji,o);let f=h*_-p*m;if(f<=0&&m-h>=0&&p-_>=0)return wh.subVectors(r,s),o=(m-h)/(m-h+(p-_)),e.copy(s).addScaledVector(wh,o);let d=1/(f+g+u);return a=g*d,o=u*d,e.copy(n).addScaledVector(Ki,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),ia.subVectors(this.max,zs),ji.subVectors(t.a,zs),Qi.subVectors(t.b,zs),ts.subVectors(t.c,zs),ni.subVectors(Qi,ji),ii.subVectors(ts,Qi),Ti.subVectors(ji,ts);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ti.z,Ti.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ti.z,0,-Ti.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ti.y,Ti.x,0];return!Il(e,ji,Qi,ts,ia)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,ji,Qi,ts,ia))?!1:(sa.crossVectors(ni,ii),e=[sa.x,sa.y,sa.z],Il(e,ji,Qi,ts,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new H,new H,new H,new H,new H,new H,new H,new H],xn=new H,na=new Pn,ji=new H,Qi=new H,ts=new H,ni=new H,ii=new H,Ti=new H,zs=new H,ia=new H,sa=new H,Ai=new H;function Il(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var we=new H,ra=new Ft,Af=0,tn=class extends vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=as(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=as(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=as(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=as(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=as(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Js=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cf=new Pn,Bs=new H,Ll=new H,ai=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ll)),this.expandByPoint(Bs.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rf=0,on=new ie,Dl=new De,es=new H,je=new Pn,ks=new Pn,Ce=new H,We=class i extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?Js:Ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Dl.lookAt(t),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(je.min,ks.min),je.expandByPoint(Ce),Ce.addVectors(je.max,ks.max),je.expandByPoint(Ce)):(je.expandByPoint(ks.min),je.expandByPoint(ks.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(t,c),Ce.add(es)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new H,l[M]=new H;let c=new H,h=new H,m=new H,u=new Ft,p=new Ft,_=new Ft,g=new H,f=new H;function d(M,w,R){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),m.fromBufferAttribute(n,R),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),h.sub(c),m.sub(c),p.sub(u),_.sub(u);let I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(m,-p.y).multiplyScalar(I),f.copy(m).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(I),o[M].add(g),o[w].add(g),o[R].add(g),l[M].add(f),l[w].add(f),l[R].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let M=0,w=S.length;M<w;++M){let R=S[M],I=R.start,L=R.count;for(let V=I,F=I+L;V<F;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new H,x=new H,v=new H,y=new H;function T(M){v.fromBufferAttribute(s,M),y.copy(v);let w=o[M];A.copy(w),A.sub(v.multiplyScalar(v.dot(w))).normalize(),x.crossVectors(y,w);let I=x.dot(l[M])<0?-1:1;a.setXYZW(M,A.x,A.y,A.z,I)}for(let M=0,w=S.length;M<w;++M){let R=S[M],I=R.start,L=R.count;for(let V=I,F=I+L;V<F;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,m=new H;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),g=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new tn(u,h,m)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let p=c[m];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,p=m.length;u<p;u++)h.push(m[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nl=new H,Pf=new H,If=new Yt,Qe=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nl.subVectors(n,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||If.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Lf=0,nn=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ys,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Ql,this.blendEquation=hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qe().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xn=new H,Ul=new H,aa=new H,oa=new H,Li=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ul.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),oa.copy(this.origin).sub(Ul);let r=t.distanceTo(e)*.5,a=-this.direction.dot(aa),o=oa.dot(this.direction),l=-oa.dot(aa),c=oa.lengthSq(),h=Math.abs(1-a*a),m,u,p,_;if(h>0)if(m=a*l-o,u=a*o-l,_=r*h,m>=0)if(u>=-_)if(u<=_){let g=1/h;m*=g,u*=g,p=m*(m+a*u+2*o)+u*(a*m+u+2*l)+c}else u=r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-a*r+o)),u=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(m=Math.max(0,-(a*r+o)),u=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c);else u=a>0?-r:r,m=Math.max(0,-(a*u+o)),p=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ul).addScaledVector(aa,u),p}intersectSphere(t,e){if(t.radius<0)return null;Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-u.z)*m,l=(t.max.z-u.z)*m):(o=(t.max.z-u.z)*m,l=(t.min.z-u.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,u=t.y-a.y,p=t.z-a.z,_=e.x-a.x,g=e.y-a.y,f=e.z-a.z,d=n.x-a.x,S=n.y-a.y,A=n.z-a.z,x=Math.abs(l),v=Math.abs(c),y=Math.abs(h),T,M,w,R,I,L,V,F,W,nt,rt,ht;if(x>=v&&x>=y?(w=l,L=m,W=_,ht=d,l>=0?(T=c,M=h,R=u,I=p,V=g,F=f,nt=S,rt=A):(T=h,M=c,R=p,I=u,V=f,F=g,nt=A,rt=S)):v>=y?(w=c,L=u,W=g,ht=S,c>=0?(T=h,M=l,R=p,I=m,V=f,F=_,nt=A,rt=d):(T=l,M=h,R=m,I=p,V=_,F=f,nt=d,rt=A)):(w=h,L=p,W=f,ht=A,h>=0?(T=l,M=c,R=m,I=u,V=_,F=g,nt=d,rt=S):(T=c,M=l,R=u,I=m,V=g,F=_,nt=S,rt=d)),w===0)return null;let $=T/w,at=M/w,lt=1/w,St=R-$*L,Et=I-at*L,Zt=V-$*W,Ct=F-at*W,Bt=nt-$*ht,tt=rt-at*ht,ot=Bt*Ct-tt*Zt,xt=St*tt-Et*Bt,Lt=Zt*Et-Ct*St;if(s){if(ot<0||xt<0||Lt<0)return null}else if((ot<0||xt<0||Lt<0)&&(ot>0||xt>0||Lt>0))return null;let vt=ot+xt+Lt;if(vt===0)return null;let Wt=lt*(ot*L+xt*W+Lt*ht);return(vt>0?Wt<0:Wt>0)?null:this.at(Wt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},js=class extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eh=new ie,Ci=new Li,la=new ai,Th=new H,ca=new H,ha=new H,ua=new H,Fl=new H,da=new H,Ah=new H,fa=new H,ue=class extends De{constructor(t=new We,e=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Fl.fromBufferAttribute(m,t),a?da.addScaledVector(Fl,h):da.addScaledVector(Fl.sub(e),h))}e.add(da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(la.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(la,Th)===null||Ci.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let f=u[_],d=a[f.materialIndex],S=Math.max(f.start,p.start),A=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let x=S,v=A;x<v;x+=3){let y=o.getX(x),T=o.getX(x+1),M=o.getX(x+2);s=pa(this,d,t,n,c,h,m,y,T,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let f=_,d=g;f<d;f+=3){let S=o.getX(f),A=o.getX(f+1),x=o.getX(f+2);s=pa(this,a,t,n,c,h,m,S,A,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let f=u[_],d=a[f.materialIndex],S=Math.max(f.start,p.start),A=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let x=S,v=A;x<v;x+=3){let y=x,T=x+1,M=x+2;s=pa(this,d,t,n,c,h,m,y,T,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let f=_,d=g;f<d;f+=3){let S=f,A=f+1,x=f+2;s=pa(this,a,t,n,c,h,m,S,A,x),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Df(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===fi,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:i}}function pa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ca),i.getVertexPosition(l,ha),i.getVertexPosition(c,ua);let h=Df(i,t,e,n,ca,ha,ua,Ah);if(h){let m=new H;ri.getBarycoord(Ah,ca,ha,ua,m),s&&(h.uv=ri.getInterpolatedAttribute(s,o,l,c,m,new Ft)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,m,new Ft)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,m,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};ri.getNormal(ca,ha,ua,u.normal),h.face=u,h.barycoord=m}return h}var Yn=class extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ye,h=ye,m,u){super(null,a,o,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new ie,Ch=new ie,ma=[],Rh=new Pn,Nf=new ie,Vs=new ue,Gs=new ai,tr=class extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Rh.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Gs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Ch.multiplyMatrices(n,ns),Vs.matrixWorld=Ch,Vs.raycast(t,ma);for(let a=0,o=ma.length;a<o;a++){let l=ma[a];l.instanceId=r,l.object=this,e.push(l)}ma.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(s*this.count),s,this.count,io,un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new ai,Uf=new Ft(.5,.5),ga=new H,ms=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],p=r[7],_=r[8],g=r[9],f=r[10],d=r[11],S=r[12],A=r[13],x=r[14],v=r[15];if(s[0].setComponents(c-a,p-h,d-_,v-S).normalize(),s[1].setComponents(c+a,p+h,d+_,v+S).normalize(),s[2].setComponents(c+o,p+m,d+g,v+A).normalize(),s[3].setComponents(c-o,p-m,d-g,v-A).normalize(),n)s[4].setComponents(l,u,f,x).normalize(),s[5].setComponents(c-l,p-u,d-f,v-x).normalize();else if(s[4].setComponents(c-l,p-u,d-f,v-x).normalize(),e===_n)s[5].setComponents(c+l,p+u,d+f,v+x).normalize();else if(e===cs)s[5].setComponents(l,u,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);let e=Uf.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends Ye{constructor(t=[],e=pi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var In=class extends Ye{constructor(t,e,n=Mn,s,r,a,o=ye,l=ye,c,h=Cn,m=1){if(h!==Cn&&h!==Nn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:m};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Da=class extends In{constructor(t,e=Mn,n=pi,s,r,a=ye,o=ye,l,c=Cn){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nr=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ln=class i extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(m,2));function _(g,f,d,S,A,x,v,y,T,M,w){let R=x/T,I=v/M,L=x/2,V=v/2,F=y/2,W=T+1,nt=M+1,rt=0,ht=0,$=new H;for(let at=0;at<nt;at++){let lt=at*I-V;for(let St=0;St<W;St++){let Et=St*R-L;$[g]=Et*S,$[f]=lt*A,$[d]=F,c.push($.x,$.y,$.z),$[g]=0,$[f]=0,$[d]=y>0?1:-1,h.push($.x,$.y,$.z),m.push(St/T),m.push(1-at/M),rt+=1}}for(let at=0;at<M;at++)for(let lt=0;lt<T;lt++){let St=u+lt+W*at,Et=u+lt+W*(at+1),Zt=u+(lt+1)+W*(at+1),Ct=u+(lt+1)+W*at;l.push(St,Et,Ct),l.push(Et,Zt,Ct),ht+=6}o.addGroup(p,ht,w),p+=ht,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ir=class i extends We{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,m=Math.PI/2*t,u=e,p=2*m+u,_=n*2+r,g=s+1,f=new H,d=new H;for(let S=0;S<=_;S++){let A=0,x=0,v=0,y=0;if(S<=n){let w=S/n,R=w*Math.PI/2;x=-h-t*Math.cos(R),v=t*Math.sin(R),y=-t*Math.cos(R),A=w*m}else if(S<=n+r){let w=(S-n)/r;x=-h+w*e,v=t,y=0,A=m+w*u}else{let w=(S-n-r)/n,R=w*Math.PI/2;x=h+t*Math.sin(R),v=t*Math.cos(R),y=t*Math.sin(R),A=m+u+w*m}let T=Math.max(0,Math.min(1,A/p)),M=0;S===0?M=.5/s:S===_&&(M=-.5/s);for(let w=0;w<=s;w++){let R=w/s,I=R*Math.PI*2,L=Math.sin(I),V=Math.cos(I);d.x=-v*V,d.y=x,d.z=v*L,o.push(d.x,d.y,d.z),f.set(-v*V,y,v*L),f.normalize(),l.push(f.x,f.y,f.z),c.push(R+M,T)}if(S>0){let w=(S-1)*g;for(let R=0;R<s;R++){let I=w+R,L=w+R+1,V=S*g+R,F=S*g+R+1;a.push(I,L,V),a.push(L,F,V)}}}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var sr=class i extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],p=[],_=0,g=[],f=n/2,d=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(p,2));function S(){let x=new H,v=new H,y=0,T=(e-t)/n;for(let M=0;M<=r;M++){let w=[],R=M/r,I=R*(e-t)+t;for(let L=0;L<=s;L++){let V=L/s,F=V*l+o,W=Math.sin(F),nt=Math.cos(F);v.x=I*W,v.y=-R*n+f,v.z=I*nt,m.push(v.x,v.y,v.z),x.set(W,T,nt).normalize(),u.push(x.x,x.y,x.z),p.push(V,1-R),w.push(_++)}g.push(w)}for(let M=0;M<s;M++)for(let w=0;w<r;w++){let R=g[w][M],I=g[w+1][M],L=g[w+1][M+1],V=g[w][M+1];(t>0||w!==0)&&(h.push(R,I,V),y+=3),(e>0||w!==r-1)&&(h.push(I,L,V),y+=3)}c.addGroup(d,y,0),d+=y}function A(x){let v=_,y=new Ft,T=new H,M=0,w=x===!0?t:e,R=x===!0?1:-1;for(let L=1;L<=s;L++)m.push(0,f*R,0),u.push(0,R,0),p.push(.5,.5),_++;let I=_;for(let L=0;L<=s;L++){let F=L/s*l+o,W=Math.cos(F),nt=Math.sin(F);T.x=w*nt,T.y=f*R,T.z=w*W,m.push(T.x,T.y,T.z),u.push(0,R,0),y.x=W*.5+.5,y.y=nt*.5*R+.5,p.push(y.x,y.y),_++}for(let L=0;L<s;L++){let V=v+L,F=I+L;x===!0?h.push(F,F+1,V):h.push(F+1,F,V),M+=3}c.addGroup(d,M,x===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Di=class i extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,u=e/l,p=[],_=[],g=[],f=[];for(let d=0;d<h;d++){let S=d*u-a;for(let A=0;A<c;A++){let x=A*m-r;_.push(x,-S,0),g.push(0,0,1),f.push(A/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let A=S+c*d,x=S+c*(d+1),v=S+1+c*(d+1),y=S+1+c*d;p.push(A,x,y),p.push(x,v,y)}this.setIndex(p),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(g,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var gs=class i extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],m=new H,u=new H,p=[],_=[],g=[],f=[];for(let d=0;d<=n;d++){let S=[],A=d/n,x=a+A*o,v=t*Math.cos(x),y=Math.sqrt(t*t-v*v),T=0;d===0&&a===0?T=.5/e:d===n&&l===Math.PI&&(T=-.5/e);for(let M=0;M<=e;M++){let w=M/e,R=s+w*r;m.x=-y*Math.cos(R),m.y=v,m.z=y*Math.sin(R),_.push(m.x,m.y,m.z),u.copy(m).normalize(),g.push(u.x,u.y,u.z),f.push(w+T,1-A),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){let A=h[d][S+1],x=h[d][S],v=h[d+1][S],y=h[d+1][S+1];(d!==0||a>0)&&p.push(A,x,y),(d!==n-1||l<Math.PI)&&p.push(x,v,y)}this.setIndex(p),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(g,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var rr=class extends nn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ph(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ph(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ff(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var dn={clone:zi,merge:ke},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xs=class extends _e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ln=class extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ar=class extends Ln{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var or=class extends nn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},lr=class extends nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Na=class extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function is(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ol(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,o=2*e-n;break;case Gl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:a=t,l=2*n-e;break;case Gl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),g=_*_,f=g*_,d=-u*f+2*u*g-u*_,S=(1+u)*f+(-1.5-2*u)*g+(-.5+u)*_+1,A=(-1-p)*f+(1.5+p)*g+.5*_,x=p*f-p*g;for(let v=0;v!==o;++v)r[v]=d*a[h+v]+S*a[c+v]+A*a[l+v]+x*a[m+v];return r}},Oa=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*m+a[l+u]*h;return r}},za=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ba=class extends oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-e)/(s-e),g=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*g+a[l+f]*_;return r}let u=o*2,p=t-1;for(let _=0;_!==o;++_){let g=a[c+_],f=a[l+_],d=p*u+_*2,S=m[d],A=m[d+1],x=t*u+_*2,v=h[x],y=h[x+1],T=kf(n,e,S,v,s);r[_]=vu(T,g,A,y,f)}return r}};function vu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function kf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=vu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Bf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=is(e,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:is(t.times,Array),values:is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ol(t.settings)&&(n.settings={inTangents:is(t.settings.inTangents,Array),outTangents:is(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case Ra:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ol(this.settings)&&(Ih(this.settings.inTangents,t),Ih(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,u=m-n,p=m+n;for(let _=0;_!==n;++_){let g=e[m+_];if(g!==e[u+_]||g!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[m+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ol(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ih(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ra;var li=class extends sn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Xs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="color";var Va=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="number";var Ga=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},cr=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}};cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends sn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Xs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ha.prototype.ValueTypeName="vector";var Wa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let p=c[m],_=c[m+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yu=new Wa,Xa=class{constructor(t){this.manager=t!==void 0?t:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var zl=new ie,Lh=new H,Dh=new H,ur=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Be,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(zl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new H,_a=new en,wn=new H,dr=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,_a,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,_a,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,_a,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new H,Nh=new Ft,Uh=new Ft,Ie=class extends dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Uh),e.subVectors(Uh,Nh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hl=class extends ur{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0}},fr=class extends hr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},hi=class extends dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wl=class extends ur{constructor(){super(new hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Wl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ss=-90,rs=1,qa=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(ss,rs,t,e);s.layers=this.layers,this.add(s);let r=new Ie(ss,rs,t,e);r.layers=this.layers,this.add(r);let a=new Ie(ss,rs,t,e);a.layers=this.layers,this.add(a);let o=new Ie(ss,rs,t,e);o.layers=this.layers,this.add(o);let l=new Ie(ss,rs,t,e);l.layers=this.layers,this.add(l);let c=new Ie(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ya=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},pr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Vf(){this._document.hidden===!1&&this.reset()}var dc="\\[\\]\\.:\\/",Gf=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Hf="[^"+dc.replace("\\.","")+"]",Wf=/((?:WC+[\/:])*)/.source.replace("WC",fc),Xf=/(WCOD+)?/.source.replace("WCOD",Hf),qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),$f=new RegExp("^"+Wf+Xf+qf+Yf+"$"),Zf=["material","materials","bones","map"],Xl=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(t){let e=$f.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Xl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var Fh=new ie,mr=class{constructor(t,e,n=0,s=1/0){this.ray=new Li(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(t,e=!0,n=[]){return ql(t,this,n,e),n.sort(Oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ql(t[s],this,n,e);return n.sort(Oh),n}};function Oh(i,t){return i.distance-t.distance}function ql(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ql(r[a],t,e,!0)}}var cn=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vc=class vc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};vc.prototype.isMatrix2=!0;var Yl=vc;var gr=class extends vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function pc(i,t,e,n){let s=Kf(n);switch(e){case rc:return i*t;case io:return i*t/s.components*s.byteLength;case so:return i*t/s.components*s.byteLength;case xi:return i*t*2/s.components*s.byteLength;case ro:return i*t*2/s.components*s.byteLength;case ac:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case ao:return i*t*4/s.components*s.byteLength;case Ar:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case uo:case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case Ir:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lr:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kf(i){switch(i){case Be:case ec:return{byteLength:1,components:1};case Ms:case nc:case Re:return{byteLength:2,components:1};case eo:case no:return{byteLength:2,components:4};case Mn:case to:case un:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<m.length;p++){let _=m[u],g=m[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,m[u]=g)}m.length=u+1;for(let p=0,_=m.length;p<_;p++){let g=m[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Jp=`uniform sampler2D dfgLUT;
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
}`,jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,x0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,S0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,T0=`#define TOON
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
}`,A0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,P0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Qf,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:ap,batching_pars_vertex:op,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:_p,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:Mp,common:Sp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Ep,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Np,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:zp,fog_pars_fragment:Bp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:$p,lights_phong_pars_fragment:Zp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Jp,lights_fragment_begin:jp,lights_fragment_maps:Qp,lights_fragment_end:tm,lightprobes_pars_fragment:em,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:dm,morphcolor_vertex:fm,morphnormal_vertex:pm,morphtarget_pars_vertex:mm,morphtarget_vertex:gm,normal_fragment_begin:xm,normal_fragment_maps:_m,normal_pars_fragment:vm,normal_pars_vertex:ym,normal_vertex:Mm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Cm,premultiplied_alpha_fragment:Rm,project_vertex:Pm,dithering_fragment:Im,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:zm,skinbase_vertex:Bm,skinning_pars_vertex:km,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:Ym,transmission_pars_fragment:$m,uv_pars_fragment:Zm,uv_pars_vertex:Km,uv_vertex:Jm,worldpos_vertex:jm,background_vert:Qm,background_frag:t0,backgroundCube_vert:e0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:s0,depth_vert:r0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:d0,meshbasic_vert:f0,meshbasic_frag:p0,meshlambert_vert:m0,meshlambert_frag:g0,meshmatcap_vert:x0,meshmatcap_frag:_0,meshnormal_vert:v0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:S0,meshphysical_vert:b0,meshphysical_frag:w0,meshtoon_vert:E0,meshtoon_frag:T0,points_vert:A0,points_frag:C0,shadow_vert:R0,shadow_frag:P0,sprite_vert:I0,sprite_frag:L0},bt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Fn={basic:{uniforms:ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ke([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ke([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ke([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ke([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ke([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ke([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ke([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ke([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:ke([bt.common,bt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:ke([bt.lights,bt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Fn.physical={uniforms:ke([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var ko={r:0,b:0,g:0},D0=new ie,Hu=new Yt;Hu.set(-1,0,0,0,1,0,0,0,1);function N0(i,t,e,n,s,r){let a=new qt(0),o=s===!0?0:1,l,c,h=null,m=0,u=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let x=S.backgroundBlurriness>0;A=t.get(A,x)}return A}function _(S){let A=!1,x=p(S);x===null?f(a,o):x&&x.isColor&&(f(x,1),A=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,A){let x=p(A);x&&(x.isCubeTexture||x.mapping===Er)?(c===void 0&&(c=new ue(new ln(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:zi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hu),c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,(h!==x||m!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,m=x.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ue(new Di(2,2),new _e({name:"BackgroundMaterial",uniforms:zi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||m!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,m=x.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,A){S.getRGB(ko,uc(i)),e.buffers.color.setClear(ko.r,ko.g,ko.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:_,addToRenderList:g,dispose:d}}function U0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,L,V,F,W){let nt=!1,rt=m(I,F,V,L);r!==rt&&(r=rt,c(r.object)),nt=p(I,F,V,W),nt&&_(I,F,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,x(I,L,V,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function m(I,L,V,F){let W=F.wireframe===!0,nt=n[L.id];nt===void 0&&(nt={},n[L.id]=nt);let rt=I.isInstancedMesh===!0?I.id:0,ht=nt[rt];ht===void 0&&(ht={},nt[rt]=ht);let $=ht[V.id];$===void 0&&($={},ht[V.id]=$);let at=$[W];return at===void 0&&(at=u(l()),$[W]=at),at}function u(I){let L=[],V=[],F=[];for(let W=0;W<e;W++)L[W]=0,V[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:F,object:I,attributes:{},index:null}}function p(I,L,V,F){let W=r.attributes,nt=L.attributes,rt=0,ht=V.getAttributes();for(let $ in ht)if(ht[$].location>=0){let lt=W[$],St=nt[$];if(St===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(St=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(St=I.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;rt++}return r.attributesNum!==rt||r.index!==F}function _(I,L,V,F){let W={},nt=L.attributes,rt=0,ht=V.getAttributes();for(let $ in ht)if(ht[$].location>=0){let lt=nt[$];lt===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(lt=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(lt=I.instanceColor));let St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),W[$]=St,rt++}r.attributes=W,r.attributesNum=rt,r.index=F}function g(){let I=r.newAttributes;for(let L=0,V=I.length;L<V;L++)I[L]=0}function f(I){d(I,0)}function d(I,L){let V=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;V[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),W[I]!==L&&(i.vertexAttribDivisor(I,L),W[I]=L)}function S(){let I=r.newAttributes,L=r.enabledAttributes;for(let V=0,F=L.length;V<F;V++)L[V]!==I[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function A(I,L,V,F,W,nt,rt){rt===!0?i.vertexAttribIPointer(I,L,V,W,nt):i.vertexAttribPointer(I,L,V,F,W,nt)}function x(I,L,V,F){g();let W=F.attributes,nt=V.getAttributes(),rt=L.defaultAttributeValues;for(let ht in nt){let $=nt[ht];if($.location>=0){let at=W[ht];if(at===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(at=I.instanceColor)),at!==void 0){let lt=at.normalized,St=at.itemSize,Et=t.get(at);if(Et===void 0)continue;let Zt=Et.buffer,Ct=Et.type,Bt=Et.bytesPerElement,tt=Ct===i.INT||Ct===i.UNSIGNED_INT||at.gpuType===to;if(at.isInterleavedBufferAttribute){let ot=at.data,xt=ot.stride,Lt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let vt=0;vt<$.locationSize;vt++)d($.location+vt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let vt=0;vt<$.locationSize;vt++)f($.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let vt=0;vt<$.locationSize;vt++)A($.location+vt,St/$.locationSize,Ct,lt,xt*Bt,(Lt+St/$.locationSize*vt)*Bt,tt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<$.locationSize;ot++)d($.location+ot,at.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<$.locationSize;ot++)f($.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ot=0;ot<$.locationSize;ot++)A($.location+ot,St/$.locationSize,Ct,lt,St*Bt,St/$.locationSize*ot*Bt,tt)}}else if(rt!==void 0){let lt=rt[ht];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv($.location,lt);break;case 3:i.vertexAttrib3fv($.location,lt);break;case 4:i.vertexAttrib4fv($.location,lt);break;default:i.vertexAttrib1fv($.location,lt)}}}}S()}function v(){w();for(let I in n){let L=n[I];for(let V in L){let F=L[V];for(let W in F){let nt=F[W];for(let rt in nt)h(nt[rt].object),delete nt[rt];delete F[W]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let V in L){let F=L[V];for(let W in F){let nt=F[W];for(let rt in nt)h(nt[rt].object),delete nt[rt];delete F[W]}}delete n[I.id]}function T(I){for(let L in n){let V=n[L];for(let F in V){let W=V[F];if(W[I.id]===void 0)continue;let nt=W[I.id];for(let rt in nt)h(nt[rt].object),delete nt[rt];delete W[I.id]}}}function M(I){for(let L in n){let V=n[L],F=I.isInstancedMesh===!0?I.id:0,W=V[F];if(W!==void 0){for(let nt in W){let rt=W[nt];for(let ht in rt)h(rt[ht].object),delete rt[ht];delete W[nt]}delete V[F],Object.keys(V).length===0&&delete n[L]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:f,disableUnusedAttributes:S}}function F0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function O0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==$e&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let M=T===Re&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Be&&T!==un&&!M&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:x,maxSamples:v,samples:y}}function z0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Qe,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){e=h(m,u,0)},this.setState=function(m,u,p){let _=m.clippingPlanes,g=m.clipIntersection,f=m.clipShadows,d=i.get(m);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let S=r?0:n,A=S*4,x=d.clippingState||null;l.value=x,x=h(_,u,A,p);for(let v=0;v!==A;++v)x[v]=e[v];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,u,p,_){let g=m!==null?m.length:0,f=null;if(g!==0){if(f=l.value,_!==!0||f===null){let d=p+g*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<d)&&(f=new Float32Array(d));for(let A=0,x=p;A!==g;++A,x+=4)a.copy(m[A]).applyMatrix4(S,o),a.normal.toArray(f,x),f[x+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}var Es=4,B0=6,k0=20,V0=256,Dr=new hi,Mu=new qt,yc=null,Mc=0,Sc=0,bc=!1,G0=new H,Bi=new H,As=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=G0}=r;yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,Mc,Sc),this._renderer.xr.enabled=bc,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Re,format:$e,colorSpace:qs,depthBuffer:!1},s=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=H0(r)),this._blurMaterial=X0(r,t,e),this._ggxMaterial=W0(r,t,e)}return s}_compileMaterial(t){let e=new ue(new We,t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,u=m.autoClear,p=m.toneMapping;m.getClearColor(Mu),m.toneMapping=yn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new ln,new js({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,f=g.material,d=!1,S=t.background;S?S.isColor&&(f.color.copy(S),t.background=null,d=!0):(f.color.copy(Mu),d=!0);for(let A=0;A<6;A++){let x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let v=this._cubeSize;ws(s,x*v,A>2?v:0,v,v),m.setRenderTarget(s),d&&m.render(g,l),m.render(t,l)}m.toneMapping=p,m.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===pi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),u=c*1.25,p=m*u,{_lodMax:_}=this,g=this._sizeLods[n],f=3*g*(n>_-Es?n-_+Es:0),d=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,ws(r,f,d,3*g,2*g),s.setRenderTarget(r),s.render(o,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ws(t,f,d,3*g,2*g),s.setRenderTarget(t),s.render(o,Dr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-Es?s-this._lodMax+Es:0),u=4*(this._cubeSize-h);ws(e,m,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Dr)}};function H0(i){let t=[],e=[],n=i,s=i-Es+1+B0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,u=6,p=3,_=new Float32Array(p*u*m),g=new Float32Array(p*u*m);for(let d=0;d<m;d++){let S=d%3*2/3-1,A=d>2?0:-1,x=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];_.set(x,p*u*d);for(let v=0;v<u;v++){let y=h[v*2]*2-1,T=h[v*2+1]*2-1;d===0?Bi.set(1,T,y):d===1?Bi.set(-y,1,-T):d===2?Bi.set(-y,T,1):d===3?Bi.set(-1,T,-y):d===4?Bi.set(-y,-1,T):Bi.set(y,T,-1),Bi.toArray(g,(d*u+v)*p)}}let f=new We;f.setAttribute("position",new tn(_,p)),f.setAttribute("outputDirection",new tn(g,p)),e.push(new ue(f,null)),n>Es&&n--}return{lodMeshes:e,sizeLods:t}}function Su(i,t,e){let n=new Me(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function W0(i,t,e){return new _e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Se,depthTest:!1,depthWrite:!1})}function X0(i,t,e){return new _e({name:"SphericalGaussianBlur",defines:{SAMPLES:k0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Se,depthTest:!1,depthWrite:!1})}function bu(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Se,depthTest:!1,depthWrite:!1})}function wu(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Se,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Go=class extends Me{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Se});r.uniforms.tEquirect.value=e;let a=new ue(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=Le),new qa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function q0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ja||p===ja)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let g=new Go(_.height);return g.fromEquirectangularTexture(i,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,_=p===Ja||p===ja,g=p===pi||p===Oi;if(_||g){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new As(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let S=u.image;return _&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new As(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,p){return p===Ja?u.mapping=pi:p===ja&&(u.mapping=Oi),u}function l(u){let p=0,_=6;for(let g=0;g<_;g++)u[g]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Y0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function $0(i,t,e,n){let s={},r=new WeakMap;function a(m){let u=m.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(m,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(m){let u=m.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(m){let u=[],p=m.index,_=m.attributes.position,g=0;if(_===void 0)return;if(p!==null){let S=p.array;g=p.version;for(let A=0,x=S.length;A<x;A+=3){let v=S[A+0],y=S[A+1],T=S[A+2];u.push(v,y,y,T,T,v)}}else{let S=_.array;g=_.version;for(let A=0,x=S.length/3-1;A<x;A+=3){let v=A+0,y=A+1,T=A+2;u.push(v,y,y,T,T,v)}}let f=new(_.count>=65535?Js:Ks)(u,1);f.version=g;let d=r.get(m);d&&t.remove(d),r.set(m,f)}function h(m){let u=r.get(m);if(u){let p=m.index;p!==null&&u.version<p.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function Z0(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*a),e.update(u,n,1)}function c(m,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,m*a,p),e.update(u,n,p))}function h(m,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,p);let g=0;for(let f=0;f<p;f++)g+=u[f];e.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function K0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,t,e){let n=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==m){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),g===!0&&(A=3);let x=o.attributes.position.count*A,v=1;x>t.maxTextureSize&&(v=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let y=new Float32Array(x*v*4*m),T=new Zs(y,x,v,m);T.type=un,T.needsUpdate=!0;let M=A*4;for(let R=0;R<m;R++){let I=f[R],L=d[R],V=S[R],F=x*v*4*R;for(let W=0;W<I.count;W++){let nt=W*M;p===!0&&(s.fromBufferAttribute(I,W),y[F+nt+0]=s.x,y[F+nt+1]=s.y,y[F+nt+2]=s.z,y[F+nt+3]=0),_===!0&&(s.fromBufferAttribute(L,W),y[F+nt+4]=s.x,y[F+nt+5]=s.y,y[F+nt+6]=s.z,y[F+nt+7]=0),g===!0&&(s.fromBufferAttribute(V,W),y[F+nt+8]=s.x,y[F+nt+9]=s.y,y[F+nt+10]=s.z,y[F+nt+11]=V.itemSize===4?s.w:1)}}u={count:m,texture:T,size:new Ft(x,v)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function j0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,u=t.get(c,m);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Q0={[vr]:"LINEAR_TONE_MAPPING",[yr]:"REINHARD_TONE_MAPPING",[Mr]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[wr]:"AGX_TONE_MAPPING",[Fi]:"NEUTRAL_TONE_MAPPING",[br]:"CUSTOM_TONE_MAPPING"};function tg(i,t,e,n,s,r){let a=new Me(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new We;c.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ge([0,2,0,0,2,0],2));let h=new xs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ue(c,h),u=new hi(-1,1,1,-1,0,1),p=null,_=null,g=!1,f,d=null,S=[],A=!1;this.setSize=function(x,v){a.setSize(x,v),o!==null&&o.setSize(x,v),l!==null&&l.setSize(x,v);for(let y=0;y<S.length;y++){let T=S[y];T.setSize&&T.setSize(x,v)}},this.setEffects=function(x){S=x,A=S.length>0&&S[0].isRenderPass===!0;let v=a.width,y=a.height;S.length>0&&o===null&&(o=new Me(v,y,{type:Re,depthBuffer:!1,stencilBuffer:!1}),l=new Me(v,y,{type:Re,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<S.length;T++){let M=S[T];M.setSize&&M.setSize(v,y)}},this.begin=function(x,v){if(g||x.toneMapping===yn&&S.length===0)return!1;if(d=v,v!==null){let y=v.width,T=v.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return A===!1&&x.setRenderTarget(a),f=x.toneMapping,x.toneMapping=yn,!0},this.hasRenderPass=function(){return A},this.end=function(x,v){x.toneMapping=f,g=!0;let y=a,T=o;for(let M=0;M<S.length;M++){let w=S[M];w.enabled!==!1&&(w.render(x,T,y,v),w.needsSwap!==!1&&(y=T,T=T===o?l:o))}if(p!==x.outputColorSpace||_!==x.toneMapping){p=x.outputColorSpace,_=x.toneMapping,h.defines={},Qt.getTransfer(p)===re&&(h.defines.SRGB_TRANSFER="");let M=Q0[_];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(d),x.render(m,u),d=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wu=new Ye,Tc=new In(1,1),Xu=new Zs,qu=new La,Yu=new er,Eu=[],Tu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xo(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),Te(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Te(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Te(e,n)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=e.isReversedDepthBuffer()?Bo:zo,r=Tc):r=Wu,e.setTexture2D(t||r,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yu,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(i,t){i.uniform1fv(this.addr,t)}function Sg(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function bg(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function wg(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ag(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cg(i,t){i.uniform1iv(this.addr,t)}function Rg(i,t){i.uniform2iv(this.addr,t)}function Pg(i,t){i.uniform3iv(this.addr,t)}function Ig(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Dg(i,t){i.uniform2uiv(this.addr,t)}function Ng(i,t){i.uniform3uiv(this.addr,t)}function Ug(i,t){i.uniform4uiv(this.addr,t)}function Fg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tc:a=Wu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Og(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qu,r[a])}function zg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yu,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xu,r[a])}function kg(i){switch(i){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return wg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Bg}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function Vg(i,t,e){let n=i.name,s=n.length;for(wc.lastIndex=0;;){let r=wc.exec(n),a=wc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pu(e,c===void 0?new Ac(o,i,t):new Cc(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new Rc(o),Pu(e,m)),e=m}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Vg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Gg=37297,Hg=0;function Wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Lu=new Yt;function Xg(i){Qt._getMatrix(Lu,Qt.workingColorSpace,i);let t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Ys:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wg(i.getShaderSource(t),o)}else return r}function qg(i,t){let e=Xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Yg={[vr]:"Linear",[yr]:"Reinhard",[Mr]:"Cineon",[Sr]:"ACESFilmic",[wr]:"AgX",[Fi]:"Neutral",[br]:"Custom"};function $g(i,t){let e=Yg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new H;function Zg(){Qt.getLuminanceCoefficients(Vo);let i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Jg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ur(i){return i!==""}function Nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(Qg,ex)}var tx=new Map;function ex(i,t){let e=Jt[t];if(e===void 0){let n=tx.get(t);if(n!==void 0)e=Jt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pc(e)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(i){return i.replace(nx,ix)}function ix(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var sx={[Ni]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function rx(i){return sx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ax={[pi]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE_UV"};function ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ax[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lx={[Oi]:"ENVMAP_MODE_REFRACTION"};function cx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[Ka]:"ENVMAP_BLENDING_MULTIPLY",[eu]:"ENVMAP_BLENDING_MIX",[nu]:"ENVMAP_BLENDING_ADD"};function ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hx[i.combine]||"ENVMAP_BLENDING_NONE"}function dx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=rx(e),c=ox(e),h=cx(e),m=ux(e),u=dx(e),p=Kg(e),_=Jg(r),g=s.createProgram(),f,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ur).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(f=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==yn?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),a=Pc(a),a=Nu(a,e),a=Uu(a,e),o=Pc(o),o=Nu(o,e),o=Uu(o,e),a=Fu(a),o=Fu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=S+f+a,x=S+d+o,v=Iu(s,s.VERTEX_SHADER,A),y=Iu(s,s.FRAGMENT_SHADER,x);s.attachShader(g,v),s.attachShader(g,y),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",V=s.getShaderInfoLog(v)||"",F=s.getShaderInfoLog(y)||"",W=L.trim(),nt=V.trim(),rt=F.trim(),ht=!0,$=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ht=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,y);else{let at=Du(s,v,"vertex"),lt=Du(s,y,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+at+`
`+lt)}else W!==""?Ht("WebGLProgram: Program Info Log:",W):(nt===""||rt==="")&&($=!1);$&&(I.diagnostics={runnable:ht,programLog:W,vertexShader:{log:nt,prefix:f},fragmentShader:{log:rt,prefix:d}})}s.deleteShader(v),s.deleteShader(y),M=new Ts(s,g),w=jg(s,g)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,Gg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=y,this}var px=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lc(t),e.set(t,n)),n}},Lc=class{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}};function mx(i){return i===xi||i===Ir||i===Lr}function gx(i,t,e,n,s,r){let a=new fs,o=new Ic,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,w,R,I,L,V){let F=I.fog,W=L.geometry,nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,rt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ht=t.get(M.envMap||nt,rt),$=ht&&ht.mapping===Er?ht.image.height:null,at=p[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&Ht("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=lt!==void 0?lt.length:0,Et=0;W.morphAttributes.position!==void 0&&(Et=1),W.morphAttributes.normal!==void 0&&(Et=2),W.morphAttributes.color!==void 0&&(Et=3);let Zt,Ct,Bt,tt;if(at){let de=Fn[at];Zt=de.vertexShader,Ct=de.fragmentShader}else{Zt=M.vertexShader,Ct=M.fragmentShader;let de=o.getVertexShaderStage(M),ae=o.getFragmentShaderStage(M);o.update(M,de,ae),Bt=de.id,tt=ae.id}let ot=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Lt=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Wt=!!M.map,se=!!M.matcap,X=!!ht,dt=!!M.aoMap,gt=!!M.lightMap,pt=!!M.bumpMap&&M.wireframe===!1,Ot=!!M.normalMap,Gt=!!M.displacementMap,z=!!M.emissiveMap,et=!!M.metalnessMap,yt=!!M.roughnessMap,N=M.anisotropy>0,kt=M.clearcoat>0,$t=M.dispersion>0,P=M.retroreflectivity>0,b=M.iridescence>0,k=M.sheen>0,Y=M.transmission>0,st=N&&!!M.anisotropyMap,C=kt&&!!M.clearcoatMap,U=kt&&!!M.clearcoatNormalMap,D=kt&&!!M.clearcoatRoughnessMap,O=b&&!!M.iridescenceMap,Z=b&&!!M.iridescenceThicknessMap,j=k&&!!M.sheenColorMap,q=k&&!!M.sheenRoughnessMap,Q=!!M.specularMap,ut=!!M.specularColorMap,mt=!!M.specularIntensityMap,Rt=Y&&!!M.transmissionMap,B=Y&&!!M.thicknessMap,_t=!!M.gradientMap,ct=!!M.alphaMap,Mt=M.alphaTest>0,At=!!M.alphaHash,ft=!!M.extensions,Vt=yn;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Ut={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:Ct,defines:M.defines,customVertexShaderID:Bt,customFragmentShaderID:tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&L.instanceColor!==null,instancingMorph:Lt&&L.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:se,envMap:X,envMapMode:X&&ht.mapping,envMapCubeUVHeight:$,aoMap:dt,lightMap:gt,bumpMap:pt,normalMap:Ot,displacementMap:Gt,emissiveMap:z,normalMapObjectSpace:Ot&&M.normalMapType===ru,normalMapTangentSpace:Ot&&M.normalMapType===Ss,packedNormalMap:Ot&&M.normalMapType===Ss&&mx(M.normalMap.format),metalnessMap:et,roughnessMap:yt,anisotropy:N,anisotropyMap:st,clearcoat:kt,clearcoatMap:C,clearcoatNormalMap:U,clearcoatRoughnessMap:D,dispersion:$t,retroreflection:P,iridescence:b,iridescenceMap:O,iridescenceThicknessMap:Z,sheen:k,sheenColorMap:j,sheenRoughnessMap:q,specularMap:Q,specularColorMap:ut,specularIntensityMap:mt,transmission:Y,transmissionMap:Rt,thicknessMap:B,gradientMap:_t,opaque:M.transparent===!1&&M.blending===ys&&M.alphaToCoverage===!1,alphaMap:ct,alphaTest:Mt,alphaHash:At,combine:M.combine,mapUv:Wt&&_(M.map.channel),aoMapUv:dt&&_(M.aoMap.channel),lightMapUv:gt&&_(M.lightMap.channel),bumpMapUv:pt&&_(M.bumpMap.channel),normalMapUv:Ot&&_(M.normalMap.channel),displacementMapUv:Gt&&_(M.displacementMap.channel),emissiveMapUv:z&&_(M.emissiveMap.channel),metalnessMapUv:et&&_(M.metalnessMap.channel),roughnessMapUv:yt&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:C&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:U&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(M.sheenRoughnessMap.channel),specularMapUv:Q&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:mt&&_(M.specularIntensityMap.channel),transmissionMapUv:Rt&&_(M.transmissionMap.channel),thicknessMapUv:B&&_(M.thicknessMap.channel),alphaMapUv:ct&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ot||N),vertexNormals:!!W.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(Wt||ct),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||W.attributes.normal===void 0&&Ot===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:z&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Dn,flipSided:M.side===Ne,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function f(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)w.push(R),w.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(d(w,M),S(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function d(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function A(M){let w=p[M.type],R;if(w){let I=Fn[w];R=dn.clone(I.uniforms)}else R=M.uniforms;return R}function x(M,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new fx(i,w,M,s),c.push(R),h.set(w,R)),R}function v(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function y(M){o.remove(M)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:A,acquireProgram:x,releaseProgram:v,releaseShaderCache:y,programs:c,dispose:T}}function xx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _x(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,g,f,d){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:f,group:d},i[t]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=_,S.materialVariant=a(u),S.groupOrder=g,S.renderOrder=u.renderOrder,S.z=f,S.group=d),t++,S}function l(u,p,_,g,f,d,S){S.reversedDepth===!0&&(f=-f);let A=o(u,p,_,g,f,d);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(u,p,_,g,f,d){let S=o(u,p,_,g,f,d);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,p){e.length>1&&e.sort(u||_x),n.length>1&&n.sort(p||zu),s.length>1&&s.sort(p||zu)}function m(){for(let u=t,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function vx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Bu,i.set(n,[a])):s>=r.length?(a=new Bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function Mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sx=0;function bx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wx(i){let t=new yx,e=Mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new ie,a=new ie;function o(c){let h=0,m=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,_=0,g=0,f=0,d=0,S=0,A=0,x=0,v=0,y=0,T=0,M=0,w=0,R=0;c.sort(bx);for(let L=0,V=c.length;L<V;L++){let F=c[L],W=F.color,nt=F.intensity,rt=F.distance,ht=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===xi?ht=F.shadow.map.texture:ht=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=W.r*nt,m+=W.g*nt,u+=W.b*nt;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],nt);R++}else if(F.isSunLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let at=F.shadow,lt=e.get(F);lt.shadowIntensity=at.intensity,lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),n.sunShadow[_]=lt,n.sunShadowMap[_]=ht;let St=at.getViewportCount();for(let Et=0;Et<St;Et++)n.sunShadowMatrix[g+Et]=at.getMatrix(Et),n.sunShadowCascade[g+Et]=at._cascadeData[Et];g+=St,_++}n.sun[p]=$,p++}else if(F.isDirectionalLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let at=F.shadow,lt=e.get(F);lt.shadowIntensity=at.intensity,lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,n.directionalShadow[f]=lt,n.directionalShadowMap[f]=ht,n.directionalShadowMatrix[f]=F.shadow.matrix,v++}n.directional[f]=$,f++}else if(F.isSpotLight){let $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(W).multiplyScalar(nt),$.distance=rt,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[S]=$;let at=F.shadow;if(F.map&&(n.spotLightMap[M]=F.map,M++,at.updateMatrices(F),F.castShadow&&w++),n.spotLightMatrix[S]=at.matrix,F.castShadow){let lt=e.get(F);lt.shadowIntensity=at.intensity,lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,n.spotShadow[S]=lt,n.spotShadowMap[S]=ht,T++}S++}else if(F.isRectAreaLight){let $=t.get(F);$.color.copy(W).multiplyScalar(nt),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=$,A++}else if(F.isPointLight){let $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){let at=F.shadow,lt=e.get(F);lt.shadowIntensity=at.intensity,lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,lt.shadowCameraNear=at.camera.near,lt.shadowCameraFar=at.camera.far,n.pointShadow[d]=lt,n.pointShadowMap[d]=ht,n.pointShadowMatrix[d]=F.shadow.matrix,y++}n.point[d]=$,d++}else if(F.isHemisphereLight){let $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(nt),$.groundColor.copy(F.groundColor).multiplyScalar(nt),n.hemi[x]=$,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let I=n.hash;(I.sunLength!==p||I.directionalLength!==f||I.pointLength!==d||I.spotLength!==S||I.rectAreaLength!==A||I.hemiLength!==x||I.numSunShadows!==_||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==T||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=f,n.spot.length=S,n.rectArea.length=A,n.point.length=d,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.sunLength=p,I.directionalLength=f,I.pointLength=d,I.spotLength=S,I.rectAreaLength=A,I.hemiLength=x,I.numSunShadows=_,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=T,I.numSpotMaps=M,I.numLightProbes=R,n.version=Sx++)}function l(c,h){let m=0,u=0,p=0,_=0,g=0,f=0,d=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let x=c[S];if(x.isSunLight){let v=n.sun[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(d),m++}else if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),u++}else if(x.isSpotLight){let v=n.spot[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),_++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(d),a.identity(),r.copy(x.matrixWorld),r.premultiply(d),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){let v=n.hemi[f];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function ku(i){let t=new wx(i),e=[],n=[],s=[];function r(u){m.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ex(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ku(i),t.set(s,[o])):r>=a.length?(o=new ku(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`,Cx=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Rx=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Vu=new ie,Nr=new H,Ec=new H;function Px(i,t,e){let n=new ms,s=new Ft,r=new Ft,a=new xe,o=new Na,l=new Ua,c={},h=e.maxTextureSize,m={[fi]:Ne,[Ne]:fi,[Dn]:Dn},u=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new We;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ue(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ni;let d=this.type;this.render=function(y,T,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;this.type===kh&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ni);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Se),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=d!==this.type;V&&T.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(W=>W.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,W=y.length;F<W;F++){let nt=y[F],rt=nt.shadow;if(rt===void 0){Ht("WebGLShadowMap:",nt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let ht=rt.getFrameExtents();s.multiply(ht),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,rt.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=$,rt.map===null||V===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===vs){if(nt.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Me(s.x,s.y,{format:xi,type:Re,minFilter:Le,magFilter:Le,generateMipmaps:!1}),rt.map.texture.name=nt.name+".shadowMap",rt.map.depthTexture=new In(s.x,s.y,un),rt.map.depthTexture.name=nt.name+".shadowMapDepth",rt.map.depthTexture.format=Cn,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=ye,rt.map.depthTexture.magFilter=ye}else nt.isPointLight?(rt.map=new Go(s.x),rt.map.depthTexture=new Da(s.x,Mn)):(rt.map=new Me(s.x,s.y),rt.map.depthTexture=new In(s.x,s.y,Mn)),rt.map.depthTexture.name=nt.name+".shadowMap",rt.map.depthTexture.format=Cn,this.type===Ni?(rt.map.depthTexture.compareFunction=$?Bo:zo,rt.map.depthTexture.minFilter=Le,rt.map.depthTexture.magFilter=Le):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=ye,rt.map.depthTexture.magFilter=ye);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let at=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();nt.isPointLight!==!0&&rt.updateMatrices(nt,M);for(let lt=0;lt<at;lt++){let St=rt.getCamera(lt);if(nt.isPointLight){let Et=rt.camera,Zt=rt.matrix,Ct=nt.distance||Et.far;Ct!==Et.far&&(Et.far=Ct,Et.updateProjectionMatrix()),Nr.setFromMatrixPosition(nt.matrixWorld),Et.position.copy(Nr),Ec.copy(Et.position),Ec.add(Cx[lt]),Et.up.copy(Rx[lt]),Et.lookAt(Ec),Et.updateMatrixWorld(),Zt.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Vu.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Vu,Et.coordinateSystem,Et.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(rt.map),i.clear());let Et=rt.getViewport(lt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),L.viewport(a)}n=rt.getFrustum(lt),x(T,M,St,nt,this.type)}rt.isPointLightShadow!==!0&&this.type===vs&&S(rt,M),rt.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(w,R,I)};function S(y,T){let M=t.update(g);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new Me(s.x,s.y,{format:xi,type:Re}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,M,u,g,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,M,p,g,null)}function A(y,T,M,w){let R=null,I=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,V=T.uuid,F=c[L];F===void 0&&(F={},c[L]=F);let W=F[V];W===void 0&&(W=R.clone(),F[V]=W,T.addEventListener("dispose",v)),R=W}if(R.visible=T.visible,R.wireframe=T.wireframe,w===vs?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:m[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=M}return R}function x(y,T,M,w,R){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===vs)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);let V=t.update(y),F=y.material;if(Array.isArray(F)){let W=V.groups;for(let nt=0,rt=W.length;nt<rt;nt++){let ht=W[nt],$=F[ht.materialIndex];if($&&$.visible){let at=A(y,$,w,R);y.onBeforeShadow(i,y,T,M,V,at,ht),i.renderBufferDirect(M,null,V,at,y,ht),y.onAfterShadow(i,y,T,M,V,at,ht)}}}else if(F.visible){let W=A(y,F,w,R);y.onBeforeShadow(i,y,T,M,V,W,null),i.renderBufferDirect(M,null,V,W,y,null),y.onAfterShadow(i,y,T,M,V,W,null)}}let L=y.children;for(let V=0,F=L.length;V<F;V++)x(L[V],T,M,w,R)}function v(y){y.target.removeEventListener("dispose",v);for(let M in c){let w=c[M],R=y.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Ix(i,t){function e(){let B=!1,_t=new xe,ct=null,Mt=new xe(0,0,0,0);return{setMask:function(At){ct!==At&&!B&&(i.colorMask(At,At,At,At),ct=At)},setLocked:function(At){B=At},setClear:function(At,ft,Vt,Ut,de){de===!0&&(At*=Ut,ft*=Ut,Vt*=Ut),_t.set(At,ft,Vt,Ut),Mt.equals(_t)===!1&&(i.clearColor(At,ft,Vt,Ut),Mt.copy(_t))},reset:function(){B=!1,ct=null,Mt.set(-1,0,0,0)}}}function n(){let B=!1,_t=!1,ct=null,Mt=null,At=null;return{setReversed:function(ft){if(_t!==ft){let Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),_t=ft;let Ut=At;At=null,this.setClear(Ut)}},getReversed:function(){return _t},setTest:function(ft){ft?ot(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ft){ct!==ft&&!B&&(i.depthMask(ft),ct=ft)},setFunc:function(ft){if(_t&&(ft=xu[ft]),Mt!==ft){switch(ft){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=ft}},setLocked:function(ft){B=ft},setClear:function(ft){At!==ft&&(At=ft,_t&&(ft=1-ft),i.clearDepth(ft))},reset:function(){B=!1,ct=null,Mt=null,At=null,_t=!1}}}function s(){let B=!1,_t=null,ct=null,Mt=null,At=null,ft=null,Vt=null,Ut=null,de=null;return{setTest:function(ae){B||(ae?ot(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ae){_t!==ae&&!B&&(i.stencilMask(ae),_t=ae)},setFunc:function(ae,pn,Sn){(ct!==ae||Mt!==pn||At!==Sn)&&(i.stencilFunc(ae,pn,Sn),ct=ae,Mt=pn,At=Sn)},setOp:function(ae,pn,Sn){(ft!==ae||Vt!==pn||Ut!==Sn)&&(i.stencilOp(ae,pn,Sn),ft=ae,Vt=pn,Ut=Sn)},setLocked:function(ae){B=ae},setClear:function(ae){de!==ae&&(i.clearStencil(ae),de=ae)},reset:function(){B=!1,_t=null,ct=null,Mt=null,At=null,ft=null,Vt=null,Ut=null,de=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},u={},p=new WeakMap,_=[],g=null,f=!1,d=null,S=null,A=null,x=null,v=null,y=null,T=null,M=new qt(0,0,0),w=0,R=!1,I=null,L=null,V=null,F=null,W=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,ht=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),rt=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),rt=ht>=2);let at=null,lt={},St=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Zt=new xe().fromArray(St),Ct=new xe().fromArray(Et);function Bt(B,_t,ct,Mt){let At=new Uint8Array(4),ft=i.createTexture();i.bindTexture(B,ft),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<ct;Vt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(_t+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ft}let tt={};tt[i.TEXTURE_2D]=Bt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(ls),pt(!1),Ot($l),ot(i.CULL_FACE),dt(Se);function ot(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function xt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Lt(B,_t){return u[B]!==_t?(i.bindFramebuffer(B,_t),u[B]=_t,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function vt(B,_t){let ct=_,Mt=!1;if(B){ct=p.get(_t),ct===void 0&&(ct=[],p.set(_t,ct));let At=B.textures;if(ct.length!==At.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Vt=At.length;ft<Vt;ft++)ct[ft]=i.COLOR_ATTACHMENT0+ft;ct.length=At.length,Mt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ct)}function Wt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let se={[hn]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Gh]:i.FUNC_REVERSE_SUBTRACT};se[Hh]=i.MIN,se[Wh]=i.MAX;let X={[Ui]:i.ZERO,[Xh]:i.ONE,[qh]:i.SRC_COLOR,[jl]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[_r]:i.DST_COLOR,[xr]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[$h]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(B,_t,ct,Mt,At,ft,Vt,Ut,de,ae){if(B===Se){f===!0&&(xt(i.BLEND),f=!1);return}if(f===!1&&(ot(i.BLEND),f=!0),B!==Za){if(B!==d||ae!==R){if((S!==hn||v!==hn)&&(i.blendEquation(i.FUNC_ADD),S=hn,v=hn),ae)switch(B){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",B);break}else switch(B){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",B);break}A=null,x=null,y=null,T=null,M.set(0,0,0),w=0,d=B,R=ae}return}At=At||_t,ft=ft||ct,Vt=Vt||Mt,(_t!==S||At!==v)&&(i.blendEquationSeparate(se[_t],se[At]),S=_t,v=At),(ct!==A||Mt!==x||ft!==y||Vt!==T)&&(i.blendFuncSeparate(X[ct],X[Mt],X[ft],X[Vt]),A=ct,x=Mt,y=ft,T=Vt),(Ut.equals(M)===!1||de!==w)&&(i.blendColor(Ut.r,Ut.g,Ut.b,de),M.copy(Ut),w=de),d=B,R=!1}function gt(B,_t){B.side===Dn?xt(i.CULL_FACE):ot(i.CULL_FACE);let ct=B.side===Ne;_t&&(ct=!ct),pt(ct),B.blending===ys&&B.transparent===!1?dt(Se):dt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Mt=B.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function pt(B){I!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),I=B)}function Ot(B){B!==zh?(ot(i.CULL_FACE),B!==L&&(B===$l?i.cullFace(i.BACK):B===Bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=B}function Gt(B){B!==V&&(rt&&i.lineWidth(B),V=B)}function z(B,_t,ct){B?(ot(i.POLYGON_OFFSET_FILL),(F!==_t||W!==ct)&&(F=_t,W=ct,a.getReversed()&&(_t=-_t),i.polygonOffset(_t,ct))):xt(i.POLYGON_OFFSET_FILL)}function et(B){B?ot(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function yt(B){B===void 0&&(B=i.TEXTURE0+nt-1),at!==B&&(i.activeTexture(B),at=B)}function N(B,_t,ct){ct===void 0&&(at===null?ct=i.TEXTURE0+nt-1:ct=at);let Mt=lt[ct];Mt===void 0&&(Mt={type:void 0,texture:void 0},lt[ct]=Mt),(Mt.type!==B||Mt.texture!==_t)&&(at!==ct&&(i.activeTexture(ct),at=ct),i.bindTexture(B,_t||tt[B]),Mt.type=B,Mt.texture=_t)}function kt(){let B=lt[at];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function b(){try{i.texSubImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function k(){try{i.texSubImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function C(){try{i.texStorage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function U(){try{i.texStorage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function D(){try{i.texImage2D(...arguments)}catch(B){Xt("WebGLState:",B)}}function O(){try{i.texImage3D(...arguments)}catch(B){Xt("WebGLState:",B)}}function Z(B){return m[B]!==void 0?m[B]:i.getParameter(B)}function j(B,_t){m[B]!==_t&&(i.pixelStorei(B,_t),m[B]=_t)}function q(B){Zt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Zt.copy(B))}function Q(B){Ct.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ct.copy(B))}function ut(B,_t){let ct=c.get(_t);ct===void 0&&(ct=new WeakMap,c.set(_t,ct));let Mt=ct.get(B);Mt===void 0&&(Mt=i.getUniformBlockIndex(_t,B.name),ct.set(B,Mt))}function mt(B,_t){let Mt=c.get(_t).get(B);l.get(_t)!==Mt&&(i.uniformBlockBinding(_t,Mt,B.__bindingPointIndex),l.set(_t,Mt))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},at=null,lt={},u={},p=new WeakMap,_=[],g=null,f=!1,d=null,S=null,A=null,x=null,v=null,y=null,T=null,M=new qt(0,0,0),w=0,R=!1,I=null,L=null,V=null,F=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:xt,bindFramebuffer:Lt,drawBuffers:vt,useProgram:Wt,setBlending:dt,setMaterial:gt,setFlipSided:pt,setCullFace:Ot,setLineWidth:Gt,setPolygonOffset:z,setScissorTest:et,activeTexture:yt,bindTexture:N,unbindTexture:kt,compressedTexImage2D:$t,compressedTexImage3D:P,texImage2D:D,texImage3D:O,pixelStorei:j,getParameter:Z,updateUBOMapping:ut,uniformBlockBinding:mt,texStorage2D:C,texStorage3D:U,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:st,scissor:q,viewport:Q,reset:Rt}}function Lx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,m=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return _?new OffscreenCanvas(P,b):$s("canvas")}function f(P,b,k){let Y=1,st=$t(P);if((st.width>k||st.height>k)&&(Y=k/Math.max(st.width,st.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let C=Math.floor(Y*st.width),U=Math.floor(Y*st.height);u===void 0&&(u=g(C,U));let D=b?g(C,U):u;return D.width=C,D.height=U,D.getContext("2d").drawImage(P,0,0,C,U),Ht("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+C+"x"+U+")."),D}else return"data"in P&&Ht("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function d(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,b,k,Y,st,C=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let U;Y&&(U=t.get("EXT_texture_norm16"),U||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=b;if(b===i.RED&&(k===i.FLOAT&&(D=i.R32F),k===i.HALF_FLOAT&&(D=i.R16F),k===i.UNSIGNED_BYTE&&(D=i.R8),k===i.UNSIGNED_SHORT&&U&&(D=U.R16_EXT),k===i.SHORT&&U&&(D=U.R16_SNORM_EXT)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.R8UI),k===i.UNSIGNED_SHORT&&(D=i.R16UI),k===i.UNSIGNED_INT&&(D=i.R32UI),k===i.BYTE&&(D=i.R8I),k===i.SHORT&&(D=i.R16I),k===i.INT&&(D=i.R32I)),b===i.RG&&(k===i.FLOAT&&(D=i.RG32F),k===i.HALF_FLOAT&&(D=i.RG16F),k===i.UNSIGNED_BYTE&&(D=i.RG8),k===i.UNSIGNED_SHORT&&U&&(D=U.RG16_EXT),k===i.SHORT&&U&&(D=U.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.RG8UI),k===i.UNSIGNED_SHORT&&(D=i.RG16UI),k===i.UNSIGNED_INT&&(D=i.RG32UI),k===i.BYTE&&(D=i.RG8I),k===i.SHORT&&(D=i.RG16I),k===i.INT&&(D=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.RGB8UI),k===i.UNSIGNED_SHORT&&(D=i.RGB16UI),k===i.UNSIGNED_INT&&(D=i.RGB32UI),k===i.BYTE&&(D=i.RGB8I),k===i.SHORT&&(D=i.RGB16I),k===i.INT&&(D=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(D=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(D=i.RGBA16UI),k===i.UNSIGNED_INT&&(D=i.RGBA32UI),k===i.BYTE&&(D=i.RGBA8I),k===i.SHORT&&(D=i.RGBA16I),k===i.INT&&(D=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_SHORT&&U&&(D=U.RGB16_EXT),k===i.SHORT&&U&&(D=U.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(D=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(D=i.R11F_G11F_B10F)),b===i.RGBA){let O=C?Ys:Qt.getTransfer(st);k===i.FLOAT&&(D=i.RGBA32F),k===i.HALF_FLOAT&&(D=i.RGBA16F),k===i.UNSIGNED_BYTE&&(D=O===re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&U&&(D=U.RGBA16_EXT),k===i.SHORT&&U&&(D=U.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(D=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(D=i.RGB5_A1)}return(D===i.R16F||D===i.R32F||D===i.RG16F||D===i.RG32F||D===i.RGBA16F||D===i.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function v(P,b){let k;return P?b===null||b===Mn||b===gi?k=i.DEPTH24_STENCIL8:b===un?k=i.DEPTH32F_STENCIL8:b===Ms&&(k=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mn||b===gi?k=i.DEPTH_COMPONENT24:b===un?k=i.DEPTH_COMPONENT32F:b===Ms&&(k=i.DEPTH_COMPONENT16),k}function y(P,b){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==ye&&P.minFilter!==Le?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){let b=P.target;b.removeEventListener("dispose",T),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&m.delete(b)}function M(P){let b=P.target;b.removeEventListener("dispose",M),I(b)}function w(P){let b=n.get(P);if(b.__webglInit===void 0)return;let k=P.source,Y=p.get(k);if(Y){let st=Y[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(P),Object.keys(Y).length===0&&p.delete(k)}n.remove(P)}function R(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let k=P.source,Y=p.get(k);delete Y[b.__cacheKey],a.memory.textures--}function I(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let st=0;st<b.__webglFramebuffer[Y].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[Y][st]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=P.textures;for(let Y=0,st=k.length;Y<st;Y++){let C=n.get(k[Y]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(P)}let L=0;function V(){L=0}function F(){return L}function W(P){L=P}function nt(){let P=L;return P>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function rt(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ht(P,b){let k=n.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let Y=P.image;if(Y===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(k,P,b);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function $(P,b){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){xt(k,P,b);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function at(P,b){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){xt(k,P,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function lt(P,b){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Lt(k,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let St={[An]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},Et={[ye]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Zt={[ou]:i.NEVER,[du]:i.ALWAYS,[lu]:i.LESS,[zo]:i.LEQUAL,[cu]:i.EQUAL,[Bo]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function Ct(P,b){if(b.type===un&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Le||b.magFilter===Qa||b.magFilter===Tr||b.magFilter===mi||b.minFilter===Le||b.minFilter===Qa||b.minFilter===Tr||b.minFilter===mi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,St[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,St[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,St[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Et[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ye||b.minFilter!==Tr&&b.minFilter!==mi||b.type===un&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Bt(P,b){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));let Y=b.source,st=p.get(Y);st===void 0&&(st={},p.set(Y,st));let C=rt(b);if(C!==P.__cacheKey){st[C]===void 0&&(st[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),st[C].usedTimes++;let U=st[P.__cacheKey];U!==void 0&&(st[P.__cacheKey].usedTimes--,U.usedTimes===0&&R(b)),P.__cacheKey=C,P.__webglTexture=st[C].texture}return k}function tt(P,b,k){return Math.floor(Math.floor(P/k)/b)}function ot(P,b,k,Y){let C=P.updateRanges;if(C.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,Y,b.data);else{C.sort((j,q)=>j.start-q.start);let U=0;for(let j=1;j<C.length;j++){let q=C[U],Q=C[j],ut=q.start+q.count,mt=tt(Q.start,b.width,4),Rt=tt(q.start,b.width,4);Q.start<=ut+1&&mt===Rt&&tt(Q.start+Q.count-1,b.width,4)===mt?q.count=Math.max(q.count,Q.start+Q.count-q.start):(++U,C[U]=Q)}C.length=U+1;let D=e.getParameter(i.UNPACK_ROW_LENGTH),O=e.getParameter(i.UNPACK_SKIP_PIXELS),Z=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let j=0,q=C.length;j<q;j++){let Q=C[j],ut=Math.floor(Q.start/4),mt=Math.ceil(Q.count/4),Rt=ut%b.width,B=Math.floor(ut/b.width),_t=mt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Rt,B,_t,ct,k,Y,b.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,D),e.pixelStorei(i.UNPACK_SKIP_PIXELS,O),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z)}}function xt(P,b,k){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let st=Bt(P,b),C=b.source;e.bindTexture(Y,P.__webglTexture,i.TEXTURE0+k);let U=n.get(C);if(C.version!==U.__version||st===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ct=Qt.getPrimaries(Qt.workingColorSpace),Mt=b.colorSpace===$n?null:Qt.getPrimaries(b.colorSpace),At=b.colorSpace===$n||ct===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let O=f(b.image,!1,s.maxTextureSize);O=kt(b,O);let Z=r.convert(b.format,b.colorSpace),j=r.convert(b.type),q=x(b.internalFormat,Z,j,b.normalized,b.colorSpace,b.isVideoTexture);Ct(Y,b);let Q,ut=b.mipmaps,mt=b.isVideoTexture!==!0,Rt=U.__version===void 0||st===!0,B=C.dataReady,_t=y(b,O);if(b.isDepthTexture)q=v(b.format===Nn,b.type),Rt&&(mt?e.texStorage2D(i.TEXTURE_2D,1,q,O.width,O.height):e.texImage2D(i.TEXTURE_2D,0,q,O.width,O.height,0,Z,j,null));else if(b.isDataTexture)if(ut.length>0){mt&&Rt&&e.texStorage2D(i.TEXTURE_2D,_t,q,ut[0].width,ut[0].height);for(let ct=0,Mt=ut.length;ct<Mt;ct++)Q=ut[ct],mt?B&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Q.width,Q.height,Z,j,Q.data):e.texImage2D(i.TEXTURE_2D,ct,q,Q.width,Q.height,0,Z,j,Q.data);b.generateMipmaps=!1}else mt?(Rt&&e.texStorage2D(i.TEXTURE_2D,_t,q,O.width,O.height),B&&ot(b,O,Z,j)):e.texImage2D(i.TEXTURE_2D,0,q,O.width,O.height,0,Z,j,O.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){mt&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,q,ut[0].width,ut[0].height,O.depth);for(let ct=0,Mt=ut.length;ct<Mt;ct++)if(Q=ut[ct],b.format!==$e)if(Z!==null)if(mt){if(B)if(b.layerUpdates.size>0){let At=pc(Q.width,Q.height,b.format,b.type);for(let ft of b.layerUpdates){let Vt=Q.data.subarray(ft*At/Q.data.BYTES_PER_ELEMENT,(ft+1)*At/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,ft,Q.width,Q.height,1,Z,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Q.width,Q.height,O.depth,Z,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,q,Q.width,Q.height,O.depth,0,Q.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Q.width,Q.height,O.depth,Z,j,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,q,Q.width,Q.height,O.depth,0,Z,j,Q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{mt&&Rt&&e.texStorage2D(i.TEXTURE_2D,_t,q,ut[0].width,ut[0].height);for(let ct=0,Mt=ut.length;ct<Mt;ct++)Q=ut[ct],b.format!==$e?Z!==null?mt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Q.width,Q.height,Z,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,q,Q.width,Q.height,0,Q.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?B&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Q.width,Q.height,Z,j,Q.data):e.texImage2D(i.TEXTURE_2D,ct,q,Q.width,Q.height,0,Z,j,Q.data)}else if(b.isDataArrayTexture)if(mt){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,q,O.width,O.height,O.depth),B)if(b.layerUpdates.size>0){let ct=pc(O.width,O.height,b.format,b.type);for(let Mt of b.layerUpdates){let At=O.data.subarray(Mt*ct/O.data.BYTES_PER_ELEMENT,(Mt+1)*ct/O.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,O.width,O.height,1,Z,j,At)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,Z,j,O.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,O.width,O.height,O.depth,0,Z,j,O.data);else if(b.isData3DTexture)mt?(Rt&&e.texStorage3D(i.TEXTURE_3D,_t,q,O.width,O.height,O.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,Z,j,O.data)):e.texImage3D(i.TEXTURE_3D,0,q,O.width,O.height,O.depth,0,Z,j,O.data);else if(b.isFramebufferTexture){if(Rt)if(mt)e.texStorage2D(i.TEXTURE_2D,_t,q,O.width,O.height);else{let ct=O.width,Mt=O.height;for(let At=0;At<_t;At++)e.texImage2D(i.TEXTURE_2D,At,q,ct,Mt,0,Z,j,null),ct>>=1,Mt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),O.parentNode!==ct){ct.appendChild(O),m.add(b),ct.onpaint=Mt=>{let At=Mt.changedElements;for(let ft of m)At.includes(ft.image)&&(ft.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,O);else{let At=i.RGBA,ft=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ft,Vt,O)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(mt&&Rt){let ct=$t(ut[0]);e.texStorage2D(i.TEXTURE_2D,_t,q,ct.width,ct.height)}for(let ct=0,Mt=ut.length;ct<Mt;ct++)Q=ut[ct],mt?B&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Z,j,Q):e.texImage2D(i.TEXTURE_2D,ct,q,Z,j,Q);b.generateMipmaps=!1}else if(mt){if(Rt){let ct=$t(O);e.texStorage2D(i.TEXTURE_2D,_t,q,ct.width,ct.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,j,O)}else e.texImage2D(i.TEXTURE_2D,0,q,Z,j,O);d(b)&&S(Y),U.__version=C.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Lt(P,b,k){if(b.image.length!==6)return;let Y=Bt(P,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+k);let C=n.get(st);if(st.version!==C.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);let U=Qt.getPrimaries(Qt.workingColorSpace),D=b.colorSpace===$n?null:Qt.getPrimaries(b.colorSpace),O=b.colorSpace===$n||U===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let Z=b.isCompressedTexture||b.image[0].isCompressedTexture,j=b.image[0]&&b.image[0].isDataTexture,q=[];for(let ft=0;ft<6;ft++)!Z&&!j?q[ft]=f(b.image[ft],!0,s.maxCubemapSize):q[ft]=j?b.image[ft].image:b.image[ft],q[ft]=kt(b,q[ft]);let Q=q[0],ut=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),Rt=x(b.internalFormat,ut,mt,b.normalized,b.colorSpace),B=b.isVideoTexture!==!0,_t=C.__version===void 0||Y===!0,ct=st.dataReady,Mt=y(b,Q);Ct(i.TEXTURE_CUBE_MAP,b);let At;if(Z){B&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Rt,Q.width,Q.height);for(let ft=0;ft<6;ft++){At=q[ft].mipmaps;for(let Vt=0;Vt<At.length;Vt++){let Ut=At[Vt];b.format!==$e?ut!==null?B?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,Ut.width,Ut.height,ut,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,Rt,Ut.width,Ut.height,0,Ut.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,Ut.width,Ut.height,ut,mt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,Rt,Ut.width,Ut.height,0,ut,mt,Ut.data)}}}else{if(At=b.mipmaps,B&&_t){At.length>0&&Mt++;let ft=$t(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Rt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(j){B?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,q[ft].width,q[ft].height,ut,mt,q[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Rt,q[ft].width,q[ft].height,0,ut,mt,q[ft].data);for(let Vt=0;Vt<At.length;Vt++){let de=At[Vt].image[ft].image;B?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,de.width,de.height,ut,mt,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,Rt,de.width,de.height,0,ut,mt,de.data)}}else{B?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ut,mt,q[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Rt,ut,mt,q[ft]);for(let Vt=0;Vt<At.length;Vt++){let Ut=At[Vt];B?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,ut,mt,Ut.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,Rt,ut,mt,Ut.image[ft])}}}d(b)&&S(i.TEXTURE_CUBE_MAP),C.__version=st.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function vt(P,b,k,Y,st,C){let U=r.convert(k.format,k.colorSpace),D=r.convert(k.type),O=x(k.internalFormat,U,D,k.normalized,k.colorSpace),Z=n.get(b),j=n.get(k);if(j.__renderTarget=b,!Z.__hasExternalTextures){let q=Math.max(1,b.width>>C),Q=Math.max(1,b.height>>C);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,C,O,q,Q,b.depth,0,U,D,null):e.texImage2D(st,C,O,q,Q,0,U,D,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),yt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,st,j.__webglTexture,0,et(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,st,j.__webglTexture,C),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(P,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let Y=b.depthTexture,st=Y&&Y.isDepthTexture?Y.type:null,C=v(b.stencilBuffer,st),U=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),C,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),C,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,C,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,P)}else{let Y=b.textures;for(let st=0;st<Y.length;st++){let C=Y[st],U=r.convert(C.format,C.colorSpace),D=r.convert(C.type),O=x(C.internalFormat,U,D,C.normalized,C.colorSpace);yt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(b),O,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(b),O,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,O,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(P,b,k){let Y=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(b.depthTexture);if(st.__renderTarget=b,(!st.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(st.__webglInit===void 0&&(st.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,b.depthTexture);let Z=r.convert(b.depthTexture.format),j=r.convert(b.depthTexture.type),q;b.depthTexture.format===Cn?q=i.DEPTH_COMPONENT24:b.depthTexture.format===Nn&&(q=i.DEPTH24_STENCIL8);for(let Q=0;Q<6;Q++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,q,b.width,b.height,0,Z,j,null)}}else ht(b.depthTexture,0);let C=st.__webglTexture,U=et(b),D=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,O=b.depthTexture.format===Nn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Cn)yt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,D,C,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,O,D,C,0);else if(b.depthTexture.format===Nn)yt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,D,C,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,O,D,C,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(P){let b=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",st)};Y.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)se(b.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?se(b.__webglFramebuffer[0],P,0):se(b.__webglFramebuffer,P,0)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),Wt(b.__webglDepthbuffer[Y],P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,C)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Wt(b.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,C)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(P,b,k){let Y=n.get(P);b!==void 0&&vt(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&X(P)}function gt(P){let b=P.texture,k=n.get(P),Y=n.get(b);P.addEventListener("dispose",M);let st=P.textures,C=P.isWebGLCubeRenderTarget===!0,U=st.length>1;if(U||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),C){k.__webglFramebuffer=[];for(let D=0;D<6;D++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[D]=[];for(let O=0;O<b.mipmaps.length;O++)k.__webglFramebuffer[D][O]=i.createFramebuffer()}else k.__webglFramebuffer[D]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let D=0;D<b.mipmaps.length;D++)k.__webglFramebuffer[D]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(U)for(let D=0,O=st.length;D<O;D++){let Z=n.get(st[D]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&yt(P)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let D=0;D<st.length;D++){let O=st[D];k.__webglColorRenderbuffer[D]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[D]);let Z=r.convert(O.format,O.colorSpace),j=r.convert(O.type),q=x(O.internalFormat,Z,j,O.normalized,O.colorSpace,P.isXRRenderTarget===!0),Q=et(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,q,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,k.__webglColorRenderbuffer[D])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,b);for(let D=0;D<6;D++)if(b.mipmaps&&b.mipmaps.length>0)for(let O=0;O<b.mipmaps.length;O++)vt(k.__webglFramebuffer[D][O],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,O);else vt(k.__webglFramebuffer[D],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);d(b)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(U){for(let D=0,O=st.length;D<O;D++){let Z=st[D],j=n.get(Z),q=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,j.__webglTexture),Ct(q,Z),vt(k.__webglFramebuffer,P,Z,i.COLOR_ATTACHMENT0+D,q,0),d(Z)&&S(q)}e.unbindTexture()}else{let D=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(D=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(D,Y.__webglTexture),Ct(D,b),b.mipmaps&&b.mipmaps.length>0)for(let O=0;O<b.mipmaps.length;O++)vt(k.__webglFramebuffer[O],P,b,i.COLOR_ATTACHMENT0,D,O);else vt(k.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,D,0);d(b)&&S(D),e.unbindTexture()}P.depthBuffer&&X(P)}function pt(P){let b=P.textures;for(let k=0,Y=b.length;k<Y;k++){let st=b[k];if(d(st)){let C=A(P),U=n.get(st).__webglTexture;e.bindTexture(C,U),S(C),e.unbindTexture()}}}let Ot=[],Gt=[];function z(P){if(P.samples>0){if(yt(P)===!1){let b=P.textures,k=P.width,Y=P.height,st=i.COLOR_BUFFER_BIT,C=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=n.get(P),D=b.length>1;if(D)for(let Z=0;Z<b.length;Z++)e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let O=P.texture.mipmaps;O&&O.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let Z=0;Z<b.length;Z++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),D){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);let j=n.get(b[Z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,st,i.NEAREST),l===!0&&(Ot.length=0,Gt.length=0,Ot.push(i.COLOR_ATTACHMENT0+Z),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Ot.push(C),Gt.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),D)for(let Z=0;Z<b.length;Z++){e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);let j=n.get(b[Z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(P){return Math.min(s.maxSamples,P.samples)}function yt(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function kt(P,b){let k=P.colorSpace,Y=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==qs&&k!==$n&&(Qt.getTransfer(k)===re?(Y!==$e||st!==Be)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",k)),b}function $t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=V,this.getTextureUnits=F,this.setTextureUnits=W,this.setTexture2D=ht,this.setTexture2DArray=$,this.setTexture3D=at,this.setTextureCube=lt,this.rebindTextures=dt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dx(i,t){function e(n,s=$n){let r,a=Qt.getTransfer(s);if(n===Be)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ec)return i.BYTE;if(n===nc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Re)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===$e)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===Nn)return i.DEPTH_STENCIL;if(n===io)return i.RED;if(n===so)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===Ar||n===Cr||n===Rr||n===Pr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===Ir||n===xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return r.COMPRESSED_R11_EAC;if(n===go)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return r.COMPRESSED_RG11_EAC;if(n===xo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===vo||n===yo||n===Mo||n===So||n===bo||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Do||n===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===Lr||n===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends vn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,u=null,p=null,_=null,g=typeof XRWebGLBinding<"u",f=new Dc,d={},S=e.getContextAttributes(),A=null,x=null,v=[],y=[],T=new Ft,M=null,w=null,R=new Ie;R.viewport=new xe;let I=new Ie;I.viewport=new xe;let L=[R,I],V=new Ya,F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ot=v[tt];return ot===void 0&&(ot=new ps,v[tt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(tt){let ot=v[tt];return ot===void 0&&(ot=new ps,v[tt]=ot),ot.getGripSpace()},this.getHand=function(tt){let ot=v[tt];return ot===void 0&&(ot=new ps,v[tt]=ot),ot.getHandSpace()};function nt(tt){let ot=y.indexOf(tt.inputSource);if(ot===-1)return;let xt=v[ot];xt!==void 0&&(xt.update(tt.inputSource,tt.frame,c||a),xt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function rt(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",ht);for(let tt=0;tt<v.length;tt++){let ot=y[tt];ot!==null&&(y[tt]=null,v[tt].disconnect(ot))}F=null,W=null,f.reset();for(let tt in d)delete d[tt];if(t.setRenderTarget(A),p=null,u=null,m=null,s=null,x=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(T.width,T.height,!1),w!==null){let tt=w.camera;tt.fov=w.fov,tt.zoom=w.zoom,tt.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&g&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Lt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?Nn:Cn,Lt=S.stencil?gi:Mn);let Wt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Me(u.textureWidth,u.textureHeight,{format:$e,type:Be,depthTexture:new In(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Me(p.framebufferWidth,p.framebufferHeight,{format:$e,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ht(tt){for(let ot=0;ot<tt.removed.length;ot++){let xt=tt.removed[ot],Lt=y.indexOf(xt);Lt>=0&&(y[Lt]=null,v[Lt].disconnect(xt))}for(let ot=0;ot<tt.added.length;ot++){let xt=tt.added[ot],Lt=y.indexOf(xt);if(Lt===-1){for(let Wt=0;Wt<v.length;Wt++)if(Wt>=y.length){y.push(xt),Lt=Wt;break}else if(y[Wt]===null){y[Wt]=xt,Lt=Wt;break}if(Lt===-1)break}let vt=v[Lt];vt&&vt.connect(xt)}}let $=new H,at=new H;function lt(tt,ot,xt){$.setFromMatrixPosition(ot.matrixWorld),at.setFromMatrixPosition(xt.matrixWorld);let Lt=$.distanceTo(at),vt=ot.projectionMatrix.elements,Wt=xt.projectionMatrix.elements,se=vt[14]/(vt[10]-1),X=vt[14]/(vt[10]+1),dt=(vt[9]+1)/vt[5],gt=(vt[9]-1)/vt[5],pt=(vt[8]-1)/vt[0],Ot=(Wt[8]+1)/Wt[0],Gt=se*pt,z=se*Ot,et=Lt/(-pt+Ot),yt=et*-pt;if(ot.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(yt),tt.translateZ(et),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),vt[10]===-1)tt.projectionMatrix.copy(ot.projectionMatrix),tt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let N=se+et,kt=X+et,$t=Gt-yt,P=z+(Lt-yt),b=dt*X/kt*N,k=gt*X/kt*N;tt.projectionMatrix.makePerspective($t,P,b,k,N,kt),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function St(tt,ot){ot===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ot.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ot=tt.near,xt=tt.far;f.texture!==null&&(f.depthNear>0&&(ot=f.depthNear),f.depthFar>0&&(xt=f.depthFar)),V.near=I.near=R.near=ot,V.far=I.far=R.far=xt,(F!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),F=V.near,W=V.far),V.layers.mask=tt.layers.mask|6,R.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let Lt=tt.parent,vt=V.cameras;St(V,Lt);for(let Wt=0;Wt<vt.length;Wt++)St(vt[Wt],Lt);vt.length===2?lt(V,R,I):V.projectionMatrix.copy(R.projectionMatrix),w===null&&tt.isPerspectiveCamera&&(w={camera:tt,fov:tt.fov,zoom:tt.zoom}),Et(tt,V,Lt)};function Et(tt,ot,xt){xt===null?tt.matrix.copy(ot.matrixWorld):(tt.matrix.copy(xt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ot.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ot.projectionMatrix),tt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=us*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(V)},this.getCameraTexture=function(tt){return d[tt]};let Zt=null;function Ct(tt,ot){if(h=ot.getViewerPose(c||a),_=ot,h!==null){let xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Lt=!1;xt.length!==V.cameras.length&&(V.cameras.length=0,Lt=!0);for(let X=0;X<xt.length;X++){let dt=xt[X],gt=null;if(p!==null)gt=p.getViewport(dt);else{let Ot=m.getViewSubImage(u,dt);gt=Ot.viewport,X===0&&(t.setRenderTargetTextures(x,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(x))}let pt=L[X];pt===void 0&&(pt=new Ie,pt.layers.enable(X),pt.viewport=new xe,L[X]=pt),pt.matrix.fromArray(dt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(dt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(gt.x,gt.y,gt.width,gt.height),X===0&&(V.matrix.copy(pt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Lt===!0&&V.cameras.push(pt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){m=n.getBinding();let X=m.getDepthInformation(xt[0]);X&&X.isValid&&X.texture&&f.init(X,s.renderState)}if(vt&&vt.includes("camera-access")&&g){t.state.unbindTexture(),m=n.getBinding();for(let X=0;X<xt.length;X++){let dt=xt[X].camera;if(dt){let gt=d[dt];gt||(gt=new nr,d[dt]=gt);let pt=m.getCameraImage(dt);gt.sourceTexture=pt}}}}for(let xt=0;xt<v.length;xt++){let Lt=y[xt],vt=v[xt];Lt!==null&&vt!==void 0&&vt.update(Lt,ot,c||a)}Zt&&Zt(tt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}let Bt=new Gu;Bt.setAnimationLoop(Ct),this.setAnimationLoop=function(tt){Zt=tt},this.dispose=function(){}}},Fx=new ie,$u=new Yt;$u.set(-1,0,0,0,1,0,0,0,1);function Ox(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,uc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,S,A,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),m(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&p(f,d,x)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,S,A):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ne&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ne&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let S=t.get(d),A=S.envMap,x=S.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply($u),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,S,A){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*S,f.scale.value=A*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function m(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,S){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){let S=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(f(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",S));let T=v.program;n.updateUBOMapping(x,T);let M=t.render.frame;r[x.id]!==M&&(u(x),r[x.id]=M)}function h(x){let v=m();x.__bindingPointIndex=v;let y=i.createBuffer(),T=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function m(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let v=s[x.id],y=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,w=y.length;M<w;M++){let R=y[M];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)p(R[I],M,I,T);else p(R,M,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,y,T){if(g(x,v,y,T)===!0){let M=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let I=0;I<w.length;I++){let L=w[I],V=d(L);_(L,x.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function _(x,v,y){typeof x=="number"||typeof x=="boolean"?v[0]=x:x.isMatrix3?(v[0]=x.elements[0],v[1]=x.elements[1],v[2]=x.elements[2],v[3]=0,v[4]=x.elements[3],v[5]=x.elements[4],v[6]=x.elements[5],v[7]=0,v[8]=x.elements[6],v[9]=x.elements[7],v[10]=x.elements[8],v[11]=0):ArrayBuffer.isView(x)?v.set(new x.constructor(x.buffer,x.byteOffset,v.length)):x.toArray(v,y)}function g(x,v,y,T){let M=x.value,w=v+"_"+y;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{let R=T[w];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function f(x){let v=x.uniforms,y=0,T=16;for(let w=0,R=v.length;w<R;w++){let I=Array.isArray(v[w])?v[w]:[v[w]];for(let L=0,V=I.length;L<V;L++){let F=I[L],W=Array.isArray(F.value)?F.value:[F.value];for(let nt=0,rt=W.length;nt<rt;nt++){let ht=W[nt],$=d(ht),at=y%T,lt=at%$.boundary,St=at+lt;y+=lt,St!==0&&T-St<$.storage&&(y+=T-St),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=$.storage}}}let M=y%T;return M>0&&(y+=T-M),x.__size=y,x.__cache={},this}function d(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",x),v}function S(x){let v=x.target;v.removeEventListener("dispose",S);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function A(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function kx(){return Un===null&&(Un=new Yn(Bx,16,16,xi,Re),Un.name="DFG_LUT",Un.minFilter=Le,Un.magFilter=Le,Un.wrapS=En,Un.wrapT=En,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var Ho=class{constructor(t={}){let{canvas:e=pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Be}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let g=p,f=new Set([ao,ro,so]),d=new Set([Be,Mn,Ms,gi,eo,no]),S=new Uint32Array(4),A=new Int32Array(4),x=new H,v=null,y=null,T=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,V=null,F=null,W=null;this._outputColorSpace=He;let nt=0,rt=0,ht=null,$=-1,at=null,lt=new xe,St=new xe,Et=null,Zt=new qt(0),Ct=0,Bt=e.width,tt=e.height,ot=1,xt=null,Lt=null,vt=new xe(0,0,Bt,tt),Wt=new xe(0,0,Bt,tt),se=!1,X=new ms,dt=!1,gt=!1,pt=new ie,Ot=new H,Gt=new xe,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function yt(){return ht===null?ot:1}let N=n;function kt(E,G){return e.getContext(E,G)}let $t,P,b,k,Y,st,C,U,D,O,Z,j,q,Q,ut,mt,Rt,B,_t,ct,Mt,At,ft;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",pn,!1),N===null){let G="webgl2";if(N=kt(G,E),N===null)throw kt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(E){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Xt("WebGLRenderer: "+E.message),E}function Vt(){$t=new Y0(N),$t.init(),Mt=new Dx(N,$t),P=new O0(N,$t,t,Mt),b=new Ix(N,$t),P.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),V=N.createFramebuffer(),F=N.createFramebuffer(),W=N.createFramebuffer(),k=new K0(N),Y=new xx,st=new Lx(N,$t,b,Y,P,Mt,k),C=new q0(R),U=new jf(N),At=new U0(N,U),D=new $0(N,U,k,At),O=new j0(N,D,U,At,k),B=new J0(N,P,st),ut=new z0(Y),Z=new gx(R,C,$t,P,At,ut),j=new Ox(R,Y),q=new vx,Q=new Ex($t),Rt=new N0(R,C,b,O,_,l),mt=new Px(R,O,P),ft=new zx(N,k,P,b),_t=new F0(N,$t,k),ct=new Z0(N,$t,k),k.programs=Z.programs,R.capabilities=P,R.extensions=$t,R.properties=Y,R.renderLists=q,R.shadowMap=mt,R.state=b,R.info=k}g!==Be&&(w=new tg(g,e.width,e.height,o,s,r));let Ut=new Nc(R,N);this.xr=Ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(E){E!==void 0&&(ot=E,this.setSize(Bt,tt,!1))},this.getSize=function(E){return E.set(Bt,tt)},this.setSize=function(E,G,it=!0){if(Ut.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=E,tt=G,e.width=Math.floor(E*ot),e.height=Math.floor(G*ot),it===!0&&(e.style.width=E+"px",e.style.height=G+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Bt*ot,tt*ot).floor()},this.setDrawingBufferSize=function(E,G,it){Bt=E,tt=G,ot=it,e.width=Math.floor(E*it),e.height=Math.floor(G*it),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(g===Be){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(lt)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,G,it,K){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,G,it,K),b.viewport(lt.copy(vt).multiplyScalar(ot).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,G,it,K){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,G,it,K),b.scissor(St.copy(Wt).multiplyScalar(ot).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){b.setScissorTest(se=E)},this.setOpaqueSort=function(E){xt=E},this.setTransparentSort=function(E){Lt=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,it=!0){let K=0;if(E){let J=!1;if(ht!==null){let Tt=ht.texture.format;J=f.has(Tt)}if(J){let Tt=ht.texture.type,It=d.has(Tt),wt=Rt.getClearColor(),Dt=Rt.getClearAlpha(),zt=wt.r,Kt=wt.g,te=wt.b;It?(S[0]=zt,S[1]=Kt,S[2]=te,S[3]=Dt,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=zt,A[1]=Kt,A[2]=te,A[3]=Dt,N.clearBufferiv(N.COLOR,0,A))}else K|=N.COLOR_BUFFER_BIT}G&&(K|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Rt.dispose(),q.dispose(),Q.dispose(),Y.dispose(),C.dispose(),O.dispose(),At.dispose(),ft.dispose(),Z.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",ih),Ut.removeEventListener("sessionend",sh),Ei.stop()};function de(E){E.preventDefault(),lc("WebGLRenderer: Context Lost."),I=!0}function ae(){lc("WebGLRenderer: Context Restored."),I=!1;let E=k.autoReset,G=mt.enabled,it=mt.autoUpdate,K=mt.needsUpdate,J=mt.type;Vt(),k.autoReset=E,mt.enabled=G,mt.autoUpdate=it,mt.needsUpdate=K,mt.type=J}function pn(E){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Sn(E){let G=E.target;G.removeEventListener("dispose",Sn),Xd(G)}function Xd(E){qd(E),Y.remove(E)}function qd(E){let G=Y.get(E).programs;G!==void 0&&(G.forEach(function(it){Z.releaseProgram(it)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,it,K,J,Tt){G===null&&(G=z);let It=J.isMesh&&J.matrixWorld.determinantAffine()<0,wt=Zd(E,G,it,K,J);b.setMaterial(K,It);let Dt=it.index,zt=1;if(K.wireframe===!0){if(Dt=D.getWireframeAttribute(it),Dt===void 0)return;zt=2}let Kt=it.drawRange,te=it.attributes.position,Nt=Kt.start*zt,oe=(Kt.start+Kt.count)*zt;Tt!==null&&(Nt=Math.max(Nt,Tt.start*zt),oe=Math.min(oe,(Tt.start+Tt.count)*zt)),Dt!==null?(Nt=Math.max(Nt,0),oe=Math.min(oe,Dt.count)):te!=null&&(Nt=Math.max(Nt,0),oe=Math.min(oe,te.count));let be=oe-Nt;if(be<0||be===1/0)return;At.setup(J,K,wt,it,Dt);let pe,he=_t;if(Dt!==null&&(pe=U.get(Dt),he=ct,he.setIndex(pe)),J.isMesh)K.wireframe===!0?(b.setLineWidth(K.wireframeLinewidth*yt()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(J.isLine){let Fe=K.linewidth;Fe===void 0&&(Fe=1),b.setLineWidth(Fe*yt()),J.isLineSegments?he.setMode(N.LINES):J.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else J.isPoints?he.setMode(N.POINTS):J.isSprite&&he.setMode(N.TRIANGLES);if(J.isBatchedMesh)if($t.get("WEBGL_multi_draw"))he.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Fe=J._multiDrawStarts,Pt=J._multiDrawCounts,Ve=J._multiDrawCount,ne=Dt?U.get(Dt).bytesPerElement:1,an=Y.get(K).currentProgram.getUniforms();for(let bn=0;bn<Ve;bn++)an.setValue(N,"_gl_DrawID",bn),he.render(Fe[bn]/ne,Pt[bn])}else if(J.isInstancedMesh)he.renderInstances(Nt,be,J.count);else if(it.isInstancedBufferGeometry){let Fe=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Pt=Math.min(it.instanceCount,Fe);he.renderInstances(Nt,be,Pt)}else he.render(Nt,be)};function nh(E,G,it,K){L!==null&&E.isNodeMaterial&&L.setObject(K,E),dt===!0&&ut.setState(E,it,!1),E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,jr(E,G,K),E.side=fi,E.needsUpdate=!0,jr(E,G,K),E.side=Dn):jr(E,G,K)}this.compile=function(E,G,it=null){it===null&&(it=E),L!==null&&L.renderStart(E,G,it),y=Q.get(it),y.init(G),M.push(y),it.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),E!==it&&E.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights(),L!==null&&L.updateLights(y.state.lightsArray),gt=this.localClippingEnabled,dt=ut.init(this.clippingPlanes,gt),dt===!0&&ut.setGlobalState(this.clippingPlanes,G),L!==null&&mt.render(y.state.shadowsArray,it,G);let K=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){let wt=Tt[It];nh(wt,it,G,J),K.add(wt)}else nh(Tt,it,G,J),K.add(Tt)}),y=M.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(E,G,it=null){let K=this.compile(E,G,it);return new Promise(J=>{function Tt(){if(K.forEach(function(It){let Dt=Y.get(It).currentProgram;(Dt===void 0||Dt.isReady())&&K.delete(It)}),K.size===0){J(E);return}setTimeout(Tt,10)}$t.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let gl=null;function Yd(E){gl&&gl(E)}function ih(){Ei.stop()}function sh(){Ei.start()}let Ei=new Gu;Ei.setAnimationLoop(Yd),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){gl=E,Ut.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},Ut.addEventListener("sessionstart",ih),Ut.addEventListener("sessionend",sh),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(E,G);let it=Ut.enabled===!0&&Ut.isPresenting===!0,K=w!==null&&(ht===null||it)&&w.begin(R,ht);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(G),G=Ut.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,G,ht),y=Q.get(E,M.length),y.init(G),y.state.textureUnits=st.getTextureUnits(),M.push(y),pt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),X.setFromProjectionMatrix(pt,_n,G.reversedDepth),gt=this.localClippingEnabled,dt=ut.init(this.clippingPlanes,gt),v=q.get(E,T.length),v.init(),T.push(v),Ut.enabled===!0&&Ut.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&xl(It,G,-1/0,R.sortObjects)}xl(E,G,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(y.state.lightsArray),R.sortObjects===!0&&v.sort(xt,Lt),et=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,et&&Rt.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&ut.beginShadows();let J=y.state.shadowsArray;if(mt.render(J,E,G),dt===!0&&ut.endShadows(),(K&&w.hasRenderPass())===!1){let It=v.opaque,wt=v.transmissive;if(y.setupLights(),G.isArrayCamera){let Dt=G.cameras;if(wt.length>0)for(let zt=0,Kt=Dt.length;zt<Kt;zt++){let te=Dt[zt];ah(It,wt,E,te)}et&&Rt.render(E);for(let zt=0,Kt=Dt.length;zt<Kt;zt++){let te=Dt[zt];rh(v,E,te,te.viewport)}}else wt.length>0&&ah(It,wt,E,G),et&&Rt.render(E),rh(v,E,G)}ht!==null&&rt===0&&(st.updateMultisampleRenderTarget(ht),st.updateRenderTargetMipmap(ht)),K&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,G),At.resetDefaultState(),$=-1,at=null,M.pop(),M.length>0?(y=M[M.length-1],st.setTextureUnits(y.state.textureUnits),dt===!0&&ut.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,L!==null&&L.renderEnd()};function xl(E,G,it,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)it=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLightProbeGrid)y.pushLightProbeGrid(E);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(X)){K&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);let It=O.update(E),wt=E.material;wt.visible&&v.push(E,It,wt,it,Gt.z,null,G)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(X))){let It=O.update(E),wt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Gt.copy(It.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(wt)){let Dt=It.groups;for(let zt=0,Kt=Dt.length;zt<Kt;zt++){let te=Dt[zt],Nt=wt[te.materialIndex];Nt&&Nt.visible&&v.push(E,It,Nt,it,Gt.z,te,G)}}else wt.visible&&v.push(E,It,wt,it,Gt.z,null,G)}}let Tt=E.children;for(let It=0,wt=Tt.length;It<wt;It++)xl(Tt[It],G,it,K)}function rh(E,G,it,K){let{opaque:J,transmissive:Tt,transparent:It}=E;y.setupLightsView(it),dt===!0&&ut.setGlobalState(R.clippingPlanes,it),K&&b.viewport(lt.copy(K)),J.length>0&&Jr(J,G,it),Tt.length>0&&Jr(Tt,G,it),It.length>0&&Jr(It,G,it),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ah(E,G,it,K){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[K.id]===void 0){let Nt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[K.id]=new Me(1,1,{generateMipmaps:!0,type:Nt?Re:Be,minFilter:mi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let Tt=y.state.transmissionRenderTarget[K.id],It=K.viewport||lt;Tt.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),Dt=R.getActiveCubeFace(),zt=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(Zt),Ct=R.getClearAlpha(),Ct<1&&R.setClearColor(16777215,.5),R.clear(),et&&Rt.render(it);let Kt=R.toneMapping;R.toneMapping=yn;let te=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),dt===!0&&ut.setGlobalState(R.clippingPlanes,K),Jr(E,it,K),st.updateMultisampleRenderTarget(Tt),st.updateRenderTargetMipmap(Tt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let oe=0,be=G.length;oe<be;oe++){let pe=G[oe],{object:he,geometry:Fe,material:Pt,group:Ve}=pe;if(Pt.side===Dn&&he.layers.test(K.layers)){let ne=Pt.side;Pt.side=Ne,Pt.needsUpdate=!0,oh(he,it,K,Fe,Pt,Ve),Pt.side=ne,Pt.needsUpdate=!0,Nt=!0}}Nt===!0&&(st.updateMultisampleRenderTarget(Tt),st.updateRenderTargetMipmap(Tt))}R.setRenderTarget(wt,Dt,zt),R.setClearColor(Zt,Ct),te!==void 0&&(K.viewport=te),R.toneMapping=Kt}function Jr(E,G,it){let K=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Tt=E.length;J<Tt;J++){let It=E[J],{object:wt,geometry:Dt,group:zt}=It,Kt=It.material;Kt.allowOverride===!0&&K!==null&&(Kt=K),wt.layers.test(it.layers)&&oh(wt,G,it,Dt,Kt,zt)}}function oh(E,G,it,K,J,Tt){L!==null&&J.isNodeMaterial&&L.setObject(E,J),E.onBeforeRender(R,G,it,K,J,Tt),E.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(R,G,it,K,E,Tt),J.transparent===!0&&J.side===Dn&&J.forceSinglePass===!1?(J.side=Ne,J.needsUpdate=!0,R.renderBufferDirect(it,G,K,J,E,Tt),J.side=fi,J.needsUpdate=!0,R.renderBufferDirect(it,G,K,J,E,Tt),J.side=Dn):R.renderBufferDirect(it,G,K,J,E,Tt),E.onAfterRender(R,G,it,K,J,Tt)}function jr(E,G,it){G.isScene!==!0&&(G=z);let K=Y.get(E),J=y.state.lights,Tt=y.state.shadowsArray,It=J.state.version,wt=Z.getParameters(E,J.state,Tt,G,it,y.state.lightProbeGridArray),Dt=Z.getProgramCacheKey(wt),zt=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let Kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=C.get(E.envMap||K.environment,Kt),K.envMapRotation=K.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Sn),zt=new Map,K.programs=zt);let te=zt.get(Dt);if(te!==void 0){if(K.currentProgram===te&&K.lightsStateVersion===It)return ch(E,wt),te}else wt.uniforms=Z.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,it,wt),E.onBeforeCompile(wt,R),te=Z.acquireProgram(wt,Dt),zt.set(Dt,te),K.uniforms=wt.uniforms;let Nt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),ch(E,wt),K.needsLights=Jd(E),K.lightsStateVersion=It,K.needsLights&&(Nt.ambientLightColor.value=J.state.ambient,Nt.lightProbe.value=J.state.probe,Nt.sunLights.value=J.state.sun,Nt.sunLightShadows.value=J.state.sunShadow,Nt.directionalLights.value=J.state.directional,Nt.directionalLightShadows.value=J.state.directionalShadow,Nt.spotLights.value=J.state.spot,Nt.spotLightShadows.value=J.state.spotShadow,Nt.rectAreaLights.value=J.state.rectArea,Nt.ltc_1.value=J.state.rectAreaLTC1,Nt.ltc_2.value=J.state.rectAreaLTC2,Nt.pointLights.value=J.state.point,Nt.pointLightShadows.value=J.state.pointShadow,Nt.hemisphereLights.value=J.state.hemi,Nt.sunShadowMatrix.value=J.state.sunShadowMatrix,Nt.sunShadowCascade.value=J.state.sunShadowCascade,Nt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Nt.spotLightMatrix.value=J.state.spotLightMatrix,Nt.spotLightMap.value=J.state.spotLightMap,Nt.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=y.state.lightProbeGridArray.length>0,K.currentProgram=te,K.uniformsList=null,te}function lh(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Ts.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function ch(E,G){let it=Y.get(E);it.outputColorSpace=G.outputColorSpace,it.batching=G.batching,it.batchingColor=G.batchingColor,it.instancing=G.instancing,it.instancingColor=G.instancingColor,it.instancingMorph=G.instancingMorph,it.skinning=G.skinning,it.morphTargets=G.morphTargets,it.morphNormals=G.morphNormals,it.morphColors=G.morphColors,it.morphTargetsCount=G.morphTargetsCount,it.numClippingPlanes=G.numClippingPlanes,it.numIntersection=G.numClipIntersection,it.vertexAlphas=G.vertexAlphas,it.vertexTangents=G.vertexTangents,it.toneMapping=G.toneMapping}function $d(E,G){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let it=0,K=E.length;it<K;it++){let J=E[it];if(J.texture!==null&&J.boundingBox.containsPoint(x))return J}return null}function Zd(E,G,it,K,J){G.isScene!==!0&&(G=z),st.resetTextureUnits();let Tt=G.fog,It=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,wt=ht===null?R.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Qt.workingColorSpace,Dt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,zt=C.get(K.envMap||It,Dt),Kt=K.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Nt=!!it.morphAttributes.position,oe=!!it.morphAttributes.normal,be=!!it.morphAttributes.color,pe=yn;K.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(pe=R.toneMapping);let he=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Fe=he!==void 0?he.length:0,Pt=Y.get(K),Ve=y.state.lights;if(dt===!0&&(gt===!0||E!==at)){let fe=E===at&&K.id===$;ut.setState(K,E,fe)}let ne=!1;K.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ve.state.version||Pt.outputColorSpace!==wt||J.isBatchedMesh&&Pt.batching===!1||!J.isBatchedMesh&&Pt.batching===!0||J.isBatchedMesh&&Pt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Pt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Pt.instancing===!1||!J.isInstancedMesh&&Pt.instancing===!0||J.isSkinnedMesh&&Pt.skinning===!1||!J.isSkinnedMesh&&Pt.skinning===!0||J.isInstancedMesh&&Pt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Pt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Pt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Pt.instancingMorph===!1&&J.morphTexture!==null||Pt.envMap!==zt||K.fog===!0&&Pt.fog!==Tt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ut.numPlanes||Pt.numIntersection!==ut.numIntersection)||Pt.vertexAlphas!==Kt||Pt.vertexTangents!==te||Pt.morphTargets!==Nt||Pt.morphNormals!==oe||Pt.morphColors!==be||Pt.toneMapping!==pe||Pt.morphTargetsCount!==Fe||!!Pt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Pt.__version=K.version);let an=Pt.currentProgram;ne===!0&&(an=jr(K,G,J),L&&K.isNodeMaterial&&L.onUpdateProgram(K,an,Pt));let bn=!1,Jn=!1,Wi=!1,ce=an.getUniforms(),ve=Pt.uniforms;if(b.useProgram(an.program)&&(bn=!0,Jn=!0,Wi=!0),K.id!==$&&($=K.id,Jn=!0),Pt.needsLights){let fe=$d(y.state.lightProbeGridArray,J);Pt.lightProbeGrid!==fe&&(Pt.lightProbeGrid=fe,Jn=!0)}if(bn||at!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(N,"projectionMatrix",E.projectionMatrix),ce.setValue(N,"viewMatrix",E.matrixWorldInverse);let Qn=ce.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,Ot.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ce.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),at!==E&&(at=E,Jn=!0,Wi=!0)}if(Pt.needsLights&&(Ve.state.sunShadowMap.length>0&&ce.setValue(N,"sunShadowMap",Ve.state.sunShadowMap,st),Ve.state.directionalShadowMap.length>0&&ce.setValue(N,"directionalShadowMap",Ve.state.directionalShadowMap,st),Ve.state.spotShadowMap.length>0&&ce.setValue(N,"spotShadowMap",Ve.state.spotShadowMap,st),Ve.state.pointShadowMap.length>0&&ce.setValue(N,"pointShadowMap",Ve.state.pointShadowMap,st)),J.isSkinnedMesh){ce.setOptional(N,J,"bindMatrix"),ce.setOptional(N,J,"bindMatrixInverse");let fe=J.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),ce.setValue(N,"boneTexture",fe.boneTexture,st))}J.isBatchedMesh&&(ce.setOptional(N,J,"batchingTexture"),ce.setValue(N,"batchingTexture",J._matricesTexture,st),ce.setOptional(N,J,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",J._indirectTexture,st),ce.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",J._colorsTexture,st));let jn=it.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&B.update(J,it,an),(Jn||Pt.receiveShadow!==J.receiveShadow)&&(Pt.receiveShadow=J.receiveShadow,ce.setValue(N,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(ve.envMapIntensity.value=G.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=kx()),Jn){if(ce.setValue(N,"toneMappingExposure",R.toneMappingExposure),Pt.needsLights&&Kd(ve,Wi),Tt&&K.fog===!0&&j.refreshFogUniforms(ve,Tt),j.refreshMaterialUniforms(ve,K,ot,tt,y.state.transmissionRenderTarget[E.id]),Pt.needsLights&&Pt.lightProbeGrid){let fe=Pt.lightProbeGrid;ve.probesSH.value=fe.texture,ve.probesMin.value.copy(fe.boundingBox.min),ve.probesMax.value.copy(fe.boundingBox.max),ve.probesResolution.value.copy(fe.resolution)}Ts.upload(N,lh(Pt),ve,st)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ts.upload(N,lh(Pt),ve,st),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ce.setValue(N,"center",J.center),ce.setValue(N,"modelViewMatrix",J.modelViewMatrix),ce.setValue(N,"normalMatrix",J.normalMatrix),ce.setValue(N,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let fe=K.uniformsGroups;for(let Qn=0,Xi=fe.length;Qn<Xi;Qn++){let uh=fe[Qn];ft.update(uh,an),ft.bind(uh,an)}}return an}function Kd(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.sunLights.needsUpdate=G,E.sunLightShadows.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Jd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(E,G,it){let K=Y.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=G,Y.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:it,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){let it=Y.get(E);it.__webglFramebuffer=G,it.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,it=0){ht=E,nt=G,rt=it;let K=null,J=!1,Tt=!1;if(E){let wt=Y.get(E);if(wt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,wt.__webglFramebuffer),lt.copy(E.viewport),St.copy(E.scissor),Et=E.scissorTest,b.viewport(lt),b.scissor(St),b.setScissorTest(Et),$=-1;return}else if(wt.__webglFramebuffer===void 0)st.setupRenderTarget(E);else if(wt.__hasExternalTextures)st.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Kt=E.depthTexture;if(wt.__boundDepthTexture!==Kt){if(Kt!==null&&Y.has(Kt)&&(E.width!==Kt.image.width||E.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Tt=!0);let zt=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[G])?K=zt[G][it]:K=zt[G],J=!0):E.samples>0&&st.useMultisampledRTT(E)===!1?K=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?K=zt[it]:K=zt,lt.copy(E.viewport),St.copy(E.scissor),Et=E.scissorTest}else lt.copy(vt).multiplyScalar(ot).floor(),St.copy(Wt).multiplyScalar(ot).floor(),Et=se;if(it!==0&&(K=V),b.bindFramebuffer(N.FRAMEBUFFER,K)&&b.drawBuffers(E,K),b.viewport(lt),b.scissor(St),b.setScissorTest(Et),J){let wt=Y.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,wt.__webglTexture,it)}else if(Tt){let wt=G;for(let Dt=0;Dt<E.textures.length;Dt++){let zt=Y.get(E.textures[Dt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Dt,zt.__webglTexture,it,wt)}}else if(E!==null&&it!==0){let wt=Y.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wt.__webglTexture,it)}$=-1};function hh(E){let G=Y.get(E);return(G.__readFormat!==E.format||G.__readType!==E.type)&&(G.__readFormat=E.format,G.__readType=E.type,G.__formatReadable=P.textureFormatReadable(E.format),G.__typeReadable=P.textureTypeReadable(E.type)),G}this.readRenderTargetPixels=function(E,G,it,K,J,Tt,It,wt=0){if(!(E&&E.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){b.bindFramebuffer(N.FRAMEBUFFER,Dt);try{let zt=E.textures[wt],Kt=zt.format,te=zt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+wt);let Nt=hh(zt);if(Nt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-K&&it>=0&&it<=E.height-J&&N.readPixels(G,it,K,J,Mt.convert(Kt),Mt.convert(te),Tt)}finally{let zt=ht!==null?Y.get(ht).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,G,it,K,J,Tt,It,wt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(G>=0&&G<=E.width-K&&it>=0&&it<=E.height-J){b.bindFramebuffer(N.FRAMEBUFFER,Dt);let zt=E.textures[wt],Kt=zt.format,te=zt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+wt);let Nt=hh(zt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,oe),N.bufferData(N.PIXEL_PACK_BUFFER,Tt.byteLength,N.STREAM_READ),N.readPixels(G,it,K,J,Mt.convert(Kt),Mt.convert(te),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let be=ht!==null?Y.get(ht).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,be);let pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gu(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Tt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(oe),N.deleteSync(pe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,it=0){let K=Math.pow(2,-it),J=Math.floor(E.image.width*K),Tt=Math.floor(E.image.height*K),It=G!==null?G.x:0,wt=G!==null?G.y:0;st.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,it,0,0,It,wt,J,Tt),b.unbindTexture()},this.copyTextureToTexture=function(E,G,it=null,K=null,J=0,Tt=0){let It,wt,Dt,zt,Kt,te,Nt,oe,be,pe=E.isCompressedTexture?E.mipmaps[Tt]:E.image;if(it!==null)It=it.max.x-it.min.x,wt=it.max.y-it.min.y,Dt=it.isBox3?it.max.z-it.min.z:1,zt=it.min.x,Kt=it.min.y,te=it.isBox3?it.min.z:0;else{let ve=Math.pow(2,-J);It=Math.floor(pe.width*ve),wt=Math.floor(pe.height*ve),E.isDataArrayTexture?Dt=pe.depth:E.isData3DTexture?Dt=Math.floor(pe.depth*ve):Dt=1,zt=0,Kt=0,te=0}K!==null?(Nt=K.x,oe=K.y,be=K.z):(Nt=0,oe=0,be=0);let he=Mt.convert(G.format),Fe=Mt.convert(G.type),Pt;G.isData3DTexture?(st.setTexture3D(G,0),Pt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(st.setTexture2DArray(G,0),Pt=N.TEXTURE_2D_ARRAY):(st.setTexture2D(G,0),Pt=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let Ve=b.getParameter(N.UNPACK_ROW_LENGTH),ne=b.getParameter(N.UNPACK_IMAGE_HEIGHT),an=b.getParameter(N.UNPACK_SKIP_PIXELS),bn=b.getParameter(N.UNPACK_SKIP_ROWS),Jn=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,pe.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),b.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),b.pixelStorei(N.UNPACK_SKIP_IMAGES,te);let Wi=E.isDataArrayTexture||E.isData3DTexture,ce=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){let ve=Y.get(E),jn=Y.get(G),fe=Y.get(ve.__renderTarget),Qn=Y.get(jn.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,fe.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Xi=0;Xi<Dt;Xi++)Wi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,J,te+Xi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(G).__webglTexture,Tt,be+Xi)),N.blitFramebuffer(zt,Kt,It,wt,Nt,oe,It,wt,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||Y.has(E)){let ve=Y.get(E),jn=Y.get(G);b.bindFramebuffer(N.READ_FRAMEBUFFER,F),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let fe=0;fe<Dt;fe++)Wi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,J,te+fe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,J),ce?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jn.__webglTexture,Tt,be+fe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jn.__webglTexture,Tt),J!==0?N.blitFramebuffer(zt,Kt,It,wt,Nt,oe,It,wt,N.COLOR_BUFFER_BIT,N.NEAREST):ce?N.copyTexSubImage3D(Pt,Tt,Nt,oe,be+fe,zt,Kt,It,wt):N.copyTexSubImage2D(Pt,Tt,Nt,oe,zt,Kt,It,wt);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ce?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Pt,Tt,Nt,oe,be,It,wt,Dt,he,Fe,pe.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,Tt,Nt,oe,be,It,wt,Dt,he,pe.data):N.texSubImage3D(Pt,Tt,Nt,oe,be,It,wt,Dt,he,Fe,pe):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Tt,Nt,oe,It,wt,he,Fe,pe.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Tt,Nt,oe,pe.width,pe.height,he,pe.data):N.texSubImage2D(N.TEXTURE_2D,Tt,Nt,oe,It,wt,he,Fe,pe);b.pixelStorei(N.UNPACK_ROW_LENGTH,Ve),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne),b.pixelStorei(N.UNPACK_SKIP_PIXELS,an),b.pixelStorei(N.UNPACK_SKIP_ROWS,bn),b.pixelStorei(N.UNPACK_SKIP_IMAGES,Jn),Tt===0&&G.generateMipmaps&&N.generateMipmap(Pt),b.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&st.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?st.setTextureCube(E,0):E.isData3DTexture?st.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?st.setTexture2DArray(E,0):st.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){nt=0,rt=0,ht=null,b.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Zu={type:"change"},Fc={type:"start"},Ju={type:"end"},qo=new Li,Ku=new Qe,Gx=Math.cos(70*hc.DEG2RAD),Ae=new H,Ze=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uc=1e-6,Yo=class extends gr{constructor(t,e=null){super(t,e),this.state=le.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new en,this._lastTargetPosition=new H,this._quat=new en().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cn,this._sphericalDelta=new cn,this._scale=1,this._panOffset=new H,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new H,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerUp=Xx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=$x.bind(this),this._onKeyDown=Zx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=Jx.bind(this),this._onMouseDown=qx.bind(this),this._onMouseMove=Yx.bind(this),this._interceptControlDown=Qx.bind(this),this._interceptControlUp=t_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=le.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=le.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ae.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<Gx?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uc||this._lastTargetPosition.distanceToSquared(this.target)>Uc?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Hx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Xx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ju),this.state=le.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function qx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Fc)}function Yx(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $x(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(Fc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ju))}function Zx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Fc)}function Jx(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function jx(i){this.enabled!==!1&&i.preventDefault()}function Qx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fr=new H;function fn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Fr.copy(t),Fr[n]=0,Fr.normalize();let c=.5*a/(a+o),h=1-Fr.angleTo(i)/l;return Math.sign(Fr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var $o=class i extends ln{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new H,c=new H,h=new H(t,e,n).divideScalar(2).subScalar(r),m=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,_=m.length/6,g=new H,f=.5/a;for(let d=0,S=0;d<m.length;d+=3,S+=2)switch(l.fromArray(m,d),c.copy(l),c.x-=Math.sign(c.x)*f,c.y-=Math.sign(c.y)*f,c.z-=Math.sign(c.z)*f,c.normalize(),m[d+0]=h.x*Math.sign(l.x)+c.x*r,m[d+1]=h.y*Math.sign(l.y)+c.y*r,m[d+2]=h.z*Math.sign(l.z)+c.z*r,u[d+0]=c.x,u[d+1]=c.y,u[d+2]=c.z,Math.floor(d/_)){case 0:g.set(1,0,0),p[S+0]=fn(g,c,"z","y",r,n),p[S+1]=1-fn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),p[S+0]=1-fn(g,c,"z","y",r,n),p[S+1]=1-fn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),p[S+0]=1-fn(g,c,"x","z",r,t),p[S+1]=fn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),p[S+0]=1-fn(g,c,"x","z",r,t),p[S+1]=1-fn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),p[S+0]=1-fn(g,c,"x","y",r,t),p[S+1]=1-fn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),p[S+0]=fn(g,c,"x","y",r,t),p[S+1]=1-fn(g,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Zo=class extends Ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ln;t.deleteAttribute("uv");let e=new Ln({side:Ne}),n=new Ln,s=new fr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ue(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new tr(t,n,6),o=new De;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ue(t,Rs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ue(t,Rs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ue(t,Rs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let m=new ue(t,Rs(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let u=new ue(t,Rs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new ue(t,Rs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Rs(i){return new lr({color:0,emissive:16777215,emissiveIntensity:i})}var Ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var rn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e_=new hi(-1,1,1,-1,0,1),Oc=class extends We{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}},n_=new Oc,_i=class{constructor(t){this._mesh=new ue(n_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ko=class extends rn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dn.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _i(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Or=class extends rn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jo=class extends rn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var jo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ft);this._width=n.width,this._height=n.height,e=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Re}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ko(Ps),this.copyPass.material.blending=Se,this.timer=new pr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(a instanceof Or?n=!0:a instanceof Jo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qo=class extends rn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var zr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ft},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ie},cameraProjectionMatrixInverse:{value:new ie},cameraWorldMatrix:{value:new ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

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
		}`},Br={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},tl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function ju(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=i_(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],l=2*Math.PI*o/n,c=new H(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Yn(s,t,t);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}function i_(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var kr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:zc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ft},cameraProjectionMatrixInverse:{value:new ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function zc(i,t,e){let n=s_(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function s_(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new H(Math.cos(r),Math.sin(r),a))}return n}var el=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,m=(l+c)*h,u=l-m,p=c-m,_=t-u,g=e-p,f,d;_>g?(f=1,d=0):(f=0,d=1);let S=_-f+h,A=g-d+h,x=_-1+2*h,v=g-1+2*h,y=l&255,T=c&255,M=this.perm[y+this.perm[T]]%12,w=this.perm[y+f+this.perm[T+d]]%12,R=this.perm[y+1+this.perm[T+1]]%12,I=.5-_*_-g*g;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[M],_,g));let L=.5-S*S-A*A;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[w],S,A));let V=.5-x*x-v*v;return V<0?r=0:(V*=V,r=V*V*this._dot(this.grad3[R],x,v)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),m=Math.floor(e+c),u=Math.floor(n+c),p=1/6,_=(h+m+u)*p,g=h-_,f=m-_,d=u-_,S=t-g,A=e-f,x=n-d,v,y,T,M,w,R;S>=A?A>=x?(v=1,y=0,T=0,M=1,w=1,R=0):S>=x?(v=1,y=0,T=0,M=1,w=0,R=1):(v=0,y=0,T=1,M=1,w=0,R=1):A<x?(v=0,y=0,T=1,M=0,w=1,R=1):S<x?(v=0,y=1,T=0,M=0,w=1,R=1):(v=0,y=1,T=0,M=1,w=1,R=0);let I=S-v+p,L=A-y+p,V=x-T+p,F=S-M+2*p,W=A-w+2*p,nt=x-R+2*p,rt=S-1+3*p,ht=A-1+3*p,$=x-1+3*p,at=h&255,lt=m&255,St=u&255,Et=this.perm[at+this.perm[lt+this.perm[St]]]%12,Zt=this.perm[at+v+this.perm[lt+y+this.perm[St+T]]]%12,Ct=this.perm[at+M+this.perm[lt+w+this.perm[St+R]]]%12,Bt=this.perm[at+1+this.perm[lt+1+this.perm[St+1]]]%12,tt=.6-S*S-A*A-x*x;tt<0?s=0:(tt*=tt,s=tt*tt*this._dot3(this.grad3[Et],S,A,x));let ot=.6-I*I-L*L-V*V;ot<0?r=0:(ot*=ot,r=ot*ot*this._dot3(this.grad3[Zt],I,L,V));let xt=.6-F*F-W*W-nt*nt;xt<0?a=0:(xt*=xt,a=xt*xt*this._dot3(this.grad3[Ct],F,W,nt));let Lt=.6-rt*rt-ht*ht-$*$;return Lt<0?o=0:(Lt*=Lt,o=Lt*Lt*this._dot3(this.grad3[Bt],rt,ht,$)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,m,u,p,_,g=(t+e+n+s)*l,f=Math.floor(t+g),d=Math.floor(e+g),S=Math.floor(n+g),A=Math.floor(s+g),x=(f+d+S+A)*c,v=f-x,y=d-x,T=S-x,M=A-x,w=t-v,R=e-y,I=n-T,L=s-M,V=w>R?32:0,F=w>I?16:0,W=R>I?8:0,nt=w>L?4:0,rt=R>L?2:0,ht=I>L?1:0,$=V+F+W+nt+rt+ht,at=a[$][0]>=3?1:0,lt=a[$][1]>=3?1:0,St=a[$][2]>=3?1:0,Et=a[$][3]>=3?1:0,Zt=a[$][0]>=2?1:0,Ct=a[$][1]>=2?1:0,Bt=a[$][2]>=2?1:0,tt=a[$][3]>=2?1:0,ot=a[$][0]>=1?1:0,xt=a[$][1]>=1?1:0,Lt=a[$][2]>=1?1:0,vt=a[$][3]>=1?1:0,Wt=w-at+c,se=R-lt+c,X=I-St+c,dt=L-Et+c,gt=w-Zt+2*c,pt=R-Ct+2*c,Ot=I-Bt+2*c,Gt=L-tt+2*c,z=w-ot+3*c,et=R-xt+3*c,yt=I-Lt+3*c,N=L-vt+3*c,kt=w-1+4*c,$t=R-1+4*c,P=I-1+4*c,b=L-1+4*c,k=f&255,Y=d&255,st=S&255,C=A&255,U=o[k+o[Y+o[st+o[C]]]]%32,D=o[k+at+o[Y+lt+o[st+St+o[C+Et]]]]%32,O=o[k+Zt+o[Y+Ct+o[st+Bt+o[C+tt]]]]%32,Z=o[k+ot+o[Y+xt+o[st+Lt+o[C+vt]]]]%32,j=o[k+1+o[Y+1+o[st+1+o[C+1]]]]%32,q=.6-w*w-R*R-I*I-L*L;q<0?h=0:(q*=q,h=q*q*this._dot4(r[U],w,R,I,L));let Q=.6-Wt*Wt-se*se-X*X-dt*dt;Q<0?m=0:(Q*=Q,m=Q*Q*this._dot4(r[D],Wt,se,X,dt));let ut=.6-gt*gt-pt*pt-Ot*Ot-Gt*Gt;ut<0?u=0:(ut*=ut,u=ut*ut*this._dot4(r[O],gt,pt,Ot,Gt));let mt=.6-z*z-et*et-yt*yt-N*N;mt<0?p=0:(mt*=mt,p=mt*mt*this._dot4(r[Z],z,et,yt,N));let Rt=.6-kt*kt-$t*$t-P*P-b*b;return Rt<0?_=0:(Rt*=Rt,_=Rt*Rt*this._dot4(r[j],kt,$t,P,b)),27*(h+m+u+p+_)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Is=class i extends rn{constructor(t,e,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ju(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Me(this.width,this.height,{type:Re,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new _e({defines:Object.assign({},zr.defines),uniforms:dn.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,blending:Se,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new or,this.normalMaterial.blending=Se,this.pdMaterial=new _e({defines:Object.assign({},kr.defines),uniforms:dn.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new _e({defines:Object.assign({},Br.defines),uniforms:dn.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,blending:Se}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new _e({uniforms:dn.clone(Ps.uniforms),vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:_r,blendDst:Ui,blendEquation:hn,blendSrcAlpha:xr,blendDstAlpha:Ui,blendEquationAlpha:hn}),this.blendMaterial=new _e({uniforms:dn.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Za,blendSrc:_r,blendDst:Ui,blendEquation:hn,blendSrcAlpha:xr,blendDstAlpha:Ui,blendEquationAlpha:hn}),this._fsQuad=new _i(null),this._originalClearColor=new qt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new In,this.depthTexture.format=Nn,this.depthTexture.type=gi,this.normalRenderTarget=new Me(this.width,this.height,{minFilter:ye,magFilter:ye,type:Re,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=zc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Se,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Se,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Se,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Se,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Se,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new el,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Yn(s,t,t,$e,Be);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}};Is.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Vr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nl=class extends rn{constructor(){super(),this.isOutputPass=!0,this.uniforms=dn.clone(Vr.uniforms),this.material=new xs({name:Vr.name,uniforms:this.uniforms,vertexShader:Vr.vertexShader,fragmentShader:Vr.fragmentShader}),this._fsQuad=new _i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fi?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===br&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ke=Math.PI,ki=(i,t,e)=>Math.max(t,Math.min(e,i)),il=(i,t,e)=>i+(t-i)*e,Ls={outCubic:i=>1-(1-i)**3,inOutCubic:i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,outBack:i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2,inBack:i=>2.70158*i*i*i-1.70158*i*i},Qu=["x","y","z","w","h","d","ry","rx"];function Bc(i,t,e,n,s=.92){let r=new Ln({color:i,roughness:s,metalness:0});return r.customProgramCacheKey=()=>`grid${t}_${e}_${n}`,r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <map_fragment>",`#include <map_fragment>
        vec2 gc = vWp.xz / ${t.toFixed(3)};
        vec2 gd = abs(fract(gc - 0.5) - 0.5) / max(fwidth(gc), vec2(1e-4));
        float gl = 1.0 - min(min(gd.x, gd.y) / ${e.toFixed(2)}, 1.0);
        diffuseColor.rgb *= 1.0 - gl * ${n.toFixed(3)};`)},r}function r_(){let i=(n,s=.84,r={})=>new Ln({color:n,roughness:s,metalness:0,...r}),t={w:i(15855851),g:i(14342354,.86),r:i(11082520,.58),k:i(2763308,.32),glass:new ar({color:15331827,roughness:.04,metalness:0,transparent:!0,opacity:.17,envMapIntensity:1.6,depthWrite:!1}),f:Bc(15328991,.6,1.1,.08),f2:Bc(15789801,1.2,1.1,.06),s:Bc(14211026,.5,1.3,.1)},e={};for(let[n,s]of Object.entries(t)){let r=s.clone();s.customProgramCacheKey!==nn.prototype.customProgramCacheKey&&(r.onBeforeCompile=s.onBeforeCompile,r.customProgramCacheKey=s.customProgramCacheKey),n==="glass"?(r.opacity=.32,r.color.set(16173510)):(r.emissive=new qt(11082520),r.emissiveIntensity=n==="r"?.35:.16),e[n]=r}return{M:t,H:e}}var On=new Map,zn=i=>Math.round(i*1e3)/1e3;function a_(i){let t,e;if(i.t==="box"){let n=i.plain?0:i.rad??Math.min(.026,Math.min(i.w,i.h,i.d)*.22);t=`b${zn(i.w)}_${zn(i.h)}_${zn(i.d)}_${zn(n)}`,(e=On.get(t))||On.set(t,e=n<.004?new ln(i.w,i.h,i.d):new $o(i.w,i.h,i.d,2,n))}else if(i.t==="cyl"){let n=i.rt??1,s=i.w/2;t=`c${zn(i.w)}_${zn(i.h)}_${n}`,(e=On.get(t))||On.set(t,e=new sr(s*n,s,i.h,i.w>.25?48:24))}else i.t==="sph"?(t=`s${zn(i.w)}`,(e=On.get(t))||On.set(t,e=new gs(i.w/2,40,26))):i.t==="dome"?(t=`d${zn(i.w)}`,(e=On.get(t))||On.set(t,e=new gs(i.w/2,48,18,0,Ke*2,0,Ke/2))):(t=`p${zn(i.w)}_${zn(i.h)}`,(e=On.get(t))||On.set(t,e=new ir(i.w/2,Math.max(.01,i.h-i.w),8,20)));return e}var kc=i=>({x:i.x,y:i.y,z:i.z,w:i.w,h:i.h,d:i.d,ry:i.ry,rx:i.rx}),Vc=class{constructor(t,e){this.eng=e,this.obj=new Tn,this.mesh=new ue,this.mesh.userData.blk=this,this.obj.add(this.mesh),this.setSpec(t),this.st=kc(t),this.anim=null,this.lift=0,this.sq=1,this.sxz=1,this.wig=0,this.grow=1}setSpec(t){this.spec=t,this.mesh.geometry=a_(t),this.gw=t.w,this.gh=t.h,this.gd=t.d,this.mesh.position.y=t.t==="dome"?0:t.h/2,this.mesh.castShadow=t.cast,this.mesh.receiveShadow=t.m!=="glass",this.mesh.renderOrder=t.m==="glass"?2:0,this.setMat(t.m)}setMat(t){this.m=t,this.mesh.material=this.hover?this.eng.H[t]:this.eng.M[t]}apply(t){let e=this.obj,n=this.st;e.position.set(n.x,n.y+this.lift,n.z),e.rotation.set(n.rx,n.ry+this.wig,0,"YXZ");let s=this.grow;e.scale.set(n.w/this.gw*this.sxz*s,n.h/this.gh*this.sq*s*t,n.d/this.gd*this.sxz*s)}},sl=class{constructor(t,e,n={}){this.stage=t,this.canvas=e,this.opt=n,this.mobile=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<700,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.blocks=new Map,this.leaving=new Set,this.picks=[],this.cut={back:1,left:1,right:1,front:1,inner:1},this.need=!0,this.view="3d",this.visible=!0,this.lastInput=performance.now(),this.tw=null,this.idleBase=null,this.frameMs=[],this.quality=this.mobile?1:2,this.aoScale=1;let s=this.renderer=new Ho({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setClearColor(0,0),s.outputColorSpace=He,s.toneMapping=Fi,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Ni;let{M:r,H:a}=r_();this.M=r,this.H=a;let o=this.scene=new Ii,l=new As(s);o.environment=l.fromScene(new Zo,.04).texture,o.environmentIntensity=.5,l.dispose();let c=this.sun=new _s(16775150,3);c.castShadow=!0,c.shadow.mapSize.set(this.mobile?2048:4096,this.mobile?2048:4096),c.shadow.bias=-25e-5,c.shadow.normalBias=.025,c.shadow.radius=4,o.add(c,c.target);let h=new _s(15134198,.28);h.position.set(8,6,-6),o.add(h);let m=this.ground=new ue(new Di(220,220),new rr({opacity:.2,color:2760728}));m.rotation.x=-Ke/2,m.position.y=-.52,m.receiveShadow=!0,m.userData.noAO=!0,o.add(m),this.root=new Tn,o.add(this.root);let u=this.cam=new Ie(26,1,.3,300);u.position.set(14,16,22);let p=this.controls=new Yo(u,e);p.enableDamping=!0,p.dampingFactor=.075,p.rotateSpeed=.55,p.panSpeed=.7,p.zoomSpeed=.9,p.screenSpacePanning=!1,p.minPolarAngle=0,p.maxPolarAngle=1.3,p.addEventListener("start",()=>this.input()),p.addEventListener("change",()=>{this.need=!0}),e.style.touchAction="pan-y",this.ray=new mr,this.ptr=new Ft,this.ptrDirty=!1,this.hoverG=null,this.bindPointer(),this.setupComposer(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize(),this.io=new IntersectionObserver(_=>{this.visible=_[0].isIntersecting,this.visible&&(this.need=!0)},{threshold:0}),this.io.observe(t),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}setupComposer(){if(this.composer&&(this.composer.dispose(),this.composer=null,this.gtao=null),this.quality<2)return;let t=this.renderer,e=new Me(2,2,{type:Re,samples:4}),n=this.composer=new jo(t,e);n.addPass(new Qo(this.scene,this.cam));let s=this.gtao=new Is(this.scene,this.cam,2,2);s.output=Is.OUTPUT.Default,s.blendIntensity=1,s.updateGtaoMaterial({radius:.55,distanceExponent:1.3,thickness:1.2,scale:1.15,samples:16,distanceFallOff:1,screenSpaceRadius:!1}),s.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:16});let r=s._overrideVisibility.bind(s);s._overrideVisibility=()=>{r(),this.scene.traverse(o=>{o.visible&&(o.userData.noAO||o.isMesh&&o.material&&o.material.transparent)&&(o.visible=!1,s._visibilityCache.push(o))})};let a=s.setSize.bind(s);s.setSize=(o,l)=>a(Math.max(2,Math.round(o*this.aoScale)),Math.max(2,Math.round(l*this.aoScale))),n.addPass(s),n.addPass(new nl)}dpr(){return this.quality>=2?2:Math.min(window.devicePixelRatio||1,this.quality>=1?2:1.5)}resize(){let t=this.stage.clientWidth,e=this.stage.clientHeight;if(!t||!e)return;let n=this.dpr();this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(t,e)),this.size={w:t,h:e},this.applyOffset(),this.need=!0}input(){this.lastInput=performance.now(),this.idleBase=null,this.tw&&this.tw.soft&&(this.tw=null)}bindPointer(){let t=this.canvas,e=null;t.addEventListener("pointermove",n=>{let s=t.getBoundingClientRect();this.ptr.set((n.clientX-s.left)/s.width*2-1,-((n.clientY-s.top)/s.height)*2+1),this.ptrPx={x:n.clientX-s.left,y:n.clientY-s.top},this.ptrDirty=n.pointerType==="mouse"}),t.addEventListener("pointerleave",()=>{this.setHover(null)}),t.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,t:performance.now()},this.input(),this.opt.onGesture&&this.opt.onGesture()}),t.addEventListener("pointerup",n=>{if(!e)return;if(Math.hypot(n.clientX-e.x,n.clientY-e.y)<6&&performance.now()-e.t<450){let r=t.getBoundingClientRect();this.ptr.set((n.clientX-r.left)/r.width*2-1,-((n.clientY-r.top)/r.height)*2+1);let a=this.pick();a&&(this.hop(a.spec.g),this.opt.onTap&&this.opt.onTap(a.spec.lab))}e=null})}pick(){this.ray.setFromCamera(this.ptr,this.cam);let t=this.ray.intersectObjects(this.picks,!1);for(let e of t){let n=e.object.userData.blk;if(n&&n.spec.lab&&!this.leaving.has(n))return n}return null}setHover(t){if(t!==this.hoverG){this.hoverG=t;for(let e of this.blocks.values()){let n=t!==null&&e.spec.g===t;n!==!!e.hover&&(e.hover=n,e.setMat(e.m))}this.canvas.style.cursor=t?"pointer":"",this.need=!0}}hop(t){let e=performance.now();for(let n of this.blocks.values())n.spec.g===t&&!n.anim&&(n.anim={type:"hop",t0:e+n.spec.i*18,dur:520});this.opt.sound&&this.opt.sound.pop()}hopAll(){let t=performance.now();for(let e of this.blocks.values())!e.spec.struct&&!e.anim&&(e.anim={type:"hop",t0:t+Math.random()*260,dur:520});this.opt.sound&&this.opt.sound.pop()}setLayout(t,e="switch"){let{blocks:n,P:s}=t,r=performance.now(),a=e==="first"||this.blocks.size===0,o=e==="live",l=this.P,c=!l||l.id!==s.id,h=!!l&&(l.sig!==s.sig||Math.abs(l.W-s.W)>.04||Math.abs(l.D-s.D)>.04||l.glassRight!==s.glassRight);this.quiet=o,this.P=s;let m=new Map(n.map(x=>[x.k,x])),u=s.door.x,p=s.zF,_=1;for(let x of n)_=Math.max(_,Math.hypot(x.x-u,x.z-p));let g=x=>Math.hypot(x.x-u,x.z-p)/_,f=a?1.35:1,d=this.reduced?.02:o?.3:1,S=r,A=0;for(let[x,v]of this.blocks){let y=m.get(x);if(!(y&&y.t===v.spec.t)){if(this.blocks.delete(x),!v.obj.visible){this.root.remove(v.obj);continue}this.leaving.add(v),v.anim={type:"out",t0:r+((4-v.spec.L)*45+Math.random()*140)*d,dur:360*d},A++}}A&&!a&&!o&&this.opt.sound&&this.opt.sound.whoosh();for(let x of n){let v=this.blocks.get(x.k);if(v&&!v.obj.visible&&(this.root.remove(v.obj),this.blocks.delete(x.k),v=null),v){let w={...v.st},R=Qu.every(V=>Math.abs(w[V]-x[V])<1e-4),I=Math.abs(v.gw-x.w)<1e-4&&Math.abs(v.gh-x.h)<1e-4&&Math.abs(v.gd-x.d)<1e-4&&v.spec.rt===x.rt;if(R&&I&&v.m===x.m){v.spec=x;continue}let L=(x.struct?120:200+g(x)*380+x.i*12)*d;v.anim={type:"morph",t0:r+L,dur:(x.struct?900:760)*(o?.45:d),from:w,to:kc(x),spec:x,arc:x.struct?0:.28+Math.random()*.2},S=Math.max(S,v.anim.t0+v.anim.dur);continue}let y=new Vc(x,this);y.obj.visible=!1,this.root.add(y.obj),this.blocks.set(x.k,y);let T;x.L===0?T=(a?0:150)+g(x)*150:x.L===1?T=380+g(x)*520:T=(a?950:560)+(x.L-2)*380+g(x)*900+x.i*45,T*=f*d;let M=(x.L<=1?640:560)*d;y.anim={type:"in",t0:r+T,dur:M,drop:x.L<=1?0:1.6+Math.random()*1.4,landed:!1},S=Math.max(S,r+T+M)}this.picks=[];for(let x of this.blocks.values())x.spec.lab&&this.picks.push(x.mesh);this.buildEnd=S,this.doneSent=!1,this.fitShadow(),a?this.fit(this.view,!1,!1):c&&s.id!=="custom"?this.fit(this.view,!0,!1):(c||h)&&this.fit(this.view,!0,!0,o?520:1150),this.need=!0}fitShadow(){let t=this.P,e=(t.px0+t.px1)/2,n=(t.pz0+t.pz1)/2,s=Math.max(t.px1-t.px0,t.pz1-t.pz0)*.62+2,r=this.sun;r.target.position.set(e,0,n),r.position.set(e-7,26,n+10);let a=r.shadow.camera;a.left=-s,a.right=s,a.top=s,a.bottom=-s,a.near=1,a.far=60,a.updateProjectionMatrix()}applyOffset(){let{w:t,h:e}=this.size,n=this.opt.safe?this.opt.safe():{top:0,bottom:0,left:0,right:0},s=Math.max(60,t-n.left-n.right),r=Math.max(60,e-n.top-n.bottom),a=n.left+s/2,o=n.top+r/2,l=2*Math.max(a,t-a),c=2*Math.max(o,e-o);this.cam.aspect=l/c,this.cam.setViewOffset(l,c,l/2-a,c/2-o,t,e),this.cam.updateProjectionMatrix(),this.safeN={x0:n.left/t*2-1,x1:(t-n.right)/t*2-1,y0:1-(e-n.bottom)/e*2,y1:1-n.top/e*2}}fitDist(t,e,n){let s=this.P,r=this.cam,a=r.position.clone(),o=r.quaternion.clone(),l=[];for(let f of[s.px0,s.px1])for(let d of[-.52,3.1])for(let S of[s.pz0,s.pz1])l.push(new H(f,d,S));let c=new H,h=new H,m=new cn,u=this.safeN,p=f=>{r.position.copy(t).add(c.setFromSpherical(m.set(f,e,n))),r.lookAt(t),r.updateMatrixWorld();for(let d of l)if(h.copy(d).project(r),h.x<u.x0||h.x>u.x1||h.y<u.y0||h.y>u.y1||h.z>1)return!1;return!0},_=2,g=260;for(let f=0;f<22;f++){let d=(_+g)/2;p(d)?g=d:_=d}return r.position.copy(a),r.quaternion.copy(o),r.updateMatrixWorld(),g}fit(t,e=!0,n=!1,s=1150){let r=this.P;if(!r)return;this.view=t,this.applyOffset();let a=this.controls,o=new H((r.px0+r.px1)/2,t==="plan"?0:.6,(r.pz0+r.pz1)/2),l=t==="plan"?1e-4:.9,c=t==="plan"?0:.62,h=new cn().setFromVector3(this.cam.position.clone().sub(a.target));n&&t!=="plan"&&(l=h.phi,c=h.theta);let m=this.fitDist(o,l,c)*(t==="plan"?1:.93);this.frameGoal={dist:m,target:o},a.minDistance=m*.3,a.maxDistance=m*1.9;let u={target:o,dist:m,phi:l,theta:c};if(!e||this.reduced){this.setCam(u),this.tw=null;return}this.tw={t0:performance.now(),dur:s,from:{target:a.target.clone(),dist:h.radius,phi:h.phi,theta:h.theta},to:u}}setCam(t){this.controls.target.copy(t.target);let n=new H().setFromSpherical(new cn(t.dist,t.phi,t.theta));this.cam.position.copy(t.target).add(n),this.cam.lookAt(t.target),this.need=!0}zoom(t){let e=this.controls,n=this.cam.position.clone().sub(e.target),s=ki(n.length()*t,e.minDistance,e.maxDistance),r=new cn().setFromVector3(n);this.input(),this.tw={t0:performance.now(),dur:380,from:{target:e.target.clone(),dist:r.radius,phi:r.phi,theta:r.theta},to:{target:e.target.clone(),dist:s,phi:r.phi,theta:r.theta}}}wheel(t){let e=this.controls,n=this.cam.position.clone().sub(e.target),s=Math.exp(t.deltaY*(t.deltaMode?.05:.0022));n.setLength(ki(n.length()*s,e.minDistance,e.maxDistance)),this.cam.position.copy(e.target).add(n),this.input(),this.need=!0}loop(t){if(this.raf=requestAnimationFrame(this.loop),!this.visible)return;let e=performance.now(),n=!1;if(this.tw){let h=ki((t-this.tw.t0)/this.tw.dur,0,1),m=Ls.inOutCubic(h),u=this.tw.from,p=this.tw.to,_=p.theta-u.theta;_>Ke?_-=Ke*2:_<-Ke&&(_+=Ke*2),this.setCam({target:u.target.clone().lerp(p.target,m),dist:il(u.dist,p.dist,m),phi:il(u.phi,p.phi,m),theta:u.theta+_*m}),h>=1&&(this.tw=null),n=!0}else if(!this.reduced&&this.view==="3d"&&!this.mobile&&t-this.lastInput>6e3&&t>(this.buildEnd||0)+1500){let h=this.controls,m=this.cam.position.clone().sub(h.target),u=new cn().setFromVector3(m);this.idleBase===null&&(this.idleBase=u.theta,this.idleT0=t),u.theta=this.idleBase+Math.sin((t-this.idleT0)*11e-5)*.32,this.cam.position.copy(h.target).add(m.setFromSpherical(u)),this.cam.lookAt(h.target),n=!0}if(this.controls.update()&&(n=!0),this.P){let h=this.controls.target,m=this.P,u=ki(h.x,m.px0,m.px1),p=ki(h.z,m.pz0,m.pz1),_=ki(h.y,-.2,2);if(u!==h.x||p!==h.z||_!==h.y){let g=new H(u-h.x,_-h.y,p-h.z);h.add(g),this.cam.position.add(g)}}let s=this.cam.position.x-this.controls.target.x,r=this.cam.position.z-this.controls.target.z,a=Math.hypot(s,r)||1,o=this.view==="plan"||this.cam.position.y-this.controls.target.y>a*4,l=.42/3.1,c={back:!o&&-r/a>.18?l:1,left:!o&&-s/a>.18?l:1,right:!o&&s/a>.18?l:1,front:!o&&r/a>.18?l:1,inner:o?1:l};for(let h in c){let m=this.cut[h],u=c[h];Math.abs(m-u)>.002?(this.cut[h]=il(m,u,.14),n=!0):this.cut[h]=u}for(let h of this.blocks.values())(h.anim||h.spec.cut)&&(n=this.step(h,t)||n);for(let h of this.leaving)n=this.step(h,t)||n;if(this.buildEnd&&t>this.buildEnd&&!this.doneSent&&(this.doneSent=!0,this.opt.onDone&&this.opt.onDone()),this.ptrDirty&&!this.tw){this.ptrDirty=!1;let h=this.pick();this.setHover(h?h.spec.g:null),this.opt.onHover&&this.opt.onHover(h?h.spec.lab:"",this.ptrPx)}(n||this.need)&&(this.need=!1,this.composer?this.composer.render():this.renderer.render(this.scene,this.cam),this.opt.onFrame&&this.opt.onFrame(),this.measure(performance.now()-e,t))}measure(t,e){if(this.prevFrame&&e-this.prevFrame<40&&this.frameMs.push(e-this.prevFrame),this.prevFrame=e,this.frameMs.length>=90){let n=[...this.frameMs].sort((r,a)=>r-a),s=n[Math.floor(n.length*.5)];this.frameMs.length=0,this.stats={p50:s},s>24&&this.quality>0&&(this.quality--,this.setupComposer(),this.resize())}}step(t,e){let n=t.anim,s=t.spec.cut?this.cut[t.spec.cut]:1;if(!n)return t.apply(s),!1;if(e<n.t0)return n.type==="in"?t.obj.visible=!1:t.apply(s),!0;let r=ki((e-n.t0)/n.dur,0,1);if(t.lift=0,t.sq=1,t.sxz=1,t.wig=0,t.grow=1,n.type==="in"){t.obj.visible=!0;let a=t.spec;if(a.L===0){let o=Ls.outCubic(r);t.lift=-.35*(1-o),t.grow=.94+.06*o}else if(a.L===1)t.sq=Math.max(.001,Ls.outBack(r));else{let o=Math.min(1,r/.72);if(t.lift=n.drop*(1-o*o),t.grow=.3+.7*Ls.outCubic(o),r>.72){let l=(r-.72)/.28;t.sq=1-.2*Math.sin(Ke*l)*(1-l*.4),t.sxz=1+.09*Math.sin(Ke*l)}!n.landed&&o>=1&&(n.landed=!0,this.opt.sound&&!this.quiet&&this.opt.sound.tick(Math.cbrt(a.w*a.h*a.d)))}}else if(n.type==="out"){let a=Ls.inBack(r);if(t.lift=.45*Math.sin(Ke*Math.min(1,r*1.2))*.6,t.grow=Math.max(1e-4,1-a),r>=1)return this.leaving.delete(t),this.root.remove(t.obj),!0}else if(n.type==="morph"){let a=Ls.inOutCubic(r);for(let o of Qu)t.st[o]=il(n.from[o],n.to[o],a);t.lift=n.arc*Math.sin(Ke*r),r>=.5&&t.m!==n.spec.m&&t.setMat(n.spec.m),r>=1&&(t.setSpec(n.spec),t.st=kc(n.spec))}else n.type==="hop"&&(t.lift=.42*Math.sin(Ke*r),t.wig=.16*Math.sin(Ke*2*r)*(1-r),t.sq=1+.06*Math.sin(Ke*2*r));return t.apply(s),r>=1&&t.anim===n&&(t.anim=null,t.lift=0,t.sq=1,t.sxz=1,t.wig=0,t.grow=1,t.apply(s)),!0}project(t,e,n){let s=new H(t,e,n).project(this.cam);return{x:(s.x*.5+.5)*this.size.w,y:(-s.y*.5+.5)*this.size.h,ok:s.z<1}}snapshot(){return this.composer?this.composer.render():this.renderer.render(this.scene,this.cam),this.canvas.toDataURL("image/png")}dispose(){cancelAnimationFrame(this.raf),this.ro.disconnect(),this.io.disconnect(),this.controls.dispose(),this.renderer.dispose()}};var vi=Math.PI,Xe=i=>i.toFixed(1).replace(".",","),rl=class{constructor(t){this.rnd=t,this.list=[],this.stack=[{x:0,z:0,r:0}],this.g="",this.lab="",this.L=2,this.sub=0,this.stats={seats:0,counter:0,shelf:0,places:0},this.depth=0,this.rec=[],this.open=null}closeRec(){if(!this.open)return;let t={};for(let e of Object.keys(this.stats))t[e]=this.stats[e]-(this.open.s0[e]||0);this.rec.push({g:this.open.g,d:t}),this.open=null}removeGroups(t){this.closeRec();let e=new Set(t);for(let n of this.rec)if(e.has(n.g))for(let s of Object.keys(n.d))this.stats[s]-=n.d[s];this.rec=this.rec.filter(n=>!e.has(n.g)),this.list=this.list.filter(n=>!e.has(n.g))}get f(){return this.stack[this.stack.length-1]}at(t,e,n,s){let r=this.f,a=Math.cos(r.r),o=Math.sin(r.r);this.stack.push({x:r.x+t*a+e*o,z:r.z-t*o+e*a,r:r.r+n}),s(),this.stack.pop()}group(t,e,n,s){this.depth===0&&(this.closeRec(),this.open={g:t,s0:{...this.stats}}),this.depth++;let r=[this.g,this.lab,this.L,this.sub];this.g=t,this.lab=e,this.L=n,this.sub=0,s(),[this.g,this.lab,this.L,this.sub]=r,this.depth--}add(t,e,n,s,r,a,o,l,c,h={}){let m=this.f,u=Math.cos(m.r),p=Math.sin(m.r);this.list.push({t,k:(this.g?this.g+".":"")+e,g:this.g||e,lab:h.lab??this.lab,L:h.L??this.L,i:this.sub++,x:m.x+n*u+r*p,y:s,z:m.z-n*p+r*u,w:a,h:o,d:l,ry:m.r+(h.ry||0),rx:h.rx||0,m:c,rt:h.rt,cut:h.cut,cast:h.cast??c!=="glass",plain:h.plain,struct:h.struct,rad:h.rad})}box(t,e,n,s,r,a,o,l="w",c){this.add("box",t,e,n,s,r,a,o,l,c)}cyl(t,e,n,s,r,a,o="w",l){this.add("cyl",t,e,n,s,r*2,a,r*2,o,l)}sph(t,e,n,s,r,a="w",o){this.add("sph",t,e,n,s,r*2,r*2,r*2,a,o)}dome(t,e,n,s,r,a="w",o){this.add("dome",t,e,n,s,r*2,r,r*2,a,o)}cap(t,e,n,s,r,a,o="w",l){this.add("cap",t,e,n,s,r*2,a,r*2,o,l)}};function Bn(i,t,e,n,s){i.at(e,n,s,()=>{i.box(t+"s",0,0,0,.42,.46,.42),i.box(t+"b",0,.46,-.18,.42,.4,.06)})}function Gc(i,t){i.group(t,"Tisch f\xFCr 2",2,()=>{i.cyl("leg",0,0,0,.05,.71),i.box("top",0,.71,0,.7,.04,.7),Bn(i,"c0",-.62,0,vi/2),Bn(i,"c1",.62,0,-vi/2)}),i.stats.seats+=2}function td(i,t){i.group(t,"Tisch f\xFCr 4",2,()=>{i.cyl("leg",0,0,0,.06,.71),i.box("top",0,.71,0,.82,.04,.82),Bn(i,"c0",-.67,0,vi/2),Bn(i,"c1",.67,0,-vi/2),Bn(i,"c2",0,-.67,0),Bn(i,"c3",0,.67,vi)}),i.stats.seats+=4}function ed(i,t,e=3){i.group(t,`Runder Tisch f\xFCr ${e}`,2,()=>{i.cyl("leg",0,0,0,.05,.71),i.cyl("top",0,.71,0,.4,.04);for(let n=0;n<e;n++){let s=n/e*vi*2+.4;Bn(i,"c"+n,Math.sin(s)*.68,Math.cos(s)*.68,s+vi)}}),i.stats.seats+=e}function nd(i,t){i.group(t,"Sitznische f\xFCr 4",2,()=>{for(let e of[-1,1])i.box("s"+e,e*.72,0,0,.52,.45,1.2),i.box("b"+e,e*1,.45,0,.1,.52,1.2);i.box("top",0,.72,-.1,.78,.04,1),i.box("leg",0,0,.2,.08,.72,.08)}),i.stats.seats+=4}function id(i,t,e){i.group(t,`Gemeinschaftstisch ${Xe(e)} m`,2,()=>{i.box("top",0,.72,0,e,.05,.9),i.box("l0",-e/2+.25,0,0,.1,.72,.7),i.box("l1",e/2-.25,0,0,.1,.72,.7),i.box("b0",0,0,-.72,e-.2,.45,.36),i.box("b1",0,0,.72,e-.2,.45,.36)}),i.stats.seats+=Math.floor(e/.6)*2}function o_(i,t,e,n,s=.76){i.cyl(t,e,0,n,.17,s,"w",{rt:1.15})}function Hc(i,t,e){let n=0;i.group(t,`Fensterbar ${Xe(e)} m`,2,()=>{i.box("top",0,1.02,0,e,.04,.42),i.box("s0",-e/2+.12,0,.1,.06,1.02,.14),i.box("s1",e/2-.12,0,.1,.06,1.02,.14),n=Math.max(1,Math.floor(e/.62));let s=e/n;for(let r=0;r<n;r++)o_(i,"st"+r,-e/2+s*(r+.5),-.48)}),i.stats.seats+=n}function sd(i,t){i.group(t,"Stehtisch",2,()=>{i.cyl("base",0,0,0,.22,.03,"g"),i.cyl("leg",0,.03,0,.04,1.02),i.cyl("top",0,1.05,0,.36,.04)}),i.stats.seats+=2}function Gr(i,t,e,n="Sofa"){i.group(t,n,2,()=>{i.box("base",0,0,0,e,.42,.86),i.box("back",0,.42,-.33,e,.4,.2),i.box("a0",-e/2+.09,.42,0,.18,.2,.86),i.box("a1",e/2-.09,.42,0,.18,.2,.86)}),i.stats.seats+=Math.max(1,Math.round(e/.7))}function rd(i,t){i.group(t,"Beistelltisch",3,()=>i.cyl("t",0,0,0,.3,.4))}function Vi(i,t,e,n={}){i.group(t,n.label||`Theke ${Xe(e)} m`,2,()=>{if(i.box("body",0,0,0,e,.98,.72,n.m||"r"),i.box("top",0,.98,.04,e+(n.flush?0:.08),.05,.84),n.reg!==!1){let s=(n.regX??1)*(e/2-.42);i.box("reg",s,1.03,-.12,.34,.07,.28,"g",{L:3}),i.box("scr",s,1.1,-.22,.3,.22,.03,"k",{L:3,rx:-.3})}}),i.stats.counter+=e}function ad(i,t,e){i.group(t,`R\xFCckbuffet ${Xe(e)} m`,2,()=>{i.box("body",0,0,0,e,.9,.6),i.box("top",0,.9,0,e+.04,.04,.62)})}function od(i,t,e,n=1.95){let s=Math.max(1,Math.min(4,Math.floor(e/1.05)));i.group(t,"Men\xFCboard",3,()=>{for(let r=0;r<s;r++)i.box("m"+r,(r-(s-1)/2)*1.04,n,.03,.98,.56,.04,"k")})}function ld(i,t,e){i.group(t,`Vitrine ${Xe(e)} m`,2,()=>{i.box("base",0,0,0,e,.9,.76),i.box("glass",0,.9,.02,e-.04,.42,.68,"glass"),i.box("tray",0,.92,.04,e-.2,.05,.5,"g",{L:3});let n=Math.max(2,Math.floor(e/.32));for(let s=0;s<n;s++)i.sph("p"+s,-e/2+.22+s*((e-.44)/Math.max(1,n-1)),.97,.04+(s%2?.1:-.08),.07,"w",{L:4})}),i.stats.counter+=e}function cd(i,t,e=1.03){i.group(t,"Siebtr\xE4ger",3,()=>{i.box("body",0,e,0,.74,.4,.5,"r"),i.box("top",0,e+.4,-.02,.7,.05,.42),i.box("g0",-.18,e+.12,.27,.08,.08,.06,"k"),i.box("g1",.18,e+.12,.27,.08,.08,.06,"k"),i.cyl("mill",.55,e,0,.09,.42)})}function Wc(i,t,e=.94){i.group(t,"D\xF6nerspie\xDF",3,()=>{i.cyl("plate",0,e,0,.2,.04,"g"),i.cyl("meat",0,e+.04,0,.17,.62,"r",{rt:.62}),i.cyl("rod",0,e+.66,0,.015,.2,"g"),i.box("heat",0,e,-.28,.46,.6,.08,"g")})}function Xc(i,t){i.group(t,"Steinofen",2,()=>{i.box("base",0,0,0,1.5,.92,1.5),i.dome("dome",0,.92,0,.72,"w"),i.box("mouth",0,.98,.64,.5,.3,.12,"k"),i.box("arch",0,1.28,.66,.66,.08,.12,"r",{L:3}),i.cyl("chim",0,1.6,-.1,.12,.85)})}function hd(i,t,e,n=.94){let s=Math.max(2,Math.min(5,Math.floor(e/.35)));i.group(t,"Mixer",3,()=>{for(let r=0;r<s;r++){let a=(r-(s-1)/2)*.32;i.box("b"+r,a,n,0,.18,.16,.2,"g"),i.cyl("j"+r,a,n+.16,0,.07,.24,"glass",{rt:1.2})}})}function ud(i,t,e,n=1.03){let s=Math.max(3,Math.floor(e/.24));i.group(t,"Toppingbar",3,()=>{i.box("tray",0,n,-.05,e-.1,.05,.36,"g");for(let r=0;r<s;r++)i.box("t"+r,-e/2+.17+r*((e-.34)/(s-1)),n+.05,-.05,.18,.09,.26,r%3===1?"r":"w",{L:4})})}function dd(i,t){i.group(t,"Bestellterminal",3,()=>{i.box("base",0,0,0,.5,.06,.4,"g"),i.box("col",0,.06,-.04,.14,1,.1),i.box("scr",0,.92,0,.56,.86,.08,"k",{rx:-.12}),i.box("frame",0,.9,-.05,.62,.92,.04)})}function fd(i,t,e,n=!0,s="K\xFCchenzeile"){let r=Math.max(1,Math.round(e/.8)),a=e/r;i.group(t,`${s} ${Xe(e)} m`,2,()=>{for(let o=0;o<r;o++)i.box("u"+o,-e/2+a*(o+.5),0,0,a-.02,.88,.7,o%3===1?"g":"w");i.box("top",0,.88,0,e,.04,.72),n&&i.box("hood",0,1.95,0,e,.42,.72,"w",{L:3})})}function pd(i,t){i.group(t,"Etagenofen",2,()=>{i.box("base",0,0,0,1.4,.55,1,"g");for(let e=0;e<3;e++)i.box("d"+e,0,.55+e*.42,0,1.4,.4,1),i.box("h"+e,0,.68+e*.42,.51,1,.04,.04,"k",{L:3});i.box("hood",0,1.85,0,1.4,.18,1,"g")})}function yi(i,t,e,n=.45,s=2){i.group(t,`Lagerregal ${Xe(e)} m`,2,()=>{i.box("u0",-e/2+.03,0,0,.05,s,n),i.box("u1",e/2-.03,0,0,.05,s,n),[.08,.6,1.12,1.64].forEach((a,o)=>{i.box("s"+o,0,a,0,e-.06,.03,n);let l=-e/2+.12,c=0;for(;l<e/2-.3&&c<4;){let h=.22+i.rnd()*.3;if(l+h>e/2-.08)break;i.rnd()>.25&&i.box(`x${o}_${c}`,l+h/2,a+.03,0,h,.18+i.rnd()*.22,n-.08,"g",{L:4}),l+=h+.06,c++}})})}function Hr(i,t,e){i.group(t,`Arbeitstisch ${Xe(e)} m`,2,()=>{i.box("top",0,.86,0,e,.04,.7),i.box("shelf",0,.18,0,e-.1,.03,.62,"g");for(let n of[-1,1])i.box("l"+n,n*(e/2-.05),0,0,.05,.86,.66)})}function Wr(i,t,e=.9,n="K\xFChlregal"){i.group(t,n,2,()=>{i.box("body",0,0,0,e,2.05,.72),i.box("in",0,.16,-.02,e-.12,1.74,.6,"g"),i.box("glass",0,.14,.355,e-.06,1.8,.02,"glass"),i.box("head",0,1.94,.37,e-.04,.1,.02,"r",{L:3})}),i.stats.shelf+=e}function Xr(i,t,e){i.group(t,`Regal ${Xe(e)} m`,2,()=>{i.box("base",0,0,0,e,.12,.9,"g"),i.box("mid",0,.12,0,e,1.42,.06),i.box("cap",0,1.54,0,e+.04,.04,.12);for(let n of[-1,1])for(let s=0;s<3;s++){let r=.36+s*.4;i.box(`s${n}${s}`,0,r,n*.24,e-.04,.03,.4),i.box(`p${n}${s}`,0,r+.03,n*.24,e-.16,.2+(s+(n>0?1:0))%2*.08,.32,s===1&&n>0?"w":"g",{L:4})}i.box("end0",-e/2-.02,.12,0,.04,1.42,.9),i.box("end1",e/2+.02,.12,0,.04,1.42,.9)}),i.stats.shelf+=e*2}function Mi(i,t,e,n=2,s){i.group(t,s||`Wandregal ${Xe(e)} m`,2,()=>{i.box("back",0,0,-.17,e,n,.06);let r=Math.floor((n-.2)/.42);for(let a=0;a<r;a++){let o=.3+a*.42;i.box("s"+a,0,o,0,e,.03,.34),i.box("p"+a,0,o+.03,.01,e-.12,.22,.26,a%2?"w":"g",{L:4})}}),i.stats.shelf+=e}function md(i,t){i.group(t,"Kasse",2,()=>{i.box("body",0,0,0,.8,.88,1.8),i.box("belt",0,.88,.25,.46,.03,1.1,"g"),i.box("reg",-.22,.88,-.6,.3,.1,.32,"g",{L:3}),i.box("scr",-.22,.98,-.6,.04,.24,.3,"k",{L:3,rx:0}),i.box("div",.3,.88,-.35,.04,.32,.5,"glass")})}function gd(i,t,e=3){i.group(t,"Einkaufswagen",3,()=>{for(let n=0;n<e;n++)i.box("b"+n,0,.34,n*.22,.52,.46,.8,"g"),i.box("f"+n,0,.08,n*.22+.04,.48,.04,.82),i.box("h"+n,0,.84,n*.22-.42,.52,.04,.04)})}function xd(i,t,e=1.6){i.group(t,"Obst und Gem\xFCse",2,()=>{i.box("base",0,0,0,e,.55,.92),i.box("tier",0,.55,-.22,e,.24,.46);let n=Math.floor(e/.32);for(let s=0;s<n;s++)i.sph("f"+s,-e/2+.2+s*.3,.55,.2,.1,s%3===0?"r":"g",{L:4}),i.sph("t"+s,-e/2+.2+s*.3,.79,-.2,.09,"g",{L:4})})}function _d(i,t){i.group(t,"Eistruhe",2,()=>{i.box("body",0,0,0,1.3,.8,.7),i.box("in",0,.62,0,1.2,.18,.6,"g"),i.box("lid",0,.8,0,1.24,.03,.64,"glass")})}function vd(i,t){i.group(t,"Zeitungsst\xE4nder",3,()=>{i.box("body",0,0,-.06,.9,1.3,.24);for(let e=0;e<3;e++)i.box("m"+e,0,.3+e*.36,.08,.84,.3,.05,e===1?"r":"g",{rx:.3,L:4})})}function yd(i,t){i.group(t,"Bierbank drau\xDFen",2,()=>{i.box("top",0,.74,0,2,.04,.5),i.box("l0",-.8,0,0,.04,.74,.44),i.box("l1",.8,0,0,.04,.74,.44);for(let e of[-1,1])i.box("b"+e,0,.42,e*.55,2,.04,.25),i.box("bl"+e,-.8,0,e*.55,.04,.42,.22),i.box("br"+e,.8,0,e*.55,.04,.42,.22)}),i.stats.seats+=6}function Md(i,t,e=4){i.group(t,"Getr\xE4nkekisten",3,()=>{for(let n=0;n<e;n++)i.box("c"+n,n%2*.42,Math.floor(n/2)*.29,0,.4,.28,.3,"r")})}function Sd(i,t){i.group(t,"Kundenstopper",3,()=>{i.box("a",0,0,.12,.6,.95,.04,"k",{rx:.22}),i.box("b",0,0,-.12,.6,.95,.04,"w",{rx:-.22})})}function qr(i,t,e,n){i.group(t,n||`Kleiderstange ${Xe(e)} m`,2,()=>{i.box("u0",-e/2+.03,0,0,.04,1.62,.04),i.box("u1",e/2-.03,0,0,.04,1.62,.04),i.box("f0",-e/2+.03,0,0,.06,.03,.5,"g"),i.box("f1",e/2-.03,0,0,.06,.03,.5,"g"),i.box("bar",0,1.56,0,e,.03,.03);let s=Math.min(14,Math.floor((e-.2)/.11));for(let r=0;r<s;r++){let a=.75+r*7%5*.06;i.box("c"+r,-e/2+.16+r*((e-.32)/Math.max(1,s-1)),1.52-a,0,.035,a,.46,r%4===2?"g":"w",{L:4})}}),i.stats.shelf+=e}function bd(i,t){i.group(t,"Schaufensterpuppe",3,()=>{i.cyl("base",0,0,0,.18,.03,"g"),i.cyl("pole",0,.03,0,.02,.92),i.cap("torso",0,.9,0,.16,.66),i.sph("head",0,1.58,0,.1)})}function qc(i,t){i.group(t,"Pr\xE4sentationstisch",2,()=>{i.box("a",0,0,0,1.3,.76,.75),i.box("b",.35,0,.5,.8,.52,.55),i.box("i0",-.35,.76,.05,.36,.08,.28,"g",{L:4}),i.box("i1",.1,.76,-.05,.36,.12,.28,"w",{L:4}),i.box("i2",.35,.52,.55,.32,.07,.24,"g",{L:4})})}function wd(i,t,e){i.group(t,`${e} Umkleiden`,2,()=>{let s=e*1;i.box("back",0,0,-.6,s+.06,2.25,.06);for(let r=0;r<=e;r++)i.box("w"+r,-s/2+r*1,0,0,.06,2.25,1.2);for(let r=0;r<e;r++){let a=-s/2+1*(r+.5);i.box("cur"+r,a+(r%2?.12:-.12),.1,.56,.7,2,.04,"g",{L:3}),i.box("seat"+r,a,0,-.42,.6,.45,.3,"w",{L:3})}})}function Ed(i,t){i.group(t,"Spiegel",3,()=>{i.box("f",0,0,0,.7,1.9,.05),i.box("g",0,.06,.03,.6,1.78,.01,"glass")})}function Yr(i,t){i.group(t,"Nagelplatz",2,()=>{i.box("t",0,0,0,1.15,.76,.52),i.box("pad",.1,.76,.06,.24,.05,.16,"g",{L:3}),i.cyl("lamp",-.45,.76,-.12,.05,.36,"w",{L:3}),i.box("lh",-.36,1.1,-.12,.26,.05,.12,"w",{L:3}),Bn(i,"c",0,.62,vi),i.cyl("st",0,0,-.56,.2,.52,"w",{rt:1.05})}),i.stats.places+=1}function Td(i,t){i.group(t,"Pedik\xFCre Sessel",2,()=>{i.box("pod",0,0,-.2,.95,.36,1.3),i.box("seat",0,.36,-.25,.72,.42,.7),i.box("back",0,.78,-.56,.72,.72,.14),i.box("a0",-.38,.6,-.25,.1,.26,.64),i.box("a1",.38,.6,-.25,.1,.26,.64),i.box("bas",0,0,.72,.5,.22,.42,"g",{L:3}),i.cyl("st",0,0,1.25,.18,.44,"w",{rt:1.05})}),i.stats.places+=1}function Yc(i,t,e=1){i.group(t,"Pflanze",3,()=>{i.cyl("pot",0,0,0,.2*e,.42*e,"w",{rt:1.18}),i.sph("leaf",0,.36*e,0,.36*e,"g"),e>1.1&&i.sph("leaf2",.12*e,.82*e,-.05,.24*e,"g",{L:4})})}function qe(i,t,e,n){let s=1.28+i.rnd()*.12;i.cap(t+"b",e,0,n,.16,s,"w",{L:4,lab:""}),i.sph(t+"h",e,s+.02,n,.105,"w",{L:4,lab:""})}var Ds=(i,t,e)=>Math.max(t,Math.min(e,i)),Pe=i=>Math.round(i*100)/100,Zn=[{id:"rect",name:"Rechteck",min:30,pts:[[0,0],[1,0],[1,1],[0,1]]},{id:"lb",min:44,name:"L Form, Anbau hinten",pts:[[0,0],[.6,0],[.6,.42],[1,.42],[1,1],[0,1]]},{id:"lf",min:44,name:"L Form, Einschnitt vorn",pts:[[0,0],[1,0],[1,.55],[.55,.55],[.55,1],[0,1]]},{id:"t",min:60,name:"T Form, Hallenteil vorn",pts:[[.28,0],[.72,0],[.72,.42],[1,.42],[1,1],[0,1],[0,.42],[.28,.42]]},{id:"tu",min:60,name:"T Form, Hallenteil hinten",pts:[[0,0],[1,0],[1,.55],[.72,.55],[.72,1],[.28,1],[.28,.55],[0,.55]]},{id:"u",min:70,name:"U Form mit Hof vorn",pts:[[0,0],[1,0],[1,1],[.68,1],[.68,.5],[.32,.5],[.32,1],[0,1]]},{id:"z",min:54,name:"Versatz",pts:[[0,.3],[.5,.3],[.5,0],[1,0],[1,.7],[.5,.7],[.5,1],[0,1]]}];function Kc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}var kn=i=>Math.abs(Kc(i));function Cd(i,t=1e-4){let e=i.map(s=>[s[0],s[1]]),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],a=e[s],o=e[(s+1)%e.length],l=Math.hypot(a[0]-r[0],a[1]-r[1])<t,c=(a[0]-r[0])*(o[1]-a[1])-(a[1]-r[1])*(o[0]-a[0]);if(l||Math.abs(c)<t*Math.max(1,Math.hypot(o[0]-r[0],o[1]-r[1]))){e.splice(s,1),n=!0;break}}}return e}function l_(i,t=.001){for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];if(Math.abs(n[0]-s[0])>t&&Math.abs(n[1]-s[1])>t)return!1}return!0}var Rd=(i,t,e)=>{let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let a=i[s],o=i[r];a[1]>e!=o[1]>e&&t<(o[0]-a[0])*(e-a[1])/(o[1]-a[1])+a[0]&&(n=!n)}return n};function c_(i,t=.1){let e=i.map(_=>_[0]),n=i.map(_=>_[1]),s=Math.min(...e),r=Math.max(...e),a=Math.min(...n),o=Math.max(...n),l=Math.max(4,Math.ceil((r-s)/t)),c=Math.max(4,Math.ceil((o-a)/t)),h=(r-s)/l,m=(o-a)/c,u=new Uint8Array(l*c);for(let _=0;_<c;_++)for(let g=0;g<l;g++)u[_*l+g]=Rd(i,s+(g+.5)*h,a+(_+.5)*m)?1:0;let p=al(u,l,c);return p?p.map(([_,g])=>[s+_*h,a+g*m]):null}function al(i,t,e,n=.085){let s=t,r=-1,a=e,o=-1;for(let x=0;x<e;x++)for(let v=0;v<t;v++)i[x*t+v]&&(v<s&&(s=v),v>r&&(r=v),x<a&&(a=x),x>o&&(o=x));if(r<0)return null;r++,o++;let l=r-s,c=o-a,h=new Float32Array(t+1),m=new Float32Array(e+1);for(let x=a;x<o;x++)for(let v=s;v<=r;v++){let y=v>0?i[x*t+v-1]:0,T=v<t?i[x*t+v]:0;y!==T&&h[v]++}for(let x=a;x<=o;x++)for(let v=s;v<r;v++){let y=x>0?i[(x-1)*t+v]:0,T=x<e?i[x*t+v]:0;y!==T&&m[x]++}let u=(x,v,y,T,M)=>{let w=new Float32Array(x.length);for(let L=v;L<=y;L++)w[L]=x[L]+.5*(x[L-1]||0)+.5*(x[L+1]||0);let R=[];for(let L=v+1;L<y;L++)w[L]>=T&&w[L]>=w[L-1]&&w[L]>=w[L+1]&&R.push(L);R.sort((L,V)=>w[V]-w[L]);let I=[];for(let L of R)I.every(V=>Math.abs(V-L)>=M)&&I.push(L);return I.push(v,y),I.sort((L,V)=>L-V).filter((L,V,F)=>V===0||L!==F[V-1])},p=u(h,s,r,Math.max(3,c*n),Math.max(2,Math.round(Math.min(l,c)*.05))),_=u(m,a,o,Math.max(3,l*n),Math.max(2,Math.round(Math.min(l,c)*.05))),g=new Int32Array((t+1)*(e+1));for(let x=0;x<e;x++){let v=0;for(let y=0;y<t;y++)v+=i[x*t+y],g[(x+1)*(t+1)+y+1]=g[x*(t+1)+y+1]+v}let f=(x,v,y,T)=>g[T*(t+1)+y]-g[v*(t+1)+y]-g[T*(t+1)+x]+g[v*(t+1)+x],d=p.length-1,S=_.length-1,A=new Uint8Array(d*S);for(let x=0;x<S;x++)for(let v=0;v<d;v++){let y=p[v],T=p[v+1],M=_[x],w=_[x+1];A[x*d+v]=f(y,M,T,w)*2>(T-y)*(w-M)?1:0}return h_(A,d,S,p,_)}function h_(i,t,e,n,s){let r=new Int32Array(t*e).fill(-1),a=[];for(let v=0;v<t*e;v++){if(!i[v]||r[v]>=0)continue;let y=a.length,T=[v];r[v]=y;let M=0;for(;T.length;){let w=T.pop(),R=w%t,I=(w-R)/t;M+=(n[R+1]-n[R])*(s[I+1]-s[I]);for(let[L,V]of[[1,0],[-1,0],[0,1],[0,-1]]){let F=R+L,W=I+V;if(F<0||W<0||F>=t||W>=e)continue;let nt=W*t+F;i[nt]&&r[nt]<0&&(r[nt]=y,T.push(nt))}}a.push(M)}if(!a.length)return null;let o=a.indexOf(Math.max(...a)),l=(v,y)=>v>=0&&y>=0&&v<t&&y<e&&r[y*t+v]===o,c=new Uint8Array(t*e),h=[];for(let v=-1;v<=t;v++)for(let y of[-1,e])h.push([v,y]);for(let v=0;v<e;v++)for(let y of[-1,t])h.push([y,v]);let m=new Set(h.map(([v,y])=>`${v},${y}`));for(;h.length;){let[v,y]=h.pop();v>=0&&y>=0&&v<t&&y<e&&(c[y*t+v]=1);for(let[T,M]of[[1,0],[-1,0],[0,1],[0,-1]]){let w=v+T,R=y+M;w<-1||R<-1||w>t||R>e||m.has(`${w},${R}`)||w>=0&&R>=0&&w<t&&R<e&&l(w,R)||(m.add(`${w},${R}`),h.push([w,R]))}}let u=(v,y)=>v>=0&&y>=0&&v<t&&y<e&&!c[y*t+v],p=new Map,_=(v,y)=>`${v},${y}`,g=(v,y)=>{let T=_(...v);p.has(T)||p.set(T,[]),p.get(T).push(y)};for(let v=0;v<e;v++)for(let y=0;y<t;y++)u(y,v)&&(u(y,v-1)||g([y,v],[y+1,v]),u(y+1,v)||g([y+1,v],[y+1,v+1]),u(y,v+1)||g([y+1,v+1],[y,v+1]),u(y-1,v)||g([y,v+1],[y,v]));let f=[...p.keys()][0];if(!f)return null;let d=f.split(",").map(Number),S=null,A=[];for(let v=0;v<1e4;v++){A.push(d);let y=p.get(_(...d))||[];if(!y.length)return null;let T=y[0];if(y.length>1&&S){let M=[d[0]-S[0],d[1]-S[1]],w=R=>{let I=[R[0]-d[0],R[1]-d[1]];return M[0]*I[1]-M[1]*I[0]};T=y.slice().sort((R,I)=>w(I)-w(R))[0]}if(S=d,d=T,d[0]===A[0][0]&&d[1]===A[0][1])break}let x=Cd(A.map(([v,y])=>[n[v],s[y]]),1e-9);return x.length>=4?x:null}function Pd(i){if(i.form==="rect"||!i.form)return $c(i);let t=Zn.find(n=>n.id===i.form)||Zn[0],e=Math.max(i.m2,t.min||0);for(let n=0;n<40;n++)for(let s=0;s<=12;s++)for(let r of s?[1,-1]:[1]){let a=$c({...i,m2:e*1.04**n,ratio:Ds(i.ratio*1.1**(r*s),.4,4)}),o=Jc(a,{doorW:1.2});if(o&&o.W>=5-1e-6&&o.D>=6-1e-6)return a}return $c(i)}function $c(i){let t=Zn.find(p=>p.id===i.form)||Zn[0],e=Math.max(i.m2,t.min||0),n=i.ratio,s=kn(t.pts),r=Math.sqrt(e/(s*n));r=Ds(r,t.id==="rect"?5:8,30);let a=e/(s*r);a<6&&(a=6,r=e/(s*a));let o=t.pts.map(([p,_])=>[(i.flip?1-p:p)*r,_*a]);i.flip&&(o=o.reverse()),o=o.map(([p,_])=>[Pe(p),Pe(_)]);let l=Zc(o),c=-1;l.forEach((p,_)=>{p.nz>.5&&(c<0||p.z0>l[c].z0+1e-6||Math.abs(p.z0-l[c].z0)<1e-6&&p.len>l[c].len)&&(c=_)});let h=[];if(l.forEach((p,_)=>{_!==c&&p.nz>.5&&h.push(_)}),i.corner){let p=l[c],_=d=>d.nx>.5,f=l.map((d,S)=>[d,S]).filter(([d,S])=>S!==c&&_(d)&&(Math.hypot(d.x0-p.x1,d.z0-p.z1)<1e-6||Math.hypot(d.x1-p.x1,d.z1-p.z1)<1e-6||Math.hypot(d.x0-p.x0,d.z0-p.z0)<1e-6||Math.hypot(d.x1-p.x0,d.z1-p.z0)<1e-6)).sort((d,S)=>S[0].len-d[0].len)[0];f&&!h.includes(f[1])&&h.push(f[1])}let m=i.door==="m"?.5:i.door==="l"?.14:.86,u=l[c];return{pts:o,fi:c,ft:u.x0<=u.x1?m:1-m,gl:h,door:i.door}}function Zc(i){let t=Kc(i),e=t>=0?1:-1;return i.map((n,s)=>{let r=i[(s+1)%i.length],a=r[0]-n[0],o=r[1]-n[1],l=Math.hypot(a,o)||1;return{x0:n[0],z0:n[1],x1:r[0],z1:r[1],len:l,nx:o/l*e,nz:-a/l*e}})}function Jc(i,t={}){let e=t.doorW??1.2,n=i.pts.map(X=>[X[0],X[1]]);if(n.length<4)return null;let s=n.length,r=Ds(i.fi|0,0,s-1),a=n[r],o=n[(r+1)%s],l=Ds(i.ft??.5,.02,.98),c=[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l],h=(i.gl||[]).filter(X=>X>=0&&X<s&&X!==r).map(X=>{let dt=n[X],gt=n[(X+1)%s];return[(dt[0]+gt[0])/2,(dt[1]+gt[1])/2]});if(!l_(n)){let X=c_(n);if(!X)return null;n=X}if(n=Cd(n),n.length<4||kn(n)<8)return null;Kc(n)<0&&n.reverse();let m=Zc(n),u=X=>{let dt=0,gt=1/0;return m.forEach((pt,Ot)=>{let Gt=Ds(((X[0]-pt.x0)*(pt.x1-pt.x0)+(X[1]-pt.z0)*(pt.z1-pt.z0))/(pt.len*pt.len),0,1),z=Math.hypot(X[0]-(pt.x0+(pt.x1-pt.x0)*Gt),X[1]-(pt.z0+(pt.z1-pt.z0)*Gt));z<gt&&(gt=z,dt=Ot)}),dt},p=u(c),_=new Set(h.map(u));_.delete(p);let g=m[p],f=0,d=`${Math.round(g.nx)},${Math.round(g.nz)}`;f={"0,1":0,"1,0":1,"0,-1":2,"-1,0":3}[d]??0;let S=X=>[-X[1],X[0]],A=X=>{let dt=X;for(let gt=0;gt<f;gt++)dt=dt.map(S);return dt};n=A(n),c=A([c])[0],m=Zc(n);let x=m.map((X,dt)=>dt===p?"front":_.has(dt)?"glass":"wall"),v=X=>[...new Set(X.map(dt=>Math.round(dt*1e3)/1e3))].sort((dt,gt)=>dt-gt),y=v(n.map(X=>X[0])),T=v(n.map(X=>X[1])),M=y.length-1,w=T.length-1,R=new Uint8Array(M*w);for(let X=0;X<w;X++)for(let dt=0;dt<M;dt++)R[X*M+dt]=Rd(n,(y[dt]+y[dt+1])/2,(T[X]+T[X+1])/2)?1:0;let I=m[p],L=I.z0,V=Math.min(I.x0,I.x1),F=Math.max(I.x0,I.x1);(i.door==="l"||i.door==="m"||i.door==="r")&&(c=[V+(F-V)*(i.door==="l"?.14:i.door==="m"?.5:.86),L]);let W=T.findIndex(X=>Math.abs(X-L)<.001),nt=(X,dt,gt,pt)=>{for(let Ot=gt;Ot<pt;Ot++)for(let Gt=X;Gt<dt;Gt++)if(!R[Ot*M+Gt])return!1;return!0},rt=e,ht=(X,dt)=>{let gt=X/dt;return gt>=.5&&gt<=2.6?1:gt<.5?(gt/.5)**1.5:(2.6/gt)**1.5},$=[];for(let[X,dt]of[[5,6],[4.4,5.2],[3.6,4.2],[2.6,2.6]]){for(let gt=0;gt<M;gt++)for(let pt=gt+1;pt<=M;pt++)if(!(y[gt]<V-.001||y[pt]>F+.001))for(let Ot=0;Ot<W;Ot++){if(!nt(gt,pt,Ot,W))continue;let Gt=y[pt]-y[gt],z=L-T[Ot];if(Gt<X||z<dt)continue;let et=c[0]>=y[gt]+rt/2+.25-.001&&c[0]<=y[pt]-rt/2-.25+.001,yt=0;for(let N=0;N<Ot;N++)for(let kt=0;kt<M;kt++)R[N*M+kt]&&T[N+1]<=T[Ot]+1e-6&&(yt+=(y[kt+1]-y[kt])*(T[N+1]-T[N]));$.push({i0:gt,i1:pt,j0:Ot,W:Gt,D:z,sc:Gt*z*ht(z,Gt)*(et?1:.45)*(1-.5*Math.min(1,yt/kn(n)))})}if($.length)break}if(!$.length)return null;$.sort((X,dt)=>dt.sc-X.sc||dt.W-X.W);let at=$[0],lt={i0:at.i0,i1:at.i1,j0:at.j0,j1:W},St=new Uint8Array(M*w);for(let X=lt.j0;X<lt.j1;X++)for(let dt=lt.i0;dt<lt.i1;dt++)St[X*M+dt]=1;let Et=[{i0:lt.i0,i1:lt.i1,j0:lt.j0,j1:lt.j1,core:!0}];for(let X=0;X<24;X++){let dt=null;for(let gt=0;gt<w;gt++)for(let pt=0;pt<M;pt++)if(!(!R[gt*M+pt]||St[gt*M+pt]))for(let Ot=gt+1;Ot<=w;Ot++)for(let Gt=pt+1;Gt<=M;Gt++){let z=!0;for(let yt=gt;yt<Ot&&z;yt++)for(let N=pt;N<Gt;N++)if(!R[yt*M+N]||St[yt*M+N]){z=!1;break}if(!z)break;let et=(y[Gt]-y[pt])*(T[Ot]-T[gt]);(!dt||et>dt.ar+1e-9)&&(dt={i0:pt,i1:Gt,j0:gt,j1:Ot,ar:et})}if(!dt)break;for(let gt=dt.j0;gt<dt.j1;gt++)for(let pt=dt.i0;pt<dt.i1;pt++)St[gt*M+pt]=1;Et.push({i0:dt.i0,i1:dt.i1,j0:dt.j0,j1:dt.j1})}let Zt=(y[lt.i0]+y[lt.i1])/2,Ct=(T[lt.j0]+T[lt.j1])/2,Bt=Et.map((X,dt)=>({id:dt,core:!!X.core,x0:Pe(y[X.i0]-Zt),x1:Pe(y[X.i1]-Zt),z0:Pe(T[X.j0]-Ct),z1:Pe(T[X.j1]-Ct)}));Bt.forEach(X=>{X.w=Pe(X.x1-X.x0),X.d=Pe(X.z1-X.z0),X.m2=X.w*X.d});let tt=Bt[0],ot=m.map((X,dt)=>({x0:Pe(X.x0-Zt),z0:Pe(X.z0-Ct),x1:Pe(X.x1-Zt),z1:Pe(X.z1-Ct),nx:Math.round(X.nx),nz:Math.round(X.nz),len:Pe(X.len),kind:x[dt]})),xt=[];for(let X=0;X<Bt.length;X++)for(let dt=X+1;dt<Bt.length;dt++){let gt=Bt[X],pt=Bt[dt],Ot=Math.max(gt.z0,pt.z0),Gt=Math.min(gt.z1,pt.z1),z=Math.max(gt.x0,pt.x0),et=Math.min(gt.x1,pt.x1);Math.abs(gt.x1-pt.x0)<.011&&Gt-Ot>.3?xt.push({a:X,b:dt,axis:"v",pos:gt.x1,lo:Ot,hi:Gt,bSide:1}):Math.abs(pt.x1-gt.x0)<.011&&Gt-Ot>.3?xt.push({a:X,b:dt,axis:"v",pos:gt.x0,lo:Ot,hi:Gt,bSide:-1}):Math.abs(gt.z1-pt.z0)<.011&&et-z>.3?xt.push({a:X,b:dt,axis:"h",pos:gt.z1,lo:z,hi:et,bSide:1}):Math.abs(pt.z1-gt.z0)<.011&&et-z>.3&&xt.push({a:X,b:dt,axis:"h",pos:gt.z0,lo:z,hi:et,bSide:-1})}let Lt={x0:Math.min(...ot.map(X=>Math.min(X.x0,X.x1))),x1:Math.max(...ot.map(X=>Math.max(X.x0,X.x1))),z0:Math.min(...ot.map(X=>Math.min(X.z0,X.z1))),z1:Math.max(...ot.map(X=>Math.max(X.z0,X.z1)))},vt=kn(n),Wt=Pe(Ds(c[0]-Zt,tt.x0+.7+e/2,tt.x1-.7-e/2));Bt.slice(1).forEach(X=>{let dt=xt.some(gt=>gt.a===0&&gt.b===X.id||gt.b===0&&gt.a===X.id);X.role=X.z1<=tt.z0+.011?"rear":"side",X.touchCore=dt});let se=[Bt.map(X=>`${X.x0},${X.x1},${X.z0},${X.z1}`).join(";"),ot.map(X=>X.kind[0]).join("")].join("|");return{pts:n.map(X=>[Pe(X[0]-Zt),Pe(X[1]-Ct)]),rects:Bt,edges:ot,links:xt,bbox:Lt,area:vt,core:tt,W:tt.w,D:tt.d,doorX:Wt,front:ot[p],sig:se,rot:f,coreGlassR:ot.some(X=>X.kind==="glass"&&X.nx===1&&Math.abs(X.x0-tt.x1)<.011&&Math.min(X.z0,X.z1)<tt.z1-.5&&Math.max(X.z0,X.z1)>tt.z0+.5),glassR:ot.some(X=>X.kind==="glass"&&X.nx===1&&Math.abs(X.x0-Lt.x1)<.011),glassL:ot.some(X=>X.kind==="glass"&&X.nx===-1&&Math.abs(X.x0-Lt.x0)<.011)}}function Id(i,t){let e=kn(i.pts),n=e>0?Math.sqrt(t/e):1,s=Math.min(...i.pts.map(a=>a[0])),r=Math.min(...i.pts.map(a=>a[1]));return{...i,pts:i.pts.map(a=>[Pe((a[0]-s)*n),Pe((a[1]-r)*n)])}}var d_=Math.PI,f_={two:[1.85,1.5,2],twoR:[1.15,2.05,2],four:[2.15,2.15,4],round:[1.95,1.95,3],high:[1.2,1.2,2]};function $r(i,t,e,n,s,r,a,o,l=[]){let c=e-t,h=s-n;if(c<1.1||h<1.1)return;let m=null;if([...r,...r.includes("two")?["twoR"]:[]].forEach((g,f)=>{let[d,S,A]=f_[g],x=ol({x0:t,x1:e,z0:n,z1:s},d,S,l),v=x.length*A*(f===0?1.15:1)*(1+a()*.08);x.length&&(!m||v>m.seats)&&(m={t:g,cells:x,seats:v})}),!m)return;let{t:p,cells:_}=m;for(let g of _){let f=o();p==="two"?i.at(g.x,g.z,0,()=>Gc(i,f)):p==="twoR"?i.at(g.x,g.z,d_/2,()=>Gc(i,f)):p==="four"?i.at(g.x,g.z,0,()=>td(i,f)):p==="round"?i.at(g.x,g.z,0,()=>ed(i,f,3)):i.at(g.x,g.z,0,()=>sd(i,f))}}function ol(i,t,e,n=[]){let s=i.x1-i.x0,r=i.z1-i.z0,a=Math.floor(s/t),o=Math.floor(r/e);if(a<1||o<1)return[];let l=i.x0+(s-a*t)/2,c=i.z0+(r-o*e)/2,h=[];for(let m=0;m<a;m++)for(let u=0;u<o;u++){let p={x0:l+m*t,x1:l+(m+1)*t,z0:c+u*e,z1:c+(u+1)*e};n.some(_=>p.x0<_.x1-.02&&p.x1>_.x0+.02&&p.z0<_.z1-.02&&p.z1>_.z0+.02)||h.push({x:(p.x0+p.x1)/2,z:(p.z0+p.z1)/2,i:m,j:u})}return h}function Ld(i,t,e){let n=[[i,t]];for(let[s,r]of e)n=n.flatMap(([a,o])=>r<=a||s>=o?[[a,o]]:[[a,Math.max(a,s)],[Math.min(o,r),o]].filter(([l,c])=>c-l>.01));return n}function Ns(i,t,e,n){let s=t-i;if(s<.9)return[];let r=Math.max(1,Math.ceil((s+n)/(e+n))),a=(s-n*(r-1))/r;return Array.from({length:r},(o,l)=>[i+l*(a+n),i+l*(a+n)+a])}var ee=Math.PI,Ue=(i,t,e)=>Math.max(t,Math.min(e,i)),bi=[{id:"kiosk",name:"Kiosk",W:5.4,D:6.6,door:{x:-1.5,w:1.1},aisle:[-2.55,-.65]},{id:"eck",name:"Eckladen",W:8.4,D:9,door:{x:2.9,w:1.2},glassRight:!0,aisle:[1.5,2.95]},{id:"schlauch",name:"Schlauch",W:5.6,D:15.6,door:{x:0,w:1.2},aisle:[-.8,.8]},{id:"center",name:"Center",W:13.2,D:10.2,door:{x:0,w:3.2},open:!0,aisle:[-1.7,1.7]}];bi.forEach(i=>{i.m2=Math.round(i.W*i.D)});var cl=30,hl=260,Si={s:2.3,n:1.12,b:.72};function ul(i){if(i.plan)return p_(i.plan,i.m2,i);let t=Ue(Math.round(i.m2),cl,hl);if(i.form&&i.form!=="rect"){let l=Pd({form:i.form,flip:!!i.flip,m2:t,ratio:Si[i.shape]??Si.n,door:i.door,corner:!!i.corner}),c=Ud(l,{id:"custom",open:!!i.open});if(c)return c.form=i.form,c}let e=!!i.open,n=Math.sqrt(t/(Si[i.shape]??Si.n));n=Ue(n,5,24),t/n<6&&(n=t/6),n=Math.round(n*10)/10;let s=t/n,r=e?Math.round(Ue(n*.26,2.4,4.2)*10)/10:1.2,a=i.door==="m"?0:(i.door==="l"?-1:1)*(n/2-.7-r/2),o=[Ue(a-r/2-.55,-n/2+.3,n/2),Ue(a+r/2+.55,-n/2,n/2-.3)];return{id:"custom",name:"Eigene Fl\xE4che",W:n,D:s,m2:t,bw:n,bd:s,door:{x:Math.round(a*100)/100,w:r},glassRight:!!i.corner,open:e,aisle:o}}function Ud(i,t={}){let e=!!t.open,n=e?3:1.2,s=null;for(let c=0;c<3;c++){if(s=Jc(i,{doorW:n}),!s)return null;let h=e?Math.round(Ue(s.W*.26,2.4,4.2)*10)/10:1.2;if(Math.abs(h-n)<.01)break;n=h}let r=s.W,a=s.D,o=s.doorX,l=[Ue(o-n/2-.55,-r/2+.3,r/2),Ue(o+n/2+.55,-r/2,r/2-.3)];return{id:t.id||"custom",name:"Eigene Fl\xE4che",W:r,D:a,m2:Math.round(s.area),bw:s.bbox.x1-s.bbox.x0,bd:s.bbox.z1-s.bbox.z0,door:{x:o,w:n},glassRight:s.coreGlassR,open:e,aisle:l,fp:s}}function p_(i,t,e={}){let n=Id(i,Ue(t,10,800)),s=Ud(n,{id:"plan",open:e.open});return s&&(s.name="Ihr Plan"),s}function jc(i){let t=i.D/i.W,e=Math.abs(Math.log(t/Si.s))<Math.abs(Math.log(t/Si.n))?"s":Math.abs(Math.log(t/Si.b))<Math.abs(Math.log(t/Si.n))?"b":"n";return{m2:i.m2,shape:e,form:"rect",flip:!1,door:Math.abs(i.door.x)<.5?"m":i.door.x<0?"l":"r",corner:!!i.glassRight,open:!!i.open}}var m_={burger:{boh:.27,kitchen:"fast",counterMax:6,counter:"solid",back:["boards"],kiosks:!0,leftFill:"fridges",rightFill:"pickup",bar:!0,booth:!0,tables:["two","four"],facade:{blade:!0}},doener:{boh:.24,kitchen:"small",counterMax:5,counter:"guard",back:["spits","boards"],leftFill:"fridges",rightFill:"plant",bar:!0,bench:!0,tables:["four","two"],facade:{blade:!0}},pizza:{boh:.24,kitchen:"pizza",counterMax:4.4,counter:"guard",back:["boards"],leftW:1.85,leftFill:"oven",rightFill:"plant",bar:"auto",booth:"rnd",tables:["four","two","round"],facade:{awning:"w",blade:!0}},cafe:{boh:.2,bohMax:2.4,kitchen:"mini",counterMax:4.6,counter:"display",back:["grinder","boards"],espresso:!0,leftFill:"plant",rightFill:"plant",bar:!0,lounge:!0,communal:!0,tables:["round","two"],facade:{awning:"w"}},baecker:{boh:.24,kitchen:"bakery",counterMax:6,counter:"bakery",back:["bread"],leftFill:"fridges",rightFill:"plant",bar:!0,tables:["high","two"],facade:{awning:"r"}},bowl:{boh:.2,bohMax:2.6,kitchen:"mini",counterMax:5,counter:"toppings",back:["blenders","boards"],leftFill:"plant",rightFill:"fridges",bar:!0,bench:!0,communal:!0,tables:["two","round"],facade:{}}},Gi=[{id:"burger",name:"Burger",kind:"gastro"},{id:"doener",name:"D\xF6ner",kind:"gastro"},{id:"pizza",name:"Pizzeria",kind:"gastro"},{id:"cafe",name:"Caf\xE9",kind:"gastro"},{id:"baecker",name:"B\xE4ckerei",kind:"gastro"},{id:"bowl",name:"Bowl Bar",kind:"gastro"},{id:"spaeti",name:"Sp\xE4ti",kind:"retail"},{id:"markt",name:"Mini Markt",kind:"retail"},{id:"nails",name:"Nagelstudio",kind:"beauty"},{id:"mode",name:"Boutique",kind:"mode"}];function g_(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function x_(i){let t=2166136261;for(let e of i)t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}function Fd(i,t,e=0){let n=typeof t=="object"?t:bi.find(_=>_.id===t)||bi[0],s=Gi.find(_=>_.id===i)||Gi[0],r=g_(x_(i+n.id+(n.fp?n.fp.sig:""))^e*7919+13),a=new rl(r),o=n.fp||null,l={...n,H:3,t:.24,SW:2.6,zB:-n.D/2,zF:n.D/2,cat:s.id,seed:e};if(l.px0=-n.W/2-1,l.px1=n.W/2+1+(n.glassRight?1.8:0),l.pz0=l.zB-1,l.pz1=l.zF+.12+l.SW+.2,l.zS=l.zF,o){let _=o.bbox;l.zS=_.z1,l.px0=_.x0-1-(o.glassL?1.8:0),l.px1=_.x1+1+(o.glassR?1.8:0),l.pz0=_.z0-1,l.pz1=l.zS+.12+l.SW+.2,l.recess=l.zS-l.zF>.05}l.sig=`${n.W.toFixed(2)}_${n.D.toFixed(2)}_${n.glassRight}_${o?o.sig:""}`;let c=m_[s.id],h=c?Ue(n.D*c.boh,1.6,c.bohMax??3.2):s.id==="markt"?Ue(n.D*.16,1.4,2.2):1.3;l.zPart=l.zB+h,o&&(l.pass=A_(l)),o?C_(a,l,c?c.facade:Dd[s.id]):__(a,l,c?c.facade:Dd[s.id]),c?v_(a,l,c,r):{spaeti:S_,markt:b_,nails:E_,mode:w_}[s.id](a,l,r),o&&(I_(a,l),D_(a,l,s,c,r),L_(a,l)),T_(a,l,r),a.closeRec();let m=Math.round(n.W*(l.zPart-l.zB)),u=n.m2;o&&o.rects.forEach(_=>{!_.core&&Od(l,_)&&(m+=Math.round(_.m2))}),m=Math.min(m,u-1);let p={back:m,front:u-m,backLabel:s.kind==="gastro"?"K\xFCche und Lager":"Lager",frontLabel:s.kind==="gastro"?"Gastraum":s.kind==="beauty"?"Behandlung":"Verkaufsfl\xE4che"};return{blocks:a.list,stats:z_(a,l,s),P:l,split:p}}var Dd={spaeti:{awning:"r",blade:!0},markt:{},nails:{},mode:{}};function __(i,t,e={}){let{W:n,D:s,H:r,t:a,zB:o,zF:l}=t,c={struct:!0,L:0,lab:""};i.box("plinth",(t.px0+t.px1)/2,-.52,(t.pz0+t.pz1)/2,t.px1-t.px0,.42,t.pz1-t.pz0,"w",{...c,rad:.09,cast:!1}),i.box("floor",0,-.1,.06,n,.1,s+.12,"f",{...c,plain:!0,cast:!1}),i.box("walk",(t.px0+t.px1)/2,-.1,l+.12+t.SW/2+.1,t.px1-t.px0,.075,t.SW+.2,t.open?"f2":"s",{...c,plain:!0,cast:!1}),t.glassRight&&i.box("walk2",(n/2+.12+t.px1)/2,-.1,(t.pz0+l+.12)/2,t.px1-n/2-.12,.075,l+.12-t.pz0,"s",{...c,plain:!0,cast:!1});let h={struct:!0,L:1,lab:""};i.box("wallB",0,-.1,o-a/2,n+2*a,r+.1,a,"w",{...h,cut:"back"}),i.box("wallL",-n/2-a/2,-.1,(o+l+.12)/2,a,r+.1,s+.12,"w",{...h,cut:"left"}),t.glassRight?i.box("wallR",n/2+a/2,-.1,(o+t.zPart)/2,a,r+.1,t.zPart-o,"w",{...h,cut:"right"}):i.box("wallR",n/2+a/2,-.1,(o+l+.12)/2,a,r+.1,s+.12,"w",{...h,cut:"right"}),i.at(0,l+.06,0,()=>ll(i,"fac",n+2*a,t.door.x,t.door.w,t.open,e,t,!0)),t.glassRight&&i.at(n/2+.06,(t.zPart+l+.12)/2,ee/2,()=>ll(i,"facR",l+.12-t.zPart,0,0,!1,{},t,!1))}function ll(i,t,e,n,s,r,a,o,l){let c={struct:!0,L:1,lab:""},h=s?[[-e/2,n-s/2],[n+s/2,e/2]]:[[-e/2,e/2]],m=0,u=0;if(h.forEach(([g,f],d)=>{let S=f-g;if(S<.12)return;let A=Math.max(1,Math.ceil(S/1.6));i.box(t+"s"+d,(g+f)/2,0,0,S,.3,.22,"w",c);for(let x=0;x<=A;x++)i.box(t+"m"+m++,g+S*x/A,0,0,.07,2.55,.13,"w",c);for(let x=0;x<A;x++)i.box(t+"g"+u++,g+S*(x+.5)/A,.3,0,S/A-.07,2.25,.02,"glass",c)}),s&&!r&&(i.box(t+"door",n,0,-.02,s-.08,2.3,.03,"glass",c),i.box(t+"dtop",n,2.3,0,s,.25,.02,"glass",c),i.box(t+"dh",n+s/2-.16,.85,.05,.04,.55,.05,"k",{...c,L:3})),i.box(t+"fas",0,2.55,.04,e,.45,.34,"w",c),!l)return;let p=Math.min(3.4,e*.48),_=Ue(n,-e/2+p/2+.2,e/2-p/2-.2);if(i.box(t+"sign",_,2.6,.24,p,.34,.08,"r",{...c,L:3}),i.box(t+"sgt",_,2.72,.29,p*.6,.1,.02,"w",{...c,L:4}),a.blade){let g=Ue(n+s/2+.55,-e/2+.4,e/2-.4);i.box(t+"bladeA",g,2.32,.4,.04,.04,.5,"w",{...c,L:3}),i.box(t+"blade",g,1.72,.52,.06,.56,.56,"r",{...c,L:3})}a.awning&&h.forEach(([g,f],d)=>{let S=f-g-.15;S<1||(i.box(t+"aw"+d,(g+f)/2,2.4,.56,S,.03,1.1,a.awning,{...c,L:3,rx:.38}),i.box(t+"awf"+d,(g+f)/2,2.02,1.07,S,.2,.02,a.awning,{...c,L:3}))})}function Zr(i,t,e){let{W:n}=t,s=n/2-1.1,r=n/2-.15,a=2.4,o={struct:!0,L:1,lab:""};i.box("partL",(-n/2+s)/2,0,e,s+n/2,a,.12,"w",o),i.box("partR",(r+n/2)/2,0,e,n/2-r,a,.12,"w",o),i.box("partT",(s+r)/2,2.12,e,r-s,a-2.12,.12,"w",o)}function Kr(i,t,e,n){let{W:s,zB:r}=t,a=n??t.zPart,o=a-r-.06,l=-s/2+.15,c=s/2-.15,h=(u,p,_)=>i.at(l+u/2,r+.36,0,()=>fd(i,"kline",u,p,_)),m=u=>i.at(c-u/2,r+.24,0,()=>yi(i,"kshelf",u));if(e==="fast"||e==="small"){let u=e==="fast"?Math.min(s-1.6,9):Math.max(1.6,Math.min(s*.55,6));h(u,!0),e==="small"&&s-.3-u>1.9&&i.at(l+u+.55,r+.37,0,()=>Wr(i,"kfr",.9,"K\xFChlschrank")),m(Math.min(1,s-.5-u-(e==="small"&&s-.3-u>1.9?1:0))),o>=2.6&&i.at(-s/2+.15+Math.min(2.4,s-3.2)/2+.6,r+.7+.95+.35,0,()=>Hr(i,"kprep",Math.min(2.4,s-3.2)))}else if(e==="pizza"){let u=Math.min(3,s-1.8);i.at(l+u/2,r+.36,0,()=>Hr(i,"kprep",u)),m(Math.min(1.2,s-.6-u)),o>=2.4&&i.at(l+.4,(r+a)/2+.3,ee/2,()=>yi(i,"kshelf2",Math.min(1.4,o-1.2)))}else if(e==="bakery"){let u=s>7?2:1;for(let p=0;p<u;p++)i.at(l+.7+p*1.5,r+.5,0,()=>pd(i,"koven"+p));m(Math.min(1.2,s-.6-u*1.5)),o>=2.95&&i.at(-.3,r+1+.95+.35,0,()=>Hr(i,"kprep",Math.min(2.6,s-3)))}else if(e==="mini"){let u=Math.min(1.8,s*.35);h(u,!1,"Sp\xFClzeile"),i.at((l+u+.2+c)/2,r+.24,0,()=>yi(i,"kshelf",c-l-u-.2))}else i.at((l+c-.2)/2,r+.24,0,()=>yi(i,"kshelf",c-l-.2)),o>=1.9&&s>7&&i.at(l+.24,(r+a)/2+.25,ee/2,()=>yi(i,"kshelf2",Math.min(1.6,o-.9)))}function v_(i,t,e,n){let{W:s,zF:r}=t,a=t.zPart;Zr(i,t,a);let o=a+.06+.3,l=a+.06+.6+.95+.36,c=l+.42,h=e.leftFill==="oven"&&s-1.15-e.leftW>=1.9;e.leftFill==="oven"&&!h&&(e={...e,kitchen:"pizza-oven"}),Kr(i,t,e.kitchen==="pizza-oven"?"pizza":e.kitchen),e.kitchen==="pizza-oven"&&i.at(s/2-1.4-.75,t.zB+.8,0,()=>Xc(i,"ofen"));let m=-s/2+.15+(h?e.leftW:0),u=s/2-1,p=Math.max(1.6,Math.min(e.counterMax+Ue((s-8.5)*.45,0,4),u-m)),_=u-m-p,g=m+(_>1.2?_/2:0),f=g+p,d=(g+f)/2;if(e.counter==="display"||e.counter==="bakery"){let y=e.counter==="bakery"?Math.max(1.2,p-1.2):Math.min(1.8,p*.42);i.at(g+y/2,l,0,()=>ld(i,"vitrine",y)),i.at(g+y+(p-y)/2,l,0,()=>Vi(i,"theke",p-y,{label:`Theke ${Xe(p-y)} m`,flush:!0}))}else i.at(d,l,0,()=>Vi(i,"theke",p)),e.counter==="guard"&&i.box("guard",d-.3,1.03,l+.18,Math.max(.8,p-1.4),.36,.03,"glass",{L:3,lab:"Spuckschutz"}),e.counter==="toppings"&&i.at(d-.3,l,0,()=>ud(i,"topping",Math.max(1,p-1.5)));e.espresso&&i.at(g+Math.min(1.8,p*.42)+.5,l-.08,0,()=>cd(i,"siebtraeger"));let S=-s/2+.15+(h?e.leftW:0),A=s/2-1.25,x=A-S;if(x>1.2){e.back.includes("bread")||i.at((S+A)/2,o,0,()=>ad(i,"buffet",x));let y=(S+A)/2;e.back.includes("spits")&&(i.at(y-.45,o+.05,0,()=>Wc(i,"spiess0")),x>2.6&&i.at(y+.45,o+.05,0,()=>Wc(i,"spiess1"))),e.back.includes("blenders")&&i.at(y,o+.02,0,()=>hd(i,"mixer",Math.min(1.6,x-.4))),e.back.includes("grinder")&&(i.cyl("muehle",y-.6,.94,o,.09,.42,"w",{L:3,lab:"M\xFChle"}),i.box("kasse2",y+.6,.94,o,.5,.32,.4,"g",{L:3,lab:"Kaffeeger\xE4te"})),e.back.includes("boards")&&i.at(y,a+.06,0,()=>od(i,"menue",x,1.6)),e.back.includes("bread")&&i.at(y,a+.06+.21,0,()=>Mi(i,"brot",x,2.2,`Brotregal ${Xe(x)} m`))}h&&i.at(-s/2+.15+.78,a+.06+.82,0,()=>Xc(i,"ofen"));let v=(y,T,M,w)=>{let R=M-T;if(!(R<.85))if(y==="fridges"){let I=Math.min(3,Math.floor(R/.82));for(let L=0;L<I;L++)i.at(T+.41+L*.82,c-.36,0,()=>Wr(i,w+L,.8,"Getr\xE4nkek\xFChler"))}else if(y==="pickup"){let I=Math.min(2.2,R);i.at(T+I/2,c-.36,0,()=>Vi(i,w,I,{m:"w",reg:!1,label:"Abholtheke"}))}else i.at(T+.45,c-.4,0,()=>Yc(i,w,1.25))};if(h||v(e.leftFill,-s/2+.15,g-.2,"linksA"),v(e.rightFill,f+.95,s/2-.15,"rechtsA"),e.kiosks){let y=p>4.5?3:2;for(let T=0;T<y;T++)i.at(g+.95+T*.72,c+.32,0,()=>dd(i,"terminal"+T))}qe(i,"team0",g+p*.32,a+.06+.6+.46),p>3&&qe(i,"team1",g+p*.78,a+.06+.6+.5),qe(i,"gast0",f-.65,c+.5),n()>.4&&qe(i,"gast1",f-.55+n()*.3,c+1.05),y_(i,t,e,n,{x0:-s/2+.15,x1:s/2-.15,z0:c+1.25,z1:r-.15})}function y_(i,t,e,n,s){let{W:r,zF:a}=t,{x0:o,x1:l,z0:c,z1:h}=s;if(h-c<.9)return;let m=t.door.x-t.door.w/2-.45,u=t.door.x+t.door.w/2+.45,p=e.bar==="auto"?h-c<3.2:e.bar;if(p&&h-c>=1){let x=!1;[[o,Math.min(m,l)],[Math.max(u,o),l]].forEach(([v,y],T)=>{y-v>=1.2&&(i.at((v+y)/2,a-.23,0,()=>Hc(i,"bar"+T,y-v)),x=!0)}),x&&(h=a-1.3)}if(p&&t.glassRight){let x=c+.1,v=a-1.9;v-x>=1.2&&(i.at(r/2-.23,(x+v)/2,ee/2,()=>Hc(i,"barR",v-x)),l=Math.min(l,r/2-1.3))}let _=e.booth==="rnd"?n()>.5:e.booth,g=t.door.x-t.door.w/2<-r/2+2.3?Math.min(h,a-1.45):h;if(_&&g-c>=2.2){let x=Math.floor((g-c)/2.15),v=(g-c-x*2.15)/2;for(let y=0;y<x;y++)i.at(-r/2+.6,c+v+1.075+y*2.15,ee/2,()=>nd(i,"nische"+y));o=-r/2+1.25+.35}else if(e.bench&&g-c>=1.4){let x=g-c-.2;i.at(-r/2+.35,(c+g)/2,ee/2,()=>M_(i,"bank",x)),o=-r/2+1.9+.3}let f=[],[d,S]=t.aisle;d>o+.5&&f.push([o,Math.min(d,l)]),S<l-.5&&f.push([Math.max(S,o),l]);let A=0;f.forEach(([x,v],y)=>{let T=c,M=h;if(e.communal&&y===f.length-1&&v-x>=3.4&&M-T>=2.5){let w=Math.min(4.2,v-x-.9);i.at((x+v)/2,T+1.2,0,()=>id(i,"tafel",w)),T+=2.5}if(e.lounge&&y===f.length-1&&v-x>=3.9&&M-T>=2.5){let w=v-1.05,R=M-1.45;i.at(w,R-.5,0,()=>Gr(i,"lounge",1.6,"Lounge Sofa")),i.at(w,R+.35,0,()=>rd(i,"lounge_t")),i.at(w,R+1.15,ee,()=>Gr(i,"lounge_s",.86,"Sessel")),$r(i,x,v-2.15,T,M,e.tables,n,()=>"tisch"+A++),$r(i,v-2.15,v,T,M-2.55,e.tables,n,()=>"tisch"+A++);return}$r(i,x,v,T,M,e.tables,n,()=>"tisch"+A++)})}function M_(i,t,e){let n=Math.max(1,Math.floor(e/1.3)),s=e/n;i.group(t,`Wandbank ${Xe(e)} m`,2,()=>{i.box("seat",0,0,0,e,.45,.5),i.box("back",0,.45,-.3,e,.45,.1)});for(let r=0;r<n;r++){let a=-e/2+s*(r+.5);i.group(t+"t"+r,"Tisch an der Wandbank",2,()=>{i.cyl("leg",a,0,.66,.05,.71),i.box("top",a,.71,.66,.7,.04,.7),Bn(i,"c",a,1.28,ee)}),i.stats.seats+=2}}function S_(i,t,e){let{W:n,zF:s}=t,r=t.zPart;Zr(i,t,r),Kr(i,t,"store");let a=t.door.x<=0?1:-1,o=a>0?-ee/2:ee/2,l=Math.max(r+2.15,s-2.5);i.at(a*(n/2-1.42),l,o,()=>Vi(i,"theke",2,{label:"Kasse und Theke"})),i.at(a*(n/2-.21),l,o,()=>Mi(i,"tabak",2.6,2.1,"Tabak und Spirituosen")),qe(i,"team0",a*(n/2-.68),l+.3),qe(i,"gast0",a*(n/2-2.3),l-.2);let c=a*(n/2-.85);Math.abs(c-t.door.x)<t.door.w/2+.75&&(c=t.door.x+a*(t.door.w/2+.75)),Math.abs(c)<n/2-.65&&i.at(c,s-.55,0,()=>_d(i,"eis"));let h=r+.25+(a<0?.85:0),m=s-1.45,u=Math.floor((m-h)/.9);for(let M=0;M<u;M++)i.at(-a*(n/2-.37),h+.45+M*.9,-o,()=>Wr(i,"kuehl"+M,.9));let p=-n/2+.74+1,_=n/2-1.78-.95,[g,f]=a>0?[p,_]:[-_,-p],d=Math.max(0,Math.floor((f-g+1)/1.95)),S=r+1,A=s-1.7;for(let M=0;M<d;M++){let w=g+(f-g-(d*1.95-1.05))/2+.45+M*1.95;Ns(S,A,3.6,1).forEach(([R,I],L)=>i.at(w,(R+I)/2,ee/2,()=>Xr(i,`regal${M}_${L}`,I-R)))}let x=t.door.x+a*(t.door.w/2+.75);if(Math.abs(x)<n/2-.5&&Math.abs(x-a*(n/2-.85))>1.2&&i.at(x,s-.32,0,()=>vd(i,"zeitung")),t.recess)return;let v=t.open?2.1:0,y=Ue(t.door.x+a*2.3,t.px0+1.2+v,t.px1-1.2-v);i.at(y,s+1.45,0,()=>yd(i,"bierbank")),qe(i,"drauss0",y-.5,s+2.25),i.at(Ue(t.door.x-a*1.35,t.px0+.4+v,t.px1-.8-v),s+.42,0,()=>Md(i,"kisten",4));let T=[t.door.x+a*.95,t.door.x-a*.95].find(M=>Math.abs(M-y)>=1.5);T!==void 0&&i.at(T,s+.95,.3*a,()=>Sd(i,"aufsteller")),t.walkBusy=[y-1.3,y+1.3]}function b_(i,t,e){let{W:n,zF:s}=t,r=t.zPart;Zr(i,t,r),Kr(i,t,"store");let a=-n/2+.15,o=n/2-1.3,l=Math.floor((o-a)/.9);for(let M=0;M<l;M++)i.at(a+.45+M*.9,r+.06+.37,0,()=>Wr(i,"kuehl"+M,.9));let c=t.door.x<=0?1:-1,h=n>=10?3:n>=7?2:1,m=t.door.x-t.door.w/2-.35,u=t.door.x+t.door.w/2+.35,p=0;for(let M=0;M<4&&p<h;M++){let w=c*(n/2-.62-M*1.55);w+.45>m&&w-.45<u||c*(w-t.door.x)<t.door.w/2+.6||(i.at(w,s-1.65,0,()=>md(i,"kasse"+p)),qe(i,"team"+p,w-.68*c,s-1.9),p++)}let _=c*(n/2-.62-(p-1)*1.55)-c*.9,g=t.door.x-c*(t.door.w/2+.55);Math.abs(g)<n/2-.35&&i.at(g,s-1.25,0,()=>gd(i,"wagen",3));let f=t.door.x-c*(t.door.w/2+1.95);Math.abs(f)+.85<n/2-.1&&i.at(f,s-1.6,0,()=>xd(i,"obst",1.6));let d=r+.06+.74+1,S=s-2.75;S-d>1.2&&(i.at(-n/2+.21,(d+S)/2,ee/2,()=>Mi(i,"wandL",S-d,1.9)),t.glassRight||i.at(n/2-.21,(d+S-.6)/2,-ee/2,()=>Mi(i,"wandR",S-d-.6,1.9)));let A=-n/2+.42+1.05,x=n/2-(t.glassRight?1.4:.42+1.05),v=Math.max(0,Math.floor((x-A+1.1)/2)),y=r+.06+.74+1.15,T=s-3.1;if(T-y>1.2)for(let M=0;M<v;M++){let w=A+(x-A-(v*2-1.1))/2+.45+M*2;Ns(y,T,4.2,1.2).forEach(([R,I],L)=>i.at(w,(R+I)/2,ee/2,()=>Xr(i,`regal${M}_${L}`,I-R)))}qe(i,"gast0",t.aisle[0]*.3+_*0,s-2.6),i.stats.kassen=p}function w_(i,t,e){let{W:n,zF:s}=t,r=t.zPart;Zr(i,t,r),Kr(i,t,"store");let a=n>=8?3:2,o=-n/2+.15;i.at(o+a*.5,r+.06+.63,0,()=>wd(i,"umkleide",a)),i.at(o+a+.55,r+.09,0,()=>Ed(i,"spiegel")),i.stats.kabinen=a;let l=n/2-1.62;i.at(l,r+.06+.95+.36,0,()=>Vi(i,"theke",1.8,{label:"Kasse"})),qe(i,"team0",l+.2,r+.06+.5);let c=(d,S,A,x,v)=>Ns(S,A,2.6,.35).forEach(([y,T],M)=>i.at(d,(y+T)/2,x,()=>qr(i,`${v}${M}`,T-y)));if(c(-n/2+.34,r+1.6,s-1.25,ee/2,"stangeL"),!t.glassRight)c(n/2-.34,r+2.35,s-1.25,-ee/2,"stangeR");else for(let d=0;d<3&&r+3+d*1.1<s-1.75;d++)i.at(n/2-.55,r+3+d*1.1,-ee/2,()=>bd(i,"puppeR"+d));let h=-n/2+.6+1.1,m=n/2-(t.glassRight?1.4:.6+1.1),u=r+2.5,p=s-1.55,_=Math.max(1,Math.floor((m-h)/2.6));for(let d=0;d<_;d++){let S=h+(m-h)*(d+.5)/_,A=Math.max(0,Math.floor((p-u)/2.1));for(let x=0;x<A;x++){let v=u+(p-u-A*2.1)/2+1.05+x*2.1;(d+x)%2===0?i.at(S,v,d%2*ee,()=>qc(i,`tisch${d}_${x}`)):i.at(S,v,0,()=>qr(i,`st\xE4nder${d}_${x}`,1.5,"Kleiderst\xE4nder"))}}s-r>7&&n<8&&i.at(o+a*.5,r+2.35,ee,()=>Gr(i,"warten",1.3,"Sitzbank"));let g=t.door.x-t.door.w/2-.4,f=t.door.x+t.door.w/2+.4;[[-n/2+.2,g],[f,n/2-.2]].forEach(([d,S],A)=>{let x=Math.min(2.6,S-d);if(x<1)return;let v=A===0?S-x/2:d+x/2;i.box("podest"+A,v,0,s-.5,x,.16,.7,"w",{L:2,lab:"Schaufenster Podest"});let y=Math.max(1,Math.min(3,Math.floor(x/.75)));for(let T=0;T<y;T++)i.at(v-x/2+x*(T+.5)/y,s-.5,0,()=>i.group("puppe"+A+T,"Schaufensterpuppe",3,()=>{i.cyl("base",0,.16,0,.18,.03,"g"),i.cyl("pole",0,.19,0,.02,.92),i.cap("torso",0,1.06,0,.16,.66),i.sph("head",0,1.74,0,.1)}))}),i.at(-n/2+.5,r+1.6-.05,0,()=>{}),qe(i,"gast0",(h+m)/2+1,s-1)}function E_(i,t,e){let{W:n,zF:s}=t,r=t.zPart;Zr(i,t,r),Kr(i,t,"store");let a=t.door.x<=0?1:-1,o=n>=7,l=o?s-2.7:s-2.2;if(i.at(a*(n/2-1.55),l,0,()=>Vi(i,"theke",1.5,{label:"Empfang"})),qe(i,"team0",a*(n/2-1.55),l-.75),o){i.at(a*(n/2-1.25),s-.62,ee,()=>Gr(i,"warten",1.7,"Wartebereich"));let d=a*(n/2-2.55);Math.abs(d-t.door.x)>t.door.w/2+1&&i.at(d,s-.75,0,()=>Yc(i,"pflanze0",1.2))}let c=r+1,h=l-.9,m=r+.9;if(s-r>=7.5){let d=Math.min(4,Math.floor((n-1.4-.3)/1.05));for(let S=0;S<d;S++)i.at(-n/2+.65+S*1.05,r+.06+.86,0,()=>Td(i,"pedi"+S));m=r+2.55,c=r+2.55}let u=-a,p=u<0?ee/2:-ee/2,_=s-(t.door.x*u>0?1.6:1.1),g=_-m<4?1.3:1.6,f=Math.max(0,Math.floor((_-m)/g));for(let d=0;d<f;d++)i.at(u*(n/2-.92),m+g/2+d*g,p,()=>Yr(i,"nagel"+d));if(n>=10)for(let d=0;d<f&&m+.8+d*1.6<s-2.2;d++)i.at(-.95-t.aisle[1]*0+.3,m+.8+d*1.6,-ee/2,()=>Yr(i,"nagelM"+d)),i.at(.95+.3,m+.8+d*1.6,ee/2,()=>Yr(i,"nagelN"+d));h-c>1&&(!t.glassRight||a<0)&&i.at(a*(n/2-.21),(c+Math.min(h,c+2.4))/2,a>0?-ee/2:ee/2,()=>Mi(i,"produkte",Math.min(2.4,h-c),1.9,"Produktregal")),qe(i,"gast0",a*(n/2-1.55),l+.75)}function T_(i,t,e){let n=t.walkBusy||[99,99],s=(t.zS??t.zF)+.12+t.SW/2+.1,r=[t.px0+.85,t.px1-.85].filter(o=>o<n[0]-.9||o>n[1]+.9);if(!t.open&&r.length){let o=r[0];i.group("baum","Stra\xDFenbaum",2,()=>{i.box("grate",o,-.03,s+.3,.9,.03,.9,"g"),i.cyl("stamm",o,0,s+.3,.07,1.9),i.sph("krone",o,1.55,s+.3,.6,"g"),i.sph("krone2",o+.25,1.95,s+.15,.4,"g",{L:4})})}else t.open&&[t.px0+1.4,t.px1-1.4].forEach((o,l)=>i.group("kuebel"+l,"Pflanzk\xFCbel",2,()=>{i.box("k",o,0,s+.4,1.4,.45,.55,"w"),i.sph("g",o,.3,s+.4,.4,"g")}));let a=1+(e()>.5?1:0);for(let o=0;o<a;o++){let l=t.px0+1.6+e()*(t.px1-t.px0-3.2);l>n[0]-.4&&l<n[1]+.4&&(l=n[0]-.8),qe(i,"passant"+o,l,s+(e()-.5)*.9)}}var Nd=i=>Math.round(i*100)/100;function A_(i){let t=i.fp,e=t.core,n=i.zPart;return t.links.map(s=>{let r=s.a===0||s.b===0,a,o;if(r&&s.axis==="h"&&Math.abs(s.pos-e.z0)<.02)o=Math.min(s.hi,e.x1-.15),a=Math.max(s.lo,o-1),o-a<.8&&(a=s.lo,o=Math.min(s.hi,s.lo+1));else{let l=s.lo,c=s.hi;r&&s.axis==="v"&&(l=Math.max(l,Math.min(c-1.4,n+.35)),c-l<1&&(l=s.lo));let h=c-l,m=h<=3.6?Math.max(1,h-.5):Ue(h*.55,3,7),u=(l+c)/2;a=Math.max(s.lo+.15,u-m/2),o=Math.min(s.hi-.15,u+m/2)}return{a:Nd(a),b:Nd(o)}})}function Od(i,t){return!t.core&&(t.role==="rear"||t.z1<=i.zPart+.4)}function C_(i,t,e={}){let{fp:n,H:s,t:r}=t,a=n.bbox,o=t.zS,l={struct:!0,L:0,lab:""},c={struct:!0,L:1,lab:""};i.box("plinth",(t.px0+t.px1)/2,-.52,(t.pz0+t.pz1)/2,t.px1-t.px0,.42,t.pz1-t.pz0,"w",{...l,rad:.09,cast:!1}),n.rects.forEach((g,f)=>{let d=g.w+(f?.04:0),S=g.d+(g.core?.12:.04);i.box(f?"floor"+f:"floor",(g.x0+g.x1)/2,-.1,(g.z0+g.z1)/2+(g.core?.06:0),d,.1,S,"f",{...l,plain:!0,cast:!1})}),i.box("walk",(t.px0+t.px1)/2,-.1,o+.12+t.SW/2+.1,t.px1-t.px0,.075,t.SW+.2,t.open?"f2":"s",{...l,plain:!0,cast:!1}),n.edges.forEach((g,f)=>{if((g.kind==="front"||g.kind==="glass")&&g.nz===1&&o-g.z0>.05){let d=Math.min(g.x0,g.x1),S=Math.max(g.x0,g.x1),A=g.z0+.12;i.box("walkR"+f,(d+S)/2,-.1,(A+o+.12)/2,S-d,.075,o+.12-A,"s",{...l,plain:!0,cast:!1})}}),n.glassR&&i.box("walk2",(a.x1+.12+t.px1)/2,-.1,(t.pz0+o+.12)/2,t.px1-a.x1-.12,.075,o+.12-t.pz0,"s",{...l,plain:!0,cast:!1}),n.glassL&&i.box("walk3",(t.px0+a.x0-.12)/2,-.1,(t.pz0+o+.12)/2,a.x0-.12-t.px0,.075,o+.12-t.pz0,"s",{...l,plain:!0,cast:!1});let h=n.edges.length,m=g=>{let f=n.edges[(g+h-1)%h],d=n.edges[g];return(f.x1-f.x0)*(d.z1-d.z0)-(f.z1-f.z0)*(d.x1-d.x0)>0},u=g=>g.nz===1?0:g.nx===1?ee/2:g.nx===-1?-ee/2:ee,p=g=>g.nz===-1?"back":g.nx===-1?"left":g.nx===1?"right":"front";n.edges.forEach((g,f)=>{let d=(g.x1-g.x0)/g.len,S=(g.z1-g.z0)/g.len,A=m(f)?r:0,x=m((f+1)%h)?r:0,v=[[0,g.len,g.kind]];if(g.kind==="glass"&&g.nz!==1){let y=t.zPart,T=Math.min(g.z0,g.z1),M=Math.max(g.z0,g.z1),w=Math.max(T,y);if(g.nx!==0&&M-w>=.8){let R=W=>S===0?0:(W-g.z0)/S,I=R(w),L=R(M),[V,F]=I<L?[I,L]:[L,I];v=[],V>.05&&v.push([0,V,"wall"]),v.push([V,F,"glass"]),F<g.len-.05&&v.push([F,g.len,"wall"])}else g.nx!==0&&(v=[[0,g.len,"wall"]])}v.forEach(([y,T,M],w)=>{let R=y-(y===0?A:0),I=T+(T===g.len?x:0),L=I-R,V=(R+I)/2,F=g.x0+d*V,W=g.z0+S*V;if(M==="wall"){let nt=Math.abs(S)<1e-6;i.box(`wall${f}_${w}`,F+g.nx*r/2,-.1,W+g.nz*r/2,nt?L:r,s+.1,nt?r:L,"w",{...c,cut:p(g)})}else M==="front"?i.at(F,W+.06,0,()=>ll(i,"fac",L,t.door.x-F,t.door.w,t.open,e,t,!0)):i.at(F+g.nx*.06,W+g.nz*.06,u(g),()=>ll(i,`fac${f}_${w}`,L,0,0,!1,{},t,!1))})});let _=.14;n.links.forEach((g,f)=>{let d=t.pass[f];[[g.lo,d.a],[d.b,g.hi]].forEach(([S,A],x)=>{A-S<.06||(g.axis==="v"?i.box(`iw${f}_${x}`,g.pos+g.bSide*_/2,-.1,(S+A)/2,_,s+.1,A-S,"w",{...c,cut:"inner"}):i.box(`iw${f}_${x}`,(S+A)/2,-.1,g.pos+g.bSide*_/2,A-S,s+.1,_,"w",{...c,cut:"inner"}))})})}function R_(i){let t=new Map;for(let e of i.list){if(e.struct)continue;let n=Math.abs(Math.cos(e.ry)),s=Math.abs(Math.sin(e.ry)),r=(e.w*n+e.d*s)/2,a=(e.w*s+e.d*n)/2,o=t.get(e.g)||{x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9};o.x0=Math.min(o.x0,e.x-r),o.x1=Math.max(o.x1,e.x+r),o.z0=Math.min(o.z0,e.z-a),o.z1=Math.max(o.z1,e.z+a),o.y0=Math.min(o.y0,e.y),t.set(e.g,o)}return t}var P_=(i,t)=>i.x0<t.x1&&i.x1>t.x0&&i.z0<t.z1&&i.z1>t.z0;function I_(i,t){let e=t.fp,n=[];if(e.links.forEach((r,a)=>{if(r.a!==0&&r.b!==0)return;let o=t.pass[a],l=r.a===0?r.bSide:-r.bSide,c=1.1;r.axis==="v"?n.push({x0:l>0?r.pos-c:r.pos,x1:l>0?r.pos:r.pos+c,z0:o.a-.1,z1:o.b+.1}):n.push({x0:o.a-.1,x1:o.b+.1,z0:l>0?r.pos-c:r.pos,z1:l>0?r.pos:r.pos+c})}),!n.length)return;let s=[];for(let[r,a]of R_(i))a.y0<2.2&&n.some(o=>P_(a,o))&&s.push(r);i.removeGroups(s)}function L_(i,t){let e=t.fp,n=.02,s=/^(bierbank|kisten|aufsteller|baum|kuebel|passant|drauss)/,r=f=>{let d=Math.abs(Math.cos(f.ry)),S=Math.abs(Math.sin(f.ry)),A=(f.w*d+f.d*S)/2,x=(f.w*S+f.d*d)/2;return{x0:f.x-A,x1:f.x+A,z0:f.z-x,z1:f.z+x,y0:f.y,y1:f.y+f.h}},a=new Map;for(let f of i.list){if(f.struct)continue;let d=r(f),S=a.get(f.g)||{x0:1e9,x1:-1e9,z0:1e9,z1:-1e9,y0:1e9,list:[]};S.x0=Math.min(S.x0,d.x0),S.x1=Math.max(S.x1,d.x1),S.z0=Math.min(S.z0,d.z0),S.z1=Math.max(S.z1,d.z1),S.y0=Math.min(S.y0,d.y0),S.list.push(d),a.set(f.g,S)}let o=.14,l=[],c=[];e.links.forEach((f,d)=>{let S=t.pass[d],A=Math.min(f.pos,f.pos+f.bSide*o)+.01,x=Math.max(f.pos,f.pos+f.bSide*o)-.01;[[f.lo,S.a],[S.b,f.hi]].filter(([v,y])=>y-v>.06).forEach(([v,y])=>l.push(f.axis==="v"?{x0:A,x1:x,z0:v,z1:y}:{x0:v,x1:y,z0:A,z1:x})),c.push(f.axis==="v"?{x0:f.pos-1,x1:f.pos+1,z0:S.a+.1,z1:S.b-.1}:{x0:S.a+.1,x1:S.b-.1,z0:f.pos-1,z1:f.pos+1})});let h=t.door.x-t.door.w/2,m=t.door.x+t.door.w/2,u=t.W/2,p=(f,d)=>Math.max(0,Math.min(f.x1,d.x1)-Math.max(f.x0,d.x0))*Math.max(0,Math.min(f.z1,d.z1)-Math.max(f.z0,d.z0)),_=[],g=[];for(let[f,d]of a){if(s.test(f))continue;let S=/^(team|gast|passant|drauss)/.test(f),A=!e.rects.some(x=>d.x0>=x.x0-n&&d.x1<=x.x1+n&&d.z0>=x.z0-n&&d.z1<=x.z1+n);if(A||(A=l.some(x=>d.y0<2.3&&d.x0<x.x1&&d.x1>x.x0&&d.z0<x.z1&&d.z1>x.z0)||c.some(x=>d.y0<2&&d.x0<x.x1-n&&d.x1>x.x0+n&&d.z0<x.z1-n&&d.z1>x.z0+n)),!A&&!S&&(d.x1>-u&&d.x0<u&&d.z0<t.zPart+.06-n&&d.z1>t.zPart-.06+n&&d.y0<2.3||d.x1>h+n&&d.x0<m-n&&d.z1>t.zF-1.1&&d.y0<2||d.x1>u-1.05&&d.x0<u-.2&&d.z0<t.zPart+.75&&d.z1>t.zPart-.75&&d.y0<2)&&(A=!0),!A&&!S){for(let[x,v]of a)if(!(x===f||!_.includes(x)||/^(team|gast|passant|drauss)/.test(x))&&!(p(d,v)<.003)&&d.list.some(y=>v.list.some(T=>p(y,T)>.003&&Math.min(y.y1,T.y1)-Math.max(y.y0,T.y0)>.02))){A=!0;break}}A?g.push(f):_.push(f)}i.removeGroups(g),t.dropped=g.length}function D_(i,t,e,n,s){let r=t.fp;r.rects.forEach((a,o)=>{if(a.core)return;let l={x0:"wall",x1:"wall",z0:"wall",z1:"wall"},c=[],h={x0:.15,x1:.15,z0:.15,z1:.15};r.links.forEach((f,d)=>{if(f.a!==o&&f.b!==o)return;let S=t.pass[d],A=o===f.b?f.bSide:-f.bSide,x=1.2,v=o===f.b;if(f.axis==="v"){c.push({x0:A>0?f.pos:f.pos-x,x1:A>0?f.pos+x:f.pos,z0:S.a-.1,z1:S.b+.1});let y=Math.abs(f.pos-a.x0)<.02?"x0":"x1";l[y]="link",v&&(h[y]=.3)}else{c.push({x0:S.a-.1,x1:S.b+.1,z0:A>0?f.pos:f.pos-x,z1:A>0?f.pos+x:f.pos});let y=Math.abs(f.pos-a.z0)<.02?"z0":"z1";l[y]="link",v&&(h[y]=.3)}}),r.edges.forEach(f=>{if(f.kind==="wall")return;let d=f.nz!==0,S=d?f.z0:f.x0,A=d?Math.abs(S-a.z0)<.02?"z0":Math.abs(S-a.z1)<.02?"z1":null:Math.abs(S-a.x0)<.02?"x0":Math.abs(S-a.x1)<.02?"x1":null;A&&l[A]==="wall"&&(l[A]="glass")});let m=`a${o}`,p=Od(t,a)?"store":e.kind==="gastro"?"gastro":e.id==="spaeti"||e.id==="markt"?"retail":e.id==="mode"?"mode":"nails",_=p==="retail"||p==="mode"||p==="nails"?.5:0;if(_){let f=0,d=(A,x,v,y)=>{p==="retail"?i.at(A,x,v,()=>Mi(i,`${m}w${f++}`,y,1.9)):p==="mode"?i.at(A,x,v,()=>qr(i,`${m}w${f++}`,y)):i.at(A,x,v,()=>Mi(i,`${m}w${f++}`,y,1.9,"Produktregal"))},S=(A,x,v)=>Ns(A,x,p==="retail"?3.4:3,.3).forEach(([y,T])=>T-y>=.9&&v((y+T)/2,T-y));l.z0==="wall"&&a.w>=2.6&&(S(a.x0+.5,a.x1-.5,(A,x)=>d(A,a.z0+(p==="mode"?.3:.22),0,x)),h.z0+=_),l.x0==="wall"&&a.d>=2.6&&(S(a.z0+.5,a.z1-.5,(A,x)=>d(a.x0+(p==="mode"?.3:.22),A,ee/2,x)),h.x0+=_),l.x1==="wall"&&a.d>=2.6&&(S(a.z0+.5,a.z1-.5,(A,x)=>d(a.x1-(p==="mode"?.3:.22),A,-ee/2,x)),h.x1+=_),l.z1==="wall"&&a.w>=2.6&&a.d>=3.4&&(S(a.x0+.5,a.x1-.5,(A,x)=>d(A,a.z1-(p==="mode"?.3:.22),ee,x)),h.z1+=_)}let g={x0:a.x0+h.x0,x1:a.x1-h.x1,z0:a.z0+h.z0,z1:a.z1-h.z1};if(!(g.x1-g.x0<1||g.z1-g.z0<1))if(p==="store")N_(i,m,g,c);else if(p==="gastro"){let f=0;$r(i,g.x0,g.x1,g.z0,g.z1,n.tables,s,()=>`${m}t${f++}`,c)}else p==="retail"?U_(i,m,g,c):p==="mode"?F_(i,m,g,c):O_(i,m,g,c)})}function N_(i,t,e,n){let s=e.x1-e.x0,r=e.z1-e.z0,a=o=>n.some(l=>o.x0<l.x1&&o.x1>l.x0&&o.z0<l.z1&&o.z1>l.z0);if(s>=1.2){let o=Math.min(4.4,s-.2),l=(e.x0+e.x1)/2,c=e.z0+.235;a({x0:l-o/2,x1:l+o/2,z0:c-.25,z1:c+.25})||i.at(l,c,0,()=>yi(i,t+"reg0",o))}if(r>=3.2&&s>=3){let o=Math.min(3.4,r-1.2),l=(e.z0+e.z1)/2+.3,c=e.x0+.235;a({x0:c-.25,x1:c+.25,z0:l-o/2,z1:l+o/2})||i.at(c,l,ee/2,()=>yi(i,t+"reg1",o))}if(r>=3.6&&s>=3.4){let o=Math.min(2.4,s-2),l=(e.x0+e.x1)/2+.5,c=e.z0+1.9;a({x0:l-o/2,x1:l+o/2,z0:c-.4,z1:c+.4})||i.at(l,c,0,()=>Hr(i,t+"tisch",o))}}function U_(i,t,e,n){let s=0,r=e.x1-e.x0,a=e.z1-e.z0;if(r<1.8||a<1.8)return;let o=r>=a,l=o?a:r,c=(o?e.x0:e.z0)+.4,h=(o?e.x1:e.z1)-.4,m=Math.max(0,Math.floor((l+1.1)/2));for(let u=0;u<m;u++){let p=(o?e.z0:e.x0)+.45+(l-(m*2-1.1))/2+u*2,_=n.filter(g=>o?g.z0<p+.6&&g.z1>p-.6:g.x0<p+.6&&g.x1>p-.6).map(g=>o?[g.x0-.1,g.x1+.1]:[g.z0-.1,g.z1+.1]);Ld(c,h,_).forEach(([g,f])=>{f-g<1.4||Ns(g,f,3.6,1.2).forEach(([d,S])=>{o?i.at((d+S)/2,p,0,()=>Xr(i,`${t}g${s++}`,S-d)):i.at(p,(d+S)/2,ee/2,()=>Xr(i,`${t}g${s++}`,S-d))})})}}function F_(i,t,e,n){let s=0;ol(e,2.4,2.1,n).forEach(r=>{(r.i+r.j)%2===0?i.at(r.x-.1,r.z-.2,r.i%2*ee,()=>qc(i,`${t}n${s++}`)):i.at(r.x,r.z,0,()=>qr(i,`${t}s${s++}`,1.5,"Kleiderst\xE4nder"))})}function O_(i,t,e,n){let s=0;ol(e,1.6,2.1,n).forEach(r=>i.at(r.x,r.z-.05,0,()=>Yr(i,`${t}m${s++}`)))}function z_(i,t,e){let n=i.stats,s=[{k:"Fl\xE4che",v:t.m2,u:"m\xB2"}];return e.kind==="gastro"?s.push({k:"Sitzpl\xE4tze",v:n.seats,u:""},{k:"Theke",v:+n.counter.toFixed(1),u:"m"}):e.id==="spaeti"?s.push({k:"Regalmeter",v:Math.round(n.shelf),u:"m"},{k:"Pl\xE4tze drau\xDFen",v:n.seats,u:""}):e.id==="markt"?s.push({k:"Regalmeter",v:Math.round(n.shelf),u:"m"},{k:"Kassen",v:n.kassen||0,u:""}):e.id==="mode"?s.push({k:"Stangen",v:+n.shelf.toFixed(1),u:"m"},{k:"Umkleiden",v:n.kabinen||0,u:""}):s.push({k:"Behandlungspl\xE4tze",v:n.places,u:""}),s.push({k:"Bauteile",v:i.list.length,u:""}),s}var B_=(i,t,e)=>Math.max(t,Math.min(e,i));function zd(i,t,e){let n=new Uint8ClampedArray(t*e);for(let s=0,r=0;s<t*e;s++,r+=4){let a=i[r+3]/255;n[s]=(i[r]*.299+i[r+1]*.587+i[r+2]*.114)*a+255*(1-a)}return n}function k_(i){let t=new Float64Array(256);for(let e=0;e<i.length;e++)t[i[e]]++;return t}function V_(i,t){let e=new Float64Array(257),n=new Float64Array(257);for(let l=0;l<256;l++)e[l+1]=e[l]+i[l],n[l+1]=n[l]+i[l]*l;let s=n[256],r=-1,a=85,o=170;for(let l=8;l<250;l+=2)for(let c=l+8;c<252;c+=2){let h=e[l],m=e[c]-e[l],u=t-e[c];if(h<1||m<1||u<1)continue;let p=n[l]/h,_=(n[c]-n[l])/m,g=(s-n[c])/u,f=h*(p-s/t)**2+m*(_-s/t)**2+u*(g-s/t)**2;f>r&&(r=f,a=l,o=c)}return[a,o]}function kd(i,t,e){let n=t*e,s=i,r=0;for(let m=0;m<n;m+=7)r+=i[m];if(r/Math.ceil(n/7)<95){s=new Uint8ClampedArray(n);for(let m=0;m<n;m++)s[m]=255-i[m]}let a=k_(s),[o]=V_(a,n),l=0;for(let m=110;m<=200;m++)l+=a[m];let c=l/n>.18?B_(o+25,70,150):175,h=new Uint8Array(n);for(let m=0;m<n;m++)h[m]=s[m]<c?1:0;return h}function G_(i,t,e){let n=[],s=[],r=Math.max(t,e),a=t/2,o=e/2,l=Math.max(1,Math.round(r/420));for(let f=0;f<e;f+=l)for(let d=0;d<t;d+=l)i[f*t+d]&&(n.push(d-a),s.push(f-o));if(n.length<50)return 0;let c=(f,d,S,A)=>{let x=Math.cos(f*Math.PI/180),v=Math.sin(f*Math.PI/180),y=Math.ceil(r*1.5/A)+4,T=y>>1,M=new Float64Array(y),w=new Float64Array(y);for(let I=0;I<d.length;I++)M[Math.floor((d[I]*x-S[I]*v)/A)+T]++,w[Math.floor((d[I]*v+S[I]*x)/A)+T]++;let R=0;for(let I=1;I<y;I++)R+=(M[I]-M[I-1])**2+(w[I]-w[I-1])**2;return R},h=0,m=-1;for(let f=-45;f<45;f+=1){let d=c(f,n,s,l*2.2);d>m&&(m=d,h=f)}let u=[],p=[],_=Math.max(1,Math.round(r/1100));for(let f=0;f<e;f+=_)for(let d=0;d<t;d+=_)i[f*t+d]&&(u.push(d-a),p.push(f-o));let g=h;m=-1;for(let f=h-1.4;f<=h+1.4;f+=.1){let d=c(f,u,p,_*1.2);d>m&&(m=d,g=f)}return g}function Vd(i,t,e){let n=zd(i,t,e),s=G_(kd(n,t,e),t,e);if(Math.abs(s)<.35)return{rgba:i,w:t,h:e,gray:n,angle:0};let r=H_(i,t,e,s);return{rgba:r.rgba,w:r.w,h:r.h,gray:zd(r.rgba,r.w,r.h),angle:s}}function H_(i,t,e,n){let s=n*Math.PI/180,r=Math.cos(s),a=Math.sin(s),o=Math.ceil(Math.abs(t*r)+Math.abs(e*a)),l=Math.ceil(Math.abs(t*a)+Math.abs(e*r)),c=new Uint8ClampedArray(o*l*4),h=t/2,m=e/2,u=o/2,p=l/2;for(let _=0;_<l;_++)for(let g=0;g<o;g++){let f=g+.5-u,d=_+.5-p,S=r*f+a*d+h-.5,A=-a*f+r*d+m-.5,x=(_*o+g)*4;if(S<0||A<0||S>=t-1||A>=e-1){c[x]=c[x+1]=c[x+2]=c[x+3]=255;continue}let v=Math.floor(S),y=Math.floor(A),T=S-v,M=A-y;for(let w=0;w<4;w++){let R=i[(y*t+v)*4+w],I=i[(y*t+v+1)*4+w],L=i[((y+1)*t+v)*4+w],V=i[((y+1)*t+v+1)*4+w];c[x+w]=R*(1-T)*(1-M)+I*T*(1-M)+L*(1-T)*M+V*T*M}}return{rgba:c,w:o,h:l}}function W_(i,t,e){let n=new Int32Array((t+1)*(e+1));for(let s=0;s<e;s++){let r=0;for(let a=0;a<t;a++)r+=i[s*t+a],n[(s+1)*(t+1)+a+1]=n[s*(t+1)+a+1]+r}return n}function Us(i,t,e,n){if(n<=0)return i.slice();let s=W_(i,t,e),r=new Uint8Array(t*e),a=t+1;for(let o=0;o<e;o++){let l=Math.max(0,o-n),c=Math.min(e,o+n+1);for(let h=0;h<t;h++){let m=Math.max(0,h-n),u=Math.min(t,h+n+1);r[o*t+h]=s[c*a+u]-s[l*a+u]-s[c*a+m]+s[l*a+m]>0?1:0}}return r}function Hi(i){let t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i[e]?0:1;return t}var dl=(i,t,e,n)=>Hi(Us(Hi(i),t,e,n));function Bd(i,t,e){let{lab:n,stats:s}=wi(Hi(i),t,e),r=new Set(s.filter(o=>o.border).map(o=>o.id)),a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i[o]||n[o]>=0&&!r.has(n[o])?1:0;return a}function wi(i,t,e){let n=new Int32Array(t*e).fill(-1),s=[],r=new Int32Array(t*e);for(let a=0;a<t*e;a++){if(!i[a]||n[a]>=0)continue;let o=s.length,l=0,c=0,h=0,m=t,u=e,p=-1,_=-1,g=!1;for(r[c++]=a,n[a]=o;l<c;){let f=r[l++],d=f%t,S=(f-d)/t;h++,d<m&&(m=d),d>p&&(p=d),S<u&&(u=S),S>_&&(_=S),(d===0||S===0||d===t-1||S===e-1)&&(g=!0),d>0&&i[f-1]&&n[f-1]<0&&(n[f-1]=o,r[c++]=f-1),d<t-1&&i[f+1]&&n[f+1]<0&&(n[f+1]=o,r[c++]=f+1),S>0&&i[f-t]&&n[f-t]<0&&(n[f-t]=o,r[c++]=f-t),S<e-1&&i[f+t]&&n[f+t]<0&&(n[f+t]=o,r[c++]=f+t)}s.push({id:o,area:h,x0:m,y0:u,x1:p+1,y1:_+1,border:g})}return{lab:n,stats:s}}function Gd(i,t,e){let n=kd(i,t,e),s=t*e,r=Math.max(t,e),a=[.003,.006,.01,.015,.022,.03].map(g=>Math.max(2,Math.round(g*r))),o=[],l=wi(n,t,e).stats;for(let g of a){let f=Us(n,t,e,g),{lab:d,stats:S}=wi(Hi(f),t,e),A=S.filter(x=>!x.border&&x.area>=5e-4*s&&x.area<=.5*s&&!(x.x1-x.x0>=.9*t&&x.y1-x.y0>=.9*e)&&Math.min(x.x1-x.x0,x.y1-x.y0)>=.012*r&&!l.some(v=>v.x0>=x.x0&&v.y0>=x.y0&&v.x1<=x.x1&&v.y1<=x.y1&&(v.x1-v.x0)*(v.y1-v.y0)>=.35*(x.x1-x.x0)*(x.y1-x.y0)));o.push({R:g,lab:d,rooms:A,total:A.reduce((x,v)=>x+v.area,0)})}let c=Math.max(...o.map(g=>g.total)),h=o.find(g=>g.total>=.9*c&&g.rooms.length)||o[o.length-1];if(!h||!h.rooms.length)return{ink:n,w:t,h:e,R:h?h.R:0,rooms:[],label:new Int32Array(s).fill(-1)};let m=new Map(h.rooms.sort((g,f)=>f.area-g.area).map((g,f)=>[g.id,f])),u=new Int32Array(s).fill(-1),p=[];for(let g=0;g<s;g++){let f=m.get(h.lab[g]);f!==void 0&&h.lab[g]>=0&&(u[g]=f,p.push(g))}for(let g=0;g<h.R+1&&p.length;g++){let f=[];for(let d of p){let S=d%t,A=(d-S)/t,x=u[d];for(let[v,y]of[[1,0],[-1,0],[0,1],[0,-1]]){let T=S+v,M=A+y;if(T<0||M<0||T>=t||M>=e)continue;let w=M*t+T;u[w]<0&&!n[w]&&(u[w]=x,f.push(w))}}p=f}let _=h.rooms.map((g,f)=>({id:f,area:g.area,x0:g.x0,y0:g.y0,x1:g.x1,y1:g.y1}));return{ink:n,w:t,h:e,R:h.R,rooms:_,label:u,open:Math.ceil((h.R+1)/2)+1}}function Qc(i){let{rooms:t,w:e,h:n,label:s}=i;if(!t.length)return[];let r=Math.max(3,Math.round(.018*Math.max(e,n))),a=t.map((m,u)=>u),o=m=>{for(;a[m]!==m;)a[m]=a[a[m]],m=a[m];return m},l=(m,u)=>{let p=o(m),_=o(u);p!==_&&(a[p]=_)},c=(m,u,p)=>{for(let _=0;_<m;_+=2){let g=-1,f=-1e9;for(let d=0;d<u;d++){let S=s[p(_,d)];S<0||(g>=0&&g!==S&&d-f<=r&&l(g,S),g=S,f=d)}}};c(n,e,(m,u)=>m*e+u),c(e,n,(m,u)=>u*e+m);let h=o(0);return t.filter((m,u)=>o(u)===h).map(m=>m.id)}function X_(i,t,e){let{w:n,h:s,ink:r,label:a}=t,o=n*s,l=new Uint8Array(o);for(let g=0;g<o;g++)l[g]=i[g]||r[g]?1:0;let{lab:c,stats:h}=wi(Hi(l),n,s),m=new Uint8Array(h.length),u=new Uint8Array(h.length);for(let g=0;g<o;g++){let f=c[g];if(f<0||(a[g]>=0&&!e.has(a[g])&&(u[f]=1),i[g]))continue;let d=g%n;(d>0&&i[g-1]||d<n-1&&i[g+1]||g>=n&&i[g-n]||g<o-n&&i[g+n])&&(m[f]=1)}let p=0;for(let g=0;g<o;g++)p+=i[g];let _=i.slice();for(let g=0;g<o;g++){let f=c[g];f>=0&&m[f]&&!u[f]&&!h[f].border&&h[f].area<=.25*p&&(_[g]=1)}return _}function fl(i,t){let{w:e,h:n,label:s}=i,r=e*n,a=new Set(t);if(!a.size)return null;let o=new Uint8Array(r);for(let g=0;g<r;g++)a.has(s[g])&&(o[g]=1);let l=Math.round(.04*Math.max(e,n)),c=g=>wi(g,e,n).stats.filter(f=>f.area>.002*r).length,h=o,m=i.open||0;if(c(h)>1)for(let g=2;g<=l&&(o=dl(Us(h,e,n,g),e,n,g),!(c(o)<=1));g+=2);o=X_(o,i,a),o=Bd(o,e,n);let u=Math.max(m,Math.round(.03*Math.max(e,n)));o=dl(Us(o,e,n,u),e,n,u),m>0&&(o=Us(dl(o,e,n,m),e,n,m)),o=Bd(o,e,n);let p=al(o,e,n);if(!p)return null;let _=0;for(let g=0;g<p.length;g++){let f=p[g],d=p[(g+1)%p.length];_+=f[0]*d[1]-d[0]*f[1]}return{pts:p,areaPx:Math.abs(_)/2}}function th(i){let{ink:t,w:e,h:n}=i,s=e*n,r=Math.max(e,n),a=Math.round(.02*r),o=dl(Us(t,e,n,a),e,n,a),{lab:l,stats:c}=wi(Hi(o),e,n),h=wi(o,e,n);if(!h.stats.length)return null;let m=h.stats.slice().sort((S,A)=>A.area-S.area)[0],u=new Uint8Array(s);for(let S=0;S<s;S++)h.lab[S]===m.id&&(u[S]=1);let p=wi(Hi(u),e,n),_=new Uint8Array(s),g=new Set(p.stats.filter(S=>S.border).map(S=>S.id));for(let S=0;S<s;S++)_[S]=p.lab[S]>=0&&g.has(p.lab[S])?0:1;let f=al(_,e,n);if(!f)return null;let d=0;for(let S=0;S<f.length;S++){let A=f[S],x=f[(S+1)%f.length];d+=A[0]*x[1]-x[0]*A[1]}return{pts:f,areaPx:Math.abs(d)/2}}var Fs=(i,t=1)=>i.toFixed(t).replace(".",","),eh=i=>{let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2},q_=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1]),Hd=1800,Y_=[20,25,50,75,100,200,250,500],pl=null;async function $_(){if(!pl){let i=new URL("assets/js/pdfjs/",document.baseURI).href;pl=await import(i+"pdf.min.mjs"),pl.GlobalWorkerOptions.workerSrc=i+"pdf.worker.min.mjs"}return pl}var Z_=`
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
</div>`;function Wd({onApply:i,current:t}){let e=document.createElement("div");e.className="lplan",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-labelledby","lplan-t"),e.innerHTML=Z_,document.body.appendChild(e);let n=C=>e.querySelector(C),s=C=>[...e.querySelectorAll(C)],r=n("[data-cv]"),a=r.getContext("2d"),o=n("[data-stage]"),l=n("[data-pop]"),c=n("[data-area]"),h=n("[data-scale]"),m=n("[data-ortho]");Y_.forEach(C=>{let U=document.createElement("option");U.value=C,U.textContent=`1 : ${C}`,h.appendChild(U)});let u=null,p={k:1,tx:0,ty:0},_="select",g=[],f=[],d=null,S={v:-1,e:-1,mid:-1,room:-1},A=0,x=null,v=document.createElement("canvas"),y=document.createElement("canvas"),T=document.createElement("canvas"),M=C=>{n("[data-drop]").hidden=C!=="drop",n("[data-busy]").hidden=C!=="busy",n("[data-ed]").hidden=C!=="ed",e.dataset.view=C},w=C=>{let U=n("[data-err]");U.textContent=C||"",U.hidden=!C};function R(C){x=document.activeElement,e.hidden=!1,document.documentElement.classList.add("lplan-lock"),w(""),C?V(C):u&&u.img?(M("ed"),rt(),ht(),k()):M("drop"),setTimeout(()=>{let U=u&&u.img?n("[data-draw]"):n("[data-dz]");U&&U.focus()},50)}function I(){e.hidden=!0,document.documentElement.classList.remove("lplan-lock"),P(),x&&x.focus&&x.focus()}let L=C=>C.type==="application/pdf"||/\.pdf$/i.test(C.name);async function V(C){if(w(""),/\.(dwg|dxf)$/i.test(C.name)){M("drop"),w("DWG und DXF lesen wir hier nicht direkt. Bitte drucken Sie den Plan als PDF (in AutoCAD: Plotten, PDF) oder speichern Sie ihn als Bild.");return}if(!L(C)&&!/^image\//.test(C.type)&&!/\.(png|jpe?g|webp)$/i.test(C.name)){M("drop"),w("Dieses Dateiformat kennen wir nicht. Bitte PDF, JPG oder PNG w\xE4hlen.");return}if(C.size>60*1024*1024){M("drop"),w("Die Datei ist gr\xF6\xDFer als 60 MB. Bitte verkleinern Sie sie oder geben Sie nur die Seite mit dem Grundriss an.");return}M("busy"),n("[data-busy-t]").textContent="Plan wird ge\xF6ffnet",await new Promise(U=>setTimeout(U,30));try{let U={name:C.name,pdf:null,page:1,pages:1,renderScale:0};if(L(C)){let O=await(await $_()).getDocument({data:new Uint8Array(await C.arrayBuffer())}).promise;U.pdf=O,U.pages=O.numPages,await F(U,1)}else{let D=await createImageBitmap(C).catch(()=>null),O,Z,j;if(D)O=D.width,Z=D.height,j=(ut,mt)=>ut.drawImage(D,0,0,O*mt,Z*mt);else{let ut=URL.createObjectURL(C),mt=new Image;await new Promise((Rt,B)=>{mt.onload=Rt,mt.onerror=B,mt.src=ut}),O=mt.naturalWidth,Z=mt.naturalHeight,j=(Rt,B)=>Rt.drawImage(mt,0,0,O*B,Z*B)}let q=Math.max(1e3,Math.min(Hd,Math.max(O,Z)))/Math.max(O,Z);v.width=Math.round(O*q),v.height=Math.round(Z*q);let Q=v.getContext("2d");Q.fillStyle="#fff",Q.fillRect(0,0,v.width,v.height),j(Q,q)}await W(U)}catch(U){console.error(U),M("drop"),w(L(C)?"Diese PDF konnten wir nicht \xF6ffnen. Ist sie mit einem Passwort gesch\xFCtzt? Alternativ als Bild speichern und das Bild laden.":"Dieses Bild konnten wir nicht \xF6ffnen. Bitte versuchen Sie JPG oder PNG.")}}async function F(C,U){let D=await C.pdf.getPage(U),O=D.getViewport({scale:1}),Z=Hd/Math.max(O.width,O.height),j=D.getViewport({scale:Z});v.width=Math.round(j.width),v.height=Math.round(j.height);let q=v.getContext("2d");q.fillStyle="#fff",q.fillRect(0,0,v.width,v.height),await D.render({canvasContext:q,viewport:j}).promise,C.page=U,C.renderScale=Z}async function W(C){M("busy"),n("[data-busy-t]").textContent="R\xE4ume werden erkannt",await new Promise(q=>setTimeout(q,40));let U=v.getContext("2d"),D=U.getImageData(0,0,v.width,v.height),O=Vd(D.data,v.width,v.height);v.width=O.w,v.height=O.h,v.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(O.rgba),O.w,O.h),0,0);let Z=Gd(O.gray,O.w,O.h);u={src:C,w:O.w,h:O.h,angle:O.angle,an:Z,img:!0,sel:new Set,poly:[],fi:null,ft:.5,gl:new Set,mpp:null,scaleFrom:"",userArea:null},f=[],g=[],_="select",y.width=T.width=O.w,y.height=T.height=O.h;let j="";if(Z.rooms.length){u.sel=new Set(Qc(Z));let q=fl(Z,[...u.sel]);q&&(u.poly=q.pts)}if(u.poly.length<4){let q=th(Z);q&&(u.poly=q.pts,u.sel=new Set,j="Wir haben keine geschlossenen R\xE4ume gefunden und die Au\xDFenkontur genommen. Bitte pr\xFCfen Sie den Umriss.")}u.poly.length<4&&(j="Die Fl\xE4che konnten wir nicht erkennen. Zeichnen Sie den Umriss von Hand: Ecke f\xFCr Ecke anklicken.",_="draw"),u.note=j,nt(),tt(),M("ed"),rt(),ht(),k(),u.poly.length<4&&vt("draw")}function nt(){let C=n("[data-scale-row]");C.hidden=!u.src.pdf,h.value="";let U=n("[data-pages]");u.src.pdf&&u.src.pages>1?(U.hidden=!1,U.innerHTML="<span>Seite</span>"+Array.from({length:Math.min(u.src.pages,12)},(D,O)=>`<button type="button" data-page="${O+1}" aria-pressed="${O+1===u.src.page}">${O+1}</button>`).join("")):U.hidden=!0}function rt(){let C=o.getBoundingClientRect(),U=window.devicePixelRatio||1;r.width=Math.max(10,Math.round(C.width*U)),r.height=Math.max(10,Math.round(C.height*U)),r.style.width=C.width+"px",r.style.height=C.height+"px",Ct()}function ht(){if(!u)return;let C=o.getBoundingClientRect(),U=24,D=0,O=0,Z=u.w,j=u.h;if(u.poly.length>=3){D=Math.min(...u.poly.map(mt=>mt[0])),Z=Math.max(...u.poly.map(mt=>mt[0])),O=Math.min(...u.poly.map(mt=>mt[1])),j=Math.max(...u.poly.map(mt=>mt[1]));let Q=(Z-D)*.25+40,ut=(j-O)*.25+40;D-=Q,Z+=Q,O-=ut,j+=ut}let q=Math.min((C.width-U)/(Z-D),(C.height-U)/(j-O));p.k=q,p.tx=C.width/2-(D+Z)/2*q,p.ty=C.height/2-(O+j)/2*q,Ct()}let $=(C,U)=>[(C-p.tx)/p.k,(U-p.ty)/p.k],at=C=>[C[0]*p.k+p.tx,C[1]*p.k+p.ty];function lt(C,U,D){let[O,Z]=$(U,D),j=Math.max(.05,Math.min(12,p.k*C));p.k=j,p.tx=U-O*j,p.ty=D-Z*j,Bt()}function St(){let C=u.poly,U=C.length,D=eh(C)>=0?1:-1;return C.map((O,Z)=>{let j=C[(Z+1)%U],q=j[0]-O[0],Q=j[1]-O[1],ut=Math.hypot(q,Q)||1;return{a:O,b:j,len:ut,mid:[(O[0]+j[0])/2,(O[1]+j[1])/2],nx:Q/ut*D,nz:-q/ut*D}})}let Et=()=>u.mpp?Math.abs(eh(u.poly))*u.mpp*u.mpp:null,Zt=C=>u.mpp?`${Fs(C*u.mpp)} m`:"";function Ct(){if(!u||e.hidden)return;let C=window.devicePixelRatio||1,U=r.width,D=r.height;a.setTransform(1,0,0,1,0,0),a.fillStyle="#e9e7e2",a.fillRect(0,0,U,D),a.setTransform(C*p.k,0,0,C*p.k,C*p.tx,C*p.ty),a.imageSmoothingQuality="high",a.drawImage(v,0,0),a.globalAlpha=.34,a.drawImage(y,0,0),S.room>=0&&!u.sel.has(S.room)&&_==="select"&&(a.globalAlpha=.18,a.drawImage(T,0,0)),a.globalAlpha=1,a.setTransform(C,0,0,C,0,0);let O=u.poly.map(at),Z=O.length;if(_==="draw"){if(a.lineWidth=2.5,a.strokeStyle="#a91b18",a.fillStyle="#a91b18",a.beginPath(),g.map(at).forEach((j,q)=>q?a.lineTo(j[0],j[1]):a.moveTo(j[0],j[1])),g.length&&d&&d.cur){let j=at(d.cur);a.lineTo(j[0],j[1])}a.stroke(),g.map(at).forEach((j,q)=>{a.beginPath(),a.arc(j[0],j[1],q===0?8:5,0,7),a.fill()});return}if(Z>=3){a.beginPath(),O.forEach((q,Q)=>Q?a.lineTo(q[0],q[1]):a.moveTo(q[0],q[1])),a.closePath(),a.fillStyle="rgba(169,27,24,.07)",a.fill(),a.lineWidth=3,a.strokeStyle="#a91b18",a.lineJoin="round",a.stroke();let j=St();if(j.forEach((q,Q)=>{let ut=at(q.a),mt=at(q.b),Rt=Q===u.fi,B=u.gl.has(Q),_t=S.e===Q;(Rt||B||_t)&&(a.beginPath(),a.moveTo(ut[0],ut[1]),a.lineTo(mt[0],mt[1]),a.lineWidth=Rt?7:B?6:5,a.strokeStyle=Rt?"#111":B?"#2f7fa8":"rgba(17,17,17,.4)",a.setLineDash(B&&!Rt?[10,6]:[]),a.stroke(),a.setLineDash([])),u.fi===null&&!B&&q.len>.06*Math.max(u.w,u.h)&&!_t&&(a.beginPath(),a.moveTo(ut[0],ut[1]),a.lineTo(mt[0],mt[1]),a.lineWidth=4,a.strokeStyle="rgba(17,17,17,.22)",a.setLineDash([2,8]),a.lineCap="round",a.stroke(),a.setLineDash([]),a.lineCap="butt")}),u.fi!==null&&j[u.fi]){let q=j[u.fi],Q=at([q.a[0]+(q.b[0]-q.a[0])*u.ft,q.a[1]+(q.b[1]-q.a[1])*u.ft]);a.fillStyle="#fff",a.strokeStyle="#111",a.lineWidth=3,a.beginPath(),a.arc(Q[0],Q[1],11,0,7),a.fill(),a.stroke(),a.fillStyle="#111",a.font="700 11px Geist, system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("T\xFCr",Q[0],Q[1]+.5)}j.forEach(q=>{let Q=Zt(q.len);if(!Q||q.len*p.k<50)return;let ut=at(q.mid);a.font="600 12px Geist Mono, ui-monospace, monospace";let mt=a.measureText(Q).width+12,Rt=q.nx*(mt/2+14),B=q.nz*24;a.fillStyle="rgba(255,255,255,.94)",a.beginPath(),a.roundRect(ut[0]+Rt-mt/2,ut[1]+B-10,mt,20,6),a.fill(),a.fillStyle="#222",a.textAlign="center",a.textBaseline="middle",a.fillText(Q,ut[0]+Rt,ut[1]+B+.5)}),j.forEach((q,Q)=>{if(q.len*p.k<36)return;let ut=at(q.mid);a.fillStyle=S.mid===Q?"#a91b18":"#fff",a.strokeStyle="#a91b18",a.lineWidth=2,a.beginPath(),a.roundRect(ut[0]-7,ut[1]-7,14,14,4),a.fill(),a.stroke()}),O.forEach((q,Q)=>{a.fillStyle=S.v===Q?"#a91b18":"#fff",a.strokeStyle="#a91b18",a.lineWidth=2.5,a.beginPath(),a.arc(q[0],q[1],8,0,7),a.fill(),a.stroke()})}}let Bt=()=>{A||(A=requestAnimationFrame(()=>{A=0,Ct()}))};function tt(){let C=u.w,U=u.h,D=u.an,O=y.getContext("2d"),Z=O.createImageData(C,U),j=Z.data;for(let q=0;q<C*U;q++)u.sel.has(D.label[q])&&(j[q*4]=169,j[q*4+1]=27,j[q*4+2]=24,j[q*4+3]=255);O.putImageData(Z,0,0)}function ot(C){let U=u.w,D=u.h,O=T.getContext("2d");if(O.clearRect(0,0,U,D),C<0)return;let Z=O.createImageData(U,D),j=Z.data,q=u.an;for(let Q=0;Q<U*D;Q++)q.label[Q]===C&&(j[Q*4]=40,j[Q*4+1]=40,j[Q*4+2]=40,j[Q*4+3]=255);O.putImageData(Z,0,0)}function xt(){f.push(JSON.stringify({poly:u.poly,fi:u.fi,ft:u.ft,gl:[...u.gl],sel:[...u.sel],mpp:u.mpp})),f.length>60&&f.shift(),n("[data-undo]").disabled=!1}function Lt(){let C=f.pop();if(!C)return;let U=JSON.parse(C);u.poly=U.poly,u.fi=U.fi,u.ft=U.ft,u.gl=new Set(U.gl),u.sel=new Set(U.sel),u.mpp=U.mpp,tt(),P(),k(),n("[data-undo]").disabled=!f.length}function vt(C){_=C,g=[],P(),e.dataset.mode=C,n("[data-draw]").setAttribute("aria-pressed",String(C==="draw")),n("[data-draw]").textContent=C==="draw"?"Zeichnen beenden":"Umriss selbst zeichnen",n("[data-hint1]").textContent=C==="draw"?"Klicken Sie die Ecken der Fl\xE4che nacheinander an. Zum Schlie\xDFen auf die erste Ecke klicken oder Enter dr\xFCcken.":"Tippen Sie in die R\xE4ume, die zu Ihrer Fl\xE4che geh\xF6ren. Ecken und W\xE4nde lassen sich ziehen.",Ct()}let Wt=(C,U)=>!m.checked||!U?C:Math.abs(C[0]-U[0])>=Math.abs(C[1]-U[1])?[C[0],U[1]]:[U[0],C[1]];function se(){let C=g.slice();if(C.length<3){g=[],vt("select");return}if(m.checked){let U=C[C.length-1],D=C[0];Math.abs(U[0]-D[0])>1&&Math.abs(U[1]-D[1])>1&&C.push([D[0],U[1]])}xt(),u.poly=C,u.sel=new Set,u.fi=null,u.gl=new Set,tt(),vt("select"),k()}function X(C,U){let D=u.poly.map(at),O=14;for(let Q=0;Q<D.length;Q++)if(Math.hypot(D[Q][0]-C,D[Q][1]-U)<O)return{t:"v",i:Q};let Z=St();for(let Q=0;Q<Z.length;Q++){let ut=at(Z[Q].mid);if(Z[Q].len*p.k>=36&&Math.abs(ut[0]-C)<11&&Math.abs(ut[1]-U)<11)return{t:"m",i:Q}}let j=-1,q=9;for(let Q=0;Q<Z.length;Q++){let ut=D[Q],mt=D[(Q+1)%D.length],Rt=(mt[0]-ut[0])**2+(mt[1]-ut[1])**2||1,B=Math.max(0,Math.min(1,((C-ut[0])*(mt[0]-ut[0])+(U-ut[1])*(mt[1]-ut[1]))/Rt)),_t=Math.hypot(ut[0]+(mt[0]-ut[0])*B-C,ut[1]+(mt[1]-ut[1])*B-U);_t<q&&(q=_t,j=Q)}return j>=0?{t:"e",i:j}:null}let dt=C=>{let U=o.getBoundingClientRect();return[C.clientX-U.left,C.clientY-U.top]},gt=new Map,pt=null;o.addEventListener("pointerdown",C=>{if(C.target.closest(".lplan__tools, .lplan__pop"))return;P(),o.setPointerCapture(C.pointerId);let[U,D]=dt(C);if(gt.set(C.pointerId,[U,D]),gt.size===2){let[Z,j]=[...gt.values()];pt={d:Math.hypot(Z[0]-j[0],Z[1]-j[1]),k:p.k,cx:(Z[0]+j[0])/2,cy:(Z[1]+j[1])/2},d=null;return}if(_==="draw"){d={type:"draw",sx:U,sy:D,moved:!1,cur:$(U,D)};return}let O=X(U,D);if(O&&(O.t==="v"||O.t==="m")){xt(),d={type:O.t,i:O.i,sx:U,sy:D,moved:!1};return}d={type:"pan",sx:U,sy:D,tx:p.tx,ty:p.ty,moved:!1,hit:O}}),o.addEventListener("pointermove",C=>{let[U,D]=dt(C);if(gt.has(C.pointerId)&&gt.set(C.pointerId,[U,D]),pt&&gt.size===2){let[Z,j]=[...gt.values()],q=Math.hypot(Z[0]-j[0],Z[1]-j[1]),Q=Math.max(.05,Math.min(12,pt.k*(q/pt.d))),[ut,mt]=$(pt.cx,pt.cy);p.k=Q,p.tx=pt.cx-ut*Q,p.ty=pt.cy-mt*Q,Bt();return}if(!d){Gt(U,D);return}Math.hypot(U-d.sx,D-d.sy)>5&&(d.moved=!0),d.type==="pan"&&d.moved?(p.tx=d.tx+U-d.sx,p.ty=d.ty+D-d.sy,Bt()):d.type==="draw"?(d.cur=Wt($(U,D),g[g.length-1]),Bt()):d.type==="v"&&d.moved?z(d.i,$(U,D)):d.type==="m"&&d.moved&&et(d.i,$(U,D))});let Ot=C=>{if(gt.delete(C.pointerId),pt){gt.size<2&&(pt=null),d=null;return}let U=d;if(d=null,!U)return;let[D,O]=dt(C);if(U.type==="draw"&&!U.moved){let Z=Wt($(D,O),g[g.length-1]);if(g.length>=3&&Math.hypot(at(g[0])[0]-D,at(g[0])[1]-O)<14){se();return}g.push(Z),Ct();return}if(U.type==="v"||U.type==="m"){U.moved?k():(f.pop(),n("[data-undo]").disabled=!f.length,U.type==="m"&&$t(U.i,D,O));return}if(U.type==="pan"&&!U.moved){if(U.hit&&U.hit.t==="e"){$t(U.hit.i,D,O);return}let[Z,j]=$(D,O),q=u.an.label[Math.floor(j)*u.w+Math.floor(Z)];q!==void 0&&q>=0&&N(q)}};o.addEventListener("pointerup",Ot),o.addEventListener("pointercancel",Ot),o.addEventListener("wheel",C=>{C.preventDefault();let[U,D]=dt(C);lt(Math.exp(-C.deltaY*(C.deltaMode?.05:.0015)),U,D)},{passive:!1}),o.addEventListener("dblclick",C=>{_==="draw"&&C.preventDefault()});function Gt(C,U){if(_==="draw"){o.style.cursor="crosshair";return}let D=X(C,U),O={v:D&&D.t==="v"?D.i:-1,mid:D&&D.t==="m"?D.i:-1,e:D&&D.t==="e"?D.i:-1,room:-1};if(!D){let[j,q]=$(C,U);j>=0&&q>=0&&j<u.w&&q<u.h&&(O.room=u.an.label[Math.floor(q)*u.w+Math.floor(j)])}O.room!==S.room&&ot(O.room);let Z=O.v!==S.v||O.mid!==S.mid||O.e!==S.e||O.room!==S.room;S=O,o.style.cursor=O.v>=0||O.mid>=0?"grab":O.e>=0||O.room>=0?"pointer":"default",Z&&Bt()}function z(C,U){let D=u.poly.length,O=u.poly,Z=O[C],j=(C+D-1)%D,q=(C+1)%D,Q=m.checked&&yt(O),ut=U[0],mt=U[1];if(Q)for(let Rt of[j,q])Math.abs(O[Rt][0]-Z[0])<1e-6?O[Rt][0]=ut:Math.abs(O[Rt][1]-Z[1])<1e-6&&(O[Rt][1]=mt);Z[0]=ut,Z[1]=mt,Bt(),b()}function et(C,U){let D=u.poly.length,O=u.poly,Z=O[C],j=O[(C+1)%D];Math.abs(Z[0]-j[0])<Math.abs(Z[1]-j[1])?(Z[0]=U[0],j[0]=U[0]):(Z[1]=U[1],j[1]=U[1]),Bt(),b()}let yt=C=>C.every((U,D)=>{let O=C[(D+1)%C.length];return Math.abs(U[0]-O[0])<1e-6||Math.abs(U[1]-O[1])<1e-6});function N(C){if(xt(),u.sel.has(C)?u.sel.delete(C):u.sel.add(C),tt(),!u.sel.size){u.poly=[],k();return}let U={poly:u.poly,edges:u.poly.length>=3?St():[],fi:u.fi,gl:[...u.gl]},D=fl(u.an,[...u.sel]);D&&(u.poly=D.pts,kt(U)),k()}function kt(C){u.fi=null,u.gl=new Set;let U=St(),D=.04*Math.max(u.w,u.h),O=Z=>{let j=-1,q=D;return U.forEach((Q,ut)=>{let mt=q_(Q.mid,Z);mt<q&&(q=mt,j=ut)}),j};if(C.fi!==null&&C.edges[C.fi]){let Z=O(C.edges[C.fi].mid);Z>=0&&(u.fi=Z)}C.gl.forEach(Z=>{if(C.edges[Z]){let j=O(C.edges[Z].mid);j>=0&&j!==u.fi&&u.gl.add(j)}})}function $t(C,U,D){let O=St(),Z=O[C],j=C===u.fi,q=u.gl.has(C);l.innerHTML=[`<button type="button" data-a="front">${j?"Eingang hierhin verschieben":"Schaufenster und Eingang hier"}</button>`,j?"":`<button type="button" data-a="glass">${q?"Kein Fenster hier":"Fensterwand"}</button>`,!j&&!q||j?"":'<button type="button" data-a="wall">Normale Wand</button>','<button type="button" data-a="len">L\xE4nge dieser Wand angeben</button>'].join("");let Q=o.getBoundingClientRect();l.hidden=!1,l.style.left=Math.max(8,Math.min(Q.width-230,U+10))+"px",l.style.top=Math.max(8,Math.min(Q.height-160,D+10))+"px",l.dataset.i=C,l.dataset.sx=U,l.dataset.sy=D,Ct()}function P(){l.hidden=!0}l.addEventListener("click",C=>{let U=C.target.closest("button");if(!U)return;let D=+l.dataset.i,O=St(),Z=O[D],j=U.dataset.a;if(xt(),j==="front"){let[q,Q]=$(+l.dataset.sx,+l.dataset.sy),ut=Z.len*Z.len;u.ft=Math.max(.08,Math.min(.92,((q-Z.a[0])*(Z.b[0]-Z.a[0])+(Q-Z.a[1])*(Z.b[1]-Z.a[1]))/ut)),u.gl.delete(D),u.fi=D}else if(j==="glass")u.gl.has(D)?u.gl.delete(D):u.gl.add(D);else if(j==="wall")u.gl.delete(D),u.fi===D&&(u.fi=null);else if(j==="len"){P();let q=window.prompt("Wie lang ist diese Wand in Metern?",u.mpp?Fs(Z.len*u.mpp,2):"");if(q){let Q=parseFloat(q.replace(",","."));Q>.3&&Q<200&&(u.mpp=Q/Z.len,u.scaleFrom="Kante",c.value="")}}P(),k()}),document.addEventListener("pointerdown",C=>{!l.hidden&&!C.target.closest(".lplan__pop")&&P()});function b(){let C=n("[data-read]"),U=Et();if(!u.poly.length){C.innerHTML="<b>Noch keine Fl\xE4che</b>";return}let D=u.poly.map(mt=>mt[0]),O=u.poly.map(mt=>mt[1]),Z=Math.max(...D)-Math.min(...D),j=Math.max(...O)-Math.min(...O);C.innerHTML=U?`<div><span>Fl\xE4che</span><b>${Fs(U)} m\xB2</b></div><div><span>Gr\xF6\xDFte Ma\xDFe</span><b>${Fs(Z*u.mpp)} \xD7 ${Fs(j*u.mpp)} m</b></div><div><span>Ecken</span><b>${u.poly.length}</b></div>`:`<div><span>Ecken</span><b>${u.poly.length}</b></div><div class="lplan__warn">Gr\xF6\xDFe fehlt noch</div>`;let q=U&&u.fi!==null&&u.poly.length>=4,Q=n("[data-apply]");Q.disabled=!q,Q.title=q?"":U?"Bitte die Stra\xDFenseite w\xE4hlen":"Bitte zuerst die Gr\xF6\xDFe angeben",n("[data-hint3]").classList.toggle("is-todo",u.fi===null&&u.poly.length>=4),n("[data-hint2]").classList.toggle("is-todo",!U&&u.poly.length>=4);let ut=u.note?u.note:"";n("[data-hint2]").textContent=U?u.scaleFrom?`Gr\xF6\xDFe aus ${u.scaleFrom}. Sie k\xF6nnen jederzeit korrigieren.`:"Sie k\xF6nnen die Fl\xE4che jederzeit korrigieren.":"Oder tippen Sie auf eine Wand und geben die L\xE4nge an.",ut&&(n("[data-hint1]").textContent=ut)}function k(){b(),Ct(),n("[data-undo]").disabled=!f.length}s("[data-x]").forEach(C=>C.addEventListener("click",I)),e.addEventListener("pointerdown",C=>{C.target===e&&I()}),document.addEventListener("keydown",C=>{if(!e.hidden){if(C.key==="Escape")_==="draw"?vt("select"):I(),C.stopPropagation();else if((C.key==="z"||C.key==="Z")&&(C.metaKey||C.ctrlKey))Lt(),C.preventDefault();else if(C.key==="Enter"&&_==="draw")se();else if(C.key==="Backspace"&&_==="draw"&&!C.target.closest("input"))g.pop(),Ct(),C.preventDefault();else if(C.key==="Tab"){let U=[...e.querySelectorAll('button, input, select, [tabindex="0"]')].filter(O=>O.offsetParent&&!O.disabled);if(!U.length)return;let D=U.indexOf(document.activeElement);C.shiftKey&&D<=0?(U[U.length-1].focus(),C.preventDefault()):!C.shiftKey&&D===U.length-1&&(U[0].focus(),C.preventDefault())}}},!0);let Y=n("[data-file]"),st=n("[data-dz]");return st.addEventListener("click",()=>Y.click()),st.addEventListener("keydown",C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),Y.click())}),Y.addEventListener("change",()=>{Y.files[0]&&V(Y.files[0]),Y.value=""}),["dragenter","dragover"].forEach(C=>e.addEventListener(C,U=>{U.preventDefault(),st.classList.add("is-over")})),["dragleave","drop"].forEach(C=>e.addEventListener(C,U=>{U.preventDefault(),(C==="drop"||U.target===e)&&st.classList.remove("is-over")})),e.addEventListener("drop",C=>{let U=C.dataTransfer&&C.dataTransfer.files[0];U&&V(U)}),s("[data-zoom]").forEach(C=>C.addEventListener("click",()=>{let U=+C.dataset.zoom,D=o.getBoundingClientRect();U?lt(U,D.width/2,D.height/2):ht()})),n("[data-draw]").addEventListener("click",()=>vt(_==="draw"?"select":"draw")),n("[data-undo]").addEventListener("click",Lt),n("[data-auto]").addEventListener("click",()=>{xt(),u.sel=new Set(Qc(u.an)),tt();let C=u.sel.size?fl(u.an,[...u.sel]):th(u.an);C&&(u.poly=C.pts,u.fi=null,u.gl=new Set),vt("select"),ht(),k()}),c.addEventListener("input",()=>{let C=parseFloat(c.value.replace(",","."));C>4&&u.poly.length>=3?(u.mpp=Math.sqrt(C/Math.abs(eh(u.poly))),u.scaleFrom="",h.value="",k()):c.value||(u.mpp=null,k())}),h.addEventListener("change",()=>{let C=+h.value;if(!C||!u.src.pdf)return;let U=25.4/72/u.src.renderScale*C;u.mpp=U/1e3,u.scaleFrom=`Ma\xDFstab 1 : ${C}`;let D=Et();D&&(c.value=Fs(D).replace(",",".")),k()}),n("[data-pages]").addEventListener("click",async C=>{let U=C.target.closest("[data-page]");if(!U)return;M("busy"),n("[data-busy-t]").textContent="Seite wird ge\xF6ffnet",await new Promise(O=>setTimeout(O,30));let D=u.src;await F(D,+U.dataset.page),await W(D)}),n("[data-apply]").addEventListener("click",()=>{if(!Et()||u.fi===null)return;let U=u.poly.map(O=>[O[0]*u.mpp,O[1]*u.mpp]),D=i({pts:U,fi:u.fi,ft:u.ft,gl:[...u.gl],door:null});if(typeof D=="string"){n("[data-read]").insertAdjacentHTML("beforeend",`<div class="lplan__warn">${D}</div>`);return}I()}),new ResizeObserver(()=>{!e.hidden&&u&&rt()}).observe(o),e._dbg=()=>({S:u,view:p,edges:u&&u.poly.length?St():[],toScr:at}),{open:R,has:()=>!!(u&&u.img)}}var ml=class{constructor(){this.on=!0,this.ctx=null,this.last=0,this.buf=null}ensure(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.3;let e=this.ctx.createDynamicsCompressor();this.master.connect(e).connect(this.ctx.destination);let n=Math.floor(this.ctx.sampleRate*.4);this.buf=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let s=this.buf.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}ready(){return this.on&&this.ctx&&this.ctx.state==="running"}tick(t=.5){if(!this.ready())return;let e=this.ctx,n=e.currentTime;if(n-this.last<.03)return;this.last=n;let s=380+(1-Math.min(1,t))*900+Math.random()*140,r=e.createOscillator(),a=e.createGain();r.type="triangle",r.frequency.setValueAtTime(s,n),r.frequency.exponentialRampToValueAtTime(s*.5,n+.08),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.42,n+.004),a.gain.exponentialRampToValueAtTime(1e-4,n+.1),r.connect(a).connect(this.master),r.start(n),r.stop(n+.12),this.noise(n,2200+Math.random()*900,.22,.035)}noise(t,e,n,s,r="bandpass"){let a=this.ctx,o=a.createBufferSource(),l=a.createBiquadFilter(),c=a.createGain();return o.buffer=this.buf,l.type=r,l.frequency.value=e,l.Q.value=1.1,c.gain.setValueAtTime(n,t),c.gain.exponentialRampToValueAtTime(1e-4,t+s),o.connect(l).connect(c).connect(this.master),o.start(t,Math.random()*.2),o.stop(t+s+.02),l}whoosh(){if(!this.ready())return;let t=this.ctx.currentTime,e=this.noise(t,300,.16,.42,"lowpass");e.frequency.setValueAtTime(300,t),e.frequency.exponentialRampToValueAtTime(2600,t+.3)}pop(){if(!this.ready())return;let t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(520,e),n.frequency.exponentialRampToValueAtTime(980,e+.09),s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.35,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.16),n.connect(s).connect(this.master),n.start(e),n.stop(e+.18)}done(){if(!this.ready())return;let t=this.ctx,e=t.currentTime;[659.25,830.6,987.8].forEach((n,s)=>{let r=t.createOscillator(),a=t.createGain(),o=e+s*.07;r.type="sine",r.frequency.value=n,a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.12,o+.02),a.gain.exponentialRampToValueAtTime(1e-4,o+.7),r.connect(a).connect(this.master),r.start(o),r.stop(o+.75)})}};var K_="info@conceptsmedia.de",J_={kiosk:"im Kiosk",eck:"im Eckladen",schlauch:"im Schlauch",center:"im Center"},j_={l:"links",m:"in der Mitte",r:"rechts"},Q_={s:"schmal",n:"kompakt",b:"breit"},Kn=i=>i.toFixed(1).replace(".",",");function tv(i){let t=Math.min(...i.pts.map(s=>s[0])),e=Math.min(...i.pts.map(s=>s[1])),n=i.pts.map(s=>`${Math.round((s[0]-t)*10).toString(36)}.${Math.round((s[1]-e)*10).toString(36)}`).join(",");return[i.fi,Math.round((i.ft??.5)*100).toString(36),(i.gl||[]).join("_"),i.door||"",n].join("~")}function ev(i){let[t,e,n,s,r]=i.split("~");if(r===void 0)return null;let a=r.split(",").map(o=>o.split(".").map(l=>parseInt(l,36)/10));return a.length<4||a.some(o=>o.length!==2||o.some(l=>!Number.isFinite(l)))?null:{pts:a,fi:Math.min(+t||0,a.length-1),ft:parseInt(e,36)/100||.5,gl:n?n.split("_").map(Number).filter(o=>o<a.length):[],door:s||null}}function nv(i){let t=i.querySelector("[data-lgen-stage]"),e=t.querySelector("canvas"),n=z=>i.querySelector(z),s=z=>[...i.querySelectorAll(z)],r=n(".lgen__tip"),a=n(".lgen__toast"),o=n(".lgen__stats"),l=n('[data-dim="w"]'),c=n('[data-dim="d"]'),h={cat:"burger",area:"eck",seed:0,view:"3d",m2:76,shape:"n",door:"r",corner:!0,open:!1,form:"rect",flip:!1,plan:null},m=z=>{Object.assign(h,jc(bi.find(et=>et.id===z)||bi[1]))};m(h.area);let u=/baukasten=([a-z]+)-([a-z]+)-(\d+)/.exec(location.hash);if(u&&Gi.some(z=>z.id===u[1])&&(u[2]==="custom"||u[2]==="plan"||bi.some(z=>z.id===u[2])))if(h.cat=u[1],h.area=u[2],h.seed=+u[3],h.area==="custom"){let z=/&f=(\d+)\.([snb])\.([lmr])\.([01])\.([01])(?:\.([a-z]+)\.([01]))?/.exec(location.hash);z&&Object.assign(h,{m2:Math.max(cl,Math.min(hl,+z[1])),shape:z[2],door:z[3],corner:z[4]==="1",open:z[5]==="1",form:Zn.some(et=>et.id===z[6])?z[6]:"rect",flip:z[7]==="1"})}else if(h.area==="plan"){let z=/&p=([0-9a-z.,~_]+)/.exec(location.hash),et=/&m=(\d+)\.([01])/.exec(location.hash),yt=z&&ev(z[1]);yt&&et?Object.assign(h,{plan:yt,m2:+et[1],open:et[2]==="1"}):h.area="eck"}else m(h.area);let p={key:"",A:null},_=0,g=()=>{let z=[h.area,h.m2,h.shape,h.door,h.corner,h.open,h.form,h.flip,_,h.plan&&h.plan.door].join("|");if(p.key===z&&p.A)return p.A;let et;return h.area==="plan"&&h.plan&&(et=ul({plan:h.plan,m2:h.m2,open:h.open}),et||(h.area="custom")),et||(et=h.area==="custom"?ul(h):bi.find(yt=>yt.id===h.area)),p={key:z,A:et},et},f=()=>h.area==="plan"&&h.plan?[Math.max(12,Math.round(kn(h.plan.pts)*.5)),Math.round(kn(h.plan.pts)*1.8)]:[cl,hl],d=new ml;try{d.on=localStorage.getItem("lgen-ton")!=="0"}catch{}let S=null,A=!1,x=0,v=z=>{a.textContent=z,a.classList.add("is-on"),clearTimeout(x),x=setTimeout(()=>a.classList.remove("is-on"),1700)},y;try{y=new sl(t,e,{sound:d,onGesture:()=>d.ensure(),onHover:(z,et)=>{if(!z||!et){r.classList.remove("is-on");return}r.textContent=z,r.style.transform=`translate(${Math.round(et.x+16)}px, ${Math.round(et.y+18)}px)`,r.classList.add("is-on")},onTap:z=>{matchMedia("(pointer: coarse)").matches&&v(z)},onDone:()=>{i.classList.add("is-built"),y.quiet||d.done()},onFrame:()=>T(),safe:()=>{let z=t.getBoundingClientRect(),et=k=>{let Y=i.querySelector(k);return Y&&Y.offsetParent?Y.getBoundingClientRect():null},yt=et(".lgen__areas"),N=et(".lgen__stats"),kt=et(".lgen__tools"),$t=et(".lgen__bar"),P=et(".lgen__hint"),b={top:16,bottom:16,left:18,right:18};return yt&&(b.top=Math.max(b.top,yt.bottom-z.top+14)),N&&N.top-z.top<z.height/2&&(b.top=Math.max(b.top,N.bottom-z.top+14)),N&&N.top-z.top>=z.height/2&&(b.bottom=Math.max(b.bottom,z.bottom-N.top+10)),$t&&$t.top<z.bottom-4&&(b.bottom=Math.max(b.bottom,z.bottom-$t.top+34)),P&&(b.bottom=Math.max(b.bottom,z.bottom-P.top+8)),kt&&(b.right=Math.max(b.right,z.right-kt.left+12)),b.left=Math.max(b.left,z.width<700?12:b.right*.6),b}})}catch{i.classList.add("lgen--nogl");return}i.classList.add("is-ready"),window.__lgen=y;function T(){if(!S)return;let z=S.P,et=y.project(z.fp?(z.fp.bbox.x0+z.fp.bbox.x1)/2:0,-.1,z.pz1),yt=y.project(z.px0,-.1,(z.pz0+z.pz1)/2);l.style.transform=`translate(${et.x}px, ${et.y}px)`,c.style.transform=`translate(${yt.x}px, ${yt.y}px)`,l.style.opacity=et.ok?"":"0",c.style.opacity=yt.ok?"":"0"}let M={},w="",R=0;function I(z,et){let yt=z.map(k=>k.k+k.u).join("|");if(yt!==w){w=yt;for(let k in M)delete M[k];o.innerHTML=z.map(k=>`<div class="lgen__stat"><span>${k.k}</span><b data-k="${k.k}">0</b>${k.u?`<i>${k.u}</i>`:""}</div>`).join("")}let N=++R,kt=performance.now(),$t=et?320:900,P={};z.forEach(k=>{P[k.k]=M[k.k]??0});let b=k=>{if(N!==R)return;let Y=Math.min(1,(k-kt)/$t),st=1-(1-Y)**3;z.forEach(C=>{let U=o.querySelector(`[data-k="${C.k}"]`);if(!U)return;let D=P[C.k]+(C.v-P[C.k])*st;M[C.k]=D,U.textContent=Number.isInteger(C.v)?Math.round(D):Kn(D)}),Y<1&&requestAnimationFrame(b)};requestAnimationFrame(b)}function L(){let z=Gi.find(kt=>kt.id===h.cat),et=g(),yt=Zn.find(kt=>kt.id===h.form),N=h.area==="plan"?`${z.name} im eigenen Grundriss, ${et.m2} m\xB2`:h.area==="custom"?`${z.name} auf ${et.m2} m\xB2${h.form!=="rect"&&yt?`, ${yt.name}`:""}`:`${z.name} ${J_[et.id]}, ${et.m2} m\xB2`;return{C:z,A:et,txt:N}}function V(){let z=h.area==="custom"?`&f=${h.m2}.${h.shape}.${h.door}.${h.corner?1:0}.${h.open?1:0}${h.form!=="rect"||h.flip?`.${h.form}.${h.flip?1:0}`:""}`:h.area==="plan"&&h.plan?`&p=${tv(h.plan)}&m=${h.m2}.${h.open?1:0}`:"";return location.href.split("#")[0]+`#baukasten=${h.cat}-${h.area}-${h.seed}${z}`}let F=n("[data-size-num]"),W=n("[data-size-range]"),nt=n("[data-size-dim]"),rt=n("[data-custom-m2]"),ht=n("[data-size]"),$=n("[data-size-toggle]"),at=n("[data-plan-chip]");function lt(){let z=g(),[et,yt]=f(),N=h.area==="plan";W.min=et,W.max=yt,F.min=et,F.max=yt,document.activeElement!==F&&(F.value=z.m2),F.style.width=`${String(F.value).length*.62+.25}em`,W.value=z.m2,W.style.setProperty("--p",`${(z.m2-et)/(yt-et)*100}%`),n("[data-sl-min]").textContent=`${et} m\xB2`,n("[data-sl-max]").textContent=`${yt} m\xB2`,nt.textContent=`${Kn(z.bw??z.W)} \xD7 ${Kn(z.bd??z.D)} m`,rt.textContent=h.area==="custom"?`${z.m2} m\xB2`:"frei w\xE4hlen",s('[data-seg="shape"] [data-v]').forEach(kt=>kt.setAttribute("aria-pressed",String(!N&&kt.dataset.v===h.shape))),s('[data-seg="shape"] [data-v]').forEach(kt=>{kt.disabled=N}),s('[data-seg="door"] [data-v]').forEach(kt=>kt.setAttribute("aria-pressed",String(N?h.plan&&h.plan.door===kt.dataset.v:kt.dataset.v===h.door))),n('[data-tg="corner"]').setAttribute("aria-pressed",String(!N&&h.corner)),n('[data-tg="corner"]').disabled=N,n('[data-tg="open"]').setAttribute("aria-pressed",String(h.open)),s("[data-form]").forEach(kt=>kt.setAttribute("aria-pressed",String(!N&&h.area==="custom"&&kt.dataset.form===h.form))),n("[data-forms]").classList.toggle("is-flip",h.flip),n("[data-flip]").setAttribute("aria-pressed",String(h.flip)),n("[data-flip]").disabled=N||h.form==="rect",at.hidden=!h.plan,n('[data-area="plan"]').hidden=!h.plan,n("[data-plan-sum]").textContent=h.plan?`${Math.round(kn(h.plan.pts))} m\xB2, ${h.plan.pts.length} Ecken`:"",n('[data-area="plan"] span').textContent=h.plan?`${z.m2} m\xB2`:"",ht.classList.toggle("is-plan",N)}function St(){if(!S)return;let z=S.split,et=z.back+z.front;n('[data-split="back"]').style.flexGrow=z.back,n('[data-split="front"]').style.flexGrow=z.front,n('[data-split-l="back"]').textContent=z.backLabel,n('[data-split-l="front"]').textContent=z.frontLabel,n('[data-split-v="back"]').textContent=`${z.back} m\xB2 \xB7 ${Math.round(z.back/et*100)} %`,n('[data-split-v="front"]').textContent=`${z.front} m\xB2 \xB7 ${Math.round(z.front/et*100)} %`}function Et(){s("[data-cat]").forEach(P=>P.setAttribute("aria-pressed",String(P.dataset.cat===h.cat))),s("[data-area]").forEach(P=>P.setAttribute("aria-pressed",String(P.dataset.area===h.area)));let{C:z,A:et,txt:yt}=L();n("[data-sum]").textContent=yt;let N=Zn.find(P=>P.id===h.form),kt=h.area==="plan"?`Eigener Grundriss (aus Plan eingelesen), ${et.m2} m\xB2, gr\xF6\xDFte Ma\xDFe ${Kn(et.bw)} x ${Kn(et.bd)} m, ${et.fp.pts.length} Ecken${h.open?", offene Front":""}`:h.area==="custom"?`Eigene Fl\xE4che, ${et.m2} m\xB2 (${Kn(et.bw)} x ${Kn(et.bd)} m)${h.form!=="rect"&&N?`, Form ${N.name}${h.flip?" gespiegelt":""}`:""}, Zuschnitt ${Q_[h.shape]}, Eingang ${j_[h.door]}${h.corner?", Ecklage mit Seitenfenster":""}${h.open?", offene Front":""}`:`${et.name}, ${et.m2} m\xB2`,$t=`Hallo Concepts Team,

ich interessiere mich f\xFCr einen Laden wie im 3D Baukasten auf Ihrer Website.

Branche: ${z.name}
Fl\xE4che: ${kt}
Variante: ${h.seed+1}
Ansicht: ${V()}

Bitte melden Sie sich bei mir.

Viele Gr\xFC\xDFe
`;n("[data-mail]").href=`mailto:${K_}?subject=${encodeURIComponent(`Ladenbau Anfrage: ${yt}`)}&body=${encodeURIComponent($t)}`,e.setAttribute("aria-label",`3D Modell: ${yt}. Ziehen zum Drehen.`),l.textContent=Kn(et.bw??et.W)+" m",c.textContent=Kn(et.bd??et.D)+" m",lt()}let Zt=0;function Ct(z="switch"){let et=g();(h.area==="custom"||h.area==="plan")&&et.m2!==h.m2&&(h.m2=et.m2),S=Fd(h.cat,et,h.seed),I(S.stats,z==="live"),y.setLayout(S,z),i.classList.remove("is-built"),Et(),St(),A&&(clearTimeout(Zt),Zt=setTimeout(()=>{try{history.replaceState(null,"",V())}catch{}},z==="live"?450:0)),A=!0}let Bt=0,tt=0;function ot(){let z=140-(performance.now()-Bt);clearTimeout(tt);let et=()=>{Bt=performance.now(),Ct("live")};z<=0?et():tt=setTimeout(et,z)}function xt(z,et=!0){if(!Number.isFinite(z))return;h.area!=="plan"&&(h.area="custom");let[yt,N]=f();if(h.m2=Math.max(yt,Math.min(N,Math.round(z))),!A){Et();return}et?ot():Ct("live")}Et();let Lt=new IntersectionObserver(z=>{z[0].isIntersecting&&!A&&(Ct("first"),Lt.disconnect())},{threshold:.3});if(Lt.observe(t),u){let z=()=>setTimeout(()=>i.scrollIntoView({behavior:"smooth",block:"center"}),500);document.readyState==="complete"?z():addEventListener("load",z,{once:!0})}let vt=(z,et)=>{if(d.ensure(),h[z]===et){y.hopAll&&y.hopAll();return}h[z]=et,z==="cat"&&(h.seed=0),z==="area"&&et!=="custom"&&m(et),Ct()};s("[data-cat]").forEach(z=>z.addEventListener("click",()=>vt("cat",z.dataset.cat))),s("[data-area]").forEach(z=>z.addEventListener("click",()=>vt("area",z.dataset.area))),W.addEventListener("input",()=>{d.ensure(),xt(+W.value)}),W.addEventListener("change",()=>xt(+W.value,!1)),F.addEventListener("input",()=>{let z=+F.value,[et,yt]=f();F.value!==""&&z>=et&&z<=yt&&xt(z)}),F.addEventListener("change",()=>{xt(+F.value||h.m2,!1),F.value=g().m2}),F.addEventListener("keydown",z=>{z.key==="Enter"&&F.blur(),z.stopPropagation()}),s("[data-size-step]").forEach(z=>z.addEventListener("click",()=>{d.ensure(),xt(g().m2+ +z.dataset.sizeStep)})),s("[data-seg] [data-v]").forEach(z=>z.addEventListener("click",()=>{d.ensure();let et=z.parentElement.dataset.seg;if(h.area==="plan"&&h.plan){if(et!=="door")return;h.plan={...h.plan,door:z.dataset.v},_++,Ct();return}h.area==="custom"&&h[et]===z.dataset.v||(h.area="custom",h[et]=z.dataset.v,Ct())})),s("[data-tg]").forEach(z=>z.addEventListener("click",()=>{d.ensure();let et=z.dataset.tg;if(h.area==="plan"){if(et!=="open")return}else h.area="custom";h[et]=!h[et],et==="open"&&h.open&&h.m2<40&&h.area!=="plan"&&(h.m2=40),Ct()}));let Wt=z=>`M${z.map(([et,yt])=>`${(3+et*18).toFixed(1)} ${(3+yt*18).toFixed(1)}`).join("L")}Z`;s("[data-form]").forEach(z=>{let et=Zn.find(N=>N.id===z.dataset.form);if(!et)return;let yt=et.pts.map((N,kt)=>[N,et.pts[(kt+1)%et.pts.length]]).filter(([N,kt])=>N[1]===1&&kt[1]===1);z.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Wt(et.pts)}"/>${yt.map(([N,kt])=>`<path class="fr" d="M${(3+N[0]*18).toFixed(1)} 21L${(3+kt[0]*18).toFixed(1)} 21"/>`).join("")}</svg>`,z.title=et.name,z.setAttribute("aria-label",et.name),z.addEventListener("click",()=>{if(d.ensure(),h.area==="custom"&&h.form===et.id){et.id!=="rect"?(h.flip=!h.flip,Ct(),v(h.flip?"Form gespiegelt":"Form zur\xFCckgespiegelt")):y.hopAll&&y.hopAll();return}if(h.area!=="custom"){let N=h.area==="plan"?{m2:h.m2}:jc(g());Object.assign(h,N)}h.area="custom",h.form=et.id,et.id==="rect"&&(h.flip=!1),Ct()})}),n("[data-flip]").addEventListener("click",()=>{h.form==="rect"||h.area!=="custom"||(d.ensure(),h.flip=!h.flip,Ct())}),$.addEventListener("click",()=>{let z=$.getAttribute("aria-expanded")!=="true";$.setAttribute("aria-expanded",String(z)),ht.classList.toggle("is-open",z)});let se=Wd({onApply:z=>{let et={pts:z.pts,fi:z.fi,ft:z.ft,gl:z.gl,door:null},yt=Math.round(kn(z.pts));return ul({plan:et,m2:yt,open:!1})?(d.ensure(),h.plan=et,h.m2=yt,h.area="plan",_++,Ct(),v("Ihr Grundriss ist im Baukasten"),!0):"Mit dieser Stra\xDFenseite l\xE4sst sich kein Laden einrichten. Bitte w\xE4hlen Sie eine Wand von mindestens 3 m als Stra\xDFenseite oder pr\xFCfen Sie den Umriss."}});n("[data-plan-open]").addEventListener("click",()=>se.open()),n("[data-plan-edit]").addEventListener("click",()=>se.open()),n("[data-plan-del]").addEventListener("click",()=>{h.plan=null,h.area==="plan"?(m("eck"),h.area="eck",Ct()):Et()}),["dragenter","dragover"].forEach(z=>t.addEventListener(z,et=>{et.dataTransfer&&[...et.dataTransfer.types].includes("Files")&&et.preventDefault()})),t.addEventListener("drop",z=>{let et=z.dataTransfer&&z.dataTransfer.files[0];et&&(z.preventDefault(),se.open(et))});let X=n('[data-act="view"]'),dt=n('[data-act="sound"]'),gt=()=>{dt.setAttribute("aria-pressed",String(d.on)),dt.title=d.on?"Ton aus":"Ton an",dt.setAttribute("aria-label",dt.title)};gt();let pt={dice:()=>{d.ensure(),h.seed=(h.seed+1)%9,Ct(),v(`Variante ${h.seed+1}`)},view:()=>{h.view=h.view==="3d"?"plan":"3d",y.fit(h.view,!0),X.setAttribute("aria-pressed",String(h.view==="plan")),X.title=h.view==="plan"?"3D Ansicht":"Grundriss",X.setAttribute("aria-label",X.title),i.classList.toggle("is-plan",h.view==="plan")},reset:()=>{h.view="3d",i.classList.remove("is-plan"),X.setAttribute("aria-pressed","false"),y.fit("3d",!0)},zoomin:()=>y.zoom(.78),zoomout:()=>y.zoom(1.28),sound:()=>{d.on=!d.on,d.on&&(d.ensure(),d.pop());try{localStorage.setItem("lgen-ton",d.on?"1":"0")}catch{}gt()},full:()=>Ot(!i.classList.contains("lgen--full")),link:async()=>{try{await navigator.clipboard.writeText(V()),v("Link kopiert")}catch{prompt("Link zu diesem Laden",V())}},shot:()=>{let z=document.createElement("a");z.href=y.snapshot(),z.download=`laden-${h.cat}-${h.area}.png`,z.click(),v("Bild gespeichert")}};s("[data-act]").forEach(z=>z.addEventListener("click",()=>pt[z.dataset.act]&&pt[z.dataset.act]()));function Ot(z){i.classList.toggle("lgen--full",z),document.documentElement.classList.toggle("lgen-lock",z),e.style.touchAction=z?"none":"pan-y",n('[data-act="full"]').setAttribute("aria-pressed",String(z)),requestAnimationFrame(()=>requestAnimationFrame(()=>y.fit(h.view,!0,!0)))}let Gt=0;t.addEventListener("wheel",z=>{if(z.ctrlKey||z.metaKey||i.classList.contains("lgen--full")){z.preventDefault(),z.stopPropagation(),y.wheel(z);return}z.stopPropagation(),i.classList.add("is-hint"),clearTimeout(Gt),Gt=setTimeout(()=>i.classList.remove("is-hint"),1400)},{capture:!0,passive:!1}),document.addEventListener("keydown",z=>{if(z.target.closest("input, textarea, select")||z.metaKey||z.ctrlKey||z.altKey)return;if(z.key==="Escape"&&i.classList.contains("lgen--full")){Ot(!1);return}let et=t.getBoundingClientRect();if(et.bottom<0||et.top>innerHeight)return;let yt="1234567890".indexOf(z.key);if(yt>=0&&Gi[yt]){vt("cat",Gi[yt].id);return}let N=z.key.toLowerCase();N==="r"?pt.dice():N==="g"?pt.view():N==="f"&&pt.full()})}document.querySelectorAll("[data-lgen]").forEach(nv);})();
