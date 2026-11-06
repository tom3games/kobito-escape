var im=0,Ru=1,sm=2;var No=1,Rc=2,la=3,Ai=0,An=1,ct=2,Ri=0,nr=1,es=2,Cu=3,Pu=4,rm=5;var ca=100,am=101,om=102,lm=103,cm=104,hm=200,um=201,dm=202,pm=203,fm=204,mm=205,gm=206,ym=207,vm=208,xm=209,_m=210,Mm=211,bm=212,Sm=213,Tm=214,Iu=0,Lu=1,Nu=2,Cc=3,zu=4,Du=5,Uu=6,Ou=7,wm=0,Em=1,Am=2,oi=0,Fu=1,Bu=2,ku=3,zo=4,Hu=5,Gu=6,Vu=7,fu="attached",Rm="detached",Wu=300,ha=301,ir=302,Pc=303,Ic=304,Do=306,Wn=1e3,_i=1001,jr=1002,xn=1003,Lc=1004;var sr=1005;var Kt=1006,ua=1007;var Ci=1008;var Un=1009,Xu=1010,ju=1011,da=1012,Nc=1013,ts=1014,On=1015,Pi=1016,zc=1017,Dc=1018,pa=1020,qu=35902,Yu=35899,Cm=1021,Pm=1022,Xn=1023,Ps=1026,rr=1027,Uc=1028,Oc=1029,ar=1030,Zu=1031;var Ku=1033,Fc=33776,Bc=33777,kc=33778,Hc=33779,Ju=35840,$u=35841,Qu=35842,ed=35843,td=36196,nd=37492,id=37496,sd=37488,rd=37489,Gc=37490,ad=37491,od=37808,ld=37809,cd=37810,hd=37811,ud=37812,dd=37813,pd=37814,fd=37815,md=37816,gd=37817,yd=37818,vd=37819,xd=37820,_d=37821,Md=36492,bd=36494,Sd=36495,Td=36283,wd=36284,Vc=36285,Ed=36286;var js=2300,qs=2301,Xl=2302,mu=2303,Vs=2400,Ws=2401,no=2402,Im=2500,Lm=2501,Ad=0,Uo=1,fa=2;var Rd=0,Nm=1,ns="",yt="srgb",_n="srgb-linear",io="linear",pt="srgb";var Gs=7680;var zm=512,Dm=513,Um=514,Wc=515,Om=516,Fm=517,Xc=518,Bm=519,jl=35044,ma=35048;var Cd="300 es",ji=2e3,qr=2001;function Hg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function km(){let n=Yr("canvas");return n.style.display="block",n}var lf={},Zr=null;function so(...n){let e="THREE."+n.shift();Zr?Zr("log",e,...n):console.log(e,...n)}function Hm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){let e="THREE."+(n=Hm(n)).shift();if(Zr)Zr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Oe(...n){let e="THREE."+(n=Hm(n)).shift();if(Zr)Zr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Xs(...n){let e=n.join(" ");e in lf||(lf[e]=!0,Ie(...n))}function Gm(n,e,t){return new Promise(function(i,s){setTimeout(function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}},t)})}var Vm={[Iu]:1,[Nu]:6,[zu]:7,[Cc]:5,[Lu]:0,[Uu]:2,[Ou]:4,[Du]:3},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=1234567,Wr=Math.PI/180,Ys=180/Math.PI;function Vn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(hn[255&n]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[255&e]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[63&t|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[255&i]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function gu(n,e){return(n%e+e)%e}function Qa(n,e,t){return(1-t)*n+t*e}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oo={DEG2RAD:Wr,RAD2DEG:Ys,generateUUID:Vn,clamp:Ze,euclideanModulo:gu,mapLinear:function(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Qa,damp:function(n,e,t,i){return Qa(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(gu(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(cf=n);let e=cf+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Wr},radToDeg:function(n){return n*Ys},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),p=a((e-i)/2),d=r((i-e)/2),f=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*p,o*c);break;case"YZY":n.set(l*p,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*p,o*h,o*c);break;case"XZX":n.set(o*h,l*f,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*f,o*c);break;case"ZYZ":n.set(l*f,l*d,o*h,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}},normalize:gt,denormalize:ni},zd=class zd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zd.prototype.isVector2=!0;var ae=zd,Et=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[a+0],d=r[a+1],f=r[a+2],m=r[a+3];if(u!==m||l!==p||c!==d||h!==f){let x=l*p+c*d+h*f+u*m;x<0&&(p=-p,d=-d,f=-f,m=-m,x=-x);let g=1-o;if(x<.9995){let y=Math.acos(x),_=Math.sin(y);g=Math.sin(g*y)/_,l=l*g+p*(o=Math.sin(o*y)/_),c=c*g+d*o,h=h*g+f*o,u=u*g+m*o}else{l=l*g+p*o,c=c*g+d*o,h=h*g+f*o,u=u*g+m*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],p=r[a+1],d=r[a+2],f=r[a+3];return e[t]=o*f+h*u+l*d-c*p,e[t+1]=l*f+h*p+c*u-o*d,e[t+2]=c*f+h*d+o*p-l*u,e[t+3]=h*f-o*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),p=l(i/2),d=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u-p*d*f;break;case"YXZ":this._x=p*h*u+c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u+p*d*f;break;case"ZXY":this._x=p*h*u-c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u-p*d*f;break;case"ZYX":this._x=p*h*u-c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u+p*d*f;break;case"YZX":this._x=p*h*u+c*d*f,this._y=c*d*u+p*h*f,this._z=c*h*f-p*d*u,this._w=c*h*u-p*d*f;break;case"XZY":this._x=p*h*u-c*d*f,this._y=c*d*u-p*h*f,this._z=c*h*f+p*d*u,this._w=c*h*u+p*d*f;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dd=class Dd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dd.prototype.isVector3=!0;var A=Dd,Uh=new A,hf=new Et,Ud=class Ud{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],d=i[5],f=i[8],m=s[0],x=s[3],g=s[6],y=s[1],_=s[4],b=s[7],S=s[2],M=s[5],w=s[8];return r[0]=a*m+o*y+l*S,r[3]=a*x+o*_+l*M,r[6]=a*g+o*b+l*w,r[1]=c*m+h*y+u*S,r[4]=c*x+h*_+u*M,r[7]=c*g+h*b+u*w,r[2]=p*m+d*y+f*S,r[5]=p*x+d*_+f*M,r[8]=p*g+d*b+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,d=c*r-a*l,f=t*u+i*p+s*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(s*c-h*i)*m,e[2]=(o*i-s*a)*m,e[3]=p*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ud.prototype.isMatrix3=!0;var Xe=Ud,Oh=new Xe,uf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),df=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gg(){let n={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(s,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===pt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_n]:{primaries:e,whitePoint:i,transfer:io,toXYZ:uf,fromXYZ:df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:uf,fromXYZ:df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),n}var $e=Gg();function Xi(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Xr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Ar,ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ar===void 0&&(Ar=Yr("canvas")),Ar.width=e.width,Ar.height=e.height;let s=Ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=255*Xi(r[a]/255);return i.putImageData(s,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Xi(t[i]/255)):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fh(s[a].image)):r.push(Fh(s[a]))}else r=Fh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Fh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Wg=0,Bh=new A,$t=class n extends ii{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Vn(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i:Ie(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=Wu,$t.DEFAULT_ANISOTROPY=1;var Od=class Od{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],f=l[9],m=l[2],x=l[6],g=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-m)<.01&&Math.abs(f-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+m)<.1&&Math.abs(f+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(d+1)/2,S=(g+1)/2,M=(h+p)/4,w=(u+m)/4,U=(f+x)/4;return _>b&&_>S?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=M/i,r=w/i):b>S?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=U/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=w/r,s=U/r),this.set(i,s,r,t),this}let y=Math.sqrt((x-f)*(x-f)+(u-m)*(u-m)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(x-f)/y,this.y=(u-m)/y,this.z=(p-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Od.prototype.isVector4=!0;var vt=Od,Yl=class extends ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new $t(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ro=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ac=class Ac{constructor(e,t,i,s,r,a,o,l,c,h,u,p,d,f,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,p,d,f,m,x)}set(e,t,i,s,r,a,o,l,c,h,u,p,d,f,m,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=p,g[3]=d,g[7]=f,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,d=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+f*c,t[5]=p-m*c,t[9]=-o*l,t[2]=m-p*c,t[6]=f+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,d=l*u,f=c*h,m=c*u;t[0]=p+m*o,t[4]=f*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-f,t[6]=m+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,d=l*u,f=c*h,m=c*u;t[0]=p-m*o,t[4]=-a*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=a*h,t[9]=m-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,d=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-d,t[8]=p*c+m,t[1]=l*u,t[5]=m*c+p,t[9]=d*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-p*u,t[8]=f*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+f,t[10]=p-m*u}else if(e.order==="XZY"){let p=a*l,d=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+m,t[5]=a*h,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*h,t[10]=m*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,jg)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ds.crossVectors(i,Ln),ds.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ds.crossVectors(i,Ln)),ds.normalize(),ul.crossVectors(Ln,ds),s[0]=ds.x,s[4]=ul.x,s[8]=Ln.x,s[1]=ds.y,s[5]=ul.y,s[9]=Ln.y,s[2]=ds.z,s[6]=ul.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],d=i[13],f=i[2],m=i[6],x=i[10],g=i[14],y=i[3],_=i[7],b=i[11],S=i[15],M=s[0],w=s[4],U=s[8],z=s[12],D=s[1],V=s[5],B=s[9],X=s[13],G=s[2],W=s[6],K=s[10],Z=s[14],ne=s[3],ve=s[7],Ce=s[11],Te=s[15];return r[0]=a*M+o*D+l*G+c*ne,r[4]=a*w+o*V+l*W+c*ve,r[8]=a*U+o*B+l*K+c*Ce,r[12]=a*z+o*X+l*Z+c*Te,r[1]=h*M+u*D+p*G+d*ne,r[5]=h*w+u*V+p*W+d*ve,r[9]=h*U+u*B+p*K+d*Ce,r[13]=h*z+u*X+p*Z+d*Te,r[2]=f*M+m*D+x*G+g*ne,r[6]=f*w+m*V+x*W+g*ve,r[10]=f*U+m*B+x*K+g*Ce,r[14]=f*z+m*X+x*Z+g*Te,r[3]=y*M+_*D+b*G+S*ne,r[7]=y*w+_*V+b*W+S*ve,r[11]=y*U+_*B+b*K+S*Ce,r[15]=y*z+_*X+b*Z+S*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],f=e[3],m=e[7],x=e[11],g=e[15],y=l*d-c*p,_=o*d-c*u,b=o*p-l*u,S=a*d-c*h,M=a*p-l*h,w=a*u-o*h;return t*(m*y-x*_+g*b)-i*(f*y-x*S+g*M)+s*(f*_-m*S+g*w)-r*(f*b-m*M+x*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],f=e[12],m=e[13],x=e[14],g=e[15],y=t*o-i*a,_=t*l-s*a,b=t*c-r*a,S=i*l-s*o,M=i*c-r*o,w=s*c-r*l,U=h*m-u*f,z=h*x-p*f,D=h*g-d*f,V=u*x-p*m,B=u*g-d*m,X=p*g-d*x,G=y*X-_*B+b*V+S*D-M*z+w*U;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/G;return e[0]=(o*X-l*B+c*V)*W,e[1]=(s*B-i*X-r*V)*W,e[2]=(m*w-x*M+g*S)*W,e[3]=(p*M-u*w-d*S)*W,e[4]=(l*D-a*X-c*z)*W,e[5]=(t*X-s*D+r*z)*W,e[6]=(x*b-f*w-g*_)*W,e[7]=(h*w-p*b+d*_)*W,e[8]=(a*B-o*D+c*U)*W,e[9]=(i*D-t*B-r*U)*W,e[10]=(f*M-m*b+g*y)*W,e[11]=(u*b-h*M-d*y)*W,e[12]=(o*z-a*V-l*U)*W,e[13]=(t*V-i*z+s*U)*W,e[14]=(m*_-f*S-x*y)*W,e[15]=(h*S-u*_+p*y)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,d=r*h,f=r*u,m=a*h,x=a*u,g=o*u,y=l*c,_=l*h,b=l*u,S=i.x,M=i.y,w=i.z;return s[0]=(1-(m+g))*S,s[1]=(d+b)*S,s[2]=(f-_)*S,s[3]=0,s[4]=(d-b)*M,s[5]=(1-(p+g))*M,s[6]=(x+y)*M,s[7]=0,s[8]=(f+_)*w,s[9]=(x-y)*w,s[10]=(1-(p+m))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Rr.set(s[0],s[1],s[2]).length(),o=Rr.set(s[4],s[5],s[6]).length(),l=Rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let c=1/a,h=1/o,u=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=2e3,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),p=(t+e)/(t-e),d=(i+s)/(i-s),f,m;if(l)f=r/(a-r),m=a*r/(a-r);else if(o===ji)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else{if(o!==qr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-r),m=-a*r/(a-r)}return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),p=-(t+e)/(t-e),d=-(i+s)/(i-s),f,m;if(l)f=1/(a-r),m=a/(a-r);else if(o===ji)f=-2/(a-r),m=-(a+r)/(a-r);else{if(o!==qr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-r),m=-r/(a-r)}return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ac.prototype.isMatrix4=!0;var Le=Ac,Rr=new A,Qn=new Le,Xg=new A(0,0,0),jg=new A(1,1,1),ds=new A,ul=new A,Ln=new A,pf=new Le,ff=new Et,Tn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qg=0,mf=new A,Cr=new Et,Oi=new Le,dl=new A,Ha=new A,Yg=new A,Zg=new Et,gf=new A(1,0,0),yf=new A(0,1,0),vf=new A(0,0,1),xf={type:"added"},Kg={type:"removed"},Pr={type:"childadded",child:null},kh={type:"childremoved",child:null},At=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new Tn,i=new Et,s=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Xe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dl.copy(e):dl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ha,dl,this.up):Oi.lookAt(dl,Ha,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,Zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),d=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};At.DEFAULT_UP=new A(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ot=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jg={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let x=t.getJointPose(m,i),g=this._getHandJoint(c,m);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,f=.005;c.inputState.pinching&&p>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Hh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=gu(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Hh(a,r,e+1/3),this.g=Hh(a,r,e),this.b=Hh(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let i=Wm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return $e.workingToColorSpace(un.copy(this),e),65536*Math.round(Ze(255*un.r,0,255))+256*Math.round(Ze(255*un.g,0,255))+Math.round(Ze(255*un.b,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(un.copy(this),t);let i=un.r,s=un.g,r=un.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=yt){$e.workingToColorSpace(un.copy(this),e);let t=un.r,i=un.g,s=un.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*s)})`}offsetHSL(e,t,i){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(pl);let i=Qa(ps.h,pl.h,t),s=Qa(ps.s,pl.s,t),r=Qa(ps.l,pl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Se;Se.NAMES=Wm;var ao=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qr=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new A,Fi=new A,Gh=new A,Bi=new A,Ir=new A,Lr=new A,_f=new A,Vh=new A,Wh=new A,Xh=new A,jh=new vt,qh=new vt,Yh=new vt,yi=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ei.subVectors(s,t),Fi.subVectors(i,t),Gh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Fi),l=ei.dot(Gh),c=Fi.dot(Fi),h=Fi.dot(Gh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,d=(c*l-o*h)*p,f=(a*h-o*l)*p;return r.set(1-d-f,f,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)!==null&&Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return jh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),jh.fromBufferAttribute(e,t),qh.fromBufferAttribute(e,i),Yh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jh,r.x),a.addScaledVector(qh,r.y),a.addScaledVector(Yh,r.z),a}static isFrontFacing(e,t,i,s){return ei.subVectors(i,t),Fi.subVectors(e,t),ei.cross(Fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),.5*ei.cross(Fi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ir.subVectors(s,i),Lr.subVectors(r,i),Vh.subVectors(e,i);let l=Ir.dot(Vh),c=Lr.dot(Vh);if(l<=0&&c<=0)return t.copy(i);Wh.subVectors(e,s);let h=Ir.dot(Wh),u=Lr.dot(Wh);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ir,a);Xh.subVectors(e,r);let d=Ir.dot(Xh),f=Lr.dot(Xh);if(f>=0&&d<=f)return t.copy(r);let m=d*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Lr,o);let x=h*f-d*u;if(x<=0&&u-h>=0&&d-f>=0)return _f.subVectors(r,s),o=(u-h)/(u-h+(d-f)),t.copy(s).addScaledVector(_f,o);let g=1/(x+m+p);return a=m*g,o=p*g,t.copy(i).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),ml.subVectors(this.max,Ga),Nr.subVectors(e.a,Ga),zr.subVectors(e.b,Ga),Dr.subVectors(e.c,Ga),fs.subVectors(zr,Nr),ms.subVectors(Dr,zr),Fs.subVectors(Nr,Dr);let t=[0,-fs.z,fs.y,0,-ms.z,ms.y,0,-Fs.z,Fs.y,fs.z,0,-fs.x,ms.z,0,-ms.x,Fs.z,0,-Fs.x,-fs.y,fs.x,0,-ms.y,ms.x,0,-Fs.y,Fs.x,0];return!!Zh(t,Nr,zr,Dr,ml)&&(t=[1,0,0,0,1,0,0,0,1],!!Zh(t,Nr,zr,Dr,ml)&&(gl.crossVectors(fs,ms),t=[gl.x,gl.y,gl.z],Zh(t,Nr,zr,Dr,ml)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ti).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new A,new A,new A,new A,new A,new A,new A,new A],ti=new A,fl=new ln,Nr=new A,zr=new A,Dr=new A,fs=new A,ms=new A,Fs=new A,Ga=new A,ml=new A,gl=new A,Bs=new A;function Zh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bs.fromArray(n,r);let o=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mx=$g();function $g(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,s[l]=24,s[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,s[l]=-c-1,s[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,s[l]=13,s[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,s[l]=24,s[256|l]=24):(i[l]=31744,i[256|l]=64512,s[l]=13,s[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}var Yt=new A,yl=new ae,Qg=0,st=class extends ii{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var oo=class extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lo=class extends st{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ue=class extends st{constructor(e,t,i){super(new Float32Array(e),t,i)}},e1=new ln,Va=new A,Kh=new A,Mn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):e1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);let t=Va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=.5*(i-this.radius);this.center.addScaledVector(Va,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Kh)),this.expandByPoint(Va.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},t1=0,Gn=new Le,Jh=new At,Ur=new A,Nn=new ln,Wa=new ln,nn=new A,Ke=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?lo:oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Nn.min,Wa.min),Nn.expandByPoint(nn),nn.addVectors(Nn.max,Wa.max),Nn.expandByPoint(nn)):(Nn.expandByPoint(Wa.min),Nn.expandByPoint(Wa.max))}Nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(e,c),nn.add(Ur)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new st(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new A,l[U]=new A;let c=new A,h=new A,u=new A,p=new ae,d=new ae,f=new ae,m=new A,x=new A;function g(U,z,D){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,z),u.fromBufferAttribute(i,D),p.fromBufferAttribute(r,U),d.fromBufferAttribute(r,z),f.fromBufferAttribute(r,D),h.sub(c),u.sub(c),d.sub(p),f.sub(p);let V=1/(d.x*f.y-f.x*d.y);isFinite(V)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(u,-d.y).multiplyScalar(V),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-f.x).multiplyScalar(V),o[U].add(m),o[z].add(m),o[D].add(m),l[U].add(x),l[z].add(x),l[D].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,z=y.length;U<z;++U){let D=y[U],V=D.start;for(let B=V,X=V+D.count;B<X;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let _=new A,b=new A,S=new A,M=new A;function w(U){S.fromBufferAttribute(s,U),M.copy(S);let z=o[U];_.copy(z),_.sub(S.multiplyScalar(S.dot(z))).normalize(),b.crossVectors(M,z);let D=b.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,D)}for(let U=0,z=y.length;U<z;++U){let D=y[U],V=D.start;for(let B=V,X=V+D.count;B<X;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new st(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let p=0,d=i.count;p<d;p++)i.setXYZ(p,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let p=0,d=e.count;p<d;p+=3){let f=e.getX(p+0),m=e.getX(p+1),x=e.getX(p+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),d=0,f=0;for(let m=0,x=l.length;m<x;m++){d=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let g=0;g<h;g++)p[f++]=c[d++]}return new st(p,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=e(s[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=e(c[h],i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new A,vs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Or,n1=0,dn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i:Ie(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xs=class extends dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xa=new A,Fr=new A,Br=new A,kr=new ae,ja=new ae,Xm=new Le,vl=new A,qa=new A,xl=new A,Mf=new ae,$h=new ae,bf=new ae,_s=class extends At{constructor(e=new xs){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Ke;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zs(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new vs(i,3,0,!1)),Or.setAttribute("uv",new vs(i,2,3,!1))}this.geometry=Or,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Br.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;_l(vl.set(-.5,-.5,0),Br,a,Fr,s,r),_l(qa.set(.5,-.5,0),Br,a,Fr,s,r),_l(xl.set(.5,.5,0),Br,a,Fr,s,r),Mf.set(0,0),$h.set(1,0),bf.set(1,1);let o=e.ray.intersectTriangle(vl,qa,xl,!1,Xa);if(o===null&&(_l(qa.set(-.5,.5,0),Br,a,Fr,s,r),$h.set(0,1),o=e.ray.intersectTriangle(vl,xl,qa,!1,Xa),o===null))return;let l=e.ray.origin.distanceTo(Xa);l<e.near||l>e.far||t.push({distance:l,point:Xa.clone(),uv:yi.getInterpolation(Xa,vl,qa,xl,Mf,$h,bf,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _l(n,e,t,i,s,r){kr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ja.x=r*kr.x-s*kr.y,ja.y=s*kr.x+r*kr.y):ja.copy(kr),n.copy(e),n.x+=ja.x,n.y+=ja.y,n.applyMatrix4(Xm)}var gx=new A,yx=new A;var Hi=new A,Qh=new A,Ml=new A,gs=new A,eu=new A,bl=new A,tu=new A,Ms=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qh.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(Qh);let r=.5*e.distanceTo(t),a=-this.direction.dot(Ml),o=gs.dot(this.direction),l=-gs.dot(Ml),c=gs.lengthSq(),h=Math.abs(1-a*a),u,p,d,f;if(h>0)if(u=a*l-o,p=a*o-l,f=r*h,u>=0)if(p>=-f)if(p<=f){let m=1/h;u*=m,p*=m,d=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;else p<=-f?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=f?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),d=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qh).addScaledVector(Ml,p),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s?null:((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>s?null:((o>i||i!=i)&&(i=o),(l<s||s!=s)&&(s=l),s<0?null:this.at(i>=0?i:s,t)))}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,s,r){eu.subVectors(t,e),bl.subVectors(i,e),tu.crossVectors(eu,bl);let a,o=this.direction.dot(tu);if(o>0){if(s)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}gs.subVectors(this.origin,e);let l=a*this.direction.dot(bl.crossVectors(gs,bl));if(l<0)return null;let c=a*this.direction.dot(eu.cross(gs));if(c<0||l+c>o)return null;let h=-a*gs.dot(tu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sf=new Le,ks=new Ms,Sl=new Mn,Tf=new A,Tl=new A,wl=new A,El=new A,nu=new A,Al=new A,wf=new A,Rl=new A,ce=class extends At{constructor(e=new Ke,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(nu.fromBufferAttribute(u,e),a?Al.addScaledVector(nu,h):Al.addScaledVector(nu.sub(t),h))}t.add(Al)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;if(s!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),ks.copy(e.ray).recast(e.near),Sl.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Sl,Tf)===null||ks.origin.distanceToSquared(Tf)>(e.far-e.near)**2))return;Sf.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Sf),i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,ks)}}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,m=p.length;f<m;f++){let x=p[f],g=a[x.materialIndex];for(let y=Math.max(x.start,d.start),_=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));y<_;y+=3)s=Cl(this,g,e,i,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}else for(let f=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);f<m;f+=3)s=Cl(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),s&&(s.faceIndex=Math.floor(f/3),t.push(s));else if(l!==void 0)if(Array.isArray(a))for(let f=0,m=p.length;f<m;f++){let x=p[f],g=a[x.materialIndex];for(let y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));y<_;y+=3)s=Cl(this,g,e,i,c,h,u,y,y+1,y+2),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,t.push(s))}else for(let f=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);f<m;f+=3)s=Cl(this,a,e,i,c,h,u,f,f+1,f+2),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}};function Cl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Tl),n.getVertexPosition(l,wl),n.getVertexPosition(c,El);let h=(function(u,p,d,f,m,x,g,y){let _;if(_=p.side===1?f.intersectTriangle(g,x,m,!0,y):f.intersectTriangle(m,x,g,p.side===0,y),_===null)return null;Rl.copy(y),Rl.applyMatrix4(u.matrixWorld);let b=d.ray.origin.distanceTo(Rl);return b<d.near||b>d.far?null:{distance:b,point:Rl.clone(),object:u}})(n,e,t,i,Tl,wl,El,wf);if(h){let u=new A;yi.getBarycoord(wf,Tl,wl,El,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,u,new ae)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new ae)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new A,materialIndex:0};yi.getNormal(Tl,wl,El,p.normal),h.face=p,h.barycoord=u}return h}var Ya=new vt,Ef=new vt,Af=new vt,i1=new vt,Rf=new Le,Pl=new A,iu=new Mn,Cf=new Le,su=new Ms,co=class extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pl),this.boundingSphere.expandByPoint(Pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(s),e.ray.intersectsSphere(iu)!==!1&&(Cf.copy(s).invert(),su.copy(e.ray).applyMatrix4(Cf),this.boundingBox!==null&&su.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Ef.fromBufferAttribute(s.attributes.skinIndex,e),Af.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ya.copy(t),t.set(0,0,0,0)):(Ya.set(...t,1),t.set(0,0,0)),Ya.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Af.getComponent(r);if(a!==0){let o=Ef.getComponent(r);Rf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(i1.copy(Ya).applyMatrix4(Rf),a)}}return t.isVector4&&(t.w=Ya.w),t.applyMatrix4(this.bindMatrixInverse)}},ea=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},ta=class extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=1003,h=1003,u,p){super(null,a,o,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pf=new Le,s1=new Le,ho=class n{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:s1;Pf.multiplyMatrices(o,t[r]),Pf.toArray(i,16*r)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ta(t,e,e,Xn,On);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new ea),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},bs=class extends st{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hr=new Le,If=new Le,Il=[],Lf=new ln,r1=new Le,Za=new ce,Ka=new Mn,qi=class extends ce{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,r1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Lf.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Ka.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Za.geometry=this.geometry,Za.material=this.material,Za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(i),e.ray.intersectsSphere(Ka)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),If.multiplyMatrices(i,Hr),Za.matrixWorld=If,Za.raycast(e,Il);for(let a=0,o=Il.length;a<o;a++){let l=Il[a];l.instanceId=r,l.object=this,t.push(l)}Il.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ta(new Float32Array(s*this.count),s,this.count,Uc,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ru=new A,a1=new A,o1=new Xe,gi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ru.subVectors(i,t).cross(a1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ru),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||o1.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hs=new Mn,l1=new ae(.5,.5),Ll=new A,Yi=class{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],f=r[8],m=r[9],x=r[10],g=r[11],y=r[12],_=r[13],b=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,g-f,S-y).normalize(),s[1].setComponents(c+a,d+h,g+f,S+y).normalize(),s[2].setComponents(c+o,d+u,g+m,S+_).normalize(),s[3].setComponents(c-o,d-u,g-m,S-_).normalize(),i)s[4].setComponents(l,p,x,b).normalize(),s[5].setComponents(c-l,d-p,g-x,S-b).normalize();else if(s[4].setComponents(c-l,d-p,g-x,S-b).normalize(),t===ji)s[5].setComponents(c+l,d+p,g+x,S+b).normalize();else{if(t!==qr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);s[5].setComponents(l,p,x,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);let t=l1.distanceTo(e.center);return Hs.radius=.7071067811865476+t,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ll.x=s.normal.x>0?e.max.x:e.min.x,Ll.y=s.normal.y>0?e.max.y:e.min.y,Ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nf=new Le,Kl=class n{constructor(){this.coordinateSystem=ji,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Nf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Yi),i[s].setFromProjectionMatrix(Nf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Yi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var yu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}},vx=new Le,xx=new Se(1,1,1),_x=new Yi,Mx=new Kl,bx=new ln,Sx=new Mn,Tx=new A,wx=new A,Ex=new A,Ax=new yu,Rx=new ce;var Ss=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jl=new A,$l=new A,zf=new Le,Ja=new Ms,Nl=new Mn,au=new A,Df=new A,Ks=class extends At{constructor(e=new Ke,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Jl.fromBufferAttribute(t,s-1),$l.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Jl.distanceTo($l);e.setAttribute("lineDistance",new Ue(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),Nl.radius+=r,e.ray.intersectsSphere(Nl)===!1)return;zf.copy(s).invert(),Ja.copy(e.ray).applyMatrix4(zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let f=p,m=d-1;f<m;f+=c){let x=h.getX(f),g=h.getX(f+1),y=zl(this,e,Ja,l,x,g,f);y&&t.push(y)}if(this.isLineLoop){let f=h.getX(d-1),m=h.getX(p),x=zl(this,e,Ja,l,f,m,d-1);x&&t.push(x)}}else{let p=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let f=p,m=d-1;f<m;f+=c){let x=zl(this,e,Ja,l,f,f+1,f);x&&t.push(x)}if(this.isLineLoop){let f=zl(this,e,Ja,l,d-1,p,d-1);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Jl.fromBufferAttribute(o,s),$l.fromBufferAttribute(o,r),t.distanceSqToSegment(Jl,$l,au,Df)>i)return;au.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(au);return l<e.near||l>e.far?void 0:{distance:l,point:Df.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Uf=new A,Of=new A,Js=class extends Ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Uf.fromBufferAttribute(t,s),Of.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Uf.distanceTo(Of);e.setAttribute("lineDistance",new Ue(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uo=class extends Ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ts=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ff=new Le,vu=new Ms,Dl=new Mn,Ul=new A,Mi=class extends At{constructor(e=new Ke,t=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;Ff.copy(s).invert(),vu.copy(e.ray).applyMatrix4(Ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);u<p;u++){let d=c.getX(u);Ul.fromBufferAttribute(h,d),Bf(Ul,d,l,s,e,t,this)}else for(let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);u<p;u++)Ul.fromBufferAttribute(h,u),Bf(Ul,u,l,s,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bf(n,e,t,i,s,r,a){let o=vu.distanceSqToPoint(n);if(o<t){let l=new A;vu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var po=class extends $t{constructor(e=[],t=301,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends $t{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends $t{constructor(e,t,i=1014,s,r,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Ps&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ql=class extends Zi{constructor(e,t=1014,i=301,s,r,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fo=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wt=class n extends Ke{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,d=0;function f(m,x,g,y,_,b,S,M,w,U,z){let D=b/w,V=S/U,B=b/2,X=S/2,G=M/2,W=w+1,K=U+1,Z=0,ne=0,ve=new A;for(let Ce=0;Ce<K;Ce++){let Te=Ce*V-X;for(let Ae=0;Ae<W;Ae++){let oe=Ae*D-B;ve[m]=oe*y,ve[x]=Te*_,ve[g]=G,c.push(ve.x,ve.y,ve.z),ve[m]=0,ve[x]=0,ve[g]=M>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(Ae/w),u.push(1-Ce/U),Z+=1}}for(let Ce=0;Ce<U;Ce++)for(let Te=0;Te<w;Te++){let Ae=p+Te+W*Ce,oe=p+Te+W*(Ce+1),ye=p+(Te+1)+W*(Ce+1),fe=p+(Te+1)+W*Ce;l.push(Ae,oe,fe),l.push(oe,ye,fe),ne+=6}o.addGroup(d,ne,z),d+=ne,p+=Z}f("z","y","x",-1,-1,i,t,e,a,r,0),f("z","y","x",1,-1,i,t,-e,a,r,1),f("x","z","y",1,1,e,i,t,s,a,2),f("x","z","y",1,-1,e,i,-t,s,a,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bi=class n extends Ke{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,f=2*i+r,m=s+1,x=new A,g=new A;for(let y=0;y<=f;y++){let _=0,b=0,S=0,M=0;if(y<=i){let z=y/i,D=z*Math.PI/2;b=-h-e*Math.cos(D),S=e*Math.sin(D),M=-e*Math.cos(D),_=z*u}else if(y<=i+r){let z=(y-i)/r;b=z*t-h,S=e,M=0,_=u+z*p}else{let z=(y-i-r)/i,D=z*Math.PI/2;b=h+e*Math.sin(D),S=e*Math.cos(D),M=e*Math.sin(D),_=u+p+z*u}let w=Math.max(0,Math.min(1,_/d)),U=0;y===0?U=.5/s:y===f&&(U=-.5/s);for(let z=0;z<=s;z++){let D=z/s,V=D*Math.PI*2,B=Math.sin(V),X=Math.cos(V);g.x=-S*X,g.y=b,g.z=S*B,o.push(g.x,g.y,g.z),x.set(-S*X,M,S*B),x.normalize(),l.push(x.x,x.y,x.z),c.push(D+U,w)}if(y>0){let z=(y-1)*m;for(let D=0;D<s;D++){let V=z+D,B=z+D+1,X=y*m+D,G=y*m+D+1;a.push(V,B,X),a.push(B,G,X)}}}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ri=class n extends Ke{constructor(e=1,t=32,i=0,s=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new A,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},It=class n extends Ke{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],d=[],f=0,m=[],x=i/2,g=0;function y(_){let b=f,S=new ae,M=new A,w=0,U=_===!0?e:t,z=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,x*z,0),p.push(0,z,0),d.push(.5,.5),f++;let D=f;for(let V=0;V<=s;V++){let B=V/s*l+o,X=Math.cos(B),G=Math.sin(B);M.x=U*G,M.y=x*z,M.z=U*X,u.push(M.x,M.y,M.z),p.push(0,z,0),S.x=.5*X+.5,S.y=.5*G*z+.5,d.push(S.x,S.y),f++}for(let V=0;V<s;V++){let B=b+V,X=D+V;_===!0?h.push(X,X+1,B):h.push(X+1,X,B),w+=3}c.addGroup(g,w,_===!0?1:2),g+=w}(function(){let _=new A,b=new A,S=0,M=(t-e)/i;for(let w=0;w<=r;w++){let U=[],z=w/r,D=z*(t-e)+e;for(let V=0;V<=s;V++){let B=V/s,X=B*l+o,G=Math.sin(X),W=Math.cos(X);b.x=D*G,b.y=-z*i+x,b.z=D*W,u.push(b.x,b.y,b.z),_.set(G,M,W).normalize(),p.push(_.x,_.y,_.z),d.push(B,1-z),U.push(f++)}m.push(U)}for(let w=0;w<s;w++)for(let U=0;U<r;U++){let z=m[U][w],D=m[U+1][w],V=m[U+1][w+1],B=m[U][w+1];(e>0||U!==0)&&(h.push(z,D,B),S+=3),(t>0||U!==r-1)&&(h.push(D,V,B),S+=3)}c.addGroup(g,S,0),g+=S})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(p,3)),this.setAttribute("uv",new Ue(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Si=class n extends It{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ws=class n extends Ke{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];function o(d,f,m,x){let g=x+1,y=[];for(let _=0;_<=g;_++){y[_]=[];let b=d.clone().lerp(m,_/g),S=f.clone().lerp(m,_/g),M=g-_;for(let w=0;w<=M;w++)y[_][w]=w===0&&_===g?b:b.clone().lerp(S,w/M)}for(let _=0;_<g;_++)for(let b=0;b<2*(g-_)-1;b++){let S=Math.floor(b/2);b%2==0?(l(y[_][S+1]),l(y[_+1][S]),l(y[_][S])):(l(y[_][S+1]),l(y[_+1][S+1]),l(y[_+1][S]))}}function l(d){r.push(d.x,d.y,d.z)}function c(d,f){let m=3*d;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(d,f,m,x){x<0&&d.x===1&&(a[f]=d.x-1),m.x===0&&m.z===0&&(a[f]=x/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}function p(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}(function(d){let f=new A,m=new A,x=new A;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],m),c(t[g+2],x),o(f,m,x,d)})(s),(function(d){let f=new A;for(let m=0;m<r.length;m+=3)f.x=r[m+0],f.y=r[m+1],f.z=r[m+2],f.normalize().multiplyScalar(d),r[m+0]=f.x,r[m+1]=f.y,r[m+2]=f.z})(i),(function(){let d=new A;for(let f=0;f<r.length;f+=3){d.x=r[f+0],d.y=r[f+1],d.z=r[f+2];let m=u(d)/2/Math.PI+.5,x=p(d)/Math.PI+.5;a.push(m,1-x)}(function(){let f=new A,m=new A,x=new A,g=new A,y=new ae,_=new ae,b=new ae;for(let S=0,M=0;S<r.length;S+=9,M+=6){f.set(r[S+0],r[S+1],r[S+2]),m.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),y.set(a[M+0],a[M+1]),_.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),g.copy(f).add(m).add(x).divideScalar(3);let w=u(g);h(y,M+0,f,w),h(_,M+2,m,w),h(b,M+4,x,w)}})(),(function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],x=a[f+2],g=a[f+4],y=Math.max(m,x,g),_=Math.min(m,x,g);y>.9&&_<.1&&(m<.2&&(a[f+0]+=1),x<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},ec=class n extends ws{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ol=new A,Fl=new A,ou=new A,Bl=new yi,tc=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Wr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),p={},d=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:x,c:g}=Bl;if(m.fromBufferAttribute(o,c[0]),x.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Bl.getNormal(ou),u[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[1]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let _=(y+1)%3,b=u[y],S=u[_],M=Bl[h[y]],w=Bl[h[_]],U=`${b}_${S}`,z=`${S}_${b}`;z in p&&p[z]?(ou.dot(p[z].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(w.x,w.y,w.z)),p[z]=null):U in p||(p[U]={index0:c[y],index1:c[_],normal:ou.clone()})}}for(let f in p)if(p[f]){let{index0:m,index1:x}=p[f];Ol.fromBufferAttribute(o,m),Fl.fromBufferAttribute(o,x),d.push(Ol.x,Ol.y,Ol.z),d.push(Fl.x,Fl.y,Fl.z)}this.setAttribute("position",new Ue(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,c=r-1;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),o=i[s]-a,o<0)l=s+1;else{if(!(o>0)){c=s;break}c=s-1}if(s=c,i[s]===a)return s/(r-1);let h=i[s];return(s+(a-h)/(i[s+1]-h))/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,s=[],r=[],a=[],o=new A,l=new Le;for(let d=0;d<=e;d++){let f=d/e;s[d]=this.getTangentAt(f,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,f))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ze(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],d*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},na=class extends Dn{constructor(e=0,t=0,i=1,s=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(r=a?0:s),this.aClockwise!==!0||a||(r===s?r=-s:r-=s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nc=class extends na{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pd(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,d*=h,s(a,o,p,d)},calc:function(r){let a=r*r;return n+e*r+t*a+i*(a*r)}}}var kf=new A,Hf=new A,lu=new Pd,cu=new Pd,hu=new Pd,Es=class extends Dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new A){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=s[(c-1)%r]:(Hf.subVectors(s[0],s[1]).add(s[0]),o=Hf);let u=s[c%r],p=s[(c+1)%r];if(this.closed||c+2<r?l=s[(c+2)%r]:(kf.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=kf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(l),d);m<1e-4&&(m=1),f<1e-4&&(f=m),x<1e-4&&(x=m),lu.initNonuniformCatmullRom(o.x,u.x,p.x,l.x,f,m,x),cu.initNonuniformCatmullRom(o.y,u.y,p.y,l.y,f,m,x),hu.initNonuniformCatmullRom(o.z,u.z,p.z,l.z,f,m,x)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(o.x,u.x,p.x,l.x,this.tension),cu.initCatmullRom(o.y,u.y,p.y,l.y,this.tension),hu.initCatmullRom(o.z,u.z,p.z,l.z,this.tension));return i.set(lu.calc(h),cu.calc(h),hu.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gf(n,e,t,i,s){let r=.5*(i-e),a=.5*(s-t),o=n*n;return(2*t-2*i+r+a)*(n*o)+(-3*t+3*i-2*r-a)*o+r*n+t}function eo(n,e,t,i){return(function(s,r){let a=1-s;return a*a*r})(n,e)+(function(s,r){return 2*(1-s)*s*r})(n,t)+(function(s,r){return s*s*r})(n,i)}function to(n,e,t,i,s){return(function(r,a){let o=1-r;return o*o*o*a})(n,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(n,t)+(function(r,a){return 3*(1-r)*r*r*a})(n,i)+(function(r,a){return r*r*r*a})(n,s)}var mo=class extends Dn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(to(e,s.x,r.x,a.x,o.x),to(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ic=class extends Dn{constructor(e=new A,t=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(to(e,s.x,r.x,a.x,o.x),to(e,s.y,r.y,a.y,o.y),to(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends Dn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends Dn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Dn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(eo(e,s.x,r.x,a.x),eo(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Dn{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(eo(e,s.x,r.x,a.x),eo(e,s.y,r.y,a.y),eo(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Gf(o,l.x,c.x,h.x,u.x),Gf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},rc=Object.freeze({__proto__:null,ArcCurve:nc,CatmullRomCurve3:Es,CubicBezierCurve:mo,CubicBezierCurve3:ic,EllipseCurve:na,LineCurve:go,LineCurve3:sc,QuadraticBezierCurve:yo,QuadraticBezierCurve3:vo,SplineCurve:xo}),ac=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new rc[s.type]().fromJSON(s))}return this}},_o=class extends ac{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new go(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new yo(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new mo(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new xo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new na(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mo=class extends _o{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new _o().fromJSON(s))}return this}};function c1(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Vf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=(function(h,u,p,d){let f=[];for(let m=0,x=u.length;m<x;m++){let g=Vf(h,u[m]*d,m<x-1?u[m+1]*d:h.length,d,!1);g===g.next&&(g.steiner=!0),f.push(y1(g))}f.sort(f1);for(let m=0;m<f.length;m++)p=m1(f[m],p);return p})(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let p=t;p<s;p+=t){let d=n[p],f=n[p+1];d<o&&(o=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return bo(r,a,t,o,l,c,0),a}function Vf(n,e,t,i,s){let r;if(s===(function(a,o,l,c){let h=0;for(let u=o,p=l-c;u<l;u+=c)h+=(a[p]-a[u])*(a[u+1]+a[p+1]),p=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Wf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Wf(a/i|0,n[a],n[a+1],r);return r&&ia(r,r.next)&&(To(r),r=r.next),r}function $s(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!ia(i,i.next)&&Ut(i.prev,i,i.next)!==0)i=i.next;else{if(To(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function bo(n,e,t,i,s,r,a){if(!n)return;!a&&r&&(function(l,c,h,u){let p=l;do p.z===0&&(p.z=xu(p.x,p.y,c,h,u)),p.prevZ=p.prev,p.nextZ=p.next,p=p.next;while(p!==l);p.prevZ.nextZ=null,p.prevZ=null,(function(d){let f,m=1;do{let x,g=d;d=null;let y=null;for(f=0;g;){f++;let _=g,b=0;for(let M=0;M<m&&(b++,_=_.nextZ,_);M++);let S=m;for(;b>0||S>0&&_;)b!==0&&(S===0||!_||g.z<=_.z)?(x=g,g=g.nextZ,b--):(x=_,_=_.nextZ,S--),y?y.nextZ=x:d=x,x.prevZ=y,y=x;g=_}y.nextZ=null,m*=2}while(f>1)})(p)})(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?u1(n,i,s,r):h1(n))e.push(l.i,n.i,c.i),To(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?bo(n=d1($s(n),e),e,t,i,s,r,2):a===2&&p1(n,e,t,i,s,r):bo($s(n),e,t,i,s,r,1);break}}}function h1(n){let e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),p=Math.max(s,r,a),d=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=p&&f.y>=u&&f.y<=d&&$a(s,o,r,l,a,c,f.x,f.y)&&Ut(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function u1(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,d=Math.min(o,l,c),f=Math.min(h,u,p),m=Math.max(o,l,c),x=Math.max(h,u,p),g=xu(d,f,e,t,i),y=xu(m,x,e,t,i),_=n.prevZ,b=n.nextZ;for(;_&&_.z>=g&&b&&b.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=f&&_.y<=x&&_!==s&&_!==a&&$a(o,h,l,u,c,p,_.x,_.y)&&Ut(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=m&&b.y>=f&&b.y<=x&&b!==s&&b!==a&&$a(o,h,l,u,c,p,b.x,b.y)&&Ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=m&&_.y>=f&&_.y<=x&&_!==s&&_!==a&&$a(o,h,l,u,c,p,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=m&&b.y>=f&&b.y<=x&&b!==s&&b!==a&&$a(o,h,l,u,c,p,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function d1(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ia(i,s)&&qm(i,t,t.next,s)&&So(i,s)&&So(s,i)&&(e.push(i.i,t.i,s.i),To(t),To(t.next),t=n=s),t=t.next}while(t!==n);return $s(t)}function p1(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&v1(a,o)){let l=Ym(a,o);return a=$s(a,a.next),l=$s(l,l.next),bo(a,e,t,i,s,r,0),void bo(l,e,t,i,s,r,0)}o=o.next}a=a.next}while(a!==n)}function f1(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function m1(n,e){let t=(function(s,r){let a=r,o=s.x,l=s.y,c,h=-1/0;if(ia(s,a))return a;do{if(ia(s,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==r);if(!c)return null;let u=c,p=c.x,d=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=p&&o!==a.x&&jm(l<d?o:h,l,p,d,l<d?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);So(a,s)&&(m<f||m===f&&(a.x>c.x||a.x===c.x&&g1(c,a)))&&(c=a,f=m)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=Ym(t,n);return $s(i,i.next),$s(t,t.next)}function g1(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function xu(n,e,t,i,s){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*s|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*s|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function y1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jm(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $a(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&jm(n,e,t,i,s,r,a,o)}function v1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let s=t;do{if(s.i!==t.i&&s.next.i!==t.i&&s.i!==i.i&&s.next.i!==i.i&&qm(s,s.next,t,i))return!0;s=s.next}while(s!==t);return!1})(n,e)&&(So(n,e)&&So(e,n)&&(function(t,i){let s=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do s.y>o!=s.next.y>o&&s.next.y!==s.y&&a<(s.next.x-s.x)*(o-s.y)/(s.next.y-s.y)+s.x&&(r=!r),s=s.next;while(s!==t);return r})(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||ia(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ia(n,e){return n.x===e.x&&n.y===e.y}function qm(n,e,t,i){let s=Hl(Ut(n,e,t)),r=Hl(Ut(n,e,i)),a=Hl(Ut(t,i,n)),o=Hl(Ut(t,i,e));return s!==r&&a!==o||!(s!==0||!kl(n,t,e))||!(r!==0||!kl(n,i,e))||!(a!==0||!kl(t,n,i))||!(o!==0||!kl(t,e,i))}function kl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Hl(n){return n>0?1:n<0?-1:0}function So(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function Ym(n,e){let t=_u(n.i,n.x,n.y),i=_u(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wf(n,e,t,i){let s=_u(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function To(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _u(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Mu=class{static triangulate(e,t,i=2){return c1(e,t,i)}},vi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Xf(e),jf(i,e);let a=e.length;t.forEach(Xf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,jf(i,t[l]);let o=Mu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function jf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var oc=class n extends Ke{constructor(e=new Mo([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled===void 0||t.bevelEnabled,d=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:x1,_,b,S,M,w,U=!1;if(g){_=g.getSpacedPoints(h),U=!0,p=!1;let L=!!g.isCatmullRomCurve3&&g.closed;b=g.computeFrenetFrames(h,L),S=new A,M=new A,w=new A}p||(x=0,d=0,f=0,m=0);let z=o.extractPoints(c),D=z.shape,V=z.holes;if(!vi.isClockWise(D)){D=D.reverse();for(let L=0,O=V.length;L<O;L++){let T=V[L];vi.isClockWise(T)&&(V[L]=T.reverse())}}function B(L){let O=10000000000000001e-36,T=L[0];for(let H=1;H<=L.length;H++){let F=H%L.length,P=L[F],Y=P.x-T.x,$=P.y-T.y,ee=Y*Y+$*$,de=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(T.x),Math.abs(T.y));ee<=O*de*de?(L.splice(F,1),H--):T=P}}B(D),V.forEach(B);let X=V.length,G=D;for(let L=0;L<X;L++){let O=V[L];D=D.concat(O)}function W(L,O,T){return O||Oe("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(O,T)}let K=D.length;function Z(L,O,T){let H,F,P,Y=L.x-O.x,$=L.y-O.y,ee=T.x-L.x,de=T.y-L.y,pe=Y*Y+$*$,Pe=Y*de-$*ee;if(Math.abs(Pe)>Number.EPSILON){let me=Math.sqrt(pe),Be=Math.sqrt(ee*ee+de*de),ie=O.x-$/me,ue=O.y+Y/me,he=((T.x-de/Be-ie)*de-(T.y+ee/Be-ue)*ee)/(Y*de-$*ee);H=ie+Y*he-L.x,F=ue+$*he-L.y;let Me=H*H+F*F;if(Me<=2)return new ae(H,F);P=Math.sqrt(Me/2)}else{let me=!1;Y>Number.EPSILON?ee>Number.EPSILON&&(me=!0):Y<-Number.EPSILON?ee<-Number.EPSILON&&(me=!0):Math.sign($)===Math.sign(de)&&(me=!0),me?(H=-$,F=Y,P=Math.sqrt(pe)):(H=Y,F=$,P=Math.sqrt(pe/2))}return new ae(H/P,F/P)}let ne=[];for(let L=0,O=G.length,T=O-1,H=L+1;L<O;L++,T++,H++)T===O&&(T=0),H===O&&(H=0),ne[L]=Z(G[L],G[T],G[H]);let ve=[],Ce,Te,Ae=ne.concat();for(let L=0,O=X;L<O;L++){let T=V[L];Ce=[];for(let H=0,F=T.length,P=F-1,Y=H+1;H<F;H++,P++,Y++)P===F&&(P=0),Y===F&&(Y=0),Ce[H]=Z(T[H],T[P],T[Y]);ve.push(Ce),Ae=Ae.concat(Ce)}if(x===0)Te=vi.triangulateShape(G,V);else{let L=[],O=[];for(let T=0;T<x;T++){let H=T/x,F=d*Math.cos(H*Math.PI/2),P=f*Math.sin(H*Math.PI/2)+m;for(let Y=0,$=G.length;Y<$;Y++){let ee=W(G[Y],ne[Y],P);we(ee.x,ee.y,-F),H===0&&L.push(ee)}for(let Y=0,$=X;Y<$;Y++){let ee=V[Y];Ce=ve[Y];let de=[];for(let pe=0,Pe=ee.length;pe<Pe;pe++){let me=W(ee[pe],Ce[pe],P);we(me.x,me.y,-F),H===0&&de.push(me)}H===0&&O.push(de)}}Te=vi.triangulateShape(L,O)}let oe=Te.length,ye=f+m;for(let L=0;L<K;L++){let O=p?W(D[L],Ae[L],ye):D[L];U?(M.copy(b.normals[0]).multiplyScalar(O.x),S.copy(b.binormals[0]).multiplyScalar(O.y),w.copy(_[0]).add(M).add(S),we(w.x,w.y,w.z)):we(O.x,O.y,0)}for(let L=1;L<=h;L++)for(let O=0;O<K;O++){let T=p?W(D[O],Ae[O],ye):D[O];U?(M.copy(b.normals[L]).multiplyScalar(T.x),S.copy(b.binormals[L]).multiplyScalar(T.y),w.copy(_[L]).add(M).add(S),we(w.x,w.y,w.z)):we(T.x,T.y,u/h*L)}for(let L=x-1;L>=0;L--){let O=L/x,T=d*Math.cos(O*Math.PI/2),H=f*Math.sin(O*Math.PI/2)+m;for(let F=0,P=G.length;F<P;F++){let Y=W(G[F],ne[F],H);we(Y.x,Y.y,u+T)}for(let F=0,P=V.length;F<P;F++){let Y=V[F];Ce=ve[F];for(let $=0,ee=Y.length;$<ee;$++){let de=W(Y[$],Ce[$],H);U?we(de.x,de.y+_[h-1].y,_[h-1].x+T):we(de.x,de.y,u+T)}}}function fe(L,O){let T=L.length;for(;--T>=0;){let H=T,F=T-1;F<0&&(F=L.length-1);for(let P=0,Y=h+2*x;P<Y;P++){let $=K*P,ee=K*(P+1);re(O+H+$,O+F+$,O+F+ee,O+H+ee)}}}function we(L,O,T){l.push(L),l.push(O),l.push(T)}function Ve(L,O,T){N(L),N(O),N(T);let H=s.length/3,F=y.generateTopUV(i,s,H-3,H-2,H-1);R(F[0]),R(F[1]),R(F[2])}function re(L,O,T,H){N(L),N(O),N(H),N(O),N(T),N(H);let F=s.length/3,P=y.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);R(P[0]),R(P[1]),R(P[3]),R(P[1]),R(P[2]),R(P[3])}function N(L){s.push(l[3*L+0]),s.push(l[3*L+1]),s.push(l[3*L+2])}function R(L){r.push(L.x),r.push(L.y)}(function(){let L=s.length/3;if(p){let O=0,T=K*O;for(let H=0;H<oe;H++){let F=Te[H];Ve(F[2]+T,F[1]+T,F[0]+T)}O=h+2*x,T=K*O;for(let H=0;H<oe;H++){let F=Te[H];Ve(F[0]+T,F[1]+T,F[2]+T)}}else{for(let O=0;O<oe;O++){let T=Te[O];Ve(T[2],T[1],T[0])}for(let O=0;O<oe;O++){let T=Te[O];Ve(T[0]+K*h,T[1]+K*h,T[2]+K*h)}}i.addGroup(L,s.length/3-L,0)})(),(function(){let L=s.length/3,O=0;fe(G,O),O+=G.length;for(let T=0,H=V.length;T<H;T++){let F=V[T];fe(F,O),O+=F.length}i.addGroup(L,s.length/3-L,1)})()}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,s){if(s.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];s.shapes.push(o.uuid)}else s.shapes.push(t.uuid);return s.options=Object.assign({},i),i.extrudePath!==void 0&&(s.options.extrudePath=i.extrudePath.toJSON()),s})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rc[s.type]().fromJSON(s)),new n(i,e.options)}},x1={generateTopUV:function(n,e,t,i,s){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*s],h=e[3*s+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],p=e[3*s],d=e[3*s+1],f=e[3*s+2],m=e[3*r],x=e[3*r+1],g=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-u),new ae(p,1-f),new ae(m,1-g)]:[new ae(o,1-l),new ae(h,1-u),new ae(d,1-f),new ae(x,1-g)]}},sa=class n extends ws{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},lc=class n extends Ke{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ze(s,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,p=new ae,d=new A,f=new A,m=new A,x=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=1*g,d.y=-x,d.z=0*g,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=1*g,d.y=-x,d.z=0*g,f.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(f)}for(let y=0;y<=t;y++){let _=i+y*h*s,b=Math.sin(_),S=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*b,u.y=e[M].y,u.z=e[M].x*S,a.push(u.x,u.y,u.z),p.x=y/t,p.y=M/(e.length-1),o.push(p.x,p.y);let w=l[3*M+0]*b,U=l[3*M+1],z=l[3*M+0]*S;c.push(w,U,z)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let b=_+y*e.length,S=b,M=b+e.length,w=b+e.length+1,U=b+1;r.push(S,M,U),r.push(w,U,M)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},cc=class n extends ws{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Rt=class n extends Ke{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,d=[],f=[],m=[],x=[];for(let g=0;g<h;g++){let y=g*p-a;for(let _=0;_<c;_++){let b=_*u-r;f.push(b,-y,0),m.push(0,0,1),x.push(_/o),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let _=y+c*g,b=y+c*(g+1),S=y+1+c*(g+1),M=y+1+c*g;d.push(_,b,M),d.push(b,S,M)}this.setIndex(d),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(m,3)),this.setAttribute("uv",new Ue(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ai=class n extends Ke{constructor(e=.5,t=1,i=32,s=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,p=(t-e)/(s=Math.max(1,s)),d=new A,f=new ae;for(let m=0;m<=s;m++){for(let x=0;x<=i;x++){let g=r+x/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,h.push(f.x,f.y)}u+=p}for(let m=0;m<s;m++){let x=m*(i+1);for(let g=0;g<i;g++){let y=g+x,_=y,b=y+i+1,S=y+i+2,M=y+1;o.push(_,b,M),o.push(b,S,M)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},hc=class n extends Ke{constructor(e=new Mo([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=s.length/3,p=h.extractPoints(t),d=p.shape,f=p.holes;vi.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=f.length;x<g;x++){let y=f[x];vi.isClockWise(y)===!0&&(f[x]=y.reverse())}let m=vi.triangulateShape(d,f);for(let x=0,g=f.length;x<g;x++){let y=f[x];d=d.concat(y)}for(let x=0,g=d.length;x<g;x++){let y=d[x];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let x=0,g=m.length;x<g;x++){let y=m[x],_=y[0]+u,b=y[1]+u,S=y[2]+u;i.push(_,b,S),l+=3}}this.setIndex(i),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(r,3)),this.setAttribute("uv",new Ue(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let s=0,r=t.length;s<r;s++){let a=t[s];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}},lt=class n extends Ke{constructor(e=1,t=32,i=16,s=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,p=new A,d=[],f=[],m=[],x=[];for(let g=0;g<=i;g++){let y=[],_=g/i,b=a+_*o,S=e*Math.cos(b),M=Math.sqrt(e*e-S*S),w=0;g===0&&a===0?w=.5/t:g===i&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){let z=U/t,D=s+z*r;u.x=-M*Math.cos(D),u.y=S,u.z=M*Math.sin(D),f.push(u.x,u.y,u.z),p.copy(u).normalize(),m.push(p.x,p.y,p.z),x.push(z+w,1-_),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let _=h[g][y+1],b=h[g][y],S=h[g+1][y],M=h[g+1][y+1];(g!==0||a>0)&&d.push(_,b,M),(g!==i-1||l<Math.PI)&&d.push(b,S,M)}this.setIndex(d),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(m,3)),this.setAttribute("uv",new Ue(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},uc=class n extends ws{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},wn=class n extends Ke{constructor(e=1,t=.4,i=12,s=48,r=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],p=new A,d=new A,f=new A;for(let m=0;m<=i;m++){let x=a+m/i*o;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(x))*Math.cos(y),d.y=(e+t*Math.cos(x))*Math.sin(y),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),p.x=e*Math.cos(y),p.y=e*Math.sin(y),f.subVectors(d,p).normalize(),h.push(f.x,f.y,f.z),u.push(g/s),u.push(m/i)}}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,y=(s+1)*(m-1)+x-1,_=(s+1)*(m-1)+x,b=(s+1)*m+x;l.push(g,y,b),l.push(y,_,b)}this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},dc=class n extends Ke{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],u=new A,p=new A,d=new A,f=new A,m=new A,x=new A,g=new A;for(let _=0;_<=i;++_){let b=_/i*r*Math.PI*2;y(b,r,a,e,d),y(b+.01,r,a,e,f),x.subVectors(f,d),g.addVectors(f,d),m.crossVectors(x,g),g.crossVectors(m,x),m.normalize(),g.normalize();for(let S=0;S<=s;++S){let M=S/s*Math.PI*2,w=-t*Math.cos(M),U=t*Math.sin(M);u.x=d.x+(w*g.x+U*m.x),u.y=d.y+(w*g.y+U*m.y),u.z=d.z+(w*g.z+U*m.z),l.push(u.x,u.y,u.z),p.subVectors(u,d).normalize(),c.push(p.x,p.y,p.z),h.push(_/i),h.push(S/s)}}for(let _=1;_<=i;_++)for(let b=1;b<=s;b++){let S=(s+1)*(_-1)+(b-1),M=(s+1)*_+(b-1),w=(s+1)*_+b,U=(s+1)*(_-1)+b;o.push(S,M,U),o.push(M,w,U)}function y(_,b,S,M,w){let U=Math.cos(_),z=Math.sin(_),D=S/b*_,V=Math.cos(D);w.x=M*(2+V)*.5*U,w.y=M*(2+V)*z*.5,w.z=M*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},As=class n extends Ke{constructor(e=new vo(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new ae,h=new A,u=[],p=[],d=[],f=[];function m(x){h=e.getPointAt(x/t,h);let g=a.normals[x],y=a.binormals[x];for(let _=0;_<=s;_++){let b=_/s*Math.PI*2,S=Math.sin(b),M=-Math.cos(b);l.x=M*g.x+S*y.x,l.y=M*g.y+S*y.y,l.z=M*g.z+S*y.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),(function(){for(let x=0;x<=t;x++)for(let g=0;g<=s;g++)c.x=x/t,c.y=g/s,d.push(c.x,c.y)})(),(function(){for(let x=1;x<=t;x++)for(let g=1;g<=s;g++){let y=(s+1)*(x-1)+(g-1),_=(s+1)*x+(g-1),b=(s+1)*x+g,S=(s+1)*(x-1)+g;f.push(y,_,S),f.push(_,b,S)}})()})(),this.setIndex(f),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(p,3)),this.setAttribute("uv",new Ue(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new rc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},pc=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new A,r=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],p=u.start;for(let d=p,f=p+u.count;d<f;d+=3)for(let m=0;m<3;m++){let x=o.getX(d+m),g=o.getX(d+(m+1)%3);s.fromBufferAttribute(a,x),r.fromBufferAttribute(a,g),qf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),qf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function qf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(s)!==!0&&(t.add(i),t.add(s),!0)}var Cx=Object.freeze({__proto__:null,BoxGeometry:Wt,CapsuleGeometry:bi,CircleGeometry:ri,ConeGeometry:Si,CylinderGeometry:It,DodecahedronGeometry:ec,EdgesGeometry:tc,ExtrudeGeometry:oc,IcosahedronGeometry:sa,LatheGeometry:lc,OctahedronGeometry:cc,PlaneGeometry:Rt,PolyhedronGeometry:ws,RingGeometry:ai,ShapeGeometry:hc,SphereGeometry:lt,TetrahedronGeometry:uc,TorusGeometry:wn,TorusKnotGeometry:dc,TubeGeometry:As,WireframeGeometry:pc});function or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Yf(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Yf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=or(n[t]);for(let s in i)e[s]=i[s]}return e}function Yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Id(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Zm={clone:or,merge:pn},bn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let s=0;s<t.length;s++)i.push(t[s].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Se().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fc=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tt=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wo=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mc=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gc=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gl(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}function _1(n){let e=n.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,s){return n[i]-n[s]}),t}function Zf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function M1(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Ti=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yc=class extends Ti{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ws:r=e,o=2*t-i;break;case no:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ws:a=e,l=2*i-t;break;case no:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(i-t)/(s-t),m=f*f,x=m*f,g=-p*x+2*p*m-p*f,y=(1+p)*x+(-1.5-2*p)*m+(-.5+p)*f+1,_=(-1-d)*x+(1.5+d)*m+.5*f,b=d*x-d*m;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+y*a[c+S]+_*a[l+S]+b*a[u+S];return r}},Eo=class extends Ti{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},vc=class extends Ti{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xc=class extends Ti{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(i-t)/(s-t),m=1-f;for(let x=0;x!==o;++x)r[x]=a[c+x]*m+a[l+x]*f;return r}let p=2*o,d=e-1;for(let f=0;f!==o;++f){let m=a[c+f],x=a[l+f],g=d*p+2*f,y=u[g],_=u[g+1],b=e*p+2*f,S=h[b],M=h[b+1],w,U,z,D,V,B=(i-t)/(s-t);for(let X=0;X<8;X++){w=B*B,U=w*B,z=1-B,D=z*z,V=D*z;let G=V*t+3*D*B*y+3*z*w*S+U*s-i;if(Math.abs(G)<1e-10)break;let W=3*D*(y-t)+6*z*B*(S-y)+3*w*(s-S);if(Math.abs(W)<1e-10)break;B-=G/W,B=Math.max(0,Math.min(1,B))}r[f]=V*m+3*D*B*_+3*z*w*M+U*x}return r}},Sn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(t,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break;case mu:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return Xl;case this.InterpolantFactoryMethodBezier:return mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Hg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,u=h-i,p=h+i;for(let d=0;d!==i;++d){let f=t[h+d];if(f!==t[u+d]||f!==t[p+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.ValueTypeName="",Sn.prototype.TimeBufferType=Float32Array,Sn.prototype.ValueBufferType=Float32Array,Sn.prototype.DefaultInterpolation=qs;var Vi=class extends Sn{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="bool",Vi.prototype.ValueBufferType=Array,Vi.prototype.DefaultInterpolation=js,Vi.prototype.InterpolantFactoryMethodLinear=void 0,Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Ao.prototype.ValueTypeName="color";var Ki=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Ki.prototype.ValueTypeName="number";var _c=class extends Ti{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Et.slerpFlat(r,0,a,c-o,a,c,l);return r}},wi=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}};wi.prototype.ValueTypeName="quaternion",wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Sn{constructor(e,t,i){super(e,t,i)}};Wi.prototype.ValueTypeName="string",Wi.prototype.ValueBufferType=Array,Wi.prototype.DefaultInterpolation=js,Wi.prototype.InterpolantFactoryMethodLinear=void 0,Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Sn{constructor(e,t,i,s){super(e,t,i,s)}};Ji.prototype.ValueTypeName="vector";var Rs=class{constructor(e="",t=-1,i=[],s=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(b1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Sn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=_1(l);l=Zf(l,1,h),c=Zf(c,1,h),s||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new Ki(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],p=s[u];p||(s[u]=p=[]),p.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){let s=this.tracks[t];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function b1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ki;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return Ao;case"quaternion":return wi;case"bool":case"boolean":return Vi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(n.type);if(n.times===void 0){let t=[],i=[];M1(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Kf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Kf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Kf(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Mc=class{constructor(e,t,i){let s=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jc=new Mc,Ei=class{constructor(e){this.manager=e!==void 0?e:jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},bu=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends Ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),void setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);if(Gi[e]!==void 0)return void Gi[e].push({onLoad:t,onProgress:i,onError:s});Gi[e]=[],Gi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Gi[e],u=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=p?parseInt(p):0,f=d!==0,m=0,x=new ReadableStream({start(g){(function y(){u.read().then(({done:_,value:b})=>{if(_)g.close();else{m+=b.byteLength;let S=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:d});for(let M=0,w=h.length;M<w;M++){let U=h[M];U.onProgress&&U.onProgress(S)}g.enqueue(b),y()}},_=>{g.error(_)})})()}});return new Response(x)}throw new bu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(d=>p.decode(d))}}}).then(c=>{xi.add(`file:${e}`,c);let h=Gi[e];delete Gi[e];for(let u=0,p=h.length;u<p;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Gi[e];for(let u=0,p=h.length;u<p;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gr=new WeakMap,bc=class extends Ei{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Gr.get(a);u===void 0&&(u=[],Gr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Yr("img");function l(){h(),t&&t(this);let u=Gr.get(this)||[];for(let p=0;p<u.length;p++){let d=u[p];d.onLoad&&d.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),xi.remove(`image:${e}`);let p=Gr.get(this)||[];for(let d=0;d<p.length;d++){let f=p[d];f.onError&&f.onError(u)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var $i=class extends Ei{constructor(e){super(e)}load(e,t,i,s){let r=new $t,a=new bc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Qs=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ro=class extends Qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uu=new Le,Jf=new A,$f=new A,Co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vl=new A,Wl=new Et,mi=new A,aa=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Wl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Wl,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Vl,Wl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Wl,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new A,Qf=new ae,em=new ae,Zt=class extends aa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ys*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Wr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ys*Math.atan(Math.tan(.5*Wr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,em),t.subVectors(em,Qf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Wr*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Su=class extends Co{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*Ys*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;i===t.fov&&s===t.aspect&&r===t.far||(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Po=class extends Qs{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Tu=class extends Co{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Qs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Tu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Cs=class extends aa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wu=class extends Co{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var du=new WeakMap,Io=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0)return r.manager.itemStart(e),a.then?void a.then(c=>{du.has(a)===!0?(s&&s(du.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))}):void setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),du.set(l,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Px=new Le,Ix=new Le,Lx=new Le;var Vr=-90,Sc=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(Vr,1,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Vr,1,e,t);r.layers=this.layers,this.add(r);let a=new Zt(Vr,1,e,t);a.layers=this.layers,this.add(a);let o=new Zt(Vr,1,e,t);o.layers=this.layers,this.add(o);let l=new Zt(Vr,1,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Vr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==qr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;x=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Tc=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Nx=new A,zx=new Et,Dx=new A,Ux=new A,Ox=new A;var Fx=new A,Bx=new Et,kx=new A,Hx=new A;var wc=class{constructor(e,t,i){let s,r,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){Et.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let a=this._workIndex*r;Et.multiplyQuaternionsFlat(e,a,e,t,e,i),Et.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},Ld="\\[\\]\\.:\\/",S1=new RegExp("["+Ld+"]","g"),pu="[^"+Ld+"]",T1="[^"+Ld.replace("\\.","")+"]",w1=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",pu)+/(WCOD+)?/.source.replace("WCOD",T1)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu)+"$"),E1=["material","materials","bones","map"],Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S1,"")}static parseTrackName(e){let t=w1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);E1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ie("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[s];if(a===void 0)return void Oe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+s+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry)return void Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=class{constructor(n,e,t){let i=t||Mt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=t.length;i!==s;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray],Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ec=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Vs,endingEnd:Vs};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled)return void this._updateWeight(e);let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===Lm)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping()))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,a=i===2202;if(e===0)return r===-1||!a||1&~r?s:t-s;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else{if(!(s<0)){this.time=s;break e}s=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&!(1&~r))return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Ws,s.endingEnd=Ws):(s.endingStart=e?this.zeroSlopeAtStart?Ws:Vs:no,s.endingEnd=t?this.zeroSlopeAtEnd?Ws:Vs:no)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},A1=new Float32Array(1),oa=class extends ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let p=s[u],d=p.name,f=h[d];if(f!==void 0)++f.referenceCount,a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,d));continue}let m=t&&t._propertyBindings[u].binding.parsedPath;f=new wc(Mt.create(i,d,m),p.ValueTypeName,p.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,d),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new Eo(new Float32Array(2),new Float32Array(2),1,A1),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Rs.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(i=a!==null?a.blendMode:Im),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Ec(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?Rs.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let a=i[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let s=this._bindingsByRootAndName[t];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var tm=new Le,Lo=class{constructor(e,t,i=0,s=1/0){this.ray=new Ms(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tm),this}intersectObject(e,t=!0,i=[]){return Eu(e,this,i,t),i.sort(nm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Eu(e[s],this,i,t);return i.sort(nm),i}};function nm(n,e){return n.distance-e.distance}function Eu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Eu(r[a],e,t,!0)}}var Fd=class Fd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Fd.prototype.isMatrix2=!0;var Au=Fd,Gx=new ae;var Vx=new A,Wx=new A,Xx=new A,jx=new A,qx=new A,Yx=new A,Zx=new A;var Kx=new A;var Jx=new A,$x=new Le,Qx=new Le;var e_=new A,t_=new Se,n_=new Se;var i_=new A,s_=new A,r_=new A;var a_=new A,o_=new aa;var l_=new ln;var c_=new A;function Nd(n,e,t,i){let s=(function(r){switch(r){case Un:case Xu:return{byteLength:1,components:1};case da:case ju:case Pi:return{byteLength:2,components:1};case zc:case Dc:return{byteLength:2,components:4};case ts:case Nc:case On:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)})(i);switch(t){case 1021:return n*e;case Uc:case Oc:return n*e/s.components*s.byteLength;case 1030:case 1031:return n*e*2/s.components*s.byteLength;case 1022:return n*e*3/s.components*s.byteLength;case Xn:case 1033:return n*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function v0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function P1(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let s=e.get(t);if(s===void 0)e.set(t,(function(r,a){let o=r.array,l=r.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}})(t,i));else if(s.version<t.version){if(s.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,r),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,p)=>u.start-p.start);let h=0;for(let u=1;u<c.length;u++){let p=c[h],d=c[u];d.start<=p.start+p.count+1?p.count=Math.max(p.count,d.start+d.count-p.start):(++h,c[h]=d)}c.length=h+1;for(let u=0,p=c.length;u<p;u++){let d=c[u];n.bufferSubData(o,d.start*l.BYTES_PER_ELEMENT,l,d.start,d.count)}a.clearUpdateRanges()}a.onUploadCallback()})(s.buffer,t,i),s.version=t.version}}}}var Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},xe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Li={basic:{uniforms:pn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:pn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:pn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:pn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:pn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:pn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:pn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:pn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:pn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:pn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:pn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:pn([xe.common,xe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:pn([xe.lights,xe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Li.physical={uniforms:pn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var qc={r:0,b:0,g:0},I1=new Le,x0=new Xe;function L1(n,e,t,i,s,r){let a=new Se(0),o,l,c=s===!0?0:1,h=null,u=0,p=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let g=m.backgroundBlurriness>0;x=e.get(x,g)}return x}function f(m,x){m.getRGB(qc,Id(n)),t.buffers.color.setClear(qc.r,qc.g,qc.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(a,c)},render:function(m){let x=!1,g=d(m);g===null?f(a,c):g&&g.isColor&&(f(g,1),x=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(m,x){let g=d(x);g&&(g.isCubeTexture||g.mapping===Do)?(l===void 0&&(l=new ce(new Wt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:or(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,_,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(x.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(x0),l.material.toneMapped=$e.getTransfer(g.colorSpace)!==pt,h===g&&u===g.version&&p===n.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new ce(new Rt(2,2),new bn({name:"BackgroundMaterial",uniforms:or(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.toneMapped=$e.getTransfer(g.colorSpace)!==pt,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&p===n.toneMapping||(o.material.needsUpdate=!0,h=g,u=g.version,p=n.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function N1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function o(g){return n.bindVertexArray(g)}function l(g){return n.deleteVertexArray(g)}function c(g){let y=[],_=[],b=[];for(let S=0;S<t;S++)y[S]=0,_[S]=0,b[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:_,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=r.newAttributes;for(let y=0,_=g.length;y<_;y++)g[y]=0}function u(g){p(g,0)}function p(g,y){let _=r.newAttributes,b=r.enabledAttributes,S=r.attributeDivisors;_[g]=1,b[g]===0&&(n.enableVertexAttribArray(g),b[g]=1),S[g]!==y&&(n.vertexAttribDivisor(g,y),S[g]=y)}function d(){let g=r.newAttributes,y=r.enabledAttributes;for(let _=0,b=y.length;_<b;_++)y[_]!==g[_]&&(n.disableVertexAttribArray(_),y[_]=0)}function f(g,y,_,b,S,M,w){w===!0?n.vertexAttribIPointer(g,y,_,S,M):n.vertexAttribPointer(g,y,_,b,S,M)}function m(){x(),a=!0,r!==s&&(r=s,o(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:function(g,y,_,b,S){let M=!1,w=(function(U,z,D,V){let B=V.wireframe===!0,X=i[z.id];X===void 0&&(X={},i[z.id]=X);let G=U.isInstancedMesh===!0?U.id:0,W=X[G];W===void 0&&(W={},X[G]=W);let K=W[D.id];K===void 0&&(K={},W[D.id]=K);let Z=K[B];return Z===void 0&&(Z=c(n.createVertexArray()),K[B]=Z),Z})(g,b,_,y);r!==w&&(r=w,o(r.object)),M=(function(U,z,D,V){let B=r.attributes,X=z.attributes,G=0,W=D.getAttributes();for(let K in W)if(W[K].location>=0){let Z=B[K],ne=X[K];if(ne===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;G++}return r.attributesNum!==G||r.index!==V})(g,b,_,S),M&&(function(U,z,D,V){let B={},X=z.attributes,G=0,W=D.getAttributes();for(let K in W)if(W[K].location>=0){let Z=X[K];Z===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor));let ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),B[K]=ne,G++}r.attributes=B,r.attributesNum=G,r.index=V})(g,b,_,S),S!==null&&e.update(S,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(U,z,D,V){h();let B=V.attributes,X=D.getAttributes(),G=z.defaultAttributeValues;for(let W in X){let K=X[W];if(K.location>=0){let Z=B[W];if(Z===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){let ne=Z.normalized,ve=Z.itemSize,Ce=e.get(Z);if(Ce===void 0)continue;let Te=Ce.buffer,Ae=Ce.type,oe=Ce.bytesPerElement,ye=Ae===n.INT||Ae===n.UNSIGNED_INT||Z.gpuType===Nc;if(Z.isInterleavedBufferAttribute){let fe=Z.data,we=fe.stride,Ve=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let re=0;re<K.locationSize;re++)p(K.location+re,fe.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let re=0;re<K.locationSize;re++)u(K.location+re);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let re=0;re<K.locationSize;re++)f(K.location+re,ve/K.locationSize,Ae,ne,we*oe,(Ve+ve/K.locationSize*re)*oe,ye)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<K.locationSize;fe++)p(K.location+fe,Z.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<K.locationSize;fe++)u(K.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let fe=0;fe<K.locationSize;fe++)f(K.location+fe,ve/K.locationSize,Ae,ne,ve*oe,ve/K.locationSize*fe*oe,ye)}}else if(G!==void 0){let ne=G[W];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(K.location,ne);break;case 3:n.vertexAttrib3fv(K.location,ne);break;case 4:n.vertexAttrib4fv(K.location,ne);break;default:n.vertexAttrib1fv(K.location,ne)}}}}d()})(g,y,_,b),S!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:m,resetDefaultState:x,dispose:function(){m();for(let g in i){let y=i[g];for(let _ in y){let b=y[_];for(let S in b){let M=b[S];for(let w in M)l(M[w].object),delete M[w];delete b[S]}}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let y=i[g.id];for(let _ in y){let b=y[_];for(let S in b){let M=b[S];for(let w in M)l(M[w].object),delete M[w];delete b[S]}}delete i[g.id]},releaseStatesOfObject:function(g){for(let y in i){let _=i[y],b=g.isInstancedMesh===!0?g.id:0,S=_[b];if(S!==void 0){for(let M in S){let w=S[M];for(let U in w)l(w[U].object),delete w[U];delete S[M]}delete _[b],Object.keys(_).length===0&&delete i[y]}}},releaseStatesOfProgram:function(g){for(let y in i){let _=i[y];for(let b in _){let S=_[b];if(S[g.id]===void 0)continue;let M=S[g.id];for(let w in M)l(M[w].object),delete M[w];delete S[g.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:d}}function z1(n,e,t){let i;this.setMode=function(s){i=s},this.render=function(s,r){n.drawArrays(i,s,r),t.update(r,i,1)},this.renderInstances=function(s,r,a){a!==0&&(n.drawArraysInstanced(i,s,r,a),t.update(r,i,a))},this.renderMultiDraw=function(s,r,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,r,0,a);let o=0;for(let l=0;l<a;l++)o+=r[l];t.update(o,i,1)}}function D1(n,e,t,i){let s;function r(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(Ie("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&c===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s},getMaxPrecision:r,textureFormatReadable:function(h){return h===Xn||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Un&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==On&&!u)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function U1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new gi,o=new Xe,l={value:null,needsUpdate:!1};function c(h,u,p,d){let f=h!==null?h.length:0,m=null;if(f!==0){if(m=l.value,d!==!0||m===null){let x=p+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,_=p;y!==f;++y,_+=4)a.copy(h[y]).applyMatrix4(g,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||i!==0||s;return s=u,i=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,p){let d=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!s||d===null||d.length===0||r&&!m)r?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let g=r?0:i,y=4*g,_=x.clippingState||null;l.value=_,_=c(d,u,y,p);for(let b=0;b!==y;++b)_[b]=t[b];x.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}x0.set(-1,0,0,0,1,0,0,0,1);var Km=[.125,.215,.35,.446,.526,.582],Fo=20,Bo=new Cs,Jm=new Se,Bd=null,kd=0,Hd=0,Gd=!1,O1=new A,va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=O1}=r;Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,kd,Hd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Pi,format:Xn,colorSpace:_n,depthBuffer:!1},s=$m(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Km.length;for(let p=0;p<u;p++){let d=Math.pow(2,h);o.push(d);let f=1/d;p>a-4?f=Km[p-a+4-1]:p===0&&(f=0),l.push(f);let m=1/(d-2),x=-m,g=1+m,y=[x,x,g,x,g,g,x,x,g,g,x,g],_=6,b=6,S=3,M=2,w=1,U=new Float32Array(S*b*_),z=new Float32Array(M*b*_),D=new Float32Array(w*b*_);for(let B=0;B<_;B++){let X=B%3*2/3-1,G=B>2?0:-1,W=[X,G,0,X+2/3,G,0,X+2/3,G+1,0,X,G,0,X+2/3,G+1,0,X,G+1,0];U.set(W,S*b*B),z.set(y,M*b*B);let K=[B,B,B,B,B,B];D.set(K,w*b*B)}let V=new Ke;V.setAttribute("position",new st(U,S)),V.setAttribute("uv",new st(z,M)),V.setAttribute("faceIndex",new st(D,w)),c.push(new ce(V,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(r)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Fo),h=new A(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Fo,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})})(r,e,t),this._ggxMaterial=(function(a,o,l){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})})(r,e,t)}return s}_compileMaterial(e){let t=new ce(new Ke,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,i,s,r){let a=new Zt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Jm),c.toneMapping=oi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Wt,new rt({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,d=p.material,f=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,f=!0):(d.color.copy(Jm),f=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(a.up.set(0,o[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+l[x],r.y,r.z)):g===1?(a.up.set(0,0,o[x]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+l[x],r.z)):(a.up.set(0,o[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+l[x]));let y=this._cubeSize;ga(s,g*y,x>2?y:0,y,y),c.setRenderTarget(s),f&&c.render(p,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ha||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r,r.uniforms.envMap.value=e;let o=this._cubeSize;ga(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Bo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:p}=this,d=this._sizeLods[i],f=3*d*(i>p-4?i-p+4:0),m=4*(this._cubeSize-d);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,ga(r,f,m,3*d,2*d),s.setRenderTarget(r),s.render(o,Bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,ga(e,f,m,3*d,2*d),s.setRenderTarget(e),s.render(o,Bo)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[s];h.material=c;let u=c.uniforms,p=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*p):2*Math.PI/39,f=r/d,m=isFinite(r)?1+Math.floor(3*f):Fo;m>Fo&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let x=[],g=0;for(let b=0;b<Fo;++b){let S=b/f,M=Math.exp(-S*S/2);x.push(M),b===0?g+=M:b<m&&(g+=2*M)}for(let b=0;b<x.length;b++)x[b]=x[b]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=x,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=d,u.mipInt.value=y-i;let _=this._sizeLods[s];ga(t,3*_*(s>y-4?s-y+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Bo)}};function $m(n,e,t){let i=new zn(n,e,t);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qm(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function e0(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}var Kc=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new po(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ri});r.uniforms.tEquirect.value=t;let a=new ce(s,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Kt),new Sc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function F1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(o,l){return l===Pc?o.mapping=ha:l===Ic&&(o.mapping=ir),o}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===Pc||h===Ic,p=h===ha||h===ir;if(u||p){let d=t.get(c),f=d!==void 0?d.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new va(n)),d=u?i.fromEquirectangular(c,d):i.fromCubemap(c,d),d.texture.pmremVersion=c.pmremVersion,t.set(c,d),d.texture;if(d!==void 0)return d.texture;{let m=c.image;return u&&m&&m.height>0||p&&m&&(function(x){let g=0,y=6;for(let _=0;_<y;_++)x[_]!==void 0&&g++;return g===y})(m)?(i===null&&(i=new va(n)),d=u?i.fromEquirectangular(c):i.fromCubemap(c),d.texture.pmremVersion=c.pmremVersion,t.set(c,d),c.addEventListener("dispose",a),d.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Pc||h===Ic){if(e.has(c))return s(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let p=new Kc(u.height);return p.fromEquirectangularTexture(n,c),e.set(c,p),c.addEventListener("dispose",r),s(p.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function B1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Xs("WebGLRenderer: "+i+" extension not supported."),s}}}function k1(n,e,t,i){let s={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete s[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,p=0;if(u===void 0)return;if(h!==null){let m=h.array;p=h.version;for(let x=0,g=m.length;x<g;x+=3){let y=m[x+0],_=m[x+1],b=m[x+2];c.push(y,_,_,b,b,y)}}else{let m=u.array;p=u.version;for(let x=0,g=m.length/3-1;x<g;x+=3){let y=x+0,_=x+1,b=x+2;c.push(y,_,_,b,b,y)}}let d=new(u.count>=65535?lo:oo)(c,1);d.version=p;let f=r.get(l);f&&e.remove(f),r.set(l,d)}return{get:function(l,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function H1(n,e,t){let i,s,r;this.setMode=function(a){i=a},this.setIndex=function(a){s=a.type,r=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,s,a*r),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(n.drawElementsInstanced(i,o,s,a*r,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,s,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,i,1)}}function G1(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,s){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=s*(t/3);break;case n.LINES:e.lines+=s*(t/2);break;case n.LINE_STRIP:e.lines+=s*(t-1);break;case n.LINE_LOOP:e.lines+=s*t;break;case n.POINTS:e.points+=s*t;break;default:Oe("WebGLInfo: Unknown draw mode:",i)}}}}function V1(n,e,t){let i=new WeakMap,s=new vt;return{update:function(r,a,o){let l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let U=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],y=0;p===!0&&(y=1),d===!0&&(y=2),f===!0&&(y=3);let _=a.attributes.position.count*y,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*b*4*h),M=new ro(S,_,b,h);M.type=On,M.needsUpdate=!0;let w=4*y;for(let z=0;z<h;z++){let D=m[z],V=x[z],B=g[z],X=_*b*4*z;for(let G=0;G<D.count;G++){let W=G*w;p===!0&&(s.fromBufferAttribute(D,G),S[X+W+0]=s.x,S[X+W+1]=s.y,S[X+W+2]=s.z,S[X+W+3]=0),d===!0&&(s.fromBufferAttribute(V,G),S[X+W+4]=s.x,S[X+W+5]=s.y,S[X+W+6]=s.z,S[X+W+7]=0),f===!0&&(s.fromBufferAttribute(B,G),S[X+W+8]=s.x,S[X+W+9]=s.y,S[X+W+10]=s.z,S[X+W+11]=B.itemSize===4?s.w:1)}}u={count:h,texture:M,size:new ae(_,b)},i.set(a,u),a.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let p=0;for(let f=0;f<l.length;f++)p+=l[f];let d=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(n,"morphTargetBaseInfluence",d),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function W1(n,e,t,i,s){let r=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=s.render.frame,c=o.geometry,h=e.get(o,c);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return h},dispose:function(){r=new WeakMap}}}var X1={[Fu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[zo]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[Hu]:"CUSTOM_TONE_MAPPING"};function j1(n,e,t,i,s,r){let a=new zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Zi(e,t):void 0}),o=new zn(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new Ke;l.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let c=new fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ce(l,c),u=new Cs(-1,1,1,-1,0,1),p,d=null,f=null,m=!1,x=null,g=[],y=!1;this.setSize=function(_,b){a.setSize(_,b),o.setSize(_,b);for(let S=0;S<g.length;S++){let M=g[S];M.setSize&&M.setSize(_,b)}},this.setEffects=function(_){g=_,y=g.length>0&&g[0].isRenderPass===!0;let b=a.width,S=a.height;for(let M=0;M<g.length;M++){let w=g[M];w.setSize&&w.setSize(b,S)}},this.begin=function(_,b){if(m||_.toneMapping===oi&&g.length===0)return!1;if(x=b,b!==null){let S=b.width,M=b.height;a.width===S&&a.height===M||this.setSize(S,M)}return y===!1&&_.setRenderTarget(a),p=_.toneMapping,_.toneMapping=oi,!0},this.hasRenderPass=function(){return y},this.end=function(_,b){_.toneMapping=p,m=!0;let S=a,M=o;for(let w=0;w<g.length;w++){let U=g[w];if(U.enabled!==!1&&(U.render(_,M,S,b),U.needsSwap!==!1)){let z=S;S=M,M=z}}if(d!==_.outputColorSpace||f!==_.toneMapping){d=_.outputColorSpace,f=_.toneMapping,c.defines={},$e.getTransfer(d)===pt&&(c.defines.SRGB_TRANSFER="");let w=X1[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(x),_.render(h,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var _0=new $t,Xd=new Zi(1,1),M0=new ro,b0=new Zl,S0=new po,t0=[],n0=[],i0=new Float32Array(16),s0=new Float32Array(9),r0=new Float32Array(4);function xa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=t0[s];if(r===void 0&&(r=new Float32Array(s),t0[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $c(n,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function q1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Y1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function Z1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function K1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function J1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;r0.set(i),n.uniformMatrix2fv(this.addr,!1,r0),en(t,i)}}function $1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;s0.set(i),n.uniformMatrix3fv(this.addr,!1,s0),en(t,i)}}function Q1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;i0.set(i),n.uniformMatrix4fv(this.addr,!1,i0),en(t,i)}}function ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ty(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function ny(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function sy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ry(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function ay(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function oy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit(),r;i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),this.type===n.SAMPLER_2D_SHADOW?(Xd.compareFunction=t.isReversedDepthBuffer()?Xc:Wc,r=Xd):r=_0,t.setTexture2D(e||r,s)}function cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||b0,s)}function hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||S0,s)}function uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||M0,s)}function dy(n,e){n.uniform1fv(this.addr,e)}function py(n,e){let t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function fy(n,e){let t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function my(n,e){let t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function gy(n,e){let t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yy(n,e){let t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vy(n,e){let t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xy(n,e){n.uniform1iv(this.addr,e)}function _y(n,e){n.uniform2iv(this.addr,e)}function My(n,e){n.uniform3iv(this.addr,e)}function by(n,e){n.uniform4iv(this.addr,e)}function Sy(n,e){n.uniform1uiv(this.addr,e)}function Ty(n,e){n.uniform2uiv(this.addr,e)}function wy(n,e){n.uniform3uiv(this.addr,e)}function Ey(n,e){n.uniform4uiv(this.addr,e)}function Ay(n,e,t){let i=this.cache,s=e.length,r=$c(t,s),a;Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r)),a=this.type===n.SAMPLER_2D_SHADOW?Xd:_0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ry(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||b0,r[a])}function Cy(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||S0,r[a])}function Py(n,e,t){let i=this.cache,s=e.length,r=$c(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||M0,r[a])}var jd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(s){switch(s){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return K1;case 35674:return J1;case 35675:return $1;case 35676:return Q1;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return ay;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return uy}})(t.type)}},qd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(s){switch(s){case 5126:return dy;case 35664:return py;case 35665:return fy;case 35666:return my;case 35674:return gy;case 35675:return yy;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return My;case 35669:case 35673:return by;case 5125:return Sy;case 36294:return Ty;case 36295:return wy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Py}})(t.type)}},Yd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function a0(n,e){n.seq.push(e),n.map[e.id]=e}function Iy(n,e,t){let i=n.name,s=i.length;for(Vd.lastIndex=0;;){let r=Vd.exec(i),a=Vd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===s){a0(t,c===void 0?new jd(o,n,e):new qd(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Yd(o),a0(t,h)),t=h}}}var ya=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);Iy(o,e.getUniformLocation(t,o.name),this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function o0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ly=0,l0=new Xe;function c0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),p=Math.min(l+6,c.length);for(let d=u;d<p;d++){let f=d+1;h.push(`${f===l?">":" "} ${f}: ${c[d]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return s}function Ny(n,e){let t=(function(i){$e._getMatrix(l0,$e.workingColorSpace,i);let s=`mat3( ${l0.elements.map(r=>r.toFixed(4))} )`;switch($e.getTransfer(i)){case io:return[s,"LinearTransferOETF"];case pt:return[s,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[s,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var zy={[Fu]:"Linear",[Bu]:"Reinhard",[ku]:"Cineon",[zo]:"ACESFilmic",[Gu]:"AgX",[Vu]:"Neutral",[Hu]:"Custom"};function Dy(n,e){let t=zy[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yc=new A;function Uy(){return $e.getLuminanceCoefficients(Yc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Yc.x.toFixed(4)}, ${Yc.y.toFixed(4)}, ${Yc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ko(n){return n!==""}function h0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(n){return n.replace(Oy,By)}var Fy=new Map;function By(n,e){let t=Je[e];if(t===void 0){let i=Fy.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Je[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Zd(t)}var ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(n){return n.replace(ky,Hy)}function Hy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function p0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Gy={[No]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"},Vy={[ha]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE_UV"},Wy={[ir]:"ENVMAP_MODE_REFRACTION"},Xy={[wm]:"ENVMAP_BLENDING_MULTIPLY",[Em]:"ENVMAP_BLENDING_MIX",[Am]:"ENVMAP_BLENDING_ADD"};function jy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){return Gy[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":Vy[V.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":Wy[V.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":Xy[V.combine]||"ENVMAP_BLENDING_NONE"})(t),p=(function(V){let B=V.envMapCubeUVHeight;if(B===null)return null;let X=Math.log2(B)-2,G=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:G,maxMip:X}})(t),d=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)})(t),f=(function(V){let B=[];for(let X in V){let G=V[X];G!==!1&&B.push("#define "+X+" "+G)}return B.join(`
`)})(r),m=s.createProgram(),x,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ko).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ko).join(`
`),g.length>0&&(g+=`
`)):(x=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),g=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Je.tonemapping_pars_fragment:"",t.toneMapping!==oi?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),Uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),a=Zd(a),a=h0(a,t),a=u0(a,t),o=Zd(o),o=h0(o,t),o=u0(o,t),a=d0(a),o=d0(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+x+a,b=y+g+o,S=o0(s,s.VERTEX_SHADER,_),M=o0(s,s.FRAGMENT_SHADER,b);function w(V){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(m)||"",X=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(M)||"",W=B.trim(),K=X.trim(),Z=G.trim(),ne=!0,ve=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,M);else{let Ce=c0(s,S,"vertex"),Te=c0(s,M,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+W+`
`+Ce+`
`+Te)}else W!==""?Ie("WebGLProgram: Program Info Log:",W):K!==""&&Z!==""||(ve=!1);ve&&(V.diagnostics={runnable:ne,programLog:W,vertexShader:{log:K,prefix:x},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(S),s.deleteShader(M),U=new ya(s,m),z=(function(B,X){let G={},W=B.getProgramParameter(X,B.ACTIVE_ATTRIBUTES);for(let K=0;K<W;K++){let Z=B.getActiveAttrib(X,K),ne=Z.name,ve=1;Z.type===B.FLOAT_MAT2&&(ve=2),Z.type===B.FLOAT_MAT3&&(ve=3),Z.type===B.FLOAT_MAT4&&(ve=4),G[ne]={type:Z.type,location:B.getAttribLocation(X,ne),locationSize:ve}}return G})(s,m)}let U,z;s.attachShader(m,S),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),this.getUniforms=function(){return U===void 0&&w(this),U},this.getAttributes=function(){return z===void 0&&w(this),z};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,37297)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=M,this}var qy=0,Kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jd(e),t.set(e,i)),i}},Jd=class{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}};function Yy(n,e,t,i,s,r){let a=new Jr,o=new Kd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,p=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,x,g,y,_,b){let S=y.fog,M=_.geometry,w=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?y.environment:null,U=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||w,U),D=z&&z.mapping===Do?z.image.height:null,V=d[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&Ie("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let B=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,X=B!==void 0?B.length:0,G,W,K,Z,ne=0;if(M.morphAttributes.position!==void 0&&(ne=1),M.morphAttributes.normal!==void 0&&(ne=2),M.morphAttributes.color!==void 0&&(ne=3),V){let tn=Li[V];G=tn.vertexShader,W=tn.fragmentShader}else{G=m.vertexShader,W=m.fragmentShader;let tn=o.getVertexShaderStage(m),Bn=o.getFragmentShaderStage(m);o.update(m,tn,Bn),K=tn.id,Z=Bn.id}let ve=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Te=_.isInstancedMesh===!0,Ae=_.isBatchedMesh===!0,oe=!!m.map,ye=!!m.matcap,fe=!!z,we=!!m.aoMap,Ve=!!m.lightMap,re=!!m.bumpMap&&m.wireframe===!1,N=!!m.normalMap,R=!!m.displacementMap,L=!!m.emissiveMap,O=!!m.metalnessMap,T=!!m.roughnessMap,H=m.anisotropy>0,F=m.clearcoat>0,P=m.dispersion>0,Y=m.iridescence>0,$=m.sheen>0,ee=m.transmission>0,de=H&&!!m.anisotropyMap,pe=F&&!!m.clearcoatMap,Pe=F&&!!m.clearcoatNormalMap,me=F&&!!m.clearcoatRoughnessMap,Be=Y&&!!m.iridescenceMap,ie=Y&&!!m.iridescenceThicknessMap,ue=$&&!!m.sheenColorMap,he=$&&!!m.sheenRoughnessMap,Me=!!m.specularMap,bt=!!m.specularColorMap,ht=!!m.specularIntensityMap,Pt=ee&&!!m.transmissionMap,an=ee&&!!m.thicknessMap,ze=!!m.gradientMap,dt=!!m.alphaMap,Ye=m.alphaTest>0,Jt=!!m.alphaHash,_t=!!m.extensions,Ht=oi;m.toneMapped&&(ve!==null&&ve.isXRRenderTarget!==!0||(Ht=n.toneMapping));let mt={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:G,fragmentShader:W,defines:m.defines,customVertexShaderID:K,customFragmentShaderID:Z,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&_._colorsTexture!==null,instancing:Te,instancingColor:Te&&_.instanceColor!==null,instancingMorph:Te&&_.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:oe,matcap:ye,envMap:fe,envMapMode:fe&&z.mapping,envMapCubeUVHeight:D,aoMap:we,lightMap:Ve,bumpMap:re,normalMap:N,displacementMap:R,emissiveMap:L,normalMapObjectSpace:N&&m.normalMapType===Nm,normalMapTangentSpace:N&&m.normalMapType===Rd,packedNormalMap:N&&m.normalMapType===Rd&&(on=m.normalMap.format,on===ar||on===Gc||on===Vc),metalnessMap:O,roughnessMap:T,anisotropy:H,anisotropyMap:de,clearcoat:F,clearcoatMap:pe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:me,dispersion:P,iridescence:Y,iridescenceMap:Be,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:ue,sheenRoughnessMap:he,specularMap:Me,specularColorMap:bt,specularIntensityMap:ht,transmission:ee,transmissionMap:Pt,thicknessMap:an,gradientMap:ze,opaque:m.transparent===!1&&m.blending===nr&&m.alphaToCoverage===!1,alphaMap:dt,alphaTest:Ye,alphaHash:Jt,combine:m.combine,mapUv:oe&&f(m.map.channel),aoMapUv:we&&f(m.aoMap.channel),lightMapUv:Ve&&f(m.lightMap.channel),bumpMapUv:re&&f(m.bumpMap.channel),normalMapUv:N&&f(m.normalMap.channel),displacementMapUv:R&&f(m.displacementMap.channel),emissiveMapUv:L&&f(m.emissiveMap.channel),metalnessMapUv:O&&f(m.metalnessMap.channel),roughnessMapUv:T&&f(m.roughnessMap.channel),anisotropyMapUv:de&&f(m.anisotropyMap.channel),clearcoatMapUv:pe&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&f(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:he&&f(m.sheenRoughnessMap.channel),specularMapUv:Me&&f(m.specularMap.channel),specularColorMapUv:bt&&f(m.specularColorMap.channel),specularIntensityMapUv:ht&&f(m.specularIntensityMap.channel),transmissionMapUv:Pt&&f(m.transmissionMap.channel),thicknessMapUv:an&&f(m.thicknessMap.channel),alphaMapUv:dt&&f(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(N||H),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!M.attributes.uv&&(oe||dt),fog:!!S,useFog:m.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&N===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:oe&&m.map.isVideoTexture===!0&&$e.getTransfer(m.map.colorSpace)===pt,decodeVideoTextureEmissive:L&&m.emissiveMap.isVideoTexture===!0&&$e.getTransfer(m.emissiveMap.colorSpace)===pt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ct,flipSided:m.side===An,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:_t&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&m.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var on;return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)x.push(g),x.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)})(x,m),(function(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(x,m),x.push(n.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=d[m.type],g;if(x){let y=Li[x];g=Zm.clone(y.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,x){let g=h.get(x);return g!==void 0?++g.usedTimes:(g=new jy(n,x,m,s),c.push(g),h.set(x,g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){o.remove(m)},programs:c,dispose:function(){o.dispose()}}}function Zy(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Ky(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function f0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function m0(){let n=[],e=0,t=[],i=[],s=[];function r(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,p){let d=n[e];return d===void 0?(d={id:o.id,object:o,geometry:l,material:c,materialVariant:r(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:p},n[e]=d):(d.id=o.id,d.object=o,d.geometry=l,d.material=c,d.materialVariant=r(o),d.groupOrder=h,d.renderOrder=o.renderOrder,d.z=u,d.group=p),e++,d}return{opaque:t,transmissive:i,transparent:s,init:function(){e=0,t.length=0,i.length=0,s.length=0},push:function(o,l,c,h,u,p){let d=a(o,l,c,h,u,p);c.transmission>0?i.push(d):c.transparent===!0?s.push(d):t.push(d)},unshift:function(o,l,c,h,u,p){let d=a(o,l,c,h,u,p);c.transmission>0?i.unshift(d):c.transparent===!0?s.unshift(d):t.unshift(d)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l,c){t.length>1&&t.sort(o||Ky),i.length>1&&i.sort(l||f0),s.length>1&&s.sort(l||f0),c&&(t.reverse(),i.reverse(),s.reverse())}}}function Jy(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),s;return i===void 0?(s=new m0,n.set(e,[s])):t>=i.length?(s=new m0,i.push(s)):s=i[t],s},dispose:function(){n=new WeakMap}}}function $y(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Se};break;case"SpotLight":t={position:new A,direction:new A,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new A,halfWidth:new A,halfHeight:new A}}return n[e.id]=t,t}}}var Qy=0;function ev(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tv(n){let e=new $y,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new A);let s=new A,r=new Le,a=new Le;return{setup:function(o){let l=0,c=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let u=0,p=0,d=0,f=0,m=0,x=0,g=0,y=0,_=0,b=0,S=0;o.sort(ev);for(let w=0,U=o.length;w<U;w++){let z=o[w],D=z.color,V=z.intensity,B=z.distance,X=null;if(z.shadow&&z.shadow.map&&(X=z.shadow.map.texture.format===ar?z.shadow.map.texture:z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)l+=D.r*V,c+=D.g*V,h+=D.b*V;else if(z.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(z.sh.coefficients[G],V);S++}else if(z.isDirectionalLight){let G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let W=z.shadow,K=t.get(z);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[u]=K,i.directionalShadowMap[u]=X,i.directionalShadowMatrix[u]=z.shadow.matrix,x++}i.directional[u]=G,u++}else if(z.isSpotLight){let G=e.get(z);G.position.setFromMatrixPosition(z.matrixWorld),G.color.copy(D).multiplyScalar(V),G.distance=B,G.coneCos=Math.cos(z.angle),G.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),G.decay=z.decay,i.spot[d]=G;let W=z.shadow;if(z.map&&(i.spotLightMap[_]=z.map,_++,W.updateMatrices(z),z.castShadow&&b++),i.spotLightMatrix[d]=W.matrix,z.castShadow){let K=t.get(z);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[d]=K,i.spotShadowMap[d]=X,y++}d++}else if(z.isRectAreaLight){let G=e.get(z);G.color.copy(D).multiplyScalar(V),G.halfWidth.set(.5*z.width,0,0),G.halfHeight.set(0,.5*z.height,0),i.rectArea[f]=G,f++}else if(z.isPointLight){let G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),G.distance=z.distance,G.decay=z.decay,z.castShadow){let W=z.shadow,K=t.get(z);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=z.shadow.matrix,g++}i.point[p]=G,p++}else if(z.isHemisphereLight){let G=e.get(z);G.skyColor.copy(z.color).multiplyScalar(V),G.groundColor.copy(z.groundColor).multiplyScalar(V),i.hemi[m]=G,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let M=i.hash;M.directionalLength===u&&M.pointLength===p&&M.spotLength===d&&M.rectAreaLength===f&&M.hemiLength===m&&M.numDirectionalShadows===x&&M.numPointShadows===g&&M.numSpotShadows===y&&M.numSpotMaps===_&&M.numLightProbes===S||(i.directional.length=u,i.spot.length=d,i.rectArea.length=f,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+_-b,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=S,M.directionalLength=u,M.pointLength=p,M.spotLength=d,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=x,M.numPointShadows=g,M.numSpotShadows=y,M.numSpotMaps=_,M.numLightProbes=S,i.version=Qy++)},setupView:function(o,l){let c=0,h=0,u=0,p=0,d=0,f=l.matrixWorldInverse;for(let m=0,x=o.length;m<x;m++){let g=o[m];if(g.isDirectionalLight){let y=i.directional[c];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),c++}else if(g.isSpotLight){let y=i.spot[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),a.identity(),r.copy(g.matrixWorld),r.premultiply(f),a.extractRotation(r),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(g.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let y=i.hemi[d];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(f),d++}}},state:i}}function g0(n){let e=new tv(n),t=[],i=[],s=[],r={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){r.camera=a,t.length=0,i.length=0,s.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){s.push(a)}}}function nv(n){let e=new WeakMap;return{get:function(t,i=0){let s=e.get(t),r;return s===void 0?(r=new g0(n),e.set(t,[r])):i>=s.length?(r=new g0(n),s.push(r)):r=s[i],r},dispose:function(){e=new WeakMap}}}var iv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],sv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],y0=new Le,Ho=new A,Wd=new A;function rv(n,e,t){let i=new Yi,s=new ae,r=new ae,a=new vt,o=new mc,l=new gc,c={},h=t.maxTextureSize,u={[Ai]:An,[An]:Ai,[ct]:ct},p=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:`void main() {
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
}`}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let f=new Ke;f.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ce(f,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let g=this.type;function y(M,w){let U=e.update(m);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zn(s.x,s.y,{format:ar,type:Pi})),p.uniforms.shadow_pass.value=M.map.depthTexture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,U,p,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,U,d,m,null)}function _(M,w,U,z){let D=null,V=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(V!==void 0)D=V;else if(D=U.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=D.uuid,X=w.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let W=G[X];W===void 0&&(W=D.clone(),G[X]=W,w.addEventListener("dispose",S)),D=W}return D.visible=w.visible,D.wireframe=w.wireframe,D.side=z===la?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:u[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,U.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(n.properties.get(D).light=U),D}function b(M,w,U,z,D){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===la)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);let B=e.update(M),X=M.material;if(Array.isArray(X)){let G=B.groups;for(let W=0,K=G.length;W<K;W++){let Z=G[W],ne=X[Z.materialIndex];if(ne&&ne.visible){let ve=_(M,ne,z,D);M.onBeforeShadow(n,M,w,U,B,ve,Z),n.renderBufferDirect(U,null,B,ve,M,Z),M.onAfterShadow(n,M,w,U,B,ve,Z)}}}else if(X.visible){let G=_(M,X,z,D);M.onBeforeShadow(n,M,w,U,B,G,null),n.renderBufferDirect(U,null,B,G,M,null),M.onAfterShadow(n,M,w,U,B,G,null)}}let V=M.children;for(let B=0,X=V.length;B<X;B++)b(V[B],w,U,z,D)}function S(M){M.target.removeEventListener("dispose",S);for(let w in c){let U=c[w],z=M.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}this.render=function(M,w,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;this.type===Rc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=No);let z=n.getRenderTarget(),D=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ri),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=g!==this.type;X&&w.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(W=>W.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,W=M.length;G<W;G++){let K=M[G],Z=K.shadow;if(Z===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ne=Z.getFrameExtents();s.multiply(ne),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,Z.mapSize.y=r.y));let ve=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ve,Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===la){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new zn(s.x,s.y,{format:ar,type:Pi,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new Zi(s.x,s.y,On),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=Ps,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn}else K.isPointLight?(Z.map=new Kc(s.x),Z.map.depthTexture=new Ql(s.x,ts)):(Z.map=new zn(s.x,s.y),Z.map.depthTexture=new Zi(s.x,s.y,ts)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=Ps,this.type===No?(Z.map.depthTexture.compareFunction=ve?Xc:Wc,Z.map.depthTexture.minFilter=Kt,Z.map.depthTexture.magFilter=Kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn);Z.camera.updateProjectionMatrix()}let Ce=Z.map.isWebGLCubeRenderTarget?6:1;for(let Te=0;Te<Ce;Te++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(Z.map),n.clear());let Ae=Z.getViewport(Te);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),B.viewport(a)}if(K.isPointLight){let Ae=Z.camera,oe=Z.matrix,ye=K.distance||Ae.far;ye!==Ae.far&&(Ae.far=ye,Ae.updateProjectionMatrix()),Ho.setFromMatrixPosition(K.matrixWorld),Ae.position.copy(Ho),Wd.copy(Ae.position),Wd.add(iv[Te]),Ae.up.copy(sv[Te]),Ae.lookAt(Wd),Ae.updateMatrixWorld(),oe.makeTranslation(-Ho.x,-Ho.y,-Ho.z),y0.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(y0,Ae.coordinateSystem,Ae.reversedDepth)}else Z.updateMatrices(K);i=Z.getFrustum(),b(w,U,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===la&&y(Z,U),Z.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(z,D,V)}}function av(n,e){let t=new function(){let T=!1,H=new vt,F=null,P=new vt(0,0,0,0);return{setMask:function(Y){F===Y||T||(n.colorMask(Y,Y,Y,Y),F=Y)},setLocked:function(Y){T=Y},setClear:function(Y,$,ee,de,pe){pe===!0&&(Y*=de,$*=de,ee*=de),H.set(Y,$,ee,de),P.equals(H)===!1&&(n.clearColor(Y,$,ee,de),P.copy(H))},reset:function(){T=!1,F=null,P.set(-1,0,0,0)}}},i=new function(){let T=!1,H=!1,F=null,P=null,Y=null;return{setReversed:function($){if(H!==$){let ee=e.get("EXT_clip_control");$?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),H=$;let de=Y;Y=null,this.setClear(de)}},getReversed:function(){return H},setTest:function($){$?fe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function($){F===$||T||(n.depthMask($),F=$)},setFunc:function($){if(H&&($=Vm[$]),P!==$){switch($){case Iu:n.depthFunc(n.NEVER);break;case Lu:n.depthFunc(n.ALWAYS);break;case Nu:n.depthFunc(n.LESS);break;case Cc:n.depthFunc(n.LEQUAL);break;case zu:n.depthFunc(n.EQUAL);break;case Du:n.depthFunc(n.GEQUAL);break;case Uu:n.depthFunc(n.GREATER);break;case Ou:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}P=$}},setLocked:function($){T=$},setClear:function($){Y!==$&&(Y=$,H&&($=1-$),n.clearDepth($))},reset:function(){T=!1,F=null,P=null,Y=null,H=!1}}},s=new function(){let T=!1,H=null,F=null,P=null,Y=null,$=null,ee=null,de=null,pe=null;return{setTest:function(Pe){T||(Pe?fe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Pe){H===Pe||T||(n.stencilMask(Pe),H=Pe)},setFunc:function(Pe,me,Be){F===Pe&&P===me&&Y===Be||(n.stencilFunc(Pe,me,Be),F=Pe,P=me,Y=Be)},setOp:function(Pe,me,Be){$===Pe&&ee===me&&de===Be||(n.stencilOp(Pe,me,Be),$=Pe,ee=me,de=Be)},setLocked:function(Pe){T=Pe},setClear:function(Pe){pe!==Pe&&(n.clearStencil(Pe),pe=Pe)},reset:function(){T=!1,H=null,F=null,P=null,Y=null,$=null,ee=null,de=null,pe=null}}},r=new WeakMap,a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],p=null,d=!1,f=null,m=null,x=null,g=null,y=null,_=null,b=null,S=new Se(0,0,0),M=0,w=!1,U=null,z=null,D=null,V=null,B=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=W>=2);let Z=null,ne={},ve=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Te=new vt().fromArray(ve),Ae=new vt().fromArray(Ce);function oe(T,H,F,P){let Y=new Uint8Array(4),$=n.createTexture();n.bindTexture(T,$),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<F;ee++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(H,0,n.RGBA,1,1,P,0,n.RGBA,n.UNSIGNED_BYTE,Y):n.texImage2D(H+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Y);return $}let ye={};function fe(T){o[T]!==!0&&(n.enable(T),o[T]=!0)}function we(T){o[T]!==!1&&(n.disable(T),o[T]=!1)}ye[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),s.setClear(0),fe(n.DEPTH_TEST),i.setFunc(Cc),R(!1),L(Ru),fe(n.CULL_FACE),N(Ri);let Ve={[ca]:n.FUNC_ADD,[am]:n.FUNC_SUBTRACT,[om]:n.FUNC_REVERSE_SUBTRACT};Ve[lm]=n.MIN,Ve[cm]=n.MAX;let re={[hm]:n.ZERO,[um]:n.ONE,[dm]:n.SRC_COLOR,[fm]:n.SRC_ALPHA,[_m]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[gm]:n.DST_ALPHA,[pm]:n.ONE_MINUS_SRC_COLOR,[mm]:n.ONE_MINUS_SRC_ALPHA,[xm]:n.ONE_MINUS_DST_COLOR,[ym]:n.ONE_MINUS_DST_ALPHA,[Mm]:n.CONSTANT_COLOR,[bm]:n.ONE_MINUS_CONSTANT_COLOR,[Sm]:n.CONSTANT_ALPHA,[Tm]:n.ONE_MINUS_CONSTANT_ALPHA};function N(T,H,F,P,Y,$,ee,de,pe,Pe){if(T!==Ri){if(d===!1&&(fe(n.BLEND),d=!0),T===rm)Y=Y||H,$=$||F,ee=ee||P,H===m&&Y===y||(n.blendEquationSeparate(Ve[H],Ve[Y]),m=H,y=Y),F===x&&P===g&&$===_&&ee===b||(n.blendFuncSeparate(re[F],re[P],re[$],re[ee]),x=F,g=P,_=$,b=ee),de.equals(S)!==!1&&pe===M||(n.blendColor(de.r,de.g,de.b,pe),S.copy(de),M=pe),f=T,w=!1;else if(T!==f||Pe!==w){if(m===ca&&y===ca||(n.blendEquation(n.FUNC_ADD),m=ca,y=ca),Pe)switch(T){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case es:n.blendFunc(n.ONE,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Oe("WebGLState: Invalid blending: ",T)}else switch(T){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cu:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",T)}x=null,g=null,_=null,b=null,S.set(0,0,0),M=0,f=T,w=Pe}}else d===!0&&(we(n.BLEND),d=!1)}function R(T){U!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),U=T)}function L(T){T!==im?(fe(n.CULL_FACE),T!==z&&(T===Ru?n.cullFace(n.BACK):T===sm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),z=T}function O(T,H,F){T?(fe(n.POLYGON_OFFSET_FILL),V===H&&B===F||(V=H,B=F,i.getReversed()&&(H=-H),n.polygonOffset(H,F))):we(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:s},enable:fe,disable:we,bindFramebuffer:function(T,H){return c[T]!==H&&(n.bindFramebuffer(T,H),c[T]=H,T===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=H),T===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=H),!0)},drawBuffers:function(T,H){let F=u,P=!1;if(T){F=h.get(H),F===void 0&&(F=[],h.set(H,F));let Y=T.textures;if(F.length!==Y.length||F[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ee=Y.length;$<ee;$++)F[$]=n.COLOR_ATTACHMENT0+$;F.length=Y.length,P=!0}}else F[0]!==n.BACK&&(F[0]=n.BACK,P=!0);P&&n.drawBuffers(F)},useProgram:function(T){return p!==T&&(n.useProgram(T),p=T,!0)},setBlending:N,setMaterial:function(T,H){T.side===ct?we(n.CULL_FACE):fe(n.CULL_FACE);let F=T.side===An;H&&(F=!F),R(F),T.blending===nr&&T.transparent===!1?N(Ri):N(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),i.setFunc(T.depthFunc),i.setTest(T.depthTest),i.setMask(T.depthWrite),t.setMask(T.colorWrite);let P=T.stencilWrite;s.setTest(P),P&&(s.setMask(T.stencilWriteMask),s.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),s.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),O(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:R,setCullFace:L,setLineWidth:function(T){T!==D&&(G&&n.lineWidth(T),D=T)},setPolygonOffset:O,setScissorTest:function(T){T?fe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)},activeTexture:function(T){T===void 0&&(T=n.TEXTURE0+X-1),Z!==T&&(n.activeTexture(T),Z=T)},bindTexture:function(T,H,F){F===void 0&&(F=Z===null?n.TEXTURE0+X-1:Z);let P=ne[F];P===void 0&&(P={type:void 0,texture:void 0},ne[F]=P),P.type===T&&P.texture===H||(Z!==F&&(n.activeTexture(F),Z=F),n.bindTexture(T,H||ye[T]),P.type=T,P.texture=H)},unbindTexture:function(){let T=ne[Z];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(T){Oe("WebGLState:",T)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(T){Oe("WebGLState:",T)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(T){Oe("WebGLState:",T)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(T){Oe("WebGLState:",T)}},pixelStorei:function(T,H){l[T]!==H&&(n.pixelStorei(T,H),l[T]=H)},getParameter:function(T){return l[T]!==void 0?l[T]:n.getParameter(T)},updateUBOMapping:function(T,H){let F=a.get(H);F===void 0&&(F=new WeakMap,a.set(H,F));let P=F.get(T);P===void 0&&(P=n.getUniformBlockIndex(H,T.name),F.set(T,P))},uniformBlockBinding:function(T,H){let F=a.get(H).get(T);r.get(H)!==F&&(n.uniformBlockBinding(H,F,T.__bindingPointIndex),r.set(H,F))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(T){Oe("WebGLState:",T)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(T){Oe("WebGLState:",T)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(T){Oe("WebGLState:",T)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(T){Oe("WebGLState:",T)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(T){Oe("WebGLState:",T)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(T){Oe("WebGLState:",T)}},scissor:function(T){Te.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),Te.copy(T))},viewport:function(T){Ae.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),Ae.copy(T))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},l={},Z=null,ne={},c={},h=new WeakMap,u=[],p=null,d=!1,f=null,m=null,x=null,g=null,y=null,_=null,b=null,S=new Se(0,0,0),M=0,w=!1,U=null,z=null,D=null,V=null,B=null,Te.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),s.reset()}}}function ov(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u=new Set,p,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,R){return f?new OffscreenCanvas(N,R):Yr("canvas")}function x(N,R,L){let O=1,T=re(N);if((T.width>L||T.height>L)&&(O=L/Math.max(T.width,T.height)),O<1){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let H=Math.floor(O*T.width),F=Math.floor(O*T.height);p===void 0&&(p=m(H,F));let P=R?m(H,F):p;return P.width=H,P.height=F,P.getContext("2d").drawImage(N,0,0,H,F),Ie("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+H+"x"+F+")."),P}return"data"in N&&Ie("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),N}return N}function g(N){return N.generateMipmaps}function y(N){n.generateMipmap(N)}function _(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,R,L,O,T,H=!1){if(N!==null){if(n[N]!==void 0)return n[N];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let F;O&&(F=e.get("EXT_texture_norm16"),F||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=R;if(R===n.RED&&(L===n.FLOAT&&(P=n.R32F),L===n.HALF_FLOAT&&(P=n.R16F),L===n.UNSIGNED_BYTE&&(P=n.R8),L===n.UNSIGNED_SHORT&&F&&(P=F.R16_EXT),L===n.SHORT&&F&&(P=F.R16_SNORM_EXT)),R===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(P=n.R8UI),L===n.UNSIGNED_SHORT&&(P=n.R16UI),L===n.UNSIGNED_INT&&(P=n.R32UI),L===n.BYTE&&(P=n.R8I),L===n.SHORT&&(P=n.R16I),L===n.INT&&(P=n.R32I)),R===n.RG&&(L===n.FLOAT&&(P=n.RG32F),L===n.HALF_FLOAT&&(P=n.RG16F),L===n.UNSIGNED_BYTE&&(P=n.RG8),L===n.UNSIGNED_SHORT&&F&&(P=F.RG16_EXT),L===n.SHORT&&F&&(P=F.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(P=n.RG8UI),L===n.UNSIGNED_SHORT&&(P=n.RG16UI),L===n.UNSIGNED_INT&&(P=n.RG32UI),L===n.BYTE&&(P=n.RG8I),L===n.SHORT&&(P=n.RG16I),L===n.INT&&(P=n.RG32I)),R===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(P=n.RGB8UI),L===n.UNSIGNED_SHORT&&(P=n.RGB16UI),L===n.UNSIGNED_INT&&(P=n.RGB32UI),L===n.BYTE&&(P=n.RGB8I),L===n.SHORT&&(P=n.RGB16I),L===n.INT&&(P=n.RGB32I)),R===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),L===n.UNSIGNED_INT&&(P=n.RGBA32UI),L===n.BYTE&&(P=n.RGBA8I),L===n.SHORT&&(P=n.RGBA16I),L===n.INT&&(P=n.RGBA32I)),R===n.RGB&&(L===n.UNSIGNED_SHORT&&F&&(P=F.RGB16_EXT),L===n.SHORT&&F&&(P=F.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(P=n.R11F_G11F_B10F)),R===n.RGBA){let Y=H?io:$e.getTransfer(T);L===n.FLOAT&&(P=n.RGBA32F),L===n.HALF_FLOAT&&(P=n.RGBA16F),L===n.UNSIGNED_BYTE&&(P=Y===pt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&F&&(P=F.RGBA16_EXT),L===n.SHORT&&F&&(P=F.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return P!==n.R16F&&P!==n.R32F&&P!==n.RG16F&&P!==n.RG32F&&P!==n.RGBA16F&&P!==n.RGBA32F||e.get("EXT_color_buffer_float"),P}function S(N,R){let L;return N?R===null||R===ts||R===pa?L=n.DEPTH24_STENCIL8:R===On?L=n.DEPTH32F_STENCIL8:R===da&&(L=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ts||R===pa?L=n.DEPTH_COMPONENT24:R===On?L=n.DEPTH_COMPONENT32F:R===da&&(L=n.DEPTH_COMPONENT16),L}function M(N,R){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==Kt?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function w(N){let R=N.target;R.removeEventListener("dispose",w),(function(L){let O=i.get(L);if(O.__webglInit===void 0)return;let T=L.source,H=d.get(T);if(H){let F=H[O.__cacheKey];F.usedTimes--,F.usedTimes===0&&z(L),Object.keys(H).length===0&&d.delete(T)}i.remove(L)})(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function U(N){let R=N.target;R.removeEventListener("dispose",U),(function(L){let O=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(O.__webglFramebuffer[H]))for(let F=0;F<O.__webglFramebuffer[H].length;F++)n.deleteFramebuffer(O.__webglFramebuffer[H][F]);else n.deleteFramebuffer(O.__webglFramebuffer[H]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[H])}else{if(Array.isArray(O.__webglFramebuffer))for(let H=0;H<O.__webglFramebuffer.length;H++)n.deleteFramebuffer(O.__webglFramebuffer[H]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let H=0;H<O.__webglColorRenderbuffer.length;H++)O.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[H]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let T=L.textures;for(let H=0,F=T.length;H<F;H++){let P=i.get(T[H]);P.__webglTexture&&(n.deleteTexture(P.__webglTexture),a.memory.textures--),i.remove(T[H])}i.remove(L)})(R)}function z(N){let R=i.get(N);n.deleteTexture(R.__webglTexture);let L=N.source;delete d.get(L)[R.__cacheKey],a.memory.textures--}let D=0;function V(N,R){let L=i.get(N);if(N.isVideoTexture&&(function(O){let T=a.render.frame;h.get(O)!==T&&(h.set(O,T),O.update())})(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&L.__version!==N.version){let O=N.image;if(O===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void ne(L,N,R);Ie("WebGLRenderer: Texture marked for update but image is incomplete")}}else N.isExternalTexture&&(L.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+R)}let B={[Wn]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[jr]:n.MIRRORED_REPEAT},X={[xn]:n.NEAREST,[Lc]:n.NEAREST_MIPMAP_NEAREST,[sr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},G={[zm]:n.NEVER,[Bm]:n.ALWAYS,[Dm]:n.LESS,[Wc]:n.LEQUAL,[Um]:n.EQUAL,[Xc]:n.GEQUAL,[Om]:n.GREATER,[Fm]:n.NOTEQUAL};function W(N,R){if(R.type!==On||e.has("OES_texture_float_linear")!==!1||R.magFilter!==Kt&&R.magFilter!==ua&&R.magFilter!==sr&&R.magFilter!==Ci&&R.minFilter!==Kt&&R.minFilter!==ua&&R.minFilter!==sr&&R.minFilter!==Ci||Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,B[R.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,B[R.wrapT]),N!==n.TEXTURE_3D&&N!==n.TEXTURE_2D_ARRAY||n.texParameteri(N,n.TEXTURE_WRAP_R,B[R.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,X[R.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,X[R.minFilter]),R.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,G[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===xn||R.minFilter!==sr&&R.minFilter!==Ci||R.type===On&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function K(N,R){let L=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",w));let O=R.source,T=d.get(O);T===void 0&&(T={},d.set(O,T));let H=(function(F){let P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.wrapR||0),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.colorSpace),P.join()})(R);if(H!==N.__cacheKey){T[H]===void 0&&(T[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),T[H].usedTimes++;let F=T[N.__cacheKey];F!==void 0&&(T[N.__cacheKey].usedTimes--,F.usedTimes===0&&z(R)),N.__cacheKey=H,N.__webglTexture=T[H].texture}return L}function Z(N,R,L){return Math.floor(Math.floor(N/L)/R)}function ne(N,R,L){let O=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(O=n.TEXTURE_3D);let T=K(N,R),H=R.source;t.bindTexture(O,N.__webglTexture,n.TEXTURE0+L);let F=i.get(H);if(H.version!==F.__version||T===!0){if(t.activeTexture(n.TEXTURE0+L),!(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)){let ue=$e.getPrimaries($e.workingColorSpace),he=R.colorSpace===ns?null:$e.getPrimaries(R.colorSpace),Me=R.colorSpace===ns||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let P=x(R.image,!1,s.maxTextureSize);P=Ve(R,P);let Y=r.convert(R.format,R.colorSpace),$=r.convert(R.type),ee,de=b(R.internalFormat,Y,$,R.normalized,R.colorSpace,R.isVideoTexture);W(O,R);let pe=R.mipmaps,Pe=R.isVideoTexture!==!0,me=F.__version===void 0||T===!0,Be=H.dataReady,ie=M(R,P);if(R.isDepthTexture)de=S(R.format===rr,R.type),me&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,de,P.width,P.height):t.texImage2D(n.TEXTURE_2D,0,de,P.width,P.height,0,Y,$,null));else if(R.isDataTexture)if(pe.length>0){Pe&&me&&t.texStorage2D(n.TEXTURE_2D,ie,de,pe[0].width,pe[0].height);for(let ue=0,he=pe.length;ue<he;ue++)ee=pe[ue],Pe?Be&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ee.width,ee.height,Y,$,ee.data):t.texImage2D(n.TEXTURE_2D,ue,de,ee.width,ee.height,0,Y,$,ee.data);R.generateMipmaps=!1}else Pe?(me&&t.texStorage2D(n.TEXTURE_2D,ie,de,P.width,P.height),Be&&(function(ue,he,Me,bt){let ht=ue.updateRanges;if(ht.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Me,bt,he.data);else{ht.sort((Ye,Jt)=>Ye.start-Jt.start);let Pt=0;for(let Ye=1;Ye<ht.length;Ye++){let Jt=ht[Pt],_t=ht[Ye],Ht=Jt.start+Jt.count,mt=Z(_t.start,he.width,4),on=Z(Jt.start,he.width,4);_t.start<=Ht+1&&mt===on&&Z(_t.start+_t.count-1,he.width,4)===mt?Jt.count=Math.max(Jt.count,_t.start+_t.count-Jt.start):(++Pt,ht[Pt]=_t)}ht.length=Pt+1;let an=t.getParameter(n.UNPACK_ROW_LENGTH),ze=t.getParameter(n.UNPACK_SKIP_PIXELS),dt=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,he.width);for(let Ye=0,Jt=ht.length;Ye<Jt;Ye++){let _t=ht[Ye],Ht=Math.floor(_t.start/4),mt=Math.ceil(_t.count/4),on=Ht%he.width,tn=Math.floor(Ht/he.width),Bn=mt;t.pixelStorei(n.UNPACK_SKIP_PIXELS,on),t.pixelStorei(n.UNPACK_SKIP_ROWS,tn),t.texSubImage2D(n.TEXTURE_2D,0,on,tn,Bn,1,Me,bt,he.data)}ue.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,an),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}})(R,P,Y,$)):t.texImage2D(n.TEXTURE_2D,0,de,P.width,P.height,0,Y,$,P.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Pe&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,de,pe[0].width,pe[0].height,P.depth);for(let ue=0,he=pe.length;ue<he;ue++)if(ee=pe[ue],R.format!==Xn)if(Y!==null)if(Pe){if(Be)if(R.layerUpdates.size>0){let Me=Nd(ee.width,ee.height,R.format,R.type);for(let bt of R.layerUpdates){let ht=ee.data.subarray(bt*Me/ee.data.BYTES_PER_ELEMENT,(bt+1)*Me/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,bt,ee.width,ee.height,1,Y,ht)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ee.width,ee.height,P.depth,Y,ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,de,ee.width,ee.height,P.depth,0,ee.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,ee.width,ee.height,P.depth,Y,$,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,de,ee.width,ee.height,P.depth,0,Y,$,ee.data)}else{Pe&&me&&t.texStorage2D(n.TEXTURE_2D,ie,de,pe[0].width,pe[0].height);for(let ue=0,he=pe.length;ue<he;ue++)ee=pe[ue],R.format!==Xn?Y!==null?Pe?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,ee.width,ee.height,Y,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,de,ee.width,ee.height,0,ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?Be&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,ee.width,ee.height,Y,$,ee.data):t.texImage2D(n.TEXTURE_2D,ue,de,ee.width,ee.height,0,Y,$,ee.data)}else if(R.isDataArrayTexture)if(Pe){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,de,P.width,P.height,P.depth),Be)if(R.layerUpdates.size>0){let ue=Nd(P.width,P.height,R.format,R.type);for(let he of R.layerUpdates){let Me=P.data.subarray(he*ue/P.data.BYTES_PER_ELEMENT,(he+1)*ue/P.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,P.width,P.height,1,Y,$,Me)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,Y,$,P.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,P.width,P.height,P.depth,0,Y,$,P.data);else if(R.isData3DTexture)Pe?(me&&t.texStorage3D(n.TEXTURE_3D,ie,de,P.width,P.height,P.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,Y,$,P.data)):t.texImage3D(n.TEXTURE_3D,0,de,P.width,P.height,P.depth,0,Y,$,P.data);else if(R.isFramebufferTexture){if(me)if(Pe)t.texStorage2D(n.TEXTURE_2D,ie,de,P.width,P.height);else{let ue=P.width,he=P.height;for(let Me=0;Me<ie;Me++)t.texImage2D(n.TEXTURE_2D,Me,de,ue,he,0,Y,$,null),ue>>=1,he>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){let ue=n.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),P.parentNode!==ue)return ue.appendChild(P),u.add(R),ue.onpaint=he=>{let Me=he.changedElements;for(let bt of u)Me.includes(bt.image)&&(bt.needsUpdate=!0)},void ue.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,P);else{let Me=n.RGBA,bt=n.RGBA,ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Me,bt,ht,P)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(Pe&&me){let ue=re(pe[0]);t.texStorage2D(n.TEXTURE_2D,ie,de,ue.width,ue.height)}for(let ue=0,he=pe.length;ue<he;ue++)ee=pe[ue],Pe?Be&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Y,$,ee):t.texImage2D(n.TEXTURE_2D,ue,de,Y,$,ee);R.generateMipmaps=!1}else if(Pe){if(me){let ue=re(P);t.texStorage2D(n.TEXTURE_2D,ie,de,ue.width,ue.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y,$,P)}else t.texImage2D(n.TEXTURE_2D,0,de,Y,$,P);g(R)&&y(O),F.__version=H.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function ve(N,R,L,O,T,H){let F=r.convert(L.format,L.colorSpace),P=r.convert(L.type),Y=b(L.internalFormat,F,P,L.normalized,L.colorSpace),$=i.get(R),ee=i.get(L);if(ee.__renderTarget=R,!$.__hasExternalTextures){let de=Math.max(1,R.width>>H),pe=Math.max(1,R.height>>H);T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?t.texImage3D(T,H,Y,de,pe,R.depth,0,F,P,null):t.texImage2D(T,H,Y,de,pe,0,F,P,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),we(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,T,ee.__webglTexture,0,fe(R)):(T===n.TEXTURE_2D||T>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,T,ee.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(N,R,L){if(n.bindRenderbuffer(n.RENDERBUFFER,N),R.depthBuffer){let O=R.depthTexture,T=O&&O.isDepthTexture?O.type:null,H=S(R.stencilBuffer,T),F=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(R),H,R.width,R.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(R),H,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,H,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,N)}else{let O=R.textures;for(let T=0;T<O.length;T++){let H=O[T],F=r.convert(H.format,H.colorSpace),P=r.convert(H.type),Y=b(H.internalFormat,F,P,H.normalized,H.colorSpace);we(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(R),Y,R.width,R.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(R),Y,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Y,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(N,R,L){let O=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=i.get(R.depthTexture);if(T.__renderTarget=R,T.__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),O){if(T.__webglInit===void 0&&(T.__webglInit=!0,R.depthTexture.addEventListener("dispose",w)),T.__webglTexture===void 0){T.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture),W(n.TEXTURE_CUBE_MAP,R.depthTexture);let $=r.convert(R.depthTexture.format),ee=r.convert(R.depthTexture.type),de;R.depthTexture.format===Ps?de=n.DEPTH_COMPONENT24:R.depthTexture.format===rr&&(de=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,de,R.width,R.height,0,$,ee,null)}}else V(R.depthTexture,0);let H=T.__webglTexture,F=fe(R),P=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Y=R.depthTexture.format===rr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===Ps)we(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,P,H,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,Y,P,H,0);else{if(R.depthTexture.format!==rr)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");we(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,P,H,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,Y,P,H,0)}}function Ae(N){let R=i.get(N),L=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){let O=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),O){let T=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,O.removeEventListener("dispose",T)};O.addEventListener("dispose",T),R.__depthDisposeCallback=T}R.__boundDepthTexture=O}if(N.depthTexture&&!R.__autoAllocateDepthBuffer)if(L)for(let O=0;O<6;O++)Te(R.__webglFramebuffer[O],N,O);else{let O=N.texture.mipmaps;O&&O.length>0?Te(R.__webglFramebuffer[0],N,0):Te(R.__webglFramebuffer,N,0)}else if(L){R.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[O]),R.__webglDepthbuffer[O]===void 0)R.__webglDepthbuffer[O]=n.createRenderbuffer(),Ce(R.__webglDepthbuffer[O],N,!1);else{let T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=R.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,T,n.RENDERBUFFER,H)}}else{let O=N.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),Ce(R.__webglDepthbuffer,N,!1);else{let T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,T,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let oe=[],ye=[];function fe(N){return Math.min(s.maxSamples,N.samples)}function we(N){let R=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ve(N,R){let L=N.colorSpace,O=N.format,T=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||L!==_n&&L!==ns&&($e.getTransfer(L)===pt?O===Xn&&T===Un||Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",L)),R}function re(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=function(){let N=D;return N>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),D+=1,N},this.resetTextureUnits=function(){D=0},this.getTextureUnits=function(){return D},this.setTextureUnits=function(N){D=N},this.setTexture2D=V,this.setTexture2DArray=function(N,R){let L=i.get(N);N.isRenderTargetTexture===!1&&N.version>0&&L.__version!==N.version?ne(L,N,R):(N.isExternalTexture&&(L.__webglTexture=N.sourceTexture?N.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+R))},this.setTexture3D=function(N,R){let L=i.get(N);N.isRenderTargetTexture===!1&&N.version>0&&L.__version!==N.version?ne(L,N,R):t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+R)},this.setTextureCube=function(N,R){let L=i.get(N);N.isCubeDepthTexture!==!0&&N.version>0&&L.__version!==N.version?(function(O,T,H){if(T.image.length!==6)return;let F=K(O,T),P=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+H);let Y=i.get(P);if(P.version!==Y.__version||F===!0){t.activeTexture(n.TEXTURE0+H);let $=$e.getPrimaries($e.workingColorSpace),ee=T.colorSpace===ns?null:$e.getPrimaries(T.colorSpace),de=T.colorSpace===ns||$===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Pe=T.image[0]&&T.image[0].isDataTexture,me=[];for(let ze=0;ze<6;ze++)me[ze]=pe||Pe?Pe?T.image[ze].image:T.image[ze]:x(T.image[ze],!0,s.maxCubemapSize),me[ze]=Ve(T,me[ze]);let Be=me[0],ie=r.convert(T.format,T.colorSpace),ue=r.convert(T.type),he=b(T.internalFormat,ie,ue,T.normalized,T.colorSpace),Me=T.isVideoTexture!==!0,bt=Y.__version===void 0||F===!0,ht=P.dataReady,Pt,an=M(T,Be);if(W(n.TEXTURE_CUBE_MAP,T),pe){Me&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,an,he,Be.width,Be.height);for(let ze=0;ze<6;ze++){Pt=me[ze].mipmaps;for(let dt=0;dt<Pt.length;dt++){let Ye=Pt[dt];T.format!==Xn?ie!==null?Me?ht&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt,0,0,Ye.width,Ye.height,ie,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt,he,Ye.width,Ye.height,0,Ye.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt,0,0,Ye.width,Ye.height,ie,ue,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt,he,Ye.width,Ye.height,0,ie,ue,Ye.data)}}}else{if(Pt=T.mipmaps,Me&&bt){Pt.length>0&&an++;let ze=re(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,an,he,ze.width,ze.height)}for(let ze=0;ze<6;ze++)if(Pe){Me?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,me[ze].width,me[ze].height,ie,ue,me[ze].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,he,me[ze].width,me[ze].height,0,ie,ue,me[ze].data);for(let dt=0;dt<Pt.length;dt++){let Ye=Pt[dt].image[ze].image;Me?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt+1,0,0,Ye.width,Ye.height,ie,ue,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt+1,he,Ye.width,Ye.height,0,ie,ue,Ye.data)}}else{Me?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,ie,ue,me[ze]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,he,ie,ue,me[ze]);for(let dt=0;dt<Pt.length;dt++){let Ye=Pt[dt];Me?ht&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt+1,0,0,ie,ue,Ye.image[ze]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,dt+1,he,ie,ue,Ye.image[ze])}}}g(T)&&y(n.TEXTURE_CUBE_MAP),Y.__version=P.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version})(L,N,R):t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+R)},this.rebindTextures=function(N,R,L){let O=i.get(N);R!==void 0&&ve(O.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ae(N)},this.setupRenderTarget=function(N){let R=N.texture,L=i.get(N),O=i.get(R);N.addEventListener("dispose",U);let T=N.textures,H=N.isWebGLCubeRenderTarget===!0,F=T.length>1;if(F||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=R.version,a.memory.textures++),H){L.__webglFramebuffer=[];for(let P=0;P<6;P++)if(R.mipmaps&&R.mipmaps.length>0){L.__webglFramebuffer[P]=[];for(let Y=0;Y<R.mipmaps.length;Y++)L.__webglFramebuffer[P][Y]=n.createFramebuffer()}else L.__webglFramebuffer[P]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){L.__webglFramebuffer=[];for(let P=0;P<R.mipmaps.length;P++)L.__webglFramebuffer[P]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(F)for(let P=0,Y=T.length;P<Y;P++){let $=i.get(T[P]);$.__webglTexture===void 0&&($.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&we(N)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let P=0;P<T.length;P++){let Y=T[P];L.__webglColorRenderbuffer[P]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[P]);let $=r.convert(Y.format,Y.colorSpace),ee=r.convert(Y.type),de=b(Y.internalFormat,$,ee,Y.normalized,Y.colorSpace,N.isXRRenderTarget===!0),pe=fe(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,de,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,L.__webglColorRenderbuffer[P])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(L.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),W(n.TEXTURE_CUBE_MAP,R);for(let P=0;P<6;P++)if(R.mipmaps&&R.mipmaps.length>0)for(let Y=0;Y<R.mipmaps.length;Y++)ve(L.__webglFramebuffer[P][Y],N,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+P,Y);else ve(L.__webglFramebuffer[P],N,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);g(R)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let P=0,Y=T.length;P<Y;P++){let $=T[P],ee=i.get($),de=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ee.__webglTexture),W(de,$),ve(L.__webglFramebuffer,N,$,n.COLOR_ATTACHMENT0+P,de,0),g($)&&y(de)}t.unbindTexture()}else{let P=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(P=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(P,O.__webglTexture),W(P,R),R.mipmaps&&R.mipmaps.length>0)for(let Y=0;Y<R.mipmaps.length;Y++)ve(L.__webglFramebuffer[Y],N,R,n.COLOR_ATTACHMENT0,P,Y);else ve(L.__webglFramebuffer,N,R,n.COLOR_ATTACHMENT0,P,0);g(R)&&y(P),t.unbindTexture()}N.depthBuffer&&Ae(N)},this.updateRenderTargetMipmap=function(N){let R=N.textures;for(let L=0,O=R.length;L<O;L++){let T=R[L];if(g(T)){let H=_(N),F=i.get(T).__webglTexture;t.bindTexture(H,F),y(H),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(N){if(N.samples>0){if(we(N)===!1){let R=N.textures,L=N.width,O=N.height,T=n.COLOR_BUFFER_BIT,H=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=i.get(N),P=R.length>1;if(P)for(let $=0;$<R.length;$++)t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);let Y=N.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let $=0;$<R.length;$++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(T|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(T|=n.STENCIL_BUFFER_BIT)),P){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let ee=i.get(R[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,L,O,0,0,L,O,T,n.NEAREST),l===!0&&(oe.length=0,ye.length=0,oe.push(n.COLOR_ATTACHMENT0+$),N.depthBuffer&&N.resolveDepthBuffer===!1&&(oe.push(H),ye.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),P)for(let $=0;$<R.length;$++){t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let ee=i.get(R[$]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let R=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}},this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lv(n,e){return{convert:function(t,i=ns){let s,r=$e.getTransfer(i);if(t===Un)return n.UNSIGNED_BYTE;if(t===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(t===qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Yu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===Xu)return n.BYTE;if(t===ju)return n.SHORT;if(t===da)return n.UNSIGNED_SHORT;if(t===Nc)return n.INT;if(t===ts)return n.UNSIGNED_INT;if(t===On)return n.FLOAT;if(t===Pi)return n.HALF_FLOAT;if(t===Cm)return n.ALPHA;if(t===Pm)return n.RGB;if(t===Xn)return n.RGBA;if(t===Ps)return n.DEPTH_COMPONENT;if(t===rr)return n.DEPTH_STENCIL;if(t===Uc)return n.RED;if(t===Oc)return n.RED_INTEGER;if(t===ar)return n.RG;if(t===Zu)return n.RG_INTEGER;if(t===Ku)return n.RGBA_INTEGER;if(t===Fc||t===Bc||t===kc||t===Hc)if(r===pt){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(t===Fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(t===Fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===kc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ju||t===$u||t===Qu||t===ed){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(t===Ju)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===$u)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Qu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===ed)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===td||t===nd||t===id||t===sd||t===rd||t===Gc||t===ad){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(t===td||t===nd)return r===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===id)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(t===sd)return s.COMPRESSED_R11_EAC;if(t===rd)return s.COMPRESSED_SIGNED_R11_EAC;if(t===Gc)return s.COMPRESSED_RG11_EAC;if(t===ad)return s.COMPRESSED_SIGNED_RG11_EAC}if(t===od||t===ld||t===cd||t===hd||t===ud||t===dd||t===pd||t===fd||t===md||t===gd||t===yd||t===vd||t===xd||t===_d){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(t===od)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===ld)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===cd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===hd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ud)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===dd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===pd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===fd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===md)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===gd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===yd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===vd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===xd)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===_d)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Md||t===bd||t===Sd){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(t===Md)return r===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Td||t===wd||t===Vc||t===Ed){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(t===Td)return s.COMPRESSED_RED_RGTC1_EXT;if(t===wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ed)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===pa?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var $d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new fo(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Rt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qd=class extends ii{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,f=null,m=typeof XRWebGLBinding<"u",x=new $d,g={},y=t.getContextAttributes(),_=null,b=null,S=[],M=[],w=new ae,U=null,z=new Zt;z.viewport=new vt;let D=new Zt;D.viewport=new vt;let V=[z,D],B=new Tc,X=null,G=null;function W(oe){let ye=M.indexOf(oe.inputSource);if(ye===-1)return;let fe=S[ye];fe!==void 0&&(fe.update(oe.inputSource,oe.frame,c||a),fe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function K(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<S.length;oe++){let ye=M[oe];ye!==null&&(M[oe]=null,S[oe].disconnect(ye))}X=null,G=null,x.reset();for(let oe in g)delete g[oe];e.setRenderTarget(_),d=null,p=null,u=null,s=null,b=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(oe){for(let ye=0;ye<oe.removed.length;ye++){let fe=oe.removed[ye],we=M.indexOf(fe);we>=0&&(M[we]=null,S[we].disconnect(fe))}for(let ye=0;ye<oe.added.length;ye++){let fe=oe.added[ye],we=M.indexOf(fe);if(we===-1){for(let re=0;re<S.length;re++){if(re>=M.length){M.push(fe),we=re;break}if(M[re]===null){M[re]=fe,we=re;break}}if(we===-1)break}let Ve=S[we];Ve&&Ve.connect(fe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=S[oe];return ye===void 0&&(ye=new $r,S[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=S[oe];return ye===void 0&&(ye=new $r,S[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=S[oe];return ye===void 0&&(ye=new $r,S[oe]=ye),ye.getHandSpace()},this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,fe=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?rr:Ps,fe=y.stencil?pa:ts);let Ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new zn(p.textureWidth,p.textureHeight,{format:Xn,type:Un,depthTexture:new Zi(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new zn(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let ne=new A,ve=new A;function Ce(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ye=oe.near,fe=oe.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),B.near=D.near=z.near=ye,B.far=D.far=z.far=fe,X===B.near&&G===B.far||(s.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,G=B.far),B.layers.mask=6|oe.layers.mask,z.layers.mask=-5&B.layers.mask,D.layers.mask=-3&B.layers.mask;let we=oe.parent,Ve=B.cameras;Ce(B,we);for(let re=0;re<Ve.length;re++)Ce(Ve[re],we);Ve.length===2?(function(re,N,R){ne.setFromMatrixPosition(N.matrixWorld),ve.setFromMatrixPosition(R.matrixWorld);let L=ne.distanceTo(ve),O=N.projectionMatrix.elements,T=R.projectionMatrix.elements,H=O[14]/(O[10]-1),F=O[14]/(O[10]+1),P=(O[9]+1)/O[5],Y=(O[9]-1)/O[5],$=(O[8]-1)/O[0],ee=(T[8]+1)/T[0],de=H*$,pe=H*ee,Pe=L/(-$+ee),me=Pe*-$;if(N.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(me),re.translateZ(Pe),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),O[10]===-1)re.projectionMatrix.copy(N.projectionMatrix),re.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Be=H+Pe,ie=F+Pe,ue=de-me,he=pe+(L-me),Me=P*F/ie*Be,bt=Y*F/ie*Be;re.projectionMatrix.makePerspective(ue,he,Me,bt,Be,ie),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}})(B,z,D):B.projectionMatrix.copy(z.projectionMatrix),(function(re,N,R){R===null?re.matrix.copy(N.matrixWorld):(re.matrix.copy(R.matrixWorld),re.matrix.invert(),re.matrix.multiply(N.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(N.projectionMatrix),re.projectionMatrixInverse.copy(N.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=2*Ys*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)})(oe,B,we)},this.getCamera=function(){return B},this.getFoveation=function(){if(p!==null||d!==null)return l},this.setFoveation=function(oe){l=oe,p!==null&&(p.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(oe){return g[oe]};let Te=null,Ae=new v0;Ae.setAnimationLoop(function(oe,ye){if(h=ye.getViewerPose(c||a),f=ye,h!==null){let fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let we=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,we=!0);for(let re=0;re<fe.length;re++){let N=fe[re],R=null;if(d!==null)R=d.getViewport(N);else{let O=u.getViewSubImage(p,N);R=O.viewport,re===0&&(e.setRenderTargetTextures(b,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(b))}let L=V[re];L===void 0&&(L=new Zt,L.layers.enable(re),L.viewport=new vt,V[re]=L),L.matrix.fromArray(N.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(N.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(R.x,R.y,R.width,R.height),re===0&&(B.matrix.copy(L.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),we===!0&&B.cameras.push(L)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=i.getBinding();let re=u.getDepthInformation(fe[0]);re&&re.isValid&&re.texture&&x.init(re,s.renderState)}if(Ve&&Ve.includes("camera-access")&&m){e.state.unbindTexture(),u=i.getBinding();for(let re=0;re<fe.length;re++){let N=fe[re].camera;if(N){let R=g[N];R||(R=new fo,g[N]=R);let L=u.getCameraImage(N);R.sourceTexture=L}}}}for(let fe=0;fe<S.length;fe++){let we=M[fe],Ve=S[fe];we!==null&&Ve!==void 0&&Ve.update(we,ye,c||a)}Te&&Te(oe,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),f=null}),this.setAnimationLoop=function(oe){Te=oe},this.dispose=function(){}}},cv=new Le,T0=new Xe;function hv(n,e){function t(s,r){s.matrixAutoUpdate===!0&&s.updateMatrix(),r.value.copy(s.matrix)}function i(s,r){s.opacity.value=r.opacity,r.color&&s.diffuse.value.copy(r.color),r.emissive&&s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(s.map.value=r.map,t(r.map,s.mapTransform)),r.alphaMap&&(s.alphaMap.value=r.alphaMap,t(r.alphaMap,s.alphaMapTransform)),r.bumpMap&&(s.bumpMap.value=r.bumpMap,t(r.bumpMap,s.bumpMapTransform),s.bumpScale.value=r.bumpScale,r.side===An&&(s.bumpScale.value*=-1)),r.normalMap&&(s.normalMap.value=r.normalMap,t(r.normalMap,s.normalMapTransform),s.normalScale.value.copy(r.normalScale),r.side===An&&s.normalScale.value.negate()),r.displacementMap&&(s.displacementMap.value=r.displacementMap,t(r.displacementMap,s.displacementMapTransform),s.displacementScale.value=r.displacementScale,s.displacementBias.value=r.displacementBias),r.emissiveMap&&(s.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,s.emissiveMapTransform)),r.specularMap&&(s.specularMap.value=r.specularMap,t(r.specularMap,s.specularMapTransform)),r.alphaTest>0&&(s.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(s.envMap.value=o,s.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&s.envMapRotation.value.premultiply(T0),s.reflectivity.value=r.reflectivity,s.ior.value=r.ior,s.refractionRatio.value=r.refractionRatio),r.lightMap&&(s.lightMap.value=r.lightMap,s.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,s.lightMapTransform)),r.aoMap&&(s.aoMap.value=r.aoMap,s.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,r){r.color.getRGB(s.fogColor.value,Id(n)),r.isFog?(s.fogNear.value=r.near,s.fogFar.value=r.far):r.isFogExp2&&(s.fogDensity.value=r.density)},refreshMaterialUniforms:function(s,r,a,o,l){r.isNodeMaterial?r.uniformsNeedUpdate=!1:r.isMeshBasicMaterial?i(s,r):r.isMeshLambertMaterial?(i(s,r),r.envMap&&(s.envMapIntensity.value=r.envMapIntensity)):r.isMeshToonMaterial?(i(s,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(s,r)):r.isMeshPhongMaterial?(i(s,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(s,r),r.envMap&&(s.envMapIntensity.value=r.envMapIntensity)):r.isMeshStandardMaterial?(i(s,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(s,r),r.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(s,r,l)):r.isMeshMatcapMaterial?(i(s,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(s,r)):r.isMeshDepthMaterial?i(s,r):r.isMeshDistanceMaterial?(i(s,r),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(s,r)):r.isMeshNormalMaterial?i(s,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(s,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(s,r)):r.isPointsMaterial?(function(c,h,u,p){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*p,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(s,r,a,o):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(s,r):r.isShadowMaterial?(s.color.value.copy(r.color),s.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function uv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,d,f,m){if((function(x,g,y,_){let b=x.value,S=g+"_"+y;if(_[S]===void 0)return typeof b=="number"||typeof b=="boolean"?_[S]=b:ArrayBuffer.isView(b)?_[S]=b.slice():_[S]=b.clone(),!0;{let M=_[S];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return _[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1})(p,d,f,m)===!0){let x=p.__offset,g=p.value;if(Array.isArray(g)){let y=0;for(let _=0;_<g.length;_++){let b=g[_],S=h(b);c(b,p.__data,y),typeof b=="number"||typeof b=="boolean"||b.isMatrix3||ArrayBuffer.isView(b)||(y+=S.storage/Float32Array.BYTES_PER_ELEMENT)}}else c(g,p.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,p.__data)}}function c(p,d,f){typeof p=="number"||typeof p=="boolean"?d[0]=p:p.isMatrix3?(d[0]=p.elements[0],d[1]=p.elements[1],d[2]=p.elements[2],d[3]=0,d[4]=p.elements[3],d[5]=p.elements[4],d[6]=p.elements[5],d[7]=0,d[8]=p.elements[6],d[9]=p.elements[7],d[10]=p.elements[8],d[11]=0):ArrayBuffer.isView(p)?d.set(new p.constructor(p.buffer,p.byteOffset,d.length)):p.toArray(d,f)}function h(p){let d={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(d.boundary=4,d.storage=4):p.isVector2?(d.boundary=8,d.storage=8):p.isVector3||p.isColor?(d.boundary=16,d.storage=12):p.isVector4?(d.boundary=16,d.storage=16):p.isMatrix3?(d.boundary=48,d.storage=48):p.isMatrix4?(d.boundary=64,d.storage=64):p.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(d.boundary=16,d.storage=p.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",p),d}function u(p){let d=p.target;d.removeEventListener("dispose",u);let f=a.indexOf(d.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(s[d.id]),delete s[d.id],delete r[d.id]}return{bind:function(p,d){let f=d.program;i.uniformBlockBinding(p,f)},update:function(p,d){let f=s[p.id];f===void 0&&((function(g){let y=g.uniforms,_=0,b=16;for(let M=0,w=y.length;M<w;M++){let U=Array.isArray(y[M])?y[M]:[y[M]];for(let z=0,D=U.length;z<D;z++){let V=U[z],B=Array.isArray(V.value)?V.value:[V.value];for(let X=0,G=B.length;X<G;X++){let W=h(B[X]),K=_%b,Z=K%W.boundary,ne=K+Z;_+=Z,ne!==0&&b-ne<W.storage&&(_+=b-ne),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=W.storage}}}let S=_%b;S>0&&(_+=b-S),g.__size=_,g.__cache={}})(p),f=(function(g){let y=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=y;let _=n.createBuffer(),b=g.__size,S=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,b,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_})(p),s[p.id]=f,p.addEventListener("dispose",u));let m=d.program;i.updateUBOMapping(p,m);let x=e.render.frame;r[p.id]!==x&&((function(g){let y=s[g.id],_=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,M=_.length;S<M;S++){let w=_[S];if(Array.isArray(w))for(let U=0,z=w.length;U<z;U++)l(w[U],S,U,b);else l(w,S,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(p),r[p.id]=x)},dispose:function(){for(let p in s)n.deleteBuffer(s[p]);a=[],s={},r={}}}}T0.set(-1,0,0,0,1,0,0,0,1);var dv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null,Jc=class{constructor(e={}){let{canvas:t=km(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:d=Un}=e,f;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let m=d,x=new Set([Ku,Zu,Oc]),g=new Set([Un,ts,da,pa,zc,Dc]),y=new Uint32Array(4),_=new Int32Array(4),b=new A,S=null,M=null,w=[],U=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,V=!1,B=null,X=null,G=null,W=null;this._outputColorSpace=yt;let K=0,Z=0,ne=null,ve=-1,Ce=null,Te=new vt,Ae=new vt,oe=null,ye=new Se(0),fe=0,we=t.width,Ve=t.height,re=1,N=null,R=null,L=new vt(0,0,we,Ve),O=new vt(0,0,we,Ve),T=!1,H=new Yi,F=!1,P=!1,Y=new Le,$=new A,ee=new vt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Pe(){return ne===null?re:1}let me,Be,ie,ue,he,Me,bt,ht,Pt,an,ze,dt,Ye,Jt,_t,Ht,mt,on,tn,Bn,Pn,In,os,j=i;function Na(C,q){return t.getContext(C,q)}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",za,!1),t.addEventListener("webglcontextrestored",Da,!1),t.addEventListener("webglcontextcreationerror",rl,!1),j===null){let q="webgl2";if(j=Na(q,C),j===null)throw Na(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Oe("WebGLRenderer: "+C.message),C}function ls(){me=new B1(j),me.init(),Pn=new lv(j,me),Be=new D1(j,me,e,Pn),ie=new av(j,me),Be.reversedDepthBuffer&&p&&ie.buffers.depth.setReversed(!0),X=j.createFramebuffer(),G=j.createFramebuffer(),W=j.createFramebuffer(),ue=new G1(j),he=new Zy,Me=new ov(j,me,ie,he,Be,Pn,ue),bt=new F1(D),ht=new P1(j),In=new N1(j,ht),Pt=new k1(j,ht,ue,In),an=new W1(j,Pt,ht,In,ue),on=new V1(j,Be,Me),_t=new U1(he),ze=new Yy(D,bt,me,Be,In,_t),dt=new hv(D,he),Ye=new Jy,Jt=new nv(me),mt=new L1(D,bt,ie,an,f,l),Ht=new rv(D,an,Be),os=new uv(j,ue,Be,ie),tn=new z1(j,me,ue),Bn=new H1(j,me,ue),ue.programs=ze.programs,D.capabilities=Be,D.extensions=me,D.properties=he,D.renderLists=Ye,D.shadowMap=Ht,D.state=ie,D.info=ue}ls(),m!==Un&&(z=new j1(m,t.width,t.height,o,s,r));let zt=new Qd(D,j);function za(C){C.preventDefault(),so("WebGLRenderer: Context Lost."),V=!0}function Da(){so("WebGLRenderer: Context Restored."),V=!1;let C=ue.autoReset,q=Ht.enabled,Q=Ht.autoUpdate,v=Ht.needsUpdate,E=Ht.type;ls(),ue.autoReset=C,Ht.enabled=q,Ht.autoUpdate=Q,Ht.needsUpdate=v,Ht.type=E}function rl(C){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function cs(C){let q=C.target;q.removeEventListener("dispose",cs),(function(Q){(function(v){let E=he.get(v).programs;E!==void 0&&(E.forEach(function(I){ze.releaseProgram(I)}),v.isShaderMaterial&&ze.releaseShaderCache(v))})(Q),he.remove(Q)})(q)}function al(C,q,Q){C.transparent===!0&&C.side===ct&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,hs(C,q,Q),C.side=Ai,C.needsUpdate=!0,hs(C,q,Q),C.side=ct):hs(C,q,Q)}this.xr=zt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize(we,Ve,!1))},this.getSize=function(C){return C.set(we,Ve)},this.setSize=function(C,q,Q=!0){zt.isPresenting?Ie("WebGLRenderer: Can't change size while VR device is presenting."):(we=C,Ve=q,t.width=Math.floor(C*re),t.height=Math.floor(q*re),Q===!0&&(t.style.width=C+"px",t.style.height=q+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,C,q))},this.getDrawingBufferSize=function(C){return C.set(we*re,Ve*re).floor()},this.setDrawingBufferSize=function(C,q,Q){we=C,Ve=q,re=Q,t.width=Math.floor(C*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(m!==Un){if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(C||[])}else Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(C){return C.copy(Te)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,q,Q,v){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,q,Q,v),ie.viewport(Te.copy(L).multiplyScalar(re).round())},this.getScissor=function(C){return C.copy(O)},this.setScissor=function(C,q,Q,v){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,q,Q,v),ie.scissor(Ae.copy(O).multiplyScalar(re).round())},this.getScissorTest=function(){return T},this.setScissorTest=function(C){ie.setScissorTest(T=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){R=C},this.getClearColor=function(C){return C.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,Q=!0){let v=0;if(C){let E=!1;if(ne!==null){let I=ne.texture.format;E=x.has(I)}if(E){let I=ne.texture.type,k=g.has(I),J=mt.getClearColor(),se=mt.getClearAlpha(),ge=J.r,be=J.g,Re=J.b;k?(y[0]=ge,y[1]=be,y[2]=Re,y[3]=se,j.clearBufferuiv(j.COLOR,0,y)):(_[0]=ge,_[1]=be,_[2]=Re,_[3]=se,j.clearBufferiv(j.COLOR,0,_))}else v|=j.COLOR_BUFFER_BIT}q&&(v|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(v|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v!==0&&j.clear(v)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){t.removeEventListener("webglcontextlost",za,!1),t.removeEventListener("webglcontextrestored",Da,!1),t.removeEventListener("webglcontextcreationerror",rl,!1),mt.dispose(),Ye.dispose(),Jt.dispose(),he.dispose(),bt.dispose(),an.dispose(),In.dispose(),os.dispose(),ze.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Oa),zt.removeEventListener("sessionend",br),kn.stop()},this.renderBufferDirect=function(C,q,Q,v,E,I){q===null&&(q=de);let k=E.isMesh&&E.matrixWorld.determinantAffine()<0,J=(function(et,St,Vt,Fe,He){St.isScene!==!0&&(St=de),Me.resetTextureUnits();let yn=St.fog,Ph=Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial||Fe.isMeshPhongMaterial?St.environment:null,hl=ne===null?D.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,ka=Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial&&!Fe.envMap||Fe.isMeshPhongMaterial&&!Fe.envMap,di=bt.get(Fe.envMap||Ph,ka),Sr=Fe.vertexColors===!0&&!!Vt.attributes.color&&Vt.attributes.color.itemSize===4,Ui=!!Vt.attributes.tangent&&(!!Fe.normalMap||Fe.anisotropy>0),Ih=!!Vt.morphAttributes.position,Tr=!!Vt.morphAttributes.normal,Fg=!!Vt.morphAttributes.color,rf=oi;Fe.toneMapped&&(ne!==null&&ne.isXRRenderTarget!==!0||(rf=D.toneMapping));let af=Vt.morphAttributes.position||Vt.morphAttributes.normal||Vt.morphAttributes.color,Bg=af!==void 0?af.length:0,We=he.get(Fe),Os=M.state.lights;if(F===!0&&(P===!0||et!==Ce)){let qt=et===Ce&&Fe.id===ve;_t.setState(Fe,et,qt)}let Jn=!1;Fe.version===We.__version?We.needsLights&&We.lightsStateVersion!==Os.state.version||We.outputColorSpace!==hl||He.isBatchedMesh&&We.batching===!1?Jn=!0:He.isBatchedMesh||We.batching!==!0?He.isBatchedMesh&&We.batchingColor===!0&&He.colorTexture===null||He.isBatchedMesh&&We.batchingColor===!1&&He.colorTexture!==null||He.isInstancedMesh&&We.instancing===!1?Jn=!0:He.isInstancedMesh||We.instancing!==!0?He.isSkinnedMesh&&We.skinning===!1?Jn=!0:He.isSkinnedMesh||We.skinning!==!0?He.isInstancedMesh&&We.instancingColor===!0&&He.instanceColor===null||He.isInstancedMesh&&We.instancingColor===!1&&He.instanceColor!==null||He.isInstancedMesh&&We.instancingMorph===!0&&He.morphTexture===null||He.isInstancedMesh&&We.instancingMorph===!1&&He.morphTexture!==null||We.envMap!==di||Fe.fog===!0&&We.fog!==yn?Jn=!0:We.numClippingPlanes===void 0||We.numClippingPlanes===_t.numPlanes&&We.numIntersection===_t.numIntersection?(We.vertexAlphas!==Sr||We.vertexTangents!==Ui||We.morphTargets!==Ih||We.morphNormals!==Tr||We.morphColors!==Fg||We.toneMapping!==rf||We.morphTargetsCount!==Bg||!!We.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Jn=!0):Jn=!0:Jn=!0:Jn=!0:Jn=!0:(Jn=!0,We.__version=Fe.version);let us=We.currentProgram;Jn===!0&&(us=hs(Fe,St,He),B&&Fe.isNodeMaterial&&B.onUpdateProgram(Fe,us,We));let of=!1,wr=!1,Lh=!1,Dt=us.getUniforms(),Hn=We.uniforms;if(ie.useProgram(us.program)&&(of=!0,wr=!0,Lh=!0),Fe.id!==ve&&(ve=Fe.id,wr=!0),We.needsLights){let qt=(function(fi,zh){if(fi.length===0)return null;if(fi.length===1)return fi[0].texture!==null?fi[0]:null;b.setFromMatrixPosition(zh.matrixWorld);for(let Er=0,kg=fi.length;Er<kg;Er++){let Dh=fi[Er];if(Dh.texture!==null&&Dh.boundingBox.containsPoint(b))return Dh}return null})(M.state.lightProbeGridArray,He);We.lightProbeGrid!==qt&&(We.lightProbeGrid=qt,wr=!0)}if(of||Ce!==et){ie.buffers.depth.getReversed()&&et.reversedDepth!==!0&&(et._reversedDepth=!0,et.updateProjectionMatrix()),Dt.setValue(j,"projectionMatrix",et.projectionMatrix),Dt.setValue(j,"viewMatrix",et.matrixWorldInverse);let qt=Dt.map.cameraPosition;qt!==void 0&&qt.setValue(j,$.setFromMatrixPosition(et.matrixWorld)),Be.logarithmicDepthBuffer&&Dt.setValue(j,"logDepthBufFC",2/(Math.log(et.far+1)/Math.LN2)),(Fe.isMeshPhongMaterial||Fe.isMeshToonMaterial||Fe.isMeshLambertMaterial||Fe.isMeshBasicMaterial||Fe.isMeshStandardMaterial||Fe.isShaderMaterial)&&Dt.setValue(j,"isOrthographic",et.isOrthographicCamera===!0),Ce!==et&&(Ce=et,wr=!0,Lh=!0)}if(We.needsLights&&(Os.state.directionalShadowMap.length>0&&Dt.setValue(j,"directionalShadowMap",Os.state.directionalShadowMap,Me),Os.state.spotShadowMap.length>0&&Dt.setValue(j,"spotShadowMap",Os.state.spotShadowMap,Me),Os.state.pointShadowMap.length>0&&Dt.setValue(j,"pointShadowMap",Os.state.pointShadowMap,Me)),He.isSkinnedMesh){Dt.setOptional(j,He,"bindMatrix"),Dt.setOptional(j,He,"bindMatrixInverse");let qt=He.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Dt.setValue(j,"boneTexture",qt.boneTexture,Me))}He.isBatchedMesh&&(Dt.setOptional(j,He,"batchingTexture"),Dt.setValue(j,"batchingTexture",He._matricesTexture,Me),Dt.setOptional(j,He,"batchingIdTexture"),Dt.setValue(j,"batchingIdTexture",He._indirectTexture,Me),Dt.setOptional(j,He,"batchingColorTexture"),He._colorsTexture!==null&&Dt.setValue(j,"batchingColorTexture",He._colorsTexture,Me));let Nh=Vt.morphAttributes;if(Nh.position===void 0&&Nh.normal===void 0&&Nh.color===void 0||on.update(He,Vt,us),(wr||We.receiveShadow!==He.receiveShadow)&&(We.receiveShadow=He.receiveShadow,Dt.setValue(j,"receiveShadow",He.receiveShadow)),(Fe.isMeshStandardMaterial||Fe.isMeshLambertMaterial||Fe.isMeshPhongMaterial)&&Fe.envMap===null&&St.environment!==null&&(Hn.envMapIntensity.value=St.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=(Ii===null&&(Ii=new ta(dv,16,16,ar,Pi),Ii.name="DFG_LUT",Ii.minFilter=Kt,Ii.magFilter=Kt,Ii.wrapS=_i,Ii.wrapT=_i,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii)),wr){if(Dt.setValue(j,"toneMappingExposure",D.toneMappingExposure),We.needsLights&&($n=Lh,(pi=Hn).ambientLightColor.needsUpdate=$n,pi.lightProbe.needsUpdate=$n,pi.directionalLights.needsUpdate=$n,pi.directionalLightShadows.needsUpdate=$n,pi.pointLights.needsUpdate=$n,pi.pointLightShadows.needsUpdate=$n,pi.spotLights.needsUpdate=$n,pi.spotLightShadows.needsUpdate=$n,pi.rectAreaLights.needsUpdate=$n,pi.hemisphereLights.needsUpdate=$n),yn&&Fe.fog===!0&&dt.refreshFogUniforms(Hn,yn),dt.refreshMaterialUniforms(Hn,Fe,re,Ve,M.state.transmissionRenderTarget[et.id]),We.needsLights&&We.lightProbeGrid){let qt=We.lightProbeGrid;Hn.probesSH.value=qt.texture,Hn.probesMin.value.copy(qt.boundingBox.min),Hn.probesMax.value.copy(qt.boundingBox.max),Hn.probesResolution.value.copy(qt.resolution)}ya.upload(j,ll(We),Hn,Me)}var pi,$n;if(Fe.isShaderMaterial&&Fe.uniformsNeedUpdate===!0&&(ya.upload(j,ll(We),Hn,Me),Fe.uniformsNeedUpdate=!1),Fe.isSpriteMaterial&&Dt.setValue(j,"center",He.center),Dt.setValue(j,"modelViewMatrix",He.modelViewMatrix),Dt.setValue(j,"normalMatrix",He.normalMatrix),Dt.setValue(j,"modelMatrix",He.matrixWorld),Fe.uniformsGroups!==void 0){let qt=Fe.uniformsGroups;for(let fi=0,zh=qt.length;fi<zh;fi++){let Er=qt[fi];os.update(Er,us),os.bind(Er,us)}}return us})(C,q,Q,v,E);ie.setMaterial(v,k);let se=Q.index,ge=1;if(v.wireframe===!0){if(se=Pt.getWireframeAttribute(Q),se===void 0)return;ge=2}let be=Q.drawRange,Re=Q.attributes.position,De=be.start*ge,nt=(be.start+be.count)*ge;I!==null&&(De=Math.max(De,I.start*ge),nt=Math.min(nt,(I.start+I.count)*ge)),se!==null?(De=Math.max(De,0),nt=Math.min(nt,se.count)):Re!=null&&(De=Math.max(De,0),nt=Math.min(nt,Re.count));let Gt=nt-De;if(Gt<0||Gt===1/0)return;let Ot;In.setup(E,v,J,Q,se);let wt=tn;if(se!==null&&(Ot=ht.get(se),wt=Bn,wt.setIndex(Ot)),E.isMesh)v.wireframe===!0?(ie.setLineWidth(v.wireframeLinewidth*Pe()),wt.setMode(j.LINES)):wt.setMode(j.TRIANGLES);else if(E.isLine){let et=v.linewidth;et===void 0&&(et=1),ie.setLineWidth(et*Pe()),E.isLineSegments?wt.setMode(j.LINES):E.isLineLoop?wt.setMode(j.LINE_LOOP):wt.setMode(j.LINE_STRIP)}else E.isPoints?wt.setMode(j.POINTS):E.isSprite&&wt.setMode(j.TRIANGLES);if(E.isBatchedMesh)if(me.get("WEBGL_multi_draw"))wt.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{let et=E._multiDrawStarts,St=E._multiDrawCounts,Vt=E._multiDrawCount,Fe=se?ht.get(se).bytesPerElement:1,He=he.get(v).currentProgram.getUniforms();for(let yn=0;yn<Vt;yn++)He.setValue(j,"_gl_DrawID",yn),wt.render(et[yn]/Fe,St[yn])}else if(E.isInstancedMesh)wt.renderInstances(De,Gt,E.count);else if(Q.isInstancedBufferGeometry){let et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,St=Math.min(Q.instanceCount,et);wt.renderInstances(De,Gt,St)}else wt.render(De,Gt)},this.compile=function(C,q,Q=null){Q===null&&(Q=C),M=Jt.get(Q),M.init(q),U.push(M),Q.traverseVisible(function(E){E.isLight&&E.layers.test(q.layers)&&(M.pushLight(E),E.castShadow&&M.pushShadow(E))}),C!==Q&&C.traverseVisible(function(E){E.isLight&&E.layers.test(q.layers)&&(M.pushLight(E),E.castShadow&&M.pushShadow(E))}),M.setupLights();let v=new Set;return C.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;let I=E.material;if(I)if(Array.isArray(I))for(let k=0;k<I.length;k++){let J=I[k];al(J,Q,E),v.add(J)}else al(I,Q,E),v.add(I)}),M=U.pop(),v},this.compileAsync=function(C,q,Q=null){let v=this.compile(C,q,Q);return new Promise(E=>{function I(){v.forEach(function(k){he.get(k).currentProgram.isReady()&&v.delete(k)}),v.size!==0?setTimeout(I,10):E(C)}me.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let Ua=null;function Oa(){kn.stop()}function br(){kn.start()}let kn=new v0;function Fa(C,q,Q,v){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||H.intersectsSprite(C)){v&&ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);let I=an.update(C),k=C.material;k.visible&&S.push(C,I,k,Q,ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||H.intersectsObject(C))){let I=an.update(C),k=C.material;if(v&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ee.copy(C.boundingSphere.center)):(I.boundingSphere===null&&I.computeBoundingSphere(),ee.copy(I.boundingSphere.center)),ee.applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray(k)){let J=I.groups;for(let se=0,ge=J.length;se<ge;se++){let be=J[se],Re=k[be.materialIndex];Re&&Re.visible&&S.push(C,I,Re,Q,ee.z,be)}}else k.visible&&S.push(C,I,k,Q,ee.z,null)}}let E=C.children;for(let I=0,k=E.length;I<k;I++)Fa(E[I],q,Q,v)}function ol(C,q,Q,v){let{opaque:E,transmissive:I,transparent:k}=C;M.setupLightsView(Q),F===!0&&_t.setGlobalState(D.clippingPlanes,Q),v&&ie.viewport(Te.copy(v)),E.length>0&&Ds(E,q,Q),I.length>0&&Ds(I,q,Q),k.length>0&&Ds(k,q,Q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ba(C,q,Q,v){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[v.id]===void 0){let Re=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[v.id]=new zn(1,1,{generateMipmaps:!0,type:Re?Pi:Un,minFilter:Ci,samples:Math.max(4,Be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let E=M.state.transmissionRenderTarget[v.id],I=v.viewport||Te;E.setSize(I.z*D.transmissionResolutionScale,I.w*D.transmissionResolutionScale);let k=D.getRenderTarget(),J=D.getActiveCubeFace(),se=D.getActiveMipmapLevel();D.setRenderTarget(E),D.getClearColor(ye),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),pe&&mt.render(Q);let ge=D.toneMapping;D.toneMapping=oi;let be=v.viewport;if(v.viewport!==void 0&&(v.viewport=void 0),M.setupLightsView(v),F===!0&&_t.setGlobalState(D.clippingPlanes,v),Ds(C,Q,v),Me.updateMultisampleRenderTarget(E),Me.updateRenderTargetMipmap(E),me.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let De=0,nt=q.length;De<nt;De++){let Gt=q[De],{object:Ot,geometry:wt,material:et,group:St}=Gt;if(et.side===ct&&Ot.layers.test(v.layers)){let Vt=et.side;et.side=An,et.needsUpdate=!0,Us(Ot,Q,v,wt,et,St),et.side=Vt,et.needsUpdate=!0,Re=!0}}Re===!0&&(Me.updateMultisampleRenderTarget(E),Me.updateRenderTargetMipmap(E))}D.setRenderTarget(k,J,se),D.setClearColor(ye,fe),be!==void 0&&(v.viewport=be),D.toneMapping=ge}function Ds(C,q,Q){let v=q.isScene===!0?q.overrideMaterial:null;for(let E=0,I=C.length;E<I;E++){let k=C[E],{object:J,geometry:se,group:ge}=k,be=k.material;be.allowOverride===!0&&v!==null&&(be=v),J.layers.test(Q.layers)&&Us(J,q,Q,se,be,ge)}}function Us(C,q,Q,v,E,I){C.onBeforeRender(D,q,Q,v,E,I),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),E.onBeforeRender(D,q,Q,v,C,I),E.transparent===!0&&E.side===ct&&E.forceSinglePass===!1?(E.side=An,E.needsUpdate=!0,D.renderBufferDirect(Q,q,v,E,C,I),E.side=Ai,E.needsUpdate=!0,D.renderBufferDirect(Q,q,v,E,C,I),E.side=ct):D.renderBufferDirect(Q,q,v,E,C,I),C.onAfterRender(D,q,Q,v,E,I)}function hs(C,q,Q){q.isScene!==!0&&(q=de);let v=he.get(C),E=M.state.lights,I=M.state.shadowsArray,k=E.state.version,J=ze.getParameters(C,E.state,I,q,Q,M.state.lightProbeGridArray),se=ze.getProgramCacheKey(J),ge=v.programs;v.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,v.fog=q.fog;let be=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;v.envMap=bt.get(C.envMap||v.environment,be),v.envMapRotation=v.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ge===void 0&&(C.addEventListener("dispose",cs),ge=new Map,v.programs=ge);let Re=ge.get(se);if(Re!==void 0){if(v.currentProgram===Re&&v.lightsStateVersion===k)return cl(C,J),Re}else J.uniforms=ze.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,Q,J),C.onBeforeCompile(J,D),Re=ze.acquireProgram(J,se),ge.set(se,Re),v.uniforms=J.uniforms;let De=v.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(De.clippingPlanes=_t.uniform),cl(C,J),v.needsLights=(function(nt){return nt.isMeshLambertMaterial||nt.isMeshToonMaterial||nt.isMeshPhongMaterial||nt.isMeshStandardMaterial||nt.isShadowMaterial||nt.isShaderMaterial&&nt.lights===!0})(C),v.lightsStateVersion=k,v.needsLights&&(De.ambientLightColor.value=E.state.ambient,De.lightProbe.value=E.state.probe,De.directionalLights.value=E.state.directional,De.directionalLightShadows.value=E.state.directionalShadow,De.spotLights.value=E.state.spot,De.spotLightShadows.value=E.state.spotShadow,De.rectAreaLights.value=E.state.rectArea,De.ltc_1.value=E.state.rectAreaLTC1,De.ltc_2.value=E.state.rectAreaLTC2,De.pointLights.value=E.state.point,De.pointLightShadows.value=E.state.pointShadow,De.hemisphereLights.value=E.state.hemi,De.directionalShadowMatrix.value=E.state.directionalShadowMatrix,De.spotLightMatrix.value=E.state.spotLightMatrix,De.spotLightMap.value=E.state.spotLightMap,De.pointShadowMatrix.value=E.state.pointShadowMatrix),v.lightProbeGrid=M.state.lightProbeGridArray.length>0,v.currentProgram=Re,v.uniformsList=null,Re}function ll(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=ya.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function cl(C,q){let Q=he.get(C);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}kn.setAnimationLoop(function(C){Ua&&Ua(C)}),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){Ua=C,zt.setAnimationLoop(C),C===null?kn.stop():kn.start()},zt.addEventListener("sessionstart",Oa),zt.addEventListener("sessionend",br),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0)return void Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(V===!0)return;B!==null&&B.renderStart(C,q);let Q=zt.enabled===!0&&zt.isPresenting===!0,v=z!==null&&(ne===null||Q)&&z.begin(D,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),zt.enabled!==!0||zt.isPresenting!==!0||z!==null&&z.isCompositing()!==!1||(zt.cameraAutoUpdate===!0&&zt.updateCamera(q),q=zt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,q,ne),M=Jt.get(C,U.length),M.init(q),M.state.textureUnits=Me.getTextureUnits(),U.push(M),Y.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H.setFromProjectionMatrix(Y,ji,q.reversedDepth),P=this.localClippingEnabled,F=_t.init(this.clippingPlanes,P),S=Ye.get(C,w.length),S.init(),w.push(S),zt.enabled===!0&&zt.isPresenting===!0){let I=D.xr.getDepthSensingMesh();I!==null&&Fa(I,q,-1/0,D.sortObjects)}Fa(C,q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(N,R,q.reversedDepth),pe=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,pe&&mt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),F===!0&&_t.beginShadows();let E=M.state.shadowsArray;if(Ht.render(E,C,q),F===!0&&_t.endShadows(),(v&&z.hasRenderPass())===!1){let I=S.opaque,k=S.transmissive;if(M.setupLights(),q.isArrayCamera){let J=q.cameras;if(k.length>0)for(let se=0,ge=J.length;se<ge;se++)Ba(I,k,C,J[se]);pe&&mt.render(C);for(let se=0,ge=J.length;se<ge;se++){let be=J[se];ol(S,C,be,be.viewport)}}else k.length>0&&Ba(I,k,C,q),pe&&mt.render(C),ol(S,C,q)}ne!==null&&Z===0&&(Me.updateMultisampleRenderTarget(ne),Me.updateRenderTargetMipmap(ne)),v&&z.end(D),C.isScene===!0&&C.onAfterRender(D,C,q),In.resetDefaultState(),ve=-1,Ce=null,U.pop(),U.length>0?(M=U[U.length-1],Me.setTextureUnits(M.state.textureUnits),F===!0&&_t.setGlobalState(D.clippingPlanes,M.state.camera)):M=null,w.pop(),S=w.length>0?w[w.length-1]:null,B!==null&&B.renderEnd()},this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,q,Q){let v=he.get(C);v.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,v.__autoAllocateDepthBuffer===!1&&(v.__useRenderToTexture=!1),he.get(C.texture).__webglTexture=q,he.get(C.depthTexture).__webglTexture=v.__autoAllocateDepthBuffer?void 0:Q,v.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){let Q=he.get(C);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,Q=0){ne=C,K=q,Z=Q;let v=null,E=!1,I=!1;if(C){let k=he.get(C);if(k.__useDefaultFramebuffer!==void 0)return ie.bindFramebuffer(j.FRAMEBUFFER,k.__webglFramebuffer),Te.copy(C.viewport),Ae.copy(C.scissor),oe=C.scissorTest,ie.viewport(Te),ie.scissor(Ae),ie.setScissorTest(oe),void(ve=-1);if(k.__webglFramebuffer===void 0)Me.setupRenderTarget(C);else if(k.__hasExternalTextures)Me.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ge=C.depthTexture;if(k.__boundDepthTexture!==ge){if(ge!==null&&he.has(ge)&&(C.width!==ge.image.width||C.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(C)}}let J=C.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(I=!0);let se=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(v=Array.isArray(se[q])?se[q][Q]:se[q],E=!0):v=C.samples>0&&Me.useMultisampledRTT(C)===!1?he.get(C).__webglMultisampledFramebuffer:Array.isArray(se)?se[Q]:se,Te.copy(C.viewport),Ae.copy(C.scissor),oe=C.scissorTest}else Te.copy(L).multiplyScalar(re).floor(),Ae.copy(O).multiplyScalar(re).floor(),oe=T;if(Q!==0&&(v=X),ie.bindFramebuffer(j.FRAMEBUFFER,v)&&ie.drawBuffers(C,v),ie.viewport(Te),ie.scissor(Ae),ie.setScissorTest(oe),E){let k=he.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,k.__webglTexture,Q)}else if(I){let k=q;for(let J=0;J<C.textures.length;J++){let se=he.get(C.textures[J]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+J,se.__webglTexture,Q,k)}}else if(C!==null&&Q!==0){let k=he.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,k.__webglTexture,Q)}ve=-1},this.readRenderTargetPixels=function(C,q,Q,v,E,I,k,J=0){if(!C||!C.isWebGLRenderTarget)return void Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(se=se[k]),se){ie.bindFramebuffer(j.FRAMEBUFFER,se);try{let ge=C.textures[J],be=ge.format,Re=ge.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+J),!Be.textureFormatReadable(be))return void Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Re))return void Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=C.width-v&&Q>=0&&Q<=C.height-E&&j.readPixels(q,Q,v,E,Pn.convert(be),Pn.convert(Re),I)}finally{let ge=ne!==null?he.get(ne).__webglFramebuffer:null;ie.bindFramebuffer(j.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(C,q,Q,v,E,I,k,J=0){if(!C||!C.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(se=se[k]),se){if(q>=0&&q<=C.width-v&&Q>=0&&Q<=C.height-E){ie.bindFramebuffer(j.FRAMEBUFFER,se);let ge=C.textures[J],be=ge.format,Re=ge.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+J),!Be.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,De),j.bufferData(j.PIXEL_PACK_BUFFER,I.byteLength,j.STREAM_READ),j.readPixels(q,Q,v,E,Pn.convert(be),Pn.convert(Re),0);let nt=ne!==null?he.get(ne).__webglFramebuffer:null;ie.bindFramebuffer(j.FRAMEBUFFER,nt);let Gt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Gm(j,Gt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,De),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,I),j.deleteBuffer(De),j.deleteSync(Gt),I}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,Q=0){let v=Math.pow(2,-Q),E=Math.floor(C.image.width*v),I=Math.floor(C.image.height*v),k=q!==null?q.x:0,J=q!==null?q.y:0;Me.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,Q,0,0,k,J,E,I),ie.unbindTexture()},this.copyTextureToTexture=function(C,q,Q=null,v=null,E=0,I=0){let k,J,se,ge,be,Re,De,nt,Gt,Ot=C.isCompressedTexture?C.mipmaps[I]:C.image;if(Q!==null)k=Q.max.x-Q.min.x,J=Q.max.y-Q.min.y,se=Q.isBox3?Q.max.z-Q.min.z:1,ge=Q.min.x,be=Q.min.y,Re=Q.isBox3?Q.min.z:0;else{let di=Math.pow(2,-E);k=Math.floor(Ot.width*di),J=Math.floor(Ot.height*di),se=C.isDataArrayTexture?Ot.depth:C.isData3DTexture?Math.floor(Ot.depth*di):1,ge=0,be=0,Re=0}v!==null?(De=v.x,nt=v.y,Gt=v.z):(De=0,nt=0,Gt=0);let wt=Pn.convert(q.format),et=Pn.convert(q.type),St;q.isData3DTexture?(Me.setTexture3D(q,0),St=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Me.setTexture2DArray(q,0),St=j.TEXTURE_2D_ARRAY):(Me.setTexture2D(q,0),St=j.TEXTURE_2D),ie.activeTexture(j.TEXTURE0),ie.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),ie.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),ie.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);let Vt=ie.getParameter(j.UNPACK_ROW_LENGTH),Fe=ie.getParameter(j.UNPACK_IMAGE_HEIGHT),He=ie.getParameter(j.UNPACK_SKIP_PIXELS),yn=ie.getParameter(j.UNPACK_SKIP_ROWS),Ph=ie.getParameter(j.UNPACK_SKIP_IMAGES);ie.pixelStorei(j.UNPACK_ROW_LENGTH,Ot.width),ie.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ot.height),ie.pixelStorei(j.UNPACK_SKIP_PIXELS,ge),ie.pixelStorei(j.UNPACK_SKIP_ROWS,be),ie.pixelStorei(j.UNPACK_SKIP_IMAGES,Re);let hl=C.isDataArrayTexture||C.isData3DTexture,ka=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){let di=he.get(C),Sr=he.get(q),Ui=he.get(di.__renderTarget),Ih=he.get(Sr.__renderTarget);ie.bindFramebuffer(j.READ_FRAMEBUFFER,Ui.__webglFramebuffer),ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ih.__webglFramebuffer);for(let Tr=0;Tr<se;Tr++)hl&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,he.get(C).__webglTexture,E,Re+Tr),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,he.get(q).__webglTexture,I,Gt+Tr)),j.blitFramebuffer(ge,be,k,J,De,nt,k,J,j.DEPTH_BUFFER_BIT,j.NEAREST);ie.bindFramebuffer(j.READ_FRAMEBUFFER,null),ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(E!==0||C.isRenderTargetTexture||he.has(C)){let di=he.get(C),Sr=he.get(q);ie.bindFramebuffer(j.READ_FRAMEBUFFER,G),ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,W);for(let Ui=0;Ui<se;Ui++)hl?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,di.__webglTexture,E,Re+Ui):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,di.__webglTexture,E),ka?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Sr.__webglTexture,I,Gt+Ui):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Sr.__webglTexture,I),E!==0?j.blitFramebuffer(ge,be,k,J,De,nt,k,J,j.COLOR_BUFFER_BIT,j.NEAREST):ka?j.copyTexSubImage3D(St,I,De,nt,Gt+Ui,ge,be,k,J):j.copyTexSubImage2D(St,I,De,nt,ge,be,k,J);ie.bindFramebuffer(j.READ_FRAMEBUFFER,null),ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ka?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(St,I,De,nt,Gt,k,J,se,wt,et,Ot.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(St,I,De,nt,Gt,k,J,se,wt,Ot.data):j.texSubImage3D(St,I,De,nt,Gt,k,J,se,wt,et,Ot):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,I,De,nt,k,J,wt,et,Ot.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,I,De,nt,Ot.width,Ot.height,wt,Ot.data):j.texSubImage2D(j.TEXTURE_2D,I,De,nt,k,J,wt,et,Ot);ie.pixelStorei(j.UNPACK_ROW_LENGTH,Vt),ie.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Fe),ie.pixelStorei(j.UNPACK_SKIP_PIXELS,He),ie.pixelStorei(j.UNPACK_SKIP_ROWS,yn),ie.pixelStorei(j.UNPACK_SKIP_IMAGES,Ph),I===0&&q.generateMipmaps&&j.generateMipmap(St),ie.unbindTexture()},this.initRenderTarget=function(C){he.get(C).__webglFramebuffer===void 0&&Me.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Me.setTextureCube(C,0):C.isData3DTexture?Me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Me.setTexture2DArray(C,0):Me.setTexture2D(C,0),ie.unbindTexture()},this.resetState=function(){K=0,Z=0,ne=null,ie.reset(),In.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Ab=new Se;function w0(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new si(n)}var Go=420,Ma=900,Qc=class{constructor(e,t){this.scene=e,this.world=t,this.debrisMesh=new qi(new Wt(1,1,1),new Tt({roughness:.8}),Go),this.debrisMesh.castShadow=!0,this.debrisMesh.instanceMatrix.setUsage(ma),this.debrisMesh.count=Go,this.debrisMesh.frustumCulled=!1,e.add(this.debrisMesh),this.debris=[];let i=new Le().makeScale(0,0,0);for(let o=0;o<Go;o++)this.debris.push({alive:!1,p:new A,v:new A,q:new Et,w:new A,s:new A(1,1,1),life:0,rest:!1}),this.debrisMesh.setMatrixAt(o,i),this.debrisMesh.setColorAt(o,new Se(16777215));this.di=0;let s=new Ke;this.pPos=new Float32Array(Ma*3),this.pCol=new Float32Array(Ma*4),this.pSize=new Float32Array(Ma),s.setAttribute("position",new st(this.pPos,3).setUsage(ma)),s.setAttribute("color4",new st(this.pCol,4).setUsage(ma)),s.setAttribute("size",new st(this.pSize,1).setUsage(ma));let r=o=>new bn({uniforms:{map:{value:w0()},scale:{value:600}},vertexShader:["attribute vec4 color4;","attribute float size;","varying vec4 vC;","uniform float scale;","void main() {","  vC = color4;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = size * scale / max(1.0, -mv.z);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["uniform sampler2D map;","varying vec4 vC;","void main() {","  vec4 t = texture2D(map, gl_PointCoord);","  gl_FragColor = vec4(vC.rgb, vC.a * t.a);","  if (gl_FragColor.a < 0.01) discard;","}"].join(`
`),transparent:!0,depthWrite:!1,blending:o});this.parts=[];for(let o=0;o<Ma;o++)this.parts.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,grow:0,r:1,g:1,b:1,a:1,drag:0,grav:0,add:!1});this.pi=0,this.pointsN=new Mi(s,r(nr)),this.pointsN.frustumCulled=!1,e.add(this.pointsN);let a=s.clone();this.aPos=a.attributes.position.array,this.aCol=a.attributes.color4.array,this.aSize=a.attributes.size.array,this.pointsA=new Mi(a,r(es)),this.pointsA.frustumCulled=!1,e.add(this.pointsA),this.bodies=[],this.shake=0,this._m=new Le,this._c=new Se}addShake(e){this.shake=Math.min(1.6,this.shake+e)}debrisAt(e,t,i,s,r,{speed:a=8,up:o=6,size:l=.4,dir:c=null,spread:h=1,plank:u=!1}={}){let p=this._c.set(r);for(let d=0;d<s;d++){let f=this.debris[this.di],m=this.di;this.di=(this.di+1)%Go,f.alive=!0,f.rest=!1,f.life=14+Math.random()*6,f.p.set(e+(Math.random()-.5)*h,t+Math.random()*h,i+(Math.random()-.5)*h);let x=Math.random()*Math.PI*2;f.v.set(Math.cos(x)*a*Math.random(),o*(.4+Math.random()),Math.sin(x)*a*Math.random()),c&&f.v.add(new A(c.x,0,c.z).multiplyScalar(.55+Math.random()*.4)),f.q.setFromEuler(new Tn(Math.random()*6,Math.random()*6,Math.random()*6)),f.w.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14);let g=l*(.6+Math.random()*.8);u?f.s.set(g*.6,g*.4,g*5):f.s.set(g,g*(.5+Math.random()*.6),g*(.7+Math.random()*.6));let y=.75+Math.random()*.35;this.debrisMesh.setColorAt(m,this._c.copy(p).multiplyScalar(y))}this.debrisMesh.instanceColor.needsUpdate=!0}emit(e,t,i,s){let r=this.parts[this.pi];this.pi=(this.pi+1)%Ma,r.alive=!0,r.x=e,r.y=t,r.z=i,r.vx=s.vx||0,r.vy=s.vy||0,r.vz=s.vz||0,r.life=0,r.max=s.life||1,r.size=s.size||1,r.grow=s.grow||0,r.r=s.r??1,r.g=s.g??1,r.b=s.b??1,r.a=s.a??1,r.drag=s.drag??1,r.grav=s.grav??0,r.add=!!s.add}sparks(e,t,i,s,r=null,a=10){for(let o=0;o<s;o++){let l=Math.random()*Math.PI*2;this.emit(e,t,i,{vx:Math.cos(l)*a*Math.random()+(r?r.x*.3:0),vy:2+Math.random()*a*.7,vz:Math.sin(l)*a*Math.random()+(r?r.z*.3:0),life:.35+Math.random()*.4,size:.35,r:1,g:.75+Math.random()*.2,b:.3,a:1,drag:1.5,grav:18,add:!0})}}smoke(e,t,i,{dark:s=.25,size:r=2.2,life:a=1.6,vy:o=1.6,a:l=.5}={}){this.emit(e+(Math.random()-.5)*.4,t,i+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*.8,vy:o,vz:(Math.random()-.5)*.8,life:a,size:r,grow:r*1.2,r:s,g:s,b:s*1.05,a:l,drag:.6})}dust(e,t,i,s,r=[.66,.58,.46],a=1){for(let o=0;o<s;o++){let l=Math.random()*Math.PI*2;this.emit(e,t+.3,i,{vx:Math.cos(l)*6*a*Math.random(),vy:1+Math.random()*2.5*a,vz:Math.sin(l)*6*a*Math.random(),life:1.2+Math.random()*1.2,size:2.4*a,grow:3*a,r:r[0],g:r[1],b:r[2],a:.5,drag:1.4})}}flash(e,t,i){this.emit(e,t,i,{life:.18,size:9,grow:8,r:1,g:.7,b:.35,a:.9,add:!0})}launch(e,{vx:t=0,vy:i=5,vz:s=0,spin:r=6,life:a=20,pivotFall:o=null}={}){e.parent||this.scene.add(e),this.bodies.push({mesh:e,vx:t,vy:i,vz:s,wx:(Math.random()-.5)*r,wy:(Math.random()-.5)*r,wz:(Math.random()-.5)*r,life:a,rest:!1,pivotFall:o,t:0})}update(e){let t=this.world,i=!1;for(let a=0;a<Go;a++){let o=this.debris[a];if(!o.alive)continue;if(i=!0,o.life-=e,o.life<=0){o.alive=!1,this.debrisMesh.setMatrixAt(a,this._m.makeScale(0,0,0));continue}if(!o.rest){o.v.y-=22*e,o.p.addScaledVector(o.v,e);let c=t.groundAt(o.p.x,o.p.z,o.p.y).h+o.s.y*.5;o.p.y<c&&(o.p.y=c,Math.abs(o.v.y)<2.5&&Math.hypot(o.v.x,o.v.z)<1.5&&(o.rest=!0),o.v.y=-o.v.y*.3,o.v.x*=.6,o.v.z*=.6,o.w.multiplyScalar(.6));let h=o.w.length();h>.01&&o.q.multiply(new Et().setFromAxisAngle(this._tmpAxis(o.w,h),h*e))}let l=o.life<2?o.life/2:1;this._m.compose(o.p,o.q,this._tmpScale(o.s,l)),this.debrisMesh.setMatrixAt(a,this._m)}i&&(this.debrisMesh.instanceMatrix.needsUpdate=!0);for(let a=this.bodies.length-1;a>=0;a--){let o=this.bodies[a];o.life-=e,o.t+=e;let l=o.mesh;if(o.pivotFall){let c=o.pivotFall,h=Math.min(1,o.t/c.dur);c.angle=c.target*h*h,l.quaternion.setFromAxisAngle(c.axis,c.angle).premultiply(c.base);let u=c.offset.clone().applyQuaternion(new Et().setFromAxisAngle(c.axis,c.angle));l.position.copy(c.pivot).sub(u),h>=1&&!c.done&&(c.done=!0,c.onDone&&c.onDone());continue}if(!o.rest){o.vy-=22*e,l.position.x+=o.vx*e,l.position.y+=o.vy*e,l.position.z+=o.vz*e,l.rotation.x+=o.wx*e,l.rotation.y+=o.wy*e,l.rotation.z+=o.wz*e;let c=t.groundAt(l.position.x,l.position.z,l.position.y+1).h+.15;l.position.y<c&&(l.position.y=c,o.vy=-o.vy*.25,o.vx*=.55,o.vz*=.55,o.wx*=.5,o.wy*=.5,o.wz*=.5,Math.abs(o.vy)<1.5&&Math.hypot(o.vx,o.vz)<1&&(o.rest=!0,l.rotation.x=Math.round(l.rotation.x/(Math.PI/2))*(Math.PI/2),l.rotation.z=Math.round(l.rotation.z/(Math.PI/2))*(Math.PI/2)))}o.life<=0&&(l.position.y-=e*.5,o.life<-3&&(l.parent&&l.parent.remove(l),this.bodies.splice(a,1)))}let s=0,r=0;for(let a=0;a<Ma;a++){let o=this.parts[a];if(!o.alive)continue;if(o.life+=e,o.life>=o.max){o.alive=!1;continue}let l=Math.exp(-o.drag*e);o.vx*=l,o.vz*=l,o.vy=o.vy*l-o.grav*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e;let c=o.life/o.max,h=o.a*(1-c)*Math.min(1,o.life*12),u=o.size+o.grow*c;o.add?this._put(this.aPos,this.aCol,this.aSize,r++,o,h,u):this._put(this.pPos,this.pCol,this.pSize,s++,o,h,u)}this.pointsN.geometry.setDrawRange(0,s),this.pointsA.geometry.setDrawRange(0,r);for(let a of[this.pointsN,this.pointsA]){let o=a.geometry;o.attributes.position.needsUpdate=!0,o.attributes.color4.needsUpdate=!0,o.attributes.size.needsUpdate=!0}this.shake=Math.max(0,this.shake-e*2.4)}setScale(e){for(let t of[this.pointsN,this.pointsA])t.material.uniforms.scale.value=e*.9}_put(e,t,i,s,r,a,o){e[s*3]=r.x,e[s*3+1]=r.y,e[s*3+2]=r.z,t[s*4]=r.r,t[s*4+1]=r.g,t[s*4+2]=r.b,t[s*4+3]=a,i[s]=o}_tmpAxis(e,t){return(this.__ax||(this.__ax=new A)).copy(e).divideScalar(t)}_tmpScale(e,t){return(this.__sc||(this.__sc=new A)).copy(e).multiplyScalar(t)}};var pv=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,fv=Math.min(screen.width,screen.height)<700,ba=pv||fv,eh=ba?{pixelRatio:Math.min(devicePixelRatio,1.25),shadow:1024,shadowRange:45,trees:.45,tufts:.3,bloom:!1,msaa:0,tex:"tex512",sky:"sky_1k",carLite:!0}:{pixelRatio:Math.min(devicePixelRatio,1.75),shadow:2048,shadowRange:70,trees:1,tufts:1,bloom:!0,msaa:4,tex:"tex",sky:"sky_2k",carLite:!1};function ep(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ke,c=0;for(let h=0;h<n.length;++h){let u=n[h],p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let p=0;p<n.length;++p){let d=n[p].index;for(let f=0;f<d.count;++f)u.push(d.getX(f)+h);h+=n[p].attributes.position.count}l.setIndex(u)}for(let h in r){let u=E0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][p]);let f=E0(d);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function E0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new st(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let p=0,d=h.count;p<d;p++)for(let f=0;f<t;f++){let m=h.getComponent(p,f);o.setComponent(p+u,f,m)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function tp(n,e){if(e===Ad)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===fa||e===Uo){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===fa)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Vo(n){let e=new Map,t=new Map,i=n.clone();return A0(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function A0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)A0(n.children[i],e.children[i],t)}var th=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lp(t)}),this.register(function(t){return new cp(t)}),this.register(function(t){return new vp(t)}),this.register(function(t){return new xp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new up(t)}),this.register(function(t){return new dp(t)}),this.register(function(t){return new pp(t)}),this.register(function(t){return new fp(t)}),this.register(function(t){return new op(t)}),this.register(function(t){return new mp(t)}),this.register(function(t){return new hp(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new gp(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new nh(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new nh(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Mp(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Qi.extractUrlBase(e);a=Qi.resolveURL(c,this.path)}else a=Qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ra(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===L0){try{a[tt.KHR_BINARY_GLTF]=new bp(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Cp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],p=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new ap;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Sp(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Tp;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new wp;break;default:p.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function mv(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Xt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rp=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],_n);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new er(h),c.distance=u;break;case"spot":c=new Po(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},ap=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,i){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],_n),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},op=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},lp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(s)}},cp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},hp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},up=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],_n)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,yt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},dp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},pp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],_n),Promise.all(s)}},fp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},mp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(r[0],r[1],r[2],_n),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,yt)),Promise.all(s)}},gp=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},yp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let i=Xt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},vp=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},xp=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},_p=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},nh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,p=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,p,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,p,s.mode,s.filter),d})})}else return null}},Mp=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==jn.TRIANGLES&&c.mode!==jn.TRIANGLE_STRIP&&c.mode!==jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],p=c[0].count,d=[];for(let f of u){let m=new Le,x=new A,g=new Et,y=new A(1,1,1),_=new qi(f.geometry,f.material,p);for(let b=0;b<p;b++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,m.compose(x,g,y));for(let b in l)if(b==="_COLOR_0"){let S=l[b];_.instanceColor=new bs(S.array,S.itemSize,S.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&f.geometry.setAttribute(b,l[b]);At.prototype.copy.call(_,f),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},L0="glTF",Wo=12,R0={JSON:1313821514,BIN:5130562},bp=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==L0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wo,r=new DataView(e,Wo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===R0.JSON){let c=new Uint8Array(e,Wo+a,o);this.content=i.decode(c)}else if(l===R0.BIN){let c=Wo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Ap[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ap[h]||h.toLowerCase();if(a[h]!==void 0){let p=i.accessors[e.attributes[h]],d=Sa[p.componentType];c[u]=d.name,l[u]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,p){s.decodeDracoFile(h,function(d){for(let f in d.attributes){let m=d.attributes[f],x=l[f];x!==void 0&&(m.normalized=x)}u(d)},o,c,_n,p)})})}},Tp=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},wp=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},ih=class extends Ti{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(i-t)/h,p=u*u,d=p*u,f=e*c,m=f-c,x=-2*d+3*p,g=d-p,y=1-x,_=g-p+u;for(let b=0;b!==o;b++){let S=a[m+b+o],M=a[m+b+l]*h,w=a[f+b+o],U=a[f+b]*h;r[b]=y*S+_*M+x*w+g*U}return r}},gv=new Et,Ep=class extends ih{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return gv.fromArray(r).normalize().toArray(r),r}},jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},C0={9728:xn,9729:Kt,9984:Lc,9985:ua,9986:sr,9987:Ci},P0={33071:_i,33648:jr,10497:Wn},np={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ap={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yv={CUBICSPLINE:void 0,LINEAR:qs,STEP:js},ip={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vv(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),n.DefaultMaterial}function lr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ni(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xv(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let p=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(p)}if(s){let p=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(p)}if(r){let p=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],p=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=p),n.morphTargetsRelative=!0,n})}function _v(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mv(n){let e,t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sp(t.attributes):e=n.indices+":"+sp(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+sp(n.targets[i]);return e}function sp(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Rp(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bv(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Sv=new Le,Cp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new $i(this.options.manager):this.textureLoader=new Io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return lr(r,o,s),Ni(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=np[s.type],o=Sa[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new st(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=np[s.type],c=Sa[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,p=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,f=s.normalized===!0,m,x;if(d&&d!==u){let g=Math.floor(p/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,_=t.cache.get(y);_||(m=new c(o,g*d,s.count*d/h),_=new Zs(m,d/h),t.cache.add(y,_)),x=new vs(_,l,p%d/h,f)}else o===null?m=new c(s.count*l):m=new c(o,p,s.count*l),x=new st(m,l,f);if(s.sparse!==void 0){let g=np.SCALAR,y=Sa[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,S=new y(a[1],_,s.sparse.count*g),M=new c(a[2],b,s.sparse.count*l);o!==null&&(x=new st(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let w=0,U=S.length;w<U;w++){let z=S[w];if(x.setX(z,M[w*l]),l>=2&&x.setY(z,M[w*l+1]),l>=3&&x.setZ(z,M[w*l+2]),l>=4&&x.setW(z,M[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=f}return x})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let p=(r.samplers||{})[a.sampler]||{};return h.magFilter=C0[p.magFilter]||Kt,h.minFilter=C0[p.minFilter]||Ci,h.wrapS=P0[p.wrapS]||Wn,h.wrapT=P0[p.wrapT]||Wn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xn&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let p=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(p,d){let f=p;t.isImageBitmapLoader===!0&&(f=function(m){let x=new $t(m);x.needsUpdate=!0,p(x)}),t.load(Qi.resolveURL(u,r.path),f,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ni(u,a),u.userData.mimeType=a.mimeType||bv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ts,dn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ss,dn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Tt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let p=u.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],_n),o.opacity=p[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ct);let h=r.alphaMode||ip.OPAQUE;if(h===ip.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ip.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==rt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==rt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==rt){let u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],_n)}return r.emissiveTexture!==void 0&&a!==rt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&lr(s,u,r),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return I0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Mv(c),u=s[h];if(u)a.push(u.promise);else{let p;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?p=r(c):p=I0(new Ke,c,t),s[h]={primitive:c,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?vv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,f=h.length;d<f;d++){let m=h[d],x=a[d],g,y=c[d];if(x.mode===jn.TRIANGLES||x.mode===jn.TRIANGLE_STRIP||x.mode===jn.TRIANGLE_FAN||x.mode===void 0)g=r.isSkinnedMesh===!0?new co(m,y):new ce(m,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),x.mode===jn.TRIANGLE_STRIP?g.geometry=tp(g.geometry,Uo):x.mode===jn.TRIANGLE_FAN&&(g.geometry=tp(g.geometry,fa));else if(x.mode===jn.LINES)g=new Js(m,y);else if(x.mode===jn.LINE_STRIP)g=new Ks(m,y);else if(x.mode===jn.LINE_LOOP)g=new uo(m,y);else if(x.mode===jn.POINTS)g=new Mi(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&_v(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ni(g,r),x.extensions&&lr(s,g,x),t.assignFinalMaterial(g),u.push(g)}for(let d=0,f=u.length;d<f;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&lr(s,u[0],r),u[0];let p=new ot;r.extensions&&lr(s,p,r),t.associations.set(p,{meshes:e});for(let d=0,f=u.length;d<f;d++)p.add(u[d]);return p})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(Oo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Cs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ni(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let p=new Le;r!==null&&p.fromArray(r.array,c*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ho(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,p=s.channels.length;u<p;u++){let d=s.channels[u],f=s.samplers[d.sampler],m=d.target,x=m.node,g=s.parameters!==void 0?s.parameters[f.input]:f.input,y=s.parameters!==void 0?s.parameters[f.output]:f.output;m.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(f),h.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let p=u[0],d=u[1],f=u[2],m=u[3],x=u[4],g=[];for(let _=0,b=p.length;_<b;_++){let S=p[_],M=d[_],w=f[_],U=m[_],z=x[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let D=i._createAnimationTracks(S,M,w,U,z);if(D)for(let V=0;V<D.length;V++)g.push(D[V])}let y=new Rs(r,void 0,g);return Ni(y,s),y})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],p=c[2];p!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(p,Sv)});for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,f=u[0];h.pivot=new A().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],f.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ea:c.length>1?h=new ot:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,p=c.length;u<p;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ni(h,r),r.extensions&&lr(i,h,r),r.matrix!==void 0){let u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new ot;i.name&&(r.name=s.createUniqueName(i.name)),Ni(r,i),i.extensions&&lr(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let p=l[h];p.parent!==null?r.add(Vo(p)):r.add(p)}let c=h=>{let u=new Map;for(let[p,d]of s.associations)(p instanceof dn||p instanceof $t)&&u.set(p,d);return h.traverse(p=>{let d=s.associations.get(p);d!=null&&u.set(p,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Is[r.path]===Is.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Is[r.path]){case Is.weights:h=Ki;break;case Is.rotation:h=wi;break;case Is.translation:case Is.scale:h=Ji;break;default:i.itemSize===1?h=Ki:h=Ji;break}let u=s.interpolation!==void 0?yv[s.interpolation]:qs,p=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let m=new h(l[d]+"."+Is[r.path],t.array,p,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Rp(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof wi?Ep:ih;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Tv(n,e,t){let i=e.attributes,s=new ln;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),o.normalized){let h=Rp(Sa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new A,l=new A;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let p=t.json.accessors[u.POSITION],d=p.min,f=p.max;if(d!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(f[2]))),p.normalized){let m=Rp(Sa[p.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new Mn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function I0(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Ap[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return $e.workingColorSpace!==_n&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Ni(n,e),Tv(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?xv(n,e.targets,t):n})}var N0={W:1300,H:1473,hand:[.8929,.8561],poses:{back_stand:{uw:.633,uh:1.019,x:900,y:10,w:244,h:392},back_run:{uw:.573,uh:1.021,x:669,y:10,w:221,h:393},back_reach:{uw:.707,uh:.993,x:273,y:429,w:272,h:382},side_stand:{uw:.496,uh:1.063,x:10,y:10,w:191,h:409},side_run_a:{uw:.763,uh:.987,x:555,y:429,w:294,h:380},side_run_b:{uw:.537,uh:1.056,x:211,y:10,w:207,h:406},front_stand:{uw:.6,uh:1.027,x:428,y:10,w:231,h:395},front_run:{uw:.657,uh:1.001,x:10,y:429,w:253,h:386},front_hit:{uw:.773,uh:.897,x:10,y:825,w:298,h:345},back_fall:{uw:.683,uh:.809,x:849,y:825,w:263,h:311},back_climb:{uw:.553,uh:.963,x:859,y:429,w:213,h:371},flat_down:{uw:.97,uh:.444,x:330,y:1180,w:373,h:171},side_jump:{uw:.546,uh:.86,x:629,y:825,w:210,h:331},side_dash:{uw:.804,uh:.734,x:10,y:1180,w:310,h:283},side_throw:{uw:.781,uh:.891,x:318,y:825,w:301,h:343}}};var wv="assets/chars/",Ev=new URL(import.meta.url).search,fn={ready:!1,failed:!1,tex:null,kenney:{}},z0=["male-f"],is=fn;function U0(){return fn.loading||(fn.loading=new Promise(n=>new $i().load(`img/hero_atlas.webp${Ev}`,e=>{e.colorSpace=yt,e.anisotropy=4,fn.tex=e,fn.ready=!0,n(fn)},void 0,e=>{fn.failed=!0,console.warn("hero load failed",e),n(fn)}))),fn.loading}function O0(){if(fn.kenneyLoading)return fn.kenneyLoading;let n=new th;return fn.kenneyLoading=Promise.all(z0.map(e=>new Promise((t,i)=>n.load(`${wv}character-${e}.glb`,t,void 0,i)))).then(e=>e.forEach((t,i)=>{fn.kenney[z0[i]]={scene:t.scene,clips:t.animations},t.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.frustumCulled=!1)})})).catch(e=>console.warn("kenney load failed",e)),fn.kenneyLoading}var Xo=1.9,jo=.85,Ta=N0,sh=Ta.hand,Pp=Ta.poses,D0=(n,e,t)=>Math.max(e,Math.min(t,n)),Ip=null;function Av(){if(!Ip){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);t.addColorStop(0,"rgba(30,20,10,.55)"),t.addColorStop(1,"rgba(30,20,10,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ip=new si(n)}return new rt({map:Ip,transparent:!0,depthWrite:!1})}var qo=class{constructor(){this.group=new ot,this.tilt=new ot,this.group.add(this.tilt),this.pivot=new ot,this.pivot.position.y=jo,this.tilt.add(this.pivot);let e=new Rt(1,1).translate(0,.5,0);this.mat=new rt({map:fn.tex,transparent:!0,alphaTest:.35,side:ct,toneMapped:!1,color:16774888});let t=this.paper=new ce(e,this.mat);t.position.y=-jo,t.castShadow=!0,t.frustumCulled=!1,this.pivot.add(t),this.blob=new ce(new Rt(1.5,1.1),Av()),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.03,this.blob.renderOrder=1,this.group.add(this.blob),this.handWorld=new A,this._h=new A,this.key=null,this.view="back",this.side=1,this.flip=1,this.sx=1,this.phase=0,this.pop=0,this.rot=0,this.state="idle",this.t=0,this.setPose("back_stand")}setPose(e){if(e===this.key)return;this.key=e;let t=Pp[e],i=this.paper.geometry.attributes.uv,s=t.x/Ta.W,r=(t.x+t.w)/Ta.W,a=1-t.y/Ta.H,o=1-(t.y+t.h)/Ta.H;i.setXY(0,s,a),i.setXY(1,r,a),i.setXY(2,s,o),i.setXY(3,r,o),i.needsUpdate=!0}update(e,t,i){let s=this.group;this.t+=t,s.position.set(e.x,e.y,e.z);let r=i?i.position.x:e.x-Math.sin(e.yaw)*6,a=i?i.position.y:e.y+3,o=i?i.position.z:e.z-Math.cos(e.yaw)*6,l=Math.atan2(r-e.x,o-e.z);s.rotation.y=l;let c=Math.atan2(a-(e.y+.9),Math.hypot(r-e.x,o-e.z));this.tilt.rotation.x=-D0(c,-.5,1.2)*.6;let h=Math.hypot(e.vx,e.vz),u;e.wreck>0?u="down":e.climbing?u="climb":e.rope?u="swing":e.grounded?h>.6?u="run":u="idle":u="air",this.state==="air"&&(u==="run"||u==="idle")&&(this.pop=1),this.state=u;let p=e.yaw;u==="climb"&&(p=Math.atan2(-e.climbing.nx,-e.climbing.nz));let d=Math.sin(p),f=Math.cos(p),m=Math.cos(l),x=-Math.sin(l),g=d*Math.sin(l)+f*Math.cos(l),y=d*m+f*x;(this.view==="back"?g>-.3:this.view==="front"?g<.3:Math.abs(g)>.58)&&(this.view=g<-.45?"back":g>.45?"front":"side"),Math.abs(y)>.12&&(this.side=y>0?1:-1);let _,b=1,S=0,M=0;if(this.pop=Math.max(0,this.pop-t*6),u==="down")_="flat_down",b=this.side;else if(u==="climb")this.phase+=t*(h>.2||Math.abs(e.vy)>.2?8:0),_="back_climb",b=Math.sin(this.phase)>0?1:-1;else if(u==="swing"){_="back_reach";let G=e.rope.x-e.x,W=e.rope.y-(e.y+jo),K=e.rope.z-e.z,Z=G*m+K*x;Math.abs(Z)>.4&&(this.reachSide=Z>0?1:-1),b=this.reachSide||1;let ne=Pp.back_reach,ve=(sh[0]-.5)*ne.uw*Xo,Ce=sh[1]*ne.uh*Xo-jo,Te=Math.atan2(ve,Ce);M=-b*D0(Math.atan2(Z*b,Math.max(.3,W))-Te,-1.1,1.1)}else if(u==="air")e.stun>0?(this.phase+=t*14,_="front_hit",M=Math.sin(this.phase)*.9):this.view==="side"?(_="side_jump",b=this.side):this.view==="front"?_="front_run":_="back_fall";else if(u==="run"){this.phase+=t*Math.min(20,8+h*.8);let G=Math.sin(this.phase)>0;S=Math.abs(Math.sin(this.phase))*.1,this.view==="side"?(_=G?"side_run_a":"side_run_b",b=this.side,M=-this.side*Math.min(.14,h*.012)):(_=this.view==="front"?"front_run":"back_run",b=G?1:-1,M=Math.sin(this.phase)*.05)}else _=this.view==="side"?"side_stand":this.view==="front"?"front_stand":"back_stand",b=this.view==="side"?this.side:1,M=Math.sin(this.t*1.6)*.012;this.setPose(_),u==="run"&&this.view!=="side"?this.sx=b:u==="climb"?this.sx=b:this.sx+=(b-this.sx)*Math.min(1,t*18),this.flip=b;let w=1-Math.exp(-t*(u==="swing"?16:10));this.rot+=(M-this.rot)*w,this.pivot.rotation.z=this.rot;let U=Pp[_],z=this.paper,D=1-this.pop*.14,V=u==="idle"?1+Math.sin(this.t*2.2)*.012:1,B=Math.abs(this.sx)<.05?.05*(b||1):this.sx;z.scale.set(U.uw*Xo*B*(2-D),U.uh*Xo*D*V,1),z.position.y=-jo+S;let X=u==="run"||u==="idle"||u==="down";this.blob.visible=X,this.blob.scale.setScalar(u==="down"?1.5:1),s.updateMatrixWorld(!0),u==="swing"?this.handWorld.copy(this._h.set(sh[0]-.5,sh[1],0)).applyMatrix4(z.matrixWorld):this.handWorld.set(e.x,e.y+Xo*.7,e.z)}dispose(){this.paper.geometry.dispose(),this.mat.dispose(),this.blob.geometry.dispose(),this.blob.material.dispose()}};var mn={x0:-170,x1:170,z0:0,z1:540,ceil:180},Ls=15,cr={x:26,y:0,z:42,yaw:0},Ft={x:128,y:135,z:516,r:15},te={sofaBase:{x0:-170,x1:-100,y0:0,y1:32,z0:70,z1:220},sofaBack:{x0:-170,x1:-148,y0:32,y1:68,z0:70,z1:220},sofaArmN:{x0:-148,x1:-100,y0:32,y1:50,z0:70,z1:88},sofaArmS:{x0:-148,x1:-100,y0:32,y1:50,z0:202,z1:220},table:{x0:-70,x1:-10,y0:24,y1:28,z0:100,z1:170},chips:{x0:-56,x1:-34,y0:28,y1:52,z0:112,z1:130},amazon:{x0:-60,x1:-18,y0:0,y1:30,z0:18,z1:58},yogurt:{x0:48,x1:62,y0:0,y1:13,z0:30,z1:44},tvStand:{x0:125,x1:170,y0:0,y1:36,z0:80,z1:210},tv:{x0:150,x1:156,y0:36,y1:96,z0:100,z1:190},shelf:{x0:-170,x1:-132,y0:0,y1:135,z0:226,z1:306},curtain:{x0:160,x1:170,y0:4,y1:170,z0:320,z1:450},dining:{x0:-120,x1:-20,y0:50,y1:54,z0:310,z1:380},tissue:{x0:-82,x1:-56,y0:54,y1:68,z0:330,z1:346},chairSeat:{x0:-62,x1:-30,y0:33,y1:36,z0:386,z1:416},chairBack:{x0:-62,x1:-30,y0:36,y1:72,z0:413,z1:416},pendantA:{x0:-82,x1:-58,y0:100,y1:118,z0:333,z1:357},pendantB:{x0:52,x1:72,y0:96,y1:112,z0:292,z1:312},server:{x0:-166,x1:-136,y0:0,y1:100,z0:430,z1:462},counter:{x0:-170,x1:104,y0:0,y1:64,z0:490,z1:540},upper:{x0:-170,x1:104,y0:106,y1:150,z0:516,z1:540},cooker:{x0:-34,x1:-8,y0:64,y1:84,z0:496,z1:518},micro:{x0:40,x1:86,y0:64,y1:92,z0:494,z1:528},fridge:{x0:104,x1:170,y0:0,y1:135,z0:474,z1:540,slip:.34},lampShade:{x0:-52,x1:-28,y0:104,y1:124,z0:228,z1:252},hangBar:{x0:72,x1:112,y0:146,y1:150,z0:118,z1:122},hangL:{x0:70,x1:74,y0:0,y1:146,z0:116,z1:124},hangR:{x0:110,x1:114,y0:0,y1:146,z0:116,z1:124},rackRail:{x0:78,x1:130,y0:98,y1:102,z0:262,z1:278},rackL:{x0:78,x1:81,y0:0,y1:98,z0:268,z1:272},rackR:{x0:127,x1:130,y0:0,y1:98,z0:268,z1:272},ladderTop:{x0:62,x1:92,y0:104,y1:110,z0:404,z1:426},ladderA:{x0:62,x1:66,y0:0,y1:104,z0:396,z1:434},ladderB:{x0:88,x1:92,y0:0,y1:104,z0:396,z1:434},pot:{x0:112,x1:136,y0:0,y1:22,z0:20,z1:44},dumbbell:{x0:-96,x1:-66,y0:0,y1:9,z0:268,z1:284},golf:{x0:60,x1:74,y0:0,y1:66,z0:72,z1:86},towerBase:{x0:38,x1:64,y0:0,y1:4,z0:192,z1:218},towerPost:{x0:47,x1:55,y0:4,y1:108,z0:201,z1:209},towerMid:{x0:40,x1:62,y0:58,y1:62,z0:194,z1:216},towerTop:{x0:38,x1:64,y0:108,y1:112,z0:192,z1:218},ironBoard:{x0:36,x1:80,y0:56,y1:59,z0:334,z1:350},ironLegA:{x0:44,x1:47,y0:0,y1:56,z0:336,z1:348},ironLegB:{x0:69,x1:72,y0:0,y1:56,z0:336,z1:348},fridgeBox:{x0:146,x1:170,y0:135,y1:166,z0:478,z1:506}},rh=[27,54,81,108],Rv={x0:-132,x1:-125,z0:226,z1:306},F0=[{x:-128,y:74,z:72,ry:-Math.PI/2},{x:-131,y:142,z:300,ry:Math.PI/2},{x:158,y:175,z:400,ry:-Math.PI/2}],ss=[{key:"sofa",x:-158,y:68,z:150,r:34},{key:"shelf",x:-150,y:135,z:268,r:34},{key:"curtain",x:165,y:170,z:390,r:40},{key:"exit",x:Ft.x,y:Ft.y,z:Ft.z,r:Ft.r}],ah=[{id:"coin",x:42,y:0,z:182,r:7},{id:"glasses",x:-124,y:50,z:211,r:7},{id:"hesokuri",x:-128,y:81,z:266,r:6},{id:"dvd",x:138,y:36,z:140,r:7},{id:"ring",x:-60,y:54,z:370,r:6},{id:"chip",x:-24,y:28,z:150,r:7,heal:!0}],oh=[{id:"a",x:96,y:0,z:66},{id:"b",x:-120,y:32,z:150},{id:"c",x:8,y:0,z:296},{id:"f",x:-144,y:135,z:234},{id:"d",x:-92,y:54,z:362},{id:"e",x:118,y:0,z:438}],B0=[{x:-124,y:32,z:145,w:16,l:50},{x:-159,y:68,z:145,w:6,l:66},{x:-40,y:28,z:135,w:20,l:25},{x:147,y:36,z:95,w:14,l:10},{x:-151,y:135,z:266,w:12,l:32},{x:-70,y:54,z:360,w:40,l:14},{x:-46,y:36,z:400,w:10,l:10},{x:51,y:112,z:205,w:10,l:10},{x:58,y:59,z:342,w:14,l:4},{x:0,y:64,z:505,w:90,l:10},{x:77,y:110,z:415,w:10,l:6},{x:-151,y:100,z:446,w:10,l:10},{x:-40,y:150,z:528,w:90,l:7}],li={y:160,z:305},Yo={x:-30,y:172,z:165},Zo={x:60,y:172,z:440},Cv=[[72,120,[40,70,100,130,148]],[112,120,[40,70,100,130,148]],[92,120,[148]],[-40,240,[40,70,100,122]],[80,270,[40,70,98]],[128,270,[40,70,98]],[104,270,[98]],[62,302,[96]],[-70,345,[100]],[124,32,[36,60,80]],[100,62,[24,50]],[64,415,[40,70,104]],[90,415,[40,70,104]],[-40,20,[36,60]],[-120,10,[45]],[67,79,[40,64]],[51,205,[40,75,108]],[58,342,[56]],[14,480,[40]],...[-150,-120,-90,-60,-30,0,30,60,90,120,150].map(n=>[n,li.z,[li.y]]),[Yo.x,Yo.z,[Yo.y]],[Zo.x,Zo.z,[Zo.y]]];function Lp(n,e={}){return{cx:(n.x0+n.x1)/2,cz:(n.z0+n.z1)/2,hw:(n.x1-n.x0)/2,hl:(n.z1-n.z0)/2,yaw:0,y0:n.y0,y1:n.y1,kind:"building",small:!0,slip:n.slip,...e}}function Pv(){let e=new Map,t=(i,s)=>i*4096+s;return{add(i,s,r,a,o){for(let l=Math.floor(s/40);l<=Math.floor(a/40);l++)for(let c=Math.floor(r/40);c<=Math.floor(o/40);c++){let h=t(l,c);e.has(h)||e.set(h,[]),e.get(h).push(i)}},at(i,s){return e.get(t(Math.floor(i/40),Math.floor(s/40)))||Iv}}}var Iv=[];function k0(){let n=[],e=Pv(),t=o=>{n.push(o),e.add(o,o.cx-o.hw-1,o.cz-o.hl-1,o.cx+o.hw+1,o.cz+o.hl+1)};for(let o in te)t(Lp(te[o],{name:o,...o==="dumbbell"||o==="yogurt"?{noAnchor:!0}:{}}));for(let o of rh)t(Lp({...Rv,y0:o-2,y1:o},{name:"ledge",oneWay:!0,noAnchor:!0}));let i=mn,s=30,r=i.ceil;for(let o of[{x0:i.x0-s,x1:i.x0,z0:i.z0-s,z1:i.z1+s},{x0:i.x1,x1:i.x1+s,z0:i.z0-s,z1:i.z1+s},{x0:i.x0-s,x1:i.x1+s,z0:i.z0-s,z1:i.z0},{x0:i.x0-s,x1:i.x1+s,z0:i.z1,z1:i.z1+s}])t(Lp({...o,y0:0,y1:r},{kind:"bound",noClimb:!0,name:"wall"}));let a=[];for(let[o,l,c]of Cv)for(let h of c)a.push({x:o,z:l,y0:Math.max(0,h-8),y1:h+.4});return{colliders:n,poles:a,bounds:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1},ceilY:i.ceil,nearby:(o,l)=>e.at(o,l),groundAt:()=>({h:0,surf:"floor",slab:null}),surfaceAt:()=>"floor"}}function hr(n,e,t,i){let s=0;for(let r of n.nearby(e,t))r.noHit||r.kind==="bound"||r.y1>i+.6||r.y1<=s||Math.abs(e-r.cx)<=r.hw&&Math.abs(t-r.cz)<=r.hl&&(s=r.y1);return s}function lh(n,e,t,i,s=7){if(e<mn.x0+i||e>mn.x1-i||t<mn.z0+i||t>mn.z1-i)return!0;for(let r of n.nearby(e,t))if(!(r.noHit||r.kind==="bound"||r.oneWay||r.y0>s)&&Math.abs(e-r.cx)<r.hw+i&&Math.abs(t-r.cz)<r.hl+i)return!0;return!1}var Np=(n,e,t)=>n<e?e:n>t?t:n,H0=11,_e=()=>(H0=H0*16807%2147483647)/2147483647;function it(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new si(s);return r.colorSpace=i.linear?ns:yt,r.anisotropy=4,i.repeat&&(r.wrapS=r.wrapT=Wn),r}function G0(n,e,t,i,s,r,a=4){n.fillStyle=i,n.fillRect(0,0,e,t);for(let o=0;o<t;o+=a)for(let l=0;l<e;l+=a){let c=_e();n.fillStyle=c<.5?s:r,n.globalAlpha=.06+c*.14,n.fillRect(l,o,(l+o)%(a*2)?a-1:1,(l+o)%(a*2)?1:a-1)}n.globalAlpha=1}var zi={floor(){return it(1024,1024,(n,e,t)=>{let s=t/8;for(let r=0;r<8;r++){let a=-_e()*500;for(;a<e;){let o=380+_e()*340,l=150+_e()*36;n.fillStyle=`rgb(${l+34},${l-2},${l-48})`,n.fillRect(a,r*s,o,s);for(let c=0;c<16;c++){n.strokeStyle=`rgba(70,40,14,${.04+_e()*.1})`,n.lineWidth=.6+_e()*1.6;let h=r*s+_e()*s;n.beginPath(),n.moveTo(a,h),n.bezierCurveTo(a+o*.3,h+(_e()-.5)*18,a+o*.7,h+(_e()-.5)*18,a+o,h+(_e()-.5)*10),n.stroke()}n.fillStyle="rgba(30,16,6,.85)",n.fillRect(a+o-1.5,r*s,3,s),a+=o}n.fillStyle="rgba(30,16,6,.85)",n.fillRect(0,r*s-1.5,e,3)}},{repeat:!0})},wall(){return it(512,512,(n,e,t)=>{n.fillStyle="#e9e1cf",n.fillRect(0,0,e,t);for(let i=0;i<2600;i++)n.fillStyle=_e()<.5?"rgba(120,100,70,.05)":"rgba(255,255,255,.1)",n.fillRect(_e()*e,_e()*t,1+_e()*3,1+_e()*3);for(let i=0;i<8;i++)n.fillStyle="rgba(120,100,70,.035)",n.fillRect(i*64,0,2,t)},{repeat:!0})},ceil(){return it(256,256,(n,e,t)=>{n.fillStyle="#efe9db",n.fillRect(0,0,e,t);for(let i=0;i<900;i++)n.fillStyle="rgba(110,90,60,.06)",n.fillRect(_e()*e,_e()*t,2,2)},{repeat:!0})},sofa(){return it(512,512,(n,e,t)=>G0(n,e,t,"#a98f63","#5b4526","#e0cfa6",6),{repeat:!0})},rug(){return it(1024,768,(n,e,t)=>{n.fillStyle="#7c2f2a",n.fillRect(0,0,e,t),n.strokeStyle="#d9b676",n.lineWidth=18,n.strokeRect(40,40,e-80,t-80),n.strokeStyle="#1f3442",n.lineWidth=8,n.strokeRect(72,72,e-144,t-144);for(let i=0;i<6;i++)for(let s=0;s<8;s++){let r=140+s*106,a=140+i*98;n.fillStyle=(s+i)%2?"#d9b676":"#1f3442",n.beginPath(),n.moveTo(r,a-34),n.lineTo(r+34,a),n.lineTo(r,a+34),n.lineTo(r-34,a),n.closePath(),n.fill(),n.fillStyle="#7c2f2a",n.beginPath(),n.arc(r,a,11,0,7),n.fill()}for(let i=0;i<16e3;i++)n.fillStyle=_e()<.5?"rgba(0,0,0,.09)":"rgba(255,240,210,.05)",n.fillRect(_e()*e,_e()*t,2,4)})},dark(){return it(512,512,(n,e,t)=>{n.fillStyle="#50331f",n.fillRect(0,0,e,t);for(let i=0;i<90;i++){n.strokeStyle=`rgba(22,10,4,${.08+_e()*.2})`,n.lineWidth=.6+_e()*1.6;let s=_e()*t;n.beginPath(),n.moveTo(0,s),n.bezierCurveTo(e*.3,s+(_e()-.5)*24,e*.7,s+(_e()-.5)*24,e,s),n.stroke()}},{repeat:!0})},light(){return it(512,512,(n,e,t)=>{n.fillStyle="#c9a877",n.fillRect(0,0,e,t);for(let i=0;i<80;i++){n.strokeStyle=`rgba(90,56,20,${.06+_e()*.16})`,n.lineWidth=.6+_e()*1.6;let s=_e()*t;n.beginPath(),n.moveTo(0,s),n.bezierCurveTo(e*.3,s+(_e()-.5)*24,e*.7,s+(_e()-.5)*24,e,s),n.stroke()}},{repeat:!0})},kitchen(){return it(512,512,(n,e,t)=>{n.fillStyle="#e7dfca",n.fillRect(0,0,e,t);for(let i=0;i<1400;i++)n.fillStyle="rgba(120,100,60,.05)",n.fillRect(_e()*e,_e()*t,2,2)},{repeat:!0})},card(){return it(512,512,(n,e,t)=>{n.fillStyle="#bb8f5c",n.fillRect(0,0,e,t);for(let i=0;i<90;i++)n.fillStyle="rgba(96,62,28,.16)",n.fillRect(0,i*6+_e()*2,e,1.2);for(let i=0;i<700;i++)n.fillStyle="rgba(70,40,14,.1)",n.fillRect(_e()*e,_e()*t,3,1)},{repeat:!0})},curtain(){return it(512,512,(n,e,t)=>{G0(n,e,t,"#5f7b66","#2f4536","#a7c2ac",4),n.globalAlpha=.28,n.fillStyle="#e4d9b7";for(let i=0;i<26;i++){let s=_e()*e,r=_e()*t;for(let a=0;a<5;a++)n.beginPath(),n.ellipse(s+Math.cos(a*1.26)*12,r+Math.sin(a*1.26)*12,9,6,a*1.26,0,7),n.fill()}n.globalAlpha=1},{repeat:!0})}};function ke(n,e,t,i,s,r,a=1.2,o=2,l=.02){let c=e-n,h=i-t,u=r-s;a=Math.min(a,c/2-.01,h/2-.01,u/2-.01);let p=new Wt(c,h,u,o*2+1,o*2+1,o*2+1),d=p.attributes.position,f=p.attributes.normal,m=p.attributes.uv,x=c/2-a,g=h/2-a,y=u/2-a;for(let _=0;_<d.count;_++){let b=o*2+1,S=(Ae,oe,ye)=>{let fe=(Math.abs(Ae)/oe*b-1)/2;return Math.sign(Ae)*(ye+fe/o*(oe-ye))},M=S(d.getX(_),c/2,x),w=S(d.getY(_),h/2,g),U=S(d.getZ(_),u/2,y),z=Np(M,-x,x),D=Np(w,-g,g),V=Np(U,-y,y),B=M-z,X=w-D,G=U-V,W=Math.hypot(B,X,G)||1;B/=W,X/=W,G/=W,d.setXYZ(_,z+B*a,D+X*a,V+G*a),f.setXYZ(_,B,X,G);let K=d.getX(_)+(n+e)/2,Z=d.getY(_)+(t+i)/2,ne=d.getZ(_)+(s+r)/2,ve=Math.abs(f.getX(_)),Ce=Math.abs(f.getY(_)),Te=Math.abs(f.getZ(_));Ce>=ve&&Ce>=Te?m.setXY(_,K*l,ne*l):ve>=Te?m.setXY(_,ne*l,Z*l):m.setXY(_,K*l,Z*l)}return p.translate((n+e)/2,(t+i)/2,(s+r)/2),p}var Lt=(n,e,t)=>ke(n.x0,n.x1,n.y0,n.y1,n.z0,n.z1,e,2,t);function at(n,e,t,i,s,r,a=16,o=null){let l=new It(n,e,t,a);o&&l.applyMatrix4(new Le().makeRotationFromEuler(new Tn(...o))),l.translate(i,s,r);let c=l.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,c.getX(h)*2,c.getY(h));return l}function Lv(n){return n.index?n.toNonIndexed():n}function V0(n,e){let t=new Map,i={},s=(v,E)=>i[v]||(i[v]=new Tt({roughness:.8,metalness:0,...E})),r=(v,E)=>{t.has(v)||t.set(v,[]),t.get(v).push(Lv(E))},a=(v,E,I,k,J,se,ge,be={})=>{let Re=new ce(new Rt(v,E),new Tt({map:ge,roughness:be.rough??.75,transparent:!!be.alpha,emissive:be.em?16777215:0,emissiveMap:be.em?ge:null,emissiveIntensity:be.em||0,side:be.side??Ai,depthWrite:!be.alpha}));return Re.position.set(I,k,J),Re.rotation.y=se,Re.receiveShadow=!be.em,be.rx&&(Re.rotation.x=be.rx),n.add(Re),Re},o=mn,l=o.ceil,c=s("floor",{map:zi.floor(),roughness:.42});c.map.repeat.set(1/92,1/92);let h=s("wall",{map:zi.wall(),roughness:.95}),u=s("ceil",{map:zi.ceil(),roughness:1}),p=s("sofa",{map:zi.sofa(),roughness:.98}),d=s("dark",{map:zi.dark(),roughness:.55}),f=s("light",{map:zi.light(),roughness:.58}),m=s("kit",{map:zi.kitchen(),roughness:.45}),x=s("card",{map:zi.card(),roughness:.95}),g=s("curt",{map:zi.curtain(),roughness:1,side:ct}),y=s("white",{color:15855592,roughness:.32}),_=s("steel",{color:12370630,metalness:.75,roughness:.32}),b=s("black",{color:1776671,roughness:.35}),S=s("plas",{color:14209471,roughness:.5}),M=s("gold",{color:13212219,metalness:.75,roughness:.3}),w=s("pot",{color:10246714,roughness:.85}),U=s("leaf",{color:3630650,roughness:.65,side:ct}),z=new rt({color:16771519,fog:!1}),D=new ce(new Rt(o.x1-o.x0,o.z1-o.z0+80),c);D.rotation.x=-Math.PI/2,D.position.set(0,0,(o.z0+o.z1)/2-40),D.receiveShadow=!0,n.add(D);{let v=D.geometry.attributes.uv,E=D.geometry.attributes.position;for(let I=0;I<v.count;I++)v.setXY(I,E.getX(I),E.getY(I))}let V=new ce(new Rt(o.x1-o.x0,o.z1-o.z0),u);V.rotation.x=Math.PI/2,V.position.set(0,l,(o.z0+o.z1)/2);{let v=V.geometry.attributes.uv,E=V.geometry.attributes.position;for(let I=0;I<v.count;I++)v.setXY(I,E.getX(I)*.01,E.getY(I)*.01)}n.add(V);let B=.012,X=(v,E,I,k,J=0,se=l)=>r(h,ke(v,E,J,se,I,k,.01,1,B));X(o.x0-6,o.x0,0,o.z1),X(o.x0,o.x1,o.z1,o.z1+6);let G={z0:330,z1:440,y0:40,y1:150};X(o.x1,o.x1+6,0,G.z0),X(o.x1,o.x1+6,G.z1,o.z1),X(o.x1,o.x1+6,G.z0,G.z1,0,G.y0),X(o.x1,o.x1+6,G.z0,G.z1,G.y1,l);let W={x0:Ls-38,x1:Ls+38,y1:150};X(o.x0,W.x0,-6,0),X(W.x1,o.x1,-6,0),X(W.x0,W.x1,-6,0,W.y1,l),r(f,ke(W.x0-4,W.x0,0,W.y1+4,-7,1,.5)),r(f,ke(W.x1,W.x1+4,0,W.y1+4,-7,1,.5)),r(f,ke(W.x0-4,W.x1+4,W.y1,W.y1+4,-7,1,.5));let K=new ce(new Rt(140,l),new rt({color:9404262,fog:!1}));K.position.set(Ls,l/2,-90),n.add(K);let Z=new ce(new Rt(140,100),new rt({color:6967864}));Z.rotation.x=-Math.PI/2,Z.position.set(Ls,.02,-45),n.add(Z);for(let[v,E,I,k]of[[o.x0,o.x0+1.4,0,o.z1],[o.x1-1.4,o.x1,0,o.z1],[o.x0,W.x0,0,1.4],[W.x1,o.x1,0,1.4]])r(f,ke(v,E,0,7,I,k,.2,1));let ne=it(128,192,(v,E,I)=>{v.fillStyle="#ece6d4",v.fillRect(0,0,E,I),v.strokeStyle="#a79e87",v.lineWidth=5,v.strokeRect(6,6,E-12,I-12),v.fillStyle="#26221c";for(let k of[52,128])v.fillRect(38,k,11,28),v.fillRect(79,k,11,28)});a(11,16,o.x0+.2,16,245,Math.PI/2,ne),a(11,16,-40,16,.2,0,ne),a(11,16,o.x1-.2,16,60,-Math.PI/2,ne);let ve=it(256,256,(v,E,I)=>{let k=v.createLinearGradient(0,0,0,I);k.addColorStop(0,"#cfe6f6"),k.addColorStop(.75,"#fdf6df"),k.addColorStop(1,"#a8b88f"),v.fillStyle=k,v.fillRect(0,0,E,I),v.fillStyle="rgba(70,84,70,.6)",v.fillRect(0,I*.82,E,I),v.fillStyle="rgba(255,255,255,.7)";for(let J=0;J<5;J++)v.beginPath(),v.ellipse(_e()*E,_e()*I*.5,26+_e()*30,8+_e()*6,0,0,7),v.fill()}),Ce=new ce(new Rt(G.z1-G.z0,G.y1-G.y0),new rt({map:ve,fog:!1}));Ce.rotation.y=-Math.PI/2,Ce.position.set(o.x1+5,(G.y0+G.y1)/2,(G.z0+G.z1)/2),n.add(Ce),r(S,ke(o.x1-1,o.x1+3,G.y0-2,G.y0,G.z0,G.z1,.3)),r(S,ke(o.x1-1,o.x1+3,G.y1,G.y1+2,G.z0,G.z1,.3)),r(S,ke(o.x1-1,o.x1+3,G.y0,G.y1,(G.z0+G.z1)/2-1,(G.z0+G.z1)/2+1,.3));let Te=(v,E)=>{let I=E-v,k=new Rt(I,te.curtain.y1-te.curtain.y0,72,10),J=k.attributes.position,se=k.attributes.uv;for(let ge=0;ge<J.count;ge++){let be=J.getX(ge),Re=J.getY(ge),De=3.2+.7*Math.sin(Re*.03),nt=Math.sin(be/I*Math.PI*24+Math.sin(Re*.02)*.5)*De;J.setXYZ(ge,te.curtain.x0+2+nt,(te.curtain.y0+te.curtain.y1)/2+Re,(v+E)/2+be),se.setXY(ge,be*.02,Re*.02)}return k.computeVertexNormals(),k};r(g,Te(te.curtain.z0,368)),r(g,Te(402,te.curtain.z1)),r(_,at(1.4,1.4,te.curtain.z1-te.curtain.z0+20,164,171,(te.curtain.z0+te.curtain.z1)/2,10,[Math.PI/2,0,0]));let Ae=new ce(new Rt(34,166),new Tt({color:16184296,transparent:!0,opacity:.55,side:ct,roughness:1,depthWrite:!1}));Ae.rotation.y=-Math.PI/2,Ae.position.set(162,87,385),n.add(Ae),r(p,Lt(te.sofaBase,3)),r(p,Lt(te.sofaBack,5)),r(p,Lt(te.sofaArmN,5)),r(p,Lt(te.sofaArmS,5));for(let v=0;v<3;v++){let E=88+v*38.6,I=E+37.4;r(p,ke(-148,-99,30,37,E,I,3.2)),r(p,ke(-149,-138,36,67,E+.5,I-.5,4.2))}{let v=s("sofapipe",{color:8021313,roughness:1});r(v,ke(-100.6,-99.6,22,23.2,70,220,.4,1)),r(v,ke(-100.6,-99.6,3,4.2,70,220,.4,1));for(let E of[88,126.6,165.2,202])r(v,ke(-100.6,-99.6,4,30,E-.3,E+.3,.1,1))}r(s("pen",{color:2708645,roughness:.3}),at(.9,.9,22,-112,37.6,123,8,[Math.PI/2-.1,0,0]));let oe=s("blanket",{map:it(256,256,(v,E,I)=>{v.fillStyle="#b5524a",v.fillRect(0,0,E,I),v.strokeStyle="#eddcae",v.lineWidth=7;for(let k=0;k<6;k++)v.beginPath(),v.moveTo(0,k*44+16),v.lineTo(E,k*44+16),v.moveTo(k*44+16,0),v.lineTo(k*44+16,I),v.stroke()},{repeat:!0}),roughness:1});r(oe,ke(-137,-100,37,38.4,158,192,.5,1,.03)),r(oe,ke(-100.8,-99.4,12,38,158,192,.5,1,.03)),r(f,Lt(te.table,.8));for(let[v,E]of[[te.table.x0+3,te.table.z0+3],[te.table.x1-3,te.table.z0+3],[te.table.x0+3,te.table.z1-3],[te.table.x1-3,te.table.z1-3]])r(f,at(2.2,1.6,24,v,12,E,10));let ye=it(256,280,(v,E,I)=>{let k=v.createLinearGradient(0,0,0,I);k.addColorStop(0,"#e2b52c"),k.addColorStop(1,"#c6722a"),v.fillStyle=k,v.fillRect(0,0,E,I),v.fillStyle="#7a1e14",v.font='bold 64px "BIZ UDPGothic",sans-serif',v.textAlign="center",v.fillText("うす塩",E/2,96),v.font='bold 26px "BIZ UDPGothic",sans-serif',v.fillText("おとん用 食べるな",E/2,144),v.fillStyle="rgba(255,240,180,.9)";for(let J=0;J<7;J++)v.beginPath(),v.ellipse(50+J*30,210+J%2*22,26,16,J,0,7),v.fill()}),fe=s("chips",{map:ye,roughness:.35,metalness:.2});{let v=ke(te.chips.x0,te.chips.x1,te.chips.y0,te.chips.y1,te.chips.z0,te.chips.z1,3.5,3,0),E=v.attributes.uv,I=v.attributes.position,k=v.attributes.normal;for(let J=0;J<E.count;J++){E.setXY(J,(I.getX(J)-te.chips.x0)/(te.chips.x1-te.chips.x0),(I.getY(J)-te.chips.y0)/(te.chips.y1-te.chips.y0));let se=1+.22*Math.sin((I.getY(J)-te.chips.y0)/24*Math.PI),ge=(te.chips.z0+te.chips.z1)/2;I.setZ(J,ge+(I.getZ(J)-ge)*se)}r(fe,v)}r(b,ke(-24,-14,28,30.4,112,136,.7,1));for(let v=0;v<12;v++)r(s("btn",{color:12105908,roughness:.5}),ke(-23+v%3*3,-21.6+v%3*3,30.3,30.7,115+Math.floor(v/3)*4.4,117+Math.floor(v/3)*4.4,.2,1));r(x,Lt(te.amazon,.6,.012)),r(s("tape",{color:13151608,roughness:.3}),ke(te.amazon.x0-.1,te.amazon.x1+.1,te.amazon.y1-.05,te.amazon.y1+.18,34,42,.05,1)),a(26,16,-39,16,te.amazon.z1+.15,Math.PI,it(260,160,(v,E,I)=>{v.fillStyle="#fff",v.fillRect(0,0,E,I),v.fillStyle="#222",v.font='bold 22px "BIZ UDPGothic",sans-serif',v.fillText("お届け先",12,30),v.font='19px "BIZ UDPGothic",sans-serif',v.fillText("おかん様",12,62),v.fillText("品名: 健康マット",12,90),v.fillText("4枚目",12,118)}));let we=(te.yogurt.x0+te.yogurt.x1)/2,Ve=(te.yogurt.z0+te.yogurt.z1)/2,re=it(512,200,(v,E,I)=>{v.fillStyle="#f7f2e6",v.fillRect(0,0,E,I),v.fillStyle="#2f6d9e",v.fillRect(0,0,E,44),v.fillStyle="#fff",v.font='bold 30px "BIZ UDPGothic",sans-serif',v.fillText("プレーン ヨーグルト",40,33),v.fillStyle="#b5271a",v.font='bold 40px "BIZ UDPGothic",sans-serif',v.fillText("賞味期限 2019.03",60,118),v.fillStyle="#333",v.font='22px "BIZ UDPGothic",sans-serif',v.fillText("おいしく食べられる期限です",60,158)}),N=new ce(new It(9,7,13,28,1,!0),new Tt({map:re,side:ct,roughness:.45}));N.position.set(we,6.5,Ve),N.rotation.y=1.2,N.castShadow=!0,n.add(N);let R=new ce(new ri(7,20),s("yb",{color:16117988}));R.rotation.x=-Math.PI/2,R.position.set(we,.5,Ve),n.add(R),r(_,ke(66,96,.3,1.2,36,39,.3,1));{let v=new lt(5,14,8).scale(1.25,.26,.85).translate(100,1.4,37.5);r(_,v)}r(d,Lt(te.tvStand,.8,.012));for(let v=0;v<3;v++)r(s("tvdoor",{color:3810583,roughness:.4}),ke(124.4,125.2,4,32,84+v*41.5,124+v*41.5,.2,1));r(b,Lt(te.tv,1)),r(b,ke(146,160,36,38,130,160,.5));let L=it(512,300,(v,E,I)=>{let k=v.createLinearGradient(0,0,E,I);k.addColorStop(0,"#2d6fa6"),k.addColorStop(1,"#8ad0dc"),v.fillStyle=k,v.fillRect(0,0,E,I),v.fillStyle="#c63c28",v.fillRect(0,I-74,E,74),v.fillStyle="#fff",v.font='bold 34px "BIZ UDPGothic",sans-serif',v.fillText("今日の特集 実家の冷蔵庫",18,I-26),v.font='bold 50px "BIZ UDPGothic",sans-serif',v.fillText("賞味期限は",24,80),v.fillText("飾りなのか",24,142),v.fillStyle="rgba(255,255,255,.9)",v.beginPath(),v.ellipse(404,150,62,70,0,0,7),v.fill(),v.fillStyle="#23262d",v.beginPath(),v.arc(380,130,7,0,7),v.arc(428,130,7,0,7),v.fill(),v.fillRect(388,172,34,5)});a(te.tv.z1-te.tv.z0-4,te.tv.y1-te.tv.y0-4,te.tv.x0-.15,(te.tv.y0+te.tv.y1)/2,(te.tv.z0+te.tv.z1)/2,-Math.PI/2,L,{em:.9,rough:.2});let O=te.shelf;r(d,ke(O.x0,O.x1,O.y0,O.y1,O.z0,O.z0+3,.5,1,.012)),r(d,ke(O.x0,O.x1,O.y0,O.y1,O.z1-3,O.z1,.5,1,.012)),r(d,ke(O.x0,O.x1-4,O.y0,O.y1,O.z0,O.z1,.5,1,.012)),r(d,ke(O.x0,O.x1+3,O.y1-2,O.y1,O.z0-1,O.z1+1,.5,1,.012));for(let v of[0,...rh])r(d,ke(O.x1-4,O.x1+7,v===0?0:v-2,v===0?4:v,O.z0,O.z1,.4,1,.012));let T=["実家の片づけ方","痩せる呼吸","確定申告の本","嫁と姑","男の料理","釣り入門","家庭の医学","毒舌占い","腰痛を治す","英会話三日目","定年のあとに","健康マット教本","宇宙人と結婚した","人生の棚卸し","老眼と生きる","電話の断り方","世界の猫","猫の気持ち","おとんの俳句","節約大全","町内会の掟","聖書","株で失敗","ムー","地図帳"],H=["#7a2e24","#27456b","#2f5b3c","#b5923f","#ddd4bd","#3b3a3f","#8d5a2e","#5b2e55","#c9c0a9","#46708a","#a3412f"],F=it(1024,256,(v,E,I)=>{v.fillStyle="#20140c",v.fillRect(0,0,E,I);let k=0;for(;k<E;){let J=26+_e()*26,se=I*(.72+_e()*.28),ge=H[Math.floor(_e()*H.length)];v.fillStyle=ge,v.fillRect(k,I-se,J-1.5,se),v.fillStyle="rgba(0,0,0,.2)",v.fillRect(k+J-5,I-se,3.5,se),v.fillStyle="rgba(255,255,255,.1)",v.fillRect(k,I-se,3,se);let be=T[Math.floor(_e()*T.length)];v.fillStyle=ge==="#ddd4bd"||ge==="#c9c0a9"||ge==="#b5923f"?"#1f1812":"#f2ead7",v.font=`bold ${Math.min(21,J*.62)}px "BIZ UDPGothic",sans-serif`,v.textAlign="center";for(let Re=0;Re<be.length&&(Re+1)*21<se-8;Re++)v.fillText(be[Re],k+J/2,I-se+26+Re*21);k+=J}});F.wrapS=Wn;let P=[0,...rh];for(let v=0;v<P.length;v++){let E=P[v]+2,I=(P[v+1]??O.y1-2)-2,k=F.clone();k.repeat.set(1,1),k.offset.x=v*.27,k.needsUpdate=!0,a(O.z1-O.z0-6,I-E,O.x1-3.9,(E+I)/2,(O.z0+O.z1)/2,Math.PI/2,k,{rough:.7})}r(x,ke(-168,-146,135,150,280,304,.5,1,.012));{let v=s("kokeshi",{color:14795407,roughness:.6});r(v,at(4,5.6,14,-142,142,235,12));let E=new lt(5,12,10).translate(-142,153,235);r(v,E);let I=new lt(5.2,12,8,0,Math.PI*2,0,1.6).translate(-142,153.4,235);r(b,I)}r(f,Lt(te.dining,.8));for(let[v,E]of[[te.dining.x0+5,te.dining.z0+5],[te.dining.x1-5,te.dining.z0+5],[te.dining.x0+5,te.dining.z1-5],[te.dining.x1-5,te.dining.z1-5]])r(f,at(2.4,1.8,50,v,25,E,10));a(te.tissue.x1-te.tissue.x0,te.tissue.y1-te.tissue.y0,(te.tissue.x0+te.tissue.x1)/2,(te.tissue.y0+te.tissue.y1)/2,te.tissue.z1+.1,0,it(256,140,(v,E,I)=>{v.fillStyle="#e8d8cc",v.fillRect(0,0,E,I),v.fillStyle="#b25f72";for(let k=0;k<12;k++)v.beginPath(),v.arc(_e()*E,_e()*I,7+_e()*8,0,7),v.fill();v.fillStyle="#433",v.font='bold 28px "BIZ UDPGothic",sans-serif',v.textAlign="center",v.fillText("ティッシュ",E/2,I/2+10)})),r(s("tissuebox",{color:15259852,roughness:.75}),Lt(te.tissue,.4));{let v=new ce(new Si(4,9,4),s("tis",{color:16448250,roughness:1}));v.position.set((te.tissue.x0+te.tissue.x1)/2,te.tissue.y1+3.8,(te.tissue.z0+te.tissue.z1)/2),v.rotation.set(.2,.6,.1),v.scale.set(1.7,1,.3),n.add(v)}let Y=s("tea",{color:4086357,roughness:.35});r(Y,at(4,3.2,8,-42,58,326,14)),r(Y,at(4,3.2,8,-103,58,356,14));{let v=new lt(9,16,12).scale(1,.85,1).translate(-38,61.5,350);r(s("teapot",{color:4862502,roughness:.4}),v)}r(f,Lt(te.chairSeat,.8)),r(f,Lt(te.chairBack,.5));for(let[v,E]of[[te.chairSeat.x0+2,te.chairSeat.z0+2],[te.chairSeat.x1-2,te.chairSeat.z0+2],[te.chairSeat.x0+2,te.chairSeat.z1-2],[te.chairSeat.x1-2,te.chairSeat.z1-2]])r(f,at(1.5,1.2,33,v,16.5,E,8));let $=v=>{let E=(v.x0+v.x1)/2,I=(v.z0+v.z1)/2,k=(v.x1-v.x0)/2;r(b,at(.5,.5,l-v.y1,E,(l+v.y1)/2,I,6));let J=new It(k*.35,k,v.y1-v.y0,22,1,!0).translate(E,(v.y0+v.y1)/2,I);r(s("shade",{color:11824188,roughness:.55,side:ct}),J);let se=new ce(new lt(k*.3,12,8),z);se.position.set(E,v.y0+3,I),n.add(se)};$(te.pendantA),$(te.pendantB);for(let v of[Yo,Zo]){let E=new lt(30,28,8,0,Math.PI*2,0,Math.PI/2).scale(1,.25,1).rotateX(Math.PI).translate(v.x,l,v.z),I=new ce(E,new Tt({color:16774621,emissive:16773328,emissiveIntensity:.65,roughness:.6}));n.add(I)}r(_,at(.45,.45,o.x1-o.x0,0,li.y,li.z,6,[0,0,Math.PI/2]));let ee=(v,E,I,k,J)=>{let se=new Rt(E,I,14,8),ge=se.attributes.position;for(let Re=0;Re<ge.count;Re++)ge.setZ(Re,Math.sin(ge.getX(Re)*.26+ge.getY(Re)*.14)*1.8+Math.sin(ge.getY(Re)*.3)*1.2);se.computeVertexNormals();let be=new ce(se,new Tt({map:it(256,256,v),side:ct,roughness:1,transparent:!0,alphaTest:.5}));be.position.set(k,li.y-I/2,li.z),be.rotation.y=J,be.castShadow=!0,n.add(be),r(s("peg",{color:3898562,roughness:.4}),ke(k-1.2,k+1.2,li.y-2.2,li.y+2.4,li.z-.7,li.z+.7,.3,1))},de=(v,E)=>(I,k,J)=>{I.fillStyle=v,I.beginPath(),I.moveTo(8,10),I.lineTo(k-8,10),I.lineTo(k-12,90),I.quadraticCurveTo(k-60,120,k/2+26,236),I.lineTo(k/2-26,236),I.quadraticCurveTo(60,120,12,90),I.closePath(),I.fill(),I.fillStyle=E,I.fillRect(8,10,k-16,22),I.strokeStyle="rgba(0,0,0,.25)",I.lineWidth=4,I.beginPath(),I.moveTo(k/2-12,50),I.lineTo(k/2-12,160),I.moveTo(k/2+12,50),I.lineTo(k/2+12,160),I.stroke()};ee(de("#f4f2ea","#c7c2b2"),44,40,-92,.02),ee(de("#2a3f6b","#121c33"),44,40,96,-.04),ee((v,E,I)=>{v.fillStyle="#e8e3d4",v.beginPath(),v.moveTo(70,6),v.lineTo(186,6),v.lineTo(182,150),v.quadraticCurveTo(180,240,90,246),v.quadraticCurveTo(46,244,50,210),v.quadraticCurveTo(70,180,72,150),v.closePath(),v.fill(),v.fillStyle="#b13a32",v.fillRect(70,6,116,18),v.fillStyle="#2e4d7a",v.fillRect(70,30,116,12)},26,44,-30,0),ee((v,E,I)=>{v.fillStyle="#e9b8c6",v.fillRect(40,8,176,240),v.fillStyle="rgba(180,70,90,.4)";for(let k=0;k<40;k++)v.beginPath(),v.arc(40+_e()*176,8+_e()*240,5,0,7),v.fill();v.clearRect(0,0,40,30),v.clearRect(216,0,40,30)},48,62,28,.03);let pe=te.fridge;r(s("fridge",{color:14673126,metalness:.25,roughness:.22}),ke(pe.x0,pe.x1,pe.y0,pe.y1,pe.z0,pe.z1,2.6,2)),r(b,ke(pe.x0-.2,pe.x1+.2,80,81.2,pe.z0-.2,pe.z1-2,.1,1));let Pe=it(512,1024,(v,E,I)=>{v.clearRect(0,0,E,I),v.fillStyle="#fbf6df",v.fillRect(70,110,170,210),v.fillStyle="#c8392e",v.beginPath(),v.arc(155,112,16,0,7),v.fill(),v.fillStyle="#322",v.font='bold 22px "Klee One",serif',["牛乳","たまご","ヨーグルト","（賞味期限","　みること）"].forEach((k,J)=>v.fillText(k,88,168+J*32)),v.fillStyle="#fff",v.fillRect(280,170,170,130),v.fillStyle="#e8ba2d",v.beginPath(),v.arc(365,172,15,0,7),v.fill(),v.fillStyle="#d36b2b",v.beginPath(),v.arc(365,235,40,0,7),v.fill(),v.fillStyle="#222",v.beginPath(),v.arc(350,228,5,0,7),v.arc(380,228,5,0,7),v.fill(),v.fillStyle="#2d8c5a",v.fillRect(90,620,330,190),v.fillStyle="#fff",v.font='bold 32px "BIZ UDPGothic",sans-serif',v.fillText("ゴミの日",110,672),v.font='bold 26px "BIZ UDPGothic",sans-serif',v.fillText("月木 燃やす",110,720),v.fillText("金 ペットボトル",110,760)});a(pe.x1-pe.x0-6,pe.y1-pe.y0,(pe.x0+pe.x1)/2,(pe.y0+pe.y1)/2,pe.z0-.15,Math.PI,Pe,{alpha:!0,rough:.5}),r(_,ke(pe.x0+3,pe.x0+5,84,118,pe.z0-2,pe.z0,.4,1)),r(_,ke(pe.x0+3,pe.x0+5,30,76,pe.z0-2,pe.z0,.4,1)),r(x,Lt(te.fridgeBox,.5,.012));let me=te.counter;r(m,Lt(me,.8,.012)),r(s("top",{color:10133664,metalness:.5,roughness:.3}),ke(me.x0,me.x1,me.y1-2,me.y1+.2,me.z0-1,me.z1,.4,1));for(let v=0;v<7;v++){let E=me.x0+2+v*38.8;r(s("kdoor",{color:14208434,roughness:.4}),ke(E,E+37,6,56,me.z0-.5,me.z0,.25,1)),r(_,ke(E+15,E+23,48,49.2,me.z0-1.6,me.z0-.4,.2,1))}r(b,ke(-110,-60,64.1,64.5,496,532,.1,1));for(let[v,E]of[[-98,508],[-74,508],[-98,524],[-74,524]])r(s("burner",{color:4934475,roughness:.5}),at(6.5,6.5,.8,v,64.9,E,16));let Be=new It(9,9,11,22).translate(-74,71,509);r(_,Be),r(_,ke(-155,-125,64.1,64.6,496,530,.2,1)),r(_,at(.9,.9,16,-140,72,532,8));{let v=te.cooker,E=new It(12.5,13,v.y1-v.y0,24).translate((v.x0+v.x1)/2,(v.y0+v.y1)/2,(v.z0+v.z1)/2);r(y,E);let I=new lt(13,22,8,0,Math.PI*2,0,Math.PI/2).scale(1,.3,1).translate((v.x0+v.x1)/2,v.y1,(v.z0+v.z1)/2);r(S,I)}r(y,Lt(te.micro,1.6)),r(b,ke(te.micro.x0+3,te.micro.x1-12,67,89,te.micro.z0-.3,te.micro.z0,.3,1));let ie=te.upper;r(m,Lt(ie,.8,.012));for(let v=0;v<7;v++){let E=ie.x0+2+v*38.8;r(s("kdoor",{color:14208434,roughness:.4}),ke(E,E+37,ie.y0+2,ie.y1-2,ie.z0-.5,ie.z0,.25,1)),r(_,ke(E+15,E+23,ie.y0+5,ie.y0+6,ie.z0-1.6,ie.z0-.4,.2,1))}r(x,ke(-160,-120,150,165,520,538,.4,1,.012)),r(s("bottle",{color:3037754,roughness:.25}),at(3,3,18,-90,159,530,10)),r(s("bottle2",{color:6171678,roughness:.25}),at(3,3,14,-78,157,528,10));let ue=te.server;r(y,Lt(ue,2));{let v=new ce(new It(13,13,28,20),new Tt({color:9356761,transparent:!0,opacity:.6,roughness:.15}));v.position.set((ue.x0+ue.x1)/2,ue.y1+14,(ue.z0+ue.z1)/2),n.add(v)}let he=s("tube",{color:10134699,metalness:.75,roughness:.35});for(let v of[te.hangL,te.hangR]){let E=(v.x0+v.x1)/2,I=(v.z0+v.z1)/2;r(he,at(1.5,1.5,v.y1,E,v.y1/2,I,10)),r(he,at(1.5,1.5,40,E,1.5,I,10,[Math.PI/2,0,0]))}r(he,at(1.5,1.5,44,92,148,120,10,[0,0,Math.PI/2]));for(let[v,E]of[[84,"#54483b"],[100,"#7c3b36"]]){let I=ke(v-7,v+7,96,146,118,122,1.2,1);r(s("coat"+E,{color:new Se(E).getHex(),roughness:1}),I)}r(_,at(1.1,1.1,98,79.5,49,270,8)),r(_,at(1.1,1.1,98,128.5,49,270,8)),r(_,at(1,1,52,104,100,264,8,[0,0,Math.PI/2])),r(_,at(1,1,52,104,100,276,8,[0,0,Math.PI/2]));for(let v of[262,278])r(_,at(.9,.9,30,79.5,1,v-0,6,[0,0,0]));r(_,ke(76,83,0,1.6,255,285,.4,1)),r(_,ke(125,132,0,1.6,255,285,.4,1));let Me=s("ladder",{color:13875534,metalness:.2,roughness:.45});r(Me,Lt(te.ladderTop,.4));for(let[v,E,I]of[[64,396,408],[64,434,422],[90,396,408],[90,434,422]]){let k=I-E,J=Math.hypot(k,104),se=Math.atan2(k,104);r(Me,ke(v-2,v+2,-J/2,J/2,-1,1,.3,1).rotateX(se).translate(0,52,(E+I)/2))}for(let v=1;v<5;v++){let E=v*20,I=E/104;r(Me,ke(64,90,E-1,E+1,396+12*I-2,396+12*I+3,.3,1))}r(b,at(10,11,2,-40,1,240,22)),r(b,at(.9,.9,104,-40,54,240,8));{let v=te.lampShade,E=new It(9,13,v.y1-v.y0,22,1,!0).translate(-40,(v.y0+v.y1)/2,240),I=new ce(E,new Tt({color:16115652,emissive:16766602,emissiveIntensity:.65,side:ct,roughness:1}));n.add(I)}let bt=te.pot;r(w,at(12,9.5,22,124,11,32,18)),r(s("soil",{color:2892056,roughness:1}),at(11,11,.6,124,20.5,32,18)),r(s("stem",{color:5917227,roughness:1}),at(1.1,1.5,62,124,52,32,8));for(let v=0;v<22;v++){let E=v*2.4,I=40+v*2.4,k=10+v%5*3,J=new lt(1,10,6).scale(13,.6,5.5).rotateZ(-.28-v%3*.12).rotateY(E).translate(124+Math.cos(E)*k,I,32-Math.sin(E)*k);r(U,J)}{let v=te.dumbbell;r(_,at(1.6,1.6,30,(v.x0+v.x1)/2,4.5,276,10,[0,0,Math.PI/2]));for(let E of[v.x0+3,v.x1-3])r(b,at(4.8,4.8,6,E,4.8,276,14,[0,0,Math.PI/2]))}{let v=te.golf,E=67,I=79;r(s("golfbag",{color:2046563,roughness:.55}),at(7,6.4,62,E,31,I,18)),r(s("golfband",{color:13218667,roughness:.4}),at(7.3,7.3,3,E,56,I,18)),r(s("golfband",{}),at(6.8,6.8,2,E,8,I,18));for(let[k,J,se,ge]of[[-3,-2,80,0],[2,-3,86,1],[3,2,76,0],[-2,3,82,1]]){r(_,at(.45,.45,se-40,E+k,40+(se-40)/2,I+J,6));let be=ge?new lt(2.6,10,8).scale(1,.8,1.3).translate(E+k,se,I+J):ke(E+k-2,E+k+2,se-1.5,se+1,I+J-2.5,I+J+2.5,.4,1);r(ge?b:_,be)}}{let v=s("carpet",{color:9405812,roughness:1}),E=s("sisal",{color:11966314,roughness:1});r(v,Lt(te.towerBase,1)),r(v,Lt(te.towerMid,1)),r(v,Lt(te.towerTop,1)),r(E,at(4,4,104,51,56,205,14));for(let I=8;I<106;I+=3.2)r(s("sisal2",{color:9992527,roughness:1}),new wn(4.1,.55,5,16).rotateX(Math.PI/2).translate(51,I,205));r(b,at(.2,.2,18,41,49,196,5));{let I=new lt(2.2,10,8).scale(1,.8,1.5).translate(41,39,196);r(s("mouse",{color:10132122,roughness:1}),I)}}{let v=s("ironpad",{map:it(256,128,(I,k,J)=>{I.fillStyle="#cfd7dc",I.fillRect(0,0,k,J),I.strokeStyle="#8fa4b5",I.lineWidth=5;for(let se=0;se<9;se++)I.beginPath(),I.moveTo(se*32,0),I.lineTo(se*32-40,J),I.stroke()},{repeat:!0}),roughness:1});r(v,Lt(te.ironBoard,1.2,.025)),r(_,Lt(te.ironLegA,.4)),r(_,Lt(te.ironLegB,.4));let E=new lt(1,14,8).scale(6,3,11).translate(48,62,342);r(y,E)}let ht=it(256,256,(v,E,I)=>{v.fillStyle="#f5efdf",v.beginPath(),v.arc(E/2,I/2,124,0,7),v.fill(),v.lineWidth=10,v.strokeStyle="#4b3423",v.stroke(),v.fillStyle="#2a2018",v.font='bold 26px "BIZ UDPGothic",sans-serif',v.textAlign="center",v.textBaseline="middle";for(let k=1;k<=12;k++){let J=k/12*6.283;v.fillText(k,E/2+Math.sin(J)*96,I/2-Math.cos(J)*96)}v.strokeStyle="#2a2018",v.lineWidth=8,v.lineCap="round",v.beginPath(),v.moveTo(E/2,I/2),v.lineTo(E/2+44,I/2-30),v.moveTo(E/2,I/2),v.lineTo(E/2-20,I/2-80),v.stroke()}),Pt=a(52,52,80,125,.3,0,ht);Pt.material.transparent=!0,Pt.material.alphaTest=.5;let an=it(256,360,(v,E,I)=>{v.fillStyle="#fbf8ee",v.fillRect(0,0,E,I),v.fillStyle="#b5352a",v.fillRect(0,0,E,76),v.fillStyle="#fff",v.font='bold 44px "BIZ UDPGothic",sans-serif',v.textAlign="center",v.fillText("11月",E/2,56),v.fillStyle="#333",v.font='bold 22px "BIZ UDPGothic",sans-serif';for(let k=0;k<30;k++)v.fillText(k+1,28+k%7*33,112+Math.floor(k/7)*42);v.strokeStyle="#c33",v.lineWidth=4,v.beginPath(),v.arc(128,196,18,0,7),v.stroke(),v.fillStyle="#c33",v.font='bold 18px "Klee One",serif',v.fillText("息子 帰省",128,322)});a(34,48,o.x0+.3,112,34,Math.PI/2,an);let ze=v=>it(200,160,(E,I,k)=>{E.fillStyle="#39281a",E.fillRect(0,0,I,k),E.fillStyle=v,E.fillRect(14,14,I-28,k-28),E.fillStyle="rgba(40,30,20,.75)";for(let J=0;J<3;J++)E.beginPath(),E.arc(60+J*40,74,15,0,7),E.fill(),E.fillRect(46+J*40,88,28,40)});a(30,24,o.x0+.3,112,180,Math.PI/2,ze("#9fb7b3")),a(30,24,o.x0+.3,118,145,Math.PI/2,ze("#c7ad8a")),a(26,20,o.x0+.3,104,118,Math.PI/2,ze("#a7a48a"));let dt=s("hair",{color:1511950,roughness:.5});for(let v=0;v<26;v++){let E=o.x0+14+_e()*(o.x1-o.x0-28),I=10+_e()*470,k=[],J=_e()*6.28,se=E,ge=I;for(let be=0;be<6;be++)k.push(new A(se,.25,ge)),J+=(_e()-.5)*1.1,se+=Math.cos(J)*5,ge+=Math.sin(J)*5;r(dt,new As(new Es(k),10,.13,4))}let Ye=s("crumb",{color:13210952,roughness:.95});for(let v=0;v<36;v++){let E=new sa(.5+_e()*1.3,0).scale(1,.55+_e()*.4,.9).rotateY(_e()*6).translate(-90+_e()*120,.5,60+_e()*170);r(Ye,E)}let Jt=s("band",{color:12029269,roughness:.6});for(let[v,E]of[[30,120],[-90,300],[110,340],[-20,440]])r(Jt,new wn(6.5,.35,5,22).rotateX(Math.PI/2).scale(1,1,.72).translate(v,.32,E));let _t=it(128,128,(v,E,I)=>{v.clearRect(0,0,E,I),v.fillStyle="rgba(165,156,142,.0)";let k=v.createRadialGradient(64,64,6,64,64,56);k.addColorStop(0,"rgba(170,160,146,.85)"),k.addColorStop(.7,"rgba(170,160,146,.45)"),k.addColorStop(1,"rgba(170,160,146,0)"),v.fillStyle=k,v.fillRect(0,0,E,I);for(let J=0;J<420;J++){let se=_e()*6.28,ge=Math.pow(_e(),.6)*54;v.strokeStyle=`rgba(190,182,168,${.16+_e()*.22})`,v.lineWidth=.7,v.beginPath();let be=64+Math.cos(se)*ge,Re=64+Math.sin(se)*ge;v.moveTo(be,Re),v.lineTo(be+(_e()-.5)*26,Re+(_e()-.5)*26),v.stroke()}}),Ht=new xs({map:_t,transparent:!0,depthWrite:!1});for(let[v,E,I,k]of[[-92,4.5,26,10],[152,4,250,8],[-155,4,325,10],[10,3.6,470,8],[110,3.6,462,9],[140,139,492,10],[118,138,500,7],[-30,153,530,10],[40,3,225,6]]){let J=new _s(Ht);J.position.set(v,E,I),J.scale.setScalar(k),n.add(J)}let mt=-64,on=76,tn=60,Bn=215,Pn=zi.rug(),In=new ce(new Rt(on-mt,Bn-tn),new Tt({map:Pn,roughness:1}));In.rotation.x=-Math.PI/2,In.position.set((mt+on)/2,.25,(tn+Bn)/2),In.receiveShadow=!0,n.add(In);let os=ba?36e3:6e4,j=new Float32Array(os*9),Na=new Float32Array(os*9);{let v=Pn.image,E=v.getContext("2d").getImageData(0,0,v.width,v.height).data,I=k=>Math.pow(k/255,2.2);for(let k=0;k<os;k++){let J=mt+_e()*(on-mt),se=tn+_e()*(Bn-tn),ge=.45+_e()*.45,be=_e()*6.28,Re=.05+_e()*.035,De=Math.cos(be)*Re,nt=Math.sin(be)*Re,Gt=(_e()-.5)*.5,Ot=(_e()-.5)*.5;j.set([J-De,.22,se-nt,J+De,.22,se+nt,J+Gt,.22+ge,se+Ot],k*9);let wt=Math.floor((J-mt)/(on-mt)*(v.width-1)),et=Math.floor((se-tn)/(Bn-tn)*(v.height-1)),St=(et*v.width+wt)*4,Vt=.8+_e()*.5,Fe=I(E[St])*Vt,He=I(E[St+1])*Vt,yn=I(E[St+2])*Vt;Na.set([Fe*.8,He*.8,yn*.8,Fe*.8,He*.8,yn*.8,Fe*1.15,He*1.15,yn*1.15],k*9)}}let ls=new Ke;ls.setAttribute("position",new st(j,3)),ls.setAttribute("color",new st(Na,3)),ls.computeVertexNormals();for(let v=0,E=ls.attributes.normal;v<E.count;v++)E.setXYZ(v,0,1,0);let zt=new wo({vertexColors:!0,side:ct});zt.onBeforeCompile=v=>{v.fragmentShader=v.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (length(vViewPosition) < 4.0) discard;`)};let za=new ce(ls,zt);za.frustumCulled=!1,n.add(za);let Da=v=>it(256,128,(E,I,k)=>{E.fillStyle="#00a65a",E.fillRect(0,0,I,k),E.strokeStyle="#f4fff6",E.lineWidth=6,E.strokeRect(5,5,I-10,k-10),E.fillStyle="#f4fff6",Nv(E,72,66,1.5),v&&(E.beginPath(),E.moveTo(146,42),E.lineTo(196,42),E.lineTo(196,24),E.lineTo(236,64),E.lineTo(196,104),E.lineTo(196,86),E.lineTo(146,86),E.closePath(),E.fill())}),rl=Da(!0);for(let v of F0){let E=a(26,13,v.x,v.y,v.z,v.ry,rl,{em:1.15});E.material.fog=!1,E.material.side=ct}let cs={x:128,z:538},al=it(256,400,(v,E,I)=>{v.fillStyle="#6c7178",v.fillRect(0,0,E,I),v.fillStyle="#8b9199",v.fillRect(14,14,E-28,I-14),v.fillStyle="#d9dce0",v.fillRect(E-62,I*.52,38,12),v.fillStyle="#c6332b",v.font='bold 36px "BIZ UDPGothic",sans-serif',v.textAlign="center",v.fillText("開けるな",E/2,120),v.font='bold 22px "BIZ UDPGothic",sans-serif',v.fillText("（おかん）",E/2,158)}),Ua=a(26,34,cs.x,152,cs.z-.5,Math.PI,al,{rough:.5}),Oa=a(36,18,cs.x,179,cs.z-.8,Math.PI,Da(!1),{em:1.5});Oa.material.fog=!1,Oa.position.y=175;let br=new er(3530890,260,60,1.6);br.position.set(cs.x,170,524),n.add(br);let kn=new ce(new ai(9,15,40),new rt({color:3530890,transparent:!0,opacity:.75,side:ct,depthWrite:!1,fog:!1}));kn.rotation.x=-Math.PI/2,kn.position.set(128,135.25,516),n.add(kn);let Fa=it(64,256,(v,E,I)=>{let k=v.createLinearGradient(0,0,0,I);k.addColorStop(0,"rgba(255,240,205,.17)"),k.addColorStop(1,"rgba(255,240,205,0)"),v.fillStyle=k,v.fillRect(0,0,E,I),v.globalCompositeOperation="destination-in";let J=v.createLinearGradient(0,0,E,0);J.addColorStop(0,"rgba(0,0,0,0)"),J.addColorStop(.5,"#000"),J.addColorStop(1,"rgba(0,0,0,0)"),v.fillStyle=J,v.fillRect(0,0,E,I)}),ol=new rt({map:Fa,transparent:!0,depthWrite:!1,blending:es,side:ct,fog:!1});for(let[v,E]of[[376,26],[395,14]]){let I=new ce(new Rt(E,300),ol);I.position.set(70,72,v),I.rotation.z=Math.PI/2-.62,I.rotation.order="ZXY",n.add(I);let k=I.clone();k.rotation.x=Math.PI/2,n.add(k)}let Ba=ba?420:800,Ds=new Ke,Us=new Float32Array(Ba*3);for(let v=0;v<Ba*3;v+=3)Us[v]=o.x0+_e()*(o.x1-o.x0),Us[v+1]=_e()*l,Us[v+2]=_e()*o.z1;Ds.setAttribute("position",new st(Us,3));let hs=new Mi(Ds,new Ts({color:16773583,size:.34,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0}));hs.frustumCulled=!1,n.add(hs);let ll=it(128,128,(v,E,I)=>{let k=v.createRadialGradient(64,64,18,64,64,64);k.addColorStop(0,"rgba(20,12,4,.55)"),k.addColorStop(.6,"rgba(20,12,4,.34)"),k.addColorStop(1,"rgba(20,12,4,0)"),v.fillStyle=k,v.fillRect(0,0,E,I)}),cl=new rt({map:ll,transparent:!0,depthWrite:!1,fog:!1}),C=[];for(let v of["sofaBase","tvStand","shelf","counter","fridge","server","pot","amazon","table","dining"]){let E=te[v],I=v==="table"||v==="dining"?2:16,k=new Rt(E.x1-E.x0+I*2,E.z1-E.z0+I*2).rotateX(-Math.PI/2).translate((E.x0+E.x1)/2,.08,(E.z0+E.z1)/2);C.push(k)}let q=new ce(ep(C),cl);n.add(q);let Q=0;for(let[v,E]of t){for(let k of E){for(let J of Object.keys(k.attributes))["position","normal","uv"].includes(J)||k.deleteAttribute(J);k.attributes.uv||k.setAttribute("uv",new st(new Float32Array(k.attributes.position.count*2),2))}let I=new ce(ep(E),v);I.castShadow=!0,I.receiveShadow=!0,n.add(I),Q++}return{goalRing:kn,motes:hs,exitLight:br,exitDoor:Ua,draws:Q}}function Nv(n,e,t,i){n.save(),n.translate(e,t),n.scale(i,i),n.lineCap="round",n.lineJoin="round",n.strokeStyle=n.fillStyle,n.lineWidth=8,n.beginPath(),n.arc(9,-27,7,0,7),n.fill(),n.beginPath(),n.moveTo(5,-16),n.lineTo(-2,4),n.lineTo(14,13),n.lineTo(10,30),n.moveTo(-2,4),n.lineTo(-12,16),n.lineTo(-26,16),n.moveTo(4,-14),n.lineTo(17,-7),n.lineTo(26,-13),n.moveTo(4,-14),n.lineTo(-10,-13),n.lineTo(-17,-2),n.stroke(),n.restore()}var ch={poses:{normal:{w:91.93,h:130.74,hand:[.9638,.1619]},search:{w:106.63,h:122.32,hand:[.9688,.1731]},spot:{w:93.11,h:147.01,hand:[.9663,.144]},angry:{w:95.85,h:144.27,hand:[.9652,.1508]},win:{w:94.48,h:131.72,hand:[.973,.1607]},phone:{w:102.71,h:131.14,hand:[.9695,.1644]}}};var zv={wreckRepairTo:.55},le={radius:.42,height:1.75,walk:10,back:4,accel:38,airAccel:9,turn:3.4,airTurn:1.8,gravity:21,jump:8.6,coyote:.12,stepUp:1.3,climb:11,crawl:5,crawlDown:7,slipDown:5,wireRange:75,wireMinUp:3,pump:13,steerAssist:2.2,reel:4,reelK:.14,reelMax:12,reelVmax:26,minRope:6,swingLow:6,zip:18,zipAcc:22,zipCd:1,zipExit:7.5,groundWireAcc:48,groundWireBoost:9,groundWireRelease:4,groundWireKick:4,groundWireHop:3.5,groundWireMaxT:3,lowAnchor:16,lowPull:30,lowPenalty:1.2,lowHop:8.5,lowExit:12,maxSpeed:38,slack:1.12,releaseVyMax:9,drag:.012,releaseKick:1.2,downSec:3.2,waterY:-1.2,hitSpeed:7,stompVy:7,stompBounce:11,hideCombo:6,hideCd:20,hideSec:4,sneak:2.6,netSec:2.6,netMash:.12,pitSec:2.2,pitMash:.15,pitDepth:2.2},Dp=(n,e,t)=>n<e?e:n>t?t:n;function uh({id:n,name:e="",spawn:t,paint:i=null,bot:s=!1}){return{id:n,name:e,bot:s,isRunner:!0,carId:"runner",paint:i,levels:{},stats:{durability:1,maxSpeed:le.maxSpeed,boostCap:1,mass:.2},x:t.x,y:t.y||0,z:t.z,vx:0,vy:0,vz:0,yaw:t.yaw||0,pitch:0,roll:0,wp:0,wr:0,grounded:!0,airTime:0,lastAir:0,surf:"road",coyote:0,boost:0,boostLock:!1,boosting:!1,heat:0,overheat:!1,zipCd:0,zipping:!1,zipPrev:!1,dmg:{body:1,engine:1,tires:1,susp:1,cool:1},dents:[],flat:!1,wreck:0,freeze:0,stun:0,falling:!1,knock:!1,respawnPoint:{x:t.x,y:t.y||0,z:t.z,yaw:t.yaw||0},safeHist:[],safeT:0,rope:null,wirePrev:!1,jumpPrev:!1,combo:0,swings:0,climbing:null,onRoof:!1,roofTime:0,groundY:0,net:0,pit:0,pitAt:null,sneaking:!1,sneakPrev:!1,breaks:0,maxAir:0,t:0,drifting:!1,slip:0,repairing:!1,events:[]}}function Dv(n){return Math.hypot(n.vx,n.vz)}function W0(n,e,t){return n.nearby(e,t).filter(i=>(!i.def||n.solidProps)&&!i.slab&&i.y1!=null&&!i.noHit)}function X0(n,e,t){let i=Math.cos(n.yaw||0),s=Math.sin(n.yaw||0),r=e-n.cx,a=t-n.cz;return{u:r*i-a*s,v:r*s+a*i,c:i,s}}function dr(n,e,t,i){let s=n.groundAt(e,t,i+.5).h,r=null;for(let a of W0(n,e,t)){if(a.y1>i+.6||a.y1<=s)continue;let o=X0(a,e,t);if(Math.abs(o.u)<=a.hw+.15&&Math.abs(o.v)<=a.hl+.15){let l=a.gable?a.y1+a.gable*Math.max(0,1-(a.ridgeX?Math.abs(o.v)/a.hl:Math.abs(o.u)/a.hw)):a.y1;l<=i+.6&&(s=Math.max(s,l),r=a)}}return{h:s,roof:r}}function j0(n,e,t,i,s,r,a,o){let l=Math.cos(n.yaw||0),c=Math.sin(n.yaw||0),h=(e-n.cx)*l-(i-n.cz)*c,u=(e-n.cx)*c+(i-n.cz)*l,p=s*l-a*c,d=s*c+a*l,f=0,m=o;for(let[x,g,y,_]of[[h,p,-n.hw,n.hw],[t,r,n.y0,n.y1+(n.gable||0)],[u,d,-n.hl,n.hl]]){if(Math.abs(g)<1e-9){if(x<y||x>_)return-1;continue}let b=(y-x)/g,S=(_-x)/g;if(b>S){let M=b;b=S,S=M}if(b>f&&(f=b),S<m&&(m=S),f>m)return-1}return f}function q0(n){return n._anchorBoxes||(n._anchorBoxes=n.colliders.filter(e=>!e.slab&&e.y1!=null&&(e.y1-e.y0>6||e.small)&&!e.noAnchor&&(e.kind==="building"||e.kind==="bound"))),n._anchorBoxes}function Y0(n,e,t,i,s,r,a,o=400,l=0){let c=-1;for(let u of q0(n)){let p=j0(u,e,t,i,s,r,a,o);p>0&&(c<0||p<c)&&(c=p)}let h=c<0?null:{x:e+s*c,y:t+r*c,z:i+a*c};if(n.poles)for(let u of n.poles){let p=u.x-e,d=u.z-i,f=u.y1-.4-t,m=p*s+f*r+d*a;if(m<=l||m>o||c>0&&m>c)continue;let x=e+s*m-u.x,g=t+r*m-(u.y1-.4),y=i+a*m-u.z;x*x+y*y<(u.low?2.25:6.25)&&g>-(u.y1-u.y0)*.6&&g<(u.low?1:2.5)&&(c=m,h={x:u.x,y:u.y1-.4,z:u.z,pole:!0,low:!!u.low})}return h}var Uv=[58,48,68,40,76,32],Ov=[0,18,-18,36,-36,54,-54,70,-70,84,-84];function Ko(n,e,t=null){let i=Math.hypot(e.vx,e.vz),s=Math.sin(t??e.yaw),r=Math.cos(t??e.yaw);if(i>6&&t==null){s=s*(1-.45)+e.vx/i*.45,r=r*(1-.45)+e.vz/i*.45;let f=Math.hypot(s,r);s/=f,r/=f}let a=e.x,o=e.y+1.5,l=e.z,h=q0(n).filter(d=>Math.abs(d.cx-a)<le.wireRange+d.hw&&Math.abs(d.cz-l)<le.wireRange+d.hl&&d.y1>o+le.wireMinUp),u=null,p=-1e9;for(let d of Ov){let f=Math.atan2(s,r)+d*Math.PI/180,m=Math.sin(f),x=Math.cos(f);for(let g of Uv){let y=g*Math.PI/180,_=m*Math.cos(y),b=Math.sin(y),S=x*Math.cos(y),M=-1;for(let D of h){let V=j0(D,a,o,l,_,b,S,le.wireRange);V>0&&(M<0||V<M)&&(M=V)}if(M<0)continue;let w=o+b*M,U=M*Math.cos(y);if(w<o+le.wireMinUp||U<5)continue;let z=-Math.abs(d)*.012-Math.abs(g-56)*.04-Math.abs(M-28)*.05-(M>55?(M-55)*.1:0)-(w<le.lowAnchor?le.lowPenalty:0);z>p&&(p=z,u={x:a+_*M,y:w,z:l+S*M,len:M})}}if(n.poles){let d=Math.atan2(s,r);for(let f of n.poles){let m=f.x-a,x=f.z-l,g=Math.hypot(m,x),y=f.y1-.4;if(g<5||g>le.wireRange||y<o+le.wireMinUp)continue;let _=(Math.atan2(m,x)-d)*180/Math.PI;for(;_>180;)_-=360;for(;_<-180;)_+=360;if(Math.abs(_)>84)continue;let b=Math.hypot(g,y-o),S=Math.atan2(y-o,g)*180/Math.PI;if(b>le.wireRange)continue;let M=-Math.abs(_)*.012-Math.abs(S-56)*.04-Math.abs(b-28)*.05+.15-(y<le.lowAnchor&&f.town?le.lowPenalty:0);M>p&&(p=M,u={x:f.x,y,z:f.z,len:b,pole:!0})}}return u}function Z0(n,e=null){let t=n.safeHist,i=e||(t.length>=4?t[Math.max(0,t.length-8)]:n.respawnPoint);n.x=i.x,n.z=i.z,n.y=i.y||0,n.vx=n.vy=n.vz=0,n.yaw=i.yaw||n.yaw,n.rope=null,n.climbing=null,n.stun=0,n.falling=!1,n.grounded=!0,n.airTime=0,n.freeze=.5,n.safeHist=[],n.events.push({t:"respawn",repair:!1})}function dh(n,e,t,i){n.t+=t,n.repairing=!1,n.boosting=!1;let s=n.events;if(n.wreck>0){n.wreck-=t,n.rope=null,n.climbing=null,hh(n,0,t,i,!0),n.vx*=.9,n.vz*=.9,n.wreck<=0&&(n.wreck=0,n.dmg.body=Math.max(n.dmg.body,zv.wreckRepairTo),n.freeze=.4,s.push({t:"respawn",repair:!0}));return}if(n.freeze>0){n.freeze-=t,n.rope=null,hh(n,0,t,i,!0),n.vx*=.8,n.vz*=.8;return}if(e.respawn){Z0(n);return}let r=!!e.jump,a=!!e.wire,o=r&&!n.jumpPrev||a&&!n.wirePrev;if(n.net>0){n.jumpPrev=r,n.wirePrev=a,o&&(n.net-=le.netMash,s.push({t:"struggle"})),n.net-=t,n.rope=null,n.climbing=null,hh(n,0,t,i,!0),n.grounded&&(n.vx*=.85,n.vz*=.85),n.net<=0&&(n.net=0,s.push({t:"netFree"}));return}if(n.pit>0){n.jumpPrev=r;let M=a&&!n.wirePrev;n.wirePrev=a,n.pit-=t,r&&o&&(n.pit-=le.pitMash,s.push({t:"struggle"})),n.vx=n.vz=0,n.vy=0,n.x=n.pitAt.x+(n.x-n.pitAt.x)*.9,n.z=n.pitAt.z+(n.z-n.pitAt.z)*.9,n.y=n.pitAt.y-le.pitDepth,n.grounded=!0;let w=null;if(M&&(n.y=n.pitAt.y,w=Ko(i,n),n.y=n.pitAt.y-le.pitDepth,w||s.push({t:"wireMiss"})),w||n.pit<=0){if(n.pit=0,n.y=n.pitAt.y+.1,n.vy=w?le.jump*1.1:le.jump,n.grounded=!1,w){let U=Math.hypot(w.x-n.x,w.y-(n.y+1.2),w.z-n.z);n.rope={x:w.x,y:w.y,z:w.z,len:Math.max(le.minRope,U*.9),t:0},n.combo=1,s.push({t:"wire",x:w.x,y:w.y,z:w.z,combo:1})}s.push({t:"pitOut",wire:!!w})}return}let l=!!e.sneak;l&&!n.sneakPrev&&n.grounded&&n.stun<=0&&(n.sneaking=!n.sneaking,s.push({t:"sneak",on:n.sneaking})),n.sneakPrev=l;let c=e.throttle||0,h=e.brake||0,u=e.steer||0,p=!!e.jump,d=!!e.wire,f=p&&!n.jumpPrev,m=d&&!n.wirePrev;n.jumpPrev=p,n.wirePrev=d,n.stun>0&&(n.stun-=t,c=h=u=0),n.zipping=!1,n.zipCd=0;let x=n.stun>0||n.climbing?null:e.moveDir;if(x){let w=Math.atan2(x.x,x.z)-n.yaw;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;let U=(n.grounded?le.turn:le.airTurn)*4*t;n.yaw+=Math.max(-U,Math.min(U,w)),n.grounded&&(c*=Math.max(.15,Math.cos(Math.min(Math.abs(w),Math.PI/2)))),u=0}let g=(n.grounded?le.turn:n.rope?le.airTurn*1.2:le.airTurn)*u;n.yaw-=g*t;let y=Math.sin(n.yaw),_=Math.cos(n.yaw),b=x?x.x:y,S=x?x.z:_;if(m&&n.stun<=0)if(n.rope)ur(n,!0);else if(e.wireAt&&e.wireAt.low){let M=e.wireAt,w=Math.hypot(M.x-n.x,M.y-(n.y+1.2),M.z-n.z)||1;if(w>le.wireRange)s.push({t:"wireMiss",far:!0,x:M.x,y:M.y,z:M.z,d:w});else{n.sneaking=!1,n.climbing=null,n.grounded&&(n.vy=Math.max(n.vy,le.jump),n.grounded=!1,n.y+=.05,s.push({t:"jump"})),n.rope={x:M.x,y:M.y,z:M.z,len:w,t:0,ground:!0,low:!0},n.swings++,n.vx+=(M.x-n.x)/w*le.groundWireBoost,n.vz+=(M.z-n.z)/w*le.groundWireBoost;let U=Math.hypot(n.vx,n.vy,n.vz);if(U>le.maxSpeed){let z=le.maxSpeed/U;n.vx*=z,n.vy*=z,n.vz*=z}s.push({t:"wire",ground:!0,low:!0,x:M.x,y:M.y,z:M.z,combo:n.combo})}}else if(e.wireAt&&e.wireAt.ground){let M=e.wireAt,w=Math.hypot(M.x-n.x,M.y-(n.y+1.2),M.z-n.z);if(n.grounded||n.climbing||w>le.wireRange||M.y>n.y-1)s.push({t:"wireMiss",ground:!0,far:w>le.wireRange,x:M.x,y:M.y,z:M.z,d:w});else{n.rope={x:M.x,y:M.y,z:M.z,len:w,t:0,ground:!0},n.swings++;let U=(M.x-n.x)/w,z=(M.y-(n.y+1.2))/w,D=(M.z-n.z)/w;n.vx+=U*le.groundWireBoost,n.vy+=z*le.groundWireBoost,n.vz+=D*le.groundWireBoost;let V=Math.hypot(n.vx,n.vy,n.vz);if(V>le.maxSpeed){let B=le.maxSpeed/V;n.vx*=B,n.vy*=B,n.vz*=B}s.push({t:"wire",ground:!0,x:M.x,y:M.y,z:M.z,combo:n.combo})}}else{n.sneaking=!1;let M=n.grounded;n.grounded&&(n.vy=Math.max(n.vy,le.jump*.85),n.grounded=!1,n.y+=.05,s.push({t:"jump"}));let w=null,U=e.wireAt,z=!1;if(U){let D=Math.hypot(U.x-n.x,U.y-(n.y+1.5),U.z-n.z);D<=le.wireRange&&U.y>n.y+2?w={x:U.x,y:U.y,z:U.z,len:D}:(w=Ko(i,n,Math.atan2(U.x-n.x,U.z-n.z)),z=!w)}if(!w&&!z&&(w=Ko(i,n,e.wireYaw)),!w&&z&&(s.push({t:"wireMiss",far:!0,x:U.x,y:U.y,z:U.z}),w=void 0),w){let D=Math.hypot(w.x-n.x,w.y-(n.y+1.2),w.z-n.z),V=dr(i,n.x,n.z,n.y).h+le.swingLow,B=Math.max(le.minRope,w.y-(V+1.2)),X=Math.min(B,D*le.slack,le.wireRange);n.rope={x:w.x,y:w.y,z:w.z,len:X,t:0},X<D&&(n.rope.len=D,n.rope.pull=X),n.climbing=null;let G=Dv(n);G<12&&(n.vx+=y*(12-G),n.vz+=_*(12-G)),n.combo=M?1:n.combo+1,n.swings++,n.bestCombo=Math.max(n.bestCombo||0,n.combo),s.push({t:"wire",x:w.x,y:w.y,z:w.z,combo:n.combo})}else if(w===null&&(s.push({t:"wireMiss"}),n.climbing)){let D=n.climbing;n.climbing=null,n.vy=le.jump*.7,n.vx=D.nx*6,n.vz=D.nz*6,s.push({t:"jump",off:!0})}}if(f&&n.climbing){let M=n.climbing;n.climbing=null,n.vy=le.jump*.7,n.vx=M.nx*6,n.vz=M.nz*6,s.push({t:"jump",off:!0})}else f&&n.stun<=0&&(n.grounded||n.coyote>0)&&!n.rope?(n.sneaking=!1,n.vy=le.jump,n.grounded=!1,n.coyote=0,n.y+=.05,s.push({t:"jump"})):f&&n.rope&&ur(n,!0);if(n.climbing){let M=n.climbing,w=e.wallY!=null?e.wallY:c-h,U=e.wallX!=null?e.wallX:u;if(n.stun>0)n.climbing=null,n.vy=Math.min(n.vy,2),n.vx+=M.nx*3,n.vz+=M.nz*3;else{let z=M.nz,D=-M.nx;n.vy=(w>0?le.climb*(M.slip||n.climbMul||1):le.crawlDown)*w,M.slip&&w<=0&&(n.vy=-le.slipDown),n.vx=-M.nx*2+z*U*le.crawl,n.vz=-M.nz*2+D*U*le.crawl,n.yaw=Math.atan2(-M.nx,-M.nz),M.lat=Math.abs(U)>.1,w<0&&n.y<=n.groundY+.05?n.climbing=null:n.y>=M.top-.2&&w>0&&(n.climbing=null,n.y=M.top+.05,n.vy=3.5,n.vx=-M.nx*5,n.vz=-M.nz*5,s.push({t:"vault"}))}}else if(n.grounded){let M=(c>0?(n.sneaking?le.sneak:le.walk)*c:h>0?-le.back*(n.sneaking?.5:1):0)*(n.speedMul||1),w=n.vx*y+n.vz*_,U=n.vx*_-n.vz*y,z=w+Dp(M-w,-le.accel*t*(h>0&&w>0?1.6:1),le.accel*t),D=U*Math.max(0,1-14*t);n.vx=y*z+_*D,n.vz=_*z-y*D}else if(c>0&&(n.vx+=b*le.airAccel*c*t,n.vz+=S*le.airAccel*c*t),h>0&&(n.vx*=1-.8*t,n.vz*=1-.8*t),n.rope&&!n.rope.ground){c>0&&n.vy<2&&(n.vx+=b*le.pump*t,n.vz+=S*le.pump*t);let M=Math.hypot(n.vx,n.vz);if(M>3){let w=Math.min(1,le.steerAssist*t),U=n.vx/M*(1-w)+b*w,z=n.vz/M*(1-w)+S*w,D=Math.hypot(U,z)||1;n.vx=U/D*M,n.vz=z/D*M}}n.boosting=!1,hh(n,c,t,i,!1),n.grounded&&n.y>le.waterY+.5&&(n.safeT+=t,n.safeT>.3&&(n.safeT=0,n.safeHist.push({x:n.x,y:n.y,z:n.z,yaw:n.yaw}),n.safeHist.length>14&&n.safeHist.shift()))}function zp(n,e=!0){if(!n.rope)return;let t=Math.hypot(n.vx,n.vz);if(n.rope.low?t>le.lowExit&&(n.vx*=le.lowExit/t,n.vz*=le.lowExit/t):t>.5&&(n.vx+=n.vx/t*le.groundWireKick,n.vz+=n.vz/t*le.groundWireKick),e)n.vy=Math.max(n.vy,n.rope.low?le.lowHop:le.groundWireHop);else{let i=Math.max(0,-n.vy-6),s=Math.hypot(n.vx,n.vz);n.vy=Math.min(Math.max(n.vy,-6),0),s>.5&&i>0&&(n.vx+=n.vx/s*i*.5,n.vz+=n.vz/s*i*.5)}n.rope=null,n.zipping=!1,n.events.push({t:"unwire",auto:!1,ground:!0})}function ur(n,e){n.rope&&(n.rope=null,n.zipping=!1,n.vy>-4&&(n.vy+=le.releaseKick),n.zipExit||(n.vy=Math.min(n.vy,le.releaseVyMax)),n.events.push({t:"unwire",auto:!e}))}function hh(n,e,t,i,s){let r=le.radius;if(n.climbing||(n.vy-=le.gravity*t),!n.grounded){let f=1-le.drag*t*Math.hypot(n.vx,n.vy,n.vz)*.1;n.vx*=f,n.vz*=f}let a=Math.hypot(n.vx,n.vy,n.vz);if(a>le.maxSpeed){let f=le.maxSpeed/a;n.vx*=f,n.vy*=f,n.vz*=f}let o=n.x,l=n.y,c=n.z;if(n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rope&&n.rope.ground){let f=n.rope;f.t+=t;let m=f.x-n.x,x=f.y-(n.y+1.2),g=f.z-n.z,y=Math.hypot(m,x,g)||1,_=(n.vx*m+n.vy*x+n.vz*g)/y,b=n.y-dr(i,n.x,n.z,n.y).h;if(y<le.groundWireRelease||_<0&&f.t>.25||f.t>le.groundWireMaxT)zp(n,f.low||b>3);else if(b<.8&&!f.low)zp(n,!1);else{let S=le.groundWireAcc*t;n.vx+=m/y*S,n.vy+=x/y*S+le.gravity*(le.ropeG||1)*t*.9,n.vz+=g/y*S}}if(n.rope&&!n.rope.ground){let f=n.rope;f.t+=t,f.pull!=null&&(f.len=Math.max(f.pull,f.len-le.lowPull*t),n.vy<0&&(n.vy=0),f.len<=f.pull&&(f.pull=null));let m=n.x,x=n.y+1.2,g=n.z,y=m-f.x,_=x-f.y,b=g-f.z,S=Math.hypot(y,_,b);if(S>f.len){let w=y/S,U=_/S,z=b/S;n.x=f.x+w*f.len,n.y=f.y+U*f.len-1.2,n.z=f.z+z*f.len;let D=n.vx*w+n.vy*U+n.vz*z;if(D>0&&(n.vx-=D*w,n.vy-=D*U,n.vz-=D*z),U<-.35&&Math.hypot(n.vx,n.vy,n.vz)<le.reelVmax){let V=f.len,B=Math.max(le.minRope,V-Math.min(le.reelMax,le.reel+V*le.reelK)*t);if(B<V){let X=n.vx*w+n.vy*U+n.vz*z,G=Math.min(1.02,V/B);n.vx=X*w+(n.vx-X*w)*G,n.vy=X*U+(n.vy-X*U)*G,n.vz=X*z+(n.vz-X*z)*G,n.x=f.x+w*B,n.y=f.y+U*B-1.2,n.z=f.z+z*B,f.len=B}}S=f.len}let M=(n.x-f.x)*n.vx+(n.z-f.z)*n.vz>0;n.zipping||(M&&n.vy>0&&n.y+1.2-f.y>-S*.6&&f.t>.4||n.y+1.2>f.y+1||f.t>6)&&ur(n,!1)}let h=null;for(let f of W0(i,n.x,n.z)){if(n.y>=f.y1-.05||n.y+le.height<=f.y0)continue;let m=X0(f,n.x,n.z),x=f.hw+r-Math.abs(m.u),g=f.hl+r-Math.abs(m.v);if(x<=0||g<=0||f.oneWay)continue;if(l+le.height<=f.y0+.5&&Math.abs(m.u)<f.hw&&Math.abs(m.v)<f.hl){n.y=f.y0-le.height,n.vy>0&&(n.vy=0);continue}if(f.y1-n.y<=le.stepUp&&!s){n.y=f.y1,n.vy<0&&(n.vy=0);continue}if(l>=f.y1-.25){n.y=f.y1,n.vy<0&&(n.vy=0);continue}let y=0,_=0;x<g?y=Math.sign(m.u)||1:_=Math.sign(m.v)||1;let b=Math.min(x,g),S=y*m.c+_*m.s,M=-y*m.s+_*m.c;n.x+=S*b,n.z+=M*b;let w=n.vx*S+n.vz*M;w<0&&(-w>14&&!n.rope&&n.events.push({t:"bonk",speed:-w}),n.vx-=w*S,n.vz-=w*M),!f.noClimb&&(!h||f.y1>h.top)&&(h={nx:S,nz:M,top:f.y1,o:f})}if(h&&!s&&!n.climbing&&!n.sneaking&&e>0&&h.top-n.y>le.stepUp){let f=Math.sin(n.yaw),m=Math.cos(n.yaw);f*-h.nx+m*-h.nz>.55&&(n.rope&&ur(n,!1),n.climbing={nx:h.nx,nz:h.nz,top:h.top,slip:h.o.slip||0},n.events.push({t:"climb"}))}n.climbing&&!h?n.climbing.lat&&!s?(n.x=o,n.z=c,n.vx=-n.climbing.nx*2,n.vz=-n.climbing.nz*2):n.climbing=null:n.climbing&&h&&(n.climbing.nx=h.nx,n.climbing.nz=h.nz,n.climbing.top=h.top,n.climbing.slip=h.o.slip||0);let u=dr(i,n.x,n.z,Math.max(n.y,l)),p=n.grounded;if(n.y<=u.h+.02&&n.vy<=.01){let f=-n.vy;if(n.y=u.h,n.vy=0,!p){let m=n.airTime;n.lastAir=m,n.maxAir=Math.max(n.maxAir,m),n.events.push({t:"land",air:m,impact:f,roof:!!u.roof,combo:n.combo}),n.combo>=2&&n.events.push({t:"comboEnd",n:n.combo}),n.combo=0,n.groundedSince=n.t,n.rope&&n.rope.pull==null&&ur(n,!1)}n.grounded=!0,n.airTime=0,n.coyote=le.coyote,n.onRoof=!!u.roof,n.surf=u.roof?"roof":i.surfaceAt(n.x,n.z)}else n.y>u.h+.25||n.vy>.01?(p&&(n.coyote=le.coyote),n.grounded=!1,n.coyote=Math.max(0,n.coyote-t),n.airTime+=t,n.onRoof=!1):(n.y=u.h,n.vy=0,n.grounded=!0,n.airTime=0);if(n.grounded&&n.rope&&n.rope.ground?zp(n,!1):n.grounded&&n.rope&&n.rope.t>.3&&n.rope.pull==null&&ur(n,!1),n.groundY=u.h,n.y>(n.maxY||0)&&(n.maxY=n.y),n.roofTime=n.onRoof&&n.grounded?n.roofTime+t:0,n.y<le.waterY&&!n.falling){n.falling=!0,n.events.push({t:"splash",x:n.x,z:n.z}),n.rope=null,n.climbing=null;let f=n.safeHist.length?n.safeHist[Math.max(0,n.safeHist.length-6)]:n.respawnPoint;Z0(n,f)}i.ceilY&&n.y+le.height>i.ceilY&&(n.y=i.ceilY-le.height,n.vy>0&&(n.vy=0));let d=i.bounds;n.x=Dp(n.x,d.x0+2,d.x1-2),n.z=Dp(n.z,d.z0+2,d.z1-2)}var Qe={lives:3,immune:3,roomba:{R:12.5,h:6,wake:2,speed:[10.5,12.5],sight:150,second:70},cat:{wake:8,crouch:1,rest:2.6,afterHit:5,ringR:10,bodyR:7,leapMax:125,jumpUp:92,speed:78,swipeR:15,swipeUp:26,swipeSec:.65},mom:{enter:12,walk:[13,21],reach:150,reachY:150,reachYLate:200,lateAt:170,nozV:[16,26],suckR:34,suckAcc:34,catchR:4.8,cool:3.6,ramp:150},slipper:{warn:1.25,R:15},toy:{uses:3,lure:6.5,touchR:6.5,touchY:6,speed:46,kick:34,friction:.85,crouch:.45,pounceRest:.3,bored:1.4},old:{x:-146,y:135,z:290,r:12}},qn=(n,e,t)=>n<e?e:n>t?t:n,Fv=n=>{let e=((n>>>0)*2654435761>>>0)%2147483646+1,t=()=>(e=e*16807%2147483647)/2147483647;for(let i=0;i<6;i++)t();return t};function ph(n,e,t=1){let i=Fv(t*31+7),s=i(),r=i(),a=i(),o=i(),l={catBox:s<.11,catOnRoomba:s>=.11&&s<.23,phone:r<.3,cockroach:a<.3,oldMan:o<.22};return{world:n,me:e,seed:t,rnd:i,t:0,over:!1,won:!1,lives:Qe.lives,immune:0,by:null,catches:[],events:[],rare:l,way:0,best:0,items:{},itemsGot:[],airT:0,roombas:[J0(-30,165,0,i)],cat:{state:l.catBox?"box":"nap",x:105,y:0,z:150,yaw:-2.2,T:0,from:null,to:null,ring:null,ringT:0,seen:!1},mom:{in:!1,z:-70,x:Ls,yaw:0,noz:{x:Ls+18,y:30,z:-40,vx:0,vy:0,vz:0},cool:0,phoneAt:45+i()*40,phoneT:0,slipT:0,slip:null,slipAt:40+i()*50,spoke:0,sucked:!1,aim:!1,spotT:0,spotAt:-99,winT:0},oldSeen:!1,spokeT:0,toys:oh.map(h=>({...h,state:"idle",vx:0,vy:0,vz:0,spin:0,sq:0})),toyUses:Qe.toy.uses,toysUsed:0,lure:0,lureToy:null,catBored:0,toyEmptySaid:!1}}function J0(n,e,t,i){return{x:n,z:e,yaw:i()*6.28,on:!1,wakeAt:t,wait:0,turnT:0,chase:!1,gx:n,gz:e,bump:0}}var Bv=n=>({x:n.x,y:n.y+1.1,z:n.z});function wa(n,e,t,i,s){let r=n.me;if(n.immune>0||n.over)return!1;n.lives--,n.catches.push({by:e,at:n.t,way:n.way}),n.immune=Qe.immune,n.by=e,r.rope=null,r.climbing=null,r.grounded=!1,r.y+=.2;let a=r.x-t,o=r.z-s,l=Math.hypot(a,o)||1,c=e==="vac"?24:15;return r.vx=a/l*c,r.vz=o/l*c,r.vy=e==="vac"?15:13,r.stun=e==="vac"?.8:.55,n.events.push({t:"caught",by:e,lives:n.lives,x:r.x,y:r.y+1,z:r.z}),n.lives<=0&&(n.over=!0,n.events.push({t:"end",won:!1,by:e})),!0}function kv(n,e,t){let i=n.me,s=Qe.roomba;if(!e.on){n.t>=e.wakeAt+s.wake&&(e.on=!0,n.events.push({t:"roombaOn"}));return}if(e.wait>0){e.wait-=t;return}let r=s.speed[0]+(s.speed[1]-s.speed[0])*Math.min(1,n.t/120),a=i.y<7,o=Math.hypot(i.x-e.x,i.z-e.z);e.chase=a&&o<s.sight;let l=n.rare.catOnRoomba&&e===n.roombas[0]&&n.lure>0&&n.lureToy;if(l){let f=n.lureToy;e.chase=!0,e.gx=f.x,e.gz=f.z,Math.hypot(f.x-e.x,f.z-e.z)<s.R+5&&f.state!=="roll"&&$0(n,f)}else e.chase?(e.gx=i.x,e.gz=i.z):(e.turnT-=t,(e.turnT<=0||Math.hypot(e.gx-e.x,e.gz-e.z)<10)&&(e.turnT=3+n.rnd()*3,e.gx=qn(i.x+(n.rnd()-.5)*120,-150,150),e.gz=qn(i.z+(n.rnd()-.5)*120,20,470)));let h=Math.atan2(e.gx-e.x,e.gz-e.z)-e.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;e.bump>0?e.bump-=t:e.yaw+=qn(h,-3.4*t,3.4*t);let u=r*(l?1.5:e.chase?1:.75),p=e.x+Math.sin(e.yaw)*u*t,d=e.z+Math.cos(e.yaw)*u*t;lh(n.world,p,d,s.R)?lh(n.world,p,e.z,s.R)?lh(n.world,e.x,d,s.R)?(e.yaw+=(n.rnd()<.5?1:-1)*(.9+n.rnd()),e.bump=.55):e.z=d:e.x=p:(e.x=p,e.z=d),i.y<s.h&&o<s.R+.9&&wa(n,"roomba",e.x,0,e.z)&&(e.wait=1.8)}function Hv(n,e){let t=n.cat,i=n.me,s=Qe.cat;if(n.rare.catOnRoomba){let l=n.roombas[0];t.x=l.x,t.y=6,t.z=l.z,t.yaw=l.yaw,t.state="ride";return}if(t.state==="box")return;let r=n.lure>0?n.lureToy:null;if(r&&t.state==="nap"&&(t.state="rest",t.T=.3,n.events.push({t:"catWake",quiet:!0})),t.state==="nap"){n.t>=s.wake&&(t.state="rest",t.T=.4,n.events.push({t:"catWake"}));return}t.T-=e;let a=Math.hypot(i.x-t.x,i.z-t.z),o=i.y-t.y;if(t.state==="swipe"){if(t.T<=0){n.events.push({t:"swipe",x:t.x,y:t.y,z:t.z});let l=Math.hypot(i.x-t.x,i.z-t.z)<s.swipeR+2&&i.y-t.y<s.swipeUp+2&&i.y-t.y>-4&&wa(n,"cat",t.x,t.y,t.z);t.state="rest",t.T=l?s.afterHit:s.rest}return}if(t.state==="rest"&&r){if(t.yaw=Math.atan2(r.x-t.x,r.z-t.z),t.T>0)return;let l=qn(r.x+r.vx*.35,mn.x0+8,mn.x1-8),c=qn(r.z+r.vz*.35,mn.z0+8,mn.z1-8),h={x:l,y:hr(n.world,l,c,r.y+1),z:c};t.state="crouch",t.T=Qe.toy.crouch,t.to=h,t.ring=null,t.forToy=!0,n.events.push({t:"crouch",quiet:!0});return}if(t.state==="rest"){if(t.yaw=Math.atan2(i.x-t.x,i.z-t.z),t.T>0)return;if(n.catBored>0){t.T=n.catBored,n.catBored=0;return}if(a<s.swipeR&&o>2&&o<s.swipeUp){t.state="swipe",t.T=s.swipeSec,n.events.push({t:"swipeWarn"});return}let l=i.grounded?.45:.75,c=i.x+i.vx*l,h=i.z+i.vz*l,u=null,p=hr(n.world,c,h,Math.max(i.y,0)+1);if(Math.hypot(c-Ft.x,h-Ft.z)<75&&i.y>110){t.T=.6;return}if(Math.hypot(c-t.x,h-t.z)<=s.leapMax&&p-t.y<=s.jumpUp&&Math.abs(i.y-p)<40)u={x:c,y:p,z:h};else{let d=1e9;for(let f of B0){if(f.y-t.y>s.jumpUp||Math.hypot(f.x-t.x,f.z-t.z)>s.leapMax*1.6)continue;let m=Math.hypot(f.x-i.x,(f.y-i.y)*.6,f.z-i.z);m<d&&(d=m,u={x:qn(i.x,f.x-f.w,f.x+f.w),y:f.y,z:qn(i.z,f.z-f.l,f.z+f.l)})}u&&t.y===0&&u.y===0&&(u=null),(!u||Math.hypot(u.x-t.x,u.z-t.z)<6)&&(u=p<=t.y+s.jumpUp?{x:qn(c,t.x-s.leapMax,t.x+s.leapMax),y:0,z:qn(h,t.z-s.leapMax,t.z+s.leapMax)}:null)}if(!u){t.T=.5;return}u.y=hr(n.world,u.x,u.z,u.y+1),t.state="crouch",t.T=s.crouch,t.to=u,t.ring={x:u.x,y:u.y,z:u.z,r:s.ringR},n.events.push({t:"crouch"});return}if(t.state==="crouch"){if(t.yaw=Math.atan2(t.to.x-t.x,t.to.z-t.z),t.T<=0){t.state="leap",t.from={x:t.x,y:t.y,z:t.z};let l=Math.hypot(t.to.x-t.x,t.to.y-t.y,t.to.z-t.z);t.dur=Math.max(.5,l/s.speed),t.T=t.dur,t.apex=Math.max(t.y,t.to.y)+10+l*.12,n.events.push({t:"leap"})}return}if(t.state==="leap"){let l=1-Math.max(0,t.T)/t.dur,c=t.from,h=t.to;t.x=c.x+(h.x-c.x)*l,t.z=c.z+(h.z-c.z)*l;let u=c.y,p=h.y,d=t.apex;if(t.y=(1-l)*(1-l)*u+2*(1-l)*l*(2*d-(u+p)/2)+l*l*p,!t.forToy&&Math.hypot(i.x-t.x,i.y+1-(t.y+6),i.z-t.z)<s.bodyR&&wa(n,"cat",t.x,t.y,t.z)&&(t.hitT=1),t.T<=0){if(t.x=h.x,t.y=h.y,t.z=h.z,t.ring=null,t.state="rest",t.T=t.hitT?s.afterHit:s.rest,t.hitT=0,n.lure>0&&n.lureToy){let f=n.lureToy;t.T!==s.afterHit&&(t.T=Qe.toy.pounceRest),Math.hypot(f.x-t.x,f.z-t.z)<18&&$0(n,f)}n.events.push({t:"catLand",x:t.x,y:t.y,z:t.z,near:Math.hypot(i.x-t.x,i.z-t.z)}),!t.forToy&&Math.hypot(i.x-t.x,i.z-t.z)<s.ringR&&Math.abs(i.y-t.y)<11&&wa(n,"cat",t.x,t.y,t.z)&&(t.T=s.afterHit),t.forToy=!1}}}function Gv(n,e){let t=n.mom,i=n.me,s=Qe.mom,r=Math.min(1,n.t/s.ramp);if(n.t<s.enter)return;if(t.in||(t.in=!0,n.events.push({t:"momIn"})),t.cool=Math.max(0,t.cool-e),n.rare.phone&&t.phoneAt>0&&n.t>=t.phoneAt&&(t.phoneAt=0,t.phoneT=9,n.events.push({t:"phone"})),t.phoneT>0&&(t.phoneT-=e,t.phoneT<=0&&n.events.push({t:"phoneEnd"})),n.rare.cockroach&&t.slipAt>0&&n.t>=t.slipAt&&!t.phoneT&&i.y<110&&(t.slipAt=0,t.slip={x:i.x+i.vx*.4,z:i.z+i.vz*.4,y:hr(n.world,i.x,i.z,i.y+1),T:Qe.slipper.warn,r:Qe.slipper.R},n.events.push({t:"roach"})),t.slip&&(t.slip.T-=e,t.slip.T<=0)){let X=t.slip;t.slip=null,n.events.push({t:"slap",x:X.x,y:X.y,z:X.z}),Math.hypot(i.x-X.x,i.z-X.z)<X.r&&Math.abs(i.y-X.y)<8&&wa(n,"slipper",X.x,X.y,X.z)&&(t.winT=3)}let a=qn(i.z-55,-40,470),o=(s.walk[0]+(s.walk[1]-s.walk[0])*r)*(t.phoneT>0?0:1),l=a-t.z;t.walking=Math.abs(l)>2&&o>0,t.walking&&(t.z+=qn(l,-o*e,o*e)),t.spotT=Math.max(0,t.spotT-e),t.winT=Math.max(0,t.winT-e),(t.cool>0||t.phoneT>0)&&(t.aim=!1);let c=t.noz,h=t.x+22,u=48,p=t.z+30,d=n.t>=s.lateAt?s.reachYLate:s.reachY;n.t>=s.lateAt&&!t.late&&(t.late=!0,n.events.push({t:"late"}));let f=h,m=u,x=p,g=26;if(t.cool<=0&&t.phoneT<=0){let X=Math.hypot(i.x-t.x,i.y-60,i.z-t.z),G=t.late?500:s.reach;if(t.aim=X<G&&i.y<d,t.aim&&!t.wasAim&&n.t-t.spotAt>7&&n.t>s.enter+1.5&&(t.spotAt=n.t,t.spotT=1.5,n.events.push({t:"momSpot"})),t.wasAim=t.aim,t.aim)f=i.x+i.vx*.25,m=i.y+1.1+i.vy*.2,x=i.z+i.vz*.25;else{let W=Math.atan2(i.x-t.x,i.z-t.z);f=t.x+Math.sin(W)*s.reach*.75,x=t.z+Math.cos(W)*s.reach*.75,m=Math.min(d-10,i.y)}g=s.nozV[0]+(s.nozV[1]-s.nozV[0])*r}let y=f-c.x,_=m-c.y,b=x-c.z,S=Math.hypot(y,_,b)||1,M=Math.min(S,g*e);c.x+=y/S*M,c.y+=_/S*M,c.z+=b/S*M;let w=hr(n.world,c.x,c.z,c.y+1);c.y<w+1.5&&(c.y=w+1.5),c.active=t.cool<=0&&t.phoneT<=0;let U=Bv(i),z=c.x-U.x,D=c.y-U.y,V=c.z-U.z,B=Math.hypot(z,D,V)||1;if(t.dist=B,t.sucking=!1,c.active&&B<s.suckR&&n.immune<=0){t.sucking=!0;let X=s.suckAcc*(1-B/s.suckR)*(i.rope?.55:1)*e/B;i.vx+=z*X,i.vy+=D*X,i.vz+=V*X,i.climbing&&B<14&&(i.climbing=null,n.events.push({t:"peeled"}))}c.active&&B<s.catchR&&wa(n,"vac",c.x,c.y,c.z)&&(t.cool=s.cool,t.winT=s.cool,n.events.push({t:"momWin"}))}function Up(n){let e=n.mom;return n.over?n.won?"angry":n.by==="vac"||n.by==="slipper"?"win":"search":e.phoneT>0?"phone":e.winT>0?"win":e.slip?"angry":e.spotT>0?"spot":e.sucking||e.noz.active&&e.dist<48?"angry":e.aim?"normal":"search"}function $0(n,e,t){let i=t??n.rnd()*Math.PI*2,s=Qe.toy.kick;e.state="roll",e.vx=Math.sin(i)*s,e.vz=Math.cos(i)*s,e.sq=.45,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z})}function K0(n,e,t,i){if(e<mn.x0+2.4||e>mn.x1-2.4||i<mn.z0+2.4||i>mn.z1-2.4)return!0;for(let r of n.nearby(e,i))if(!(r.noHit||r.oneWay||r.kind==="bound"||r.y0>t+2||r.y1<=t+.5)&&Math.abs(e-r.cx)<r.hw+2.4&&Math.abs(i-r.cz)<r.hl+2.4)return!0;return!1}function Vv(n,e,t){let i=Math.hypot(e.vx,e.vz),s=e.x+e.vx*t,r=e.z+e.vz*t;K0(n.world,s,e.y,e.z)?(e.vx*=-.7,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0})):e.x=s,K0(n.world,e.x,e.y,r)?(e.vz*=-.7,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0})):e.z=r;let a=hr(n.world,e.x,e.z,e.y+.5);if(e.y>a+.01)e.vy-=90*t,e.y+=e.vy*t,e.y<=a&&(e.y=a,e.vy=0,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0}));else{e.y=a,e.vy=0;let o=Math.exp(-Qe.toy.friction*t);e.vx*=o,e.vz*=o}e.spin+=i*t*.5,e.sq-=t,e.sq<=0&&i>8&&(e.sq=.75,n.events.push({t:"toySqueak",x:e.x,y:e.y,z:e.z,soft:!0})),i<3&&e.y<=a+.01&&(e.vx=e.vz=0,e.state=n.lureToy===e?"stop":"dead")}function Wv(n,e){let t=n.me,i=Qe.toy;if(n.lure>0&&(n.lure-=e,n.lure<=0)){let s=n.lureToy;n.lure=0,n.lureToy=null,s&&(s.state="dead",s.vx=s.vz=0),n.catBored=i.bored,n.events.push({t:"lureEnd",ride:n.rare.catOnRoomba,box:n.rare.catBox})}for(let s of n.toys){if(s.state==="roll"||s.state==="dead"&&(s.vx||s.vz)){Vv(n,s,e);continue}if(s.state!=="idle"||Math.hypot(t.x-s.x,t.z-s.z)>i.touchR||Math.abs(t.y-s.y)>i.touchY)continue;let r=Math.hypot(t.vx,t.vz)>2?Math.atan2(t.vx,t.vz):Math.atan2(s.x-t.x,s.z-t.z);if(n.rare.catBox){s.state="dead",s.vx=Math.sin(r)*i.speed,s.vz=Math.cos(r)*i.speed,s.sq=.5,n.events.push({t:"toyHit",id:s.id,x:s.x,y:s.y,z:s.z,left:n.toyUses,mode:"box"},{t:"toySqueak",x:s.x,y:s.y,z:s.z});continue}if(n.lure>0)continue;if(n.toyUses<=0){n.toyEmptySaid||(n.toyEmptySaid=!0,n.events.push({t:"toyEmpty",x:s.x,y:s.y,z:s.z}));continue}n.toyUses--,n.toysUsed++,n.lure=i.lure,n.lureToy=s,n.catBored=0,s.state="roll",s.vx=Math.sin(r)*i.speed,s.vz=Math.cos(r)*i.speed,s.sq=.5;let a=n.cat;a.state==="crouch"||a.state==="swipe"?(a.state="rest",a.T=.15,a.ring=null,a.to=null):a.state==="rest"&&(a.T=Math.min(a.T,.3)),n.events.push({t:"toyHit",id:s.id,x:s.x,y:s.y,z:s.z,left:n.toyUses,mode:n.rare.catOnRoomba?"ride":"cat"},{t:"toySqueak",x:s.x,y:s.y,z:s.z})}}function Op(n,e){if(n.over)return;n.t+=e;let t=n.me;n.immune=Math.max(0,n.immune-e);for(let s of n.roombas)kv(n,s,e);if(n.over||(n.t>=Qe.roomba.second&&n.roombas.length<2&&(n.roombas.push(J0(150,40,n.t-Qe.roomba.wake+2,n.rnd)),n.events.push({t:"roomba2"})),Wv(n,e),Hv(n,e),n.over)||(Gv(n,e),n.over))return;for(let s of ah)if(!n.items[s.id]&&Math.hypot(t.x-s.x,t.z-s.z)<s.r&&Math.abs(t.y-s.y)<7){if(s.heal&&n.lives>=Qe.lives)continue;n.items[s.id]=!0,s.heal?n.lives=Math.min(Qe.lives,n.lives+1):n.itemsGot.push(s.id),n.events.push({t:"item",id:s.id,heal:!!s.heal,x:s.x,y:s.y,z:s.z})}n.rare.oldMan&&!n.oldSeen&&Math.hypot(t.x-Qe.old.x,t.z-Qe.old.z)<Qe.old.r&&Math.abs(t.y-Qe.old.y)<6&&(n.oldSeen=!0,n.lives=Math.min(Qe.lives,n.lives+1),n.events.push({t:"oldMan"}));let i=ss[n.way];if(i&&n.way<ss.length-1){let s=Math.hypot(t.x-i.x,t.z-i.z)<i.r&&t.y>i.y-12,r=!1;for(let a=n.way+1;a<ss.length-1;a++){let o=ss[a];Math.hypot(t.x-o.x,t.z-o.z)<o.r&&t.y>o.y-12&&(n.way=a,r=!0)}s||t.y>i.y+15&&t.z>i.z?(n.way++,n.events.push({t:"way",i:n.way})):r&&n.events.push({t:"way",i:n.way})}n.best=Math.max(n.best,Xv(n)),Math.hypot(t.x-Ft.x,t.z-Ft.z)<Ft.r&&Math.abs(t.y-Ft.y)<6&&(n.over=!0,n.won=!0,n.best=1,n.events.push({t:"end",won:!0}))}function Xv(n){let e=n.me,t=Math.hypot(Ft.x-cr.x,Ft.z-cr.z)+Ft.y,i=Math.hypot(Ft.x-e.x,Ft.z-e.z)+Math.abs(Ft.y-e.y);return qn(1-i/t,0,.99)}function Q0(n){return n.won?n.catches.length===0?3:2:n.best>=.55?1:0}function eg(n){let e=n.me,t=[];for(let s of n.roombas)s.on&&t.push({k:"roomba",x:s.x,y:3,z:s.z,d:Math.hypot(s.x-e.x,s.z-e.z)});let i=n.cat;return i.state!=="nap"&&i.state!=="box"&&i.state!=="ride"&&!(n.lure>0)&&t.push({k:"cat",x:i.x,y:i.y+8,z:i.z,d:Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z)}),n.mom.in&&n.mom.noz.active&&t.push({k:"vac",x:n.mom.noz.x,y:n.mom.noz.y,z:n.mom.noz.z,d:n.mom.dist}),t}var ft=(n,e={})=>new Tt({color:n,roughness:.6,...e}),Nt=n=>(n.castShadow=!0,n),Jo=class{constructor(e){let t=this.g=new ot,i=Qe.roomba.R,s=Nt(new ce(new It(i*.97,i,5.6,40),ft(2369067,{roughness:.28,metalness:.25})));s.position.y=3.6;let r=new ce(new It(i*.72,i*.76,.5,36),ft(3816772,{roughness:.16,metalness:.5}));r.position.y=6.5;let a=new ce(new wn(3.3,.35,8,26),ft(12172995,{metalness:.8,roughness:.25}));a.rotation.x=Math.PI/2,a.position.set(0,6.85,-1),this.led=new ce(new ri(2.6,20),new rt({color:5232250})),this.led.rotation.x=-Math.PI/2,this.led.position.set(0,6.9,-1);let o=new ce(new wn(i*.98,.7,6,36,Math.PI*.9),ft(4934994));o.rotation.x=Math.PI/2,o.rotation.z=Math.PI/2-Math.PI*.45,o.position.y=2.2,t.add(s,r,a,this.led,o),this.brushes=[];for(let l of[-1,1]){let c=new ot;c.position.set(l*i*.72,.5,i*.72);for(let h=0;h<3;h++){let u=new ce(new Wt(.28,.1,7.5).translate(0,0,3.75),ft(1118481));u.rotation.y=h*2.09,c.add(u)}t.add(c),this.brushes.push(c)}this.pupils=[];for(let l of[-1,1]){let c=new ce(new lt(2.9,18,10).scale(1,1,.45),ft(16316660,{roughness:.2}));c.position.set(l*3.5,5.6,i*.68),c.rotation.x=-.72;let h=new ce(new lt(1.25,12,8),ft(1118481,{roughness:.2}));h.position.set(0,0,1.2),c.add(h),t.add(c),this.pupils.push(h)}this.t=0,t.visible=!1,e.add(t)}update(e,t,i){let s=this.g;s.visible=!0,s.position.set(e.x,0,e.z),s.rotation.y=e.yaw,this.t+=t;for(let r of this.brushes)r.rotation.y+=t*11;this.led.material.color.setHex(e.chase?16729648:5232250),s.position.y=e.chase?Math.abs(Math.sin(this.t*30))*.08:0;for(let r=0;r<2;r++){let a=this.pupils[r],o=this.t*(e.chase?13:3)+r*2.1;a.position.x=Math.sin(o)*.85,a.position.y=Math.cos(o*1.4)*.85}}},jv=()=>it(512,256,(n,e,t)=>{n.fillStyle="#d98a3d",n.fillRect(0,0,e,t);for(let s=0;s<3200;s++){n.strokeStyle=`rgba(${90+Math.random()*150},${50+Math.random()*90},${10+Math.random()*30},.16)`,n.lineWidth=1;let r=Math.random()*e,a=Math.random()*t;n.beginPath(),n.moveTo(r,a),n.lineTo(r+8+Math.random()*7,a+Math.random()*3-1.5),n.stroke()}n.strokeStyle="rgba(120,58,14,.8)",n.lineCap="round";for(let s=0;s<15;s++){n.lineWidth=8+Math.random()*7;let r=10+s*34;n.beginPath(),n.moveTo(r,-4),n.quadraticCurveTo(r+12,62,r-4,96+Math.random()*30),n.stroke()}let i=n.createLinearGradient(0,t*.5,0,t);i.addColorStop(0,"rgba(247,234,212,0)"),i.addColorStop(1,"rgba(247,234,212,1)"),n.fillStyle=i,n.fillRect(0,0,e,t)}),qv=()=>it(512,512,(n,e,t)=>{n.fillStyle="#d98a3d",n.fillRect(0,0,e,t);for(let i=0;i<2600;i++){n.strokeStyle=`rgba(${100+Math.random()*130},${60+Math.random()*70},20,.16)`,n.lineWidth=1;let s=Math.random()*e,r=Math.random()*t;n.beginPath(),n.moveTo(s,r),n.lineTo(s+Math.random()*6-3,r+8),n.stroke()}n.strokeStyle="rgba(120,58,14,.85)",n.lineWidth=11,n.lineCap="round";for(let i of[-34,0,34])n.beginPath(),n.moveTo(256+i,110),n.lineTo(256+i*.8,186),n.stroke();for(let i of[-1,1])n.beginPath(),n.moveTo(256+i*150,286),n.lineTo(256+i*198,268),n.stroke(),n.beginPath(),n.moveTo(256+i*150,318),n.lineTo(256+i*196,318),n.stroke();n.fillStyle="#f7ead4",n.beginPath(),n.ellipse(256,358,88,62,0,0,7),n.fill(),n.fillStyle="#c9575f",n.beginPath(),n.moveTo(240,318),n.lineTo(272,318),n.lineTo(256,340),n.closePath(),n.fill(),n.strokeStyle="#3a2413",n.lineWidth=6,n.beginPath(),n.moveTo(256,340),n.lineTo(256,360),n.moveTo(256,360),n.quadraticCurveTo(232,384,212,362),n.moveTo(256,360),n.quadraticCurveTo(280,384,300,362),n.stroke()});function Yv(){let n=document.createElement("canvas");n.width=128,n.height=128;let e=new si(n);e.colorSpace=yt;let t=i=>{let s=n.getContext("2d");s.clearRect(0,0,128,128),s.fillStyle="#e6cd3e",s.beginPath(),s.arc(64,64,60,0,7),s.fill(),s.fillStyle="#7da32d",s.beginPath(),s.arc(64,64,34,0,7),s.fill(),s.fillStyle="#0d0d0d",s.beginPath(),s.ellipse(64,64,i,54,0,0,7),s.fill(),s.fillStyle="rgba(255,255,255,.9)",s.beginPath(),s.arc(84,42,11,0,7),s.fill(),s.lineWidth=7,s.strokeStyle="#2a1b0f",s.beginPath(),s.arc(64,64,60,0,7),s.stroke(),e.needsUpdate=!0};return t(12),e.setSlit=t,e}var mh=class{constructor(e){let t=this.g=new ot;this.inner=new ot,t.add(this.inner);let i=ft(16777215,{map:jv(),roughness:.95}),s=ft(14256701,{roughness:.95}),r=ft(16247508,{roughness:1}),a=this.body=new ot;this.inner.add(a),a.position.y=11;let o=Nt(new ce(new lt(9,24,16).scale(1,.95,2.05),i));a.add(o);let l=Nt(new ce(new lt(7.6,20,14),i));l.position.set(0,1.2,12),a.add(l);let c=this.head=new ot;c.position.set(0,7,18),a.add(c);let h=Nt(new ce(new lt(8,28,20).scale(1.12,.95,.95),ft(16777215,{map:qv(),roughness:.95})));h.rotation.y=-Math.PI/2,c.add(h),this.skull=h;let u=new Si(3.3,6.4,4).rotateY(Math.PI/4);for(let y of[-1,1]){let _=Nt(new ce(u,s));_.position.set(y*5.2,7.3,-.6),_.rotation.z=-y*.25,_.scale.z=.5,c.add(_);let b=new ce(new Si(2.1,4.2,3),ft(15247520,{roughness:1}));b.position.set(y*5.2,6.8,.4),b.rotation.z=-y*.25,b.scale.z=.3,c.add(b)}{let y=Nt(new ce(new lt(3.4,16,10).scale(1.15,.72,.75),r));y.position.set(0,-2.6,6.6),c.add(y);let _=new ce(new lt(.72,10,6).scale(1.2,.8,.7),ft(13195103));_.position.set(0,-1.1,8.9),c.add(_)}this.eyeT=Yv(),this.eyes=[];for(let y of[-1,1]){let _=new ce(new ri(2.05,22),new rt({map:this.eyeT,transparent:!0}));_.position.set(y*3.5,1.6,7.45),_.rotation.y=y*.28,c.add(_),this.eyes.push(_)}let p=[];for(let y of[-1,1])for(let _=0;_<3;_++)p.push(0,0,0,y*11,-1+_*1.1+y*0,-.8);let d=new Ss({color:16777215});for(let y of[-1,1]){let _=[];for(let S=0;S<3;S++)_.push(new A(y*3.4,-1.6,7)),_.push(new A(y*12,-2.6+S*1.5,5));let b=new Js(new Ke().setFromPoints(_),d);c.add(b)}this.legs=[];for(let[y,_,b]of[[-1,11,-1],[1,11,-1],[-1,-12,-1],[1,-12,-1]]){let S=new ot;S.position.set(y*5.4,b,_),a.add(S);let M=Nt(new ce(new bi(2.5,8,4,10).translate(0,-5.5,0),s));S.add(M);let w=Nt(new ce(new lt(2.8,12,8).scale(1,.72,1.3),r));w.position.set(0,-10.2,.8),S.add(w),this.legs.push(S)}this.tail=[];let f=a,m=2,x=-17;for(let y=0;y<7;y++){let _=new ot;_.position.set(0,m,x),f.add(_);let b=Nt(new ce(new bi(1.9-y*.14,3.2,3,8).rotateX(Math.PI/2).translate(0,0,-2.3),y%2?s:ft(9062939,{roughness:1})));_.add(b),this.tail.push(_),f=_,m=0,x=-4.6}this.box=new ot;let g=ft(12291932,{roughness:1,side:ct});for(let[y,_,b,S]of[[34,1,0,20],[34,1,0,-20],[1,41,-17,0],[1,41,17,0]]){let M=Nt(new ce(new Wt(y,15,_),g));M.position.set(b,7.5,S),this.box.add(M)}this.box.visible=!1,t.add(this.box),this.t=0,this.k=0,this.kWas="",e.add(t),this.ring=new ce(new ai(.82,1,44),new rt({color:16736058,transparent:!0,opacity:.85,side:ct,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=4,this.ring.visible=!1,e.add(this.ring),this.fill=new ce(new ri(1,44),new rt({color:16736058,transparent:!0,opacity:.22,side:ct,depthWrite:!1,fog:!1})),this.fill.rotation.x=-Math.PI/2,this.fill.renderOrder=4,this.fill.visible=!1,e.add(this.fill)}update(e,t,i){let s=this.g;this.t+=t;let r=this.t;s.position.set(e.x,e.y,e.z),s.rotation.y=e.yaw;let a=e.state,o=0,l=Math.sin(r*2.2)*.25,c=0,h=0,u=0,p=this.body,d=this.legs;a==="nap"?(u=1,c=.55,l=Math.sin(r*.8)*.1):a==="box"?(u=1,l=0,c=-.05):a==="ride"?(u=.6,c=-.08):a==="rest"?u=.35:a==="crouch"?(o=1,l=Math.sin(r*14)*.5):a==="leap"?(h=1,l=-.5):a==="swipe"&&(u=.2);let f=o?-3.6:0;p.position.y+=(11+f+(u?-2.6*u:0)-p.position.y)*Math.min(1,t*10),p.rotation.x+=((o?.16:h?-.28:u?-.34*u:0)-p.rotation.x)*Math.min(1,t*10),p.position.x=o?Math.sin(r*17)*1.3:0,p.rotation.y=o?Math.sin(r*17)*.1:0,this.head.rotation.x+=(c-this.head.rotation.x)*Math.min(1,t*6);let m=o?.8:u?.9*u:0;for(let b=0;b<4;b++){let S=d[b],w=b<2?h?-1.2:-.12*m:h?1.1:m*1.05;a==="swipe"&&b===1&&(w=-2.2+Math.sin(r*26)*.5),S.rotation.x+=(w-S.rotation.x)*Math.min(1,t*14)}let x=this.tail,g=a==="leap"?.1:.22;for(let b=0;b<x.length;b++)x[b].rotation.y=Math.sin(r*(o?8:2)+b*.55)*(o?.3:.18)+l*.12,x[b].rotation.x=-g*(b===0?2:1);let y=a==="crouch"||a==="leap"?"wide":a==="nap"?"nap":"slit";if(y!==this.kWas){this.kWas=y,this.eyeT.setSlit(y==="wide"?26:10);for(let b of this.eyes)b.scale.y=y==="nap"?.12:1}if(this.box.visible=a==="box",this.inner.scale.setScalar(a==="box"?.92:a==="ride"?.7:1),i){let b=i.x-e.x,S=i.z-e.z,M=Math.atan2(b,S)-e.yaw;this.head.rotation.y=Math.max(-.8,Math.min(.8,Math.atan2(Math.sin(M),Math.cos(M))))}let _=e.ring;if(this.ring.visible=this.fill.visible=!!_,_){let b=1+Math.sin(r*14)*.03;this.ring.position.set(_.x,_.y+.6,_.z),this.ring.scale.setScalar(_.r*b),this.fill.position.set(_.x,_.y+.55,_.z),this.fill.scale.setScalar(_.r)}}},Fp=new URL(import.meta.url).search,tg={},Rn={done:!1,loaded:0,failed:0,faces:{},big:{}};function ng(){let n=new $i,e=Object.keys(ch.poses),t=r=>new Promise(a=>n.load(`img/mom_${r}.webp${Fp}`,o=>{o.colorSpace=yt,o.anisotropy=4,tg[r]=o,Rn.loaded++,a()},void 0,()=>{Rn.failed++,a()})),i=r=>new Promise(a=>{let o=new Image;o.onload=()=>{Rn.faces[r]=o,a()},o.onerror=()=>a(),o.src=`img/face_${r}.webp${Fp}`}),s=r=>{let a=new Image;a.onload=()=>{Rn.big[r]=a,a.decode&&a.decode().catch(()=>{})},a.src=`img/big_${r}.webp${Fp}`};return Promise.all(e.flatMap(r=>[t(r),i(r)])).then(()=>{Rn.done=!0;for(let r of["win","spot","phone","angry"])s(r)})}var gh=class{constructor(e){this.scene=e,this.g=new ot,this.g.visible=!1,e.add(this.g),this.t=0,this.key=null,this.flip=1,this.sx=1,this.pop=0;let t=this.mat=new rt({transparent:!0,alphaTest:.35,side:ct,toneMapped:!1,color:16774888}),i=this.paper=new ce(new Rt(1,1).translate(0,.5,0),t);i.castShadow=!0,i.visible=!1,this.g.add(i),this.stub=new ce(new bi(28,72,4,12).translate(0,64,0),ft(11889276,{roughness:1})),this.stub.visible=!1,this.g.add(this.stub);{let p=it(128,128,(d,f)=>{let m=d.createRadialGradient(64,64,8,64,64,64);m.addColorStop(0,"rgba(30,20,10,.5)"),m.addColorStop(1,"rgba(30,20,10,0)"),d.fillStyle=m,d.fillRect(0,0,f,f)});this.blob=new ce(new Rt(1,1),new rt({map:p,transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.scale.set(100,62,1),this.blob.visible=!1,this.blob.renderOrder=1,e.add(this.blob)}let s=this.can=new ot,r=Nt(new ce(new lt(15,24,14).scale(1.05,.72,1.5),ft(11875883,{roughness:.3})));r.position.y=13;let a=new ce(new lt(15,20,10,0,6.3,0,1.2).scale(.8,.5,1.05),ft(2369067,{roughness:.35}));a.position.y=19;for(let p of[-1,1]){let d=Nt(new ce(new It(9,9,4,18).rotateZ(Math.PI/2),ft(1776671)));d.position.set(p*15,9,-6),s.add(d)}s.add(r,a),s.visible=!1,e.add(s);let o=this.noz=new ot,l=Nt(new ce(new Wt(24,4.4,9),ft(2829617,{roughness:.4})));o.add(l);let c=new ce(new Wt(21,2.4,.4),new rt({color:328965}));c.position.set(0,-.3,4.6),o.add(c);let h=new ce(new Wt(22,.8,.8),ft(11745835));h.position.set(0,-2,4.3),o.add(h);let u=Nt(new ce(new It(2.4,2.8,8,12).rotateX(Math.PI/2-.6),ft(9409689,{metalness:.6,roughness:.3})));u.position.set(0,3.2,-4),o.add(u),o.visible=!1,e.add(o),this.segN=36,this.hose=new qi(new It(2.3,2.3,1,8),ft(7830656,{roughness:.6}),this.segN),this.hose.frustumCulled=!1,this.hose.visible=!1,e.add(this.hose),this._m=new Le,this._q=new Et,this._a=new A,this._b=new A,this._c=new A,this._d=new A,this._h=new A,this._e=new A,this._s=new A,this._p=new A,this._t1=new A,this._t2=new A,this._up=new A(0,1,0)}setPose(e){if(e===this.key)return;let t=tg[e];if(!t){this.key||(this.stub.visible=!0);return}this.key=e,this.mat.map=t,this.mat.needsUpdate=!0,this.paper.visible=!0,this.stub.visible=!1,this.pop=1}update(e,t,i,s){if(this.t+=t,!e.in){this.g.visible=!1,this.can.visible=this.noz.visible=this.hose.visible=this.blob.visible=!1;return}this.g.visible=!0,this.can.visible=this.noz.visible=this.hose.visible=this.blob.visible=!0,this.setPose(s),this.g.position.set(e.x,0,e.z),this.blob.position.set(e.x,.08,e.z);let r=Math.atan2(i.position.x-e.x,i.position.z-e.z);this.g.rotation.y=r;let a=e.noz;((a.x-e.x)*Math.cos(r)-(a.z-e.z)*Math.sin(r))*this.flip<-14&&(this.flip=-this.flip),this.sx+=(this.flip-this.sx)*Math.min(1,t*12);let l=ch.poses[this.key]||ch.poses.normal,c=this.paper,h=this.t;this.pop=Math.max(0,this.pop-t*5);let u=e.walking?Math.abs(Math.sin(h*4.2))*2.6:0,p=s==="phone"?Math.sin(h*3)*.05:s==="win"?Math.sin(h*9)*.03:e.walking?Math.sin(h*4.2)*.035:Math.sin(h*1.3)*.012,d=s==="angry"?Math.sin(h*47)*.5:0;c.position.set(d,u,0),c.rotation.z=p,c.scale.set(l.w*(Math.abs(this.sx)<.04?.04*this.flip:this.sx),l.h*(1+this.pop*.07),1);let f=this.can,m=e.x-26,x=e.z-22;f.position.x+=(m-f.position.x)*Math.min(1,t*2),f.position.z+=(x-f.position.z)*Math.min(1,t*2),f.rotation.y=Math.atan2(e.x-f.position.x,e.z-f.position.z);let g=this.noz;g.position.set(a.x,a.y+Math.sin(h*34)*(a.active?.2:0),a.z),this._look&&g.lookAt(this._look),this.g.updateMatrixWorld(!0);let y=this._h.set(l.hand[0]-.5,l.hand[1],0).applyMatrix4(c.matrixWorld);y.x+=Math.sin(r)*1.5,y.z+=Math.cos(r)*1.5;let _=this._a.set(f.position.x,22,f.position.z),b=this._c.set(a.x,a.y+3,a.z),S=this._b.set((_.x+y.x)/2,Math.min(_.y,y.y)*.4,(_.z+y.z)/2),M=y.distanceTo(b)*.3,w=Math.cos(r)*this.sx,U=-Math.sin(r)*this.sx,z=this._e.set(y.x+w*M*.72,y.y-M*.72,y.z+U*M*.72),D=14,V=(X,G,W,K,Z)=>{let ne=1-K;return Z.set(ne*ne*X.x+2*ne*K*G.x+K*K*W.x,ne*ne*X.y+2*ne*K*G.y+K*K*W.y,ne*ne*X.z+2*ne*K*G.z+K*K*W.z)},B=this._p;V(_,S,y,0,B);for(let X=1;X<=this.segN;X++){let G=X<=D?V(_,S,y,X/D,this._s):V(y,z,b,(X-D)/(this.segN-D),this._s),W=this._d.subVectors(G,B),K=W.length()||1;this._q.setFromUnitVectors(this._up,W.divideScalar(K));let Z=1+.12*(X%2);this._m.compose(this._t1.set((G.x+B.x)/2,(G.y+B.y)/2,(G.z+B.z)/2),this._q,this._t2.set(Z,K+.3,Z)),this.hose.setMatrixAt(X-1,this._m),B.copy(G)}this.hose.instanceMatrix.needsUpdate=!0}lookNoz(e,t,i){this._look=this._look||new A,this._look.set(e,t,i)}};function Zv(){let n=[],e=(l,c)=>{let h=new Se(c),u=l.attributes.position.count,p=new Float32Array(u*3);for(let d=0;d<u;d++)p[d*3]=h.r,p[d*3+1]=h.g,p[d*3+2]=h.b;l.setAttribute("color",new st(p,3)),n.push(l.index?l.toNonIndexed():l)};e(new lt(1,16,10).scale(2.3,2,3.8).translate(0,2.1,0),9211798),e(new Si(1.5,3,12).rotateX(Math.PI/2).translate(0,1.9,4.5),10198693),e(new lt(.5,8,6).translate(0,1.9,6),15043226);for(let l of[-1,1])e(new lt(1.25,10,8).scale(1,1,.3).translate(l*1.4,3.9,2.5),15311791),e(new lt(.34,8,6).translate(l*.75,2.7,4.5),1052688);e(new It(.22,.22,1.6,6).translate(0,4.6,-1),13218904),e(new wn(.7,.2,6,12).translate(0,5.8,-1),13218904);{let l=new Es([new A(0,2,-3.6),new A(.8,1,-5.6),new A(-.8,.4,-7.6),new A(.6,.3,-9.4)]);e(new As(l,12,.22,5),12794415)}let t=0;for(let l of n)t+=l.attributes.position.count;let i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3),a=0;for(let l of n)i.set(l.attributes.position.array,a*3),s.set(l.attributes.normal.array,a*3),r.set(l.attributes.color.array,a*3),a+=l.attributes.position.count;let o=new Ke;return o.setAttribute("position",new st(i,3)),o.setAttribute("normal",new st(s,3)),o.setAttribute("color",new st(r,3)),o}var yh=class{constructor(e){let t=Zv();this.mat=new Tt({vertexColors:!0,roughness:.92}),this.matOff=new Tt({vertexColors:!0,roughness:1,color:7170662}),this.items=oh.map(()=>{let i=new ot,s=Nt(new ce(t,this.mat));i.add(s);let r=new _s(sg());return r.position.y=8,r.scale.setScalar(10),i.add(r),e.add(i),{g:i,m:s,sp:r}}),this.t=0}update(e,t){this.t+=t,e.toys.forEach((i,s)=>{let r=this.items[s];r.g.position.set(i.x,i.y,i.z);let a=i.state==="idle"&&e.toyUses>0;r.sp.visible=a,r.m.material=i.state==="idle"&&!a?this.matOff:this.mat,i.state==="idle"?(r.m.rotation.set(0,s*1.9+Math.sin(this.t*2+s)*.1,a?Math.sin(this.t*13+s)*.03:0),r.m.position.y=0):i.state==="dead"&&!(i.vx||i.vz)?(r.m.rotation.set(0,s*1.9,1.55),r.m.position.y=2):(Math.hypot(i.vx,i.vz)>1&&(r.m.rotation.y=Math.atan2(i.vx,i.vz)),r.m.rotation.x=i.spin,r.m.rotation.z=Math.sin(i.spin*.7)*.5,r.m.position.y=2.2+Math.abs(Math.sin(i.spin*1.3))*1.2)})}},vh=class{constructor(e){let t=this.g=new ot,i=Nt(new ce(new lt(1,18,10).scale(11,1.2,24),ft(9200185,{roughness:1}))),s=Nt(new ce(new lt(1,18,10,0,6.3,0,1.45).scale(10,8,12),ft(13923198,{roughness:1})));s.position.set(0,.4,10),t.add(i,s),t.visible=!1,e.add(t),this.ring=new ce(new ai(.82,1,40),new rt({color:16736058,transparent:!0,opacity:.85,side:ct,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,e.add(this.ring),this.after=0}update(e,t){if(e){this.g.visible=!0,this.ring.visible=!0,this.ring.position.set(e.x,e.y+.6,e.z),this.ring.scale.setScalar(e.r);let i=Math.max(0,e.T/Qe.slipper.warn);this.g.position.set(e.x,e.y+1+150*i*i,e.z),this.g.rotation.set(i*1.3,i*2,0),this.after=1.1}else this.ring.visible=!1,this.after>0&&(this.after-=t,this.after<=0&&(this.g.visible=!1))}};function ig(n){let e={},t=(i,s,r)=>new Tt({map:it(i,s,r),roughness:.5});for(let i of ah){let s=new ot;if(s.position.set(i.x,i.y,i.z),i.id==="coin"){let a=Nt(new ce(new It(10,10,1.4,34),[ft(11117710,{metalness:.85,roughness:.35}),t(256,256,(o,l,c)=>{o.fillStyle="#c9c4ab",o.fillRect(0,0,l,c),o.strokeStyle="#7f7a64",o.lineWidth=10,o.beginPath(),o.arc(128,128,112,0,7),o.stroke(),o.fillStyle="#6d6853",o.font='bold 84px "BIZ UDPGothic",sans-serif',o.textAlign="center",o.fillText("500",128,156)}),ft(11117710)]));a.position.y=.8,s.add(a)}else if(i.id==="glasses"){let a=ft(8014370,{roughness:.3}),o=new Tt({color:13624814,transparent:!0,opacity:.4,roughness:.05,metalness:.3});for(let c of[-1,1]){let h=Nt(new ce(new wn(4,.42,8,24),a));h.position.set(c*5,4,0),s.add(h);let u=new ce(new ri(3.8,22),o);u.position.set(c*5,4,0),s.add(u);let p=Nt(new ce(new It(.3,.3,11,6).rotateX(Math.PI/2),a));p.position.set(c*9,4.2,-5.4),s.add(p)}let l=new ce(new wn(1.1,.34,6,10,Math.PI),a);l.position.set(0,4.3,0),s.add(l)}else if(i.id==="hesokuri"){let a=Nt(new ce(new Wt(.5,12,22),t(256,128,(o,l,c)=>{o.fillStyle="#c8a877",o.fillRect(0,0,l,c),o.fillStyle="#2b1d10",o.font='bold 48px "Klee One",serif',o.textAlign="center",o.fillText("ヘソクリ",l/2,62),o.font='bold 22px "Klee One",serif',o.fillText("見るな 父",l/2,100)})));a.position.set(0,6,0),a.rotation.z=-.12,s.add(a)}else if(i.id==="dvd"){let a=Nt(new ce(new Wt(14,20,2),t(180,256,(o,l,c)=>{o.fillStyle="#16161b",o.fillRect(0,0,l,c),o.fillStyle="#fff",o.fillRect(12,20,l-24,92),o.fillStyle="#111",o.font='bold 24px "BIZ UDPGothic",sans-serif',o.textAlign="center",o.fillText("確定申告",l/2,58),o.fillText("2014",l/2,92),o.fillStyle="#f2d24b",o.font='bold 18px "Klee One",serif',o.fillText("※家族は",l/2,160),o.fillText("再生しないこと",l/2,188)})));a.position.set(0,10,0),a.rotation.y=-Math.PI/2+.25,s.add(a)}else if(i.id==="ring"){let a=Nt(new ce(new wn(5.6,.85,10,32),ft(14002500,{metalness:.92,roughness:.16})));a.position.y=5.8,s.add(a)}else if(i.id==="chip"){let a=new lt(10,18,10).scale(1,.1,.75),o=a.attributes.position;for(let c=0;c<o.count;c++)o.setY(c,o.getY(c)+Math.sin(o.getX(c)*.3)*1.3+Math.cos(o.getZ(c)*.4)*1.1);a.computeVertexNormals();let l=Nt(new ce(a,ft(14923340,{roughness:.6})));l.position.y=3.2,l.rotation.z=.15,s.add(l)}let r=new _s(sg());r.position.y=11,r.scale.setScalar(9),s.add(r),s.userData.sp=r,n.add(s),e[i.id]=s}return e}var fh=null;function sg(){if(fh)return fh;let n=it(64,64,(e,t,i)=>{let s=e.createRadialGradient(32,32,1,32,32,32);s.addColorStop(0,"rgba(255,250,210,1)"),s.addColorStop(.2,"rgba(255,235,150,.65)"),s.addColorStop(1,"rgba(255,235,150,0)"),e.fillStyle=s,e.fillRect(0,0,t,i),e.fillStyle="rgba(255,255,240,.95)",e.fillRect(31,2,2,60),e.fillRect(2,31,60,2)});return fh=new xs({map:n,transparent:!0,depthWrite:!1,blending:es,fog:!1,depthTest:!0}),fh}function rg(n){let e=new ot;e.visible=!1,n.add(e);let t=null,i=!1;return{g:e,update(s){if(!i&&is.ready&&is.kenney["male-f"]){i=!0;let r=is.kenney["male-f"],a=Vo(r.scene),o=new ln().setFromObject(a),l=1.8/(o.max.y-o.min.y);a.scale.setScalar(l),a.position.y=-o.min.y*l,e.add(a),t=new oa(a);let c=r.clips.find(h=>h.name==="emote-yes")||r.clips[0];t.clipAction(c).play()}t&&t.update(s)}}}var Yn="#241c12",ag="#b5271a",Ea='"Klee One",serif',gn='"BIZ UDPGothic",sans-serif';function Kv(n,e,t){let i=[],s="";for(let r of e)if(n.measureText(s+r).width>t&&s)if("。、？！」）".includes(r)){let a=s.slice(-1);i.push(s.slice(0,-1)),s=a+r}else i.push(s),s=r.trim();else s+=r;return s&&i.push(s),i}function Jv(n,e,t){let i=[],s="";for(let r of e.split(" ")){let a=s?s+" "+r:r;n.measureText(a).width>t&&s?(i.push(s),s=r):s=a}return s&&i.push(s),i}var $o=(n,e,t,i)=>i?Jv(n,e,t):Kv(n,e,t);function og(n,e,t){for(let i=0;i<2200;i++)n.fillStyle=Math.random()<.5?"rgba(90,70,40,.035)":"rgba(255,255,255,.05)",n.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*2,1+Math.random()*2)}function lg(n,e,t,i,s,r,a){if(!e)return;n.save(),n.translate(t+s/2,i+r/2),n.rotate(a),n.fillStyle="#fff",n.shadowColor="rgba(0,0,0,.3)",n.shadowBlur=10,n.shadowOffsetY=4,n.fillRect(-s/2-9,-r/2-9,s+18,r+18),n.shadowColor="transparent";let o=e.width/e.height,l=s/r,c=e.width,h=e.height;o>l?c=e.height*l:h=e.width/l,n.drawImage(e,(e.width-c)/2,(e.height-h)/2,c,h,-s/2,-r/2,s,r),n.fillStyle="rgba(214,194,130,.75)",n.fillRect(-46,-r/2-22,92,26),n.restore()}function cg(n,e,t,i,s,r){e&&(n.save(),n.translate(t,i),n.rotate(r),n.beginPath(),n.arc(0,0,s,0,7),n.fillStyle="#fff",n.fill(),n.clip(),n.drawImage(e,-s,-s,s*2,s*2),n.restore(),n.save(),n.translate(t,i),n.strokeStyle=Yn,n.lineWidth=3,n.beginPath(),n.arc(0,0,s,0,7),n.stroke(),n.restore())}function Bp(n,e){let t=n.getContext("2d"),i=n.width,s=n.height,r=e.lang==="en";if(t.setTransform(1,0,0,1,0,0),t.textAlign="left",t.textBaseline="alphabetic",e.won){let a=t.createLinearGradient(0,0,i,s);a.addColorStop(0,"#e6eaec"),a.addColorStop(1,"#c7cdd0"),t.fillStyle=a,t.fillRect(0,0,i,s),t.fillStyle="rgba(0,0,0,.08)",t.fillRect(0,700,i,3),t.save(),t.translate(50,56),t.rotate(-.012),t.shadowColor="rgba(0,0,0,.28)",t.shadowBlur=16,t.shadowOffsetY=6,t.fillStyle="#fbf6df",t.fillRect(0,0,i-100,s-112),t.shadowColor="transparent",t.strokeStyle="rgba(70,110,170,.22)",t.lineWidth=2;for(let c=120;c<s-130;c+=56)t.beginPath(),t.moveTo(20,c),t.lineTo(i-120,c),t.stroke();cg(t,e.face,i-100-96,74,62,-.08),t.fillStyle=Yn,t.font=`600 ${r?38:44}px ${Ea}`,t.fillText(e.head,34,86),t.font=`600 ${r?31:33}px ${Ea}`;let o=160;for(let c of $o(t,e.note,i-170,r))t.fillText(c,34,o),o+=56;o=Math.max(o,400),e.photo&&lg(t,e.photo,i-100-300,o-10,256,176,.04),t.font=`400 26px ${gn}`;let l=o+10;for(let[c,h]of e.rows)t.fillStyle="#6a5c44",t.fillText(c,34,l),t.fillStyle=Yn,t.font=`700 28px ${gn}`,t.fillText(h,34,l+34),t.font=`400 26px ${gn}`,l+=80;if(l=Math.max(l,o+200)+10,e.items.length){t.fillStyle="#6a5c44",t.fillText(e.itemsHead,34,l),t.fillStyle=Yn,t.font=`600 27px ${Ea}`,l+=38;for(let c of $o(t,e.items.join(r?", ":"、"),i-170,r))t.fillText(c,34,l),l+=36}t.fillStyle=ag,t.font=`600 28px ${Ea}`,l+=8;for(let c of $o(t,e.gag,i-170,r))l<s-150&&(t.fillText(c,34,l),l+=38);t.fillStyle=Yn,t.font=`600 28px ${Ea}`,t.fillText(e.sign,34,s-134),t.restore(),t.fillStyle="#c8392e",t.beginPath(),t.arc(i/2,56,26,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.35)",t.beginPath(),t.arc(i/2-8,48,8,0,7),t.fill(),og(t,i,s)}else{t.fillStyle=e.bg||"#efe7d2",t.fillRect(0,0,i,s),og(t,i,s),t.strokeStyle=Yn,t.lineWidth=4,t.strokeRect(26,26,i-52,s-52),t.lineWidth=1.5,t.strokeRect(34,34,i-68,s-68),t.fillStyle=Yn,t.font=`700 ${r?36:42}px ${gn}`,t.textAlign="center",t.fillText(e.head,i/2,96),t.font=`400 22px ${gn}`,t.fillText(e.sub,i/2,130),t.textAlign="left",t.lineWidth=2,t.beginPath(),t.moveTo(34,150),t.lineTo(i-34,150),t.stroke(),cg(t,e.face,i-94,92,52,.1);let a=150;for(let[l,c]of e.rows)t.font=`400 24px ${gn}`,t.fillStyle="#5b4e38",t.fillText(l,52,a+42),t.font=`700 27px ${gn}`,t.fillStyle=Yn,t.fillText(c,232,a+42),a+=62,t.lineWidth=1,t.beginPath(),t.moveTo(34,a),t.lineTo(i-34,a),t.stroke();a+=40,t.font=`700 24px ${gn}`,t.fillStyle="#5b4e38",t.fillText(e.listHead,52,a),a+=40,t.font=`400 27px ${gn}`,t.fillStyle=Yn;let o=e.photo&&a+200<s-200;for(let l of e.list){let c=l.you;t.font=c?`700 28px ${gn}`:`400 26px ${gn}`,t.fillStyle=c?ag:Yn,t.fillText(l.t,58,a),t.textAlign="right",t.fillText(l.n,o?372:i-58,a),t.textAlign="left",a+=41}if(o&&lg(t,e.photo,i-318,a-e.list.length*41-26,256,180,-.05),a+=22,t.lineWidth=1,t.beginPath(),t.moveTo(34,a-24),t.lineTo(i-34,a-24),t.stroke(),e.items.length){t.fillStyle="#5b4e38",t.font=`700 22px ${gn}`,t.fillText(e.itemsHead,52,a+8),t.font=`400 24px ${gn}`,t.fillStyle=Yn,a+=40;for(let l of $o(t,e.items.join(r?", ":"、"),i-120,r).slice(0,2))t.fillText(l,52,a),a+=32;a+=6}t.fillStyle="#5b4e38",t.font=`700 22px ${gn}`,t.fillText(e.noteHead,52,a+8),a+=42,t.fillStyle=Yn,t.font=`600 29px ${Ea}`;for(let l of $o(t,e.note,i-120,r).slice(0,3))t.fillText(l,52,a),a+=38;t.font=`400 18px ${gn}`,t.fillStyle="#6d6251",t.fillText(e.foot,52,s-52)}}function hg(n,e,t,i=1,s=!1){let r=n.getContext("2d"),a=n.width,o=n.height;r.save(),r.translate(s?a-200:a-180,s?o-190:o-150),r.rotate(-.2),r.scale(i,i),r.strokeStyle=t,r.fillStyle=t,r.lineWidth=8,r.globalAlpha=.86;let l=e.length,c=l>=6?34:l>=4?44:56,h=/^[A-Za-z !]+$/.test(e),u=h?28:c;r.beginPath(),r.ellipse(0,0,124,66,0,0,7),r.stroke(),r.lineWidth=3,r.beginPath(),r.ellipse(0,0,112,56,0,0,7),r.stroke(),r.font=`700 ${u}px ${gn}`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,0,2),r.restore()}var $v={skilled:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7},toyuser:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7,toy:"near"},farm:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7,toy:"all"},farmgo:{lag:9,wireGap:.3,wireProb:1,noise:.08,dodge:!0,relT:1.7,toy:"first"},normaltoy:{lag:18,wireGap:.6,wireProb:.12,noise:.4,dodge:!0,relT:2.2,lost:!0,lostGap:9,toy:"near"},normal:{lag:18,wireGap:.6,wireProb:.12,noise:.4,dodge:!0,relT:2.2,lost:!0,lostGap:9},clumsy:{lag:42,wireGap:1.2,wireProb:.03,noise:1.1,dodge:!1,relT:3.2,lost:!0}};function xh(n,e=1){let t=e*97+13>>>0;return{kind:n,p:$v[n],rnd:()=>(t=t*16807%2147483647)/2147483647,q:[],n:0,nT:0,wT:0,rT:0,clT:0,stuck:0,lx:0,lz:0,prevW:!1}}function Hp(n,e,t,i,s){if(n.kind==="idle")return{};let r=ss[t.way];if(n.kind==="ground"){let f=Math.atan2(r.x-e.x,r.z-e.z);return{throttle:1,moveDir:{x:Math.sin(f),z:Math.cos(f)}}}let a=n.p;if(a.lost&&(n.lostT=(n.lostT??3+n.rnd()*4)-s,n.lostT<=0&&(n.pauseT=.8+n.rnd()*1.6,n.lostT=(a.lostGap||4)+n.rnd()*5),n.pauseT>0))return n.pauseT-=s,n.prevW=!1,{};let o=r.x,l=r.y,c=r.z;if(a.toy){let m=t.toyUses>0&&t.lure<=0?t.toys.filter(g=>g.state==="idle"):[];m.sort((g,y)=>Math.hypot(g.x-e.x,g.z-e.z,g.y-e.y)-Math.hypot(y.x-e.x,y.z-e.z,y.y-e.y));let x=m[0];if(a.toy==="near")x&&t.t>8&&t.cat.state!=="box"&&Math.hypot(x.x-e.x,x.z-e.z,x.y-e.y)<55&&(o=x.x,l=x.y,c=x.z);else if(x)o=x.x,l=x.y,c=x.z;else{if(a.toy==="all"&&t.toyUses<=0&&t.lure<=0)return{};if(a.toy==="all"&&!x)return{}}}n.q.push([o,l,c]),[o,l,c]=n.q.length>a.lag?n.q.shift():n.q[0],n.nT-=s,n.nT<=0&&(n.n=(n.rnd()-.5)*a.noise*2,n.nT=.5+n.rnd());let h=Math.atan2(o-e.x,c-e.z)+n.n;if(a.dodge){let f=0,m=0,x=t.cat.ring,g=t.mom.slip;x&&Math.hypot(x.x-e.x,x.z-e.z)<x.r+6&&(f+=e.x-x.x,m+=e.z-x.z),g&&Math.hypot(g.x-e.x,g.z-e.z)<g.r+6&&(f+=e.x-g.x,m+=e.z-g.z);let y=t.mom.noz;t.mom.in&&y.active&&t.mom.dist<26&&(f+=(e.x-y.x)*.5,m+=(e.z-y.z)*.5),(f||m)&&(h=Math.atan2(f,m))}let u={throttle:1,moveDir:{x:Math.sin(h),z:Math.cos(h)}},p=Math.hypot(o-e.x,c-e.z);if(e.climbing)return u.moveDir=null,u.wallY=l>e.y-1?1:-1,u.wallX=0,u.throttle=0,n.clT+=s,(e.y>l-2&&e.y<l+4||n.clT>(e.climbing.slip?40:18))&&(u.wire=!0,u.wireYaw=h,n.clT=0),kp(n,u);n.clT=0;let d=p<28&&l>e.y+6;return p<14&&e.y>l-1?(e.rope&&(u.wire=!0),kp(n,u)):(n.wT+=s,e.rope?(n.rT+=s,((o-e.x)*e.vx+(c-e.z)*e.vz<0&&e.vy>0&&n.rT>.4||n.rT>a.relT)&&(u.wire=!0,n.rT=0)):!(d&&e.grounded)&&n.wT>a.wireGap&&(e.grounded||e.vy<-1)&&n.rnd()<a.wireProb&&(u.wire=!0,u.wireYaw=h,n.wT=0,n.rT=0),n.stuck=Math.hypot(e.x-n.lx,e.z-n.lz)<.05?n.stuck+s:0,n.lx=e.x,n.lz=e.z,n.stuck>1.2&&(u.wire=!0,n.stuck=0),kp(n,u))}function kp(n,e){let t=!!e.wire;return e.wire=t&&!n.prevW,n.prevW=t,e}window.__jsUp=!0;var Ne=n=>document.getElementById(n),ci=1/60,Qv="https://tom3games.github.io/kobito-escape/",wh={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}}},xr=(n,e,t)=>n<e?e:n>t?t:n,Ia={ja:{logo1:"小人になって",logo2:"家の中を",logo3:"逃げろ",story:"賞味期限2019年のヨーグルトを食べたら、体が2cmになった。",flossLabel:"フロス",start:"非常口へ",how:"遊び方",lang:"EN",muteOn:"音 入",muteOff:"音 切",loading:"体が縮んでいます",howTitle:"冷蔵庫のメモ",ok:"わかった",tooFar:"届かへん",howItems:[["floss","<b>フロスのケース</b>を押すと前の上へ糸が飛ぶ。もう1回で離す。家具を<b>タッチ</b>しても掛かる"],["stick","左のボタンで走る。壁に向かって走ると<b>登れる</b>。画面をなぞると見回す"],["roomba","ルンバは<b>床だけ</b>。上へ逃げる"],["cat","猫はおしりを振ったら飛ぶ。<b>赤い輪</b>から離れる"],["vac","おかんの掃除機は<b>吸い寄せる</b>。空中でも来る"],["toy","ネズミに<b>走って当たる</b>と猫が追う。3回まで"],["exit","絆創膏3枚で終わり。<b>冷蔵庫の上の非常口</b>まで"]],credit:"音: Work With Sounds / Werstas, Gravity Sound (CC BY 4.0) ほか CC0。人物: KayKit, Kenney (CC0)。おかんは画像生成。詳しくは CREDITS.md",way:{sofa:"ソファの上へ",shelf:"本棚の上へ",curtain:"カーテンの上へ",exit:"冷蔵庫の上へ"},dist:n=>n>=100?`${Math.floor(n/100)}m${String(Math.round(n%100)).padStart(2,"0")}cm`:`${Math.round(n)}cm`,up:n=>`上へ${n}cm`,down:n=>`下へ${n}cm`,paused:"ちょっと休憩",resume:"戻る",quit:"やめる",hint1:"ケースを押すと糸が飛ぶ",hint2:"ルンバは床だけ。上へ",hintCat:"赤い輪から離れろ",hintVac:"吸い口から逃げろ",momIn:["おかん","ちょっと掃除するでー"],momLines:["なんか動いたな","ホコリようさんあるわ","これいつのやつ？","メルカリで売れるやろか","おとん、靴下また裏返しや","あの子どこ行ったんやろ","ヨーグルト知らん？","ゴキブリちゃうやろな","帰省する言うてたのに"],momName:"おかん",roomba2:"もう1台買うたで",roach:"ゴキブリや！！",roachMiss:"どこ行ったんや",phone:"ほんでな、あの奥さんがな",phoneEnd:"ほな切るわ",late:"延長ホース出すで",spotLines:["おった！","そこや！","見えてるで！","動いたな！"],toyLines:["猫、298円に夢中","血統書つきやのに","おもちゃに負ける猫","命より298円"],toyRide:"ルンバごと追っていった",toyBox:"猫は箱のほうが好き",toyEmpty:"もうネズミは効かへん",lureEnd:"猫、飽きた",lureEndRide:"ルンバ、我に返った",hintToy:"ネズミで猫が釣れる",catBox:"猫は箱から出ない",catRide:"猫がルンバに乗っている",catWake:"猫が起きた",caught:{roomba:"ルンバにはねられた",cat:"ねこパンチ",vac:"ホースに詰まって吐かれた",slipper:"スリッパの直撃"},peeled:"壁からはがされた",oldMan:["先住の小人","デュフフ ここ18年住んでる"],oldGive:"絆創膏をもらった",items:{coin:"500円玉。家賃の足し",glasses:"おかんの老眼鏡。探してたやつ",hesokuri:"おとんのヘソクリ",dvd:"確定申告2014（なぜか鍵つき）",ring:"なくした結婚指輪",chip:"ポテチ。絆創膏1枚ぶん元気"},itemNames:{coin:"500円玉",glasses:"老眼鏡",hesokuri:"おとんのヘソクリ",dvd:"確定申告2014",ring:"結婚指輪"},again:"もう一回",save:"画像を保存",post:"Xでポスト",toTitle:"タイトル",forms:{vac:{head:"紙パック点検票",sub:"吸引者: おかん",list:[["髪の毛","たくさん"],["ポテチのかす","14枚"],["輪ゴム","3本"],["おとんの靴下の毛玉","1玉"]],you:["息子","1名（2cm）"],note:["なんか詰まったと思ったら、あんたか。","捨てるとこやったで。ヨーグルトの話はあとでしよか。"]},roomba:{head:"ダストボックス点検票",sub:"回収者: ルンバ（目玉シールつき）",list:[["綿ぼこり","大"],["輪ゴム","2本"],["なくしたピアス","片方"]],you:["息子","1名（2cm）"],note:["ルンバがなんか食べたと思ったら。ゴミの日は木曜やで。","床を走るのはやめとき。ルンバの島やで。"]},cat:{head:"猫のおもちゃ台帳",sub:"飼い主の猫 記入",list:[["ねずみのおもちゃ","3匹"],["ペットボトルのふた","5個"],["おとんの靴ひも","1本"]],you:["飼い主の息子","1名（2cm）"],note:["うちの猫がまた何か持ってきた。今日のは動きがええわ。","猫のお尻が揺れたら、もう遅いで。"]},slipper:{head:"害虫駆除記録",sub:"実施者: おかん（スリッパ）",list:[["実施回数","1回"],["スリッパ","左"],["うちの壁","少しへこんだ"]],you:["ゴキブリ（息子）","1匹（2cm）"],note:["でっかいゴキブリやと思ったのに、よう見たらあんたやんか。"]}},rowTime:"逃げた時間",rowPlace:"見つかった所",rowCaught:"捕まった回数",listHead:"中身",noteHead:"おかんより",itemsHead:"持っていた物",foot:"tom3games.github.io/kobito-escape",place:["じゅうたんの上","ソファのあたり","本棚のあたり","カーテンのあたり","冷蔵庫の前"],time:n=>`${Math.floor(n/60)}分${String(Math.floor(n%60)).padStart(2,"0")}秒`,times:n=>`${n}回`,winHead:"息子へ",winNote:"冷蔵庫の上に小さい足跡があったで。ヨーグルト知らん？ 2019年のやつ、まだいけると思っててん。",winSign:"母より",winRowTime:"脱出までの時間",winRowCaught:"捕まった回数",winItems:"持ち出した物",winGag:["非常口の先は、おとんの靴の中でした。","非常口の先は、ご近所の回覧板の間でした。","非常口の先は、となりの家の冷蔵庫の上でした。"],stamps:["回収","あと少し","脱出","無傷で脱出"],reveal:{vac:["吸うたったで！","ゴミと一緒やで！"],slipper:["仕留めたで！","一発やで！"],cat:["猫がなんか獲ったわ","奥さん、うちの猫が"],roomba:["ルンバが食べた！","ルンバ、吐きなさい！"],win:["逃げよったな！","ヨーグルト返し！"]},postWin:(n,e)=>`体が2cmになって実家から脱出した。${n}、捕まった回数${e}回 #小人になって家の中を逃げろ`,postLose:(n,e)=>`体が2cmになって${n}に書かれた。${e}逃げた #小人になって家の中を逃げろ`},en:{logo1:"Tiny Me:",logo2:"Escape",logo3:"the House",story:"I ate a yogurt that expired in 2019. Now I am 2 cm tall.",flossLabel:"FLOSS",start:"To the exit",how:"How to play",lang:"JP",muteOn:"Sound on",muteOff:"Muted",loading:"Your body is shrinking",howTitle:"Note on the fridge",ok:"Got it",tooFar:"Too far",howItems:[["floss","Press the <b>floss case</b> to shoot thread up and ahead. Press again to let go. Or <b>tap</b> furniture"],["stick","The left button runs. Run into a wall to <b>climb</b>. Drag to look around"],["roomba","The Roomba stays <b>on the floor</b>. Go up"],["cat","When the cat wiggles, it jumps. Leave the <b>red ring</b>"],["vac","Mom's vacuum <b>sucks you in</b>, even in mid-air"],["toy","<b>Run into</b> a toy mouse and the cat chases it. 3 uses"],["exit","Three bandages and you are done. Reach the <b>exit on top of the fridge</b>"]],credit:"Sounds: Work With Sounds / Werstas, Gravity Sound (CC BY 4.0) and CC0 packs. Characters: KayKit, Kenney (CC0). See CREDITS.md",way:{sofa:"Up on the sofa",shelf:"Top of the bookcase",curtain:"Top of the curtain",exit:"Top of the fridge"},dist:n=>n>=100?`${(n/100).toFixed(1)} m`:`${Math.round(n)} cm`,up:n=>`${n} cm up`,down:n=>`${n} cm down`,paused:"Short break",resume:"Back",quit:"Quit",hint1:"Press the case to shoot thread",hint2:"Roomba stays on the floor. Go up",hintCat:"Leave the red ring",hintVac:"Get away from the nozzle",momIn:["Mom","Time to vacuum!"],momLines:["Something moved","So much dust","How old is this?","Could I sell this online?","Dad, your socks again","Where did my boy go?","Seen my yogurt?","Better not be a roach","He said he was visiting"],momName:"Mom",roomba2:"I bought another one",roach:"A ROACH!!",roachMiss:"Where did it go",phone:"So anyway, that neighbor",phoneEnd:"Okay, bye now",late:"Getting the long hose",spotLines:["GOTCHA!","THERE!","I SEE YOU!","IT MOVED!"],toyLines:["Pedigree cat, $2 toy","Cat has new priorities","Beaten by a toy","Worth more than you"],toyRide:"The Roomba went too",toyBox:"The box is better",toyEmpty:"The cat is over mice",lureEnd:"Cat got bored",lureEndRide:"Roomba snapped out of it",hintToy:"Mouse toys lure the cat",catBox:"The cat will not leave its box",catRide:"The cat is riding the Roomba",catWake:"The cat woke up",caught:{roomba:"Hit by the Roomba",cat:"Cat punch",vac:"Stuck in the hose, spat out",slipper:"Slipper to the face"},peeled:"Peeled off the wall",oldMan:["Old resident","Doo-fu. Been here 18 years"],oldGive:"He gave you a bandage",items:{coin:"A 500-yen coin. Rent money",glasses:"Mom's reading glasses",hesokuri:"Dad's secret stash",dvd:"Tax Return 2014 (with a lock?)",ring:"The lost wedding ring",chip:"A potato chip. One bandage back"},itemNames:{coin:"500-yen coin",glasses:"reading glasses",hesokuri:"Dad's stash",dvd:"Tax Return 2014",ring:"wedding ring"},again:"Again",save:"Save image",post:"Post on X",toTitle:"Title",forms:{vac:{head:"DUST BAG INSPECTION",sub:"Collected by: Mom",list:[["Hair","plenty"],["Chip crumbs","14"],["Rubber bands","3"],["Sock fuzz (Dad)","1 ball"]],you:["Son","1 (2 cm)"],note:["Thought something was stuck. It was you. We will talk about the yogurt later.","I nearly threw you out. We will talk about the yogurt later."]},roomba:{head:"ROOMBA BIN INSPECTION",sub:"Collected by: Roomba (googly eyes)",list:[["Dust bunny","large"],["Rubber bands","2"],["Lost earring","1"]],you:["Son","1 (2 cm)"],note:["The Roomba ate something again. Trash day is Thursday.","Do not run on the floor. The floor belongs to the Roomba."]},cat:{head:"CAT TOY LEDGER",sub:"Kept by: the cat",list:[["Toy mice","3"],["Bottle caps","5"],["Dad's shoelace","1"]],you:["Owner's son","1 (2 cm)"],note:["The cat brought something again. This one moves nicely.","When the cat wiggles, it is already too late."]},slipper:{head:"PEST CONTROL RECORD",sub:"By: Mom (slipper)",list:[["Attempts","1"],["Slipper","left"],["Wall","slight dent"]],you:["Roach (son)","1 (2 cm)"],note:["I thought it was a huge roach. Then I looked closer. It was you."]}},rowTime:"Survived",rowPlace:"Found near",rowCaught:"Caught",listHead:"Contents",noteHead:"From Mom",itemsHead:"You were holding",foot:"tom3games.github.io/kobito-escape",place:["the rug","the sofa","the bookcase","the curtain","the fridge"],time:n=>`${Math.floor(n/60)}m ${String(Math.floor(n%60)).padStart(2,"0")}s`,times:n=>`${n}`,winHead:"To my son",winNote:"Tiny footprints on top of the fridge. Seen my yogurt? I thought the 2019 one was still fine.",winSign:"Mom",winRowTime:"Time to escape",winRowCaught:"Caught",winItems:"You took",winGag:["The exit led into Dad's shoe.","The exit led into the neighborhood bulletin.","The exit led to the top of the neighbor's fridge."],stamps:["COLLECTED","ALMOST","ESCAPED","UNSCATHED"],reveal:{vac:["Sucked up!","Just dust!"],slipper:["Got it!","One hit!"],cat:["Cat got one!","Guess what?"],roomba:["Spit it out!","Roomba ate!"],win:["Come back!","My yogurt!"]},postWin:(n,e)=>`I shrank to 2 cm and escaped the house in ${n}, caught ${e} times`,postLose:(n,e)=>`I shrank to 2 cm and ended up in the ${n}. Survived ${e}`}},Fn=wh.get("kob.lang")||((navigator.language||"ja").startsWith("ja")?"ja":"en"),ut=n=>Ia[Fn][n],ex={floss:'<svg viewBox="0 0 40 40"><rect x="9" y="8" width="22" height="28" rx="4" fill="#7fd5bd" stroke="#123c33" stroke-width="2"/><rect x="9" y="8" width="22" height="10" rx="3" fill="#f4faf7" stroke="#123c33" stroke-width="2"/><path d="M20 8 C24 4 18 2 22 0" fill="none" stroke="#123c33" stroke-width="1.5"/></svg>',stick:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#f2eddf" stroke="#b9ae93" stroke-width="3"/><circle cx="15" cy="15" r="2.3" fill="#4a4336"/><circle cx="25" cy="15" r="2.3" fill="#4a4336"/><circle cx="15" cy="25" r="2.3" fill="#4a4336"/><circle cx="25" cy="25" r="2.3" fill="#4a4336"/></svg>',roomba:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#24262b"/><circle cx="14" cy="15" r="5" fill="#f8f8f4"/><circle cx="26" cy="15" r="5" fill="#f8f8f4"/><circle cx="14" cy="16" r="2.4"/><circle cx="26" cy="16" r="2.4"/></svg>',cat:'<svg viewBox="0 0 40 40"><path d="M6 6 L14 13 Q20 11 26 13 L34 6 L35 25 Q33 36 20 36 Q7 36 5 25Z" fill="#d98a3d"/><ellipse cx="14" cy="22" rx="3.5" ry="4.4" fill="#e6cd3e"/><ellipse cx="26" cy="22" rx="3.5" ry="4.4" fill="#e6cd3e"/><rect x="13.3" y="18" width="1.4" height="8"/><rect x="25.3" y="18" width="1.4" height="8"/></svg>',toy:'<svg viewBox="0 0 40 40"><use href="#mouseToy"/></svg>',vac:'<svg viewBox="0 0 40 40"><path d="M23 2 L28 4 L22 22 L16 20Z" fill="#8f9499"/><rect x="3" y="21" width="34" height="11" rx="3" fill="#2b2d31"/><rect x="5" y="30" width="30" height="3" fill="#b33a2b"/></svg>',exit:'<svg viewBox="0 0 68 76" style="color:#00a65a"><use href="#runner"/></svg>'};function Eh(){document.documentElement.lang=Fn;for(let n of document.querySelectorAll("[data-t]")){let e=ut(n.dataset.t);typeof e=="string"&&(n.textContent=e)}Ne("howList").innerHTML=ut("howItems").map(([n,e])=>`<li>${ex[n]}<span>${e}</span></li>`).join(""),Ne("btnMute").textContent=Snd.muted?ut("muteOff"):ut("muteOn")}Snd.muted=wh.get("kob.mute")==="1";Snd.pre=["snd/vacuum_loop.wav","snd/roomba_loop.wav","snd/bgm_play.mp3","snd/city_street_loop.wav","snd/fridge_loop.wav","snd/wind_loop.wav","snd/purr_loop.wav"];Snd.def({wire:["snd/swish1.mp3","snd/swish2.mp3","snd/swish3.mp3"],pluck:["snd/pluck1.mp3","snd/pluck2.mp3"],whoosh:"snd/swish5.mp3",step:["snd/step1.mp3","snd/step2.mp3"],bonk:["snd/thwack1.mp3","snd/thwack2.mp3"],wood:["snd/woodhit1.mp3","snd/woodhit2.mp3"],mew:["snd/cat_mew1.mp3","snd/cat_mew2.mp3","snd/cat_mew3.mp3"],slap:"snd/slap.mp3",suck:"snd/suck.mp3",pop:["snd/pop1.mp3","snd/pop2.mp3"],coin:"snd/coin.mp3",paper:["snd/paper1.mp3","snd/paper2.mp3"],door:"snd/door.mp3",slam:"snd/slam.mp3",ding:"snd/ding.mp3",click:"snd/click.mp3",grunt:["snd/grunt1.mp3","snd/grunt2.mp3","snd/grunt3.mp3"],squeak:["snd/squeak1.mp3","snd/squeak2.mp3"],win:"snd/win.mp3",meh:"snd/meh.mp3",lose:"snd/lose.mp3"});var je=(n,e)=>Snd.play(n,e),ug=jc,Gp={done:0,total:0};ug.onStart=ug.onProgress=(n,e,t)=>{Gp.done=e,Gp.total=t,Gp.at=performance.now(),window.__bootSet&&window.__bootSet(.3+.7*(t?e/t:0))};function tx(n){let e=performance.now(),t=()=>{if(is.ready||is.failed||performance.now()-e>12e3){window.__bootDone=!0,window.__bootSet&&window.__bootSet(1);let i=Ne("boot");i.classList.add("out"),setTimeout(()=>i.classList.add("hidden"),380),n();return}setTimeout(t,100)};t()}window.__bootSet&&window.__bootSet(.25);var rn=new Jc({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});rn.setPixelRatio(eh.pixelRatio);rn.outputColorSpace=yt;rn.toneMapping=zo;rn.toneMappingExposure=1.08;rn.shadowMap.enabled=!0;rn.shadowMap.type=Rc;Ne("view").appendChild(rn.domElement);var kt=new Qr;kt.background=new Se(14471094);kt.fog=new ao(15128765,.0017);var ui=new tr(16773336,2.5);ui.userData.dir=new A(.68,.62,-.38).normalize();ui.castShadow=!0;var _h=ba?55:85;ui.shadow.mapSize.set(eh.shadow,eh.shadow);Object.assign(ui.shadow.camera,{left:-_h,right:_h,top:_h,bottom:-_h,near:1,far:460});ui.shadow.normalBias=.05;ui.shadow.bias=-5e-4;kt.add(ui,ui.target);kt.add(new Ro(16774368,9072206,1.55));{let n=new Qr;n.background=new Se(13155234);let e=new va(rn),t=(i,s,r,a,o)=>{let l=new ce(new Wt(o,o,o),new rt({color:i}));l.position.set(s,r,a),n.add(l)};t(16777215,0,30,0,18),t(16771520,30,10,0,16),t(5917242,0,-30,0,40),kt.environment=e.fromScene(n,.05,.1,100).texture,kt.environmentIntensity=.55}var Bt=new Zt(64,1,.2,1500),cn=k0(),Mh=V0(kt,rn),jt=new Qc(kt,cn),mr=ig(kt),il=rg(kt);il.g.position.set(Qe.old.x,Qe.old.y,Qe.old.z);il.g.rotation.y=1.2;var dg=[new Jo(kt),new Jo(kt)],qp=new mh(kt),Ra=new gh(kt),vg=new vh(kt),xg=new yh(kt),Ns=new ce(new It(.05,.05,1,5).rotateX(Math.PI/2).translate(0,0,.5),new rt({color:15400949,fog:!1}));Ns.visible=!1;kt.add(Ns);var Zn=new ce(new ai(.55,.8,24),new rt({color:13041638,transparent:!0,opacity:.95,depthTest:!1,side:ct,fog:!1}));Zn.renderOrder=5;Zn.visible=!1;kt.add(Zn);var Ct="title",Ee=null,Ge=null,Kn=null,as=null,Mr=!1,_g=!1,yr=0,Sh=null,gr=0,nl=0,vr=0,Ca=0,Pa=0,Yp=0,Cn={},Zp=!1,Kp=0,hi=null,qe={hd:0,pitch:.22,pos:new A,off:new A(0,3,-6),look:new A,lookOff:new A(0,1,10),fov:64,bank:0},zs=new A,Jp=class{constructor(){this.group=new ot;let e=new ce(new bi(.34,1.05,4,10),new Tt({color:15921126}));e.position.y=.9,e.castShadow=!0,this.group.add(e),this.handWorld=new A}update(e){this.group.position.set(e.x,e.y,e.z),this.group.rotation.y=e.yaw,this.handWorld.set(e.x,e.y+1.5,e.z)}dispose(){}};function tf(){Kn&&(kt.remove(Kn.group),Kn.dispose(),Kn=null),Kn=is.ready?new qo:new Jp,kt.add(Kn.group)}U0().then(()=>{is.ready&&!(Kn instanceof qo)&&tf()});var rs=null,_r=new Map,Vp=new Lo,pg=new ae;rn.domElement.addEventListener("pointerdown",n=>{Snd.init(),!(Ct!=="play"||Mr)&&_r.set(n.pointerId,{x:n.clientX,y:n.clientY,lx:n.clientX,ly:n.clientY,t:performance.now(),moved:!1})});addEventListener("pointermove",n=>{let e=_r.get(n.pointerId);if(!e)return;let t=n.clientX-e.lx,i=n.clientY-e.ly;e.lx=n.clientX,e.ly=n.clientY,!e.moved&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>12&&(e.moved=!0),e.moved&&(qe.hd-=t*.00792,qe.pitch=xr(qe.pitch+i*.00528,-.35,1))});addEventListener("pointerup",n=>{let e=_r.get(n.pointerId);e&&(_r.delete(n.pointerId),!e.moved&&performance.now()-e.t<450&&Ct==="play"&&!Mr&&Mg(n.clientX,n.clientY))});addEventListener("pointercancel",n=>_r.delete(n.pointerId));function Mg(n,e){let t=rn.domElement.getBoundingClientRect();pg.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Vp.setFromCamera(pg,Bt);let i=Vp.ray.origin,s=Vp.ray.direction,r=Ee&&Ee.rope?null:Y0(cn,i.x,i.y,i.z,s.x,s.y,s.z,400,Ee?Math.max(0,(Ee.x-i.x)*s.x+(Ee.y+1-i.y)*s.y+(Ee.z-i.z)*s.z-1):0),a=r;if(Ee&&!Ee.rope&&!Ee.grounded&&!Ee.climbing){let o=nx(i,s,le.wireRange+60),l=r?Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z):1/0;o&&!(l<o.t+6)&&(a={x:o.x,y:o.y,z:o.z,ground:!0})}rs={at:a,sx:n,sy:e}}function nx(n,e,t){let i=s=>{let r=n.x+e.x*s,a=n.y+e.y*s,o=n.z+e.z*s;return a<=dr(cn,r,o,a).h};for(let s=1;s<t;s+=1){if(!i(s))continue;let r=s-1,a=s;for(let c=0;c<6;c++){let h=(r+a)/2;i(h)?a=h:r=h}let o=n.x+e.x*a,l=n.z+e.z*a;return{x:o,y:dr(cn,o,l,n.y+e.y*a+.5).h,z:l,t:a}}return null}var xt={x:0,y:0,id:null};{let n=Ne("stick"),e=n.querySelector(".knob"),t=()=>{let a=n.getBoundingClientRect();return{x:a.left+a.width/2,y:a.top+a.height/2,R:a.width/2}},i=a=>{let o=t(),l=(a.clientX-o.x)/o.R,c=(a.clientY-o.y)/o.R,h=Math.hypot(l,c);h>1&&(l/=h,c/=h),xt.x=l,xt.y=c,e.style.transform=`translate(${l*o.R*.56}px,${c*o.R*.56}px)`},s=a=>{xt.id=a.pointerId,i(a),n.classList.remove("pulse")};n.addEventListener("pointerdown",a=>{Snd.init(),xt.id==null&&(a.preventDefault(),a.stopPropagation(),s(a))}),addEventListener("pointermove",a=>{if(a.pointerId===xt.id){i(a);return}if(xt.id==null&&_r.has(a.pointerId)){let o=t();Math.hypot(a.clientX-o.x,a.clientY-o.y)<o.R&&(_r.delete(a.pointerId),s(a))}},!0);let r=a=>{a.pointerId===xt.id&&(xt.id=null,xt.x=xt.y=0,e.style.transform="")};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0),Ne("btnWire").addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),Snd.init(),rs={at:null,key:!0}})}function bg(){let n=Bt.matrixWorld.elements,e=n[0],t=n[2],i=-n[8],s=-n[10],r=Math.hypot(e,t)||1,a=Math.hypot(i,s)||1;return{r:{x:e/r,z:t/r},f:{x:i/a,z:s/a}}}function ix(){let n=0,e=null,t=null,i=null,{r:s,f:r}=bg();if(xt.id!=null){let o=Math.min(1,Math.hypot(xt.x,xt.y));if(o>.15){let l=s.x*xt.x-r.x*xt.y,c=s.z*xt.x-r.z*xt.y,h=Math.hypot(l,c)||1;i={x:l/h,z:c/h},n=Math.min(1,o*1.3)}if(Ee.climbing){let l=Ee.climbing,c=s.x*l.nz-s.z*l.nx>=0?1:-1;e=Math.abs(xt.y)>.25?-xt.y:0,t=Math.abs(xt.x)>.25?xt.x*c:0}}let a={throttle:n,brake:0,steer:0,jump:!1,wire:!1,wallY:e,wallX:t,moveDir:i};return a.wireYaw=i?Math.atan2(i.x,i.z):Math.atan2(r.x,r.z),rs&&(a.wire=!0,rs.at&&(a.wireAt=rs.at),Ee._tap=rs,rs=null),a}function La(n){for(let e of["title","how","pause","reveal","result"])Ne(e).classList.toggle("hidden",e!==n);Ne("hud").classList.toggle("hidden",Ct!=="play"),Ne("danger").style.opacity=0,vr=0}function Sg(){for(let n in mr)mr[n].visible=!0;il.g.visible=!1,vg.update(null,9),qp.ring.visible=qp.fill.visible=!1}function Ah(){clearTimeout(Ch),Ct="title",Mr=!1,Ee=null,Ge=null,yr=0,hi=null;let n=uh({id:"demo",spawn:cr});as={r:n,m:ph(cn,n,7),b:xh("skilled",7),seed:7},Sg(),tf(),qe.hd=0,qe.pitch=.3,La("title"),Snd.loop("bgm","snd/bgm_title.mp3",.2),Snd.loop("amb","snd/city_street_loop.wav",.1),Snd.loop("vac",null),Snd.loop("rmb",null),Snd.loop("wind",null),Snd.loop("purr",null),Snd.loop("frg",null)}function nf(n=Math.floor(Math.random()*1e6)){Snd.init(),je("click"),clearTimeout(Ch),Ct="play",Mr=!1,as=null,yr=0,hi=null,Sh=null,gr=0,Pa=11,Yp=n%9,Cn={},Zp=!1,sx=!1,Eg=n%4,Ag=n%4,tl=0,Ne("momCut").classList.add("hidden"),Ee=uh({id:"me",spawn:cr}),Ge=ph(cn,Ee,n),Ge.seed=n,Sg(),tf(),il.g.visible=Ge.rare.oldMan,qe.hd=0,qe.pitch=.22,qe.off.set(0,3,-6),qe.lookOff.set(0,1,10),La(null),Ne("stick").classList.add("pulse"),Ne("btnWire").classList.add("pulse"),wg(Qe.lives),Cg(Qe.toy.uses),Snd.loop("bgm","snd/bgm_play.mp3",.15),Snd.loop("amb","snd/city_street_loop.wav",.1),Snd.loop("frg","snd/fridge_loop.wav",1e-4),Snd.loop("rmb","snd/roomba_loop.wav",1e-4),Snd.loop("vac","snd/vacuum_loop.wav",1e-4),Snd.loop("wind","snd/wind_loop.wav",1e-4),Snd.loop("purr","snd/purr_loop.wav",1e-4),sn(ut("hint1"),3)}function sl(n){Ct==="play"&&(Mr=n,Ne("pause").classList.toggle("hidden",!n))}document.addEventListener("visibilitychange",()=>{document.hidden?(Ct==="play"&&Ge&&!Ge.over&&sl(!0),Snd.ctx&&Snd.ctx.suspend()):Snd.ctx&&Snd.ctx.state==="suspended"&&!window.__muteOk&&Snd.ctx.resume()});var Tg=-1;function wg(n){let e=Ne("plasters");e.children.length!==Qe.lives&&(e.innerHTML='<i class="pl"></i>'.repeat(Qe.lives));for(let t=0;t<Qe.lives;t++)e.children[t].classList.toggle("off",t>=n);Tg=n}function sn(n,e){let i=.9+n.replace(/<[^>]+>/g,"").length*.09,s=Ne("say");s.innerHTML=n,s.classList.remove("hidden"),Ca=Math.max(e||0,i)}var $p=(n,e)=>sn(`<small>${n}</small>${e}`),sx=!1,Eg=0,Ag=0,tl=0;function Aa(n,e=1.5){let t=Rn.faces[n];if(!t)return;let i=Ne("momCut"),s=i.firstElementChild;s.src=t.src,i.dataset.k=n,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",tl=e,Rh.push({src:"g",t:"cut",k:n,at:Ge?+Ge.t.toFixed(2):0})}var pr=n=>$p(ut("momName"),n);function fg(n,e,t,i){let s=Bt.matrixWorld.elements,r=-s[8],a=-s[10],o=-a,l=r,c=n-t,h=e-i;return Math.atan2(c*o+h*l,c*r+h*a)}var mg=1/.75;function rx(n){Ne("tClock").textContent=`${Math.floor(Ge.t/60)}:${String(Math.floor(Ge.t%60)).padStart(2,"0")}`,Tg!==Ge.lives&&wg(Ge.lives),Rg!==Ge.toyUses&&Cg(Ge.toyUses);let e=Ge.lure>0?Ge.lure/Qe.toy.lure:0;if(Ne("toyBar")._k!==e&&(Ne("toyBar")._k=e,Ne("toyBar").style.transform=`scaleX(${e.toFixed(3)})`,Ne("toys").classList.toggle("live",e>0)),tl>0&&(tl-=n,tl<=0&&Ne("momCut").classList.add("hidden")),!Cn.t&&Ge.toyUses>0&&Ge.t>2&&Ca<=0){for(let p of Ge.toys)if(p.state==="idle"&&Math.hypot(p.x-Ee.x,p.y-Ee.y,p.z-Ee.z)<42){Cn.t=1,sn(ut("hintToy"));break}}let t=ss[Ge.way],i=ut("way")[t.key];Ne("signName")._v!==i&&(Ne("signName")._v=i,Ne("signName").textContent=i);let s=Math.hypot(t.x-Ee.x,t.z-Ee.z)*mg,r=(t.y-Ee.y)*mg,a=Math.abs(r)>14&&s<60?(r>0?ut("up"):ut("down"))(Math.round(Math.abs(r))):ut("dist")(s)+(r>30?" "+ut("up")(Math.round(r)):"");Ne("signDist")._v!==a&&(Ne("signDist")._v=a,Ne("signDist").textContent=a),Bt.updateMatrixWorld(),Ne("signArrow").style.transform=`rotate(${fg(t.x,t.z,Ee.x,Ee.z)}rad)`,Ca>0&&(Ca-=n,Ca<=0&&Ne("say").classList.add("hidden"));let o=eg(Ge),l=innerWidth,c=innerHeight,h={},u=0;for(let p of o){let d=p.k;if(h[d]&&h[d]<p.d)continue;h[d]=p.d;let f=bh[d];if(!f)continue;let m=d==="roomba"?Ee.y<10?95:0:100;u=Math.max(u,p.d<40?d==="roomba"&&Ee.y>=10?0:1-p.d/40:0),zs.set(p.x,p.y,p.z).project(Bt);let x=zs.z>1,g=!x&&Math.abs(zs.x)<.95&&Math.abs(zs.y)<.95;if(p.d>m||g){f.classList.add("hidden");continue}f.classList.remove("hidden");let y=fg(p.x,p.z,Ee.x,Ee.z),_=Math.min(l,c)*.42,b=l/2+Math.sin(y)*_,S=c*.5-Math.cos(y)*Math.min(c*.34,_*1.6);f.style.transform=`translate(${xr(b,26,l-26).toFixed(0)}px,${xr(S,96,c-200).toFixed(0)}px)`}for(let p in bh)h[p]==null&&bh[p].classList.add("hidden");Ne("danger").style.opacity=(u*.75).toFixed(2)}var Rg=-1;function Cg(n){let e=Ne("toyTokens");e.children.length!==Qe.toy.uses&&(e.innerHTML='<svg class="ty" viewBox="0 0 40 40"><use href="#mouseToy"/></svg>'.repeat(Qe.toy.uses));for(let t=0;t<Qe.toy.uses;t++)e.children[t].classList.toggle("off",t>=n);Rg=n}var bh={};for(let n of document.querySelectorAll(".threat"))bh[n.dataset.k]=n;var Rh=[];function ax(n){if(Rh.push({src:"r",...n,at:Ge?+Ge.t.toFixed(2):0}),n.t==="wire")je("wire",{vol:.7}),je("pluck",{vol:.35,delay:.05,rate:1.3}),Zp||(Zp=!0,Ne("btnWire").classList.remove("pulse"),Ne("stick").classList.remove("pulse"));else if(n.t==="wireMiss"){je("wire",{vol:.35,rate:1.3});let e=Ne("miss");e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(e._t),e._t=setTimeout(()=>e.classList.add("hidden"),800)}else if(n.t==="land")je("step",{vol:Math.min(1,.3+n.impact/20)}),n.impact>14&&(je("bonk",{vol:.5}),jt.addShake(Math.min(.6,n.impact/40)));else if(n.t==="bonk")je("bonk",{vol:.8}),jt.addShake(.4);else if(n.t==="unwire"&&!n.auto){let e=Math.hypot(Ee.vx,Ee.vy,Ee.vz);e>16&&(je("whoosh",{vol:Math.min(.8,e/50),rate:.9+Math.random()*.2}),nl=Math.min(6,(e-16)*.3))}}function ox(n){Rh.push({src:"m",...n,at:+Ge.t.toFixed(2)});let e=Ia[Fn];if(n.t==="roombaOn")je("click",{vol:.7,rate:.7}),Cn.r||(Cn.r=1,sn(ut("hint2")));else if(n.t==="roomba2")pr(ut("roomba2")),je("door");else if(n.t==="catWake")je("mew",{vol:.8}),n.quiet||sn(ut("catWake"));else if(n.t==="crouch"&&n.quiet)je("mew",{vol:.25,rate:1.3});else if(n.t==="crouch")Cn.c||(Cn.c=1,sn(ut("hintCat"))),je("mew",{vol:.35,rate:1.1});else if(n.t==="leap")je("whoosh",{vol:.5,rate:.75});else if(n.t==="catLand"){let t=xr(1-n.near/120,.1,1);je("wood",{vol:t}),jt.addShake(.45*t),jt.dust(n.x,n.y+1,n.z,16,[.78,.72,.62],1.5)}else if(n.t==="swipe")je("whoosh",{vol:.5,rate:1.3});else if(n.t==="momIn")je("door",{vol:1}),je("slam",{vol:.8,delay:.25}),$p(e.momIn[0],e.momIn[1]),jt.addShake(.6),Aa("normal",1.8);else if(n.t==="momSpot"){let t=ut("spotLines");pr(t[Eg++%t.length]),Aa("spot",1.4),je("grunt",{vol:.7,rate:.7})}else if(n.t==="momWin")Aa("win",2);else if(n.t==="toyHit"){if(Cn.t=1,n.mode==="box")sn(ut("toyBox"));else if(n.mode==="ride")sn(ut("toyRide"));else{let t=ut("toyLines");sn(t[Ag++%t.length]),je("mew",{vol:.9,delay:.3})}jt.dust(n.x,n.y+1,n.z,8,[.78,.72,.62],1)}else if(n.t==="toySqueak"){let t=Ee?Math.hypot(n.x-Ee.x,n.y-Ee.y,n.z-Ee.z):0,i=xr(1-t/170,.08,1)*(n.soft?.55:1);je("squeak",{vol:i,rate:1.05+Math.random()*.4})}else n.t==="toyEmpty"?sn(ut("toyEmpty")):n.t==="lureEnd"?n.box||(sn(n.ride?ut("lureEndRide"):ut("lureEnd")),je("mew",{vol:.6,rate:.82})):n.t==="phone"?(pr(ut("phone")),je("click",{rate:1.4}),Aa("phone",2.4)):n.t==="phoneEnd"?pr(ut("phoneEnd")):n.t==="late"?(pr(ut("late")),Aa("angry",1.8)):n.t==="roach"?(pr(ut("roach")),je("grunt",{vol:.9,rate:.75}),Aa("angry",1.6)):n.t==="slap"?(je("slap",{vol:1}),je("wood",{vol:.8}),jt.addShake(1.1),jt.dust(n.x,n.y+1,n.z,28,[.78,.72,.62],2),gr=.05):n.t==="peeled"?sn(ut("peeled")):n.t==="item"?(n.heal?(je("pop",{vol:.9}),je("squeak",{vol:.4})):(je("coin",{vol:.9}),je("paper",{vol:.4,delay:.1})),mr[n.id].visible=!1,sn(e.items[n.id]),vr=.35,gr=.03,jt.debrisAt(n.x,n.y+3,n.z,10,16770723,{speed:7,up:6,size:.14})):n.t==="oldMan"?($p(e.oldMan[0],e.oldMan[1]),je("squeak",{vol:.7}),je("squeak",{vol:.6,delay:.25})):n.t==="way"?je("ding",{vol:.42,rate:1.2}):n.t==="caught"?(gr=.1,vr=1,nl=8,jt.addShake(1.2),je(n.by==="vac"?"suck":n.by==="cat"?"slap":"bonk",{vol:1}),je("grunt",{vol:.85,delay:.05}),n.by==="cat"&&je("mew",{vol:.8,delay:.25}),n.by==="vac"&&je("pop",{vol:.9,delay:.5}),n.lives>0&&sn(e.caught[n.by]),jt.debrisAt(n.x,n.y,n.z,16,13616301,{speed:8,up:7,size:.16}),lx()):n.t==="end"&&(yr=n.won?2.2:1.7,Snd.loop("vac",null,0,.5),Snd.loop("rmb",null,0,.5),Snd.loop("bgm",null,0,.8),Snd.loop("purr",null,0,.4),n.won?(je("ding",{vol:1}),vr=1,nl=-6,gr=.08,jt.debrisAt(Ft.x,Ft.y+2,Ft.z,14,7339965,{speed:9,up:9,size:.07}),Th=!0):(jt.addShake(1.4),Ne("danger").style.opacity=1));(n.t==="way"||n.t==="caught")&&(Pa=Math.max(Pa,3)),(n.t==="end"||n.t==="caught")&&Snd.duck(.5,.7)}var Th=!1,Qp=null;function lx(){Th=!0}function cx(){let n=document.createElement("canvas");n.width=512,n.height=Math.round(512*innerHeight/innerWidth),n.getContext("2d").drawImage(rn.domElement,0,0,n.width,n.height),Sh=n}var hx=1200,ux=250,dx=350,gg={vac:{face:"win",snd:[["slap",{vol:1}],["grunt",{vol:.8,rate:.72,delay:.1}]]},slipper:{face:"win",snd:[["slap",{vol:1}],["wood",{vol:.8,delay:.06}]]},cat:{face:"phone",snd:[["bonk",{vol:.9}],["mew",{vol:.8,delay:.18}]]},roomba:{face:"spot",snd:[["bonk",{vol:.9}],["pop",{vol:.8,delay:.14}]]},win:{face:"angry",snd:[["bonk",{vol:1}],["grunt",{vol:.85,rate:.85,delay:.1}]]}},Ch=0,Pg=0;function Ig(){let n=Ge,e=n.won?"win":gg[n.by]?n.by:"vac",t=gg[e],i=Rn.big[t.face]||Rn.faces[t.face];if(!i){if(n.revWait=n.revWait||performance.now(),!Rn.done&&performance.now()-n.revWait<4e3){yr=.1;return}return sf()}Ct="reveal",La("reveal");let s=Ia[Fn].reveal[e],r=s[n.seed%s.length],a=Ne("revFrame");a.dataset.k=t.face,a.replaceChildren(i),Ne("revLine").textContent=r;for(let[o,l]of t.snd)je(o,{...l,delay:(l.delay||0)+.09});Og(0,0),Pg=performance.now(),Ch=setTimeout(Lg,hx),window.__revealLast={by:e,face:t.face,line:r,big:i===Rn.big[t.face]}}function Lg(){if(clearTimeout(Ch),Ct!=="reveal")return;sf();let n=Ne("result");n.classList.add("settle"),setTimeout(()=>n.classList.remove("settle"),dx)}Ne("reveal").onclick=()=>{performance.now()-Pg>=ux&&Lg()};function sf(){Ct="result";let n=Ia[Fn],e=Ge,t=Q0(e),i=e.catches.length,s=Fn==="en",r=e.itemsGot.map(o=>n.itemNames[o]),a;if(e.won)a={lang:Fn,won:!0,face:Rn.faces.angry,head:n.winHead,note:n.winNote,sign:n.winSign,gag:n.winGag[e.seed%n.winGag.length],rows:[[n.winRowTime,n.time(e.t)],[n.winRowCaught,n.times(i)]],items:r,itemsHead:n.winItems,photo:Sh};else{let o=n.forms[e.by]||n.forms.vac;a={lang:Fn,won:!1,face:Rn.faces[e.by==="vac"||e.by==="slipper"?"win":e.by==="cat"?"search":"normal"],head:o.head,sub:o.sub,bg:e.by==="slipper"?"#e9ddc8":e.by==="cat"?"#f1e6d3":"#efe7d2",rows:[[n.rowTime,n.time(e.t)],[n.rowPlace,n.place[Math.min(e.way,4)]],[n.rowCaught,n.times(i)]],listHead:n.listHead,list:[...o.list.map(([l,c])=>({t:l,n:c})),{t:o.you[0],n:o.you[1],you:!0}],items:r,itemsHead:n.itemsHead,noteHead:n.noteHead,note:o.note[e.seed%o.note.length],foot:n.foot,photo:Sh}}La("result"),Ng(),document.fonts&&document.fonts.ready.then(()=>{Ct==="result"&&Bp(Ne("paper"),a)}),Bp(Ne("paper"),a),hi={text:n.stamps[t],col:t>=2?"#008a4b":"#b5271a",r:t,won:e.won},Kp=1,Ne("btnPost").href="https://x.com/intent/post?text="+encodeURIComponent(e.won?n.postWin(n.time(e.t),i):n.postLose((n.forms[e.by]||n.forms.vac).head,n.time(e.t)))+"&url="+encodeURIComponent(Qv),je("paper",{vol:.9}),window.__lastResult={won:e.won,rank:t,t:e.t,by:e.by,catches:i,items:e.itemsGot.length,stamp:n.stamps[t]}}function Ng(){let n=Ne("paper"),e=Ne("result").querySelector(".paper-wrap").getBoundingClientRect(),t=Math.min(e.width/n.width,e.height/n.height,1);n.style.width=Math.floor(n.width*t)+"px",n.style.height=Math.floor(n.height*t)+"px"}addEventListener("resize",()=>{Ct==="result"&&Ng()});Ne("btnSave").onclick=()=>{Ne("paper").toBlob(n=>{let e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="kobito-escape.png",e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),4e3)})};Ne("btnStart").onclick=()=>nf();Ne("btnAgain").onclick=()=>nf();Ne("btnTitle").onclick=()=>{je("click"),Ah()};Ne("btnHow").onclick=()=>{Snd.init(),je("paper"),La("how")};for(let n of document.querySelectorAll("[data-close]"))n.onclick=()=>La("title");Ne("btnLang").onclick=()=>{Fn=Fn==="ja"?"en":"ja",wh.set("kob.lang",Fn),Eh()};Ne("btnMute").onclick=()=>{Snd.init(),Snd.setMute(!Snd.muted),wh.set("kob.mute",Snd.muted?"1":"0"),Eh()};Ne("btnPause").onclick=()=>sl(!0);Ne("btnResume").onclick=()=>sl(!1);Ne("btnQuit").onclick=()=>{sl(!1),Ah()};function px(n,e,t){if(window.__freeze)return;let i=e.x,s=e.y,r=e.z,a=Math.hypot(e.vx,e.vz);if(t){let S=Math.sin(e.yaw),M=Math.cos(e.yaw);a>6&&(S=e.vx/a,M=e.vz/a);let w=Math.atan2(S,M)-qe.hd;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;qe.hd+=w*(1-Math.exp(-n*1.4))}let o=Math.sin(qe.hd),l=Math.cos(qe.hd),c=5.8+Math.min(2.4,a*.07),h=2.6;h+=qe.pitch*4.2,c*=1-Math.max(0,qe.pitch)*.15;let u=i-o*c,p=r-l*c,d=s+h;for(let S=1;S<=6;S++){let M=S/6,w=i+(u-i)*M,U=r+(p-r)*M,z=s+(d-s)*M,D=!1;for(let V of cn.nearby(w,U))if(!(V.noHit||V.oneWay||V.y0==null||z<V.y0-.3||z>V.y1+.3)&&Math.abs(w-V.cx)<V.hw+.4&&Math.abs(U-V.cz)<V.hl+.4){D=!0;break}if(D){let V=Math.max(.25,(S-1)/6);u=i+(u-i)*V,p=r+(p-r)*V,d=s+h*.8+(1-V)*2;break}}d=Math.max(d,dr(cn,u,p,d).h+.5),d=Math.min(d,cn.ceilY-1.2),qe.off.lerp(zs.set(u-i,d-s,p-r),1-Math.exp(-n*10)),qe.pos.set(i+qe.off.x,s+qe.off.y,r+qe.off.z),qe.lookOff.lerp(zs.set(o*10,1.7-qe.pitch*1.2,l*10),1-Math.exp(-n*12)),qe.look.set(i+qe.lookOff.x,s+qe.lookOff.y,r+qe.lookOff.z),Bt.position.copy(qe.pos);let f=jt.shake;f>0&&Bt.position.add(zs.set((Math.random()-.5)*f,(Math.random()-.5)*f*.7,(Math.random()-.5)*f)),Bt.lookAt(qe.look);let m=Bt.aspect,g=(m>=1?60:Math.min(84,2*Math.atan(Math.tan(Oo.degToRad(37))/m)*180/Math.PI))+Math.min(18,Math.max(0,Math.hypot(e.vx,e.vy,e.vz)-6)*.5);qe.fov+=(g-qe.fov)*(1-Math.exp(-n*4)),nl*=Math.exp(-n*6),Bt.fov=qe.fov+nl,Bt.updateProjectionMatrix();let y=Bt.matrixWorld.elements,_=Math.hypot(y[0],y[2])||1,b=(e.vx*y[0]+e.vz*y[2])/_;qe.bank+=(xr((e.rope?b:0)*-.004,-.1,.1)-qe.bank)*(1-Math.exp(-n*3)),Bt.rotateZ(qe.bank)}function zg(){let n=innerWidth,e=innerHeight;rn.setSize(n,e,!1),Bt.aspect=n/e,Bt.updateProjectionMatrix(),jt.setScale&&jt.setScale(e)}addEventListener("resize",zg);zg();var Wp=performance.now(),Qo=0,Xp=0;function Dg(){if(Ct==="play"&&!Mr&&Ee)if(Ge.over)Ee.events.length=0,dh(Ee,{},ci,cn);else{let n=Qp?Hp(Qp,Ee,Ge,cn,ci):ix();Ee.events.length=0,dh(Ee,n,ci,cn);for(let e of Ee.events)ax(e);Op(Ge,ci);for(let e of Ge.events)ox(e);if(Ge.events.length=0,Ge.mom.in&&Ge.t>0&&(Pa-=ci,Pa<=0&&Ca<=0)){let e=ut("momLines");pr(e[Yp++%e.length]),Pa=9+Yp%5*1.3}Ge.mom.sucking&&!Cn.v&&(Cn.v=1,sn(ut("hintVac"))),Ge.rare.catBox&&!Cn.b&&Ge.t>9&&(Cn.b=1,sn(ut("catBox"))),Ge.rare.catOnRoomba&&!Cn.b&&Ge.t>6&&(Cn.b=1,sn(ut("catRide")))}else if(Ct==="title"&&as){let n=as,e=Hp(n.b,n.r,n.m,cn,ci);if(n.r.events.length=0,dh(n.r,e,ci,cn),Op(n.m,ci),n.m.events.length=0,n.m.over){let t=uh({id:"demo",spawn:cr}),i=(n.seed||7)+1;as={r:t,m:ph(cn,t,i),b:xh("skilled",i),seed:i}}}}function Ug(){if(requestAnimationFrame(Ug),Ct==="reveal"){Wp=performance.now();return}let n=performance.now(),e=Math.min(.1,(n-Wp)/1e3);if(Wp=n,gr>0)gr-=e,Qo=0;else if(_g)e=0;else{Qo+=e;let t=0;for(;Qo>=ci&&t<6;)Dg(),Qo-=ci,t++;t>=6&&(Qo=0)}ef(e||.016)}var fr=Ne("speedfx"),Di=fr.getContext("2d"),fx=Ne("hitflash"),yg=Array.from({length:46},()=>({a:Math.random()*Math.PI*2,p:Math.random(),s:.6+Math.random()*.8,w:1+Math.random()*2})),jp=!1;function Og(n,e){window.__holdFx||(vr=Math.max(0,vr-e*4)),fx.style.opacity=vr.toFixed(2);let t=xr((n-20)/18,0,1);if(window.__speedK=t,t<=0){jp&&(Di.clearRect(0,0,fr.width,fr.height),jp=!1);return}jp=!0;let i=innerWidth,s=innerHeight,r=Math.min(2,devicePixelRatio||1);(fr.width!==Math.round(i*r)||fr.height!==Math.round(s*r))&&(fr.width=Math.round(i*r),fr.height=Math.round(s*r)),Di.setTransform(r,0,0,r,0,0),Di.clearRect(0,0,i,s);let a=i/2,o=s*.45,l=Math.hypot(i,s)*.55;Di.lineCap="butt";let c=Math.round(yg.length*(.35+.65*t));for(let h=0;h<c;h++){let u=yg[h];u.p+=e*u.s*(1.6+t*2.4),u.p>1&&(u.p-=1,u.a=Math.random()*Math.PI*2);let p=l*(1.05-u.p*.45),d=p-l*(.12+.2*t)*u.s,f=Math.cos(u.a),m=Math.sin(u.a);Di.strokeStyle=`rgba(255,255,255,${(.1+.32*t)*Math.min(1,u.p*4)})`,Di.lineWidth=u.w,Di.beginPath(),Di.moveTo(a+f*d,o+m*d),Di.lineTo(a+f*p,o+m*p),Di.stroke()}}var el=(n,e)=>{let t=Snd.loops[n];t&&t.g&&(t.g.gain.value=Number.isFinite(e)?e:0)};function ef(n){let e=Ct==="title"?as&&as.r:Ee,t=Ct==="title"?as&&as.m:Ge;if(e&&Kn)if(Kn.update(e,n,Bt),Kn.group.visible=!(t&&t.over&&!t.won&&t.by==="vac"),e.rope){let o=Kn.handWorld;Ns.visible=!0,Ns.position.copy(o),Ns.lookAt(e.rope.x,e.rope.y,e.rope.z),Ns.scale.set(1,1,Math.max(.1,o.distanceTo(zs.set(e.rope.x,e.rope.y,e.rope.z))))}else Ns.visible=!1;else Ns.visible=!1;if(e){px(n,e,Ct==="title");let o=ui.userData.dir;ui.position.set(e.x+o.x*210,e.y+o.y*210,e.z+o.z*210),ui.target.position.set(e.x,e.y,e.z)}if(t){for(let l=0;l<2;l++)t.roombas[l]?dg[l].update(t.roombas[l],n,e):dg[l].g.visible=!1;if(qp.update(t.cat,n,e),xg.update(t,n),Ra.lookNoz(e.x,e.y+1,e.z),Ra.update(t.mom,n,Bt,Up(t)),vg.update(t.mom.slip,n),t.mom.sucking&&Xp%2===0){let l=t.mom.noz,c=Math.random()*6.28,h=10+Math.random()*18;jt.emit&&jt.emit(l.x+Math.cos(c)*h,l.y+(Math.random()-.5)*10,l.z+Math.sin(c)*h,{vx:-Math.cos(c)*h*2.2,vy:0,vz:-Math.sin(c)*h*2.2,life:.45,size:.5,r:.85,g:.8,b:.7,a:.7})}let o=performance.now()/300;for(let l in mr){let c=mr[l];c.visible&&(c.userData.sp.material.opacity=.55+.45*Math.sin(o+c.position.x))}if(Ct==="title")for(let l in mr)mr[l].visible=!0}let i=performance.now()/400;if(Mh.goalRing.material.opacity=.5+.3*Math.sin(i*2),Mh.goalRing.scale.setScalar(1+.04*Math.sin(i*2)),Mh.motes.rotation.y=Math.sin(i*.06)*.02,il.update(n),Zn.visible=!1,Ct==="play"&&Ee&&!Ee.rope&&!Ge.over){if(Xp%4===0){let l=bg(),c=Math.atan2(l.f.x,l.f.z);if(xt.id!=null&&Math.hypot(xt.x,xt.y)>.15){let h=l.r.x*xt.x-l.f.x*xt.y,u=l.r.z*xt.x-l.f.z*xt.y;c=Math.atan2(h,u)}Zn.userData.p=Ko(cn,Ee,c)}let o=Zn.userData.p;o&&(Zn.visible=!0,Zn.position.set(o.x,o.y,o.z),Zn.lookAt(Bt.position),Zn.scale.setScalar(Math.max(1,Bt.position.distanceTo(Zn.position)*.04)))}let s=Ne("btnWire"),r=Zn.visible,a=!!(Ee&&Ee.rope);if(s._aim!==r&&(s._aim=r,s.classList.toggle("aim",r)),s._on!==a&&(s._on=a,s.classList.toggle("on",a)),Ct==="play"&&Ee){let o=Math.hypot(Ee.vx,Ee.vy,Ee.vz);el("wind",Ee.grounded?0:Math.min(.35,Math.max(0,(o-16)/40)));let l=1e9;for(let d of Ge.roombas)d.on&&(l=Math.min(l,Math.hypot(d.x-Ee.x,d.z-Ee.z)));el("rmb",Math.max(0,.4*(1-l/130)));let c=Ge.mom,h=c.in?c.dist||400:1e9;el("vac",c.in&&c.phoneT<=0?Math.max(.05,.62*Math.pow(Math.max(0,1-h/220),1.5)):0),el("frg",Math.max(0,.22*(1-Math.hypot(137-Ee.x,507-Ee.z)/220)));let u=Ge.cat,p=u.state==="box"||u.state==="ride"||u.state==="nap"?Math.hypot(u.x-Ee.x,u.y-Ee.y,u.z-Ee.z):1e9;el("purr",Math.max(0,.34*(1-p/60)))}if(Og(Ct==="play"&&Ee?Math.hypot(Ee.vx,Ee.vy,Ee.vz):0,n),jt.update(n),jt.shake=Math.max(0,jt.shake-n*2.5),Ct==="play"&&Ge&&(rx(n),yr>0&&!Mr&&(yr-=n,yr<=0&&Ig())),hi&&Ct==="result"&&(Kp-=n,Kp<=0&&(hg(Ne("paper"),hi.text,hi.col,1,hi.won),je("slam",{vol:1}),je(hi.r>=3||hi.r===2?"win":hi.r===1?"meh":"lose",{vol:.8,delay:.1}),hi=null,window.__stamped=!0)),rn.render(kt,Bt),Th){Th=!1;let o=Ra.noz.visible;Ra.noz.visible=!1,rn.render(kt,Bt),cx(),Ra.noz.visible=o}Xp++}window.kob={get hero(){return Kn},get mode(){return Ct},log:Rh,mom3d:Ra,momArt:Rn,momFace:Up,toys3d:xg,get me(){return Ee},get run(){return Ge},RUN:le,CH:Qe,world:cn,camera:Bt,cam:qe,renderer:rn,GOAL:Ft,F:te,built:Mh,get stickObj(){return xt},start:n=>nf(n),toTitle:Ah,showResult:sf,startReveal:Ig,get revealTexts(){return{ja:Ia.ja.reveal,en:Ia.en.reveal}},setLang:n=>{Fn=n,Eh()},get lang(){return Fn},setPause:sl,dbg:{pause:n=>{_g=n},step:n=>{for(let e=0;e<n;e++)Dg();ef(ci)},render:n=>{for(let e=0;e<n;e++)ef(1/30)},teleport:(n,e,t,i)=>{Object.assign(Ee,{x:n,y:e,z:t,vx:0,vy:0,vz:0,rope:null,climbing:null,grounded:e<.1}),i!=null&&(Ee.yaw=i,qe.hd=i),qe.off.set(-Math.sin(qe.hd)*6,3,-Math.cos(qe.hd)*6),qe.lookOff.set(Math.sin(qe.hd)*10,1.4,Math.cos(qe.hd)*10)},tap:(n,e)=>Mg(n,e),wire:()=>{rs={at:null,key:!0}},say:sn,get pending(){return rs},auto:n=>{Qp=n?xh(n,Ge?Ge.seed:1):null},drawCount:()=>rn.info.render.calls,tris:()=>rn.info.render.triangles}};Eh();Ah();requestAnimationFrame(Ug);tx(()=>{window.__kobReady=!0,ng().then(()=>{O0(),Snd.prefetch()})});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
