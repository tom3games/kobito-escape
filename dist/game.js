var cm=0,Lu=1,hm=2;var zo=1,Cc=2,la=3,Si=0,Tn=1,rt=2,Ti=0,er=1,Ji=2,Nu=3,zu=4,um=5;var ca=100,dm=101,pm=102,fm=103,mm=104,gm=200,ym=201,vm=202,xm=203,_m=204,Mm=205,bm=206,Sm=207,Tm=208,wm=209,Em=210,Am=211,Rm=212,Cm=213,Pm=214,Du=0,Uu=1,Ou=2,Pc=3,Fu=4,Bu=5,ku=6,Hu=7,Im=0,Lm=1,Nm=2,ii=0,Gu=1,Vu=2,Wu=3,Do=4,Xu=5,ju=6,qu=7,vu="attached",zm="detached",Yu=300,ha=301,tr=302,Ic=303,Lc=304,Uo=306,Hn=1e3,yi=1001,Xr=1002,yn=1003,Nc=1004;var nr=1005;var jt=1006,ua=1007;var wi=1008;var Nn=1009,Ku=1010,Zu=1011,da=1012,zc=1013,$i=1014,zn=1015,Ei=1016,Dc=1017,Uc=1018,pa=1020,Ju=35902,$u=35899,Dm=1021,Um=1022,Vn=1023,As=1026,ir=1027,Oc=1028,Fc=1029,sr=1030,Qu=1031;var ed=1033,Bc=33776,kc=33777,Hc=33778,Gc=33779,td=35840,nd=35841,id=35842,sd=35843,rd=36196,ad=37492,od=37496,ld=37488,cd=37489,Vc=37490,hd=37491,ud=37808,dd=37809,pd=37810,fd=37811,md=37812,gd=37813,yd=37814,vd=37815,xd=37816,_d=37817,Md=37818,bd=37819,Sd=37820,Td=37821,wd=36492,Ed=36494,Ad=36495,Rd=36283,Cd=36284,Wc=36285,Pd=36286;var Ws=2300,Xs=2301,jl=2302,xu=2303,Hs=2400,Gs=2401,no=2402,Om=2500,Fm=2501,Id=0,Oo=1,fa=2;var Ld=0,Bm=1,Qi="",ft="srgb",vn="srgb-linear",io="linear",ut="srgb";var ks=7680;var km=512,Hm=513,Gm=514,Xc=515,Vm=516,Wm=517,jc=518,Xm=519,ql=35044,ma=35048;var Nd="300 es",Gi=2e3,jr=2001;function jg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jm(){let n=qr("canvas");return n.style.display="block",n}var ff={},Yr=null;function so(...n){let e="THREE."+n.shift();Yr?Yr("log",e,...n):console.log(e,...n)}function qm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){let e="THREE."+(n=qm(n)).shift();if(Yr)Yr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){let e="THREE."+(n=qm(n)).shift();if(Yr)Yr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vs(...n){let e=n.join(" ");e in ff||(ff[e]=!0,Le(...n))}function Ym(n,e,t){return new Promise(function(i,s){setTimeout(function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}},t)})}var Km={[Du]:1,[Ou]:6,[Fu]:7,[Pc]:5,[Uu]:0,[ku]:2,[Hu]:4,[Bu]:3},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mf=1234567,Vr=Math.PI/180,js=180/Math.PI;function kn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ln[255&n]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[255&e]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[63&t|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[255&i]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function _u(n,e){return(n%e+e)%e}function Qa(n,e,t){return(1-t)*n+t*e}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fo={DEG2RAD:Vr,RAD2DEG:js,generateUUID:kn,clamp:Ke,euclideanModulo:_u,mapLinear:function(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Qa,damp:function(n,e,t,i){return Qa(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(_u(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(mf=n);let e=mf+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Vr},radToDeg:function(n){return n*js},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),p=a((e-i)/2),d=r((i-e)/2),f=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*p,o*c);break;case"YZY":n.set(l*p,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*p,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*d,o*h,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}},normalize:pt,denormalize:ei},Fd=class Fd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fd.prototype.isVector2=!0;var oe=Fd,Et=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[a+0],d=r[a+1],f=r[a+2],m=r[a+3];if(u!==m||l!==p||c!==d||h!==f){let x=l*p+c*d+h*f+u*m;x<0&&(p=-p,d=-d,f=-f,m=-m,x=-x);let g=1-o;if(x<.9995){let v=Math.acos(x),_=Math.sin(v);g=Math.sin(g*v)/_,l=l*g+p*(o=Math.sin(o*v)/_),c=c*g+d*o,h=h*g+f*o,u=u*g+m*o}else{l=l*g+p*o,c=c*g+d*o,h=h*g+f*o,u=u*g+m*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],p=r[a+1],d=r[a+2],f=r[a+3];return e[t]=o*f+h*u+l*d-c*p,e[t+1]=l*f+h*p+c*u-o*d,e[t+2]=c*f+h*d+o*p-l*u,e[t+3]=h*f-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),p=l(i/2),d=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u-p*d*f;break;case"YXZ":this._x=p*h*u+c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u+p*d*f;break;case"ZXY":this._x=p*h*u-c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u-p*d*f;break;case"ZYX":this._x=p*h*u-c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u+p*d*f;break;case"YZX":this._x=p*h*u+c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u-p*d*f;break;case"XZY":this._x=p*h*u-c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u+p*d*f;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bd=class Bd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bd.prototype.isVector3=!0;var R=Bd,kh=new R,gf=new Et,kd=class kd{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],d=i[5],f=i[8],m=s[0],x=s[3],g=s[6],v=s[1],_=s[4],b=s[7],T=s[2],M=s[5],w=s[8];return r[0]=a*m+o*v+l*T,r[3]=a*x+o*_+l*M,r[6]=a*g+o*b+l*w,r[1]=c*m+h*v+u*T,r[4]=c*x+h*_+u*M,r[7]=c*g+h*b+u*w,r[2]=p*m+d*v+f*T,r[5]=p*x+d*_+f*M,r[8]=p*g+d*b+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,d=c*r-a*l,f=t*u+i*p+s*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(s*c-h*i)*m,e[2]=(o*i-s*a)*m,e[3]=p*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hh.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hh.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kd.prototype.isMatrix3=!0;var Xe=kd,Hh=new Xe,yf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qg(){let n={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===ut&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vn]:{primaries:e,whitePoint:i,transfer:io,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),n}var $e=qg();function Hi(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Wr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Er,Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=qr("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=255*Hi(r[a]/255);return i.putImageData(s,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Hi(t[i]/255)):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yg=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gh(s[a].image)):r.push(Gh(s[a]))}else r=Gh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Kg=0,Vh=new R,Kt=class n extends ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=kn(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i:Le(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=Yu,Kt.DEFAULT_ANISOTROPY=1;var Hd=class Hd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],f=l[9],m=l[2],x=l[6],g=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-m)<.01&&Math.abs(f-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+m)<.1&&Math.abs(f+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(d+1)/2,T=(g+1)/2,M=(h+p)/4,w=(u+m)/4,U=(f+x)/4;return _>b&&_>T?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=M/i,r=w/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=U/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=U/r),this.set(i,s,r,t),this}let v=Math.sqrt((x-f)*(x-f)+(u-m)*(u-m)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(x-f)/v,this.y=(u-m)/v,this.z=(p-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hd.prototype.isVector4=!0;var mt=Hd,Kl=class extends ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Kt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Kl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ro=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rc=class Rc{constructor(e,t,i,s,r,a,o,l,c,h,u,p,d,f,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,p,d,f,m,x)}set(e,t,i,s,r,a,o,l,c,h,u,p,d,f,m,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=p,g[3]=d,g[7]=f,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,d=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+f*c,t[5]=p-m*c,t[9]=-o*l,t[2]=m-p*c,t[6]=f+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,f=c*h,m=c*u;t[0]=p+m*o,t[4]=f*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-f,t[6]=m+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,f=c*h,m=c*u;t[0]=p-m*o,t[4]=-a*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=a*h,t[9]=m-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-d,t[8]=p*c+m,t[1]=l*u,t[5]=m*c+p,t[9]=d*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-p*u,t[8]=f*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+f,t[10]=p-m*u}else if(e.order==="XZY"){let p=a*l,d=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+m,t[5]=a*h,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*h,t[10]=m*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cs.crossVectors(i,Cn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cs.crossVectors(i,Cn)),cs.normalize(),dl.crossVectors(Cn,cs),s[0]=cs.x,s[4]=dl.x,s[8]=Cn.x,s[1]=cs.y,s[5]=dl.y,s[9]=Cn.y,s[2]=cs.z,s[6]=dl.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],d=i[13],f=i[2],m=i[6],x=i[10],g=i[14],v=i[3],_=i[7],b=i[11],T=i[15],M=s[0],w=s[4],U=s[8],z=s[12],D=s[1],G=s[5],H=s[9],j=s[13],V=s[2],W=s[6],$=s[10],K=s[14],ae=s[3],ge=s[7],Re=s[11],ve=s[15];return r[0]=a*M+o*D+l*V+c*ae,r[4]=a*w+o*G+l*W+c*ge,r[8]=a*U+o*H+l*$+c*Re,r[12]=a*z+o*j+l*K+c*ve,r[1]=h*M+u*D+p*V+d*ae,r[5]=h*w+u*G+p*W+d*ge,r[9]=h*U+u*H+p*$+d*Re,r[13]=h*z+u*j+p*K+d*ve,r[2]=f*M+m*D+x*V+g*ae,r[6]=f*w+m*G+x*W+g*ge,r[10]=f*U+m*H+x*$+g*Re,r[14]=f*z+m*j+x*K+g*ve,r[3]=v*M+_*D+b*V+T*ae,r[7]=v*w+_*G+b*W+T*ge,r[11]=v*U+_*H+b*$+T*Re,r[15]=v*z+_*j+b*K+T*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],f=e[3],m=e[7],x=e[11],g=e[15],v=l*d-c*p,_=o*d-c*u,b=o*p-l*u,T=a*d-c*h,M=a*p-l*h,w=a*u-o*h;return t*(m*v-x*_+g*b)-i*(f*v-x*T+g*M)+s*(f*_-m*T+g*w)-r*(f*b-m*M+x*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],f=e[12],m=e[13],x=e[14],g=e[15],v=t*o-i*a,_=t*l-s*a,b=t*c-r*a,T=i*l-s*o,M=i*c-r*o,w=s*c-r*l,U=h*m-u*f,z=h*x-p*f,D=h*g-d*f,G=u*x-p*m,H=u*g-d*m,j=p*g-d*x,V=v*j-_*H+b*G+T*D-M*z+w*U;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/V;return e[0]=(o*j-l*H+c*G)*W,e[1]=(s*H-i*j-r*G)*W,e[2]=(m*w-x*M+g*T)*W,e[3]=(p*M-u*w-d*T)*W,e[4]=(l*D-a*j-c*z)*W,e[5]=(t*j-s*D+r*z)*W,e[6]=(x*b-f*w-g*_)*W,e[7]=(h*w-p*b+d*_)*W,e[8]=(a*H-o*D+c*U)*W,e[9]=(i*D-t*H-r*U)*W,e[10]=(f*M-m*b+g*v)*W,e[11]=(u*b-h*M-d*v)*W,e[12]=(o*z-a*G-l*U)*W,e[13]=(t*G-i*z+s*U)*W,e[14]=(m*_-f*T-x*v)*W,e[15]=(h*T-u*_+p*v)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,d=r*h,f=r*u,m=a*h,x=a*u,g=o*u,v=l*c,_=l*h,b=l*u,T=i.x,M=i.y,w=i.z;return s[0]=(1-(m+g))*T,s[1]=(d+b)*T,s[2]=(f-_)*T,s[3]=0,s[4]=(d-b)*M,s[5]=(1-(p+g))*M,s[6]=(x+v)*M,s[7]=0,s[8]=(f+_)*w,s[9]=(x-v)*w,s[10]=(1-(p+m))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),l=Ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let c=1/a,h=1/o,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=2e3,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),p=(t+e)/(t-e),d=(i+s)/(i-s),f,m;if(l)f=r/(a-r),m=a*r/(a-r);else if(o===Gi)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else{if(o!==jr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-r),m=-a*r/(a-r)}return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),p=-(t+e)/(t-e),d=-(i+s)/(i-s),f,m;if(l)f=1/(a-r),m=a/(a-r);else if(o===Gi)f=-2/(a-r),m=-(a+r)/(a-r);else{if(o!==jr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-r),m=-r/(a-r)}return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Rc.prototype.isMatrix4=!0;var Ne=Rc,Ar=new R,Jn=new Ne,Zg=new R(0,0,0),Jg=new R(1,1,1),cs=new R,dl=new R,Cn=new R,xf=new Ne,_f=new Et,bn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},$g=0,Mf=new R,Rr=new Et,Ni=new Ne,pl=new R,Ha=new R,Qg=new R,e1=new Et,bf=new R(1,0,0),Sf=new R(0,1,0),Tf=new R(0,0,1),wf={type:"added"},t1={type:"removed"},Cr={type:"childadded",child:null},Wh={type:"childremoved",child:null},At=class n extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new bn,i=new Et,s=new R(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(Tf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(Tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pl.copy(e):pl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Ha,pl,this.up):Ni.lookAt(pl,Ha,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Ni),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t1),Wh.child=e,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};At.DEFAULT_UP=new R(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},n1={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let x=t.getJointPose(m,i),g=this._getHandJoint(c,m);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,f=.005;c.inputState.pinching&&p>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Te=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=_u(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xh(a,r,e+1/3),this.g=Xh(a,r,e),this.b=Xh(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=ft){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let i=Zm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return $e.workingToColorSpace(cn.copy(this),e),65536*Math.round(Ke(255*cn.r,0,255))+256*Math.round(Ke(255*cn.g,0,255))+Math.round(Ke(255*cn.b,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=ft){$e.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*s)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(fl);let i=Qa(hs.h,fl.h,t),s=Qa(hs.s,fl.s,t),r=Qa(hs.l,fl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Te;Te.NAMES=Zm;var ao=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $r=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new R,zi=new R,jh=new R,Di=new R,Pr=new R,Ir=new R,Ef=new R,qh=new R,Yh=new R,Kh=new R,Zh=new mt,Jh=new mt,$h=new mt,fi=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),zi.subVectors(i,t),jh.subVectors(e,t);let a=$n.dot($n),o=$n.dot(zi),l=$n.dot(jh),c=zi.dot(zi),h=zi.dot(jh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,f=(a*h-o*l)*p;return r.set(1-d-f,f,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)!==null&&Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Zh.setScalar(0),Jh.setScalar(0),$h.setScalar(0),Zh.fromBufferAttribute(e,t),Jh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zh,r.x),a.addScaledVector(Jh,r.y),a.addScaledVector($h,r.z),a}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),zi.subVectors(e,t),$n.cross(zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),.5*$n.cross(zi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Pr.subVectors(s,i),Ir.subVectors(r,i),qh.subVectors(e,i);let l=Pr.dot(qh),c=Ir.dot(qh);if(l<=0&&c<=0)return t.copy(i);Yh.subVectors(e,s);let h=Pr.dot(Yh),u=Ir.dot(Yh);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pr,a);Kh.subVectors(e,r);let d=Pr.dot(Kh),f=Ir.dot(Kh);if(f>=0&&d<=f)return t.copy(r);let m=d*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Ir,o);let x=h*f-d*u;if(x<=0&&u-h>=0&&d-f>=0)return Ef.subVectors(r,s),o=(u-h)/(u-h+(d-f)),t.copy(s).addScaledVector(Ef,o);let g=1/(x+m+p);return a=m*g,o=p*g,t.copy(i).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),gl.subVectors(this.max,Ga),Lr.subVectors(e.a,Ga),Nr.subVectors(e.b,Ga),zr.subVectors(e.c,Ga),us.subVectors(Nr,Lr),ds.subVectors(zr,Nr),Us.subVectors(Lr,zr);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Us.z,Us.y,us.z,0,-us.x,ds.z,0,-ds.x,Us.z,0,-Us.x,-us.y,us.x,0,-ds.y,ds.x,0,-Us.y,Us.x,0];return!!Qh(t,Lr,Nr,zr,gl)&&(t=[1,0,0,0,1,0,0,0,1],!!Qh(t,Lr,Nr,zr,gl)&&(yl.crossVectors(us,ds),t=[yl.x,yl.y,yl.z],Qh(t,Lr,Nr,zr,gl)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Qn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new R,new R,new R,new R,new R,new R,new R,new R],Qn=new R,ml=new rn,Lr=new R,Nr=new R,zr=new R,us=new R,ds=new R,Us=new R,Ga=new R,gl=new R,yl=new R,Os=new R;function Qh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Os.fromArray(n,r);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=i.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xx=i1();function i1(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,s[l]=24,s[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,s[l]=-c-1,s[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,s[l]=13,s[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,s[l]=24,s[256|l]=24):(i[l]=31744,i[256|l]=64512,s[l]=13,s[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}var Wt=new R,vl=new oe,s1=0,it=class extends ti{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var oo=class extends it{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends it{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Oe=class extends it{constructor(e,t,i){super(new Float32Array(e),t,i)}},r1=new rn,Va=new R,eu=new R,xn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):r1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);let t=Va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=.5*(i-this.radius);this.center.addScaledVector(Va,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(eu)),this.expandByPoint(Va.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},a1=0,Bn=new Ne,tu=new At,Dr=new R,Pn=new rn,Wa=new rn,Qt=new R,Ze=class n extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?lo:oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Pn.min,Wa.min),Pn.expandByPoint(Qt),Qt.addVectors(Pn.max,Wa.max),Pn.expandByPoint(Qt)):(Pn.expandByPoint(Wa.min),Pn.expandByPoint(Wa.max))}Pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qt.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(e,c),Qt.add(Dr)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new it(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new R,l[U]=new R;let c=new R,h=new R,u=new R,p=new oe,d=new oe,f=new oe,m=new R,x=new R;function g(U,z,D){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,z),u.fromBufferAttribute(i,D),p.fromBufferAttribute(r,U),d.fromBufferAttribute(r,z),f.fromBufferAttribute(r,D),h.sub(c),u.sub(c),d.sub(p),f.sub(p);let G=1/(d.x*f.y-f.x*d.y);isFinite(G)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-d.y).multiplyScalar(G),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-f.x).multiplyScalar(G),o[U].add(m),o[z].add(m),o[D].add(m),l[U].add(x),l[z].add(x),l[D].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,z=v.length;U<z;++U){let D=v[U],G=D.start;for(let H=G,j=G+D.count;H<j;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new R,b=new R,T=new R,M=new R;function w(U){T.fromBufferAttribute(s,U),M.copy(T);let z=o[U];_.copy(z),_.sub(T.multiplyScalar(T.dot(z))).normalize(),b.crossVectors(M,z);let D=b.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,D)}for(let U=0,z=v.length;U<z;++U){let D=v[U],G=D.start;for(let H=G,j=G+D.count;H<j;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new it(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let p=0,d=e.count;p<d;p+=3){let f=e.getX(p+0),m=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,f=0;for(let m=0,x=l.length;m<x;m++){d=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)p[f++]=c[d++]}return new it(p,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=e(s[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=e(c[h],i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new R,ms=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur,o1=0,hn=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i:Le(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gs=class extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xa=new R,Or=new R,Fr=new R,Br=new oe,ja=new oe,Jm=new Ne,xl=new R,qa=new R,_l=new R,Af=new oe,nu=new oe,Rf=new oe,ys=class extends At{constructor(e=new gs){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qs(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new ms(i,3,0,!1)),Ur.setAttribute("uv",new ms(i,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Jm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ml(xl.set(-.5,-.5,0),Fr,a,Or,s,r),Ml(qa.set(.5,-.5,0),Fr,a,Or,s,r),Ml(_l.set(.5,.5,0),Fr,a,Or,s,r),Af.set(0,0),nu.set(1,0),Rf.set(1,1);let o=e.ray.intersectTriangle(xl,qa,_l,!1,Xa);if(o===null&&(Ml(qa.set(-.5,.5,0),Fr,a,Or,s,r),nu.set(0,1),o=e.ray.intersectTriangle(xl,_l,qa,!1,Xa),o===null))return;let l=e.ray.origin.distanceTo(Xa);l<e.near||l>e.far||t.push({distance:l,point:Xa.clone(),uv:fi.getInterpolation(Xa,xl,qa,_l,Af,nu,Rf,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ml(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ja.x=r*Br.x-s*Br.y,ja.y=s*Br.x+r*Br.y):ja.copy(Br),n.copy(e),n.x+=ja.x,n.y+=ja.y,n.applyMatrix4(Jm)}var _x=new R,Mx=new R;var Oi=new R,iu=new R,bl=new R,ps=new R,su=new R,Sl=new R,ru=new R,vs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){iu.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(iu);let r=.5*e.distanceTo(t),a=-this.direction.dot(bl),o=ps.dot(this.direction),l=-ps.dot(bl),c=ps.lengthSq(),h=Math.abs(1-a*a),u,p,d,f;if(h>0)if(u=a*l-o,p=a*o-l,f=r*h,u>=0)if(p>=-f)if(p<=f){let m=1/h;u*=m,p*=m,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-f?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=f?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(iu).addScaledVector(bl,p),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let i=Oi.dot(this.direction),s=Oi.dot(Oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s?null:((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>s?null:((o>i||i!=i)&&(i=o),(l<s||s!=s)&&(s=l),s<0?null:this.at(i>=0?i:s,t)))}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,s,r){su.subVectors(t,e),Sl.subVectors(i,e),ru.crossVectors(su,Sl);let a,o=this.direction.dot(ru);if(o>0){if(s)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ps.subVectors(this.origin,e);let l=a*this.direction.dot(Sl.crossVectors(ps,Sl));if(l<0)return null;let c=a*this.direction.dot(su.cross(ps));if(c<0||l+c>o)return null;let h=-a*ps.dot(ru);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cf=new Ne,Fs=new vs,Tl=new xn,Pf=new R,wl=new R,El=new R,Al=new R,au=new R,Rl=new R,If=new R,Cl=new R,be=class extends At{constructor(e=new Ze,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(au.fromBufferAttribute(u,e),a?Rl.addScaledVector(au,h):Rl.addScaledVector(au.sub(t),h))}t.add(Rl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;if(s!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),Tl.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Tl,Pf)===null||Fs.origin.distanceToSquared(Pf)>(e.far-e.near)**2))return;Cf.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Cf),i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Fs)}}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=p.length;f<m;f++){let x=p[f],g=a[x.materialIndex];for(let v=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));v<_;v+=3)s=Pl(this,g,e,i,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}else for(let f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);f<m;f+=3)s=Pl(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),s&&(s.faceIndex=Math.floor(f/3),t.push(s));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=p.length;f<m;f++){let x=p[f],g=a[x.materialIndex];for(let v=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));v<_;v+=3)s=Pl(this,g,e,i,c,h,u,v,v+1,v+2),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}else for(let f=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);f<m;f+=3)s=Pl(this,a,e,i,c,h,u,f,f+1,f+2),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}};function Pl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,wl),n.getVertexPosition(l,El),n.getVertexPosition(c,Al);let h=(function(u,p,d,f,m,x,g,v){let _;if(_=p.side===1?f.intersectTriangle(g,x,m,!0,v):f.intersectTriangle(m,x,g,p.side===0,v),_===null)return null;Cl.copy(v),Cl.applyMatrix4(u.matrixWorld);let b=d.ray.origin.distanceTo(Cl);return b<d.near||b>d.far?null:{distance:b,point:Cl.clone(),object:u}})(n,e,t,i,wl,El,Al,If);if(h){let u=new R;fi.getBarycoord(If,wl,El,Al,u),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new R,materialIndex:0};fi.getNormal(wl,El,Al,p.normal),h.face=p,h.barycoord=u}return h}var Ya=new mt,Lf=new mt,Nf=new mt,l1=new mt,zf=new Ne,Il=new R,ou=new xn,Df=new Ne,lu=new vs,co=class extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vu,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Il),this.boundingBox.expandByPoint(Il)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Il),this.boundingSphere.expandByPoint(Il)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(s),e.ray.intersectsSphere(ou)!==!1&&(Df.copy(s).invert(),lu.copy(e.ray).applyMatrix4(Df),this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Lf.fromBufferAttribute(s.attributes.skinIndex,e),Nf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ya.copy(t),t.set(0,0,0,0)):(Ya.set(...t,1),t.set(0,0,0)),Ya.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Nf.getComponent(r);if(a!==0){let o=Lf.getComponent(r);zf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(l1.copy(Ya).applyMatrix4(zf),a)}}return t.isVector4&&(t.w=Ya.w),t.applyMatrix4(this.bindMatrixInverse)}},Qr=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},ea=class extends Kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=1003,h=1003,u,p){super(null,a,o,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uf=new Ne,c1=new Ne,ho=class n{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:c1;Uf.multiplyMatrices(o,t[r]),Uf.toArray(i,16*r)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ea(t,e,e,Vn,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new Qr),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},xs=class extends it{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new Ne,Of=new Ne,Ll=[],Ff=new rn,h1=new Ne,Ka=new be,Za=new xn,Ys=class extends be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,h1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Ff.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(Ff)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Za.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ka.geometry=this.geometry,Ka.material=this.material,Ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(i),e.ray.intersectsSphere(Za)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),Of.multiplyMatrices(i,kr),Ka.matrixWorld=Of,Ka.raycast(e,Ll);for(let a=0,o=Ll.length;a<o;a++){let l=Ll[a];l.instanceId=r,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(s*this.count),s,this.count,Oc,zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cu=new R,u1=new R,d1=new Xe,pi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=cu.subVectors(i,t).cross(u1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(cu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||d1.getNormalMatrix(e),s=this.coplanarPoint(cu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new xn,p1=new oe(.5,.5),Nl=new R,Vi=class{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],f=r[8],m=r[9],x=r[10],g=r[11],v=r[12],_=r[13],b=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,g-f,T-v).normalize(),s[1].setComponents(c+a,d+h,g+f,T+v).normalize(),s[2].setComponents(c+o,d+u,g+m,T+_).normalize(),s[3].setComponents(c-o,d-u,g-m,T-_).normalize(),i)s[4].setComponents(l,p,x,b).normalize(),s[5].setComponents(c-l,d-p,g-x,T-b).normalize();else if(s[4].setComponents(c-l,d-p,g-x,T-b).normalize(),t===Gi)s[5].setComponents(c+l,d+p,g+x,T+b).normalize();else{if(t!==jr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);s[5].setComponents(l,p,x,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=p1.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nl.x=s.normal.x>0?e.max.x:e.min.x,Nl.y=s.normal.y>0?e.max.y:e.min.y,Nl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bf=new Ne,Jl=class n{constructor(){this.coordinateSystem=Gi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Bf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Vi),i[s].setFromProjectionMatrix(Bf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Vi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Mu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}},bx=new Ne,Sx=new Te(1,1,1),Tx=new Vi,wx=new Jl,Ex=new rn,Ax=new xn,Rx=new R,Cx=new R,Px=new R,Ix=new Mu,Lx=new be;var ta=class extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$l=new R,Ql=new R,kf=new Ne,Ja=new vs,zl=new xn,hu=new R,Hf=new R,Ks=class extends At{constructor(e=new Ze,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$l.fromBufferAttribute(t,s-1),Ql.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$l.distanceTo(Ql);e.setAttribute("lineDistance",new Oe(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;kf.copy(s).invert(),Ja.copy(e.ray).applyMatrix4(kf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let f=p,m=d-1;f<m;f+=c){let x=h.getX(f),g=h.getX(f+1),v=Dl(this,e,Ja,l,x,g,f);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(d-1),m=h.getX(p),x=Dl(this,e,Ja,l,f,m,d-1);x&&t.push(x)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let f=p,m=d-1;f<m;f+=c){let x=Dl(this,e,Ja,l,f,f+1,f);x&&t.push(x)}if(this.isLineLoop){let f=Dl(this,e,Ja,l,d-1,p,d-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Dl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if($l.fromBufferAttribute(o,s),Ql.fromBufferAttribute(o,r),t.distanceSqToSegment($l,Ql,hu,Hf)>i)return;hu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(hu);return l<e.near||l>e.far?void 0:{distance:l,point:Hf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Gf=new R,Vf=new R,uo=class extends Ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Gf.fromBufferAttribute(t,s),Vf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gf.distanceTo(Vf);e.setAttribute("lineDistance",new Oe(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},po=class extends Ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_s=class extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wf=new Ne,bu=new vs,Ul=new xn,Ol=new R,vi=class extends At{constructor(e=new Ze,t=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;Wf.copy(s).invert(),bu.copy(e.ray).applyMatrix4(Wf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);u<p;u++){let d=c.getX(u);Ol.fromBufferAttribute(h,d),Xf(Ol,d,l,s,e,t,this)}else for(let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);u<p;u++)Ol.fromBufferAttribute(h,u),Xf(Ol,u,l,s,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xf(n,e,t,i,s,r,a){let o=bu.distanceSqToPoint(n);if(o<t){let l=new R;bu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fo=class extends Kt{constructor(e=[],t=301,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wi=class extends Kt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends Kt{constructor(e,t,i=1014,s,r,a,o=1003,l=1003,c,h=1026,u=1){if(h!==As&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ec=class extends Xi{constructor(e,t=1014,i=301,s,r,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mo=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},an=class n extends Ze{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;function f(m,x,g,v,_,b,T,M,w,U,z){let D=b/w,G=T/U,H=b/2,j=T/2,V=M/2,W=w+1,$=U+1,K=0,ae=0,ge=new R;for(let Re=0;Re<$;Re++){let ve=Re*G-j;for(let Ee=0;Ee<W;Ee++){let ne=Ee*D-H;ge[m]=ne*v,ge[x]=ve*_,ge[g]=V,c.push(ge.x,ge.y,ge.z),ge[m]=0,ge[x]=0,ge[g]=M>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Ee/w),u.push(1-Re/U),K+=1}}for(let Re=0;Re<U;Re++)for(let ve=0;ve<w;ve++){let Ee=p+ve+W*Re,ne=p+ve+W*(Re+1),ye=p+(ve+1)+W*(Re+1),ue=p+(ve+1)+W*Re;l.push(Ee,ne,ue),l.push(ne,ye,ue),ae+=6}o.addGroup(d,ae,z),d+=ae,p+=K}f("z","y","x",-1,-1,i,t,e,a,r,0),f("z","y","x",1,-1,i,t,-e,a,r,1),f("x","z","y",1,1,e,i,t,s,a,2),f("x","z","y",1,-1,e,i,-t,s,a,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ji=class n extends Ze{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,f=2*i+r,m=s+1,x=new R,g=new R;for(let v=0;v<=f;v++){let _=0,b=0,T=0,M=0;if(v<=i){let z=v/i,D=z*Math.PI/2;b=-h-e*Math.cos(D),T=e*Math.sin(D),M=-e*Math.cos(D),_=z*u}else if(v<=i+r){let z=(v-i)/r;b=z*t-h,T=e,M=0,_=u+z*p}else{let z=(v-i-r)/i,D=z*Math.PI/2;b=h+e*Math.sin(D),T=e*Math.cos(D),M=e*Math.sin(D),_=u+p+z*u}let w=Math.max(0,Math.min(1,_/d)),U=0;v===0?U=.5/s:v===f&&(U=-.5/s);for(let z=0;z<=s;z++){let D=z/s,G=D*Math.PI*2,H=Math.sin(G),j=Math.cos(G);g.x=-T*j,g.y=b,g.z=T*H,o.push(g.x,g.y,g.z),x.set(-T*j,M,T*H),x.normalize(),l.push(x.x,x.y,x.z),c.push(D+U,w)}if(v>0){let z=(v-1)*m;for(let D=0;D<s;D++){let G=z+D,H=z+D+1,j=v*m+D,V=v*m+D+1;a.push(G,H,j),a.push(H,V,j)}}}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qi=class n extends Ze{constructor(e=1,t=32,i=0,s=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new R,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class n extends Ze{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],f=0,m=[],x=i/2,g=0;function v(_){let b=f,T=new oe,M=new R,w=0,U=_===!0?e:t,z=_===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,x*z,0),p.push(0,z,0),d.push(.5,.5),f++;let D=f;for(let G=0;G<=s;G++){let H=G/s*l+o,j=Math.cos(H),V=Math.sin(H);M.x=U*V,M.y=x*z,M.z=U*j,u.push(M.x,M.y,M.z),p.push(0,z,0),T.x=.5*j+.5,T.y=.5*V*z+.5,d.push(T.x,T.y),f++}for(let G=0;G<s;G++){let H=b+G,j=D+G;_===!0?h.push(j,j+1,H):h.push(j+1,j,H),w+=3}c.addGroup(g,w,_===!0?1:2),g+=w}(function(){let _=new R,b=new R,T=0,M=(t-e)/i;for(let w=0;w<=r;w++){let U=[],z=w/r,D=z*(t-e)+e;for(let G=0;G<=s;G++){let H=G/s,j=H*l+o,V=Math.sin(j),W=Math.cos(j);b.x=D*V,b.y=-z*i+x,b.z=D*W,u.push(b.x,b.y,b.z),_.set(V,M,W).normalize(),p.push(_.x,_.y,_.z),d.push(H,1-z),U.push(f++)}m.push(U)}for(let w=0;w<s;w++)for(let U=0;U<r;U++){let z=m[U][w],D=m[U+1][w],G=m[U+1][w+1],H=m[U][w+1];(e>0||U!==0)&&(h.push(z,D,H),T+=3),(t>0||U!==r-1)&&(h.push(D,G,H),T+=3)}c.addGroup(g,T,0),g+=T})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ms=class n extends qt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bs=class n extends Ze{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];function o(d,f,m,x){let g=x+1,v=[];for(let _=0;_<=g;_++){v[_]=[];let b=d.clone().lerp(m,_/g),T=f.clone().lerp(m,_/g),M=g-_;for(let w=0;w<=M;w++)v[_][w]=w===0&&_===g?b:b.clone().lerp(T,w/M)}for(let _=0;_<g;_++)for(let b=0;b<2*(g-_)-1;b++){let T=Math.floor(b/2);b%2==0?(l(v[_][T+1]),l(v[_+1][T]),l(v[_][T])):(l(v[_][T+1]),l(v[_+1][T+1]),l(v[_+1][T]))}}function l(d){r.push(d.x,d.y,d.z)}function c(d,f){let m=3*d;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(d,f,m,x){x<0&&d.x===1&&(a[f]=d.x-1),m.x===0&&m.z===0&&(a[f]=x/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}function p(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}(function(d){let f=new R,m=new R,x=new R;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],m),c(t[g+2],x),o(f,m,x,d)})(s),(function(d){let f=new R;for(let m=0;m<r.length;m+=3)f.x=r[m+0],f.y=r[m+1],f.z=r[m+2],f.normalize().multiplyScalar(d),r[m+0]=f.x,r[m+1]=f.y,r[m+2]=f.z})(i),(function(){let d=new R;for(let f=0;f<r.length;f+=3){d.x=r[f+0],d.y=r[f+1],d.z=r[f+2];let m=u(d)/2/Math.PI+.5,x=p(d)/Math.PI+.5;a.push(m,1-x)}(function(){let f=new R,m=new R,x=new R,g=new R,v=new oe,_=new oe,b=new oe;for(let T=0,M=0;T<r.length;T+=9,M+=6){f.set(r[T+0],r[T+1],r[T+2]),m.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),v.set(a[M+0],a[M+1]),_.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),g.copy(f).add(m).add(x).divideScalar(3);let w=u(g);h(v,M+0,f,w),h(_,M+2,m,w),h(b,M+4,x,w)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],x=a[f+2],g=a[f+4],v=Math.max(m,x,g),_=Math.min(m,x,g);v>.9&&_<.1&&(m<.2&&(a[f+0]+=1),x<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},tc=class n extends bs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Fl=new R,Bl=new R,uu=new R,kl=new fi,nc=class extends Ze{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Vr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:x,c:g}=kl;if(m.fromBufferAttribute(o,c[0]),x.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),kl.getNormal(uu),u[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let _=(v+1)%3,b=u[v],T=u[_],M=kl[h[v]],w=kl[h[_]],U=`${b}_${T}`,z=`${T}_${b}`;z in p&&p[z]?(uu.dot(p[z].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(w.x,w.y,w.z)),p[z]=null):U in p||(p[U]={index0:c[v],index1:c[_],normal:uu.clone()})}}for(let f in p)if(p[f]){let{index0:m,index1:x}=p[f];Fl.fromBufferAttribute(o,m),Bl.fromBufferAttribute(o,x),d.push(Fl.x,Fl.y,Fl.z),d.push(Bl.x,Bl.y,Bl.z)}this.setAttribute("position",new Oe(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,c=r-1;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),o=i[s]-a,o<0)l=s+1;else{if(!(o>0)){c=s;break}c=s-1}if(s=c,i[s]===a)return s/(r-1);let h=i[s];return(s+(a-h)/(i[s+1]-h))/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,s=[],r=[],a=[],o=new R,l=new Ne;for(let d=0;d<=e;d++){let f=d/e;s[d]=this.getTangentAt(f,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,f))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],d*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},na=class extends Ln{constructor(e=0,t=0,i=1,s=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let i=t,s=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(r=a?0:s),this.aClockwise!==!0||a||(r===s?r=-s:r-=s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ic=class extends na{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zd(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,s(a,o,p,d)},calc:function(r){let a=r*r;return n+e*r+t*a+i*(a*r)}}}var jf=new R,qf=new R,du=new zd,pu=new zd,fu=new zd,Ss=class extends Ln{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=s[(c-1)%r]:(qf.subVectors(s[0],s[1]).add(s[0]),o=qf);let u=s[c%r],p=s[(c+1)%r];if(this.closed||c+2<r?l=s[(c+2)%r]:(jf.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=jf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(l),d);m<1e-4&&(m=1),f<1e-4&&(f=m),x<1e-4&&(x=m),du.initNonuniformCatmullRom(o.x,u.x,p.x,l.x,f,m,x),pu.initNonuniformCatmullRom(o.y,u.y,p.y,l.y,f,m,x),fu.initNonuniformCatmullRom(o.z,u.z,p.z,l.z,f,m,x)}else this.curveType==="catmullrom"&&(du.initCatmullRom(o.x,u.x,p.x,l.x,this.tension),pu.initCatmullRom(o.y,u.y,p.y,l.y,this.tension),fu.initCatmullRom(o.z,u.z,p.z,l.z,this.tension));return i.set(du.calc(h),pu.calc(h),fu.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yf(n,e,t,i,s){let r=.5*(i-e),a=.5*(s-t),o=n*n;return(2*t-2*i+r+a)*(n*o)+(-3*t+3*i-2*r-a)*o+r*n+t}function eo(n,e,t,i){return(function(s,r){let a=1-s;return a*a*r})(n,e)+(function(s,r){return 2*(1-s)*s*r})(n,t)+(function(s,r){return s*s*r})(n,i)}function to(n,e,t,i,s){return(function(r,a){let o=1-r;return o*o*o*a})(n,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(n,t)+(function(r,a){return 3*(1-r)*r*r*a})(n,i)+(function(r,a){return r*r*r*a})(n,s)}var go=class extends Ln{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(to(e,s.x,r.x,a.x,o.x),to(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sc=class extends Ln{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(to(e,s.x,r.x,a.x,o.x),to(e,s.y,r.y,a.y,o.y),to(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yo=class extends Ln{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends Ln{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Ln{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(eo(e,s.x,r.x,a.x),eo(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Ln{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(eo(e,s.x,r.x,a.x),eo(e,s.y,r.y,a.y),eo(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Yf(o,l.x,c.x,h.x,u.x),Yf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:ic,CatmullRomCurve3:Ss,CubicBezierCurve:go,CubicBezierCurve3:sc,EllipseCurve:na,LineCurve:yo,LineCurve3:rc,QuadraticBezierCurve:vo,QuadraticBezierCurve3:xo,SplineCurve:_o}),oc=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},Mo=class extends oc{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new yo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new vo(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new go(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new _o(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new na(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bo=class extends Mo{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Mo().fromJSON(s))}return this}};function f1(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Kf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=(function(h,u,p,d){let f=[];for(let m=0,x=u.length;m<x;m++){let g=Kf(h,u[m]*d,m<x-1?u[m+1]*d:h.length,d,!1);g===g.next&&(g.steiner=!0),f.push(b1(g))}f.sort(x1);for(let m=0;m<f.length;m++)p=_1(f[m],p);return p})(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let p=t;p<s;p+=t){let d=n[p],f=n[p+1];d<o&&(o=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return So(r,a,t,o,l,c,0),a}function Kf(n,e,t,i,s){let r;if(s===(function(a,o,l,c){let h=0;for(let u=o,p=l-c;u<l;u+=c)h+=(a[p]-a[u])*(a[u+1]+a[p+1]),p=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Zf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Zf(a/i|0,n[a],n[a+1],r);return r&&ia(r,r.next)&&(wo(r),r=r.next),r}function Zs(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!ia(i,i.next)&&zt(i.prev,i,i.next)!==0)i=i.next;else{if(wo(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function So(n,e,t,i,s,r,a){if(!n)return;!a&&r&&(function(l,c,h,u){let p=l;do p.z===0&&(p.z=Su(p.x,p.y,c,h,u)),p.prevZ=p.prev,p.nextZ=p.next,p=p.next;while(p!==l);p.prevZ.nextZ=null,p.prevZ=null,(function(d){let f,m=1;do{let x,g=d;d=null;let v=null;for(f=0;g;){f++;let _=g,b=0;for(let M=0;M<m&&(b++,_=_.nextZ,_);M++);let T=m;for(;b>0||T>0&&_;)b!==0&&(T===0||!_||g.z<=_.z)?(x=g,g=g.nextZ,b--):(x=_,_=_.nextZ,T--),v?v.nextZ=x:d=x,x.prevZ=v,v=x;g=_}v.nextZ=null,m*=2}while(f>1)})(p)})(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?g1(n,i,s,r):m1(n))e.push(l.i,n.i,c.i),wo(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?So(n=y1(Zs(n),e),e,t,i,s,r,2):a===2&&v1(n,e,t,i,s,r):So(Zs(n),e,t,i,s,r,1);break}}}function m1(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),p=Math.max(s,r,a),d=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=u&&f.y<=d&&$a(s,o,r,l,a,c,f.x,f.y)&&zt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function g1(n,e,t,i){let s=n.prev,r=n,a=n.next;if(zt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,d=Math.min(o,l,c),f=Math.min(h,u,p),m=Math.max(o,l,c),x=Math.max(h,u,p),g=Su(d,f,e,t,i),v=Su(m,x,e,t,i),_=n.prevZ,b=n.nextZ;for(;_&&_.z>=g&&b&&b.z<=v;){if(_.x>=d&&_.x<=m&&_.y>=f&&_.y<=x&&_!==s&&_!==a&&$a(o,h,l,u,c,p,_.x,_.y)&&zt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=m&&b.y>=f&&b.y<=x&&b!==s&&b!==a&&$a(o,h,l,u,c,p,b.x,b.y)&&zt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=m&&_.y>=f&&_.y<=x&&_!==s&&_!==a&&$a(o,h,l,u,c,p,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=m&&b.y>=f&&b.y<=x&&b!==s&&b!==a&&$a(o,h,l,u,c,p,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function y1(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ia(i,s)&&Qm(i,t,t.next,s)&&To(i,s)&&To(s,i)&&(e.push(i.i,t.i,s.i),wo(t),wo(t.next),t=n=s),t=t.next}while(t!==n);return Zs(t)}function v1(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S1(a,o)){let l=e0(a,o);return a=Zs(a,a.next),l=Zs(l,l.next),So(a,e,t,i,s,r,0),void So(l,e,t,i,s,r,0)}o=o.next}a=a.next}while(a!==n)}function x1(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function _1(n,e){let t=(function(s,r){let a=r,o=s.x,l=s.y,c,h=-1/0;if(ia(s,a))return a;do{if(ia(s,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==r);if(!c)return null;let u=c,p=c.x,d=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=p&&o!==a.x&&$m(l<d?o:h,l,p,d,l<d?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);To(a,s)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&M1(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=e0(t,n);return Zs(i,i.next),Zs(t,t.next)}function M1(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function Su(n,e,t,i,s){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*s|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*s|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function b1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $m(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $a(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&$m(n,e,t,i,s,r,a,o)}function S1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let s=t;do{if(s.i!==t.i&&s.next.i!==t.i&&s.i!==i.i&&s.next.i!==i.i&&Qm(s,s.next,t,i))return!0;s=s.next}while(s!==t);return!1})(n,e)&&(To(n,e)&&To(e,n)&&(function(t,i){let s=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do s.y>o!=s.next.y>o&&s.next.y!==s.y&&a<(s.next.x-s.x)*(o-s.y)/(s.next.y-s.y)+s.x&&(r=!r),s=s.next;while(s!==t);return r})(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||ia(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ia(n,e){return n.x===e.x&&n.y===e.y}function Qm(n,e,t,i){let s=Gl(zt(n,e,t)),r=Gl(zt(n,e,i)),a=Gl(zt(t,i,n)),o=Gl(zt(t,i,e));return s!==r&&a!==o||!(s!==0||!Hl(n,t,e))||!(r!==0||!Hl(n,i,e))||!(a!==0||!Hl(t,n,i))||!(o!==0||!Hl(t,e,i))}function Hl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Gl(n){return n>0?1:n<0?-1:0}function To(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function e0(n,e){let t=Tu(n.i,n.x,n.y),i=Tu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Zf(n,e,t,i){let s=Tu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var wu=class{static triangulate(e,t,i=2){return f1(e,t,i)}},mi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Jf(e),$f(i,e);let a=e.length;t.forEach(Jf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$f(i,t[l]);let o=wu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $f(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var lc=class n extends Ze{constructor(e=new bo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:T1,_,b,T,M,w,U=!1;if(g){_=g.getSpacedPoints(h),U=!0,p=!1;let I=!!g.isCatmullRomCurve3&&g.closed;b=g.computeFrenetFrames(h,I),T=new R,M=new R,w=new R}p||(x=0,d=0,f=0,m=0);let z=o.extractPoints(c),D=z.shape,G=z.holes;if(!mi.isClockWise(D)){D=D.reverse();for(let I=0,O=G.length;I<O;I++){let S=G[I];mi.isClockWise(S)&&(G[I]=S.reverse())}}function H(I){let O=10000000000000001e-36,S=I[0];for(let B=1;B<=I.length;B++){let F=B%I.length,P=I[F],Y=P.x-S.x,J=P.y-S.y,ee=Y*Y+J*J,de=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(S.x),Math.abs(S.y));ee<=O*de*de?(I.splice(F,1),B--):S=P}}H(D),G.forEach(H);let j=G.length,V=D;for(let I=0;I<j;I++){let O=G[I];D=D.concat(O)}function W(I,O,S){return O||Fe("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(O,S)}let $=D.length;function K(I,O,S){let B,F,P,Y=I.x-O.x,J=I.y-O.y,ee=S.x-I.x,de=S.y-I.y,pe=Y*Y+J*J,Pe=Y*de-J*ee;if(Math.abs(Pe)>Number.EPSILON){let fe=Math.sqrt(pe),ke=Math.sqrt(ee*ee+de*de),se=O.x-J/fe,he=O.y+Y/fe,ce=((S.x-de/ke-se)*de-(S.y+ee/ke-he)*ee)/(Y*de-J*ee);B=se+Y*ce-I.x,F=he+J*ce-I.y;let Se=B*B+F*F;if(Se<=2)return new oe(B,F);P=Math.sqrt(Se/2)}else{let fe=!1;Y>Number.EPSILON?ee>Number.EPSILON&&(fe=!0):Y<-Number.EPSILON?ee<-Number.EPSILON&&(fe=!0):Math.sign(J)===Math.sign(de)&&(fe=!0),fe?(B=-J,F=Y,P=Math.sqrt(pe)):(B=Y,F=J,P=Math.sqrt(pe/2))}return new oe(B/P,F/P)}let ae=[];for(let I=0,O=V.length,S=O-1,B=I+1;I<O;I++,S++,B++)S===O&&(S=0),B===O&&(B=0),ae[I]=K(V[I],V[S],V[B]);let ge=[],Re,ve,Ee=ae.concat();for(let I=0,O=j;I<O;I++){let S=G[I];Re=[];for(let B=0,F=S.length,P=F-1,Y=B+1;B<F;B++,P++,Y++)P===F&&(P=0),Y===F&&(Y=0),Re[B]=K(S[B],S[P],S[Y]);ge.push(Re),Ee=Ee.concat(Re)}if(x===0)ve=mi.triangulateShape(V,G);else{let I=[],O=[];for(let S=0;S<x;S++){let B=S/x,F=d*Math.cos(B*Math.PI/2),P=f*Math.sin(B*Math.PI/2)+m;for(let Y=0,J=V.length;Y<J;Y++){let ee=W(V[Y],ae[Y],P);xe(ee.x,ee.y,-F),B===0&&I.push(ee)}for(let Y=0,J=j;Y<J;Y++){let ee=G[Y];Re=ge[Y];let de=[];for(let pe=0,Pe=ee.length;pe<Pe;pe++){let fe=W(ee[pe],Re[pe],P);xe(fe.x,fe.y,-F),B===0&&de.push(fe)}B===0&&O.push(de)}}ve=mi.triangulateShape(I,O)}let ne=ve.length,ye=f+m;for(let I=0;I<$;I++){let O=p?W(D[I],Ee[I],ye):D[I];U?(M.copy(b.normals[0]).multiplyScalar(O.x),T.copy(b.binormals[0]).multiplyScalar(O.y),w.copy(_[0]).add(M).add(T),xe(w.x,w.y,w.z)):xe(O.x,O.y,0)}for(let I=1;I<=h;I++)for(let O=0;O<$;O++){let S=p?W(D[O],Ee[O],ye):D[O];U?(M.copy(b.normals[I]).multiplyScalar(S.x),T.copy(b.binormals[I]).multiplyScalar(S.y),w.copy(_[I]).add(M).add(T),xe(w.x,w.y,w.z)):xe(S.x,S.y,u/h*I)}for(let I=x-1;I>=0;I--){let O=I/x,S=d*Math.cos(O*Math.PI/2),B=f*Math.sin(O*Math.PI/2)+m;for(let F=0,P=V.length;F<P;F++){let Y=W(V[F],ae[F],B);xe(Y.x,Y.y,u+S)}for(let F=0,P=G.length;F<P;F++){let Y=G[F];Re=ge[F];for(let J=0,ee=Y.length;J<ee;J++){let de=W(Y[J],Re[J],B);U?xe(de.x,de.y+_[h-1].y,_[h-1].x+S):xe(de.x,de.y,u+S)}}}function ue(I,O){let S=I.length;for(;--S>=0;){let B=S,F=S-1;F<0&&(F=I.length-1);for(let P=0,Y=h+2*x;P<Y;P++){let J=$*P,ee=$*(P+1);ie(O+B+J,O+F+J,O+F+ee,O+B+ee)}}}function xe(I,O,S){l.push(I),l.push(O),l.push(S)}function Ie(I,O,S){N(I),N(O),N(S);let B=s.length/3,F=v.generateTopUV(i,s,B-3,B-2,B-1);A(F[0]),A(F[1]),A(F[2])}function ie(I,O,S,B){N(I),N(O),N(B),N(O),N(S),N(B);let F=s.length/3,P=v.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);A(P[0]),A(P[1]),A(P[3]),A(P[1]),A(P[2]),A(P[3])}function N(I){s.push(l[3*I+0]),s.push(l[3*I+1]),s.push(l[3*I+2])}function A(I){r.push(I.x),r.push(I.y)}(function(){let I=s.length/3;if(p){let O=0,S=$*O;for(let B=0;B<ne;B++){let F=ve[B];Ie(F[2]+S,F[1]+S,F[0]+S)}O=h+2*x,S=$*O;for(let B=0;B<ne;B++){let F=ve[B];Ie(F[0]+S,F[1]+S,F[2]+S)}}else{for(let O=0;O<ne;O++){let S=ve[O];Ie(S[2],S[1],S[0])}for(let O=0;O<ne;O++){let S=ve[O];Ie(S[0]+$*h,S[1]+$*h,S[2]+$*h)}}i.addGroup(I,s.length/3-I,0)})(),(function(){let I=s.length/3,O=0;ue(V,O),O+=V.length;for(let S=0,B=G.length;S<B;S++){let F=G[S];ue(F,O),O+=F.length}i.addGroup(I,s.length/3-I,1)})()}this.setAttribute("position",new Oe(s,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,s){if(s.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];s.shapes.push(o.uuid)}else s.shapes.push(t.uuid);return s.options=Object.assign({},i),i.extrudePath!==void 0&&(s.options.extrudePath=i.extrudePath.toJSON()),s})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ac[s.type]().fromJSON(s)),new n(i,e.options)}},T1={generateTopUV:function(n,e,t,i,s){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*s],h=e[3*s+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],p=e[3*s],d=e[3*s+1],f=e[3*s+2],m=e[3*r],x=e[3*r+1],g=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(p,1-f),new oe(m,1-g)]:[new oe(o,1-l),new oe(h,1-u),new oe(d,1-f),new oe(x,1-g)]}},sa=class n extends bs{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},cc=class n extends Ze{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,s=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ke(s,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,p=new oe,d=new R,f=new R,m=new R,x=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=1*g,d.y=-x,d.z=0*g,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=1*g,d.y=-x,d.z=0*g,f.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(f)}for(let v=0;v<=t;v++){let _=i+v*h*s,b=Math.sin(_),T=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*b,u.y=e[M].y,u.z=e[M].x*T,a.push(u.x,u.y,u.z),p.x=v/t,p.y=M/(e.length-1),o.push(p.x,p.y);let w=l[3*M+0]*b,U=l[3*M+1],z=l[3*M+0]*T;c.push(w,U,z)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let b=_+v*e.length,T=b,M=b+e.length,w=b+e.length+1,U=b+1;r.push(T,M,U),r.push(w,U,M)}this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},hc=class n extends bs{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Mt=class n extends Ze{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,d=[],f=[],m=[],x=[];for(let g=0;g<h;g++){let v=g*p-a;for(let _=0;_<c;_++){let b=_*u-r;f.push(b,-v,0),m.push(0,0,1),x.push(_/o),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let _=v+c*g,b=v+c*(g+1),T=v+1+c*(g+1),M=v+1+c*g;d.push(_,b,M),d.push(b,T,M)}this.setIndex(d),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ni=class n extends Ze{constructor(e=.5,t=1,i=32,s=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,p=(t-e)/(s=Math.max(1,s)),d=new R,f=new oe;for(let m=0;m<=s;m++){for(let x=0;x<=i;x++){let g=r+x/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}u+=p}for(let m=0;m<s;m++){let x=m*(i+1);for(let g=0;g<i;g++){let v=g+x,_=v,b=v+i+1,T=v+i+2,M=v+1;o.push(_,b,M),o.push(b,T,M)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},uc=class n extends Ze{constructor(e=new bo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=s.length/3,p=h.extractPoints(t),d=p.shape,f=p.holes;mi.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=f.length;x<g;x++){let v=f[x];mi.isClockWise(v)===!0&&(f[x]=v.reverse())}let m=mi.triangulateShape(d,f);for(let x=0,g=f.length;x<g;x++){let v=f[x];d=d.concat(v)}for(let x=0,g=d.length;x<g;x++){let v=d[x];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let x=0,g=m.length;x<g;x++){let v=m[x],_=v[0]+u,b=v[1]+u,T=v[2]+u;i.push(_,b,T),l+=3}}this.setIndex(i),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(r,3)),this.setAttribute("uv",new Oe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let s=0,r=t.length;s<r;s++){let a=t[s];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}},Pt=class n extends Ze{constructor(e=1,t=32,i=16,s=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,p=new R,d=[],f=[],m=[],x=[];for(let g=0;g<=i;g++){let v=[],_=g/i,b=a+_*o,T=e*Math.cos(b),M=Math.sqrt(e*e-T*T),w=0;g===0&&a===0?w=.5/t:g===i&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){let z=U/t,D=s+z*r;u.x=-M*Math.cos(D),u.y=T,u.z=M*Math.sin(D),f.push(u.x,u.y,u.z),p.copy(u).normalize(),m.push(p.x,p.y,p.z),x.push(z+w,1-_),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let _=h[g][v+1],b=h[g][v],T=h[g+1][v],M=h[g+1][v+1];(g!==0||a>0)&&d.push(_,b,M),(g!==i-1||l<Math.PI)&&d.push(b,T,M)}this.setIndex(d),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(m,3)),this.setAttribute("uv",new Oe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},dc=class n extends bs{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Gn=class n extends Ze{constructor(e=1,t=.4,i=12,s=48,r=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],p=new R,d=new R,f=new R;for(let m=0;m<=i;m++){let x=a+m/i*o;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),p.x=e*Math.cos(v),p.y=e*Math.sin(v),f.subVectors(d,p).normalize(),h.push(f.x,f.y,f.z),u.push(g/s),u.push(m/i)}}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,v=(s+1)*(m-1)+x-1,_=(s+1)*(m-1)+x,b=(s+1)*m+x;l.push(g,v,b),l.push(v,_,b)}this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},pc=class n extends Ze{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],u=new R,p=new R,d=new R,f=new R,m=new R,x=new R,g=new R;for(let _=0;_<=i;++_){let b=_/i*r*Math.PI*2;v(b,r,a,e,d),v(b+.01,r,a,e,f),x.subVectors(f,d),g.addVectors(f,d),m.crossVectors(x,g),g.crossVectors(m,x),m.normalize(),g.normalize();for(let T=0;T<=s;++T){let M=T/s*Math.PI*2,w=-t*Math.cos(M),U=t*Math.sin(M);u.x=d.x+(w*g.x+U*m.x),u.y=d.y+(w*g.y+U*m.y),u.z=d.z+(w*g.z+U*m.z),l.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(_/i),h.push(T/s)}}for(let _=1;_<=i;_++)for(let b=1;b<=s;b++){let T=(s+1)*(_-1)+(b-1),M=(s+1)*_+(b-1),w=(s+1)*_+b,U=(s+1)*(_-1)+b;o.push(T,M,U),o.push(M,w,U)}function v(_,b,T,M,w){let U=Math.cos(_),z=Math.sin(_),D=T/b*_,G=Math.cos(D);w.x=M*(2+G)*.5*U,w.y=M*(2+G)*z*.5,w.z=M*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ts=class n extends Ze{constructor(e=new xo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new oe,h=new R,u=[],p=[],d=[],f=[];function m(x){h=e.getPointAt(x/t,h);let g=a.normals[x],v=a.binormals[x];for(let _=0;_<=s;_++){let b=_/s*Math.PI*2,T=Math.sin(b),M=-Math.cos(b);l.x=M*g.x+T*v.x,l.y=M*g.y+T*v.y,l.z=M*g.z+T*v.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),(function(){for(let x=0;x<=t;x++)for(let g=0;g<=s;g++)c.x=x/t,c.y=g/s,d.push(c.x,c.y)})(),(function(){for(let x=1;x<=t;x++)for(let g=1;g<=s;g++){let v=(s+1)*(x-1)+(g-1),_=(s+1)*x+(g-1),b=(s+1)*x+g,T=(s+1)*(x-1)+g;f.push(v,_,T),f.push(_,b,T)}})()})(),this.setIndex(f),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(p,3)),this.setAttribute("uv",new Oe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},fc=class extends Ze{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new R,r=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],p=u.start;for(let d=p,f=p+u.count;d<f;d+=3)for(let m=0;m<3;m++){let x=o.getX(d+m),g=o.getX(d+(m+1)%3);s.fromBufferAttribute(a,x),r.fromBufferAttribute(a,g),Qf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Qf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Qf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(s)!==!0&&(t.add(i),t.add(s),!0)}var Nx=Object.freeze({__proto__:null,BoxGeometry:an,CapsuleGeometry:ji,CircleGeometry:qi,ConeGeometry:Ms,CylinderGeometry:qt,DodecahedronGeometry:tc,EdgesGeometry:nc,ExtrudeGeometry:lc,IcosahedronGeometry:sa,LatheGeometry:cc,OctahedronGeometry:hc,PlaneGeometry:Mt,PolyhedronGeometry:bs,RingGeometry:ni,ShapeGeometry:uc,SphereGeometry:Pt,TetrahedronGeometry:dc,TorusGeometry:Gn,TorusKnotGeometry:pc,TubeGeometry:Ts,WireframeGeometry:fc});function rr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(em(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(em(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){let e={};for(let t=0;t<n.length;t++){let i=rr(n[t]);for(let s in i)e[s]=i[s]}return e}function em(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Dd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var t0={clone:rr,merge:un},_n=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let s=0;s<t.length;s++)i.push(t[s].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Te().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mc=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bt=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Eo=class extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gc=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yc=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vl(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}function w1(n){let e=n.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,s){return n[i]-n[s]}),t}function tm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function E1(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var xi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vc=class extends xi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hs,endingEnd:Hs}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gs:r=e,o=2*t-i;break;case no:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gs:a=e,l=2*i-t;break;case no:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(i-t)/(s-t),m=f*f,x=m*f,g=-p*x+2*p*m-p*f,v=(1+p)*x+(-1.5-2*p)*m+(-.5+p)*f+1,_=(-1-d)*x+(1.5+d)*m+.5*f,b=d*x-d*m;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+v*a[c+T]+_*a[l+T]+b*a[u+T];return r}},Ao=class extends xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},xc=class extends xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_c=class extends xi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(s-t),m=1-f;for(let x=0;x!==o;++x)r[x]=a[c+x]*m+a[l+x]*f;return r}let p=2*o,d=e-1;for(let f=0;f!==o;++f){let m=a[c+f],x=a[l+f],g=d*p+2*f,v=u[g],_=u[g+1],b=e*p+2*f,T=h[b],M=h[b+1],w,U,z,D,G,H=(i-t)/(s-t);for(let j=0;j<8;j++){w=H*H,U=w*H,z=1-H,D=z*z,G=D*z;let V=G*t+3*D*H*v+3*z*w*T+U*s-i;if(Math.abs(V)<1e-10)break;let W=3*D*(v-t)+6*z*H*(T-v)+3*w*(s-T);if(Math.abs(W)<1e-10)break;H-=V/W,H=Math.max(0,Math.min(1,H))}r[f]=G*m+3*D*H*_+3*z*w*M+U*x}return r}},Mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vl(t,this.TimeBufferType),this.values=Vl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vl(e.times,Array),values:Vl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _c(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break;case xu:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return jl;case this.InterpolantFactoryMethodBezier:return xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&jg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,u=h-i,p=h+i;for(let d=0;d!==i;++d){let f=t[h+d];if(f!==t[u+d]||f!==t[p+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mn.prototype.ValueTypeName="",Mn.prototype.TimeBufferType=Float32Array,Mn.prototype.ValueBufferType=Float32Array,Mn.prototype.DefaultInterpolation=Xs;var Bi=class extends Mn{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="bool",Bi.prototype.ValueBufferType=Array,Bi.prototype.DefaultInterpolation=Ws,Bi.prototype.InterpolantFactoryMethodLinear=void 0,Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}};Ro.prototype.ValueTypeName="color";var Yi=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}};Yi.prototype.ValueTypeName="number";var Mc=class extends xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Et.slerpFlat(r,0,a,c-o,a,c,l);return r}},_i=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion",_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Mn{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="string",ki.prototype.ValueBufferType=Array,ki.prototype.DefaultInterpolation=Ws,ki.prototype.InterpolantFactoryMethodLinear=void 0,ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}};Ki.prototype.ValueTypeName="vector";var ws=class{constructor(e="",t=-1,i=[],s=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(A1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Mn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=w1(l);l=tm(l,1,h),c=tm(c,1,h),s||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new Yi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],p=s[u];p||(s[u]=p=[]),p.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){let s=this.tracks[t];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function A1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return Ro;case"quaternion":return _i;case"bool":case"boolean":return Bi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(n.type);if(n.times===void 0){let t=[],i=[];E1(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var gi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(nm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!nm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function nm(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var bc=class{constructor(e,t,i){let s=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qc=new bc,Mi=class{constructor(e){this.manager=e!==void 0?e:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends Mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),void setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);if(Fi[e]!==void 0)return void Fi[e].push({onLoad:t,onProgress:i,onError:s});Fi[e]=[],Fi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[e],u=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=p?parseInt(p):0,f=d!==0,m=0,x=new ReadableStream({start(g){(function v(){u.read().then(({done:_,value:b})=>{if(_)g.close();else{m+=b.byteLength;let T=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:d});for(let M=0,w=h.length;M<w;M++){let U=h[M];U.onProgress&&U.onProgress(T)}g.enqueue(b),v()}},_=>{g.error(_)})})()}});return new Response(x)}throw new Eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(d=>p.decode(d))}}}).then(c=>{gi.add(`file:${e}`,c);let h=Fi[e];delete Fi[e];for(let u=0,p=h.length;u<p;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let u=0,p=h.length;u<p;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hr=new WeakMap,Sc=class extends Mi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Hr.get(a);u===void 0&&(u=[],Hr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=qr("img");function l(){h(),t&&t(this);let u=Hr.get(this)||[];for(let p=0;p<u.length;p++){let d=u[p];d.onLoad&&d.onLoad(this)}Hr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),gi.remove(`image:${e}`);let p=Hr.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onError&&f.onError(u)}Hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var bi=class extends Mi{constructor(e){super(e)}load(e,t,i,s){let r=new Kt,a=new Sc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Js=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Co=class extends Js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mu=new Ne,im=new R,sm=new R,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;im.setFromMatrixPosition(e.matrixWorld),t.position.copy(im),sm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sm),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wl=new R,Xl=new Et,di=new R,aa=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wl,Xl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new R,rm=new oe,am=new oe,Xt=class extends aa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*js*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Vr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*js*Math.atan(Math.tan(.5*Vr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,rm,am),t.subVectors(am,rm)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Vr*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Au=class extends Po{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*js*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;i===t.fov&&s===t.aspect&&r===t.far||(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Io=class extends Js{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ru=class extends Po{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends Js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ru}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Es=class extends aa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cu=class extends Po{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Cu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gu=new WeakMap,Lo=class extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gi.get(`image-bitmap:${e}`);if(a!==void 0)return r.manager.itemStart(e),a.then?void a.then(c=>{gu.has(a)===!0?(s&&s(gu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))}):void setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){gi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),gu.set(l,c),gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zx=new Ne,Dx=new Ne,Ux=new Ne;var Gr=-90,Tc=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(Gr,1,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Gr,1,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Gr,1,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Gr,1,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Gr,1,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Gr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==jr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;x=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},wc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ox=new R,Fx=new Et,Bx=new R,kx=new R,Hx=new R;var Gx=new R,Vx=new Et,Wx=new R,Xx=new R;var Ec=class{constructor(e,t,i){let s,r,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){Et.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let a=this._workIndex*r;Et.multiplyQuaternionsFlat(e,a,e,t,e,i),Et.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},Ud="\\[\\]\\.:\\/",R1=new RegExp("["+Ud+"]","g"),yu="[^"+Ud+"]",C1="[^"+Ud.replace("\\.","")+"]",P1=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",yu)+/(WCOD+)?/.source.replace("WCOD",C1)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yu)+"$"),I1=["material","materials","bones","map"],vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R1,"")}static parseTrackName(e){let t=P1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);I1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Le("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[s];if(a===void 0)return void Fe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+s+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry)return void Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=class{constructor(n,e,t){let i=t||vt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=t.length;i!==s;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray],vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ac=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Hs,endingEnd:Hs};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled)return void this._updateWeight(e);let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===Fm)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping()))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,a=i===2202;if(e===0)return r===-1||!a||1&~r?s:t-s;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else{if(!(s<0)){this.time=s;break e}s=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&!(1&~r))return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Gs,s.endingEnd=Gs):(s.endingStart=e?this.zeroSlopeAtStart?Gs:Hs:no,s.endingEnd=t?this.zeroSlopeAtEnd?Gs:Hs:no)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},L1=new Float32Array(1),oa=class extends ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let p=s[u],d=p.name,f=h[d];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,d));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;f=new Ec(vt.create(i,d,m),p.ValueTypeName,p.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,d),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Ao(new Float32Array(2),new Float32Array(2),1,L1),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,a=typeof e=="string"?ws.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(i=a!==null?a.blendMode:Om),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Ac(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?ws.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let a=i[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let s=this._bindingsByRootAndName[t];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var om=new Ne,No=class{constructor(e,t,i=0,s=1/0){this.ray=new vs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return om.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(om),this}intersectObject(e,t=!0,i=[]){return Pu(e,this,i,t),i.sort(lm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Pu(e[s],this,i,t);return i.sort(lm),i}};function lm(n,e){return n.distance-e.distance}function Pu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],e,t,!0)}}var Gd=class Gd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Gd.prototype.isMatrix2=!0;var Iu=Gd,jx=new oe;var qx=new R,Yx=new R,Kx=new R,Zx=new R,Jx=new R,$x=new R,Qx=new R;var e_=new R;var t_=new R,n_=new Ne,i_=new Ne;var s_=new R,r_=new Te,a_=new Te;var o_=new R,l_=new R,c_=new R;var h_=new R,u_=new aa;var d_=new rn;var p_=new R;function Od(n,e,t,i){let s=(function(r){switch(r){case Nn:case Ku:return{byteLength:1,components:1};case da:case Zu:case Ei:return{byteLength:2,components:1};case Dc:case Uc:return{byteLength:2,components:4};case $i:case zc:case zn:return{byteLength:4,components:1};case Ju:case $u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)})(i);switch(t){case 1021:return n*e;case Oc:case Fc:return n*e/s.components*s.byteLength;case 1030:case 1031:return n*e*2/s.components*s.byteLength;case 1022:return n*e*3/s.components*s.byteLength;case Vn:case 1033:return n*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function T0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function D1(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let s=e.get(t);if(s===void 0)e.set(t,(function(r,a){let o=r.array,l=r.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}})(t,i));else if(s.version<t.version){if(s.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,r),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,p)=>u.start-p.start);let h=0;for(let u=1;u<c.length;u++){let p=c[h],d=c[u];d.start<=p.start+p.count+1?p.count=Math.max(p.count,d.start+d.count-p.start):(++h,c[h]=d)}c.length=h+1;for(let u=0,p=c.length;u<p;u++){let d=c[u];n.bufferSubData(o,d.start*l.BYTES_PER_ELEMENT,l,d.start,d.count)}a.clearUpdateRanges()}a.onUploadCallback()})(s.buffer,t,i),s.version=t.version}}}}var Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},_e={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ri={basic:{uniforms:un([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:un([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:un([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:un([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:un([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:un([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:un([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:un([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:un([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:un([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:un([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:un([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:un([_e.lights,_e.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ri.physical={uniforms:un([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Yc={r:0,b:0,g:0},U1=new Ne,w0=new Xe;function O1(n,e,t,i,s,r){let a=new Te(0),o,l,c=s===!0?0:1,h=null,u=0,p=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let g=m.backgroundBlurriness>0;x=e.get(x,g)}return x}function f(m,x){m.getRGB(Yc,Dd(n)),t.buffers.color.setClear(Yc.r,Yc.g,Yc.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let x=!1,g=d(m);g===null?f(a,c):g&&g.isColor&&(f(g,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,x){let g=d(x);g&&(g.isCubeTexture||g.mapping===Uo)?(l===void 0&&(l=new be(new an(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:rr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,_,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(x.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(w0),l.material.toneMapped=$e.getTransfer(g.colorSpace)!==ut,h===g&&u===g.version&&p===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new be(new Mt(2,2),new _n({name:"BackgroundMaterial",uniforms:rr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.toneMapped=$e.getTransfer(g.colorSpace)!==ut,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&p===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,p=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function F1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let v=[],_=[],b=[];for(let T=0;T<t;T++)v[T]=0,_[T]=0,b[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=r.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function u(g){p(g,0)}function p(g,v){let _=r.newAttributes,b=r.enabledAttributes,T=r.attributeDivisors;_[g]=1,b[g]===0&&(n.enableVertexAttribArray(g),b[g]=1),T[g]!==v&&(n.vertexAttribDivisor(g,v),T[g]=v)}function d(){let g=r.newAttributes,v=r.enabledAttributes;for(let _=0,b=v.length;_<b;_++)v[_]!==g[_]&&(n.disableVertexAttribArray(_),v[_]=0)}function f(g,v,_,b,T,M,w){w===!0?n.vertexAttribIPointer(g,v,_,T,M):n.vertexAttribPointer(g,v,_,b,T,M)}function m(){x(),a=!0,r!==s&&(r=s,o(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:function(g,v,_,b,T){let M=!1,w=(function(U,z,D,G){let H=G.wireframe===!0,j=i[z.id];j===void 0&&(j={},i[z.id]=j);let V=U.isInstancedMesh===!0?U.id:0,W=j[V];W===void 0&&(W={},j[V]=W);let $=W[D.id];$===void 0&&($={},W[D.id]=$);let K=$[H];return K===void 0&&(K=c(n.createVertexArray()),$[H]=K),K})(g,b,_,v);r!==w&&(r=w,o(r.object)),M=(function(U,z,D,G){let H=r.attributes,j=z.attributes,V=0,W=D.getAttributes();for(let $ in W)if(W[$].location>=0){let K=H[$],ae=j[$];if(ae===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;V++}return r.attributesNum!==V||r.index!==G})(g,b,_,T),M&&(function(U,z,D,G){let H={},j=z.attributes,V=0,W=D.getAttributes();for(let $ in W)if(W[$].location>=0){let K=j[$];K===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));let ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),H[$]=ae,V++}r.attributes=H,r.attributesNum=V,r.index=G})(g,b,_,T),T!==null&&e.update(T,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(U,z,D,G){h();let H=G.attributes,j=D.getAttributes(),V=z.defaultAttributeValues;for(let W in j){let $=j[W];if($.location>=0){let K=H[W];if(K===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){let ae=K.normalized,ge=K.itemSize,Re=e.get(K);if(Re===void 0)continue;let ve=Re.buffer,Ee=Re.type,ne=Re.bytesPerElement,ye=Ee===n.INT||Ee===n.UNSIGNED_INT||K.gpuType===zc;if(K.isInterleavedBufferAttribute){let ue=K.data,xe=ue.stride,Ie=K.offset;if(ue.isInstancedInterleavedBuffer){for(let ie=0;ie<$.locationSize;ie++)p($.location+ie,ue.meshPerAttribute);U.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<$.locationSize;ie++)u($.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ie=0;ie<$.locationSize;ie++)f($.location+ie,ge/$.locationSize,Ee,ae,xe*ne,(Ie+ge/$.locationSize*ie)*ne,ye)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<$.locationSize;ue++)p($.location+ue,K.meshPerAttribute);U.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<$.locationSize;ue++)u($.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ue=0;ue<$.locationSize;ue++)f($.location+ue,ge/$.locationSize,Ee,ae,ge*ne,ge/$.locationSize*ue*ne,ye)}}else if(V!==void 0){let ae=V[W];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv($.location,ae);break;case 3:n.vertexAttrib3fv($.location,ae);break;case 4:n.vertexAttrib4fv($.location,ae);break;default:n.vertexAttrib1fv($.location,ae)}}}}d()})(g,v,_,b),T!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:m,resetDefaultState:x,dispose:function(){m();for(let g in i){let v=i[g];for(let _ in v){let b=v[_];for(let T in b){let M=b[T];for(let w in M)l(M[w].object),delete M[w];delete b[T]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let v=i[g.id];for(let _ in v){let b=v[_];for(let T in b){let M=b[T];for(let w in M)l(M[w].object),delete M[w];delete b[T]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let v in i){let _=i[v],b=g.isInstancedMesh===!0?g.id:0,T=_[b];if(T!==void 0){for(let M in T){let w=T[M];for(let U in w)l(w[U].object),delete w[U];delete T[M]}delete _[b],Object.keys(_).length===0&&delete i[v]}}},releaseStatesOfProgram:function(g){for(let v in i){let _=i[v];for(let b in _){let T=_[b];if(T[g.id]===void 0)continue;let M=T[g.id];for(let w in M)l(M[w].object),delete M[w];delete T[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:d}}function B1(n,e,t){let i;this.setMode=function(s){i=s},this.render=function(s,r){n.drawArrays(i,s,r),t.update(r,i,1)},this.renderInstances=function(s,r,a){a!==0&&(n.drawArraysInstanced(i,s,r,a),t.update(r,i,a))},this.renderMultiDraw=function(s,r,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,r,0,a);let o=0;for(let l=0;l<a;l++)o+=r[l];t.update(o,i,1)}}function k1(n,e,t,i){let s;function r(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(Le("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&c===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s},getMaxPrecision:r,textureFormatReadable:function(h){return h===Vn||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Nn&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==zn&&!u)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function H1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new pi,o=new Xe,l={value:null,needsUpdate:!1};function c(h,u,p,d){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,d!==!0||m===null){let x=p+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<x)&&(m=new Float32Array(x));for(let v=0,_=p;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||i!==0||s;return s=u,i=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!s||d===null||d.length===0||r&&!m)r?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=r?0:i,v=4*g,_=x.clippingState||null;l.value=_,_=c(d,u,v,p);for(let b=0;b!==v;++b)_[b]=t[b];x.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}w0.set(-1,0,0,0,1,0,0,0,1);var n0=[.125,.215,.35,.446,.526,.582],Bo=20,ko=new Es,i0=new Te,Vd=null,Wd=0,Xd=0,jd=!1,G1=new R,va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=G1}=r;Vd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Wd,Xd),this._renderer.xr.enabled=jd,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ei,format:Vn,colorSpace:vn,depthBuffer:!1},s=s0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+n0.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);o.push(d);let f=1/d;p>a-4?f=n0[p-a+4-1]:p===0&&(f=0),l.push(f);let m=1/(d-2),x=-m,g=1+m,v=[x,x,g,x,g,g,x,x,g,g,x,g],_=6,b=6,T=3,M=2,w=1,U=new Float32Array(T*b*_),z=new Float32Array(M*b*_),D=new Float32Array(w*b*_);for(let H=0;H<_;H++){let j=H%3*2/3-1,V=H>2?0:-1,W=[j,V,0,j+2/3,V,0,j+2/3,V+1,0,j,V,0,j+2/3,V+1,0,j,V+1,0];U.set(W,T*b*H),z.set(v,M*b*H);let $=[H,H,H,H,H,H];D.set($,w*b*H)}let G=new Ze;G.setAttribute("position",new it(U,T)),G.setAttribute("uv",new it(z,M)),G.setAttribute("faceIndex",new it(D,w)),c.push(new be(G,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(r)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Bo),h=new R(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Bo,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})})(r,e,t),this._ggxMaterial=(function(a,o,l){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})})(r,e,t)}return s}_compileMaterial(e){let t=new be(new Ze,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,s,r){let a=new Xt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(i0),c.toneMapping=ii,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new an,new st({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,d=p.material,f=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,f=!0):(d.color.copy(i0),f=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(a.up.set(0,o[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+l[x],r.y,r.z)):g===1?(a.up.set(0,0,o[x]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+l[x],r.z)):(a.up.set(0,o[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+l[x]));let v=this._cubeSize;ga(s,g*v,x>2?v:0,v,v),c.setRenderTarget(s),f&&c.render(p,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ha||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r,r.uniforms.envMap.value=e;let o=this._cubeSize;ga(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,ko)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:p}=this,d=this._sizeLods[i],f=3*d*(i>p-4?i-p+4:0),m=4*(this._cubeSize-d);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,ga(r,f,m,3*d,2*d),s.setRenderTarget(r),s.render(o,ko),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,ga(e,f,m,3*d,2*d),s.setRenderTarget(e),s.render(o,ko)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[s];h.material=c;let u=c.uniforms,p=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*p):2*Math.PI/39,f=r/d,m=isFinite(r)?1+Math.floor(3*f):Bo;m>Bo&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let x=[],g=0;for(let b=0;b<Bo;++b){let T=b/f,M=Math.exp(-T*T/2);x.push(M),b===0?g+=M:b<m&&(g+=2*M)}for(let b=0;b<x.length;b++)x[b]=x[b]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=x,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=d,u.mipInt.value=v-i;let _=this._sizeLods[s];ga(t,3*_*(s>v-4?s-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,ko)}};function s0(n,e,t){let i=new In(n,e,t);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function r0(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function a0(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jc=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Ti});r.uniforms.tEquirect.value=t;let a=new be(s,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=jt),new Tc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function V1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(o,l){return l===Ic?o.mapping=ha:l===Lc&&(o.mapping=tr),o}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Ic||h===Lc,p=h===ha||h===tr;if(u||p){let d=t.get(c),f=d!==void 0?d.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new va(n)),d=u?i.fromEquirectangular(c,d):i.fromCubemap(c,d),d.texture.pmremVersion=c.pmremVersion,t.set(c,d),d.texture;if(d!==void 0)return d.texture;{let m=c.image;return u&&m&&m.height>0||p&&m&&(function(x){let g=0,v=6;for(let _=0;_<v;_++)x[_]!==void 0&&g++;return g===v})(m)?(i===null&&(i=new va(n)),d=u?i.fromEquirectangular(c):i.fromCubemap(c),d.texture.pmremVersion=c.pmremVersion,t.set(c,d),c.addEventListener("dispose",a),d.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Ic||h===Lc){if(e.has(c))return s(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let p=new Jc(u.height);return p.fromEquirectangularTexture(n,c),e.set(c,p),c.addEventListener("dispose",r),s(p.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function W1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Vs("WebGLRenderer: "+i+" extension not supported."),s}}}function X1(n,e,t,i){let s={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete s[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,p=0;if(u===void 0)return;if(h!==null){let m=h.array;p=h.version;for(let x=0,g=m.length;x<g;x+=3){let v=m[x+0],_=m[x+1],b=m[x+2];c.push(v,_,_,b,b,v)}}else{let m=u.array;p=u.version;for(let x=0,g=m.length/3-1;x<g;x+=3){let v=x+0,_=x+1,b=x+2;c.push(v,_,_,b,b,v)}}let d=new(u.count>=65535?lo:oo)(c,1);d.version=p;let f=r.get(l);f&&e.remove(f),r.set(l,d)}return{get:function(l,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function j1(n,e,t){let i,s,r;this.setMode=function(a){i=a},this.setIndex=function(a){s=a.type,r=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,s,a*r),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(n.drawElementsInstanced(i,o,s,a*r,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,s,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,i,1)}}function q1(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,s){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=s*(t/3);break;case n.LINES:e.lines+=s*(t/2);break;case n.LINE_STRIP:e.lines+=s*(t-1);break;case n.LINE_LOOP:e.lines+=s*t;break;case n.POINTS:e.points+=s*t;break;default:Fe("WebGLInfo: Unknown draw mode:",i)}}}}function Y1(n,e,t){let i=new WeakMap,s=new mt;return{update:function(r,a,o){let l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let U=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;p===!0&&(v=1),d===!0&&(v=2),f===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*b*4*h),M=new ro(T,_,b,h);M.type=zn,M.needsUpdate=!0;let w=4*v;for(let z=0;z<h;z++){let D=m[z],G=x[z],H=g[z],j=_*b*4*z;for(let V=0;V<D.count;V++){let W=V*w;p===!0&&(s.fromBufferAttribute(D,V),T[j+W+0]=s.x,T[j+W+1]=s.y,T[j+W+2]=s.z,T[j+W+3]=0),d===!0&&(s.fromBufferAttribute(G,V),T[j+W+4]=s.x,T[j+W+5]=s.y,T[j+W+6]=s.z,T[j+W+7]=0),f===!0&&(s.fromBufferAttribute(H,V),T[j+W+8]=s.x,T[j+W+9]=s.y,T[j+W+10]=s.z,T[j+W+11]=H.itemSize===4?s.w:1)}}u={count:h,texture:M,size:new oe(_,b)},i.set(a,u),a.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let p=0;for(let f=0;f<l.length;f++)p+=l[f];let d=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(n,"morphTargetBaseInfluence",d),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function K1(n,e,t,i,s){let r=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=s.render.frame,c=o.geometry,h=e.get(o,c);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return h},dispose:function(){r=new WeakMap}}}var Z1={[Gu]:"LINEAR_TONE_MAPPING",[Vu]:"REINHARD_TONE_MAPPING",[Wu]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[qu]:"NEUTRAL_TONE_MAPPING",[Xu]:"CUSTOM_TONE_MAPPING"};function J1(n,e,t,i,s,r){let a=new In(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Xi(e,t):void 0}),o=new In(e,t,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new Ze;l.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let c=new mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new be(l,c),u=new Es(-1,1,1,-1,0,1),p,d=null,f=null,m=!1,x=null,g=[],v=!1;this.setSize=function(_,b){a.setSize(_,b),o.setSize(_,b);for(let T=0;T<g.length;T++){let M=g[T];M.setSize&&M.setSize(_,b)}},this.setEffects=function(_){g=_,v=g.length>0&&g[0].isRenderPass===!0;let b=a.width,T=a.height;for(let M=0;M<g.length;M++){let w=g[M];w.setSize&&w.setSize(b,T)}},this.begin=function(_,b){if(m||_.toneMapping===ii&&g.length===0)return!1;if(x=b,b!==null){let T=b.width,M=b.height;a.width===T&&a.height===M||this.setSize(T,M)}return v===!1&&_.setRenderTarget(a),p=_.toneMapping,_.toneMapping=ii,!0},this.hasRenderPass=function(){return v},this.end=function(_,b){_.toneMapping=p,m=!0;let T=a,M=o;for(let w=0;w<g.length;w++){let U=g[w];if(U.enabled!==!1&&(U.render(_,M,T,b),U.needsSwap!==!1)){let z=T;T=M,M=z}}if(d!==_.outputColorSpace||f!==_.toneMapping){d=_.outputColorSpace,f=_.toneMapping,c.defines={},$e.getTransfer(d)===ut&&(c.defines.SRGB_TRANSFER="");let w=Z1[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(x),_.render(h,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var E0=new Kt,Kd=new Xi(1,1),A0=new ro,R0=new Zl,C0=new fo,o0=[],l0=[],c0=new Float32Array(16),h0=new Float32Array(9),u0=new Float32Array(4);function xa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=o0[s];if(r===void 0&&(r=new Float32Array(s),o0[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qc(n,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Q1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function ey(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function ty(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function ny(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;u0.set(i),n.uniformMatrix2fv(this.addr,!1,u0),Jt(t,i)}}function iy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;h0.set(i),n.uniformMatrix3fv(this.addr,!1,h0),Jt(t,i)}}function sy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;c0.set(i),n.uniformMatrix4fv(this.addr,!1,c0),Jt(t,i)}}function ry(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ay(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function oy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function ly(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function cy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function uy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function dy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function py(n,e,t){let i=this.cache,s=t.allocateTextureUnit(),r;i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),this.type===n.SAMPLER_2D_SHADOW?(Kd.compareFunction=t.isReversedDepthBuffer()?jc:Xc,r=Kd):r=E0,t.setTexture2D(e||r,s)}function fy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||R0,s)}function my(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||C0,s)}function gy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||A0,s)}function yy(n,e){n.uniform1fv(this.addr,e)}function vy(n,e){let t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function xy(n,e){let t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function _y(n,e){let t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function My(n,e){let t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function by(n,e){let t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sy(n,e){let t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ty(n,e){n.uniform1iv(this.addr,e)}function wy(n,e){n.uniform2iv(this.addr,e)}function Ey(n,e){n.uniform3iv(this.addr,e)}function Ay(n,e){n.uniform4iv(this.addr,e)}function Ry(n,e){n.uniform1uiv(this.addr,e)}function Cy(n,e){n.uniform2uiv(this.addr,e)}function Py(n,e){n.uniform3uiv(this.addr,e)}function Iy(n,e){n.uniform4uiv(this.addr,e)}function Ly(n,e,t){let i=this.cache,s=e.length,r=Qc(t,s),a;Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r)),a=this.type===n.SAMPLER_2D_SHADOW?Kd:E0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ny(n,e,t){let i=this.cache,s=e.length,r=Qc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||R0,r[a])}function zy(n,e,t){let i=this.cache,s=e.length,r=Qc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||C0,r[a])}function Dy(n,e,t){let i=this.cache,s=e.length,r=Qc(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||A0,r[a])}var Zd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(s){switch(s){case 5126:return $1;case 35664:return Q1;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return ay;case 35668:case 35672:return oy;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return hy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}})(t.type)}},Jd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(s){switch(s){case 5126:return yy;case 35664:return vy;case 35665:return xy;case 35666:return _y;case 35674:return My;case 35675:return by;case 35676:return Sy;case 5124:case 35670:return Ty;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Dy}})(t.type)}},$d=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},qd=/(\w+)(\])?(\[|\.)?/g;function d0(n,e){n.seq.push(e),n.map[e.id]=e}function Uy(n,e,t){let i=n.name,s=i.length;for(qd.lastIndex=0;;){let r=qd.exec(i),a=qd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===s){d0(t,c===void 0?new Zd(o,n,e):new Jd(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new $d(o),d0(t,h)),t=h}}}var ya=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Uy(o,e.getUniformLocation(t,o.name),this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function p0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Oy=0,f0=new Xe;function m0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),p=Math.min(l+6,c.length);for(let d=u;d<p;d++){let f=d+1;h.push(`${f===l?">":" "} ${f}: ${c[d]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return s}function Fy(n,e){let t=(function(i){$e._getMatrix(f0,$e.workingColorSpace,i);let s=`mat3( ${f0.elements.map(r=>r.toFixed(4))} )`;switch($e.getTransfer(i)){case io:return[s,"LinearTransferOETF"];case ut:return[s,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[s,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var By={[Gu]:"Linear",[Vu]:"Reinhard",[Wu]:"Cineon",[Do]:"ACESFilmic",[ju]:"AgX",[qu]:"Neutral",[Xu]:"Custom"};function ky(n,e){let t=By[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new R;function Hy(){return $e.getLuminanceCoefficients(Kc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Kc.x.toFixed(4)}, ${Kc.y.toFixed(4)}, ${Kc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ho(n){return n!==""}function g0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(n){return n.replace(Gy,Wy)}var Vy=new Map;function Wy(n,e){let t=Je[e];if(t===void 0){let i=Vy.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Je[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Qd(t)}var Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(n){return n.replace(Xy,jy)}function jy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function x0(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qy={[zo]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"},Yy={[ha]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"},Ky={[tr]:"ENVMAP_MODE_REFRACTION"},Zy={[Im]:"ENVMAP_BLENDING_MULTIPLY",[Lm]:"ENVMAP_BLENDING_MIX",[Nm]:"ENVMAP_BLENDING_ADD"};function Jy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(G){return qy[G.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(G){return G.envMap===!1?"ENVMAP_TYPE_CUBE":Yy[G.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(G){return G.envMap===!1?"ENVMAP_MODE_REFLECTION":Ky[G.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(G){return G.envMap===!1?"ENVMAP_BLENDING_NONE":Zy[G.combine]||"ENVMAP_BLENDING_NONE"})(t),p=(function(G){let H=G.envMapCubeUVHeight;if(H===null)return null;let j=Math.log2(H)-2,V=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:V,maxMip:j}})(t),d=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)})(t),f=(function(G){let H=[];for(let j in G){let V=G[j];V!==!1&&H.push("#define "+j+" "+V)}return H.join(`
`)})(r),m=s.createProgram(),x,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ho).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(x=[x0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[x0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Je.tonemapping_pars_fragment:"",t.toneMapping!==ii?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Fy("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),a=Qd(a),a=g0(a,t),a=y0(a,t),o=Qd(o),o=g0(o,t),o=y0(o,t),a=v0(a),o=v0(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+x+a,b=v+g+o,T=p0(s,s.VERTEX_SHADER,_),M=p0(s,s.FRAGMENT_SHADER,b);function w(G){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(m)||"",j=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(M)||"",W=H.trim(),$=j.trim(),K=V.trim(),ae=!0,ge=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,M);else{let Re=m0(s,T,"vertex"),ve=m0(s,M,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+Re+`
`+ve)}else W!==""?Le("WebGLProgram: Program Info Log:",W):$!==""&&K!==""||(ge=!1);ge&&(G.diagnostics={runnable:ae,programLog:W,vertexShader:{log:$,prefix:x},fragmentShader:{log:K,prefix:g}})}s.deleteShader(T),s.deleteShader(M),U=new ya(s,m),z=(function(H,j){let V={},W=H.getProgramParameter(j,H.ACTIVE_ATTRIBUTES);for(let $=0;$<W;$++){let K=H.getActiveAttrib(j,$),ae=K.name,ge=1;K.type===H.FLOAT_MAT2&&(ge=2),K.type===H.FLOAT_MAT3&&(ge=3),K.type===H.FLOAT_MAT4&&(ge=4),V[ae]={type:K.type,location:H.getAttribLocation(j,ae),locationSize:ge}}return V})(s,m)}let U,z;s.attachShader(m,T),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),this.getUniforms=function(){return U===void 0&&w(this),U},this.getAttributes=function(){return z===void 0&&w(this),z};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,37297)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}var $y=0,ep=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tp(e),t.set(e,i)),i}},tp=class{constructor(e){this.id=$y++,this.code=e,this.usedTimes=0}};function Qy(n,e,t,i,s,r){let a=new Zr,o=new ep,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,p=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,x,g,v,_,b){let T=v.fog,M=_.geometry,w=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?v.environment:null,U=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||w,U),D=z&&z.mapping===Uo?z.image.height:null,G=d[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&Le("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let H=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,j=H!==void 0?H.length:0,V,W,$,K,ae=0;if(M.morphAttributes.position!==void 0&&(ae=1),M.morphAttributes.normal!==void 0&&(ae=2),M.morphAttributes.color!==void 0&&(ae=3),G){let $t=Ri[G];V=$t.vertexShader,W=$t.fragmentShader}else{V=m.vertexShader,W=m.fragmentShader;let $t=o.getVertexShaderStage(m),Un=o.getFragmentShaderStage(m);o.update(m,$t,Un),$=$t.id,K=Un.id}let ge=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),ve=_.isInstancedMesh===!0,Ee=_.isBatchedMesh===!0,ne=!!m.map,ye=!!m.matcap,ue=!!z,xe=!!m.aoMap,Ie=!!m.lightMap,ie=!!m.bumpMap&&m.wireframe===!1,N=!!m.normalMap,A=!!m.displacementMap,I=!!m.emissiveMap,O=!!m.metalnessMap,S=!!m.roughnessMap,B=m.anisotropy>0,F=m.clearcoat>0,P=m.dispersion>0,Y=m.iridescence>0,J=m.sheen>0,ee=m.transmission>0,de=B&&!!m.anisotropyMap,pe=F&&!!m.clearcoatMap,Pe=F&&!!m.clearcoatNormalMap,fe=F&&!!m.clearcoatRoughnessMap,ke=Y&&!!m.iridescenceMap,se=Y&&!!m.iridescenceThicknessMap,he=J&&!!m.sheenColorMap,ce=J&&!!m.sheenRoughnessMap,Se=!!m.specularMap,xt=!!m.specularColorMap,lt=!!m.specularIntensityMap,Ct=ee&&!!m.transmissionMap,nn=ee&&!!m.thicknessMap,De=!!m.gradientMap,ht=!!m.alphaMap,Ye=m.alphaTest>0,Yt=!!m.alphaHash,yt=!!m.extensions,Ft=ii;m.toneMapped&&(ge!==null&&ge.isXRRenderTarget!==!0||(Ft=n.toneMapping));let dt={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:V,fragmentShader:W,defines:m.defines,customVertexShaderID:$,customFragmentShaderID:K,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&_._colorsTexture!==null,instancing:ve,instancingColor:ve&&_.instanceColor!==null,instancingMorph:ve&&_.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ne,matcap:ye,envMap:ue,envMapMode:ue&&z.mapping,envMapCubeUVHeight:D,aoMap:xe,lightMap:Ie,bumpMap:ie,normalMap:N,displacementMap:A,emissiveMap:I,normalMapObjectSpace:N&&m.normalMapType===Bm,normalMapTangentSpace:N&&m.normalMapType===Ld,packedNormalMap:N&&m.normalMapType===Ld&&(sn=m.normalMap.format,sn===sr||sn===Vc||sn===Wc),metalnessMap:O,roughnessMap:S,anisotropy:B,anisotropyMap:de,clearcoat:F,clearcoatMap:pe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:fe,dispersion:P,iridescence:Y,iridescenceMap:ke,iridescenceThicknessMap:se,sheen:J,sheenColorMap:he,sheenRoughnessMap:ce,specularMap:Se,specularColorMap:xt,specularIntensityMap:lt,transmission:ee,transmissionMap:Ct,thicknessMap:nn,gradientMap:De,opaque:m.transparent===!1&&m.blending===er&&m.alphaToCoverage===!1,alphaMap:ht,alphaTest:Ye,alphaHash:Yt,combine:m.combine,mapUv:ne&&f(m.map.channel),aoMapUv:xe&&f(m.aoMap.channel),lightMapUv:Ie&&f(m.lightMap.channel),bumpMapUv:ie&&f(m.bumpMap.channel),normalMapUv:N&&f(m.normalMap.channel),displacementMapUv:A&&f(m.displacementMap.channel),emissiveMapUv:I&&f(m.emissiveMap.channel),metalnessMapUv:O&&f(m.metalnessMap.channel),roughnessMapUv:S&&f(m.roughnessMap.channel),anisotropyMapUv:de&&f(m.anisotropyMap.channel),clearcoatMapUv:pe&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:ce&&f(m.sheenRoughnessMap.channel),specularMapUv:Se&&f(m.specularMap.channel),specularColorMapUv:xt&&f(m.specularColorMap.channel),specularIntensityMapUv:lt&&f(m.specularIntensityMap.channel),transmissionMapUv:Ct&&f(m.transmissionMap.channel),thicknessMapUv:nn&&f(m.thicknessMap.channel),alphaMapUv:ht&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(N||B),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!M.attributes.uv&&(ne||ht),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&N===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ne&&m.map.isVideoTexture===!0&&$e.getTransfer(m.map.colorSpace)===ut,decodeVideoTextureEmissive:I&&m.emissiveMap.isVideoTexture===!0&&$e.getTransfer(m.emissiveMap.colorSpace)===ut,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===rt,flipSided:m.side===Tn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:yt&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&m.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var sn;return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)x.push(g),x.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)})(x,m),(function(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(x,m),x.push(n.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=d[m.type],g;if(x){let v=Ri[x];g=t0.clone(v.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,x){let g=h.get(x);return g!==void 0?++g.usedTimes:(g=new Jy(n,x,m,s),c.push(g),h.set(x,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function ev(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M0(){let n=[],e=0,t=[],i=[],s=[];function r(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,p){let d=n[e];return d===void 0?(d={id:o.id,object:o,geometry:l,material:c,materialVariant:r(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:p},n[e]=d):(d.id=o.id,d.object=o,d.geometry=l,d.material=c,d.materialVariant=r(o),d.groupOrder=h,d.renderOrder=o.renderOrder,d.z=u,d.group=p),e++,d}return{opaque:t,transmissive:i,transparent:s,init:function(){e=0,t.length=0,i.length=0,s.length=0},push:function(o,l,c,h,u,p){let d=a(o,l,c,h,u,p);c.transmission>0?i.push(d):c.transparent===!0?s.push(d):t.push(d)},unshift:function(o,l,c,h,u,p){let d=a(o,l,c,h,u,p);c.transmission>0?i.unshift(d):c.transparent===!0?s.unshift(d):t.unshift(d)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l,c){t.length>1&&t.sort(o||tv),i.length>1&&i.sort(l||_0),s.length>1&&s.sort(l||_0),c&&(t.reverse(),i.reverse(),s.reverse())}}}function nv(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),s;return i===void 0?(s=new M0,n.set(e,[s])):t>=i.length?(s=new M0,i.push(s)):s=i[t],s},dispose:function(){n=new WeakMap}}}function iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Te};break;case"SpotLight":t={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new R,halfWidth:new R,halfHeight:new R}}return n[e.id]=t,t}}}var sv=0;function rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function av(n){let e=new iv,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new R);let s=new R,r=new Ne,a=new Ne;return{setup:function(o){let l=0,c=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let u=0,p=0,d=0,f=0,m=0,x=0,g=0,v=0,_=0,b=0,T=0;o.sort(rv);for(let w=0,U=o.length;w<U;w++){let z=o[w],D=z.color,G=z.intensity,H=z.distance,j=null;if(z.shadow&&z.shadow.map&&(j=z.shadow.map.texture.format===sr?z.shadow.map.texture:z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)l+=D.r*G,c+=D.g*G,h+=D.b*G;else if(z.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(z.sh.coefficients[V],G);T++}else if(z.isDirectionalLight){let V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let W=z.shadow,$=t.get(z);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,i.directionalShadow[u]=$,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=z.shadow.matrix,x++}i.directional[u]=V,u++}else if(z.isSpotLight){let V=e.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(D).multiplyScalar(G),V.distance=H,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,i.spot[d]=V;let W=z.shadow;if(z.map&&(i.spotLightMap[_]=z.map,_++,W.updateMatrices(z),z.castShadow&&b++),i.spotLightMatrix[d]=W.matrix,z.castShadow){let $=t.get(z);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,i.spotShadow[d]=$,i.spotShadowMap[d]=j,v++}d++}else if(z.isRectAreaLight){let V=e.get(z);V.color.copy(D).multiplyScalar(G),V.halfWidth.set(.5*z.width,0,0),V.halfHeight.set(0,.5*z.height,0),i.rectArea[f]=V,f++}else if(z.isPointLight){let V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),V.distance=z.distance,V.decay=z.decay,z.castShadow){let W=z.shadow,$=t.get(z);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,$.shadowCameraNear=W.camera.near,$.shadowCameraFar=W.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=z.shadow.matrix,g++}i.point[p]=V,p++}else if(z.isHemisphereLight){let V=e.get(z);V.skyColor.copy(z.color).multiplyScalar(G),V.groundColor.copy(z.groundColor).multiplyScalar(G),i.hemi[m]=V,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let M=i.hash;M.directionalLength===u&&M.pointLength===p&&M.spotLength===d&&M.rectAreaLength===f&&M.hemiLength===m&&M.numDirectionalShadows===x&&M.numPointShadows===g&&M.numSpotShadows===v&&M.numSpotMaps===_&&M.numLightProbes===T||(i.directional.length=u,i.spot.length=d,i.rectArea.length=f,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+_-b,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,M.directionalLength=u,M.pointLength=p,M.spotLength=d,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=x,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=_,M.numLightProbes=T,i.version=sv++)},setupView:function(o,l){let c=0,h=0,u=0,p=0,d=0,f=l.matrixWorldInverse;for(let m=0,x=o.length;m<x;m++){let g=o[m];if(g.isDirectionalLight){let v=i.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(g.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(g.isPointLight){let v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=i.hemi[d];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),d++}}},state:i}}function b0(n){let e=new av(n),t=[],i=[],s=[],r={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){r.camera=a,t.length=0,i.length=0,s.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){s.push(a)}}}function ov(n){let e=new WeakMap;return{get:function(t,i=0){let s=e.get(t),r;return s===void 0?(r=new b0(n),e.set(t,[r])):i>=s.length?(r=new b0(n),s.push(r)):r=s[i],r},dispose:function(){e=new WeakMap}}}var lv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],cv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],S0=new Ne,Go=new R,Yd=new R;function hv(n,e,t){let i=new Vi,s=new oe,r=new oe,a=new mt,o=new gc,l=new yc,c={},h=t.maxTextureSize,u={[Si]:Tn,[Tn]:Si,[rt]:rt},p=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let f=new Ze;f.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new be(f,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let g=this.type;function v(M,w){let U=e.update(m);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new In(s.x,s.y,{format:sr,type:Ei})),p.uniforms.shadow_pass.value=M.map.depthTexture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,U,p,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,U,d,m,null)}function _(M,w,U,z){let D=null,G=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(G!==void 0)D=G;else if(D=U.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=D.uuid,j=w.uuid,V=c[H];V===void 0&&(V={},c[H]=V);let W=V[j];W===void 0&&(W=D.clone(),V[j]=W,w.addEventListener("dispose",T)),D=W}return D.visible=w.visible,D.wireframe=w.wireframe,D.side=z===la?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:u[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,U.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(n.properties.get(D).light=U),D}function b(M,w,U,z,D){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===la)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);let H=e.update(M),j=M.material;if(Array.isArray(j)){let V=H.groups;for(let W=0,$=V.length;W<$;W++){let K=V[W],ae=j[K.materialIndex];if(ae&&ae.visible){let ge=_(M,ae,z,D);M.onBeforeShadow(n,M,w,U,H,ge,K),n.renderBufferDirect(U,null,H,ge,M,K),M.onAfterShadow(n,M,w,U,H,ge,K)}}}else if(j.visible){let V=_(M,j,z,D);M.onBeforeShadow(n,M,w,U,H,V,null),n.renderBufferDirect(U,null,H,V,M,null),M.onAfterShadow(n,M,w,U,H,V,null)}}let G=M.children;for(let H=0,j=G.length;H<j;H++)b(G[H],w,U,z,D)}function T(M){M.target.removeEventListener("dispose",T);for(let w in c){let U=c[w],z=M.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}this.render=function(M,w,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;this.type===Cc&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zo);let z=n.getRenderTarget(),D=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ti),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let j=g!==this.type;j&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(W=>W.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,W=M.length;V<W;V++){let $=M[V],K=$.shadow;if(K===void 0){Le("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ae=K.getFrameExtents();s.multiply(ae),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,K.mapSize.y=r.y));let ge=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ge,K.map===null||j===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===la){if($.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new In(s.x,s.y,{format:sr,type:Ei,minFilter:jt,magFilter:jt,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new Xi(s.x,s.y,zn),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=As,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=yn,K.map.depthTexture.magFilter=yn}else $.isPointLight?(K.map=new Jc(s.x),K.map.depthTexture=new ec(s.x,$i)):(K.map=new In(s.x,s.y),K.map.depthTexture=new Xi(s.x,s.y,$i)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=As,this.type===zo?(K.map.depthTexture.compareFunction=ge?jc:Xc,K.map.depthTexture.minFilter=jt,K.map.depthTexture.magFilter=jt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=yn,K.map.depthTexture.magFilter=yn);K.camera.updateProjectionMatrix()}let Re=K.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<Re;ve++){if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(K.map),n.clear());let Ee=K.getViewport(ve);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),H.viewport(a)}if($.isPointLight){let Ee=K.camera,ne=K.matrix,ye=$.distance||Ee.far;ye!==Ee.far&&(Ee.far=ye,Ee.updateProjectionMatrix()),Go.setFromMatrixPosition($.matrixWorld),Ee.position.copy(Go),Yd.copy(Ee.position),Yd.add(lv[ve]),Ee.up.copy(cv[ve]),Ee.lookAt(Yd),Ee.updateMatrixWorld(),ne.makeTranslation(-Go.x,-Go.y,-Go.z),S0.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(S0,Ee.coordinateSystem,Ee.reversedDepth)}else K.updateMatrices($);i=K.getFrustum(),b(w,U,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===la&&v(K,U),K.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(z,D,G)}}function uv(n,e){let t=new function(){let S=!1,B=new mt,F=null,P=new mt(0,0,0,0);return{setMask:function(Y){F===Y||S||(n.colorMask(Y,Y,Y,Y),F=Y)},setLocked:function(Y){S=Y},setClear:function(Y,J,ee,de,pe){pe===!0&&(Y*=de,J*=de,ee*=de),B.set(Y,J,ee,de),P.equals(B)===!1&&(n.clearColor(Y,J,ee,de),P.copy(B))},reset:function(){S=!1,F=null,P.set(-1,0,0,0)}}},i=new function(){let S=!1,B=!1,F=null,P=null,Y=null;return{setReversed:function(J){if(B!==J){let ee=e.get("EXT_clip_control");J?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),B=J;let de=Y;Y=null,this.setClear(de)}},getReversed:function(){return B},setTest:function(J){J?ue(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(J){F===J||S||(n.depthMask(J),F=J)},setFunc:function(J){if(B&&(J=Km[J]),P!==J){switch(J){case Du:n.depthFunc(n.NEVER);break;case Uu:n.depthFunc(n.ALWAYS);break;case Ou:n.depthFunc(n.LESS);break;case Pc:n.depthFunc(n.LEQUAL);break;case Fu:n.depthFunc(n.EQUAL);break;case Bu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}P=J}},setLocked:function(J){S=J},setClear:function(J){Y!==J&&(Y=J,B&&(J=1-J),n.clearDepth(J))},reset:function(){S=!1,F=null,P=null,Y=null,B=!1}}},s=new function(){let S=!1,B=null,F=null,P=null,Y=null,J=null,ee=null,de=null,pe=null;return{setTest:function(Pe){S||(Pe?ue(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Pe){B===Pe||S||(n.stencilMask(Pe),B=Pe)},setFunc:function(Pe,fe,ke){F===Pe&&P===fe&&Y===ke||(n.stencilFunc(Pe,fe,ke),F=Pe,P=fe,Y=ke)},setOp:function(Pe,fe,ke){J===Pe&&ee===fe&&de===ke||(n.stencilOp(Pe,fe,ke),J=Pe,ee=fe,de=ke)},setLocked:function(Pe){S=Pe},setClear:function(Pe){pe!==Pe&&(n.clearStencil(Pe),pe=Pe)},reset:function(){S=!1,B=null,F=null,P=null,Y=null,J=null,ee=null,de=null,pe=null}}},r=new WeakMap,a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],p=null,d=!1,f=null,m=null,x=null,g=null,v=null,_=null,b=null,T=new Te(0,0,0),M=0,w=!1,U=null,z=null,D=null,G=null,H=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,W=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),V=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=W>=2);let K=null,ae={},ge=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ve=new mt().fromArray(ge),Ee=new mt().fromArray(Re);function ne(S,B,F,P){let Y=new Uint8Array(4),J=n.createTexture();n.bindTexture(S,J),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<F;ee++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,P,0,n.RGBA,n.UNSIGNED_BYTE,Y):n.texImage2D(B+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Y);return J}let ye={};function ue(S){o[S]!==!0&&(n.enable(S),o[S]=!0)}function xe(S){o[S]!==!1&&(n.disable(S),o[S]=!1)}ye[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),s.setClear(0),ue(n.DEPTH_TEST),i.setFunc(Pc),A(!1),I(Lu),ue(n.CULL_FACE),N(Ti);let Ie={[ca]:n.FUNC_ADD,[dm]:n.FUNC_SUBTRACT,[pm]:n.FUNC_REVERSE_SUBTRACT};Ie[fm]=n.MIN,Ie[mm]=n.MAX;let ie={[gm]:n.ZERO,[ym]:n.ONE,[vm]:n.SRC_COLOR,[_m]:n.SRC_ALPHA,[Em]:n.SRC_ALPHA_SATURATE,[Tm]:n.DST_COLOR,[bm]:n.DST_ALPHA,[xm]:n.ONE_MINUS_SRC_COLOR,[Mm]:n.ONE_MINUS_SRC_ALPHA,[wm]:n.ONE_MINUS_DST_COLOR,[Sm]:n.ONE_MINUS_DST_ALPHA,[Am]:n.CONSTANT_COLOR,[Rm]:n.ONE_MINUS_CONSTANT_COLOR,[Cm]:n.CONSTANT_ALPHA,[Pm]:n.ONE_MINUS_CONSTANT_ALPHA};function N(S,B,F,P,Y,J,ee,de,pe,Pe){if(S!==Ti){if(d===!1&&(ue(n.BLEND),d=!0),S===um)Y=Y||B,J=J||F,ee=ee||P,B===m&&Y===v||(n.blendEquationSeparate(Ie[B],Ie[Y]),m=B,v=Y),F===x&&P===g&&J===_&&ee===b||(n.blendFuncSeparate(ie[F],ie[P],ie[J],ie[ee]),x=F,g=P,_=J,b=ee),de.equals(T)!==!1&&pe===M||(n.blendColor(de.r,de.g,de.b,pe),T.copy(de),M=pe),f=S,w=!1;else if(S!==f||Pe!==w){if(m===ca&&v===ca||(n.blendEquation(n.FUNC_ADD),m=ca,v=ca),Pe)switch(S){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ji:n.blendFunc(n.ONE,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",S)}else switch(S){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nu:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zu:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",S)}x=null,g=null,_=null,b=null,T.set(0,0,0),M=0,f=S,w=Pe}}else d===!0&&(xe(n.BLEND),d=!1)}function A(S){U!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),U=S)}function I(S){S!==cm?(ue(n.CULL_FACE),S!==z&&(S===Lu?n.cullFace(n.BACK):S===hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),z=S}function O(S,B,F){S?(ue(n.POLYGON_OFFSET_FILL),G===B&&H===F||(G=B,H=F,i.getReversed()&&(B=-B),n.polygonOffset(B,F))):xe(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:s},enable:ue,disable:xe,bindFramebuffer:function(S,B){return c[S]!==B&&(n.bindFramebuffer(S,B),c[S]=B,S===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=B),S===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=B),!0)},drawBuffers:function(S,B){let F=u,P=!1;if(S){F=h.get(B),F===void 0&&(F=[],h.set(B,F));let Y=S.textures;if(F.length!==Y.length||F[0]!==n.COLOR_ATTACHMENT0){for(let J=0,ee=Y.length;J<ee;J++)F[J]=n.COLOR_ATTACHMENT0+J;F.length=Y.length,P=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,P=!0);P&&n.drawBuffers(F)},useProgram:function(S){return p!==S&&(n.useProgram(S),p=S,!0)},setBlending:N,setMaterial:function(S,B){S.side===rt?xe(n.CULL_FACE):ue(n.CULL_FACE);let F=S.side===Tn;B&&(F=!F),A(F),S.blending===er&&S.transparent===!1?N(Ti):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),i.setFunc(S.depthFunc),i.setTest(S.depthTest),i.setMask(S.depthWrite),t.setMask(S.colorWrite);let P=S.stencilWrite;s.setTest(P),P&&(s.setMask(S.stencilWriteMask),s.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),s.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),O(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:A,setCullFace:I,setLineWidth:function(S){S!==D&&(V&&n.lineWidth(S),D=S)},setPolygonOffset:O,setScissorTest:function(S){S?ue(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=n.TEXTURE0+j-1),K!==S&&(n.activeTexture(S),K=S)},bindTexture:function(S,B,F){F===void 0&&(F=K===null?n.TEXTURE0+j-1:K);let P=ae[F];P===void 0&&(P={type:void 0,texture:void 0},ae[F]=P),P.type===S&&P.texture===B||(K!==F&&(n.activeTexture(F),K=F),n.bindTexture(S,B||ye[S]),P.type=S,P.texture=B)},unbindTexture:function(){let S=ae[K];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(S){Fe("WebGLState:",S)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(S){Fe("WebGLState:",S)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(S){Fe("WebGLState:",S)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(S){Fe("WebGLState:",S)}},pixelStorei:function(S,B){l[S]!==B&&(n.pixelStorei(S,B),l[S]=B)},getParameter:function(S){return l[S]!==void 0?l[S]:n.getParameter(S)},updateUBOMapping:function(S,B){let F=a.get(B);F===void 0&&(F=new WeakMap,a.set(B,F));let P=F.get(S);P===void 0&&(P=n.getUniformBlockIndex(B,S.name),F.set(S,P))},uniformBlockBinding:function(S,B){let F=a.get(B).get(S);r.get(B)!==F&&(n.uniformBlockBinding(B,F,S.__bindingPointIndex),r.set(B,F))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(S){Fe("WebGLState:",S)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(S){Fe("WebGLState:",S)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(S){Fe("WebGLState:",S)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(S){Fe("WebGLState:",S)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(S){Fe("WebGLState:",S)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(S){Fe("WebGLState:",S)}},scissor:function(S){ve.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),ve.copy(S))},viewport:function(S){Ee.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Ee.copy(S))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},l={},K=null,ae={},c={},h=new WeakMap,u=[],p=null,d=!1,f=null,m=null,x=null,g=null,v=null,_=null,b=null,T=new Te(0,0,0),M=0,w=!1,U=null,z=null,D=null,G=null,H=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),s.reset()}}}function dv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u=new Set,p,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return f?new OffscreenCanvas(N,A):qr("canvas")}function x(N,A,I){let O=1,S=ie(N);if((S.width>I||S.height>I)&&(O=I/Math.max(S.width,S.height)),O<1){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let B=Math.floor(O*S.width),F=Math.floor(O*S.height);p===void 0&&(p=m(B,F));let P=A?m(B,F):p;return P.width=B,P.height=F,P.getContext("2d").drawImage(N,0,0,B,F),Le("WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+B+"x"+F+")."),P}return"data"in N&&Le("WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),N}return N}function g(N){return N.generateMipmaps}function v(N){n.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,A,I,O,S,B=!1){if(N!==null){if(n[N]!==void 0)return n[N];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let F;O&&(F=e.get("EXT_texture_norm16"),F||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=A;if(A===n.RED&&(I===n.FLOAT&&(P=n.R32F),I===n.HALF_FLOAT&&(P=n.R16F),I===n.UNSIGNED_BYTE&&(P=n.R8),I===n.UNSIGNED_SHORT&&F&&(P=F.R16_EXT),I===n.SHORT&&F&&(P=F.R16_SNORM_EXT)),A===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(P=n.R8UI),I===n.UNSIGNED_SHORT&&(P=n.R16UI),I===n.UNSIGNED_INT&&(P=n.R32UI),I===n.BYTE&&(P=n.R8I),I===n.SHORT&&(P=n.R16I),I===n.INT&&(P=n.R32I)),A===n.RG&&(I===n.FLOAT&&(P=n.RG32F),I===n.HALF_FLOAT&&(P=n.RG16F),I===n.UNSIGNED_BYTE&&(P=n.RG8),I===n.UNSIGNED_SHORT&&F&&(P=F.RG16_EXT),I===n.SHORT&&F&&(P=F.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(P=n.RG8UI),I===n.UNSIGNED_SHORT&&(P=n.RG16UI),I===n.UNSIGNED_INT&&(P=n.RG32UI),I===n.BYTE&&(P=n.RG8I),I===n.SHORT&&(P=n.RG16I),I===n.INT&&(P=n.RG32I)),A===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(P=n.RGB8UI),I===n.UNSIGNED_SHORT&&(P=n.RGB16UI),I===n.UNSIGNED_INT&&(P=n.RGB32UI),I===n.BYTE&&(P=n.RGB8I),I===n.SHORT&&(P=n.RGB16I),I===n.INT&&(P=n.RGB32I)),A===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),I===n.UNSIGNED_INT&&(P=n.RGBA32UI),I===n.BYTE&&(P=n.RGBA8I),I===n.SHORT&&(P=n.RGBA16I),I===n.INT&&(P=n.RGBA32I)),A===n.RGB&&(I===n.UNSIGNED_SHORT&&F&&(P=F.RGB16_EXT),I===n.SHORT&&F&&(P=F.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(P=n.R11F_G11F_B10F)),A===n.RGBA){let Y=B?io:$e.getTransfer(S);I===n.FLOAT&&(P=n.RGBA32F),I===n.HALF_FLOAT&&(P=n.RGBA16F),I===n.UNSIGNED_BYTE&&(P=Y===ut?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&F&&(P=F.RGBA16_EXT),I===n.SHORT&&F&&(P=F.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return P!==n.R16F&&P!==n.R32F&&P!==n.RG16F&&P!==n.RG32F&&P!==n.RGBA16F&&P!==n.RGBA32F||e.get("EXT_color_buffer_float"),P}function T(N,A){let I;return N?A===null||A===$i||A===pa?I=n.DEPTH24_STENCIL8:A===zn?I=n.DEPTH32F_STENCIL8:A===da&&(I=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$i||A===pa?I=n.DEPTH_COMPONENT24:A===zn?I=n.DEPTH_COMPONENT32F:A===da&&(I=n.DEPTH_COMPONENT16),I}function M(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==yn&&N.minFilter!==jt?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function w(N){let A=N.target;A.removeEventListener("dispose",w),(function(I){let O=i.get(I);if(O.__webglInit===void 0)return;let S=I.source,B=d.get(S);if(B){let F=B[O.__cacheKey];F.usedTimes--,F.usedTimes===0&&z(I),Object.keys(B).length===0&&d.delete(S)}i.remove(I)})(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function U(N){let A=N.target;A.removeEventListener("dispose",U),(function(I){let O=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(O.__webglFramebuffer[B]))for(let F=0;F<O.__webglFramebuffer[B].length;F++)n.deleteFramebuffer(O.__webglFramebuffer[B][F]);else n.deleteFramebuffer(O.__webglFramebuffer[B]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[B])}else{if(Array.isArray(O.__webglFramebuffer))for(let B=0;B<O.__webglFramebuffer.length;B++)n.deleteFramebuffer(O.__webglFramebuffer[B]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let B=0;B<O.__webglColorRenderbuffer.length;B++)O.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[B]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let S=I.textures;for(let B=0,F=S.length;B<F;B++){let P=i.get(S[B]);P.__webglTexture&&(n.deleteTexture(P.__webglTexture),a.memory.textures--),i.remove(S[B])}i.remove(I)})(A)}function z(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let I=N.source;delete d.get(I)[A.__cacheKey],a.memory.textures--}let D=0;function G(N,A){let I=i.get(N);if(N.isVideoTexture&&(function(O){let S=a.render.frame;h.get(O)!==S&&(h.set(O,S),O.update())})(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&I.__version!==N.version){let O=N.image;if(O===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void ae(I,N,A);Le("WebGLRenderer: Texture marked for update but image is incomplete")}}else N.isExternalTexture&&(I.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+A)}let H={[Hn]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Xr]:n.MIRRORED_REPEAT},j={[yn]:n.NEAREST,[Nc]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},V={[km]:n.NEVER,[Xm]:n.ALWAYS,[Hm]:n.LESS,[Xc]:n.LEQUAL,[Gm]:n.EQUAL,[jc]:n.GEQUAL,[Vm]:n.GREATER,[Wm]:n.NOTEQUAL};function W(N,A){if(A.type!==zn||e.has("OES_texture_float_linear")!==!1||A.magFilter!==jt&&A.magFilter!==ua&&A.magFilter!==nr&&A.magFilter!==wi&&A.minFilter!==jt&&A.minFilter!==ua&&A.minFilter!==nr&&A.minFilter!==wi||Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,H[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,H[A.wrapT]),N!==n.TEXTURE_3D&&N!==n.TEXTURE_2D_ARRAY||n.texParameteri(N,n.TEXTURE_WRAP_R,H[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,j[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yn||A.minFilter!==nr&&A.minFilter!==wi||A.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function $(N,A){let I=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",w));let O=A.source,S=d.get(O);S===void 0&&(S={},d.set(O,S));let B=(function(F){let P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.wrapR||0),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.colorSpace),P.join()})(A);if(B!==N.__cacheKey){S[B]===void 0&&(S[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),S[B].usedTimes++;let F=S[N.__cacheKey];F!==void 0&&(S[N.__cacheKey].usedTimes--,F.usedTimes===0&&z(A)),N.__cacheKey=B,N.__webglTexture=S[B].texture}return I}function K(N,A,I){return Math.floor(Math.floor(N/I)/A)}function ae(N,A,I){let O=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(O=n.TEXTURE_3D);let S=$(N,A),B=A.source;t.bindTexture(O,N.__webglTexture,n.TEXTURE0+I);let F=i.get(B);if(B.version!==F.__version||S===!0){if(t.activeTexture(n.TEXTURE0+I),!(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)){let he=$e.getPrimaries($e.workingColorSpace),ce=A.colorSpace===Qi?null:$e.getPrimaries(A.colorSpace),Se=A.colorSpace===Qi||he===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let P=x(A.image,!1,s.maxTextureSize);P=Ie(A,P);let Y=r.convert(A.format,A.colorSpace),J=r.convert(A.type),ee,de=b(A.internalFormat,Y,J,A.normalized,A.colorSpace,A.isVideoTexture);W(O,A);let pe=A.mipmaps,Pe=A.isVideoTexture!==!0,fe=F.__version===void 0||S===!0,ke=B.dataReady,se=M(A,P);if(A.isDepthTexture)de=T(A.format===ir,A.type),fe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,de,P.width,P.height):t.texImage2D(n.TEXTURE_2D,0,de,P.width,P.height,0,Y,J,null));else if(A.isDataTexture)if(pe.length>0){Pe&&fe&&t.texStorage2D(n.TEXTURE_2D,se,de,pe[0].width,pe[0].height);for(let he=0,ce=pe.length;he<ce;he++)ee=pe[he],Pe?ke&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ee.width,ee.height,Y,J,ee.data):t.texImage2D(n.TEXTURE_2D,he,de,ee.width,ee.height,0,Y,J,ee.data);A.generateMipmaps=!1}else Pe?(fe&&t.texStorage2D(n.TEXTURE_2D,se,de,P.width,P.height),ke&&(function(he,ce,Se,xt){let lt=he.updateRanges;if(lt.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Se,xt,ce.data);else{lt.sort((Ye,Yt)=>Ye.start-Yt.start);let Ct=0;for(let Ye=1;Ye<lt.length;Ye++){let Yt=lt[Ct],yt=lt[Ye],Ft=Yt.start+Yt.count,dt=K(yt.start,ce.width,4),sn=K(Yt.start,ce.width,4);yt.start<=Ft+1&&dt===sn&&K(yt.start+yt.count-1,ce.width,4)===dt?Yt.count=Math.max(Yt.count,yt.start+yt.count-Yt.start):(++Ct,lt[Ct]=yt)}lt.length=Ct+1;let nn=t.getParameter(n.UNPACK_ROW_LENGTH),De=t.getParameter(n.UNPACK_SKIP_PIXELS),ht=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,ce.width);for(let Ye=0,Yt=lt.length;Ye<Yt;Ye++){let yt=lt[Ye],Ft=Math.floor(yt.start/4),dt=Math.ceil(yt.count/4),sn=Ft%ce.width,$t=Math.floor(Ft/ce.width),Un=dt;t.pixelStorei(n.UNPACK_SKIP_PIXELS,sn),t.pixelStorei(n.UNPACK_SKIP_ROWS,$t),t.texSubImage2D(n.TEXTURE_2D,0,sn,$t,Un,1,Se,xt,ce.data)}he.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,nn),t.pixelStorei(n.UNPACK_SKIP_PIXELS,De),t.pixelStorei(n.UNPACK_SKIP_ROWS,ht)}})(A,P,Y,J)):t.texImage2D(n.TEXTURE_2D,0,de,P.width,P.height,0,Y,J,P.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pe&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,de,pe[0].width,pe[0].height,P.depth);for(let he=0,ce=pe.length;he<ce;he++)if(ee=pe[he],A.format!==Vn)if(Y!==null)if(Pe){if(ke)if(A.layerUpdates.size>0){let Se=Od(ee.width,ee.height,A.format,A.type);for(let xt of A.layerUpdates){let lt=ee.data.subarray(xt*Se/ee.data.BYTES_PER_ELEMENT,(xt+1)*Se/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,xt,ee.width,ee.height,1,Y,lt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,P.depth,Y,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,de,ee.width,ee.height,P.depth,0,ee.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,P.depth,Y,J,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,de,ee.width,ee.height,P.depth,0,Y,J,ee.data)}else{Pe&&fe&&t.texStorage2D(n.TEXTURE_2D,se,de,pe[0].width,pe[0].height);for(let he=0,ce=pe.length;he<ce;he++)ee=pe[he],A.format!==Vn?Y!==null?Pe?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ee.width,ee.height,Y,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,he,de,ee.width,ee.height,0,ee.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?ke&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ee.width,ee.height,Y,J,ee.data):t.texImage2D(n.TEXTURE_2D,he,de,ee.width,ee.height,0,Y,J,ee.data)}else if(A.isDataArrayTexture)if(Pe){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,de,P.width,P.height,P.depth),ke)if(A.layerUpdates.size>0){let he=Od(P.width,P.height,A.format,A.type);for(let ce of A.layerUpdates){let Se=P.data.subarray(ce*he/P.data.BYTES_PER_ELEMENT,(ce+1)*he/P.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,P.width,P.height,1,Y,J,Se)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,Y,J,P.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,P.width,P.height,P.depth,0,Y,J,P.data);else if(A.isData3DTexture)Pe?(fe&&t.texStorage3D(n.TEXTURE_3D,se,de,P.width,P.height,P.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,Y,J,P.data)):t.texImage3D(n.TEXTURE_3D,0,de,P.width,P.height,P.depth,0,Y,J,P.data);else if(A.isFramebufferTexture){if(fe)if(Pe)t.texStorage2D(n.TEXTURE_2D,se,de,P.width,P.height);else{let he=P.width,ce=P.height;for(let Se=0;Se<se;Se++)t.texImage2D(n.TEXTURE_2D,Se,de,he,ce,0,Y,J,null),he>>=1,ce>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let he=n.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),P.parentNode!==he)return he.appendChild(P),u.add(A),he.onpaint=ce=>{let Se=ce.changedElements;for(let xt of u)Se.includes(xt.image)&&(xt.needsUpdate=!0)},void he.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,P);else{let Se=n.RGBA,xt=n.RGBA,lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,xt,lt,P)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(Pe&&fe){let he=ie(pe[0]);t.texStorage2D(n.TEXTURE_2D,se,de,he.width,he.height)}for(let he=0,ce=pe.length;he<ce;he++)ee=pe[he],Pe?ke&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Y,J,ee):t.texImage2D(n.TEXTURE_2D,he,de,Y,J,ee);A.generateMipmaps=!1}else if(Pe){if(fe){let he=ie(P);t.texStorage2D(n.TEXTURE_2D,se,de,he.width,he.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y,J,P)}else t.texImage2D(n.TEXTURE_2D,0,de,Y,J,P);g(A)&&v(O),F.__version=B.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ge(N,A,I,O,S,B){let F=r.convert(I.format,I.colorSpace),P=r.convert(I.type),Y=b(I.internalFormat,F,P,I.normalized,I.colorSpace),J=i.get(A),ee=i.get(I);if(ee.__renderTarget=A,!J.__hasExternalTextures){let de=Math.max(1,A.width>>B),pe=Math.max(1,A.height>>B);S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?t.texImage3D(S,B,Y,de,pe,A.depth,0,F,P,null):t.texImage2D(S,B,Y,de,pe,0,F,P,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),xe(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,S,ee.__webglTexture,0,ue(A)):(S===n.TEXTURE_2D||S>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&S<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,S,ee.__webglTexture,B),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(N,A,I){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){let O=A.depthTexture,S=O&&O.isDepthTexture?O.type:null,B=T(A.stencilBuffer,S),F=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(A),B,A.width,A.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(A),B,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,B,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,N)}else{let O=A.textures;for(let S=0;S<O.length;S++){let B=O[S],F=r.convert(B.format,B.colorSpace),P=r.convert(B.type),Y=b(B.internalFormat,F,P,B.normalized,B.colorSpace);xe(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(A),Y,A.width,A.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(A),Y,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Y,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(N,A,I){let O=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let S=i.get(A.depthTexture);if(S.__renderTarget=A,S.__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O){if(S.__webglInit===void 0&&(S.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),S.__webglTexture===void 0){S.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture),W(n.TEXTURE_CUBE_MAP,A.depthTexture);let J=r.convert(A.depthTexture.format),ee=r.convert(A.depthTexture.type),de;A.depthTexture.format===As?de=n.DEPTH_COMPONENT24:A.depthTexture.format===ir&&(de=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,de,A.width,A.height,0,J,ee,null)}}else G(A.depthTexture,0);let B=S.__webglTexture,F=ue(A),P=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Y=A.depthTexture.format===ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===As)xe(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,P,B,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,Y,P,B,0);else{if(A.depthTexture.format!==ir)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");xe(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,P,B,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,Y,P,B,0)}}function Ee(N){let A=i.get(N),I=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let O=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),O){let S=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,O.removeEventListener("dispose",S)};O.addEventListener("dispose",S),A.__depthDisposeCallback=S}A.__boundDepthTexture=O}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(I)for(let O=0;O<6;O++)ve(A.__webglFramebuffer[O],N,O);else{let O=N.texture.mipmaps;O&&O.length>0?ve(A.__webglFramebuffer[0],N,0):ve(A.__webglFramebuffer,N,0)}else if(I){A.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[O]),A.__webglDepthbuffer[O]===void 0)A.__webglDepthbuffer[O]=n.createRenderbuffer(),Re(A.__webglDepthbuffer[O],N,!1);else{let S=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=A.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,S,n.RENDERBUFFER,B)}}else{let O=N.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Re(A.__webglDepthbuffer,N,!1);else{let S=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,S,n.RENDERBUFFER,B)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let ne=[],ye=[];function ue(N){return Math.min(s.maxSamples,N.samples)}function xe(N){let A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ie(N,A){let I=N.colorSpace,O=N.format,S=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||I!==vn&&I!==Qi&&($e.getTransfer(I)===ut?O===Vn&&S===Nn||Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",I)),A}function ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=function(){let N=D;return N>=s.maxTextures&&Le("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),D+=1,N},this.resetTextureUnits=function(){D=0},this.getTextureUnits=function(){return D},this.setTextureUnits=function(N){D=N},this.setTexture2D=G,this.setTexture2DArray=function(N,A){let I=i.get(N);N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version?ae(I,N,A):(N.isExternalTexture&&(I.__webglTexture=N.sourceTexture?N.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+A))},this.setTexture3D=function(N,A){let I=i.get(N);N.isRenderTargetTexture===!1&&N.version>0&&I.__version!==N.version?ae(I,N,A):t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+A)},this.setTextureCube=function(N,A){let I=i.get(N);N.isCubeDepthTexture!==!0&&N.version>0&&I.__version!==N.version?(function(O,S,B){if(S.image.length!==6)return;let F=$(O,S),P=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+B);let Y=i.get(P);if(P.version!==Y.__version||F===!0){t.activeTexture(n.TEXTURE0+B);let J=$e.getPrimaries($e.workingColorSpace),ee=S.colorSpace===Qi?null:$e.getPrimaries(S.colorSpace),de=S.colorSpace===Qi||J===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Pe=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let De=0;De<6;De++)fe[De]=pe||Pe?Pe?S.image[De].image:S.image[De]:x(S.image[De],!0,s.maxCubemapSize),fe[De]=Ie(S,fe[De]);let ke=fe[0],se=r.convert(S.format,S.colorSpace),he=r.convert(S.type),ce=b(S.internalFormat,se,he,S.normalized,S.colorSpace),Se=S.isVideoTexture!==!0,xt=Y.__version===void 0||F===!0,lt=P.dataReady,Ct,nn=M(S,ke);if(W(n.TEXTURE_CUBE_MAP,S),pe){Se&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,nn,ce,ke.width,ke.height);for(let De=0;De<6;De++){Ct=fe[De].mipmaps;for(let ht=0;ht<Ct.length;ht++){let Ye=Ct[ht];S.format!==Vn?se!==null?Se?lt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,0,0,Ye.width,Ye.height,se,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,ce,Ye.width,Ye.height,0,Ye.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?lt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,0,0,Ye.width,Ye.height,se,he,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht,ce,Ye.width,Ye.height,0,se,he,Ye.data)}}}else{if(Ct=S.mipmaps,Se&&xt){Ct.length>0&&nn++;let De=ie(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,nn,ce,De.width,De.height)}for(let De=0;De<6;De++)if(Pe){Se?lt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,fe[De].width,fe[De].height,se,he,fe[De].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,ce,fe[De].width,fe[De].height,0,se,he,fe[De].data);for(let ht=0;ht<Ct.length;ht++){let Ye=Ct[ht].image[De].image;Se?lt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,0,0,Ye.width,Ye.height,se,he,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,ce,Ye.width,Ye.height,0,se,he,Ye.data)}}else{Se?lt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,se,he,fe[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,ce,se,he,fe[De]);for(let ht=0;ht<Ct.length;ht++){let Ye=Ct[ht];Se?lt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,0,0,se,he,Ye.image[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ht+1,ce,se,he,Ye.image[De])}}}g(S)&&v(n.TEXTURE_CUBE_MAP),Y.__version=P.version,S.onUpdate&&S.onUpdate(S)}O.__version=S.version})(I,N,A):t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+A)},this.rebindTextures=function(N,A,I){let O=i.get(N);A!==void 0&&ge(O.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ee(N)},this.setupRenderTarget=function(N){let A=N.texture,I=i.get(N),O=i.get(A);N.addEventListener("dispose",U);let S=N.textures,B=N.isWebGLCubeRenderTarget===!0,F=S.length>1;if(F||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=A.version,a.memory.textures++),B){I.__webglFramebuffer=[];for(let P=0;P<6;P++)if(A.mipmaps&&A.mipmaps.length>0){I.__webglFramebuffer[P]=[];for(let Y=0;Y<A.mipmaps.length;Y++)I.__webglFramebuffer[P][Y]=n.createFramebuffer()}else I.__webglFramebuffer[P]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){I.__webglFramebuffer=[];for(let P=0;P<A.mipmaps.length;P++)I.__webglFramebuffer[P]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(F)for(let P=0,Y=S.length;P<Y;P++){let J=i.get(S[P]);J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&xe(N)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let P=0;P<S.length;P++){let Y=S[P];I.__webglColorRenderbuffer[P]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[P]);let J=r.convert(Y.format,Y.colorSpace),ee=r.convert(Y.type),de=b(Y.internalFormat,J,ee,Y.normalized,Y.colorSpace,N.isXRRenderTarget===!0),pe=ue(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,de,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,I.__webglColorRenderbuffer[P])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(I.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),W(n.TEXTURE_CUBE_MAP,A);for(let P=0;P<6;P++)if(A.mipmaps&&A.mipmaps.length>0)for(let Y=0;Y<A.mipmaps.length;Y++)ge(I.__webglFramebuffer[P][Y],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+P,Y);else ge(I.__webglFramebuffer[P],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);g(A)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let P=0,Y=S.length;P<Y;P++){let J=S[P],ee=i.get(J),de=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ee.__webglTexture),W(de,J),ge(I.__webglFramebuffer,N,J,n.COLOR_ATTACHMENT0+P,de,0),g(J)&&v(de)}t.unbindTexture()}else{let P=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(P=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(P,O.__webglTexture),W(P,A),A.mipmaps&&A.mipmaps.length>0)for(let Y=0;Y<A.mipmaps.length;Y++)ge(I.__webglFramebuffer[Y],N,A,n.COLOR_ATTACHMENT0,P,Y);else ge(I.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,P,0);g(A)&&v(P),t.unbindTexture()}N.depthBuffer&&Ee(N)},this.updateRenderTargetMipmap=function(N){let A=N.textures;for(let I=0,O=A.length;I<O;I++){let S=A[I];if(g(S)){let B=_(N),F=i.get(S).__webglTexture;t.bindTexture(B,F),v(B),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(N){if(N.samples>0){if(xe(N)===!1){let A=N.textures,I=N.width,O=N.height,S=n.COLOR_BUFFER_BIT,B=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=i.get(N),P=A.length>1;if(P)for(let J=0;J<A.length;J++)t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);let Y=N.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let J=0;J<A.length;J++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(S|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(S|=n.STENCIL_BUFFER_BIT)),P){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let ee=i.get(A[J]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,I,O,0,0,I,O,S,n.NEAREST),l===!0&&(ne.length=0,ye.length=0,ne.push(n.COLOR_ATTACHMENT0+J),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ne.push(B),ye.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),P)for(let J=0;J<A.length;J++){t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let ee=i.get(A[J]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}},this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pv(n,e){return{convert:function(t,i=Qi){let s,r=$e.getTransfer(i);if(t===Nn)return n.UNSIGNED_BYTE;if(t===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===$u)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===Ku)return n.BYTE;if(t===Zu)return n.SHORT;if(t===da)return n.UNSIGNED_SHORT;if(t===zc)return n.INT;if(t===$i)return n.UNSIGNED_INT;if(t===zn)return n.FLOAT;if(t===Ei)return n.HALF_FLOAT;if(t===Dm)return n.ALPHA;if(t===Um)return n.RGB;if(t===Vn)return n.RGBA;if(t===As)return n.DEPTH_COMPONENT;if(t===ir)return n.DEPTH_STENCIL;if(t===Oc)return n.RED;if(t===Fc)return n.RED_INTEGER;if(t===sr)return n.RG;if(t===Qu)return n.RG_INTEGER;if(t===ed)return n.RGBA_INTEGER;if(t===Bc||t===kc||t===Hc||t===Gc)if(r===ut){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(t===Bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(t===Bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===td||t===nd||t===id||t===sd){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(t===td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===id)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===rd||t===ad||t===od||t===ld||t===cd||t===Vc||t===hd){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(t===rd||t===ad)return r===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===od)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(t===ld)return s.COMPRESSED_R11_EAC;if(t===cd)return s.COMPRESSED_SIGNED_R11_EAC;if(t===Vc)return s.COMPRESSED_RG11_EAC;if(t===hd)return s.COMPRESSED_SIGNED_RG11_EAC}if(t===ud||t===dd||t===pd||t===fd||t===md||t===gd||t===yd||t===vd||t===xd||t===_d||t===Md||t===bd||t===Sd||t===Td){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(t===ud)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===dd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===pd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===fd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===md)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===gd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===yd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===vd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===xd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===_d)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Md)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===bd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Sd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Td)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===wd||t===Ed||t===Ad){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(t===wd)return r===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Ad)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Rd||t===Cd||t===Wc||t===Pd){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(t===Rd)return s.COMPRESSED_RED_RGTC1_EXT;if(t===Cd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Pd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===pa?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var np=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new mo(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ip=class extends ti{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,f=null,m=typeof XRWebGLBinding<"u",x=new np,g={},v=t.getContextAttributes(),_=null,b=null,T=[],M=[],w=new oe,U=null,z=new Xt;z.viewport=new mt;let D=new Xt;D.viewport=new mt;let G=[z,D],H=new wc,j=null,V=null;function W(ne){let ye=M.indexOf(ne.inputSource);if(ye===-1)return;let ue=T[ye];ue!==void 0&&(ue.update(ne.inputSource,ne.frame,c||a),ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",K);for(let ne=0;ne<T.length;ne++){let ye=M[ne];ye!==null&&(M[ne]=null,T[ne].disconnect(ye))}j=null,V=null,x.reset();for(let ne in g)delete g[ne];e.setRenderTarget(_),d=null,p=null,u=null,s=null,b=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}function K(ne){for(let ye=0;ye<ne.removed.length;ye++){let ue=ne.removed[ye],xe=M.indexOf(ue);xe>=0&&(M[xe]=null,T[xe].disconnect(ue))}for(let ye=0;ye<ne.added.length;ye++){let ue=ne.added[ye],xe=M.indexOf(ue);if(xe===-1){for(let ie=0;ie<T.length;ie++){if(ie>=M.length){M.push(ue),xe=ie;break}if(M[ie]===null){M[ie]=ue,xe=ie;break}}if(xe===-1)break}let Ie=T[xe];Ie&&Ie.connect(ue)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ye=T[ne];return ye===void 0&&(ye=new Jr,T[ne]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ne){let ye=T[ne];return ye===void 0&&(ye=new Jr,T[ne]=ye),ye.getGripSpace()},this.getHand=function(ne){let ye=T[ne];return ye===void 0&&(ye=new Jr,T[ne]=ye),ye.getHandSpace()},this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ue=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?ir:As,ue=v.stencil?pa:$i);let Ie={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new In(p.textureWidth,p.textureHeight,{format:Vn,type:Nn,depthTexture:new Xi(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new In(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let ae=new R,ge=new R;function Re(ne,ye){ye===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ye.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ye=ne.near,ue=ne.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),H.near=D.near=z.near=ye,H.far=D.far=z.far=ue,j===H.near&&V===H.far||(s.updateRenderState({depthNear:H.near,depthFar:H.far}),j=H.near,V=H.far),H.layers.mask=6|ne.layers.mask,z.layers.mask=-5&H.layers.mask,D.layers.mask=-3&H.layers.mask;let xe=ne.parent,Ie=H.cameras;Re(H,xe);for(let ie=0;ie<Ie.length;ie++)Re(Ie[ie],xe);Ie.length===2?(function(ie,N,A){ae.setFromMatrixPosition(N.matrixWorld),ge.setFromMatrixPosition(A.matrixWorld);let I=ae.distanceTo(ge),O=N.projectionMatrix.elements,S=A.projectionMatrix.elements,B=O[14]/(O[10]-1),F=O[14]/(O[10]+1),P=(O[9]+1)/O[5],Y=(O[9]-1)/O[5],J=(O[8]-1)/O[0],ee=(S[8]+1)/S[0],de=B*J,pe=B*ee,Pe=I/(-J+ee),fe=Pe*-J;if(N.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(fe),ie.translateZ(Pe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),O[10]===-1)ie.projectionMatrix.copy(N.projectionMatrix),ie.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let ke=B+Pe,se=F+Pe,he=de-fe,ce=pe+(I-fe),Se=P*F/se*ke,xt=Y*F/se*ke;ie.projectionMatrix.makePerspective(he,ce,Se,xt,ke,se),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}})(H,z,D):H.projectionMatrix.copy(z.projectionMatrix),(function(ie,N,A){A===null?ie.matrix.copy(N.matrixWorld):(ie.matrix.copy(A.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(N.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(N.projectionMatrix),ie.projectionMatrixInverse.copy(N.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=2*js*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)})(ne,H,xe)},this.getCamera=function(){return H},this.getFoveation=function(){if(p!==null||d!==null)return l},this.setFoveation=function(ne){l=ne,p!==null&&(p.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(ne){return g[ne]};let ve=null,Ee=new T0;Ee.setAnimationLoop(function(ne,ye){if(h=ye.getViewerPose(c||a),f=ye,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let xe=!1;ue.length!==H.cameras.length&&(H.cameras.length=0,xe=!0);for(let ie=0;ie<ue.length;ie++){let N=ue[ie],A=null;if(d!==null)A=d.getViewport(N);else{let O=u.getViewSubImage(p,N);A=O.viewport,ie===0&&(e.setRenderTargetTextures(b,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(b))}let I=G[ie];I===void 0&&(I=new Xt,I.layers.enable(ie),I.viewport=new mt,G[ie]=I),I.matrix.fromArray(N.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(N.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(A.x,A.y,A.width,A.height),ie===0&&(H.matrix.copy(I.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),xe===!0&&H.cameras.push(I)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let ie=u.getDepthInformation(ue[0]);ie&&ie.isValid&&ie.texture&&x.init(ie,s.renderState)}if(Ie&&Ie.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let ie=0;ie<ue.length;ie++){let N=ue[ie].camera;if(N){let A=g[N];A||(A=new mo,g[N]=A);let I=u.getCameraImage(N);A.sourceTexture=I}}}}for(let ue=0;ue<T.length;ue++){let xe=M[ue],Ie=T[ue];xe!==null&&Ie!==void 0&&Ie.update(xe,ye,c||a)}ve&&ve(ne,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),f=null}),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}},fv=new Ne,P0=new Xe;function mv(n,e){function t(s,r){s.matrixAutoUpdate===!0&&s.updateMatrix(),r.value.copy(s.matrix)}function i(s,r){s.opacity.value=r.opacity,r.color&&s.diffuse.value.copy(r.color),r.emissive&&s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(s.map.value=r.map,t(r.map,s.mapTransform)),r.alphaMap&&(s.alphaMap.value=r.alphaMap,t(r.alphaMap,s.alphaMapTransform)),r.bumpMap&&(s.bumpMap.value=r.bumpMap,t(r.bumpMap,s.bumpMapTransform),s.bumpScale.value=r.bumpScale,r.side===Tn&&(s.bumpScale.value*=-1)),r.normalMap&&(s.normalMap.value=r.normalMap,t(r.normalMap,s.normalMapTransform),s.normalScale.value.copy(r.normalScale),r.side===Tn&&s.normalScale.value.negate()),r.displacementMap&&(s.displacementMap.value=r.displacementMap,t(r.displacementMap,s.displacementMapTransform),s.displacementScale.value=r.displacementScale,s.displacementBias.value=r.displacementBias),r.emissiveMap&&(s.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,s.emissiveMapTransform)),r.specularMap&&(s.specularMap.value=r.specularMap,t(r.specularMap,s.specularMapTransform)),r.alphaTest>0&&(s.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(s.envMap.value=o,s.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&s.envMapRotation.value.premultiply(P0),s.reflectivity.value=r.reflectivity,s.ior.value=r.ior,s.refractionRatio.value=r.refractionRatio),r.lightMap&&(s.lightMap.value=r.lightMap,s.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,s.lightMapTransform)),r.aoMap&&(s.aoMap.value=r.aoMap,s.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,r){r.color.getRGB(s.fogColor.value,Dd(n)),r.isFog?(s.fogNear.value=r.near,s.fogFar.value=r.far):r.isFogExp2&&(s.fogDensity.value=r.density)},refreshMaterialUniforms:function(s,r,a,o,l){r.isNodeMaterial?r.uniformsNeedUpdate=!1:r.isMeshBasicMaterial?i(s,r):r.isMeshLambertMaterial?(i(s,r),r.envMap&&(s.envMapIntensity.value=r.envMapIntensity)):r.isMeshToonMaterial?(i(s,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(s,r)):r.isMeshPhongMaterial?(i(s,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(s,r),r.envMap&&(s.envMapIntensity.value=r.envMapIntensity)):r.isMeshStandardMaterial?(i(s,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(s,r),r.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(s,r,l)):r.isMeshMatcapMaterial?(i(s,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(s,r)):r.isMeshDepthMaterial?i(s,r):r.isMeshDistanceMaterial?(i(s,r),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(s,r)):r.isMeshNormalMaterial?i(s,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(s,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(s,r)):r.isPointsMaterial?(function(c,h,u,p){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*p,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(s,r,a,o):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(s,r):r.isShadowMaterial?(s.color.value.copy(r.color),s.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function gv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,d,f,m){if((function(x,g,v,_){let b=x.value,T=g+"_"+v;if(_[T]===void 0)return typeof b=="number"||typeof b=="boolean"?_[T]=b:ArrayBuffer.isView(b)?_[T]=b.slice():_[T]=b.clone(),!0;{let M=_[T];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return _[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1})(p,d,f,m)===!0){let x=p.__offset,g=p.value;if(Array.isArray(g)){let v=0;for(let _=0;_<g.length;_++){let b=g[_],T=h(b);c(b,p.__data,v),typeof b=="number"||typeof b=="boolean"||b.isMatrix3||ArrayBuffer.isView(b)||(v+=T.storage/Float32Array.BYTES_PER_ELEMENT)}}else c(g,p.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,p.__data)}}function c(p,d,f){typeof p=="number"||typeof p=="boolean"?d[0]=p:p.isMatrix3?(d[0]=p.elements[0],d[1]=p.elements[1],d[2]=p.elements[2],d[3]=0,d[4]=p.elements[3],d[5]=p.elements[4],d[6]=p.elements[5],d[7]=0,d[8]=p.elements[6],d[9]=p.elements[7],d[10]=p.elements[8],d[11]=0):ArrayBuffer.isView(p)?d.set(new p.constructor(p.buffer,p.byteOffset,d.length)):p.toArray(d,f)}function h(p){let d={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(d.boundary=4,d.storage=4):p.isVector2?(d.boundary=8,d.storage=8):p.isVector3||p.isColor?(d.boundary=16,d.storage=12):p.isVector4?(d.boundary=16,d.storage=16):p.isMatrix3?(d.boundary=48,d.storage=48):p.isMatrix4?(d.boundary=64,d.storage=64):p.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(d.boundary=16,d.storage=p.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",p),d}function u(p){let d=p.target;d.removeEventListener("dispose",u);let f=a.indexOf(d.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(s[d.id]),delete s[d.id],delete r[d.id]}return{bind:function(p,d){let f=d.program;i.uniformBlockBinding(p,f)},update:function(p,d){let f=s[p.id];f===void 0&&((function(g){let v=g.uniforms,_=0,b=16;for(let M=0,w=v.length;M<w;M++){let U=Array.isArray(v[M])?v[M]:[v[M]];for(let z=0,D=U.length;z<D;z++){let G=U[z],H=Array.isArray(G.value)?G.value:[G.value];for(let j=0,V=H.length;j<V;j++){let W=h(H[j]),$=_%b,K=$%W.boundary,ae=$+K;_+=K,ae!==0&&b-ae<W.storage&&(_+=b-ae),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=W.storage}}}let T=_%b;T>0&&(_+=b-T),g.__size=_,g.__cache={}})(p),f=(function(g){let v=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=v;let _=n.createBuffer(),b=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_})(p),s[p.id]=f,p.addEventListener("dispose",u));let m=d.program;i.updateUBOMapping(p,m);let x=e.render.frame;r[p.id]!==x&&((function(g){let v=s[g.id],_=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,M=_.length;T<M;T++){let w=_[T];if(Array.isArray(w))for(let U=0,z=w.length;U<z;U++)l(w[U],T,U,b);else l(w,T,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(p),r[p.id]=x)},dispose:function(){for(let p in s)n.deleteBuffer(s[p]);a=[],s={},r={}}}}P0.set(-1,0,0,0,1,0,0,0,1);var yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null,$c=class{constructor(e={}){let{canvas:t=jm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:d=Nn}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=d,x=new Set([ed,Qu,Fc]),g=new Set([Nn,$i,da,pa,Dc,Uc]),v=new Uint32Array(4),_=new Int32Array(4),b=new R,T=null,M=null,w=[],U=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,G=!1,H=null,j=null,V=null,W=null;this._outputColorSpace=ft;let $=0,K=0,ae=null,ge=-1,Re=null,ve=new mt,Ee=new mt,ne=null,ye=new Te(0),ue=0,xe=t.width,Ie=t.height,ie=1,N=null,A=null,I=new mt(0,0,xe,Ie),O=new mt(0,0,xe,Ie),S=!1,B=new Vi,F=!1,P=!1,Y=new Ne,J=new R,ee=new mt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Pe(){return ae===null?ie:1}let fe,ke,se,he,ce,Se,xt,lt,Ct,nn,De,ht,Ye,Yt,yt,Ft,dt,sn,$t,Un,An,Rn,ss,X=i;function Na(C,q){return t.getContext(C,q)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",za,!1),t.addEventListener("webglcontextrestored",Da,!1),t.addEventListener("webglcontextcreationerror",al,!1),X===null){let q="webgl2";if(X=Na(q,C),X===null)throw Na(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Fe("WebGLRenderer: "+C.message),C}function rs(){fe=new W1(X),fe.init(),An=new pv(X,fe),ke=new k1(X,fe,e,An),se=new uv(X,fe),ke.reversedDepthBuffer&&p&&se.buffers.depth.setReversed(!0),j=X.createFramebuffer(),V=X.createFramebuffer(),W=X.createFramebuffer(),he=new q1(X),ce=new ev,Se=new dv(X,fe,se,ce,ke,An,he),xt=new V1(D),lt=new D1(X),Rn=new F1(X,lt),Ct=new X1(X,lt,he,Rn),nn=new K1(X,Ct,lt,Rn,he),sn=new Y1(X,ke,Se),yt=new H1(ce),De=new Qy(D,xt,fe,ke,Rn,yt),ht=new mv(D,ce),Ye=new nv,Yt=new ov(fe),dt=new O1(D,xt,se,nn,f,l),Ft=new hv(D,nn,ke),ss=new gv(X,he,ke,se),$t=new B1(X,fe,he),Un=new j1(X,fe,he),he.programs=De.programs,D.capabilities=ke,D.extensions=fe,D.properties=ce,D.renderLists=Ye,D.shadowMap=Ft,D.state=se,D.info=he}rs(),m!==Nn&&(z=new J1(m,t.width,t.height,o,s,r));let Lt=new ip(D,X);function za(C){C.preventDefault(),so("WebGLRenderer: Context Lost."),G=!0}function Da(){so("WebGLRenderer: Context Restored."),G=!1;let C=he.autoReset,q=Ft.enabled,Q=Ft.autoUpdate,y=Ft.needsUpdate,E=Ft.type;rs(),he.autoReset=C,Ft.enabled=q,Ft.autoUpdate=Q,Ft.needsUpdate=y,Ft.type=E}function al(C){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function as(C){let q=C.target;q.removeEventListener("dispose",as),(function(Q){(function(y){let E=ce.get(y).programs;E!==void 0&&(E.forEach(function(L){De.releaseProgram(L)}),y.isShaderMaterial&&De.releaseShaderCache(y))})(Q),ce.remove(Q)})(q)}function ol(C,q,Q){C.transparent===!0&&C.side===rt&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,os(C,q,Q),C.side=Si,C.needsUpdate=!0,os(C,q,Q),C.side=rt):os(C,q,Q)}this.xr=Lt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(xe,Ie,!1))},this.getSize=function(C){return C.set(xe,Ie)},this.setSize=function(C,q,Q=!0){Lt.isPresenting?Le("WebGLRenderer: Can't change size while VR device is presenting."):(xe=C,Ie=q,t.width=Math.floor(C*ie),t.height=Math.floor(q*ie),Q===!0&&(t.style.width=C+"px",t.style.height=q+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,C,q))},this.getDrawingBufferSize=function(C){return C.set(xe*ie,Ie*ie).floor()},this.setDrawingBufferSize=function(C,q,Q){xe=C,Ie=q,ie=Q,t.width=Math.floor(C*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(m!==Nn){if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])}else Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(C){return C.copy(ve)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,q,Q,y){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,q,Q,y),se.viewport(ve.copy(I).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(O)},this.setScissor=function(C,q,Q,y){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,q,Q,y),se.scissor(Ee.copy(O).multiplyScalar(ie).round())},this.getScissorTest=function(){return S},this.setScissorTest=function(C){se.setScissorTest(S=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){A=C},this.getClearColor=function(C){return C.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,Q=!0){let y=0;if(C){let E=!1;if(ae!==null){let L=ae.texture.format;E=x.has(L)}if(E){let L=ae.texture.type,k=g.has(L),Z=dt.getClearColor(),re=dt.getClearAlpha(),me=Z.r,we=Z.g,Ce=Z.b;k?(v[0]=me,v[1]=we,v[2]=Ce,v[3]=re,X.clearBufferuiv(X.COLOR,0,v)):(_[0]=me,_[1]=we,_[2]=Ce,_[3]=re,X.clearBufferiv(X.COLOR,0,_))}else y|=X.COLOR_BUFFER_BIT}q&&(y|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(y|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y!==0&&X.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),H=C},this.dispose=function(){t.removeEventListener("webglcontextlost",za,!1),t.removeEventListener("webglcontextrestored",Da,!1),t.removeEventListener("webglcontextcreationerror",al,!1),dt.dispose(),Ye.dispose(),Yt.dispose(),ce.dispose(),xt.dispose(),nn.dispose(),Rn.dispose(),ss.dispose(),De.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Oa),Lt.removeEventListener("sessionend",Mr),On.stop()},this.renderBufferDirect=function(C,q,Q,y,E,L){q===null&&(q=de);let k=E.isMesh&&E.matrixWorld.determinantAffine()<0,Z=(function(et,_t,kt,Be,Ge){_t.isScene!==!0&&(_t=de),Se.resetTextureUnits();let mn=_t.fog,zh=Be.isMeshStandardMaterial||Be.isMeshLambertMaterial||Be.isMeshPhongMaterial?_t.environment:null,ul=ae===null?D.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:$e.workingColorSpace,ka=Be.isMeshStandardMaterial||Be.isMeshLambertMaterial&&!Be.envMap||Be.isMeshPhongMaterial&&!Be.envMap,ci=xt.get(Be.envMap||zh,ka),br=Be.vertexColors===!0&&!!kt.attributes.color&&kt.attributes.color.itemSize===4,Li=!!kt.attributes.tangent&&(!!Be.normalMap||Be.anisotropy>0),Dh=!!kt.morphAttributes.position,Sr=!!kt.morphAttributes.normal,Vg=!!kt.morphAttributes.color,uf=ii;Be.toneMapped&&(ae!==null&&ae.isXRRenderTarget!==!0||(uf=D.toneMapping));let df=kt.morphAttributes.position||kt.morphAttributes.normal||kt.morphAttributes.color,Wg=df!==void 0?df.length:0,We=ce.get(Be),Ds=M.state.lights;if(F===!0&&(P===!0||et!==Re)){let Vt=et===Re&&Be.id===ge;yt.setState(Be,et,Vt)}let Kn=!1;Be.version===We.__version?We.needsLights&&We.lightsStateVersion!==Ds.state.version||We.outputColorSpace!==ul||Ge.isBatchedMesh&&We.batching===!1?Kn=!0:Ge.isBatchedMesh||We.batching!==!0?Ge.isBatchedMesh&&We.batchingColor===!0&&Ge.colorTexture===null||Ge.isBatchedMesh&&We.batchingColor===!1&&Ge.colorTexture!==null||Ge.isInstancedMesh&&We.instancing===!1?Kn=!0:Ge.isInstancedMesh||We.instancing!==!0?Ge.isSkinnedMesh&&We.skinning===!1?Kn=!0:Ge.isSkinnedMesh||We.skinning!==!0?Ge.isInstancedMesh&&We.instancingColor===!0&&Ge.instanceColor===null||Ge.isInstancedMesh&&We.instancingColor===!1&&Ge.instanceColor!==null||Ge.isInstancedMesh&&We.instancingMorph===!0&&Ge.morphTexture===null||Ge.isInstancedMesh&&We.instancingMorph===!1&&Ge.morphTexture!==null||We.envMap!==ci||Be.fog===!0&&We.fog!==mn?Kn=!0:We.numClippingPlanes===void 0||We.numClippingPlanes===yt.numPlanes&&We.numIntersection===yt.numIntersection?(We.vertexAlphas!==br||We.vertexTangents!==Li||We.morphTargets!==Dh||We.morphNormals!==Sr||We.morphColors!==Vg||We.toneMapping!==uf||We.morphTargetsCount!==Wg||!!We.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Kn=!0):Kn=!0:Kn=!0:Kn=!0:Kn=!0:(Kn=!0,We.__version=Be.version);let ls=We.currentProgram;Kn===!0&&(ls=os(Be,_t,Ge),H&&Be.isNodeMaterial&&H.onUpdateProgram(Be,ls,We));let pf=!1,Tr=!1,Uh=!1,Nt=ls.getUniforms(),Fn=We.uniforms;if(se.useProgram(ls.program)&&(pf=!0,Tr=!0,Uh=!0),Be.id!==ge&&(ge=Be.id,Tr=!0),We.needsLights){let Vt=(function(ui,Fh){if(ui.length===0)return null;if(ui.length===1)return ui[0].texture!==null?ui[0]:null;b.setFromMatrixPosition(Fh.matrixWorld);for(let wr=0,Xg=ui.length;wr<Xg;wr++){let Bh=ui[wr];if(Bh.texture!==null&&Bh.boundingBox.containsPoint(b))return Bh}return null})(M.state.lightProbeGridArray,Ge);We.lightProbeGrid!==Vt&&(We.lightProbeGrid=Vt,Tr=!0)}if(pf||Re!==et){se.buffers.depth.getReversed()&&et.reversedDepth!==!0&&(et._reversedDepth=!0,et.updateProjectionMatrix()),Nt.setValue(X,"projectionMatrix",et.projectionMatrix),Nt.setValue(X,"viewMatrix",et.matrixWorldInverse);let Vt=Nt.map.cameraPosition;Vt!==void 0&&Vt.setValue(X,J.setFromMatrixPosition(et.matrixWorld)),ke.logarithmicDepthBuffer&&Nt.setValue(X,"logDepthBufFC",2/(Math.log(et.far+1)/Math.LN2)),(Be.isMeshPhongMaterial||Be.isMeshToonMaterial||Be.isMeshLambertMaterial||Be.isMeshBasicMaterial||Be.isMeshStandardMaterial||Be.isShaderMaterial)&&Nt.setValue(X,"isOrthographic",et.isOrthographicCamera===!0),Re!==et&&(Re=et,Tr=!0,Uh=!0)}if(We.needsLights&&(Ds.state.directionalShadowMap.length>0&&Nt.setValue(X,"directionalShadowMap",Ds.state.directionalShadowMap,Se),Ds.state.spotShadowMap.length>0&&Nt.setValue(X,"spotShadowMap",Ds.state.spotShadowMap,Se),Ds.state.pointShadowMap.length>0&&Nt.setValue(X,"pointShadowMap",Ds.state.pointShadowMap,Se)),Ge.isSkinnedMesh){Nt.setOptional(X,Ge,"bindMatrix"),Nt.setOptional(X,Ge,"bindMatrixInverse");let Vt=Ge.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Nt.setValue(X,"boneTexture",Vt.boneTexture,Se))}Ge.isBatchedMesh&&(Nt.setOptional(X,Ge,"batchingTexture"),Nt.setValue(X,"batchingTexture",Ge._matricesTexture,Se),Nt.setOptional(X,Ge,"batchingIdTexture"),Nt.setValue(X,"batchingIdTexture",Ge._indirectTexture,Se),Nt.setOptional(X,Ge,"batchingColorTexture"),Ge._colorsTexture!==null&&Nt.setValue(X,"batchingColorTexture",Ge._colorsTexture,Se));let Oh=kt.morphAttributes;if(Oh.position===void 0&&Oh.normal===void 0&&Oh.color===void 0||sn.update(Ge,kt,ls),(Tr||We.receiveShadow!==Ge.receiveShadow)&&(We.receiveShadow=Ge.receiveShadow,Nt.setValue(X,"receiveShadow",Ge.receiveShadow)),(Be.isMeshStandardMaterial||Be.isMeshLambertMaterial||Be.isMeshPhongMaterial)&&Be.envMap===null&&_t.environment!==null&&(Fn.envMapIntensity.value=_t.environmentIntensity),Fn.dfgLUT!==void 0&&(Fn.dfgLUT.value=(Ai===null&&(Ai=new ea(yv,16,16,sr,Ei),Ai.name="DFG_LUT",Ai.minFilter=jt,Ai.magFilter=jt,Ai.wrapS=yi,Ai.wrapT=yi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai)),Tr){if(Nt.setValue(X,"toneMappingExposure",D.toneMappingExposure),We.needsLights&&(Zn=Uh,(hi=Fn).ambientLightColor.needsUpdate=Zn,hi.lightProbe.needsUpdate=Zn,hi.directionalLights.needsUpdate=Zn,hi.directionalLightShadows.needsUpdate=Zn,hi.pointLights.needsUpdate=Zn,hi.pointLightShadows.needsUpdate=Zn,hi.spotLights.needsUpdate=Zn,hi.spotLightShadows.needsUpdate=Zn,hi.rectAreaLights.needsUpdate=Zn,hi.hemisphereLights.needsUpdate=Zn),mn&&Be.fog===!0&&ht.refreshFogUniforms(Fn,mn),ht.refreshMaterialUniforms(Fn,Be,ie,Ie,M.state.transmissionRenderTarget[et.id]),We.needsLights&&We.lightProbeGrid){let Vt=We.lightProbeGrid;Fn.probesSH.value=Vt.texture,Fn.probesMin.value.copy(Vt.boundingBox.min),Fn.probesMax.value.copy(Vt.boundingBox.max),Fn.probesResolution.value.copy(Vt.resolution)}ya.upload(X,cl(We),Fn,Se)}var hi,Zn;if(Be.isShaderMaterial&&Be.uniformsNeedUpdate===!0&&(ya.upload(X,cl(We),Fn,Se),Be.uniformsNeedUpdate=!1),Be.isSpriteMaterial&&Nt.setValue(X,"center",Ge.center),Nt.setValue(X,"modelViewMatrix",Ge.modelViewMatrix),Nt.setValue(X,"normalMatrix",Ge.normalMatrix),Nt.setValue(X,"modelMatrix",Ge.matrixWorld),Be.uniformsGroups!==void 0){let Vt=Be.uniformsGroups;for(let ui=0,Fh=Vt.length;ui<Fh;ui++){let wr=Vt[ui];ss.update(wr,ls),ss.bind(wr,ls)}}return ls})(C,q,Q,y,E);se.setMaterial(y,k);let re=Q.index,me=1;if(y.wireframe===!0){if(re=Ct.getWireframeAttribute(Q),re===void 0)return;me=2}let we=Q.drawRange,Ce=Q.attributes.position,Ue=we.start*me,nt=(we.start+we.count)*me;L!==null&&(Ue=Math.max(Ue,L.start*me),nt=Math.min(nt,(L.start+L.count)*me)),re!==null?(Ue=Math.max(Ue,0),nt=Math.min(nt,re.count)):Ce!=null&&(Ue=Math.max(Ue,0),nt=Math.min(nt,Ce.count));let Bt=nt-Ue;if(Bt<0||Bt===1/0)return;let Dt;Rn.setup(E,y,Z,Q,re);let Tt=$t;if(re!==null&&(Dt=lt.get(re),Tt=Un,Tt.setIndex(Dt)),E.isMesh)y.wireframe===!0?(se.setLineWidth(y.wireframeLinewidth*Pe()),Tt.setMode(X.LINES)):Tt.setMode(X.TRIANGLES);else if(E.isLine){let et=y.linewidth;et===void 0&&(et=1),se.setLineWidth(et*Pe()),E.isLineSegments?Tt.setMode(X.LINES):E.isLineLoop?Tt.setMode(X.LINE_LOOP):Tt.setMode(X.LINE_STRIP)}else E.isPoints?Tt.setMode(X.POINTS):E.isSprite&&Tt.setMode(X.TRIANGLES);if(E.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Tt.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{let et=E._multiDrawStarts,_t=E._multiDrawCounts,kt=E._multiDrawCount,Be=re?lt.get(re).bytesPerElement:1,Ge=ce.get(y).currentProgram.getUniforms();for(let mn=0;mn<kt;mn++)Ge.setValue(X,"_gl_DrawID",mn),Tt.render(et[mn]/Be,_t[mn])}else if(E.isInstancedMesh)Tt.renderInstances(Ue,Bt,E.count);else if(Q.isInstancedBufferGeometry){let et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,_t=Math.min(Q.instanceCount,et);Tt.renderInstances(Ue,Bt,_t)}else Tt.render(Ue,Bt)},this.compile=function(C,q,Q=null){Q===null&&(Q=C),M=Yt.get(Q),M.init(q),U.push(M),Q.traverseVisible(function(E){E.isLight&&E.layers.test(q.layers)&&(M.pushLight(E),E.castShadow&&M.pushShadow(E))}),C!==Q&&C.traverseVisible(function(E){E.isLight&&E.layers.test(q.layers)&&(M.pushLight(E),E.castShadow&&M.pushShadow(E))}),M.setupLights();let y=new Set;return C.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;let L=E.material;if(L)if(Array.isArray(L))for(let k=0;k<L.length;k++){let Z=L[k];ol(Z,Q,E),y.add(Z)}else ol(L,Q,E),y.add(L)}),M=U.pop(),y},this.compileAsync=function(C,q,Q=null){let y=this.compile(C,q,Q);return new Promise(E=>{function L(){y.forEach(function(k){ce.get(k).currentProgram.isReady()&&y.delete(k)}),y.size!==0?setTimeout(L,10):E(C)}fe.get("KHR_parallel_shader_compile")!==null?L():setTimeout(L,10)})};let Ua=null;function Oa(){On.stop()}function Mr(){On.start()}let On=new T0;function Fa(C,q,Q,y){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){y&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);let L=nn.update(C),k=C.material;k.visible&&T.push(C,L,k,Q,ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){let L=nn.update(C),k=C.material;if(y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ee.copy(C.boundingSphere.center)):(L.boundingSphere===null&&L.computeBoundingSphere(),ee.copy(L.boundingSphere.center)),ee.applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray(k)){let Z=L.groups;for(let re=0,me=Z.length;re<me;re++){let we=Z[re],Ce=k[we.materialIndex];Ce&&Ce.visible&&T.push(C,L,Ce,Q,ee.z,we)}}else k.visible&&T.push(C,L,k,Q,ee.z,null)}}let E=C.children;for(let L=0,k=E.length;L<k;L++)Fa(E[L],q,Q,y)}function ll(C,q,Q,y){let{opaque:E,transmissive:L,transparent:k}=C;M.setupLightsView(Q),F===!0&&yt.setGlobalState(D.clippingPlanes,Q),y&&se.viewport(ve.copy(y)),E.length>0&&Ns(E,q,Q),L.length>0&&Ns(L,q,Q),k.length>0&&Ns(k,q,Q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ba(C,q,Q,y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[y.id]===void 0){let Ce=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[y.id]=new In(1,1,{generateMipmaps:!0,type:Ce?Ei:Nn,minFilter:wi,samples:Math.max(4,ke.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let E=M.state.transmissionRenderTarget[y.id],L=y.viewport||ve;E.setSize(L.z*D.transmissionResolutionScale,L.w*D.transmissionResolutionScale);let k=D.getRenderTarget(),Z=D.getActiveCubeFace(),re=D.getActiveMipmapLevel();D.setRenderTarget(E),D.getClearColor(ye),ue=D.getClearAlpha(),ue<1&&D.setClearColor(16777215,.5),D.clear(),pe&&dt.render(Q);let me=D.toneMapping;D.toneMapping=ii;let we=y.viewport;if(y.viewport!==void 0&&(y.viewport=void 0),M.setupLightsView(y),F===!0&&yt.setGlobalState(D.clippingPlanes,y),Ns(C,Q,y),Se.updateMultisampleRenderTarget(E),Se.updateRenderTargetMipmap(E),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ue=0,nt=q.length;Ue<nt;Ue++){let Bt=q[Ue],{object:Dt,geometry:Tt,material:et,group:_t}=Bt;if(et.side===rt&&Dt.layers.test(y.layers)){let kt=et.side;et.side=Tn,et.needsUpdate=!0,zs(Dt,Q,y,Tt,et,_t),et.side=kt,et.needsUpdate=!0,Ce=!0}}Ce===!0&&(Se.updateMultisampleRenderTarget(E),Se.updateRenderTargetMipmap(E))}D.setRenderTarget(k,Z,re),D.setClearColor(ye,ue),we!==void 0&&(y.viewport=we),D.toneMapping=me}function Ns(C,q,Q){let y=q.isScene===!0?q.overrideMaterial:null;for(let E=0,L=C.length;E<L;E++){let k=C[E],{object:Z,geometry:re,group:me}=k,we=k.material;we.allowOverride===!0&&y!==null&&(we=y),Z.layers.test(Q.layers)&&zs(Z,q,Q,re,we,me)}}function zs(C,q,Q,y,E,L){C.onBeforeRender(D,q,Q,y,E,L),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),E.onBeforeRender(D,q,Q,y,C,L),E.transparent===!0&&E.side===rt&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,D.renderBufferDirect(Q,q,y,E,C,L),E.side=Si,E.needsUpdate=!0,D.renderBufferDirect(Q,q,y,E,C,L),E.side=rt):D.renderBufferDirect(Q,q,y,E,C,L),C.onAfterRender(D,q,Q,y,E,L)}function os(C,q,Q){q.isScene!==!0&&(q=de);let y=ce.get(C),E=M.state.lights,L=M.state.shadowsArray,k=E.state.version,Z=De.getParameters(C,E.state,L,q,Q,M.state.lightProbeGridArray),re=De.getProgramCacheKey(Z),me=y.programs;y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,y.fog=q.fog;let we=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;y.envMap=xt.get(C.envMap||y.environment,we),y.envMapRotation=y.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,me===void 0&&(C.addEventListener("dispose",as),me=new Map,y.programs=me);let Ce=me.get(re);if(Ce!==void 0){if(y.currentProgram===Ce&&y.lightsStateVersion===k)return hl(C,Z),Ce}else Z.uniforms=De.getUniforms(C),H!==null&&C.isNodeMaterial&&H.build(C,Q,Z),C.onBeforeCompile(Z,D),Ce=De.acquireProgram(Z,re),me.set(re,Ce),y.uniforms=Z.uniforms;let Ue=y.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Ue.clippingPlanes=yt.uniform),hl(C,Z),y.needsLights=(function(nt){return nt.isMeshLambertMaterial||nt.isMeshToonMaterial||nt.isMeshPhongMaterial||nt.isMeshStandardMaterial||nt.isShadowMaterial||nt.isShaderMaterial&&nt.lights===!0})(C),y.lightsStateVersion=k,y.needsLights&&(Ue.ambientLightColor.value=E.state.ambient,Ue.lightProbe.value=E.state.probe,Ue.directionalLights.value=E.state.directional,Ue.directionalLightShadows.value=E.state.directionalShadow,Ue.spotLights.value=E.state.spot,Ue.spotLightShadows.value=E.state.spotShadow,Ue.rectAreaLights.value=E.state.rectArea,Ue.ltc_1.value=E.state.rectAreaLTC1,Ue.ltc_2.value=E.state.rectAreaLTC2,Ue.pointLights.value=E.state.point,Ue.pointLightShadows.value=E.state.pointShadow,Ue.hemisphereLights.value=E.state.hemi,Ue.directionalShadowMatrix.value=E.state.directionalShadowMatrix,Ue.spotLightMatrix.value=E.state.spotLightMatrix,Ue.spotLightMap.value=E.state.spotLightMap,Ue.pointShadowMatrix.value=E.state.pointShadowMatrix),y.lightProbeGrid=M.state.lightProbeGridArray.length>0,y.currentProgram=Ce,y.uniformsList=null,Ce}function cl(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=ya.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function hl(C,q){let Q=ce.get(C);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}On.setAnimationLoop(function(C){Ua&&Ua(C)}),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){Ua=C,Lt.setAnimationLoop(C),C===null?On.stop():On.start()},Lt.addEventListener("sessionstart",Oa),Lt.addEventListener("sessionend",Mr),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0)return void Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;H!==null&&H.renderStart(C,q);let Q=Lt.enabled===!0&&Lt.isPresenting===!0,y=z!==null&&(ae===null||Q)&&z.begin(D,ae);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Lt.enabled!==!0||Lt.isPresenting!==!0||z!==null&&z.isCompositing()!==!1||(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(q),q=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,q,ae),M=Yt.get(C,U.length),M.init(q),M.state.textureUnits=Se.getTextureUnits(),U.push(M),Y.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B.setFromProjectionMatrix(Y,Gi,q.reversedDepth),P=this.localClippingEnabled,F=yt.init(this.clippingPlanes,P),T=Ye.get(C,w.length),T.init(),w.push(T),Lt.enabled===!0&&Lt.isPresenting===!0){let L=D.xr.getDepthSensingMesh();L!==null&&Fa(L,q,-1/0,D.sortObjects)}Fa(C,q,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(N,A,q.reversedDepth),pe=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,pe&&dt.addToRenderList(T,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),F===!0&&yt.beginShadows();let E=M.state.shadowsArray;if(Ft.render(E,C,q),F===!0&&yt.endShadows(),(y&&z.hasRenderPass())===!1){let L=T.opaque,k=T.transmissive;if(M.setupLights(),q.isArrayCamera){let Z=q.cameras;if(k.length>0)for(let re=0,me=Z.length;re<me;re++)Ba(L,k,C,Z[re]);pe&&dt.render(C);for(let re=0,me=Z.length;re<me;re++){let we=Z[re];ll(T,C,we,we.viewport)}}else k.length>0&&Ba(L,k,C,q),pe&&dt.render(C),ll(T,C,q)}ae!==null&&K===0&&(Se.updateMultisampleRenderTarget(ae),Se.updateRenderTargetMipmap(ae)),y&&z.end(D),C.isScene===!0&&C.onAfterRender(D,C,q),Rn.resetDefaultState(),ge=-1,Re=null,U.pop(),U.length>0?(M=U[U.length-1],Se.setTextureUnits(M.state.textureUnits),F===!0&&yt.setGlobalState(D.clippingPlanes,M.state.camera)):M=null,w.pop(),T=w.length>0?w[w.length-1]:null,H!==null&&H.renderEnd()},this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(C,q,Q){let y=ce.get(C);y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1&&(y.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=q,ce.get(C.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:Q,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){let Q=ce.get(C);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,Q=0){ae=C,$=q,K=Q;let y=null,E=!1,L=!1;if(C){let k=ce.get(C);if(k.__useDefaultFramebuffer!==void 0)return se.bindFramebuffer(X.FRAMEBUFFER,k.__webglFramebuffer),ve.copy(C.viewport),Ee.copy(C.scissor),ne=C.scissorTest,se.viewport(ve),se.scissor(Ee),se.setScissorTest(ne),void(ge=-1);if(k.__webglFramebuffer===void 0)Se.setupRenderTarget(C);else if(k.__hasExternalTextures)Se.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let me=C.depthTexture;if(k.__boundDepthTexture!==me){if(me!==null&&ce.has(me)&&(C.width!==me.image.width||C.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(C)}}let Z=C.texture;(Z.isData3DTexture||Z.isDataArrayTexture||Z.isCompressedArrayTexture)&&(L=!0);let re=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(y=Array.isArray(re[q])?re[q][Q]:re[q],E=!0):y=C.samples>0&&Se.useMultisampledRTT(C)===!1?ce.get(C).__webglMultisampledFramebuffer:Array.isArray(re)?re[Q]:re,ve.copy(C.viewport),Ee.copy(C.scissor),ne=C.scissorTest}else ve.copy(I).multiplyScalar(ie).floor(),Ee.copy(O).multiplyScalar(ie).floor(),ne=S;if(Q!==0&&(y=j),se.bindFramebuffer(X.FRAMEBUFFER,y)&&se.drawBuffers(C,y),se.viewport(ve),se.scissor(Ee),se.setScissorTest(ne),E){let k=ce.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,k.__webglTexture,Q)}else if(L){let k=q;for(let Z=0;Z<C.textures.length;Z++){let re=ce.get(C.textures[Z]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Z,re.__webglTexture,Q,k)}}else if(C!==null&&Q!==0){let k=ce.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,k.__webglTexture,Q)}ge=-1},this.readRenderTargetPixels=function(C,q,Q,y,E,L,k,Z=0){if(!C||!C.isWebGLRenderTarget)return void Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(re=re[k]),re){se.bindFramebuffer(X.FRAMEBUFFER,re);try{let me=C.textures[Z],we=me.format,Ce=me.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Z),!ke.textureFormatReadable(we))return void Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ce))return void Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=C.width-y&&Q>=0&&Q<=C.height-E&&X.readPixels(q,Q,y,E,An.convert(we),An.convert(Ce),L)}finally{let me=ae!==null?ce.get(ae).__webglFramebuffer:null;se.bindFramebuffer(X.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(C,q,Q,y,E,L,k,Z=0){if(!C||!C.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(re=re[k]),re){if(q>=0&&q<=C.width-y&&Q>=0&&Q<=C.height-E){se.bindFramebuffer(X.FRAMEBUFFER,re);let me=C.textures[Z],we=me.format,Ce=me.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Z),!ke.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ue),X.bufferData(X.PIXEL_PACK_BUFFER,L.byteLength,X.STREAM_READ),X.readPixels(q,Q,y,E,An.convert(we),An.convert(Ce),0);let nt=ae!==null?ce.get(ae).__webglFramebuffer:null;se.bindFramebuffer(X.FRAMEBUFFER,nt);let Bt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ym(X,Bt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ue),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,L),X.deleteBuffer(Ue),X.deleteSync(Bt),L}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,Q=0){let y=Math.pow(2,-Q),E=Math.floor(C.image.width*y),L=Math.floor(C.image.height*y),k=q!==null?q.x:0,Z=q!==null?q.y:0;Se.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,k,Z,E,L),se.unbindTexture()},this.copyTextureToTexture=function(C,q,Q=null,y=null,E=0,L=0){let k,Z,re,me,we,Ce,Ue,nt,Bt,Dt=C.isCompressedTexture?C.mipmaps[L]:C.image;if(Q!==null)k=Q.max.x-Q.min.x,Z=Q.max.y-Q.min.y,re=Q.isBox3?Q.max.z-Q.min.z:1,me=Q.min.x,we=Q.min.y,Ce=Q.isBox3?Q.min.z:0;else{let ci=Math.pow(2,-E);k=Math.floor(Dt.width*ci),Z=Math.floor(Dt.height*ci),re=C.isDataArrayTexture?Dt.depth:C.isData3DTexture?Math.floor(Dt.depth*ci):1,me=0,we=0,Ce=0}y!==null?(Ue=y.x,nt=y.y,Bt=y.z):(Ue=0,nt=0,Bt=0);let Tt=An.convert(q.format),et=An.convert(q.type),_t;q.isData3DTexture?(Se.setTexture3D(q,0),_t=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Se.setTexture2DArray(q,0),_t=X.TEXTURE_2D_ARRAY):(Se.setTexture2D(q,0),_t=X.TEXTURE_2D),se.activeTexture(X.TEXTURE0),se.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),se.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),se.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);let kt=se.getParameter(X.UNPACK_ROW_LENGTH),Be=se.getParameter(X.UNPACK_IMAGE_HEIGHT),Ge=se.getParameter(X.UNPACK_SKIP_PIXELS),mn=se.getParameter(X.UNPACK_SKIP_ROWS),zh=se.getParameter(X.UNPACK_SKIP_IMAGES);se.pixelStorei(X.UNPACK_ROW_LENGTH,Dt.width),se.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Dt.height),se.pixelStorei(X.UNPACK_SKIP_PIXELS,me),se.pixelStorei(X.UNPACK_SKIP_ROWS,we),se.pixelStorei(X.UNPACK_SKIP_IMAGES,Ce);let ul=C.isDataArrayTexture||C.isData3DTexture,ka=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){let ci=ce.get(C),br=ce.get(q),Li=ce.get(ci.__renderTarget),Dh=ce.get(br.__renderTarget);se.bindFramebuffer(X.READ_FRAMEBUFFER,Li.__webglFramebuffer),se.bindFramebuffer(X.DRAW_FRAMEBUFFER,Dh.__webglFramebuffer);for(let Sr=0;Sr<re;Sr++)ul&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,E,Ce+Sr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ce.get(q).__webglTexture,L,Bt+Sr)),X.blitFramebuffer(me,we,k,Z,Ue,nt,k,Z,X.DEPTH_BUFFER_BIT,X.NEAREST);se.bindFramebuffer(X.READ_FRAMEBUFFER,null),se.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(E!==0||C.isRenderTargetTexture||ce.has(C)){let ci=ce.get(C),br=ce.get(q);se.bindFramebuffer(X.READ_FRAMEBUFFER,V),se.bindFramebuffer(X.DRAW_FRAMEBUFFER,W);for(let Li=0;Li<re;Li++)ul?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ci.__webglTexture,E,Ce+Li):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ci.__webglTexture,E),ka?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,br.__webglTexture,L,Bt+Li):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,br.__webglTexture,L),E!==0?X.blitFramebuffer(me,we,k,Z,Ue,nt,k,Z,X.COLOR_BUFFER_BIT,X.NEAREST):ka?X.copyTexSubImage3D(_t,L,Ue,nt,Bt+Li,me,we,k,Z):X.copyTexSubImage2D(_t,L,Ue,nt,me,we,k,Z);se.bindFramebuffer(X.READ_FRAMEBUFFER,null),se.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ka?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(_t,L,Ue,nt,Bt,k,Z,re,Tt,et,Dt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(_t,L,Ue,nt,Bt,k,Z,re,Tt,Dt.data):X.texSubImage3D(_t,L,Ue,nt,Bt,k,Z,re,Tt,et,Dt):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,L,Ue,nt,k,Z,Tt,et,Dt.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,L,Ue,nt,Dt.width,Dt.height,Tt,Dt.data):X.texSubImage2D(X.TEXTURE_2D,L,Ue,nt,k,Z,Tt,et,Dt);se.pixelStorei(X.UNPACK_ROW_LENGTH,kt),se.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Be),se.pixelStorei(X.UNPACK_SKIP_PIXELS,Ge),se.pixelStorei(X.UNPACK_SKIP_ROWS,mn),se.pixelStorei(X.UNPACK_SKIP_IMAGES,zh),L===0&&q.generateMipmaps&&X.generateMipmap(_t),se.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&Se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Se.setTextureCube(C,0):C.isData3DTexture?Se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Se.setTexture2DArray(C,0):Se.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){$=0,K=0,ae=null,se.reset(),Rn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Ib=new Te;function I0(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Wi(n)}var Vo=420,Ma=900,eh=class{constructor(e,t){this.scene=e,this.world=t,this.debrisMesh=new Ys(new an(1,1,1),new bt({roughness:.8}),Vo),this.debrisMesh.castShadow=!0,this.debrisMesh.instanceMatrix.setUsage(ma),this.debrisMesh.count=Vo,this.debrisMesh.frustumCulled=!1,e.add(this.debrisMesh),this.debris=[];let i=new Ne().makeScale(0,0,0);for(let o=0;o<Vo;o++)this.debris.push({alive:!1,p:new R,v:new R,q:new Et,w:new R,s:new R(1,1,1),life:0,rest:!1}),this.debrisMesh.setMatrixAt(o,i),this.debrisMesh.setColorAt(o,new Te(16777215));this.di=0;let s=new Ze;this.pPos=new Float32Array(Ma*3),this.pCol=new Float32Array(Ma*4),this.pSize=new Float32Array(Ma),s.setAttribute("position",new it(this.pPos,3).setUsage(ma)),s.setAttribute("color4",new it(this.pCol,4).setUsage(ma)),s.setAttribute("size",new it(this.pSize,1).setUsage(ma));let r=o=>new _n({uniforms:{map:{value:I0()},scale:{value:600}},vertexShader:["attribute vec4 color4;","attribute float size;","varying vec4 vC;","uniform float scale;","void main() {","  vC = color4;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = size * scale / max(1.0, -mv.z);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["uniform sampler2D map;","varying vec4 vC;","void main() {","  vec4 t = texture2D(map, gl_PointCoord);","  gl_FragColor = vec4(vC.rgb, vC.a * t.a);","  if (gl_FragColor.a < 0.01) discard;","}"].join(`
`),transparent:!0,depthWrite:!1,blending:o});this.parts=[];for(let o=0;o<Ma;o++)this.parts.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,grow:0,r:1,g:1,b:1,a:1,drag:0,grav:0,add:!1});this.pi=0,this.pointsN=new vi(s,r(er)),this.pointsN.frustumCulled=!1,e.add(this.pointsN);let a=s.clone();this.aPos=a.attributes.position.array,this.aCol=a.attributes.color4.array,this.aSize=a.attributes.size.array,this.pointsA=new vi(a,r(Ji)),this.pointsA.frustumCulled=!1,e.add(this.pointsA),this.bodies=[],this.shake=0,this._m=new Ne,this._c=new Te}addShake(e){this.shake=Math.min(1.6,this.shake+e)}debrisAt(e,t,i,s,r,{speed:a=8,up:o=6,size:l=.4,dir:c=null,spread:h=1,plank:u=!1}={}){let p=this._c.set(r);for(let d=0;d<s;d++){let f=this.debris[this.di],m=this.di;this.di=(this.di+1)%Vo,f.alive=!0,f.rest=!1,f.life=14+Math.random()*6,f.p.set(e+(Math.random()-.5)*h,t+Math.random()*h,i+(Math.random()-.5)*h);let x=Math.random()*Math.PI*2;f.v.set(Math.cos(x)*a*Math.random(),o*(.4+Math.random()),Math.sin(x)*a*Math.random()),c&&f.v.add(new R(c.x,0,c.z).multiplyScalar(.55+Math.random()*.4)),f.q.setFromEuler(new bn(Math.random()*6,Math.random()*6,Math.random()*6)),f.w.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14);let g=l*(.6+Math.random()*.8);u?f.s.set(g*.6,g*.4,g*5):f.s.set(g,g*(.5+Math.random()*.6),g*(.7+Math.random()*.6));let v=.75+Math.random()*.35;this.debrisMesh.setColorAt(m,this._c.copy(p).multiplyScalar(v))}this.debrisMesh.instanceColor.needsUpdate=!0}emit(e,t,i,s){let r=this.parts[this.pi];this.pi=(this.pi+1)%Ma,r.alive=!0,r.x=e,r.y=t,r.z=i,r.vx=s.vx||0,r.vy=s.vy||0,r.vz=s.vz||0,r.life=0,r.max=s.life||1,r.size=s.size||1,r.grow=s.grow||0,r.r=s.r??1,r.g=s.g??1,r.b=s.b??1,r.a=s.a??1,r.drag=s.drag??1,r.grav=s.grav??0,r.add=!!s.add}sparks(e,t,i,s,r=null,a=10){for(let o=0;o<s;o++){let l=Math.random()*Math.PI*2;this.emit(e,t,i,{vx:Math.cos(l)*a*Math.random()+(r?r.x*.3:0),vy:2+Math.random()*a*.7,vz:Math.sin(l)*a*Math.random()+(r?r.z*.3:0),life:.35+Math.random()*.4,size:.35,r:1,g:.75+Math.random()*.2,b:.3,a:1,drag:1.5,grav:18,add:!0})}}smoke(e,t,i,{dark:s=.25,size:r=2.2,life:a=1.6,vy:o=1.6,a:l=.5}={}){this.emit(e+(Math.random()-.5)*.4,t,i+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*.8,vy:o,vz:(Math.random()-.5)*.8,life:a,size:r,grow:r*1.2,r:s,g:s,b:s*1.05,a:l,drag:.6})}dust(e,t,i,s,r=[.66,.58,.46],a=1){for(let o=0;o<s;o++){let l=Math.random()*Math.PI*2;this.emit(e,t+.3,i,{vx:Math.cos(l)*6*a*Math.random(),vy:1+Math.random()*2.5*a,vz:Math.sin(l)*6*a*Math.random(),life:1.2+Math.random()*1.2,size:2.4*a,grow:3*a,r:r[0],g:r[1],b:r[2],a:.5,drag:1.4})}}flash(e,t,i){this.emit(e,t,i,{life:.18,size:9,grow:8,r:1,g:.7,b:.35,a:.9,add:!0})}launch(e,{vx:t=0,vy:i=5,vz:s=0,spin:r=6,life:a=20,pivotFall:o=null}={}){e.parent||this.scene.add(e),this.bodies.push({mesh:e,vx:t,vy:i,vz:s,wx:(Math.random()-.5)*r,wy:(Math.random()-.5)*r,wz:(Math.random()-.5)*r,life:a,rest:!1,pivotFall:o,t:0})}update(e){let t=this.world,i=!1;for(let a=0;a<Vo;a++){let o=this.debris[a];if(!o.alive)continue;if(i=!0,o.life-=e,o.life<=0){o.alive=!1,this.debrisMesh.setMatrixAt(a,this._m.makeScale(0,0,0));continue}if(!o.rest){o.v.y-=22*e,o.p.addScaledVector(o.v,e);let c=t.groundAt(o.p.x,o.p.z,o.p.y).h+o.s.y*.5;o.p.y<c&&(o.p.y=c,Math.abs(o.v.y)<2.5&&Math.hypot(o.v.x,o.v.z)<1.5&&(o.rest=!0),o.v.y=-o.v.y*.3,o.v.x*=.6,o.v.z*=.6,o.w.multiplyScalar(.6));let h=o.w.length();h>.01&&o.q.multiply(new Et().setFromAxisAngle(this._tmpAxis(o.w,h),h*e))}let l=o.life<2?o.life/2:1;this._m.compose(o.p,o.q,this._tmpScale(o.s,l)),this.debrisMesh.setMatrixAt(a,this._m)}i&&(this.debrisMesh.instanceMatrix.needsUpdate=!0);for(let a=this.bodies.length-1;a>=0;a--){let o=this.bodies[a];o.life-=e,o.t+=e;let l=o.mesh;if(o.pivotFall){let c=o.pivotFall,h=Math.min(1,o.t/c.dur);c.angle=c.target*h*h,l.quaternion.setFromAxisAngle(c.axis,c.angle).premultiply(c.base);let u=c.offset.clone().applyQuaternion(new Et().setFromAxisAngle(c.axis,c.angle));l.position.copy(c.pivot).sub(u),h>=1&&!c.done&&(c.done=!0,c.onDone&&c.onDone());continue}if(!o.rest){o.vy-=22*e,l.position.x+=o.vx*e,l.position.y+=o.vy*e,l.position.z+=o.vz*e,l.rotation.x+=o.wx*e,l.rotation.y+=o.wy*e,l.rotation.z+=o.wz*e;let c=t.groundAt(l.position.x,l.position.z,l.position.y+1).h+.15;l.position.y<c&&(l.position.y=c,o.vy=-o.vy*.25,o.vx*=.55,o.vz*=.55,o.wx*=.5,o.wy*=.5,o.wz*=.5,Math.abs(o.vy)<1.5&&Math.hypot(o.vx,o.vz)<1&&(o.rest=!0,l.rotation.x=Math.round(l.rotation.x/(Math.PI/2))*(Math.PI/2),l.rotation.z=Math.round(l.rotation.z/(Math.PI/2))*(Math.PI/2)))}o.life<=0&&(l.position.y-=e*.5,o.life<-3&&(l.parent&&l.parent.remove(l),this.bodies.splice(a,1)))}let s=0,r=0;for(let a=0;a<Ma;a++){let o=this.parts[a];if(!o.alive)continue;if(o.life+=e,o.life>=o.max){o.alive=!1;continue}let l=Math.exp(-o.drag*e);o.vx*=l,o.vz*=l,o.vy=o.vy*l-o.grav*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e;let c=o.life/o.max,h=o.a*(1-c)*Math.min(1,o.life*12),u=o.size+o.grow*c;o.add?this._put(this.aPos,this.aCol,this.aSize,r++,o,h,u):this._put(this.pPos,this.pCol,this.pSize,s++,o,h,u)}this.pointsN.geometry.setDrawRange(0,s),this.pointsA.geometry.setDrawRange(0,r);for(let a of[this.pointsN,this.pointsA]){let o=a.geometry;o.attributes.position.needsUpdate=!0,o.attributes.color4.needsUpdate=!0,o.attributes.size.needsUpdate=!0}this.shake=Math.max(0,this.shake-e*2.4)}setScale(e){for(let t of[this.pointsN,this.pointsA])t.material.uniforms.scale.value=e*.9}_put(e,t,i,s,r,a,o){e[s*3]=r.x,e[s*3+1]=r.y,e[s*3+2]=r.z,t[s*4]=r.r,t[s*4+1]=r.g,t[s*4+2]=r.b,t[s*4+3]=a,i[s]=o}_tmpAxis(e,t){return(this.__ax||(this.__ax=new R)).copy(e).divideScalar(t)}_tmpScale(e,t){return(this.__sc||(this.__sc=new R)).copy(e).multiplyScalar(t)}};var vv=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,xv=Math.min(screen.width,screen.height)<700,ba=vv||xv,th=ba?{pixelRatio:Math.min(devicePixelRatio,1.25),shadow:1024,shadowRange:45,trees:.45,tufts:.3,bloom:!1,msaa:0,tex:"tex512",sky:"sky_1k",carLite:!0}:{pixelRatio:Math.min(devicePixelRatio,1.75),shadow:2048,shadowRange:70,trees:1,tufts:1,bloom:!0,msaa:4,tex:"tex",sky:"sky_2k",carLite:!1};function sp(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ze,c=0;for(let h=0;h<n.length;++h){let u=n[h],p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let p=0;p<n.length;++p){let d=n[p].index;for(let f=0;f<d.count;++f)u.push(d.getX(f)+h);h+=n[p].attributes.position.count}l.setIndex(u)}for(let h in r){let u=L0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][p]);let f=L0(d);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function L0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new it(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let p=0,d=h.count;p<d;p++)for(let f=0;f<t;f++){let m=h.getComponent(p,f);o.setComponent(p+u,f,m)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function rp(n,e){if(e===Id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===fa||e===Oo){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===fa)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Wo(n){let e=new Map,t=new Map,i=n.clone();return N0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function N0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)N0(n.children[i],e.children[i],t)}var nh=class extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dp(t)}),this.register(function(t){return new pp(t)}),this.register(function(t){return new bp(t)}),this.register(function(t){return new Sp(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new mp(t)}),this.register(function(t){return new gp(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new vp(t)}),this.register(function(t){return new up(t)}),this.register(function(t){return new xp(t)}),this.register(function(t){return new fp(t)}),this.register(function(t){return new Mp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new cp(t)}),this.register(function(t){return new ih(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ih(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wp(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Zi.extractUrlBase(e);a=Zi.resolveURL(c,this.path)}else a=Zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ra(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===F0){try{a[tt.KHR_BINARY_GLTF]=new Ep(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Np(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],p=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new hp;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ap(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Rp;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new Cp;break;default:p.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function _v(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ht(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cp=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],vn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $s(h),c.distance=u;break;case"spot":c=new Io(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},hp=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,i){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(s)}},up=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},dp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},pp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},fp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},mp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,ft)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},gp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},yp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],vn),Promise.all(s)}},vp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],vn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,ft)),Promise.all(s)}},_p=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},Mp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let i=Ht(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},bp=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Sp=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Tp=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},ih=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,p=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,p,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,p,s.mode,s.filter),d})})}else return null}},wp=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],p=c[0].count,d=[];for(let f of u){let m=new Ne,x=new R,g=new Et,v=new R(1,1,1),_=new Ys(f.geometry,f.material,p);for(let b=0;b<p;b++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,m.compose(x,g,v));for(let b in l)if(b==="_COLOR_0"){let T=l[b];_.instanceColor=new xs(T.array,T.itemSize,T.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&f.geometry.setAttribute(b,l[b]);At.prototype.copy.call(_,f),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},F0="glTF",Xo=12,z0={JSON:1313821514,BIN:5130562},Ep=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==F0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Xo,r=new DataView(e,Xo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===z0.JSON){let c=new Uint8Array(e,Xo+a,o);this.content=i.decode(c)}else if(l===z0.BIN){let c=Xo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ap=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ip[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ip[h]||h.toLowerCase();if(a[h]!==void 0){let p=i.accessors[e.attributes[h]],d=Sa[p.componentType];c[u]=d.name,l[u]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,p){s.decodeDracoFile(h,function(d){for(let f in d.attributes){let m=d.attributes[f],x=l[f];x!==void 0&&(m.normalized=x)}u(d)},o,c,vn,p)})})}},Rp=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Cp=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},sh=class extends xi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(i-t)/h,p=u*u,d=p*u,f=e*c,m=f-c,x=-2*d+3*p,g=d-p,v=1-x,_=g-p+u;for(let b=0;b!==o;b++){let T=a[m+b+o],M=a[m+b+l]*h,w=a[f+b+o],U=a[f+b]*h;r[b]=v*T+_*M+x*w+g*U}return r}},Mv=new Et,Pp=class extends sh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Mv.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},D0={9728:yn,9729:jt,9984:Nc,9985:ua,9986:nr,9987:wi},U0={33071:yi,33648:Xr,10497:Hn},ap={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ip={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bv={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Ws},op={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sv(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),n.DefaultMaterial}function ar(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Tv(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let p=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(p)}if(s){let p=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(p)}if(r){let p=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],p=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=p),n.morphTargetsRelative=!0,n})}function wv(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ev(n){let e,t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lp(t.attributes):e=n.indices+":"+lp(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+lp(n.targets[i]);return e}function lp(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Lp(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Rv=new Ne,Np=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new bi(this.options.manager):this.textureLoader=new Lo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ar(r,o,s),Ci(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Zi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ap[s.type],o=Sa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new it(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=ap[s.type],c=Sa[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,p=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,m,x;if(d&&d!==u){let g=Math.floor(p/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,_=t.cache.get(v);_||(m=new c(o,g*d,s.count*d/h),_=new qs(m,d/h),t.cache.add(v,_)),x=new ms(_,l,p%d/h,f)}else o===null?m=new c(s.count*l):m=new c(o,p,s.count*l),x=new it(m,l,f);if(s.sparse!==void 0){let g=ap.SCALAR,v=Sa[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,T=new v(a[1],_,s.sparse.count*g),M=new c(a[2],b,s.sparse.count*l);o!==null&&(x=new it(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let w=0,U=T.length;w<U;w++){let z=T[w];if(x.setX(z,M[w*l]),l>=2&&x.setY(z,M[w*l+1]),l>=3&&x.setZ(z,M[w*l+2]),l>=4&&x.setW(z,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=f}return x})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let p=(r.samplers||{})[a.sampler]||{};return h.magFilter=D0[p.magFilter]||jt,h.minFilter=D0[p.minFilter]||wi,h.wrapS=U0[p.wrapS]||Hn,h.wrapT=U0[p.wrapT]||Hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==yn&&h.minFilter!==jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let p=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(p,d){let f=p;t.isImageBitmapLoader===!0&&(f=function(m){let x=new Kt(m);x.needsUpdate=!0,p(x)}),t.load(Zi.resolveURL(u,r.path),f,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ci(u,a),u.userData.mimeType=a.mimeType||Av(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new _s,hn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new ta,hn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return bt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let p=u.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],vn),o.opacity=p[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=rt);let h=r.alphaMode||op.OPAQUE;if(h===op.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===op.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==st){let u=r.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&a!==st&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&ar(s,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return O0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Ev(c),u=s[h];if(u)a.push(u.promise);else{let p;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?p=r(c):p=O0(new Ze,c,t),s[h]={primitive:c,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Sv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,f=h.length;d<f;d++){let m=h[d],x=a[d],g,v=c[d];if(x.mode===Wn.TRIANGLES||x.mode===Wn.TRIANGLE_STRIP||x.mode===Wn.TRIANGLE_FAN||x.mode===void 0)g=r.isSkinnedMesh===!0?new co(m,v):new be(m,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),x.mode===Wn.TRIANGLE_STRIP?g.geometry=rp(g.geometry,Oo):x.mode===Wn.TRIANGLE_FAN&&(g.geometry=rp(g.geometry,fa));else if(x.mode===Wn.LINES)g=new uo(m,v);else if(x.mode===Wn.LINE_STRIP)g=new Ks(m,v);else if(x.mode===Wn.LINE_LOOP)g=new po(m,v);else if(x.mode===Wn.POINTS)g=new vi(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&wv(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ci(g,r),x.extensions&&ar(s,g,x),t.assignFinalMaterial(g),u.push(g)}for(let d=0,f=u.length;d<f;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ar(s,u[0],r),u[0];let p=new wt;r.extensions&&ar(s,p,r),t.associations.set(p,{meshes:e});for(let d=0,f=u.length;d<f;d++)p.add(u[d]);return p})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xt(Fo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Es(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ci(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let p=new Ne;r!==null&&p.fromArray(r.array,c*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ho(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,p=s.channels.length;u<p;u++){let d=s.channels[u],f=s.samplers[d.sampler],m=d.target,x=m.node,g=s.parameters!==void 0?s.parameters[f.input]:f.input,v=s.parameters!==void 0?s.parameters[f.output]:f.output;m.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(f),h.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let p=u[0],d=u[1],f=u[2],m=u[3],x=u[4],g=[];for(let _=0,b=p.length;_<b;_++){let T=p[_],M=d[_],w=f[_],U=m[_],z=x[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let D=i._createAnimationTracks(T,M,w,U,z);if(D)for(let G=0;G<D.length;G++)g.push(D[G])}let v=new ws(r,void 0,g);return Ci(v,s),v})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],p=c[2];p!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(p,Rv)});for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,f=u[0];h.pivot=new R().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],f.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Qr:c.length>1?h=new wt:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,p=c.length;u<p;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ci(h,r),r.extensions&&ar(i,h,r),r.matrix!==void 0){let u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new wt;i.name&&(r.name=s.createUniqueName(i.name)),Ci(r,i),i.extensions&&ar(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let p=l[h];p.parent!==null?r.add(Wo(p)):r.add(p)}let c=h=>{let u=new Map;for(let[p,d]of s.associations)(p instanceof hn||p instanceof Kt)&&u.set(p,d);return h.traverse(p=>{let d=s.associations.get(p);d!=null&&u.set(p,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Rs[r.path]===Rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Rs[r.path]){case Rs.weights:h=Yi;break;case Rs.rotation:h=_i;break;case Rs.translation:case Rs.scale:h=Ki;break;default:i.itemSize===1?h=Yi:h=Ki;break}let u=s.interpolation!==void 0?bv[s.interpolation]:Xs,p=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let m=new h(l[d]+"."+Rs[r.path],t.array,p,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Lp(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof _i?Pp:sh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Cv(n,e,t){let i=e.attributes,s=new rn;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=Lp(Sa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let p=t.json.accessors[u.POSITION],d=p.min,f=p.max;if(d!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(f[2]))),p.normalized){let m=Lp(Sa[p.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new xn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function O0(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Ip[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return $e.workingColorSpace!==vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Ci(n,e),Cv(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Tv(n,e.targets,t):n})}var B0={W:1300,H:1473,hand:[.8929,.8561],poses:{back_stand:{uw:.633,uh:1.019,x:900,y:10,w:244,h:392},back_run:{uw:.573,uh:1.021,x:669,y:10,w:221,h:393},back_reach:{uw:.707,uh:.993,x:273,y:429,w:272,h:382},side_stand:{uw:.496,uh:1.063,x:10,y:10,w:191,h:409},side_run_a:{uw:.763,uh:.987,x:555,y:429,w:294,h:380},side_run_b:{uw:.537,uh:1.056,x:211,y:10,w:207,h:406},front_stand:{uw:.6,uh:1.027,x:428,y:10,w:231,h:395},front_run:{uw:.657,uh:1.001,x:10,y:429,w:253,h:386},front_hit:{uw:.773,uh:.897,x:10,y:825,w:298,h:345},back_fall:{uw:.683,uh:.809,x:849,y:825,w:263,h:311},back_climb:{uw:.553,uh:.963,x:859,y:429,w:213,h:371},flat_down:{uw:.97,uh:.444,x:330,y:1180,w:373,h:171},side_jump:{uw:.546,uh:.86,x:629,y:825,w:210,h:331},side_dash:{uw:.804,uh:.734,x:10,y:1180,w:310,h:283},side_throw:{uw:.781,uh:.891,x:318,y:825,w:301,h:343}}};var Pv="assets/chars/",Iv=new URL(import.meta.url).search,dn={ready:!1,failed:!1,tex:null,kenney:{}},k0=["male-f"],es=dn;function G0(){return dn.loading||(dn.loading=new Promise(n=>new bi().load(`img/hero_atlas.webp${Iv}`,e=>{e.colorSpace=ft,e.anisotropy=4,dn.tex=e,dn.ready=!0,n(dn)},void 0,e=>{dn.failed=!0,console.warn("hero load failed",e),n(dn)}))),dn.loading}function V0(){if(dn.kenneyLoading)return dn.kenneyLoading;let n=new nh;return dn.kenneyLoading=Promise.all(k0.map(e=>new Promise((t,i)=>n.load(`${Pv}character-${e}.glb`,t,void 0,i)))).then(e=>e.forEach((t,i)=>{dn.kenney[k0[i]]={scene:t.scene,clips:t.animations},t.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.frustumCulled=!1)})})).catch(e=>console.warn("kenney load failed",e)),dn.kenneyLoading}var jo=1.9,qo=.85,Ta=B0,rh=Ta.hand,zp=Ta.poses,H0=(n,e,t)=>Math.max(e,Math.min(t,n)),Dp=null;function Lv(){if(!Dp){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);t.addColorStop(0,"rgba(30,20,10,.55)"),t.addColorStop(1,"rgba(30,20,10,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Dp=new Wi(n)}return new st({map:Dp,transparent:!0,depthWrite:!1})}var Yo=class{constructor(){this.group=new wt,this.tilt=new wt,this.group.add(this.tilt),this.pivot=new wt,this.pivot.position.y=qo,this.tilt.add(this.pivot);let e=new Mt(1,1).translate(0,.5,0);this.mat=new st({map:dn.tex,transparent:!0,alphaTest:.35,side:rt,toneMapped:!1,color:16774888});let t=this.paper=new be(e,this.mat);t.position.y=-qo,t.castShadow=!0,t.frustumCulled=!1,this.pivot.add(t),this.blob=new be(new Mt(1.5,1.1),Lv()),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.03,this.blob.renderOrder=1,this.group.add(this.blob),this.handWorld=new R,this._h=new R,this.key=null,this.view="back",this.side=1,this.flip=1,this.sx=1,this.phase=0,this.pop=0,this.rot=0,this.state="idle",this.t=0,this.setPose("back_stand")}setPose(e){if(e===this.key)return;this.key=e;let t=zp[e],i=this.paper.geometry.attributes.uv,s=t.x/Ta.W,r=(t.x+t.w)/Ta.W,a=1-t.y/Ta.H,o=1-(t.y+t.h)/Ta.H;i.setXY(0,s,a),i.setXY(1,r,a),i.setXY(2,s,o),i.setXY(3,r,o),i.needsUpdate=!0}update(e,t,i){let s=this.group;this.t+=t,s.position.set(e.x,e.y,e.z);let r=i?i.position.x:e.x-Math.sin(e.yaw)*6,a=i?i.position.y:e.y+3,o=i?i.position.z:e.z-Math.cos(e.yaw)*6,l=Math.atan2(r-e.x,o-e.z);s.rotation.y=l;let c=Math.atan2(a-(e.y+.9),Math.hypot(r-e.x,o-e.z));this.tilt.rotation.x=-H0(c,-.5,1.2)*.6;let h=Math.hypot(e.vx,e.vz),u;e.wreck>0?u="down":e.climbing?u="climb":e.rope?u="swing":e.grounded?h>.6?u="run":u="idle":u="air",this.state==="air"&&(u==="run"||u==="idle")&&(this.pop=1),this.state=u;let p=e.yaw;u==="climb"&&(p=Math.atan2(-e.climbing.nx,-e.climbing.nz));let d=Math.sin(p),f=Math.cos(p),m=Math.cos(l),x=-Math.sin(l),g=d*Math.sin(l)+f*Math.cos(l),v=d*m+f*x;(this.view==="back"?g>-.3:this.view==="front"?g<.3:Math.abs(g)>.58)&&(this.view=g<-.45?"back":g>.45?"front":"side"),Math.abs(v)>.12&&(this.side=v>0?1:-1);let _,b=1,T=0,M=0;if(this.pop=Math.max(0,this.pop-t*6),u==="down")_="flat_down",b=this.side;else if(u==="climb")this.phase+=t*(h>.2||Math.abs(e.vy)>.2?8:0),_="back_climb",b=Math.sin(this.phase)>0?1:-1;else if(u==="swing"){_="back_reach";let V=e.rope.x-e.x,W=e.rope.y-(e.y+qo),$=e.rope.z-e.z,K=V*m+$*x;Math.abs(K)>.4&&(this.reachSide=K>0?1:-1),b=this.reachSide||1;let ae=zp.back_reach,ge=(rh[0]-.5)*ae.uw*jo,Re=rh[1]*ae.uh*jo-qo,ve=Math.atan2(ge,Re);M=-b*H0(Math.atan2(K*b,Math.max(.3,W))-ve,-1.1,1.1)}else if(u==="air")e.stun>0?(this.phase+=t*14,_="front_hit",M=Math.sin(this.phase)*.9):this.view==="side"?(_="side_jump",b=this.side):this.view==="front"?_="front_run":_="back_fall";else if(u==="run"){this.phase+=t*Math.min(20,8+h*.8);let V=Math.sin(this.phase)>0;T=Math.abs(Math.sin(this.phase))*.1,this.view==="side"?(_=V?"side_run_a":"side_run_b",b=this.side,M=-this.side*Math.min(.14,h*.012)):(_=this.view==="front"?"front_run":"back_run",b=V?1:-1,M=Math.sin(this.phase)*.05)}else _=this.view==="side"?"side_stand":this.view==="front"?"front_stand":"back_stand",b=this.view==="side"?this.side:1,M=Math.sin(this.t*1.6)*.012;this.setPose(_),u==="run"&&this.view!=="side"?this.sx=b:u==="climb"?this.sx=b:this.sx+=(b-this.sx)*Math.min(1,t*18),this.flip=b;let w=1-Math.exp(-t*(u==="swing"?16:10));this.rot+=(M-this.rot)*w,this.pivot.rotation.z=this.rot;let U=zp[_],z=this.paper,D=1-this.pop*.14,G=u==="idle"?1+Math.sin(this.t*2.2)*.012:1,H=Math.abs(this.sx)<.05?.05*(b||1):this.sx;z.scale.set(U.uw*jo*H*(2-D),U.uh*jo*D*G,1),z.position.y=-qo+T;let j=u==="run"||u==="idle"||u==="down";this.blob.visible=j,this.blob.scale.setScalar(u==="down"?1.5:1),s.updateMatrixWorld(!0),u==="swing"?this.handWorld.copy(this._h.set(rh[0]-.5,rh[1],0)).applyMatrix4(z.matrixWorld):this.handWorld.set(e.x,e.y+jo*.7,e.z)}dispose(){this.paper.geometry.dispose(),this.mat.dispose(),this.blob.geometry.dispose(),this.blob.material.dispose()}};var pn={x0:-170,x1:170,z0:0,z1:540,ceil:180},Cs=15,or={x:26,y:0,z:42,yaw:0},Ut={x:128,y:135,z:516,r:15},te={sofaBase:{x0:-170,x1:-100,y0:0,y1:32,z0:70,z1:220},sofaBack:{x0:-170,x1:-148,y0:32,y1:68,z0:70,z1:220},sofaArmN:{x0:-148,x1:-100,y0:32,y1:50,z0:70,z1:88},sofaArmS:{x0:-148,x1:-100,y0:32,y1:50,z0:202,z1:220},table:{x0:-70,x1:-10,y0:24,y1:28,z0:100,z1:170},chips:{x0:-56,x1:-34,y0:28,y1:52,z0:112,z1:130},amazon:{x0:-60,x1:-18,y0:0,y1:30,z0:18,z1:58},yogurt:{x0:48,x1:62,y0:0,y1:13,z0:30,z1:44},tvStand:{x0:125,x1:170,y0:0,y1:36,z0:80,z1:210},tv:{x0:150,x1:156,y0:36,y1:96,z0:100,z1:190},shelf:{x0:-170,x1:-132,y0:0,y1:135,z0:226,z1:306},curtain:{x0:160,x1:170,y0:4,y1:170,z0:320,z1:450},dining:{x0:-120,x1:-20,y0:50,y1:54,z0:310,z1:380},tissue:{x0:-82,x1:-56,y0:54,y1:68,z0:330,z1:346},chairSeat:{x0:-62,x1:-30,y0:33,y1:36,z0:386,z1:416},chairBack:{x0:-62,x1:-30,y0:36,y1:72,z0:413,z1:416},pendantA:{x0:-82,x1:-58,y0:100,y1:118,z0:333,z1:357},pendantB:{x0:52,x1:72,y0:96,y1:112,z0:292,z1:312},server:{x0:-166,x1:-136,y0:0,y1:100,z0:430,z1:462},counter:{x0:-170,x1:104,y0:0,y1:64,z0:490,z1:540},upper:{x0:-170,x1:104,y0:106,y1:150,z0:516,z1:540},cooker:{x0:-34,x1:-8,y0:64,y1:84,z0:496,z1:518},micro:{x0:40,x1:86,y0:64,y1:92,z0:494,z1:528},fridge:{x0:104,x1:170,y0:0,y1:135,z0:474,z1:540,slip:.34},lampShade:{x0:-52,x1:-28,y0:104,y1:124,z0:228,z1:252},hangBar:{x0:72,x1:112,y0:146,y1:150,z0:118,z1:122},hangL:{x0:70,x1:74,y0:0,y1:146,z0:116,z1:124},hangR:{x0:110,x1:114,y0:0,y1:146,z0:116,z1:124},rackRail:{x0:78,x1:130,y0:98,y1:102,z0:262,z1:278},rackL:{x0:78,x1:81,y0:0,y1:98,z0:268,z1:272},rackR:{x0:127,x1:130,y0:0,y1:98,z0:268,z1:272},ladderTop:{x0:62,x1:92,y0:104,y1:110,z0:404,z1:426},ladderA:{x0:62,x1:66,y0:0,y1:104,z0:396,z1:434},ladderB:{x0:88,x1:92,y0:0,y1:104,z0:396,z1:434},pot:{x0:112,x1:136,y0:0,y1:22,z0:20,z1:44},dumbbell:{x0:-96,x1:-66,y0:0,y1:9,z0:268,z1:284},golf:{x0:60,x1:74,y0:0,y1:66,z0:72,z1:86},towerBase:{x0:38,x1:64,y0:0,y1:4,z0:192,z1:218},towerPost:{x0:47,x1:55,y0:4,y1:108,z0:201,z1:209},towerMid:{x0:40,x1:62,y0:58,y1:62,z0:194,z1:216},towerTop:{x0:38,x1:64,y0:108,y1:112,z0:192,z1:218},ironBoard:{x0:36,x1:80,y0:56,y1:59,z0:334,z1:350},ironLegA:{x0:44,x1:47,y0:0,y1:56,z0:336,z1:348},ironLegB:{x0:69,x1:72,y0:0,y1:56,z0:336,z1:348},fridgeBox:{x0:146,x1:170,y0:135,y1:166,z0:478,z1:506}},ah=[27,54,81,108],Nv={x0:-132,x1:-125,z0:226,z1:306},W0=[{x:-128,y:74,z:72,ry:-Math.PI/2},{x:-131,y:142,z:300,ry:Math.PI/2},{x:158,y:175,z:400,ry:-Math.PI/2}],ts=[{key:"sofa",x:-158,y:68,z:150,r:34},{key:"shelf",x:-150,y:135,z:268,r:34},{key:"curtain",x:165,y:170,z:390,r:40},{key:"exit",x:Ut.x,y:Ut.y,z:Ut.z,r:Ut.r}],oh=[{id:"coin",x:42,y:0,z:182,r:7},{id:"glasses",x:-124,y:50,z:211,r:7},{id:"hesokuri",x:-128,y:81,z:266,r:6},{id:"dvd",x:138,y:36,z:140,r:7},{id:"ring",x:-60,y:54,z:370,r:6},{id:"chip",x:-24,y:28,z:150,r:7,heal:!0}],lh=[{id:"a",x:96,y:0,z:66},{id:"b",x:-120,y:32,z:150},{id:"c",x:8,y:0,z:296},{id:"f",x:-144,y:135,z:234},{id:"d",x:-92,y:54,z:362},{id:"e",x:118,y:0,z:438}],X0=[{x:-124,y:32,z:145,w:16,l:50},{x:-159,y:68,z:145,w:6,l:66},{x:-40,y:28,z:135,w:20,l:25},{x:147,y:36,z:95,w:14,l:10},{x:-151,y:135,z:266,w:12,l:32},{x:-70,y:54,z:360,w:40,l:14},{x:-46,y:36,z:400,w:10,l:10},{x:51,y:112,z:205,w:10,l:10},{x:58,y:59,z:342,w:14,l:4},{x:0,y:64,z:505,w:90,l:10},{x:77,y:110,z:415,w:10,l:6},{x:-151,y:100,z:446,w:10,l:10},{x:-40,y:150,z:528,w:90,l:7}],si={y:160,z:305},Ko={x:-30,y:172,z:165},Zo={x:60,y:172,z:440},zv=[[72,120,[40,70,100,130,148]],[112,120,[40,70,100,130,148]],[92,120,[148]],[-40,240,[40,70,100,122]],[80,270,[40,70,98]],[128,270,[40,70,98]],[104,270,[98]],[62,302,[96]],[-70,345,[100]],[124,32,[36,60,80]],[100,62,[24,50]],[64,415,[40,70,104]],[90,415,[40,70,104]],[-40,20,[36,60]],[-120,10,[45]],[67,79,[40,64]],[51,205,[40,75,108]],[58,342,[56]],[14,480,[40]],...[-150,-120,-90,-60,-30,0,30,60,90,120,150].map(n=>[n,si.z,[si.y]]),[Ko.x,Ko.z,[Ko.y]],[Zo.x,Zo.z,[Zo.y]]];function Up(n,e={}){return{cx:(n.x0+n.x1)/2,cz:(n.z0+n.z1)/2,hw:(n.x1-n.x0)/2,hl:(n.z1-n.z0)/2,yaw:0,y0:n.y0,y1:n.y1,kind:"building",small:!0,slip:n.slip,...e}}function Dv(){let e=new Map,t=(i,s)=>i*4096+s;return{add(i,s,r,a,o){for(let l=Math.floor(s/40);l<=Math.floor(a/40);l++)for(let c=Math.floor(r/40);c<=Math.floor(o/40);c++){let h=t(l,c);e.has(h)||e.set(h,[]),e.get(h).push(i)}},at(i,s){return e.get(t(Math.floor(i/40),Math.floor(s/40)))||Uv}}}var Uv=[];function j0(){let n=[],e=Dv(),t=o=>{n.push(o),e.add(o,o.cx-o.hw-1,o.cz-o.hl-1,o.cx+o.hw+1,o.cz+o.hl+1)};for(let o in te)t(Up(te[o],{name:o,...o==="dumbbell"||o==="yogurt"?{noAnchor:!0}:{}}));for(let o of ah)t(Up({...Nv,y0:o-2,y1:o},{name:"ledge",oneWay:!0,noAnchor:!0}));let i=pn,s=30,r=i.ceil;for(let o of[{x0:i.x0-s,x1:i.x0,z0:i.z0-s,z1:i.z1+s},{x0:i.x1,x1:i.x1+s,z0:i.z0-s,z1:i.z1+s},{x0:i.x0-s,x1:i.x1+s,z0:i.z0-s,z1:i.z0},{x0:i.x0-s,x1:i.x1+s,z0:i.z1,z1:i.z1+s}])t(Up({...o,y0:0,y1:r},{kind:"bound",noClimb:!0,name:"wall"}));let a=[];for(let[o,l,c]of zv)for(let h of c)a.push({x:o,z:l,y0:Math.max(0,h-8),y1:h+.4});return{colliders:n,poles:a,bounds:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1},ceilY:i.ceil,nearby:(o,l)=>e.at(o,l),groundAt:()=>({h:0,surf:"floor",slab:null}),surfaceAt:()=>"floor"}}function lr(n,e,t,i){let s=0;for(let r of n.nearby(e,t))r.noHit||r.kind==="bound"||r.y1>i+.6||r.y1<=s||Math.abs(e-r.cx)<=r.hw&&Math.abs(t-r.cz)<=r.hl&&(s=r.y1);return s}function ch(n,e,t,i,s=7){if(e<pn.x0+i||e>pn.x1-i||t<pn.z0+i||t>pn.z1-i)return!0;for(let r of n.nearby(e,t))if(!(r.noHit||r.kind==="bound"||r.oneWay||r.y0>s)&&Math.abs(e-r.cx)<r.hw+i&&Math.abs(t-r.cz)<r.hl+i)return!0;return!1}var Op=(n,e,t)=>n<e?e:n>t?t:n,q0=11,Me=()=>(q0=q0*16807%2147483647)/2147483647;function ot(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Wi(s);return r.colorSpace=i.linear?Qi:ft,r.anisotropy=4,i.repeat&&(r.wrapS=r.wrapT=Hn),r}function Y0(n,e,t,i,s,r,a=4){n.fillStyle=i,n.fillRect(0,0,e,t);for(let o=0;o<t;o+=a)for(let l=0;l<e;l+=a){let c=Me();n.fillStyle=c<.5?s:r,n.globalAlpha=.06+c*.14,n.fillRect(l,o,(l+o)%(a*2)?a-1:1,(l+o)%(a*2)?1:a-1)}n.globalAlpha=1}var Pi={floor(){return ot(1024,1024,(n,e,t)=>{let s=t/8;for(let r=0;r<8;r++){let a=-Me()*500;for(;a<e;){let o=380+Me()*340,l=150+Me()*36;n.fillStyle=`rgb(${l+34},${l-2},${l-48})`,n.fillRect(a,r*s,o,s);for(let c=0;c<16;c++){n.strokeStyle=`rgba(70,40,14,${.04+Me()*.1})`,n.lineWidth=.6+Me()*1.6;let h=r*s+Me()*s;n.beginPath(),n.moveTo(a,h),n.bezierCurveTo(a+o*.3,h+(Me()-.5)*18,a+o*.7,h+(Me()-.5)*18,a+o,h+(Me()-.5)*10),n.stroke()}n.fillStyle="rgba(30,16,6,.85)",n.fillRect(a+o-1.5,r*s,3,s),a+=o}n.fillStyle="rgba(30,16,6,.85)",n.fillRect(0,r*s-1.5,e,3)}},{repeat:!0})},wall(){return ot(512,512,(n,e,t)=>{n.fillStyle="#e9e1cf",n.fillRect(0,0,e,t);for(let i=0;i<2600;i++)n.fillStyle=Me()<.5?"rgba(120,100,70,.05)":"rgba(255,255,255,.1)",n.fillRect(Me()*e,Me()*t,1+Me()*3,1+Me()*3);for(let i=0;i<8;i++)n.fillStyle="rgba(120,100,70,.035)",n.fillRect(i*64,0,2,t)},{repeat:!0})},ceil(){return ot(256,256,(n,e,t)=>{n.fillStyle="#efe9db",n.fillRect(0,0,e,t);for(let i=0;i<900;i++)n.fillStyle="rgba(110,90,60,.06)",n.fillRect(Me()*e,Me()*t,2,2)},{repeat:!0})},sofa(){return ot(512,512,(n,e,t)=>Y0(n,e,t,"#a98f63","#5b4526","#e0cfa6",6),{repeat:!0})},rug(){return ot(1024,768,(n,e,t)=>{n.fillStyle="#7c2f2a",n.fillRect(0,0,e,t),n.strokeStyle="#d9b676",n.lineWidth=18,n.strokeRect(40,40,e-80,t-80),n.strokeStyle="#1f3442",n.lineWidth=8,n.strokeRect(72,72,e-144,t-144);for(let i=0;i<6;i++)for(let s=0;s<8;s++){let r=140+s*106,a=140+i*98;n.fillStyle=(s+i)%2?"#d9b676":"#1f3442",n.beginPath(),n.moveTo(r,a-34),n.lineTo(r+34,a),n.lineTo(r,a+34),n.lineTo(r-34,a),n.closePath(),n.fill(),n.fillStyle="#7c2f2a",n.beginPath(),n.arc(r,a,11,0,7),n.fill()}for(let i=0;i<16e3;i++)n.fillStyle=Me()<.5?"rgba(0,0,0,.09)":"rgba(255,240,210,.05)",n.fillRect(Me()*e,Me()*t,2,4)})},dark(){return ot(512,512,(n,e,t)=>{n.fillStyle="#50331f",n.fillRect(0,0,e,t);for(let i=0;i<90;i++){n.strokeStyle=`rgba(22,10,4,${.08+Me()*.2})`,n.lineWidth=.6+Me()*1.6;let s=Me()*t;n.beginPath(),n.moveTo(0,s),n.bezierCurveTo(e*.3,s+(Me()-.5)*24,e*.7,s+(Me()-.5)*24,e,s),n.stroke()}},{repeat:!0})},light(){return ot(512,512,(n,e,t)=>{n.fillStyle="#c9a877",n.fillRect(0,0,e,t);for(let i=0;i<80;i++){n.strokeStyle=`rgba(90,56,20,${.06+Me()*.16})`,n.lineWidth=.6+Me()*1.6;let s=Me()*t;n.beginPath(),n.moveTo(0,s),n.bezierCurveTo(e*.3,s+(Me()-.5)*24,e*.7,s+(Me()-.5)*24,e,s),n.stroke()}},{repeat:!0})},kitchen(){return ot(512,512,(n,e,t)=>{n.fillStyle="#e7dfca",n.fillRect(0,0,e,t);for(let i=0;i<1400;i++)n.fillStyle="rgba(120,100,60,.05)",n.fillRect(Me()*e,Me()*t,2,2)},{repeat:!0})},card(){return ot(512,512,(n,e,t)=>{n.fillStyle="#bb8f5c",n.fillRect(0,0,e,t);for(let i=0;i<90;i++)n.fillStyle="rgba(96,62,28,.16)",n.fillRect(0,i*6+Me()*2,e,1.2);for(let i=0;i<700;i++)n.fillStyle="rgba(70,40,14,.1)",n.fillRect(Me()*e,Me()*t,3,1)},{repeat:!0})},curtain(){return ot(512,512,(n,e,t)=>{Y0(n,e,t,"#5f7b66","#2f4536","#a7c2ac",4),n.globalAlpha=.28,n.fillStyle="#e4d9b7";for(let i=0;i<26;i++){let s=Me()*e,r=Me()*t;for(let a=0;a<5;a++)n.beginPath(),n.ellipse(s+Math.cos(a*1.26)*12,r+Math.sin(a*1.26)*12,9,6,a*1.26,0,7),n.fill()}n.globalAlpha=1},{repeat:!0})}};function He(n,e,t,i,s,r,a=1.2,o=2,l=.02){let c=e-n,h=i-t,u=r-s;a=Math.min(a,c/2-.01,h/2-.01,u/2-.01);let p=new an(c,h,u,o*2+1,o*2+1,o*2+1),d=p.attributes.position,f=p.attributes.normal,m=p.attributes.uv,x=c/2-a,g=h/2-a,v=u/2-a;for(let _=0;_<d.count;_++){let b=o*2+1,T=(Ee,ne,ye)=>{let ue=(Math.abs(Ee)/ne*b-1)/2;return Math.sign(Ee)*(ye+ue/o*(ne-ye))},M=T(d.getX(_),c/2,x),w=T(d.getY(_),h/2,g),U=T(d.getZ(_),u/2,v),z=Op(M,-x,x),D=Op(w,-g,g),G=Op(U,-v,v),H=M-z,j=w-D,V=U-G,W=Math.hypot(H,j,V)||1;H/=W,j/=W,V/=W,d.setXYZ(_,z+H*a,D+j*a,G+V*a),f.setXYZ(_,H,j,V);let $=d.getX(_)+(n+e)/2,K=d.getY(_)+(t+i)/2,ae=d.getZ(_)+(s+r)/2,ge=Math.abs(f.getX(_)),Re=Math.abs(f.getY(_)),ve=Math.abs(f.getZ(_));Re>=ge&&Re>=ve?m.setXY(_,$*l,ae*l):ge>=ve?m.setXY(_,ae*l,K*l):m.setXY(_,$*l,K*l)}return p.translate((n+e)/2,(t+i)/2,(s+r)/2),p}var It=(n,e,t)=>He(n.x0,n.x1,n.y0,n.y1,n.z0,n.z1,e,2,t);function at(n,e,t,i,s,r,a=16,o=null){let l=new qt(n,e,t,a);o&&l.applyMatrix4(new Ne().makeRotationFromEuler(new bn(...o))),l.translate(i,s,r);let c=l.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,c.getX(h)*2,c.getY(h));return l}function Ov(n){return n.index?n.toNonIndexed():n}function K0(n,e){let t=new Map,i={},s=(y,E)=>i[y]||(i[y]=new bt({roughness:.8,metalness:0,...E})),r=(y,E)=>{t.has(y)||t.set(y,[]),t.get(y).push(Ov(E))},a=(y,E,L,k,Z,re,me,we={})=>{let Ce=new be(new Mt(y,E),new bt({map:me,roughness:we.rough??.75,transparent:!!we.alpha,emissive:we.em?16777215:0,emissiveMap:we.em?me:null,emissiveIntensity:we.em||0,side:we.side??Si,depthWrite:!we.alpha}));return Ce.position.set(L,k,Z),Ce.rotation.y=re,Ce.receiveShadow=!we.em,we.rx&&(Ce.rotation.x=we.rx),n.add(Ce),Ce},o=pn,l=o.ceil,c=s("floor",{map:Pi.floor(),roughness:.42});c.map.repeat.set(1/92,1/92);let h=s("wall",{map:Pi.wall(),roughness:.95}),u=s("ceil",{map:Pi.ceil(),roughness:1}),p=s("sofa",{map:Pi.sofa(),roughness:.98}),d=s("dark",{map:Pi.dark(),roughness:.55}),f=s("light",{map:Pi.light(),roughness:.58}),m=s("kit",{map:Pi.kitchen(),roughness:.45}),x=s("card",{map:Pi.card(),roughness:.95}),g=s("curt",{map:Pi.curtain(),roughness:1,side:rt}),v=s("white",{color:15855592,roughness:.32}),_=s("steel",{color:12370630,metalness:.75,roughness:.32}),b=s("black",{color:1776671,roughness:.35}),T=s("plas",{color:14209471,roughness:.5}),M=s("gold",{color:13212219,metalness:.75,roughness:.3}),w=s("pot",{color:10246714,roughness:.85}),U=s("leaf",{color:3630650,roughness:.65,side:rt}),z=new st({color:16771519,fog:!1}),D=new be(new Mt(o.x1-o.x0,o.z1-o.z0+80),c);D.rotation.x=-Math.PI/2,D.position.set(0,0,(o.z0+o.z1)/2-40),D.receiveShadow=!0,n.add(D);{let y=D.geometry.attributes.uv,E=D.geometry.attributes.position;for(let L=0;L<y.count;L++)y.setXY(L,E.getX(L),E.getY(L))}let G=new be(new Mt(o.x1-o.x0,o.z1-o.z0),u);G.rotation.x=Math.PI/2,G.position.set(0,l,(o.z0+o.z1)/2);{let y=G.geometry.attributes.uv,E=G.geometry.attributes.position;for(let L=0;L<y.count;L++)y.setXY(L,E.getX(L)*.01,E.getY(L)*.01)}n.add(G);let H=.012,j=(y,E,L,k,Z=0,re=l)=>r(h,He(y,E,Z,re,L,k,.01,1,H));j(o.x0-6,o.x0,0,o.z1),j(o.x0,o.x1,o.z1,o.z1+6);let V={z0:330,z1:440,y0:40,y1:150};j(o.x1,o.x1+6,0,V.z0),j(o.x1,o.x1+6,V.z1,o.z1),j(o.x1,o.x1+6,V.z0,V.z1,0,V.y0),j(o.x1,o.x1+6,V.z0,V.z1,V.y1,l);let W={x0:Cs-38,x1:Cs+38,y1:150};j(o.x0,W.x0,-6,0),j(W.x1,o.x1,-6,0),j(W.x0,W.x1,-6,0,W.y1,l),r(f,He(W.x0-4,W.x0,0,W.y1+4,-7,1,.5)),r(f,He(W.x1,W.x1+4,0,W.y1+4,-7,1,.5)),r(f,He(W.x0-4,W.x1+4,W.y1,W.y1+4,-7,1,.5));let $=new be(new Mt(140,l),new st({color:9404262,fog:!1}));$.position.set(Cs,l/2,-90),n.add($);let K=new be(new Mt(140,100),new st({color:6967864}));K.rotation.x=-Math.PI/2,K.position.set(Cs,.02,-45),n.add(K);for(let[y,E,L,k]of[[o.x0,o.x0+1.4,0,o.z1],[o.x1-1.4,o.x1,0,o.z1],[o.x0,W.x0,0,1.4],[W.x1,o.x1,0,1.4]])r(f,He(y,E,0,7,L,k,.2,1));let ae=ot(128,192,(y,E,L)=>{y.fillStyle="#ece6d4",y.fillRect(0,0,E,L),y.strokeStyle="#a79e87",y.lineWidth=5,y.strokeRect(6,6,E-12,L-12),y.fillStyle="#26221c";for(let k of[52,128])y.fillRect(38,k,11,28),y.fillRect(79,k,11,28)});a(11,16,o.x0+.2,16,245,Math.PI/2,ae),a(11,16,-40,16,.2,0,ae),a(11,16,o.x1-.2,16,60,-Math.PI/2,ae);let ge=ot(256,256,(y,E,L)=>{let k=y.createLinearGradient(0,0,0,L);k.addColorStop(0,"#cfe6f6"),k.addColorStop(.75,"#fdf6df"),k.addColorStop(1,"#a8b88f"),y.fillStyle=k,y.fillRect(0,0,E,L),y.fillStyle="rgba(70,84,70,.6)",y.fillRect(0,L*.82,E,L),y.fillStyle="rgba(255,255,255,.7)";for(let Z=0;Z<5;Z++)y.beginPath(),y.ellipse(Me()*E,Me()*L*.5,26+Me()*30,8+Me()*6,0,0,7),y.fill()}),Re=new be(new Mt(V.z1-V.z0,V.y1-V.y0),new st({map:ge,fog:!1}));Re.rotation.y=-Math.PI/2,Re.position.set(o.x1+5,(V.y0+V.y1)/2,(V.z0+V.z1)/2),n.add(Re),r(T,He(o.x1-1,o.x1+3,V.y0-2,V.y0,V.z0,V.z1,.3)),r(T,He(o.x1-1,o.x1+3,V.y1,V.y1+2,V.z0,V.z1,.3)),r(T,He(o.x1-1,o.x1+3,V.y0,V.y1,(V.z0+V.z1)/2-1,(V.z0+V.z1)/2+1,.3));let ve=(y,E)=>{let L=E-y,k=new Mt(L,te.curtain.y1-te.curtain.y0,72,10),Z=k.attributes.position,re=k.attributes.uv;for(let me=0;me<Z.count;me++){let we=Z.getX(me),Ce=Z.getY(me),Ue=3.2+.7*Math.sin(Ce*.03),nt=Math.sin(we/L*Math.PI*24+Math.sin(Ce*.02)*.5)*Ue;Z.setXYZ(me,te.curtain.x0+2+nt,(te.curtain.y0+te.curtain.y1)/2+Ce,(y+E)/2+we),re.setXY(me,we*.02,Ce*.02)}return k.computeVertexNormals(),k};r(g,ve(te.curtain.z0,368)),r(g,ve(402,te.curtain.z1)),r(_,at(1.4,1.4,te.curtain.z1-te.curtain.z0+20,164,171,(te.curtain.z0+te.curtain.z1)/2,10,[Math.PI/2,0,0]));let Ee=new be(new Mt(34,166),new bt({color:16184296,transparent:!0,opacity:.55,side:rt,roughness:1,depthWrite:!1}));Ee.rotation.y=-Math.PI/2,Ee.position.set(162,87,385),n.add(Ee),r(p,It(te.sofaBase,3)),r(p,It(te.sofaBack,5)),r(p,It(te.sofaArmN,5)),r(p,It(te.sofaArmS,5));for(let y=0;y<3;y++){let E=88+y*38.6,L=E+37.4;r(p,He(-148,-99,30,37,E,L,3.2)),r(p,He(-149,-138,36,67,E+.5,L-.5,4.2))}{let y=s("sofapipe",{color:8021313,roughness:1});r(y,He(-100.6,-99.6,22,23.2,70,220,.4,1)),r(y,He(-100.6,-99.6,3,4.2,70,220,.4,1));for(let E of[88,126.6,165.2,202])r(y,He(-100.6,-99.6,4,30,E-.3,E+.3,.1,1))}r(s("pen",{color:2708645,roughness:.3}),at(.9,.9,22,-112,37.6,123,8,[Math.PI/2-.1,0,0]));let ne=s("blanket",{map:ot(256,256,(y,E,L)=>{y.fillStyle="#b5524a",y.fillRect(0,0,E,L),y.strokeStyle="#eddcae",y.lineWidth=7;for(let k=0;k<6;k++)y.beginPath(),y.moveTo(0,k*44+16),y.lineTo(E,k*44+16),y.moveTo(k*44+16,0),y.lineTo(k*44+16,L),y.stroke()},{repeat:!0}),roughness:1});r(ne,He(-137,-100,37,38.4,158,192,.5,1,.03)),r(ne,He(-100.8,-99.4,12,38,158,192,.5,1,.03)),r(f,It(te.table,.8));for(let[y,E]of[[te.table.x0+3,te.table.z0+3],[te.table.x1-3,te.table.z0+3],[te.table.x0+3,te.table.z1-3],[te.table.x1-3,te.table.z1-3]])r(f,at(2.2,1.6,24,y,12,E,10));let ye=ot(256,280,(y,E,L)=>{let k=y.createLinearGradient(0,0,0,L);k.addColorStop(0,"#e2b52c"),k.addColorStop(1,"#c6722a"),y.fillStyle=k,y.fillRect(0,0,E,L),y.fillStyle="#7a1e14",y.font='bold 64px "BIZ UDPGothic",sans-serif',y.textAlign="center",y.fillText("うす塩",E/2,96),y.font='bold 26px "BIZ UDPGothic",sans-serif',y.fillText("おとん用 食べるな",E/2,144),y.fillStyle="rgba(255,240,180,.9)";for(let Z=0;Z<7;Z++)y.beginPath(),y.ellipse(50+Z*30,210+Z%2*22,26,16,Z,0,7),y.fill()}),ue=s("chips",{map:ye,roughness:.35,metalness:.2});{let y=He(te.chips.x0,te.chips.x1,te.chips.y0,te.chips.y1,te.chips.z0,te.chips.z1,3.5,3,0),E=y.attributes.uv,L=y.attributes.position,k=y.attributes.normal;for(let Z=0;Z<E.count;Z++){E.setXY(Z,(L.getX(Z)-te.chips.x0)/(te.chips.x1-te.chips.x0),(L.getY(Z)-te.chips.y0)/(te.chips.y1-te.chips.y0));let re=1+.22*Math.sin((L.getY(Z)-te.chips.y0)/24*Math.PI),me=(te.chips.z0+te.chips.z1)/2;L.setZ(Z,me+(L.getZ(Z)-me)*re)}r(ue,y)}r(b,He(-24,-14,28,30.4,112,136,.7,1));for(let y=0;y<12;y++)r(s("btn",{color:12105908,roughness:.5}),He(-23+y%3*3,-21.6+y%3*3,30.3,30.7,115+Math.floor(y/3)*4.4,117+Math.floor(y/3)*4.4,.2,1));r(x,It(te.amazon,.6,.012)),r(s("tape",{color:13151608,roughness:.3}),He(te.amazon.x0-.1,te.amazon.x1+.1,te.amazon.y1-.05,te.amazon.y1+.18,34,42,.05,1)),a(26,16,-39,16,te.amazon.z1+.15,Math.PI,ot(260,160,(y,E,L)=>{y.fillStyle="#fff",y.fillRect(0,0,E,L),y.fillStyle="#222",y.font='bold 22px "BIZ UDPGothic",sans-serif',y.fillText("お届け先",12,30),y.font='19px "BIZ UDPGothic",sans-serif',y.fillText("おかん様",12,62),y.fillText("品名: 健康マット",12,90),y.fillText("4枚目",12,118)}));let xe=(te.yogurt.x0+te.yogurt.x1)/2,Ie=(te.yogurt.z0+te.yogurt.z1)/2,ie=ot(512,200,(y,E,L)=>{y.fillStyle="#f7f2e6",y.fillRect(0,0,E,L),y.fillStyle="#2f6d9e",y.fillRect(0,0,E,44),y.fillStyle="#fff",y.font='bold 30px "BIZ UDPGothic",sans-serif',y.fillText("プレーン ヨーグルト",40,33),y.fillStyle="#b5271a",y.font='bold 40px "BIZ UDPGothic",sans-serif',y.fillText("賞味期限 2019.03",60,118),y.fillStyle="#333",y.font='22px "BIZ UDPGothic",sans-serif',y.fillText("おいしく食べられる期限です",60,158)}),N=new be(new qt(9,7,13,28,1,!0),new bt({map:ie,side:rt,roughness:.45}));N.position.set(xe,6.5,Ie),N.rotation.y=1.2,N.castShadow=!0,n.add(N);let A=new be(new qi(7,20),s("yb",{color:16117988}));A.rotation.x=-Math.PI/2,A.position.set(xe,.5,Ie),n.add(A),r(_,He(66,96,.3,1.2,36,39,.3,1));{let y=new Pt(5,14,8).scale(1.25,.26,.85).translate(100,1.4,37.5);r(_,y)}r(d,It(te.tvStand,.8,.012));for(let y=0;y<3;y++)r(s("tvdoor",{color:3810583,roughness:.4}),He(124.4,125.2,4,32,84+y*41.5,124+y*41.5,.2,1));r(b,It(te.tv,1)),r(b,He(146,160,36,38,130,160,.5));let I=ot(512,300,(y,E,L)=>{let k=y.createLinearGradient(0,0,E,L);k.addColorStop(0,"#2d6fa6"),k.addColorStop(1,"#8ad0dc"),y.fillStyle=k,y.fillRect(0,0,E,L),y.fillStyle="#c63c28",y.fillRect(0,L-74,E,74),y.fillStyle="#fff",y.font='bold 34px "BIZ UDPGothic",sans-serif',y.fillText("今日の特集 実家の冷蔵庫",18,L-26),y.font='bold 50px "BIZ UDPGothic",sans-serif',y.fillText("賞味期限は",24,80),y.fillText("飾りなのか",24,142),y.fillStyle="rgba(255,255,255,.9)",y.beginPath(),y.ellipse(404,150,62,70,0,0,7),y.fill(),y.fillStyle="#23262d",y.beginPath(),y.arc(380,130,7,0,7),y.arc(428,130,7,0,7),y.fill(),y.fillRect(388,172,34,5)});a(te.tv.z1-te.tv.z0-4,te.tv.y1-te.tv.y0-4,te.tv.x0-.15,(te.tv.y0+te.tv.y1)/2,(te.tv.z0+te.tv.z1)/2,-Math.PI/2,I,{em:.9,rough:.2});let O=te.shelf;r(d,He(O.x0,O.x1,O.y0,O.y1,O.z0,O.z0+3,.5,1,.012)),r(d,He(O.x0,O.x1,O.y0,O.y1,O.z1-3,O.z1,.5,1,.012)),r(d,He(O.x0,O.x1-4,O.y0,O.y1,O.z0,O.z1,.5,1,.012)),r(d,He(O.x0,O.x1+3,O.y1-2,O.y1,O.z0-1,O.z1+1,.5,1,.012));for(let y of[0,...ah])r(d,He(O.x1-4,O.x1+7,y===0?0:y-2,y===0?4:y,O.z0,O.z1,.4,1,.012));let S=["実家の片づけ方","痩せる呼吸","確定申告の本","嫁と姑","男の料理","釣り入門","家庭の医学","毒舌占い","腰痛を治す","英会話三日目","定年のあとに","健康マット教本","宇宙人と結婚した","人生の棚卸し","老眼と生きる","電話の断り方","世界の猫","猫の気持ち","おとんの俳句","節約大全","町内会の掟","聖書","株で失敗","ムー","地図帳"],B=["#7a2e24","#27456b","#2f5b3c","#b5923f","#ddd4bd","#3b3a3f","#8d5a2e","#5b2e55","#c9c0a9","#46708a","#a3412f"],F=ot(1024,256,(y,E,L)=>{y.fillStyle="#20140c",y.fillRect(0,0,E,L);let k=0;for(;k<E;){let Z=26+Me()*26,re=L*(.72+Me()*.28),me=B[Math.floor(Me()*B.length)];y.fillStyle=me,y.fillRect(k,L-re,Z-1.5,re),y.fillStyle="rgba(0,0,0,.2)",y.fillRect(k+Z-5,L-re,3.5,re),y.fillStyle="rgba(255,255,255,.1)",y.fillRect(k,L-re,3,re);let we=S[Math.floor(Me()*S.length)];y.fillStyle=me==="#ddd4bd"||me==="#c9c0a9"||me==="#b5923f"?"#1f1812":"#f2ead7",y.font=`bold ${Math.min(21,Z*.62)}px "BIZ UDPGothic",sans-serif`,y.textAlign="center";for(let Ce=0;Ce<we.length&&(Ce+1)*21<re-8;Ce++)y.fillText(we[Ce],k+Z/2,L-re+26+Ce*21);k+=Z}});F.wrapS=Hn;let P=[0,...ah];for(let y=0;y<P.length;y++){let E=P[y]+2,L=(P[y+1]??O.y1-2)-2,k=F.clone();k.repeat.set(1,1),k.offset.x=y*.27,k.needsUpdate=!0,a(O.z1-O.z0-6,L-E,O.x1-3.9,(E+L)/2,(O.z0+O.z1)/2,Math.PI/2,k,{rough:.7})}r(x,He(-168,-146,135,150,280,304,.5,1,.012));{let y=s("kokeshi",{color:14795407,roughness:.6});r(y,at(4,5.6,14,-142,142,235,12));let E=new Pt(5,12,10).translate(-142,153,235);r(y,E);let L=new Pt(5.2,12,8,0,Math.PI*2,0,1.6).translate(-142,153.4,235);r(b,L)}r(f,It(te.dining,.8));for(let[y,E]of[[te.dining.x0+5,te.dining.z0+5],[te.dining.x1-5,te.dining.z0+5],[te.dining.x0+5,te.dining.z1-5],[te.dining.x1-5,te.dining.z1-5]])r(f,at(2.4,1.8,50,y,25,E,10));a(te.tissue.x1-te.tissue.x0,te.tissue.y1-te.tissue.y0,(te.tissue.x0+te.tissue.x1)/2,(te.tissue.y0+te.tissue.y1)/2,te.tissue.z1+.1,0,ot(256,140,(y,E,L)=>{y.fillStyle="#e8d8cc",y.fillRect(0,0,E,L),y.fillStyle="#b25f72";for(let k=0;k<12;k++)y.beginPath(),y.arc(Me()*E,Me()*L,7+Me()*8,0,7),y.fill();y.fillStyle="#433",y.font='bold 28px "BIZ UDPGothic",sans-serif',y.textAlign="center",y.fillText("ティッシュ",E/2,L/2+10)})),r(s("tissuebox",{color:15259852,roughness:.75}),It(te.tissue,.4));{let y=new be(new Ms(4,9,4),s("tis",{color:16448250,roughness:1}));y.position.set((te.tissue.x0+te.tissue.x1)/2,te.tissue.y1+3.8,(te.tissue.z0+te.tissue.z1)/2),y.rotation.set(.2,.6,.1),y.scale.set(1.7,1,.3),n.add(y)}let Y=s("tea",{color:4086357,roughness:.35});r(Y,at(4,3.2,8,-42,58,326,14)),r(Y,at(4,3.2,8,-103,58,356,14));{let y=new Pt(9,16,12).scale(1,.85,1).translate(-38,61.5,350);r(s("teapot",{color:4862502,roughness:.4}),y)}r(f,It(te.chairSeat,.8)),r(f,It(te.chairBack,.5));for(let[y,E]of[[te.chairSeat.x0+2,te.chairSeat.z0+2],[te.chairSeat.x1-2,te.chairSeat.z0+2],[te.chairSeat.x0+2,te.chairSeat.z1-2],[te.chairSeat.x1-2,te.chairSeat.z1-2]])r(f,at(1.5,1.2,33,y,16.5,E,8));let J=y=>{let E=(y.x0+y.x1)/2,L=(y.z0+y.z1)/2,k=(y.x1-y.x0)/2;r(b,at(.5,.5,l-y.y1,E,(l+y.y1)/2,L,6));let Z=new qt(k*.35,k,y.y1-y.y0,22,1,!0).translate(E,(y.y0+y.y1)/2,L);r(s("shade",{color:11824188,roughness:.55,side:rt}),Z);let re=new be(new Pt(k*.3,12,8),z);re.position.set(E,y.y0+3,L),n.add(re)};J(te.pendantA),J(te.pendantB);for(let y of[Ko,Zo]){let E=new Pt(30,28,8,0,Math.PI*2,0,Math.PI/2).scale(1,.25,1).rotateX(Math.PI).translate(y.x,l,y.z),L=new be(E,new bt({color:16774621,emissive:16773328,emissiveIntensity:.65,roughness:.6}));n.add(L)}r(_,at(.45,.45,o.x1-o.x0,0,si.y,si.z,6,[0,0,Math.PI/2]));let ee=(y,E,L,k,Z)=>{let re=new Mt(E,L,14,8),me=re.attributes.position;for(let Ce=0;Ce<me.count;Ce++)me.setZ(Ce,Math.sin(me.getX(Ce)*.26+me.getY(Ce)*.14)*1.8+Math.sin(me.getY(Ce)*.3)*1.2);re.computeVertexNormals();let we=new be(re,new bt({map:ot(256,256,y),side:rt,roughness:1,transparent:!0,alphaTest:.5}));we.position.set(k,si.y-L/2,si.z),we.rotation.y=Z,we.castShadow=!0,n.add(we),r(s("peg",{color:3898562,roughness:.4}),He(k-1.2,k+1.2,si.y-2.2,si.y+2.4,si.z-.7,si.z+.7,.3,1))},de=(y,E)=>(L,k,Z)=>{L.fillStyle=y,L.beginPath(),L.moveTo(8,10),L.lineTo(k-8,10),L.lineTo(k-12,90),L.quadraticCurveTo(k-60,120,k/2+26,236),L.lineTo(k/2-26,236),L.quadraticCurveTo(60,120,12,90),L.closePath(),L.fill(),L.fillStyle=E,L.fillRect(8,10,k-16,22),L.strokeStyle="rgba(0,0,0,.25)",L.lineWidth=4,L.beginPath(),L.moveTo(k/2-12,50),L.lineTo(k/2-12,160),L.moveTo(k/2+12,50),L.lineTo(k/2+12,160),L.stroke()};ee(de("#f4f2ea","#c7c2b2"),44,40,-92,.02),ee(de("#2a3f6b","#121c33"),44,40,96,-.04),ee((y,E,L)=>{y.fillStyle="#e8e3d4",y.beginPath(),y.moveTo(70,6),y.lineTo(186,6),y.lineTo(182,150),y.quadraticCurveTo(180,240,90,246),y.quadraticCurveTo(46,244,50,210),y.quadraticCurveTo(70,180,72,150),y.closePath(),y.fill(),y.fillStyle="#b13a32",y.fillRect(70,6,116,18),y.fillStyle="#2e4d7a",y.fillRect(70,30,116,12)},26,44,-30,0),ee((y,E,L)=>{y.fillStyle="#e9b8c6",y.fillRect(40,8,176,240),y.fillStyle="rgba(180,70,90,.4)";for(let k=0;k<40;k++)y.beginPath(),y.arc(40+Me()*176,8+Me()*240,5,0,7),y.fill();y.clearRect(0,0,40,30),y.clearRect(216,0,40,30)},48,62,28,.03);let pe=te.fridge;r(s("fridge",{color:14673126,metalness:.25,roughness:.22}),He(pe.x0,pe.x1,pe.y0,pe.y1,pe.z0,pe.z1,2.6,2)),r(b,He(pe.x0-.2,pe.x1+.2,80,81.2,pe.z0-.2,pe.z1-2,.1,1));let Pe=ot(512,1024,(y,E,L)=>{y.clearRect(0,0,E,L),y.fillStyle="#fbf6df",y.fillRect(70,110,170,210),y.fillStyle="#c8392e",y.beginPath(),y.arc(155,112,16,0,7),y.fill(),y.fillStyle="#322",y.font='bold 22px "Klee One",serif',["牛乳","たまご","ヨーグルト","（賞味期限","　みること）"].forEach((k,Z)=>y.fillText(k,88,168+Z*32)),y.fillStyle="#fff",y.fillRect(280,170,170,130),y.fillStyle="#e8ba2d",y.beginPath(),y.arc(365,172,15,0,7),y.fill(),y.fillStyle="#d36b2b",y.beginPath(),y.arc(365,235,40,0,7),y.fill(),y.fillStyle="#222",y.beginPath(),y.arc(350,228,5,0,7),y.arc(380,228,5,0,7),y.fill(),y.fillStyle="#2d8c5a",y.fillRect(90,620,330,190),y.fillStyle="#fff",y.font='bold 32px "BIZ UDPGothic",sans-serif',y.fillText("ゴミの日",110,672),y.font='bold 26px "BIZ UDPGothic",sans-serif',y.fillText("月木 燃やす",110,720),y.fillText("金 ペットボトル",110,760)});a(pe.x1-pe.x0-6,pe.y1-pe.y0,(pe.x0+pe.x1)/2,(pe.y0+pe.y1)/2,pe.z0-.15,Math.PI,Pe,{alpha:!0,rough:.5}),r(_,He(pe.x0+3,pe.x0+5,84,118,pe.z0-2,pe.z0,.4,1)),r(_,He(pe.x0+3,pe.x0+5,30,76,pe.z0-2,pe.z0,.4,1)),r(x,It(te.fridgeBox,.5,.012));let fe=te.counter;r(m,It(fe,.8,.012)),r(s("top",{color:10133664,metalness:.5,roughness:.3}),He(fe.x0,fe.x1,fe.y1-2,fe.y1+.2,fe.z0-1,fe.z1,.4,1));for(let y=0;y<7;y++){let E=fe.x0+2+y*38.8;r(s("kdoor",{color:14208434,roughness:.4}),He(E,E+37,6,56,fe.z0-.5,fe.z0,.25,1)),r(_,He(E+15,E+23,48,49.2,fe.z0-1.6,fe.z0-.4,.2,1))}r(b,He(-110,-60,64.1,64.5,496,532,.1,1));for(let[y,E]of[[-98,508],[-74,508],[-98,524],[-74,524]])r(s("burner",{color:4934475,roughness:.5}),at(6.5,6.5,.8,y,64.9,E,16));let ke=new qt(9,9,11,22).translate(-74,71,509);r(_,ke),r(_,He(-155,-125,64.1,64.6,496,530,.2,1)),r(_,at(.9,.9,16,-140,72,532,8));{let y=te.cooker,E=new qt(12.5,13,y.y1-y.y0,24).translate((y.x0+y.x1)/2,(y.y0+y.y1)/2,(y.z0+y.z1)/2);r(v,E);let L=new Pt(13,22,8,0,Math.PI*2,0,Math.PI/2).scale(1,.3,1).translate((y.x0+y.x1)/2,y.y1,(y.z0+y.z1)/2);r(T,L)}r(v,It(te.micro,1.6)),r(b,He(te.micro.x0+3,te.micro.x1-12,67,89,te.micro.z0-.3,te.micro.z0,.3,1));let se=te.upper;r(m,It(se,.8,.012));for(let y=0;y<7;y++){let E=se.x0+2+y*38.8;r(s("kdoor",{color:14208434,roughness:.4}),He(E,E+37,se.y0+2,se.y1-2,se.z0-.5,se.z0,.25,1)),r(_,He(E+15,E+23,se.y0+5,se.y0+6,se.z0-1.6,se.z0-.4,.2,1))}r(x,He(-160,-120,150,165,520,538,.4,1,.012)),r(s("bottle",{color:3037754,roughness:.25}),at(3,3,18,-90,159,530,10)),r(s("bottle2",{color:6171678,roughness:.25}),at(3,3,14,-78,157,528,10));let he=te.server;r(v,It(he,2));{let y=new be(new qt(13,13,28,20),new bt({color:9356761,transparent:!0,opacity:.6,roughness:.15}));y.position.set((he.x0+he.x1)/2,he.y1+14,(he.z0+he.z1)/2),n.add(y)}let ce=s("tube",{color:10134699,metalness:.75,roughness:.35});for(let y of[te.hangL,te.hangR]){let E=(y.x0+y.x1)/2,L=(y.z0+y.z1)/2;r(ce,at(1.5,1.5,y.y1,E,y.y1/2,L,10)),r(ce,at(1.5,1.5,40,E,1.5,L,10,[Math.PI/2,0,0]))}r(ce,at(1.5,1.5,44,92,148,120,10,[0,0,Math.PI/2]));for(let[y,E]of[[84,"#54483b"],[100,"#7c3b36"]]){let L=He(y-7,y+7,96,146,118,122,1.2,1);r(s("coat"+E,{color:new Te(E).getHex(),roughness:1}),L)}r(_,at(1.1,1.1,98,79.5,49,270,8)),r(_,at(1.1,1.1,98,128.5,49,270,8)),r(_,at(1,1,52,104,100,264,8,[0,0,Math.PI/2])),r(_,at(1,1,52,104,100,276,8,[0,0,Math.PI/2]));for(let y of[262,278])r(_,at(.9,.9,30,79.5,1,y-0,6,[0,0,0]));r(_,He(76,83,0,1.6,255,285,.4,1)),r(_,He(125,132,0,1.6,255,285,.4,1));let Se=s("ladder",{color:13875534,metalness:.2,roughness:.45});r(Se,It(te.ladderTop,.4));for(let[y,E,L]of[[64,396,408],[64,434,422],[90,396,408],[90,434,422]]){let k=L-E,Z=Math.hypot(k,104),re=Math.atan2(k,104);r(Se,He(y-2,y+2,-Z/2,Z/2,-1,1,.3,1).rotateX(re).translate(0,52,(E+L)/2))}for(let y=1;y<5;y++){let E=y*20,L=E/104;r(Se,He(64,90,E-1,E+1,396+12*L-2,396+12*L+3,.3,1))}r(b,at(10,11,2,-40,1,240,22)),r(b,at(.9,.9,104,-40,54,240,8));{let y=te.lampShade,E=new qt(9,13,y.y1-y.y0,22,1,!0).translate(-40,(y.y0+y.y1)/2,240),L=new be(E,new bt({color:16115652,emissive:16766602,emissiveIntensity:.65,side:rt,roughness:1}));n.add(L)}let xt=te.pot;r(w,at(12,9.5,22,124,11,32,18)),r(s("soil",{color:2892056,roughness:1}),at(11,11,.6,124,20.5,32,18)),r(s("stem",{color:5917227,roughness:1}),at(1.1,1.5,62,124,52,32,8));for(let y=0;y<22;y++){let E=y*2.4,L=40+y*2.4,k=10+y%5*3,Z=new Pt(1,10,6).scale(13,.6,5.5).rotateZ(-.28-y%3*.12).rotateY(E).translate(124+Math.cos(E)*k,L,32-Math.sin(E)*k);r(U,Z)}{let y=te.dumbbell;r(_,at(1.6,1.6,30,(y.x0+y.x1)/2,4.5,276,10,[0,0,Math.PI/2]));for(let E of[y.x0+3,y.x1-3])r(b,at(4.8,4.8,6,E,4.8,276,14,[0,0,Math.PI/2]))}{let y=te.golf,E=67,L=79;r(s("golfbag",{color:2046563,roughness:.55}),at(7,6.4,62,E,31,L,18)),r(s("golfband",{color:13218667,roughness:.4}),at(7.3,7.3,3,E,56,L,18)),r(s("golfband",{}),at(6.8,6.8,2,E,8,L,18));for(let[k,Z,re,me]of[[-3,-2,80,0],[2,-3,86,1],[3,2,76,0],[-2,3,82,1]]){r(_,at(.45,.45,re-40,E+k,40+(re-40)/2,L+Z,6));let we=me?new Pt(2.6,10,8).scale(1,.8,1.3).translate(E+k,re,L+Z):He(E+k-2,E+k+2,re-1.5,re+1,L+Z-2.5,L+Z+2.5,.4,1);r(me?b:_,we)}}{let y=s("carpet",{color:9405812,roughness:1}),E=s("sisal",{color:11966314,roughness:1});r(y,It(te.towerBase,1)),r(y,It(te.towerMid,1)),r(y,It(te.towerTop,1)),r(E,at(4,4,104,51,56,205,14));for(let L=8;L<106;L+=3.2)r(s("sisal2",{color:9992527,roughness:1}),new Gn(4.1,.55,5,16).rotateX(Math.PI/2).translate(51,L,205));r(b,at(.2,.2,18,41,49,196,5));{let L=new Pt(2.2,10,8).scale(1,.8,1.5).translate(41,39,196);r(s("mouse",{color:10132122,roughness:1}),L)}}{let y=s("ironpad",{map:ot(256,128,(L,k,Z)=>{L.fillStyle="#cfd7dc",L.fillRect(0,0,k,Z),L.strokeStyle="#8fa4b5",L.lineWidth=5;for(let re=0;re<9;re++)L.beginPath(),L.moveTo(re*32,0),L.lineTo(re*32-40,Z),L.stroke()},{repeat:!0}),roughness:1});r(y,It(te.ironBoard,1.2,.025)),r(_,It(te.ironLegA,.4)),r(_,It(te.ironLegB,.4));let E=new Pt(1,14,8).scale(6,3,11).translate(48,62,342);r(v,E)}let lt=ot(256,256,(y,E,L)=>{y.fillStyle="#f5efdf",y.beginPath(),y.arc(E/2,L/2,124,0,7),y.fill(),y.lineWidth=10,y.strokeStyle="#4b3423",y.stroke(),y.fillStyle="#2a2018",y.font='bold 26px "BIZ UDPGothic",sans-serif',y.textAlign="center",y.textBaseline="middle";for(let k=1;k<=12;k++){let Z=k/12*6.283;y.fillText(k,E/2+Math.sin(Z)*96,L/2-Math.cos(Z)*96)}y.strokeStyle="#2a2018",y.lineWidth=8,y.lineCap="round",y.beginPath(),y.moveTo(E/2,L/2),y.lineTo(E/2+44,L/2-30),y.moveTo(E/2,L/2),y.lineTo(E/2-20,L/2-80),y.stroke()}),Ct=a(52,52,80,125,.3,0,lt);Ct.material.transparent=!0,Ct.material.alphaTest=.5;let nn=ot(256,360,(y,E,L)=>{y.fillStyle="#fbf8ee",y.fillRect(0,0,E,L),y.fillStyle="#b5352a",y.fillRect(0,0,E,76),y.fillStyle="#fff",y.font='bold 44px "BIZ UDPGothic",sans-serif',y.textAlign="center",y.fillText("11月",E/2,56),y.fillStyle="#333",y.font='bold 22px "BIZ UDPGothic",sans-serif';for(let k=0;k<30;k++)y.fillText(k+1,28+k%7*33,112+Math.floor(k/7)*42);y.strokeStyle="#c33",y.lineWidth=4,y.beginPath(),y.arc(128,196,18,0,7),y.stroke(),y.fillStyle="#c33",y.font='bold 18px "Klee One",serif',y.fillText("息子 帰省",128,322)});a(34,48,o.x0+.3,112,34,Math.PI/2,nn);let De=y=>ot(200,160,(E,L,k)=>{E.fillStyle="#39281a",E.fillRect(0,0,L,k),E.fillStyle=y,E.fillRect(14,14,L-28,k-28),E.fillStyle="rgba(40,30,20,.75)";for(let Z=0;Z<3;Z++)E.beginPath(),E.arc(60+Z*40,74,15,0,7),E.fill(),E.fillRect(46+Z*40,88,28,40)});a(30,24,o.x0+.3,112,180,Math.PI/2,De("#9fb7b3")),a(30,24,o.x0+.3,118,145,Math.PI/2,De("#c7ad8a")),a(26,20,o.x0+.3,104,118,Math.PI/2,De("#a7a48a"));let ht=s("hair",{color:1511950,roughness:.5});for(let y=0;y<26;y++){let E=o.x0+14+Me()*(o.x1-o.x0-28),L=10+Me()*470,k=[],Z=Me()*6.28,re=E,me=L;for(let we=0;we<6;we++)k.push(new R(re,.25,me)),Z+=(Me()-.5)*1.1,re+=Math.cos(Z)*5,me+=Math.sin(Z)*5;r(ht,new Ts(new Ss(k),10,.13,4))}let Ye=s("crumb",{color:13210952,roughness:.95});for(let y=0;y<36;y++){let E=new sa(.5+Me()*1.3,0).scale(1,.55+Me()*.4,.9).rotateY(Me()*6).translate(-90+Me()*120,.5,60+Me()*170);r(Ye,E)}let Yt=s("band",{color:12029269,roughness:.6});for(let[y,E]of[[30,120],[-90,300],[110,340],[-20,440]])r(Yt,new Gn(6.5,.35,5,22).rotateX(Math.PI/2).scale(1,1,.72).translate(y,.32,E));let yt=ot(128,128,(y,E,L)=>{y.clearRect(0,0,E,L),y.fillStyle="rgba(165,156,142,.0)";let k=y.createRadialGradient(64,64,6,64,64,56);k.addColorStop(0,"rgba(170,160,146,.85)"),k.addColorStop(.7,"rgba(170,160,146,.45)"),k.addColorStop(1,"rgba(170,160,146,0)"),y.fillStyle=k,y.fillRect(0,0,E,L);for(let Z=0;Z<420;Z++){let re=Me()*6.28,me=Math.pow(Me(),.6)*54;y.strokeStyle=`rgba(190,182,168,${.16+Me()*.22})`,y.lineWidth=.7,y.beginPath();let we=64+Math.cos(re)*me,Ce=64+Math.sin(re)*me;y.moveTo(we,Ce),y.lineTo(we+(Me()-.5)*26,Ce+(Me()-.5)*26),y.stroke()}}),Ft=new gs({map:yt,transparent:!0,depthWrite:!1});for(let[y,E,L,k]of[[-92,4.5,26,10],[152,4,250,8],[-155,4,325,10],[10,3.6,470,8],[110,3.6,462,9],[140,139,492,10],[118,138,500,7],[-30,153,530,10],[40,3,225,6]]){let Z=new ys(Ft);Z.position.set(y,E,L),Z.scale.setScalar(k),n.add(Z)}let dt=-64,sn=76,$t=60,Un=215,An=Pi.rug(),Rn=new be(new Mt(sn-dt,Un-$t),new bt({map:An,roughness:1}));Rn.rotation.x=-Math.PI/2,Rn.position.set((dt+sn)/2,.25,($t+Un)/2),Rn.receiveShadow=!0,n.add(Rn);let ss=ba?36e3:6e4,X=new Float32Array(ss*9),Na=new Float32Array(ss*9);{let y=An.image,E=y.getContext("2d").getImageData(0,0,y.width,y.height).data,L=k=>Math.pow(k/255,2.2);for(let k=0;k<ss;k++){let Z=dt+Me()*(sn-dt),re=$t+Me()*(Un-$t),me=.45+Me()*.45,we=Me()*6.28,Ce=.05+Me()*.035,Ue=Math.cos(we)*Ce,nt=Math.sin(we)*Ce,Bt=(Me()-.5)*.5,Dt=(Me()-.5)*.5;X.set([Z-Ue,.22,re-nt,Z+Ue,.22,re+nt,Z+Bt,.22+me,re+Dt],k*9);let Tt=Math.floor((Z-dt)/(sn-dt)*(y.width-1)),et=Math.floor((re-$t)/(Un-$t)*(y.height-1)),_t=(et*y.width+Tt)*4,kt=.8+Me()*.5,Be=L(E[_t])*kt,Ge=L(E[_t+1])*kt,mn=L(E[_t+2])*kt;Na.set([Be*.8,Ge*.8,mn*.8,Be*.8,Ge*.8,mn*.8,Be*1.15,Ge*1.15,mn*1.15],k*9)}}let rs=new Ze;rs.setAttribute("position",new it(X,3)),rs.setAttribute("color",new it(Na,3)),rs.computeVertexNormals();for(let y=0,E=rs.attributes.normal;y<E.count;y++)E.setXYZ(y,0,1,0);let Lt=new Eo({vertexColors:!0,side:rt});Lt.onBeforeCompile=y=>{y.fragmentShader=y.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (length(vViewPosition) < 4.0) discard;`)};let za=new be(rs,Lt);za.frustumCulled=!1,n.add(za);let Da=y=>ot(256,128,(E,L,k)=>{E.fillStyle="#00a65a",E.fillRect(0,0,L,k),E.strokeStyle="#f4fff6",E.lineWidth=6,E.strokeRect(5,5,L-10,k-10),E.fillStyle="#f4fff6",Fv(E,72,66,1.5),y&&(E.beginPath(),E.moveTo(146,42),E.lineTo(196,42),E.lineTo(196,24),E.lineTo(236,64),E.lineTo(196,104),E.lineTo(196,86),E.lineTo(146,86),E.closePath(),E.fill())}),al=Da(!0);for(let y of W0){let E=a(26,13,y.x,y.y,y.z,y.ry,al,{em:1.15});E.material.fog=!1,E.material.side=rt}let as={x:128,z:538},ol=ot(256,400,(y,E,L)=>{y.fillStyle="#6c7178",y.fillRect(0,0,E,L),y.fillStyle="#8b9199",y.fillRect(14,14,E-28,L-14),y.fillStyle="#d9dce0",y.fillRect(E-62,L*.52,38,12),y.fillStyle="#c6332b",y.font='bold 36px "BIZ UDPGothic",sans-serif',y.textAlign="center",y.fillText("開けるな",E/2,120),y.font='bold 22px "BIZ UDPGothic",sans-serif',y.fillText("（おかん）",E/2,158)}),Ua=a(26,34,as.x,152,as.z-.5,Math.PI,ol,{rough:.5}),Oa=a(36,18,as.x,179,as.z-.8,Math.PI,Da(!1),{em:1.5});Oa.material.fog=!1,Oa.position.y=175;let Mr=new $s(3530890,260,60,1.6);Mr.position.set(as.x,170,524),n.add(Mr);let On=new be(new ni(9,15,40),new st({color:3530890,transparent:!0,opacity:.75,side:rt,depthWrite:!1,fog:!1}));On.rotation.x=-Math.PI/2,On.position.set(128,135.25,516),n.add(On);let Fa=ot(64,256,(y,E,L)=>{let k=y.createLinearGradient(0,0,0,L);k.addColorStop(0,"rgba(255,240,205,.17)"),k.addColorStop(1,"rgba(255,240,205,0)"),y.fillStyle=k,y.fillRect(0,0,E,L),y.globalCompositeOperation="destination-in";let Z=y.createLinearGradient(0,0,E,0);Z.addColorStop(0,"rgba(0,0,0,0)"),Z.addColorStop(.5,"#000"),Z.addColorStop(1,"rgba(0,0,0,0)"),y.fillStyle=Z,y.fillRect(0,0,E,L)}),ll=new st({map:Fa,transparent:!0,depthWrite:!1,blending:Ji,side:rt,fog:!1});for(let[y,E]of[[376,26],[395,14]]){let L=new be(new Mt(E,300),ll);L.position.set(70,72,y),L.rotation.z=Math.PI/2-.62,L.rotation.order="ZXY",n.add(L);let k=L.clone();k.rotation.x=Math.PI/2,n.add(k)}let Ba=ba?420:800,Ns=new Ze,zs=new Float32Array(Ba*3);for(let y=0;y<Ba*3;y+=3)zs[y]=o.x0+Me()*(o.x1-o.x0),zs[y+1]=Me()*l,zs[y+2]=Me()*o.z1;Ns.setAttribute("position",new it(zs,3));let os=new vi(Ns,new _s({color:16773583,size:.34,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0}));os.frustumCulled=!1,n.add(os);let cl=ot(128,128,(y,E,L)=>{let k=y.createRadialGradient(64,64,18,64,64,64);k.addColorStop(0,"rgba(20,12,4,.55)"),k.addColorStop(.6,"rgba(20,12,4,.34)"),k.addColorStop(1,"rgba(20,12,4,0)"),y.fillStyle=k,y.fillRect(0,0,E,L)}),hl=new st({map:cl,transparent:!0,depthWrite:!1,fog:!1}),C=[];for(let y of["sofaBase","tvStand","shelf","counter","fridge","server","pot","amazon","table","dining"]){let E=te[y],L=y==="table"||y==="dining"?2:16,k=new Mt(E.x1-E.x0+L*2,E.z1-E.z0+L*2).rotateX(-Math.PI/2).translate((E.x0+E.x1)/2,.08,(E.z0+E.z1)/2);C.push(k)}let q=new be(sp(C),hl);n.add(q);let Q=0;for(let[y,E]of t){for(let k of E){for(let Z of Object.keys(k.attributes))["position","normal","uv"].includes(Z)||k.deleteAttribute(Z);k.attributes.uv||k.setAttribute("uv",new it(new Float32Array(k.attributes.position.count*2),2))}let L=new be(sp(E),y);L.castShadow=!0,L.receiveShadow=!0,n.add(L),Q++}return{goalRing:On,motes:os,exitLight:Mr,exitDoor:Ua,draws:Q}}function Fv(n,e,t,i){n.save(),n.translate(e,t),n.scale(i,i),n.lineCap="round",n.lineJoin="round",n.strokeStyle=n.fillStyle,n.lineWidth=8,n.beginPath(),n.arc(9,-27,7,0,7),n.fill(),n.beginPath(),n.moveTo(5,-16),n.lineTo(-2,4),n.lineTo(14,13),n.lineTo(10,30),n.moveTo(-2,4),n.lineTo(-12,16),n.lineTo(-26,16),n.moveTo(4,-14),n.lineTo(17,-7),n.lineTo(26,-13),n.moveTo(4,-14),n.lineTo(-10,-13),n.lineTo(-17,-2),n.stroke(),n.restore()}var hh={poses:{normal:{w:91.93,h:130.74,hand:[.9638,.1619]},search:{w:106.63,h:122.32,hand:[.9688,.1731]},spot:{w:93.11,h:147.01,hand:[.9663,.144]},angry:{w:95.85,h:144.27,hand:[.9652,.1508]},win:{w:94.48,h:131.72,hand:[.973,.1607]},phone:{w:102.71,h:131.14,hand:[.9695,.1644]}}};var Bv={wreckRepairTo:.55},le={radius:.42,height:1.75,walk:10,back:4,accel:38,airAccel:9,turn:3.4,airTurn:1.8,gravity:21,jump:8.6,coyote:.12,stepUp:1.3,climb:11,crawl:5,crawlDown:7,slipDown:5,wireRange:75,wireMinUp:3,pump:13,steerAssist:2.2,reel:4,reelK:.14,reelMax:12,reelVmax:26,minRope:6,swingLow:6,zip:18,zipAcc:22,zipCd:1,zipExit:7.5,groundWireAcc:48,groundWireBoost:9,groundWireRelease:4,groundWireKick:4,groundWireHop:3.5,groundWireMaxT:3,lowAnchor:16,lowPull:30,lowPenalty:1.2,lowHop:8.5,lowExit:12,maxSpeed:38,slack:1.12,releaseVyMax:9,drag:.012,releaseKick:1.2,downSec:3.2,waterY:-1.2,hitSpeed:7,stompVy:7,stompBounce:11,hideCombo:6,hideCd:20,hideSec:4,sneak:2.6,netSec:2.6,netMash:.12,pitSec:2.2,pitMash:.15,pitDepth:2.2},Bp=(n,e,t)=>n<e?e:n>t?t:n;function dh({id:n,name:e="",spawn:t,paint:i=null,bot:s=!1}){return{id:n,name:e,bot:s,isRunner:!0,carId:"runner",paint:i,levels:{},stats:{durability:1,maxSpeed:le.maxSpeed,boostCap:1,mass:.2},x:t.x,y:t.y||0,z:t.z,vx:0,vy:0,vz:0,yaw:t.yaw||0,pitch:0,roll:0,wp:0,wr:0,grounded:!0,airTime:0,lastAir:0,surf:"road",coyote:0,boost:0,boostLock:!1,boosting:!1,heat:0,overheat:!1,zipCd:0,zipping:!1,zipPrev:!1,dmg:{body:1,engine:1,tires:1,susp:1,cool:1},dents:[],flat:!1,wreck:0,freeze:0,stun:0,falling:!1,knock:!1,respawnPoint:{x:t.x,y:t.y||0,z:t.z,yaw:t.yaw||0},safeHist:[],safeT:0,rope:null,wirePrev:!1,jumpPrev:!1,combo:0,swings:0,climbing:null,onRoof:!1,roofTime:0,groundY:0,net:0,pit:0,pitAt:null,sneaking:!1,sneakPrev:!1,breaks:0,maxAir:0,t:0,drifting:!1,slip:0,repairing:!1,events:[]}}function kv(n){return Math.hypot(n.vx,n.vz)}function Z0(n,e,t){return n.nearby(e,t).filter(i=>(!i.def||n.solidProps)&&!i.slab&&i.y1!=null&&!i.noHit)}function J0(n,e,t){let i=Math.cos(n.yaw||0),s=Math.sin(n.yaw||0),r=e-n.cx,a=t-n.cz;return{u:r*i-a*s,v:r*s+a*i,c:i,s}}function hr(n,e,t,i){let s=n.groundAt(e,t,i+.5).h,r=null;for(let a of Z0(n,e,t)){if(a.y1>i+.6||a.y1<=s)continue;let o=J0(a,e,t);if(Math.abs(o.u)<=a.hw+.15&&Math.abs(o.v)<=a.hl+.15){let l=a.gable?a.y1+a.gable*Math.max(0,1-(a.ridgeX?Math.abs(o.v)/a.hl:Math.abs(o.u)/a.hw)):a.y1;l<=i+.6&&(s=Math.max(s,l),r=a)}}return{h:s,roof:r}}function $0(n,e,t,i,s,r,a,o){let l=Math.cos(n.yaw||0),c=Math.sin(n.yaw||0),h=(e-n.cx)*l-(i-n.cz)*c,u=(e-n.cx)*c+(i-n.cz)*l,p=s*l-a*c,d=s*c+a*l,f=0,m=o;for(let[x,g,v,_]of[[h,p,-n.hw,n.hw],[t,r,n.y0,n.y1+(n.gable||0)],[u,d,-n.hl,n.hl]]){if(Math.abs(g)<1e-9){if(x<v||x>_)return-1;continue}let b=(v-x)/g,T=(_-x)/g;if(b>T){let M=b;b=T,T=M}if(b>f&&(f=b),T<m&&(m=T),f>m)return-1}return f}function Q0(n){return n._anchorBoxes||(n._anchorBoxes=n.colliders.filter(e=>!e.slab&&e.y1!=null&&(e.y1-e.y0>6||e.small)&&!e.noAnchor&&(e.kind==="building"||e.kind==="bound"))),n._anchorBoxes}function eg(n,e,t,i,s,r,a,o=400,l=0){let c=-1;for(let u of Q0(n)){let p=$0(u,e,t,i,s,r,a,o);p>0&&(c<0||p<c)&&(c=p)}let h=c<0?null:{x:e+s*c,y:t+r*c,z:i+a*c};if(n.poles)for(let u of n.poles){let p=u.x-e,d=u.z-i,f=u.y1-.4-t,m=p*s+f*r+d*a;if(m<=l||m>o||c>0&&m>c)continue;let x=e+s*m-u.x,g=t+r*m-(u.y1-.4),v=i+a*m-u.z;x*x+v*v<(u.low?2.25:6.25)&&g>-(u.y1-u.y0)*.6&&g<(u.low?1:2.5)&&(c=m,h={x:u.x,y:u.y1-.4,z:u.z,pole:!0,low:!!u.low})}return h}var Hv=[58,48,68,40,76,32],Gv=[0,18,-18,36,-36,54,-54,70,-70,84,-84];function Jo(n,e,t=null){let i=Math.hypot(e.vx,e.vz),s=Math.sin(t??e.yaw),r=Math.cos(t??e.yaw);if(i>6&&t==null){s=s*(1-.45)+e.vx/i*.45,r=r*(1-.45)+e.vz/i*.45;let f=Math.hypot(s,r);s/=f,r/=f}let a=e.x,o=e.y+1.5,l=e.z,h=Q0(n).filter(d=>Math.abs(d.cx-a)<le.wireRange+d.hw&&Math.abs(d.cz-l)<le.wireRange+d.hl&&d.y1>o+le.wireMinUp),u=null,p=-1e9;for(let d of Gv){let f=Math.atan2(s,r)+d*Math.PI/180,m=Math.sin(f),x=Math.cos(f);for(let g of Hv){let v=g*Math.PI/180,_=m*Math.cos(v),b=Math.sin(v),T=x*Math.cos(v),M=-1;for(let D of h){let G=$0(D,a,o,l,_,b,T,le.wireRange);G>0&&(M<0||G<M)&&(M=G)}if(M<0)continue;let w=o+b*M,U=M*Math.cos(v);if(w<o+le.wireMinUp||U<5)continue;let z=-Math.abs(d)*.012-Math.abs(g-56)*.04-Math.abs(M-28)*.05-(M>55?(M-55)*.1:0)-(w<le.lowAnchor?le.lowPenalty:0);z>p&&(p=z,u={x:a+_*M,y:w,z:l+T*M,len:M})}}if(n.poles){let d=Math.atan2(s,r);for(let f of n.poles){let m=f.x-a,x=f.z-l,g=Math.hypot(m,x),v=f.y1-.4;if(g<5||g>le.wireRange||v<o+le.wireMinUp)continue;let _=(Math.atan2(m,x)-d)*180/Math.PI;for(;_>180;)_-=360;for(;_<-180;)_+=360;if(Math.abs(_)>84)continue;let b=Math.hypot(g,v-o),T=Math.atan2(v-o,g)*180/Math.PI;if(b>le.wireRange)continue;let M=-Math.abs(_)*.012-Math.abs(T-56)*.04-Math.abs(b-28)*.05+.15-(v<le.lowAnchor&&f.town?le.lowPenalty:0);M>p&&(p=M,u={x:f.x,y:v,z:f.z,len:b,pole:!0})}}return u}function tg(n,e=null){let t=n.safeHist,i=e||(t.length>=4?t[Math.max(0,t.length-8)]:n.respawnPoint);n.x=i.x,n.z=i.z,n.y=i.y||0,n.vx=n.vy=n.vz=0,n.yaw=i.yaw||n.yaw,n.rope=null,n.climbing=null,n.stun=0,n.falling=!1,n.grounded=!0,n.airTime=0,n.freeze=.5,n.safeHist=[],n.events.push({t:"respawn",repair:!1})}function ph(n,e,t,i){n.t+=t,n.repairing=!1,n.boosting=!1;let s=n.events;if(n.wreck>0){n.wreck-=t,n.rope=null,n.climbing=null,uh(n,0,t,i,!0),n.vx*=.9,n.vz*=.9,n.wreck<=0&&(n.wreck=0,n.dmg.body=Math.max(n.dmg.body,Bv.wreckRepairTo),n.freeze=.4,s.push({t:"respawn",repair:!0}));return}if(n.freeze>0){n.freeze-=t,n.rope=null,uh(n,0,t,i,!0),n.vx*=.8,n.vz*=.8;return}if(e.respawn){tg(n);return}let r=!!e.jump,a=!!e.wire,o=r&&!n.jumpPrev||a&&!n.wirePrev;if(n.net>0){n.jumpPrev=r,n.wirePrev=a,o&&(n.net-=le.netMash,s.push({t:"struggle"})),n.net-=t,n.rope=null,n.climbing=null,uh(n,0,t,i,!0),n.grounded&&(n.vx*=.85,n.vz*=.85),n.net<=0&&(n.net=0,s.push({t:"netFree"}));return}if(n.pit>0){n.jumpPrev=r;let M=a&&!n.wirePrev;n.wirePrev=a,n.pit-=t,r&&o&&(n.pit-=le.pitMash,s.push({t:"struggle"})),n.vx=n.vz=0,n.vy=0,n.x=n.pitAt.x+(n.x-n.pitAt.x)*.9,n.z=n.pitAt.z+(n.z-n.pitAt.z)*.9,n.y=n.pitAt.y-le.pitDepth,n.grounded=!0;let w=null;if(M&&(n.y=n.pitAt.y,w=Jo(i,n),n.y=n.pitAt.y-le.pitDepth,w||s.push({t:"wireMiss"})),w||n.pit<=0){if(n.pit=0,n.y=n.pitAt.y+.1,n.vy=w?le.jump*1.1:le.jump,n.grounded=!1,w){let U=Math.hypot(w.x-n.x,w.y-(n.y+1.2),w.z-n.z);n.rope={x:w.x,y:w.y,z:w.z,len:Math.max(le.minRope,U*.9),t:0},n.combo=1,s.push({t:"wire",x:w.x,y:w.y,z:w.z,combo:1})}s.push({t:"pitOut",wire:!!w})}return}let l=!!e.sneak;l&&!n.sneakPrev&&n.grounded&&n.stun<=0&&(n.sneaking=!n.sneaking,s.push({t:"sneak",on:n.sneaking})),n.sneakPrev=l;let c=e.throttle||0,h=e.brake||0,u=e.steer||0,p=!!e.jump,d=!!e.wire,f=p&&!n.jumpPrev,m=d&&!n.wirePrev;n.jumpPrev=p,n.wirePrev=d,n.stun>0&&(n.stun-=t,c=h=u=0),n.zipping=!1,n.zipCd=0;let x=n.stun>0||n.climbing?null:e.moveDir;if(x){let w=Math.atan2(x.x,x.z)-n.yaw;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;let U=(n.grounded?le.turn:le.airTurn)*4*t;n.yaw+=Math.max(-U,Math.min(U,w)),n.grounded&&(c*=Math.max(.15,Math.cos(Math.min(Math.abs(w),Math.PI/2)))),u=0}let g=(n.grounded?le.turn:n.rope?le.airTurn*1.2:le.airTurn)*u;n.yaw-=g*t;let v=Math.sin(n.yaw),_=Math.cos(n.yaw),b=x?x.x:v,T=x?x.z:_;if(m&&n.stun<=0)if(n.rope)cr(n,!0);else if(e.wireAt&&e.wireAt.low){let M=e.wireAt,w=Math.hypot(M.x-n.x,M.y-(n.y+1.2),M.z-n.z)||1;if(w>le.wireRange)s.push({t:"wireMiss",far:!0,x:M.x,y:M.y,z:M.z,d:w});else{n.sneaking=!1,n.climbing=null,n.grounded&&(n.vy=Math.max(n.vy,le.jump),n.grounded=!1,n.y+=.05,s.push({t:"jump"})),n.rope={x:M.x,y:M.y,z:M.z,len:w,t:0,ground:!0,low:!0},n.swings++,n.vx+=(M.x-n.x)/w*le.groundWireBoost,n.vz+=(M.z-n.z)/w*le.groundWireBoost;let U=Math.hypot(n.vx,n.vy,n.vz);if(U>le.maxSpeed){let z=le.maxSpeed/U;n.vx*=z,n.vy*=z,n.vz*=z}s.push({t:"wire",ground:!0,low:!0,x:M.x,y:M.y,z:M.z,combo:n.combo})}}else if(e.wireAt&&e.wireAt.ground){let M=e.wireAt,w=Math.hypot(M.x-n.x,M.y-(n.y+1.2),M.z-n.z);if(n.grounded||n.climbing||w>le.wireRange||M.y>n.y-1)s.push({t:"wireMiss",ground:!0,far:w>le.wireRange,x:M.x,y:M.y,z:M.z,d:w});else{n.rope={x:M.x,y:M.y,z:M.z,len:w,t:0,ground:!0},n.swings++;let U=(M.x-n.x)/w,z=(M.y-(n.y+1.2))/w,D=(M.z-n.z)/w;n.vx+=U*le.groundWireBoost,n.vy+=z*le.groundWireBoost,n.vz+=D*le.groundWireBoost;let G=Math.hypot(n.vx,n.vy,n.vz);if(G>le.maxSpeed){let H=le.maxSpeed/G;n.vx*=H,n.vy*=H,n.vz*=H}s.push({t:"wire",ground:!0,x:M.x,y:M.y,z:M.z,combo:n.combo})}}else{n.sneaking=!1;let M=n.grounded;n.grounded&&(n.vy=Math.max(n.vy,le.jump*.85),n.grounded=!1,n.y+=.05,s.push({t:"jump"}));let w=null,U=e.wireAt,z=!1;if(U){let D=Math.hypot(U.x-n.x,U.y-(n.y+1.5),U.z-n.z);D<=le.wireRange&&U.y>n.y+2?w={x:U.x,y:U.y,z:U.z,len:D}:(w=Jo(i,n,Math.atan2(U.x-n.x,U.z-n.z)),z=!w)}if(!w&&!z&&(w=Jo(i,n,e.wireYaw)),!w&&z&&(s.push({t:"wireMiss",far:!0,x:U.x,y:U.y,z:U.z}),w=void 0),w){let D=Math.hypot(w.x-n.x,w.y-(n.y+1.2),w.z-n.z),G=hr(i,n.x,n.z,n.y).h+le.swingLow,H=Math.max(le.minRope,w.y-(G+1.2)),j=Math.min(H,D*le.slack,le.wireRange);n.rope={x:w.x,y:w.y,z:w.z,len:j,t:0},j<D&&(n.rope.len=D,n.rope.pull=j),n.climbing=null;let V=kv(n);V<12&&(n.vx+=v*(12-V),n.vz+=_*(12-V)),n.combo=M?1:n.combo+1,n.swings++,n.bestCombo=Math.max(n.bestCombo||0,n.combo),s.push({t:"wire",x:w.x,y:w.y,z:w.z,combo:n.combo})}else if(w===null&&(s.push({t:"wireMiss"}),n.climbing)){let D=n.climbing;n.climbing=null,n.vy=le.jump*.7,n.vx=D.nx*6,n.vz=D.nz*6,s.push({t:"jump",off:!0})}}if(f&&n.climbing){let M=n.climbing;n.climbing=null,n.vy=le.jump*.7,n.vx=M.nx*6,n.vz=M.nz*6,s.push({t:"jump",off:!0})}else f&&n.stun<=0&&(n.grounded||n.coyote>0)&&!n.rope?(n.sneaking=!1,n.vy=le.jump,n.grounded=!1,n.coyote=0,n.y+=.05,s.push({t:"jump"})):f&&n.rope&&cr(n,!0);if(n.climbing){let M=n.climbing,w=e.wallY!=null?e.wallY:c-h,U=e.wallX!=null?e.wallX:u;if(n.stun>0)n.climbing=null,n.vy=Math.min(n.vy,2),n.vx+=M.nx*3,n.vz+=M.nz*3;else{let z=M.nz,D=-M.nx;n.vy=(w>0?le.climb*(M.slip||n.climbMul||1):le.crawlDown)*w,M.slip&&w<=0&&(n.vy=-le.slipDown),n.vx=-M.nx*2+z*U*le.crawl,n.vz=-M.nz*2+D*U*le.crawl,n.yaw=Math.atan2(-M.nx,-M.nz),M.lat=Math.abs(U)>.1,w<0&&n.y<=n.groundY+.05?n.climbing=null:n.y>=M.top-.2&&w>0&&(n.climbing=null,n.y=M.top+.05,n.vy=3.5,n.vx=-M.nx*5,n.vz=-M.nz*5,s.push({t:"vault"}))}}else if(n.grounded){let M=(c>0?(n.sneaking?le.sneak:le.walk)*c:h>0?-le.back*(n.sneaking?.5:1):0)*(n.speedMul||1),w=n.vx*v+n.vz*_,U=n.vx*_-n.vz*v,z=w+Bp(M-w,-le.accel*t*(h>0&&w>0?1.6:1),le.accel*t),D=U*Math.max(0,1-14*t);n.vx=v*z+_*D,n.vz=_*z-v*D}else if(c>0&&(n.vx+=b*le.airAccel*c*t,n.vz+=T*le.airAccel*c*t),h>0&&(n.vx*=1-.8*t,n.vz*=1-.8*t),n.rope&&!n.rope.ground){c>0&&n.vy<2&&(n.vx+=b*le.pump*t,n.vz+=T*le.pump*t);let M=Math.hypot(n.vx,n.vz);if(M>3){let w=Math.min(1,le.steerAssist*t),U=n.vx/M*(1-w)+b*w,z=n.vz/M*(1-w)+T*w,D=Math.hypot(U,z)||1;n.vx=U/D*M,n.vz=z/D*M}}n.boosting=!1,uh(n,c,t,i,!1),n.grounded&&n.y>le.waterY+.5&&(n.safeT+=t,n.safeT>.3&&(n.safeT=0,n.safeHist.push({x:n.x,y:n.y,z:n.z,yaw:n.yaw}),n.safeHist.length>14&&n.safeHist.shift()))}function Fp(n,e=!0){if(!n.rope)return;let t=Math.hypot(n.vx,n.vz);if(n.rope.low?t>le.lowExit&&(n.vx*=le.lowExit/t,n.vz*=le.lowExit/t):t>.5&&(n.vx+=n.vx/t*le.groundWireKick,n.vz+=n.vz/t*le.groundWireKick),e)n.vy=Math.max(n.vy,n.rope.low?le.lowHop:le.groundWireHop);else{let i=Math.max(0,-n.vy-6),s=Math.hypot(n.vx,n.vz);n.vy=Math.min(Math.max(n.vy,-6),0),s>.5&&i>0&&(n.vx+=n.vx/s*i*.5,n.vz+=n.vz/s*i*.5)}n.rope=null,n.zipping=!1,n.events.push({t:"unwire",auto:!1,ground:!0})}function cr(n,e){n.rope&&(n.rope=null,n.zipping=!1,n.vy>-4&&(n.vy+=le.releaseKick),n.zipExit||(n.vy=Math.min(n.vy,le.releaseVyMax)),n.events.push({t:"unwire",auto:!e}))}function uh(n,e,t,i,s){let r=le.radius;if(n.climbing||(n.vy-=le.gravity*t),!n.grounded){let f=1-le.drag*t*Math.hypot(n.vx,n.vy,n.vz)*.1;n.vx*=f,n.vz*=f}let a=Math.hypot(n.vx,n.vy,n.vz);if(a>le.maxSpeed){let f=le.maxSpeed/a;n.vx*=f,n.vy*=f,n.vz*=f}let o=n.x,l=n.y,c=n.z;if(n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rope&&n.rope.ground){let f=n.rope;f.t+=t;let m=f.x-n.x,x=f.y-(n.y+1.2),g=f.z-n.z,v=Math.hypot(m,x,g)||1,_=(n.vx*m+n.vy*x+n.vz*g)/v,b=n.y-hr(i,n.x,n.z,n.y).h;if(v<le.groundWireRelease||_<0&&f.t>.25||f.t>le.groundWireMaxT)Fp(n,f.low||b>3);else if(b<.8&&!f.low)Fp(n,!1);else{let T=le.groundWireAcc*t;n.vx+=m/v*T,n.vy+=x/v*T+le.gravity*(le.ropeG||1)*t*.9,n.vz+=g/v*T}}if(n.rope&&!n.rope.ground){let f=n.rope;f.t+=t,f.pull!=null&&(f.len=Math.max(f.pull,f.len-le.lowPull*t),n.vy<0&&(n.vy=0),f.len<=f.pull&&(f.pull=null));let m=n.x,x=n.y+1.2,g=n.z,v=m-f.x,_=x-f.y,b=g-f.z,T=Math.hypot(v,_,b);if(T>f.len){let w=v/T,U=_/T,z=b/T;n.x=f.x+w*f.len,n.y=f.y+U*f.len-1.2,n.z=f.z+z*f.len;let D=n.vx*w+n.vy*U+n.vz*z;if(D>0&&(n.vx-=D*w,n.vy-=D*U,n.vz-=D*z),U<-.35&&Math.hypot(n.vx,n.vy,n.vz)<le.reelVmax){let G=f.len,H=Math.max(le.minRope,G-Math.min(le.reelMax,le.reel+G*le.reelK)*t);if(H<G){let j=n.vx*w+n.vy*U+n.vz*z,V=Math.min(1.02,G/H);n.vx=j*w+(n.vx-j*w)*V,n.vy=j*U+(n.vy-j*U)*V,n.vz=j*z+(n.vz-j*z)*V,n.x=f.x+w*H,n.y=f.y+U*H-1.2,n.z=f.z+z*H,f.len=H}}T=f.len}let M=(n.x-f.x)*n.vx+(n.z-f.z)*n.vz>0;n.zipping||(M&&n.vy>0&&n.y+1.2-f.y>-T*.6&&f.t>.4||n.y+1.2>f.y+1||f.t>6)&&cr(n,!1)}let h=null;for(let f of Z0(i,n.x,n.z)){if(n.y>=f.y1-.05||n.y+le.height<=f.y0)continue;let m=J0(f,n.x,n.z),x=f.hw+r-Math.abs(m.u),g=f.hl+r-Math.abs(m.v);if(x<=0||g<=0||f.oneWay)continue;if(l+le.height<=f.y0+.5&&Math.abs(m.u)<f.hw&&Math.abs(m.v)<f.hl){n.y=f.y0-le.height,n.vy>0&&(n.vy=0);continue}if(f.y1-n.y<=le.stepUp&&!s){n.y=f.y1,n.vy<0&&(n.vy=0);continue}if(l>=f.y1-.25){n.y=f.y1,n.vy<0&&(n.vy=0);continue}let v=0,_=0;x<g?v=Math.sign(m.u)||1:_=Math.sign(m.v)||1;let b=Math.min(x,g),T=v*m.c+_*m.s,M=-v*m.s+_*m.c;n.x+=T*b,n.z+=M*b;let w=n.vx*T+n.vz*M;w<0&&(-w>14&&!n.rope&&n.events.push({t:"bonk",speed:-w}),n.vx-=w*T,n.vz-=w*M),!f.noClimb&&(!h||f.y1>h.top)&&(h={nx:T,nz:M,top:f.y1,o:f})}if(h&&!s&&!n.climbing&&!n.sneaking&&e>0&&h.top-n.y>le.stepUp){let f=Math.sin(n.yaw),m=Math.cos(n.yaw);f*-h.nx+m*-h.nz>.55&&(n.rope&&cr(n,!1),n.climbing={nx:h.nx,nz:h.nz,top:h.top,slip:h.o.slip||0},n.events.push({t:"climb"}))}n.climbing&&!h?n.climbing.lat&&!s?(n.x=o,n.z=c,n.vx=-n.climbing.nx*2,n.vz=-n.climbing.nz*2):n.climbing=null:n.climbing&&h&&(n.climbing.nx=h.nx,n.climbing.nz=h.nz,n.climbing.top=h.top,n.climbing.slip=h.o.slip||0);let u=hr(i,n.x,n.z,Math.max(n.y,l)),p=n.grounded;if(n.y<=u.h+.02&&n.vy<=.01){let f=-n.vy;if(n.y=u.h,n.vy=0,!p){let m=n.airTime;n.lastAir=m,n.maxAir=Math.max(n.maxAir,m),n.events.push({t:"land",air:m,impact:f,roof:!!u.roof,combo:n.combo}),n.combo>=2&&n.events.push({t:"comboEnd",n:n.combo}),n.combo=0,n.groundedSince=n.t,n.rope&&n.rope.pull==null&&cr(n,!1)}n.grounded=!0,n.airTime=0,n.coyote=le.coyote,n.onRoof=!!u.roof,n.surf=u.roof?"roof":i.surfaceAt(n.x,n.z)}else n.y>u.h+.25||n.vy>.01?(p&&(n.coyote=le.coyote),n.grounded=!1,n.coyote=Math.max(0,n.coyote-t),n.airTime+=t,n.onRoof=!1):(n.y=u.h,n.vy=0,n.grounded=!0,n.airTime=0);if(n.grounded&&n.rope&&n.rope.ground?Fp(n,!1):n.grounded&&n.rope&&n.rope.t>.3&&n.rope.pull==null&&cr(n,!1),n.groundY=u.h,n.y>(n.maxY||0)&&(n.maxY=n.y),n.roofTime=n.onRoof&&n.grounded?n.roofTime+t:0,n.y<le.waterY&&!n.falling){n.falling=!0,n.events.push({t:"splash",x:n.x,z:n.z}),n.rope=null,n.climbing=null;let f=n.safeHist.length?n.safeHist[Math.max(0,n.safeHist.length-6)]:n.respawnPoint;tg(n,f)}i.ceilY&&n.y+le.height>i.ceilY&&(n.y=i.ceilY-le.height,n.vy>0&&(n.vy=0));let d=i.bounds;n.x=Bp(n.x,d.x0+2,d.x1-2),n.z=Bp(n.z,d.z0+2,d.z1-2)}var Qe={lives:3,immune:3,roomba:{R:12.5,h:6,wake:2,speed:[10.5,12.5],sight:150,second:70},cat:{wake:8,crouch:1,rest:2.6,afterHit:5,ringR:10,bodyR:7,leapMax:125,jumpUp:92,speed:78,swipeR:15,swipeUp:26,swipeSec:.65},mom:{enter:12,walk:[13,21],reach:150,reachY:150,reachYLate:200,lateAt:170,nozV:[16,26],suckR:34,suckAcc:34,catchR:4.8,cool:3.6,ramp:150},slipper:{warn:1.25,R:15},toy:{uses:3,lure:6.5,touchR:6.5,touchY:6,speed:46,kick:34,friction:.85,crouch:.45,pounceRest:.3,bored:1.4},old:{x:-146,y:135,z:290,r:12}},Xn=(n,e,t)=>n<e?e:n>t?t:n,Vv=n=>{let e=((n>>>0)*2654435761>>>0)%2147483646+1,t=()=>(e=e*16807%2147483647)/2147483647;for(let i=0;i<6;i++)t();return t};function fh(n,e,t=1){let i=Vv(t*31+7),s=i(),r=i(),a=i(),o=i(),l={catBox:s<.11,catOnRoomba:s>=.11&&s<.23,phone:r<.3,cockroach:a<.3,oldMan:o<.22};return{world:n,me:e,seed:t,rnd:i,t:0,over:!1,won:!1,lives:Qe.lives,immune:0,by:null,catches:[],events:[],rare:l,way:0,best:0,items:{},itemsGot:[],airT:0,roombas:[ig(-30,165,0,i)],cat:{state:l.catBox?"box":"nap",x:105,y:0,z:150,yaw:-2.2,T:0,from:null,to:null,ring:null,ringT:0,seen:!1},mom:{in:!1,z:-70,x:Cs,yaw:0,noz:{x:Cs+18,y:30,z:-40,vx:0,vy:0,vz:0},cool:0,phoneAt:45+i()*40,phoneT:0,slipT:0,slip:null,slipAt:40+i()*50,spoke:0,sucked:!1,aim:!1,spotT:0,spotAt:-99,winT:0},oldSeen:!1,spokeT:0,toys:lh.map(h=>({...h,state:"idle",vx:0,vy:0,vz:0,spin:0,sq:0})),toyUses:Qe.toy.uses,toysUsed:0,lure:0,lureToy:null,catBored:0,toyEmptySaid:!1}}function ig(n,e,t,i){return{x:n,z:e,yaw:i()*6.28,on:!1,wakeAt:t,wait:0,turnT:0,chase:!1,gx:n,gz:e,bump:0}}var Wv=n=>({x:n.x,y:n.y+1.1,z:n.z});function wa(n,e,t,i,s){let r=n.me;if(n.immune>0||n.over)return!1;n.lives--,n.catches.push({by:e,at:n.t,way:n.way}),n.immune=Qe.immune,n.by=e,r.rope=null,r.climbing=null,r.grounded=!1,r.y+=.2;let a=r.x-t,o=r.z-s,l=Math.hypot(a,o)||1,c=e==="vac"?24:15;return r.vx=a/l*c,r.vz=o/l*c,r.vy=e==="vac"?15:13,r.stun=e==="vac"?.8:.55,n.events.push({t:"caught",by:e,lives:n.lives,x:r.x,y:r.y+1,z:r.z}),n.lives<=0&&(n.over=!0,n.events.push({t:"end",won:!1,by:e})),!0}function Xv(n,e,t){let i=n.me,s=Qe.roomba;if(!e.on){n.t>=e.wakeAt+s.wake&&(e.on=!0,n.events.push({t:"roombaOn"}));return}if(e.wait>0){e.wait-=t;return}let r=s.speed[0]+(s.speed[1]-s.speed[0])*Math.min(1,n.t/120),a=i.y<7,o=Math.hypot(i.x-e.x,i.z-e.z);e.chase=a&&o<s.sight;let l=n.rare.catOnRoomba&&e===n.roombas[0]&&n.lure>0&&n.lureToy;if(l){let f=n.lureToy;e.chase=!0,e.gx=f.x,e.gz=f.z,Math.hypot(f.x-e.x,f.z-e.z)<s.R+5&&f.state!=="roll"&&sg(n,f)}else e.chase?(e.gx=i.x,e.gz=i.z):(e.turnT-=t,(e.turnT<=0||Math.hypot(e.gx-e.x,e.gz-e.z)<10)&&(e.turnT=3+n.rnd()*3,e.gx=Xn(i.x+(n.rnd()-.5)*120,-150,150),e.gz=Xn(i.z+(n.rnd()-.5)*120,20,470)));let h=Math.atan2(e.gx-e.x,e.gz-e.z)-e.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;e.bump>0?e.bump-=t:e.yaw+=Xn(h,-3.4*t,3.4*t);let u=r*(l?1.5:e.chase?1:.75),p=e.x+Math.sin(e.yaw)*u*t,d=e.z+Math.cos(e.yaw)*u*t;ch(n.world,p,d,s.R)?ch(n.world,p,e.z,s.R)?ch(n.world,e.x,d,s.R)?(e.yaw+=(n.rnd()<.5?1:-1)*(.9+n.rnd()),e.bump=.55):e.z=d:e.x=p:(e.x=p,e.z=d),i.y<s.h&&o<s.R+.9&&wa(n,"roomba",e.x,0,e.z)&&(e.wait=1.8)}function jv(n,e){let t=n.cat,i=n.me,s=Qe.cat;if(n.rare.catOnRoomba){let l=n.roombas[0];t.x=l.x,t.y=6,t.z=l.z,t.yaw=l.yaw,t.state="ride";return}if(t.state==="box")return;let r=n.lure>0?n.lureToy:null;if(r&&t.state==="nap"&&(t.state="rest",t.T=.3,n.events.push({t:"catWake",quiet:!0})),t.state==="nap"){n.t>=s.wake&&(t.state="rest",t.T=.4,n.events.push({t:"catWake"}));return}t.T-=e;let a=Math.hypot(i.x-t.x,i.z-t.z),o=i.y-t.y;if(t.state==="swipe"){if(t.T<=0){n.events.push({t:"swipe",x:t.x,y:t.y,z:t.z});let l=Math.hypot(i.x-t.x,i.z-t.z)<s.swipeR+2&&i.y-t.y<s.swipeUp+2&&i.y-t.y>-4&&wa(n,"cat",t.x,t.y,t.z);t.state="rest",t.T=l?s.afterHit:s.rest}return}if(t.state==="rest"&&r){if(t.yaw=Math.atan2(r.x-t.x,r.z-t.z),t.T>0)return;let l=Xn(r.x+r.vx*.35,pn.x0+8,pn.x1-8),c=Xn(r.z+r.vz*.35,pn.z0+8,pn.z1-8),h={x:l,y:lr(n.world,l,c,r.y+1),z:c};t.state="crouch",t.T=Qe.toy.crouch,t.to=h,t.ring=null,t.forToy=!0,n.events.push({t:"crouch",quiet:!0});return}if(t.state==="rest"){if(t.yaw=Math.atan2(i.x-t.x,i.z-t.z),t.T>0)return;if(n.catBored>0){t.T=n.catBored,n.catBored=0;return}if(a<s.swipeR&&o>2&&o<s.swipeUp){t.state="swipe",t.T=s.swipeSec,n.events.push({t:"swipeWarn"});return}let l=i.grounded?.45:.75,c=i.x+i.vx*l,h=i.z+i.vz*l,u=null,p=lr(n.world,c,h,Math.max(i.y,0)+1);if(Math.hypot(c-Ut.x,h-Ut.z)<75&&i.y>110){t.T=.6;return}if(Math.hypot(c-t.x,h-t.z)<=s.leapMax&&p-t.y<=s.jumpUp&&Math.abs(i.y-p)<40)u={x:c,y:p,z:h};else{let d=1e9;for(let f of X0){if(f.y-t.y>s.jumpUp||Math.hypot(f.x-t.x,f.z-t.z)>s.leapMax*1.6)continue;let m=Math.hypot(f.x-i.x,(f.y-i.y)*.6,f.z-i.z);m<d&&(d=m,u={x:Xn(i.x,f.x-f.w,f.x+f.w),y:f.y,z:Xn(i.z,f.z-f.l,f.z+f.l)})}u&&t.y===0&&u.y===0&&(u=null),(!u||Math.hypot(u.x-t.x,u.z-t.z)<6)&&(u=p<=t.y+s.jumpUp?{x:Xn(c,t.x-s.leapMax,t.x+s.leapMax),y:0,z:Xn(h,t.z-s.leapMax,t.z+s.leapMax)}:null)}if(!u){t.T=.5;return}u.y=lr(n.world,u.x,u.z,u.y+1),t.state="crouch",t.T=s.crouch,t.to=u,t.ring={x:u.x,y:u.y,z:u.z,r:s.ringR},n.events.push({t:"crouch"});return}if(t.state==="crouch"){if(t.yaw=Math.atan2(t.to.x-t.x,t.to.z-t.z),t.T<=0){t.state="leap",t.from={x:t.x,y:t.y,z:t.z};let l=Math.hypot(t.to.x-t.x,t.to.y-t.y,t.to.z-t.z);t.dur=Math.max(.5,l/s.speed),t.T=t.dur,t.apex=Math.max(t.y,t.to.y)+10+l*.12,n.events.push({t:"leap"})}return}if(t.state==="leap"){let l=1-Math.max(0,t.T)/t.dur,c=t.from,h=t.to;t.x=c.x+(h.x-c.x)*l,t.z=c.z+(h.z-c.z)*l;let u=c.y,p=h.y,d=t.apex;if(t.y=(1-l)*(1-l)*u+2*(1-l)*l*(2*d-(u+p)/2)+l*l*p,!t.forToy&&Math.hypot(i.x-t.x,i.y+1-(t.y+6),i.z-t.z)<s.bodyR&&wa(n,"cat",t.x,t.y,t.z)&&(t.hitT=1),t.T<=0){if(t.x=h.x,t.y=h.y,t.z=h.z,t.ring=null,t.state="rest",t.T=t.hitT?s.afterHit:s.rest,t.hitT=0,n.lure>0&&n.lureToy){let f=n.lureToy;t.T!==s.afterHit&&(t.T=Qe.toy.pounceRest),Math.hypot(f.x-t.x,f.z-t.z)<18&&sg(n,f)}n.events.push({t:"catLand",x:t.x,y:t.y,z:t.z,near:Math.hypot(i.x-t.x,i.z-t.z)}),!t.forToy&&Math.hypot(i.x-t.x,i.z-t.z)<s.ringR&&Math.abs(i.y-t.y)<11&&wa(n,"cat",t.x,t.y,t.z)&&(t.T=s.afterHit),t.forToy=!1}}}function qv(n,e){let t=n.mom,i=n.me,s=Qe.mom,r=Math.min(1,n.t/s.ramp);if(n.t<s.enter)return;if(t.in||(t.in=!0,n.events.push({t:"momIn"})),t.cool=Math.max(0,t.cool-e),n.rare.phone&&t.phoneAt>0&&n.t>=t.phoneAt&&(t.phoneAt=0,t.phoneT=9,n.events.push({t:"phone"})),t.phoneT>0&&(t.phoneT-=e,t.phoneT<=0&&n.events.push({t:"phoneEnd"})),n.rare.cockroach&&t.slipAt>0&&n.t>=t.slipAt&&!t.phoneT&&i.y<110&&(t.slipAt=0,t.slip={x:i.x+i.vx*.4,z:i.z+i.vz*.4,y:lr(n.world,i.x,i.z,i.y+1),T:Qe.slipper.warn,r:Qe.slipper.R},n.events.push({t:"roach"})),t.slip&&(t.slip.T-=e,t.slip.T<=0)){let j=t.slip;t.slip=null,n.events.push({t:"slap",x:j.x,y:j.y,z:j.z}),Math.hypot(i.x-j.x,i.z-j.z)<j.r&&Math.abs(i.y-j.y)<8&&wa(n,"slipper",j.x,j.y,j.z)&&(t.winT=3)}let a=Xn(i.z-55,-40,470),o=(s.walk[0]+(s.walk[1]-s.walk[0])*r)*(t.phoneT>0?0:1),l=a-t.z;t.walking=Math.abs(l)>2&&o>0,t.walking&&(t.z+=Xn(l,-o*e,o*e)),t.spotT=Math.max(0,t.spotT-e),t.winT=Math.max(0,t.winT-e),(t.cool>0||t.phoneT>0)&&(t.aim=!1);let c=t.noz,h=t.x+22,u=48,p=t.z+30,d=n.t>=s.lateAt?s.reachYLate:s.reachY;n.t>=s.lateAt&&!t.late&&(t.late=!0,n.events.push({t:"late"}));let f=h,m=u,x=p,g=26;if(t.cool<=0&&t.phoneT<=0){let j=Math.hypot(i.x-t.x,i.y-60,i.z-t.z),V=t.late?500:s.reach;if(t.aim=j<V&&i.y<d,t.aim&&!t.wasAim&&n.t-t.spotAt>7&&n.t>s.enter+1.5&&(t.spotAt=n.t,t.spotT=1.5,n.events.push({t:"momSpot"})),t.wasAim=t.aim,t.aim)f=i.x+i.vx*.25,m=i.y+1.1+i.vy*.2,x=i.z+i.vz*.25;else{let W=Math.atan2(i.x-t.x,i.z-t.z);f=t.x+Math.sin(W)*s.reach*.75,x=t.z+Math.cos(W)*s.reach*.75,m=Math.min(d-10,i.y)}g=s.nozV[0]+(s.nozV[1]-s.nozV[0])*r}let v=f-c.x,_=m-c.y,b=x-c.z,T=Math.hypot(v,_,b)||1,M=Math.min(T,g*e);c.x+=v/T*M,c.y+=_/T*M,c.z+=b/T*M;let w=lr(n.world,c.x,c.z,c.y+1);c.y<w+1.5&&(c.y=w+1.5),c.active=t.cool<=0&&t.phoneT<=0;let U=Wv(i),z=c.x-U.x,D=c.y-U.y,G=c.z-U.z,H=Math.hypot(z,D,G)||1;if(t.dist=H,t.sucking=!1,c.active&&H<s.suckR&&n.immune<=0){t.sucking=!0;let j=s.suckAcc*(1-H/s.suckR)*(i.rope?.55:1)*e/H;i.vx+=z*j,i.vy+=D*j,i.vz+=G*j,i.climbing&&H<14&&(i.climbing=null,n.events.push({t:"peeled"}))}c.active&&H<s.catchR&&wa(n,"vac",c.x,c.y,c.z)&&(t.cool=s.cool,t.winT=s.cool,n.events.push({t:"momWin"}))}function kp(n){let e=n.mom;return n.over?n.won?"angry":n.by==="vac"||n.by==="slipper"?"win":"search":e.phoneT>0?"phone":e.winT>0?"win":e.slip?"angry":e.spotT>0?"spot":e.sucking||e.noz.active&&e.dist<48?"angry":e.aim?"normal":"search"}function sg(n,e,t){let i=t??n.rnd()*Math.PI*2,s=Qe.toy.kick;e.state="roll",e.vx=Math.sin(i)*s,e.vz=Math.cos(i)*s,e.sq=.45,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z})}function ng(n,e,t,i){if(e<pn.x0+2.4||e>pn.x1-2.4||i<pn.z0+2.4||i>pn.z1-2.4)return!0;for(let r of n.nearby(e,i))if(!(r.noHit||r.oneWay||r.kind==="bound"||r.y0>t+2||r.y1<=t+.5)&&Math.abs(e-r.cx)<r.hw+2.4&&Math.abs(i-r.cz)<r.hl+2.4)return!0;return!1}function Yv(n,e,t){let i=Math.hypot(e.vx,e.vz),s=e.x+e.vx*t,r=e.z+e.vz*t;ng(n.world,s,e.y,e.z)?(e.vx*=-.7,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0})):e.x=s,ng(n.world,e.x,e.y,r)?(e.vz*=-.7,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0})):e.z=r;let a=lr(n.world,e.x,e.z,e.y+.5);if(e.y>a+.01)e.vy-=90*t,e.y+=e.vy*t,e.y<=a&&(e.y=a,e.vy=0,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0}));else{e.y=a,e.vy=0;let o=Math.exp(-Qe.toy.friction*t);e.vx*=o,e.vz*=o}e.spin+=i*t*.5,e.sq-=t,e.sq<=0&&i>8&&(e.sq=.75,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0})),i<3&&e.y<=a+.01&&(e.vx=e.vz=0,e.state=n.lureToy===e?"stop":"dead")}function Kv(n,e){let t=n.me,i=Qe.toy;if(n.lure>0&&(n.lure-=e,n.lure<=0)){let s=n.lureToy;n.lure=0,n.lureToy=null,s&&(s.state="dead",s.vx=s.vz=0),n.catBored=i.bored,n.events.push({t:"lureEnd",ride:n.rare.catOnRoomba,box:n.rare.catBox})}for(let s of n.toys){if(s.state==="roll"||s.state==="dead"&&(s.vx||s.vz)){Yv(n,s,e);continue}if(s.state!=="idle"||Math.hypot(t.x-s.x,t.z-s.z)>i.touchR||Math.abs(t.y-s.y)>i.touchY)continue;let r=Math.hypot(t.vx,t.vz)>2?Math.atan2(t.vx,t.vz):Math.atan2(s.x-t.x,s.z-t.z);if(n.rare.catBox){s.state="dead",s.vx=Math.sin(r)*i.speed,s.vz=Math.cos(r)*i.speed,s.sq=.5,n.events.push({t:"toyHit",id:s.id,x:s.x,y:s.y,z:s.z,left:n.toyUses,mode:"box"},{t:"toySqueak",x:s.x,y:s.y,z:s.z});continue}if(n.lure>0)continue;if(n.toyUses<=0){n.toyEmptySaid||(n.toyEmptySaid=!0,n.events.push({t:"toyEmpty",x:s.x,y:s.y,z:s.z}));continue}n.toyUses--,n.toysUsed++,n.lure=i.lure,n.lureToy=s,n.catBored=0,s.state="roll",s.vx=Math.sin(r)*i.speed,s.vz=Math.cos(r)*i.speed,s.sq=.5;let a=n.cat;a.state==="crouch"||a.state==="swipe"?(a.state="rest",a.T=.15,a.ring=null,a.to=null):a.state==="rest"&&(a.T=Math.min(a.T,.3)),n.events.push({t:"toyHit",id:s.id,x:s.x,y:s.y,z:s.z,left:n.toyUses,mode:n.rare.catOnRoomba?"ride":"cat"},{t:"toySqueak",x:s.x,y:s.y,z:s.z})}}function Hp(n,e){if(n.over)return;n.t+=e;let t=n.me;n.immune=Math.max(0,n.immune-e);for(let s of n.roombas)Xv(n,s,e);if(n.over||(n.t>=Qe.roomba.second&&n.roombas.length<2&&(n.roombas.push(ig(150,40,n.t-Qe.roomba.wake+2,n.rnd)),n.events.push({t:"roomba2"})),Kv(n,e),jv(n,e),n.over)||(qv(n,e),n.over))return;for(let s of oh)if(!n.items[s.id]&&Math.hypot(t.x-s.x,t.z-s.z)<s.r&&Math.abs(t.y-s.y)<7){if(s.heal&&n.lives>=Qe.lives)continue;n.items[s.id]=!0,s.heal?n.lives=Math.min(Qe.lives,n.lives+1):n.itemsGot.push(s.id),n.events.push({t:"item",id:s.id,heal:!!s.heal,x:s.x,y:s.y,z:s.z})}n.rare.oldMan&&!n.oldSeen&&Math.hypot(t.x-Qe.old.x,t.z-Qe.old.z)<Qe.old.r&&Math.abs(t.y-Qe.old.y)<6&&(n.oldSeen=!0,n.lives=Math.min(Qe.lives,n.lives+1),n.events.push({t:"oldMan"}));let i=ts[n.way];if(i&&n.way<ts.length-1){let s=Math.hypot(t.x-i.x,t.z-i.z)<i.r&&t.y>i.y-12,r=!1;for(let a=n.way+1;a<ts.length-1;a++){let o=ts[a];Math.hypot(t.x-o.x,t.z-o.z)<o.r&&t.y>o.y-12&&(n.way=a,r=!0)}s||t.y>i.y+15&&t.z>i.z?(n.way++,n.events.push({t:"way",i:n.way})):r&&n.events.push({t:"way",i:n.way})}n.best=Math.max(n.best,Zv(n)),Math.hypot(t.x-Ut.x,t.z-Ut.z)<Ut.r&&Math.abs(t.y-Ut.y)<6&&(n.over=!0,n.won=!0,n.best=1,n.events.push({t:"end",won:!0}))}function Zv(n){let e=n.me,t=Math.hypot(Ut.x-or.x,Ut.z-or.z)+Ut.y,i=Math.hypot(Ut.x-e.x,Ut.z-e.z)+Math.abs(Ut.y-e.y);return Xn(1-i/t,0,.99)}function rg(n){return n.won?n.catches.length===0?3:2:n.best>=.55?1:0}function ag(n){let e=n.me,t=[];for(let s of n.roombas)s.on&&t.push({k:"roomba",x:s.x,y:3,z:s.z,d:Math.hypot(s.x-e.x,s.z-e.z)});let i=n.cat;return i.state!=="nap"&&i.state!=="box"&&i.state!=="ride"&&!(n.lure>0)&&t.push({k:"cat",x:i.x,y:i.y+8,z:i.z,d:Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z)}),n.mom.in&&n.mom.noz.active&&t.push({k:"vac",x:n.mom.noz.x,y:n.mom.noz.y,z:n.mom.noz.z,d:n.mom.dist}),t}var Gp={W:1500,H:2029,poses:{cat_side_rest:{uw:28.58,uh:39.03,x:657,y:404,w:224,h:306},cat_side_crouch:{uw:40.45,uh:35.62,x:918,y:776,w:317,h:279},cat_side_leap:{uw:48.53,uh:29.37,x:372,y:1363,w:380,h:230},cat_side_swipe:{uw:43.15,uh:47.82,x:510,y:10,w:338,h:374},cat_nap:{uw:40.53,uh:27.87,x:762,y:1363,w:317,h:218},cat_front_rest:{uw:34.04,uh:49.08,x:10,y:10,w:267,h:384},cat_front_crouch:{uw:33.96,uh:47.1,x:1132,y:10,w:266,h:369},cat_front_leap:{uw:43.23,uh:46.23,x:10,y:404,w:339,h:362},cat_back_crouch:{uw:33.65,uh:47.34,x:858,y:10,w:264,h:371},cat_box:{uw:39.42,uh:38.63,x:891,y:404,w:309,h:303},cat_loaf:{uw:39.11,uh:34.12,x:322,y:1085,w:306,h:267},cat_back_rest:{uw:36.73,uh:39.82,x:359,y:404,w:288,h:312},can_front:{uw:30.98,uh:30.66,x:615,y:776,w:293,h:290},can_side:{uw:30.52,uh:31.64,x:10,y:776,w:289,h:299},can_back:{uw:31.31,uh:30.85,x:309,y:776,w:296,h:292},noz_front:{uw:18.45,uh:13.2,x:638,y:1085,w:353,h:252},noz_side:{uw:10.18,uh:13.04,x:1001,y:1085,w:195,h:249},noz_back:{uw:18.39,uh:12.94,x:10,y:1363,w:352,h:247},slip_sole:{uw:27.87,uh:50.24,x:287,y:10,w:213,h:384},slip_side:{uw:45.13,uh:22.53,x:307,y:1842,w:345,h:172},slip_tilt:{uw:39.46,uh:35.09,x:10,y:1085,w:302,h:268},rom_front:{uw:27.99,uh:17.42,x:966,y:1620,w:284,h:177},rom_side:{uw:29.09,uh:18.46,x:661,y:1620,w:295,h:187},rom_back:{uw:28.29,uh:17.42,x:10,y:1842,w:287,h:177},rom_front_chase:{uw:30.37,uh:20.9,x:10,y:1620,w:308,h:212},rom_side_chase:{uw:31.84,uh:20.78,x:328,y:1620,w:323,h:211},rom_back_chase:{uw:32.33,uh:21.08,x:1089,y:1363,w:328,h:214}}};var ri=(n,e={})=>new bt({color:n,roughness:.6,...e}),Ps=n=>(n.castShadow=!0,n),Vp=null,Wp=[];function Jv(n){return new Promise(e=>new bi().load(`img/chaser_atlas.webp${n}`,t=>{t.colorSpace=ft,t.anisotropy=4,Vp=t;for(let i of Wp)i(t);Wp.length=0,e()},void 0,()=>{console.warn("chaser art failed"),e()}))}var og=null,$v=()=>og||(og=ot(128,128,(n,e)=>{let t=n.createRadialGradient(64,64,8,64,64,64);t.addColorStop(0,"rgba(30,20,10,.5)"),t.addColorStop(1,"rgba(30,20,10,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)})),ur=class{constructor(e,t){let i=this.g=new wt;this.tilt=new wt,i.add(this.tilt),this.mat=new st({transparent:!0,alphaTest:.35,side:rt,toneMapped:!1,color:16774888}),this.paper=new be(new Mt(1,1).translate(0,.5,0),this.mat),this.paper.castShadow=!0,this.paper.frustumCulled=!1,this.paper.visible=!1,this.tilt.add(this.paper),this.stub=t,i.add(t),this.blob=new be(new Mt(1,1),new st({map:$v(),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=1,e.add(this.blob),this.key=null,this.view="side",this.side=1,this.sx=1,this.t=0,this.pop=0;let s=r=>{this.mat.map=r,this.mat.needsUpdate=!0,this.paper.visible=!0,t.visible=!1};Vp?s(Vp):Wp.push(s),i.visible=!1,e.add(i)}setPose(e){if(e===this.key)return;this.key=e,this.pop=1;let t=Gp,i=t.poses[e],s=this.paper.geometry.attributes.uv,r=i.x/t.W,a=(i.x+i.w)/t.W,o=1-i.y/t.H,l=1-(i.y+i.h)/t.H;s.setXY(0,r,o),s.setXY(1,a,o),s.setXY(2,r,l),s.setXY(3,a,l),s.needsUpdate=!0}face(e,t,i,s,r){let a=r?r.position.x:e,o=r?r.position.y:t+30,l=r?r.position.z:i+60,c=Math.atan2(a-e,l-i);this.g.rotation.y=c,this.tilt.rotation.x=-Math.max(-.5,Math.min(1.2,Math.atan2(o-(t+8),Math.hypot(a-e,l-i))))*.6;let h=Math.sin(s),u=Math.cos(s),p=h*Math.sin(c)+u*Math.cos(c),d=h*Math.cos(c)-u*Math.sin(c);(this.view==="back"?p>-.3:this.view==="front"?p<.3:Math.abs(p)>.58)&&(this.view=p<-.45?"back":p>.45?"front":"side"),Math.abs(d)>.12&&(this.side=d>0?1:-1)}draw(e,t,i,{k2:s=1,bob:r=0,rot:a=0,shakeX:o=0,snap:l=!1}={}){this.setPose(e),this.pop=Math.max(0,this.pop-i*7),this.sx=l?t:this.sx+(t-this.sx)*Math.min(1,i*16);let c=Gp.poses[e],h=this.paper,u=Math.abs(this.sx)<.05?.05*(t||1):this.sx,p=1+this.pop*.06;h.scale.set(c.uw*s*u*(2-p),c.uh*s*p,1),h.position.set(o,r,0),h.rotation.z=a}},$o=class extends ur{constructor(e){let t=Qe.roomba.R,i=new be(new qt(t*.97,t,5.6,28).translate(0,3.6,0),ri(2369067,{roughness:.3}));i.castShadow=!0,super(e,i),this.blob.scale.set(t*2.5,t*2.2,1)}update(e,t,i,s){let r=this.g;r.visible=this.blob.visible=!0,this.t+=t,r.position.set(e.x,0,e.z),this.blob.position.set(e.x,.09,e.z),this.face(e.x,0,e.z,e.yaw,s);let a=e.chase?"_chase":"",o=this.view==="side"?"rom_side":this.view==="front"?"rom_front":"rom_back",l=Math.floor(this.t*(e.chase?9:4))%2?1:-1,c=this.view==="side"?this.side:l;this.draw(o+a,c,t,{snap:this.view!=="side",k2:1,bob:e.chase?Math.abs(Math.sin(this.t*30))*.25:0,rot:e.chase?Math.sin(this.t*22)*.012:0})}},yh=class extends ur{constructor(e){let t=new be(new ji(10,12,4,12).translate(0,18,0),ri(14256701,{roughness:1}));t.castShadow=!0,super(e,t),this.blob.scale.set(46,34,1),this.ring=new be(new ni(.82,1,44),new st({color:16736058,transparent:!0,opacity:.85,side:rt,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=4,this.ring.visible=!1,e.add(this.ring),this.fill=new be(new qi(1,44),new st({color:16736058,transparent:!0,opacity:.22,side:rt,depthWrite:!1,fog:!1})),this.fill.rotation.x=-Math.PI/2,this.fill.renderOrder=4,this.fill.visible=!1,e.add(this.fill)}update(e,t,i,s){let r=this.g;this.t+=t;let a=this.t,o=e.state;r.visible=!0,r.position.set(e.x,e.y,e.z),this.face(e.x,e.y,e.z,e.yaw,s);let l=this.view,c=this.side,h,u=1,p={};if(o==="nap"?(h="cat_nap",u=c,p.k2=1+Math.sin(a*1.6)*.012):o==="box"?h="cat_box":o==="ride"?(h="cat_loaf",p.k2=.7,p.bob=3.5):o==="crouch"?(h=l==="side"?"cat_side_crouch":l==="front"?"cat_front_crouch":"cat_back_crouch",u=l==="side"?c:1,p.shakeX=Math.sin(a*17)*1.3,p.rot=Math.sin(a*17)*.05):o==="leap"?(h=l==="front"?"cat_front_leap":"cat_side_leap",u=l==="front"?1:c):o==="swipe"?(h="cat_side_swipe",u=l==="side"?c:i&&i.x!==void 0&&(i.x-e.x)*Math.cos(r.rotation.y)-(i.z-e.z)*Math.sin(r.rotation.y)<0?-1:1,p.rot=Math.sin(a*26)*.06*u):(h=l==="side"?"cat_side_rest":l==="front"?"cat_front_rest":"cat_back_rest",u=l==="side"?c:1,p.rot=Math.sin(a*1.4)*.012),o==="ride"){let f=r.rotation.y;r.position.x+=Math.sin(f)*1.5,r.position.z+=Math.cos(f)*1.5}this.draw(h,u,t,p),this.blob.visible=o!=="leap"&&o!=="ride"&&e.y<1,this.blob.visible&&this.blob.position.set(e.x,e.y+.09,e.z);let d=e.ring;if(this.ring.visible=this.fill.visible=!!d,d){let f=1+Math.sin(a*14)*.03;this.ring.position.set(d.x,d.y+.6,d.z),this.ring.scale.setScalar(d.r*f),this.fill.position.set(d.x,d.y+.55,d.z),this.fill.scale.setScalar(d.r)}}},mh=new URL(import.meta.url).search,lg={},wn={done:!1,loaded:0,failed:0,faces:{},big:{}};function cg(){let n=new bi,e=Object.keys(hh.poses),t=r=>new Promise(a=>n.load(`img/mom_${r}.webp${mh}`,o=>{o.colorSpace=ft,o.anisotropy=4,lg[r]=o,wn.loaded++,a()},void 0,()=>{wn.failed++,a()})),i=r=>new Promise(a=>{let o=new Image;o.onload=()=>{wn.faces[r]=o,a()},o.onerror=()=>a(),o.src=`img/face_${r}.webp${mh}`}),s=r=>{let a=new Image;a.onload=()=>{wn.big[r]=a,a.decode&&a.decode().catch(()=>{})},a.src=`img/big_${r}.webp${mh}`};return Promise.all([Jv(mh),...e.flatMap(r=>[t(r),i(r)])]).then(()=>{wn.done=!0;for(let r of["win","spot","phone","angry"])s(r)})}var vh=class{constructor(e){this.scene=e,this.g=new wt,this.g.visible=!1,e.add(this.g),this.t=0,this.key=null,this.flip=1,this.sx=1,this.pop=0;let t=this.mat=new st({transparent:!0,alphaTest:.35,side:rt,toneMapped:!1,color:16774888}),i=this.paper=new be(new Mt(1,1).translate(0,.5,0),t);i.castShadow=!0,i.visible=!1,this.g.add(i),this.stub=new be(new ji(28,72,4,12).translate(0,64,0),ri(11889276,{roughness:1})),this.stub.visible=!1,this.g.add(this.stub);{let r=ot(128,128,(a,o)=>{let l=a.createRadialGradient(64,64,8,64,64,64);l.addColorStop(0,"rgba(30,20,10,.5)"),l.addColorStop(1,"rgba(30,20,10,0)"),a.fillStyle=l,a.fillRect(0,0,o,o)});this.blob=new be(new Mt(1,1),new st({map:r,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.scale.set(100,62,1),this.blob.visible=!1,this.blob.renderOrder=1,e.add(this.blob)}{let r=new be(new Pt(15,20,12).scale(1.05,.72,1.2).translate(0,13,0),ri(11875883,{roughness:.4}));r.castShadow=!0,this.canP=new ur(e,r),this.canP.blob.scale.set(46,32,1),this.can=this.canP.g}{let r=new be(new an(22,4.4,9).translate(0,2.2,0),ri(2829617,{roughness:.4}));r.castShadow=!0,this.nozP=new ur(e,r),this.nozP.blob.scale.set(30,16,1),this.noz=this.nozP.g}this.segN=36,this.path=Array.from({length:this.segN+1},()=>new R),this.hose=new wt,this.hose.visible=!1,e.add(this.hose);let s=(r,a)=>{let o=new Ze,l=this.segN*4,c=[];for(let u=0;u<this.segN;u++){let p=u*4;c.push(p,p+1,p+2,p+2,p+1,p+3)}if(o.setAttribute("position",new it(new Float32Array(l*3),3)),o.setIndex(c),a){let u=new Float32Array(l*3),p=new Te(12040892),d=new Te(7830400);for(let f=0;f<this.segN;f++){let m=f%2?p:d;for(let x=0;x<4;x++)m.toArray(u,(f*4+x)*3)}o.setAttribute("color",new it(u,3))}let h=new be(o,new st({color:r,vertexColors:!!a,side:rt,toneMapped:!1}));return h.frustumCulled=!1,this.hose.add(h),h};this.strips=[[s(16776694),3.7,0],[s(1381135),3,.06],[s(16777215,!0),2.3,.12]],this._sock=new R,this.neck=new R,this._m=new Ne,this._q=new Et,this._a=new R,this._b=new R,this._c=new R,this._d=new R,this._h=new R,this._e=new R,this._s=new R,this._p=new R,this._t1=new R,this._t2=new R,this._up=new R(0,1,0)}setPose(e){if(e===this.key)return;let t=lg[e];if(!t){this.key||(this.stub.visible=!0);return}this.key=e,this.mat.map=t,this.mat.needsUpdate=!0,this.paper.visible=!0,this.stub.visible=!1,this.pop=1}update(e,t,i,s){if(this.t+=t,!e.in){this.g.visible=!1,this.can.visible=this.noz.visible=this.hose.visible=this.blob.visible=this.canP.blob.visible=this.nozP.blob.visible=!1;return}this.g.visible=!0,this.can.visible=this.noz.visible=this.hose.visible=this.blob.visible=this.canP.blob.visible=this.nozP.blob.visible=!0,this.setPose(s),this.g.position.set(e.x,0,e.z),this.blob.position.set(e.x,.08,e.z);let r=Math.atan2(i.position.x-e.x,i.position.z-e.z);this.g.rotation.y=r;let a=e.noz;((a.x-e.x)*Math.cos(r)-(a.z-e.z)*Math.sin(r))*this.flip<-14&&(this.flip=-this.flip),this.sx+=(this.flip-this.sx)*Math.min(1,t*12);let l=hh.poses[this.key]||hh.poses.normal,c=this.paper,h=this.t;this.pop=Math.max(0,this.pop-t*5);let u=e.walking?Math.abs(Math.sin(h*4.2))*2.6:0,p=s==="phone"?Math.sin(h*3)*.05:s==="win"?Math.sin(h*9)*.03:e.walking?Math.sin(h*4.2)*.035:Math.sin(h*1.3)*.012,d=s==="angry"?Math.sin(h*47)*.5:0;c.position.set(d,u,0),c.rotation.z=p,c.scale.set(l.w*(Math.abs(this.sx)<.04?.04*this.flip:this.sx),l.h*(1+this.pop*.07),1);let f=this.can,m=this.canP,x=e.x-26,g=e.z-22;f.position.x+=(x-f.position.x)*Math.min(1,t*2),f.position.z+=(g-f.position.z)*Math.min(1,t*2),m.face(f.position.x,0,f.position.z,Math.atan2(e.x-f.position.x,e.z-f.position.z),i);let v=m.view;m.draw("can_"+v,v==="side"?m.side:1,t,{rot:Math.sin(h*5)*.01}),m.blob.position.set(f.position.x,.08,f.position.z);let _=this.noz,b=this.nozP,T=this._look;_.position.set(a.x,a.y-2.2,a.z),b.face(a.x,a.y,a.z,T?Math.atan2(T.x-a.x,T.z-a.z):Math.atan2(i.position.x-a.x,i.position.z-a.z),i);let M=b.view;b.draw("noz_"+M,M==="side"?b.side:1,t,{shakeX:a.active?Math.sin(h*34)*.2:0,rot:a.active?Math.sin(h*41)*.015:0}),b.blob.position.set(a.x,.09,a.z),b.blob.visible=a.y<40,this.g.updateMatrixWorld(!0),f.updateMatrixWorld(!0),_.updateMatrixWorld(!0);let w=this._h.set(l.hand[0]-.5,l.hand[1],0).applyMatrix4(c.matrixWorld);w.x+=Math.sin(r)*1.5,w.z+=Math.cos(r)*1.5;let U={front:[.5,.28],side:[.97,.34],back:[.5,.3]}[v],z={front:[.5,.97],side:[.09,.97],back:[.5,.97]}[M];this._sock.set(U[0]-.5,U[1],0).applyMatrix4(m.paper.matrixWorld),this.neck.set(z[0]-.5,z[1],0).applyMatrix4(b.paper.matrixWorld);let D=this._a.copy(this._sock),G=this._c.copy(this.neck),H=this._b.set((D.x+w.x)/2,Math.min(D.y,w.y)*.4,(D.z+w.z)/2),j=w.distanceTo(G)*.3,V=Math.cos(r)*this.sx,W=-Math.sin(r)*this.sx,$=w.x+V*j*.72,K=w.z+W*j*.72,ae=this._e.set(G.x+($-G.x)*.6,G.y+Math.max(3,j*.18),G.z+(K-G.z)*.6),ge=14,Re=(Ie,ie,N,A,I)=>{let O=1-A;return I.set(O*O*Ie.x+2*O*A*ie.x+A*A*N.x,O*O*Ie.y+2*O*A*ie.y+A*A*N.y,O*O*Ie.z+2*O*A*ie.z+A*A*N.z)},ve=this.path;Re(D,H,w,0,ve[0]);for(let Ie=1;Ie<=this.segN;Ie++)Ie<=ge?Re(D,H,w,Ie/ge,ve[Ie]):Re(w,ae,G,(Ie-ge)/(this.segN-ge),ve[Ie]);let Ee=i.position,ne=this._s,ye=this._d,ue=this._t1,xe=this._t2;for(let[Ie,ie,N]of this.strips){let A=Ie.geometry.attributes.position,I=A.array,O=(S,B)=>{let F=ve[S];ye.subVectors(ve[Math.min(this.segN,S+1)],ve[Math.max(0,S-1)]),ue.subVectors(Ee,F).normalize(),ne.crossVectors(ye,ue);let P=ne.length()||1;ne.multiplyScalar(ie/P),xe.copy(F).addScaledVector(ue,N),I[B*3]=xe.x+ne.x,I[B*3+1]=xe.y+ne.y,I[B*3+2]=xe.z+ne.z,I[(B+1)*3]=xe.x-ne.x,I[(B+1)*3+1]=xe.y-ne.y,I[(B+1)*3+2]=xe.z-ne.z};for(let S=0;S<this.segN;S++)O(S,S*4),O(S+1,S*4+2);A.needsUpdate=!0}}lookNoz(e,t,i){this._look=this._look||new R,this._look.set(e,t,i)}};function Qv(){let n=[],e=(l,c)=>{let h=new Te(c),u=l.attributes.position.count,p=new Float32Array(u*3);for(let d=0;d<u;d++)p[d*3]=h.r,p[d*3+1]=h.g,p[d*3+2]=h.b;l.setAttribute("color",new it(p,3)),n.push(l.index?l.toNonIndexed():l)};e(new Pt(1,16,10).scale(2.3,2,3.8).translate(0,2.1,0),9211798),e(new Ms(1.5,3,12).rotateX(Math.PI/2).translate(0,1.9,4.5),10198693),e(new Pt(.5,8,6).translate(0,1.9,6),15043226);for(let l of[-1,1])e(new Pt(1.25,10,8).scale(1,1,.3).translate(l*1.4,3.9,2.5),15311791),e(new Pt(.34,8,6).translate(l*.75,2.7,4.5),1052688);e(new qt(.22,.22,1.6,6).translate(0,4.6,-1),13218904),e(new Gn(.7,.2,6,12).translate(0,5.8,-1),13218904);{let l=new Ss([new R(0,2,-3.6),new R(.8,1,-5.6),new R(-.8,.4,-7.6),new R(.6,.3,-9.4)]);e(new Ts(l,12,.22,5),12794415)}let t=0;for(let l of n)t+=l.attributes.position.count;let i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3),a=0;for(let l of n)i.set(l.attributes.position.array,a*3),s.set(l.attributes.normal.array,a*3),r.set(l.attributes.color.array,a*3),a+=l.attributes.position.count;let o=new Ze;return o.setAttribute("position",new it(i,3)),o.setAttribute("normal",new it(s,3)),o.setAttribute("color",new it(r,3)),o}var xh=class{constructor(e){let t=Qv();this.mat=new bt({vertexColors:!0,roughness:.92}),this.matOff=new bt({vertexColors:!0,roughness:1,color:7170662}),this.items=lh.map(()=>{let i=new wt,s=Ps(new be(t,this.mat));i.add(s);let r=new ys(ug());return r.position.y=8,r.scale.setScalar(10),i.add(r),e.add(i),{g:i,m:s,sp:r}}),this.t=0}update(e,t){this.t+=t,e.toys.forEach((i,s)=>{let r=this.items[s];r.g.position.set(i.x,i.y,i.z);let a=i.state==="idle"&&e.toyUses>0;r.sp.visible=a,r.m.material=i.state==="idle"&&!a?this.matOff:this.mat,i.state==="idle"?(r.m.rotation.set(0,s*1.9+Math.sin(this.t*2+s)*.1,a?Math.sin(this.t*13+s)*.03:0),r.m.position.y=0):i.state==="dead"&&!(i.vx||i.vz)?(r.m.rotation.set(0,s*1.9,1.55),r.m.position.y=2):(Math.hypot(i.vx,i.vz)>1&&(r.m.rotation.y=Math.atan2(i.vx,i.vz)),r.m.rotation.x=i.spin,r.m.rotation.z=Math.sin(i.spin*.7)*.5,r.m.position.y=2.2+Math.abs(Math.sin(i.spin*1.3))*1.2)})}},_h=class extends ur{constructor(e){let t=new be(new Pt(1,14,8).scale(11,1.6,24).translate(0,2,0),ri(13923198,{roughness:1}));t.castShadow=!0,super(e,t),this.blob.visible=!1,this.ring=new be(new ni(.82,1,40),new st({color:16736058,transparent:!0,opacity:.85,side:rt,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,e.add(this.ring),this.after=0}update(e,t,i){if(e){this.g.visible=!0,this.ring.visible=!0,this.ring.position.set(e.x,e.y+.6,e.z),this.ring.scale.setScalar(e.r);let s=Math.max(0,e.T/Qe.slipper.warn),r=e.y+1+150*s*s;this.g.position.set(e.x,r,e.z),this.face(e.x,r,e.z,0,i);let a=i&&i.position.y<r-8;this.draw(s<.02?"slip_side":a&&s>.12?"slip_sole":"slip_tilt",1,t,{snap:!0,rot:s*5,bob:s<.02?0:-8});let o=e.r*2*(1-s*.6);this.blob.visible=!0,this.blob.position.set(e.x,e.y+.5,e.z),this.blob.scale.set(o,o,1),this.after=1.1}else this.ring.visible=!1,this.blob.visible=!1,this.after>0&&(this.after-=t,this.after<=0&&(this.g.visible=!1))}};function hg(n){let e={},t=(i,s,r)=>new bt({map:ot(i,s,r),roughness:.5});for(let i of oh){let s=new wt;if(s.position.set(i.x,i.y,i.z),i.id==="coin"){let a=Ps(new be(new qt(10,10,1.4,34),[ri(11117710,{metalness:.85,roughness:.35}),t(256,256,(o,l,c)=>{o.fillStyle="#c9c4ab",o.fillRect(0,0,l,c),o.strokeStyle="#7f7a64",o.lineWidth=10,o.beginPath(),o.arc(128,128,112,0,7),o.stroke(),o.fillStyle="#6d6853",o.font='bold 84px "BIZ UDPGothic",sans-serif',o.textAlign="center",o.fillText("500",128,156)}),ri(11117710)]));a.position.y=.8,s.add(a)}else if(i.id==="glasses"){let a=ri(8014370,{roughness:.3}),o=new bt({color:13624814,transparent:!0,opacity:.4,roughness:.05,metalness:.3});for(let c of[-1,1]){let h=Ps(new be(new Gn(4,.42,8,24),a));h.position.set(c*5,4,0),s.add(h);let u=new be(new qi(3.8,22),o);u.position.set(c*5,4,0),s.add(u);let p=Ps(new be(new qt(.3,.3,11,6).rotateX(Math.PI/2),a));p.position.set(c*9,4.2,-5.4),s.add(p)}let l=new be(new Gn(1.1,.34,6,10,Math.PI),a);l.position.set(0,4.3,0),s.add(l)}else if(i.id==="hesokuri"){let a=Ps(new be(new an(.5,12,22),t(256,128,(o,l,c)=>{o.fillStyle="#c8a877",o.fillRect(0,0,l,c),o.fillStyle="#2b1d10",o.font='bold 48px "Klee One",serif',o.textAlign="center",o.fillText("ヘソクリ",l/2,62),o.font='bold 22px "Klee One",serif',o.fillText("見るな 父",l/2,100)})));a.position.set(0,6,0),a.rotation.z=-.12,s.add(a)}else if(i.id==="dvd"){let a=Ps(new be(new an(14,20,2),t(180,256,(o,l,c)=>{o.fillStyle="#16161b",o.fillRect(0,0,l,c),o.fillStyle="#fff",o.fillRect(12,20,l-24,92),o.fillStyle="#111",o.font='bold 24px "BIZ UDPGothic",sans-serif',o.textAlign="center",o.fillText("確定申告",l/2,58),o.fillText("2014",l/2,92),o.fillStyle="#f2d24b",o.font='bold 18px "Klee One",serif',o.fillText("※家族は",l/2,160),o.fillText("再生しないこと",l/2,188)})));a.position.set(0,10,0),a.rotation.y=-Math.PI/2+.25,s.add(a)}else if(i.id==="ring"){let a=Ps(new be(new Gn(5.6,.85,10,32),ri(14002500,{metalness:.92,roughness:.16})));a.position.y=5.8,s.add(a)}else if(i.id==="chip"){let a=new Pt(10,18,10).scale(1,.1,.75),o=a.attributes.position;for(let c=0;c<o.count;c++)o.setY(c,o.getY(c)+Math.sin(o.getX(c)*.3)*1.3+Math.cos(o.getZ(c)*.4)*1.1);a.computeVertexNormals();let l=Ps(new be(a,ri(14923340,{roughness:.6})));l.position.y=3.2,l.rotation.z=.15,s.add(l)}let r=new ys(ug());r.position.y=11,r.scale.setScalar(9),s.add(r),s.userData.sp=r,n.add(s),e[i.id]=s}return e}var gh=null;function ug(){if(gh)return gh;let n=ot(64,64,(e,t,i)=>{let s=e.createRadialGradient(32,32,1,32,32,32);s.addColorStop(0,"rgba(255,250,210,1)"),s.addColorStop(.2,"rgba(255,235,150,.65)"),s.addColorStop(1,"rgba(255,235,150,0)"),e.fillStyle=s,e.fillRect(0,0,t,i),e.fillStyle="rgba(255,255,240,.95)",e.fillRect(31,2,2,60),e.fillRect(2,31,60,2)});return gh=new gs({map:n,transparent:!0,depthWrite:!1,blending:Ji,fog:!1,depthTest:!0}),gh}function dg(n){let e=new wt;e.visible=!1,n.add(e);let t=null,i=!1;return{g:e,update(s){if(!i&&es.ready&&es.kenney["male-f"]){i=!0;let r=es.kenney["male-f"],a=Wo(r.scene),o=new rn().setFromObject(a),l=1.8/(o.max.y-o.min.y);a.scale.setScalar(l),a.position.y=-o.min.y*l,e.add(a),t=new oa(a);let c=r.clips.find(h=>h.name==="emote-yes")||r.clips[0];t.clipAction(c).play()}t&&t.update(s)}}}var jn="#241c12",pg="#b5271a",Ea='"Klee One",serif',fn='"BIZ UDPGothic",sans-serif';function ex(n,e,t){let i=[],s="";for(let r of e)if(n.measureText(s+r).width>t&&s)if("。、？！」）".includes(r)){let a=s.slice(-1);i.push(s.slice(0,-1)),s=a+r}else i.push(s),s=r.trim();else s+=r;return s&&i.push(s),i}function tx(n,e,t){let i=[],s="";for(let r of e.split(" ")){let a=s?s+" "+r:r;n.measureText(a).width>t&&s?(i.push(s),s=r):s=a}return s&&i.push(s),i}var Qo=(n,e,t,i)=>i?tx(n,e,t):ex(n,e,t);function fg(n,e,t){for(let i=0;i<2200;i++)n.fillStyle=Math.random()<.5?"rgba(90,70,40,.035)":"rgba(255,255,255,.05)",n.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*2,1+Math.random()*2)}function mg(n,e,t,i,s,r,a){if(!e)return;n.save(),n.translate(t+s/2,i+r/2),n.rotate(a),n.fillStyle="#fff",n.shadowColor="rgba(0,0,0,.3)",n.shadowBlur=10,n.shadowOffsetY=4,n.fillRect(-s/2-9,-r/2-9,s+18,r+18),n.shadowColor="transparent";let o=e.width/e.height,l=s/r,c=e.width,h=e.height;o>l?c=e.height*l:h=e.width/l,n.drawImage(e,(e.width-c)/2,(e.height-h)/2,c,h,-s/2,-r/2,s,r),n.fillStyle="rgba(214,194,130,.75)",n.fillRect(-46,-r/2-22,92,26),n.restore()}function gg(n,e,t,i,s,r){e&&(n.save(),n.translate(t,i),n.rotate(r),n.beginPath(),n.arc(0,0,s,0,7),n.fillStyle="#fff",n.fill(),n.clip(),n.drawImage(e,-s,-s,s*2,s*2),n.restore(),n.save(),n.translate(t,i),n.strokeStyle=jn,n.lineWidth=3,n.beginPath(),n.arc(0,0,s,0,7),n.stroke(),n.restore())}function Xp(n,e){let t=n.getContext("2d"),i=n.width,s=n.height,r=e.lang==="en";if(t.setTransform(1,0,0,1,0,0),t.textAlign="left",t.textBaseline="alphabetic",e.won){let a=t.createLinearGradient(0,0,i,s);a.addColorStop(0,"#e6eaec"),a.addColorStop(1,"#c7cdd0"),t.fillStyle=a,t.fillRect(0,0,i,s),t.fillStyle="rgba(0,0,0,.08)",t.fillRect(0,700,i,3),t.save(),t.translate(50,56),t.rotate(-.012),t.shadowColor="rgba(0,0,0,.28)",t.shadowBlur=16,t.shadowOffsetY=6,t.fillStyle="#fbf6df",t.fillRect(0,0,i-100,s-112),t.shadowColor="transparent",t.strokeStyle="rgba(70,110,170,.22)",t.lineWidth=2;for(let c=120;c<s-130;c+=56)t.beginPath(),t.moveTo(20,c),t.lineTo(i-120,c),t.stroke();gg(t,e.face,i-100-96,74,62,-.08),t.fillStyle=jn,t.font=`600 ${r?38:44}px ${Ea}`,t.fillText(e.head,34,86),t.font=`600 ${r?31:33}px ${Ea}`;let o=160;for(let c of Qo(t,e.note,i-170,r))t.fillText(c,34,o),o+=56;o=Math.max(o,400),e.photo&&mg(t,e.photo,i-100-300,o-10,256,176,.04),t.font=`400 26px ${fn}`;let l=o+10;for(let[c,h]of e.rows)t.fillStyle="#6a5c44",t.fillText(c,34,l),t.fillStyle=jn,t.font=`700 28px ${fn}`,t.fillText(h,34,l+34),t.font=`400 26px ${fn}`,l+=80;if(l=Math.max(l,o+200)+10,e.items.length){t.fillStyle="#6a5c44",t.fillText(e.itemsHead,34,l),t.fillStyle=jn,t.font=`600 27px ${Ea}`,l+=38;for(let c of Qo(t,e.items.join(r?", ":"、"),i-170,r))t.fillText(c,34,l),l+=36}t.fillStyle=pg,t.font=`600 28px ${Ea}`,l+=8;for(let c of Qo(t,e.gag,i-170,r))l<s-150&&(t.fillText(c,34,l),l+=38);t.fillStyle=jn,t.font=`600 28px ${Ea}`,t.fillText(e.sign,34,s-134),t.restore(),t.fillStyle="#c8392e",t.beginPath(),t.arc(i/2,56,26,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.35)",t.beginPath(),t.arc(i/2-8,48,8,0,7),t.fill(),fg(t,i,s)}else{t.fillStyle=e.bg||"#efe7d2",t.fillRect(0,0,i,s),fg(t,i,s),t.strokeStyle=jn,t.lineWidth=4,t.strokeRect(26,26,i-52,s-52),t.lineWidth=1.5,t.strokeRect(34,34,i-68,s-68),t.fillStyle=jn,t.font=`700 ${r?36:42}px ${fn}`,t.textAlign="center",t.fillText(e.head,i/2,96),t.font=`400 22px ${fn}`,t.fillText(e.sub,i/2,130),t.textAlign="left",t.lineWidth=2,t.beginPath(),t.moveTo(34,150),t.lineTo(i-34,150),t.stroke(),gg(t,e.face,i-94,92,52,.1);let a=150;for(let[l,c]of e.rows)t.font=`400 24px ${fn}`,t.fillStyle="#5b4e38",t.fillText(l,52,a+42),t.font=`700 27px ${fn}`,t.fillStyle=jn,t.fillText(c,232,a+42),a+=62,t.lineWidth=1,t.beginPath(),t.moveTo(34,a),t.lineTo(i-34,a),t.stroke();a+=40,t.font=`700 24px ${fn}`,t.fillStyle="#5b4e38",t.fillText(e.listHead,52,a),a+=40,t.font=`400 27px ${fn}`,t.fillStyle=jn;let o=e.photo&&a+200<s-200;for(let l of e.list){let c=l.you;t.font=c?`700 28px ${fn}`:`400 26px ${fn}`,t.fillStyle=c?pg:jn,t.fillText(l.t,58,a),t.textAlign="right",t.fillText(l.n,o?372:i-58,a),t.textAlign="left",a+=41}if(o&&mg(t,e.photo,i-318,a-e.list.length*41-26,256,180,-.05),a+=22,t.lineWidth=1,t.beginPath(),t.moveTo(34,a-24),t.lineTo(i-34,a-24),t.stroke(),e.items.length){t.fillStyle="#5b4e38",t.font=`700 22px ${fn}`,t.fillText(e.itemsHead,52,a+8),t.font=`400 24px ${fn}`,t.fillStyle=jn,a+=40;for(let l of Qo(t,e.items.join(r?", ":"、"),i-120,r).slice(0,2))t.fillText(l,52,a),a+=32;a+=6}t.fillStyle="#5b4e38",t.font=`700 22px ${fn}`,t.fillText(e.noteHead,52,a+8),a+=42,t.fillStyle=jn,t.font=`600 29px ${Ea}`;for(let l of Qo(t,e.note,i-120,r).slice(0,3))t.fillText(l,52,a),a+=38;t.font=`400 18px ${fn}`,t.fillStyle="#6d6251",t.fillText(e.foot,52,s-52)}}function yg(n,e,t,i=1,s=!1){let r=n.getContext("2d"),a=n.width,o=n.height;r.save(),r.translate(s?a-200:a-180,s?o-190:o-150),r.rotate(-.2),r.scale(i,i),r.strokeStyle=t,r.fillStyle=t,r.lineWidth=8,r.globalAlpha=.86;let l=e.length,c=l>=6?34:l>=4?44:56,h=/^[A-Za-z !]+$/.test(e),u=h?28:c;r.beginPath(),r.ellipse(0,0,124,66,0,0,7),r.stroke(),r.lineWidth=3,r.beginPath(),r.ellipse(0,0,112,56,0,0,7),r.stroke(),r.font=`700 ${u}px ${fn}`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,0,2),r.restore()}var nx={skilled:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7},toyuser:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7,toy:"near"},farm:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7,toy:"all"},farmgo:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7,toy:"first"},normaltoy:{lag:18,wireGap:.6,wireProb:.12,noise:.4,dodge:!0,relT:2.2,lost:!0,lostGap:9,toy:"near"},normal:{lag:18,wireGap:.6,wireProb:.12,noise:.4,dodge:!0,relT:2.2,lost:!0,lostGap:9},clumsy:{lag:42,wireGap:1.2,wireProb:.03,noise:1.1,dodge:!1,relT:3.2,lost:!0}};function Mh(n,e=1){let t=e*97+13>>>0;return{kind:n,p:nx[n],rnd:()=>(t=t*16807%2147483647)/2147483647,q:[],n:0,nT:0,wT:0,rT:0,clT:0,stuck:0,lx:0,lz:0,prevW:!1}}function qp(n,e,t,i,s){if(n.kind==="idle")return{};let r=ts[t.way];if(n.kind==="ground"){let f=Math.atan2(r.x-e.x,r.z-e.z);return{throttle:1,moveDir:{x:Math.sin(f),z:Math.cos(f)}}}let a=n.p;if(a.lost&&(n.lostT=(n.lostT??3+n.rnd()*4)-s,n.lostT<=0&&(n.pauseT=.8+n.rnd()*1.6,n.lostT=(a.lostGap||4)+n.rnd()*5),n.pauseT>0))return n.pauseT-=s,n.prevW=!1,{};let o=r.x,l=r.y,c=r.z;if(a.toy){let m=t.toyUses>0&&t.lure<=0?t.toys.filter(g=>g.state==="idle"):[];m.sort((g,v)=>Math.hypot(g.x-e.x,g.z-e.z,g.y-e.y)-Math.hypot(v.x-e.x,v.z-e.z,v.y-e.y));let x=m[0];if(a.toy==="near")x&&t.t>8&&t.cat.state!=="box"&&Math.hypot(x.x-e.x,x.z-e.z,x.y-e.y)<55&&(o=x.x,l=x.y,c=x.z);else if(x)o=x.x,l=x.y,c=x.z;else{if(a.toy==="all"&&t.toyUses<=0&&t.lure<=0)return{};if(a.toy==="all"&&!x)return{}}}n.q.push([o,l,c]),[o,l,c]=n.q.length>a.lag?n.q.shift():n.q[0],n.nT-=s,n.nT<=0&&(n.n=(n.rnd()-.5)*a.noise*2,n.nT=.5+n.rnd());let h=Math.atan2(o-e.x,c-e.z)+n.n;if(a.dodge){let f=0,m=0,x=t.cat.ring,g=t.mom.slip;x&&Math.hypot(x.x-e.x,x.z-e.z)<x.r+6&&(f+=e.x-x.x,m+=e.z-x.z),g&&Math.hypot(g.x-e.x,g.z-e.z)<g.r+6&&(f+=e.x-g.x,m+=e.z-g.z);let v=t.mom.noz;t.mom.in&&v.active&&t.mom.dist<26&&(f+=(e.x-v.x)*.5,m+=(e.z-v.z)*.5),(f||m)&&(h=Math.atan2(f,m))}let u={throttle:1,moveDir:{x:Math.sin(h),z:Math.cos(h)}},p=Math.hypot(o-e.x,c-e.z);if(e.climbing)return u.moveDir=null,u.wallY=l>e.y-1?1:-1,u.wallX=0,u.throttle=0,n.clT+=s,(e.y>l-2&&e.y<l+4||n.clT>(e.climbing.slip?40:18))&&(u.wire=!0,u.wireYaw=h,n.clT=0),jp(n,u);n.clT=0;let d=p<28&&l>e.y+6;return p<14&&e.y>l-1?(e.rope&&(u.wire=!0),jp(n,u)):(n.wT+=s,e.rope?(n.rT+=s,((o-e.x)*e.vx+(c-e.z)*e.vz<0&&e.vy>0&&n.rT>.4||n.rT>a.relT)&&(u.wire=!0,n.rT=0)):!(d&&e.grounded)&&n.wT>a.wireGap&&(e.grounded||e.vy<-1)&&n.rnd()<a.wireProb&&(u.wire=!0,u.wireYaw=h,n.wT=0,n.rT=0),n.stuck=Math.hypot(e.x-n.lx,e.z-n.lz)<.05?n.stuck+s:0,n.lx=e.x,n.lz=e.z,n.stuck>1.2&&(u.wire=!0,n.stuck=0),jp(n,u))}function jp(n,e){let t=!!e.wire;return e.wire=t&&!n.prevW,n.prevW=t,e}window.__jsUp=!0;var ze=n=>document.getElementById(n),ai=1/60,ix="https://tom3games.github.io/kobito-escape/",Ch={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}}},vr=(n,e,t)=>n<e?e:n>t?t:n,Ia={ja:{logo1:"小人になって",logo2:"家の中を",logo3:"逃げろ",story:"賞味期限2019年のヨーグルトを食べたら、体が2cmになった。",flossLabel:"フロス",start:"非常口へ",how:"遊び方",lang:"EN",muteOn:"音 入",muteOff:"音 切",loading:"体が縮んでいます",howTitle:"冷蔵庫のメモ",ok:"わかった",tooFar:"届かへん",howItems:[["floss","<b>フロスのケース</b>を押すと前の上へ糸が飛ぶ。もう1回で離す。家具を<b>タッチ</b>しても掛かる"],["stick","左のボタンで走る。壁に向かって走ると<b>登れる</b>。画面をなぞると見回す"],["roomba","ルンバは<b>床だけ</b>。上へ逃げる"],["cat","猫はおしりを振ったら飛ぶ。<b>赤い輪</b>から離れる"],["vac","おかんの掃除機は<b>吸い寄せる</b>。空中でも来る"],["toy","ネズミに<b>走って当たる</b>と猫が追う。3回まで"],["exit","絆創膏3枚で終わり。<b>冷蔵庫の上の非常口</b>まで"]],credit:"音: Work With Sounds / Werstas, Gravity Sound (CC BY 4.0) ほか CC0。人物: KayKit, Kenney (CC0)。詳しくは CREDITS.md",way:{sofa:"ソファの上へ",shelf:"本棚の上へ",curtain:"カーテンの上へ",exit:"冷蔵庫の上へ"},dist:n=>n>=100?`${Math.floor(n/100)}m${String(Math.round(n%100)).padStart(2,"0")}cm`:`${Math.round(n)}cm`,up:n=>`上へ${n}cm`,down:n=>`下へ${n}cm`,paused:"ちょっと休憩",resume:"戻る",quit:"やめる",hint1:"ケースを押すと糸が飛ぶ",hint2:"ルンバは床だけ。上へ",hintCat:"赤い輪から離れろ",hintVac:"吸い口から逃げろ",momIn:["おかん","ちょっと掃除するでー"],momLines:["なんか動いたな","ホコリようさんあるわ","これいつのやつ？","メルカリで売れるやろか","おとん、靴下また裏返しや","あの子どこ行ったんやろ","ヨーグルト知らん？","ゴキブリちゃうやろな","帰省する言うてたのに"],momName:"おかん",roomba2:"もう1台買うたで",roach:"ゴキブリや！！",roachMiss:"どこ行ったんや",phone:"ほんでな、あの奥さんがな",phoneEnd:"ほな切るわ",late:"延長ホース出すで",spotLines:["おった！","そこや！","見えてるで！","動いたな！"],toyLines:["猫、298円に夢中","血統書つきやのに","おもちゃに負ける猫","命より298円"],toyRide:"ルンバごと追っていった",toyBox:"猫は箱のほうが好き",toyEmpty:"もうネズミは効かへん",lureEnd:"猫、飽きた",lureEndRide:"ルンバ、我に返った",hintToy:"ネズミで猫が釣れる",catBox:"猫は箱から出ない",catRide:"猫がルンバに乗っている",catWake:"猫が起きた",caught:{roomba:"ルンバにはねられた",cat:"ねこパンチ",vac:"ホースに詰まって吐かれた",slipper:"スリッパの直撃"},peeled:"壁からはがされた",oldMan:["先住の小人","デュフフ ここ18年住んでる"],oldGive:"絆創膏をもらった",items:{coin:"500円玉。家賃の足し",glasses:"おかんの老眼鏡。探してたやつ",hesokuri:"おとんのヘソクリ",dvd:"確定申告2014（なぜか鍵つき）",ring:"なくした結婚指輪",chip:"ポテチ。絆創膏1枚ぶん元気"},itemNames:{coin:"500円玉",glasses:"老眼鏡",hesokuri:"おとんのヘソクリ",dvd:"確定申告2014",ring:"結婚指輪"},again:"もう一回",save:"画像を保存",post:"Xでポスト",toTitle:"タイトル",forms:{vac:{head:"紙パック点検票",sub:"吸引者: おかん",list:[["髪の毛","たくさん"],["ポテチのかす","14枚"],["輪ゴム","3本"],["おとんの靴下の毛玉","1玉"]],you:["息子","1名（2cm）"],note:["なんか詰まったと思ったら、あんたか。","捨てるとこやったで。ヨーグルトの話はあとでしよか。"]},roomba:{head:"ダストボックス点検票",sub:"回収者: ルンバ（目玉シールつき）",list:[["綿ぼこり","大"],["輪ゴム","2本"],["なくしたピアス","片方"]],you:["息子","1名（2cm）"],note:["ルンバがなんか食べたと思ったら。ゴミの日は木曜やで。","床を走るのはやめとき。ルンバの島やで。"]},cat:{head:"猫のおもちゃ台帳",sub:"飼い主の猫 記入",list:[["ねずみのおもちゃ","3匹"],["ペットボトルのふた","5個"],["おとんの靴ひも","1本"]],you:["飼い主の息子","1名（2cm）"],note:["うちの猫がまた何か持ってきた。今日のは動きがええわ。","猫のお尻が揺れたら、もう遅いで。"]},slipper:{head:"害虫駆除記録",sub:"実施者: おかん（スリッパ）",list:[["実施回数","1回"],["スリッパ","左"],["うちの壁","少しへこんだ"]],you:["ゴキブリ（息子）","1匹（2cm）"],note:["でっかいゴキブリやと思ったのに、よう見たらあんたやんか。"]}},rowTime:"逃げた時間",rowPlace:"見つかった所",rowCaught:"捕まった回数",listHead:"中身",noteHead:"おかんより",itemsHead:"持っていた物",foot:"tom3games.github.io/kobito-escape",place:["じゅうたんの上","ソファのあたり","本棚のあたり","カーテンのあたり","冷蔵庫の前"],time:n=>`${Math.floor(n/60)}分${String(Math.floor(n%60)).padStart(2,"0")}秒`,times:n=>`${n}回`,winHead:"息子へ",winNote:"冷蔵庫の上に小さい足跡があったで。ヨーグルト知らん？ 2019年のやつ、まだいけると思っててん。",winSign:"母より",winRowTime:"脱出までの時間",winRowCaught:"捕まった回数",winItems:"持ち出した物",winGag:["非常口の先は、おとんの靴の中でした。","非常口の先は、ご近所の回覧板の間でした。","非常口の先は、となりの家の冷蔵庫の上でした。"],stamps:["回収","あと少し","脱出","無傷で脱出"],reveal:{vac:["吸うたったで！","ゴミと一緒やで！"],slipper:["仕留めたで！","一発やで！"],cat:["猫がなんか獲ったわ","奥さん、うちの猫が"],roomba:["ルンバが食べた！","ルンバ、吐きなさい！"],win:["逃げよったな！","ヨーグルト返し！"]},postWin:(n,e)=>`体が2cmになって実家から脱出した。${n}、捕まった回数${e}回 #小人になって家の中を逃げろ`,postLose:(n,e)=>`体が2cmになって${n}に書かれた。${e}逃げた #小人になって家の中を逃げろ`},en:{logo1:"Tiny Me:",logo2:"Escape",logo3:"the House",story:"I ate a yogurt that expired in 2019. Now I am 2 cm tall.",flossLabel:"FLOSS",start:"To the exit",how:"How to play",lang:"JP",muteOn:"Sound on",muteOff:"Muted",loading:"Your body is shrinking",howTitle:"Note on the fridge",ok:"Got it",tooFar:"Too far",howItems:[["floss","Press the <b>floss case</b> to shoot thread up and ahead. Press again to let go. Or <b>tap</b> furniture"],["stick","The left button runs. Run into a wall to <b>climb</b>. Drag to look around"],["roomba","The Roomba stays <b>on the floor</b>. Go up"],["cat","When the cat wiggles, it jumps. Leave the <b>red ring</b>"],["vac","Mom's vacuum <b>sucks you in</b>, even in mid-air"],["toy","<b>Run into</b> a toy mouse and the cat chases it. 3 uses"],["exit","Three bandages and you are done. Reach the <b>exit on top of the fridge</b>"]],credit:"Sounds: Work With Sounds / Werstas, Gravity Sound (CC BY 4.0) and CC0 packs. Characters: KayKit, Kenney (CC0). See CREDITS.md",way:{sofa:"Up on the sofa",shelf:"Top of the bookcase",curtain:"Top of the curtain",exit:"Top of the fridge"},dist:n=>n>=100?`${(n/100).toFixed(1)} m`:`${Math.round(n)} cm`,up:n=>`${n} cm up`,down:n=>`${n} cm down`,paused:"Short break",resume:"Back",quit:"Quit",hint1:"Press the case to shoot thread",hint2:"Roomba stays on the floor. Go up",hintCat:"Leave the red ring",hintVac:"Get away from the nozzle",momIn:["Mom","Time to vacuum!"],momLines:["Something moved","So much dust","How old is this?","Could I sell this online?","Dad, your socks again","Where did my boy go?","Seen my yogurt?","Better not be a roach","He said he was visiting"],momName:"Mom",roomba2:"I bought another one",roach:"A ROACH!!",roachMiss:"Where did it go",phone:"So anyway, that neighbor",phoneEnd:"Okay, bye now",late:"Getting the long hose",spotLines:["GOTCHA!","THERE!","I SEE YOU!","IT MOVED!"],toyLines:["Pedigree cat, $2 toy","Cat has new priorities","Beaten by a toy","Worth more than you"],toyRide:"The Roomba went too",toyBox:"The box is better",toyEmpty:"The cat is over mice",lureEnd:"Cat got bored",lureEndRide:"Roomba snapped out of it",hintToy:"Mouse toys lure the cat",catBox:"The cat will not leave its box",catRide:"The cat is riding the Roomba",catWake:"The cat woke up",caught:{roomba:"Hit by the Roomba",cat:"Cat punch",vac:"Stuck in the hose, spat out",slipper:"Slipper to the face"},peeled:"Peeled off the wall",oldMan:["Old resident","Doo-fu. Been here 18 years"],oldGive:"He gave you a bandage",items:{coin:"A 500-yen coin. Rent money",glasses:"Mom's reading glasses",hesokuri:"Dad's secret stash",dvd:"Tax Return 2014 (with a lock?)",ring:"The lost wedding ring",chip:"A potato chip. One bandage back"},itemNames:{coin:"500-yen coin",glasses:"reading glasses",hesokuri:"Dad's stash",dvd:"Tax Return 2014",ring:"wedding ring"},again:"Again",save:"Save image",post:"Post on X",toTitle:"Title",forms:{vac:{head:"DUST BAG INSPECTION",sub:"Collected by: Mom",list:[["Hair","plenty"],["Chip crumbs","14"],["Rubber bands","3"],["Sock fuzz (Dad)","1 ball"]],you:["Son","1 (2 cm)"],note:["Thought something was stuck. It was you. We will talk about the yogurt later.","I nearly threw you out. We will talk about the yogurt later."]},roomba:{head:"ROOMBA BIN INSPECTION",sub:"Collected by: Roomba (googly eyes)",list:[["Dust bunny","large"],["Rubber bands","2"],["Lost earring","1"]],you:["Son","1 (2 cm)"],note:["The Roomba ate something again. Trash day is Thursday.","Do not run on the floor. The floor belongs to the Roomba."]},cat:{head:"CAT TOY LEDGER",sub:"Kept by: the cat",list:[["Toy mice","3"],["Bottle caps","5"],["Dad's shoelace","1"]],you:["Owner's son","1 (2 cm)"],note:["The cat brought something again. This one moves nicely.","When the cat wiggles, it is already too late."]},slipper:{head:"PEST CONTROL RECORD",sub:"By: Mom (slipper)",list:[["Attempts","1"],["Slipper","left"],["Wall","slight dent"]],you:["Roach (son)","1 (2 cm)"],note:["I thought it was a huge roach. Then I looked closer. It was you."]}},rowTime:"Survived",rowPlace:"Found near",rowCaught:"Caught",listHead:"Contents",noteHead:"From Mom",itemsHead:"You were holding",foot:"tom3games.github.io/kobito-escape",place:["the rug","the sofa","the bookcase","the curtain","the fridge"],time:n=>`${Math.floor(n/60)}m ${String(Math.floor(n%60)).padStart(2,"0")}s`,times:n=>`${n}`,winHead:"To my son",winNote:"Tiny footprints on top of the fridge. Seen my yogurt? I thought the 2019 one was still fine.",winSign:"Mom",winRowTime:"Time to escape",winRowCaught:"Caught",winItems:"You took",winGag:["The exit led into Dad's shoe.","The exit led into the neighborhood bulletin.","The exit led to the top of the neighbor's fridge."],stamps:["COLLECTED","ALMOST","ESCAPED","UNSCATHED"],reveal:{vac:["Sucked up!","Just dust!"],slipper:["Got it!","One hit!"],cat:["Cat got one!","Guess what?"],roomba:["Spit it out!","Roomba ate!"],win:["Come back!","My yogurt!"]},postWin:(n,e)=>`I shrank to 2 cm and escaped the house in ${n}, caught ${e} times`,postLose:(n,e)=>`I shrank to 2 cm and ended up in the ${n}. Survived ${e}`}},Dn=Ch.get("kob.lang")||((navigator.language||"ja").startsWith("ja")?"ja":"en"),ct=n=>Ia[Dn][n],sx={floss:'<svg viewBox="0 0 40 40"><rect x="9" y="8" width="22" height="28" rx="4" fill="#7fd5bd" stroke="#123c33" stroke-width="2"/><rect x="9" y="8" width="22" height="10" rx="3" fill="#f4faf7" stroke="#123c33" stroke-width="2"/><path d="M20 8 C24 4 18 2 22 0" fill="none" stroke="#123c33" stroke-width="1.5"/></svg>',stick:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#f2eddf" stroke="#b9ae93" stroke-width="3"/><circle cx="15" cy="15" r="2.3" fill="#4a4336"/><circle cx="25" cy="15" r="2.3" fill="#4a4336"/><circle cx="15" cy="25" r="2.3" fill="#4a4336"/><circle cx="25" cy="25" r="2.3" fill="#4a4336"/></svg>',roomba:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#24262b"/><circle cx="14" cy="15" r="5" fill="#f8f8f4"/><circle cx="26" cy="15" r="5" fill="#f8f8f4"/><circle cx="14" cy="16" r="2.4"/><circle cx="26" cy="16" r="2.4"/></svg>',cat:'<svg viewBox="0 0 40 40"><path d="M6 6 L14 13 Q20 11 26 13 L34 6 L35 25 Q33 36 20 36 Q7 36 5 25Z" fill="#d98a3d"/><ellipse cx="14" cy="22" rx="3.5" ry="4.4" fill="#e6cd3e"/><ellipse cx="26" cy="22" rx="3.5" ry="4.4" fill="#e6cd3e"/><rect x="13.3" y="18" width="1.4" height="8"/><rect x="25.3" y="18" width="1.4" height="8"/></svg>',toy:'<svg viewBox="0 0 40 40"><use href="#mouseToy"/></svg>',vac:'<svg viewBox="0 0 40 40"><path d="M23 2 L28 4 L22 22 L16 20Z" fill="#8f9499"/><rect x="3" y="21" width="34" height="11" rx="3" fill="#2b2d31"/><rect x="5" y="30" width="30" height="3" fill="#b33a2b"/></svg>',exit:'<svg viewBox="0 0 68 76" style="color:#00a65a"><use href="#runner"/></svg>'};function Ph(){document.documentElement.lang=Dn;for(let n of document.querySelectorAll("[data-t]")){let e=ct(n.dataset.t);typeof e=="string"&&(n.textContent=e)}ze("howList").innerHTML=ct("howItems").map(([n,e])=>`<li>${sx[n]}<span>${e}</span></li>`).join(""),ze("btnMute").textContent=Snd.muted?ct("muteOff"):ct("muteOn")}Snd.muted=Ch.get("kob.mute")==="1";Snd.pre=["snd/vacuum_loop.wav","snd/roomba_loop.wav","snd/bgm_play.mp3","snd/city_street_loop.wav","snd/fridge_loop.wav","snd/wind_loop.wav","snd/purr_loop.wav"];Snd.def({wire:["snd/swish1.mp3","snd/swish2.mp3","snd/swish3.mp3"],pluck:["snd/pluck1.mp3","snd/pluck2.mp3"],whoosh:"snd/swish5.mp3",step:["snd/step1.mp3","snd/step2.mp3"],bonk:["snd/thwack1.mp3","snd/thwack2.mp3"],wood:["snd/woodhit1.mp3","snd/woodhit2.mp3"],mew:["snd/cat_mew1.mp3","snd/cat_mew2.mp3","snd/cat_mew3.mp3"],slap:"snd/slap.mp3",suck:"snd/suck.mp3",pop:["snd/pop1.mp3","snd/pop2.mp3"],coin:"snd/coin.mp3",paper:["snd/paper1.mp3","snd/paper2.mp3"],door:"snd/door.mp3",slam:"snd/slam.mp3",ding:"snd/ding.mp3",click:"snd/click.mp3",grunt:["snd/grunt1.mp3","snd/grunt2.mp3","snd/grunt3.mp3"],squeak:["snd/squeak1.mp3","snd/squeak2.mp3"],win:"snd/win.mp3",meh:"snd/meh.mp3",lose:"snd/lose.mp3"});var je=(n,e)=>Snd.play(n,e),vg=qc,Yp={done:0,total:0};vg.onStart=vg.onProgress=(n,e,t)=>{Yp.done=e,Yp.total=t,Yp.at=performance.now(),window.__bootSet&&window.__bootSet(.3+.7*(t?e/t:0))};function rx(n){let e=performance.now(),t=()=>{if(es.ready||es.failed||performance.now()-e>12e3){window.__bootDone=!0,window.__bootSet&&window.__bootSet(1);let i=ze("boot");i.classList.add("out"),setTimeout(()=>i.classList.add("hidden"),380),n();return}setTimeout(t,100)};t()}window.__bootSet&&window.__bootSet(.25);var tn=new $c({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});tn.setPixelRatio(th.pixelRatio);tn.outputColorSpace=ft;tn.toneMapping=Do;tn.toneMappingExposure=1.08;tn.shadowMap.enabled=!0;tn.shadowMap.type=Cc;ze("view").appendChild(tn.domElement);var Ot=new $r;Ot.background=new Te(14471094);Ot.fog=new ao(15128765,.0017);var li=new Qs(16773336,2.5);li.userData.dir=new R(.68,.62,-.38).normalize();li.castShadow=!0;var bh=ba?55:85;li.shadow.mapSize.set(th.shadow,th.shadow);Object.assign(li.shadow.camera,{left:-bh,right:bh,top:bh,bottom:-bh,near:1,far:460});li.shadow.normalBias=.05;li.shadow.bias=-5e-4;Ot.add(li,li.target);Ot.add(new Co(16774368,9072206,1.55));{let n=new $r;n.background=new Te(13155234);let e=new va(tn),t=(i,s,r,a,o)=>{let l=new be(new an(o,o,o),new st({color:i}));l.position.set(s,r,a),n.add(l)};t(16777215,0,30,0,18),t(16771520,30,10,0,16),t(5917242,0,-30,0,40),Ot.environment=e.fromScene(n,.05,.1,100).texture,Ot.environmentIntensity=.55}var St=new Xt(64,1,.2,1500),on=j0(),Sh=K0(Ot,tn),Gt=new eh(Ot,on),fr=hg(Ot),sl=dg(Ot);sl.g.position.set(Qe.old.x,Qe.old.y,Qe.old.z);sl.g.rotation.y=1.2;var Th=[new $o(Ot),new $o(Ot)],Eh=new yh(Ot),Ra=new vh(Ot),of=new _h(Ot),Tg=new xh(Ot),Is=new be(new qt(.05,.05,1,5).rotateX(Math.PI/2).translate(0,0,.5),new st({color:15400949,fog:!1}));Is.visible=!1;Ot.add(Is);var qn=new be(new ni(.55,.8,24),new st({color:13041638,transparent:!0,opacity:.95,depthTest:!1,side:rt,fog:!1}));qn.renderOrder=5;qn.visible=!1;Ot.add(qn);var Rt="title",Ae=null,Ve=null,Yn=null,is=null,_r=!1,wg=!1,gr=0,Ah=null,mr=0,il=0,yr=0,Ca=0,Pa=0,Qp=0,En={},ef=!1,tf=0,oi=null,qe={hd:0,pitch:.22,pos:new R,off:new R(0,3,-6),look:new R,lookOff:new R(0,1,10),fov:64,bank:0},Ls=new R,nf=class{constructor(){this.group=new wt;let e=new be(new ji(.34,1.05,4,10),new bt({color:15921126}));e.position.y=.9,e.castShadow=!0,this.group.add(e),this.handWorld=new R}update(e){this.group.position.set(e.x,e.y,e.z),this.group.rotation.y=e.yaw,this.handWorld.set(e.x,e.y+1.5,e.z)}dispose(){}};function lf(){Yn&&(Ot.remove(Yn.group),Yn.dispose(),Yn=null),Yn=es.ready?new Yo:new nf,Ot.add(Yn.group)}G0().then(()=>{es.ready&&!(Yn instanceof Yo)&&lf()});var ns=null,xr=new Map,Kp=new No,xg=new oe;tn.domElement.addEventListener("pointerdown",n=>{Snd.init(),!(Rt!=="play"||_r)&&xr.set(n.pointerId,{x:n.clientX,y:n.clientY,lx:n.clientX,ly:n.clientY,t:performance.now(),moved:!1})});addEventListener("pointermove",n=>{let e=xr.get(n.pointerId);if(!e)return;let t=n.clientX-e.lx,i=n.clientY-e.ly;e.lx=n.clientX,e.ly=n.clientY,!e.moved&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>12&&(e.moved=!0),e.moved&&(qe.hd-=t*.00792,qe.pitch=vr(qe.pitch+i*.00528,-.35,1))});addEventListener("pointerup",n=>{let e=xr.get(n.pointerId);e&&(xr.delete(n.pointerId),!e.moved&&performance.now()-e.t<450&&Rt==="play"&&!_r&&Eg(n.clientX,n.clientY))});addEventListener("pointercancel",n=>xr.delete(n.pointerId));function Eg(n,e){let t=tn.domElement.getBoundingClientRect();xg.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Kp.setFromCamera(xg,St);let i=Kp.ray.origin,s=Kp.ray.direction,r=Ae&&Ae.rope?null:eg(on,i.x,i.y,i.z,s.x,s.y,s.z,400,Ae?Math.max(0,(Ae.x-i.x)*s.x+(Ae.y+1-i.y)*s.y+(Ae.z-i.z)*s.z-1):0),a=r;if(Ae&&!Ae.rope&&!Ae.grounded&&!Ae.climbing){let o=ax(i,s,le.wireRange+60),l=r?Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z):1/0;o&&!(l<o.t+6)&&(a={x:o.x,y:o.y,z:o.z,ground:!0})}ns={at:a,sx:n,sy:e}}function ax(n,e,t){let i=s=>{let r=n.x+e.x*s,a=n.y+e.y*s,o=n.z+e.z*s;return a<=hr(on,r,o,a).h};for(let s=1;s<t;s+=1){if(!i(s))continue;let r=s-1,a=s;for(let c=0;c<6;c++){let h=(r+a)/2;i(h)?a=h:r=h}let o=n.x+e.x*a,l=n.z+e.z*a;return{x:o,y:hr(on,o,l,n.y+e.y*a+.5).h,z:l,t:a}}return null}var gt={x:0,y:0,id:null};{let n=ze("stick"),e=n.querySelector(".knob"),t=()=>{let a=n.getBoundingClientRect();return{x:a.left+a.width/2,y:a.top+a.height/2,R:a.width/2}},i=a=>{let o=t(),l=(a.clientX-o.x)/o.R,c=(a.clientY-o.y)/o.R,h=Math.hypot(l,c);h>1&&(l/=h,c/=h),gt.x=l,gt.y=c,e.style.transform=`translate(${l*o.R*.56}px,${c*o.R*.56}px)`},s=a=>{gt.id=a.pointerId,i(a),n.classList.remove("pulse")};n.addEventListener("pointerdown",a=>{Snd.init(),gt.id==null&&(a.preventDefault(),a.stopPropagation(),s(a))}),addEventListener("pointermove",a=>{if(a.pointerId===gt.id){i(a);return}if(gt.id==null&&xr.has(a.pointerId)){let o=t();Math.hypot(a.clientX-o.x,a.clientY-o.y)<o.R&&(xr.delete(a.pointerId),s(a))}},!0);let r=a=>{a.pointerId===gt.id&&(gt.id=null,gt.x=gt.y=0,e.style.transform="")};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0),ze("btnWire").addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),Snd.init(),ns={at:null,key:!0}})}function Ag(){let n=St.matrixWorld.elements,e=n[0],t=n[2],i=-n[8],s=-n[10],r=Math.hypot(e,t)||1,a=Math.hypot(i,s)||1;return{r:{x:e/r,z:t/r},f:{x:i/a,z:s/a}}}function ox(){let n=0,e=null,t=null,i=null,{r:s,f:r}=Ag();if(gt.id!=null){let o=Math.min(1,Math.hypot(gt.x,gt.y));if(o>.15){let l=s.x*gt.x-r.x*gt.y,c=s.z*gt.x-r.z*gt.y,h=Math.hypot(l,c)||1;i={x:l/h,z:c/h},n=Math.min(1,o*1.3)}if(Ae.climbing){let l=Ae.climbing,c=s.x*l.nz-s.z*l.nx>=0?1:-1;e=Math.abs(gt.y)>.25?-gt.y:0,t=Math.abs(gt.x)>.25?gt.x*c:0}}let a={throttle:n,brake:0,steer:0,jump:!1,wire:!1,wallY:e,wallX:t,moveDir:i};return a.wireYaw=i?Math.atan2(i.x,i.z):Math.atan2(r.x,r.z),ns&&(a.wire=!0,ns.at&&(a.wireAt=ns.at),Ae._tap=ns,ns=null),a}function La(n){for(let e of["title","how","pause","reveal","result"])ze(e).classList.toggle("hidden",e!==n);ze("hud").classList.toggle("hidden",Rt!=="play"),ze("danger").style.opacity=0,yr=0}function Rg(){for(let n in fr)fr[n].visible=!0;sl.g.visible=!1,of.update(null,9,St),Eh.ring.visible=Eh.fill.visible=!1}function Ih(){clearTimeout(Nh),Rt="title",_r=!1,Ae=null,Ve=null,gr=0,oi=null;let n=dh({id:"demo",spawn:or});is={r:n,m:fh(on,n,7),b:Mh("skilled",7),seed:7},Rg(),lf(),qe.hd=0,qe.pitch=.3,La("title"),Snd.loop("bgm","snd/bgm_title.mp3",.2),Snd.loop("amb","snd/city_street_loop.wav",.1),Snd.loop("vac",null),Snd.loop("rmb",null),Snd.loop("wind",null),Snd.loop("purr",null),Snd.loop("frg",null)}function cf(n=Math.floor(Math.random()*1e6)){Snd.init(),je("click"),clearTimeout(Nh),Rt="play",_r=!1,is=null,gr=0,oi=null,Ah=null,mr=0,Pa=11,Qp=n%9,En={},ef=!1,lx=!1,Ig=n%4,Lg=n%4,nl=0,ze("momCut").classList.add("hidden"),Ae=dh({id:"me",spawn:or}),Ve=fh(on,Ae,n),Ve.seed=n,Rg(),lf(),sl.g.visible=Ve.rare.oldMan,qe.hd=0,qe.pitch=.22,qe.off.set(0,3,-6),qe.lookOff.set(0,1,10),La(null),ze("stick").classList.add("pulse"),ze("btnWire").classList.add("pulse"),Pg(Qe.lives),zg(Qe.toy.uses),Snd.loop("bgm","snd/bgm_play.mp3",.15),Snd.loop("amb","snd/city_street_loop.wav",.1),Snd.loop("frg","snd/fridge_loop.wav",1e-4),Snd.loop("rmb","snd/roomba_loop.wav",1e-4),Snd.loop("vac","snd/vacuum_loop.wav",1e-4),Snd.loop("wind","snd/wind_loop.wav",1e-4),Snd.loop("purr","snd/purr_loop.wav",1e-4),en(ct("hint1"),3)}function rl(n){Rt==="play"&&(_r=n,ze("pause").classList.toggle("hidden",!n))}document.addEventListener("visibilitychange",()=>{document.hidden?(Rt==="play"&&Ve&&!Ve.over&&rl(!0),Snd.ctx&&Snd.ctx.suspend()):Snd.ctx&&Snd.ctx.state==="suspended"&&!window.__muteOk&&Snd.ctx.resume()});var Cg=-1;function Pg(n){let e=ze("plasters");e.children.length!==Qe.lives&&(e.innerHTML='<i class="pl"></i>'.repeat(Qe.lives));for(let t=0;t<Qe.lives;t++)e.children[t].classList.toggle("off",t>=n);Cg=n}function en(n,e){let i=.9+n.replace(/<[^>]+>/g,"").length*.09,s=ze("say");s.innerHTML=n,s.classList.remove("hidden"),Ca=Math.max(e||0,i)}var sf=(n,e)=>en(`<small>${n}</small>${e}`),lx=!1,Ig=0,Lg=0,nl=0;function Aa(n,e=1.5){let t=wn.faces[n];if(!t)return;let i=ze("momCut"),s=i.firstElementChild;s.src=t.src,i.dataset.k=n,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",nl=e,Lh.push({src:"g",t:"cut",k:n,at:Ve?+Ve.t.toFixed(2):0})}var dr=n=>sf(ct("momName"),n);function _g(n,e,t,i){let s=St.matrixWorld.elements,r=-s[8],a=-s[10],o=-a,l=r,c=n-t,h=e-i;return Math.atan2(c*o+h*l,c*r+h*a)}var Mg=1/.75;function cx(n){ze("tClock").textContent=`${Math.floor(Ve.t/60)}:${String(Math.floor(Ve.t%60)).padStart(2,"0")}`,Cg!==Ve.lives&&Pg(Ve.lives),Ng!==Ve.toyUses&&zg(Ve.toyUses);let e=Ve.lure>0?Ve.lure/Qe.toy.lure:0;if(ze("toyBar")._k!==e&&(ze("toyBar")._k=e,ze("toyBar").style.transform=`scaleX(${e.toFixed(3)})`,ze("toys").classList.toggle("live",e>0)),nl>0&&(nl-=n,nl<=0&&ze("momCut").classList.add("hidden")),!En.t&&Ve.toyUses>0&&Ve.t>2&&Ca<=0){for(let p of Ve.toys)if(p.state==="idle"&&Math.hypot(p.x-Ae.x,p.y-Ae.y,p.z-Ae.z)<42){En.t=1,en(ct("hintToy"));break}}let t=ts[Ve.way],i=ct("way")[t.key];ze("signName")._v!==i&&(ze("signName")._v=i,ze("signName").textContent=i);let s=Math.hypot(t.x-Ae.x,t.z-Ae.z)*Mg,r=(t.y-Ae.y)*Mg,a=Math.abs(r)>14&&s<60?(r>0?ct("up"):ct("down"))(Math.round(Math.abs(r))):ct("dist")(s)+(r>30?" "+ct("up")(Math.round(r)):"");ze("signDist")._v!==a&&(ze("signDist")._v=a,ze("signDist").textContent=a),St.updateMatrixWorld(),ze("signArrow").style.transform=`rotate(${_g(t.x,t.z,Ae.x,Ae.z)}rad)`,Ca>0&&(Ca-=n,Ca<=0&&ze("say").classList.add("hidden"));let o=ag(Ve),l=innerWidth,c=innerHeight,h={},u=0;for(let p of o){let d=p.k;if(h[d]&&h[d]<p.d)continue;h[d]=p.d;let f=wh[d];if(!f)continue;let m=d==="roomba"?Ae.y<10?95:0:100;u=Math.max(u,p.d<40?d==="roomba"&&Ae.y>=10?0:1-p.d/40:0),Ls.set(p.x,p.y,p.z).project(St);let x=Ls.z>1,g=!x&&Math.abs(Ls.x)<.95&&Math.abs(Ls.y)<.95;if(p.d>m||g){f.classList.add("hidden");continue}f.classList.remove("hidden");let v=_g(p.x,p.z,Ae.x,Ae.z),_=Math.min(l,c)*.42,b=l/2+Math.sin(v)*_,T=c*.5-Math.cos(v)*Math.min(c*.34,_*1.6);f.style.transform=`translate(${vr(b,26,l-26).toFixed(0)}px,${vr(T,96,c-200).toFixed(0)}px)`}for(let p in wh)h[p]==null&&wh[p].classList.add("hidden");ze("danger").style.opacity=(u*.75).toFixed(2)}var Ng=-1;function zg(n){let e=ze("toyTokens");e.children.length!==Qe.toy.uses&&(e.innerHTML='<svg class="ty" viewBox="0 0 40 40"><use href="#mouseToy"/></svg>'.repeat(Qe.toy.uses));for(let t=0;t<Qe.toy.uses;t++)e.children[t].classList.toggle("off",t>=n);Ng=n}var wh={};for(let n of document.querySelectorAll(".threat"))wh[n.dataset.k]=n;var Lh=[];function hx(n){if(Lh.push({src:"r",...n,at:Ve?+Ve.t.toFixed(2):0}),n.t==="wire")je("wire",{vol:.7}),je("pluck",{vol:.35,delay:.05,rate:1.3}),ef||(ef=!0,ze("btnWire").classList.remove("pulse"),ze("stick").classList.remove("pulse"));else if(n.t==="wireMiss"){je("wire",{vol:.35,rate:1.3});let e=ze("miss");e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(e._t),e._t=setTimeout(()=>e.classList.add("hidden"),800)}else if(n.t==="land")je("step",{vol:Math.min(1,.3+n.impact/20)}),n.impact>14&&(je("bonk",{vol:.5}),Gt.addShake(Math.min(.6,n.impact/40)));else if(n.t==="bonk")je("bonk",{vol:.8}),Gt.addShake(.4);else if(n.t==="unwire"&&!n.auto){let e=Math.hypot(Ae.vx,Ae.vy,Ae.vz);e>16&&(je("whoosh",{vol:Math.min(.8,e/50),rate:.9+Math.random()*.2}),il=Math.min(6,(e-16)*.3))}}function ux(n){Lh.push({src:"m",...n,at:+Ve.t.toFixed(2)});let e=Ia[Dn];if(n.t==="roombaOn")je("click",{vol:.7,rate:.7}),En.r||(En.r=1,en(ct("hint2")));else if(n.t==="roomba2")dr(ct("roomba2")),je("door");else if(n.t==="catWake")je("mew",{vol:.8}),n.quiet||en(ct("catWake"));else if(n.t==="crouch"&&n.quiet)je("mew",{vol:.25,rate:1.3});else if(n.t==="crouch")En.c||(En.c=1,en(ct("hintCat"))),je("mew",{vol:.35,rate:1.1});else if(n.t==="leap")je("whoosh",{vol:.5,rate:.75});else if(n.t==="catLand"){let t=vr(1-n.near/120,.1,1);je("wood",{vol:t}),Gt.addShake(.45*t),Gt.dust(n.x,n.y+1,n.z,16,[.78,.72,.62],1.5)}else if(n.t==="swipe")je("whoosh",{vol:.5,rate:1.3});else if(n.t==="momIn")je("door",{vol:1}),je("slam",{vol:.8,delay:.25}),sf(e.momIn[0],e.momIn[1]),Gt.addShake(.6),Aa("normal",1.8);else if(n.t==="momSpot"){let t=ct("spotLines");dr(t[Ig++%t.length]),Aa("spot",1.4),je("grunt",{vol:.7,rate:.7})}else if(n.t==="momWin")Aa("win",2);else if(n.t==="toyHit"){if(En.t=1,n.mode==="box")en(ct("toyBox"));else if(n.mode==="ride")en(ct("toyRide"));else{let t=ct("toyLines");en(t[Lg++%t.length]),je("mew",{vol:.9,delay:.3})}Gt.dust(n.x,n.y+1,n.z,8,[.78,.72,.62],1)}else if(n.t==="toySqueak"){let t=Ae?Math.hypot(n.x-Ae.x,n.y-Ae.y,n.z-Ae.z):0,i=vr(1-t/170,.08,1)*(n.soft?.55:1);je("squeak",{vol:i,rate:1.05+Math.random()*.4})}else n.t==="toyEmpty"?en(ct("toyEmpty")):n.t==="lureEnd"?n.box||(en(n.ride?ct("lureEndRide"):ct("lureEnd")),je("mew",{vol:.6,rate:.82})):n.t==="phone"?(dr(ct("phone")),je("click",{rate:1.4}),Aa("phone",2.4)):n.t==="phoneEnd"?dr(ct("phoneEnd")):n.t==="late"?(dr(ct("late")),Aa("angry",1.8)):n.t==="roach"?(dr(ct("roach")),je("grunt",{vol:.9,rate:.75}),Aa("angry",1.6)):n.t==="slap"?(je("slap",{vol:1}),je("wood",{vol:.8}),Gt.addShake(1.1),Gt.dust(n.x,n.y+1,n.z,28,[.78,.72,.62],2),mr=.05):n.t==="peeled"?en(ct("peeled")):n.t==="item"?(n.heal?(je("pop",{vol:.9}),je("squeak",{vol:.4})):(je("coin",{vol:.9}),je("paper",{vol:.4,delay:.1})),fr[n.id].visible=!1,en(e.items[n.id]),yr=.35,mr=.03,Gt.debrisAt(n.x,n.y+3,n.z,10,16770723,{speed:7,up:6,size:.14})):n.t==="oldMan"?(sf(e.oldMan[0],e.oldMan[1]),je("squeak",{vol:.7}),je("squeak",{vol:.6,delay:.25})):n.t==="way"?je("ding",{vol:.42,rate:1.2}):n.t==="caught"?(mr=.1,yr=1,il=8,Gt.addShake(1.2),je(n.by==="vac"?"suck":n.by==="cat"?"slap":"bonk",{vol:1}),je("grunt",{vol:.85,delay:.05}),n.by==="cat"&&je("mew",{vol:.8,delay:.25}),n.by==="vac"&&je("pop",{vol:.9,delay:.5}),n.lives>0&&en(e.caught[n.by]),Gt.debrisAt(n.x,n.y,n.z,16,13616301,{speed:8,up:7,size:.16}),dx()):n.t==="end"&&(gr=n.won?2.2:1.7,Snd.loop("vac",null,0,.5),Snd.loop("rmb",null,0,.5),Snd.loop("bgm",null,0,.8),Snd.loop("purr",null,0,.4),n.won?(je("ding",{vol:1}),yr=1,il=-6,mr=.08,Gt.debrisAt(Ut.x,Ut.y+2,Ut.z,14,7339965,{speed:9,up:9,size:.07}),Rh=!0):(Gt.addShake(1.4),ze("danger").style.opacity=1));(n.t==="way"||n.t==="caught")&&(Pa=Math.max(Pa,3)),(n.t==="end"||n.t==="caught")&&Snd.duck(.5,.7)}var Rh=!1,rf=null;function dx(){Rh=!0}function px(){let n=document.createElement("canvas");n.width=512,n.height=Math.round(512*innerHeight/innerWidth),n.getContext("2d").drawImage(tn.domElement,0,0,n.width,n.height),Ah=n}var fx=1200,mx=250,gx=350,bg={vac:{face:"win",snd:[["slap",{vol:1}],["grunt",{vol:.8,rate:.72,delay:.1}]]},slipper:{face:"win",snd:[["slap",{vol:1}],["wood",{vol:.8,delay:.06}]]},cat:{face:"phone",snd:[["bonk",{vol:.9}],["mew",{vol:.8,delay:.18}]]},roomba:{face:"spot",snd:[["bonk",{vol:.9}],["pop",{vol:.8,delay:.14}]]},win:{face:"angry",snd:[["bonk",{vol:1}],["grunt",{vol:.85,rate:.85,delay:.1}]]}},Nh=0,Dg=0;function Ug(){let n=Ve,e=n.won?"win":bg[n.by]?n.by:"vac",t=bg[e],i=wn.big[t.face]||wn.faces[t.face];if(!i){if(n.revWait=n.revWait||performance.now(),!wn.done&&performance.now()-n.revWait<4e3){gr=.1;return}return hf()}Rt="reveal",La("reveal");let s=Ia[Dn].reveal[e],r=s[n.seed%s.length],a=ze("revFrame");a.dataset.k=t.face,a.replaceChildren(i),ze("revLine").textContent=r;for(let[o,l]of t.snd)je(o,{...l,delay:(l.delay||0)+.09});Gg(0,0),Dg=performance.now(),Nh=setTimeout(Og,fx),window.__revealLast={by:e,face:t.face,line:r,big:i===wn.big[t.face]}}function Og(){if(clearTimeout(Nh),Rt!=="reveal")return;hf();let n=ze("result");n.classList.add("settle"),setTimeout(()=>n.classList.remove("settle"),gx)}ze("reveal").onclick=()=>{performance.now()-Dg>=mx&&Og()};function hf(){Rt="result";let n=Ia[Dn],e=Ve,t=rg(e),i=e.catches.length,s=Dn==="en",r=e.itemsGot.map(o=>n.itemNames[o]),a;if(e.won)a={lang:Dn,won:!0,face:wn.faces.angry,head:n.winHead,note:n.winNote,sign:n.winSign,gag:n.winGag[e.seed%n.winGag.length],rows:[[n.winRowTime,n.time(e.t)],[n.winRowCaught,n.times(i)]],items:r,itemsHead:n.winItems,photo:Ah};else{let o=n.forms[e.by]||n.forms.vac;a={lang:Dn,won:!1,face:wn.faces[e.by==="vac"||e.by==="slipper"?"win":e.by==="cat"?"search":"normal"],head:o.head,sub:o.sub,bg:e.by==="slipper"?"#e9ddc8":e.by==="cat"?"#f1e6d3":"#efe7d2",rows:[[n.rowTime,n.time(e.t)],[n.rowPlace,n.place[Math.min(e.way,4)]],[n.rowCaught,n.times(i)]],listHead:n.listHead,list:[...o.list.map(([l,c])=>({t:l,n:c})),{t:o.you[0],n:o.you[1],you:!0}],items:r,itemsHead:n.itemsHead,noteHead:n.noteHead,note:o.note[e.seed%o.note.length],foot:n.foot,photo:Ah}}La("result"),Fg(),document.fonts&&document.fonts.ready.then(()=>{Rt==="result"&&Xp(ze("paper"),a)}),Xp(ze("paper"),a),oi={text:n.stamps[t],col:t>=2?"#008a4b":"#b5271a",r:t,won:e.won},tf=1,ze("btnPost").href="https://x.com/intent/post?text="+encodeURIComponent(e.won?n.postWin(n.time(e.t),i):n.postLose((n.forms[e.by]||n.forms.vac).head,n.time(e.t)))+"&url="+encodeURIComponent(ix),je("paper",{vol:.9}),window.__lastResult={won:e.won,rank:t,t:e.t,by:e.by,catches:i,items:e.itemsGot.length,stamp:n.stamps[t]}}function Fg(){let n=ze("paper"),e=ze("result").querySelector(".paper-wrap").getBoundingClientRect(),t=Math.min(e.width/n.width,e.height/n.height,1);n.style.width=Math.floor(n.width*t)+"px",n.style.height=Math.floor(n.height*t)+"px"}addEventListener("resize",()=>{Rt==="result"&&Fg()});ze("btnSave").onclick=()=>{ze("paper").toBlob(n=>{let e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="kobito-escape.png",e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),4e3)})};ze("btnStart").onclick=()=>cf();ze("btnAgain").onclick=()=>cf();ze("btnTitle").onclick=()=>{je("click"),Ih()};ze("btnHow").onclick=()=>{Snd.init(),je("paper"),La("how")};for(let n of document.querySelectorAll("[data-close]"))n.onclick=()=>La("title");ze("btnLang").onclick=()=>{Dn=Dn==="ja"?"en":"ja",Ch.set("kob.lang",Dn),Ph()};ze("btnMute").onclick=()=>{Snd.init(),Snd.setMute(!Snd.muted),Ch.set("kob.mute",Snd.muted?"1":"0"),Ph()};ze("btnPause").onclick=()=>rl(!0);ze("btnResume").onclick=()=>rl(!1);ze("btnQuit").onclick=()=>{rl(!1),Ih()};function yx(n,e,t){if(window.__freeze)return;let i=e.x,s=e.y,r=e.z,a=Math.hypot(e.vx,e.vz);if(t){let T=Math.sin(e.yaw),M=Math.cos(e.yaw);a>6&&(T=e.vx/a,M=e.vz/a);let w=Math.atan2(T,M)-qe.hd;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;qe.hd+=w*(1-Math.exp(-n*1.4))}let o=Math.sin(qe.hd),l=Math.cos(qe.hd),c=5.8+Math.min(2.4,a*.07),h=2.6;h+=qe.pitch*4.2,c*=1-Math.max(0,qe.pitch)*.15;let u=i-o*c,p=r-l*c,d=s+h;for(let T=1;T<=6;T++){let M=T/6,w=i+(u-i)*M,U=r+(p-r)*M,z=s+(d-s)*M,D=!1;for(let G of on.nearby(w,U))if(!(G.noHit||G.oneWay||G.y0==null||z<G.y0-.3||z>G.y1+.3)&&Math.abs(w-G.cx)<G.hw+.4&&Math.abs(U-G.cz)<G.hl+.4){D=!0;break}if(D){let G=Math.max(.25,(T-1)/6);u=i+(u-i)*G,p=r+(p-r)*G,d=s+h*.8+(1-G)*2;break}}d=Math.max(d,hr(on,u,p,d).h+.5),d=Math.min(d,on.ceilY-1.2),qe.off.lerp(Ls.set(u-i,d-s,p-r),1-Math.exp(-n*10)),qe.pos.set(i+qe.off.x,s+qe.off.y,r+qe.off.z),qe.lookOff.lerp(Ls.set(o*10,1.7-qe.pitch*1.2,l*10),1-Math.exp(-n*12)),qe.look.set(i+qe.lookOff.x,s+qe.lookOff.y,r+qe.lookOff.z),St.position.copy(qe.pos);let f=Gt.shake;f>0&&St.position.add(Ls.set((Math.random()-.5)*f,(Math.random()-.5)*f*.7,(Math.random()-.5)*f)),St.lookAt(qe.look);let m=St.aspect,g=(m>=1?60:Math.min(84,2*Math.atan(Math.tan(Fo.degToRad(37))/m)*180/Math.PI))+Math.min(18,Math.max(0,Math.hypot(e.vx,e.vy,e.vz)-6)*.5);qe.fov+=(g-qe.fov)*(1-Math.exp(-n*4)),il*=Math.exp(-n*6),St.fov=qe.fov+il,St.updateProjectionMatrix();let v=St.matrixWorld.elements,_=Math.hypot(v[0],v[2])||1,b=(e.vx*v[0]+e.vz*v[2])/_;qe.bank+=(vr((e.rope?b:0)*-.004,-.1,.1)-qe.bank)*(1-Math.exp(-n*3)),St.rotateZ(qe.bank)}function Bg(){let n=innerWidth,e=innerHeight;tn.setSize(n,e,!1),St.aspect=n/e,St.updateProjectionMatrix(),Gt.setScale&&Gt.setScale(e)}addEventListener("resize",Bg);Bg();var Zp=performance.now(),el=0,Jp=0;function kg(){if(Rt==="play"&&!_r&&Ae)if(Ve.over)Ae.events.length=0,ph(Ae,{},ai,on);else{let n=rf?qp(rf,Ae,Ve,on,ai):ox();Ae.events.length=0,ph(Ae,n,ai,on);for(let e of Ae.events)hx(e);Hp(Ve,ai);for(let e of Ve.events)ux(e);if(Ve.events.length=0,Ve.mom.in&&Ve.t>0&&(Pa-=ai,Pa<=0&&Ca<=0)){let e=ct("momLines");dr(e[Qp++%e.length]),Pa=9+Qp%5*1.3}Ve.mom.sucking&&!En.v&&(En.v=1,en(ct("hintVac"))),Ve.rare.catBox&&!En.b&&Ve.t>9&&(En.b=1,en(ct("catBox"))),Ve.rare.catOnRoomba&&!En.b&&Ve.t>6&&(En.b=1,en(ct("catRide")))}else if(Rt==="title"&&is){let n=is,e=qp(n.b,n.r,n.m,on,ai);if(n.r.events.length=0,ph(n.r,e,ai,on),Hp(n.m,ai),n.m.events.length=0,n.m.over){let t=dh({id:"demo",spawn:or}),i=(n.seed||7)+1;is={r:t,m:fh(on,t,i),b:Mh("skilled",i),seed:i}}}}function Hg(){if(requestAnimationFrame(Hg),Rt==="reveal"){Zp=performance.now();return}let n=performance.now(),e=Math.min(.1,(n-Zp)/1e3);if(Zp=n,mr>0)mr-=e,el=0;else if(wg)e=0;else{el+=e;let t=0;for(;el>=ai&&t<6;)kg(),el-=ai,t++;t>=6&&(el=0)}af(e||.016)}var pr=ze("speedfx"),Ii=pr.getContext("2d"),vx=ze("hitflash"),Sg=Array.from({length:46},()=>({a:Math.random()*Math.PI*2,p:Math.random(),s:.6+Math.random()*.8,w:1+Math.random()*2})),$p=!1;function Gg(n,e){window.__holdFx||(yr=Math.max(0,yr-e*4)),vx.style.opacity=yr.toFixed(2);let t=vr((n-20)/18,0,1);if(window.__speedK=t,t<=0){$p&&(Ii.clearRect(0,0,pr.width,pr.height),$p=!1);return}$p=!0;let i=innerWidth,s=innerHeight,r=Math.min(2,devicePixelRatio||1);(pr.width!==Math.round(i*r)||pr.height!==Math.round(s*r))&&(pr.width=Math.round(i*r),pr.height=Math.round(s*r)),Ii.setTransform(r,0,0,r,0,0),Ii.clearRect(0,0,i,s);let a=i/2,o=s*.45,l=Math.hypot(i,s)*.55;Ii.lineCap="butt";let c=Math.round(Sg.length*(.35+.65*t));for(let h=0;h<c;h++){let u=Sg[h];u.p+=e*u.s*(1.6+t*2.4),u.p>1&&(u.p-=1,u.a=Math.random()*Math.PI*2);let p=l*(1.05-u.p*.45),d=p-l*(.12+.2*t)*u.s,f=Math.cos(u.a),m=Math.sin(u.a);Ii.strokeStyle=`rgba(255,255,255,${(.1+.32*t)*Math.min(1,u.p*4)})`,Ii.lineWidth=u.w,Ii.beginPath(),Ii.moveTo(a+f*d,o+m*d),Ii.lineTo(a+f*p,o+m*p),Ii.stroke()}}var tl=(n,e)=>{let t=Snd.loops[n];t&&t.g&&(t.g.gain.value=Number.isFinite(e)?e:0)};function af(n){let e=Rt==="title"?is&&is.r:Ae,t=Rt==="title"?is&&is.m:Ve;if(e&&Yn)if(Yn.update(e,n,St),Yn.group.visible=!(t&&t.over&&!t.won&&t.by==="vac"),e.rope){let o=Yn.handWorld;Is.visible=!0,Is.position.copy(o),Is.lookAt(e.rope.x,e.rope.y,e.rope.z),Is.scale.set(1,1,Math.max(.1,o.distanceTo(Ls.set(e.rope.x,e.rope.y,e.rope.z))))}else Is.visible=!1;else Is.visible=!1;if(e){yx(n,e,Rt==="title");let o=li.userData.dir;li.position.set(e.x+o.x*210,e.y+o.y*210,e.z+o.z*210),li.target.position.set(e.x,e.y,e.z)}if(t){for(let l=0;l<2;l++)t.roombas[l]?Th[l].update(t.roombas[l],n,e,St):(Th[l].g.visible=!1,Th[l].blob.visible=!1);if(Eh.update(t.cat,n,e,St),Tg.update(t,n),Ra.lookNoz(e.x,e.y+1,e.z),Ra.update(t.mom,n,St,kp(t)),of.update(t.mom.slip,n,St),t.mom.sucking&&Jp%2===0){let l=t.mom.noz,c=Math.random()*6.28,h=10+Math.random()*18;Gt.emit&&Gt.emit(l.x+Math.cos(c)*h,l.y+(Math.random()-.5)*10,l.z+Math.sin(c)*h,{vx:-Math.cos(c)*h*2.2,vy:0,vz:-Math.sin(c)*h*2.2,life:.45,size:.5,r:.85,g:.8,b:.7,a:.7})}let o=performance.now()/300;for(let l in fr){let c=fr[l];c.visible&&(c.userData.sp.material.opacity=.55+.45*Math.sin(o+c.position.x))}if(Rt==="title")for(let l in fr)fr[l].visible=!0}let i=performance.now()/400;if(Sh.goalRing.material.opacity=.5+.3*Math.sin(i*2),Sh.goalRing.scale.setScalar(1+.04*Math.sin(i*2)),Sh.motes.rotation.y=Math.sin(i*.06)*.02,sl.update(n),qn.visible=!1,Rt==="play"&&Ae&&!Ae.rope&&!Ve.over){if(Jp%4===0){let l=Ag(),c=Math.atan2(l.f.x,l.f.z);if(gt.id!=null&&Math.hypot(gt.x,gt.y)>.15){let h=l.r.x*gt.x-l.f.x*gt.y,u=l.r.z*gt.x-l.f.z*gt.y;c=Math.atan2(h,u)}qn.userData.p=Jo(on,Ae,c)}let o=qn.userData.p;o&&(qn.visible=!0,qn.position.set(o.x,o.y,o.z),qn.lookAt(St.position),qn.scale.setScalar(Math.max(1,St.position.distanceTo(qn.position)*.04)))}let s=ze("btnWire"),r=qn.visible,a=!!(Ae&&Ae.rope);if(s._aim!==r&&(s._aim=r,s.classList.toggle("aim",r)),s._on!==a&&(s._on=a,s.classList.toggle("on",a)),Rt==="play"&&Ae){let o=Math.hypot(Ae.vx,Ae.vy,Ae.vz);tl("wind",Ae.grounded?0:Math.min(.35,Math.max(0,(o-16)/40)));let l=1e9;for(let d of Ve.roombas)d.on&&(l=Math.min(l,Math.hypot(d.x-Ae.x,d.z-Ae.z)));tl("rmb",Math.max(0,.4*(1-l/130)));let c=Ve.mom,h=c.in?c.dist||400:1e9;tl("vac",c.in&&c.phoneT<=0?Math.max(.05,.62*Math.pow(Math.max(0,1-h/220),1.5)):0),tl("frg",Math.max(0,.22*(1-Math.hypot(137-Ae.x,507-Ae.z)/220)));let u=Ve.cat,p=u.state==="box"||u.state==="ride"||u.state==="nap"?Math.hypot(u.x-Ae.x,u.y-Ae.y,u.z-Ae.z):1e9;tl("purr",Math.max(0,.34*(1-p/60)))}if(Gg(Rt==="play"&&Ae?Math.hypot(Ae.vx,Ae.vy,Ae.vz):0,n),Gt.update(n),Gt.shake=Math.max(0,Gt.shake-n*2.5),Rt==="play"&&Ve&&(cx(n),gr>0&&!_r&&(gr-=n,gr<=0&&Ug())),oi&&Rt==="result"&&(tf-=n,tf<=0&&(yg(ze("paper"),oi.text,oi.col,1,oi.won),je("slam",{vol:1}),je(oi.r>=3||oi.r===2?"win":oi.r===1?"meh":"lose",{vol:.8,delay:.1}),oi=null,window.__stamped=!0)),tn.render(Ot,St),Rh){Rh=!1;let o=Ra.noz.visible;Ra.noz.visible=!1,tn.render(Ot,St),px(),Ra.noz.visible=o}Jp++}window.kob={get hero(){return Yn},roomba3d:Th,cat3d:Eh,slipper3d:of,get mode(){return Rt},log:Lh,mom3d:Ra,momArt:wn,momFace:kp,toys3d:Tg,get me(){return Ae},get run(){return Ve},RUN:le,CH:Qe,world:on,camera:St,cam:qe,renderer:tn,GOAL:Ut,F:te,built:Sh,get stickObj(){return gt},start:n=>cf(n),toTitle:Ih,showResult:hf,startReveal:Ug,get revealTexts(){return{ja:Ia.ja.reveal,en:Ia.en.reveal}},setLang:n=>{Dn=n,Ph()},get lang(){return Dn},setPause:rl,dbg:{pause:n=>{wg=n},step:n=>{for(let e=0;e<n;e++)kg();af(ai)},render:n=>{for(let e=0;e<n;e++)af(1/30)},teleport:(n,e,t,i)=>{Object.assign(Ae,{x:n,y:e,z:t,vx:0,vy:0,vz:0,rope:null,climbing:null,grounded:e<.1}),i!=null&&(Ae.yaw=i,qe.hd=i),qe.off.set(-Math.sin(qe.hd)*6,3,-Math.cos(qe.hd)*6),qe.lookOff.set(Math.sin(qe.hd)*10,1.4,Math.cos(qe.hd)*10)},tap:(n,e)=>Eg(n,e),wire:()=>{ns={at:null,key:!0}},say:en,get pending(){return ns},auto:n=>{rf=n?Mh(n,Ve?Ve.seed:1):null},drawCount:()=>tn.info.render.calls,tris:()=>tn.info.render.triangles}};Ph();Ih();requestAnimationFrame(Hg);rx(()=>{window.__kobReady=!0,cg().then(()=>{V0(),Snd.prefetch()})});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
