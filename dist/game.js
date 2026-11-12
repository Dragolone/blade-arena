(()=>{var Eu=0,Cc=1,wu=2;var ss=1,Au=2,Ws=3,On=0,ei=1,Be=2,fn=0,Bn=1,ci=2,Pc=3,Ic=4,Ru=5;var rs=100,Cu=101,Pu=102,Iu=103,Lu=104,Du=200,Nu=201,Uu=202,Fu=203,Lc=204,Dc=205,Ou=206,Bu=207,ku=208,zu=209,Hu=210,Gu=211,Vu=212,Wu=213,Xu=214,Ya=0,Za=1,Ka=2,Is=3,$a=4,Ja=5,Qa=6,ja=7,Nc=0,qu=1,Yu=2,$i=0,Zr=1,Kr=2,$r=3,as=4,Jr=5,Qr=6,jr=7;var Uc=300,os=301,Xs=302,Ao=303,Ro=304,Ls=1e3,Ri=1001,zi=1002,Je=1003,Zu=1004;var ta=1005;var di=1006,Co=1007;var pn=1008;var vi=1009,Fc=1010,Oc=1011,qs=1012,Po=1013,Gi=1014,Vi=1015,Xe=1016,Io=1017,Lo=1018,ls=1020,Bc=35902,kc=35899,zc=1021,Hc=1022,Wi=1023,cn=1026,mn=1027,Gc=1028,Do=1029,kn=1030,No=1031;var Uo=1033,ea=33776,ia=33777,na=33778,sa=33779,Fo=35840,Oo=35841,Bo=35842,ko=35843,zo=36196,Ho=37492,Go=37496,Vo=37488,Wo=37489,ra=37490,Xo=37491,qo=37808,Yo=37809,Zo=37810,Ko=37811,$o=37812,Jo=37813,Qo=37814,jo=37815,tl=37816,el=37817,il=37818,nl=37819,sl=37820,rl=37821,al=36492,ol=36494,ll=36495,cl=36283,hl=36284,aa=36285,ul=36286;var yr=2300,to=2301,Xa=2302,mc=2303,gc=2400,xc=2401,_c=2402;var Ku=3200;var dl=0,$u=1,gn="",we="srgb",Mr="srgb-linear",Sr="linear",de="srgb";var qa=7680;var Ju=519,Qu=512,ju=513,td=514,Vc=515,ed=516,id=517,Wc=518,Xc=519,nd=35044;var qc="300 es",Ci=2e3,Ds=2001;function bf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sd(){let n=br("canvas");return n.style.display="block",n}var Yh={},Ns=null;function Yc(...n){let t="THREE."+n.shift();Ns?Ns("log",t,...n):console.log(t,...n)}function rd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=rd(n);let t="THREE."+n.shift();if(Ns)Ns("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Gt(...n){n=rd(n);let t="THREE."+n.shift();if(Ns)Ns("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Jn(...n){let t=n.join(" ");t in Yh||(Yh[t]=!0,Ht(...n))}function ad(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var od={[Ya]:Ya,[Ka]:Qa,[$a]:$a,[Is]:Ja,[Za]:Za,[Qa]:Ka,[ja]:ja,[Ja]:Is},Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,gr=Math.PI/180,Qn=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[n&255]+oi[n>>8&255]+oi[n>>16&255]+oi[n>>24&255]+"-"+oi[t&255]+oi[t>>8&255]+"-"+oi[t>>16&15|64]+oi[t>>24&255]+"-"+oi[e&63|128]+oi[e>>8&255]+"-"+oi[e>>16&255]+oi[e>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function Zc(n,t){return(n%t+t)%t}function Ef(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function wf(n,t,e){return n!==t?(e-n)/(t-n):0}function xr(n,t,e){return(1-e)*n+e*t}function Af(n,t,e,i){return xr(n,t,1-Math.exp(-e*i))}function Rf(n,t=1){return t-Math.abs(Zc(n,t*2)-t)}function Cf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Pf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function If(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Lf(n,t){return n+Math.random()*(t-n)}function Df(n){return n*(.5-Math.random())}function Nf(n){n!==void 0&&(Zh=n);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uf(n){return n*gr}function Ff(n){return n*Qn}function Of(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Bf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Kc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kf(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+i)/2),c=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),p=a((i-t)/2);switch(s){case"XYX":n.set(o*c,l*d,l*u,o*h);break;case"YZY":n.set(l*u,o*c,l*d,o*h);break;case"ZXZ":n.set(l*d,l*u,o*c,o*h);break;case"XZX":n.set(o*c,l*p,l*f,o*h);break;case"YXY":n.set(l*f,o*c,l*p,o*h);break;case"ZYZ":n.set(l*p,l*f,o*c,o*h);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $c(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ld(n,t){if(t.constructor===Float32Array)return n;let e=$c(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function cd(n,t){if(t.constructor===Float32Array)return n;let e=$c(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var oa={DEG2RAD:gr,RAD2DEG:Qn,generateUUID:cs,clamp:jt,euclideanModulo:Zc,mapLinear:Ef,inverseLerp:wf,lerp:xr,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:If,randFloat:Lf,randFloatSpread:Df,seededRandom:Nf,degToRad:Uf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:Kc,setQuaternionFromProperEuler:kf,normalize:cd,denormalize:ld},it=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||h!==f||c!==p){let m=l*u+h*f+c*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,o=Math.sin(o*y)/S,l=l*g+u*o,h=h*g+f*o,c=c*g+p*o,d=d*g+x*o}else{l=l*g+u*o,h=h*g+f*o,c=c*g+p*o,d=d*g+x*o;let y=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=y,h*=y,c*=y,d*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+c*d+l*f-h*u,t[e+1]=l*p+c*u+h*d-o*f,t[e+2]=h*p+c*f+o*u-l*d,t[e+3]=c*p-o*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d-u*f*p;break;case"YXZ":this._x=u*c*d+h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d+u*f*p;break;case"ZXY":this._x=u*c*d-h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d-u*f*p;break;case"ZYX":this._x=u*c*d-h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d+u*f*p;break;case"YZX":this._x=u*c*d+h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d-u*f*p;break;case"XZY":this._x=u*c*d-h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d+u*f*p;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*i),c=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*h+a*d-o*c,this.y=i+l*c+o*h-r*d,this.z=s+l*d+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ql.copy(this).projectOnVector(t),this.sub(ql)}reflect(t){return this.sub(ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new I,Kh=new Le,Wt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h)}set(t,e,i,s,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],S=s[4],v=s[7],E=s[2],w=s[5],_=s[8];return r[0]=a*x+o*y+l*E,r[3]=a*m+o*S+l*w,r[6]=a*g+o*v+l*_,r[1]=h*x+c*y+d*E,r[4]=h*m+c*S+d*w,r[7]=h*g+c*v+d*_,r[2]=u*x+f*y+p*E,r[5]=u*m+f*S+p*w,r[8]=u*g+f*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,p=e*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*h-c*i)*x,t[2]=(o*i-s*a)*x,t[3]=u*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(i*l-h*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return Jn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return Jn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return Jn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new Wt,$h=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:t,whitePoint:i,transfer:Sr,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:i,transfer:de,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),n}var ie=zf();function ln(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xs,eo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=br("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hf=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zl(s[a].image)):r.push(Zl(s[a]))}else r=Zl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Gf=0,Kl=new I,fi=class n extends Zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ri,s=Ri,r=di,a=pn,o=Wi,l=vi,h=n.DEFAULT_ANISOTROPY,c=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=cs(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kl).x}get height(){return this.source.getSize(Kl).y}get depth(){return this.source.getSize(Kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case zi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case zi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Uc;fi.DEFAULT_ANISOTROPY=1;var Ce=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(h+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,v=(f+1)/2,E=(g+1)/2,w=(c+u)/4,_=(d+x)/4,M=(p+m)/4;return S>v&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=_/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=_/r,s=M/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(u-c)/y,this.w=Math.acos((h+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},io=class extends Zi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new fi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends io{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Tr=class extends fi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends fi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ge=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,h,c,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,h,c,d,u,f,p,x,m)}set(t,e,i,s,r,a,o,l,h,c,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=h,g[6]=c,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*c,f=a*d,p=o*c,x=o*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+p*h,e[5]=u-x*h,e[9]=-o*l,e[2]=x-u*h,e[6]=p+f*h,e[10]=a*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,p=h*c,x=h*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*c,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,p=h*c,x=h*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*c,e[9]=x-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*c,f=a*d,p=o*c,x=o*d;e[0]=l*c,e[4]=p*h-f,e[8]=u*h+x,e[1]=l*d,e[5]=x*h+u,e[9]=f*h-p,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*h,p=o*l,x=o*h;e[0]=l*c,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*h,p=o*l,x=o*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+x,e[5]=a*c,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*c,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Wf)}lookAt(t,e,i){let s=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Mn.crossVectors(i,Mi),Mn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Mn.crossVectors(i,Mi)),Mn.normalize(),Ma.crossVectors(Mi,Mn),s[0]=Mn.x,s[4]=Ma.x,s[8]=Mi.x,s[1]=Mn.y,s[5]=Ma.y,s[9]=Mi.y,s[2]=Mn.z,s[6]=Ma.z,s[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],v=i[11],E=i[15],w=s[0],_=s[4],M=s[8],C=s[12],A=s[1],P=s[5],N=s[9],k=s[13],L=s[2],z=s[6],V=s[10],G=s[14],et=s[3],X=s[7],J=s[11],j=s[15];return r[0]=a*w+o*A+l*L+h*et,r[4]=a*_+o*P+l*z+h*X,r[8]=a*M+o*N+l*V+h*J,r[12]=a*C+o*k+l*G+h*j,r[1]=c*w+d*A+u*L+f*et,r[5]=c*_+d*P+u*z+f*X,r[9]=c*M+d*N+u*V+f*J,r[13]=c*C+d*k+u*G+f*j,r[2]=p*w+x*A+m*L+g*et,r[6]=p*_+x*P+m*z+g*X,r[10]=p*M+x*N+m*V+g*J,r[14]=p*C+x*k+m*G+g*j,r[3]=y*w+S*A+v*L+E*et,r[7]=y*_+S*P+v*z+E*X,r[11]=y*M+S*N+v*V+E*J,r[15]=y*C+S*k+v*G+E*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-h*u,S=o*f-h*d,v=o*u-l*d,E=a*f-h*c,w=a*u-l*c,_=a*d-o*c;return e*(x*y-m*S+g*v)-i*(p*y-m*E+g*w)+s*(p*S-x*E+g*_)-r*(p*v-x*w+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(a*c-o*h)-i*(r*c-o*l)+s*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*o-i*a,S=e*l-s*a,v=e*h-r*a,E=i*l-s*o,w=i*h-r*o,_=s*h-r*l,M=c*x-d*p,C=c*m-u*p,A=c*g-f*p,P=d*m-u*x,N=d*g-f*x,k=u*g-f*m,L=y*k-S*N+v*P+E*A-w*C+_*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(o*k-l*N+h*P)*z,t[1]=(s*N-i*k-r*P)*z,t[2]=(x*_-m*w+g*E)*z,t[3]=(u*w-d*_-f*E)*z,t[4]=(l*A-a*k-h*C)*z,t[5]=(e*k-s*A+r*C)*z,t[6]=(m*v-p*_-g*S)*z,t[7]=(c*_-u*v+f*S)*z,t[8]=(a*N-o*A+h*M)*z,t[9]=(i*A-e*N-r*M)*z,t[10]=(p*w-x*v+g*y)*z,t[11]=(d*v-c*w-f*y)*z,t[12]=(o*C-a*P-l*M)*z,t[13]=(e*P-i*C+s*M)*z,t[14]=(x*S-p*E-m*y)*z,t[15]=(c*E-d*S+u*y)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,p=r*d,x=a*c,m=a*d,g=o*d,y=l*h,S=l*c,v=l*d,E=i.x,w=i.y,_=i.z;return s[0]=(1-(x+g))*E,s[1]=(f+v)*E,s[2]=(p-S)*E,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+g))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(p+S)*_,s[9]=(m-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fi.copy(this);let h=1/a,c=1/o,d=1/l;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=c,Fi.elements[5]*=c,Fi.elements[6]*=c,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,e.setFromRotationMatrix(Fi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Ci,l=!1){let h=this.elements,c=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Ci)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ds)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ci,l=!1){let h=this.elements,c=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Ci)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ds)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=p,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},_s=new I,Fi=new ge,Vf=new I(0,0,0),Wf=new I(1,1,1),Mn=new I,Ma=new I,Mi=new I,Qh=new ge,jh=new Le,bi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,tu=new I,vs=new Le,nn=new ge,Sa=new I,ur=new I,qf=new I,Yf=new Le,eu=new I(1,0,0),iu=new I(0,1,0),nu=new I(0,0,1),su={type:"added"},Zf={type:"removed"},ys={type:"childadded",child:null},$l={type:"childremoved",child:null},Oe=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new bi,i=new Le,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Wt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sa.copy(t):Sa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(ur,Sa,this.up):nn.lookAt(Sa,ur,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(nn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),ys.child=t,this.dispatchEvent(ys),ys.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new I(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var te=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kf={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(h,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,p=.005;h.inputState.pinching&&u>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Jl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Tt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Zc(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let i=hd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ie.workingToColorSpace(li.copy(this),t),Math.round(jt(li.r*255,0,255))*65536+Math.round(jt(li.g*255,0,255))*256+Math.round(jt(li.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(li.copy(this),e);let i=li.r,s=li.g,r=li.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(li.copy(this),e),t.r=li.r,t.g=li.g,t.b=li.b,t}getStyle(t=we){ie.workingToColorSpace(li.copy(this),t);let e=li.r,i=li.g,s=li.b;return t!==we?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(ba);let i=xr(Sn.h,ba.h,e),s=xr(Sn.s,ba.s,e),r=xr(Sn.l,ba.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new Tt;Tt.NAMES=hd;var wr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ar=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ki=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oi=new I,sn=new I,Ql=new I,rn=new I,Ms=new I,Ss=new I,ru=new I,jl=new I,tc=new I,ec=new I,ic=new Ce,nc=new Ce,sc=new Ce,wn=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Oi.subVectors(t,e),s.cross(Oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Oi.subVectors(s,e),sn.subVectors(i,e),Ql.subVectors(t,e);let a=Oi.dot(Oi),o=Oi.dot(sn),l=Oi.dot(Ql),h=sn.dot(sn),c=sn.dot(Ql),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-o*c)*u,p=(a*c-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(o,rn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ic.setScalar(0),nc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ic,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(t,e,i,s){return Oi.subVectors(i,e),sn.subVectors(t,e),Oi.cross(sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Oi.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,i),Ss.subVectors(r,i),jl.subVectors(t,i);let l=Ms.dot(jl),h=Ss.dot(jl);if(l<=0&&h<=0)return e.copy(i);tc.subVectors(t,s);let c=Ms.dot(tc),d=Ss.dot(tc);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return a=l/(l-c),e.copy(i).addScaledVector(Ms,a);ec.subVectors(t,r);let f=Ms.dot(ec),p=Ss.dot(ec);if(p>=0&&f<=p)return e.copy(r);let x=f*h-l*p;if(x<=0&&h>=0&&p<=0)return o=h/(h-p),e.copy(i).addScaledVector(Ss,o);let m=c*p-f*d;if(m<=0&&d-c>=0&&f-p>=0)return ru.subVectors(r,s),o=(d-c)/(d-c+(f-p)),e.copy(s).addScaledVector(ru,o);let g=1/(m+x+u);return a=x*g,o=u*g,e.copy(i).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bi):Bi.fromBufferAttribute(r,a),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),Ea.subVectors(this.max,dr),bs.subVectors(t.a,dr),Ts.subVectors(t.b,dr),Es.subVectors(t.c,dr),bn.subVectors(Ts,bs),Tn.subVectors(Es,Ts),qn.subVectors(bs,Es);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-qn.z,qn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,qn.z,0,-qn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-qn.y,qn.x,0];return!rc(e,bs,Ts,Es,Ea)||(e=[1,0,0,0,1,0,0,0,1],!rc(e,bs,Ts,Es,Ea))?!1:(wa.crossVectors(bn,Tn),e=[wa.x,wa.y,wa.z],rc(e,bs,Ts,Es,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},an=[new I,new I,new I,new I,new I,new I,new I,new I],Bi=new I,Ta=new Pi,bs=new I,Ts=new I,Es=new I,bn=new I,Tn=new I,qn=new I,dr=new I,Ea=new I,wa=new I,Yn=new I;function rc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Yn.fromArray(n,r);let o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),h=e.dot(Yn),c=i.dot(Yn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Ve=new I,Aa=new it,$f=0,We=class extends Zi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nd,this.updateRanges=[],this.gpuType=Vi,this.version=0,this._normalizationScale=t!==void 0?$c(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ld(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):cd(t,this.array)}};var Rr=class extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Cr=class extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Yt=class extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}},Jf=new Pi,fr=new I,ac=new I,jn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Jf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(ac)),this.expandByPoint(fr.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qf=0,Ai=new ge,oc=new Oe,ws=new I,Si=new Pi,pr=new Pi,$e=new I,be=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bf(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,i){return Ai.makeTranslation(t,e,i),this.applyMatrix4(Ai),this}scale(t,e,i){return Ai.makeScale(t,e,i),this.applyMatrix4(Ai),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Si.min,pr.min),Si.expandByPoint($e),$e.addVectors(Si.max,pr.max),Si.expandByPoint($e)):(Si.expandByPoint(pr.min),Si.expandByPoint(pr.max))}Si.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)$e.fromBufferAttribute(o,h),l&&(ws.fromBufferAttribute(t,h),$e.add(ws)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new We(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],h=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new I,l[C]=new I;let c=new I,d=new I,u=new I,f=new it,p=new it,x=new it,m=new I,g=new I;function y(C,A,P){h[C]=h[A]=h[P]=1,c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,P),d.sub(c),u.sub(c),p.sub(f),x.sub(f);let N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(N),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(N),o[C].add(m),o[A].add(m),o[P].add(m),l[C].add(g),l[A].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,A=S.length;C<A;++C){let P=S[C],N=P.start,k=P.count;for(let L=N,z=N+k;L<z;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new I,E=new I,w=new I,_=new I;function M(C){w.fromBufferAttribute(s,C),_.copy(w);let A=o[C];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),E.crossVectors(_,A);let N=E.dot(l[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,N)}for(let C=0,A=i.count;C<A;++C)h[C]&&M(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,h=new I,c=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*c;for(let g=0;g<c;g++)u[p++]=h[f++]}return new We(u,c,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var lc=new I,jf=new I,tp=new Wt,ki=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=lc.subVectors(i,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||tp.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ep=0,hn=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Bn,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ki().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var on=new I,cc=new I,Ra=new I,Ca=new I,Pr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){cc.copy(t).add(e).multiplyScalar(.5),Ra.copy(e).sub(t).normalize(),Ca.copy(this.origin).sub(cc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ra),o=Ca.dot(this.direction),l=-Ca.dot(Ra),h=Ca.lengthSq(),c=Math.abs(1-a*a),d,u,f,p;if(c>0)if(d=a*l-o,u=a*o-l,p=r*c,d>=0)if(u>=-p)if(u<=p){let x=1/c;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cc).addScaledVector(Ra,u),f}intersectSphere(t,e){if(t.radius<0)return null;on.subVectors(t.center,this.origin);let i=on.dot(this.direction),s=on.dot(on)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,y=i.y-a.y,S=i.z-a.z,v=Math.abs(l),E=Math.abs(h),w=Math.abs(c),_,M,C,A,P,N,k,L,z,V,G,et;if(v>=E&&v>=w?(C=l,N=d,z=p,et=g,l>=0?(_=h,M=c,A=u,P=f,k=x,L=m,V=y,G=S):(_=c,M=h,A=f,P=u,k=m,L=x,V=S,G=y)):E>=w?(C=h,N=u,z=x,et=y,h>=0?(_=c,M=l,A=f,P=d,k=m,L=p,V=S,G=g):(_=l,M=c,A=d,P=f,k=p,L=m,V=g,G=S)):(C=c,N=f,z=m,et=S,c>=0?(_=l,M=h,A=d,P=u,k=p,L=x,V=g,G=y):(_=h,M=l,A=u,P=d,k=x,L=p,V=y,G=g)),C===0)return null;let X=_/C,J=M/C,j=1/C,Et=A-X*N,Nt=P-J*N,Y=k-X*z,_t=L-J*z,At=V-X*et,Ft=G-J*et,vt=At*_t-Ft*Y,Ot=Et*Ft-Nt*At,Ae=Y*Nt-_t*Et;if(s){if(vt<0||Ot<0||Ae<0)return null}else if((vt<0||Ot<0||Ae<0)&&(vt>0||Ot>0||Ae>0))return null;let zt=vt+Ot+Ae;if(zt===0)return null;let Qt=j*(vt*N+Ot*z+Ae*et);return(zt>0?Qt<0:Qt>0)?null:this.at(Qt/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},au=new ge,Zn=new Pr,Pa=new jn,ou=new I,Ia=new I,La=new I,Da=new I,hc=new I,Na=new I,lu=new I,Ua=new I,kt=class extends Oe{constructor(t=new be,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],d=r[l];c!==0&&(hc.fromBufferAttribute(d,t),a?Na.addScaledVector(hc,c):Na.addScaledVector(hc.sub(e),c))}e.add(Na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Pa.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Pa,ou)===null||Zn.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(au.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(au),!(i.boundingBox!==null&&Zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){let w=o.getX(v),_=o.getX(v+1),M=o.getX(v+2);s=Fa(this,g,t,i,h,c,d,w,_,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Fa(this,a,t,i,h,c,d,y,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){let w=v,_=v+1,M=v+2;s=Fa(this,g,t,i,h,c,d,w,_,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,v=m+2;s=Fa(this,a,t,i,h,c,d,y,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ip(n,t,e,i,s,r,a,o){let l;if(t.side===ei?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===On,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Ua);return h<e.near||h>e.far?null:{distance:h,point:Ua.clone(),object:n}}function Fa(n,t,e,i,s,r,a,o,l,h){n.getVertexPosition(o,Ia),n.getVertexPosition(l,La),n.getVertexPosition(h,Da);let c=ip(n,t,e,i,Ia,La,Da,lu);if(c){let d=new I;wn.getBarycoord(lu,Ia,La,Da,d),s&&(c.uv=wn.getInterpolatedAttribute(s,o,l,h,d,new it)),r&&(c.uv1=wn.getInterpolatedAttribute(r,o,l,h,d,new it)),a&&(c.normal=wn.getInterpolatedAttribute(a,o,l,h,d,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new I,materialIndex:0};wn.getNormal(Ia,La,Da,u.normal),c.face=u,c.barycoord=d}return c}var so=class extends fi{constructor(t=null,e=1,i=1,s,r,a,o,l,h=Je,c=Je,d,u){super(null,a,o,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=new jn,np=new it(.5,.5),Oa=new I,An=class{constructor(t=new ki,e=new ki,i=new ki,s=new ki,r=new ki,a=new ki){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],v=r[14],E=r[15];if(s[0].setComponents(h-a,f-c,g-p,E-y).normalize(),s[1].setComponents(h+a,f+c,g+p,E+y).normalize(),s[2].setComponents(h+o,f+d,g+x,E+S).normalize(),s[3].setComponents(h-o,f-d,g-x,E-S).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(h-l,f-u,g-m,E-v).normalize();else if(s[4].setComponents(h-l,f-u,g-m,E-v).normalize(),e===Ci)s[5].setComponents(h+l,f+u,g+m,E+v).normalize();else if(e===Ds)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);let e=np.distanceTo(t.center);return Kn.radius=.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Oa.x=s.normal.x>0?t.max.x:t.min.x,Oa.y=s.normal.y>0?t.max.y:t.min.y,Oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cu=new ge,ro=class n{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new An),i[s].setFromProjectionMatrix(cu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new An),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var ao=class extends hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hu=new ge,vc=new Pr,Ba=new jn,ka=new I,Os=class extends Oe{constructor(t=new be,e=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;hu.copy(s).invert(),vc.copy(t.ray).applyMatrix4(hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let m=h.getX(p);ka.fromBufferAttribute(d,m),uu(ka,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)ka.fromBufferAttribute(d,p),uu(ka,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uu(n,t,e,i,s,r,a){let o=vc.distanceSqToPoint(n);if(o<e){let l=new I;vc.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ir=class extends fi{constructor(t=[],e=os,i,s,r,a,o,l,h,c){super(t,e,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pi=class extends fi{constructor(t,e,i,s,r,a,o,l,h){super(t,e,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var un=class extends fi{constructor(t,e,i=Gi,s,r,a,o=Je,l=Je,h,c=cn,d=1){if(c!==cn&&c!==mn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Lr=class extends un{constructor(t,e=Gi,i=os,s,r,a=Je,o=Je,l,h=cn){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,i,s,r,a,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends fi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Te=class n extends be{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(d,2));function p(x,m,g,y,S,v,E,w,_,M,C){let A=v/_,P=E/M,N=v/2,k=E/2,L=w/2,z=_+1,V=M+1,G=0,et=0,X=new I;for(let J=0;J<V;J++){let j=J*P-k;for(let Et=0;Et<z;Et++){let Nt=Et*A-N;X[x]=Nt*y,X[m]=j*S,X[g]=L,h.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=w>0?1:-1,c.push(X.x,X.y,X.z),d.push(Et/_),d.push(1-J/M),G+=1}}for(let J=0;J<M;J++)for(let j=0;j<_;j++){let Et=u+j+z*J,Nt=u+j+z*(J+1),Y=u+(j+1)+z*(J+1),_t=u+(j+1)+z*J;l.push(Et,Nt,_t),l.push(Nt,Y,_t),et+=6}o.addGroup(f,et,C),f+=et,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Hi=class n extends be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new I,c=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/t+1)/2,c.y=(a[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(o,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_i=class n extends be{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],p=0,x=[],m=i/2,g=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function y(){let v=new I,E=new I,w=0,_=(e-t)/i;for(let M=0;M<=r;M++){let C=[],A=M/r,P=A*(e-t)+t;for(let N=0;N<=s;N++){let k=N/s,L=k*l+o,z=Math.sin(L),V=Math.cos(L);E.x=P*z,E.y=-A*i+m,E.z=P*V,d.push(E.x,E.y,E.z),v.set(z,_,V).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-A),C.push(p++)}x.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){let A=x[C][M],P=x[C+1][M],N=x[C+1][M+1],k=x[C][M+1];(t>0||C!==0)&&(c.push(A,P,k),w+=3),(e>0||C!==r-1)&&(c.push(P,N,k),w+=3)}h.addGroup(g,w,0),g+=w}function S(v){let E=p,w=new it,_=new I,M=0,C=v===!0?t:e,A=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let L=N/s*l+o,z=Math.cos(L),V=Math.sin(L);_.x=C*V,_.y=m*A,_.z=C*z,d.push(_.x,_.y,_.z),u.push(0,A,0),w.x=z*.5+.5,w.y=V*.5*A+.5,f.push(w.x,w.y),p++}for(let N=0;N<s;N++){let k=E+N,L=P+N;v===!0?c.push(L,L+1,k):c.push(L+1,L,k),M+=3}h.addGroup(g,M,v===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nr=class n extends be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),h(i),c(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new I,v=new I,E=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],v),f(e[w+2],E),l(S,v,E,y)}function l(y,S,v,E){let w=E+1,_=[];for(let M=0;M<=w;M++){_[M]=[];let C=y.clone().lerp(v,M/w),A=S.clone().lerp(v,M/w),P=w-M;for(let N=0;N<=P;N++)N===0&&M===w?_[M][N]=C:_[M][N]=C.clone().lerp(A,N/P)}for(let M=0;M<w;M++)for(let C=0;C<2*(w-M)-1;C++){let A=Math.floor(C/2);C%2===0?(u(_[M][A+1]),u(_[M+1][A]),u(_[M][A])):(u(_[M][A+1]),u(_[M+1][A+1]),u(_[M+1][A]))}}function h(y){let S=new I;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(y),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function c(){let y=new I;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let v=m(y)/2/Math.PI+.5,E=g(y)/Math.PI+.5;a.push(v,1-E)}p(),d()}function d(){for(let y=0;y<a.length;y+=6){let S=a[y+0],v=a[y+2],E=a[y+4],w=Math.max(S,v,E),_=Math.min(S,v,E);w>.9&&_<.1&&(S<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){let v=y*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function p(){let y=new I,S=new I,v=new I,E=new I,w=new it,_=new it,M=new it;for(let C=0,A=0;C<r.length;C+=9,A+=6){y.set(r[C+0],r[C+1],r[C+2]),S.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),w.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),E.copy(y).add(S).add(v).divideScalar(3);let P=m(E);x(w,A+0,y,P),x(_,A+2,S,P),x(M,A+4,v,P)}}function x(y,S,v,E){E<0&&y.x===1&&(a[S]=y.x-1),v.x===0&&v.z===0&&(a[S]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let c=i[s],u=i[s+1]-c,f=(a-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new ge;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Bs=class extends Ti{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oo=class extends Bs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,d){let u=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,f*=c,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var du=new I,fu=new I,uc=new Jc,dc=new Jc,fc=new Jc,lo=class extends Ti{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%r]:(fu.subVectors(s[0],s[1]).add(s[0]),h=fu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(du.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=du),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(c),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),uc.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,p,x,m),dc.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,p,x,m),fc.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,p,x,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),dc.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),fc.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(uc.calc(l),dc.calc(l),fc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function pu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function sp(n,t){let e=1-n;return e*e*t}function rp(n,t){return 2*(1-n)*n*t}function ap(n,t){return n*n*t}function _r(n,t,e,i){return sp(n,t)+rp(n,e)+ap(n,i)}function op(n,t){let e=1-n;return e*e*e*t}function lp(n,t){let e=1-n;return 3*e*e*n*t}function cp(n,t){return 3*(1-n)*n*n*t}function hp(n,t){return n*n*n*t}function vr(n,t,e,i,s){return op(n,t)+lp(n,e)+cp(n,i)+hp(n,s)}var Ur=class extends Ti{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends Ti{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y),vr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Ti{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends Ti{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Ti{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(_r(t,s.x,r.x,a.x),_r(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Ti{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(_r(t,s.x,r.x,a.x),_r(t,s.y,r.y,a.y),_r(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(pu(o,l.x,h.x,c.x,d.x),pu(o,l.y,h.y,c.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},yc=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:lo,CubicBezierCurve:Ur,CubicBezierCurve3:co,EllipseCurve:Bs,LineCurve:Fr,LineCurve3:ho,QuadraticBezierCurve:Or,QuadraticBezierCurve3:uo,SplineCurve:Br}),fo=class extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new yc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Rn=class extends fo{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Fr(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Or(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ur(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Br(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let h=new Bs(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cn=class extends Rn{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Rn().fromJSON(s))}return this}};function up(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ud(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h;if(i&&(r=gp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let c=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],p=n[u+1];f<o&&(o=f),p<l&&(l=p),f>c&&(c=f),p>d&&(d=p)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return kr(r,a,e,o,l,h,0),a}function ud(n,t,e,i,s){let r;if(s===Ap(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=mu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=mu(a/i|0,n[a],n[a+1],r);return r&&ks(r,r.next)&&(Hr(r),r=r.next),r}function ts(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ks(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function kr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Mp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,h=n.next;if(r?fp(n,i,s,r):dp(n)){t.push(l.i,n.i,h.i),Hr(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=pp(ts(n),t),kr(n,t,e,i,s,r,2)):a===2&&mp(n,t,e,i,s,r):kr(ts(n),t,e,i,s,r,1);break}}}function dp(n){let t=n.prev,e=n,i=n.next;if(Ie(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,h=i.y,c=Math.min(s,r,a),d=Math.min(o,l,h),u=Math.max(s,r,a),f=Math.max(o,l,h),p=i.next;for(;p!==t;){if(p.x>=c&&p.x<=u&&p.y>=d&&p.y<=f&&mr(s,o,r,l,a,h,p.x,p.y)&&Ie(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ie(s,r,a)>=0)return!1;let o=s.x,l=r.x,h=a.x,c=s.y,d=r.y,u=a.y,f=Math.min(o,l,h),p=Math.min(c,d,u),x=Math.max(o,l,h),m=Math.max(c,d,u),g=Mc(f,p,t,e,i),y=Mc(x,m,t,e,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=g&&v&&v.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&mr(o,c,l,d,h,u,S.x,S.y)&&Ie(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&mr(o,c,l,d,h,u,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&mr(o,c,l,d,h,u,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&mr(o,c,l,d,h,u,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ks(i,s)&&fd(i,e,e.next,s)&&zr(i,s)&&zr(s,i)&&(t.push(i.i,e.i,s.i),Hr(e),Hr(e.next),e=n=s),e=e.next}while(e!==n);return ts(e)}function mp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tp(a,o)){let l=pd(a,o);a=ts(a,a.next),l=ts(l,l.next),kr(a,t,e,i,s,r,0),kr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function gp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,h=ud(n,o,l,i,!1);h===h.next&&(h.steiner=!0),s.push(bp(h))}s.sort(xp);for(let r=0;r<s.length;r++)e=_p(s[r],e);return e}function xp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function _p(n,t){let e=vp(n,t);if(!e)return t;let i=pd(e,n);return ts(i,i.next),ts(e,e.next)}function vp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ks(n,e))return e;do{if(ks(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&dd(s<h?i:r,s,l,h,s<h?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);zr(e,n)&&(d<c||d===c&&(e.x>a.x||e.x===a.x&&yp(a,e)))&&(a=e,c=d)}e=e.next}while(e!==o);return a}function yp(n,t){return Ie(n.prev,n,t.prev)<0&&Ie(t.next,n,n.next)<0}function Mp(n,t,e,i){let s=n;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Sp(s)}function Sp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Mc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function dd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function mr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&dd(n,t,e,i,s,r,a,o)}function Tp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ep(n,t)&&(zr(n,t)&&zr(t,n)&&wp(n,t)&&(Ie(n.prev,n,t.prev)||Ie(n,t.prev,t))||ks(n,t)&&Ie(n.prev,n,n.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ks(n,t){return n.x===t.x&&n.y===t.y}function fd(n,t,e,i){let s=Ha(Ie(n,t,e)),r=Ha(Ie(n,t,i)),a=Ha(Ie(e,i,n)),o=Ha(Ie(e,i,t));return!!(s!==r&&a!==o||s===0&&za(n,e,t)||r===0&&za(n,i,t)||a===0&&za(e,n,i)||o===0&&za(e,t,i))}function za(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ha(n){return n>0?1:n<0?-1:0}function Ep(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function zr(n,t){return Ie(n.prev,n,n.next)<0?Ie(n,t,n.next)>=0&&Ie(n,n.prev,t)>=0:Ie(n,t,n.prev)<0||Ie(n,n.next,t)<0}function wp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function pd(n,t){let e=Sc(n.i,n.x,n.y),i=Sc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function mu(n,t,e,i){let s=Sc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ap(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var bc=class{static triangulate(t,e,i=2){return up(t,e,i)}},$n=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];gu(t),xu(i,t);let a=t.length;e.forEach(gu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,xu(i,e[l]);let o=bc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function xu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var zs=class n extends be{constructor(t=new Cn([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];a(h)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Rp,S,v=!1,E,w,_,M;if(g){S=g.getSpacedPoints(c),v=!0,u=!1;let tt=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(c,tt),w=new I,_=new I,M=new I}u||(m=0,f=0,p=0,x=0);let C=o.extractPoints(h),A=C.shape,P=C.holes;if(!$n.isClockWise(A)){A=A.reverse();for(let tt=0,ht=P.length;tt<ht;tt++){let ot=P[tt];$n.isClockWise(ot)&&(P[tt]=ot.reverse())}}function k(tt){let ot=10000000000000001e-36,wt=tt[0];for(let xt=1;xt<=tt.length;xt++){let qt=xt%tt.length,Lt=tt[qt],se=Lt.x-wt.x,ae=Lt.y-wt.y,ue=se*se+ae*ae,F=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(wt.x),Math.abs(wt.y)),He=ot*F*F;if(ue<=He){tt.splice(qt,1),xt--;continue}wt=Lt}}k(A),P.forEach(k);let L=P.length,z=A;for(let tt=0;tt<L;tt++){let ht=P[tt];A=A.concat(ht)}function V(tt,ht,ot){return ht||Gt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ht,ot)}let G=A.length;function et(tt,ht,ot){let wt,xt,qt,Lt=tt.x-ht.x,se=tt.y-ht.y,ae=ot.x-tt.x,ue=ot.y-tt.y,F=Lt*Lt+se*se,He=Lt*ue-se*ae;if(Math.abs(He)>Number.EPSILON){let ee=Math.sqrt(F),Me=Math.sqrt(ae*ae+ue*ue),pt=ht.x-se/ee,Fe=ht.y+Lt/ee,Bt=ot.x-ue/Me,Vt=ot.y+ae/Me,R=((Bt-pt)*ue-(Vt-Fe)*ae)/(Lt*ue-se*ae);wt=pt+Lt*R-tt.x,xt=Fe+se*R-tt.y;let b=wt*wt+xt*xt;if(b<=2)return new it(wt,xt);qt=Math.sqrt(b/2)}else{let ee=!1;Lt>Number.EPSILON?ae>Number.EPSILON&&(ee=!0):Lt<-Number.EPSILON?ae<-Number.EPSILON&&(ee=!0):Math.sign(se)===Math.sign(ue)&&(ee=!0),ee?(wt=-se,xt=Lt,qt=Math.sqrt(F)):(wt=Lt,xt=se,qt=Math.sqrt(F/2))}return new it(wt/qt,xt/qt)}let X=[];for(let tt=0,ht=z.length,ot=ht-1,wt=tt+1;tt<ht;tt++,ot++,wt++)ot===ht&&(ot=0),wt===ht&&(wt=0),X[tt]=et(z[tt],z[ot],z[wt]);let J=[],j,Et=X.concat();for(let tt=0,ht=L;tt<ht;tt++){let ot=P[tt];j=[];for(let wt=0,xt=ot.length,qt=xt-1,Lt=wt+1;wt<xt;wt++,qt++,Lt++)qt===xt&&(qt=0),Lt===xt&&(Lt=0),j[wt]=et(ot[wt],ot[qt],ot[Lt]);J.push(j),Et=Et.concat(j)}let Nt;if(m===0)Nt=$n.triangulateShape(z,P);else{let tt=[],ht=[];for(let ot=0;ot<m;ot++){let wt=ot/m,xt=f*Math.cos(wt*Math.PI/2),qt=p*Math.sin(wt*Math.PI/2)+x;for(let Lt=0,se=z.length;Lt<se;Lt++){let ae=V(z[Lt],X[Lt],qt);Ot(ae.x,ae.y,-xt),wt===0&&tt.push(ae)}for(let Lt=0,se=L;Lt<se;Lt++){let ae=P[Lt];j=J[Lt];let ue=[];for(let F=0,He=ae.length;F<He;F++){let ee=V(ae[F],j[F],qt);Ot(ee.x,ee.y,-xt),wt===0&&ue.push(ee)}wt===0&&ht.push(ue)}}Nt=$n.triangulateShape(tt,ht)}let Y=Nt.length,_t=p+x;for(let tt=0;tt<G;tt++){let ht=u?V(A[tt],Et[tt],_t):A[tt];v?(_.copy(E.normals[0]).multiplyScalar(ht.x),w.copy(E.binormals[0]).multiplyScalar(ht.y),M.copy(S[0]).add(_).add(w),Ot(M.x,M.y,M.z)):Ot(ht.x,ht.y,0)}for(let tt=1;tt<=c;tt++)for(let ht=0;ht<G;ht++){let ot=u?V(A[ht],Et[ht],_t):A[ht];v?(_.copy(E.normals[tt]).multiplyScalar(ot.x),w.copy(E.binormals[tt]).multiplyScalar(ot.y),M.copy(S[tt]).add(_).add(w),Ot(M.x,M.y,M.z)):Ot(ot.x,ot.y,d/c*tt)}for(let tt=m-1;tt>=0;tt--){let ht=tt/m,ot=f*Math.cos(ht*Math.PI/2),wt=p*Math.sin(ht*Math.PI/2)+x;for(let xt=0,qt=z.length;xt<qt;xt++){let Lt=V(z[xt],X[xt],wt);Ot(Lt.x,Lt.y,d+ot)}for(let xt=0,qt=P.length;xt<qt;xt++){let Lt=P[xt];j=J[xt];for(let se=0,ae=Lt.length;se<ae;se++){let ue=V(Lt[se],j[se],wt);v?Ot(ue.x,ue.y+S[c-1].y,S[c-1].x+ot):Ot(ue.x,ue.y,d+ot)}}}At(),Ft();function At(){let tt=s.length/3;if(u){let ht=0,ot=G*ht;for(let wt=0;wt<Y;wt++){let xt=Nt[wt];Ae(xt[2]+ot,xt[1]+ot,xt[0]+ot)}ht=c+m*2,ot=G*ht;for(let wt=0;wt<Y;wt++){let xt=Nt[wt];Ae(xt[0]+ot,xt[1]+ot,xt[2]+ot)}}else{for(let ht=0;ht<Y;ht++){let ot=Nt[ht];Ae(ot[2],ot[1],ot[0])}for(let ht=0;ht<Y;ht++){let ot=Nt[ht];Ae(ot[0]+G*c,ot[1]+G*c,ot[2]+G*c)}}i.addGroup(tt,s.length/3-tt,0)}function Ft(){let tt=s.length/3,ht=0;vt(z,ht),ht+=z.length;for(let ot=0,wt=P.length;ot<wt;ot++){let xt=P[ot];vt(xt,ht),ht+=xt.length}i.addGroup(tt,s.length/3-tt,1)}function vt(tt,ht){let ot=tt.length;for(;--ot>=0;){let wt=ot,xt=ot-1;xt<0&&(xt=tt.length-1);for(let qt=0,Lt=c+m*2;qt<Lt;qt++){let se=G*qt,ae=G*(qt+1),ue=ht+wt+se,F=ht+xt+se,He=ht+xt+ae,ee=ht+wt+ae;zt(ue,F,He,ee)}}}function Ot(tt,ht,ot){l.push(tt),l.push(ht),l.push(ot)}function Ae(tt,ht,ot){Qt(tt),Qt(ht),Qt(ot);let wt=s.length/3,xt=y.generateTopUV(i,s,wt-3,wt-2,wt-1);ne(xt[0]),ne(xt[1]),ne(xt[2])}function zt(tt,ht,ot,wt){Qt(tt),Qt(ht),Qt(wt),Qt(ht),Qt(ot),Qt(wt);let xt=s.length/3,qt=y.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);ne(qt[0]),ne(qt[1]),ne(qt[3]),ne(qt[1]),ne(qt[2]),ne(qt[3])}function Qt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function ne(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Cp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yc[s.type]().fromJSON(s)),new n(i,t.options)}},Rp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],h=t[s*3],c=t[s*3+1];return[new it(r,a),new it(o,l),new it(h,c)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new it(a,1-l),new it(h,1-d),new it(u,1-p),new it(x,1-g)]:[new it(o,1-l),new it(c,1-d),new it(f,1-p),new it(m,1-g)]}};function Cp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gr=class n extends Nr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Vr=class n extends Nr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},mi=class n extends be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,d=t/o,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<c;g++){let y=g*u-a;for(let S=0;S<h;S++){let v=S*d-r;p.push(v,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let S=y+h*g,v=y+h*(g+1),E=y+1+h*(g+1),w=y+1+h*g;f.push(S,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Pn=class n extends be{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],h=[],c=[],d=t,u=(e-t)/s,f=new I,p=new it;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),h.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,c.push(p.x,p.y)}d+=u}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,S=y,v=y+i+1,E=y+i+2,w=y+1;o.push(S,v,w),o.push(v,E,w)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var es=class n extends be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],d=new I,u=new I,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,v=a+S*o,E=t*Math.cos(v),w=Math.sqrt(t*t-E*E),_=0;g===0&&a===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let C=M/e,A=s+C*r;d.x=-w*Math.cos(A),d.y=E,d.z=w*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(C+_,1-S),y.push(h++)}c.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let S=c[g][y+1],v=c[g][y],E=c[g+1][y],w=c[g+1][y+1];(g!==0||a>0)&&f.push(S,v,w),(g!==i-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var In=class n extends be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=new I,f=new I,p=new I;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),h.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,S=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(_u(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(_u(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function hi(n){let t={};for(let e=0;e<n.length;e++){let i=hs(n[e]);for(let s in i)t[s]=i[s]}return t}function _u(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Xi={clone:hs,merge:hi},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new it().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Hs=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pe=class extends hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ln=class extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Jn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Jn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var po=class extends hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mo=class extends hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ga(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Dn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends Dn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:r=t,o=2*e-i;break;case _c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,l=2*i-e;break;case _c:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let E=0;E!==o;++E)r[E]=g*a[c+E]+y*a[h+E]+S*a[l+E]+v*a[d+E];return r}},xo=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(s-e),d=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[l+u]*c;return r}},_o=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends Dn{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this.inTangents,d=this.outTangents;if(!c||!d){let p=(i-e)/(s-e),x=1-p;for(let m=0;m!==o;++m)r[m]=a[h+m]*x+a[l+m]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[h+p],m=a[l+p],g=f*u+p*2,y=d[g],S=d[g+1],v=t*u+p*2,E=c[v],w=c[v+1],_=Np(i,e,y,E,s);r[p]=md(_,x,S,w,m)}return r}};function md(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Dp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Np(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=md(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Dp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ei=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ga(t.settings)&&(i.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case to:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return to;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ga(this.settings)&&(vu(this.settings.inTangents,t),vu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ga(this.settings)&&(yu(this.settings.inTangents,t),yu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Tf(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){Gt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function yu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=to;var Nn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=yr;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Ei{constructor(t,e,i,s){super(t,e,i,s)}};yo.prototype.ValueTypeName="color";var Mo=class extends Ei{constructor(t,e,i,s){super(t,e,i,s)}};Mo.prototype.ValueTypeName="number";var So=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),h=t*o;for(let c=h+o;h!==c;h+=4)Le.slerpFlat(r,0,a,h-o,a,h,l);return r}},Wr=class extends Ei{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Ei{constructor(t,e,i){super(t,e,i)}};Un.prototype.ValueTypeName="string";Un.prototype.ValueBufferType=Array;Un.prototype.DefaultInterpolation=yr;Un.prototype.InterpolantFactoryMethodLinear=void 0;Un.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Ei{constructor(t,e,i,s){super(t,e,i,s)}};bo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],p=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gd=new To,Eo=class{constructor(t){this.manager=t!==void 0?t:gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=class extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},dn=class extends is{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},pc=new ge,Mu=new I,Su=new I,Gs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new An,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new I,Wa=new Le,Yi=new I,Xr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Wa,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Va,Wa,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},En=new I,bu=new it,Tu=new it,ke=class extends Xr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qn*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Tu),e.subVectors(Tu,bu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Tc=class extends Gs{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Qn*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},qr=class extends is{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Ec=class extends Gs{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0}},gi=class extends is{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ns=class extends Xr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wc=class extends Gs{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fn=class extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Cs=1,Vs=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new ke(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let a=new ke(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let o=new ke(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let l=new ke(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let h=new ke(Rs,Cs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},wo=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Yr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Up.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Up(){this._document.hidden===!1&&this.reset()}var jc="\\[\\]\\.:\\/",Fp=new RegExp("["+jc+"]","g"),th="[^"+jc+"]",Op="[^"+jc.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",th),kp=/(WCOD+)?/.source.replace("WCOD",Op),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Gp=new RegExp("^"+Bp+kp+zp+Hp+"$"),Vp=["material","materials","bones","map"],Ac=class{constructor(t,e,i){let s=i||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(t){let e=Gp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Ac;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);var Rc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function eh(n,t,e,i){let s=Wp(i);switch(e){case zc:return n*t;case Gc:return n*t/s.components*s.byteLength;case Do:return n*t/s.components*s.byteLength;case kn:return n*t*2/s.components*s.byteLength;case No:return n*t*2/s.components*s.byteLength;case Hc:return n*t*3/s.components*s.byteLength;case Wi:return n*t*4/s.components*s.byteLength;case Uo:return n*t*4/s.components*s.byteLength;case ea:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case na:case sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oo:case ko:return Math.max(n,16)*Math.max(t,8)/4;case Fo:case Bo:return Math.max(n,8)*Math.max(t,8)/2;case zo:case Ho:case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Go:case ra:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case al:case ol:case ll:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cl:case hl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case aa:case ul:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(n){switch(n){case vi:case Fc:return{byteLength:1,components:1};case qs:case Oc:case Xe:return{byteLength:2,components:1};case Io:case Lo:return{byteLength:2,components:4};case Gi:case Po:case Vi:return{byteLength:4,components:1};case Bc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qp(n){let t=new WeakMap;function e(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,h){let c=l.array,d=l.updateRanges;if(n.bindBuffer(h,o),d.length===0)n.bufferSubData(h,0,c);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,f0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,$0=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,J0=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,jm=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,ag=`#define DISTANCE
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
}`,og=`#define DISTANCE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,Tg=`#define TOON
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
}`,Eg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:jp,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:i0,alphatest_fragment:n0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:a0,batching_pars_vertex:o0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:_0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:M0,common:S0,defaultnormal_vertex:b0,displacementmap_pars_vertex:T0,displacementmap_vertex:E0,emissivemap_fragment:w0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:P0,envmap_common_pars_fragment:I0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:W0,envmap_vertex:N0,fog_vertex:U0,fog_pars_vertex:F0,fog_fragment:O0,fog_pars_fragment:B0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:z0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:V0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:K0,lights_physical_pars_fragment:$0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:j0,lightprobes_pars_fragment:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:am,map_particle_fragment:om,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:bm,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Em,opaque_fragment:wm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Um,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:Bm,skinning_pars_vertex:km,skinning_vertex:zm,skinnormal_vertex:Hm,specularmap_fragment:Gm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:Zm,uv_pars_vertex:Km,uv_vertex:$m,worldpos_vertex:Jm,background_vert:Qm,background_frag:jm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ig,cube_frag:ng,depth_vert:sg,depth_frag:rg,distance_vert:ag,distance_frag:og,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:_g,meshnormal_frag:vg,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:Sg,meshphysical_frag:bg,meshtoon_vert:Tg,meshtoon_frag:Eg,points_vert:wg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Ig},St={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Qi={basic:{uniforms:hi([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:hi([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:hi([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:hi([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:hi([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Tt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:hi([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:hi([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:hi([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:hi([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:hi([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:hi([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:hi([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:hi([St.lights,St.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Qi.physical={uniforms:hi([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var fl={r:0,b:0,g:0},Lg=new ge,kd=new Wt;kd.set(-1,0,0,0,1,0,0,0,1);function Dg(n,t,e,i,s,r){let a=new Tt(0),o=s===!0?0:1,l,h,c=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(y){let S=!1,v=f(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,S){let v=f(S);v&&v.isCubeTexture?(h===void 0&&(h=new kt(new Te(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:hs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(kd),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==de,(c!==v||d!==v.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=v,d=v.version,u=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new kt(new mi(2,2),new De({name:"BackgroundMaterial",uniforms:hs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,d=v.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(fl,Qc(n)),e.buffers.color.setClear(fl.r,fl.g,fl.b,S,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:x,dispose:g}}function Ng(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,N,k,L,z){let V=!1,G=d(P,L,k,N);r!==G&&(r=G,h(r.object)),V=f(P,L,k,z),V&&p(P,L,k,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(P,N,k,L),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function h(P){return n.bindVertexArray(P)}function c(P){return n.deleteVertexArray(P)}function d(P,N,k,L){let z=L.wireframe===!0,V=i[N.id];V===void 0&&(V={},i[N.id]=V);let G=P.isInstancedMesh===!0?P.id:0,et=V[G];et===void 0&&(et={},V[G]=et);let X=et[k.id];X===void 0&&(X={},et[k.id]=X);let J=X[z];return J===void 0&&(J=u(l()),X[z]=J),J}function u(P){let N=[],k=[],L=[];for(let z=0;z<e;z++)N[z]=0,k[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,N,k,L){let z=r.attributes,V=N.attributes,G=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let j=z[X],Et=V[X];if(Et===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Et=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Et=P.instanceColor)),j===void 0||j.attribute!==Et||Et&&j.data!==Et.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function p(P,N,k,L){let z={},V=N.attributes,G=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let j=V[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let Et={};Et.attribute=j,j&&j.data&&(Et.data=j.data),z[X]=Et,G++}r.attributes=z,r.attributesNum=G,r.index=L}function x(){let P=r.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let k=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;k[P]=1,L[P]===0&&(n.enableVertexAttribArray(P),L[P]=1),z[P]!==N&&(n.vertexAttribDivisor(P,N),z[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let k=0,L=N.length;k<L;k++)N[k]!==P[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function S(P,N,k,L,z,V,G){G===!0?n.vertexAttribIPointer(P,N,k,z,V):n.vertexAttribPointer(P,N,k,L,z,V)}function v(P,N,k,L){x();let z=L.attributes,V=k.getAttributes(),G=N.defaultAttributeValues;for(let et in V){let X=V[et];if(X.location>=0){let J=z[et];if(J===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let j=J.normalized,Et=J.itemSize,Nt=t.get(J);if(Nt===void 0)continue;let Y=Nt.buffer,_t=Nt.type,At=Nt.bytesPerElement,Ft=_t===n.INT||_t===n.UNSIGNED_INT||J.gpuType===Po;if(J.isInterleavedBufferAttribute){let vt=J.data,Ot=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,Ae=J.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let zt=0;zt<X.locationSize;zt++)g(X.location+zt,vt.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let zt=0;zt<X.locationSize;zt++)m(X.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let zt=0;zt<X.locationSize;zt++)S(X.location+zt,Et/X.locationSize,_t,j,Ot*At,(Ae+Et/X.locationSize*zt)*At,Ft)}else{if(J.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)g(X.location+vt,J.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<X.locationSize;vt++)m(X.location+vt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let vt=0;vt<X.locationSize;vt++)S(X.location+vt,Et/X.locationSize,_t,j,Et*At,Et/X.locationSize*vt*At,Ft)}}else if(G!==void 0){let j=G[et];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(X.location,j);break;case 3:n.vertexAttrib3fv(X.location,j);break;case 4:n.vertexAttrib4fv(X.location,j);break;default:n.vertexAttrib1fv(X.location,j)}}}}y()}function E(){C();for(let P in i){let N=i[P];for(let k in N){let L=N[k];for(let z in L){let V=L[z];for(let G in V)c(V[G].object),delete V[G];delete L[z]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let N=i[P.id];for(let k in N){let L=N[k];for(let z in L){let V=L[z];for(let G in V)c(V[G].object),delete V[G];delete L[z]}}delete i[P.id]}function _(P){for(let N in i){let k=i[N];for(let L in k){let z=k[L];if(z[P.id]===void 0)continue;let V=z[P.id];for(let G in V)c(V[G].object),delete V[G];delete z[P.id]}}}function M(P){for(let N in i){let k=i[N],L=P.isInstancedMesh===!0?P.id:0,z=k[L];if(z!==void 0){for(let V in z){let G=z[V];for(let et in G)c(G[et].object),delete G[et];delete z[V]}delete k[L],Object.keys(k).length===0&&delete i[N]}}}function C(){A(),a=!0,r!==s&&(r=s,h(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ug(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Wi&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Xe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==vi&&_!==Vi&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Ht("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:w}}function Og(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ki,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?c(null):h();else{let y=r?0:i,S=y*4,v=g.clippingState||null;l.value=v,v=c(p,u,S,f);for(let E=0;E!==S;++E)v[E]=e[E];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ha=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:fn});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===pn&&(e.minFilter=di),new Vs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},xd=256,Bg=3,kg=20,zd=256,Hd=16,zg=3,Hg=new I,Gg=new Tt,Zs=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vs(1,10,null),this._boxMesh=new kt(new Te(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Hg}=r,l=this._renderer;this._setSize(a);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Gg));let m=new Vs(i,s,c);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xd,Kc(t))}_fromTexture(t,e){t.mapping===os||t.mapping===Xs?this._setSize(t.image.length===0?xd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=_d(t,!1,!1),i=Math.log2(t)-Bg;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_d(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===os||t.mapping===Xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Vg(),this._integrationMaterial=Wg());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-zg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(zd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Xg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function _d(n,t,e){return new ha(n,{minFilter:pn,generateMipmaps:t,type:Xe,colorSpace:Mr,depthBuffer:e})}function ua(n,t,e){return new De({name:n,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:ei,blending:fn,depthTest:!1,depthWrite:!1})}function Vg(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wg(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xg(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${kg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vd(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yd(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ao||f===Ro)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new ha(p.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ao||f===Ro,x=f===os||f===Xs;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Zs(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Zs(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,f){return f===Ao?u.mapping=os:f===Ro&&(u.mapping=Xs),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Yg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Jn("WebGLRenderer: "+i+" extension not supported."),s}}}function Zg(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function c(p){let x=p.attributes;for(let m in x)t.update(x[m],n.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?Cr:Rr,v=new S(Math.ceil(y/3)*6,1),E=v.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,C=0;M<y;M+=3){let A=_[M+0],P=_[M+1],N=_[M+2];E[C++]=A,E[C++]=P,E[C++]=P,E[C++]=N,E[C++]=N,E[C++]=A}}else{g=m.version;for(let _=0,M=0;_<y;_+=3){let C=_+0,A=_+1,P=_+2;E[M++]=C,E[M++]=A,E[M++]=A,E[M++]=P,E[M++]=P,E[M++]=C}}v.version=g;let w=r.get(p);w&&t.remove(w),r.set(p,v)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:h,update:c,getWireframeAttribute:u,dispose:f}}function Kg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function h(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function $g(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Jg(n,t,e){let i=new WeakMap,s=new Ce;function r(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(o);if(u===void 0||u.count!==d){let C=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*E*4*d),_=new Tr(w,v,E,d);_.type=Vi,_.needsUpdate=!0;let M=S*4;for(let A=0;A<d;A++){let P=m[A],N=g[A],k=y[A],L=v*E*4*A;for(let z=0;z<P.count;z++){let V=z*M;f===!0&&(s.fromBufferAttribute(P,z),w[L+V+0]=s.x,w[L+V+1]=s.y,w[L+V+2]=s.z,w[L+V+3]=0),p===!0&&(s.fromBufferAttribute(N,z),w[L+V+4]=s.x,w[L+V+5]=s.y,w[L+V+6]=s.z,w[L+V+7]=0),x===!0&&(s.fromBufferAttribute(k,z),w[L+V+8]=s.x,w[L+V+9]=s.y,w[L+V+10]=s.z,w[L+V+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new it(v,E)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Qg(n,t,e,i,s){let r=new WeakMap;function a(h){let c=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}var jg={[Zr]:"LINEAR_TONE_MAPPING",[Kr]:"REINHARD_TONE_MAPPING",[$r]:"CINEON_TONE_MAPPING",[as]:"ACES_FILMIC_TONE_MAPPING",[Qr]:"AGX_TONE_MAPPING",[jr]:"NEUTRAL_TONE_MAPPING",[Jr]:"CUSTOM_TONE_MAPPING"};function tx(n,t,e,i,s,r){let a=new ze(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=null,c=new be;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let d=new Hs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new kt(c,d),f=new ns(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,S=[],v=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let _=0;_<S.length;_++){let M=S[_];M.setSize&&M.setSize(E,w)}},this.setEffects=function(E){S=E,v=S.length>0&&S[0].isRenderPass===!0;let w=a.width,_=a.height;S.length>0&&o===null&&(o=new ze(w,_,{type:Xe,depthBuffer:!1,stencilBuffer:!1}),l=new ze(w,_,{type:Xe,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&S.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&h===null&&(h=new un(w,_),r===!0&&(h.format=mn,h.type=ls)),a.dispose(),a.depthTexture=M?h:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<S.length;C++){let A=S[C];A.setSize&&A.setSize(w,_),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(h)}},this.begin=function(E,w){if(m||E.toneMapping===$i&&S.length===0)return!1;if(y=w,w!==null){let _=w.width,M=w.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return v===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=$i,!0},this.hasRenderPass=function(){return v},this.end=function(E,w){E.toneMapping=g,m=!0;let _=a,M=o;for(let C=0;C<S.length;C++){let A=S[C];A.enabled!==!1&&(A.render(E,M,_,w),A.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,d.defines={},ie.getTransfer(p)===de&&(d.defines.SRGB_TRANSFER="");let C=jg[x];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(y),E.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Gd=new fi,Vd=new un(1,1),Wd=new Lr(1),Xd=new Tr,qd=new no,Yd=new Ir,Md=[],Sd=[],bd=new Float32Array(16),Td=new Float32Array(9),Ed=new Float32Array(4);function Ks(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gl(n,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ex(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function rx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Ed.set(i),n.uniformMatrix2fv(this.addr,!1,Ed),Ye(e,i)}}function ax(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Td.set(i),n.uniformMatrix3fv(this.addr,!1,Td),Ye(e,i)}}function ox(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;bd.set(i),n.uniformMatrix4fv(this.addr,!1,bd),Ye(e,i)}}function lx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function dx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function xl(n){return n.version===0&&(n.compareFunction=Xc,n.needsUpdate=!0),n}function gx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=xl(Vd):r=Gd,e.setTexture2D(t||r,s)}function xx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qd,s)}function _x(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=xl(Wd):r=Yd,e.setTextureCube(t||r,s)}function vx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xd,s)}function yx(n){switch(n){case 5126:return ex;case 35664:return ix;case 35665:return nx;case 35666:return sx;case 35674:return rx;case 35675:return ax;case 35676:return ox;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return vx}}function Mx(n,t){n.uniform1fv(this.addr,t)}function Sx(n,t){let e=Ks(t,this.size,2);n.uniform2fv(this.addr,e)}function bx(n,t){let e=Ks(t,this.size,3);n.uniform3fv(this.addr,e)}function Tx(n,t){let e=Ks(t,this.size,4);n.uniform4fv(this.addr,e)}function Ex(n,t){let e=Ks(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wx(n,t){let e=Ks(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ax(n,t){let e=Ks(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Rx(n,t){n.uniform1iv(this.addr,t)}function Cx(n,t){n.uniform2iv(this.addr,t)}function Px(n,t){n.uniform3iv(this.addr,t)}function Ix(n,t){n.uniform4iv(this.addr,t)}function Lx(n,t){n.uniform1uiv(this.addr,t)}function Dx(n,t){n.uniform2uiv(this.addr,t)}function Nx(n,t){n.uniform3uiv(this.addr,t)}function Ux(n,t){n.uniform4uiv(this.addr,t)}function Fx(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=xl(Vd):a=Gd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ox(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qd,r[a])}function Bx(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=xl(Wd):a=Yd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function kx(n,t,e){let i=this.cache,s=t.length,r=gl(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xd,r[a])}function zx(n){switch(n){case 5126:return Mx;case 35664:return Sx;case 35665:return bx;case 35666:return Tx;case 35674:return Ex;case 35675:return wx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Lx;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return kx}}var sh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yx(e.type)}},rh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zx(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},ih=/(\w+)(\])?(\[|\.)?/g;function wd(n,t){n.seq.push(t),n.map[t.id]=t}function Hx(n,t,e){let i=n.name,s=i.length;for(ih.lastIndex=0;;){let r=ih.exec(i),a=ih.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){wd(e,h===void 0?new sh(o,n,t):new rh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new ah(o),wd(e,d)),e=d}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Hx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Ad(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Gx=37297,Vx=0;function Wx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Rd=new Wt;function Xx(n){ie._getMatrix(Rd,ie.workingColorSpace,n);let t=`mat3( ${Rd.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Sr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wx(n.getShaderSource(t),o)}else return r}function qx(n,t){let e=Xx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yx={[Zr]:"Linear",[Kr]:"Reinhard",[$r]:"Cineon",[as]:"ACESFilmic",[Qr]:"AgX",[jr]:"Neutral",[Jr]:"Custom"};function Zx(n,t){let e=Yx[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new I;function Kx(){ie.getLuminanceCoefficients(pl);let n=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Jx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ca(n){return n!==""}function Pd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Id(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(n){return n.replace(jx,t_)}function t_(n,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return oh(e)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(n){return n.replace(e_,i_)}function i_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var n_={[ss]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function s_(n){return n_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r_={[Xs]:"ENVMAP_MODE_REFRACTION"};function a_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":r_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var o_={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[qu]:"ENVMAP_BLENDING_MIX",[Yu]:"ENVMAP_BLENDING_ADD"};function l_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":o_[n.combine]||"ENVMAP_BLENDING_NONE"}function c_(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=s_(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=a_(e),d=l_(e),u=$x(e),f=Jx(r),p=s.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ca).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ca).join(`
`),m.length>0&&(m+=`
`)):(x=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),m=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?$t.tonemapping_pars_fragment:"",e.toneMapping!==$i?Zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),a=oh(a),a=Pd(a,e),a=Id(a,e),o=oh(o),o=Pd(o,e),o=Id(o,e),a=Ld(a),o=Ld(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+a,S=g+m+o,v=Ad(s,s.VERTEX_SHADER,y),E=Ad(s,s.FRAGMENT_SHADER,S);s.attachShader(p,v),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(A){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(E)||"",L=P.trim(),z=N.trim(),V=k.trim(),G=!0,et=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,E);else{let X=Cd(s,v,"vertex"),J=Cd(s,E,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+X+`
`+J)}else L!==""?Ht("WebGLProgram: Program Info Log:",L):(z===""||V==="")&&(et=!1);et&&(A.diagnostics={runnable:G,programLog:L,vertexShader:{log:z,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(v),s.deleteShader(E),_=new Ys(s,p),M=Qx(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,Gx)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}var h_=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ch(t),e.set(t,i)),i}},ch=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function u_(n){return n===kn||n===ra||n===aa}function d_(n,t,e,i,s,r){let a=new Er,o=new lh,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,C,A,P,N){let k=A.fog,L=P.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||z,V),et=u[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=J!==void 0?J.length:0,Et=0;L.morphAttributes.position!==void 0&&(Et=1),L.morphAttributes.normal!==void 0&&(Et=2),L.morphAttributes.color!==void 0&&(Et=3);let Nt,Y,_t,At;if(et){let Mt=Qi[et];Nt=Mt.vertexShader,Y=Mt.fragmentShader}else{Nt=_.vertexShader,Y=_.fragmentShader;let Mt=o.getVertexShaderStage(_),_e=o.getFragmentShaderStage(_);o.update(_,Mt,_e),_t=Mt.id,At=_e.id}let Ft=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ot=P.isInstancedMesh===!0,Ae=P.isBatchedMesh===!0,zt=!!_.map,Qt=!!_.matcap,ne=!!G,tt=ne&&G.isPMREMTexture===!0,ht=!!_.aoMap,ot=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,qt=!!_.displacementMap,Lt=!!_.emissiveMap,se=!!_.metalnessMap,ae=!!_.roughnessMap,ue=_.anisotropy>0,F=_.clearcoat>0,He=_.diffuseRoughness>0,ee=_.dispersion>0,Me=_.retroreflectivity>0,pt=_.iridescence>0,Fe=_.sheen>0,Bt=_.transmission>0,Vt=ue&&!!_.anisotropyMap,R=F&&!!_.clearcoatMap,b=F&&!!_.clearcoatNormalMap,B=F&&!!_.clearcoatRoughnessMap,nt=He&&!!_.diffuseRoughnessMap,Q=pt&&!!_.iridescenceMap,lt=pt&&!!_.iridescenceThicknessMap,mt=Fe&&!!_.sheenColorMap,Z=Fe&&!!_.sheenRoughnessMap,K=!!_.specularMap,ut=!!_.specularColorMap,D=!!_.specularIntensityMap,$=Bt&&!!_.transmissionMap,q=Bt&&!!_.thicknessMap,dt=!!_.gradientMap,at=!!_.alphaMap,ct=_.alphaTest>0,Dt=!!_.alphaHash,Kt=!!_.extensions,st=$i;_.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(st=n.toneMapping);let Ut=tt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Zt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:Y,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Ae,batchingColor:Ae&&P._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&P.instanceColor!==null,instancingMorph:Ot&&P.morphTexture!==null,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:Qt,envMap:ne,envMapMode:ne&&G.mapping,envMapPMREM:tt,envMapMaxLod:tt?Ut.length-1:null,envMapSize:tt?Ut[0].width:null,aoMap:ht,lightMap:ot,bumpMap:wt,normalMap:xt,displacementMap:qt,emissiveMap:Lt,normalMapObjectSpace:xt&&_.normalMapType===$u,normalMapTangentSpace:xt&&_.normalMapType===dl,packedNormalMap:xt&&_.normalMapType===dl&&u_(_.normalMap.format),metalnessMap:se,roughnessMap:ae,anisotropy:ue,anisotropyMap:Vt,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:He,diffuseRoughnessMap:nt,dispersion:ee,retroreflection:Me,iridescence:pt,iridescenceMap:Q,iridescenceThicknessMap:lt,sheen:Fe,sheenColorMap:mt,sheenRoughnessMap:Z,specularMap:K,specularColorMap:ut,specularIntensityMap:D,transmission:Bt,transmissionMap:$,thicknessMap:q,gradientMap:dt,opaque:_.transparent===!1&&_.blending===Bn&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:ct,alphaHash:Dt,combine:_.combine,mapUv:zt&&f(_.map.channel),aoMapUv:ht&&f(_.aoMap.channel),lightMapUv:ot&&f(_.lightMap.channel),bumpMapUv:wt&&f(_.bumpMap.channel),normalMapUv:xt&&f(_.normalMap.channel),displacementMapUv:qt&&f(_.displacementMap.channel),emissiveMapUv:Lt&&f(_.emissiveMap.channel),metalnessMapUv:se&&f(_.metalnessMap.channel),roughnessMapUv:ae&&f(_.roughnessMap.channel),anisotropyMapUv:Vt&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:$&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:at&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||ue),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(zt||at),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Et,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===ei,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||Ae)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let M=u[_.type],C;if(M){let A=Qi[M];C=Xi.clone(A.uniforms)}else C=_.uniforms;return C}function S(_,M){let C=c.get(M);return C!==void 0?++C.usedTimes:(C=new c_(n,M,_,s),h.push(C),c.set(M,C)),C}function v(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),c.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:E,programs:h,dispose:w}}function f_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function p_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Nd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ud(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},n[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),t++,y}function l(u,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let S=o(u,f,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):e.push(S)}function h(u,f,p,x,m,g){let y=o(u,f,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function c(u,f){e.length>1&&e.sort(u||p_),i.length>1&&i.sort(f||Nd),s.length>1&&s.sort(f||Nd)}function d(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function m_(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Ud,n.set(i,[a])):s>=r.length?(a=new Ud,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function g_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Tt};break;case"SpotLight":e={position:new I,direction:new I,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function x_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var __=0;function v_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function y_(n){let t=new g_,e=x_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);let s=new I,r=new ge,a=new ge;function o(h){let c=0,d=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,v=0,E=0,w=0,_=0,M=0,C=0,A=0;h.sort(v_);for(let N=0,k=h.length;N<k;N++){let L=h[N],z=L.color,V=L.intensity,G=L.distance,et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===kn?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=z.r*V,d+=z.g*V,u+=z.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],V);A++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,j=e.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=j,i.sunShadowMap[p]=et;let Et=J.getViewportCount();for(let Nt=0;Nt<Et;Nt++)i.sunShadowMatrix[x+Nt]=J.getMatrix(Nt),i.sunShadowCascade[x+Nt]=J._cascadeData[Nt];x+=Et,p++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,j=e.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=L.shadow.matrix,E++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(V),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[y]=X;let J=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,J.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[y]=J.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=et,_++}y++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(z).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=X,S++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let J=L.shadow,j=e.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=L.shadow.matrix,w++}i.point[g]=X,g++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[v]=X,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==M||P.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=M,P.numLightProbes=A,i.version=__++)}function l(h,c){let d=0,u=0,f=0,p=0,x=0,m=0,g=c.matrixWorldInverse;for(let y=0,S=h.length;y<S;y++){let v=h[y];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),u++}else if(v.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Fd(n){let t=new y_(n),e=[],i=[],s=[];function r(d){c.camera=d,e.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function h(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function M_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Fd(n),t.set(s,[o])):r>=a.length?(o=new Fd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`,T_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],E_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Od=new ge,la=new I,nh=new I;function w_(n,t,e){let i=new An,s=new it,r=new it,a=new Ce,o=new po,l=new mo,h={},c=e.maxTextureSize,d={[On]:ei,[ei]:On,[Be]:Be},u=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:S_,fragmentShader:b_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new be;p.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let g=this.type;this.render=function(w,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Au&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let C=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(fn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=g!==this.type;k&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=w.length;L<z;L++){let V=w[L],G=V.shadow;if(G===void 0){Ht("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();s.multiply(et),r.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/et.y),s.y=r.y*et.y,G.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ws){if(V.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ze(s.x,s.y,{format:kn,type:Xe,minFilter:di,magFilter:di,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new un(s.x,s.y,Vi),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=cn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Je,G.map.depthTexture.magFilter=Je}else V.isPointLight?(G.map=new ha(s.x),G.map.depthTexture=new Lr(s.x,Gi)):(G.map=new ze(s.x,s.y),G.map.depthTexture=new un(s.x,s.y,Gi)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=cn,this.type===ss?(G.map.depthTexture.compareFunction=X?Wc:Vc,G.map.depthTexture.minFilter=di,G.map.depthTexture.magFilter=di):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Je,G.map.depthTexture.magFilter=Je);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,M);let j=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Et=0;Et<J;Et++){let Nt=G.getCamera(Et);if(V.isPointLight){let Y=G.camera,_t=G.matrix,At=V.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),la.setFromMatrixPosition(V.matrixWorld),Y.position.copy(la),nh.copy(Y.position),nh.add(T_[Et]),Y.up.copy(E_[Et]),Y.lookAt(nh),Y.updateMatrixWorld(),_t.makeTranslation(-la.x,-la.y,-la.z),Od.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Od,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Et),n.clear();else{Et===0&&(n.setRenderTarget(G.map),n.clear());let Y=G.getViewport(Et);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),N.viewport(a)}i=G.getFrustum(Et),v(_,M,Nt,V,j,this.type)}G.isPointLightShadow!==!0&&this.type===Ws&&y(G,M),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(C,A,P)};function y(w,_){let M=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ze(s.x,s.y,{format:kn,type:Xe}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,M,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,M,f,x,null)}function S(w,_,M,C){let A=null,P=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=M.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=A.uuid,k=_.uuid,L=h[N];L===void 0&&(L={},h[N]=L);let z=L[k];z===void 0&&(z=A.clone(),L[k]=z,_.addEventListener("dispose",E)),A=z}if(A.visible=_.visible,A.wireframe=_.wireframe,C===Ws?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=n.properties.get(A);N.light=M}return A}function v(w,_,M,C,A,P){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ws)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let L=t.update(w),z=w.material;if(Array.isArray(z)){let V=L.groups;for(let G=0,et=V.length;G<et;G++){let X=V[G],J=z[X.materialIndex];if(J&&J.visible){let j=S(w,J,C,P);w.onBeforeShadow(n,w,_,M,L,j,X),n.renderBufferDirect(M,null,L,j,w,X),w.onAfterShadow(n,w,_,M,L,j,X)}}}else if(z.visible){let V=S(w,z,C,P);w.onBeforeShadow(n,w,_,M,L,V,null),n.renderBufferDirect(M,null,L,V,w,null),w.onAfterShadow(n,w,_,M,L,V,null)}}let k=w.children;for(let L=0,z=k.length;L<z;L++)v(k[L],_,M,C,A,P)}function E(w){w.target.removeEventListener("dispose",E);for(let M in h){let C=h[M],A=w.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function A_(n,t){function e(){let D=!1,$=new Ce,q=null,dt=new Ce(0,0,0,0);return{setMask:function(at){q!==at&&!D&&(n.colorMask(at,at,at,at),q=at)},setLocked:function(at){D=at},setClear:function(at,ct,Dt,Kt,st){st===!0&&(at*=Kt,ct*=Kt,Dt*=Kt),$.set(at,ct,Dt,Kt),dt.equals($)===!1&&(n.clearColor(at,ct,Dt,Kt),dt.copy($))},reset:function(){D=!1,q=null,dt.set(-1,0,0,0)}}}function i(){let D=!1,$=!1,q=null,dt=null,at=null;return{setReversed:function(ct){if($!==ct){let Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),$=ct;let Kt=at;at=null,this.setClear(Kt)}},getReversed:function(){return $},setTest:function(ct){ct?vt(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(ct){q!==ct&&!D&&(n.depthMask(ct),q=ct)},setFunc:function(ct){if($&&(ct=od[ct]),dt!==ct){switch(ct){case Ya:n.depthFunc(n.NEVER);break;case Za:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=ct}},setLocked:function(ct){D=ct},setClear:function(ct){at!==ct&&(at=ct,$&&(ct=1-ct),n.clearDepth(ct))},reset:function(){D=!1,q=null,dt=null,at=null,$=!1}}}function s(){let D=!1,$=null,q=null,dt=null,at=null,ct=null,Dt=null,Kt=null,st=null;return{setTest:function(Ut){D||(Ut?vt(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(Ut){$!==Ut&&!D&&(n.stencilMask(Ut),$=Ut)},setFunc:function(Ut,Zt,Mt){(q!==Ut||dt!==Zt||at!==Mt)&&(n.stencilFunc(Ut,Zt,Mt),q=Ut,dt=Zt,at=Mt)},setOp:function(Ut,Zt,Mt){(ct!==Ut||Dt!==Zt||Kt!==Mt)&&(n.stencilOp(Ut,Zt,Mt),ct=Ut,Dt=Zt,Kt=Mt)},setLocked:function(Ut){D=Ut},setClear:function(Ut){st!==Ut&&(n.clearStencil(Ut),st=Ut)},reset:function(){D=!1,$=null,q=null,dt=null,at=null,ct=null,Dt=null,Kt=null,st=null}}}let r=new e,a=new i,o=new s,l={},h=new WeakMap,c={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,v=null,E=null,w=null,_=null,M=new Tt(0,0,0),C=0,A=!1,P=null,N=null,k=null,L=null,z=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=et>=2);let J=null,j={},Et=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Y=new Ce().fromArray(Et),_t=new Ce().fromArray(Nt);function At(D,$,q,dt){let at=new Uint8Array(4),ct=n.createTexture();n.bindTexture(D,ct),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<q;Dt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D($+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return ct}let Ft={};Ft[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),Ft[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ft[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),a.setFunc(Is),wt(!1),xt(Cc),vt(n.CULL_FACE),ht(fn);function vt(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function Ot(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Ae(D,$){return u[D]!==$?(n.bindFramebuffer(D,$),u[D]=$,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=$),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=$),!0):!1}function zt(D,$){let q=p,dt=!1;if(D){q=f.get($),q===void 0&&(q=[],f.set($,q));let at=D.textures;if(q.length!==at.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Dt=at.length;ct<Dt;ct++)q[ct]=n.COLOR_ATTACHMENT0+ct;q.length=at.length,dt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,dt=!0);dt&&n.drawBuffers(q)}function Qt(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let ne={[rs]:n.FUNC_ADD,[Cu]:n.FUNC_SUBTRACT,[Pu]:n.FUNC_REVERSE_SUBTRACT};ne[Iu]=n.MIN,ne[Lu]=n.MAX;let tt={[Du]:n.ZERO,[Nu]:n.ONE,[Uu]:n.SRC_COLOR,[Lc]:n.SRC_ALPHA,[Hu]:n.SRC_ALPHA_SATURATE,[ku]:n.DST_COLOR,[Ou]:n.DST_ALPHA,[Fu]:n.ONE_MINUS_SRC_COLOR,[Dc]:n.ONE_MINUS_SRC_ALPHA,[zu]:n.ONE_MINUS_DST_COLOR,[Bu]:n.ONE_MINUS_DST_ALPHA,[Gu]:n.CONSTANT_COLOR,[Vu]:n.ONE_MINUS_CONSTANT_COLOR,[Wu]:n.CONSTANT_ALPHA,[Xu]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(D,$,q,dt,at,ct,Dt,Kt,st,Ut){if(D===fn){m===!0&&(Ot(n.BLEND),m=!1);return}if(m===!1&&(vt(n.BLEND),m=!0),D!==Ru){if(D!==g||Ut!==A){if((y!==rs||E!==rs)&&(n.blendEquation(n.FUNC_ADD),y=rs,E=rs),Ut)switch(D){case Bn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ci:n.blendFunc(n.ONE,n.ONE);break;case Pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",D);break}else switch(D){case Bn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Pc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",D);break}S=null,v=null,w=null,_=null,M.set(0,0,0),C=0,g=D,A=Ut}return}at=at||$,ct=ct||q,Dt=Dt||dt,($!==y||at!==E)&&(n.blendEquationSeparate(ne[$],ne[at]),y=$,E=at),(q!==S||dt!==v||ct!==w||Dt!==_)&&(n.blendFuncSeparate(tt[q],tt[dt],tt[ct],tt[Dt]),S=q,v=dt,w=ct,_=Dt),(Kt.equals(M)===!1||st!==C)&&(n.blendColor(Kt.r,Kt.g,Kt.b,st),M.copy(Kt),C=st),g=D,A=!1}function ot(D,$){D.side===Be?Ot(n.CULL_FACE):vt(n.CULL_FACE);let q=D.side===ei;$&&(q=!q),wt(q),D.blending===Bn&&D.transparent===!1?ht(fn):ht(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){P!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),P=D)}function xt(D){D!==Eu?(vt(n.CULL_FACE),D!==N&&(D===Cc?n.cullFace(n.BACK):D===wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),N=D}function qt(D){D!==k&&(G&&n.lineWidth(D),k=D)}function Lt(D,$,q){D?(vt(n.POLYGON_OFFSET_FILL),(L!==$||z!==q)&&(L=$,z=q,a.getReversed()&&($=-$,q=-q),n.polygonOffset($,q))):Ot(n.POLYGON_OFFSET_FILL)}function se(D){D?vt(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function ae(D){D===void 0&&(D=n.TEXTURE0+V-1),J!==D&&(n.activeTexture(D),J=D)}function ue(D,$,q){q===void 0&&(J===null?q=n.TEXTURE0+V-1:q=J);let dt=j[q];dt===void 0&&(dt={type:void 0,texture:void 0},j[q]=dt),(dt.type!==D||dt.texture!==$)&&(J!==q&&(n.activeTexture(q),J=q),n.bindTexture(D,$||Ft[D]),dt.type=D,dt.texture=$)}function F(){let D=j[J];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function He(){try{n.compressedTexImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function ee(){try{n.compressedTexImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function Me(){try{n.texSubImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function pt(){try{n.texSubImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function Fe(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function Bt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function Vt(){try{n.texStorage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function R(){try{n.texStorage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function b(){try{n.texImage2D(...arguments)}catch(D){Gt("WebGLState:",D)}}function B(){try{n.texImage3D(...arguments)}catch(D){Gt("WebGLState:",D)}}function nt(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Q(D,$){d[D]!==$&&(n.pixelStorei(D,$),d[D]=$)}function lt(D){Y.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function mt(D){_t.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),_t.copy(D))}function Z(D,$){let q=h.get($);q===void 0&&(q=new WeakMap,h.set($,q));let dt=q.get(D);dt===void 0&&(dt=n.getUniformBlockIndex($,D.name),n.uniformBlockBinding($,dt,dt),q.set(D,dt))}function K(D,$,q){let at=h.get($).get(D);l[at]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,at,q),l[at]=q)}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},J=null,j={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,v=null,E=null,w=null,_=null,M=new Tt(0,0,0),C=0,A=!1,P=null,N=null,k=null,L=null,z=null,Y.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Ot,bindFramebuffer:Ae,drawBuffers:zt,useProgram:Qt,setBlending:ht,setMaterial:ot,setFlipSided:wt,setCullFace:xt,setLineWidth:qt,setPolygonOffset:Lt,setScissorTest:se,activeTexture:ae,bindTexture:ue,unbindTexture:F,compressedTexImage2D:He,compressedTexImage3D:ee,texImage2D:b,texImage3D:B,pixelStorei:Q,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Vt,texStorage3D:R,texSubImage2D:Me,texSubImage3D:pt,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Bt,scissor:lt,viewport:mt,reset:ut}}function R_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new it,c=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return m?new OffscreenCanvas(R,b):br("canvas")}function y(R,b,B){let nt=1,Q=Vt(R);if((Q.width>B||Q.height>B)&&(nt=B/Math.max(Q.width,Q.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let lt=Math.floor(nt*Q.width),mt=Math.floor(nt*Q.height);u===void 0&&(u=g(lt,mt));let Z=b?g(lt,mt):u;return Z.width=lt,Z.height=mt,Z.getContext("2d").drawImage(R,0,0,lt,mt),Ht("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+lt+"x"+mt+")."),Z}else return"data"in R&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function S(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,b,B,nt,Q,lt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let mt;nt&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&mt&&(Z=mt.R16_EXT),B===n.SHORT&&mt&&(Z=mt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),b===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&mt&&(Z=mt.RG16_EXT),B===n.SHORT&&mt&&(Z=mt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&(B===n.UNSIGNED_SHORT&&mt&&(Z=mt.RGB16_EXT),B===n.SHORT&&mt&&(Z=mt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),b===n.RGBA){let K=lt?Sr:ie.getTransfer(Q);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=K===de?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&mt&&(Z=mt.RGBA16_EXT),B===n.SHORT&&mt&&(Z=mt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,b){let B;return R?b===null||b===Gi||b===ls?B=n.DEPTH24_STENCIL8:b===Vi?B=n.DEPTH32F_STENCIL8:b===qs&&(B=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===ls?B=n.DEPTH_COMPONENT24:b===Vi?B=n.DEPTH_COMPONENT32F:b===qs&&(B=n.DEPTH_COMPONENT16),B}function M(R,b){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==di?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=new WeakRef(R);i.get(R).__ref=b,p.add(b),x.register(R,b,b)}function A(R){let b=i.get(R).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function P(R){k(R.target)}function N(R){L(R.target)}function k(R){R.removeEventListener("dispose",P),A(R),V(R),R.isVideoTexture&&c.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",N),A(R),et(R)}function z(){for(let R of p){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):k(b))}p.clear(),d.clear()}function V(R){let b=i.get(R);if(b.__webglInit===void 0)return;let B=R.source,nt=f.get(B);if(nt){let Q=nt[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(R),Object.keys(nt).length===0&&f.delete(B)}i.remove(R)}function G(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let B=R.source,nt=f.get(B);delete nt[b.__cacheKey],a.memory.textures--}function et(R){let b=i.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let B=R.depthTexture;if(B&&B.renderTarget===R&&k(B),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let lt=0;lt<b.__webglFramebuffer[Q].length;lt++)n.deleteFramebuffer(b.__webglFramebuffer[Q][lt]);else n.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let nt=R.textures;for(let Q=0,lt=nt.length;Q<lt;Q++){let mt=i.get(nt[Q]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(nt[Q])}i.remove(R)}let X=0;function J(){X=0}function j(){return X}function Et(R){X=R}function Nt(){let R=X;return R>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function Y(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function _t(R,b){let B=i.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let nt=R.image;if(nt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,R,b);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function At(R,b){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ot(B,R,b);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function Ft(R,b){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ot(B,R,b);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function vt(R,b){let B=i.get(R);if(R.version>0&&B.__version!==R.version){wt(B,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}let Ot={[Ls]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[zi]:n.MIRRORED_REPEAT},Ae={[Je]:n.NEAREST,[Zu]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[pn]:n.LINEAR_MIPMAP_LINEAR},zt={[Qu]:n.NEVER,[Xc]:n.ALWAYS,[ju]:n.LESS,[Vc]:n.LEQUAL,[td]:n.EQUAL,[Wc]:n.GEQUAL,[ed]:n.GREATER,[id]:n.NOTEQUAL};function Qt(R,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===di||b.magFilter===Co||b.magFilter===ta||b.magFilter===pn||b.minFilter===di||b.minFilter===Co||b.minFilter===ta||b.minFilter===pn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ot[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ot[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ot[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ae[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ae[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Je||b.minFilter!==ta&&b.minFilter!==pn||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ne(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P),C(b));let nt=b.source,Q=f.get(nt);Q===void 0&&(Q={},f.set(nt,Q));let lt=Y(b);if(lt!==R.__cacheKey){Q[lt]===void 0&&(Q[lt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[lt].usedTimes++;let mt=Q[R.__cacheKey];mt!==void 0&&(Q[R.__cacheKey].usedTimes--,mt.usedTimes===0&&G(b)),R.__cacheKey=lt,R.__webglTexture=Q[lt].texture}return B}function tt(R,b,B){return Math.floor(Math.floor(R/B)/b)}function ht(R,b,B,nt){let lt=R.updateRanges;if(lt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,B,nt,b.data);else{lt.sort((D,$)=>D.start-$.start);let mt=0;for(let D=1;D<lt.length;D++){let $=lt[mt],q=lt[D],dt=$.start+$.count,at=tt(q.start,b.width,4),ct=tt($.start,b.width,4);q.start<=dt+1&&at===ct&&tt(q.start+q.count-1,b.width,4)===at?$.count=Math.max($.count,q.start+q.count-$.start):(++mt,lt[mt]=q)}lt.length=mt+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let D=0,$=lt.length;D<$;D++){let q=lt[D],dt=Math.floor(q.start/4),at=Math.ceil(q.count/4),ct=dt%b.width,Dt=Math.floor(dt/b.width),Kt=at,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(n.TEXTURE_2D,0,ct,Dt,Kt,st,B,nt,b.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,ut)}}function ot(R,b,B){let nt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=n.TEXTURE_3D);let Q=ne(R,b),lt=b.source;e.bindTexture(nt,R.__webglTexture,n.TEXTURE0+B);let mt=i.get(lt);if(lt.version!==mt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let st=ie.getPrimaries(ie.workingColorSpace),Ut=b.colorSpace===gn?null:ie.getPrimaries(b.colorSpace),Zt=b.colorSpace===gn||st===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let K=y(b.image,!1,s.maxTextureSize);K=Bt(b,K);let ut=r.convert(b.format,b.colorSpace),D=r.convert(b.type),$=w(b.internalFormat,ut,D,b.normalized,b.colorSpace,b.isVideoTexture);Qt(nt,b);let q,dt=b.mipmaps,at=b.isVideoTexture!==!0,ct=mt.__version===void 0||Q===!0,Dt=lt.dataReady,Kt=M(b,K);if(b.isDepthTexture)$=_(b.format===mn,b.type),ct&&(at?e.texStorage2D(n.TEXTURE_2D,1,$,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,$,K.width,K.height,0,ut,D,null));else if(b.isDataTexture)if(dt.length>0){at&&ct&&e.texStorage2D(n.TEXTURE_2D,Kt,$,dt[0].width,dt[0].height);for(let st=0,Ut=dt.length;st<Ut;st++)q=dt[st],at?Dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,q.width,q.height,ut,D,q.data):e.texImage2D(n.TEXTURE_2D,st,$,q.width,q.height,0,ut,D,q.data);b.generateMipmaps=!1}else at?(ct&&e.texStorage2D(n.TEXTURE_2D,Kt,$,K.width,K.height),Dt&&ht(b,K,ut,D)):e.texImage2D(n.TEXTURE_2D,0,$,K.width,K.height,0,ut,D,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,$,dt[0].width,dt[0].height,K.depth);for(let st=0,Ut=dt.length;st<Ut;st++)if(q=dt[st],b.format!==Wi)if(ut!==null)if(at){if(Dt)if(b.layerUpdates.size>0){let Zt=eh(q.width,q.height,b.format,b.type);for(let Mt of b.layerUpdates){let _e=q.data.subarray(Mt*Zt/q.data.BYTES_PER_ELEMENT,(Mt+1)*Zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,Mt,q.width,q.height,1,ut,_e)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,K.depth,ut,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,$,q.width,q.height,K.depth,0,q.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,K.depth,ut,D,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,$,q.width,q.height,K.depth,0,ut,D,q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{at&&ct&&e.texStorage2D(n.TEXTURE_2D,Kt,$,dt[0].width,dt[0].height);for(let st=0,Ut=dt.length;st<Ut;st++)q=dt[st],b.format!==Wi?ut!==null?at?Dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,q.width,q.height,ut,q.data):e.compressedTexImage2D(n.TEXTURE_2D,st,$,q.width,q.height,0,q.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,q.width,q.height,ut,D,q.data):e.texImage2D(n.TEXTURE_2D,st,$,q.width,q.height,0,ut,D,q.data)}else if(b.isDataArrayTexture)if(at){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Kt,$,K.width,K.height,K.depth),Dt)if(b.layerUpdates.size>0){let st=eh(K.width,K.height,b.format,b.type);for(let Ut of b.layerUpdates){let Zt=K.data.subarray(Ut*st/K.data.BYTES_PER_ELEMENT,(Ut+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ut,K.width,K.height,1,ut,D,Zt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,D,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$,K.width,K.height,K.depth,0,ut,D,K.data);else if(b.isData3DTexture)at?(ct&&e.texStorage3D(n.TEXTURE_3D,Kt,$,K.width,K.height,K.depth),Dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,D,K.data)):e.texImage3D(n.TEXTURE_3D,0,$,K.width,K.height,K.depth,0,ut,D,K.data);else if(b.isFramebufferTexture){if(ct)if(at)e.texStorage2D(n.TEXTURE_2D,Kt,$,K.width,K.height);else{let st=K.width,Ut=K.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(n.TEXTURE_2D,Zt,$,st,Ut,0,ut,D,null),st>>=1,Ut>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),d.add(b),st.onpaint=Ut=>{let Zt=Ut.changedElements;for(let Mt of d)Zt.includes(Mt.image)&&(Mt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let Zt=n.RGBA,Mt=n.RGBA,_e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Zt,Mt,_e,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(dt.length>0){if(at&&ct){let st=Vt(dt[0]);e.texStorage2D(n.TEXTURE_2D,Kt,$,st.width,st.height)}for(let st=0,Ut=dt.length;st<Ut;st++)q=dt[st],at?Dt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ut,D,q):e.texImage2D(n.TEXTURE_2D,st,$,ut,D,q);b.generateMipmaps=!1}else if(at){if(ct){let st=Vt(K);e.texStorage2D(n.TEXTURE_2D,Kt,$,st.width,st.height)}Dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,D,K)}else e.texImage2D(n.TEXTURE_2D,0,$,ut,D,K);S(b)&&b.mipmapsAutoUpdate===!0&&v(nt),mt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function wt(R,b,B){if(b.image.length!==6)return;let nt=ne(R,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);let lt=i.get(Q);if(Q.version!==lt.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);let mt=ie.getPrimaries(ie.workingColorSpace),Z=b.colorSpace===gn?null:ie.getPrimaries(b.colorSpace),K=b.colorSpace===gn||mt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,$=[];for(let Mt=0;Mt<6;Mt++)!ut&&!D?$[Mt]=y(b.image[Mt],!0,s.maxCubemapSize):$[Mt]=D?b.image[Mt].image:b.image[Mt],$[Mt]=Bt(b,$[Mt]);let q=$[0],dt=r.convert(b.format,b.colorSpace),at=r.convert(b.type),ct=w(b.internalFormat,dt,at,b.normalized,b.colorSpace),Dt=b.isVideoTexture!==!0,Kt=lt.__version===void 0||nt===!0,st=Q.dataReady,Ut=M(b,q);Qt(n.TEXTURE_CUBE_MAP,b);let Zt;if(b.isDepthTexture){if(ct=_(b.format===mn,b.type),Kt)if(Dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ct,q.width,q.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ct,q.width,q.height,0,dt,at,null)}else if(ut){Dt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ct,q.width,q.height);for(let Mt=0;Mt<6;Mt++){Zt=$[Mt].mipmaps;for(let _e=0;_e<Zt.length;_e++){let Ze=Zt[_e];b.format!==Wi?dt!==null?Dt?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e,0,0,Ze.width,Ze.height,dt,Ze.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e,ct,Ze.width,Ze.height,0,Ze.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e,0,0,Ze.width,Ze.height,dt,at,Ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e,ct,Ze.width,Ze.height,0,dt,at,Ze.data)}}}else{if(Zt=b.mipmaps,Dt&&Kt){Zt.length>0&&Ut++;let Mt=Vt($[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ct,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(D){Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,$[Mt].width,$[Mt].height,dt,at,$[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ct,$[Mt].width,$[Mt].height,0,dt,at,$[Mt].data);for(let _e=0;_e<Zt.length;_e++){let vn=Zt[_e].image[Mt].image;Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e+1,0,0,vn.width,vn.height,dt,at,vn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e+1,ct,vn.width,vn.height,0,dt,at,vn.data)}}else{Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,dt,at,$[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ct,dt,at,$[Mt]);for(let _e=0;_e<Zt.length;_e++){let Ze=Zt[_e];Dt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e+1,0,0,dt,at,Ze.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,_e+1,ct,dt,at,Ze.image[Mt])}}}S(b)&&b.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),lt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function xt(R,b,B,nt,Q,lt){let mt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),K=w(B.internalFormat,mt,Z,B.normalized,B.colorSpace),ut=i.get(b),D=i.get(B);if(D.__renderTarget=b,!ut.__hasExternalTextures){let $=Math.max(1,b.width>>lt),q=Math.max(1,b.height>>lt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,lt,K,$,q,b.depth,0,mt,Z,null):e.texImage2D(Q,lt,K,$,q,0,mt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),pt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,Q,D.__webglTexture,0,Me(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,Q,D.__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(R,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let nt=b.depthTexture,Q=nt&&nt.isDepthTexture?nt.type:null,lt=_(b.stencilBuffer,Q),mt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(b),lt,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(b),lt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,lt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,R)}else{let nt=b.textures;for(let Q=0;Q<nt.length;Q++){let lt=nt[Q],mt=r.convert(lt.format,lt.colorSpace),Z=r.convert(lt.type),K=w(lt.internalFormat,mt,Z,lt.normalized,lt.colorSpace);pt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(b),K,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(b),K,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,K,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(R,b,B){let nt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(b.depthTexture);Q.__renderTarget=b;let lt=nt?b.depthTexture.image[0]:b.depthTexture.image;(!Q.__webglTexture||lt.width!==b.width||lt.height!==b.height)&&(lt.width=b.width,lt.height=b.height,b.depthTexture.needsUpdate=!0),nt?vt(b.depthTexture,0):_t(b.depthTexture,0);let mt=Q.__webglTexture,Z=Me(b),K=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ut=b.depthTexture.format===mn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===cn)pt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,K,mt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ut,K,mt,0);else if(b.depthTexture.format===mn)pt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,K,mt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ut,K,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){let b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let nt=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",Q)};nt.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=nt}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)Lt(b.__webglFramebuffer[nt],R,nt);else R.texture.mipmaps.length>0?Lt(b.__webglFramebuffer[0],R,0):Lt(b.__webglFramebuffer,R,0);else if(B){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=n.createRenderbuffer(),qt(b.__webglDepthbuffer[nt],R,!1);else{let Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,lt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),qt(b.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(R,b,B){let nt=i.get(R);b!==void 0&&xt(nt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&se(R)}function ue(R){let b=R.texture,B=i.get(R),nt=i.get(b);R.addEventListener("dispose",N),C(R);let Q=R.textures,lt=R.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=b.version,a.memory.textures++),lt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let K=0;K<b.mipmaps.length;K++)B.__webglFramebuffer[Z][K]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(mt)for(let Z=0,K=Q.length;Z<K;Z++){let ut=i.get(Q[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&pt(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let K=Q[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ut=r.convert(K.format,K.colorSpace),D=r.convert(K.type),$=w(K.internalFormat,ut,D,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),q=Me(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,$,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Qt(n.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)xt(B.__webglFramebuffer[Z][K],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else xt(B.__webglFramebuffer[Z],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);S(b)?v(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let Z=0,K=Q.length;Z<K;Z++){let ut=Q[Z],D=i.get(ut),$=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,D.__webglTexture),Qt($,ut),xt(B.__webglFramebuffer,R,ut,n.COLOR_ATTACHMENT0+Z,$,0),S(ut)&&v($)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,nt.__webglTexture),Qt(Z,b),b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)xt(B.__webglFramebuffer[K],R,b,n.COLOR_ATTACHMENT0,Z,K);else xt(B.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,Z,0);S(b)?v(Z):b.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&se(R)}function F(R){let b=R.textures;for(let B=0,nt=b.length;B<nt;B++){let Q=b[B];if(S(Q)&&Q.mipmapsAutoUpdate===!0){let lt=E(R),mt=i.get(Q).__webglTexture;e.bindTexture(lt,mt),v(lt),e.unbindTexture()}}}let He=[];function ee(R){if(R.samples>0){if(pt(R)===!1){let b=R.textures,B=R.width,nt=R.height,Q=n.COLOR_BUFFER_BIT,lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(R),Z=b.length>1;if(Z)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let D=i.get(b[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,B,nt,0,0,B,nt,Q,n.NEAREST),l===!0&&(He.length=0,He.push(n.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&He.push(lt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let D=i.get(b[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,D,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Me(R){return Math.min(s.maxSamples,R.samples)}function pt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(R){let b=a.render.frame;c.get(R)!==b&&(c.set(R,b),R.update())}function Bt(R,b){let B=R.colorSpace,nt=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Mr&&B!==gn&&(ie.getTransfer(B)===de?(nt!==Wi||Q!==vi)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",B)),b}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=Nt,this.resetTextureUnits=J,this.getTextureUnits=j,this.setTextureUnits=Et,this.setTexture2D=_t,this.setTexture2DArray=At,this.setTexture3D=Ft,this.setTextureCube=vt,this.rebindTextures=ae,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pt,this.dispose=z}function C_(n,t){function e(i,s=gn){let r,a=ie.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fc)return n.BYTE;if(i===Oc)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Po)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===Xe)return n.HALF_FLOAT;if(i===zc)return n.ALPHA;if(i===Hc)return n.RGB;if(i===Wi)return n.RGBA;if(i===cn)return n.DEPTH_COMPONENT;if(i===mn)return n.DEPTH_STENCIL;if(i===Gc)return n.RED;if(i===Do)return n.RED_INTEGER;if(i===kn)return n.RG;if(i===No)return n.RG_INTEGER;if(i===Uo)return n.RGBA_INTEGER;if(i===ea||i===ia||i===na||i===sa)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fo||i===Oo||i===Bo||i===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zo||i===Ho||i===Go||i===Vo||i===Wo||i===ra||i===Xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zo||i===Ho)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vo)return r.COMPRESSED_R11_EAC;if(i===Wo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return r.COMPRESSED_RG11_EAC;if(i===Xo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qo||i===Yo||i===Zo||i===Ko||i===$o||i===Jo||i===Qo||i===jo||i===tl||i===el||i===il||i===nl||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===ol||i===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===al)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cl||i===hl||i===aa||i===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new De({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends Zi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new hh,g={},y=e.getContextAttributes(),S=null,v=null,E=[],w=[],_=new it,M=null,C=null,A=new ke;A.viewport=new Ce;let P=new ke;P.viewport=new Ce;let N=[A,P],k=new wo,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let _t=E[Y];return _t===void 0&&(_t=new Fs,E[Y]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Y){let _t=E[Y];return _t===void 0&&(_t=new Fs,E[Y]=_t),_t.getGripSpace()},this.getHand=function(Y){let _t=E[Y];return _t===void 0&&(_t=new Fs,E[Y]=_t),_t.getHandSpace()};function V(Y){let _t=w.indexOf(Y.inputSource);if(_t===-1)return;let At=E[_t];At!==void 0&&(At.update(Y.inputSource,Y.frame,h||a),At.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<E.length;Y++){let _t=w[Y];_t!==null&&(w[Y]=null,E[Y].disconnect(_t))}L=null,z=null,m.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(S),f=null,u=null,d=null,s=null,v=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),C!==null){let Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ft=null,vt=null;y.depth&&(vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=y.stencil?mn:cn,Ft=y.stencil?ls:Gi);let Ot={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ze(u.textureWidth,u.textureHeight,{format:Wi,type:vi,depthTexture:new un(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ze(f.framebufferWidth,f.framebufferHeight,{format:Wi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Y){for(let _t=0;_t<Y.removed.length;_t++){let At=Y.removed[_t],Ft=w.indexOf(At);Ft>=0&&(w[Ft]=null,E[Ft].disconnect(At))}for(let _t=0;_t<Y.added.length;_t++){let At=Y.added[_t],Ft=w.indexOf(At);if(Ft===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=w.length){w.push(At),Ft=Ot;break}else if(w[Ot]===null){w[Ot]=At,Ft=Ot;break}if(Ft===-1)break}let vt=E[Ft];vt&&vt.connect(At)}}function X(Y,_t){_t===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(_t.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let _t=Y.near,At=Y.far;m.texture!==null&&(m.depthNear>0&&(_t=m.depthNear),m.depthFar>0&&(At=m.depthFar)),k.near=P.near=A.near=_t,k.far=P.far=A.far=At,(L!==k.near||z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,z=k.far),k.layers.mask=Y.layers.mask|6,A.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Ft=Y.parent,vt=k.cameras;X(k,Ft);for(let Ot=0;Ot<vt.length;Ot++)X(vt[Ot],Ft);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),J(Y,k,Ft)};function J(Y,_t,At){At===null?Y.matrix.copy(_t.matrixWorld):(Y.matrix.copy(At.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(_t.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(_t.projectionMatrix),Y.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return g[Y]};let j=null;function Et(Y,_t){if(c=_t.getViewerPose(h||a),p=_t,c!==null){let At=c.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ft=!1;At.length!==k.cameras.length&&(k.cameras.length=0,Ft=!0);for(let zt=0;zt<At.length;zt++){let Qt=At[zt],ne=null;if(f!==null)ne=f.getViewport(Qt);else{let ht=d.getViewSubImage(u,Qt);ne=ht.viewport,zt===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let tt=N[zt];tt===void 0&&(tt=new ke,tt.layers.enable(zt),tt.viewport=new Ce,N[zt]=tt),tt.matrix.fromArray(Qt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Qt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ne.x,ne.y,ne.width,ne.height),zt===0&&(k.matrix.copy(tt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ft===!0&&k.cameras.push(tt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let zt=d.getDepthInformation(At[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let zt=0;zt<At.length;zt++){let Qt=At[zt].camera;if(Qt){let ne=g[Qt];ne||(ne=new Dr,g[Qt]=ne);let tt=d.getCameraImage(Qt);ne.sourceTexture=tt}}}}for(let At=0;At<E.length;At++){let Ft=w[At],vt=E[At];Ft!==null&&vt!==void 0&&vt.update(Ft,_t,h||a)}j&&j(Y,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),p=null}let Nt=new Bd;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}},L_=new ge,Zd=new Wt;Zd.set(-1,0,0,0,1,0,0,0,1);function D_(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Qc(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),c(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?h(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ei&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ei&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ei&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N_(n,t,e,i){let s={},r={};function a(y,S){let v=S.program;i.uniformBlockBinding(y,v,s[y.id])}function o(y,S){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let E=S.program;i.updateUBOMapping(y,E);let w=t.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function l(y){let S=n.createBuffer(),v=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function h(y){let S=s[y.id],v=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,_=v.length;w<_;w++){let M=v[w];if(Array.isArray(M))for(let C=0,A=M.length;C<A;C++)c(M[C],w,C,E);else c(M,w,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(y,S,v,E){if(u(y,S,v,E)===!0){let w=y.__offset,_=y.value;if(Array.isArray(_)){let M=0;for(let C=0;C<_.length;C++){let A=_[C],P=x(A,!0);d(A,y.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,y.__data)}}function d(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function u(y,S,v,E){let w=y.value,_=S+"_"+v;if(Array.isArray(w)){E[_]===void 0&&(E[_]=[]);let M=E[_],C=!1;for(let A=0;A<w.length;A++)f(w[A],M,A)===!0&&(C=!0);return C}return f(w,E,_)}function f(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let E=S[v];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let S=y.uniforms,v=0,E=16;for(let _=0,M=S.length;_<M;_++){let C=Array.isArray(S[_])?S[_]:[S[_]];for(let A=0,P=C.length;A<P;A++){let N=C[A],k=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(S[_])||Array.isArray(N.value),z=v;for(let G=0,et=k.length;G<et;G++){let X=k[G],J=x(X,L),j=v%E,Et=j%J.boundary,Nt=j+Et;v+=Et,Nt!==0&&E-Nt<J.storage&&(v+=E-Nt),G===0&&(z=v),v+=J.storage}let V=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new V((v-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}let w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function x(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function F_(){return Ji===null&&(Ji=new so(U_,16,16,kn,Xe),Ji.name="DFG_LUT",Ji.minFilter=di,Ji.magFilter=di,Ji.wrapS=Ri,Ji.wrapT=Ri,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var ml=class{constructor(t={}){let{canvas:e=sd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,m=new Set([Uo,No,Do]),g=new Set([vi,Gi,qs,ls,Io,Lo]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,w=null,_=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,N=null,k=null,L=null,z=null;this._outputColorSpace=we;let V=0,G=0,et=null,X=-1,J=null,j=new Ce,Et=new Ce,Nt=null,Y=new Tt(0),_t=0,At=e.width,Ft=e.height,vt=1,Ot=null,Ae=null,zt=new Ce(0,0,At,Ft),Qt=new Ce(0,0,At,Ft),ne=!1,tt=new An,ht=new ro,ot=!1,wt=!1,xt=new ge,qt=new I,Lt=new Ce,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function ue(){return et===null?vt:1}let F=i;function He(T,U){return e.getContext(T,U)}let ee,Me,pt,Fe,Bt,Vt,R,b,B,nt,Q,lt,mt,Z,K,ut,D,$,q,dt,at,ct,Dt;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),F===null){let U="webgl2";if(F=He(U,T),F===null)throw He(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(T){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Gt("WebGLRenderer: "+T.message),T}function Kt(){ee=new Yg(F),ee.init(),at=new C_(F,ee),Me=new Fg(F,ee,t,at),pt=new A_(F,ee),Me.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),k=F.createFramebuffer(),L=F.createFramebuffer(),z=F.createFramebuffer(),Fe=new $g(F),Bt=new f_,Vt=new R_(F,ee,pt,Bt,Me,at,Fe),R=new qg(A),b=new Qp(F),ct=new Ng(F,b),B=new Zg(F,b,Fe,ct),nt=new Qg(F,B,b,ct,Fe),$=new Jg(F,Me,Vt),K=new Og(Bt),Q=new d_(A,R,ee,Me,ct,K),lt=new D_(A,Bt),mt=new m_,Z=new M_(ee),D=new Dg(A,R,pt,nt,p,l),ut=new w_(A,nt,Me),Dt=new N_(F,Fe,Me,pt),q=new Ug(F,ee,Fe),dt=new Kg(F,ee,Fe),Fe.programs=Q.programs,A.capabilities=Me,A.extensions=ee,A.properties=Bt,A.renderLists=mt,A.shadowMap=ut,A.state=pt,A.info=Fe}x!==vi&&(C=new tx(x,e.width,e.height,o,s,r));let st=new uh(A,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(T){T!==void 0&&(vt=T,this.setSize(At,Ft,!1))},this.getSize=function(T){return T.set(At,Ft)},this.setSize=function(T,U,W=!0){if(st.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}At=T,Ft=U,e.width=Math.floor(T*vt),e.height=Math.floor(U*vt),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(At*vt,Ft*vt).floor()},this.setDrawingBufferSize=function(T,U,W){At=T,Ft=U,vt=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===vi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(zt)},this.setViewport=function(T,U,W,O){T.isVector4?zt.set(T.x,T.y,T.z,T.w):zt.set(T,U,W,O),pt.viewport(j.copy(zt).multiplyScalar(ue()).round())},this.getScissor=function(T){return T.copy(Qt)},this.setScissor=function(T,U,W,O){T.isVector4?Qt.set(T.x,T.y,T.z,T.w):Qt.set(T,U,W,O),pt.scissor(Et.copy(Qt).multiplyScalar(ue()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){pt.setScissorTest(ne=T)},this.setOpaqueSort=function(T){Ot=T},this.setTransparentSort=function(T){Ae=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,W=!0){let O=0;if(T){let H=!1;if(et!==null){let gt=et.texture.format;H=m.has(gt)}if(H){let gt=et.texture.type,Rt=g.has(gt),ft=D.getClearColor(),bt=D.getClearAlpha(),It=ft.r,Xt=ft.g,oe=ft.b;Rt?(y[0]=It,y[1]=Xt,y[2]=oe,y[3]=bt,F.clearBufferuiv(F.COLOR,0,y)):(S[0]=It,S[1]=Xt,S[2]=oe,S[3]=bt,F.clearBufferiv(F.COLOR,0,S))}else O|=F.COLOR_BUFFER_BIT}U&&(O|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),D.dispose(),mt.dispose(),Z.dispose(),Vt.dispose(),Bt.dispose(),R.dispose(),nt.dispose(),B.dispose(),ct.dispose(),Dt.dispose(),Q.dispose(),st.dispose(),st.removeEventListener("sessionstart",Oh),st.removeEventListener("sessionend",Bh),Vn.stop()};function Ut(T){T.preventDefault(),Yc("WebGLRenderer: Context Lost."),P=!0}function Zt(){Yc("WebGLRenderer: Context Restored."),P=!1;let T=Fe.autoReset,U=ut.enabled,W=ut.autoUpdate,O=ut.needsUpdate,H=ut.type;Kt(),Fe.autoReset=T,ut.enabled=U,ut.autoUpdate=W,ut.needsUpdate=O,ut.type=H}function Mt(T){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){let U=T.target;U.removeEventListener("dispose",_e),Ze(U)}function Ze(T){vn(T),Bt.remove(T)}function vn(T){let U=Bt.get(T).programs;U!==void 0&&(U.forEach(function(W){Q.releaseProgram(W)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,O,H,gt){U===null&&(U=se);let Rt=H.isMesh&&H.matrixWorld.determinantAffine()<0,ft=yf(T,U,W,O,H);pt.setMaterial(O,Rt);let bt=W.index,It=1;if(O.wireframe===!0){if(bt=B.getWireframeAttribute(W),bt===void 0)return;It=2}let Xt=W.drawRange,oe=W.attributes.position,Ct=Xt.start*It,le=(Xt.start+Xt.count)*It;gt!==null&&(Ct=Math.max(Ct,gt.start*It),le=Math.min(le,(gt.start+gt.count)*It)),bt!==null?(Ct=Math.max(Ct,0),le=Math.min(le,bt.count)):oe!=null&&(Ct=Math.max(Ct,0),le=Math.min(le,oe.count));let Ge=le-Ct;if(Ge<0||Ge===1/0)return;ct.setup(H,O,ft,W,bt);let Ee,Se=q;if(bt!==null&&(Ee=b.get(bt),Se=dt,Se.setIndex(Ee)),H.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*ue()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(H.isLine){let ri=O.linewidth;ri===void 0&&(ri=1),pt.setLineWidth(ri*ue()),H.isLineSegments?Se.setMode(F.LINES):H.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else H.isPoints?Se.setMode(F.POINTS):H.isSprite&&Se.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ri=H._multiDrawStarts,Pt=H._multiDrawCounts,ui=H._multiDrawCount,fe=bt?b.get(bt).bytesPerElement:1,Wn=Bt.get(O).currentProgram.getUniforms();for(let ai=0;ai<ui;ai++)Wn.setValue(F,"_gl_DrawID",ai),Se.render(ri[ai]/fe,Pt[ai])}else if(H.isInstancedMesh)Se.renderInstances(Ct,Ge,H.count);else if(W.isInstancedBufferGeometry){let ri=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,ri);Se.renderInstances(Ct,Ge,Pt)}else Se.render(Ct,Ge)};function Fh(T,U,W,O){N!==null&&T.isNodeMaterial&&N.setObject(O,T),ot===!0&&K.setState(T,W,!1),T.transparent===!0&&T.side===Be&&T.forceSinglePass===!1?(T.side=ei,T.needsUpdate=!0,hr(T,U,O),T.side=On,T.needsUpdate=!0,hr(T,U,O),T.side=Be):hr(T,U,O)}this.compile=function(T,U,W=null){W===null&&(W=T),N!==null&&N.renderStart(T,U,W),w=Z.get(W),w.init(U),M.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),wt=this.localClippingEnabled,ot=K.init(this.clippingPlanes,wt),ot===!0&&K.setGlobalState(this.clippingPlanes,U),N!==null&&ut.render(w.state.shadowsArray,W,U);let O=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let gt=H.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let ft=gt[Rt];Fh(ft,W,U,H),O.add(ft)}else Fh(gt,W,U,H),O.add(gt)}),w=M.pop(),N!==null&&N.renderEnd(),O},this.compileAsync=function(T,U,W=null){let O=this.compile(T,U,W);return new Promise(H=>{function gt(){if(O.forEach(function(Rt){let bt=Bt.get(Rt).currentProgram;(bt===void 0||bt.isReady())&&O.delete(Rt)}),O.size===0){H(T);return}setTimeout(gt,10)}ee.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Wl=null;function _f(T){Wl&&Wl(T)}function Oh(){Vn.stop()}function Bh(){Vn.start()}let Vn=new Bd;Vn.setAnimationLoop(_f),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(T){Wl=T,st.setAnimationLoop(T),T===null?Vn.stop():Vn.start()},st.addEventListener("sessionstart",Oh),st.addEventListener("sessionend",Bh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,U);let W=st.enabled===!0&&st.isPresenting===!0,O=C!==null&&(et===null||W)&&C.begin(A,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,et),w=Z.get(T,M.length),w.init(U),w.state.textureUnits=Vt.getTextureUnits(),M.push(w),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ht.setFromArrayCamera(U):tt.setFromProjectionMatrix(xt,Ci,U.reversedDepth),wt=this.localClippingEnabled,ot=K.init(this.clippingPlanes,wt),E=mt.get(T,_.length),E.init(),_.push(E),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&Xl(Rt,U,-1/0,A.sortObjects)}Xl(T,U,0,A.sortObjects),E.finish(),N!==null&&N.updateLights(w.state.lightsArray),A.sortObjects===!0&&E.sort(Ot,Ae),ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ae&&D.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),ot===!0&&K.beginShadows();let H=w.state.shadowsArray;if(ut.render(H,T,U),ot===!0&&K.endShadows(),(O&&C.hasRenderPass())===!1){let Rt=E.opaque,ft=E.transmissive;if(w.setupLights(),U.isArrayCamera){let bt=U.cameras;if(ft.length>0)for(let It=0,Xt=bt.length;It<Xt;It++){let oe=bt[It];zh(Rt,ft,T,oe)}ae&&D.render(T);for(let It=0,Xt=bt.length;It<Xt;It++){let oe=bt[It];kh(E,T,oe,oe.viewport)}}else ft.length>0&&zh(Rt,ft,T,U),ae&&D.render(T),kh(E,T,U)}et!==null&&G===0&&(Vt.updateMultisampleRenderTarget(et),Vt.updateRenderTargetMipmap(et)),O&&C.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),ct.resetDefaultState(),X=-1,J=null,M.pop(),M.length>0?(w=M[M.length-1],Vt.setTextureUnits(w.state.textureUnits),ot===!0&&K.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,N!==null&&N.renderEnd()};function Xl(T,U,W,O){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Rt=U.isArrayCamera?ht:tt;if(!T.frustumCulled||T.intersectsFrustum(Rt)){O&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);let ft=nt.update(T),bt=T.material;bt.visible&&E.push(T,ft,bt,W,Lt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Rt=U.isArrayCamera?ht:tt;if(!T.frustumCulled||T.intersectsFrustum(Rt)){let ft=nt.update(T),bt=T.material;if(O&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(bt)){let It=ft.groups;for(let Xt=0,oe=It.length;Xt<oe;Xt++){let Ct=It[Xt],le=bt[Ct.materialIndex];le&&le.visible&&E.push(T,ft,le,W,Lt.z,Ct,U)}}else bt.visible&&E.push(T,ft,bt,W,Lt.z,null,U)}}}let gt=T.children;for(let Rt=0,ft=gt.length;Rt<ft;Rt++)Xl(gt[Rt],U,W,O)}function kh(T,U,W,O){let{opaque:H,transmissive:gt,transparent:Rt}=T;w.setupLightsView(W),ot===!0&&K.setGlobalState(A.clippingPlanes,W),O&&pt.viewport(j.copy(O)),H.length>0&&va(H,U,W),gt.length>0&&va(gt,U,W),Rt.length>0&&va(Rt,U,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function zh(T,U,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Ct=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new ze(1,1,{generateMipmaps:!0,type:Ct?Xe:vi,minFilter:pn,samples:Math.max(4,Me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let gt=w.state.transmissionRenderTarget[O.id],Rt=O.viewport||j;gt.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let ft=A.getRenderTarget(),bt=A.getActiveCubeFace(),It=A.getActiveMipmapLevel();A.setRenderTarget(gt),A.getClearColor(Y),_t=A.getClearAlpha(),_t<1&&A.setClearColor(16777215,.5),A.clear(),ae&&D.render(W);let Xt=A.toneMapping;A.toneMapping=$i;let oe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),ot===!0&&K.setGlobalState(A.clippingPlanes,O),va(T,W,O),Vt.updateMultisampleRenderTarget(gt),Vt.updateRenderTargetMipmap(gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let le=0,Ge=U.length;le<Ge;le++){let Ee=U[le],{object:Se,geometry:ri,material:Pt,group:ui}=Ee;if(Pt.side===Be&&Se.layers.test(O.layers)){let fe=Pt.side;Pt.side=ei,Pt.needsUpdate=!0,Hh(Se,W,O,ri,Pt,ui),Pt.side=fe,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Vt.updateMultisampleRenderTarget(gt),Vt.updateRenderTargetMipmap(gt))}A.setRenderTarget(ft,bt,It),A.setClearColor(Y,_t),oe!==void 0&&(O.viewport=oe),A.toneMapping=Xt}function va(T,U,W){let O=U.isScene===!0?U.overrideMaterial:null;for(let H=0,gt=T.length;H<gt;H++){let Rt=T[H],{object:ft,geometry:bt,group:It}=Rt,Xt=Rt.material;Xt.allowOverride===!0&&O!==null&&(Xt=O),ft.layers.test(W.layers)&&Hh(ft,U,W,bt,Xt,It)}}function Hh(T,U,W,O,H,gt){N!==null&&H.isNodeMaterial&&N.setObject(T,H),T.onBeforeRender(A,U,W,O,H,gt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(A,U,W,O,T,gt),H.transparent===!0&&H.side===Be&&H.forceSinglePass===!1?(H.side=ei,H.needsUpdate=!0,A.renderBufferDirect(W,U,O,H,T,gt),H.side=On,H.needsUpdate=!0,A.renderBufferDirect(W,U,O,H,T,gt),H.side=Be):A.renderBufferDirect(W,U,O,H,T,gt),T.onAfterRender(A,U,W,O,H,gt)}function Gh(T){let U=0;for(let W of T)W.texture!==null&&U++;return U}function hr(T,U,W){U.isScene!==!0&&(U=se);let O=Bt.get(T),H=w.state.lights,gt=w.state.shadowsArray,Rt=H.state.version,ft=Q.getParameters(T,H.state,gt,U,W,w.state.lightProbeGridArray),bt=Q.getProgramCacheKey(ft),It=O.programs;O.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;let Xt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;O.envMap=R.get(T.envMap||O.environment,Xt),O.envMapRotation=O.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",_e),It=new Map,O.programs=It,O.programVariants=new Map);let oe=It.get(bt);if(oe!==void 0){if(O.currentProgram===oe&&O.lightsStateVersion===Rt)return Wh(T,ft),oe}else ft.uniforms=Q.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,W,ft),T.onBeforeCompile(ft,A),oe=Q.acquireProgram(ft,bt),It.set(bt,oe),O.uniforms=ft.uniforms;let Ct=O.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=K.uniform),Wh(T,ft),O.needsLights=Sf(T),O.lightsStateVersion=Rt,O.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.sunLights.value=H.state.sun,Ct.sunLightShadows.value=H.state.sunShadow,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.sunShadowMatrix.value=H.state.sunShadowMatrix,Ct.sunShadowCascade.value=H.state.sunShadowCascade,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),O.numLightProbeGrids=Gh(w.state.lightProbeGridArray),O.currentProgram=oe,O.uniformsList=null,oe}function vf(T,U,W,O,H){let gt=Bt.get(T),Rt=gt.currentProgram.id+","+O+","+H,ft=gt.programVariants.get(Rt);return ft===void 0?(ft=hr(T,U,W),gt.programVariants.set(Rt,ft)):(gt.currentProgram=ft,gt.uniformsList=null,gt.outputColorSpace=O,gt.toneMapping=H),ft}function Vh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Ys.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Wh(T,U){let W=Bt.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function yf(T,U,W,O,H){U.isScene!==!0&&(U=se),Vt.resetTextureUnits();let gt=U.fog,Rt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,ft=et===null?A.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ie.workingColorSpace,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,It=R.get(O.envMap||Rt,bt),Xt=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,oe=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ct=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,Ge=!!W.morphAttributes.color,Ee=$i;O.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ee=A.toneMapping);let Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ri=Se!==void 0?Se.length:0,Pt=Bt.get(O),ui=w.state.lights;if(ot===!0&&(wt===!0||T!==J)){let Pe=T===J&&O.id===X;K.setState(O,T,Pe)}let fe=!1,Wn=!1;O.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==ui.state.version||H.isBatchedMesh&&Pt.batching===!1||!H.isBatchedMesh&&Pt.batching===!0||H.isBatchedMesh&&Pt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Pt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Pt.instancing===!1||!H.isInstancedMesh&&Pt.instancing===!0||H.isSkinnedMesh&&Pt.skinning===!1||!H.isSkinnedMesh&&Pt.skinning===!0||H.isInstancedMesh&&Pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pt.instancingMorph===!1&&H.morphTexture!==null||Pt.envMap!==It||O.fog===!0&&Pt.fog!==gt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==K.numPlanes||Pt.numIntersection!==K.numIntersection)||Pt.vertexAlphas!==Xt||Pt.vertexTangents!==oe||Pt.morphTargets!==Ct||Pt.morphNormals!==le||Pt.morphColors!==Ge||Pt.morphTargetsCount!==ri||Pt.numLightProbeGrids!==Gh(w.state.lightProbeGridArray)?fe=!0:(Pt.outputColorSpace!==ft||Pt.toneMapping!==Ee)&&(Wn=!0):(fe=!0,Pt.__version=O.version);let ai=Pt.currentProgram;(fe===!0||Wn===!0)&&(ai=Wn===!0?vf(O,U,H,ft,Ee):hr(O,U,H),N&&O.isNodeMaterial&&N.onUpdateProgram(O,ai,Pt));let ya=!1,yn=!1,Xn=!1,ce=ai.getUniforms(),ti=Pt.uniforms;if(pt.useProgram(ai.program)&&(ya=!0,yn=!0,Xn=!0),O.id!==X&&(X=O.id,yn=!0),ya||J!==T){pt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ce.setValue(F,"projectionMatrix",T.projectionMatrix),ce.setValue(F,"viewMatrix",T.matrixWorldInverse);let Ke=ce.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,qt.setFromMatrixPosition(T.matrixWorld)),Me.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ce.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,yn=!0,Xn=!0)}if(Pt.needsLights&&(ui.state.sunShadowMap.length>0&&ce.setValue(F,"sunShadowMap",ui.state.sunShadowMap,Vt),ui.state.directionalShadowMap.length>0&&ce.setValue(F,"directionalShadowMap",ui.state.directionalShadowMap,Vt),ui.state.spotShadowMap.length>0&&ce.setValue(F,"spotShadowMap",ui.state.spotShadowMap,Vt),ui.state.pointShadowMap.length>0&&ce.setValue(F,"pointShadowMap",ui.state.pointShadowMap,Vt)),H.isSkinnedMesh){ce.setOptional(F,H,"bindMatrix"),ce.setOptional(F,H,"bindMatrixInverse");let Pe=H.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ce.setValue(F,"boneTexture",Pe.boneTexture,Vt))}H.isBatchedMesh&&(ce.setOptional(F,H,"batchingTexture"),ce.setValue(F,"batchingTexture",H._matricesTexture,Vt),ce.setOptional(F,H,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",H._indirectTexture,Vt),ce.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",H._colorsTexture,Vt));let Ui=W.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&$.update(H,W,ai),(yn||Pt.receiveShadow!==H.receiveShadow)&&(Pt.receiveShadow=H.receiveShadow,ce.setValue(F,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=F_()),yn){if(ce.setValue(F,"toneMappingExposure",A.toneMappingExposure),Pt.needsLights&&Mf(ti,Xn),gt&&O.fog===!0&&lt.refreshFogUniforms(ti,gt),lt.refreshMaterialUniforms(ti,O,vt,Ft,w.state.transmissionRenderTarget[T.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let Pe=v,Ke=0;for(let en of w.state.lightProbeGridArray)en.texture!==null&&(Pe.textures[Ke]=en.texture,Pe.min[Ke]=en.boundingBox.min,Pe.max[Ke]=en.boundingBox.max,Pe.resolution[Ke]=en.resolution,Ke++);for(let en in Pe)Pe[en].length=Ke;ti.probesSH.value=Pe.textures,ti.probesMin.value=Pe.min,ti.probesMax.value=Pe.max,ti.probesResolution.value=Pe.resolution}Ys.upload(F,Vh(Pt),ti,Vt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ys.upload(F,Vh(Pt),ti,Vt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ce.setValue(F,"center",H.center),ce.setValue(F,"modelViewMatrix",H.modelViewMatrix),ce.setValue(F,"normalMatrix",H.normalMatrix),ce.setValue(F,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){let Pe=O.uniformsGroups;for(let Ke=0,en=Pe.length;Ke<en;Ke++){let qh=Pe[Ke];Dt.update(qh,ai),Dt.bind(qh,ai)}}return ai}function Mf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Sf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,U,W){let O=Bt.get(T);O.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Bt.get(T.texture).__webglTexture=U,Bt.get(T.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let W=Bt.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){et=T,V=U,G=W;let O=null,H=!1,gt=!1;if(T){let ft=Bt.get(T);if(ft.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),j.copy(T.viewport),Et.copy(T.scissor),Nt=T.scissorTest,pt.viewport(j),pt.scissor(Et),pt.setScissorTest(Nt),X=-1;return}else if(ft.__webglFramebuffer===void 0)Vt.setupRenderTarget(T);else if(ft.__hasExternalTextures)Vt.rebindTextures(T,Bt.get(T.texture).__webglTexture,Bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xt=T.depthTexture;if(ft.__boundDepthTexture!==Xt){if(Xt!==null&&Bt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(T)}}let bt=T.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);let It=Bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(It[U])?O=It[U][W]:O=It[U],H=!0):T.samples>0&&Vt.useMultisampledRTT(T)===!1?O=Bt.get(T).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[W]:O=It,j.copy(T.viewport),Et.copy(T.scissor),Nt=T.scissorTest}else j.copy(zt).multiplyScalar(vt).floor(),Et.copy(Qt).multiplyScalar(vt).floor(),Nt=ne;if(W!==0&&(O=k),pt.bindFramebuffer(F.FRAMEBUFFER,O)&&pt.drawBuffers(T,O),pt.viewport(j),pt.scissor(Et),pt.setScissorTest(Nt),H){let ft=Bt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,W)}else if(gt){let ft=U;for(let bt=0;bt<T.textures.length;bt++){let It=Bt.get(T.textures[bt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+bt,It.__webglTexture,W,ft)}}else if(T!==null&&W!==0){let ft=Bt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,W)}X=-1};function Xh(T){let U=Bt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Me.textureFormatReadable(T.format),U.__typeReadable=Me.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,W,O,H,gt,Rt,ft=0){if(!(T&&T.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt){pt.bindFramebuffer(F.FRAMEBUFFER,bt);try{let It=T.textures[ft],Xt=It.format,oe=It.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Ct=Xh(It);if(Ct.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-O&&W>=0&&W<=T.height-H&&F.readPixels(U,W,O,H,at.convert(Xt),at.convert(oe),gt)}finally{let It=et!==null?Bt.get(et).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,O,H,gt,Rt,ft=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt)if(U>=0&&U<=T.width-O&&W>=0&&W<=T.height-H){pt.bindFramebuffer(F.FRAMEBUFFER,bt);let It=T.textures[ft],Xt=It.format,oe=It.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Ct=Xh(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(U,W,O,H,at.convert(Xt),at.convert(oe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ge=et!==null?Bt.get(et).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Ge);let Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ad(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(le),F.deleteSync(Ee),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,W=0){let O=Math.pow(2,-W),H=Math.floor(T.image.width*O),gt=Math.floor(T.image.height*O),Rt=U!==null?U.x:0,ft=U!==null?U.y:0;Vt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,Rt,ft,H,gt),pt.unbindTexture()},this.copyTextureToTexture=function(T,U,W=null,O=null,H=0,gt=0){let Rt,ft,bt,It,Xt,oe,Ct,le,Ge,Ee=T.isCompressedTexture?T.mipmaps[gt]:T.image;if(W!==null)Rt=W.max.x-W.min.x,ft=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Xt=W.min.y,oe=W.isBox3?W.min.z:0;else{let ce=Math.pow(2,-H);Rt=Math.floor(Ee.width*ce),ft=Math.floor(Ee.height*ce),T.isDataArrayTexture?bt=Ee.depth:T.isData3DTexture?bt=Math.floor(Ee.depth*ce):bt=1,It=0,Xt=0,oe=0}O!==null?(Ct=O.x,le=O.y,Ge=O.z):(Ct=0,le=0,Ge=0);let Se=at.convert(U.format),ri=at.convert(U.type),Pt;U.isData3DTexture?(Vt.setTexture3D(U,0),Pt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Vt.setTexture2DArray(U,0),Pt=F.TEXTURE_2D_ARRAY):(Vt.setTexture2D(U,0),Pt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let ui=pt.getParameter(F.UNPACK_ROW_LENGTH),fe=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),Wn=pt.getParameter(F.UNPACK_SKIP_PIXELS),ai=pt.getParameter(F.UNPACK_SKIP_ROWS),ya=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,It),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,oe);let yn=T.isDataArrayTexture||T.isData3DTexture,Xn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let ce=Bt.get(T),ti=Bt.get(U),Ui=Bt.get(ce.__renderTarget),Pe=Bt.get(ti.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Ui.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ke=0;Ke<bt;Ke++)yn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(T).__webglTexture,H,oe+Ke),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(U).__webglTexture,gt,Ge+Ke)),F.blitFramebuffer(It,Xt,It+Rt,Xt+ft,Ct,le,Ct+Rt,le+ft,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||Bt.has(T)){let ce=Bt.get(T),ti=Bt.get(U);pt.bindFramebuffer(F.READ_FRAMEBUFFER,L),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Ui=0;Ui<bt;Ui++)yn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ce.__webglTexture,H,oe+Ui):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ce.__webglTexture,H),Xn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ti.__webglTexture,gt,Ge+Ui):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ti.__webglTexture,gt),H!==0?F.blitFramebuffer(It,Xt,It+Rt,Xt+ft,Ct,le,Ct+Rt,le+ft,F.COLOR_BUFFER_BIT,F.NEAREST):Xn?F.copyTexSubImage3D(Pt,gt,Ct,le,Ge+Ui,It,Xt,Rt,ft):F.copyTexSubImage2D(Pt,gt,Ct,le,It,Xt,Rt,ft);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Xn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Pt,gt,Ct,le,Ge,Rt,ft,bt,Se,ri,Ee.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,gt,Ct,le,Ge,Rt,ft,bt,Se,Ee.data):F.texSubImage3D(Pt,gt,Ct,le,Ge,Rt,ft,bt,Se,ri,Ee):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,Ct,le,Rt,ft,Se,ri,Ee.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,Ct,le,Ee.width,Ee.height,Se,Ee.data):F.texSubImage2D(F.TEXTURE_2D,gt,Ct,le,Rt,ft,Se,ri,Ee);pt.pixelStorei(F.UNPACK_ROW_LENGTH,ui),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Wn),pt.pixelStorei(F.UNPACK_SKIP_ROWS,ai),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,ya),gt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Pt),pt.unbindTexture()},this.initRenderTarget=function(T){Bt.get(T).__webglFramebuffer===void 0&&Vt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Vt.setTextureCube(T,0):T.isData3DTexture?Vt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Vt.setTexture2DArray(T,0):Vt.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){V=0,G=0,et=null,pt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var $s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},O_=new ns(-1,1,1,-1,0,1),dh=class extends be{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},B_=new dh,zn=class{constructor(t){this._mesh=new kt(B_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,O_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Js=class extends xi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xi.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new zn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var da=class extends xi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_l=class extends xi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new it);this._width=i.width,this._height=i.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Js($s),this.copyPass.material.blending=fn,this.timer=new Yr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}da!==void 0&&(a instanceof da?i=!0:a instanceof _l&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yl=class extends xi{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Tt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Kd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qs=class n extends xi{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(r,a,{type:Xe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new ze(r,a,{type:Xe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ze(r,a,{type:Xe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Kd;this.highPassUniforms=Xi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new it(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xi.clone($s.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader,premultipliedAlpha:!0,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Tt,this._oldClearAlpha=1,this._basic=new xe,this._fsQuad=new zn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,h=o+l;s.push((a*o+(a+1)*l)/h),r.push(h)}return new De({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Qs.BlurDirectionX=new it(1,0);Qs.BlurDirectionY=new it(0,1);var fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ml=class extends xi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Xi.clone(fa.uniforms),this.material=new Hs({name:fa.name,uniforms:this.uniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader}),this._fsQuad=new zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===as?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $d={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new it(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var Sl=class extends Js{constructor(){super($d)}setSize(t,e){this.material.uniforms.resolution.value.set(1/t,1/e)}};var pa=class n extends kt{constructor(){let t=n.SkyShader,e=new De({name:t.name,uniforms:Xi.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ei,depthWrite:!1});super(new Te(1,1,1),e),this.isSky=!0}};pa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var ii=Math.PI,ni=Math.PI*2,yt=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),ve=(n,t,e)=>n+(t-n)*e,rt=(n=1,t)=>t===void 0?Math.random()*n:n+Math.random()*(t-n);var Jd=n=>n[Math.floor(Math.random()*n.length)],ds=n=>n*n*(3-2*n),fh=n=>1-Math.pow(1-n,3);var Qd=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),Ne=(n,t,e,i)=>ve(n,t,1-Math.exp(-e*i));function ye(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=t[e-1],s=t[e],r=s[2]||ds;return ve(i[1],s[1],r((n-i[0])/(s[0]-i[0])))}return t[t.length-1][1]}function ph(n,t,e){let i=t[0][1].length,s=t[0],r=t[0],a=0;if(n>=t[t.length-1][0])s=r=t[t.length-1];else if(n>t[0][0]){for(let o=1;o<t.length;o++)if(n<=t[o][0]){s=t[o-1],r=t[o],a=(r[2]||ds)((n-s[0])/(r[0]-s[0]));break}}for(let o=0;o<i;o++)e[o]=ve(s[1][o],r[1][o],a);return e}function yi(n){let t=n|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function us(n,t,e){let i=Math.imul(n,374761393)^Math.imul(t,668265263)^Math.imul(e+1,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function k_(n,t,e=0){let i=Math.floor(n),s=Math.floor(t),r=n-i,a=t-s,o=r*r*(3-2*r),l=a*a*(3-2*a),h=us(i,s,e),c=us(i+1,s,e),d=us(i,s+1,e),u=us(i+1,s+1,e);return h+(c-h)*o+(d-h)*l+(h-c-d+u)*o*l}function me(n,t,e=4,i=0){let s=0,r=.5,a=1,o=0;for(let l=0;l<e;l++)s+=k_(n*a,t*a,i+l*17)*r,o+=r,r*=.5,a*=2.03;return s/o}function mh(n,t,e=0){let i=Math.floor(n),s=Math.floor(t),r=9,a=9,o=0;for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){let c=i+h,d=s+l,u=c+us(c,d,e),f=d+us(c,d,e+7),p=Math.hypot(u-n,f-t);p<r?(a=r,r=p,o=us(c,d,e+13)):p<a&&(a=p)}return[r,a,o]}var Jt=32,re=64;function Ii(n,t,{color:e=!0,repeat:i=1}={}){let s=document.createElement("canvas");s.width=s.height=n,t(s.getContext("2d"),n);let r=new pi(s);return r.wrapS=r.wrapT=Ls,r.repeat.set(i,i),r.anisotropy=8,e&&(r.colorSpace=we),r}function js(n,t,e,i,s){for(let r=0;r<e;r++){let a=s()>.5?255:0;n.fillStyle=`rgba(${a},${a},${a},${i*s()})`,n.fillRect(s()*t,s()*t,1+s()*2.5,1+s()*2.5)}}function ma(n,t,e,i,s="20,18,16",r=.12){for(let a=0;a<e;a++){let o=i()*t,l=i()*t,h=20+i()*90,c=n.createRadialGradient(o,l,0,o,l,h);c.addColorStop(0,`rgba(${s},${r*i()})`),c.addColorStop(1,`rgba(${s},0)`),n.fillStyle=c,n.fillRect(o-h,l-h,h*2,h*2)}}function z_(n,t,e,i){let s=new Te(n,t,e);if(i){let r=s.attributes.uv,a=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let h=o*4+l;r.setXY(h,r.getX(h)*a[o][0]/i,r.getY(h)*a[o][1]/i)}}return s}var bl=class{constructor(t){this.scene=new Ki,this.colliders=[],this.barrels=[],this.lamps=[],this.spawns=[],this.time=0,this._buildSky(t),this._buildLights(),this._buildMaterials(),this._buildMap(),this._buildNav()}_buildSky(t){let e=new I().setFromSphericalCoords(1,oa.degToRad(69),oa.degToRad(-128));this.sunDir=e;let i=c=>{let d=new pa;d.scale.setScalar(c),d.material.fragmentShader=d.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","vec3 skyC = texColor * 0.3; gl_FragColor = vec4( skyC / ( 1.0 + skyC ), 1.0 );");let u=d.material.uniforms;return u.turbidity.value=6.5,u.rayleigh.value=2.2,u.mieCoefficient.value=.006,u.mieDirectionalG.value=.86,u.sunPosition.value.copy(e),u.showSunDisc&&(u.showSunDisc.value=0),u.cloudCoverage&&(u.cloudCoverage.value=.38,u.cloudDensity.value=.45,u.cloudElevation.value=.55),d};this.sky=i(9e3),this.scene.add(this.sky);let s=Ii(256,(c,d)=>{let u=c.createRadialGradient(d/2,d/2,0,d/2,d/2,d/2);u.addColorStop(0,"rgba(255,225,170,1)"),u.addColorStop(.12,"rgba(255,190,120,0.55)"),u.addColorStop(.4,"rgba(255,150,90,0.14)"),u.addColorStop(1,"rgba(255,120,60,0)"),c.fillStyle=u,c.fillRect(0,0,d,d)});s.wrapS=s.wrapT=Ri,this.sunGroup=new te;let r=new kt(new Hi(9,32),new xe({color:new Tt(16,10,4.5),fog:!1,depthWrite:!1})),a=new kt(new mi(260,260),new xe({map:s,transparent:!0,blending:ci,fog:!1,depthWrite:!1,color:new Tt(1.1,.95,.8)}));this.sunGroup.add(a,r),this.sunGroup.renderOrder=-1,this.scene.add(this.sunGroup);let o=new Ki;o.add(i(900));let l=new kt(new Hi(800,24),new xe({color:3814188}));l.rotation.x=-Math.PI/2,l.position.y=-6,o.add(l);let h=new Zs(t);this.envMap=h.fromScene(o,0,.1,2e3).texture,h.dispose(),this.scene.environment=this.envMap,this.scene.environmentIntensity=.75,this.scene.fog=new wr(13605496,.0085)}_buildLights(){this.hemi=new dn(11126015,7032378,.85),this.scene.add(this.hemi);let t=new Fn(16761994,4.6);t.position.copy(this.sunDir).multiplyScalar(80),t.castShadow=!0,t.shadow.mapSize.set(4096,4096);let e=t.shadow.camera;e.left=-50,e.right=50,e.top=50,e.bottom=-50,e.near=10,e.far=180,t.shadow.bias=-4e-4,t.shadow.normalBias=.035,t.shadow.radius=2.2,this.scene.add(t),this.scene.add(t.target),this.sun=t}_buildMaterials(){let t=yi(1234),e=Ii(1024,(u,f)=>{u.fillStyle="#7b766e",u.fillRect(0,0,f,f),ma(u,f,60,t,"30,26,22",.16),ma(u,f,30,t,"200,190,175",.08),js(u,f,26e3,.09,t),u.strokeStyle="rgba(28,26,24,0.85)",u.lineWidth=4,u.beginPath(),u.moveTo(0,2),u.lineTo(f,2),u.moveTo(2,0),u.lineTo(2,f),u.moveTo(f/2,0),u.lineTo(f/2,f),u.moveTo(0,f/2),u.lineTo(f,f/2),u.stroke(),u.strokeStyle="rgba(22,20,18,0.7)",u.lineWidth=1.3;for(let p=0;p<10;p++){let x=t()*f,m=t()*f,g=t()*6.28;u.beginPath(),u.moveTo(x,m);for(let y=0;y<14;y++)g+=(t()-.5)*1.1,x+=Math.cos(g)*16,m+=Math.sin(g)*16,u.lineTo(x,m);u.stroke()}},{repeat:8}),i=Ii(512,(u,f)=>{u.fillStyle="#808080",u.fillRect(0,0,f,f),js(u,f,3e4,.35,t),ma(u,f,30,t,"0,0,0",.3)},{color:!1,repeat:16}),s=(()=>{let f=document.createElement("canvas");f.width=f.height=256;let p=f.getContext("2d"),x=p.createImageData(256,256),m=x.data;for(let y=0,S=0;y<256;y++)for(let v=0;v<256;v++,S+=4){let E=me(v/38,y/38,4,77),_=232-yt((E-.56)*9)*128+(me(v/6,y/6,2,5)-.5)*30;m[S]=m[S+1]=m[S+2]=yt(_/255)*255,m[S+3]=255}p.putImageData(x,0,0);let g=new pi(f);return g.wrapS=g.wrapT=zi,g.repeat.set(3,3),g})(),r=Ii(512,(u,f)=>{u.fillStyle="#928d85",u.fillRect(0,0,f,f),ma(u,f,30,t,"40,34,28",.14),js(u,f,9e3,.08,t);for(let p=0;p<26;p++){let x=t()*f,m=3+t()*14,g=u.createLinearGradient(0,0,0,f*(.3+t()*.7));g.addColorStop(0,`rgba(30,25,20,${.05+t()*.16})`),g.addColorStop(1,"rgba(30,25,20,0)"),u.fillStyle=g,u.fillRect(x,0,m,f)}u.strokeStyle="rgba(30,28,25,0.7)",u.lineWidth=3,u.strokeRect(0,0,f,f),u.beginPath(),u.moveTo(0,f/2),u.lineTo(f,f/2),u.stroke(),u.fillStyle="rgba(18,16,14,0.6)";for(let[p,x]of[[40,40],[f-40,40],[40,f/2-40],[f-40,f/2-40],[40,f/2+40],[f-40,f/2+40],[40,f-40],[f-40,f-40]])u.beginPath(),u.arc(p,x,6,0,7),u.fill()}),a=Ii(256,(u,f)=>{u.fillStyle="#808080",u.fillRect(0,0,f,f),js(u,f,9e3,.3,t),u.strokeStyle="#000",u.lineWidth=3,u.strokeRect(0,0,f,f),u.beginPath(),u.moveTo(0,f/2),u.lineTo(f,f/2),u.stroke()},{color:!1}),o=Ii(512,(u,f)=>{u.fillStyle="#8a5f33",u.fillRect(0,0,f,f);for(let p=0;p<6;p++){let x=p*f/6;u.fillStyle=`rgba(${p%2?"50,28,8":"170,120,60"},${.1+t()*.12})`,u.fillRect(0,x,f,f/6);for(let m=0;m<24;m++)u.fillStyle=`rgba(40,22,6,${t()*.2})`,u.fillRect(t()*f,x+t()*(f/6),30+t()*160,1+t()*2);u.fillStyle="rgba(20,10,2,0.7)",u.fillRect(0,x,f,3)}js(u,f,5e3,.07,t),u.strokeStyle="#5e3c18",u.lineWidth=50,u.strokeRect(25,25,f-50,f-50),u.lineWidth=40,u.beginPath(),u.moveTo(40,40),u.lineTo(f-40,f-40),u.stroke(),u.strokeStyle="rgba(15,8,0,0.6)",u.lineWidth=3,u.strokeRect(50,50,f-100,f-100),u.strokeRect(1,1,f-2,f-2),u.fillStyle="#2b2b2b";for(let[p,x]of[[25,25],[f-25,25],[25,f-25],[f-25,f-25]])u.beginPath(),u.arc(p,x,7,0,7),u.fill()}),l=Ii(256,(u,f)=>{u.fillStyle="#707070",u.fillRect(0,0,f,f);for(let p=0;p<6;p++)u.fillStyle="#000",u.fillRect(0,p*f/6,f,2);u.strokeStyle="#d0d0d0",u.lineWidth=25,u.strokeRect(12,12,f-24,f-24),u.lineWidth=20,u.beginPath(),u.moveTo(20,20),u.lineTo(f-20,f-20),u.stroke()},{color:!1}),h=Ii(256,(u,f)=>{for(let p=0;p<f;p+=16){let x=u.createLinearGradient(p,0,p+16,0);x.addColorStop(0,"#202020"),x.addColorStop(.3,"#e0e0e0"),x.addColorStop(.7,"#e0e0e0"),x.addColorStop(1,"#202020"),u.fillStyle=x,u.fillRect(p,0,16,f)}u.fillStyle="#f0f0f0",u.fillRect(0,0,f,10),u.fillRect(0,f-10,f,10)},{color:!1}),c=(u,f)=>Ii(512,(p,x)=>{p.fillStyle=u,p.fillRect(0,0,x,x);for(let m=0;m<x;m+=32){let g=p.createLinearGradient(m,0,m+32,0);g.addColorStop(0,"rgba(0,0,0,0.28)"),g.addColorStop(.4,"rgba(255,255,255,0.1)"),g.addColorStop(1,"rgba(0,0,0,0.28)"),p.fillStyle=g,p.fillRect(m,0,32,x)}ma(p,x,26,t,"70,35,12",.3),js(p,x,5e3,.07,t),p.fillStyle="rgba(0,0,0,0.4)",p.fillRect(0,0,x,18),p.fillRect(0,x-18,x,18),p.fillStyle="rgba(255,255,255,0.75)",p.font="bold 54px Helvetica, Arial",p.fillText(f,60,150),p.font="bold 22px Menlo, monospace",p.fillText("MAX GROSS 30,480 KG",60,190)}),d=u=>new pe(u);this.mat={floor:d({map:e,bumpMap:i,bumpScale:.6,roughnessMap:s,roughness:1,metalness:.02,envMapIntensity:.9}),wall:d({map:r,bumpMap:a,bumpScale:.8,roughness:.93}),wallDark:d({map:r,bumpMap:a,bumpScale:.8,roughness:.9,color:10130314}),crate:d({map:o,bumpMap:l,bumpScale:1.2,roughness:.82}),metal:d({color:2764081,metalness:.85,roughness:.45}),barrier:d({map:r,bumpMap:a,bumpScale:.8,roughness:.88,color:13222582}),cont:[["#9c3a26","KARGO"],["#27527e","OCEANIC"],["#3e6e3b","EVERLINE"],["#b98a1e","SOLAR"],["#1f7a78","TIDE"],["#b9b9b4","NORD"]].map(([u,f])=>d({map:c(u,f),bumpMap:h,bumpScale:2.5,roughness:.55,metalness:.35}))}}box(t,e,i,s,r,a,{y:o=0,tile:l=3,collide:h=!0,cast:c=!0,nav:d=!0}={}){let u=new kt(z_(i,r,s,l),a);if(u.position.set(t,o+r/2,e),u.castShadow=c,u.receiveShadow=!0,this.scene.add(u),h){let f={minX:t-i/2,maxX:t+i/2,minY:o,maxY:o+r,minZ:e-s/2,maxZ:e+s/2,active:!0,nav:d};return this.colliders.push(f),f}return u}_buildMap(){let t=this.mat,e=this.scene,i=new kt(new mi(2*Jt+2,2*Jt+2),t.floor);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i);let s=2*Jt+2;this.box(0,-Jt-.5,s,1,7,t.wall),this.box(0,Jt+.5,s,1,7,t.wall),this.box(-Jt-.5,0,1,s,7,t.wall),this.box(Jt+.5,0,1,s,7,t.wall);for(let _ of[-24,-12,0,12,24])this.box(_,-Jt+.3,1.2,.6,7.5,t.wallDark),this.box(_,Jt-.3,1.2,.6,7.5,t.wallDark),this.box(-Jt+.3,_,.6,1.2,7.5,t.wallDark),this.box(Jt-.3,_,.6,1.2,7.5,t.wallDark);let r=new xe({color:new Tt(3.2,1.3,.45)});for(let[_,M,C,A]of[[0,-Jt+.02,s-2,.06],[0,Jt-.02,s-2,.06],[-Jt+.02,0,.06,s-2],[Jt-.02,0,.06,s-2]]){let P=new kt(new Te(C,.07,A),r);P.position.set(_,6.2,M),e.add(P)}for(let _ of[-1,1])for(let M of[-1,1])this.box(_*4.6,M*4.6,.9,.9,4.3,t.wallDark,{tile:2});this.box(0,0,11.4,11.4,.45,t.metal,{y:4.3,nav:!1});let a=new xe({color:new Tt(.25,2.6,3.4)});for(let[_,M,C,A]of[[0,-5.3,10.2,.08],[0,5.3,10.2,.08],[-5.3,0,.08,10.2],[5.3,0,.08,10.2]]){let P=new kt(new Te(C,.08,A),a);P.position.set(_,4.22,M),e.add(P)}let o=new gi(5629695,55,16,2);o.position.set(0,3.7,0),e.add(o),this.lamps.push({light:o,base:55,flicker:.04});let l=t.cont,h=[6.06,2.44],c=[2.44,6.06],d=(_,M,C,A,P=0)=>this.box(_,M,C[0],C[1],2.6,l[A],{y:P,tile:2.6});d(-15,-11,h,0),d(-14.3,-11,h,1,2.6),d(16,9,c,1),d(13,-17,h,2),d(-17,15,c,3),d(7,17.5,h,4),d(-5,-21,c,0),d(24.5,-8,c,5),d(24.5,-8.4,c,2,2.6);let u=(_,M,C,A)=>this.box(_,M,C,A,3.4,t.wall,{tile:3.4});u(-23,1,.5,9),u(22.5,4.5,.5,7),u(2,-12,8,.5),u(-8.5,11.5,.5,7);let f=(_,M,C)=>{this.box(_,M,C?3.6:.6,C?.6:3.6,1.1,t.barrier,{tile:2.2});let A=new kt(new Te(C?3.62:.62,.12,C?.62:3.62),this._hazardMat());A.position.set(_,1,M),e.add(A)};f(8.5,-9,!0),f(-9.5,-16,!1),f(10.5,2.5,!1),f(20,17,!0),f(-21,-19,!0),f(-25,22,!0),f(27,-21,!1),f(0,12.5,!0),f(-13,3,!0),f(15,-3.5,!0);let p=(_,M,C=1.2,A=0)=>this.box(_,M,C,C,C,t.crate,{y:A,tile:C});p(3,.6),p(1.7,.2,.8),p(-11.2,-7.4),p(-9.9,-7.6,.8),p(19,4.5),p(19.1,5.75),p(19.05,5.1,.9,1.2),p(10.8,-14.6),p(-19.5,9.5),p(-14.2,19.6),p(-14.4,20.9,.8),p(3.2,20.6),p(-3.2,-16.2),p(-3,-16.3,.8,1.2),p(21.2,-14),p(-25.4,-9),p(-26.5,-10.2),p(-25.9,-9.6,.9,1.2),p(26,12.5),p(-10.5,25.5),p(12.5,26),p(13.6,25.3,.8),p(-27,14),p(-2.6,-1.4,.8),p(17.5,-24.5),p(-18.5,-26),p(6.5,8.5),p(-6,-8.6,.9);let x=new xe({color:new Tt(4.5,2.6,1)}),m=(_,M,C,A)=>{this.box(_,M,.16,.16,5.2,t.metal,{nav:!1});let P=new kt(new Te(Math.abs(C)*1.2+.1,.1,Math.abs(A)*1.2+.1),t.metal);P.position.set(_+C*.6,5.15,M+A*.6),P.castShadow=!0,e.add(P);let N=new kt(new Te(.5,.08,.5),x);N.position.set(_+C*1.2,5.06,M+A*1.2),e.add(N);let k=new gi(16756832,90,20,2);k.position.set(_+C*1.2,4.8,M+A*1.2),e.add(k),this.lamps.push({light:k,base:90,flicker:.03,head:N})};m(-11.5,8.5,1,-1),m(11.5,-8.5,-1,1),m(-21,-23,1,1),m(21,23,-1,-1);let g=Ii(512,(_,M)=>{_.fillStyle="#000",_.fillRect(0,0,M,M),_.shadowColor="#ff2bd6",_.shadowBlur=28,_.fillStyle="#ff7ae9",_.font="bold 150px Helvetica, Arial",_.textAlign="center",_.fillText("ARENA",M/2,215),_.shadowColor="#19e6ff",_.fillStyle="#9af4ff",_.font="bold 120px Helvetica, Arial",_.fillText("\u5200\u950B 07",M/2,400)}),y=new xe({map:g,transparent:!0,blending:ci,depthWrite:!1,color:new Tt(2.6,2.6,2.6)}),S=new kt(new mi(6,6),y);S.position.set(Jt-.05,4.2,14),S.rotation.y=-Math.PI/2,e.add(S);let v=new kt(new mi(6,6),y);v.position.set(-Jt+.05,4.2,-15),v.rotation.y=Math.PI/2,e.add(v);let E=new gi(16726992,45,15,2);E.position.set(Jt-2,3.5,14),e.add(E),this.lamps.push({light:E,base:45,flicker:.12}),this._buildBarrels([[1.6,-2.2],[-12.5,-13.6],[14.4,12.8],[-15,10.5],[9.5,-12.4],[22.6,-17.6],[-21.6,-5.4],[-3.4,14.5],[19.4,-.6],[-9,-2.6],[5,25],[-24,26]]);let w=new xe({color:new Tt(5.5,.5,.25),transparent:!0,opacity:.9,side:Be,depthWrite:!1});for(let[_,M]of[[-27,-27],[27,-27],[-28,28.5],[27,27],[-6,-29],[6,-29],[-29,-6],[-29,6],[29,-4],[29,8],[18,-29],[-18,29]]){let C=new kt(new Pn(.9,1.05,40),w);C.rotation.x=-Math.PI/2,C.position.set(_,.03,M),e.add(C);let A=new kt(new Pn(.45,.5,6),w);A.rotation.x=-Math.PI/2,A.position.set(_,.03,M),e.add(A),this.spawns.push({x:_,z:M,ring:C,inner:A})}}_hazardMat(){if(!this._hz){let t=Ii(128,(e,i)=>{e.fillStyle="#e2b21a",e.fillRect(0,0,i,i),e.fillStyle="#17171a";for(let s=-i;s<i*2;s+=32)e.beginPath(),e.moveTo(s,0),e.lineTo(s+16,0),e.lineTo(s+16-i,i),e.lineTo(s-i,i),e.fill()});t.repeat.set(4,1),this._hz=new pe({map:t,roughness:.6})}return this._hz}_buildBarrels(t){let e=Ii(256,(r,a)=>{r.fillStyle="#a3261c",r.fillRect(0,0,a,a),r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(0,70,a,8),r.fillRect(0,178,a,8),r.fillStyle="#e8c21a",r.fillRect(0,104,a,48),r.fillStyle="#18181a",r.font="bold 30px Helvetica, Arial",r.fillText("\u6613\u71C3 \u26A0 FLAMMABLE \u26A0",6,139)}),i=new pe({map:e,roughness:.45,metalness:.5}),s=new _i(.33,.33,.95,18);for(let[r,a]of t){let o=new kt(s,i);o.position.set(r,.475,a),o.rotation.y=rt(6.28),o.castShadow=o.receiveShadow=!0,this.scene.add(o);let l={minX:r-.3,maxX:r+.3,minY:0,maxY:.95,minZ:a-.3,maxZ:a+.3,active:!0,nav:!1};this.colliders.push(l);let h={x:r,z:a,mesh:o,collider:l,alive:!0};l.barrel=h,this.barrels.push(h)}}resetBarrels(){for(let t of this.barrels)t.alive=!0,t.mesh.visible=!0,t.collider.active=!0}_buildNav(){this.blocked=new Uint8Array(re*re);let t=.42;for(let e=0;e<re;e++)for(let i=0;i<re;i++){let s=i-Jt+.5,r=e-Jt+.5;for(let a of this.colliders)if(!(!a.nav||a.minY>1.7||a.maxY<.3)&&s>a.minX-t&&s<a.maxX+t&&r>a.minZ-t&&r<a.maxZ+t){this.blocked[e*re+i]=1;break}}this.flow=new Int16Array(re*re),this._queue=new Int32Array(re*re)}cellOf(t,e){return yt(Math.floor(e+Jt),0,re-1)*re+yt(Math.floor(t+Jt),0,re-1)}isBlocked(t,e){return this.blocked[this.cellOf(t,e)]===1}updateFlow(t,e){let i=this.flow,s=this._queue,r=this.blocked;i.fill(-1);let a=0,o=0,l=yt(Math.floor(t+Jt),0,re-1),h=yt(Math.floor(e+Jt),0,re-1);for(let c=0;c<=3&&o===0;c++)for(let d=-c;d<=c;d++)for(let u=-c;u<=c;u++){let f=l+u,p=h+d;if(f<0||p<0||f>=re||p>=re)continue;let x=p*re+f;!r[x]&&i[x]<0&&(i[x]=0,s[o++]=x)}for(;a<o;){let c=s[a++],d=i[c]+1,u=c%re,f=c/re|0;u>0&&!r[c-1]&&i[c-1]<0&&(i[c-1]=d,s[o++]=c-1),u<re-1&&!r[c+1]&&i[c+1]<0&&(i[c+1]=d,s[o++]=c+1),f>0&&!r[c-re]&&i[c-re]<0&&(i[c-re]=d,s[o++]=c-re),f<re-1&&!r[c+re]&&i[c+re]<0&&(i[c+re]=d,s[o++]=c+re)}}flowDir(t,e,i){let s=this.flow,r=this.blocked,a=yt(Math.floor(t+Jt),0,re-1),o=yt(Math.floor(e+Jt),0,re-1),l=1e9,h=0,c=0,d=s[o*re+a];for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){if(!m&&!x)continue;let g=a+m,y=o+x;if(g<0||y<0||g>=re||y>=re)continue;let S=y*re+g;if(r[S]||s[S]<0||m&&x&&(r[o*re+g]||r[y*re+a]))continue;let v=s[S]+(m&&x?.4:0);v<l&&(l=v,h=g,c=y)}if(l>1e8)return!1;d>=0&&l>=d+.5;let u=h-Jt+.5-t,f=c-Jt+.5-e,p=Math.hypot(u,f)||1;return i.x=u/p,i.z=f/p,!0}raycast(t,e,i,s,r,a,o,l){let h=o,c=0,d=0,u=0,f=null;if(r<-1e-6){let y=-e/r;y>0&&y<h&&(h=y,d=1)}let p=1/(s||1e-12),x=1/(r||1e-12),m=1/(a||1e-12),g=this.colliders;for(let y=0;y<g.length;y++){let S=g[y];if(!S.active)continue;let v=(S.minX-t)*p,E=(S.maxX-t)*p,w=0,_=Math.min(v,E),M=Math.max(v,E);v=(S.minY-e)*x,E=(S.maxY-e)*x;let C=Math.min(v,E),A=Math.max(v,E);C>_&&(_=C,w=1),A<M&&(M=A),v=(S.minZ-i)*m,E=(S.maxZ-i)*m,C=Math.min(v,E),A=Math.max(v,E),C>_&&(_=C,w=2),A<M&&(M=A),!(M<0||_>M||_<0||_>=h)&&(h=_,f=S,c=d=u=0,w===0?c=s>0?-1:1:w===1?d=r>0?-1:1:u=a>0?-1:1)}return h>=o?1/0:(l&&(l.nx=c,l.ny=d,l.nz=u,l.collider=f),h)}blockedLine(t,e,i,s,r,a){let o=s-t,l=r-e,h=a-i,c=Math.hypot(o,l,h);return c<1e-4?!1:this.raycast(t,e,i,o/c,l/c,h/c,c-.05,null)!==1/0}moveBody(t,e,i,s,r){let a=this.colliders,o=a.length,l=!1,h,c;for(t.x+=e.x*r,h=0;h<o;h++)c=a[h],c.active&&t.x+i>c.minX&&t.x-i<c.maxX&&t.z+i>c.minZ&&t.z-i<c.maxZ&&t.y+s>c.minY&&t.y<c.maxY&&(t.x=e.x>0?c.minX-i:c.maxX+i,e.x=0);for(t.z+=e.z*r,h=0;h<o;h++)c=a[h],c.active&&t.x+i>c.minX&&t.x-i<c.maxX&&t.z+i>c.minZ&&t.z-i<c.maxZ&&t.y+s>c.minY&&t.y<c.maxY&&(t.z=e.z>0?c.minZ-i:c.maxZ+i,e.z=0);for(t.y+=e.y*r,h=0;h<o;h++)c=a[h],c.active&&t.x+i>c.minX&&t.x-i<c.maxX&&t.z+i>c.minZ&&t.z-i<c.maxZ&&t.y+s>c.minY&&t.y<c.maxY&&(e.y<=0?(t.y=c.maxY,l=!0):t.y=c.minY-s,e.y=0);return t.y<=0&&(t.y=0,e.y<0&&(e.y=0),l=!0),l}pushOut(t,e,i){let s=this.colliders;for(let r=0;r<s.length;r++){let a=s[r];if(!a.active||a.minY>i||a.maxY<.3)continue;let o=yt(t.x,a.minX,a.maxX),l=yt(t.z,a.minZ,a.maxZ),h=t.x-o,c=t.z-l,d=h*h+c*c;if(!(d>=e*e))if(d>1e-8){let u=Math.sqrt(d);t.x=o+h/u*e,t.z=l+c/u*e}else{let u=t.x-a.minX,f=a.maxX-t.x,p=t.z-a.minZ,x=a.maxZ-t.z,m=Math.min(u,f,p,x);m===u?t.x=a.minX-e:m===f?t.x=a.maxX+e:m===p?t.z=a.minZ-e:t.z=a.maxZ+e}}}sunVisible(t,e,i){let s=this.sunDir;return this.raycast(t,e,i,s.x,s.y,s.z,120,null)===1/0}update(t,e){this.time+=t,e&&(this.sunGroup.position.copy(e).addScaledVector(this.sunDir,480),this.sunGroup.lookAt(e));let i=this.time;for(let s of this.lamps){let r=Math.sin(i*13.7+s.base)*Math.sin(i*7.3+s.base*2)*s.flicker;s.light.intensity=s.base*(1+r)}this.sky.material.uniforms.time&&(this.sky.material.uniforms.time.value=i);for(let s of this.spawns)s.inner.rotation.z=i*.8}};var H_=`
attribute float size; attribute vec4 pcolor; varying vec4 vColor; uniform float scale;
void main(){ vColor = pcolor; vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`,G_=`
varying vec4 vColor;
void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d);
  gl_FragColor = vec4(vColor.rgb, vColor.a * a); }`,Tl=class{constructor(t,e,i){this.n=e,this.cursor=0,this.pos=new Float32Array(e*3).fill(-999),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Float32Array(e*4);let s=new be;s.setAttribute("position",new We(this.pos,3)),s.setAttribute("pcolor",new We(this.col,4)),s.setAttribute("size",new We(this.size,1)),this.mat=new De({vertexShader:H_,fragmentShader:G_,uniforms:{scale:{value:600}},transparent:!0,depthWrite:!1,blending:i?ci:Bn}),this.points=new Os(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=i?11:10,t.add(this.points)}emit(t,e,i,s,r,a,o,l,h,c,d,u,f=9,p=0,x=0){let m=this.cursor;this.cursor=(m+1)%this.n,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=i,this.vel[m*3]=s,this.vel[m*3+1]=r,this.vel[m*3+2]=a,this.life[m]=this.max[m]=o,this.size[m]=l,this.grav[m]=f,this.drag[m]=p,this.grow[m]=x,this.base[m*4]=h,this.base[m*4+1]=c,this.base[m*4+2]=d,this.base[m*4+3]=u}update(t){let{pos:e,vel:i,life:s,max:r,col:a,base:o,n:l}=this;for(let c=0;c<l;c++){if(s[c]<=0)continue;s[c]-=t;let d=c*3,u=c*4;if(s[c]<=0){e[d+1]=-999,a[u+3]=0;continue}let f=Math.max(0,1-this.drag[c]*t);i[d]*=f,i[d+1]=i[d+1]*f-this.grav[c]*t,i[d+2]*=f,e[d]+=i[d]*t,e[d+1]+=i[d+1]*t,e[d+2]+=i[d+2]*t,e[d+1]<.02&&this.grav[c]>0&&(e[d+1]=.02,i[d+1]*=-.35,i[d]*=.6,i[d+2]*=.6),this.size[c]+=this.grow[c]*t;let p=s[c]/r[c];a[u]=o[u],a[u+1]=o[u+1],a[u+2]=o[u+2],a[u+3]=o[u+3]*Math.min(1,p*2.2)}let h=this.points.geometry.attributes;h.position.needsUpdate=!0,h.pcolor.needsUpdate=!0,h.size.needsUpdate=!0}},El=class{constructor(t){this.scene=t,this.sparks=new Tl(t,1400,!0),this.smoke=new Tl(t,500,!1),this.tracers=[];let e=new Te(1,1,1);e.translate(0,0,.5);for(let u=0;u<28;u++){let f=new kt(e,new xe({color:16777215,transparent:!0,blending:ci,depthWrite:!1,fog:!1}));f.visible=!1,f.frustumCulled=!1,t.add(f),this.tracers.push({m:f,life:0,max:1})}this.tc=0;let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),r=s.createRadialGradient(32,32,2,32,32,30);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.28,"rgba(8,6,5,0.95)"),r.addColorStop(.4,"rgba(60,54,48,0.6)"),r.addColorStop(.7,"rgba(20,18,16,0.25)"),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,64,64);let a=new pi(i);a.colorSpace=we;let o=new xe({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),l=new mi(.16,.16);this.decals=[],this.dc=0;for(let u=0;u<90;u++){let f=new kt(l,o);f.visible=!1,t.add(f),this.decals.push(f)}this.lights=[];for(let u=0;u<3;u++){let f=new gi(16755285,0,18,2);t.add(f),this.lights.push({l:f,life:0,max:1,peak:0})}this.lc=0,this.shells=[],this.sc=0;let h=new _i(.006,.006,.026,8);h.rotateX(Math.PI/2);let c=new pe({color:14265679,metalness:1,roughness:.3});for(let u=0;u<18;u++){let f=new kt(h,c);f.visible=!1,t.add(f),this.shells.push({m:f,v:new I,w:new I,life:0,floor:0})}this.rings=[];let d=new Pn(.86,1,64);d.rotateX(-Math.PI/2);for(let u=0;u<5;u++){let f=new kt(d,new xe({color:16777215,transparent:!0,blending:ci,depthWrite:!1,side:Be}));f.visible=!1,t.add(f),this.rings.push({m:f,life:0,max:1,r0:0,r1:1})}this.debris=[],this._buildDust(),this._v=new I,this._q=new Le,this._z=new I(0,0,1)}_buildDust(){let e=new Float32Array(2100),i=new Float32Array(700);for(let a=0;a<700;a++)e[a*3]=rt(-30,30),e[a*3+1]=rt(.2,6),e[a*3+2]=rt(-30,30),i[a]=rt(100);let s=new be;s.setAttribute("position",new We(e,3)),s.setAttribute("phase",new We(i,1)),this.dustMat=new De({uniforms:{time:{value:0},scale:{value:600}},vertexShader:`attribute float phase; uniform float time; uniform float scale; varying float vA;
        void main(){ vec3 p = position; p.x += sin(time*0.11+phase)*1.4; p.y += sin(time*0.17+phase*1.7)*0.5; p.z += cos(time*0.09+phase*1.3)*1.4;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_PointSize = 0.035*scale/max(0.3,-mv.z); gl_Position = projectionMatrix*mv;
        vA = (0.5+0.5*sin(time*0.6+phase*3.0)) * smoothstep(0.6, 3.0, -mv.z) * smoothstep(30.0, 12.0, -mv.z); }`,fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord-0.5); gl_FragColor = vec4(2.2,1.6,1.0, smoothstep(0.5,0.0,d)*vA*0.55); }",transparent:!0,depthWrite:!1,blending:ci});let r=new Os(s,this.dustMat);r.frustumCulled=!1,this.scene.add(r)}burst(t,e,i,s,r,a,o,l,h=5,c=.45,d=.05){for(let u=0;u<o;u++){let f=rt(-1,1),p=rt(-1,1),x=rt(-1,1),m=Math.hypot(f,p,x)||1,g=h*rt(.3,1);f=(f/m+s*.9)*g,p=(p/m+r*.9)*g,x=(x/m+a*.9)*g,this.sparks.emit(t,e,i,f,p,x,c*rt(.5,1),d*rt(.6,1.3),l[0],l[1],l[2],1,10,1.2)}}puff(t,e,i,s,r=.3,a=.5,o=.35,l=.9,h=.6){for(let c=0;c<s;c++){let d=a*rt(.7,1.1);this.smoke.emit(t+rt(-.1,.1),e+rt(-.1,.1),i+rt(-.1,.1),rt(-h,h),rt(.1,h*1.3),rt(-h,h),l*rt(.6,1.2),r*rt(.7,1.3),d,d*.96,d*.9,o,-.3,1.5,r*1.6)}}tracer(t,e,i=16767392,s=.018,r=.07){let a=this.tracers[this.tc];this.tc=(this.tc+1)%this.tracers.length;let o=this._v.subVectors(e,t),l=o.length();l<.5||(a.m.position.copy(t),a.m.scale.set(s,s,l),a.m.quaternion.setFromUnitVectors(this._z,o.multiplyScalar(1/l)),a.m.material.color.set(i).multiplyScalar(3),a.m.material.opacity=1,a.m.visible=!0,a.life=a.max=r)}decal(t,e,i,s,r,a,o=1){let l=this.decals[this.dc];this.dc=(this.dc+1)%this.decals.length,l.position.set(t+s*.012,e+r*.012,i+a*.012),l.quaternion.setFromUnitVectors(this._z,this._v.set(s,r,a)),l.rotateZ(rt(6.28)),l.scale.setScalar(o*rt(.8,1.2)),l.visible=!0}flash(t,e,i,s,r,a=.08,o=18){let l=this.lights[this.lc];this.lc=(this.lc+1)%this.lights.length,l.l.position.set(t,e,i),l.l.color.set(s),l.l.distance=o,l.peak=r,l.life=l.max=a,l.l.intensity=r}shell(t,e,i){let s=this.shells[this.sc];this.sc=(this.sc+1)%this.shells.length,s.m.position.copy(t),s.v.copy(e),s.w.set(rt(-20,20),rt(-20,20),rt(-20,20)),s.life=1.6,s.floor=i,s.m.visible=!0}ring(t,e,i,s,r,a,o){let l=this.rings.find(h=>h.life<=0)||this.rings[0];return l.m.position.set(t,e,i),l.life=l.max=a,l.r0=s,l.r1=r,l.m.material.color.set(o).multiplyScalar(2.5),l.m.visible=!0,l}explosion(t,e,i,s=1){this.burst(t,e,i,0,.6,0,Math.floor(70*s),[4,1.6,.3],13*s,.8,.12),this.burst(t,e,i,0,.3,0,Math.floor(40*s),[5,3.5,1.2],6*s,.5,.3);for(let r=0;r<14*s;r++)this.sparks.emit(t+rt(-.5,.5)*s,e+rt(0,.8)*s,i+rt(-.5,.5)*s,rt(-2,2),rt(1,4),rt(-2,2),rt(.25,.5),rt(.9,1.8)*s,3.5,1.5,.3,.9,-2,2,2);this.puff(t,e+.5,i,Math.floor(16*s),1.1*s,.16,.6,2.2,1.6*s),this.flash(t,e+.8,i,16748608,900*s,.3,30),this.ring(t,.08,i,.5,6.5*s,.4,16756832)}addDebris(t,e,i,s,r=2.6){this.debris.push({m:t,vx:e,vy:i,vz:s,wx:rt(-9,9),wy:rt(-9,9),wz:rt(-9,9),life:r,s0:t.scale.x})}update(t,e,i,s){let r=e/(2*Math.tan(i*Math.PI/360));this.sparks.mat.uniforms.scale.value=r,this.smoke.mat.uniforms.scale.value=r,this.dustMat.uniforms.scale.value=r,this.dustMat.uniforms.time.value=s,this.sparks.update(t),this.smoke.update(t);for(let a of this.tracers)a.life<=0||(a.life-=t,a.life<=0?a.m.visible=!1:a.m.material.opacity=a.life/a.max);for(let a of this.lights)a.life<=0||(a.life-=t,a.l.intensity=a.life>0?a.peak*(a.life/a.max):0);for(let a of this.shells)if(!(a.life<=0)){if(a.life-=t,a.life<=0){a.m.visible=!1;continue}a.v.y-=12*t,a.m.position.addScaledVector(a.v,t),a.m.rotation.x+=a.w.x*t,a.m.rotation.y+=a.w.y*t,a.m.rotation.z+=a.w.z*t,a.m.position.y<a.floor+.01&&(a.m.position.y=a.floor+.01,a.v.y*=-.4,a.v.x*=.5,a.v.z*=.5,a.w.multiplyScalar(.5))}for(let a of this.rings){if(a.life<=0)continue;if(a.life-=t,a.life<=0){a.m.visible=!1;continue}let o=1-a.life/a.max,l=a.r0+(a.r1-a.r0)*o;a.m.scale.set(l,1,l),a.m.material.opacity=yt(1.2-o),a.radius=l}for(let a=this.debris.length-1;a>=0;a--){let o=this.debris[a];if(o.life-=t,o.life<=0){this.scene.remove(o.m),this.debris.splice(a,1);continue}o.vy-=14*t;let l=o.m.position;l.x+=o.vx*t,l.y+=o.vy*t,l.z+=o.vz*t,o.m.rotation.x+=o.wx*t,o.m.rotation.y+=o.wy*t,o.m.rotation.z+=o.wz*t,l.y<.12&&(l.y=.12,o.vy*=-.35,o.vx*=.6,o.vz*=.6,o.wx*=.5,o.wy*=.5,o.wz*=.5),o.life<.5&&o.m.scale.setScalar(o.s0*(o.life/.5))}}};var wl=class{constructor(){this.ctx=null,this.volume=.6}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=5,i.attack.value=.002,i.release.value=.18,this.master.connect(i),i.connect(e.destination),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let f=0;f<s.length;f++)s[f]=Math.random()*2-1;let r=Math.floor(e.sampleRate*1.6),a=e.createBuffer(2,r,e.sampleRate);for(let f=0;f<2;f++){let p=a.getChannelData(f);for(let x=0;x<r;x++)p[x]=(Math.random()*2-1)*Math.pow(1-x/r,3.2)}this.reverb=e.createConvolver(),this.reverb.buffer=a;let o=e.createGain();o.gain.value=.5,this.reverb.connect(o),o.connect(this.master);let l=e.createBufferSource();l.buffer=this.noiseBuf,l.loop=!0;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=320;let c=e.createGain();c.gain.value=.05;let d=e.createOscillator();d.frequency.value=.13;let u=e.createGain();u.gain.value=.03,d.connect(u),u.connect(c.gain),d.start(),l.connect(h),h.connect(c),c.connect(this.master),l.start()}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_out(t,e,i){let s=this.ctx,r=t;if(i){let a=s.createStereoPanner();a.pan.value=Math.max(-1,Math.min(1,i)),t.connect(a),r=a}if(r.connect(this.master),e>0){let a=s.createGain();a.gain.value=e,r.connect(a),a.connect(this.reverb)}}nz(t,e,i,s,r,{when:a=0,q:o=1,wet:l=0,pan:h=0,attack:c=.001}={}){let d=this.ctx;if(!d)return;let u=d.currentTime+a,f=d.createBufferSource();f.buffer=this.noiseBuf,f.loop=!0;let p=d.createBiquadFilter();p.type=e,p.Q.value=o,p.frequency.setValueAtTime(i,u),p.frequency.exponentialRampToValueAtTime(Math.max(s,20),u+t);let x=d.createGain();x.gain.setValueAtTime(1e-4,u),x.gain.linearRampToValueAtTime(r,u+c),x.gain.exponentialRampToValueAtTime(8e-4,u+t),f.connect(p),p.connect(x),this._out(x,l,h),f.start(u,Math.random()),f.stop(u+t+.03)}tone(t,e,i,s,r,{when:a=0,wet:o=0,pan:l=0,attack:h=.001}={}){let c=this.ctx;if(!c)return;let d=c.currentTime+a,u=c.createOscillator();u.type=e,u.frequency.setValueAtTime(i,d),u.frequency.exponentialRampToValueAtTime(Math.max(s,20),d+t);let f=c.createGain();f.gain.setValueAtTime(1e-4,d),f.gain.linearRampToValueAtTime(r,d+h),f.gain.exponentialRampToValueAtTime(8e-4,d+t),u.connect(f),this._out(f,o,l),u.start(d),u.stop(d+t+.03)}rifle(){this.nz(.26,"lowpass",5200,260,1,{wet:.5}),this.nz(.04,"highpass",4500,2500,.5),this.tone(.14,"square",170,38,.38),this.tone(.05,"sawtooth",900,200,.12)}pistol(){this.nz(.3,"lowpass",4200,180,1.1,{wet:.7}),this.nz(.03,"highpass",5e3,3e3,.5),this.tone(.2,"square",130,30,.5)}awp(){this.nz(.6,"lowpass",3600,90,1.3,{wet:1}),this.nz(.05,"highpass",4e3,2e3,.6),this.tone(.35,"square",110,24,.6),this.tone(.5,"sine",60,30,.5)}dry(){this.click(0,.7)}click(t=0,e=1,i=.6){this.nz(.035,"bandpass",4200*e,3e3*e,i,{when:t,q:6}),this.tone(.03,"triangle",2600*e,1800*e,i*.3,{when:t})}magOut(){this.click(0,.6,.6),this.nz(.12,"bandpass",1200,500,.35,{when:.02,q:2})}magIn(){this.nz(.08,"bandpass",900,1600,.4,{q:2}),this.click(.07,.75,.8),this.tone(.06,"sine",260,120,.3,{when:.07})}bolt(){this.click(0,.9,.7),this.nz(.09,"bandpass",2400,1200,.4,{when:.03,q:3}),this.click(.13,.7,.8)}swish(t,e=0){this.nz(t?.3:.18,"bandpass",t?600:1300,t?2600:4400,.55,{when:e,q:1.5,attack:.03})}shing(t=0,e=1){[3100,4700,6300].forEach((i,s)=>this.tone(.36-s*.06,"sine",i,i*.985,.07*e,{when:t,wet:.4})),this.nz(.16,"highpass",6e3,3e3,.1*e,{when:t})}stab(){this.nz(.13,"lowpass",1e3,150,.9),this.tone(.1,"sine",120,50,.5),this.tone(.07,"square",1700,700,.12)}clank(){this.tone(.16,"triangle",1900,1500,.3,{wet:.4}),this.tone(.1,"sine",3200,2900,.12),this.nz(.06,"bandpass",3e3,2e3,.5,{q:3})}draw(){this.nz(.12,"bandpass",800,2400,.25,{q:1.2,attack:.03}),this.click(.1,.8,.4)}scope(){this.click(0,1.4,.3)}hit(){this.tone(.05,"square",1500,1e3,.13),this.nz(.03,"highpass",3e3,2e3,.15)}head(){this.tone(.14,"sine",2300,1900,.3,{wet:.3}),this.tone(.1,"sine",3450,3100,.16,{when:.02}),this.nz(.05,"bandpass",2600,1800,.3,{q:3})}kill(){this.tone(.09,"sine",880,880,.2),this.tone(.16,"sine",1320,1320,.2,{when:.07,wet:.3})}hurt(){this.nz(.16,"lowpass",700,200,.7),this.tone(.16,"sawtooth",190,90,.25)}shieldHit(){this.tone(.12,"sine",700,1400,.16),this.nz(.08,"bandpass",2e3,3e3,.2,{q:2})}step(t){this.nz(.07,"lowpass",t?620:480,110,t?.24:.16)}land(){this.nz(.12,"lowpass",420,80,.5),this.tone(.1,"sine",90,45,.3)}jump(){this.nz(.08,"lowpass",500,200,.18)}pickup(){this.tone(.1,"sine",660,990,.22),this.tone(.16,"sine",990,1320,.18,{when:.08,wet:.3})}ui(){this.tone(.05,"sine",900,1200,.12)}equip(){this.click(0,1.1,.4),this.tone(.14,"sine",520,1040,.14,{when:.02,wet:.3})}perk(){[523,659,784,1047].forEach((t,e)=>this.tone(.3,"sine",t,t,.15,{when:e*.07,wet:.5}))}wave(){this.tone(.3,"sawtooth",196,196,.11,{wet:.6}),this.tone(.5,"sawtooth",294,294,.11,{when:.26,wet:.6}),this.tone(.6,"sine",588,588,.08,{when:.26,wet:.6})}boss(){this.tone(1.4,"sawtooth",55,48,.4,{wet:.8,attack:.2}),this.tone(1.4,"sawtooth",82,73,.25,{wet:.8,attack:.2}),this.nz(1.2,"lowpass",200,60,.5,{wet:.6,attack:.3})}dead(){this.tone(.9,"sawtooth",220,40,.3,{wet:.7}),this.nz(.7,"lowpass",900,80,.5,{wet:.5})}enemyShot(t,e){this.tone(.16,"sawtooth",1500,260,.2*t,{pan:e,wet:.3}),this.nz(.1,"bandpass",2600,800,.22*t,{pan:e,q:2})}enemyDie(t,e){this.nz(.35,"lowpass",2400,120,.7*t,{pan:e,wet:.5}),this.tone(.3,"square",320,40,.25*t,{pan:e}),this.tone(.2,"sawtooth",1800,200,.1*t,{pan:e,when:.03})}spawn(t,e){this.tone(.4,"sine",180,720,.14*t,{pan:e,wet:.5,attack:.1})}explosion(t,e){this.nz(1.1,"lowpass",2200,50,1.5*t,{pan:e,wet:1}),this.tone(.7,"sine",85,26,.9*t,{pan:e}),this.nz(.1,"highpass",2500,1200,.5*t,{pan:e})}slam(t){this.tone(.5,"sine",70,28,.9*t),this.nz(.5,"lowpass",600,60,.9*t,{wet:.8})}charge(t,e){this.tone(.35,"sawtooth",300,1400,.09*t,{pan:e,attack:.2})}ricochet(t){let e=rt(2200,4200);this.tone(.22,"sine",e,e*.55,.06,{pan:t,wet:.4})}};var V_=19,W_=7.1,X_=5.3,q_=7.4,Y_=2.7,ga=.36,Al=class{constructor(t){this.game=t,this.pos=new I,this.vel=new I,this.reset()}reset(){this.pos.set(0,0,24),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recP=0,this.recY=0,this.maxHp=1e3,this.hp=1e3,this.armor=0,this.dead=!1,this.height=1.8,this.eye=1.66,this.crouchK=0,this.onGround=!0,this.sprinting=!1,this.speed2d=0,this.stepDist=0,this.landDip=0,this.strafeTilt=0,this.coyote=0,this.jumpBuf=0,this.shakeT=0,this.hurtT=0,this.fov=78,this.regenT=0,this.deadK=0,this.airMax=0}addRecoil(t,e){this.recP+=t,this.recY+=e}look(t,e,i){this.yaw-=t*i,this.pitch=yt(this.pitch-e*i,-1.5,1.5)}damage(t,e,i){if(this.dead||this.game.won||this.game.state!=="playing")return;let s=this.game,r=t;if(this.armor>0){let a=Math.min(this.armor,r*.6);this.armor-=a,r-=a,s.audio.shieldHit()}this.hp-=r,this.hurtT=1,this.shakeT=Math.min(.5,this.shakeT+.18),this.regenT=5,this.recP+=rt(.008,.02),this.recY+=rt(-.015,.015),s.audio.hurt(),s.ui.damageFrom(Math.atan2(e-this.pos.x,i-this.pos.z)),this.hp<=0&&(this.hp=0,this.dead=!0,s.onPlayerDead())}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}update(t,e){let i=this.game,s=i.world,r=i.weapons,a=e.keys,o=0,l=0;this.dead||(a.KeyW&&(l-=1),a.KeyS&&(l+=1),a.KeyA&&(o-=1),a.KeyD&&(o+=1));let h=Math.hypot(o,l);h>0&&(o/=h,l/=h);let c=Math.sin(this.yaw),d=Math.cos(this.yaw),u=o*d+l*c,f=-o*c+l*d,p=!this.dead&&(a.ControlLeft||a.KeyC),x=p;!p&&this.crouchK>.05&&s.raycast(this.pos.x,this.pos.y+1,this.pos.z,0,1,0,.85,null)!==1/0&&(x=!0),this.crouchK=Ne(this.crouchK,x?1:0,14,t),this.height=ve(1.8,1.25,this.crouchK),this.eye=ve(1.66,1.12,this.crouchK),this.sprinting=!this.dead&&a.ShiftLeft&&l<0&&!x&&this.onGround&&!r.scoped&&r.state!=="reload";let m=x?Y_:this.sprinting?q_:X_;m*=r.def.moveMul*(r.scoped?.5:1)*(1+.08*(i.perks.speed||0));let g=this.vel;if(this.onGround){let P=Math.hypot(g.x,g.z);if(P>0){let k=Math.max(P,2)*11*t,L=Math.max(0,P-k)/P;g.x*=L,g.z*=L}g.x+=u*70*t,g.z+=f*70*t;let N=Math.hypot(g.x,g.z);N>m&&(g.x*=m/N,g.z*=m/N)}else{g.x+=u*14*t,g.z+=f*14*t;let A=Math.hypot(g.x,g.z),P=Math.max(m,this.airMax||m);A>P&&(g.x*=P/A,g.z*=P/A)}this.jumpBuf-=t,this.coyote-=t,e.pressed.Space&&!this.dead&&(this.jumpBuf=.12),this.onGround&&(this.coyote=.1),this.jumpBuf>0&&this.coyote>0&&(g.y=W_,this.jumpBuf=0,this.coyote=0,this.onGround=!1,this.airMax=Math.hypot(g.x,g.z),i.audio.jump()),g.y-=V_*t;let y=this.onGround,S=g.y;if(this.onGround=s.moveBody(this.pos,g,ga,this.height,t),this.pos.x=yt(this.pos.x,-Jt+ga,Jt-ga),this.pos.z=yt(this.pos.z,-Jt+ga,Jt-ga),this.onGround&&!y&&S<-4&&(this.landDip=yt(-S*.012,0,.14),i.audio.land()),this.landDip=Ne(this.landDip,0,8,t),this.speed2d=Math.hypot(g.x,g.z),this.onGround&&this.speed2d>1.5&&(this.stepDist+=this.speed2d*t,this.stepDist>(this.sprinting?2.3:2)&&(this.stepDist=0,x||i.audio.step(this.sprinting))),!this.dead){this.regenT-=t;let C=this.maxHp*.3;this.regenT<=0&&this.hp<C&&(this.hp=Math.min(C,this.hp+this.maxHp*.03*t))}this.recP=Ne(this.recP,0,r.cd>-.08?3.5:9,t),this.recY=Ne(this.recY,0,7,t),this.hurtT=Math.max(0,this.hurtT-t*1.6),this.shakeT=Math.max(0,this.shakeT-t*1.8);let v=i.camera,E=this.shakeT*this.shakeT,w=-(g.x*d-g.z*c);this.strafeTilt=Ne(this.strafeTilt,yt(w/7,-1,1)*.02,8,t);let _=this.onGround?Math.sin(r.bob*2)*.012*yt(this.speed2d/5):0;v.position.set(this.pos.x,this.pos.y+this.eye-this.landDip+_,this.pos.z),this.dead&&(this.deadK=Math.min(1,(this.deadK||0)+t*1.2),v.position.y-=this.deadK*1.1),v.rotation.set(yt(this.pitch+this.recP,-1.55,1.55)+rt(-1,1)*E*.08,this.yaw+this.recY+rt(-1,1)*E*.08,this.strafeTilt+rt(-1,1)*E*.06+(this.dead?this.deadK*.7:0));let M=r.scoped?20:78+(this.sprinting?6:0);this.fov=Ne(this.fov,M,r.scoped?22:9,t),Math.abs(v.fov-this.fov)>.01&&(v.fov=this.fov,v.updateProjectionMatrix())}};var xa=new I;function Li(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;xa.copy(t),xa[i]=0,xa.normalize();let h=.5*a/(a+o),c=1-xa.angleTo(n)/l;return Math.sign(xa[e])===1?c*h:o/(a+o)+h+h*(1-c)}var Rl=class n extends Te{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,h=new I,c=new I(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new I,m=.5/a;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),h.copy(l),h.x-=Math.sign(h.x)*m,h.y-=Math.sign(h.y)*m,h.z-=Math.sign(h.z)*m,h.normalize(),d[g+0]=c.x*Math.sign(l.x)+h.x*r,d[g+1]=c.y*Math.sign(l.y)+h.y*r,d[g+2]=c.z*Math.sign(l.z)+h.z*r,u[g+0]=h.x,u[g+1]=h.y,u[g+2]=h.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[y+0]=Li(x,h,"z","y",r,i),f[y+1]=1-Li(x,h,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-Li(x,h,"z","y",r,i),f[y+1]=1-Li(x,h,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-Li(x,h,"x","z",r,t),f[y+1]=Li(x,h,"z","x",r,i);break;case 3:x.set(0,-1,0),f[y+0]=1-Li(x,h,"x","z",r,t),f[y+1]=1-Li(x,h,"z","x",r,i);break;case 4:x.set(0,0,1),f[y+0]=1-Li(x,h,"x","y",r,t),f[y+1]=1-Li(x,h,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=Li(x,h,"x","y",r,t),f[y+1]=1-Li(x,h,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};function tf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new be;l.morphTargetsRelative=o;let h=0;for(let c=0;c<n.length;++c){let d=n[c],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(e){let c=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+c);c+=n[u].attributes.position.count}l.setIndex(d)}for(let c in r){let d=jd(r[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in a){let d=a[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[c].length;++x)f.push(a[c][x][u]);let p=jd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(p)}}}return l}function jd(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let c=n[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let a=new t(r),o=new We(a,e,i),l=0;for(let h=0;h<n.length;++h){let c=n[h];if(c.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=c.count;u<f;u++)for(let p=0;p<e;p++){let x=c.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(c.array,l);l+=c.count*e}return s!==void 0&&(o.gpuType=s),o}function ef(n,t=Math.PI/3){let e=n.index?n.toNonIndexed():n,i=e.attributes.position,s=i.count,r;if(i.isBufferAttribute===!0&&i.itemSize===3&&i.normalized===!1)r=i.array;else{r=new Float64Array(s*3);for(let v=0;v<s;v++)r[3*v+0]=i.getX(v),r[3*v+1]=i.getY(v),r[3*v+2]=i.getZ(v)}let a=Math.cos(t),o=(1+1e-10)*100,l=s/3,h=new Float64Array(l*3);for(let v=0;v<l;v++){let E=9*v,w=r[E+0],_=r[E+1],M=r[E+2],C=r[E+3],A=r[E+4],P=r[E+5],N=r[E+6],k=r[E+7],L=r[E+8],z=N-C,V=k-A,G=L-P,et=w-C,X=_-A,J=M-P,j=V*J-G*X,Et=G*et-z*J,Nt=z*X-V*et,Y=1/(Math.sqrt(j*j+Et*Et+Nt*Nt)||1);h[3*v+0]=j*Y,h[3*v+1]=Et*Y,h[3*v+2]=Nt*Y}let c=new Int32Array(s),d=new Float64Array(s*3),u=1;for(;u<s*2;)u<<=1;let f=u-1,p=new Int32Array(u),x=0;for(let v=0;v<s;v++){let E=3*v,w=Math.trunc(r[E+0]*o),_=Math.trunc(r[E+1]*o),M=Math.trunc(r[E+2]*o),C=(Math.imul(w,73856093)^Math.imul(_,19349663)^Math.imul(M,83492791))&f;for(;;){let A=p[C];if(A===0){let N=3*x;d[N+0]=w,d[N+1]=_,d[N+2]=M,p[C]=x+1,c[v]=x++;break}let P=3*(A-1);if(d[P+0]===w&&d[P+1]===_&&d[P+2]===M){c[v]=A-1;break}C=C+1&f}}let m=new Int32Array(x+1);for(let v=0;v<s;v++)m[c[v]+1]++;for(let v=0;v<x;v++)m[v+1]+=m[v];let g=new Int32Array(s),y=m.slice(0,x);for(let v=0;v<l;v++){let E=3*v;g[y[c[E+0]]++]=v,g[y[c[E+1]]++]=v,g[y[c[E+2]]++]=v}let S=new Float32Array(s*3);for(let v=0;v<l;v++){let E=3*v,w=h[E+0],_=h[E+1],M=h[E+2];for(let C=0;C<3;C++){let A=E+C,P=c[A],N=0,k=0,L=0;for(let V=m[P],G=m[P+1];V<G;V++){let et=3*g[V],X=h[et+0],J=h[et+1],j=h[et+2];w*X+_*J+M*j>a&&(N+=X,k+=J,L+=j)}let z=1/(Math.sqrt(N*N+k*k+L*L)||1);S[3*A+0]=N*z,S[3*A+1]=k*z,S[3*A+2]=L*z}}return e.setAttribute("normal",new We(S,3,!1)),e}var gh=[{name:"\u57FA\u7840",color:"#9fb2c6"},{name:"\u519B\u89C4\u7EA7",color:"#4b69ff"},{name:"\u53D7\u9650",color:"#8847ff"},{name:"\u4FDD\u5BC6",color:"#d32ce6"},{name:"\u9690\u79D8",color:"#eb4b4b"},{name:"\u2605 \u7F55\u89C1",color:"#ffcf40"}],af=n=>[parseInt(n.slice(1,3),16)/255,parseInt(n.slice(3,5),16)/255,parseInt(n.slice(5,7),16)/255],er=(n,t,e)=>{let i=yt((e-n)/(t-n));return i*i*(3-2*i)};function ir(n,t,e){t=yt(t);for(let s=1;s<n.length;s++)if(t<=n[s][0]){let r=n[s-1],a=n[s],o=(t-r[0])/(a[0]-r[0]||1);return e[0]=ve(r[1][0],a[1][0],o),e[1]=ve(r[1][1],a[1][1],o),e[2]=ve(r[1][2],a[1][2],o),e}let i=n[n.length-1][1];return e[0]=i[0],e[1]=i[1],e[2]=i[2],e}var nr=n=>n.map(([t,e])=>[t,af(e)]);function wi(n,t,e,i,s=2){let r=Math.ceil(t/s),a=Math.ceil(e/s),o=document.createElement("canvas");o.width=r,o.height=a;let l=o.getContext("2d"),h=l.createImageData(r,a),c=h.data,d=[0,0,0],u=0;for(let f=0;f<a;f++)for(let p=0;p<r;p++)i((p+.5)/r,(f+.5)/a,d),c[u++]=yt(d[0])*255,c[u++]=yt(d[1])*255,c[u++]=yt(d[2])*255,c[u++]=255;l.putImageData(h,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(o,0,0,t,e)}function tr(n,t,e,i,s,r){for(let a=0;a<i;a++){let o=r()>.5?255:0;n.fillStyle=`rgba(${o},${o},${o},${s*r()})`,n.fillRect(r()*t,r()*e,1+r()*2,1+r()*1.5)}}function Pl(n,t,e,i,s,r="rgba(255,255,255,0.12)"){n.strokeStyle=r,n.lineWidth=1;for(let a=0;a<i;a++){let o=s()*t,l=s()*e,h=10+s()*60,c=(s()-.5)*.5;n.globalAlpha=.3+s()*.7,n.beginPath(),n.moveTo(o,l),n.lineTo(o+Math.cos(c)*h,l+Math.sin(c)*h),n.stroke()}n.globalAlpha=1}function Cl(n,t){let e=nr(n);return(i,s,r)=>wi(i,s,r,(a,o,l)=>{let h=me(a*3.2+5,o*1.3+9,3,t),c=me(a*2.2-3,o*1.1+2,3,t+40),d=me(a*4.5+h*3.2,o*1.6+c*3.2,4,t+80);ir(e,yt((d-.25)*2),l);let u=.85+.3*me(a*30,o*8,2,t+3);l[0]*=u,l[1]*=u,l[2]*=u},1)}var xh=[{id:"vanilla",name:"\u539F\u7248 \xB7 \u7CBE\u94A2",rarity:1,metal:1,rough:.26,paint(n,t,e){wi(n,t,e,(i,s,r)=>{let a=me(i*3,s*90,3,1),o=me(i*60,s*4,2,2),l=.66+a*.18+o*.06;r[0]=l,r[1]=l*1.01,r[2]=l*1.03},1)}},{id:"fade",name:"\u6E10\u53D8\u4E4B\u8272",rarity:5,metal:1,rough:.14,clearcoat:1,paint(n,t,e){let i=nr([[0,"#f6c12c"],[.3,"#ff7a3c"],[.5,"#ff3f8e"],[.72,"#9b3bff"],[1,"#2f62ff"]]);wi(n,t,e,(s,r,a)=>{let o=s*.92+(r-.5)*.22+(me(s*5,r*3,3,4)-.5)*.1+.04;ir(i,o,a)},1)}},{id:"doppler",name:"\u591A\u666E\u52D2",rarity:5,metal:1,rough:.16,clearcoat:1,paint:Cl([[0,"#03040c"],[.3,"#141a66"],[.48,"#6a1fb0"],[.6,"#e21d4f"],[.74,"#3a1470"],[1,"#04040e"]],11)},{id:"gamma",name:"\u4F3D\u739B\u591A\u666E\u52D2",rarity:5,metal:1,rough:.16,clearcoat:1,paint:Cl([[0,"#020a05"],[.3,"#0b4a22"],[.5,"#1fd066"],[.62,"#c8ff3a"],[.76,"#0d5a3a"],[1,"#02100a"]],23)},{id:"ruby",name:"\u7EA2\u5B9D\u77F3",rarity:5,metal:1,rough:.12,clearcoat:1,paint:Cl([[0,"#1a0006"],[.35,"#6e0016"],[.55,"#ff1238"],[.7,"#ff5a70"],[.85,"#8a001c"],[1,"#22000a"]],31)},{id:"sapphire",name:"\u84DD\u5B9D\u77F3",rarity:5,metal:1,rough:.12,clearcoat:1,paint:Cl([[0,"#00061c"],[.35,"#04207a"],[.55,"#1668ff"],[.7,"#56c4ff"],[.85,"#0a2c9a"],[1,"#000a22"]],47)},{id:"tiger",name:"\u864E\u7259",rarity:4,metal:1,rough:.2,clearcoat:.6,paint(n,t,e){let i=nr([[0,"#ff9d00"],[.5,"#ffc21a"],[1,"#ffe46a"]]),s=af("#b85400");wi(n,t,e,(r,a,o)=>{ir(i,a*.8+r*.2,o);let l=me(r*4,a*2,3,5)*2.2,h=Math.sin(r*46+l*3+Math.sin(a*5)*1.2),c=Math.sin(r*23+l*1.5)>0?a:1-a,d=er(.35,.8,h)*er(.95,.25,c);o[0]=ve(o[0],s[0],d),o[1]=ve(o[1],s[1],d),o[2]=ve(o[2],s[2],d)},1)}},{id:"web",name:"\u6DF1\u7EA2\u4E4B\u7F51",rarity:4,metal:.75,rough:.3,clearcoat:.5,paint(n,t,e){let i=yi(77);wi(n,t,e,(r,a,o)=>{let l=me(r*8,a*3,3,6);o[0]=.62+l*.2,o[1]=.03+l*.05,o[2]=.07+l*.05},2),n.strokeStyle="#0a0406",n.lineCap="round";let s=[[t*.2,e*.3],[t*.55,e*.75],[t*.86,e*.35]];for(let[r,a]of s){let o=9+Math.floor(i()*3),l=i()*6.28,h=[];for(let c=0;c<o;c++)h.push(l+c/o*6.283+(i()-.5)*.25);n.lineWidth=2.2;for(let c of h)n.beginPath(),n.moveTo(r,a),n.lineTo(r+Math.cos(c)*t*.3,a+Math.sin(c)*t*.3),n.stroke();n.lineWidth=1.5;for(let c=14;c<t*.26;c+=13+i()*9){n.beginPath();for(let d=0;d<o;d++){let u=h[d%o],f=h[(d+1)%o]+(d+1>=o?6.283:0),p=r+Math.cos(u)*c,x=a+Math.sin(u)*c,m=r+Math.cos(f)*c,g=a+Math.sin(f)*c,y=(u+f)/2;d===0&&n.moveTo(p,x),n.quadraticCurveTo(r+Math.cos(y)*c*.82,a+Math.sin(y)*c*.82,m,g)}n.stroke()}}}},{id:"slaughter",name:"\u5C60\u592B",rarity:4,metal:1,rough:.15,clearcoat:1,paint(n,t,e){let i=nr([[0,"#7a0410"],[.3,"#d3162a"],[.5,"#ff5262"],[.7,"#c20f24"],[1,"#6a020c"]]);wi(n,t,e,(s,r,a)=>{let o=me(s*3,r*1.5,3,8),l=me(s*5+o*2,r*2+o*2,3,9),h=Math.sin(l*34)*.5+.5;ir(i,er(.2,.8,h),a)},1)}},{id:"damascus",name:"\u5927\u9A6C\u58EB\u9769\u94A2",rarity:3,metal:1,rough:.3,paint(n,t,e){wi(n,t,e,(i,s,r)=>{let a=me(i*4,s*2,4,12),o=Math.sin((s*5+a*9+i*2)*6.283)*.5+.5,l=.3+er(.25,.75,o)*.5;r[0]=l,r[1]=l,r[2]=l*1.04},1)}},{id:"bluesteel",name:"\u84DD\u94A2",rarity:2,metal:1,rough:.3,paint(n,t,e){let i=nr([[0,"#0f1622"],[.4,"#24385a"],[.7,"#4e6f9c"],[1,"#8fa9c8"]]);wi(n,t,e,(s,r,a)=>{ir(i,me(s*6,r*2.5,4,14)*1.3-.1,a)},1),Pl(n,t,e,40,yi(5),"rgba(200,220,255,0.18)")}},{id:"night",name:"\u6697\u591C",rarity:2,metal:.6,rough:.5,paint(n,t,e){n.fillStyle="#101216",n.fillRect(0,0,t,e);let i=yi(9);tr(n,t,e,2500,.08,i),Pl(n,t,e,25,i,"rgba(180,190,200,0.2)")}},{id:"lava",name:"\u7194\u5CA9",rarity:4,metal:.4,rough:.55,emissiveIntensity:3,paint(n,t,e){wi(n,t,e,(i,s,r)=>Il(i*9,s*2.3,r,!1),1)},emissive(n,t,e){wi(n,t,e,(i,s,r)=>Il(i*9,s*2.3,r,!0),1)}}];function Il(n,t,e,i){let s=n+me(n*1.5,t*1.5,2,3)*.6,r=t+me(n*1.5+9,t*1.5,2,4)*.6,[a,o]=mh(s,r,21),l=Math.pow(er(.16,0,o-a),1.6);if(i){e[0]=l,e[1]=l*.38,e[2]=l*.05;return}let h=.05+me(n*6,t*6,3,2)*.07;e[0]=h+l*.9,e[1]=h+l*.3,e[2]=h+l*.03}var _h=[{id:"stock",name:"\u539F\u5382",rarity:0,stock:!0},{id:"redline",name:"\u7EA2\u7EBF",rarity:3,metal:.55,rough:.38,clearcoat:.4,paint(n,t,e){n.fillStyle="#0c0d10",n.fillRect(0,0,t,e);for(let s=0;s<e;s+=8)for(let r=0;r<t;r+=8){let a=(r+s)/8&1,o=n.createLinearGradient(r,s,r+(a?8:0),s+(a?0:8));o.addColorStop(0,"#1b1d22"),o.addColorStop(1,"#090a0c"),n.fillStyle=o,n.fillRect(r,s,8,8)}let i=yi(3);n.save(),n.translate(0,e*.5),n.rotate(-.045),n.fillStyle="#d4121c",n.fillRect(-20,-e*.085,t+40,e*.17),n.fillStyle="#ff3a3a",n.fillRect(-20,-e*.085,t+40,5),n.fillStyle="#7a0a10",n.fillRect(-20,e*.085-6,t+40,6),n.fillStyle="#e8e8e8",n.fillRect(-20,-e*.13,t+40,4),n.fillRect(-20,e*.12,t+40,4),n.restore(),Pl(n,t,e,70,i,"rgba(230,230,230,0.16)"),tr(n,t,e,3e3,.06,i)}},{id:"agent",name:"\u661F\u9645\u7279\u5DE5",rarity:4,metal:.25,rough:.42,clearcoat:.7,paint(n,t,e){let i=yi(42);n.fillStyle="#eceae4",n.fillRect(0,0,t,e);let s=(r,a)=>{n.fillStyle=a,n.beginPath(),r.forEach(([o,l],h)=>h?n.lineTo(o*t,l*e):n.moveTo(o*t,l*e)),n.closePath(),n.fill()};for(let r=0;r<9;r++){let a=i(),o=i(),l=.08+i()*.16,h=.1+i()*.3,c=(i()-.5)*.2;s([[a,o],[a+l,o+c*.4],[a+l+c,o+h],[a+c*.6,o+h*.85]],"#15161a")}for(let r=0;r<7;r++){let a=i(),o=i(),l=.05+i()*.14,h=.06+i()*.22,c=(i()-.5)*.25;s([[a,o],[a+l,o-c*.3],[a+l+c,o+h],[a+c,o+h]],"#ff7a14")}n.strokeStyle="#15161a",n.lineWidth=3;for(let r=0;r<10;r++){let a=i()*t,o=i()*e;n.beginPath(),n.moveTo(a,o),n.lineTo(a+60+i()*200,o),n.lineTo(a+100+i()*240,o+(i()-.5)*120),n.stroke()}n.fillStyle="#15161a",n.font="bold 26px Menlo, monospace",["XR-07","SECTOR 9","A-113","\u25B2 CAUTION"].forEach(r=>n.fillText(r,i()*t*.8,40+i()*(e-60))),tr(n,t,e,5e3,.07,i),Pl(n,t,e,50,i,"rgba(60,60,60,0.25)")}},{id:"neon",name:"\u9713\u8679\u5E7B\u5F69",rarity:4,metal:.5,rough:.3,clearcoat:1,emissiveIntensity:.16,paint(n,t,e){nf(n,t,e,1)},emissive(n,t,e){nf(n,t,e,.9)}},{id:"dragon",name:"\u708E\u9F99",rarity:5,metal:.8,rough:.3,clearcoat:.8,paint(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#2a0503"),i.addColorStop(.5,"#6e0d05"),i.addColorStop(1,"#1c0302"),n.fillStyle=i,n.fillRect(0,0,t,e);let s=34;for(let a=0;a*s*.55<e+s;a++)for(let o=-1;o*s<t+s;o++){let l=o*s+(a&1?s/2:0),h=a*s*.55,c=me(l/160,h/160,3,5),d=n.createRadialGradient(l,h+s*.2,2,l,h,s*.62);d.addColorStop(0,c>.5?"#ffd35a":"#ff8a1e"),d.addColorStop(.55,c>.5?"#d9860f":"#b3260a"),d.addColorStop(1,"#3a0703"),n.fillStyle=d,n.beginPath(),n.arc(l,h,s*.56,0,Math.PI),n.fill(),n.strokeStyle="rgba(20,2,0,0.8)",n.lineWidth=2,n.stroke()}let r=yi(8);n.globalCompositeOperation="lighter";for(let a=0;a<14;a++){let o=r()*t,l=e*(.6+r()*.5),h=n.createLinearGradient(o,l,o+80,l-180);h.addColorStop(0,"rgba(255,190,40,0.55)"),h.addColorStop(1,"rgba(255,60,0,0)"),n.fillStyle=h,n.beginPath(),n.moveTo(o,l),n.bezierCurveTo(o+50,l-60,o-30,l-120,o+60+r()*60,l-200-r()*80),n.bezierCurveTo(o+30,l-110,o+90,l-50,o+60,l),n.fill()}n.globalCompositeOperation="source-over"}},{id:"gold",name:"\u9EC4\u91D1\u65F6\u4EE3",rarity:5,metal:1,rough:.22,clearcoat:.3,paint(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#f2c14a"),i.addColorStop(.5,"#d9a12a"),i.addColorStop(1,"#b8811a"),n.fillStyle=i,n.fillRect(0,0,t,e);let s=yi(19);n.lineCap="round";for(let r=0;r<46;r++){let a=s()*t,o=s()*e,l=s()*6.28,h=26+s()*40;n.strokeStyle="rgba(92,56,6,0.75)",n.lineWidth=3,n.beginPath();for(let c=0;c<40;c++){let d=h*(1-c/44),u=a+Math.cos(l+c*.32)*d,f=o+Math.sin(l+c*.32)*d;c?n.lineTo(u,f):n.moveTo(u,f)}n.stroke(),n.strokeStyle="rgba(255,240,170,0.5)",n.lineWidth=1,n.beginPath();for(let c=0;c<40;c++){let d=h*(1-c/44)-2.5,u=a+Math.cos(l+c*.32)*d,f=o+Math.sin(l+c*.32)*d;c?n.lineTo(u,f):n.moveTo(u,f)}n.stroke(),n.fillStyle="rgba(92,56,6,0.55)";for(let c=0;c<3;c++){let d=l+c*2.1,u=a+Math.cos(d)*h*1.1,f=o+Math.sin(d)*h*1.1;n.beginPath(),n.ellipse(u,f,11,4.5,d+.8,0,6.3),n.fill()}}tr(n,t,e,2500,.05,s)}},{id:"camo",name:"\u6DF1\u6D77\u8FF7\u5F69",rarity:2,metal:.3,rough:.6,paint(n,t,e){let i=["#0d1b2e","#16395c","#2b6a94","#7fb4cf"];for(let r=0;r<e;r+=16)for(let a=0;a<t;a+=16){let o=me(a/150,r/150,3,30)+(me(a/40,r/40,2,31)-.5)*.3;n.fillStyle=i[o<.4?0:o<.52?1:o<.63?2:3],n.fillRect(a,r,16,16)}tr(n,t,e,5e3,.07,yi(4))}},{id:"lava",name:"\u7194\u5CA9\u6838\u5FC3",rarity:5,metal:.35,rough:.6,emissiveIntensity:3.2,paint(n,t,e){wi(n,t,e,(i,s,r)=>Il(i*14,s*7,r,!1),2)},emissive(n,t,e){wi(n,t,e,(i,s,r)=>Il(i*14,s*7,r,!0),2)}},{id:"thunder",name:"\u7D2B\u7535",rarity:4,metal:.6,rough:.35,clearcoat:.6,emissiveIntensity:2.6,paint(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#0b0714"),i.addColorStop(1,"#150a26"),n.fillStyle=i,n.fillRect(0,0,t,e),tr(n,t,e,4e3,.06,yi(2)),sf(n,t,e,"#b06bff","#f0deff")},emissive(n,t,e){n.fillStyle="#000",n.fillRect(0,0,t,e),sf(n,t,e,"#7a2cff","#c9a0ff")}},{id:"glacier",name:"\u51B0\u5DDD",rarity:3,metal:.4,rough:.2,clearcoat:1,paint(n,t,e){let i=nr([[0,"#0b2a4a"],[.35,"#1d6fa8"],[.6,"#7fd0f0"],[.85,"#e6faff"],[1,"#ffffff"]]);wi(n,t,e,(s,r,a)=>{let[o,l,h]=mh(s*10,r*5,5);ir(i,h*.75+(l-o)*.5,a);let c=er(.05,0,l-o);a[0]+=c*.5,a[1]+=c*.5,a[2]+=c*.5},2)}}];function nf(n,t,e,i){let s=n.createLinearGradient(0,0,t,e);s.addColorStop(0,"#ff2bd6"),s.addColorStop(.45,"#7a2cff"),s.addColorStop(1,"#19e6ff"),n.fillStyle=s,n.fillRect(0,0,t,e);let r=yi(6);for(let a=0;a<40;a++){let o=r()*t,l=r()*e,h=40+r()*150,c=r()*6.28;n.fillStyle=r()>.5?`rgba(8,4,26,${.5*i+.25})`:`rgba(255,255,255,${.14*i})`,n.beginPath();for(let d=0;d<3;d++){let u=c+d*2.094+(r()-.5);n.lineTo(o+Math.cos(u)*h,l+Math.sin(u)*h)}n.closePath(),n.fill()}n.strokeStyle="#e8ffff",n.lineWidth=2.5;for(let a=0;a<12;a++){let o=r()*t,l=r()*e;n.beginPath(),n.moveTo(o,l),n.lineTo(o+80+r()*160,l-60+r()*120),n.stroke()}i<1&&(n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,0,t,e))}function sf(n,t,e,i,s){let r=yi(64);n.lineCap="round",n.lineJoin="round";for(let a=0;a<9;a++){let o=r()*t,l=r()>.5?0:e*r(),h=.6+r()*1.6,c=[[o,l]];for(let m=0;m<16;m++)h+=(r()-.5)*1.3,o+=Math.cos(h)*(20+r()*34),l+=Math.sin(h)*(20+r()*34),c.push([o,l]);let d=(m,g,y)=>{n.shadowColor=i,n.shadowBlur=y,n.strokeStyle=g,n.lineWidth=m,n.beginPath(),c.forEach(([S,v],E)=>E?n.lineTo(S,v):n.moveTo(S,v)),n.stroke()};d(7,i,22),d(2.2,s,6);let u=3+Math.floor(r()*8),[f,p]=c[u],x=h+(r()-.5)*2;n.beginPath(),n.moveTo(f,p);for(let m=0;m<6;m++)x+=(r()-.5)*1.2,f+=Math.cos(x)*22,p+=Math.sin(x)*22,n.lineTo(f,p);n.lineWidth=1.6,n.strokeStyle=s,n.stroke()}n.shadowBlur=0}var rf=new Map;function of(n,t,e){let[i,s]=n==="gun"?[1024,512]:[512,128],r=document.createElement("canvas");return r.width=i,r.height=s,t[e](r.getContext("2d"),i,s),r}function lf(n,t){let e=n+":"+t.id,i=rf.get(e);return i||(i={canvas:t.paint?of(n,t,"paint"):null,mat:null,thumb:null},rf.set(e,i)),i}function fs(n,t){let e=n==="gun"?_h:xh;return e.find(i=>i.id===t)||e[0]}function vh(n,t){let e=fs(n,t);if(e.stock)return null;let i=lf(n,e);if(!i.mat){let s=new pi(i.canvas);s.colorSpace=we,s.anisotropy=8,s.wrapS=s.wrapT=zi;let r=new Ln({map:s,metalness:n==="knife"?Math.min(e.metal??.5,.8):e.metal??.5,roughness:e.rough??.4,clearcoat:e.clearcoat??0,clearcoatRoughness:.12,envMapIntensity:1.25});if(e.emissive){let a=new pi(of(n,e,"emissive"));a.colorSpace=we,a.wrapS=a.wrapT=zi,r.emissiveMap=a,r.emissive.set(16777215),r.emissiveIntensity=e.emissiveIntensity??2}i.mat=r}return i.mat}function cf(n,t){let e=fs(n,t);if(e.stock)return null;let i=lf(n,e);if(!i.thumb){let s=document.createElement("canvas");s.width=160,s.height=80;let r=s.getContext("2d");n==="gun"?r.drawImage(i.canvas,200,120,520,260,0,0,160,80):r.drawImage(i.canvas,0,0,i.canvas.width,i.canvas.height,0,0,160,80),i.thumb=s.toDataURL("image/jpeg",.85)}return i.thumb}var rr=Math.PI;function Z_(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new pi(i);return s.colorSpace=we,s.anisotropy=8,s.wrapS=s.wrapT=zi,s}function Ll(n,t,e){return Z_(n,t,i=>{let s=i.createImageData(n,t),r=s.data,a=[0,0,0],o=0;for(let l=0;l<t;l++)for(let h=0;h<n;h++)e(h/n,l/t,a),r[o++]=yt(a[0])*255,r[o++]=yt(a[1])*255,r[o++]=yt(a[2])*255,r[o++]=255;i.putImageData(s,0,0)})}var Dl=null;function tn(){if(Dl)return Dl;let n=Ll(512,256,(s,r,a)=>{let o=me(s*3,r*46+me(s*5,r*3,2,3)*6,4,7),l=Math.sin((r*30+me(s*2,r*2,3,9)*14)*2)*.5+.5,h=.55+o*.5+l*.18;a[0]=.47*h,a[1]=.235*h,a[2]=.09*h}),t=Ll(512,256,(s,r,a)=>{let o=me(s*14,r*9,4,2),l=me(s*90,r*6,2,5),h=.115+o*.07+(l>.72?.08:0);a[0]=h,a[1]=h*1.03,a[2]=h*1.1}),e=Ll(256,128,(s,r,a)=>{let o=.8+me(s*20,r*12,4,6)*.4;a[0]=.2*o,a[1]=.27*o,a[2]=.13*o}),i=Ll(256,128,(s,r,a)=>{let o=.62+me(s*3,r*70,3,8)*.2;a[0]=o,a[1]=o,a[2]=o*1.03});return Dl={steel:new pe({color:13225428,metalness:1,roughness:.24,envMapIntensity:1.2}),darkSteel:new pe({color:2829876,metalness:.85,roughness:.38}),black:new pe({color:328966,metalness:.4,roughness:.7}),gunmetal:new pe({map:t,metalness:.85,roughness:.42}),chrome:new pe({map:i,metalness:1,roughness:.22,envMapIntensity:1.2}),wood:new Ln({map:n,metalness:0,roughness:.5,clearcoat:.7,clearcoatRoughness:.25}),polymer:new pe({color:1250327,metalness:.1,roughness:.72}),olive:new pe({map:e,metalness:.05,roughness:.62}),oliveGrip:new pe({color:1843736,metalness:.1,roughness:.7}),g10:new pe({color:1381914,metalness:.15,roughness:.55}),titanium:new pe({color:4870753,metalness:1,roughness:.34,envMapIntensity:1.1}),brass:new pe({color:13805902,metalness:1,roughness:.28}),lens:new Ln({color:1707315,metalness:1,roughness:.04,emissive:3807880,emissiveIntensity:.35,envMapIntensity:2}),glove:new pe({color:1382170,metalness:0,roughness:.82,side:Be}),glovePad:new pe({color:2830134,metalness:.2,roughness:.5,side:Be}),sleeve:new pe({color:3818545,metalness:0,roughness:.95,side:Be})},Dl}var hf=new ge,K_=new Le,$_=new bi,J_=new I,Q_=new I,Di=class{constructor(){this.g={}}add(t,e,i=[0,0,0],s=[0,0,0],r=[1,1,1]){return hf.compose(J_.set(i[0],i[1],i[2]),K_.setFromEuler($_.set(s[0],s[1],s[2])),Q_.set(r[0],r[1],r[2])),this.addM(t,e,hf)}addM(t,e,i){let s=e.index?e.toNonIndexed():e.clone();for(let r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&s.deleteAttribute(r);return s.applyMatrix4(i),(this.g[t]||(this.g[t]=[])).push(s),e.dispose(),this}has(t){return!!this.g[t]}geo(t){let e=this.g[t];if(!e)return null;let i=tf(e,!1);return e.forEach(s=>s.dispose()),i}mesh(t,e){let i=new kt(this.geo(t),e);return i.castShadow=!0,i.name=t,i}},he=(n,t,e,i=.004)=>new Rl(n,t,e,2,Math.min(i,Math.min(n,t,e)/2-1e-4)),Ue=(n,t,e)=>new Te(n,t,e),yh=(n,t,e=16,i=n)=>new _i(i,n,t,e),Qe=(n,t,e=16,i=n)=>{let s=new _i(i,n,t,e);return s.rotateX(rr/2),s},Mh=(n,t,e=16)=>{let i=new _i(n,n,t,e);return i.rotateZ(rr/2),i};function Sh(n,t,e=.003,i){let s=new Cn;if(n.forEach(([o,l],h)=>h?s.lineTo(o,l):s.moveTo(o,l)),s.closePath(),i)for(let o of i){let l=new Rn;o.forEach(([h,c],d)=>d?l.lineTo(h,c):l.moveTo(h,c)),l.closePath(),s.holes.push(l)}let r=t-2*e,a=new zs(s,{depth:r,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:2,curveSegments:8});return a.translate(0,0,-r/2),a.rotateY(-rr/2),a}function uf(n,t,e=.002,i=2){let s=t-2*e,r=new zs(n,{depth:s,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelOffset:-e,bevelSegments:i,curveSegments:12});return r.translate(0,0,-s/2),r}function j_(n,t=0){let e=new Pi;for(let s of n)s.computeBoundingBox(),e.union(s.boundingBox);let i=e.max.z-e.min.z;for(let s of n){let r=s.attributes.position,a=s.attributes.normal,o=s.attributes.uv;for(let l=0;l<r.count;l++){let h=a.getY(l),c=Math.abs(h)>.6?(r.getX(l)+.03)*Math.sign(h):0;o.setXY(l,(r.getZ(l)-e.min.z)/(i*.5),.5+(r.getY(l)-t+c)/(i*.25))}o.needsUpdate=!0}}var sr=(n,t,e,i)=>[(1-i)*(1-i)*n[0]+2*(1-i)*i*t[0]+i*i*e[0],(1-i)*(1-i)*n[1]+2*(1-i)*i*t[1]+i*i*e[1]],Nl=n=>t=>{let e=0;for(let[i,s]of n){if(t<=i||i>=1)return s(yt((t-e)/(i-e)));e=i}return n[n.length-1][1](1)},Ul=(n,t)=>e=>[ve(n[0],t[0],e),ve(n[1],t[1],e)];function bh(n,t,{n:e=44,thick:i=.005,grind:s=.45,taper:r=.7}={}){let a=[],o=[],l=[];for(let u=0;u<=e;u++){let f=u/e,p=n(f),x=t(f),m=i/2*(1-ds(yt((f-.6)/.4))*r),g=E=>[ve(x[0],p[0],E),ve(x[1],p[1],E)],y=g(s),S=g(.9),v=[[x,0,1],[y,m,1-s],[S,m,.1],[p,0,0],[S,-m,.1],[y,-m,1-s]];for(let[E,w,_]of v)a.push(E[0],E[1],w),o.push(f,_)}for(let u=0;u<e;u++)for(let f=0;f<6;f++){let p=u*6+f,x=u*6+(f+1)%6,m=(u+1)*6+f,g=(u+1)*6+(f+1)%6;l.push(p,m,g,p,g,x)}for(let u=1;u<5;u++)l.push(0,u+1,u);let c=0;for(let u=0;u<l.length;u+=3){let f=l[u]*3,p=l[u+1]*3,x=l[u+2]*3;c+=a[f]*(a[p+1]*a[x+2]-a[p+2]*a[x+1])-a[f+1]*(a[p]*a[x+2]-a[p+2]*a[x])+a[f+2]*(a[p]*a[x+1]-a[p+1]*a[x])}if(c<0)for(let u=0;u<l.length;u+=3){let f=l[u+1];l[u+1]=l[u+2],l[u+2]=f}let d=new be;return d.setAttribute("position",new Yt(a,3)),d.setAttribute("uv",new Yt(o,2)),d.setIndex(l),d=d.toNonIndexed(),d.computeVertexNormals(),ef(d,.5)}function ps({pos:n=[0,0,0],basis:t=null,armTo:e=[.12,-.3,.5],scale:i=1}={}){let s=tn(),r=new ge;t&&r.makeBasis(new I(...t[0]),new I(...t[1]),new I(...t[2])),r.scale(new I(i,i,i)),r.setPosition(n[0],n[1],n[2]);let a=new Di;a.add("glove",he(.03,.09,.082,.013),[.031,0,.004]),a.add("glove",he(.024,.026,.062,.011),[-.022,.056,.004],[0,.35,.1]),a.add("glove",he(.03,.03,.04,.012),[.012,.052,.032],[0,.2,0]),a.add("pad",he(.012,.078,.022,.005),[.043,0,-.03]),a.add("pad",he(.01,.05,.04,.004),[.047,0,.012]);let o=[.03,0,-.03],l=new Di;for(let _=0;_<4;_++){let M=.034-_*.0225,C=_===3?-.004:0;l.add("glove",he(.064,.0205,.03,.0095),[0-o[0],M,-.035-C-o[2]]),l.add("glove",he(.026,.0205,.05,.0095),[-.031-o[0],M,-.014-C-o[2]])}let h=new te;h.matrixAutoUpdate=!1,h.matrix.copy(r),h.add(a.mesh("glove",s.glove),a.mesh("pad",s.glovePad));let c=new te;c.position.set(o[0],o[1],o[2]),c.add(l.mesh("glove",s.glove)),h.add(c);let d=new Di,u=new I(.022,-.018,.045).applyMatrix4(r),p=new I(...e).clone().sub(u),x=p.length();p.normalize();let m=new Le().setFromUnitVectors(new I(0,1,0),p),g=(_,M,C,A)=>[new _i(M*i,_*i,A-C,14),new ge().compose(u.clone().addScaledVector(p,(C+A)/2),m,new I(1,1,.85))],[y,S]=g(.036,.04,-.01,.06);d.addM("glove",y,S);let[v,E]=g(.04,.054,.05,x);d.addM("sleeve",v,E);let w=new te;return w.add(h,d.mesh("glove",s.glove),d.mesh("sleeve",s.sleeve)),w.userData.fingers=c,w}function Th(n,t){let e=tn(),i=new te,s={},r=t.paint.filter(c=>n.has(c)),a={};for(let c of Object.keys(n.g))a[c]=n.geo(c);j_(r.map(c=>a[c]),t.uvY||0);for(let c of Object.keys(a)){let d=new kt(a[c],t.stock[c]||e.darkSteel);d.castShadow=!0,d.name=c,s[c]=d}let o={};for(let[c,d]of Object.entries(t.moving||{})){let u=new te;u.name=c,d.forEach(f=>s[f]&&u.add(s[f])),o[c]=u,i.add(u)}for(let c of Object.values(s))c.parent||i.add(c);let l=new Oe;l.position.set(...t.muzzle),i.add(l);let h=new Oe;return h.position.set(...t.eject),i.add(h),{kind:"gun",group:i,parts:o,muzzle:l,eject:h,setSkin(c){let d=vh("gun",c);for(let u of r)s[u].material=d||t.stock[u]||e.darkSteel}}}function tv(){let n=tn(),t=new Di;t.add("skin",he(.044,.06,.27,.006),[0,0,0]),t.add("skin",he(.04,.028,.25,.013),[0,.035,.005]),t.add("metal",he(.03,.018,.05,.004),[0,.047,-.125]),t.add("metal",Ue(.018,.008,.004),[0,.06,-.105]),t.add("furn",he(.048,.046,.19,.014),[0,-.004,-.23]),t.add("furn",he(.04,.028,.15,.013),[0,.034,-.215]);for(let r=0;r<3;r++)t.add("dark",Ue(.05,.006,.022),[0,.012,-.175-r*.045]);t.add("furn",he(.034,.1,.046,.012),[0,-.075,.108],[-.32,0,0]),t.add("furn",Sh([[.132,.022],[.4,.004],[.405,-.1],[.385,-.106],[.132,-.028]],.036,.007)),t.add("metal",he(.038,.112,.008,.003),[0,-.049,.408],[.04,0,0]),t.add("metal",Qe(.0075,.36),[0,.008,-.43]),t.add("metal",Qe(.0085,.12),[0,.036,-.35]),t.add("metal",he(.022,.044,.026,.004),[0,.022,-.415]),t.add("metal",he(.014,.05,.022,.003),[0,.036,-.565]),t.add("metal",Ue(.003,.016,.003),[0,.068,-.565]),t.add("metal",Ue(.003,.02,.016),[.008,.066,-.565]),t.add("metal",Ue(.003,.02,.016),[-.008,.066,-.565]),t.add("metal",Qe(.0115,.045),[0,.008,-.628]),t.add("dark",Qe(.005,.002),[0,.008,-.6515]),t.add("metal",Qe(.004,.26),[0,-.012,-.44]),t.add("dark",Ue(.002,.016,.11),[.0225,.022,-.02]),t.add("bolt",Mh(.005,.03),[.035,.022,0]),t.add("metal",Ue(.002,.008,.075),[.0228,-.006,.06],[.22,0,0]),t.add("metal",Ue(.014,.003,.078),[0,-.058,.052]),t.add("metal",Ue(.014,.03,.003),[0,-.044,.014]),t.add("metal",Ue(.005,.022,.005),[0,-.042,.06],[.35,0,0]);let e=-.275,i=-.026,s=[];for(let r=0;r<=8;r++){let a=r/8*.64;s.push([e+.28*Math.cos(a),i-.28*Math.sin(a)])}for(let r=8;r>=0;r--){let a=r/8*.64;s.push([e+.218*Math.cos(a),i-.218*Math.sin(a)])}return t.add("mag",Sh(s,.03,.004)),Th(t,{paint:["skin","furn","mag"],stock:{skin:n.gunmetal,furn:n.wood,mag:n.darkSteel,dark:n.black,bolt:n.steel},moving:{mag:["mag"],bolt:["bolt"]},muzzle:[0,.008,-.66],eject:[.03,.025,-.02],uvY:.012})}function ev(){let n=tn(),t=new Di;t.add("slide",he(.03,.034,.215,.005),[0,.03,-.035]),t.add("slide",he(.016,.009,.125,.003),[0,.0495,-.07]);for(let e=0;e<6;e++)t.add("slideDark",Ue(.0312,.022,.0022),[0,.03,.03+e*.0065]);t.add("slideDark",Qe(.0068,.004),[0,.033,-.1435]),t.add("slideMetal",Ue(.004,.007,.01),[0,.057,-.125]),t.add("slideMetal",Ue(.02,.007,.007),[0,.0505,.064]),t.add("skin",he(.028,.026,.178,.005),[0,.002,-.03]),t.add("skin",he(.029,.034,.034,.008),[0,-.006,.058]),t.add("grip",he(.032,.105,.05,.013),[0,-.058,.046],[-.22,0,0]);for(let e=0;e<5;e++)t.add("dark",Ue(.0335,.004,.03),[0,-.035-e*.014,.041+e*.0032],[-.22,0,0]);return t.add("metal",Ue(.01,.003,.052),[0,-.046,-.012]),t.add("metal",Ue(.01,.036,.003),[0,-.029,-.038]),t.add("metal",Ue(.005,.02,.005),[0,-.026,.004],[.3,0,0]),t.add("metal",Ue(.008,.018,.01),[0,.02,.079],[-.5,0,0]),t.add("mag",he(.024,.1,.034,.004),[0,-.06,.047],[-.22,0,0]),t.add("mag",he(.033,.008,.054,.003),[0,-.113,.0585],[-.22,0,0]),Th(t,{paint:["slide","skin"],stock:{slide:n.chrome,skin:n.chrome,grip:n.polymer,dark:n.black,slideDark:n.black,slideMetal:n.darkSteel,mag:n.darkSteel},moving:{slide:["slide","slideDark","slideMetal"],mag:["mag"]},muzzle:[0,.033,-.15],eject:[.018,.045,0],uvY:.02})}function iv(){let n=tn(),t=new Di;t.add("skin",Sh([[-.4,-.012],[-.4,.02],[-.37,.028],[.11,.028],[.15,.05],[.4,.05],[.41,-.09],[.36,-.102],[.13,-.112],[.085,-.112],[.07,-.036],[-.3,-.036]],.05,.009,[[[.155,.022],[.31,.022],[.315,-.068],[.165,-.078]]])),t.add("metal",he(.04,.112,.012,.004),[0,-.022,.416]),t.add("skin",he(.038,.036,.3,.012),[0,.045,-.06]),t.add("metal",Qe(.009,.52,16,.0115),[0,.045,-.47]),t.add("metal",Qe(.0155,.065),[0,.045,-.755]);for(let i=0;i<3;i++)t.add("dark",Ue(.034,.007,.008),[0,.045,-.737-i*.017]);t.add("dark",Qe(.006,.002),[0,.045,-.7885]),t.add("metal",Qe(.016,.26,20),[0,.105,-.03]),t.add("metal",Qe(.027,.07,24,.0165),[0,.105,-.19]),t.add("metal",Qe(.027,.035,24),[0,.105,-.2425]),t.add("metal",Qe(.0165,.05,24,.022),[0,.105,.125]),t.add("metal",Qe(.022,.03,24),[0,.105,.165]),t.add("metal",yh(.0115,.022,14),[0,.13,-.03]),t.add("metal",Mh(.0115,.022,14),[.026,.105,-.03]),t.add("metal",he(.018,.034,.022,.003),[0,.076,-.1]),t.add("metal",he(.018,.034,.022,.003),[0,.076,.05]);let e=new Hi(.0245,24);return e.rotateY(rr),t.add("lens",e,[0,.105,-.2595]),t.add("lens",new Hi(.019,24),[0,.105,.1795]),t.add("bolt",Mh(.005,.04),[.036,.047,.07]),t.add("bolt",new es(.0105,14,10),[.06,.042,.07]),t.add("mag",he(.03,.05,.078,.005),[0,-.052,-.04]),t.add("metal",Ue(.012,.003,.06),[0,-.06,.04]),t.add("metal",Ue(.005,.02,.005),[0,-.046,.045],[.3,0,0]),Th(t,{paint:["skin"],stock:{skin:n.olive,dark:n.black,lens:n.lens,bolt:n.steel,mag:n.darkSteel},moving:{mag:["mag"],bolt:["bolt"]},muzzle:[0,.045,-.8],eject:[.03,.05,0],uvY:-.01})}function Eh(n,t,e){let i=tn();return Object.assign({kind:"knife",group:n,parts:{},setSkin(s){let r=vh("knife",s);r&&(r.side=Be),t.material=r||i.steel}},e)}function wh(n){let t=new kt(n,tn().steel);return t.castShadow=!0,t.name="blade",t}function nv(){let n=tn(),t=Nl([[.6,Ul([.017,0],[.017,.112])],[1,o=>sr([.017,.112],[.0085,.142],[.003,.186],o)]]),e=Nl([[.55,Ul([-.017,0],[-.017,.1])],[1,o=>sr([-.017,.1],[-.017,.162],[.003,.186],o)]]),i=wh(bh(t,e,{thick:.0052,grind:.42,n:48})),s=new Di;for(let o=0;o<9;o++)s.add("dark",Ue(.0045,.0032,.0056),[.0162,.03+o*.0068,0],[0,0,.5]);s.add("steel",he(.064,.011,.017,.004),[.004,-.0045,0]);let r=new In(.0095,.0032,10,22);r.rotateX(rr/2),s.add("steel",r,[.043,-.0045,0]),s.add("handle",yh(.0128,.1,18),[0,-.06,0],[0,0,0],[1.18,1,.92]);for(let o=0;o<7;o++)s.add("handle",yh(.0141,.0045,18),[0,-.022-o*.0125,0],[0,0,0],[1.18,1,.92]);s.add("steel",he(.033,.016,.021,.005),[0,-.117,0]),s.add("dark",Qe(.003,.022,10),[0,-.117,0]);let a=new te;return a.add(i,s.mesh("dark",n.black),s.mesh("steel",n.steel),s.mesh("handle",n.oliveGrip)),Eh(a,i,{type:"m9",gripY:-.062})}var ar=[0,-.113,0];function sv(){let n=tn(),i=wh(bh(o=>sr([.018,0],[.023,.1],[-.064,.106],o),o=>sr([-.016,0],[-.011,.07],[-.064,.106],o),{thick:.0048,grind:.5,n:48,taper:.8})),s=new Di,r=new Cn;r.moveTo(-.0155,.002),r.quadraticCurveTo(-.019,-.022,-.0135,-.04),r.quadraticCurveTo(-.018,-.062,-.0115,-.098),r.lineTo(.0115,-.098),r.quadraticCurveTo(.018,-.06,.0195,-.03),r.quadraticCurveTo(.02,-.01,.0175,.002),r.closePath(),s.add("g10",uf(r,.0145,.004,3)),s.add("steel",he(.037,.011,.0125,.003),[.001,-.001,0]);for(let[o,l]of[[.002,-.022],[.002,-.052],[.001,-.082]])s.add("steel",Qe(.0032,.0152,12),[o,l,0]);s.add("steel",new In(.0155,.0046,12,30),ar);let a=new te;return a.add(i,s.mesh("g10",n.g10),s.mesh("steel",n.steel)),Eh(a,i,{type:"karambit",gripY:-.05})}var Hn=.006;function rv(){let n=tn(),t=Nl([[.62,Ul([.0105,0],[.0105,.07])],[1,f=>sr([.0105,.07],[.009,.097],[-.002,.114],f)]]),e=Nl([[.5,Ul([-.0105,0],[-.0105,.058])],[1,f=>sr([-.0105,.058],[-.0115,.1],[-.002,.114],f)]]),i=wh(bh(t,e,{thick:.0034,grind:.5,n:40})),s=new Di;s.add("steel",he(.021,.018,.0034,.001),[0,-.007,0]),s.add("brass",Qe(.0028,.0125,12),[-Hn,-.004,0]),s.add("brass",Qe(.0028,.0125,12),[Hn,-.004,0]);let r=()=>{let f=new Cn,p=.0052,x=.007,m=-.118,g=.003;f.moveTo(-p,x-g),f.quadraticCurveTo(-p,x,-p+g,x),f.lineTo(p-g,x),f.quadraticCurveTo(p,x,p,x-g),f.lineTo(p,m+g),f.quadraticCurveTo(p,m,p-g,m),f.lineTo(-p+g,m),f.quadraticCurveTo(-p,m,-p,m+g),f.closePath();for(let y=0;y<6;y++){let S=new Rn;S.absarc(0,-.022-y*.017,.0029,0,rr*2,!0),f.holes.push(S)}return uf(f,.0108,.0016,2)},a=f=>{let p=new Di;p.add("ti",r()),p.add("dark",Ue(.0022,.1,.0112),[0,-.058,0]),f&&p.add("brass",he(.004,.012,.012,.0015),[.004,-.121,0]);let x=new te;return x.add(p.mesh("ti",n.titanium),p.mesh("dark",n.black)),f&&x.add(p.mesh("brass",n.brass)),x},o=new te,l=a(!1);l.position.set(-Hn,-.004,0),o.add(l);let h=new te;h.position.set(-Hn,-.004,0),o.add(h);let c=new te;c.position.set(Hn,.004,0),h.add(c),c.add(i,s.mesh("steel",n.steel),s.mesh("brass",n.brass));let d=new te;d.position.set(Hn*2,0,0),h.add(d),d.add(a(!0));let u=Eh(o,i,{type:"butterfly",gripY:-.075});return u.parts={bladePivot:h,handleBPivot:d},u}var ms={ak:tv,deagle:ev,awp:iv,butterfly:rv,karambit:sv,m9:nv};var xn=["ak","deagle","knife","awp"],_n={butterfly:"\u8774\u8776\u5200",karambit:"\u722A\u5B50\u5200",m9:"M9 \u523A\u5200"},si={ak:{name:"AK-47",type:"gun",auto:!0,rpm:600,dmg:34,headMul:4,mag:30,reserve:120,reloadTime:2.4,refillAt:1.35,drawTime:.6,inspectTime:4.4,recoilUp:.021,recoilSide:.007,kick:.045,kickRot:.06,spread:{base:.0012,move:.035,air:.09,shot:.0032,max:.028},sfx:"rifle",tracer:16765578,pos:[.2,-.21,-.47],rot:[0,0,0],moveMul:.92,flash:1},deagle:{name:"\u6C99\u6F20\u4E4B\u9E70",type:"gun",auto:!1,rpm:270,dmg:62,headMul:3.4,mag:7,reserve:35,reloadTime:2.1,refillAt:1.2,drawTime:.45,inspectTime:4,recoilUp:.05,recoilSide:.012,kick:.05,kickRot:.32,spread:{base:.002,move:.03,air:.08,shot:.022,max:.05},sfx:"pistol",tracer:16770736,pos:[.19,-.165,-.5],rot:[0,0,0],moveMul:1,flash:1.2},knife:{name:"\u5200",type:"knife",drawTime:.7,inspectTime:5,slashDmg:50,stabDmg:130,range:2.5,moveMul:1.12,pos:[.185,-.185,-.45],rot:[-.42,.62,.12]},awp:{name:"AWP",type:"gun",auto:!1,rpm:41,dmg:170,headMul:2.5,mag:5,reserve:20,reloadTime:3.3,refillAt:2,drawTime:.9,inspectTime:4.6,recoilUp:.07,recoilSide:.01,kick:.09,kickRot:.12,spread:{base:0,move:.06,air:.15,shot:0,max:.2,noScope:.07},sfx:"awp",tracer:13168895,pos:[.19,-.215,-.42],rot:[0,0,0],moveMul:.82,scope:!0,pierce:!0,flash:1.6}},df=[0,0,0,0,0,0],av=[[0,df],[.12,[-.07,.035,.05,.22,.75,.85]],[.38,[-.07,.05,.05,.3,.9,1]],[.52,[.01,.04,.02,.36,-.32,-.5]],[.82,[.01,.05,.02,.4,-.42,-.6]],[1,df]],Ni=[.185,-.185,-.45,-.42,.62,.12],Bl=n=>n*n,mf=n=>n,or=n=>1-(1-n)*(1-n),Gn=Math.PI/2,ff=[[0,Ni],[.09,[.3,-.17,-.45,0,1.15,-Gn]],[.2,[.13,-.17,-.53,0,2.2,-Gn],Bl],[.3,[-.01,-.17,-.48,0,3,-Gn],mf],[.58,[-.04,-.175,-.46,0,3.15,-Gn],or],[1,Ni]],ov=[[0,Ni],[.09,[-.06,-.17,-.46,.08,.55,Gn]],[.2,[.08,-.17,-.53,.08,-.3,Gn],Bl],[.3,[.26,-.17,-.48,.08,-1.1,Gn],mf],[.58,[.29,-.175,-.46,.08,-1.2,Gn],or],[1,Ni]],lv=[[0,Ni],[.15,[.25,-.22,-.3,-.5,.4,.2]],[.27,[.04,-.14,-.7,-.85,.25,.35],Bl],[.5,[.04,-.15,-.66,-.82,.25,.35],or],[1,Ni]],cv=[[0,Ni],[.17,[.2,0,-.38,.2,.5,.1]],[.29,[.07,-.2,-.6,-.9,.3,.3],Bl],[.52,[.06,-.23,-.58,-.95,.3,.3],or],[1,Ni]],hv=.2,uv={m9:.27,butterfly:.27,karambit:.29},Fl=[.12,-.45,.4],Ah=new I(Fl[0]-.022,Fl[1]+.018,Fl[2]-.045).normalize(),gf=(n,t,e,i)=>new Le().setFromAxisAngle(new I(n,t,e),i),Rh=new Le().setFromEuler(new bi(-.15,1.3,0,"ZYX")),pf=gf(0,0,1,-.2).multiply(Rh.clone().multiply(new Le().setFromAxisAngle(Ah,-ii/2))),dv=gf(0,0,1,-.4).multiply(Rh.clone().multiply(new Le().setFromAxisAngle(Ah,-ii))),fv=[.03,-.17,-.42],pv=[.09,-.13,-.42];function mv(){let t=[],e=[],i=[];for(let a=0;a<=26;a++){let o=a/26,l=1.2-o*2.5,h=.3,c=.3-.04*o,d=o*o;if(t.push(Math.sin(l)*h,0,-Math.cos(l)*h,Math.sin(l)*c,0,-Math.cos(l)*c),e.push(d,d,d,d*.35,d*.35,d*.35),a<26){let u=a*2;i.push(u,u+1,u+2,u+1,u+3,u+2)}}let s=new be;s.setAttribute("position",new Yt(t,3)),s.setAttribute("color",new Yt(e,3)),s.setIndex(i);let r=new kt(s,new xe({vertexColors:!0,transparent:!0,blending:ci,depthWrite:!1,depthTest:!1,side:Be,color:new Tt(1.5,1.7,2.1)}));return r.frustumCulled=!1,r.visible=!1,r.userData.count=156,r}function gv(){let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=128,i=t.createRadialGradient(e/2,e/2,2,e/2,e/2,e/2);i.addColorStop(0,"rgba(255,255,235,1)"),i.addColorStop(.25,"rgba(255,205,100,0.9)"),i.addColorStop(1,"rgba(255,120,20,0)"),t.fillStyle=i,t.translate(e/2,e/2);for(let c=0;c<5;c++)t.rotate(ni/5),t.beginPath(),t.moveTo(0,0),t.lineTo(-11,-e/2),t.lineTo(11,-e/2),t.closePath(),t.fill();t.beginPath(),t.arc(0,0,e*.2,0,7),t.fill();let s=new pi(n);s.colorSpace=we;let r=new xe({map:s,transparent:!0,blending:ci,depthWrite:!1,side:Be,color:new Tt(3,2.4,1.6)}),a=new te,o=new kt(new mi(.24,.24),r);a.add(o);let l=new kt(new mi(.3,.1),r);l.rotation.y=ii/2,l.position.z=-.08,a.add(l);let h=l.clone();return h.rotation.set(0,ii/2,ii/2),a.add(h),a.visible=!1,a}var Ol=class{constructor(t){this.game=t,this.scene=new Ki,this.camera=new ke(52,1,.01,8),this.scene.environment=t.world.envMap,this.scene.environmentIntensity=.9,this.hemi=new dn(12374271,6967360,.9),this.scene.add(this.hemi),this.sun=new Fn(16763024,3.4),this.sun.position.copy(t.world.sunDir),this.scene.add(this.sun),this.fill=new Fn(14673663,1.1),this.scene.add(this.fill),this.flashLight=new gi(16756832,0,3,2),this.scene.add(this.flashLight),this.root=new te,this.scene.add(this.root),this.sway=new te,this.root.add(this.sway),this.flash=gv(),this.scene.add(this.flash),this.trail=mv(),this.root.add(this.trail),this.trailT=9,this.trailDir=1,this.showQ=new Le,this.showK=0,this._qt=new Le,this.fingerOpen=0,this.fingerCur=0,this.hitStop=0,this.pose=Ni.slice(),this.atkKeys=ff,this.views={},this._buildViews(),this.ammo={},this.resetAmmo(),this.cur="ak",this.last="deagle",this.state="draw",this.t=0,this.cd=0,this.shots=0,this.shotDecay=0,this.kick=0,this.kickRot=0,this.slideT=1,this.flashT=0,this.swayX=0,this.swayY=0,this.bob=0,this.sprintK=0,this.landK=0,this.lit=1,this.scoped=!1,this.wantScope=!1,this.scopeK=0,this.atk=null,this.atkDir=1,this.atkHit=!1,this.events=[],this.A=[0,0,0,0,0,0],this.tmp=[0,0,0,0,0,0],this._v=new I,this._v2=new I,this._q=new Le,this.spreadNow=0,this.setLoadout(t.loadout),this.equip("ak",!0)}resetAmmo(){let t=this.game.perks||{};for(let e of["ak","deagle","awp"]){let i=Math.round(si[e].mag*(1+.3*(t.mag||0)));this.ammo[e]={mag:i,max:i,reserve:si[e].reserve}}}refill(){for(let t of["ak","deagle","awp"]){let e=this.ammo[t],i=Math.round(si[t].mag*(1+.3*(this.game.perks.mag||0)));e.max=i,e.mag=i,e.reserve=si[t].reserve}}addAmmo(t){for(let e of["ak","deagle","awp"]){let i=this.ammo[e];i.reserve=Math.min(si[e].reserve*1.5,i.reserve+Math.ceil(si[e].reserve*t))}}_buildViews(){let t=(r,a,o,l)=>{let h=new te;h.visible=!1,h.add(o.group);let c={id:r,def:a,holder:h,model:o,hands:{}};for(let[d,u]of Object.entries(l))h.add(u),c.hands[d]=u;return this.sway.add(h),this.views[r]=c,h.traverse(d=>{d.isMesh&&(d.frustumCulled=!1,d.castShadow=!1)}),c},i=r=>[[1,0,0],[0,Math.cos(r),-Math.sin(r)],[0,Math.sin(r),Math.cos(r)]],s=[[0,-1,0],[0,0,-1],[-1,0,0]];t("ak",si.ak,ms.ak(),{r:ps({pos:[.002,-.082,.112],basis:i(.32),armTo:[.2,-.42,.62],scale:1.12}),l:ps({pos:[0,-.012,-.23],basis:s,armTo:[-.3,-.36,.3],scale:1.32})}),t("deagle",si.deagle,ms.deagle(),{r:ps({pos:[.002,-.062,.05],basis:i(.22),armTo:[.16,-.36,.7],scale:1.1})}),t("awp",si.awp,ms.awp(),{r:ps({pos:[.002,-.078,.108],basis:i(.16),armTo:[.2,-.42,.62],scale:1.12}),l:ps({pos:[0,-.012,-.22],basis:s,armTo:[-.3,-.36,.3],scale:1.34})});for(let r of["butterfly","karambit","m9"]){let a=ms[r](),o=new te;o.rotation.y=-ii/2;let l=new te;o.add(l),l.add(a.group);let h=new te;h.add(o);let c=t(r,si.knife,{group:h},{r:ps({pos:[0,0,0],armTo:Fl,scale:1})});c.model=a,c.mount=o,c.spin=l,c.toss=h,r==="karambit"&&(l.position.set(...ar),a.group.position.set(-ar[0],-ar[1],-ar[2])),c.mountBase=new I(0,-a.gripY,r==="butterfly"?Hn:0),o.position.copy(c.mountBase)}}setLoadout(t){this.views.ak.model.setSkin(t.skins.ak),this.views.deagle.model.setSkin(t.skins.deagle),this.views.awp.model.setSkin(t.skins.awp);for(let e of["butterfly","karambit","m9"])this.views[e].model.setSkin(t.skins[e])}get view(){return this.views[this.cur==="knife"?this.game.loadout.knife:this.cur]}get def(){return si[this.cur]}get displayName(){return this.cur==="knife"?_n[this.game.loadout.knife]:this.def.name}equip(t,e=!1){if(!e&&t===this.cur&&this.state!=="holster")return;t!==this.cur&&(this.last=this.cur);for(let s of Object.values(this.views))s.holder.visible=!1;this.cur=t,this.state="draw",this.t=0,this.events.length=0,this.setScope(!1),this.wantScope=!1,this.atk=null,this.shots=0,this.view.holder.visible=!0;let i=this.game.audio;if(i.draw(),t==="knife"){let s=this.game.loadout.knife;s==="butterfly"?(this.ev(.1,()=>i.click(0,1.3,.5)),this.ev(.3,()=>i.click(0,1.5,.6)),this.ev(.48,()=>{i.click(0,1.1,.7),i.shing(0,.7)})):s==="karambit"?(this.ev(.08,()=>i.swish(!1)),this.ev(.45,()=>i.shing(0,.6))):this.ev(.25,()=>i.shing(0,.8))}else t==="awp"?this.ev(.5,()=>i.click(0,.8,.5)):this.ev(.3,()=>i.click(0,.9,.5));this.game.ui.setWeapon(this)}ev(t,e){this.events.push({time:t,fn:e})}cycle(t){let e=xn.indexOf(this.cur);this.equip(xn[(e+t+xn.length)%xn.length])}setScope(t){this.scoped!==t&&(this.scoped=t,this.game.ui.setScope(t),t&&this.game.audio.scope())}inspect(){if(this.state!=="idle")return;this.state="inspect",this.t=0,this.events.length=0,this.setScope(!1),this.wantScope=!1;let t=this.game.audio;if(this.cur==="knife"){let e=this.game.loadout.knife,i=si.knife.inspectTime;e==="butterfly"?([.05,.12,.2,.28,.36,.42].forEach((s,r)=>this.ev(s*i,()=>{t.click(0,1.1+r%3*.2,.6),r===5&&t.shing(0,.6)})),this.ev(.72*i,()=>t.swish(!1))):e==="karambit"?([.07,.11,.16,.22,.29].forEach(s=>this.ev(s*i,()=>t.swish(!1))),this.ev(.46*i,()=>t.click(0,.9,.5)),this.ev(.74*i,()=>t.swish(!1))):(this.ev(.33*i,()=>t.swish(!1)),this.ev(.75*i,()=>t.swish(!1)),this.ev(.95*i,()=>{t.click(0,.8,.6),t.shing(0,.5)}))}else this.ev(.4,()=>t.click(0,.7,.3)),this.ev(this.def.inspectTime*.5,()=>t.click(0,.8,.3))}reload(){if(this.def.type!=="gun"||this.state==="reload"||this.state==="draw")return;let t=this.ammo[this.cur];if(t.mag>=t.max||t.reserve<=0)return;this.state="reload",this.t=0,this.events.length=0,this.setScope(!1),this.wantScope=!1;let e=this.game.audio,i=this.def,s=this.reloadMul();this.ev(i.reloadTime*.14*s,()=>e.magOut()),this.ev(i.refillAt*s-.12,()=>e.magIn()),this.ev(i.refillAt*s,()=>{let r=t.max-t.mag,a=Math.min(r,t.reserve);t.mag+=a,t.reserve-=a,this.game.ui.setWeapon(this)}),this.ev(i.reloadTime*.74*s,()=>e.bolt())}reloadMul(){return Math.pow(.82,this.game.perks.reload||0)}primary(t,e){if(this.def.type==="knife"){(t||e)&&this.knifeAttack(!1);return}(this.def.auto&&e||t)&&this.fire()}secondary(t){t&&(this.def.type==="knife"?this.knifeAttack(!0):this.def.scope&&(this.state==="idle"||this.state==="bolt")&&(this.wantScope=!this.wantScope,this.state==="idle"&&this.setScope(this.wantScope)))}knifeAttack(t){if(this.state==="draw"&&this.t<.35||this.state==="attack"&&this.t<this.atkDur*(this.atk==="slash"?.62:.82))return;let e=this.game,i=e.loadout.knife,s=this.pose.slice();this.state="attack",this.t=0,this.events.length=0;let r,a;t?(this.atk="heavy",this.atkDur=.9,r=i==="karambit"?cv:lv,a=uv[i]):(this.atk="slash",this.atkDir=-this.atkDir,this.atkDur=.46,r=this.atkDir>0?ff:ov,a=hv),this.atkKeys=r.map((h,c)=>c===0?[0,s]:h);let o=a*this.atkDur,l=this.atkDir;e.audio.swish(t,Math.max(0,o-.09)),t||(this.trailT=-(o-.06),this.trailDir=l),this.ev(o,()=>{let h=e.knifeHit(t);e.player.addRecoil(t?.014:.004,t?0:l*.018),h&&(this.hitStop=t?.08:.05)})}fire(){let t=this.def,e=this.ammo[this.cur],i=this.game;if(this.cd>0||this.state==="draw"||this.state==="reload"||this.state==="bolt")return;if(e.mag<=0){this.cd<=0&&(i.audio.dry(),this.cd=.25,this.reload());return}this.state==="inspect"&&(this.state="idle",this.events.length=0),e.mag--,this.cd=60/t.rpm/(1+.1*(i.perks.rate||0));let s=i.player,r=t.spread,a=r.base+yt(s.speed2d/6)*r.move*(s.crouchK>.5?.5:1)+(s.onGround?0:r.air)+Math.min(r.max,this.shots*r.shot);t.scope&&!this.scoped&&(a+=r.noScope),i.fireBullet(t,a,this.muzzleWorld(this._v));let o=Math.pow(.8,i.perks.recoil||0),l=this.shots,h=t.recoilUp*(l<9?1:.45)*o*(s.crouchK>.5?.8:1),c=t.recoilSide*(Math.sin(l*.75)*(l>5?1.7:.5)+rt(-.6,.6))*o;s.addRecoil(h,c),this.shots++,this.shotDecay=.32,this.kick=Math.min(.12,this.kick+t.kick),this.kickRot=Math.min(.5,this.kickRot+t.kickRot),this.slideT=0,this.flashT=.055,this.flashRoll=rt(ni),this.flash.scale.setScalar(t.flash*rt(.8,1.25)),i.audio[t.sfx](),i.ejectShell(),i.shake(t.scope?.22:.05),t.scope&&(this.setScope(!1),this.state="bolt",this.t=0,this.events.length=0,this.ev(.38,()=>i.audio.bolt())),e.mag===0&&e.reserve>0&&!t.scope&&this.ev(this.t+.35,()=>this.reload()),i.ui.setWeapon(this)}muzzleWorld(t){let e=this.view;return e.model.muzzle?(e.model.muzzle.getWorldPosition(t),t.add(this.game.camera.position)):t.copy(this.game.camera.position)}update(t,e){let i=this.game,s=i.player,r=this.view,a=this.def,o=this.A,l=this.tmp,h=t;this.hitStop>0&&(this.hitStop-=t,h=t*.06),this.dt=t,this.t+=h,this.cd-=t,this.shotDecay>0&&(this.shotDecay-=t,this.shotDecay<=0&&(this.shots=0));for(let E=this.events.length-1;E>=0;E--)this.t>=this.events[E].time&&this.events.splice(E,1)[0].fn();let c=this.reloadMul();this.state==="draw"&&this.t>=a.drawTime?this.state="idle":this.state==="reload"&&this.t>=a.reloadTime*c?this.state="idle":this.state==="inspect"&&this.t>=a.inspectTime?this.state="idle":this.state==="attack"&&this.t>=this.atkDur?(this.state="idle",this.atk=null):this.state==="bolt"&&this.t>=1.25&&(this.state="idle",this.wantScope&&this.setScope(!0),this.ammo.awp.mag===0&&this.reload()),s.sprinting&&this.state==="inspect"&&(this.state="idle"),o[0]=o[1]=o[2]=o[3]=o[4]=o[5]=0,this.showK=0,this.fingerOpen=0,a.type==="gun"?this._animGun(r,a,o,l,c):this._animKnife(r,a,o,l);let d=s.sprinting&&this.state==="idle"?1:0;if(this.sprintK=Ne(this.sprintK,d,9,t),a.type==="gun"){let E=this.sprintK;o[0]-=.06*E,o[1]-=.04*E,o[3]-=.18*E,o[4]+=.55*E,o[5]+=.25*E}else{let E=this.sprintK;o[1]-=.03*E,o[3]-=.2*E}this.kick=Ne(this.kick,0,16,t),this.kickRot=Ne(this.kickRot,0,13,t),o[2]+=this.kick,o[3]+=this.kickRot,o[1]+=this.kickRot*.03;let u=yt(e.dx*.0016,-.07,.07),f=yt(e.dy*.0016,-.07,.07);this.swayX=Ne(this.swayX,u,9,t),this.swayY=Ne(this.swayY,f,9,t);let p=s.onGround?yt(s.speed2d/5):0;this.bob+=t*(s.sprinting?13:9.5)*p;let x=Math.sin(this.bob)*.008*p*(s.sprinting?2:1),m=-Math.abs(Math.cos(this.bob))*.007*p*(s.sprinting?2:1);this.landK=Ne(this.landK,yt(-s.vel.y*.004,-.03,.04)-s.landDip*.5,10,t);let g=Math.sin(i.time*1.6)*.0016;if(this.sway.position.set(-this.swayX*.5+x,this.swayY*.4+m+this.landK+g,0),this.sway.rotation.set(this.swayY*.8-this.landK*1.5,-this.swayX*1.1,-this.swayX*.9-s.strafeTilt*1.2),r.holder.position.set(a.pos[0]+o[0],a.pos[1]+o[1],a.pos[2]+o[2]),r.holder.rotation.set(a.rot[0]+o[3],a.rot[1]+o[4],a.rot[2]+o[5]),this.showK>.001&&r.holder.quaternion.slerp(this.showQ,this.showK),a.type==="knife"){let E=this.pose,w=r.holder.position,_=r.holder.rotation;E[0]=w.x,E[1]=w.y,E[2]=w.z,E[3]=_.x,E[4]=_.y,E[5]=_.z}else for(let E=0;E<6;E++)this.pose[E]=Ni[E];this.fingerCur=Ne(this.fingerCur,this.fingerOpen,26,t),r.hands.r&&(r.hands.r.userData.fingers.rotation.y=-this.fingerCur),this.trailT+=t;let y=this.trail,S=this.trailT;y.visible=S>0&&S<.24&&a.type==="knife",y.visible&&(y.geometry.setDrawRange(0,Math.ceil(yt(S/.085)*26)*6),y.material.opacity=yt(1.15-S/.24)*.4,y.position.set(.08*this.trailDir,-.168,-.4),y.rotation.set(0,0,0),y.scale.set(this.trailDir,1,1)),this.root.quaternion.copy(i.camera.quaternion),this.camera.quaternion.copy(i.camera.quaternion),this.lit=Ne(this.lit,i.playerLit?1:0,6,t),this.sun.intensity=ve(.25,3.4,this.lit),this.fill.position.set(-.35,.55,1).applyQuaternion(i.camera.quaternion),this.hemi.intensity=ve(.7,.95,this.lit),this.scene.environmentIntensity=ve(.6,.95,this.lit),this.flashT-=t;let v=this.flashT>0&&r.model.muzzle;this.flash.visible=!!v,v&&(r.model.muzzle.getWorldPosition(this._v),this.flash.position.copy(this._v),this.flash.quaternion.copy(this.root.quaternion),this.flash.rotateZ(this.flashRoll||0),this.flashLight.position.copy(this._v)),this.flashLight.intensity=v?2.5:0,this.scopeK=Ne(this.scopeK,this.scoped?1:0,18,t),r.holder.visible=this.scopeK<.6}_animGun(t,e,i,s,r){let a=t.model.parts,o=this.t;if(a.mag&&(a.mag.position.set(0,0,0),a.mag.rotation.set(0,0,0),a.mag.visible=!0),t.hands.l&&t.hands.l.position.set(0,0,0),a.bolt&&(a.bolt.position.set(0,0,0),a.bolt.rotation.set(0,0,0)),t.id==="deagle"&&(t.model.group.rotation.x=0,t.model.group.position.set(0,0,0)),this.slideT+=this.dt/.09,a.slide){let l=this.ammo[t.id].mag===0&&this.state!=="reload",h=this.slideT<1?Math.sin(Math.min(1,this.slideT)*ii):0;a.slide.position.z=Math.max(h*.04,l?.034:0)}if(a.bolt&&t.id==="ak"&&this.slideT<1&&(a.bolt.position.z=Math.sin(this.slideT*ii)*.05),this.state==="draw"){let l=1-Qd(yt(o/e.drawTime));i[1]-=.26*l,i[3]-=.95*l,i[5]+=.5*l,i[4]+=.3*l}else if(this.state==="inspect"){ph(o/e.inspectTime,av,s);let l=t.id==="deagle"?1.15:1;if(i[0]+=s[0],i[1]+=s[1],i[2]+=s[2]-(t.id==="deagle"?0:.02),i[3]+=s[3]*l,i[4]+=s[4]*l,i[5]+=s[5],t.hands.l){let h=ye(o/e.inspectTime,[[0,0],[.08,1],[.9,1],[1,0]]);t.hands.l.position.set(-.12*h,-.55*h,.25*h)}if(t.id==="deagle"){let h=o/e.inspectTime,c=h>.56?0:ye(h,[[.4,0],[.56,-ni*2,ds]]),d=-.03,u=-.012,f=Math.cos(c),p=Math.sin(c),x=t.model.group;x.rotation.x=c,x.position.set(0,d-(d*f-u*p),u-(d*p+u*f)),this.fingerOpen=ye(h,[[.37,0],[.41,1],[.54,1],[.58,0]])}}else if(this.state==="reload"){let l=o/(e.reloadTime*r),h=e.refillAt/e.reloadTime,c=ye(l,[[0,0],[.1,1],[.66,1],[.76,-.6],[.88,-.6],[1,0]]);i[3]+=.3*Math.max(0,c)+.1*Math.max(0,-c),i[5]-=.4*c,i[1]-=.035*Math.abs(c),i[4]+=.12*c;let d=ye(l,[[.12,0],[.24,1],[h-.16,1],[h-.02,0]]);a.mag&&(a.mag.position.y=-.34*d,a.mag.position.z=.04*d,a.mag.rotation.x=.35*d,t.hands.l&&t.hands.l.position.set(0,-.3*d,.22*Math.min(1,d*3))),i[1]-=ye(l,[[h-.04,0],[h,.02],[h+.06,0]]);let u=ye(l,[[.7,0],[.78,1],[.84,0]]);a.bolt&&(a.bolt.position.z=.06*u),a.slide&&(a.slide.position.z=Math.max(a.slide.position.z*(l<.78?1:0),.035*u)),i[2]+=.015*u}else if(this.state==="bolt"){let l=o/1.25,h=ye(l,[[.18,0],[.36,1],[.5,1],[.66,0]]),c=ye(l,[[.1,0],[.22,1],[.66,1],[.8,0]]);a.bolt&&(a.bolt.rotation.z=c*.9,a.bolt.position.z=h*.07,a.bolt.position.y=c*.012),i[5]-=.22*c,i[3]+=.1*c,i[1]-=.02*c,i[2]+=.02*h}}_show(t,e){let i=ye(t,[[0,0],[.16,1],[.84,1],[1,0]]),s=ye(t,[[.4,0],[.56,1]]),r=this.showQ;s<.5?r.copy(Rh).slerp(pf,s*2):r.copy(pf).slerp(dv,s*2-1),r.multiply(this._qt.setFromAxisAngle(Ah,Math.sin(this.t*2.3)*.11)),this.showK=i;for(let a=0;a<3;a++)e[a]+=(ve(fv[a],pv[a],s)-Ni[a])*i}_animKnife(t,e,i,s){let r=this.t,a=t.id,o=t.model.parts,l=0,h=0,c=0,d=0,u=0,f=0;if(this.state==="draw"){let p=yt(r/e.drawTime),x=1-fh(p);i[1]-=.25*x,i[3]+=.8*x,i[5]-=.4*x,a==="butterfly"?(l=ye(p,[[0,ii],[.12,ii],[.5,-.25,fh],[.68,.08],[.8,0]]),h=ye(p,[[0,ni],[.2,ni],[.7,-.3],[.85,.1],[1,0]])-l,i[5]+=Math.sin(p*ii)*.5,i[3]-=Math.sin(p*ii)*.25,this.fingerOpen=ye(p,[[0,.8],[.6,.8],[.85,0]])):a==="karambit"?(c=ye(p,[[0,-ni*2],[.62,0,or]]),d=ye(p,[[0,1],[.6,1],[.9,0]])):(i[4]-=1.2*x,i[5]+=.6*x)}else if(this.state==="inspect"){let p=r/e.inspectTime;if(a==="butterfly"){l=ye(p,[[.03,0],[.1,ii],[.18,ni],[.26,ni+ii],[.34,2*ni]]),h=ye(p,[[.03,0],[.1,.15],[.18,-ni],[.26,-ni],[.34,-2*ni-.3],[.39,-2*ni+.1],[.42,-2*ni]])-l;let m=ye(p,[[0,0],[.05,1],[.38,1],[.45,0]]),g=ye(p,[[.03,0],[.065,1],[.1,-.4],[.14,1],[.18,-.4],[.22,1],[.26,-.4],[.3,1],[.34,-.3],[.4,0]]);i[0]-=.07*m,i[1]+=.04*m+.012*g,i[2]+=.03*m,i[3]+=.18*m+.1*g,i[4]+=.2*m,i[5]+=.32*g*m,this.fingerOpen=.85*ye(p,[[0,0],[.04,1],[.38,1],[.44,0]]),p>.43&&this._show((p-.43)/.57,i)}else if(a==="karambit"){c=p>.42?0:ye(p,[[.06,0],[.42,-ni*6,or]]),d=ye(p,[[0,0],[.06,1],[.42,1],[.5,0]]);let x=ye(p,[[0,0],[.07,1],[.42,1],[.5,0]]);i[0]-=.06*x,i[1]+=.03*x+Math.sin(p*70)*.004*x,i[2]+=.02*x,i[3]+=.22*x,i[4]-=.3*x,p>.48&&this._show((p-.48)/.52,i)}else{p<.74&&this._show(p/.74,i);let x=yt((p-.75)/.2);x>0&&x<1&&(u=-ni*ds(x),f=Math.sin(x*ii)*.19),this.fingerOpen=ye(p,[[.73,0],[.76,1],[.92,1],[.955,0]]),i[1]+=ye(p,[[.71,0],[.74,-.035],[.79,.04],[.9,.015],[.95,-.03],[1,0]]),i[3]+=ye(p,[[.71,0],[.76,.25],[.95,.1],[1,0]])}}else if(this.state==="attack"){ph(r/this.atkDur,this.atkKeys,s);for(let p=0;p<6;p++)i[p]+=s[p]-Ni[p]}o.bladePivot&&(o.bladePivot.rotation.z=l,o.handleBPivot.rotation.z=h),t.toss.rotation.x=u,t.toss.position.y=f,a==="karambit"&&(t.spin.rotation.z=c,t.mount.rotation.y=-ii/2*(1-d),t.mount.position.set(t.mountBase.x,ve(t.mountBase.y,.143,d),ve(t.mountBase.z,-.068,d)))}};var Ih={grunt:{name:"\u673A\u68B0\u6B65\u5175",hp:100,speed:3.3,scale:1,body:3752011,accent:[3.4,.7,.2],bolt:16738858,score:100,ranged:!0,range:[8,26],fireDelay:[1.2,2.2],burst:1,burstGap:.1,boltDmg:9,boltSpeed:30,spread:.035},rusher:{name:"\u7A81\u88AD\u8005",hp:60,speed:6.3,scale:.92,body:4857636,accent:[4,.25,.3],score:120,melee:!0,meleeDmg:13},heavy:{name:"\u91CD\u88C5\u673A\u5175",hp:420,speed:2.1,scale:1.32,body:4934195,accent:[3.2,2.4,.3],bolt:16764992,score:300,ranged:!0,range:[6,24],fireDelay:[2.2,3.4],burst:5,burstGap:.12,boltDmg:8,boltSpeed:27,spread:.06},boss:{name:"\u6BC1\u706D\u8005",hp:3200,speed:2.5,scale:2.3,body:1513500,accent:[3.2,.5,4.2],bolt:12607743,score:2500,ranged:!0,boss:!0,range:[0,40],fireDelay:[1.6,2.4],burst:1,burstGap:.085,boltDmg:11,boltSpeed:26,spread:.03,meleeDmg:30}},xf={};function xv(n,t,e,i){return xf[n]||(xf[n]=new Te(t,e,i))}var Ch={};function _v(n){if(!Ch[n]){let t=Ih[n].accent;Ch[n]=new xe({color:new Tt(t[0],t[1],t[2])})}return Ch[n]}var gs=new pe({color:1382170,metalness:.8,roughness:.5});function vv(n){let t=Ih[n],e=new pe({color:t.body,metalness:.75,roughness:.42,emissive:0}),i=_v(n),s=new te,r=[],a=(x,m,g,y,S,v,E,w,_=e)=>{let M=new kt(xv(m,g,y,S),_);return M.position.set(v,E,w),M.castShadow=!0,x.add(M),r.push(M),M},o=new te;s.add(o),a(o,"torso",.54,.56,.32,0,1.13,0),a(o,"chest",.44,.26,.08,0,1.24,.17),a(o,"core",.16,.07,.03,0,1.24,.215,i),a(o,"pelvis",.42,.18,.26,0,.8,0,gs),a(o,"pack",.36,.4,.14,0,1.18,-.22,gs);let l=new te;l.position.set(0,1.47,0),o.add(l),a(l,"head",.27,.27,.29,0,.14,0),a(l,"visor",.23,.07,.03,0,.16,.142,i),a(l,"neck",.12,.08,.12,0,-.02,0,gs);let h=x=>{let m=new te;return m.position.set(x*.345,1.36,0),o.add(m),a(m,"shoulder",.2,.18,.22,0,0,0),a(m,"uarm",.13,.32,.13,0,-.2,0,gs),a(m,"larm",.14,.3,.15,0,-.5,0),m},c=h(-1),d=h(1);if(t.melee)for(let x of[c,d])a(x,"blade",.025,.6,.09,0,-.92,.02,i);else a(d,"gun",.09,.5,.12,0,-.74,.04,gs),a(d,"gunTip",.05,.06,.05,0,-1,.04,i),t.boss&&(a(c,"gun",.09,.5,.12,0,-.74,.04,gs),a(c,"gunTip",.05,.06,.05,0,-1,.04,i),a(o,"crown",.7,.05,.05,0,1.5,-.1,i));let u=x=>{let m=new te;return m.position.set(x*.15,.8,0),o.add(m),a(m,"thigh",.18,.4,.2,0,-.2,0),a(m,"shin",.14,.4,.15,0,-.58,0,gs),a(m,"foot",.16,.09,.3,0,-.755,.05),m},f=u(-1),p=u(1);return s.scale.setScalar(t.scale),{root:s,hips:o,head:l,armL:c,armR:d,legL:f,legR:p,meshes:r,body:e}}var je=new I,qi=new I,_a=new I,Ph={x:0,z:0},kl=class{constructor(t){this.game=t,this.list=[],this.bolts=[];let e=new es(.09,8,6);e.scale(1,1,3.2);for(let i=0;i<90;i++){let s=new kt(e,new xe({color:16777215}));s.visible=!1,s.frustumCulled=!1,t.world.scene.add(s),this.bolts.push({m:s,v:new I,life:0,dmg:0})}this.bc=0,this.slams=[]}get alive(){let t=0;for(let e of this.list)e.dead||t++;return t}clear(){for(let t of this.list)this.game.world.scene.remove(t.root);this.list.length=0;for(let t of this.bolts)t.life=0,t.m.visible=!1;this.slams.length=0}spawn(t,e,i,s=1){let r=Ih[t],a=vv(t),o=this.game.diff,l=(1+(s-1)*.09)*o.enemyHp,h=Object.assign(a,{type:t,T:r,x:e,z:i,y:0,vx:0,vz:0,yaw:Math.atan2(-e,-i),hp:r.hp*l,maxHp:r.hp*l,dmgMul:(1+(s-1)*.045)*o.enemyDmg,speed:r.speed*(1+Math.min(s,14)*.012)*rt(.92,1.08),dead:!1,spawnT:.7,flash:0,walk:rt(6),los:!1,losT:rt(.2),fireT:rt(.6,1.6),chargeT:0,burstLeft:0,burstT:0,strafe:Math.random()<.5?1:-1,strafeT:rt(1,2.5),atkT:0,atkCd:0,didHit:!1,radius:.42*r.scale,pattern:0,summoned:0,slamT:0,aimPitch:0});h.root.position.set(e,0,i),h.root.rotation.y=h.yaw,h.root.scale.setScalar(.01),this.game.world.scene.add(h.root),this.list.push(h);let c=this.game;return c.fx.burst(e,.3,i,0,1,0,26,r.accent,6,.6,.08),c.fx.ring(e,.06,i,.3,2.2*r.scale,.45,new Tt(r.accent[0],r.accent[1],r.accent[2]).getHex()),c.sfx3d("spawn",e,1,i),h}raycast(t,e,i,s){let r=i,a=null,o=!1;for(let l of this.list){if(l.dead||l.spawnT>.35||s&&s.includes(l))continue;let h=l.T.scale,c=l.x-t.x,d=l.y+1.61*h-t.y,u=l.z-t.z,f=c*e.x+d*e.y+u*e.z;if(f>0){let N=.21*h+.02,k=c*c+d*d+u*u-f*f;if(k<N*N){let L=f-Math.sqrt(N*N-k);L>0&&L<r&&(r=L,a=l,o=!0)}}let p=.36*h,x=l.x-p,m=l.x+p,g=l.z-p,y=l.z+p,S=l.y,v=l.y+1.47*h,E=1/(e.x||1e-12),w=1/(e.y||1e-12),_=1/(e.z||1e-12),M=(x-t.x)*E,C=(m-t.x)*E,A=Math.min(M,C),P=Math.max(M,C);M=(S-t.y)*w,C=(v-t.y)*w,A=Math.max(A,Math.min(M,C)),P=Math.min(P,Math.max(M,C)),M=(g-t.z)*_,C=(y-t.z)*_,A=Math.max(A,Math.min(M,C)),P=Math.min(P,Math.max(M,C)),P>=Math.max(A,0)&&A<r&&A>0&&(r=A,a=l,o=!1)}return a?{e:a,t:r,head:o}:null}damage(t,e,i={}){if(t.dead)return!1;t.hp-=e,t.flash=1;let s=this.game,r=i.point;return r&&s.fx.burst(r.x,r.y,r.z,-(i.dir?.x||0)*.6,.4,-(i.dir?.z||0)*.6,i.head?16:9,i.head?[4,3,1.2]:[3.5,1.8,.5],5,.4,.05),t.hp<=0?(this.kill(t,i),!0):(t.T.boss||(t.vx*=.4,t.vz*=.4,i.knife&&(t.fireT=Math.max(t.fireT,.6))),!1)}kill(t,e={}){t.dead=!0;let i=this.game,s=i.world.scene,r=t.T.scale,a=t.y+1.1*r,o=e.dir?.x||0,l=e.dir?.z||0,h=e.force||3;for(let d of t.meshes){s.attach(d);let u=d.position.x-t.x,f=d.position.y-a,p=d.position.z-t.z;i.fx.addDebris(d,u*5+o*h+rt(-1.5,1.5),2.5+f*3+rt(0,3.5),p*5+l*h+rt(-1.5,1.5),rt(2,3.2))}s.remove(t.root),i.fx.burst(t.x,a,t.z,0,.5,0,34*r,t.T.accent,8,.7,.07),i.fx.burst(t.x,a,t.z,0,.5,0,14,[4,2.5,.8],5,.5,.12),i.fx.puff(t.x,a,t.z,6,.5*r,.2,.45,1.2),i.fx.flash(t.x,a,t.z,16752720,160*r,.14,14),t.T.boss&&i.fx.explosion(t.x,1.4,t.z,1.8),i.sfx3d("enemyDie",t.x,a,t.z);let c=this.list.indexOf(t);c>=0&&this.list.splice(c,1),i.onEnemyKilled(t,e)}fireBolt(t,e,i,s,r,a,o,l,h,c=1){let d=this.bolts[this.bc];this.bc=(this.bc+1)%this.bolts.length,d.m.position.set(t,e,i),d.v.set(s,r,a).multiplyScalar(o),d.m.lookAt(t+s,e+r,i+a),d.m.scale.setScalar(c),d.m.material.color.set(h).multiplyScalar(3.2),d.m.visible=!0,d.life=4,d.dmg=l,d.color=h}_shoot(t,e=1,i=0){let s=this.game,r=s.player,a=t.T.scale,o=t.T.boss&&t.burstLeft%2===0?-1:1,l=Math.sin(t.yaw),h=Math.cos(t.yaw),c=t.x+l*.75*a-h*-.345*a*o,d=t.y+1.36*a,u=t.z+h*.75*a+l*-.345*a*o,f=Math.hypot(r.pos.x-c,r.pos.z-u),p=f/t.T.boltSpeed*rt(.35,.9);je.set(r.pos.x+r.vel.x*p-c,r.pos.y+r.height*.62-d,r.pos.z+r.vel.z*p-u).normalize();let x=t.T.spread*e;if(je.x+=rt(-x,x),je.y+=rt(-x,x)*.7,je.z+=rt(-x,x),i){let m=Math.cos(i),g=Math.sin(i),y=je.x*m+je.z*g,S=-je.x*g+je.z*m;je.x=y,je.z=S}je.normalize(),this.fireBolt(c,d,u,je.x,je.y,je.z,t.T.boltSpeed,t.T.boltDmg*t.dmgMul,t.T.bolt,t.T.boss?1.5:t.type==="heavy"?1.15:1),s.fx.burst(c,d,u,je.x,je.y,je.z,4,t.T.accent,3,.2,.06),s.sfx3d("enemyShot",c,d,u)}update(t){let e=this.game,i=e.world,s=e.player,r=this.list,a=s.pos.x,o=s.pos.z,l=s.pos.y;for(let h=r.length-1;h>=0;h--){let c=r[h];if(c.dead)continue;let d=c.T,u=d.scale;if(c.flash>0&&(c.flash=Math.max(0,c.flash-t*7),c.body.emissive.setScalar(c.flash*.9)),c.spawnT>0){c.spawnT-=t;let P=yt(1-c.spawnT/.7);c.root.scale.setScalar(u*(.2+.8*P*P*(3-2*P)));continue}let f=a-c.x,p=o-c.z,x=Math.hypot(f,p)||.001,m=f/x,g=p/x;c.losT-=t,c.losT<=0&&(c.losT=rt(.12,.22),c.los=!i.blockedLine(c.x,c.y+1.5*u,c.z,a,l+s.height*.8,o));let y=0,S=0,v=1,E=()=>{i.flowDir(c.x,c.z,Ph)?(y=Ph.x,S=Ph.z):(y=m,S=g)};if(d.melee)c.atkT>0&&(v=.15),c.los&&x<8?(y=m,S=g):E(),x<1.2&&(v=0),c.atkCd-=t,c.atkT>0?(c.atkT-=t,!c.didHit&&c.atkT<.2&&(c.didHit=!0,x<2.3&&Math.abs(l-c.y)<3&&s.damage(d.meleeDmg*c.dmgMul,c.x,c.z))):x<1.9&&Math.abs(l-c.y)<3&&c.atkCd<=0&&(c.atkT=.45,c.atkCd=.95,c.didHit=!1,e.sfx3d("swish",c.x,1,c.z));else{let[P,N]=d.range;c.strafeT-=t,c.strafeT<=0&&(c.strafeT=rt(1,2.8),c.strafe=-c.strafe),!c.los||x>N?E():x<P?(y=-m*.8+-g*c.strafe*.6,S=-g*.8+m*c.strafe*.6,v=.8):x>(P+N)*.5&&!d.boss?(y=m*.75+-g*c.strafe*.65,S=g*.75+m*c.strafe*.65,v=.8):d.boss?(y=m,S=g,v=x>6?.8:0):(y=-g*c.strafe,S=m*c.strafe,v=.55),(c.chargeT>0||c.burstLeft>0||c.slamT>0)&&(v*=.25),d.boss?this._bossAI(c,t,x):c.chargeT>0?(c.chargeT-=t,c.chargeT<=0&&(c.burstLeft=d.burst,c.burstT=0)):c.burstLeft>0?(c.burstT-=t,c.burstT<=0&&(c.los&&this._shoot(c),c.burstLeft--,c.burstT=d.burstGap)):c.los&&x<N+5&&(c.fireT-=t,c.fireT<=0&&(c.fireT=rt(d.fireDelay[0],d.fireDelay[1]),c.chargeT=.38,e.sfx3d("charge",c.x,1.4,c.z)))}for(let P=0;P<r.length;P++){let N=r[P];if(N===c||N.dead)continue;let k=c.x-N.x,L=c.z-N.z,z=k*k+L*L,V=c.radius+N.radius+.25;if(z<V*V&&z>1e-5){let G=Math.sqrt(z),et=(V-G)/V;y+=k/G*et*1.6,S+=L/G*et*1.6}}let w=Math.hypot(y,S);w>1&&(y/=w,S/=w),c.vx=Ne(c.vx,y*c.speed*v,7,t),c.vz=Ne(c.vz,S*c.speed*v,7,t),c.x+=c.vx*t,c.z+=c.vz*t,i.pushOut(c,c.radius,1.6),c.x=yt(c.x,-Jt+.8,Jt-.8),c.z=yt(c.z,-Jt+.8,Jt-.8);let _=Math.hypot(c.vx,c.vz),C=(c.los||d.boss?Math.atan2(f,p):_>.3?Math.atan2(c.vx,c.vz):c.yaw)-c.yaw;C=Math.atan2(Math.sin(C),Math.cos(C)),c.yaw+=C*Math.min(1,t*(d.boss?4:9)),c.walk+=_*t*(2.6/u);let A=Math.sin(c.walk)*yt(_/3)*.75;if(c.legL.rotation.x=A,c.legR.rotation.x=-A,c.hips.position.y=Math.abs(Math.cos(c.walk))*.04*yt(_/3),c.root.position.set(c.x,c.y,c.z),c.root.rotation.y=c.yaw,c.root.scale.setScalar(u),d.melee){if(c.atkT>0){let P=1-c.atkT/.45,N=P<.5?ve(.6,-2.4,P*2):ve(-2.4,.4,(P-.5)*2);c.armL.rotation.x=N,c.armR.rotation.x=N*.9-.2}else c.armL.rotation.x=.9-A*.3,c.armR.rotation.x=.9+A*.3;c.hips.rotation.x=yt(_/6)*.28}else{let P=Math.atan2(l+s.height*.6-(c.y+1.36*u),x);c.aimPitch=Ne(c.aimPitch,c.los?P:0,8,t);let N=c.burstLeft>0?.08:0;if(c.armR.rotation.x=-Math.PI/2-c.aimPitch+N+(c.chargeT>0?Math.sin(c.chargeT*60)*.02:0),c.armL.rotation.x=d.boss?c.armR.rotation.x:-A*.8,c.slamT>0){let k=yt(1-c.slamT/.9);c.armL.rotation.x=c.armR.rotation.x=ve(-Math.PI/2,-3,Math.min(1,k*1.6))}c.head.rotation.x=-c.aimPitch*.6}}this._updateBolts(t),this._updateSlams(t)}_bossAI(t,e,i){let s=this.game,r=t.T,a=s.player,o=t.hp/t.maxHp;if(o<.66&&t.summoned===0||o<.33&&t.summoned===1){t.summoned++;for(let l=0;l<3;l++){let h=t.yaw+(l-1)*2.1+Math.PI;s.spawnAt("rusher",t.x+Math.sin(h)*3,t.z+Math.cos(h)*3)}s.ui.banner("\u6BC1\u706D\u8005\u53EC\u5524\u4E86\u7A81\u88AD\u8005\uFF01",1.6)}if(t.slamT>0){t.slamT-=e,t.slamT<=0&&(s.fx.ring(t.x,.1,t.z,1,16,.85,12607743),this.slams.push({x:t.x,z:t.z,t:0,dur:.85,r1:16,dmg:r.meleeDmg*t.dmgMul,hit:!1}),s.fx.burst(t.x,.2,t.z,0,1,0,60,r.accent,10,.7,.1),s.fx.puff(t.x,.3,t.z,10,1.2,.3,.4,1.4,2.5),s.audio.slam(yt(1.2-i/40)),s.shake(.5));return}if(t.burstLeft>0){if(t.burstT-=e,t.burstT<=0)if(t.pattern===0){for(let l=-4;l<=4;l++)this._shoot(t,.5,l*.085);t.burstLeft=0}else this._shoot(t,1.6),t.burstLeft--,t.burstT=r.burstGap;return}if(t.chargeT>0){t.chargeT-=e,t.chargeT<=0&&(t.burstLeft=t.pattern===0?1:14,t.burstT=0);return}t.fireT-=e,t.fireT<=0&&(t.fireT=rt(r.fireDelay[0],r.fireDelay[1]),i<9&&Math.random()<.75?(t.slamT=.9,s.sfx3d("charge",t.x,2,t.z),s.ui.banner("\u9707\u8361\u6CE2\uFF01\u8DF3\u8D77\u6765\u8EB2\u907F",1.1)):(t.pattern=Math.random()<.5?0:1,t.chargeT=.55,s.sfx3d("charge",t.x,2,t.z)))}_updateSlams(t){let e=this.game.player;for(let i=this.slams.length-1;i>=0;i--){let s=this.slams[i];s.t+=t;let r=1+(s.r1-1)*(s.t/s.dur),a=Math.hypot(e.pos.x-s.x,e.pos.z-s.z);!s.hit&&Math.abs(a-r)<.9&&(s.hit=!0,e.onGround&&e.damage(s.dmg,s.x,s.z)),s.t>=s.dur&&this.slams.splice(i,1)}}_updateBolts(t){let e=this.game,i=e.world,s=e.player,r={};for(let a of this.bolts){if(a.life<=0)continue;a.life-=t;let o=a.m.position,l=a.v.length(),h=l*t,c=a.v.x/l,d=a.v.y/l,u=a.v.z/l,f=i.raycast(o.x,o.y,o.z,c,d,u,h,r);qi.copy(o),_a.copy(o).addScaledVector(a.v,t);let p=yt((qi.y+_a.y)/2,s.pos.y+.25,s.pos.y+s.height-.1),x=_a.x-qi.x,m=_a.y-qi.y,g=_a.z-qi.z,y=x*x+m*m+g*g,S=yt(((s.pos.x-qi.x)*x+(p-qi.y)*m+(s.pos.z-qi.z)*g)/y),v=qi.x+x*S-s.pos.x,E=qi.y+m*S-p,w=qi.z+g*S-s.pos.z;if(v*v+w*w<.42*.42&&Math.abs(E)<.45&&S*h<=(f===1/0?h:f)){s.damage(a.dmg,o.x-c*3,o.z-u*3),a.life=0,a.m.visible=!1;continue}if(f!==1/0){let _=o.x+c*f,M=o.y+d*f,C=o.z+u*f;je.set(1,1,1);let A=a.m.material.color;e.fx.burst(_,M,C,r.nx,r.ny,r.nz,7,[A.r,A.g,A.b],4,.3,.06),r.collider&&r.collider.barrel&&r.collider.barrel.alive&&e.explodeBarrel(r.collider.barrel),a.life=0,a.m.visible=!1;continue}o.addScaledVector(a.v,t),(a.life<=0||Math.abs(o.x)>Jt+2||Math.abs(o.z)>Jt+2||o.y>30)&&(a.life=0,a.m.visible=!1)}}};var lr={casual:{name:"\u723D\u73A9",desc:"\u5F3A\u5316\u5F00\u5C40\u5168\u6EE1\uFF0C\u654C\u4EBA\u4F24\u5BB3\u6B63\u5E38",hp:1e3,maxPerks:!0,enemyHp:1,enemyDmg:1},normal:{name:"\u666E\u901A",desc:"\u6BCF\u6CE2\u7ED3\u675F\u9009\u4E00\u5F20\u5F3A\u5316\u5361\uFF0C\u654C\u4EBA\u4F24\u5BB3 \xD74",hp:1e3,maxPerks:!1,enemyHp:1,enemyDmg:4},hard:{name:"\u56F0\u96BE",desc:"\u6BCF\u6CE2\u7ED3\u675F\u9009\u4E00\u5F20\u5F3A\u5316\u5361\uFF0C\u654C\u4EBA\u751F\u547D \xD71.35\u3001\u4F24\u5BB3 \xD77",hp:1e3,maxPerks:!1,enemyHp:1.35,enemyDmg:7}};var cr=n=>document.getElementById(n),yv=[["ak","AK-47"],["deagle","\u6C99\u6F20\u4E4B\u9E70"],["awp","AWP"],["knife","\u8FD1\u6218\u5200"]],zl=class{constructor(t){this.game=t,this.el={};for(let e of["hud","menu","pause","over","cross","hit","vig","lowhp","dmgdir","nums","scope","wave","left","score","combo","boss","bossbar","bossname","feed","banner","hp","hpbar","armor","armorbar","perkbar","wname","mag","res","slots","perkpick","perkcards","wtabs","ktabs","skins","skin-title","best","bestwave","stats","pick","over-title","sens","sens-v","vol","vol-v","quality","difficulty","diff-desc","loading","hint"])this.el[e]=cr(e);this.hitT=0,this.pickT=0,this.bannerT=0,this.bannerDur=1,this.comboT=0,this.arcs=[],this.nums=[];for(let e=0;e<26;e++){let i=document.createElement("div");i.style.display="none",this.el.nums.appendChild(i),this.nums.push({d:i,life:0,p:new I,vy:0})}this.nc=0,this._v=new I,this.tab="knife",this.cache={},this._bind(),this._buildSlots()}_bind(){let t=this.game,e=this.el;cr("btn-start").onclick=()=>{t.audio.init(),t.audio.ui(),t.startGame()},cr("btn-resume").onclick=()=>{t.audio.ui(),t.resume()},cr("btn-quit").onclick=()=>{t.audio.ui(),t.toMenu()},cr("btn-again").onclick=()=>{t.audio.ui(),t.startGame()},cr("btn-menu").onclick=()=>{t.audio.ui(),t.toMenu()};let i=t.settings;e.sens.value=i.sens,e["sens-v"].textContent=(+i.sens).toFixed(2),e.vol.value=Math.round(i.volume*100),e["vol-v"].textContent=Math.round(i.volume*100),e.quality.value=i.quality,e.sens.oninput=()=>{i.sens=+e.sens.value,e["sens-v"].textContent=i.sens.toFixed(2),t.saveSettings()},e.vol.oninput=()=>{i.volume=e.vol.value/100,e["vol-v"].textContent=e.vol.value,t.audio.setVolume(i.volume),t.saveSettings()},e.quality.onchange=()=>{i.quality=e.quality.value,t.applyQuality(),t.saveSettings()};let s=()=>{e["diff-desc"].textContent=lr[i.difficulty].desc};e.difficulty.value=i.difficulty,s(),e.difficulty.onchange=()=>{i.difficulty=e.difficulty.value,s(),t.saveSettings()}}buildArmory(){let t=this.game,e=t.loadout,i=this.el;i.wtabs.innerHTML="";for(let[l,h]of yv){let c=document.createElement("button"),d=l==="knife"?`${_n[e.knife]} \xB7 ${fs("knife",e.skins[e.knife]).name}`:fs("gun",e.skins[l]).name;c.innerHTML=`<span>${h}</span><small>${d}</small>`,l===this.tab&&(c.className="on"),c.onclick=()=>{t.audio.init(),t.audio.ui(),this.tab=l,this.buildArmory()},i.wtabs.appendChild(c)}i.ktabs.innerHTML="";let s=this.tab==="knife";if(i.ktabs.style.display=s?"flex":"none",s)for(let[l,h]of Object.entries(_n)){let c=document.createElement("button");c.textContent=h,e.knife===l&&(c.className="on"),c.onclick=()=>{t.audio.init(),t.audio.equip(),e.knife=l,t.saveLoadout(),this.buildArmory()},i.ktabs.appendChild(c)}let r=s?e.knife:this.tab,a=s?"knife":"gun",o=s?xh:_h;i["skin-title"].textContent=`${s?_n[e.knife]:si[this.tab].name} \xB7 \u76AE\u80A4\uFF08${o.length}\uFF09`,i.skins.innerHTML="";for(let l of o){let h=document.createElement("div");h.className="skin"+(e.skins[r]===l.id?" on":"");let c=cf(a,l.id),d=gh[l.rarity];h.innerHTML=`<div class="th${c?"":" stock"}"${c?` style="background-image:url(${c})"`:""}></div><div class="rb" style="background:${d.color}"></div><div class="nm">${l.name}</div><div class="ra" style="color:${d.color}">${d.name}</div>`,h.onclick=()=>{t.audio.init(),t.audio.equip(),e.skins[r]=l.id,t.saveLoadout(),t.applyLoadout(),this.buildArmory()},i.skins.appendChild(h)}t.showcase.show(r,e.skins[r]),i.best.textContent=t.best.score,i.bestwave.textContent=t.best.wave}show(t){let e=this.el;e.menu.classList.toggle("hidden",t!=="menu"),e.hud.classList.toggle("hidden",t==="menu"),e.pause.classList.toggle("hidden",t!=="pause"),e.over.classList.toggle("hidden",t!=="over"),t==="menu"&&this.buildArmory()}_buildSlots(){this.el.slots.innerHTML="",this.slotEls=xn.map((t,e)=>{let i=document.createElement("div");return i.innerHTML=`<b>${e+1}</b><span></span>`,this.el.slots.appendChild(i),i})}setWeapon(t){let e=this.el,i=this.game.loadout;xn.forEach((r,a)=>{this.slotEls[a].className=r===t.cur?"on":"",this.slotEls[a].lastChild.textContent=r==="knife"?_n[i.knife]:si[r].name});let s=t.cur==="knife"?fs("knife",i.skins[i.knife]):fs("gun",i.skins[t.cur]);if(e.wname.innerHTML=`${t.displayName} <span style="color:${gh[s.rarity].color}">| ${s.name}</span>`,t.def.type==="gun"){let r=t.ammo[t.cur];e.mag.textContent=r.mag,e.res.textContent="/ "+r.reserve,e.mag.className=r.mag<=r.max*.25?"low":""}else e.mag.textContent="\u221E",e.res.textContent="",e.mag.className=""}setScope(t){this.el.scope.classList.toggle("on",t),this.el.cross.style.display=t?"none":""}hitmarker(t,e){this.hitT=e?.32:.18,this.el.hit.className=e?"kill":t?"head":""}banner(t,e=2.2){this.el.banner.textContent=t,this.bannerT=this.bannerDur=e}feed(t,e=""){let i=document.createElement("div");for(i.className=e,i.innerHTML=t,this.el.feed.appendChild(i);this.el.feed.children.length>6;)this.el.feed.firstChild.remove();setTimeout(()=>i.remove(),3600)}combo(t){t<2||(this.el.combo.textContent=`${t} \u8FDE\u6740  \xD7${(1+(t-1)*.25).toFixed(2)}`,this.comboT=2.2)}damageFrom(t){let e=document.createElement("div");e.className="arc",this.el.dmgdir.appendChild(e),this.arcs.push({d:e,a:t,t:1.1})}dmgNumber(t,e,i,s){let r=this.nums[this.nc];this.nc=(this.nc+1)%this.nums.length,r.p.copy(t),r.p.y+=.15,r.life=.75,r.vy=1.3,r.ox=(Math.random()-.5)*40,r.d.textContent=Math.round(e),r.d.className=s?"crit":i?"head":"",r.d.style.display=""}setPerks(t,e){this.el.perkbar.innerHTML=e.filter(i=>t[i.id]).map(i=>`<span>${i.icon}<i>${t[i.id]}</i></span>`).join("")}showPerks(t){let e=this.el;if(!t){e.perkpick.classList.add("hidden");return}e.perkcards.innerHTML=t.map((i,s)=>`<div class="pcard"><span class="key">${s+1}</span><div class="icon">${i.icon}</div><div class="nm">${i.name}</div><div class="ds">${i.desc}</div><div class="lv">\u7B49\u7EA7 ${i.lv} \u2192 ${i.lv+1}</div></div>`).join(""),e.perkpick.classList.remove("hidden")}pickupFlash(t){let e=this.el.pick;e.className=t,this.pickT=.45}gameOver(t,e){let i=this.el;i["over-title"].textContent=e?"\u80DC \u5229":"\u9635 \u4EA1",i["over-title"].style.color=e?"#ffcf40":"";let s=t.shots?Math.round(t.hits/t.shots*100):0;i.stats.innerHTML=[["\u5230\u8FBE\u6CE2\u6B21",t.wave,t.newWave],["\u603B\u5F97\u5206",t.score,t.newScore],["\u51FB\u6740",t.kills],["\u7206\u5934",t.heads],["\u5200\u6740",t.knifeKills],["\u547D\u4E2D\u7387",s+"%"]].map(([r,a,o])=>`<div class="${o?"rec":""}">${r}${o?" \xB7 \u65B0\u7EAA\u5F55!":""}<b>${a}</b></div>`).join(""),this.show("over")}update(t){let e=this.game,i=this.el,s=e.player,r=e.weapons,a=Math.ceil(s.hp);this.cache.hp!==a&&(this.cache.hp=a,i.hp.textContent=a,i.hpbar.style.width=yt(s.hp/s.maxHp)*100+"%");let o=Math.ceil(s.armor);this.cache.ar!==o&&(this.cache.ar=o,i.armor.textContent=o,i.armorbar.style.width=yt(s.armor/300)*100+"%"),this.cache.wave!==e.wave&&(this.cache.wave=e.wave,i.wave.textContent=e.wave);let l=e.enemies.alive+e.spawnQueue.length;this.cache.left!==l&&(this.cache.left=l,i.left.textContent=l),this.cache.score!==e.stats.score&&(this.cache.score=e.stats.score,i.score.textContent=e.stats.score);let h=r.def.type==="knife"?3:2.5+r.spreadNow*400;if(i.cross.style.setProperty("--g",h.toFixed(1)+"px"),this.hitT>0){this.hitT-=t,i.hit.style.opacity=yt(this.hitT/.12);let x=1+this.hitT*1.5;i.hit.style.transform=`scale(${x})`}else i.hit.style.opacity=0;i.vig.style.opacity=s.hurtT*.7,this.pickT>0?(this.pickT-=t,i.pick.style.opacity=yt(this.pickT/.45)*.55):i.pick.style.opacity=0;let c=s.hp/s.maxHp;if(i.lowhp.style.opacity=c<.3&&!s.dead?(.35+.25*Math.sin(e.time*6))*(1-c/.3)+.15:s.dead?.8:0,this.bannerT>0){this.bannerT-=t;let x=this.bannerT/this.bannerDur;i.banner.style.opacity=yt(Math.min(x*4,(1-x)*8)),i.banner.style.transform=`scale(${1+(1-x)*.06})`}else i.banner.style.opacity=0;this.comboT>0?(this.comboT-=t,i.combo.style.opacity=yt(this.comboT*2)):i.combo.style.opacity=0;for(let x=this.arcs.length-1;x>=0;x--){let m=this.arcs[x];if(m.t-=t,m.t<=0){m.d.remove(),this.arcs.splice(x,1);continue}let g=m.a-s.yaw,y=Math.sin(g),S=-Math.cos(g);m.d.style.transform=`rotate(${Math.atan2(y,S)}rad)`,m.d.style.opacity=yt(m.t*1.6)}let d=e.camera,u=innerWidth,f=innerHeight;for(let x of this.nums)if(!(x.life<=0)){if(x.life-=t,x.life<=0){x.d.style.display="none";continue}if(x.p.y+=x.vy*t,x.vy-=2*t,this._v.copy(x.p).project(d),this._v.z>1){x.d.style.opacity=0;continue}x.d.style.left=(this._v.x*.5+.5)*u+x.ox+"px",x.d.style.top=(-this._v.y*.5+.5)*f+"px",x.d.style.opacity=yt(x.life*3)}let p=e.enemies.list.find(x=>x.T.boss&&!x.dead);i.boss.classList.toggle("on",!!p),p&&(i.bossbar.style.width=yt(p.hp/p.maxHp)*100+"%")}};var Hl=class{constructor(t){this.game=t;let e=this.scene=new Ki;e.background=new Tt(395018),e.fog=new Ar(395018,5,13),e.environment=t.world.envMap,e.environmentIntensity=.8,this.camera=new ke(30,1,.05,40),this.dist=3,this.distT=3,this.yaw=.5,this.pitch=.08,this.auto=!0,this.idle=0;let i=new kt(new Hi(9,48),new pe({color:789777,metalness:.7,roughness:.32}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i);let s=new kt(new _i(.75,.85,.12,48),new pe({color:1382172,metalness:.85,roughness:.3}));s.position.y=.06,s.receiveShadow=!0,s.castShadow=!0,e.add(s);let r=new kt(new In(.76,.012,8,64),new xe({color:new Tt(3.2,1.6,.4)}));r.rotation.x=Math.PI/2,r.position.y=.125,e.add(r),this.ring=r;for(let c=0;c<7;c++){if(c===3)continue;let d=-1.2+c*.4,u=c%2?new Tt(.2,1.4,1.9):new Tt(1.9,.3,1.3),f=new kt(new Te(.035,3.2,.035),new xe({color:u}));f.position.set(Math.sin(d)*5.5,1.6,-Math.cos(d)*5.5),e.add(f)}let a=new qr(16773597,42,10,.5,.7,2);a.position.set(1.6,3.6,2.4),a.target.position.set(0,1,0),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.bias=-3e-4,a.shadow.radius=4,e.add(a,a.target);let o=new gi(4249855,22,9,2);o.position.set(-2.2,1.6,-1.8),e.add(o);let l=new gi(16728256,22,9,2);l.position.set(2.4,1,-2),e.add(l);let h=new gi(16765088,14,9,2);h.position.set(-1.5,1.4,2.6),e.add(h),e.add(new dn(8425648,1052692,.35)),this.pivot=new te,this.pivot.position.set(0,1.08,0),e.add(this.pivot),this.models={},this.cur=null,this.time=0}show(t,e){if(!this.models[t]){let i=ms[t](),s=new te;i.kind==="gun"?i.group.rotation.y=Math.PI/2:i.group.rotation.z=-.9,s.add(i.group),s.updateMatrixWorld(!0);let r=new Pi().setFromObject(s),a=r.getCenter(new I),o=r.getSize(new I),l=(t==="deagle"?.72:i.kind==="gun"?1.3:.82)/Math.max(o.x,o.y,o.z);i.group.position.sub(a),s.scale.setScalar(l),s.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.pivot.add(s),this.models[t]={m:i,wrap:s}}for(let[i,s]of Object.entries(this.models))s.wrap.visible=i===t;this.models[t].m.setSkin(e),this.cur!==t&&(this.cur=t,this.yaw=.55,this.auto=!0)}drag(t,e){this.yaw+=t*.008,this.pitch=yt(this.pitch+e*.005,-.5,.9),this.auto=!1,this.idle=0}zoom(t){this.distT=yt(this.distT+t*.0015,1.8,4.5)}update(t,e){this.time+=t,this.auto||(this.idle+=t,this.idle>4&&(this.auto=!0)),this.auto&&(this.yaw+=t*.35),this.dist=Ne(this.dist,this.distT,8,t),this.pivot.rotation.y=this.yaw,this.pivot.position.y=1.08+Math.sin(this.time*1.2)*.02;let i=this.camera;i.aspect!==e&&(i.aspect=e,i.updateProjectionMatrix()),i.position.set(0,1.12+Math.sin(this.pitch)*this.dist,Math.cos(this.pitch)*this.dist),i.lookAt(0,1.05,0),this.ring.material.color.setRGB(3.2+Math.sin(this.time*2)*.6,1.6,.4)}};var Gl=[{id:"dmg",icon:"\u{1F4A5}",name:"\u7A7F\u7532\u5F39\u82AF",desc:"\u67AA\u68B0\u4F24\u5BB3 +15%",max:6},{id:"rate",icon:"\u26A1",name:"\u8F7B\u91CF\u67AA\u673A",desc:"\u5C04\u901F +10%",max:4},{id:"reload",icon:"\u{1F504}",name:"\u5FEB\u901F\u6362\u5F39",desc:"\u6362\u5F39\u65F6\u95F4 -18%",max:3},{id:"mag",icon:"\u{1F4E6}",name:"\u6269\u5BB9\u5F39\u5323",desc:"\u5F39\u5323\u5BB9\u91CF +30%",max:3},{id:"recoil",icon:"\u{1F3AF}",name:"\u7A33\u5B9A\u63E1\u628A",desc:"\u540E\u5750\u529B -20%",max:3},{id:"head",icon:"\u2620\uFE0F",name:"\u7206\u5934\u4E13\u5BB6",desc:"\u7206\u5934\u4F24\u5BB3 +25%",max:4},{id:"knife",icon:"\u{1F5E1}\uFE0F",name:"\u5200\u950B\u5927\u5E08",desc:"\u5200\u4F24\u5BB3 +60%\uFF0C\u5200\u6740\u56DE\u590D 120 \u751F\u547D",max:3},{id:"hp",icon:"\u2764\uFE0F",name:"\u751F\u547D\u5F3A\u5316",desc:"\u751F\u547D\u4E0A\u9650 +250 \u5E76\u7ACB\u5373\u56DE\u6EE1",max:4},{id:"armor",icon:"\u{1F6E1}\uFE0F",name:"\u6218\u672F\u62A4\u7532",desc:"\u6BCF\u6CE2\u5F00\u59CB\u83B7\u5F97 150 \u62A4\u7532",max:2},{id:"leech",icon:"\u{1FA78}",name:"\u55DC\u8840",desc:"\u6BCF\u6B21\u51FB\u6740\u56DE\u590D 40 \u751F\u547D",max:3},{id:"speed",icon:"\u{1F45F}",name:"\u80BE\u4E0A\u817A\u7D20",desc:"\u79FB\u52A8\u901F\u5EA6 +8%",max:3},{id:"boom",icon:"\u{1F9E8}",name:"\u8FDE\u9501\u7206\u7834",desc:"\u88AB\u51FB\u6740\u7684\u654C\u4EBA\u6709 25% \u51E0\u7387\u7206\u70B8",max:3}],Lh=["butterfly","karambit","m9"],Nh=class extends xi{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!1}render(t,e,i){let s=t.autoClear;t.autoClear=!1,t.setRenderTarget(this.renderToScreen?null:i),t.clearDepth(),t.render(this.scene,this.camera),t.autoClear=s}};function Dh(n,t){try{return Object.assign(t,JSON.parse(localStorage.getItem(n)||"{}"))}catch{return t}}function Vl(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}var Uh=class{constructor(){this.debug=new URLSearchParams(location.search).has("debug"),this.settings=Dh("ba_settings",{sens:1,volume:.6,quality:"high",difficulty:"casual"}),lr[this.settings.difficulty]||(this.settings.difficulty="casual"),this.diff=lr[this.settings.difficulty];let t=Dh("ba_loadout",{});this.loadout={knife:t.knife||"butterfly",skins:Object.assign({ak:"redline",deagle:"gold",awp:"dragon",butterfly:"fade",karambit:"doppler",m9:"tiger"},t.skins||{})},this.best=Dh("ba_best",{score:0,wave:0}),this.perks={},this.state="menu",this.time=0,this.wave=0,this.spawnQueue=[],this.spawnT=0,this.timers=[],this.stats={score:0,kills:0,heads:0,knifeKills:0,shots:0,hits:0,wave:0},this.combo=0,this.comboT=0,this.phase="idle",this.perkOptions=null,this.playerLit=!0,this.litT=0,this.pickups=[];let e=this.renderer=new ml({antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:this.debug});e.shadowMap.enabled=!0,e.shadowMap.type=ss,e.toneMapping=as,e.toneMappingExposure=.92,e.outputColorSpace=we,document.getElementById("game").appendChild(e.domElement),this.canvas=e.domElement,this.audio=new wl,this.audio.volume=this.settings.volume,this.world=new bl(e),this.fx=new El(this.world.scene),this.camera=new ke(78,1,.06,600),this.camera.rotation.order="YXZ",this.ui=new zl(this),this.player=new Al(this),this.weapons=new Ol(this),this.enemies=new kl(this),this.showcase=new Hl(this),this._buildPickups();let i=new ze(2,2,{type:Xe});this.composer=new vl(e,i),this.worldPass=new yl(this.showcase.scene,this.showcase.camera),this.vmPass=new Nh(this.weapons.scene,this.weapons.camera),this.vmPass.enabled=!1,this.bloom=new Qs(new it(256,256),.5,.55,1.12),this.fxaa=new Sl,this.composer.addPass(this.worldPass),this.composer.addPass(this.vmPass),this.composer.addPass(this.bloom),this.composer.addPass(new Ml),this.composer.addPass(this.fxaa),this.input={keys:{},pressed:{},dx:0,dy:0,lmb:!1,rmb:!1,lmbP:!1,rmbP:!1},this._bindInput(),this.applyQuality(),addEventListener("resize",()=>this.resize()),this.ui.show("menu"),document.getElementById("loading").remove(),this.clock=performance.now(),this._loop=this._loop.bind(this),this.debug||requestAnimationFrame(this._loop)}saveSettings(){Vl("ba_settings",this.settings)}saveLoadout(){Vl("ba_loadout",this.loadout)}applyLoadout(){this.weapons.setLoadout(this.loadout),this.ui.setWeapon(this.weapons)}applyQuality(){let t=this.settings.quality,e=this.renderer,i=this.world.sun,s=devicePixelRatio||1;this.pixelRatio=t==="ultra"?Math.min(s,2):t==="high"?Math.min(s,1.5):t==="mid"?Math.min(s,1.15):Math.min(s,.9);let r=t==="ultra"||t==="high"?4096:t==="mid"?2048:1024;i.shadow.mapSize.x!==r&&(i.shadow.mapSize.set(r,r),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null)),this.bloom.enabled=t!=="low",this.fxaa.enabled=t!=="low",this.resize()}resize(){let t=innerWidth,e=innerHeight;this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.weapons.camera.aspect=t/e,this.weapons.camera.updateProjectionMatrix()}_bindInput(){let t=this.input,e=this.canvas;addEventListener("keydown",i=>{if((i.code==="Tab"||i.code==="Space"&&this.state==="playing")&&i.preventDefault(),i.repeat||(t.keys[i.code]=!0,t.pressed[i.code]=!0,this.state!=="playing"))return;let s=this.weapons,r="1234".indexOf(i.key);if(this.perkOptions&&r>=0&&r<this.perkOptions.length){this.choosePerk(r);return}r>=0?s.equip(xn[r]):i.code==="KeyQ"?s.equip(s.last):i.code==="KeyR"?s.reload():i.code==="KeyF"?s.inspect():i.code==="KeyV"&&this.cycleKnife()}),addEventListener("keyup",i=>{t.keys[i.code]=!1}),addEventListener("blur",()=>{t.keys={},t.lmb=t.rmb=!1}),addEventListener("mousemove",i=>{this.state==="playing"&&(document.pointerLockElement===e||this.debug)?(t.dx+=i.movementX,t.dy+=i.movementY):this.state==="menu"&&this.dragging&&this.showcase.drag(i.movementX,i.movementY)}),e.addEventListener("mousedown",i=>{if(this.state==="menu"){this.dragging=!0;return}if(this.state==="playing"){if(document.pointerLockElement!==e&&!this.debug){this.lock();return}i.button===0?(t.lmb=!0,t.lmbP=!0):i.button===2&&(t.rmb=!0,t.rmbP=!0)}}),addEventListener("mouseup",i=>{this.dragging=!1,i.button===0?t.lmb=!1:i.button===2&&(t.rmb=!1)}),addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("wheel",i=>{if(this.state==="menu"){this.showcase.zoom(i.deltaY);return}if(this.state!=="playing")return;let s=performance.now();s-(this._wheelT||0)<140||(this._wheelT=s,this.weapons.cycle(i.deltaY>0?1:-1))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{if(this.debug)return;let i=document.pointerLockElement===e;!i&&this.state==="playing"?this.pause():i&&this.state==="paused"&&(this.state="playing",this.ui.show("hud"),this.clock=performance.now())}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&!this.debug&&this.pause()})}lock(){if(!this.debug)try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}pause(){this.state==="playing"&&(this.state="paused",this.input.keys={},this.input.lmb=this.input.rmb=!1,this.ui.show("pause"))}resume(){if(this.debug){this.state="playing",this.ui.show("hud");return}this.lock()}toMenu(){this.state="menu",document.pointerLockElement&&document.exitPointerLock(),this.enemies.clear(),this.clearPickups(),this.ui.showPerks(null),this.perkOptions=null,this.ui.show("menu")}cycleKnife(){let t=this.loadout;t.knife=Lh[(Lh.indexOf(t.knife)+1)%Lh.length],this.saveLoadout(),this.ui.feed(`\u8FD1\u6218\u6B66\u5668 \u2192 <b>${_n[t.knife]}</b>`,"sys"),this.weapons.cur==="knife"?(this.weapons.state="holster",this.weapons.equip("knife")):this.ui.setWeapon(this.weapons)}after(t,e){this.timers.push({t,fn:e})}shake(t){this.player.shakeT=Math.min(.7,this.player.shakeT+t)}sfx3d(t,e,i,s){let r=this.camera,a=e-r.position.x,o=s-r.position.z,l=Math.hypot(a,o,i-r.position.y),h=Math.pow(yt(1-l/55),1.6);if(h<.03)return;let c=l>.5?(a*Math.cos(this.player.yaw)-o*Math.sin(this.player.yaw))/l:0;t==="swish"?this.audio.swish(!1):this.audio[t](h,c*.8)}startGame(){this.audio.init(),this.enemies.clear(),this.clearPickups(),this.timers.length=0;let t=this.diff=lr[this.settings.difficulty];if(this.perks={},t.maxPerks)for(let e of Gl)this.perks[e.id]=e.max;this.ui.setPerks(this.perks,Gl),this.ui.showPerks(null),this.perkOptions=null,this.won=!1,this.player.reset(),this.player.maxHp=t.hp+250*(this.perks.hp||0),this.player.hp=this.player.maxHp,this.weapons.resetAmmo(),this.weapons.equip("ak",!0),this.stats={score:0,kills:0,heads:0,knifeKills:0,shots:0,hits:0,wave:0},this.wave=0,this.combo=0,this.spawnQueue=[],this.world.resetBarrels(),this.state="playing",this.ui.show("hud"),this.ui.cache={},this.lock(),this.phase="countdown",this.ui.banner(`\u51C6\u5907\u6218\u6597 \xB7 ${t.name}`,2),this.after(2.2,()=>this.nextWave()),this.clock=performance.now()}nextWave(){if(this.state==="menu"||this.state==="over")return;let t=++this.wave;this.stats.wave=t,this.world.resetBarrels(),this.weapons.refill(),this.ui.setWeapon(this.weapons),this.perks.armor&&(this.player.armor=Math.min(300,this.player.armor+150*this.perks.armor));let e=[],i=t%5===0,s=i?4+t:Math.min(44,5+Math.round(t*2.4));for(let r=0;r<s;r++){let a=Math.random(),o=t>=3?Math.min(.2,.06+t*.012):0,l=t>=2?.3:.12;e.push(a<o?"heavy":a<o+l?"rusher":"grunt")}i&&e.splice(2,0,"boss"),this.spawnQueue=e,this.spawnT=.6,this.phase="fight",this.ui.banner(i?`\u7B2C ${t} \u6CE2 \xB7 BOSS \u6765\u88AD`:`\u7B2C ${t} \u6CE2`,2.4),i?this.audio.boss():this.audio.wave()}spawnAt(t,e,i){return e=yt(e,-29,29),i=yt(i,-29,29),this.world.isBlocked(e,i)&&(e=this.player.pos.x+rt(-4,4),i=this.player.pos.z+rt(-4,4)),this.enemies.spawn(t,e,i,this.wave)}_spawnNext(){let t=this.player.pos,e=this.world.spawns.filter(r=>Math.hypot(r.x-t.x,r.z-t.z)>15),i=Jd(e.length?e:this.world.spawns),s=this.spawnQueue.shift();this.enemies.spawn(s,i.x+rt(-.6,.6),i.z+rt(-.6,.6),this.wave)}_waveCleared(){this.phase="clear",this.ui.banner("\u6CE2\u6B21\u6E05\u9664",1.8),this.audio.perk(),this.stats.score+=200+this.wave*50,this.player.heal(150),this.after(1.6,()=>this.offerPerks())}offerPerks(){if(this.state==="menu"||this.state==="over")return;let t=Gl.filter(i=>(this.perks[i.id]||0)<i.max),e=[];for(;e.length<3&&t.length;){let i=t.splice(Math.floor(Math.random()*t.length),1)[0];e.push(Object.assign({lv:this.perks[i.id]||0},i))}if(!e.length){this.after(2,()=>this.nextWave());return}this.perkOptions=e,this.ui.showPerks(e),this.phase="perk"}choosePerk(t){let e=this.perkOptions[t];e&&(this.perks[e.id]=(this.perks[e.id]||0)+1,e.id==="hp"&&(this.player.maxHp+=250,this.player.hp=this.player.maxHp),e.id==="mag"&&this.weapons.refill(),this.perkOptions=null,this.ui.showPerks(null),this.ui.setPerks(this.perks,Gl),this.audio.perk(),this.ui.feed(`\u83B7\u5F97\u5F3A\u5316 <b>${e.icon} ${e.name}</b>`,"sys"),this.phase="countdown",this.ui.banner("\u4E0B\u4E00\u6CE2\u5373\u5C06\u5230\u6765",1.8),this.after(2.4,()=>this.nextWave()))}onPlayerDead(){this.audio.dead(),this.ui.showPerks(null),this.perkOptions=null,this.weapons.setScope(!1);let t=this.stats;t.newScore=t.score>this.best.score,t.newWave=t.wave>this.best.wave,this.best.score=Math.max(this.best.score,t.score),this.best.wave=Math.max(this.best.wave,t.wave),Vl("ba_best",this.best),this.after(1.6,()=>{this.state="over",document.pointerLockElement&&document.exitPointerLock(),this.ui.gameOver(t)})}fireBullet(t,e,i){let s=this.camera,r=s.position,a=this.stats,o=this._dir||(this._dir=new I),l=this._rgt||(this._rgt=new I),h=this._up||(this._up=new I);s.getWorldDirection(o),l.crossVectors(o,s.up).normalize(),h.crossVectors(l,o);let c=rt(Math.PI*2),d=Math.sqrt(Math.random())*e;o.addScaledVector(l,Math.cos(c)*d).addScaledVector(h,Math.sin(c)*d).normalize(),a.shots++;let u=this._hit||(this._hit={}),f=this.world.raycast(r.x,r.y,r.z,o.x,o.y,o.z,400,u),p=this._end||(this._end=new I),x=this.perks,m=[],g=f===1/0?200:f,y=!1;for(let S=0;S<(t.pierce?4:1);S++){let v=this.enemies.raycast(r,o,f===1/0?400:f,m);if(!v)break;y=!0,m.push(v.e);let E=p.copy(r).addScaledVector(o,v.t).clone(),w=t.dmg*(1+.15*(x.dmg||0))*(S>0?.7:1);v.head&&(w*=t.headMul*(1+.25*(x.head||0)));let _=this.enemies.damage(v.e,w,{head:v.head,point:E,dir:o,force:t.pierce?9:4,weapon:t.name});this.ui.hitmarker(v.head,_),this.ui.dmgNumber(E,w,v.head),v.head?this.audio.head():this.audio.hit(),t.pierce||(g=v.t)}if(y&&a.hits++,p.copy(r).addScaledVector(o,g),(!y||t.pierce)&&f!==1/0){let S=r.x+o.x*f,v=r.y+o.y*f,E=r.z+o.z*f,w=u.collider&&u.collider.barrel;w&&w.alive?this.explodeBarrel(w):(this.fx.decal(S,v,E,u.nx,u.ny,u.nz,t.pierce?1.5:1),this.fx.burst(S,v,E,u.nx,u.ny,u.nz,7,[3.2,2.2,1],5,.3,.035),this.fx.puff(S+u.nx*.05,v+u.ny*.05,E+u.nz*.05,3,.16,.55,.35,.7,.5),Math.random()<.25&&this.audio.ricochet(0))}this.fx.tracer(i,p,t.tracer,t.pierce?.03:.016,t.pierce?.14:.06),this.fx.flash(i.x,i.y,i.z,16756832,16*t.flash,.06,11)}ejectShell(){let t=this.camera,e=this._dir,i=this._rgt,s=this._up,r=new I().copy(t.position).addScaledVector(e,.45).addScaledVector(i,.2).addScaledVector(s,-.12),a=new I().copy(this.player.vel).addScaledVector(i,rt(1.6,2.6)).addScaledVector(s,rt(1.5,2.6)).addScaledVector(e,rt(-.5,.5));this.fx.shell(r,a,this.player.pos.y)}knifeHit(t){let e=this.camera,i=e.position,s=si.knife,r=this._dir||(this._dir=new I);e.getWorldDirection(r);let a=this._hit||(this._hit={}),o=this.world.raycast(i.x,i.y,i.z,r.x,r.y,r.z,s.range,a),l=this.enemies.raycast(i,r,Math.min(s.range,o));if(!l){let h=null,c=s.range;for(let d of this.enemies.list){if(d.dead||d.spawnT>.35)continue;let u=d.x-i.x,f=d.y+1.1*d.T.scale-i.y,p=d.z-i.z,x=Math.hypot(u,f,p)-d.radius;x<c&&(u*r.x+f*r.y+p*r.z)/(x+d.radius)>.72&&(c=x,h=d)}h&&!this.world.blockedLine(i.x,i.y,i.z,h.x,h.y+1.1,h.z)&&(l={e:h,t:Math.max(.3,c),head:!1})}if(l){let h=l.e,c=new I().copy(i).addScaledVector(r,l.t),d=t&&Math.sin(h.yaw)*r.x+Math.cos(h.yaw)*r.z>.35&&!h.T.boss,u=(t?s.stabDmg:s.slashDmg)*(1+.6*(this.perks.knife||0));d&&(u=Math.max(u*3,h.hp));let f=this.enemies.damage(h,u,{head:!1,knife:!0,back:d,point:c,dir:r,force:t?7:4,weapon:_n[this.loadout.knife]});return this.ui.hitmarker(d,f),this.ui.dmgNumber(c,u,!1,d),this.audio.stab(),this.shake(t?.16:.07),this.stats.hits++,!0}else if(o!==1/0){let h=i.x+r.x*o,c=i.y+r.y*o,d=i.z+r.z*o,u=a.collider&&a.collider.barrel;this.fx.burst(h,c,d,a.nx,a.ny,a.nz,10,[3.5,2.6,1.2],4,.3,.035),this.audio.clank(),this.shake(.06),u&&u.alive&&t&&this.explodeBarrel(u)}return!1}explodeAt(t,e,i,s,r,a=1){this.fx.explosion(t,.5,e,a),this.sfx3d("explosion",t,.5,e);let o=this.player,l=Math.hypot(o.pos.x-t,o.pos.z-e);this.shake(yt(.6-l/30,0,.6)),r&&l<i*.8&&Math.abs(o.pos.y)<3&&o.damage(55*(1-l/(i*.8)),t,e);for(let h of this.enemies.list.slice()){let c=Math.hypot(h.x-t,h.z-e);if(c<i+h.radius&&!h.dead){let d=new I(h.x-t,0,h.z-e).normalize();this.enemies.damage(h,s*(1-c/(i+h.radius)*.7),{dir:d,force:12,weapon:"\u7206\u70B8",explosion:!0})}}for(let h of this.world.barrels)h.alive&&Math.hypot(h.x-t,h.z-e)<i*.75&&this.after(rt(.1,.25),()=>this.explodeBarrel(h))}explodeBarrel(t){t.alive&&(t.alive=!1,t.mesh.visible=!1,t.collider.active=!1,this.explodeAt(t.x,t.z,6.5,320,!0,1))}onEnemyKilled(t,e){let i=this.stats,s=this.player,r=t.T;i.kills++,e.head&&i.heads++,e.knife&&i.knifeKills++,this.combo=this.comboT>0?this.combo+1:1,this.comboT=4;let a=1+(this.combo-1)*.25,o=Math.round(r.score*(e.head?1.5:1)*(e.knife?2:1)*(e.back?1.5:1)*a);i.score+=o;let l=e.back?"\u80CC\u523A":e.head?"\u7206\u5934":e.knife?"\u5200\u6740":e.explosion?"\u70B8\u98DE":"\u51FB\u6740";this.ui.feed(`${l} \xB7 ${r.name} <b>+${o}</b>`,e.head?"head":e.knife?"knife":""),this.ui.combo(this.combo),this.audio.kill(),this.perks.leech&&s.heal(40*this.perks.leech),e.knife&&this.perks.knife&&s.heal(120),this.perks.boom&&!e.explosion&&Math.random()<.25*this.perks.boom&&this.after(.05,()=>this.explodeAt(t.x,t.z,4.2,150,!1,.6));let h=Math.random();r.boss?(this.dropPickup("health",t.x,t.z),this.dropPickup("ammo",t.x+1,t.z),this.dropPickup("armor",t.x-1,t.z)):h<(s.hp<s.maxHp*.5?.24:.12)?this.dropPickup("health",t.x,t.z):h<.4?this.dropPickup("ammo",t.x,t.z):(h<.46||t.type==="heavy")&&this.dropPickup("armor",t.x,t.z),r.boss&&!this.won&&this.win()}win(){this.won=!0,this.phase="won",this.spawnQueue.length=0,this.ui.showPerks(null),this.perkOptions=null,this.weapons.setScope(!1),this.weapons.wantScope=!1,this.stats.score+=5e3,this.ui.banner("BOSS \u5DF2\u51FB\u8D25 \xB7 \u80DC\u5229",3.2),this.audio.perk(),this.ui.feed("\u901A\u5173\u5956\u52B1 <b>+5000</b>","sys");let t=0;for(let e of this.enemies.list.slice())e.T.boss||this.after(.3+.13*t++,()=>this.enemies.damage(e,1e7,{explosion:!0,force:9,weapon:"\u6E05\u573A"}));this.after(3.4,()=>{let e=this.stats;e.newScore=e.score>this.best.score,e.newWave=e.wave>this.best.wave,this.best.score=Math.max(this.best.score,e.score),this.best.wave=Math.max(this.best.wave,e.wave),Vl("ba_best",this.best),this.state="over",document.pointerLockElement&&document.exitPointerLock(),this.ui.gameOver(e,!0)})}_buildPickups(){let t=e=>new xe({color:new Tt(e[0],e[1],e[2])});this.pickMat={health:t([.4,3.2,.6]),ammo:t([3.2,2.2,.4]),armor:t([.4,1.8,3.4])},this.pickGeo={health:new Vr(.2),ammo:new Te(.3,.2,.2),armor:new Gr(.2)}}dropPickup(t,e,i){let s=new kt(this.pickGeo[t],this.pickMat[t]);s.position.set(e,.9,i),s.scale.setScalar(.01),this.world.scene.add(s);let r=rt(6.28),a=rt(1.2,2.8);this.pickups.push({m:s,type:t,age:0,vx:Math.cos(r)*a,vz:Math.sin(r)*a,vy:rt(4.5,6.2),spd:0})}clearPickups(){for(let t of this.pickups)this.world.scene.remove(t.m);this.pickups.length=0}_updatePickups(t){let e=this.player,i=this.fx.sparks;for(let s=this.pickups.length-1;s>=0;s--){let r=this.pickups[s],a=r.m,o=a.material.color;if(r.age+=t,a.rotation.y+=t*7,a.rotation.x+=t*3.5,r.age<.6)r.vy-=17*t,a.position.x+=r.vx*t,a.position.z+=r.vz*t,a.position.y+=r.vy*t,a.position.y<.35&&(a.position.y=.35,r.vy*=-.45),a.scale.setScalar(Math.min(1,r.age/.14));else if(!e.dead){let l=e.pos.x,h=e.pos.y+e.height*.55,c=e.pos.z,d=l-a.position.x,u=h-a.position.y,f=c-a.position.z,p=Math.hypot(d,u,f)||.001;r.spd=Math.min(38,r.spd+52*t);let x=Math.max(3,r.spd)*t;if(p<x+.55){this._collect(r),this.world.scene.remove(a),this.pickups.splice(s,1);continue}let m=Math.min(1,p/8)*2.2*t;a.position.x+=d/p*x,a.position.y+=u/p*x+m,a.position.z+=f/p*x,a.scale.setScalar(yt(p/1.6,.35,1)*(1+Math.sin(r.age*24)*.14));for(let g=0;g<2;g++)i.emit(a.position.x+rt(-.06,.06),a.position.y+rt(-.06,.06),a.position.z+rt(-.06,.06),rt(-.4,.4),rt(-.2,.5),rt(-.4,.4),rt(.25,.45),rt(.05,.09),o.r,o.g,o.b,.9,0,2.5)}}}_collect(t){let e=this.player,i=t.m,s=i.material.color;t.type==="health"?(e.heal(200),this.ui.feed("\u751F\u547D <b>+200</b>","sys")):t.type==="ammo"?(this.weapons.addAmmo(.35),this.ui.setWeapon(this.weapons),this.ui.feed("\u5F39\u836F\u8865\u7ED9","sys")):(e.armor=Math.min(300,e.armor+100),this.ui.feed("\u62A4\u7532 <b>+100</b>","sys")),this.audio.pickup(),this.ui.pickupFlash(t.type),this.fx.burst(i.position.x,i.position.y,i.position.z,0,.6,0,16,[s.r,s.g,s.b],3.5,.4,.06)}_loop(t){requestAnimationFrame(this._loop);let e=Math.min(.05,(t-this.clock)/1e3);this.clock=t,this.step(e)}step(t){this.time+=t,this.state==="menu"?(this.showcase.update(t,innerWidth/innerHeight),this.worldPass.scene=this.showcase.scene,this.worldPass.camera=this.showcase.camera,this.vmPass.enabled=!1,this.bloom.strength=.5):(this.state==="playing"&&this._update(t),this.worldPass.scene=this.world.scene,this.worldPass.camera=this.camera,this.vmPass.enabled=!0,this.bloom.strength=.42),this.composer.render(t);let e=this.input;e.pressed={},e.dx=e.dy=0,e.lmbP=e.rmbP=!1}_update(t){let e=this.input,i=this.player,s=this.weapons;for(let o=this.timers.length-1;o>=0;o--){let l=this.timers[o];l.t-=t,l.t<=0&&(this.timers.splice(o,1),l.fn())}this.comboT>0&&(this.comboT-=t,this.comboT<=0&&(this.combo=0));let r=.0022*this.settings.sens*(s.scoped?.28:1);i.dead||i.look(e.dx,e.dy,r),i.update(t,e),i.dead||(s.primary(e.lmbP,e.lmb),s.secondary(e.rmbP));let a=s.def.spread;if(s.spreadNow=a?a.base+yt(i.speed2d/6)*a.move+(i.onGround?0:a.air)+Math.min(a.max,s.shots*a.shot)+(s.def.scope&&!s.scoped?a.noScope:0):0,s.update(t,e),this.litT-=t,this.litT<=0&&(this.litT=.12,this.world.updateFlow(i.pos.x,i.pos.z),this.playerLit=this.world.sunVisible(i.pos.x,i.pos.y+i.eye-.2,i.pos.z)),this.phase==="fight")if(this.spawnQueue.length){this.spawnT-=t;let o=Math.min(18,6+this.wave);this.spawnT<=0&&this.enemies.alive<o&&(this._spawnNext(),this.spawnT=rt(.35,.9)*Math.max(.45,1-this.wave*.03))}else this.enemies.alive===0&&this._waveCleared();this.enemies.update(t),this._updatePickups(t),this.world.update(t,this.camera.position),this.fx.update(t,innerHeight,this.camera.fov,this.time),this.ui.update(t)}};window.__game=new Uh;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
