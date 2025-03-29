(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="166",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,CullFaceFrontBack=3,BasicShadowMap=0,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,AttachedBindMode="attached",DetachedBindMode="detached",UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipMapNearestFilter=1004,NearestMipmapLinearFilter=1005,NearestMipMapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipMapNearestFilter=1007,LinearMipmapLinearFilter=1008,LinearMipMapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBIntegerFormat=1032,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LoopOnce=2200,LoopRepeat=2201,LoopPingPong=2202,InterpolateDiscrete=2300,InterpolateLinear=2301,InterpolateSmooth=2302,ZeroCurvatureEnding=2400,ZeroSlopeEnding=2401,WrapAroundEnding=2402,NormalAnimationBlendMode=2500,AdditiveAnimationBlendMode=2501,TrianglesDrawMode=0,TriangleStripDrawMode=1,TriangleFanDrawMode=2,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",ZeroStencilOp=0,KeepStencilOp=7680,ReplaceStencilOp=7681,IncrementStencilOp=7682,DecrementStencilOp=7683,IncrementWrapStencilOp=34055,DecrementWrapStencilOp=34056,InvertStencilOp=5386,NeverStencilFunc=512,LessStencilFunc=513,EqualStencilFunc=514,LessEqualStencilFunc=515,GreaterStencilFunc=516,NotEqualStencilFunc=517,GreaterEqualStencilFunc=518,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,DynamicDrawUsage=35048,StreamDrawUsage=35040,StaticReadUsage=35045,DynamicReadUsage=35049,StreamReadUsage=35041,StaticCopyUsage=35046,DynamicCopyUsage=35050,StreamCopyUsage=35042,GLSL1="100",GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[a&255]+_lut[a>>8&255]+_lut[a>>16&255]+_lut[a>>24&255]+"-"+_lut[t&255]+_lut[t>>8&255]+"-"+_lut[t>>16&15|64]+_lut[t>>24&255]+"-"+_lut[n&63|128]+_lut[n>>8&255]+"-"+_lut[n>>16&255]+_lut[n>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp(a,t,n){return Math.max(t,Math.min(n,a))}function euclideanModulo(a,t){return(a%t+t)%t}function mapLinear(a,t,n,i,r){return i+(a-t)*(r-i)/(n-t)}function inverseLerp(a,t,n){return a!==t?(n-a)/(t-a):0}function lerp(a,t,n){return(1-n)*a+n*t}function damp(a,t,n,i){return lerp(a,t,1-Math.exp(-n*i))}function pingpong(a,t=1){return t-Math.abs(euclideanModulo(a,t*2)-t)}function smoothstep(a,t,n){return a<=t?0:a>=n?1:(a=(a-t)/(n-t),a*a*(3-2*a))}function smootherstep(a,t,n){return a<=t?0:a>=n?1:(a=(a-t)/(n-t),a*a*a*(a*(a*6-15)+10))}function randInt(a,t){return a+Math.floor(Math.random()*(t-a+1))}function randFloat(a,t){return a+Math.random()*(t-a)}function randFloatSpread(a){return a*(.5-Math.random())}function seededRandom(a){a!==void 0&&(_seed=a);let t=_seed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function degToRad(a){return a*DEG2RAD}function radToDeg(a){return a*RAD2DEG}function isPowerOfTwo(a){return(a&a-1)===0&&a!==0}function ceilPowerOfTwo(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function floorPowerOfTwo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function setQuaternionFromProperEuler(a,t,n,i,r){const s=Math.cos,o=Math.sin,l=s(n/2),c=o(n/2),h=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":a.set(l*u,c*d,c*f,l*h);break;case"YZY":a.set(c*f,l*u,c*d,l*h);break;case"ZXZ":a.set(c*d,c*f,l*u,l*h);break;case"XZX":a.set(l*u,c*g,c*p,l*h);break;case"YXY":a.set(c*p,l*u,c*g,l*h);break;case"ZYZ":a.set(c*g,c*p,l*u,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function denormalize(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function normalize(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize};class Vector2{constructor(t=0,n=0){Vector2.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(clamp(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(t,n,i,r,s,o,l,c,h){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,l,c,h)}set(t,n,i,r,s,o,l,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=l,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],l=i[3],c=i[6],h=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=r[0],_=r[3],m=r[6],y=r[1],v=r[4],M=r[7],P=r[2],E=r[5],C=r[8];return s[0]=o*x+l*y+c*P,s[3]=o*_+l*v+c*E,s[6]=o*m+l*M+c*C,s[1]=h*x+u*y+d*P,s[4]=h*_+u*v+d*E,s[7]=h*m+u*M+d*C,s[2]=f*x+p*y+g*P,s[5]=f*_+p*v+g*E,s[8]=f*m+p*M+g*C,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8];return n*o*u-n*l*h-i*s*u+i*l*c+r*s*h-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=u*o-l*h,f=l*c-u*s,p=h*s-o*c,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(r*h-u*i)*x,t[2]=(l*i-r*o)*x,t[3]=f*x,t[4]=(u*n-r*c)*x,t[5]=(r*s-l*n)*x,t[6]=p*x,t[7]=(i*c-h*n)*x,t[8]=(o*n-i*s)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,l){const c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*o+h*l)+o+t,-r*h,r*c,-r*(-h*o+c*l)+l+n,0,0,1),this}scale(t,n){return this.premultiply(_m3.makeScale(t,n)),this}rotate(t){return this.premultiply(_m3.makeRotation(-t)),this}translate(t,n){return this.premultiply(_m3.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}const TYPED_ARRAYS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function getTypedArray(a,t){return new TYPED_ARRAYS[a](t)}function createElementNS(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function createCanvasElement(){const a=createElementNS("canvas");return a.style.display="block",a}const _cache={};function warnOnce(a){a in _cache||(_cache[a]=!0,console.warn(a))}function probeAsync(a,t,n){return new Promise(function(i,r){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:r();break;case a.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,toReference:a=>a,fromReference:a=>a},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,toReference:a=>a.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:a=>a.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,toReference:a=>a.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:a=>a.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!SUPPORTED_WORKING_COLOR_SPACES.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,n){if(this.enabled===!1||t===n||!t||!n)return a;const i=COLOR_SPACES[t].toReference,r=COLOR_SPACES[n].fromReference;return r(i(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return COLOR_SPACES[a].primaries},getTransfer:function(a){return a===NoColorSpace?LinearTransfer:COLOR_SPACES[a].transfer}};function SRGBToLinear(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function LinearToSRGB(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=t.width,_canvas.height=t.height;const i=_canvas.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=_canvas}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=createElementNS("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=SRGBToLinear(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(SRGBToLinear(n[i]/255)*255):n[i]=SRGBToLinear(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _sourceId=0;class Source{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(serializeImage(r[o].image)):s.push(serializeImage(r[o]))}else s=serializeImage(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function serializeImage(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ImageUtils.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(t=Texture.DEFAULT_IMAGE,n=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,o=LinearMipmapLinearFilter,l=RGBAFormat,c=UnsignedByteType,h=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==UVMapping)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case RepeatWrapping:t.x=t.x-Math.floor(t.x);break;case ClampToEdgeWrapping:t.x=t.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case RepeatWrapping:t.y=t.y-Math.floor(t.y);break;case ClampToEdgeWrapping:t.y=t.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(t=0,n=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,h=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],x=c[2],_=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+_)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(h+1)/2,M=(p+1)/2,P=(m+1)/2,E=(u+f)/4,C=(d+x)/4,L=(g+_)/4;return v>M&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=C/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=L/s),this.set(i,r,s,n),this}let y=Math.sqrt((_-g)*(_-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((h+p+m-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Vector4(0,0,t,n),this.scissorTest=!1,this.viewport=new Vector4(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Texture(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Source(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class WebGLArrayRenderTarget extends WebGLRenderTarget{constructor(t=1,n=1,i=1,r={}){super(t,n,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new DataArrayTexture(null,t,n,i),this.texture.isRenderTargetTexture=!0}}class Data3DTexture extends Texture{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WebGL3DRenderTarget extends WebGLRenderTarget{constructor(t=1,n=1,i=1,r={}){super(t,n,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Data3DTexture(null,t,n,i),this.texture.isRenderTargetTexture=!0}}class Quaternion{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,l){let c=i[r+0],h=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(l===0){t[n+0]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d;return}if(l===1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||c!==f||h!==p||u!==g){let _=1-l;const m=c*f+h*p+u*g+d*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),E=Math.atan2(P,m*y);_=Math.sin(_*E)/P,l=Math.sin(l*E)/P}const M=l*y;if(c=c*_+f*M,h=h*_+p*M,u=u*_+g*M,d=d*_+x*M,_===1-l){const P=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=P,h*=P,u*=P,d*=P}}t[n]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,r,s,o){const l=i[r],c=i[r+1],h=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[n]=l*g+u*d+c*p-h*f,t[n+1]=c*g+u*f+h*d-l*p,t[n+2]=h*g+u*p+l*f-c*d,t[n+3]=u*g-l*d-c*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,l=Math.cos,c=Math.sin,h=l(i/2),u=l(r/2),d=l(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+h*p*g,this._y=h*p*d-f*u*g,this._z=h*u*g+f*p*d,this._w=h*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+h*p*g,this._y=h*p*d-f*u*g,this._z=h*u*g-f*p*d,this._w=h*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-h*p*g,this._y=h*p*d+f*u*g,this._z=h*u*g+f*p*d,this._w=h*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-h*p*g,this._y=h*p*d+f*u*g,this._z=h*u*g-f*p*d,this._w=h*u*d+f*p*g;break;case"YZX":this._x=f*u*d+h*p*g,this._y=h*p*d+f*u*g,this._z=h*u*g-f*p*d,this._w=h*u*d-f*p*g;break;case"XZY":this._x=f*u*d-h*p*g,this._y=h*p*d-f*u*g,this._z=h*u*g+f*p*d,this._w=h*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],l=n[5],c=n[9],h=n[2],u=n[6],d=n[10],f=i+l+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-h)*p,this._z=(o-r)*p}else if(i>l&&i>d){const p=2*Math.sqrt(1+i-l-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+h)/p}else if(l>d){const p=2*Math.sqrt(1+l-i-d);this._w=(s-h)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-l);this._w=(o-r)/p,this._x=(s+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(clamp(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,l=n._x,c=n._y,h=n._z,u=n._w;return this._x=i*u+o*l+r*h-s*c,this._y=r*u+o*c+s*l-i*h,this._z=s*u+o*h+i*c-r*l,this._w=o*u-i*l-r*c-s*h,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let l=o*t._w+i*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,l),d=Math.sin((1-n)*u)/h,f=Math.sin(n*u)/h;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(t=0,n=0,i=0){Vector3.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(_quaternion$4.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,l=t.z,c=t.w,h=2*(o*r-l*i),u=2*(l*n-s*r),d=2*(s*i-o*n);return this.x=n+c*h+o*d-l*u,this.y=i+c*u+l*h-s*d,this.z=r+c*d+s*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _vector$c.copy(this).projectOnVector(t),this.sub(_vector$c)}reflect(t){return this.sub(_vector$c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(clamp(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(t=new Vector3(1/0,1/0,1/0),n=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(_vector$b.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(_vector$b.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=_vector$b.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,_vector$b):_vector$b.fromBufferAttribute(s,o),_vector$b.applyMatrix4(t.matrixWorld),this.expandByPoint(_vector$b);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_box$4.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_box$4.copy(i.boundingBox)),_box$4.applyMatrix4(t.matrixWorld),this.union(_box$4)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_vector$b),_vector$b.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(t.a,_center),_v1$7.subVectors(t.b,_center),_v2$4.subVectors(t.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let n=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(n,_v0$2,_v1$7,_v2$4,_extents)||(n=[1,0,0,0,1,0,0,0,1],!satForAxes(n,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),n=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(n,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_vector$b).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_vector$b).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_points),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(a,t,n,i,r){for(let s=0,o=a.length-3;s<=o;s+=3){_testAxis.fromArray(a,s);const l=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),c=t.dot(_testAxis),h=n.dot(_testAxis),u=i.dot(_testAxis);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>l)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(t=new Vector3,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):_box$3.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_v1$6.subVectors(t,this.center);const n=_v1$6.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$6,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_v2$3.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_v1$6.copy(t.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(t.center).sub(_v2$3))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(t=new Vector3,n=new Vector3(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_vector$a)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=_vector$a.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(_vector$a.copy(this.origin).addScaledVector(this.direction,n),_vector$a.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){_segCenter.copy(t).add(n).multiplyScalar(.5),_segDir.copy(n).sub(t).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=t.distanceTo(n)*.5,o=-this.direction.dot(_segDir),l=_diff.dot(this.direction),c=-_diff.dot(_segDir),h=_diff.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*c-l,f=o*l-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*l)+f*(o*d+f+2*c)+h}else f=s,d=Math.max(0,-(o*f+l)),p=-d*d+f*(f+2*c)+h;else f=-s,d=Math.max(0,-(o*f+l)),p=-d*d+f*(f+2*c)+h;else f<=-g?(d=Math.max(0,-(-o*s+l)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+h):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+h):(d=Math.max(0,-(o*s+l)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+h);else f=o>0?-s:s,d=Math.max(0,-(o*f+l)),p=-d*d+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_segCenter).addScaledVector(_segDir,f),p}intersectSphere(t,n){_vector$a.subVectors(t.center,this.origin);const i=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,l,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,r=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,r=(t.min.x-f.x)*h),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(l=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,_vector$a)!==null}intersectTriangle(t,n,i,r,s){_edge1.subVectors(n,t),_edge2.subVectors(i,t),_normal$1.crossVectors(_edge1,_edge2);let o=this.direction.dot(_normal$1),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;_diff.subVectors(this.origin,t);const c=l*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const h=l*this.direction.dot(_edge1.cross(_diff));if(h<0||c+h>o)return null;const u=-l*_diff.dot(_normal$1);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(t,n,i,r,s,o,l,c,h,u,d,f,p,g,x,_){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,l,c,h,u,d,f,p,g,x,_)}set(t,n,i,r,s,o,l,c,h,u,d,f,p,g,x,_){const m=this.elements;return m[0]=t,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=l,m[13]=c,m[2]=h,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/_v1$5.setFromMatrixColumn(t,0).length(),s=1/_v1$5.setFromMatrixColumn(t,1).length(),o=1/_v1$5.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*d,g=l*u,x=l*d;n[0]=c*u,n[4]=-c*d,n[8]=h,n[1]=p+g*h,n[5]=f-x*h,n[9]=-l*c,n[2]=x-f*h,n[6]=g+p*h,n[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*d,g=h*u,x=h*d;n[0]=f+x*l,n[4]=g*l-p,n[8]=o*h,n[1]=o*d,n[5]=o*u,n[9]=-l,n[2]=p*l-g,n[6]=x+f*l,n[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*d,g=h*u,x=h*d;n[0]=f-x*l,n[4]=-o*d,n[8]=g+p*l,n[1]=p+g*l,n[5]=o*u,n[9]=x-f*l,n[2]=-o*h,n[6]=l,n[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*d,g=l*u,x=l*d;n[0]=c*u,n[4]=g*h-p,n[8]=f*h+x,n[1]=c*d,n[5]=x*h+f,n[9]=p*h-g,n[2]=-h,n[6]=l*c,n[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*h,g=l*c,x=l*h;n[0]=c*u,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-l*u,n[2]=-h*u,n[6]=p*d+g,n[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,p=o*h,g=l*c,x=l*h;n[0]=c*u,n[4]=-d,n[8]=h*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=l*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_zero,t,_one)}lookAt(t,n,i){const r=this.elements;return _z.subVectors(t,n),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],l=i[4],c=i[8],h=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],_=i[10],m=i[14],y=i[3],v=i[7],M=i[11],P=i[15],E=r[0],C=r[4],L=r[8],A=r[12],S=r[1],I=r[5],z=r[9],N=r[13],k=r[2],W=r[6],G=r[10],Z=r[14],H=r[3],ue=r[7],_e=r[11],fe=r[15];return s[0]=o*E+l*S+c*k+h*H,s[4]=o*C+l*I+c*W+h*ue,s[8]=o*L+l*z+c*G+h*_e,s[12]=o*A+l*N+c*Z+h*fe,s[1]=u*E+d*S+f*k+p*H,s[5]=u*C+d*I+f*W+p*ue,s[9]=u*L+d*z+f*G+p*_e,s[13]=u*A+d*N+f*Z+p*fe,s[2]=g*E+x*S+_*k+m*H,s[6]=g*C+x*I+_*W+m*ue,s[10]=g*L+x*z+_*G+m*_e,s[14]=g*A+x*N+_*Z+m*fe,s[3]=y*E+v*S+M*k+P*H,s[7]=y*C+v*I+M*W+P*ue,s[11]=y*L+v*z+M*G+P*_e,s[15]=y*A+v*N+M*Z+P*fe,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],l=t[5],c=t[9],h=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],_=t[11],m=t[15];return g*(+s*c*d-r*h*d-s*l*f+i*h*f+r*l*p-i*c*p)+x*(+n*c*p-n*h*f+s*o*f-r*o*p+r*h*u-s*c*u)+_*(+n*h*d-n*l*p-s*o*d+i*o*p+s*l*u-i*h*u)+m*(-r*l*u-n*c*d+n*l*f+r*o*d-i*o*f+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],_=t[14],m=t[15],y=d*_*h-x*f*h+x*c*p-l*_*p-d*c*m+l*f*m,v=g*f*h-u*_*h-g*c*p+o*_*p+u*c*m-o*f*m,M=u*x*h-g*d*h+g*l*p-o*x*p-u*l*m+o*d*m,P=g*d*c-u*x*c-g*l*f+o*x*f+u*l*_-o*d*_,E=n*y+i*v+r*M+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=y*C,t[1]=(x*f*s-d*_*s-x*r*p+i*_*p+d*r*m-i*f*m)*C,t[2]=(l*_*s-x*c*s+x*r*h-i*_*h-l*r*m+i*c*m)*C,t[3]=(d*c*s-l*f*s-d*r*h+i*f*h+l*r*p-i*c*p)*C,t[4]=v*C,t[5]=(u*_*s-g*f*s+g*r*p-n*_*p-u*r*m+n*f*m)*C,t[6]=(g*c*s-o*_*s-g*r*h+n*_*h+o*r*m-n*c*m)*C,t[7]=(o*f*s-u*c*s+u*r*h-n*f*h-o*r*p+n*c*p)*C,t[8]=M*C,t[9]=(g*d*s-u*x*s-g*i*p+n*x*p+u*i*m-n*d*m)*C,t[10]=(o*x*s-g*l*s+g*i*h-n*x*h-o*i*m+n*l*m)*C,t[11]=(u*l*s-o*d*s-u*i*h+n*d*h+o*i*p-n*l*p)*C,t[12]=P*C,t[13]=(u*x*r-g*d*r+g*i*f-n*x*f-u*i*_+n*d*_)*C,t[14]=(g*l*r-o*x*r-g*i*c+n*x*c+o*i*_-n*l*_)*C,t[15]=(o*d*r-u*l*r+u*i*c-n*d*c-o*i*f+n*l*f)*C,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,l=t.y,c=t.z,h=s*o,u=s*l;return this.set(h*o+i,h*l-r*c,h*c+r*l,0,h*l+r*c,u*l+i,u*c-r*o,0,h*c-r*l,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,l=n._z,c=n._w,h=s+s,u=o+o,d=l+l,f=s*h,p=s*u,g=s*d,x=o*u,_=o*d,m=l*d,y=c*h,v=c*u,M=c*d,P=i.x,E=i.y,C=i.z;return r[0]=(1-(x+m))*P,r[1]=(p+M)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(f+m))*E,r[6]=(_+y)*E,r[7]=0,r[8]=(g+v)*C,r[9]=(_-y)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=_v1$5.set(r[0],r[1],r[2]).length();const o=_v1$5.set(r[4],r[5],r[6]).length(),l=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_m1$4.copy(this);const h=1/s,u=1/o,d=1/l;return _m1$4.elements[0]*=h,_m1$4.elements[1]*=h,_m1$4.elements[2]*=h,_m1$4.elements[4]*=u,_m1$4.elements[5]*=u,_m1$4.elements[6]*=u,_m1$4.elements[8]*=d,_m1$4.elements[9]*=d,_m1$4.elements[10]*=d,n.setFromRotationMatrix(_m1$4),i.x=s,i.y=o,i.z=l,this}makePerspective(t,n,i,r,s,o,l=WebGLCoordinateSystem){const c=this.elements,h=2*s/(n-t),u=2*s/(i-r),d=(n+t)/(n-t),f=(i+r)/(i-r);let p,g;if(l===WebGLCoordinateSystem)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(l===WebGPUCoordinateSystem)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,o,l=WebGLCoordinateSystem){const c=this.elements,h=1/(n-t),u=1/(i-r),d=1/(o-s),f=(n+t)*h,p=(i+r)*u;let g,x;if(l===WebGLCoordinateSystem)g=(o+s)*d,x=-2*d;else if(l===WebGPUCoordinateSystem)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const _v1$5=new Vector3,_m1$4=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(t=0,n=0,i=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return _matrix$2.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_matrix$2,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$3=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const t=new Vector3,n=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return _q1.setFromAxisAngle(t,n),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(t,n){return _q1.setFromAxisAngle(t,n),this.quaternion.premultiply(_q1),this}rotateX(t){return this.rotateOnAxis(_xAxis,t)}rotateY(t){return this.rotateOnAxis(_yAxis,t)}rotateZ(t){return this.rotateOnAxis(_zAxis,t)}translateOnAxis(t,n){return _v1$4.copy(t).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_xAxis,t)}translateY(t){return this.translateOnAxis(_yAxis,t)}translateZ(t){return this.translateOnAxis(_zAxis,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?_target.copy(t):_target.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$3.lookAt(_position$3,_target,this.up):_m1$3.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$3),r&&(_m1$3.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$3),this.quaternion.premultiply(_q1.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_addedEvent),_childaddedEvent.child=t,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_removedEvent),_childremovedEvent.child=t,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_m1$3.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_m1$3.multiply(t.parent.matrixWorld)),t.applyMatrix4(_m1$3),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_addedEvent),_childaddedEvent.child=t,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,t,_scale$2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(t.animations,c))}}if(n){const l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(l){const c=[];for(const h in l){const u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(t=new Vector3,n=new Vector3,i=new Vector3){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),_v0$1.subVectors(t,n),r.cross(_v0$1);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){_v0$1.subVectors(r,n),_v1$3.subVectors(i,n),_v2$2.subVectors(t,n);const o=_v0$1.dot(_v0$1),l=_v0$1.dot(_v1$3),c=_v0$1.dot(_v2$2),h=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),d=o*h-l*l;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(h*c-l*u)*f,g=(o*u-l*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(t,n,i,r,s,o,l,c){return this.getBarycoord(t,n,i,r,_v3$2)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_v3$2.x),c.addScaledVector(o,_v3$2.y),c.addScaledVector(l,_v3$2.z),c)}static isFrontFacing(t,n,i,r){return _v0$1.subVectors(i,n),_v1$3.subVectors(t,n),_v0$1.cross(_v1$3).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Triangle.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Triangle.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Triangle.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Triangle.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Triangle.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,l;_vab.subVectors(r,i),_vac.subVectors(s,i),_vap.subVectors(t,i);const c=_vab.dot(_vap),h=_vac.dot(_vap);if(c<=0&&h<=0)return n.copy(i);_vbp.subVectors(t,r);const u=_vab.dot(_vbp),d=_vac.dot(_vbp);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(_vab,o);_vcp.subVectors(t,s);const p=_vab.dot(_vcp),g=_vac.dot(_vcp);if(g>=0&&p<=g)return n.copy(s);const x=p*h-c*g;if(x<=0&&h>=0&&g<=0)return l=h/(h-g),n.copy(i).addScaledVector(_vac,l);const _=u*g-p*d;if(_<=0&&d-u>=0&&p-g>=0)return _vbc.subVectors(s,r),l=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(_vbc,l);const m=1/(_+x+f);return o=x*m,l=f*m,n.copy(i).addScaledVector(_vab,o).addScaledVector(_vac,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class Color{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=SRGBColorSpace){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ColorManagement.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=ColorManagement.workingColorSpace){return this.r=t,this.g=n,this.b=i,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=ColorManagement.workingColorSpace){if(t=euclideanModulo(t,1),n=clamp(n,0,1),i=clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hue2rgb(o,s,t+1/3),this.g=hue2rgb(o,s,t),this.b=hue2rgb(o,s,t-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(t,n=SRGBColorSpace){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=SRGBColorSpace){const i=_colorKeywords[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=SRGBToLinear(t.r),this.g=SRGBToLinear(t.g),this.b=SRGBToLinear(t.b),this}copyLinearToSRGB(t){return this.r=LinearToSRGB(t.r),this.g=LinearToSRGB(t.g),this.b=LinearToSRGB(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color$1.copy(this),t),Math.round(clamp(_color$1.r*255,0,255))*65536+Math.round(clamp(_color$1.g*255,0,255))*256+Math.round(clamp(_color$1.b*255,0,255))}getHexString(t=SRGBColorSpace){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color$1.copy(this),n);const i=_color$1.r,r=_color$1.g,s=_color$1.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,h;const u=(l+o)/2;if(l===o)c=0,h=0;else{const d=o-l;switch(h=u<=.5?d/(o+l):d/(2-o-l),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,n=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color$1.copy(this),n),t.r=_color$1.r,t.g=_color$1.g,t.b=_color$1.b,t}getStyle(t=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color$1.copy(this),t);const n=_color$1.r,i=_color$1.g,r=_color$1.b;return t!==SRGBColorSpace?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(_hslA),this.setHSL(_hslA.h+t,_hslA.s+n,_hslA.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(_hslA),t.getHSL(_hslB);const i=lerp(_hslA.h,_hslB.h,n),r=lerp(_hslA.s,_hslB.s,n),s=lerp(_hslA.l,_hslB.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color$1=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(i.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(i.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(i.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class MeshBasicMaterial extends Material{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _tables=_generateTables();function _generateTables(){const a=new ArrayBuffer(4),t=new Float32Array(a),n=new Uint32Array(a),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const h=c-127;h<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):h<-14?(i[c]=1024>>-h-14,i[c|256]=1024>>-h-14|32768,r[c]=-h-1,r[c|256]=-h-1):h<=15?(i[c]=h+15<<10,i[c|256]=h+15<<10|32768,r[c]=13,r[c|256]=13):h<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,s[c]=h|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:t,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:l}}function toHalfFloat(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=clamp(a,-65504,65504),_tables.floatView[0]=a;const t=_tables.uint32View[0],n=t>>23&511;return _tables.baseTable[n]+((t&8388607)>>_tables.shiftTable[n])}function fromHalfFloat(a){const t=a>>10;return _tables.uint32View[0]=_tables.mantissaTable[_tables.offsetTable[t]+(a&1023)]+_tables.exponentTable[t],_tables.floatView[0]}const DataUtils={toHalfFloat,fromHalfFloat},_vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return warnOnce("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_vector2$1.fromBufferAttribute(this,n),_vector2$1.applyMatrix3(t),this.setXY(n,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyMatrix3(t),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyMatrix4(t),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.applyNormalMatrix(t),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)_vector$9.fromBufferAttribute(this,n),_vector$9.transformDirection(t),this.setXYZ(n,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=denormalize(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=normalize(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=denormalize(n,this.array)),n}setX(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=denormalize(n,this.array)),n}setY(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=denormalize(n,this.array)),n}setZ(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=denormalize(n,this.array)),n}setW(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==StaticDrawUsage&&(t.usage=this.usage),t}}class Int8BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Int8Array(t),n,i)}}class Uint8BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Uint8Array(t),n,i)}}class Uint8ClampedBufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Uint8ClampedArray(t),n,i)}}class Int16BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Int16Array(t),n,i)}}class Uint16BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Int32BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Int32Array(t),n,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Float16BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Uint16Array(t),n,i),this.isFloat16BufferAttribute=!0}getX(t){let n=fromHalfFloat(this.array[t*this.itemSize]);return this.normalized&&(n=denormalize(n,this.array)),n}setX(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize]=toHalfFloat(n),this}getY(t){let n=fromHalfFloat(this.array[t*this.itemSize+1]);return this.normalized&&(n=denormalize(n,this.array)),n}setY(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize+1]=toHalfFloat(n),this}getZ(t){let n=fromHalfFloat(this.array[t*this.itemSize+2]);return this.normalized&&(n=denormalize(n,this.array)),n}setZ(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize+2]=toHalfFloat(n),this}getW(t){let n=fromHalfFloat(this.array[t*this.itemSize+3]);return this.normalized&&(n=denormalize(n,this.array)),n}setW(t,n){return this.normalized&&(n=normalize(n,this.array)),this.array[t*this.itemSize+3]=toHalfFloat(n),this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array)),this.array[t+0]=toHalfFloat(n),this.array[t+1]=toHalfFloat(i),this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[t+0]=toHalfFloat(n),this.array[t+1]=toHalfFloat(i),this.array[t+2]=toHalfFloat(r),this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.array[t+0]=toHalfFloat(n),this.array[t+1]=toHalfFloat(i),this.array[t+2]=toHalfFloat(r),this.array[t+3]=toHalfFloat(s),this}}class Float32BufferAttribute extends BufferAttribute{constructor(t,n,i){super(new Float32Array(t),n,i)}}let _id$2=0;const _m1$2=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(arrayNeedsUint32(t)?Uint32BufferAttribute:Uint16BufferAttribute)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Matrix3().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _m1$2.makeRotationFromQuaternion(t),this.applyMatrix4(_m1$2),this}rotateX(t){return _m1$2.makeRotationX(t),this.applyMatrix4(_m1$2),this}rotateY(t){return _m1$2.makeRotationY(t),this.applyMatrix4(_m1$2),this}rotateZ(t){return _m1$2.makeRotationZ(t),this.applyMatrix4(_m1$2),this}translate(t,n,i){return _m1$2.makeTranslation(t,n,i),this.applyMatrix4(_m1$2),this}scale(t,n,i){return _m1$2.makeScale(t,n,i),this.applyMatrix4(_m1$2),this}lookAt(t){return _obj.lookAt(t),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Float32BufferAttribute(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(t){const i=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const l=n[s];_boxMorphTargets.setFromBufferAttribute(l),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)_vector$8.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(_vector$8));if(n)for(let s=0,o=n.length;s<o;s++){const l=n[s],c=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)_vector$8.fromBufferAttribute(l,h),c&&(_offset.fromBufferAttribute(t,h),_vector$8.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let L=0;L<i.count;L++)l[L]=new Vector3,c[L]=new Vector3;const h=new Vector3,u=new Vector3,d=new Vector3,f=new Vector2,p=new Vector2,g=new Vector2,x=new Vector3,_=new Vector3;function m(L,A,S){h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,S),u.sub(h),d.sub(h),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),_.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),l[L].add(x),l[A].add(x),l[S].add(x),c[L].add(_),c[A].add(_),c[S].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,A=y.length;L<A;++L){const S=y[L],I=S.start,z=S.count;for(let N=I,k=I+z;N<k;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new Vector3,M=new Vector3,P=new Vector3,E=new Vector3;function C(L){P.fromBufferAttribute(r,L),E.copy(P);const A=l[L];v.copy(A),v.sub(P.multiplyScalar(P.dot(A))).normalize(),M.crossVectors(E,A);const I=M.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,A=y.length;L<A;++L){const S=y[L],I=S.start,z=S.count;for(let N=I,k=I+z;N<k;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Vector3,s=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,h=new Vector3,u=new Vector3,d=new Vector3;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),_=t.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,_),l.add(u),c.add(u),h.add(u),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)_vector$8.fromBufferAttribute(t,n),_vector$8.normalize(),t.setXYZ(n,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function t(l,c){const h=l.array,u=l.itemSize,d=l.normalized,f=new h.constructor(c.length*u);let p=0,g=0;for(let x=0,_=c.length;x<_;x++){l.isInterleavedBufferAttribute?p=c[x]*l.data.stride+l.offset:p=c[x]*u;for(let m=0;m<u;m++)f[g++]=h[p++]}return new BufferAttribute(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new BufferGeometry,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],h=t(c,i);n.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const c=[],h=s[l];for(let u=0,d=h.length;u<d;u++){const f=h[u],p=t(f,i);c.push(p)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(n))}const s=t.morphAttributes;for(const h in s){const u=[],d=s[h];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(t=new BufferGeometry,n=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){_morphA.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=l[c],d=s[c];u!==0&&(_tempA.fromBufferAttribute(d,t),o?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(n),u))}n.add(_morphA)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$6.copy(i.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(t.ray).recast(t.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(t.far-t.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(t.ray).applyMatrix4(_inverseMatrix$3),!(i.boundingBox!==null&&_ray$3.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,_ray$3)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const _=f[g],m=o[_.materialIndex],y=Math.max(_.start,p.start),v=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let M=y,P=v;M<P;M+=3){const E=l.getX(M),C=l.getX(M+1),L=l.getX(M+2);r=checkGeometryIntersection(this,m,t,i,h,u,d,E,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){const y=l.getX(_),v=l.getX(_+1),M=l.getX(_+2);r=checkGeometryIntersection(this,o,t,i,h,u,d,y,v,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const _=f[g],m=o[_.materialIndex],y=Math.max(_.start,p.start),v=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let M=y,P=v;M<P;M+=3){const E=M,C=M+1,L=M+2;r=checkGeometryIntersection(this,m,t,i,h,u,d,E,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){const y=_,v=_+1,M=_+2;r=checkGeometryIntersection(this,o,t,i,h,u,d,y,v,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function checkIntersection$1(a,t,n,i,r,s,o,l){let c;if(t.side===BackSide?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,t.side===FrontSide,l),c===null)return null;_intersectionPointWorld.copy(l),_intersectionPointWorld.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(_intersectionPointWorld);return h<n.near||h>n.far?null:{distance:h,point:_intersectionPointWorld.clone(),object:a}}function checkGeometryIntersection(a,t,n,i,r,s,o,l,c,h){a.getVertexPosition(l,_vA$1),a.getVertexPosition(c,_vB$1),a.getVertexPosition(h,_vC$1);const u=checkIntersection$1(a,t,n,i,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){r&&(_uvA$1.fromBufferAttribute(r,l),_uvB$1.fromBufferAttribute(r,c),_uvC$1.fromBufferAttribute(r,h),u.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),s&&(_uvA$1.fromBufferAttribute(s,l),_uvB$1.fromBufferAttribute(s,c),_uvC$1.fromBufferAttribute(s,h),u.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),o&&(_normalA.fromBufferAttribute(o,l),_normalB.fromBufferAttribute(o,c),_normalC.fromBufferAttribute(o,h),u.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:l,b:c,c:h,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,d.normal),u.face=d}return u}class BoxGeometry extends BufferGeometry{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],h=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,t,o,s,0),g("z","y","x",1,-1,i,n,-t,o,s,1),g("x","z","y",1,1,t,i,n,r,o,2),g("x","z","y",1,-1,t,i,-n,r,o,3),g("x","y","z",1,-1,t,n,i,r,s,4),g("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(h,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(d,2));function g(x,_,m,y,v,M,P,E,C,L,A){const S=M/C,I=P/L,z=M/2,N=P/2,k=E/2,W=C+1,G=L+1;let Z=0,H=0;const ue=new Vector3;for(let _e=0;_e<G;_e++){const fe=_e*I-N;for(let Ue=0;Ue<W;Ue++){const Ve=Ue*S-z;ue[x]=Ve*y,ue[_]=fe*v,ue[m]=k,h.push(ue.x,ue.y,ue.z),ue[x]=0,ue[_]=0,ue[m]=E>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(Ue/C),d.push(1-_e/L),Z+=1}}for(let _e=0;_e<L;_e++)for(let fe=0;fe<C;fe++){const Ue=f+fe+W*_e,Ve=f+fe+W*(_e+1),$=f+(fe+1)+W*(_e+1),ee=f+(fe+1)+W*_e;c.push(Ue,Ve,ee),c.push(Ve,$,ee),H+=6}l.addGroup(p,H,A),p+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new BoxGeometry(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cloneUniforms(a){const t={};for(const n in a){t[n]={};for(const i in a[n]){const r=a[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function mergeUniforms(a){const t={};for(let n=0;n<a.length;n++){const i=cloneUniforms(a[n]);for(const r in i)t[r]=i[r]}return t}function cloneUniformsGroups(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function getUnlitUniformColorSpace(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cloneUniforms(t.uniforms),this.uniformsGroups=cloneUniformsGroups(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=RAD2DEG*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-t/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_v3$1.x,_v3$1.y).multiplyScalar(-t/_v3$1.z)}getViewSize(t,n){return this.getViewBounds(t,_minTarget,_maxTarget),n.subVectors(_maxTarget,_minTarget)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/h,r*=o.width/c,i*=o.height/h}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,t,n);r.layers=this.layers,this.add(r);const s=new PerspectiveCamera(fov,aspect,t,n);s.layers=this.layers,this.add(s);const o=new PerspectiveCamera(fov,aspect,t,n);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,t,n);l.layers=this.layers,this.add(l);const c=new PerspectiveCamera(fov,aspect,t,n);c.layers=this.layers,this.add(c);const h=new PerspectiveCamera(fov,aspect,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,l,c]=n;for(const h of n)this.remove(h);if(t===WebGLCoordinateSystem)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===WebGPUCoordinateSystem)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,h,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,l),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(t,n,i,r,s,o,l,c,h,u){t=t!==void 0?t:[],n=n!==void 0?n:CubeReflectionMapping,super(t,n,i,r,s,o,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:LinearFilter}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=n;const o=new Mesh(r,s),l=n.minFilter;return n.minFilter===LinearMipmapLinearFilter&&(n.minFilter=LinearFilter),new CubeCamera(1,10,this).update(t,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(t=new Vector3(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=_vector1.subVectors(i,n).cross(_vector2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||_normalMatrix.getNormalMatrix(t),r=this.coplanarPoint(_vector1).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(t=new Plane,n=new Plane,i=new Plane,r=new Plane,s=new Plane,o=new Plane){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const l=this.planes;return l[0].copy(t),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=WebGLCoordinateSystem){const i=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],x=r[10],_=r[11],m=r[12],y=r[13],v=r[14],M=r[15];if(i[0].setComponents(c-s,f-h,_-p,M-m).normalize(),i[1].setComponents(c+s,f+h,_+p,M+m).normalize(),i[2].setComponents(c+o,f+u,_+g,M+y).normalize(),i[3].setComponents(c-o,f-u,_-g,M-y).normalize(),i[4].setComponents(c-l,f-d,_-x,M-v).normalize(),n===WebGLCoordinateSystem)i[5].setComponents(c+l,f+d,_+x,M+v).normalize();else if(n===WebGPUCoordinateSystem)i[5].setComponents(l,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$5.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$5.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(t){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(t.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_vector$7.x=r.normal.x>0?t.max.x:t.min.x,_vector$7.y=r.normal.y>0?t.max.y:t.min.y,_vector$7.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let a=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=a.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=a.requestAnimationFrame(r),t=!0)},stop:function(){a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){a=s}}}function WebGLAttributes(a){const t=new WeakMap;function n(l,c){const h=l.array,u=l.usage,d=h.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=a.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?p=a.HALF_FLOAT:p=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=a.SHORT;else if(h instanceof Uint32Array)p=a.UNSIGNED_INT;else if(h instanceof Int32Array)p=a.INT;else if(h instanceof Int8Array)p=a.BYTE;else if(h instanceof Uint8Array)p=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,c,h){const u=c.array,d=c._updateRange,f=c.updateRanges;if(a.bindBuffer(h,l),d.count===-1&&f.length===0&&a.bufferSubData(h,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const x=f[p];a.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(a.bufferSubData(h,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(a.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);if(h===void 0)t.set(l,n(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,c),h.version=l.version}}return{get:r,remove:s,update:o}}class PlaneGeometry extends BufferGeometry{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,l=Math.floor(i),c=Math.floor(r),h=l+1,u=c+1,d=t/l,f=n/c,p=[],g=[],x=[],_=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<h;v++){const M=v*d-s;g.push(M,-y,0),x.push(0,0,1),_.push(v/l),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<l;y++){const v=y+h*m,M=y+h*(m+1),P=y+1+h*(m+1),E=y+1+h*m;p.push(v,M,E),p.push(M,P,E)}this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute(x,3)),this.setAttribute("uv",new Float32BufferAttribute(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new PlaneGeometry(t.width,t.height,t.widthSegments,t.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(a,t,n,i,r,s,o){const l=new Color(0);let c=s===!0?0:1,h,u,d=null,f=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:t).get(v)),v}function x(y){let v=!1;const M=g(y);M===null?m(l,c):M&&M.isColor&&(m(M,1),v=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(a.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(y,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_e1$1.copy(v.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),u.material.toneMapped=ColorManagement.getTransfer(M.colorSpace)!==SRGBTransfer,(d!==M||f!==M.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=a.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=ColorManagement.getTransfer(M.colorSpace)!==SRGBTransfer,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function m(y,v){y.getRGB(_rgb,getUnlitUniformColorSpace(a)),i.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(y,v=1){l.set(y),c=v,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(l,c)},render:x,addToRenderList:_}}function WebGLBindingStates(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function l(S,I,z,N,k){let W=!1;const G=d(N,z,I);s!==G&&(s=G,h(s.object)),W=p(S,N,z,k),W&&g(S,N,z,k),k!==null&&t.update(k,a.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(S,I,z,N),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return a.createVertexArray()}function h(S){return a.bindVertexArray(S)}function u(S){return a.deleteVertexArray(S)}function d(S,I,z){const N=z.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let W=k[I.id];W===void 0&&(W={},k[I.id]=W);let G=W[N];return G===void 0&&(G=f(c()),W[N]=G),G}function f(S){const I=[],z=[],N=[];for(let k=0;k<n;k++)I[k]=0,z[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,I,z,N){const k=s.attributes,W=I.attributes;let G=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){const _e=k[H];let fe=W[H];if(fe===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),_e===void 0||_e.attribute!==fe||fe&&_e.data!==fe.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(S,I,z,N){const k={},W=I.attributes;let G=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){let _e=W[H];_e===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));const fe={};fe.attribute=_e,_e&&_e.data&&(fe.data=_e.data),k[H]=fe,G++}s.attributes=k,s.attributesNum=G,s.index=N}function x(){const S=s.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function _(S){m(S,0)}function m(S,I){const z=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;z[S]=1,N[S]===0&&(a.enableVertexAttribArray(S),N[S]=1),k[S]!==I&&(a.vertexAttribDivisor(S,I),k[S]=I)}function y(){const S=s.newAttributes,I=s.enabledAttributes;for(let z=0,N=I.length;z<N;z++)I[z]!==S[z]&&(a.disableVertexAttribArray(z),I[z]=0)}function v(S,I,z,N,k,W,G){G===!0?a.vertexAttribIPointer(S,I,z,k,W):a.vertexAttribPointer(S,I,z,N,k,W)}function M(S,I,z,N){x();const k=N.attributes,W=z.getAttributes(),G=I.defaultAttributeValues;for(const Z in W){const H=W[Z];if(H.location>=0){let ue=k[Z];if(ue===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const _e=ue.normalized,fe=ue.itemSize,Ue=t.get(ue);if(Ue===void 0)continue;const Ve=Ue.buffer,$=Ue.type,ee=Ue.bytesPerElement,me=$===a.INT||$===a.UNSIGNED_INT||ue.gpuType===IntType;if(ue.isInterleavedBufferAttribute){const oe=ue.data,we=oe.stride,De=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<H.locationSize;Ce++)m(H.location+Ce,oe.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<H.locationSize;Ce++)_(H.location+Ce);a.bindBuffer(a.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<H.locationSize;Ce++)v(H.location+Ce,fe/H.locationSize,$,_e,we*ee,(De+fe/H.locationSize*Ce)*ee,me)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<H.locationSize;oe++)_(H.location+oe);a.bindBuffer(a.ARRAY_BUFFER,Ve);for(let oe=0;oe<H.locationSize;oe++)v(H.location+oe,fe/H.locationSize,$,_e,fe*ee,fe/H.locationSize*oe*ee,me)}}else if(G!==void 0){const _e=G[Z];if(_e!==void 0)switch(_e.length){case 2:a.vertexAttrib2fv(H.location,_e);break;case 3:a.vertexAttrib3fv(H.location,_e);break;case 4:a.vertexAttrib4fv(H.location,_e);break;default:a.vertexAttrib1fv(H.location,_e)}}}}y()}function P(){L();for(const S in i){const I=i[S];for(const z in I){const N=I[z];for(const k in N)u(N[k].object),delete N[k];delete I[z]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const z in I){const N=I[z];for(const k in N)u(N[k].object),delete N[k];delete I[z]}delete i[S.id]}function C(S){for(const I in i){const z=i[I];if(z[S.id]===void 0)continue;const N=z[S.id];for(const k in N)u(N[k].object),delete N[k];delete z[S.id]}}function L(){A(),o=!0,s!==r&&(s=r,h(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:L,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:_,disableUnusedAttributes:y}}function WebGLBufferRenderer(a,t,n){let i;function r(h){i=h}function s(h,u){a.drawArrays(i,h,u),n.update(u,i,1)}function o(h,u,d){d!==0&&(a.drawArraysInstanced(i,h,u,d),n.update(u,i,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function c(h,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)o(h[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<f.length;x++)n.update(g,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function WebGLCapabilities(a,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");r=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==RGBAFormat&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(E){const C=E===HalfFloatType&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==UnsignedByteType&&i.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==FloatType&&!C)}function c(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=n.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,P=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:M,maxSamples:P}}function WebGLClipping(a){const t=this;let n=null,i=0,r=!1,s=!1;const o=new Plane,l=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,_=d.clipShadows,m=a.get(d);if(!r||g===null||g.length===0||s&&!_)s?u(null):h();else{const y=s?0:i,v=y*4;let M=m.clippingState||null;c.value=M,M=u(g,f,v,p);for(let P=0;P!==v;++P)M[P]=n[P];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let _=null;if(x!==0){if(_=c.value,g!==!0||_===null){const m=p+x*4,y=f.matrixWorldInverse;l.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,M=p;v!==x;++v,M+=4)o.copy(d[v]).applyMatrix4(y,l),o.normal.toArray(_,M),_[M+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}function WebGLCubeMaps(a){let t=new WeakMap;function n(o,l){return l===EquirectangularReflectionMapping?o.mapping=CubeReflectionMapping:l===EquirectangularRefractionMapping&&(o.mapping=CubeRefractionMapping),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new WebGLCubeRenderTarget(c.height);return h.fromEquirectangularTexture(a,o),t.set(o,h),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class OrthographicCamera extends Camera{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)];class PMREMGenerator{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,t.scissorTest=!1,_setViewport(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===CubeReflectionMapping||t.mapping===CubeRefractionMapping?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,t,n)}return r}_compileMaterial(t){const n=new Mesh(this._lodPlanes[0],t);this._renderer.compile(n,_flatCamera)}_sceneToCubeUV(t,n,i,r){const l=new PerspectiveCamera(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const p=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),g=new Mesh(new BoxGeometry,p);let x=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,x=!0):(p.color.copy(_clearColor),x=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(l.up.set(0,c[m],0),l.lookAt(h[m],0,0)):y===1?(l.up.set(0,0,c[m]),l.lookAt(0,h[m],0)):(l.up.set(0,c[m],0),l.lookAt(0,0,h[m]));const v=this._cubeSize;_setViewport(r,y*v,m>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===CubeReflectionMapping||t.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mesh(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const c=this._cubeSize;_setViewport(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,_flatCamera)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=_axisDirections[(r-s-1)%_axisDirections.length];this._blur(t,s-1,s,o,l)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,l){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Mesh(this._lodPlanes[r],h),f=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*MAX_SAMPLES-1),x=s/g,_=isFinite(s)?1+Math.floor(u*x):MAX_SAMPLES;_>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${MAX_SAMPLES}`);const m=[];let y=0;for(let C=0;C<MAX_SAMPLES;++C){const L=C/x,A=Math.exp(-L*L/2);m.push(A),C===0?y+=A:C<_&&(y+=2*A)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const M=this._sizeLods[r],P=3*M*(r>v-LOD_MIN?r-v+LOD_MIN:0),E=4*(this._cubeSize-M);_setViewport(n,P,E,3*M,2*M),c.setRenderTarget(n),c.render(d,_flatCamera)}}function _createPlanes(a){const t=[],n=[],i=[];let r=a;const s=a-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);n.push(l);let c=1/l;o>a-LOD_MIN?c=EXTRA_LOD_SIGMA[o-a+LOD_MIN-1]:o===0&&(c=0),i.push(c);const h=1/(l-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,_=2,m=1,y=new Float32Array(x*g*p),v=new Float32Array(_*g*p),M=new Float32Array(m*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,L=E>2?0:-1,A=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];y.set(A,x*g*E),v.set(f,_*g*E);const S=[E,E,E,E,E,E];M.set(S,m*g*E)}const P=new BufferGeometry;P.setAttribute("position",new BufferAttribute(y,x)),P.setAttribute("uv",new BufferAttribute(v,_)),P.setAttribute("faceIndex",new BufferAttribute(M,m)),t.push(P),r>LOD_MIN&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function _createRenderTarget(a,t,n){const i=new WebGLRenderTarget(a,t,n);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(a,t,n,i,r){a.viewport.set(t,n,i,r),a.scissor.set(t,n,i,r)}function _getBlurShader(a,t,n){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(a){let t=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,h=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,u=c===CubeReflectionMapping||c===CubeRefractionMapping;if(h||u){let d=t.get(l);const f=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return n===null&&(n=new PMREMGenerator(a)),d=h?n.fromEquirectangular(l,d):n.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const p=l.image;return h&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new PMREMGenerator(a)),d=h?n.fromEquirectangular(l):n.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const h=6;for(let u=0;u<h;u++)l[u]!==void 0&&c++;return c===h}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function WebGLExtensions(a){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&warnOnce("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(a,t,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let _=0,m=x.length;_<m;_++)t.remove(x[_])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],a.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let _=0,m=x.length;_<m;_++)t.update(x[_],a.ARRAY_BUFFER)}}function h(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let v=0,M=y.length;v<M;v+=3){const P=y[v+0],E=y[v+1],C=y[v+2];f.push(P,E,E,C,C,P)}}else if(g!==void 0){const y=g.array;x=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const P=v+0,E=v+1,C=v+2;f.push(P,E,E,C,C,P)}}else return;const _=new(arrayNeedsUint32(f)?Uint32BufferAttribute:Uint16BufferAttribute)(f,1);_.version=x;const m=s.get(d);m&&t.remove(m),s.set(d,_)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&h(d)}else h(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(a,t,n){let i;function r(f){i=f}let s,o;function l(f){s=f.type,o=f.bytesPerElement}function c(f,p){a.drawElements(i,p,s,f*o),n.update(p,i,1)}function h(f,p,g){g!==0&&(a.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];n.update(_,i,1)}function d(f,p,g,x){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)h(f[m]/o,p[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y];for(let y=0;y<x.length;y++)n.update(m,i,x[y])}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function WebGLInfo(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(n.calls++,o){case a.TRIANGLES:n.triangles+=l*(s/3);break;case a.LINES:n.lines+=l*(s/2);break;case a.LINE_STRIP:n.lines+=l*(s-1);break;case a.LINE_LOOP:n.lines+=l*s;break;case a.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WebGLMorphtargets(a,t,n){const i=new WeakMap,r=new Vector4;function s(o,l,c){const h=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(l);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let P=l.attributes.position.count*M,E=1;P>t.maxTextureSize&&(E=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*E*4*d),L=new DataArrayTexture(C,P,E,d);L.type=FloatType,L.needsUpdate=!0;const A=M*4;for(let I=0;I<d;I++){const z=m[I],N=y[I],k=v[I],W=P*E*4*I;for(let G=0;G<z.count;G++){const Z=G*A;g===!0&&(r.fromBufferAttribute(z,G),C[W+Z+0]=r.x,C[W+Z+1]=r.y,C[W+Z+2]=r.z,C[W+Z+3]=0),x===!0&&(r.fromBufferAttribute(N,G),C[W+Z+4]=r.x,C[W+Z+5]=r.y,C[W+Z+6]=r.z,C[W+Z+7]=0),_===!0&&(r.fromBufferAttribute(k,G),C[W+Z+8]=r.x,C[W+Z+9]=r.y,C[W+Z+10]=r.z,C[W+Z+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Vector2(P,E)},i.set(l,f),l.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",o.morphTexture,n);else{let g=0;for(let _=0;_<h.length;_++)g+=h[_];const x=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(a,"morphTargetBaseInfluence",x),c.getUniforms().setValue(a,"morphTargetInfluences",h)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function WebGLObjects(a,t,n,i){let r=new WeakMap;function s(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,a.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:s,dispose:o}}class DepthTexture extends Texture{constructor(t,n,i,r,s,o,l,c,h,u=DepthFormat){if(u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===DepthFormat&&(i=UnsignedIntType),i===void 0&&u===DepthStencilFormat&&(i=UnsignedInt248Type),super(null,r,s,o,l,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=l!==void 0?l:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(a,t,n){const i=a[0];if(i<=0||i>0)return a;const r=t*n;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),t!==0){i.toArray(s,0);for(let o=1,l=0;o!==t;++o)l+=n,a[o].toArray(s,l)}return s}function arraysEqual(a,t){if(a.length!==t.length)return!1;for(let n=0,i=a.length;n<i;n++)if(a[n]!==t[n])return!1;return!0}function copyArray(a,t){for(let n=0,i=t.length;n<i;n++)a[n]=t[n]}function allocTexUnits(a,t){let n=arrayCacheI32[t];n===void 0&&(n=new Int32Array(t),arrayCacheI32[t]=n);for(let i=0;i!==t;++i)n[i]=a.allocateTextureUnit();return n}function setValueV1f(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function setValueV2f(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;a.uniform2fv(this.addr,t),copyArray(n,t)}}function setValueV3f(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(arraysEqual(n,t))return;a.uniform3fv(this.addr,t),copyArray(n,t)}}function setValueV4f(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;a.uniform4fv(this.addr,t),copyArray(n,t)}}function setValueM2(a,t){const n=this.cache,i=t.elements;if(i===void 0){if(arraysEqual(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,i))return;mat2array.set(i),a.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(n,i)}}function setValueM3(a,t){const n=this.cache,i=t.elements;if(i===void 0){if(arraysEqual(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,i))return;mat3array.set(i),a.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(n,i)}}function setValueM4(a,t){const n=this.cache,i=t.elements;if(i===void 0){if(arraysEqual(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),copyArray(n,t)}else{if(arraysEqual(n,i))return;mat4array.set(i),a.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(n,i)}}function setValueV1i(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function setValueV2i(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;a.uniform2iv(this.addr,t),copyArray(n,t)}}function setValueV3i(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(arraysEqual(n,t))return;a.uniform3iv(this.addr,t),copyArray(n,t)}}function setValueV4i(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;a.uniform4iv(this.addr,t),copyArray(n,t)}}function setValueV1ui(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function setValueV2ui(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(arraysEqual(n,t))return;a.uniform2uiv(this.addr,t),copyArray(n,t)}}function setValueV3ui(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(arraysEqual(n,t))return;a.uniform3uiv(this.addr,t),copyArray(n,t)}}function setValueV4ui(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(arraysEqual(n,t))return;a.uniform4uiv(this.addr,t),copyArray(n,t)}}function setValueT1(a,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r);let s;this.type===a.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,s=emptyShadowTexture):s=emptyTexture,n.setTexture2D(t||s,r)}function setValueT3D1(a,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||empty3dTexture,r)}function setValueT6(a,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||emptyCubeTexture,r)}function setValueT2DArray1(a,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||emptyArrayTexture,r)}function getSingularSetter(a){switch(a){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(a,t){a.uniform1fv(this.addr,t)}function setValueV2fArray(a,t){const n=flatten(t,this.size,2);a.uniform2fv(this.addr,n)}function setValueV3fArray(a,t){const n=flatten(t,this.size,3);a.uniform3fv(this.addr,n)}function setValueV4fArray(a,t){const n=flatten(t,this.size,4);a.uniform4fv(this.addr,n)}function setValueM2Array(a,t){const n=flatten(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function setValueM3Array(a,t){const n=flatten(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function setValueM4Array(a,t){const n=flatten(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function setValueV1iArray(a,t){a.uniform1iv(this.addr,t)}function setValueV2iArray(a,t){a.uniform2iv(this.addr,t)}function setValueV3iArray(a,t){a.uniform3iv(this.addr,t)}function setValueV4iArray(a,t){a.uniform4iv(this.addr,t)}function setValueV1uiArray(a,t){a.uniform1uiv(this.addr,t)}function setValueV2uiArray(a,t){a.uniform2uiv(this.addr,t)}function setValueV3uiArray(a,t){a.uniform3uiv(this.addr,t)}function setValueV4uiArray(a,t){a.uniform4uiv(this.addr,t)}function setValueT1Array(a,t,n){const i=this.cache,r=t.length,s=allocTexUnits(n,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||emptyTexture,s[o])}function setValueT3DArray(a,t,n){const i=this.cache,r=t.length,s=allocTexUnits(n,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||empty3dTexture,s[o])}function setValueT6Array(a,t,n){const i=this.cache,r=t.length,s=allocTexUnits(n,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||emptyCubeTexture,s[o])}function setValueT2DArrayArray(a,t,n){const i=this.cache,r=t.length,s=allocTexUnits(n,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||emptyArrayTexture,s[o])}function getPureArraySetter(a){switch(a){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=getSingularSetter(n.type)}}class PureArrayUniform{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=getPureArraySetter(n.type)}}class StructuredUniform{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(t,n[l.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(a,t){a.seq.push(t),a.map[t.id]=t}function parseUniform(a,t,n){const i=a.name,r=i.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(i),o=RePathPart.lastIndex;let l=s[1];const c=s[2]==="]",h=s[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===r){addUniform(n,h===void 0?new SingleUniform(l,a,t):new PureArrayUniform(l,a,t));break}else{let d=n.map[l];d===void 0&&(d=new StructuredUniform(l),addUniform(n,d)),n=d}}}class WebGLUniforms{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);parseUniform(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function WebGLShader(a,t,n){const i=a.createShader(t);return a.shaderSource(i,n),a.compileShader(i),i}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(a,t){const n=a.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===t?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}function getEncodingComponents(a){const t=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),n=ColorManagement.getPrimaries(a);let i;switch(t===n?i="":t===P3Primaries&&n===Rec709Primaries?i="LinearDisplayP3ToLinearSRGB":t===Rec709Primaries&&n===P3Primaries&&(i="LinearSRGBToLinearDisplayP3"),a){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[i,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function getShaderErrors(a,t,n){const i=a.getShaderParameter(t,a.COMPILE_STATUS),r=a.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+handleSource(a.getShaderSource(t),o)}else return r}function getTexelEncodingFunction(a,t){const n=getEncodingComponents(t);return`vec4 ${a}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function getToneMappingFunction(a,t){let n;switch(t){case LinearToneMapping:n="Linear";break;case ReinhardToneMapping:n="Reinhard";break;case CineonToneMapping:n="OptimizedCineon";break;case ACESFilmicToneMapping:n="ACESFilmic";break;case AgXToneMapping:n="AgX";break;case NeutralToneMapping:n="Neutral";break;case CustomToneMapping:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function generateVertexExtensions(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(a){const t=[];for(const n in a){const i=a[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function fetchAttributeLocations(a,t){const n={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=a.getActiveAttrib(t,r),o=s.name;let l=1;s.type===a.FLOAT_MAT2&&(l=2),s.type===a.FLOAT_MAT3&&(l=3),s.type===a.FLOAT_MAT4&&(l=4),n[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:l}}return n}function filterEmptyLine(a){return a!==""}function replaceLightNums(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function replaceClippingPlaneNums(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(a){return a.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(a,t){let n=ShaderChunk[t];if(n===void 0){const i=shaderChunkMap.get(t);if(i!==void 0)n=ShaderChunk[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return resolveIncludes(n)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(a){return a.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(a,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function generateShadowMapTypeDefine(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===PCFShadowMap?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===PCFSoftShadowMap?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===VSMShadowMap&&(t="SHADOWMAP_TYPE_VSM"),t}function generateEnvMapTypeDefine(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:t="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:t="ENVMAP_TYPE_CUBE_UV";break}return t}function generateEnvMapModeDefine(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case CubeRefractionMapping:t="ENVMAP_MODE_REFRACTION";break}return t}function generateEnvMapBlendingDefine(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case MultiplyOperation:t="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:t="ENVMAP_BLENDING_MIX";break;case AddOperation:t="ENVMAP_BLENDING_ADD";break}return t}function generateCubeUVSize(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WebGLProgram(a,t,n,i){const r=a.getContext(),s=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=generateShadowMapTypeDefine(n),h=generateEnvMapTypeDefine(n),u=generateEnvMapModeDefine(n),d=generateEnvMapBlendingDefine(n),f=generateCubeUVSize(n),p=generateVertexExtensions(n),g=generateDefines(s),x=r.createProgram();let _,m,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(filterEmptyLine).join(`
`),m.length>0&&(m+=`
`)):(_=[generatePrecision(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),m=[generatePrecision(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",n.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",n.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),o=resolveIncludes(o),o=replaceLightNums(o,n),o=replaceClippingPlaneNums(o,n),l=resolveIncludes(l),l=replaceLightNums(l,n),l=replaceClippingPlaneNums(l,n),o=unrollLoops(o),l=unrollLoops(l),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",n.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+_+o,M=y+m+l,P=WebGLShader(r,r.VERTEX_SHADER,v),E=WebGLShader(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(a.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(P).trim(),k=r.getShaderInfoLog(E).trim();let W=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,x,P,E);else{const Z=getShaderErrors(r,P,"vertex"),H=getShaderErrors(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Z+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||k==="")&&(G=!1);G&&(I.diagnostics={runnable:W,programLog:z,vertexShader:{log:N,prefix:_},fragmentShader:{log:k,prefix:m}})}r.deleteShader(P),r.deleteShader(E),L=new WebGLUniforms(r,x),A=fetchAttributeLocations(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,COMPLETION_STATUS_KHR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=programIdCount++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new WebGLShaderStage(t),n.set(t,i)),i}}class WebGLShaderStage{constructor(t){this.id=_id$1++,this.code=t,this.usedTimes=0}}function WebGLPrograms(a,t,n,i,r,s,o){const l=new Layers,c=new WebGLShaderCache,h=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return h.add(A),A===0?"uv":`uv${A}`}function _(A,S,I,z,N){const k=z.fog,W=N.geometry,G=A.isMeshStandardMaterial?z.environment:null,Z=(A.isMeshStandardMaterial?n:t).get(A.envMap||G),H=Z&&Z.mapping===CubeUVReflectionMapping?Z.image.height:null,ue=g[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=_e!==void 0?_e.length:0;let Ue=0;W.morphAttributes.position!==void 0&&(Ue=1),W.morphAttributes.normal!==void 0&&(Ue=2),W.morphAttributes.color!==void 0&&(Ue=3);let Ve,$,ee,me;if(ue){const ze=ShaderLib[ue];Ve=ze.vertexShader,$=ze.fragmentShader}else Ve=A.vertexShader,$=A.fragmentShader,c.update(A),ee=c.getVertexShaderID(A),me=c.getFragmentShaderID(A);const oe=a.getRenderTarget(),we=N.isInstancedMesh===!0,De=N.isBatchedMesh===!0,Ce=!!A.map,Oe=!!A.matcap,w=!!Z,ne=!!A.aoMap,Q=!!A.lightMap,le=!!A.bumpMap,X=!!A.normalMap,be=!!A.displacementMap,ce=!!A.emissiveMap,ge=!!A.metalnessMap,R=!!A.roughnessMap,b=A.anisotropy>0,O=A.clearcoat>0,j=A.dispersion>0,J=A.iridescence>0,K=A.sheen>0,Se=A.transmission>0,ae=b&&!!A.anisotropyMap,pe=O&&!!A.clearcoatMap,Ie=O&&!!A.clearcoatNormalMap,te=O&&!!A.clearcoatRoughnessMap,de=J&&!!A.iridescenceMap,Fe=J&&!!A.iridescenceThicknessMap,Le=K&&!!A.sheenColorMap,xe=K&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,Be=!!A.specularColorMap,We=!!A.specularIntensityMap,D=Se&&!!A.transmissionMap,ie=Se&&!!A.thicknessMap,q=!!A.gradientMap,Y=!!A.alphaMap,se=A.alphaTest>0,Te=!!A.alphaHash,Ne=!!A.extensions;let qe=NoToneMapping;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(qe=a.toneMapping);const Ze={shaderID:ue,shaderType:A.type,shaderName:A.name,vertexShader:Ve,fragmentShader:$,defines:A.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:De,batchingColor:De&&N._colorsTexture!==null,instancing:we,instancingColor:we&&N.instanceColor!==null,instancingMorph:we&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?a.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ce,matcap:Oe,envMap:w,envMapMode:w&&Z.mapping,envMapCubeUVHeight:H,aoMap:ne,lightMap:Q,bumpMap:le,normalMap:X,displacementMap:f&&be,emissiveMap:ce,normalMapObjectSpace:X&&A.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:X&&A.normalMapType===TangentSpaceNormalMap,metalnessMap:ge,roughnessMap:R,anisotropy:b,anisotropyMap:ae,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:te,dispersion:j,iridescence:J,iridescenceMap:de,iridescenceThicknessMap:Fe,sheen:K,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:Pe,specularColorMap:Be,specularIntensityMap:We,transmission:Se,transmissionMap:D,thicknessMap:ie,gradientMap:q,opaque:A.transparent===!1&&A.blending===NormalBlending&&A.alphaToCoverage===!1,alphaMap:Y,alphaTest:se,alphaHash:Te,combine:A.combine,mapUv:Ce&&x(A.map.channel),aoMapUv:ne&&x(A.aoMap.channel),lightMapUv:Q&&x(A.lightMap.channel),bumpMapUv:le&&x(A.bumpMap.channel),normalMapUv:X&&x(A.normalMap.channel),displacementMapUv:be&&x(A.displacementMap.channel),emissiveMapUv:ce&&x(A.emissiveMap.channel),metalnessMapUv:ge&&x(A.metalnessMap.channel),roughnessMapUv:R&&x(A.roughnessMap.channel),anisotropyMapUv:ae&&x(A.anisotropyMap.channel),clearcoatMapUv:pe&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(A.sheenRoughnessMap.channel),specularMapUv:Pe&&x(A.specularMap.channel),specularColorMapUv:Be&&x(A.specularColorMap.channel),specularIntensityMapUv:We&&x(A.specularIntensityMap.channel),transmissionMapUv:D&&x(A.transmissionMap.channel),thicknessMapUv:ie&&x(A.thicknessMap.channel),alphaMapUv:Y&&x(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(X||b),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ce||Y),fog:!!k,useFog:A.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ce&&A.map.isVideoTexture===!0&&ColorManagement.getTransfer(A.map.colorSpace)===SRGBTransfer,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===DoubleSide,flipSided:A.side===BackSide,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ne&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&A.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ze.vertexUv1s=h.has(1),Ze.vertexUv2s=h.has(2),Ze.vertexUv3s=h.has(3),h.clear(),Ze}function m(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)S.push(I),S.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(y(S,A),v(S,A),S.push(a.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function y(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function v(A,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),A.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.skinning&&l.enable(4),S.morphTargets&&l.enable(5),S.morphNormals&&l.enable(6),S.morphColors&&l.enable(7),S.premultipliedAlpha&&l.enable(8),S.shadowMapEnabled&&l.enable(9),S.doubleSided&&l.enable(10),S.flipSided&&l.enable(11),S.useDepthPacking&&l.enable(12),S.dithering&&l.enable(13),S.transmission&&l.enable(14),S.sheen&&l.enable(15),S.opaque&&l.enable(16),S.pointsUvs&&l.enable(17),S.decodeVideoTexture&&l.enable(18),S.alphaToCoverage&&l.enable(19),A.push(l.mask)}function M(A){const S=g[A.type];let I;if(S){const z=ShaderLib[S];I=UniformsUtils.clone(z.uniforms)}else I=A.uniforms;return I}function P(A,S){let I;for(let z=0,N=u.length;z<N;z++){const k=u[z];if(k.cacheKey===S){I=k,++I.usedTimes;break}}return I===void 0&&(I=new WebGLProgram(a,S,A,s),u.push(I)),I}function E(A){if(--A.usedTimes===0){const S=u.indexOf(A);u[S]=u[u.length-1],u.pop(),A.destroy()}}function C(A){c.remove(A)}function L(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:L}}function WebGLProperties(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function painterSortStable(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function reversePainterSortStable(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function WebGLRenderList(){const a=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,x,_){let m=a[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:_},a[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=_),t++,m}function l(d,f,p,g,x,_){const m=o(d,f,p,g,x,_);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function c(d,f,p,g,x,_){const m=o(d,f,p,g,x,_);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function h(d,f){n.length>1&&n.sort(d||painterSortStable),i.length>1&&i.sort(f||reversePainterSortStable),r.length>1&&r.sort(f||reversePainterSortStable)}function u(){for(let d=t,f=a.length;d<f;d++){const p=a[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function WebGLRenderLists(){let a=new WeakMap;function t(i,r){const s=a.get(i);let o;return s===void 0?(o=new WebGLRenderList,a.set(i,[o])):r>=s.length?(o=new WebGLRenderList,s.push(o)):o=s[r],o}function n(){a=new WeakMap}return{get:t,dispose:n}}function UniformsCache(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Vector3,color:new Color};break;case"SpotLight":n={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":n={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return a[t.id]=n,n}}}function ShadowUniformsCache(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function WebGLLights(a){const t=new UniformsCache,n=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Vector3);const r=new Vector3,s=new Matrix4,o=new Matrix4;function l(h){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,x=0,_=0,m=0,y=0,v=0,M=0,P=0,E=0,C=0;h.sort(shadowCastingAndTexturingLightsFirst);for(let A=0,S=h.length;A<S;A++){const I=h[A],z=I.color,N=I.intensity,k=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*N,d+=z.g*N,f+=z.b*N;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],N);C++}else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,H=n.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=G,p++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(z).multiplyScalar(N),G.distance=k,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[x]=G;const Z=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,Z.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[x]=Z.matrix,I.castShadow){const H=n.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=W,M++}x++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(z).multiplyScalar(N),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[_]=G,_++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const Z=I.shadow,H=n.get(I);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(N),G.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[m]=G,m++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(i.rectAreaLTC1=UniformsLib.LTC_HALF_1,i.rectAreaLTC2=UniformsLib.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==_||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==M||L.numSpotMaps!==P||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=_,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=M,L.numSpotMaps=P,L.numLightProbes=C,i.version=nextVersion++)}function c(h,u){let d=0,f=0,p=0,g=0,x=0;const _=u.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){const v=h[m];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),x++}}}return{setup:l,setupView:c,state:i}}function WebGLRenderState(a){const t=new WebGLLights(a),n=[],i=[];function r(u){h.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function WebGLRenderStates(a){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new WebGLRenderState(a),t.set(r,[l])):s>=o.length?(l=new WebGLRenderState(a),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class MeshDepthMaterial extends Material{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(a,t,n){let i=new Frustum;const r=new Vector2,s=new Vector2,o=new Vector4,l=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,h={},u=n.maxTextureSize,d={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},f=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new BufferGeometry;g.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mesh(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let m=this.type;this.render=function(E,C,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;const A=a.getRenderTarget(),S=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),z=a.state;z.setBlending(NoBlending),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=m!==VSMShadowMap&&this.type===VSMShadowMap,k=m===VSMShadowMap&&this.type!==VSMShadowMap;for(let W=0,G=E.length;W<G;W++){const Z=E[W],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ue=H.getFrameExtents();if(r.multiply(ue),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,H.mapSize.y=s.y)),H.map===null||N===!0||k===!0){const fe=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};H.map!==null&&H.map.dispose(),H.map=new WebGLRenderTarget(r.x,r.y,fe),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const _e=H.getViewportCount();for(let fe=0;fe<_e;fe++){const Ue=H.getViewport(fe);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),z.viewport(o),H.updateMatrices(Z,fe),i=H.getFrustum(),M(C,L,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===VSMShadowMap&&y(H,L),H.needsUpdate=!1}m=this.type,_.needsUpdate=!1,a.setRenderTarget(A,S,I)};function y(E,C){const L=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new WebGLRenderTarget(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(C,null,L,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(C,null,L,p,x,null)}function v(E,C,L,A){let S=null;const I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?c:l,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=S.uuid,N=C.uuid;let k=h[z];k===void 0&&(k={},h[z]=k);let W=k[N];W===void 0&&(W=S.clone(),k[N]=W,C.addEventListener("dispose",P)),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,A===VSMShadowMap?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=a.properties.get(S);z.light=L}return S}function M(E,C,L,A,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===VSMShadowMap)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const N=t.update(E),k=E.material;if(Array.isArray(k)){const W=N.groups;for(let G=0,Z=W.length;G<Z;G++){const H=W[G],ue=k[H.materialIndex];if(ue&&ue.visible){const _e=v(E,ue,A,S);E.onBeforeShadow(a,E,C,L,N,_e,H),a.renderBufferDirect(L,null,N,_e,E,H),E.onAfterShadow(a,E,C,L,N,_e,H)}}}else if(k.visible){const W=v(E,k,A,S);E.onBeforeShadow(a,E,C,L,N,W,null),a.renderBufferDirect(L,null,N,W,E,null),E.onAfterShadow(a,E,C,L,N,W,null)}}const z=E.children;for(let N=0,k=z.length;N<k;N++)M(z[N],C,L,A,S)}function P(E){E.target.removeEventListener("dispose",P);for(const L in h){const A=h[L],S=E.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}function WebGLState(a){function t(){let D=!1;const ie=new Vector4;let q=null;const Y=new Vector4(0,0,0,0);return{setMask:function(se){q!==se&&!D&&(a.colorMask(se,se,se,se),q=se)},setLocked:function(se){D=se},setClear:function(se,Te,Ne,qe,Ze){Ze===!0&&(se*=qe,Te*=qe,Ne*=qe),ie.set(se,Te,Ne,qe),Y.equals(ie)===!1&&(a.clearColor(se,Te,Ne,qe),Y.copy(ie))},reset:function(){D=!1,q=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,ie=null,q=null,Y=null;return{setTest:function(se){se?me(a.DEPTH_TEST):oe(a.DEPTH_TEST)},setMask:function(se){ie!==se&&!D&&(a.depthMask(se),ie=se)},setFunc:function(se){if(q!==se){switch(se){case NeverDepth:a.depthFunc(a.NEVER);break;case AlwaysDepth:a.depthFunc(a.ALWAYS);break;case LessDepth:a.depthFunc(a.LESS);break;case LessEqualDepth:a.depthFunc(a.LEQUAL);break;case EqualDepth:a.depthFunc(a.EQUAL);break;case GreaterEqualDepth:a.depthFunc(a.GEQUAL);break;case GreaterDepth:a.depthFunc(a.GREATER);break;case NotEqualDepth:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}q=se}},setLocked:function(se){D=se},setClear:function(se){Y!==se&&(a.clearDepth(se),Y=se)},reset:function(){D=!1,ie=null,q=null,Y=null}}}function i(){let D=!1,ie=null,q=null,Y=null,se=null,Te=null,Ne=null,qe=null,Ze=null;return{setTest:function(ze){D||(ze?me(a.STENCIL_TEST):oe(a.STENCIL_TEST))},setMask:function(ze){ie!==ze&&!D&&(a.stencilMask(ze),ie=ze)},setFunc:function(ze,nt,tt){(q!==ze||Y!==nt||se!==tt)&&(a.stencilFunc(ze,nt,tt),q=ze,Y=nt,se=tt)},setOp:function(ze,nt,tt){(Te!==ze||Ne!==nt||qe!==tt)&&(a.stencilOp(ze,nt,tt),Te=ze,Ne=nt,qe=tt)},setLocked:function(ze){D=ze},setClear:function(ze){Ze!==ze&&(a.clearStencil(ze),Ze=ze)},reset:function(){D=!1,ie=null,q=null,Y=null,se=null,Te=null,Ne=null,qe=null,Ze=null}}}const r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,_=null,m=null,y=null,v=null,M=null,P=null,E=new Color(0,0,0),C=0,L=!1,A=null,S=null,I=null,z=null,N=null;const k=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=G>=2);let H=null,ue={};const _e=a.getParameter(a.SCISSOR_BOX),fe=a.getParameter(a.VIEWPORT),Ue=new Vector4().fromArray(_e),Ve=new Vector4().fromArray(fe);function $(D,ie,q,Y){const se=new Uint8Array(4),Te=a.createTexture();a.bindTexture(D,Te),a.texParameteri(D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(D,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ne=0;Ne<q;Ne++)D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY?a.texImage3D(ie,0,a.RGBA,1,1,Y,0,a.RGBA,a.UNSIGNED_BYTE,se):a.texImage2D(ie+Ne,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,se);return Te}const ee={};ee[a.TEXTURE_2D]=$(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=$(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[a.TEXTURE_2D_ARRAY]=$(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=$(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(a.DEPTH_TEST),s.setFunc(LessEqualDepth),le(!1),X(CullFaceBack),me(a.CULL_FACE),ne(NoBlending);function me(D){h[D]!==!0&&(a.enable(D),h[D]=!0)}function oe(D){h[D]!==!1&&(a.disable(D),h[D]=!1)}function we(D,ie){return u[D]!==ie?(a.bindFramebuffer(D,ie),u[D]=ie,D===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=ie),D===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=ie),!0):!1}function De(D,ie){let q=f,Y=!1;if(D){q=d.get(ie),q===void 0&&(q=[],d.set(ie,q));const se=D.textures;if(q.length!==se.length||q[0]!==a.COLOR_ATTACHMENT0){for(let Te=0,Ne=se.length;Te<Ne;Te++)q[Te]=a.COLOR_ATTACHMENT0+Te;q.length=se.length,Y=!0}}else q[0]!==a.BACK&&(q[0]=a.BACK,Y=!0);Y&&a.drawBuffers(q)}function Ce(D){return p!==D?(a.useProgram(D),p=D,!0):!1}const Oe={[AddEquation]:a.FUNC_ADD,[SubtractEquation]:a.FUNC_SUBTRACT,[ReverseSubtractEquation]:a.FUNC_REVERSE_SUBTRACT};Oe[MinEquation]=a.MIN,Oe[MaxEquation]=a.MAX;const w={[ZeroFactor]:a.ZERO,[OneFactor]:a.ONE,[SrcColorFactor]:a.SRC_COLOR,[SrcAlphaFactor]:a.SRC_ALPHA,[SrcAlphaSaturateFactor]:a.SRC_ALPHA_SATURATE,[DstColorFactor]:a.DST_COLOR,[DstAlphaFactor]:a.DST_ALPHA,[OneMinusSrcColorFactor]:a.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:a.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:a.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:a.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:a.CONSTANT_COLOR,[OneMinusConstantColorFactor]:a.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:a.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:a.ONE_MINUS_CONSTANT_ALPHA};function ne(D,ie,q,Y,se,Te,Ne,qe,Ze,ze){if(D===NoBlending){g===!0&&(oe(a.BLEND),g=!1);return}if(g===!1&&(me(a.BLEND),g=!0),D!==CustomBlending){if(D!==x||ze!==L){if((_!==AddEquation||v!==AddEquation)&&(a.blendEquation(a.FUNC_ADD),_=AddEquation,v=AddEquation),ze)switch(D){case NormalBlending:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:a.blendFunc(a.ONE,a.ONE);break;case SubtractiveBlending:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case MultiplyBlending:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case NormalBlending:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case SubtractiveBlending:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case MultiplyBlending:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,M=null,P=null,E.set(0,0,0),C=0,x=D,L=ze}return}se=se||ie,Te=Te||q,Ne=Ne||Y,(ie!==_||se!==v)&&(a.blendEquationSeparate(Oe[ie],Oe[se]),_=ie,v=se),(q!==m||Y!==y||Te!==M||Ne!==P)&&(a.blendFuncSeparate(w[q],w[Y],w[Te],w[Ne]),m=q,y=Y,M=Te,P=Ne),(qe.equals(E)===!1||Ze!==C)&&(a.blendColor(qe.r,qe.g,qe.b,Ze),E.copy(qe),C=Ze),x=D,L=!1}function Q(D,ie){D.side===DoubleSide?oe(a.CULL_FACE):me(a.CULL_FACE);let q=D.side===BackSide;ie&&(q=!q),le(q),D.blending===NormalBlending&&D.transparent===!1?ne(NoBlending):ne(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Y=D.stencilWrite;o.setTest(Y),Y&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):oe(a.SAMPLE_ALPHA_TO_COVERAGE)}function le(D){A!==D&&(D?a.frontFace(a.CW):a.frontFace(a.CCW),A=D)}function X(D){D!==CullFaceNone?(me(a.CULL_FACE),D!==S&&(D===CullFaceBack?a.cullFace(a.BACK):D===CullFaceFront?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):oe(a.CULL_FACE),S=D}function be(D){D!==I&&(W&&a.lineWidth(D),I=D)}function ce(D,ie,q){D?(me(a.POLYGON_OFFSET_FILL),(z!==ie||N!==q)&&(a.polygonOffset(ie,q),z=ie,N=q)):oe(a.POLYGON_OFFSET_FILL)}function ge(D){D?me(a.SCISSOR_TEST):oe(a.SCISSOR_TEST)}function R(D){D===void 0&&(D=a.TEXTURE0+k-1),H!==D&&(a.activeTexture(D),H=D)}function b(D,ie,q){q===void 0&&(H===null?q=a.TEXTURE0+k-1:q=H);let Y=ue[q];Y===void 0&&(Y={type:void 0,texture:void 0},ue[q]=Y),(Y.type!==D||Y.texture!==ie)&&(H!==q&&(a.activeTexture(q),H=q),a.bindTexture(D,ie||ee[D]),Y.type=D,Y.texture=ie)}function O(){const D=ue[H];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{a.texSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{a.texSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{a.texStorage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{a.texStorage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){Ue.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function xe(D){Ve.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),Ve.copy(D))}function Pe(D,ie){let q=c.get(ie);q===void 0&&(q=new WeakMap,c.set(ie,q));let Y=q.get(D);Y===void 0&&(Y=a.getUniformBlockIndex(ie,D.name),q.set(D,Y))}function Be(D,ie){const Y=c.get(ie).get(D);l.get(ie)!==Y&&(a.uniformBlockBinding(ie,Y,D.__bindingPointIndex),l.set(ie,Y))}function We(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},H=null,ue={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,_=null,m=null,y=null,v=null,M=null,P=null,E=new Color(0,0,0),C=0,L=!1,A=null,S=null,I=null,z=null,N=null,Ue.set(0,0,a.canvas.width,a.canvas.height),Ve.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:oe,bindFramebuffer:we,drawBuffers:De,useProgram:Ce,setBlending:ne,setMaterial:Q,setFlipSided:le,setCullFace:X,setLineWidth:be,setPolygonOffset:ce,setScissorTest:ge,activeTexture:R,bindTexture:b,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:de,texImage3D:Fe,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:Ie,texStorage3D:te,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Le,viewport:xe,reset:We}}function contain(a,t){const n=a.image&&a.image.width?a.image.width/a.image.height:1;return n>t?(a.repeat.x=1,a.repeat.y=n/t,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2):(a.repeat.x=t/n,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0),a}function cover(a,t){const n=a.image&&a.image.width?a.image.width/a.image.height:1;return n>t?(a.repeat.x=t/n,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0):(a.repeat.x=1,a.repeat.y=n/t,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2),a}function fill(a){return a.repeat.x=1,a.repeat.y=1,a.offset.x=0,a.offset.y=0,a}function getByteLength(a,t,n,i){const r=getTextureTypeByteLength(i);switch(n){case AlphaFormat:return a*t;case LuminanceFormat:return a*t;case LuminanceAlphaFormat:return a*t*2;case RedFormat:return a*t/r.components*r.byteLength;case RedIntegerFormat:return a*t/r.components*r.byteLength;case RGFormat:return a*t*2/r.components*r.byteLength;case RGIntegerFormat:return a*t*2/r.components*r.byteLength;case RGBFormat:return a*t*3/r.components*r.byteLength;case RGBAFormat:return a*t*4/r.components*r.byteLength;case RGBAIntegerFormat:return a*t*4/r.components*r.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(a,16)*Math.max(t,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(a,8)*Math.max(t,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(a/4)*Math.ceil(t/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(a/4)*Math.ceil(t/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function getTextureTypeByteLength(a){switch(a){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}const TextureUtils={contain,cover,fill,getByteLength};function WebGLTextures(a,t,n,i,r,s,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vector2,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):createElementNS("canvas")}function x(R,b,O){let j=1;const J=ge(R);if((J.width>O||J.height>O)&&(j=O/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(j*J.width),Se=Math.floor(j*J.height);d===void 0&&(d=g(K,Se));const ae=b?g(K,Se):d;return ae.width=K,ae.height=Se,ae.getContext("2d").drawImage(R,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Se+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function _(R){return R.generateMipmaps&&R.minFilter!==NearestFilter&&R.minFilter!==LinearFilter}function m(R){a.generateMipmap(R)}function y(R,b,O,j,J=!1){if(R!==null){if(a[R]!==void 0)return a[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===a.RED&&(O===a.FLOAT&&(K=a.R32F),O===a.HALF_FLOAT&&(K=a.R16F),O===a.UNSIGNED_BYTE&&(K=a.R8)),b===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(K=a.R8UI),O===a.UNSIGNED_SHORT&&(K=a.R16UI),O===a.UNSIGNED_INT&&(K=a.R32UI),O===a.BYTE&&(K=a.R8I),O===a.SHORT&&(K=a.R16I),O===a.INT&&(K=a.R32I)),b===a.RG&&(O===a.FLOAT&&(K=a.RG32F),O===a.HALF_FLOAT&&(K=a.RG16F),O===a.UNSIGNED_BYTE&&(K=a.RG8)),b===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(K=a.RG8UI),O===a.UNSIGNED_SHORT&&(K=a.RG16UI),O===a.UNSIGNED_INT&&(K=a.RG32UI),O===a.BYTE&&(K=a.RG8I),O===a.SHORT&&(K=a.RG16I),O===a.INT&&(K=a.RG32I)),b===a.RGB&&O===a.UNSIGNED_INT_5_9_9_9_REV&&(K=a.RGB9_E5),b===a.RGBA){const Se=J?LinearTransfer:ColorManagement.getTransfer(j);O===a.FLOAT&&(K=a.RGBA32F),O===a.HALF_FLOAT&&(K=a.RGBA16F),O===a.UNSIGNED_BYTE&&(K=Se===SRGBTransfer?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(K=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(K=a.RGB5_A1)}return(K===a.R16F||K===a.R32F||K===a.RG16F||K===a.RG32F||K===a.RGBA16F||K===a.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(R,b){let O;return R?b===null||b===UnsignedIntType||b===UnsignedInt248Type?O=a.DEPTH24_STENCIL8:b===FloatType?O=a.DEPTH32F_STENCIL8:b===UnsignedShortType&&(O=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===UnsignedIntType||b===UnsignedInt248Type?O=a.DEPTH_COMPONENT24:b===FloatType?O=a.DEPTH_COMPONENT32F:b===UnsignedShortType&&(O=a.DEPTH_COMPONENT16),O}function M(R,b){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==NearestFilter&&R.minFilter!==LinearFilter?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){const b=R.target;b.removeEventListener("dispose",P),C(b),b.isVideoTexture&&u.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),A(b)}function C(R){const b=i.get(R);if(b.__webglInit===void 0)return;const O=R.source,j=f.get(O);if(j){const J=j[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(R),Object.keys(j).length===0&&f.delete(O)}i.remove(R)}function L(R){const b=i.get(R);a.deleteTexture(b.__webglTexture);const O=R.source,j=f.get(O);delete j[b.__cacheKey],o.memory.textures--}function A(R){const b=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let J=0;J<b.__webglFramebuffer[j].length;J++)a.deleteFramebuffer(b.__webglFramebuffer[j][J]);else a.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)a.deleteFramebuffer(b.__webglFramebuffer[j]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=R.textures;for(let j=0,J=O.length;j<J;j++){const K=i.get(O[j]);K.__webglTexture&&(a.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(R)}let S=0;function I(){S=0}function z(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function N(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const O=i.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(O,R,b);return}}n.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+b)}function W(R,b){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Ve(O,R,b);return}n.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+b)}function G(R,b){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Ve(O,R,b);return}n.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+b)}function Z(R,b){const O=i.get(R);if(R.version>0&&O.__version!==R.version){$(O,R,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+b)}const H={[RepeatWrapping]:a.REPEAT,[ClampToEdgeWrapping]:a.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:a.MIRRORED_REPEAT},ue={[NearestFilter]:a.NEAREST,[NearestMipmapNearestFilter]:a.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:a.NEAREST_MIPMAP_LINEAR,[LinearFilter]:a.LINEAR,[LinearMipmapNearestFilter]:a.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:a.LINEAR_MIPMAP_LINEAR},_e={[NeverCompare]:a.NEVER,[AlwaysCompare]:a.ALWAYS,[LessCompare]:a.LESS,[LessEqualCompare]:a.LEQUAL,[EqualCompare]:a.EQUAL,[GreaterEqualCompare]:a.GEQUAL,[GreaterCompare]:a.GREATER,[NotEqualCompare]:a.NOTEQUAL};function fe(R,b){if(b.type===FloatType&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===LinearFilter||b.magFilter===LinearMipmapNearestFilter||b.magFilter===NearestMipmapLinearFilter||b.magFilter===LinearMipmapLinearFilter||b.minFilter===LinearFilter||b.minFilter===LinearMipmapNearestFilter||b.minFilter===NearestMipmapLinearFilter||b.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,H[b.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,H[b.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,H[b.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,ue[b.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===NearestFilter||b.minFilter!==NearestMipmapLinearFilter&&b.minFilter!==LinearMipmapLinearFilter||b.type===FloatType&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");a.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ue(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));const j=b.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const K=N(b);if(K!==R.__cacheKey){J[K]===void 0&&(J[K]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[K].usedTimes++;const Se=J[R.__cacheKey];Se!==void 0&&(J[R.__cacheKey].usedTimes--,Se.usedTimes===0&&L(b)),R.__cacheKey=K,R.__webglTexture=J[K].texture}return O}function Ve(R,b,O){let j=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=a.TEXTURE_3D);const J=Ue(R,b),K=b.source;n.bindTexture(j,R.__webglTexture,a.TEXTURE0+O);const Se=i.get(K);if(K.version!==Se.__version||J===!0){n.activeTexture(a.TEXTURE0+O);const ae=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),pe=b.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(b.colorSpace),Ie=b.colorSpace===NoColorSpace||ae===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let te=x(b.image,!1,r.maxTextureSize);te=ce(b,te);const de=s.convert(b.format,b.colorSpace),Fe=s.convert(b.type);let Le=y(b.internalFormat,de,Fe,b.colorSpace,b.isVideoTexture);fe(j,b);let xe;const Pe=b.mipmaps,Be=b.isVideoTexture!==!0,We=Se.__version===void 0||J===!0,D=K.dataReady,ie=M(b,te);if(b.isDepthTexture)Le=v(b.format===DepthStencilFormat,b.type),We&&(Be?n.texStorage2D(a.TEXTURE_2D,1,Le,te.width,te.height):n.texImage2D(a.TEXTURE_2D,0,Le,te.width,te.height,0,de,Fe,null));else if(b.isDataTexture)if(Pe.length>0){Be&&We&&n.texStorage2D(a.TEXTURE_2D,ie,Le,Pe[0].width,Pe[0].height);for(let q=0,Y=Pe.length;q<Y;q++)xe=Pe[q],Be?D&&n.texSubImage2D(a.TEXTURE_2D,q,0,0,xe.width,xe.height,de,Fe,xe.data):n.texImage2D(a.TEXTURE_2D,q,Le,xe.width,xe.height,0,de,Fe,xe.data);b.generateMipmaps=!1}else Be?(We&&n.texStorage2D(a.TEXTURE_2D,ie,Le,te.width,te.height),D&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,te.width,te.height,de,Fe,te.data)):n.texImage2D(a.TEXTURE_2D,0,Le,te.width,te.height,0,de,Fe,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&We&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ie,Le,Pe[0].width,Pe[0].height,te.depth);for(let q=0,Y=Pe.length;q<Y;q++)if(xe=Pe[q],b.format!==RGBAFormat)if(de!==null)if(Be){if(D)if(b.layerUpdates.size>0){const se=getByteLength(xe.width,xe.height,b.format,b.type);for(const Te of b.layerUpdates){const Ne=xe.data.subarray(Te*se/xe.data.BYTES_PER_ELEMENT,(Te+1)*se/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,q,0,0,Te,xe.width,xe.height,1,de,Ne,0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,te.depth,de,xe.data,0,0)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,q,Le,xe.width,xe.height,te.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,te.depth,de,Fe,xe.data):n.texImage3D(a.TEXTURE_2D_ARRAY,q,Le,xe.width,xe.height,te.depth,0,de,Fe,xe.data)}else{Be&&We&&n.texStorage2D(a.TEXTURE_2D,ie,Le,Pe[0].width,Pe[0].height);for(let q=0,Y=Pe.length;q<Y;q++)xe=Pe[q],b.format!==RGBAFormat?de!==null?Be?D&&n.compressedTexSubImage2D(a.TEXTURE_2D,q,0,0,xe.width,xe.height,de,xe.data):n.compressedTexImage2D(a.TEXTURE_2D,q,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&n.texSubImage2D(a.TEXTURE_2D,q,0,0,xe.width,xe.height,de,Fe,xe.data):n.texImage2D(a.TEXTURE_2D,q,Le,xe.width,xe.height,0,de,Fe,xe.data)}else if(b.isDataArrayTexture)if(Be){if(We&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ie,Le,te.width,te.height,te.depth),D)if(b.layerUpdates.size>0){const q=getByteLength(te.width,te.height,b.format,b.type);for(const Y of b.layerUpdates){const se=te.data.subarray(Y*q/te.data.BYTES_PER_ELEMENT,(Y+1)*q/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,de,Fe,se)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Fe,te.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,de,Fe,te.data);else if(b.isData3DTexture)Be?(We&&n.texStorage3D(a.TEXTURE_3D,ie,Le,te.width,te.height,te.depth),D&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Fe,te.data)):n.texImage3D(a.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,de,Fe,te.data);else if(b.isFramebufferTexture){if(We)if(Be)n.texStorage2D(a.TEXTURE_2D,ie,Le,te.width,te.height);else{let q=te.width,Y=te.height;for(let se=0;se<ie;se++)n.texImage2D(a.TEXTURE_2D,se,Le,q,Y,0,de,Fe,null),q>>=1,Y>>=1}}else if(Pe.length>0){if(Be&&We){const q=ge(Pe[0]);n.texStorage2D(a.TEXTURE_2D,ie,Le,q.width,q.height)}for(let q=0,Y=Pe.length;q<Y;q++)xe=Pe[q],Be?D&&n.texSubImage2D(a.TEXTURE_2D,q,0,0,de,Fe,xe):n.texImage2D(a.TEXTURE_2D,q,Le,de,Fe,xe);b.generateMipmaps=!1}else if(Be){if(We){const q=ge(te);n.texStorage2D(a.TEXTURE_2D,ie,Le,q.width,q.height)}D&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,de,Fe,te)}else n.texImage2D(a.TEXTURE_2D,0,Le,de,Fe,te);_(b)&&m(j),Se.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $(R,b,O){if(b.image.length!==6)return;const j=Ue(R,b),J=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+O);const K=i.get(J);if(J.version!==K.__version||j===!0){n.activeTexture(a.TEXTURE0+O);const Se=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ae=b.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(b.colorSpace),pe=b.colorSpace===NoColorSpace||Se===ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,de=[];for(let Y=0;Y<6;Y++)!Ie&&!te?de[Y]=x(b.image[Y],!0,r.maxCubemapSize):de[Y]=te?b.image[Y].image:b.image[Y],de[Y]=ce(b,de[Y]);const Fe=de[0],Le=s.convert(b.format,b.colorSpace),xe=s.convert(b.type),Pe=y(b.internalFormat,Le,xe,b.colorSpace),Be=b.isVideoTexture!==!0,We=K.__version===void 0||j===!0,D=J.dataReady;let ie=M(b,Fe);fe(a.TEXTURE_CUBE_MAP,b);let q;if(Ie){Be&&We&&n.texStorage2D(a.TEXTURE_CUBE_MAP,ie,Pe,Fe.width,Fe.height);for(let Y=0;Y<6;Y++){q=de[Y].mipmaps;for(let se=0;se<q.length;se++){const Te=q[se];b.format!==RGBAFormat?Le!==null?Be?D&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,Te.width,Te.height,Le,Te.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,Te.width,Te.height,Le,xe,Te.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Pe,Te.width,Te.height,0,Le,xe,Te.data)}}}else{if(q=b.mipmaps,Be&&We){q.length>0&&ie++;const Y=ge(de[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,ie,Pe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Be?D&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,de[Y].width,de[Y].height,Le,xe,de[Y].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Pe,de[Y].width,de[Y].height,0,Le,xe,de[Y].data);for(let se=0;se<q.length;se++){const Ne=q[se].image[Y].image;Be?D&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Ne.width,Ne.height,Le,xe,Ne.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Pe,Ne.width,Ne.height,0,Le,xe,Ne.data)}}else{Be?D&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Le,xe,de[Y]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Pe,Le,xe,de[Y]);for(let se=0;se<q.length;se++){const Te=q[se];Be?D&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Le,xe,Te.image[Y]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Pe,Le,xe,Te.image[Y])}}}_(b)&&m(a.TEXTURE_CUBE_MAP),K.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ee(R,b,O,j,J,K){const Se=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),pe=y(O.internalFormat,Se,ae,O.colorSpace);if(!i.get(b).__hasExternalTextures){const te=Math.max(1,b.width>>K),de=Math.max(1,b.height>>K);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?n.texImage3D(J,K,pe,te,de,b.depth,0,Se,ae,null):n.texImage2D(J,K,pe,te,de,0,Se,ae,null)}n.bindFramebuffer(a.FRAMEBUFFER,R),X(b)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,J,i.get(O).__webglTexture,0,le(b)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,J,i.get(O).__webglTexture,K),n.bindFramebuffer(a.FRAMEBUFFER,null)}function me(R,b,O){if(a.bindRenderbuffer(a.RENDERBUFFER,R),b.depthBuffer){const j=b.depthTexture,J=j&&j.isDepthTexture?j.type:null,K=v(b.stencilBuffer,J),Se=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=le(b);X(b)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ae,K,b.width,b.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,ae,K,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,K,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,R)}else{const j=b.textures;for(let J=0;J<j.length;J++){const K=j[J],Se=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),pe=y(K.internalFormat,Se,ae,K.colorSpace),Ie=le(b);O&&X(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,pe,b.width,b.height):X(b)?l.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ie,pe,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,pe,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function oe(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const j=i.get(b.depthTexture).__webglTexture,J=le(b);if(b.depthTexture.format===DepthFormat)X(b)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0);else if(b.depthTexture.format===DepthStencilFormat)X(b)?l.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function we(R){const b=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,R)}else if(O){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=a.createRenderbuffer(),me(b.__webglDepthbuffer[j],R,!1)}else n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=a.createRenderbuffer(),me(b.__webglDepthbuffer,R,!1);n.bindFramebuffer(a.FRAMEBUFFER,null)}function De(R,b,O){const j=i.get(R);b!==void 0&&ee(j.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&we(R)}function Ce(R){const b=R.texture,O=i.get(R),j=i.get(b);R.addEventListener("dispose",E);const J=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=b.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let pe=0;pe<b.mipmaps.length;pe++)O.__webglFramebuffer[ae][pe]=a.createFramebuffer()}else O.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)O.__webglFramebuffer[ae]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Se)for(let ae=0,pe=J.length;ae<pe;ae++){const Ie=i.get(J[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=a.createTexture(),o.memory.textures++)}if(R.samples>0&&X(R)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const pe=J[ae];O.__webglColorRenderbuffer[ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Ie=s.convert(pe.format,pe.colorSpace),te=s.convert(pe.type),de=y(pe.internalFormat,Ie,te,pe.colorSpace,R.isXRRenderTarget===!0),Fe=le(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,de,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),me(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(K){n.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),fe(a.TEXTURE_CUBE_MAP,b);for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)ee(O.__webglFramebuffer[ae][pe],R,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else ee(O.__webglFramebuffer[ae],R,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(b)&&m(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ae=0,pe=J.length;ae<pe;ae++){const Ie=J[ae],te=i.get(Ie);n.bindTexture(a.TEXTURE_2D,te.__webglTexture),fe(a.TEXTURE_2D,Ie),ee(O.__webglFramebuffer,R,Ie,a.COLOR_ATTACHMENT0+ae,a.TEXTURE_2D,0),_(Ie)&&m(a.TEXTURE_2D)}n.unbindTexture()}else{let ae=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ae,j.__webglTexture),fe(ae,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)ee(O.__webglFramebuffer[pe],R,b,a.COLOR_ATTACHMENT0,ae,pe);else ee(O.__webglFramebuffer,R,b,a.COLOR_ATTACHMENT0,ae,0);_(b)&&m(ae),n.unbindTexture()}R.depthBuffer&&we(R)}function Oe(R){const b=R.textures;for(let O=0,j=b.length;O<j;O++){const J=b[O];if(_(J)){const K=R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Se=i.get(J).__webglTexture;n.bindTexture(K,Se),m(K),n.unbindTexture()}}}const w=[],ne=[];function Q(R){if(R.samples>0){if(X(R)===!1){const b=R.textures,O=R.width,j=R.height;let J=a.COLOR_BUFFER_BIT;const K=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=i.get(R),ae=b.length>1;if(ae)for(let pe=0;pe<b.length;pe++)n.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Ie=i.get(b[pe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ie,0)}a.blitFramebuffer(0,0,O,j,0,0,O,j,J,a.NEAREST),c===!0&&(w.length=0,ne.length=0,w.push(a.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(w.push(K),ne.push(K),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ne)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<b.length;pe++){n.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Ie=i.get(b[pe]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,Ie,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function le(R){return Math.min(r.maxSamples,R.samples)}function X(R){const b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ce(R,b){const O=R.colorSpace,j=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==LinearSRGBColorSpace&&O!==NoColorSpace&&(ColorManagement.getTransfer(O)===SRGBTransfer?(j!==RGBAFormat||J!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=De,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=X}function WebGLUtils(a,t){function n(i,r=NoColorSpace){let s;const o=ColorManagement.getTransfer(r);if(i===UnsignedByteType)return a.UNSIGNED_BYTE;if(i===UnsignedShort4444Type)return a.UNSIGNED_SHORT_4_4_4_4;if(i===UnsignedShort5551Type)return a.UNSIGNED_SHORT_5_5_5_1;if(i===UnsignedInt5999Type)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===ByteType)return a.BYTE;if(i===ShortType)return a.SHORT;if(i===UnsignedShortType)return a.UNSIGNED_SHORT;if(i===IntType)return a.INT;if(i===UnsignedIntType)return a.UNSIGNED_INT;if(i===FloatType)return a.FLOAT;if(i===HalfFloatType)return a.HALF_FLOAT;if(i===AlphaFormat)return a.ALPHA;if(i===RGBFormat)return a.RGB;if(i===RGBAFormat)return a.RGBA;if(i===LuminanceFormat)return a.LUMINANCE;if(i===LuminanceAlphaFormat)return a.LUMINANCE_ALPHA;if(i===DepthFormat)return a.DEPTH_COMPONENT;if(i===DepthStencilFormat)return a.DEPTH_STENCIL;if(i===RedFormat)return a.RED;if(i===RedIntegerFormat)return a.RED_INTEGER;if(i===RGFormat)return a.RG;if(i===RGIntegerFormat)return a.RG_INTEGER;if(i===RGBAIntegerFormat)return a.RGBA_INTEGER;if(i===RGB_S3TC_DXT1_Format||i===RGBA_S3TC_DXT1_Format||i===RGBA_S3TC_DXT3_Format||i===RGBA_S3TC_DXT5_Format)if(o===SRGBTransfer)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===RGB_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===RGB_S3TC_DXT1_Format)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===RGB_PVRTC_4BPPV1_Format||i===RGB_PVRTC_2BPPV1_Format||i===RGBA_PVRTC_4BPPV1_Format||i===RGBA_PVRTC_2BPPV1_Format)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===RGB_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===RGB_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===RGBA_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===RGBA_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===RGB_ETC1_Format||i===RGB_ETC2_Format||i===RGBA_ETC2_EAC_Format)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===RGB_ETC1_Format||i===RGB_ETC2_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===RGBA_ETC2_EAC_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===RGBA_ASTC_4x4_Format||i===RGBA_ASTC_5x4_Format||i===RGBA_ASTC_5x5_Format||i===RGBA_ASTC_6x5_Format||i===RGBA_ASTC_6x6_Format||i===RGBA_ASTC_8x5_Format||i===RGBA_ASTC_8x6_Format||i===RGBA_ASTC_8x8_Format||i===RGBA_ASTC_10x5_Format||i===RGBA_ASTC_10x6_Format||i===RGBA_ASTC_10x8_Format||i===RGBA_ASTC_10x10_Format||i===RGBA_ASTC_12x10_Format||i===RGBA_ASTC_12x12_Format)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===RGBA_ASTC_4x4_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===RGBA_ASTC_5x4_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===RGBA_ASTC_5x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===RGBA_ASTC_6x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===RGBA_ASTC_6x6_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===RGBA_ASTC_8x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===RGBA_ASTC_8x6_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===RGBA_ASTC_8x8_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===RGBA_ASTC_10x5_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===RGBA_ASTC_10x6_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===RGBA_ASTC_10x8_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===RGBA_ASTC_10x10_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===RGBA_ASTC_12x10_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===RGBA_ASTC_12x12_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===RGBA_BPTC_Format||i===RGB_BPTC_SIGNED_Format||i===RGB_BPTC_UNSIGNED_Format)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===RGBA_BPTC_Format)return o===SRGBTransfer?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===RGB_BPTC_SIGNED_Format)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===RGB_BPTC_UNSIGNED_Format)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===RED_RGTC1_Format||i===SIGNED_RED_RGTC1_Format||i===RED_GREEN_RGTC2_Format||i===SIGNED_RED_GREEN_RGTC2_Format)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===RGBA_BPTC_Format)return s.COMPRESSED_RED_RGTC1_EXT;if(i===SIGNED_RED_RGTC1_Format)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===RED_GREEN_RGTC2_Format)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===SIGNED_RED_GREEN_RGTC2_Format)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===UnsignedInt248Type?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:n}}class ArrayCamera extends PerspectiveCamera{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const _=n.getJointPose(x,i),m=this._getHandJoint(h,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new Texture,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(t,n){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,h=null,u=null,d=null,f=null,p=null,g=null;const x=new WebXRDepthSensing,_=n.getContextAttributes();let m=null,y=null;const v=[],M=[],P=new Vector2;let E=null;const C=new PerspectiveCamera;C.layers.enable(1),C.viewport=new Vector4;const L=new PerspectiveCamera;L.layers.enable(2),L.viewport=new Vector4;const A=[C,L],S=new ArrayCamera;S.layers.enable(1),S.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=v[$];return ee===void 0&&(ee=new WebXRController,v[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=v[$];return ee===void 0&&(ee=new WebXRController,v[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=v[$];return ee===void 0&&(ee=new WebXRController,v[$]=ee),ee.getHandSpace()};function N($){const ee=M.indexOf($.inputSource);if(ee===-1)return;const me=v[ee];me!==void 0&&(me.update($.inputSource,$.frame,h||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let $=0;$<v.length;$++){const ee=M[$];ee!==null&&(M[$]=null,v[$].disconnect(ee))}I=null,z=null,x.reset(),t.setRenderTarget(m),p=null,f=null,d=null,r=null,y=null,Ve.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new WebGLRenderTarget(p.framebufferWidth,p.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,me=null,oe=null;_.depth&&(oe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=_.stencil?DepthStencilFormat:DepthFormat,me=_.stencil?UnsignedInt248Type:UnsignedIntType);const we={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(we),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new WebGLRenderTarget(f.textureWidth,f.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W($){for(let ee=0;ee<$.removed.length;ee++){const me=$.removed[ee],oe=M.indexOf(me);oe>=0&&(M[oe]=null,v[oe].disconnect(me))}for(let ee=0;ee<$.added.length;ee++){const me=$.added[ee];let oe=M.indexOf(me);if(oe===-1){for(let De=0;De<v.length;De++)if(De>=M.length){M.push(me),oe=De;break}else if(M[De]===null){M[De]=me,oe=De;break}if(oe===-1)break}const we=v[oe];we&&we.connect(me)}}const G=new Vector3,Z=new Vector3;function H($,ee,me){G.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const oe=G.distanceTo(Z),we=ee.projectionMatrix.elements,De=me.projectionMatrix.elements,Ce=we[14]/(we[10]-1),Oe=we[14]/(we[10]+1),w=(we[9]+1)/we[5],ne=(we[9]-1)/we[5],Q=(we[8]-1)/we[0],le=(De[8]+1)/De[0],X=Ce*Q,be=Ce*le,ce=oe/(-Q+le),ge=ce*-Q;ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ge),$.translateZ(ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Ce+ce,b=Oe+ce,O=X-ge,j=be+(oe-ge),J=w*Oe/b*R,K=ne*Oe/b*R;$.projectionMatrix.makePerspective(O,j,J,K,R,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ue($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),S.near=L.near=C.near=$.near,S.far=L.far=C.far=$.far,(I!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far,C.near=I,C.far=z,L.near=I,L.far=z,C.updateProjectionMatrix(),L.updateProjectionMatrix(),$.updateProjectionMatrix());const ee=$.parent,me=S.cameras;ue(S,ee);for(let oe=0;oe<me.length;oe++)ue(me[oe],ee);me.length===2?H(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),_e($,S,ee)};function _e($,ee,me){me===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=RAD2DEG*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let fe=null;function Ue($,ee){if(u=ee.getViewerPose(h||o),g=ee,u!==null){const me=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let oe=!1;me.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let De=0;De<me.length;De++){const Ce=me[De];let Oe=null;if(p!==null)Oe=p.getViewport(Ce);else{const ne=d.getViewSubImage(f,Ce);Oe=ne.viewport,De===0&&(t.setRenderTargetTextures(y,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(y))}let w=A[De];w===void 0&&(w=new PerspectiveCamera,w.layers.enable(De),w.viewport=new Vector4,A[De]=w),w.matrix.fromArray(Ce.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ce.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),De===0&&(S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(w)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=d.getDepthInformation(me[0]);De&&De.isValid&&De.texture&&x.init(t,De,r.renderState)}}for(let me=0;me<v.length;me++){const oe=M[me],we=v[me];oe!==null&&we!==void 0&&we.update(oe,ee,h||o)}fe&&fe($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ve=new WebGLAnimation;Ve.setAnimationLoop(Ue),this.setAnimationLoop=function($){fe=$},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(a,t){function n(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,getUnlitUniformColorSpace(a)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,y,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),d(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,M)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),x(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?c(_,m,y,v):m.isSpriteMaterial?h(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,n(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===BackSide&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,n(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===BackSide&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,n(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,n(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,M=y.envMapRotation;v&&(_.envMap.value=v,_e1.copy(M),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),_.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,y,v){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=v*.5,m.map&&(_.map.value=m.map,n(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===BackSide&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){const y=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WebGLUniformsGroups(a,t,n,i){let r={},s={},o=[];const l=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const M=v.program;i.uniformBlockBinding(y,M)}function h(y,v){let M=r[y.id];M===void 0&&(g(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",_));const P=v.program;i.updateUBOMapping(y,P);const E=t.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){const v=d();y.__bindingPointIndex=v;const M=a.createBuffer(),P=y.__size,E=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,P,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,M),M}function d(){for(let y=0;y<l;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],M=y.uniforms,P=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let E=0,C=M.length;E<C;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let A=0,S=L.length;A<S;A++){const I=L[A];if(p(I,E,A,P)===!0){const z=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let W=0;W<N.length;W++){const G=N[W],Z=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,z+k,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,z,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(y,v,M,P){const E=y.value,C=v+"_"+M;if(P[C]===void 0)return typeof E=="number"||typeof E=="boolean"?P[C]=E:P[C]=E.clone(),!0;{const L=P[C];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return P[C]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(y){const v=y.uniforms;let M=0;const P=16;for(let C=0,L=v.length;C<L;C++){const A=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,I=A.length;S<I;S++){const z=A[S],N=Array.isArray(z.value)?z.value:[z.value];for(let k=0,W=N.length;k<W;k++){const G=N[k],Z=x(G),H=M%P;H!==0&&P-H<Z.boundary&&(M+=P-H),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=Z.storage}}}const E=M%P;return E>0&&(M+=P-E),y.__size=M,y.__cache={},this}function x(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function _(y){const v=y.target;v.removeEventListener("dispose",_);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),a.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const y in r)a.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:h,dispose:m}}class WebGLRenderer{constructor(t={}){const{canvas:n=createCanvasElement(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,_=null;const m=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const v=this;let M=!1,P=0,E=0,C=null,L=-1,A=null;const S=new Vector4,I=new Vector4;let z=null;const N=new Color(0);let k=0,W=n.width,G=n.height,Z=1,H=null,ue=null;const _e=new Vector4(0,0,W,G),fe=new Vector4(0,0,W,G);let Ue=!1;const Ve=new Frustum;let $=!1,ee=!1;const me=new Matrix4,oe=new Vector3,we=new Vector4,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Oe(){return C===null?Z:1}let w=i;function ne(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${REVISION}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Y,!1),n.addEventListener("webglcontextcreationerror",se,!1),w===null){const U="webgl2";if(w=ne(U,T),w===null)throw ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,le,X,be,ce,ge,R,b,O,j,J,K,Se,ae,pe,Ie,te,de,Fe,Le,xe,Pe,Be,We;function D(){Q=new WebGLExtensions(w),Q.init(),Pe=new WebGLUtils(w,Q),le=new WebGLCapabilities(w,Q,t,Pe),X=new WebGLState(w),be=new WebGLInfo(w),ce=new WebGLProperties,ge=new WebGLTextures(w,Q,X,ce,le,Pe,be),R=new WebGLCubeMaps(v),b=new WebGLCubeUVMaps(v),O=new WebGLAttributes(w),Be=new WebGLBindingStates(w,O),j=new WebGLGeometries(w,O,be,Be),J=new WebGLObjects(w,j,O,be),Fe=new WebGLMorphtargets(w,le,ge),Ie=new WebGLClipping(ce),K=new WebGLPrograms(v,R,b,Q,le,Be,Ie),Se=new WebGLMaterials(v,ce),ae=new WebGLRenderLists,pe=new WebGLRenderStates(Q),de=new WebGLBackground(v,R,b,X,J,f,c),te=new WebGLShadowMap(v,J,le),We=new WebGLUniformsGroups(w,be,le,X),Le=new WebGLBufferRenderer(w,Q,be),xe=new WebGLIndexedBufferRenderer(w,Q,be),be.programs=K.programs,v.capabilities=le,v.extensions=Q,v.properties=ce,v.renderLists=ae,v.shadowMap=te,v.state=X,v.info=be}D();const ie=new WebXRManager(v,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(W,G,!1))},this.getSize=function(T){return T.set(W,G)},this.setSize=function(T,U,F=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,G=U,n.width=Math.floor(T*Z),n.height=Math.floor(U*Z),F===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*Z,G*Z).floor()},this.setDrawingBufferSize=function(T,U,F){W=T,G=U,Z=F,n.width=Math.floor(T*F),n.height=Math.floor(U*F),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,U,F,V){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,U,F,V),X.viewport(S.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,U,F,V){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,U,F,V),X.scissor(I.copy(fe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){X.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(T=!0,U=!0,F=!0){let V=0;if(T){let B=!1;if(C!==null){const re=C.texture.format;B=re===RGBAIntegerFormat||re===RGIntegerFormat||re===RedIntegerFormat}if(B){const re=C.texture.type,he=re===UnsignedByteType||re===UnsignedIntType||re===UnsignedShortType||re===UnsignedInt248Type||re===UnsignedShort4444Type||re===UnsignedShort5551Type,ve=de.getClearColor(),ye=de.getClearAlpha(),Ee=ve.r,Re=ve.g,Ae=ve.b;he?(p[0]=Ee,p[1]=Re,p[2]=Ae,p[3]=ye,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=Ee,g[1]=Re,g[2]=Ae,g[3]=ye,w.clearBufferiv(w.COLOR,0,g))}else V|=w.COLOR_BUFFER_BIT}U&&(V|=w.DEPTH_BUFFER_BIT),F&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Y,!1),n.removeEventListener("webglcontextcreationerror",se,!1),ae.dispose(),pe.dispose(),ce.dispose(),R.dispose(),b.dispose(),J.dispose(),Be.dispose(),We.dispose(),K.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",tt),ie.removeEventListener("sessionend",dt),rt.stop()};function q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=be.autoReset,U=te.enabled,F=te.autoUpdate,V=te.needsUpdate,B=te.type;D(),be.autoReset=T,te.enabled=U,te.autoUpdate=F,te.needsUpdate=V,te.type=B}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Te(T){const U=T.target;U.removeEventListener("dispose",Te),Ne(U)}function Ne(T){qe(T),ce.remove(T)}function qe(T){const U=ce.get(T).programs;U!==void 0&&(U.forEach(function(F){K.releaseProgram(F)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,F,V,B,re){U===null&&(U=De);const he=B.isMesh&&B.matrixWorld.determinant()<0,ve=vt(T,U,F,V,B);X.setMaterial(V,he);let ye=F.index,Ee=1;if(V.wireframe===!0){if(ye=j.getWireframeAttribute(F),ye===void 0)return;Ee=2}const Re=F.drawRange,Ae=F.attributes.position;let Ge=Re.start*Ee,$e=(Re.start+Re.count)*Ee;re!==null&&(Ge=Math.max(Ge,re.start*Ee),$e=Math.min($e,(re.start+re.count)*Ee)),ye!==null?(Ge=Math.max(Ge,0),$e=Math.min($e,ye.count)):Ae!=null&&(Ge=Math.max(Ge,0),$e=Math.min($e,Ae.count));const Xe=$e-Ge;if(Xe<0||Xe===1/0)return;Be.setup(B,V,ve,F,ye);let Je,ke=Le;if(ye!==null&&(Je=O.get(ye),ke=xe,ke.setIndex(Je)),B.isMesh)V.wireframe===!0?(X.setLineWidth(V.wireframeLinewidth*Oe()),ke.setMode(w.LINES)):ke.setMode(w.TRIANGLES);else if(B.isLine){let Me=V.linewidth;Me===void 0&&(Me=1),X.setLineWidth(Me*Oe()),B.isLineSegments?ke.setMode(w.LINES):B.isLineLoop?ke.setMode(w.LINE_LOOP):ke.setMode(w.LINE_STRIP)}else B.isPoints?ke.setMode(w.POINTS):B.isSprite&&ke.setMode(w.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ke.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Me=B._multiDrawStarts,Ke=B._multiDrawCounts,He=B._multiDrawCount,et=ye?O.get(ye).bytesPerElement:1,st=ce.get(V).currentProgram.getUniforms();for(let je=0;je<He;je++)st.setValue(w,"_gl_DrawID",je),ke.render(Me[je]/et,Ke[je])}else if(B.isInstancedMesh)ke.renderInstances(Ge,Xe,B.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ke=Math.min(F.instanceCount,Me);ke.renderInstances(Ge,Xe,Ke)}else ke.render(Ge,Xe)};function Ze(T,U,F){T.transparent===!0&&T.side===DoubleSide&&T.forceSinglePass===!1?(T.side=BackSide,T.needsUpdate=!0,ot(T,U,F),T.side=FrontSide,T.needsUpdate=!0,ot(T,U,F),T.side=DoubleSide):ot(T,U,F)}this.compile=function(T,U,F=null){F===null&&(F=T),_=pe.get(F),_.init(U),y.push(_),F.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),T!==F&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const V=new Set;return T.traverse(function(B){const re=B.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ve=re[he];Ze(ve,F,B),V.add(ve)}else Ze(re,F,B),V.add(re)}),y.pop(),_=null,V},this.compileAsync=function(T,U,F=null){const V=this.compile(T,U,F);return new Promise(B=>{function re(){if(V.forEach(function(he){ce.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){B(T);return}setTimeout(re,10)}Q.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ze=null;function nt(T){ze&&ze(T)}function tt(){rt.stop()}function dt(){rt.start()}const rt=new WebGLAnimation;rt.setAnimationLoop(nt),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(T){ze=T,ie.setAnimationLoop(T),T===null?rt.stop():rt.start()},ie.addEventListener("sessionstart",tt),ie.addEventListener("sessionend",dt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,C),_=pe.get(T,y.length),_.init(U),y.push(_),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ve.setFromProjectionMatrix(me),ee=this.localClippingEnabled,$=Ie.init(this.clippingPlanes,ee),x=ae.get(T,m.length),x.init(),m.push(x),ie.enabled===!0&&ie.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&lt(re,U,-1/0,v.sortObjects)}lt(T,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(H,ue),Ce=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ce&&de.addToRenderList(x,T),this.info.render.frame++,$===!0&&Ie.beginShadows();const F=_.state.shadowsArray;te.render(F,T,U),$===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,B=x.transmissive;if(_.setupLights(),U.isArrayCamera){const re=U.cameras;if(B.length>0)for(let he=0,ve=re.length;he<ve;he++){const ye=re[he];pt(V,B,T,ye)}Ce&&de.render(T);for(let he=0,ve=re.length;he<ve;he++){const ye=re[he];ft(x,T,ye,ye.viewport)}}else B.length>0&&pt(V,B,T,U),Ce&&de.render(T),ft(x,T,U);C!==null&&(ge.updateMultisampleRenderTarget(C),ge.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,U),Be.resetDefaultState(),L=-1,A=null,y.pop(),y.length>0?(_=y[y.length-1],$===!0&&Ie.setGlobalState(v.clippingPlanes,_.state.camera)):_=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function lt(T,U,F,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)F=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){V&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const he=J.update(T),ve=T.material;ve.visible&&x.push(T,he,ve,F,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const he=J.update(T),ve=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),we.copy(he.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(ve)){const ye=he.groups;for(let Ee=0,Re=ye.length;Ee<Re;Ee++){const Ae=ye[Ee],Ge=ve[Ae.materialIndex];Ge&&Ge.visible&&x.push(T,he,Ge,F,we.z,Ae)}}else ve.visible&&x.push(T,he,ve,F,we.z,null)}}const re=T.children;for(let he=0,ve=re.length;he<ve;he++)lt(re[he],U,F,V)}function ft(T,U,F,V){const B=T.opaque,re=T.transmissive,he=T.transparent;_.setupLightsView(F),$===!0&&Ie.setGlobalState(v.clippingPlanes,F),V&&X.viewport(S.copy(V)),B.length>0&&at(B,U,F),re.length>0&&at(re,U,F),he.length>0&&at(he,U,F),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function pt(T,U,F,V){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[V.id]===void 0&&(_.state.transmissionRenderTarget[V.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const re=_.state.transmissionRenderTarget[V.id],he=V.viewport||S;re.setSize(he.z,he.w);const ve=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(N),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),Ce?de.render(F):v.clear();const ye=v.toneMapping;v.toneMapping=NoToneMapping;const Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),_.setupLightsView(V),$===!0&&Ie.setGlobalState(v.clippingPlanes,V),at(T,F,V),ge.updateMultisampleRenderTarget(re),ge.updateRenderTargetMipmap(re),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ae=0,Ge=U.length;Ae<Ge;Ae++){const $e=U[Ae],Xe=$e.object,Je=$e.geometry,ke=$e.material,Me=$e.group;if(ke.side===DoubleSide&&Xe.layers.test(V.layers)){const Ke=ke.side;ke.side=BackSide,ke.needsUpdate=!0,mt(Xe,F,V,Je,ke,Me),ke.side=Ke,ke.needsUpdate=!0,Re=!0}}Re===!0&&(ge.updateMultisampleRenderTarget(re),ge.updateRenderTargetMipmap(re))}v.setRenderTarget(ve),v.setClearColor(N,k),Ee!==void 0&&(V.viewport=Ee),v.toneMapping=ye}function at(T,U,F){const V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,re=T.length;B<re;B++){const he=T[B],ve=he.object,ye=he.geometry,Ee=V===null?he.material:V,Re=he.group;ve.layers.test(F.layers)&&mt(ve,U,F,ye,Ee,Re)}}function mt(T,U,F,V,B,re){T.onBeforeRender(v,U,F,V,B,re),T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.transparent===!0&&B.side===DoubleSide&&B.forceSinglePass===!1?(B.side=BackSide,B.needsUpdate=!0,v.renderBufferDirect(F,U,V,B,T,re),B.side=FrontSide,B.needsUpdate=!0,v.renderBufferDirect(F,U,V,B,T,re),B.side=DoubleSide):v.renderBufferDirect(F,U,V,B,T,re),T.onAfterRender(v,U,F,V,B,re)}function ot(T,U,F){U.isScene!==!0&&(U=De);const V=ce.get(T),B=_.state.lights,re=_.state.shadowsArray,he=B.state.version,ve=K.getParameters(T,B.state,re,U,F),ye=K.getProgramCacheKey(ve);let Ee=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?b:R).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",Te),Ee=new Map,V.programs=Ee);let Re=Ee.get(ye);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===he)return _t(T,ve),Re}else ve.uniforms=K.getUniforms(T),T.onBeforeCompile(ve,v),Re=K.acquireProgram(ve,ye),Ee.set(ye,Re),V.uniforms=ve.uniforms;const Ae=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),_t(T,ve),V.needsLights=Mt(T),V.lightsStateVersion=he,V.needsLights&&(Ae.ambientLightColor.value=B.state.ambient,Ae.lightProbe.value=B.state.probe,Ae.directionalLights.value=B.state.directional,Ae.directionalLightShadows.value=B.state.directionalShadow,Ae.spotLights.value=B.state.spot,Ae.spotLightShadows.value=B.state.spotShadow,Ae.rectAreaLights.value=B.state.rectArea,Ae.ltc_1.value=B.state.rectAreaLTC1,Ae.ltc_2.value=B.state.rectAreaLTC2,Ae.pointLights.value=B.state.point,Ae.pointLightShadows.value=B.state.pointShadow,Ae.hemisphereLights.value=B.state.hemi,Ae.directionalShadowMap.value=B.state.directionalShadowMap,Ae.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ae.spotShadowMap.value=B.state.spotShadowMap,Ae.spotLightMatrix.value=B.state.spotLightMatrix,Ae.spotLightMap.value=B.state.spotLightMap,Ae.pointShadowMap.value=B.state.pointShadowMap,Ae.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function gt(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=WebGLUniforms.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function _t(T,U){const F=ce.get(T);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function vt(T,U,F,V,B){U.isScene!==!0&&(U=De),ge.resetTextureUnits();const re=U.fog,he=V.isMeshStandardMaterial?U.environment:null,ve=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:LinearSRGBColorSpace,ye=(V.isMeshStandardMaterial?b:R).get(V.envMap||he),Ee=V.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!F.morphAttributes.position,Ge=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let Xe=NoToneMapping;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Xe=v.toneMapping);const Je=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ke=Je!==void 0?Je.length:0,Me=ce.get(V),Ke=_.state.lights;if($===!0&&(ee===!0||T!==A)){const Qe=T===A&&V.id===L;Ie.setState(V,T,Qe)}let He=!1;V.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ke.state.version||Me.outputColorSpace!==ve||B.isBatchedMesh&&Me.batching===!1||!B.isBatchedMesh&&Me.batching===!0||B.isBatchedMesh&&Me.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Me.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Me.instancing===!1||!B.isInstancedMesh&&Me.instancing===!0||B.isSkinnedMesh&&Me.skinning===!1||!B.isSkinnedMesh&&Me.skinning===!0||B.isInstancedMesh&&Me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Me.instancingMorph===!1&&B.morphTexture!==null||Me.envMap!==ye||V.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ie.numPlanes||Me.numIntersection!==Ie.numIntersection)||Me.vertexAlphas!==Ee||Me.vertexTangents!==Re||Me.morphTargets!==Ae||Me.morphNormals!==Ge||Me.morphColors!==$e||Me.toneMapping!==Xe||Me.morphTargetsCount!==ke)&&(He=!0):(He=!0,Me.__version=V.version);let et=Me.currentProgram;He===!0&&(et=ot(V,U,B));let st=!1,je=!1,ct=!1;const Ye=et.getUniforms(),it=Me.uniforms;if(X.useProgram(et.program)&&(st=!0,je=!0,ct=!0),V.id!==L&&(L=V.id,je=!0),st||A!==T){Ye.setValue(w,"projectionMatrix",T.projectionMatrix),Ye.setValue(w,"viewMatrix",T.matrixWorldInverse);const Qe=Ye.map.cameraPosition;Qe!==void 0&&Qe.setValue(w,oe.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&Ye.setValue(w,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ye.setValue(w,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,je=!0,ct=!0)}if(B.isSkinnedMesh){Ye.setOptional(w,B,"bindMatrix"),Ye.setOptional(w,B,"bindMatrixInverse");const Qe=B.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ye.setValue(w,"boneTexture",Qe.boneTexture,ge))}B.isBatchedMesh&&(Ye.setOptional(w,B,"batchingTexture"),Ye.setValue(w,"batchingTexture",B._matricesTexture,ge),Ye.setOptional(w,B,"batchingIdTexture"),Ye.setValue(w,"batchingIdTexture",B._indirectTexture,ge),Ye.setOptional(w,B,"batchingColorTexture"),B._colorsTexture!==null&&Ye.setValue(w,"batchingColorTexture",B._colorsTexture,ge));const ht=F.morphAttributes;if((ht.position!==void 0||ht.normal!==void 0||ht.color!==void 0)&&Fe.update(B,F,et),(je||Me.receiveShadow!==B.receiveShadow)&&(Me.receiveShadow=B.receiveShadow,Ye.setValue(w,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(it.envMap.value=ye,it.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(it.envMapIntensity.value=U.environmentIntensity),je&&(Ye.setValue(w,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&yt(it,ct),re&&V.fog===!0&&Se.refreshFogUniforms(it,re),Se.refreshMaterialUniforms(it,V,Z,G,_.state.transmissionRenderTarget[T.id]),WebGLUniforms.upload(w,gt(Me),it,ge)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(w,gt(Me),it,ge),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ye.setValue(w,"center",B.center),Ye.setValue(w,"modelViewMatrix",B.modelViewMatrix),Ye.setValue(w,"normalMatrix",B.normalMatrix),Ye.setValue(w,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qe=V.uniformsGroups;for(let ut=0,St=Qe.length;ut<St;ut++){const xt=Qe[ut];We.update(xt,et),We.bind(xt,et)}}return et}function yt(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Mt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,F){ce.get(T.texture).__webglTexture=U,ce.get(T.depthTexture).__webglTexture=F;const V=ce.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=F===void 0,V.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const F=ce.get(T);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,F=0){C=T,P=U,E=F;let V=!0,B=null,re=!1,he=!1;if(T){const ye=ce.get(T);ye.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(w.FRAMEBUFFER,null),V=!1):ye.__webglFramebuffer===void 0?ge.setupRenderTarget(T):ye.__hasExternalTextures&&ge.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Re=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?B=Re[U][F]:B=Re[U],re=!0):T.samples>0&&ge.useMultisampledRTT(T)===!1?B=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[F]:B=Re,S.copy(T.viewport),I.copy(T.scissor),z=T.scissorTest}else S.copy(_e).multiplyScalar(Z).floor(),I.copy(fe).multiplyScalar(Z).floor(),z=Ue;if(X.bindFramebuffer(w.FRAMEBUFFER,B)&&V&&X.drawBuffers(T,B),X.viewport(S),X.scissor(I),X.setScissorTest(z),re){const ye=ce.get(T.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,F)}else if(he){const ye=ce.get(T.texture),Ee=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Ee)}L=-1},this.readRenderTargetPixels=function(T,U,F,V,B,re,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){X.bindFramebuffer(w.FRAMEBUFFER,ve);try{const ye=T.texture,Ee=ye.format,Re=ye.type;if(!le.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&F>=0&&F<=T.height-B&&w.readPixels(U,F,V,B,Pe.convert(Ee),Pe.convert(Re),re)}finally{const ye=C!==null?ce.get(C).__webglFramebuffer:null;X.bindFramebuffer(w.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,U,F,V,B,re,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){X.bindFramebuffer(w.FRAMEBUFFER,ve);try{const ye=T.texture,Ee=ye.format,Re=ye.type;if(!le.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&F>=0&&F<=T.height-B){const Ae=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.bufferData(w.PIXEL_PACK_BUFFER,re.byteLength,w.STREAM_READ),w.readPixels(U,F,V,B,Pe.convert(Ee),Pe.convert(Re),0),w.flush();const Ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await probeAsync(w,Ge,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Ae),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,re)}finally{w.deleteBuffer(Ae),w.deleteSync(Ge)}return re}}finally{const ye=C!==null?ce.get(C).__webglFramebuffer:null;X.bindFramebuffer(w.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(T,U=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-F),B=Math.floor(T.image.width*V),re=Math.floor(T.image.height*V),he=U!==null?U.x:0,ve=U!==null?U.y:0;ge.setTexture2D(T,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,he,ve,B,re),X.unbindTexture()},this.copyTextureToTexture=function(T,U,F=null,V=null,B=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],B=arguments[3]||0,F=null);let re,he,ve,ye,Ee,Re;F!==null?(re=F.max.x-F.min.x,he=F.max.y-F.min.y,ve=F.min.x,ye=F.min.y):(re=T.image.width,he=T.image.height,ve=0,ye=0),V!==null?(Ee=V.x,Re=V.y):(Ee=0,Re=0);const Ae=Pe.convert(U.format),Ge=Pe.convert(U.type);ge.setTexture2D(U,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=w.getParameter(w.UNPACK_ROW_LENGTH),Xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Je=w.getParameter(w.UNPACK_SKIP_PIXELS),ke=w.getParameter(w.UNPACK_SKIP_ROWS),Me=w.getParameter(w.UNPACK_SKIP_IMAGES),Ke=T.isCompressedTexture?T.mipmaps[B]:T.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ve),w.pixelStorei(w.UNPACK_SKIP_ROWS,ye),T.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,B,Ee,Re,re,he,Ae,Ge,Ke.data):T.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,B,Ee,Re,Ke.width,Ke.height,Ae,Ke.data):w.texSubImage2D(w.TEXTURE_2D,B,Ee,Re,re,he,Ae,Ge,Ke),w.pixelStorei(w.UNPACK_ROW_LENGTH,$e),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Me),B===0&&U.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(T,U,F=null,V=null,B=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],B=arguments[4]||0);let re,he,ve,ye,Ee,Re,Ae,Ge,$e;const Xe=T.isCompressedTexture?T.mipmaps[B]:T.image;F!==null?(re=F.max.x-F.min.x,he=F.max.y-F.min.y,ve=F.max.z-F.min.z,ye=F.min.x,Ee=F.min.y,Re=F.min.z):(re=Xe.width,he=Xe.height,ve=Xe.depth,ye=0,Ee=0,Re=0),V!==null?(Ae=V.x,Ge=V.y,$e=V.z):(Ae=0,Ge=0,$e=0);const Je=Pe.convert(U.format),ke=Pe.convert(U.type);let Me;if(U.isData3DTexture)ge.setTexture3D(U,0),Me=w.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ge.setTexture2DArray(U,0),Me=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Ke=w.getParameter(w.UNPACK_ROW_LENGTH),He=w.getParameter(w.UNPACK_IMAGE_HEIGHT),et=w.getParameter(w.UNPACK_SKIP_PIXELS),st=w.getParameter(w.UNPACK_SKIP_ROWS),je=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ee),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Re),T.isDataTexture||T.isData3DTexture?w.texSubImage3D(Me,B,Ae,Ge,$e,re,he,ve,Je,ke,Xe.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(Me,B,Ae,Ge,$e,re,he,ve,Je,Xe.data):w.texSubImage3D(Me,B,Ae,Ge,$e,re,he,ve,Je,ke,Xe),w.pixelStorei(w.UNPACK_ROW_LENGTH,Ke),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,He),w.pixelStorei(w.UNPACK_SKIP_PIXELS,et),w.pixelStorei(w.UNPACK_SKIP_ROWS,st),w.pixelStorei(w.UNPACK_SKIP_IMAGES,je),B===0&&U.generateMipmaps&&w.generateMipmap(Me),X.unbindTexture()},this.initRenderTarget=function(T){ce.get(T).__webglFramebuffer===void 0&&ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){P=0,E=0,C=null,X.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===DisplayP3ColorSpace?"display-p3":"srgb",n.unpackColorSpace=ColorManagement.workingColorSpace===LinearDisplayP3ColorSpace?"display-p3":"srgb"}}class FogExp2{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Color(t),this.density=n}clone(){return new FogExp2(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fog{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Color(t),this.near=n,this.far=i}clone(){return new Fog(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class InterleavedBuffer{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=generateUUID()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return warnOnce("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=n.array[i+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _vector$6=new Vector3;class InterleavedBufferAttribute{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)_vector$6.fromBufferAttribute(this,n),_vector$6.applyMatrix4(t),this.setXYZ(n,_vector$6.x,_vector$6.y,_vector$6.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)_vector$6.fromBufferAttribute(this,n),_vector$6.applyNormalMatrix(t),this.setXYZ(n,_vector$6.x,_vector$6.y,_vector$6.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)_vector$6.fromBufferAttribute(this,n),_vector$6.transformDirection(t),this.setXYZ(n,_vector$6.x,_vector$6.y,_vector$6.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=denormalize(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=normalize(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=normalize(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=normalize(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=normalize(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=normalize(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=denormalize(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=denormalize(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=denormalize(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=denormalize(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array),s=normalize(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new BufferAttribute(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new InterleavedBufferAttribute(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class SpriteMaterial extends Material{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _geometry;const _intersectPoint=new Vector3,_worldScale=new Vector3,_mvPosition=new Vector3,_alignedPosition=new Vector2,_rotatedPosition=new Vector2,_viewWorldMatrix=new Matrix4,_vA$2=new Vector3,_vB$2=new Vector3,_vC$2=new Vector3,_uvA=new Vector2,_uvB=new Vector2,_uvC=new Vector2;class Sprite extends Object3D{constructor(t=new SpriteMaterial){if(super(),this.isSprite=!0,this.type="Sprite",_geometry===void 0){_geometry=new BufferGeometry;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new InterleavedBuffer(n,5);_geometry.setIndex([0,1,2,0,2,3]),_geometry.setAttribute("position",new InterleavedBufferAttribute(i,3,0,!1)),_geometry.setAttribute("uv",new InterleavedBufferAttribute(i,2,3,!1))}this.geometry=_geometry,this.material=t,this.center=new Vector2(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_worldScale.setFromMatrixScale(this.matrixWorld),_viewWorldMatrix.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_mvPosition.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_worldScale.multiplyScalar(-_mvPosition.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;transformVertex(_vA$2.set(-.5,-.5,0),_mvPosition,o,_worldScale,r,s),transformVertex(_vB$2.set(.5,-.5,0),_mvPosition,o,_worldScale,r,s),transformVertex(_vC$2.set(.5,.5,0),_mvPosition,o,_worldScale,r,s),_uvA.set(0,0),_uvB.set(1,0),_uvC.set(1,1);let l=t.ray.intersectTriangle(_vA$2,_vB$2,_vC$2,!1,_intersectPoint);if(l===null&&(transformVertex(_vB$2.set(-.5,.5,0),_mvPosition,o,_worldScale,r,s),_uvB.set(0,1),l=t.ray.intersectTriangle(_vA$2,_vC$2,_vB$2,!1,_intersectPoint),l===null))return;const c=t.ray.origin.distanceTo(_intersectPoint);c<t.near||c>t.far||n.push({distance:c,point:_intersectPoint.clone(),uv:Triangle.getInterpolation(_intersectPoint,_vA$2,_vB$2,_vC$2,_uvA,_uvB,_uvC,new Vector2),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function transformVertex(a,t,n,i,r,s){_alignedPosition.subVectors(a,n).addScalar(.5).multiply(i),r!==void 0?(_rotatedPosition.x=s*_alignedPosition.x-r*_alignedPosition.y,_rotatedPosition.y=r*_alignedPosition.x+s*_alignedPosition.y):_rotatedPosition.copy(_alignedPosition),a.copy(t),a.x+=_rotatedPosition.x,a.y+=_rotatedPosition.y,a.applyMatrix4(_viewWorldMatrix)}const _v1$2=new Vector3,_v2$1=new Vector3;class LOD extends Object3D{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const n=t.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,n=0,i=0){n=Math.abs(n);const r=this.levels;let s;for(s=0;s<r.length&&!(n<r[s].distance);s++);return r.splice(s,0,{distance:n,hysteresis:i,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const n=this.levels;if(n.length>0){let i,r;for(i=1,r=n.length;i<r;i++){let s=n[i].distance;if(n[i].object.visible&&(s-=s*n[i].hysteresis),t<s)break}return n[i-1].object}return null}raycast(t,n){if(this.levels.length>0){_v1$2.setFromMatrixPosition(this.matrixWorld);const r=t.ray.origin.distanceTo(_v1$2);this.getObjectForDistance(r).raycast(t,n)}}update(t){const n=this.levels;if(n.length>1){_v1$2.setFromMatrixPosition(t.matrixWorld),_v2$1.setFromMatrixPosition(this.matrixWorld);const i=_v1$2.distanceTo(_v2$1)/t.zoom;n[0].object.visible=!0;let r,s;for(r=1,s=n.length;r<s;r++){let o=n[r].distance;if(n[r].object.visible&&(o-=o*n[r].hysteresis),i>=o)n[r-1].object.visible=!1,n[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)n[r].object.visible=!1}}toJSON(t){const n=super.toJSON(t);this.autoUpdate===!1&&(n.object.autoUpdate=!1),n.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return n}}const _basePosition=new Vector3,_skinIndex=new Vector4,_skinWeight=new Vector4,_vector3=new Vector3,_matrix4=new Matrix4,_vertex=new Vector3,_sphere$4=new Sphere,_inverseMatrix$2=new Matrix4,_ray$2=new Ray;class SkinnedMesh extends Mesh{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=AttachedBindMode,this.bindMatrix=new Matrix4,this.bindMatrixInverse=new Matrix4,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Box3),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,_vertex),this.boundingBox.expandByPoint(_vertex)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sphere),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,_vertex),this.boundingSphere.expandByPoint(_vertex)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_sphere$4.copy(this.boundingSphere),_sphere$4.applyMatrix4(r),t.ray.intersectsSphere(_sphere$4)!==!1&&(_inverseMatrix$2.copy(r).invert(),_ray$2.copy(t.ray).applyMatrix4(_inverseMatrix$2),!(this.boundingBox!==null&&_ray$2.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,_ray$2)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Vector4,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){t.fromBufferAttribute(n,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===AttachedBindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===DetachedBindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const i=this.skeleton,r=this.geometry;_skinIndex.fromBufferAttribute(r.attributes.skinIndex,t),_skinWeight.fromBufferAttribute(r.attributes.skinWeight,t),_basePosition.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=_skinWeight.getComponent(s);if(o!==0){const l=_skinIndex.getComponent(s);_matrix4.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),n.addScaledVector(_vector3.copy(_basePosition).applyMatrix4(_matrix4),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Bone extends Object3D{constructor(){super(),this.isBone=!0,this.type="Bone"}}class DataTexture extends Texture{constructor(t=null,n=1,i=1,r,s,o,l,c,h=NearestFilter,u=NearestFilter,d,f){super(null,o,l,c,h,u,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _offsetMatrix=new Matrix4,_identityMatrix$1=new Matrix4;class Skeleton{constructor(t=[],n=[]){this.uuid=generateUUID(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Matrix4)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new Matrix4;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const l=t[s]?t[s].matrixWorld:_identityMatrix$1;_offsetMatrix.multiplyMatrices(l,n[s]),_offsetMatrix.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new DataTexture(n,t,t,RGBAFormat,FloatType);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,r=t.bones.length;i<r;i++){const s=t.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Bone),this.bones.push(o),this.boneInverses.push(new Matrix4().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];t.bones.push(o.uuid);const l=i[r];t.boneInverses.push(l.toArray())}return t}}class InstancedBufferAttribute extends BufferAttribute{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _instanceLocalMatrix=new Matrix4,_instanceWorldMatrix=new Matrix4,_instanceIntersects=[],_box3=new Box3,_identity=new Matrix4,_mesh$1=new Mesh,_sphere$3=new Sphere;class InstancedMesh extends Mesh{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new InstancedBufferAttribute(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_identity)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Box3),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_instanceLocalMatrix),_box3.copy(t.boundingBox).applyMatrix4(_instanceLocalMatrix),this.boundingBox.union(_box3)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sphere),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_instanceLocalMatrix),_sphere$3.copy(t.boundingSphere).applyMatrix4(_instanceLocalMatrix),this.boundingSphere.union(_sphere$3)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let l=0;l<i.length;l++)i[l]=r[o+l]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(_mesh$1.geometry=this.geometry,_mesh$1.material=this.material,_mesh$1.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_sphere$3.copy(this.boundingSphere),_sphere$3.applyMatrix4(i),t.ray.intersectsSphere(_sphere$3)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_instanceLocalMatrix),_instanceWorldMatrix.multiplyMatrices(i,_instanceLocalMatrix),_mesh$1.matrixWorld=_instanceWorldMatrix,_mesh$1.raycast(t,_instanceIntersects);for(let o=0,l=_instanceIntersects.length;o<l;o++){const c=_instanceIntersects[o];c.instanceId=s,c.object=this,n.push(c)}_instanceIntersects.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new DataTexture(new Float32Array(r*this.count),r,this.count,RedFormat,FloatType));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const l=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=l,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function sortOpaque(a,t){return a.z-t.z}function sortTransparent(a,t){return t.z-a.z}class MultiDrawRenderList{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,n,i){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];s.push(o),this.index++,o.start=t.start,o.count=t.count,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const _matrix$1=new Matrix4,_invMatrixWorld=new Matrix4,_identityMatrix=new Matrix4,_whiteColor=new Color(1,1,1),_projScreenMatrix$2=new Matrix4,_frustum=new Frustum,_box$1=new Box3,_sphere$2=new Sphere,_vector$5=new Vector3,_forward=new Vector3,_temp=new Vector3,_renderList=new MultiDrawRenderList,_mesh=new Mesh,_batchIntersects=[];function copyAttributeData(a,t,n=0){const i=t.itemSize;if(a.isInterleavedBufferAttribute||a.array.constructor!==t.array.constructor){const r=a.count;for(let s=0;s<r;s++)for(let o=0;o<i;o++)t.setComponent(s+n,o,a.getComponent(s,o))}else t.array.set(a.array,n*i);t.needsUpdate=!0}class BatchedMesh extends Mesh{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,n,i=n*2,r){super(new BufferGeometry,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=n,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4),i=new DataTexture(n,t,t,RGBAFormat,FloatType);this._matricesTexture=i}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const n=new Uint32Array(t*t),i=new DataTexture(n,t,t,RedIntegerFormat,UnsignedIntType);this._indirectTexture=i}_initColorsTexture(){let t=Math.sqrt(this._maxIndexCount);t=Math.ceil(t);const n=new Float32Array(t*t*4).fill(1),i=new DataTexture(n,t,t,RGBAFormat,FloatType);i.colorSpace=ColorManagement.workingColorSpace,this._colorsTexture=i}_initializeGeometry(t){const n=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in t.attributes){const o=t.getAttribute(s),{array:l,itemSize:c,normalized:h}=o,u=new l.constructor(i*c),d=new BufferAttribute(u,c,h);n.setAttribute(s,d)}if(t.getIndex()!==null){const s=i>65535?new Uint32Array(r):new Uint16Array(r);n.setIndex(new BufferAttribute(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){const n=this.geometry;if(!!t.getIndex()!=!!n.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const i in n.attributes){if(!t.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const r=t.getAttribute(i),s=n.getAttribute(i);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const t=this._geometryCount,n=this.boundingBox,i=this._drawInfo;n.makeEmpty();for(let r=0;r<t;r++){if(i[r].active===!1)continue;const s=i[r].geometryIndex;this.getMatrixAt(r,_matrix$1),this.getBoundingBoxAt(s,_box$1).applyMatrix4(_matrix$1),n.union(_box$1)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const t=this.boundingSphere,n=this._drawInfo;t.makeEmpty();for(let i=0,r=n.length;i<r;i++){if(n[i].active===!1)continue;const s=n[i].geometryIndex;this.getMatrixAt(i,_matrix$1),this.getBoundingSphereAt(s,_sphere$2).applyMatrix4(_matrix$1),t.union(_sphere$2)}}addInstance(t){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:t});const n=this._drawInfo.length-1,i=this._matricesTexture,r=i.image.data;_identityMatrix.toArray(r,n*16),i.needsUpdate=!0;const s=this._colorsTexture;return s&&(_whiteColor.toArray(s.image.data,n*4),s.needsUpdate=!0),n}addGeometry(t,n=-1,i=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,l=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),n===-1?r.vertexCount=t.getAttribute("position").count:r.vertexCount=n,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;const h=t.getIndex(),u=h!==null;if(u&&(i===-1?r.indexCount=h.count:r.indexCount=i,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._geometryCount;return this._geometryCount++,o.push(r),l.push({start:u?r.indexStart:r.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Box3,sphereInitialized:!1,sphere:new Sphere}),this.setGeometryAt(d,t),d}setGeometryAt(t,n){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(n);const i=this.geometry,r=i.getIndex()!==null,s=i.getIndex(),o=n.getIndex(),l=this._reservedRanges[t];if(r&&o.count>l.indexCount||n.attributes.position.count>l.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=l.vertexStart,h=l.vertexCount;for(const p in i.attributes){const g=n.getAttribute(p),x=i.getAttribute(p);copyAttributeData(g,x,c);const _=g.itemSize;for(let m=g.count,y=h;m<y;m++){const v=c+m;for(let M=0;M<_;M++)x.setComponent(v,M,0)}x.needsUpdate=!0,x.addUpdateRange(c*_,h*_)}if(r){const p=l.indexStart;for(let g=0;g<o.count;g++)s.setX(p+g,c+o.getX(g));for(let g=o.count,x=l.indexCount;g<x;g++)s.setX(p+g,c);s.needsUpdate=!0,s.addUpdateRange(p,l.indexCount)}const u=this._bounds[t];n.boundingBox!==null?(u.box.copy(n.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,n.boundingSphere!==null?(u.sphere.copy(n.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[t],f=n.getAttribute("position");return d.count=r?o.count:f.count,this._visibilityChanged=!0,t}getBoundingBoxAt(t,n){if(t>=this._geometryCount)return null;const i=this._bounds[t],r=i.box,s=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const o=s.index,l=s.attributes.position,c=this._drawRanges[t];for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;o&&(d=o.getX(d)),r.expandByPoint(_vector$5.fromBufferAttribute(l,d))}i.boxInitialized=!0}return n.copy(r),n}getBoundingSphereAt(t,n){if(t>=this._geometryCount)return null;const i=this._bounds[t],r=i.sphere,s=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(t,_box$1),_box$1.getCenter(r.center);const o=s.index,l=s.attributes.position,c=this._drawRanges[t];let h=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;o&&(f=o.getX(f)),_vector$5.fromBufferAttribute(l,f),h=Math.max(h,r.center.distanceToSquared(_vector$5))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return n.copy(r),n}setMatrixAt(t,n){const i=this._drawInfo,r=this._matricesTexture,s=this._matricesTexture.image.data;return t>=i.length||i[t].active===!1?this:(n.toArray(s,t*16),r.needsUpdate=!0,this)}getMatrixAt(t,n){const i=this._drawInfo,r=this._matricesTexture.image.data;return t>=i.length||i[t].active===!1?null:n.fromArray(r,t*16)}setColorAt(t,n){this._colorsTexture===null&&this._initColorsTexture();const i=this._colorsTexture,r=this._colorsTexture.image.data,s=this._drawInfo;return t>=s.length||s[t].active===!1?this:(n.toArray(r,t*4),i.needsUpdate=!0,this)}getColorAt(t,n){const i=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?null:n.fromArray(i,t*4)}setVisibleAt(t,n){const i=this._drawInfo;return t>=i.length||i[t].active===!1||i[t].visible===n?this:(i[t].visible=n,this._visibilityChanged=!0,this)}getVisibleAt(t){const n=this._drawInfo;return t>=n.length||n[t].active===!1?!1:n[t].visible}raycast(t,n){const i=this._drawInfo,r=this._drawRanges,s=this.matrixWorld,o=this.geometry;_mesh.material=this.material,_mesh.geometry.index=o.index,_mesh.geometry.attributes=o.attributes,_mesh.geometry.boundingBox===null&&(_mesh.geometry.boundingBox=new Box3),_mesh.geometry.boundingSphere===null&&(_mesh.geometry.boundingSphere=new Sphere);for(let l=0,c=i.length;l<c;l++){if(!i[l].visible||!i[l].active)continue;const h=i[l].geometryIndex,u=r[h];_mesh.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,_mesh.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,_mesh.geometry.boundingBox),this.getBoundingSphereAt(h,_mesh.geometry.boundingSphere),_mesh.raycast(t,_batchIntersects);for(let d=0,f=_batchIntersects.length;d<f;d++){const p=_batchIntersects[d];p.object=this,p.batchId=l,n.push(p)}_batchIntersects.length=0}_mesh.material=null,_mesh.geometry.index=null,_mesh.geometry.attributes={},_mesh.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(n=>({...n})),this._reservedRanges=t._reservedRanges.map(n=>({...n})),this._drawInfo=t._drawInfo.map(n=>({...n})),this._bounds=t._bounds.map(n=>({boxInitialized:n.boxInitialized,box:n.box.clone(),sphereInitialized:n.sphereInitialized,sphere:n.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,n,i,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=r.getIndex(),l=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._drawInfo,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data;f&&(_projScreenMatrix$2.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),_frustum.setFromProjectionMatrix(_projScreenMatrix$2,t.coordinateSystem));let x=0;if(this.sortObjects){_invMatrixWorld.copy(this.matrixWorld).invert(),_vector$5.setFromMatrixPosition(i.matrixWorld).applyMatrix4(_invMatrixWorld),_forward.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(_invMatrixWorld);for(let y=0,v=c.length;y<v;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,_matrix$1),this.getBoundingSphereAt(M,_sphere$2).applyMatrix4(_matrix$1);let P=!1;if(f&&(P=!_frustum.intersectsSphere(_sphere$2)),!P){const E=_temp.subVectors(_sphere$2.center,_vector$5).dot(_forward);_renderList.push(d[M],E,y)}}const _=_renderList.list,m=this.customSort;m===null?_.sort(s.transparent?sortTransparent:sortOpaque):m.call(this,_,i);for(let y=0,v=_.length;y<v;y++){const M=_[y];h[x]=M.start*l,u[x]=M.count,g[x]=M.index,x++}_renderList.reset()}else for(let _=0,m=c.length;_<m;_++)if(c[_].visible&&c[_].active){const y=c[_].geometryIndex;let v=!1;if(f&&(this.getMatrixAt(_,_matrix$1),this.getBoundingSphereAt(y,_sphere$2).applyMatrix4(_matrix$1),v=!_frustum.intersectsSphere(_sphere$2)),!v){const M=d[y];h[x]=M.start*l,u[x]=M.count,g[x]=_,x++}}p.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(t,n,i,r,s,o){this.onBeforeRender(t,null,r,s,o)}}class LineBasicMaterial extends Material{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _vStart=new Vector3,_vEnd=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere,_intersectPointOnRay=new Vector3,_intersectPointOnSegment=new Vector3;class Line extends Object3D{constructor(t=new BufferGeometry,n=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_vStart.fromBufferAttribute(n,r-1),_vEnd.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_vStart.distanceTo(_vEnd);t.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$1.copy(i.boundingSphere),_sphere$1.applyMatrix4(r),_sphere$1.radius+=s,t.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(r).invert(),_ray$1.copy(t.ray).applyMatrix4(_inverseMatrix$1);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=h){const m=u.getX(x),y=u.getX(x+1),v=checkIntersection(this,t,_ray$1,c,m,y);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(g-1),_=u.getX(p),m=checkIntersection(this,t,_ray$1,c,x,_);m&&n.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=h){const m=checkIntersection(this,t,_ray$1,c,x,x+1);m&&n.push(m)}if(this.isLineLoop){const x=checkIntersection(this,t,_ray$1,c,g-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function checkIntersection(a,t,n,i,r,s){const o=a.geometry.attributes.position;if(_vStart.fromBufferAttribute(o,r),_vEnd.fromBufferAttribute(o,s),n.distanceSqToSegment(_vStart,_vEnd,_intersectPointOnRay,_intersectPointOnSegment)>i)return;_intersectPointOnRay.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(_intersectPointOnRay);if(!(c<t.near||c>t.far))return{distance:c,point:_intersectPointOnSegment.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,object:a}}const _start=new Vector3,_end=new Vector3;class LineSegments extends Line{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)_start.fromBufferAttribute(n,r),_end.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_start.distanceTo(_end);t.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LineLoop extends Line{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class PointsMaterial extends Material{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _inverseMatrix=new Matrix4,_ray=new Ray,_sphere=new Sphere,_position$2=new Vector3;class Points extends Object3D{constructor(t=new BufferGeometry,n=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere.copy(i.boundingSphere),_sphere.applyMatrix4(r),_sphere.radius+=s,t.ray.intersectsSphere(_sphere)===!1)return;_inverseMatrix.copy(r).invert(),_ray.copy(t.ray).applyMatrix4(_inverseMatrix);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const _=h.getX(g);_position$2.fromBufferAttribute(d,_),testPoint(_position$2,_,c,r,t,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,x=p;g<x;g++)_position$2.fromBufferAttribute(d,g),testPoint(_position$2,g,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function testPoint(a,t,n,i,r,s,o){const l=_ray.distanceSqToPoint(a);if(l<n){const c=new Vector3;_ray.closestPointToPoint(a,c),c.applyMatrix4(i);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,object:o})}}class VideoTexture extends Texture{constructor(t,n,i,r,s,o,l,c,h){super(t,n,i,r,s,o,l,c,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:LinearFilter,this.magFilter=s!==void 0?s:LinearFilter,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class FramebufferTexture extends Texture{constructor(t,n){super({width:t,height:n}),this.isFramebufferTexture=!0,this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.generateMipmaps=!1,this.needsUpdate=!0}}class CompressedTexture extends Texture{constructor(t,n,i,r,s,o,l,c,h,u,d,f){super(null,o,l,c,h,u,r,s,d,f),this.isCompressedTexture=!0,this.image={width:n,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class CompressedArrayTexture extends CompressedTexture{constructor(t,n,i,r,s,o){super(t,n,i,s,o),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=ClampToEdgeWrapping,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CompressedCubeTexture extends CompressedTexture{constructor(t,n,i){super(void 0,t[0].width,t[0].height,n,i,CubeReflectionMapping),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class CanvasTexture extends Texture{constructor(t,n,i,r,s,o,l,c,h){super(t,n,i,r,s,o,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=t*i[s-1];let l=0,c=s-1,h;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),h=i[r]-o,h<0)l=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,n){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),l=this.getPoint(s),c=n||(o.isVector2?new Vector2:new Vector3);return c.copy(l).sub(o).normalize(),c}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){const i=new Vector3,r=[],s=[],o=[],l=new Vector3,c=new Matrix4;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new Vector3)}s[0]=new Vector3,o[0]=new Vector3;let h=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=h&&(h=u,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),f<=h&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],l),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),l.crossVectors(r[p-1],r[p]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(clamp(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(l,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(clamp(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(l.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(t=0,n=0,i=1,r=1,s=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(t,n=new Vector2){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=h-this.aY;c=f*u-p*d+this.aX,h=f*d+p*u+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(t,n,i,r,s,o){super(t,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let a=0,t=0,n=0,i=0;function r(s,o,l,c){a=s,t=l,n=-3*s+3*o-2*l-c,i=2*s-2*o+l+c}return{initCatmullRom:function(s,o,l,c,h){r(o,l,h*(l-s),h*(c-o))},initNonuniformCatmullRom:function(s,o,l,c,h,u,d){let f=(o-s)/h-(l-s)/(h+u)+(l-o)/u,p=(l-o)/u-(c-o)/(u+d)+(c-l)/d;f*=u,p*=u,r(o,l,f,p)},calc:function(s){const o=s*s,l=o*s;return a+t*s+n*o+i*l}}}const tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(t=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=r}getPoint(t,n=new Vector3){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let h,u;this.closed||l>0?h=r[(l-1)%s]:(tmp.subVectors(r[0],r[1]).add(r[0]),h=tmp);const d=r[l%s],f=r[(l+1)%s];if(this.closed||l+2<s?u=r[(l+2)%s]:(tmp.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),px.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,g,x,_),py.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,g,x,_),pz.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,g,x,_)}else this.curveType==="catmullrom"&&(px.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),py.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),pz.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return i.set(px.calc(c),py.calc(c),pz.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new Vector3().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function CatmullRom(a,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,l=a*a,c=a*l;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*l+s*a+n}function QuadraticBezierP0(a,t){const n=1-a;return n*n*t}function QuadraticBezierP1(a,t){return 2*(1-a)*a*t}function QuadraticBezierP2(a,t){return a*a*t}function QuadraticBezier(a,t,n,i){return QuadraticBezierP0(a,t)+QuadraticBezierP1(a,n)+QuadraticBezierP2(a,i)}function CubicBezierP0(a,t){const n=1-a;return n*n*n*t}function CubicBezierP1(a,t){const n=1-a;return 3*n*n*a*t}function CubicBezierP2(a,t){return 3*(1-a)*a*a*t}function CubicBezierP3(a,t){return a*a*a*t}function CubicBezier(a,t,n,i,r){return CubicBezierP0(a,t)+CubicBezierP1(a,n)+CubicBezierP2(a,i)+CubicBezierP3(a,r)}class CubicBezierCurve extends Curve{constructor(t=new Vector2,n=new Vector2,i=new Vector2,r=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new Vector2){const i=n,r=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(CubicBezier(t,r.x,s.x,o.x,l.x),CubicBezier(t,r.y,s.y,o.y,l.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class CubicBezierCurve3 extends Curve{constructor(t=new Vector3,n=new Vector3,i=new Vector3,r=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new Vector3){const i=n,r=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(CubicBezier(t,r.x,s.x,o.x,l.x),CubicBezier(t,r.y,s.y,o.y,l.y),CubicBezier(t,r.z,s.z,o.z,l.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class LineCurve extends Curve{constructor(t=new Vector2,n=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Vector2){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Vector2){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class LineCurve3 extends Curve{constructor(t=new Vector3,n=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Vector3){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Vector3){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class QuadraticBezierCurve extends Curve{constructor(t=new Vector2,n=new Vector2,i=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new Vector2){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(QuadraticBezier(t,r.x,s.x,o.x),QuadraticBezier(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(t=new Vector3,n=new Vector3,i=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new Vector3){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(QuadraticBezier(t,r.x,s.x,o.x),QuadraticBezier(t,r.y,s.y,o.y),QuadraticBezier(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class SplineCurve extends Curve{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Vector2){const i=n,r=this.points,s=(r.length-1)*t,o=Math.floor(s),l=s-o,c=r[o===0?o:o-1],h=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(CatmullRom(l,c.x,h.x,u.x,d.x),CatmullRom(l,c.y,h.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new Vector2().fromArray(r))}return this}}var Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Curves[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,l=this.curves[s],c=l.getLength(),h=c===0?0:1-o/c;return l.getPointAt(h,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],l=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(l);for(let h=0;h<c.length;h++){const u=c[h];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(new Curves[r.type]().fromJSON(r))}return this}}class Path extends CurvePath{constructor(t){super(),this.type="Path",this.currentPoint=new Vector2,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new LineCurve(this.currentPoint.clone(),new Vector2(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,r){const s=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(t,n),new Vector2(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,n,i,r,s,o){const l=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(t,n),new Vector2(i,r),new Vector2(s,o));return this.curves.push(l),this.currentPoint.set(s,o),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new SplineCurve(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,r,s,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,n+c,i,r,s,o),this}absarc(t,n,i,r,s,o){return this.absellipse(t,n,i,i,r,s,o),this}ellipse(t,n,i,r,s,o,l,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,n+u,i,r,s,o,l,c),this}absellipse(t,n,i,r,s,o,l,c){const h=new EllipseCurve(t,n,i,r,s,o,l,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class LatheGeometry extends BufferGeometry{constructor(t=[new Vector2(0,-.5),new Vector2(.5,0),new Vector2(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=clamp(r,0,Math.PI*2);const s=[],o=[],l=[],c=[],h=[],u=1/n,d=new Vector3,f=new Vector2,p=new Vector3,g=new Vector3,x=new Vector3;let _=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:_=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-_,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:_=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-_,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let y=0;y<=n;y++){const v=i+y*u*r,M=Math.sin(v),P=Math.cos(v);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*P,o.push(d.x,d.y,d.z),f.x=y/n,f.y=E/(t.length-1),l.push(f.x,f.y);const C=c[3*E+0]*M,L=c[3*E+1],A=c[3*E+0]*P;h.push(C,L,A)}}for(let y=0;y<n;y++)for(let v=0;v<t.length-1;v++){const M=v+y*t.length,P=M,E=M+t.length,C=M+t.length+1,L=M+1;s.push(P,E,L),s.push(C,L,E)}this.setIndex(s),this.setAttribute("position",new Float32BufferAttribute(o,3)),this.setAttribute("uv",new Float32BufferAttribute(l,2)),this.setAttribute("normal",new Float32BufferAttribute(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new LatheGeometry(t.points,t.segments,t.phiStart,t.phiLength)}}class CapsuleGeometry extends LatheGeometry{constructor(t=1,n=1,i=4,r=8){const s=new Path;s.absarc(0,-n/2,t,Math.PI*1.5,0),s.absarc(0,n/2,t,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:n,capSegments:i,radialSegments:r}}static fromJSON(t){return new CapsuleGeometry(t.radius,t.length,t.capSegments,t.radialSegments)}}class CircleGeometry extends BufferGeometry{constructor(t=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],l=[],c=[],h=new Vector3,u=new Vector2;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;h.x=t*Math.cos(p),h.y=t*Math.sin(p),o.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Float32BufferAttribute(o,3)),this.setAttribute("normal",new Float32BufferAttribute(l,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new CircleGeometry(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class CylinderGeometry extends BufferGeometry{constructor(t=1,n=1,i=1,r=32,s=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c};const h=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const x=[],_=i/2;let m=0;y(),o===!1&&(t>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(f,3)),this.setAttribute("uv",new Float32BufferAttribute(p,2));function y(){const M=new Vector3,P=new Vector3;let E=0;const C=(n-t)/i;for(let L=0;L<=s;L++){const A=[],S=L/s,I=S*(n-t)+t;for(let z=0;z<=r;z++){const N=z/r,k=N*c+l,W=Math.sin(k),G=Math.cos(k);P.x=I*W,P.y=-S*i+_,P.z=I*G,d.push(P.x,P.y,P.z),M.set(W,C,G).normalize(),f.push(M.x,M.y,M.z),p.push(N,1-S),A.push(g++)}x.push(A)}for(let L=0;L<r;L++)for(let A=0;A<s;A++){const S=x[A][L],I=x[A+1][L],z=x[A+1][L+1],N=x[A][L+1];u.push(S,I,N),u.push(I,z,N),E+=6}h.addGroup(m,E,0),m+=E}function v(M){const P=g,E=new Vector2,C=new Vector3;let L=0;const A=M===!0?t:n,S=M===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,_*S,0),f.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=r;z++){const k=z/r*c+l,W=Math.cos(k),G=Math.sin(k);C.x=A*G,C.y=_*S,C.z=A*W,d.push(C.x,C.y,C.z),f.push(0,S,0),E.x=W*.5+.5,E.y=G*.5*S+.5,p.push(E.x,E.y),g++}for(let z=0;z<r;z++){const N=P+z,k=I+z;M===!0?u.push(k,k+1,N):u.push(k+1,k,N),L+=3}h.addGroup(m,L,M===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new CylinderGeometry(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ConeGeometry extends CylinderGeometry{constructor(t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(0,t,n,i,r,s,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(t){return new ConeGeometry(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class PolyhedronGeometry extends BufferGeometry{constructor(t=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:r};const s=[],o=[];l(r),h(i),u(),this.setAttribute("position",new Float32BufferAttribute(s,3)),this.setAttribute("normal",new Float32BufferAttribute(s.slice(),3)),this.setAttribute("uv",new Float32BufferAttribute(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const v=new Vector3,M=new Vector3,P=new Vector3;for(let E=0;E<n.length;E+=3)p(n[E+0],v),p(n[E+1],M),p(n[E+2],P),c(v,M,P,y)}function c(y,v,M,P){const E=P+1,C=[];for(let L=0;L<=E;L++){C[L]=[];const A=y.clone().lerp(M,L/E),S=v.clone().lerp(M,L/E),I=E-L;for(let z=0;z<=I;z++)z===0&&L===E?C[L][z]=A:C[L][z]=A.clone().lerp(S,z/I)}for(let L=0;L<E;L++)for(let A=0;A<2*(E-L)-1;A++){const S=Math.floor(A/2);A%2===0?(f(C[L][S+1]),f(C[L+1][S]),f(C[L][S])):(f(C[L][S+1]),f(C[L+1][S+1]),f(C[L+1][S]))}}function h(y){const v=new Vector3;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(y),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const y=new Vector3;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const M=_(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;o.push(M,1-P)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const v=o[y+0],M=o[y+2],P=o[y+4],E=Math.max(v,M,P),C=Math.min(v,M,P);E>.9&&C<.1&&(v<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,v){const M=y*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const y=new Vector3,v=new Vector3,M=new Vector3,P=new Vector3,E=new Vector2,C=new Vector2,L=new Vector2;for(let A=0,S=0;A<s.length;A+=9,S+=6){y.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),E.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),P.copy(y).add(v).add(M).divideScalar(3);const I=_(P);x(E,S+0,y,I),x(C,S+2,v,I),x(L,S+4,M,I)}}function x(y,v,M,P){P<0&&y.x===1&&(o[v]=y.x-1),M.x===0&&M.z===0&&(o[v]=P/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new PolyhedronGeometry(t.vertices,t.indices,t.radius,t.details)}}class DodecahedronGeometry extends PolyhedronGeometry{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new DodecahedronGeometry(t.radius,t.detail)}}const _v0=new Vector3,_v1$1=new Vector3,_normal=new Vector3,_triangle=new Triangle;class EdgesGeometry extends BufferGeometry{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const r=Math.pow(10,4),s=Math.cos(DEG2RAD*n),o=t.getIndex(),l=t.getAttribute("position"),c=o?o.count:l.count,h=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<c;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:x,b:_,c:m}=_triangle;if(x.fromBufferAttribute(l,h[0]),_.fromBufferAttribute(l,h[1]),m.fromBufferAttribute(l,h[2]),_triangle.getNormal(_normal),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const v=(y+1)%3,M=d[y],P=d[v],E=_triangle[u[y]],C=_triangle[u[v]],L=`${M}_${P}`,A=`${P}_${M}`;A in f&&f[A]?(_normal.dot(f[A].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(C.x,C.y,C.z)),f[A]=null):L in f||(f[L]={index0:h[y],index1:h[v],normal:_normal.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:_}=f[g];_v0.fromBufferAttribute(l,x),_v1$1.fromBufferAttribute(l,_),p.push(_v0.x,_v0.y,_v0.z),p.push(_v1$1.x,_v1$1.y,_v1$1.z)}this.setAttribute("position",new Float32BufferAttribute(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Shape extends Path{constructor(t){super(t),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(new Path().fromJSON(r))}return this}}const Earcut={triangulate:function(a,t,n=2){const i=t&&t.length,r=i?t[0]*n:a.length;let s=linkedList(a,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let l,c,h,u,d,f,p;if(i&&(s=eliminateHoles(a,t,s,n)),a.length>80*n){l=h=a[0],c=u=a[1];for(let g=n;g<r;g+=n)d=a[g],f=a[g+1],d<l&&(l=d),f<c&&(c=f),d>h&&(h=d),f>u&&(u=f);p=Math.max(h-l,u-c),p=p!==0?32767/p:0}return earcutLinked(s,o,n,l,c,p,0),o}};function linkedList(a,t,n,i,r){let s,o;if(r===signedArea(a,t,n,i)>0)for(s=t;s<n;s+=i)o=insertNode(s,a[s],a[s+1],o);else for(s=n-i;s>=t;s-=i)o=insertNode(s,a[s],a[s+1],o);return o&&equals(o,o.next)&&(removeNode(o),o=o.next),o}function filterPoints(a,t){if(!a)return a;t||(t=a);let n=a,i;do if(i=!1,!n.steiner&&(equals(n,n.next)||area(n.prev,n,n.next)===0)){if(removeNode(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function earcutLinked(a,t,n,i,r,s,o){if(!a)return;!o&&s&&indexCurve(a,i,r,s);let l=a,c,h;for(;a.prev!==a.next;){if(c=a.prev,h=a.next,s?isEarHashed(a,i,r,s):isEar(a)){t.push(c.i/n|0),t.push(a.i/n|0),t.push(h.i/n|0),removeNode(a),a=h.next,l=h.next;continue}if(a=h,a===l){o?o===1?(a=cureLocalIntersections(filterPoints(a),t,n),earcutLinked(a,t,n,i,r,s,2)):o===2&&splitEarcut(a,t,n,i,r,s):earcutLinked(filterPoints(a),t,n,i,r,s,1);break}}}function isEar(a){const t=a.prev,n=a,i=a.next;if(area(t,n,i)>=0)return!1;const r=t.x,s=n.x,o=i.x,l=t.y,c=n.y,h=i.y,u=r<s?r<o?r:o:s<o?s:o,d=l<c?l<h?l:h:c<h?c:h,f=r>s?r>o?r:o:s>o?s:o,p=l>c?l>h?l:h:c>h?c:h;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=p&&pointInTriangle(r,l,s,c,o,h,g.x,g.y)&&area(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function isEarHashed(a,t,n,i){const r=a.prev,s=a,o=a.next;if(area(r,s,o)>=0)return!1;const l=r.x,c=s.x,h=o.x,u=r.y,d=s.y,f=o.y,p=l<c?l<h?l:h:c<h?c:h,g=u<d?u<f?u:f:d<f?d:f,x=l>c?l>h?l:h:c>h?c:h,_=u>d?u>f?u:f:d>f?d:f,m=zOrder(p,g,t,n,i),y=zOrder(x,_,t,n,i);let v=a.prevZ,M=a.nextZ;for(;v&&v.z>=m&&M&&M.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==r&&v!==o&&pointInTriangle(l,u,c,d,h,f,v.x,v.y)&&area(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=_&&M!==r&&M!==o&&pointInTriangle(l,u,c,d,h,f,M.x,M.y)&&area(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=_&&v!==r&&v!==o&&pointInTriangle(l,u,c,d,h,f,v.x,v.y)&&area(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=_&&M!==r&&M!==o&&pointInTriangle(l,u,c,d,h,f,M.x,M.y)&&area(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cureLocalIntersections(a,t,n){let i=a;do{const r=i.prev,s=i.next.next;!equals(r,s)&&intersects(r,i,i.next,s)&&locallyInside(r,s)&&locallyInside(s,r)&&(t.push(r.i/n|0),t.push(i.i/n|0),t.push(s.i/n|0),removeNode(i),removeNode(i.next),i=a=s),i=i.next}while(i!==a);return filterPoints(i)}function splitEarcut(a,t,n,i,r,s){let o=a;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&isValidDiagonal(o,l)){let c=splitPolygon(o,l);o=filterPoints(o,o.next),c=filterPoints(c,c.next),earcutLinked(o,t,n,i,r,s,0),earcutLinked(c,t,n,i,r,s,0);return}l=l.next}o=o.next}while(o!==a)}function eliminateHoles(a,t,n,i){const r=[];let s,o,l,c,h;for(s=0,o=t.length;s<o;s++)l=t[s]*i,c=s<o-1?t[s+1]*i:a.length,h=linkedList(a,l,c,i,!1),h===h.next&&(h.steiner=!0),r.push(getLeftmost(h));for(r.sort(compareX),s=0;s<r.length;s++)n=eliminateHole(r[s],n);return n}function compareX(a,t){return a.x-t.x}function eliminateHole(a,t){const n=findHoleBridge(a,t);if(!n)return t;const i=splitPolygon(n,a);return filterPoints(i,i.next),filterPoints(n,n.next)}function findHoleBridge(a,t){let n=t,i=-1/0,r;const s=a.x,o=a.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==t);if(!r)return null;const l=r,c=r.x,h=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=c&&s!==n.x&&pointInTriangle(o<h?s:i,o,c,h,o<h?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),locallyInside(n,a)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&sectorContainsSector(r,n)))&&(r=n,u=d)),n=n.next;while(n!==l);return r}function sectorContainsSector(a,t){return area(a.prev,a,t.prev)<0&&area(t.next,a,a.next)<0}function indexCurve(a,t,n,i){let r=a;do r.z===0&&(r.z=zOrder(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==a);r.prevZ.nextZ=null,r.prevZ=null,sortLinked(r)}function sortLinked(a){let t,n,i,r,s,o,l,c,h=1;do{for(n=a,a=null,s=null,o=0;n;){for(o++,i=n,l=0,t=0;t<h&&(l++,i=i.nextZ,!!i);t++);for(c=h;l>0||c>0&&i;)l!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,l--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:a=r,r.prevZ=s,s=r;n=i}s.nextZ=null,h*=2}while(o>1);return a}function zOrder(a,t,n,i,r){return a=(a-n)*r|0,t=(t-i)*r|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function getLeftmost(a){let t=a,n=a;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==a);return n}function pointInTriangle(a,t,n,i,r,s,o,l){return(r-o)*(t-l)>=(a-o)*(s-l)&&(a-o)*(i-l)>=(n-o)*(t-l)&&(n-o)*(s-l)>=(r-o)*(i-l)}function isValidDiagonal(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!intersectsPolygon(a,t)&&(locallyInside(a,t)&&locallyInside(t,a)&&middleInside(a,t)&&(area(a.prev,a,t.prev)||area(a,t.prev,t))||equals(a,t)&&area(a.prev,a,a.next)>0&&area(t.prev,t,t.next)>0)}function area(a,t,n){return(t.y-a.y)*(n.x-t.x)-(t.x-a.x)*(n.y-t.y)}function equals(a,t){return a.x===t.x&&a.y===t.y}function intersects(a,t,n,i){const r=sign(area(a,t,n)),s=sign(area(a,t,i)),o=sign(area(n,i,a)),l=sign(area(n,i,t));return!!(r!==s&&o!==l||r===0&&onSegment(a,n,t)||s===0&&onSegment(a,i,t)||o===0&&onSegment(n,a,i)||l===0&&onSegment(n,t,i))}function onSegment(a,t,n){return t.x<=Math.max(a.x,n.x)&&t.x>=Math.min(a.x,n.x)&&t.y<=Math.max(a.y,n.y)&&t.y>=Math.min(a.y,n.y)}function sign(a){return a>0?1:a<0?-1:0}function intersectsPolygon(a,t){let n=a;do{if(n.i!==a.i&&n.next.i!==a.i&&n.i!==t.i&&n.next.i!==t.i&&intersects(n,n.next,a,t))return!0;n=n.next}while(n!==a);return!1}function locallyInside(a,t){return area(a.prev,a,a.next)<0?area(a,t,a.next)>=0&&area(a,a.prev,t)>=0:area(a,t,a.prev)<0||area(a,a.next,t)<0}function middleInside(a,t){let n=a,i=!1;const r=(a.x+t.x)/2,s=(a.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==a);return i}function splitPolygon(a,t){const n=new Node(a.i,a.x,a.y),i=new Node(t.i,t.x,t.y),r=a.next,s=t.prev;return a.next=t,t.prev=a,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function insertNode(a,t,n,i){const r=new Node(a,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function removeNode(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Node(a,t,n){this.i=a,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(a,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(a[o]-a[s])*(a[s+1]+a[o+1]),o=s;return r}class ShapeUtils{static area(t){const n=t.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return ShapeUtils.area(t)<0}static triangulateShape(t,n){const i=[],r=[],s=[];removeDupEndPts(t),addContour(i,t);let o=t.length;n.forEach(removeDupEndPts);for(let c=0;c<n.length;c++)r.push(o),o+=n[c].length,addContour(i,n[c]);const l=Earcut.triangulate(i,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}}function removeDupEndPts(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function addContour(a,t){for(let n=0;n<t.length;n++)a.push(t[n].x),a.push(t[n].y)}class ExtrudeGeometry extends BufferGeometry{constructor(t=new Shape([new Vector2(.5,.5),new Vector2(-.5,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];o(h)}this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("uv",new Float32BufferAttribute(s,2)),this.computeVertexNormals();function o(l){const c=[],h=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,_=n.bevelSegments!==void 0?n.bevelSegments:3;const m=n.extrudePath,y=n.UVGenerator!==void 0?n.UVGenerator:WorldUVGenerator;let v,M=!1,P,E,C,L;m&&(v=m.getSpacedPoints(u),M=!0,f=!1,P=m.computeFrenetFrames(u,!1),E=new Vector3,C=new Vector3,L=new Vector3),f||(_=0,p=0,g=0,x=0);const A=l.extractPoints(h);let S=A.shape;const I=A.holes;if(!ShapeUtils.isClockWise(S)){S=S.reverse();for(let w=0,ne=I.length;w<ne;w++){const Q=I[w];ShapeUtils.isClockWise(Q)&&(I[w]=Q.reverse())}}const N=ShapeUtils.triangulateShape(S,I),k=S;for(let w=0,ne=I.length;w<ne;w++){const Q=I[w];S=S.concat(Q)}function W(w,ne,Q){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(ne,Q)}const G=S.length,Z=N.length;function H(w,ne,Q){let le,X,be;const ce=w.x-ne.x,ge=w.y-ne.y,R=Q.x-w.x,b=Q.y-w.y,O=ce*ce+ge*ge,j=ce*b-ge*R;if(Math.abs(j)>Number.EPSILON){const J=Math.sqrt(O),K=Math.sqrt(R*R+b*b),Se=ne.x-ge/J,ae=ne.y+ce/J,pe=Q.x-b/K,Ie=Q.y+R/K,te=((pe-Se)*b-(Ie-ae)*R)/(ce*b-ge*R);le=Se+ce*te-w.x,X=ae+ge*te-w.y;const de=le*le+X*X;if(de<=2)return new Vector2(le,X);be=Math.sqrt(de/2)}else{let J=!1;ce>Number.EPSILON?R>Number.EPSILON&&(J=!0):ce<-Number.EPSILON?R<-Number.EPSILON&&(J=!0):Math.sign(ge)===Math.sign(b)&&(J=!0),J?(le=-ge,X=ce,be=Math.sqrt(O)):(le=ce,X=ge,be=Math.sqrt(O/2))}return new Vector2(le/be,X/be)}const ue=[];for(let w=0,ne=k.length,Q=ne-1,le=w+1;w<ne;w++,Q++,le++)Q===ne&&(Q=0),le===ne&&(le=0),ue[w]=H(k[w],k[Q],k[le]);const _e=[];let fe,Ue=ue.concat();for(let w=0,ne=I.length;w<ne;w++){const Q=I[w];fe=[];for(let le=0,X=Q.length,be=X-1,ce=le+1;le<X;le++,be++,ce++)be===X&&(be=0),ce===X&&(ce=0),fe[le]=H(Q[le],Q[be],Q[ce]);_e.push(fe),Ue=Ue.concat(fe)}for(let w=0;w<_;w++){const ne=w/_,Q=p*Math.cos(ne*Math.PI/2),le=g*Math.sin(ne*Math.PI/2)+x;for(let X=0,be=k.length;X<be;X++){const ce=W(k[X],ue[X],le);oe(ce.x,ce.y,-Q)}for(let X=0,be=I.length;X<be;X++){const ce=I[X];fe=_e[X];for(let ge=0,R=ce.length;ge<R;ge++){const b=W(ce[ge],fe[ge],le);oe(b.x,b.y,-Q)}}}const Ve=g+x;for(let w=0;w<G;w++){const ne=f?W(S[w],Ue[w],Ve):S[w];M?(C.copy(P.normals[0]).multiplyScalar(ne.x),E.copy(P.binormals[0]).multiplyScalar(ne.y),L.copy(v[0]).add(C).add(E),oe(L.x,L.y,L.z)):oe(ne.x,ne.y,0)}for(let w=1;w<=u;w++)for(let ne=0;ne<G;ne++){const Q=f?W(S[ne],Ue[ne],Ve):S[ne];M?(C.copy(P.normals[w]).multiplyScalar(Q.x),E.copy(P.binormals[w]).multiplyScalar(Q.y),L.copy(v[w]).add(C).add(E),oe(L.x,L.y,L.z)):oe(Q.x,Q.y,d/u*w)}for(let w=_-1;w>=0;w--){const ne=w/_,Q=p*Math.cos(ne*Math.PI/2),le=g*Math.sin(ne*Math.PI/2)+x;for(let X=0,be=k.length;X<be;X++){const ce=W(k[X],ue[X],le);oe(ce.x,ce.y,d+Q)}for(let X=0,be=I.length;X<be;X++){const ce=I[X];fe=_e[X];for(let ge=0,R=ce.length;ge<R;ge++){const b=W(ce[ge],fe[ge],le);M?oe(b.x,b.y+v[u-1].y,v[u-1].x+Q):oe(b.x,b.y,d+Q)}}}$(),ee();function $(){const w=r.length/3;if(f){let ne=0,Q=G*ne;for(let le=0;le<Z;le++){const X=N[le];we(X[2]+Q,X[1]+Q,X[0]+Q)}ne=u+_*2,Q=G*ne;for(let le=0;le<Z;le++){const X=N[le];we(X[0]+Q,X[1]+Q,X[2]+Q)}}else{for(let ne=0;ne<Z;ne++){const Q=N[ne];we(Q[2],Q[1],Q[0])}for(let ne=0;ne<Z;ne++){const Q=N[ne];we(Q[0]+G*u,Q[1]+G*u,Q[2]+G*u)}}i.addGroup(w,r.length/3-w,0)}function ee(){const w=r.length/3;let ne=0;me(k,ne),ne+=k.length;for(let Q=0,le=I.length;Q<le;Q++){const X=I[Q];me(X,ne),ne+=X.length}i.addGroup(w,r.length/3-w,1)}function me(w,ne){let Q=w.length;for(;--Q>=0;){const le=Q;let X=Q-1;X<0&&(X=w.length-1);for(let be=0,ce=u+_*2;be<ce;be++){const ge=G*be,R=G*(be+1),b=ne+le+ge,O=ne+X+ge,j=ne+X+R,J=ne+le+R;De(b,O,j,J)}}}function oe(w,ne,Q){c.push(w),c.push(ne),c.push(Q)}function we(w,ne,Q){Ce(w),Ce(ne),Ce(Q);const le=r.length/3,X=y.generateTopUV(i,r,le-3,le-2,le-1);Oe(X[0]),Oe(X[1]),Oe(X[2])}function De(w,ne,Q,le){Ce(w),Ce(ne),Ce(le),Ce(ne),Ce(Q),Ce(le);const X=r.length/3,be=y.generateSideWallUV(i,r,X-6,X-3,X-2,X-1);Oe(be[0]),Oe(be[1]),Oe(be[3]),Oe(be[1]),Oe(be[2]),Oe(be[3])}function Ce(w){r.push(c[w*3+0]),r.push(c[w*3+1]),r.push(c[w*3+2])}function Oe(w){s.push(w.x),s.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return toJSON$1(n,i,t)}static fromJSON(t,n){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const l=n[t.shapes[s]];i.push(l)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Curves[r.type]().fromJSON(r)),new ExtrudeGeometry(i,t.options)}}const WorldUVGenerator={generateTopUV:function(a,t,n,i,r){const s=t[n*3],o=t[n*3+1],l=t[i*3],c=t[i*3+1],h=t[r*3],u=t[r*3+1];return[new Vector2(s,o),new Vector2(l,c),new Vector2(h,u)]},generateSideWallUV:function(a,t,n,i,r,s){const o=t[n*3],l=t[n*3+1],c=t[n*3+2],h=t[i*3],u=t[i*3+1],d=t[i*3+2],f=t[r*3],p=t[r*3+1],g=t[r*3+2],x=t[s*3],_=t[s*3+1],m=t[s*3+2];return Math.abs(l-u)<Math.abs(o-h)?[new Vector2(o,1-c),new Vector2(h,1-d),new Vector2(f,1-g),new Vector2(x,1-m)]:[new Vector2(l,1-c),new Vector2(u,1-d),new Vector2(p,1-g),new Vector2(_,1-m)]}};function toJSON$1(a,t,n){if(n.shapes=[],Array.isArray(a))for(let i=0,r=a.length;i<r;i++){const s=a[i];n.shapes.push(s.uuid)}else n.shapes.push(a.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class IcosahedronGeometry extends PolyhedronGeometry{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new IcosahedronGeometry(t.radius,t.detail)}}class OctahedronGeometry extends PolyhedronGeometry{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new OctahedronGeometry(t.radius,t.detail)}}class RingGeometry extends BufferGeometry{constructor(t=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const l=[],c=[],h=[],u=[];let d=t;const f=(n-t)/r,p=new Vector3,g=new Vector2;for(let x=0;x<=r;x++){for(let _=0;_<=i;_++){const m=s+_/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),c.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<r;x++){const _=x*(i+1);for(let m=0;m<i;m++){const y=m+_,v=y,M=y+i+1,P=y+i+2,E=y+1;l.push(v,M,E),l.push(M,P,E)}}this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(h,3)),this.setAttribute("uv",new Float32BufferAttribute(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new RingGeometry(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ShapeGeometry extends BufferGeometry{constructor(t=new Shape([new Vector2(0,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const i=[],r=[],s=[],o=[];let l=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(l,c,u),l+=c,c=0;this.setIndex(i),this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("normal",new Float32BufferAttribute(s,3)),this.setAttribute("uv",new Float32BufferAttribute(o,2));function h(u){const d=r.length/3,f=u.extractPoints(n);let p=f.shape;const g=f.holes;ShapeUtils.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,m=g.length;_<m;_++){const y=g[_];ShapeUtils.isClockWise(y)===!0&&(g[_]=y.reverse())}const x=ShapeUtils.triangulateShape(p,g);for(let _=0,m=g.length;_<m;_++){const y=g[_];p=p.concat(y)}for(let _=0,m=p.length;_<m;_++){const y=p[_];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let _=0,m=x.length;_<m;_++){const y=x[_],v=y[0]+d,M=y[1]+d,P=y[2]+d;i.push(v,M,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return toJSON(n,t)}static fromJSON(t,n){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=n[t.shapes[r]];i.push(o)}return new ShapeGeometry(i,t.curveSegments)}}function toJSON(a,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const r=a[n];t.shapes.push(r.uuid)}else t.shapes.push(a.uuid);return t}class SphereGeometry extends BufferGeometry{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let h=0;const u=[],d=new Vector3,f=new Vector3,p=[],g=[],x=[],_=[];for(let m=0;m<=i;m++){const y=[],v=m/i;let M=0;m===0&&o===0?M=.5/n:m===i&&c===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const E=P/n;d.x=-t*Math.cos(r+E*s)*Math.sin(o+v*l),d.y=t*Math.cos(o+v*l),d.z=t*Math.sin(r+E*s)*Math.sin(o+v*l),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),_.push(E+M,1-v),y.push(h++)}u.push(y)}for(let m=0;m<i;m++)for(let y=0;y<n;y++){const v=u[m][y+1],M=u[m][y],P=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&p.push(v,M,E),(m!==i-1||c<Math.PI)&&p.push(M,P,E)}this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute(x,3)),this.setAttribute("uv",new Float32BufferAttribute(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new SphereGeometry(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class TetrahedronGeometry extends PolyhedronGeometry{constructor(t=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new TetrahedronGeometry(t.radius,t.detail)}}class TorusGeometry extends BufferGeometry{constructor(t=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],h=[],u=new Vector3,d=new Vector3,f=new Vector3;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,_=p/i*Math.PI*2;d.x=(t+n*Math.cos(_))*Math.cos(x),d.y=(t+n*Math.cos(_))*Math.sin(x),d.z=n*Math.sin(_),l.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),h.push(g/r),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,_=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,y=(r+1)*p+g;o.push(x,_,y),o.push(_,m,y)}this.setIndex(o),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(c,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new TorusGeometry(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class TorusKnotGeometry extends BufferGeometry{constructor(t=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],u=[],d=new Vector3,f=new Vector3,p=new Vector3,g=new Vector3,x=new Vector3,_=new Vector3,m=new Vector3;for(let v=0;v<=i;++v){const M=v/i*s*Math.PI*2;y(M,s,o,t,p),y(M+.01,s,o,t,g),_.subVectors(g,p),m.addVectors(g,p),x.crossVectors(_,m),m.crossVectors(x,_),x.normalize(),m.normalize();for(let P=0;P<=r;++P){const E=P/r*Math.PI*2,C=-n*Math.cos(E),L=n*Math.sin(E);d.x=p.x+(C*m.x+L*x.x),d.y=p.y+(C*m.y+L*x.y),d.z=p.z+(C*m.z+L*x.z),c.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),h.push(f.x,f.y,f.z),u.push(v/i),u.push(P/r)}}for(let v=1;v<=i;v++)for(let M=1;M<=r;M++){const P=(r+1)*(v-1)+(M-1),E=(r+1)*v+(M-1),C=(r+1)*v+M,L=(r+1)*(v-1)+M;l.push(P,E,L),l.push(E,C,L)}this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(h,3)),this.setAttribute("uv",new Float32BufferAttribute(u,2));function y(v,M,P,E,C){const L=Math.cos(v),A=Math.sin(v),S=P/M*v,I=Math.cos(S);C.x=E*(2+I)*.5*L,C.y=E*(2+I)*A*.5,C.z=E*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new TorusKnotGeometry(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class TubeGeometry extends BufferGeometry{constructor(t=new QuadraticBezierCurve3(new Vector3(-1,-1,0),new Vector3(-1,1,0),new Vector3(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const l=new Vector3,c=new Vector3,h=new Vector2;let u=new Vector3;const d=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(f,3)),this.setAttribute("uv",new Float32BufferAttribute(p,2));function x(){for(let v=0;v<n;v++)_(v);_(s===!1?n:0),y(),m()}function _(v){u=t.getPointAt(v/n,u);const M=o.normals[v],P=o.binormals[v];for(let E=0;E<=r;E++){const C=E/r*Math.PI*2,L=Math.sin(C),A=-Math.cos(C);c.x=A*M.x+L*P.x,c.y=A*M.y+L*P.y,c.z=A*M.z+L*P.z,c.normalize(),f.push(c.x,c.y,c.z),l.x=u.x+i*c.x,l.y=u.y+i*c.y,l.z=u.z+i*c.z,d.push(l.x,l.y,l.z)}}function m(){for(let v=1;v<=n;v++)for(let M=1;M<=r;M++){const P=(r+1)*(v-1)+(M-1),E=(r+1)*v+(M-1),C=(r+1)*v+M,L=(r+1)*(v-1)+M;g.push(P,E,L),g.push(E,C,L)}}function y(){for(let v=0;v<=n;v++)for(let M=0;M<=r;M++)h.x=v/n,h.y=M/r,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new TubeGeometry(new Curves[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class WireframeGeometry extends BufferGeometry{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],i=new Set,r=new Vector3,s=new Vector3;if(t.index!==null){const o=t.attributes.position,l=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){const d=c[h],f=d.start,p=d.count;for(let g=f,x=f+p;g<x;g+=3)for(let _=0;_<3;_++){const m=l.getX(g+_),y=l.getX(g+(_+1)%3);r.fromBufferAttribute(o,m),s.fromBufferAttribute(o,y),isUniqueEdge(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let l=0,c=o.count/3;l<c;l++)for(let h=0;h<3;h++){const u=3*l+h,d=3*l+(h+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),isUniqueEdge(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Float32BufferAttribute(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function isUniqueEdge(a,t,n){const i=`${a.x},${a.y},${a.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${a.x},${a.y},${a.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}var Geometries=Object.freeze({__proto__:null,BoxGeometry,CapsuleGeometry,CircleGeometry,ConeGeometry,CylinderGeometry,DodecahedronGeometry,EdgesGeometry,ExtrudeGeometry,IcosahedronGeometry,LatheGeometry,OctahedronGeometry,PlaneGeometry,PolyhedronGeometry,RingGeometry,ShapeGeometry,SphereGeometry,TetrahedronGeometry,TorusGeometry,TorusKnotGeometry,TubeGeometry,WireframeGeometry});class ShadowMaterial extends Material{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Color(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class RawShaderMaterial extends ShaderMaterial{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MeshStandardMaterial extends Material{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return clamp(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class MeshPhongMaterial extends Material{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Color(16777215),this.specular=new Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class MeshToonMaterial extends Material{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Color(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class MeshNormalMaterial extends Material{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class MeshLambertMaterial extends Material{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class MeshMatcapMaterial extends Material{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Color(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LineDashedMaterial extends LineBasicMaterial{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function convertArray(a,t,n){return!a||!n&&a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function isTypedArray(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function getKeyframeOrder(a){function t(r,s){return a[r]-a[s]}const n=a.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i}function sortedArray(a,t,n){const i=a.length,r=new a.constructor(i);for(let s=0,o=0;o!==i;++s){const l=n[s]*t;for(let c=0;c!==t;++c)r[o++]=a[l+c]}return r}function flattenJSON(a,t,n,i){let r=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=a[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=a[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=a[r++];while(s!==void 0)}function subclip(a,t,n,i,r=30){const s=a.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const h=s.tracks[c],u=h.getValueSize(),d=[],f=[];for(let p=0;p<h.times.length;++p){const g=h.times[p]*r;if(!(g<n||g>=i)){d.push(h.times[p]);for(let x=0;x<u;++x)f.push(h.values[p*u+x])}}d.length!==0&&(h.times=convertArray(d,h.times.constructor),h.values=convertArray(f,h.values.constructor),o.push(h))}s.tracks=o;let l=1/0;for(let c=0;c<s.tracks.length;++c)l>s.tracks[c].times[0]&&(l=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*l);return s.resetDuration(),s}function makeClipAdditive(a,t=0,n=a,i=30){i<=0&&(i=30);const r=n.tracks.length,s=t/i;for(let o=0;o<r;++o){const l=n.tracks[o],c=l.ValueTypeName;if(c==="bool"||c==="string")continue;const h=a.tracks.find(function(m){return m.name===l.name&&m.ValueTypeName===c});if(h===void 0)continue;let u=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let f=0;const p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);const g=l.times.length-1;let x;if(s<=l.times[0]){const m=u,y=d-u;x=l.values.slice(m,y)}else if(s>=l.times[g]){const m=g*d+u,y=m+d-u;x=l.values.slice(m,y)}else{const m=l.createInterpolant(),y=u,v=d-u;m.evaluate(s),x=m.resultBuffer.slice(y,v)}c==="quaternion"&&new Quaternion().fromArray(x).normalize().conjugate().toArray(x);const _=h.times.length;for(let m=0;m<_;++m){const y=m*p+f;if(c==="quaternion")Quaternion.multiplyQuaternionsFlat(h.values,y,x,0,h.values,y);else{const v=p-f*2;for(let M=0;M<v;++M)h.values[y+M]-=x[M]}}}return a.blendMode=AdditiveAnimationBlendMode,a}const AnimationUtils={convertArray,isTypedArray,getKeyframeOrder,sortedArray,flattenJSON,subclip,makeClipAdditive};class Interpolant{constructor(t,n,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(t<r)){for(let l=i+2;;){if(r===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=r,r=n[++i],t<r)break t}o=n.length;break n}if(!(t>=s)){const l=n[1];t<l&&(i=2,s=l);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=n[--i-1],t>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const l=i+o>>>1;t<n[l]?o=l:i=l+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class CubicInterpolant extends Interpolant{constructor(t,n,i,r){super(t,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ZeroCurvatureEnding,endingEnd:ZeroCurvatureEnding}}intervalChanged_(t,n,i){const r=this.parameterPositions;let s=t-2,o=t+1,l=r[s],c=r[o];if(l===void 0)switch(this.getSettings_().endingStart){case ZeroSlopeEnding:s=t,l=2*n-i;break;case WrapAroundEnding:s=r.length-2,l=n+r[s]-r[s+1];break;default:s=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ZeroSlopeEnding:o=t,c=2*i-n;break;case WrapAroundEnding:o=1,c=i+r[1]-r[0];break;default:o=t-1,c=n}const h=(i-n)*.5,u=this.valueSize;this._weightPrev=h/(n-l),this._weightNext=h/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),x=g*g,_=x*g,m=-f*_+2*f*x-f*g,y=(1+f)*_+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*_+(1.5+p)*x+.5*g,M=p*_-p*x;for(let P=0;P!==l;++P)s[P]=m*o[u+P]+y*o[h+P]+v*o[c+P]+M*o[d+P];return s}}class LinearInterpolant extends Interpolant{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,u=(i-n)/(r-n),d=1-u;for(let f=0;f!==l;++f)s[f]=o[h+f]*d+o[c+f]*u;return s}}class DiscreteInterpolant extends Interpolant{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class KeyframeTrack{constructor(t,n,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=convertArray(n,this.TimeBufferType),this.values=convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:convertArray(t.times,Array),values:convertArray(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new DiscreteInterpolant(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new LinearInterpolant(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new CubicInterpolant(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case InterpolateDiscrete:n=this.InterpolantFactoryMethodDiscrete;break;case InterpolateLinear:n=this.InterpolantFactoryMethodLinear;break;case InterpolateSmooth:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return InterpolateSmooth}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=t}return this}trim(t,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==s;l++){const c=i[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(r!==void 0&&isTypedArray(r))for(let l=0,c=r.length;l!==c;++l){const h=r[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===InterpolateSmooth,s=t.length-1;let o=1;for(let l=1;l<s;++l){let c=!1;const h=t[l],u=t[l+1];if(h!==u&&(l!==1||h!==t[0]))if(r)c=!0;else{const d=l*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){const x=n[d+g];if(x!==n[f+g]||x!==n[p+g]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];const d=l*i,f=o*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++o}}if(s>0){t[o]=t[s];for(let l=s*i,c=o*i,h=0;h!==i;++h)n[c+h]=n[l+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=n.slice(0,o*i)):(this.times=t,this.values=n),this}clone(){const t=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}}KeyframeTrack.prototype.TimeBufferType=Float32Array;KeyframeTrack.prototype.ValueBufferType=Float32Array;KeyframeTrack.prototype.DefaultInterpolation=InterpolateLinear;class BooleanKeyframeTrack extends KeyframeTrack{constructor(t,n,i){super(t,n,i)}}BooleanKeyframeTrack.prototype.ValueTypeName="bool";BooleanKeyframeTrack.prototype.ValueBufferType=Array;BooleanKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete;BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0;BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class ColorKeyframeTrack extends KeyframeTrack{}ColorKeyframeTrack.prototype.ValueTypeName="color";class NumberKeyframeTrack extends KeyframeTrack{}NumberKeyframeTrack.prototype.ValueTypeName="number";class QuaternionLinearInterpolant extends Interpolant{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-n)/(r-n);let h=t*l;for(let u=h+l;h!==u;h+=4)Quaternion.slerpFlat(s,0,o,h-l,o,h,c);return s}}class QuaternionKeyframeTrack extends KeyframeTrack{InterpolantFactoryMethodLinear(t){return new QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),t)}}QuaternionKeyframeTrack.prototype.ValueTypeName="quaternion";QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class StringKeyframeTrack extends KeyframeTrack{constructor(t,n,i){super(t,n,i)}}StringKeyframeTrack.prototype.ValueTypeName="string";StringKeyframeTrack.prototype.ValueBufferType=Array;StringKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete;StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0;StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class VectorKeyframeTrack extends KeyframeTrack{}VectorKeyframeTrack.prototype.ValueTypeName="vector";class AnimationClip{constructor(t="",n=-1,i=[],r=NormalAnimationBlendMode){this.name=t,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=generateUUID(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],i=t.tracks,r=1/(t.fps||1);for(let o=0,l=i.length;o!==l;++o)n.push(parseKeyframeTrack(i[o]).scale(r));const s=new this(t.name,t.duration,n,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const n=[],i=t.tracks,r={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(KeyframeTrack.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(t,n,i,r){const s=n.length,o=[];for(let l=0;l<s;l++){let c=[],h=[];c.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const u=getKeyframeOrder(c);c=sortedArray(c,1,u),h=sortedArray(h,1,u),!r&&c[0]===0&&(c.push(s),h.push(h[0])),o.push(new NumberKeyframeTrack(".morphTargetInfluences["+n[l].name+"]",c,h).scale(1/i))}return new this(t,-1,o)}static findByName(t,n){let i=t;if(!Array.isArray(t)){const r=t;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(t,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,c=t.length;l<c;l++){const h=t[l],u=h.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(h)}}const o=[];for(const l in r)o.push(this.CreateFromMorphTargetSequence(l,r[l],n,i));return o}static parseAnimation(t,n){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,g,x){if(p.length!==0){const _=[],m=[];flattenJSON(p,_,m,g),_.length!==0&&x.push(new d(f,_,m))}},r=[],s=t.name||"default",o=t.fps||30,l=t.blendMode;let c=t.length||-1;const h=t.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(const x in p){const _=[],m=[];for(let y=0;y!==f[g].morphTargets.length;++y){const v=f[g];_.push(v.time),m.push(v.morphTarget===x?1:0)}r.push(new NumberKeyframeTrack(".morphTargetInfluence["+x+"]",_,m))}c=p.length*o}else{const p=".bones["+n[d].name+"]";i(VectorKeyframeTrack,p+".position",f,"pos",r),i(QuaternionKeyframeTrack,p+".quaternion",f,"rot",r),i(VectorKeyframeTrack,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,l)}resetDuration(){const t=this.tracks;let n=0;for(let i=0,r=t.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function getTrackTypeForValueTypeName(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return NumberKeyframeTrack;case"vector":case"vector2":case"vector3":case"vector4":return VectorKeyframeTrack;case"color":return ColorKeyframeTrack;case"quaternion":return QuaternionKeyframeTrack;case"bool":case"boolean":return BooleanKeyframeTrack;case"string":return StringKeyframeTrack}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function parseKeyframeTrack(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=getTrackTypeForValueTypeName(a.type);if(a.times===void 0){const n=[],i=[];flattenJSON(a.keys,n,i,"value"),a.times=n,a.values=i}return t.parse!==void 0?t.parse(a):new t(a.name,a.times,a.values,a.interpolation)}const Cache={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class LoadingManager{constructor(t,n,i){const r=this;let s=!1,o=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){l++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,l),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const p=h[d],g=h[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(t){this.manager=t!==void 0?t:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const loading={};class HttpError extends Error{constructor(t,n){super(t),this.response=n}}class FileLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Cache.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(s),this.manager.itemEnd(t)},0),s;if(loading[t]!==void 0){loading[t].push({onLoad:n,onProgress:i,onError:r});return}loading[t]=[],loading[t].push({onLoad:n,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=loading[t],d=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let x=0;const _=new ReadableStream({start(m){y();function y(){d.read().then(({done:v,value:M})=>{if(v)m.close();else{x+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let E=0,C=u.length;E<C;E++){const L=u[E];L.onProgress&&L.onProgress(P)}m.enqueue(M),y()}},v=>{m.error(v)})}}});return new Response(_)}else throw new HttpError(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,l));case"json":return h.json();default:if(l===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return h.arrayBuffer().then(g=>p.decode(g))}}}).then(h=>{Cache.add(t,h);const u=loading[t];delete loading[t];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{const u=loading[t];if(u===void 0)throw this.manager.itemError(t),h;delete loading[t];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class AnimationLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=this,o=new FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{n(s.parse(JSON.parse(l)))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},i,r)}parse(t){const n=[];for(let i=0;i<t.length;i++){const r=AnimationClip.parse(t[i]);n.push(r)}return n}}class CompressedTextureLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=this,o=[],l=new CompressedTexture,c=new FileLoader(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let h=0;function u(d){c.load(t[d],function(f){const p=s.parse(f,!0);o[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},h+=1,h===6&&(p.mipmapCount===1&&(l.minFilter=LinearFilter),l.image=o,l.format=p.format,l.needsUpdate=!0,n&&n(l))},i,r)}if(Array.isArray(t))for(let d=0,f=t.length;d<f;++d)u(d);else c.load(t,function(d){const f=s.parse(d,!0);if(f.isCubemap){const p=f.mipmaps.length/f.mipmapCount;for(let g=0;g<p;g++){o[g]={mipmaps:[]};for(let x=0;x<f.mipmapCount;x++)o[g].mipmaps.push(f.mipmaps[g*f.mipmapCount+x]),o[g].format=f.format,o[g].width=f.width,o[g].height=f.height}l.image=o}else l.image.width=f.width,l.image.height=f.height,l.mipmaps=f.mipmaps;f.mipmapCount===1&&(l.minFilter=LinearFilter),l.format=f.format,l.needsUpdate=!0,n&&n(l)},i,r);return l}}class ImageLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Cache.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o;const l=createElementNS("img");function c(){u(),Cache.add(t,this),n&&n(this),s.manager.itemEnd(t)}function h(d){u(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(t),l.src=t,l}}class CubeTextureLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=new CubeTexture;s.colorSpace=SRGBColorSpace;const o=new ImageLoader(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let l=0;function c(h){o.load(t[h],function(u){s.images[h]=u,l++,l===6&&(s.needsUpdate=!0,n&&n(s))},void 0,r)}for(let h=0;h<t.length;++h)c(h);return s}}class DataTextureLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=this,o=new DataTexture,l=new FileLoader(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(s.withCredentials),l.load(t,function(c){let h;try{h=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:ClampToEdgeWrapping,o.wrapT=h.wrapT!==void 0?h.wrapT:ClampToEdgeWrapping,o.magFilter=h.magFilter!==void 0?h.magFilter:LinearFilter,o.minFilter=h.minFilter!==void 0?h.minFilter:LinearFilter,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=LinearMipmapLinearFilter),h.mipmapCount===1&&(o.minFilter=LinearFilter),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,n&&n(o,h)},i,r),o}}class TextureLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=new Texture,o=new ImageLoader(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(l){s.image=l,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Light extends Object3D{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class HemisphereLight extends Light{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Color(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(t.matrixWorld),n.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(_lookTarget$1),n.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_projScreenMatrix$1)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class SpotLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,i=RAD2DEG*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class SpotLight extends Light{constructor(t,n,i=0,r=Math.PI/3,s=0,o=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new SpotLightShadow}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(t.matrixWorld),i.position.copy(_lightPositionWorld),_lookTarget.copy(i.position),_lookTarget.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(_lookTarget),i.updateMatrixWorld(),r.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class AmbientLight extends Light{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class RectAreaLight extends Light{constructor(t,n,i=10,r=10){super(t,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const n=super.toJSON(t);return n.object.width=this.width,n.object.height=this.height,n}}class SphericalHarmonics3{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new Vector3)}set(t){for(let n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,n){const i=t.x,r=t.y,s=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(t,n){const i=t.x,r=t.y,s=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(t){for(let n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this}addScaledSH(t,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],n);return this}scale(t){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this}lerp(t,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],n);return this}equals(t){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(t,n+r*3);return this}toArray(t=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(t,n+r*3);return t}static getBasisAt(t,n){const i=t.x,r=t.y,s=t.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}class LightProbe extends Light{constructor(t=new SphericalHarmonics3,n=1){super(void 0,n),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const n=super.toJSON(t);return n.object.sh=this.sh.toArray(),n}}class MaterialLoader extends Loader{constructor(t){super(t),this.textures={}}load(t,n,i,r){const s=this,o=new FileLoader(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(l){try{n(s.parse(JSON.parse(l)))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},i,r)}parse(t){const n=this.textures;function i(s){return n[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),n[s]}const r=MaterialLoader.createMaterialFromType(t.type);if(t.uuid!==void 0&&(r.uuid=t.uuid),t.name!==void 0&&(r.name=t.name),t.color!==void 0&&r.color!==void 0&&r.color.setHex(t.color),t.roughness!==void 0&&(r.roughness=t.roughness),t.metalness!==void 0&&(r.metalness=t.metalness),t.sheen!==void 0&&(r.sheen=t.sheen),t.sheenColor!==void 0&&(r.sheenColor=new Color().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(r.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(t.emissive),t.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(t.specular),t.specularIntensity!==void 0&&(r.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(r.shininess=t.shininess),t.clearcoat!==void 0&&(r.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(r.dispersion=t.dispersion),t.iridescence!==void 0&&(r.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(r.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(r.transmission=t.transmission),t.thickness!==void 0&&(r.thickness=t.thickness),t.attenuationDistance!==void 0&&(r.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(r.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(r.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(r.fog=t.fog),t.flatShading!==void 0&&(r.flatShading=t.flatShading),t.blending!==void 0&&(r.blending=t.blending),t.combine!==void 0&&(r.combine=t.combine),t.side!==void 0&&(r.side=t.side),t.shadowSide!==void 0&&(r.shadowSide=t.shadowSide),t.opacity!==void 0&&(r.opacity=t.opacity),t.transparent!==void 0&&(r.transparent=t.transparent),t.alphaTest!==void 0&&(r.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(r.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(r.depthFunc=t.depthFunc),t.depthTest!==void 0&&(r.depthTest=t.depthTest),t.depthWrite!==void 0&&(r.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(r.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(r.blendSrc=t.blendSrc),t.blendDst!==void 0&&(r.blendDst=t.blendDst),t.blendEquation!==void 0&&(r.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(r.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(r.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(r.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(r.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(r.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(r.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(r.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(r.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(r.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(r.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(r.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(r.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(r.rotation=t.rotation),t.linewidth!==void 0&&(r.linewidth=t.linewidth),t.dashSize!==void 0&&(r.dashSize=t.dashSize),t.gapSize!==void 0&&(r.gapSize=t.gapSize),t.scale!==void 0&&(r.scale=t.scale),t.polygonOffset!==void 0&&(r.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(r.dithering=t.dithering),t.alphaToCoverage!==void 0&&(r.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(r.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(r.visible=t.visible),t.toneMapped!==void 0&&(r.toneMapped=t.toneMapped),t.userData!==void 0&&(r.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?r.vertexColors=t.vertexColors>0:r.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const s in t.uniforms){const o=t.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=i(o.value);break;case"c":r.uniforms[s].value=new Color().setHex(o.value);break;case"v2":r.uniforms[s].value=new Vector2().fromArray(o.value);break;case"v3":r.uniforms[s].value=new Vector3().fromArray(o.value);break;case"v4":r.uniforms[s].value=new Vector4().fromArray(o.value);break;case"m3":r.uniforms[s].value=new Matrix3().fromArray(o.value);break;case"m4":r.uniforms[s].value=new Matrix4().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(t.defines!==void 0&&(r.defines=t.defines),t.vertexShader!==void 0&&(r.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(r.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(r.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)r.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(r.lights=t.lights),t.clipping!==void 0&&(r.clipping=t.clipping),t.size!==void 0&&(r.size=t.size),t.sizeAttenuation!==void 0&&(r.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(r.map=i(t.map)),t.matcap!==void 0&&(r.matcap=i(t.matcap)),t.alphaMap!==void 0&&(r.alphaMap=i(t.alphaMap)),t.bumpMap!==void 0&&(r.bumpMap=i(t.bumpMap)),t.bumpScale!==void 0&&(r.bumpScale=t.bumpScale),t.normalMap!==void 0&&(r.normalMap=i(t.normalMap)),t.normalMapType!==void 0&&(r.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new Vector2().fromArray(s)}return t.displacementMap!==void 0&&(r.displacementMap=i(t.displacementMap)),t.displacementScale!==void 0&&(r.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(r.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(r.roughnessMap=i(t.roughnessMap)),t.metalnessMap!==void 0&&(r.metalnessMap=i(t.metalnessMap)),t.emissiveMap!==void 0&&(r.emissiveMap=i(t.emissiveMap)),t.emissiveIntensity!==void 0&&(r.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(r.specularMap=i(t.specularMap)),t.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(t.specularIntensityMap)),t.specularColorMap!==void 0&&(r.specularColorMap=i(t.specularColorMap)),t.envMap!==void 0&&(r.envMap=i(t.envMap)),t.envMapRotation!==void 0&&r.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(r.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(r.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(r.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(r.lightMap=i(t.lightMap)),t.lightMapIntensity!==void 0&&(r.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(r.aoMap=i(t.aoMap)),t.aoMapIntensity!==void 0&&(r.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(r.gradientMap=i(t.gradientMap)),t.clearcoatMap!==void 0&&(r.clearcoatMap=i(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new Vector2().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(r.iridescenceMap=i(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(r.transmissionMap=i(t.transmissionMap)),t.thicknessMap!==void 0&&(r.thicknessMap=i(t.thicknessMap)),t.anisotropyMap!==void 0&&(r.anisotropyMap=i(t.anisotropyMap)),t.sheenColorMap!==void 0&&(r.sheenColorMap=i(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(t.sheenRoughnessMap)),r}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const n={ShadowMaterial,SpriteMaterial,RawShaderMaterial,ShaderMaterial,PointsMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshPhongMaterial,MeshToonMaterial,MeshNormalMaterial,MeshLambertMaterial,MeshDepthMaterial,MeshDistanceMaterial,MeshBasicMaterial,MeshMatcapMaterial,LineDashedMaterial,LineBasicMaterial,Material};return new n[t]}}class LoaderUtils{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let n="";for(let i=0,r=t.length;i<r;i++)n+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}class InstancedBufferGeometry extends BufferGeometry{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class BufferGeometryLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=this,o=new FileLoader(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(l){try{n(s.parse(JSON.parse(l)))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},i,r)}parse(t){const n={},i={};function r(p,g){if(n[g]!==void 0)return n[g];const _=p.interleavedBuffers[g],m=s(p,_.buffer),y=getTypedArray(_.type,m),v=new InterleavedBuffer(y,_.stride);return v.uuid=_.uuid,n[g]=v,v}function s(p,g){if(i[g]!==void 0)return i[g];const _=p.arrayBuffers[g],m=new Uint32Array(_).buffer;return i[g]=m,m}const o=t.isInstancedBufferGeometry?new InstancedBufferGeometry:new BufferGeometry,l=t.data.index;if(l!==void 0){const p=getTypedArray(l.type,l.array);o.setIndex(new BufferAttribute(p,1))}const c=t.data.attributes;for(const p in c){const g=c[p];let x;if(g.isInterleavedBufferAttribute){const _=r(t.data,g.data);x=new InterleavedBufferAttribute(_,g.itemSize,g.offset,g.normalized)}else{const _=getTypedArray(g.type,g.array),m=g.isInstancedBufferAttribute?InstancedBufferAttribute:BufferAttribute;x=new m(_,g.itemSize,g.normalized)}g.name!==void 0&&(x.name=g.name),g.usage!==void 0&&x.setUsage(g.usage),o.setAttribute(p,x)}const h=t.data.morphAttributes;if(h)for(const p in h){const g=h[p],x=[];for(let _=0,m=g.length;_<m;_++){const y=g[_];let v;if(y.isInterleavedBufferAttribute){const M=r(t.data,y.data);v=new InterleavedBufferAttribute(M,y.itemSize,y.offset,y.normalized)}else{const M=getTypedArray(y.type,y.array);v=new BufferAttribute(M,y.itemSize,y.normalized)}y.name!==void 0&&(v.name=y.name),x.push(v)}o.morphAttributes[p]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let p=0,g=d.length;p!==g;++p){const x=d[p];o.addGroup(x.start,x.count,x.materialIndex)}const f=t.data.boundingSphere;if(f!==void 0){const p=new Vector3;f.center!==void 0&&p.fromArray(f.center),o.boundingSphere=new Sphere(p,f.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}class ObjectLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=this,o=this.path===""?LoaderUtils.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const l=new FileLoader(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){let h=null;try{h=JSON.parse(c)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+t+".",d.message);return}const u=h.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}s.parse(h,n)},i,r)}async loadAsync(t,n){const i=this,r=this.path===""?LoaderUtils.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||r;const s=new FileLoader(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(t,n),l=JSON.parse(o),c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await i.parseAsync(l)}parse(t,n){const i=this.parseAnimations(t.animations),r=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,r),o=this.parseImages(t.images,function(){n!==void 0&&n(h)}),l=this.parseTextures(t.textures,o),c=this.parseMaterials(t.materials,l),h=this.parseObject(t.object,s,c,l,i),u=this.parseSkeletons(t.skeletons,h);if(this.bindSkeletons(h,u),this.bindLightTargets(h),n!==void 0){let d=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){d=!0;break}d===!1&&n(h)}return h}async parseAsync(t){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),s=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,s),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,h),this.bindLightTargets(c),c}parseShapes(t){const n={};if(t!==void 0)for(let i=0,r=t.length;i<r;i++){const s=new Shape().fromJSON(t[i]);n[s.uuid]=s}return n}parseSkeletons(t,n){const i={},r={};if(n.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),t!==void 0)for(let s=0,o=t.length;s<o;s++){const l=new Skeleton().fromJSON(t[s],r);i[l.uuid]=l}return i}parseGeometries(t,n){const i={};if(t!==void 0){const r=new BufferGeometryLoader;for(let s=0,o=t.length;s<o;s++){let l;const c=t[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":l=r.parse(c);break;default:c.type in Geometries?l=Geometries[c.type].fromJSON(c,n):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}l.uuid=c.uuid,c.name!==void 0&&(l.name=c.name),c.userData!==void 0&&(l.userData=c.userData),i[c.uuid]=l}}return i}parseMaterials(t,n){const i={},r={};if(t!==void 0){const s=new MaterialLoader;s.setTextures(n);for(let o=0,l=t.length;o<l;o++){const c=t[o];i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(t){const n={};if(t!==void 0)for(let i=0;i<t.length;i++){const r=t[i],s=AnimationClip.parse(r);n[s.uuid]=s}return n}parseImages(t,n){const i=this,r={};let s;function o(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function l(c){if(typeof c=="string"){const h=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:i.resourcePath+h;return o(u)}else return c.data?{data:getTypedArray(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new LoadingManager(n);s=new ImageLoader(c),s.setCrossOrigin(this.crossOrigin);for(let h=0,u=t.length;h<u;h++){const d=t[h],f=d.url;if(Array.isArray(f)){const p=[];for(let g=0,x=f.length;g<x;g++){const _=f[g],m=l(_);m!==null&&(m instanceof HTMLImageElement?p.push(m):p.push(new DataTexture(m.data,m.width,m.height)))}r[d.uuid]=new Source(p)}else{const p=l(d.url);r[d.uuid]=new Source(p)}}}return r}async parseImagesAsync(t){const n=this,i={};let r;async function s(o){if(typeof o=="string"){const l=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return await r.loadAsync(c)}else return o.data?{data:getTypedArray(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){r=new ImageLoader(this.manager),r.setCrossOrigin(this.crossOrigin);for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.url;if(Array.isArray(h)){const u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d],g=await s(p);g!==null&&(g instanceof HTMLImageElement?u.push(g):u.push(new DataTexture(g.data,g.width,g.height)))}i[c.uuid]=new Source(u)}else{const u=await s(c.url);i[c.uuid]=new Source(u)}}}return i}parseTextures(t,n){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(t!==void 0)for(let s=0,o=t.length;s<o;s++){const l=t[s];l.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',l.uuid),n[l.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",l.image);const c=n[l.image],h=c.data;let u;Array.isArray(h)?(u=new CubeTexture,h.length===6&&(u.needsUpdate=!0)):(h&&h.data?u=new DataTexture:u=new Texture,h&&(u.needsUpdate=!0)),u.source=c,u.uuid=l.uuid,l.name!==void 0&&(u.name=l.name),l.mapping!==void 0&&(u.mapping=i(l.mapping,TEXTURE_MAPPING)),l.channel!==void 0&&(u.channel=l.channel),l.offset!==void 0&&u.offset.fromArray(l.offset),l.repeat!==void 0&&u.repeat.fromArray(l.repeat),l.center!==void 0&&u.center.fromArray(l.center),l.rotation!==void 0&&(u.rotation=l.rotation),l.wrap!==void 0&&(u.wrapS=i(l.wrap[0],TEXTURE_WRAPPING),u.wrapT=i(l.wrap[1],TEXTURE_WRAPPING)),l.format!==void 0&&(u.format=l.format),l.internalFormat!==void 0&&(u.internalFormat=l.internalFormat),l.type!==void 0&&(u.type=l.type),l.colorSpace!==void 0&&(u.colorSpace=l.colorSpace),l.minFilter!==void 0&&(u.minFilter=i(l.minFilter,TEXTURE_FILTER)),l.magFilter!==void 0&&(u.magFilter=i(l.magFilter,TEXTURE_FILTER)),l.anisotropy!==void 0&&(u.anisotropy=l.anisotropy),l.flipY!==void 0&&(u.flipY=l.flipY),l.generateMipmaps!==void 0&&(u.generateMipmaps=l.generateMipmaps),l.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=l.premultiplyAlpha),l.unpackAlignment!==void 0&&(u.unpackAlignment=l.unpackAlignment),l.compareFunction!==void 0&&(u.compareFunction=l.compareFunction),l.userData!==void 0&&(u.userData=l.userData),r[l.uuid]=u}return r}parseObject(t,n,i,r,s){let o;function l(f){return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),n[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const p=[];for(let g=0,x=f.length;g<x;g++){const _=f[g];i[_]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",_),p.push(i[_])}return p}return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),i[f]}}function h(f){return r[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),r[f]}let u,d;switch(t.type){case"Scene":o=new Scene,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new Color(t.background):o.background=h(t.background)),t.environment!==void 0&&(o.environment=h(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Fog(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new FogExp2(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new PerspectiveCamera(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new OrthographicCamera(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new AmbientLight(t.color,t.intensity);break;case"DirectionalLight":o=new DirectionalLight(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new PointLight(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new RectAreaLight(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new SpotLight(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new HemisphereLight(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new LightProbe().fromJSON(t);break;case"SkinnedMesh":u=l(t.geometry),d=c(t.material),o=new SkinnedMesh(u,d),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=l(t.geometry),d=c(t.material),o=new Mesh(u,d);break;case"InstancedMesh":u=l(t.geometry),d=c(t.material);const f=t.count,p=t.instanceMatrix,g=t.instanceColor;o=new InstancedMesh(u,d,f),o.instanceMatrix=new InstancedBufferAttribute(new Float32Array(p.array),16),g!==void 0&&(o.instanceColor=new InstancedBufferAttribute(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":u=l(t.geometry),d=c(t.material),o=new BatchedMesh(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(x=>{const _=new Box3;_.min.fromArray(x.boxMin),_.max.fromArray(x.boxMax);const m=new Sphere;return m.radius=x.sphereRadius,m.center.fromArray(x.sphereCenter),{boxInitialized:x.boxInitialized,box:_,sphereInitialized:x.sphereInitialized,sphere:m}}),o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=h(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=h(t.colorsTexture.uuid));break;case"LOD":o=new LOD;break;case"Line":o=new Line(l(t.geometry),c(t.material));break;case"LineLoop":o=new LineLoop(l(t.geometry),c(t.material));break;case"LineSegments":o=new LineSegments(l(t.geometry),c(t.material));break;case"PointCloud":case"Points":o=new Points(l(t.geometry),c(t.material));break;case"Sprite":o=new Sprite(c(t.material));break;case"Group":o=new Group;break;case"Bone":o=new Bone;break;default:o=new Object3D}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const f=t.children;for(let p=0;p<f.length;p++)o.add(this.parseObject(f[p],n,i,r,s))}if(t.animations!==void 0){const f=t.animations;for(let p=0;p<f.length;p++){const g=f[p];o.animations.push(s[g])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const f=t.levels;for(let p=0;p<f.length;p++){const g=f[p],x=o.getObjectByProperty("uuid",g.object);x!==void 0&&o.addLevel(x,g.distance,g.hysteresis)}}return o}bindSkeletons(t,n){Object.keys(n).length!==0&&t.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=n[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}bindLightTargets(t){t.traverse(function(n){if(n.isDirectionalLight||n.isSpotLight){const i=n.target,r=t.getObjectByProperty("uuid",i);r!==void 0?n.target=r:n.target=new Object3D}})}}const TEXTURE_MAPPING={UVMapping,CubeReflectionMapping,CubeRefractionMapping,EquirectangularReflectionMapping,EquirectangularRefractionMapping,CubeUVReflectionMapping},TEXTURE_WRAPPING={RepeatWrapping,ClampToEdgeWrapping,MirroredRepeatWrapping},TEXTURE_FILTER={NearestFilter,NearestMipmapNearestFilter,NearestMipmapLinearFilter,LinearFilter,LinearMipmapNearestFilter,LinearMipmapLinearFilter};class ImageBitmapLoader extends Loader{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Cache.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(h=>{n&&n(h),s.manager.itemEnd(t)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(t,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Cache.add(t,h),n&&n(h),s.manager.itemEnd(t),h}).catch(function(h){r&&r(h),Cache.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Cache.add(t,c),s.manager.itemStart(t)}}let _context;class AudioContext{static getContext(){return _context===void 0&&(_context=new(window.AudioContext||window.webkitAudioContext)),_context}static setContext(t){_context=t}}class AudioLoader extends Loader{constructor(t){super(t)}load(t,n,i,r){const s=this,o=new FileLoader(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){try{const h=c.slice(0);AudioContext.getContext().decodeAudioData(h,function(d){n(d)}).catch(l)}catch(h){l(h)}},i,r);function l(c){r?r(c):console.error(c),s.manager.itemError(t)}}}const _eyeRight=new Matrix4,_eyeLeft=new Matrix4,_projectionMatrix=new Matrix4;class StereoCamera{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new PerspectiveCamera,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new PerspectiveCamera,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const n=this._cache;if(n.focus!==t.focus||n.fov!==t.fov||n.aspect!==t.aspect*this.aspect||n.near!==t.near||n.far!==t.far||n.zoom!==t.zoom||n.eyeSep!==this.eyeSep){n.focus=t.focus,n.fov=t.fov,n.aspect=t.aspect*this.aspect,n.near=t.near,n.far=t.far,n.zoom=t.zoom,n.eyeSep=this.eyeSep,_projectionMatrix.copy(t.projectionMatrix);const r=n.eyeSep/2,s=r*n.near/n.focus,o=n.near*Math.tan(DEG2RAD*n.fov*.5)/n.zoom;let l,c;_eyeLeft.elements[12]=-r,_eyeRight.elements[12]=r,l=-o*n.aspect+s,c=o*n.aspect+s,_projectionMatrix.elements[0]=2*n.near/(c-l),_projectionMatrix.elements[8]=(c+l)/(c-l),this.cameraL.projectionMatrix.copy(_projectionMatrix),l=-o*n.aspect-s,c=o*n.aspect-s,_projectionMatrix.elements[0]=2*n.near/(c-l),_projectionMatrix.elements[8]=(c+l)/(c-l),this.cameraR.projectionMatrix.copy(_projectionMatrix)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(_eyeLeft),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(_eyeRight)}}class Clock{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function now(){return(typeof performance>"u"?Date:performance).now()}const _position$1=new Vector3,_quaternion$1=new Quaternion,_scale$1=new Vector3,_orientation$1=new Vector3;class AudioListener extends Object3D{constructor(){super(),this.type="AudioListener",this.context=AudioContext.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Clock}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_position$1,_quaternion$1,_scale$1),_orientation$1.set(0,0,-1).applyQuaternion(_quaternion$1),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(_position$1.x,r),n.positionY.linearRampToValueAtTime(_position$1.y,r),n.positionZ.linearRampToValueAtTime(_position$1.z,r),n.forwardX.linearRampToValueAtTime(_orientation$1.x,r),n.forwardY.linearRampToValueAtTime(_orientation$1.y,r),n.forwardZ.linearRampToValueAtTime(_orientation$1.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(_position$1.x,_position$1.y,_position$1.z),n.setOrientation(_orientation$1.x,_orientation$1.y,_orientation$1.z,i.x,i.y,i.z)}}class Audio extends Object3D{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const _position=new Vector3,_quaternion=new Quaternion,_scale=new Vector3,_orientation=new Vector3;class PositionalAudio extends Audio{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,n,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=n,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_position,_quaternion,_scale),_orientation.set(0,0,1).applyQuaternion(_quaternion);const n=this.panner;if(n.positionX){const i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(_position.x,i),n.positionY.linearRampToValueAtTime(_position.y,i),n.positionZ.linearRampToValueAtTime(_position.z,i),n.orientationX.linearRampToValueAtTime(_orientation.x,i),n.orientationY.linearRampToValueAtTime(_orientation.y,i),n.orientationZ.linearRampToValueAtTime(_orientation.z,i)}else n.setPosition(_position.x,_position.y,_position.z),n.setOrientation(_orientation.x,_orientation.y,_orientation.z)}}class AudioAnalyser{constructor(t,n=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const n=this.getFrequencyData();for(let i=0;i<n.length;i++)t+=n[i];return t/n.length}}class PropertyMixer{constructor(t,n,i){this.binding=t,this.valueSize=i;let r,s,o;switch(n){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,n){const i=this.buffer,r=this.valueSize,s=t*r+r;let o=this.cumulativeWeight;if(o===0){for(let l=0;l!==r;++l)i[s+l]=i[l];o=n}else{o+=n;const l=n/o;this._mixBufferRegion(i,s,0,l,r)}this.cumulativeWeight=o}accumulateAdditive(t){const n=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(n,r,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const n=this.valueSize,i=this.buffer,r=t*n+n,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=n*this._origIndex;this._mixBufferRegion(i,r,c,1-s,n)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*n,1,n);for(let c=n,h=n+n;c!==h;++c)if(i[c]!==i[c+n]){l.setValue(i,r);break}}saveOriginalState(){const t=this.binding,n=this.buffer,i=this.valueSize,r=i*this._origIndex;t.getValue(n,r);for(let s=i,o=r;s!==o;++s)n[s]=n[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,n=t+this.valueSize;for(let i=t;i<n;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,n=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[n+i]=this.buffer[t+i]}_select(t,n,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)t[n+o]=t[i+o]}_slerp(t,n,i,r){Quaternion.slerpFlat(t,n,t,n,t,i,r)}_slerpAdditive(t,n,i,r,s){const o=this._workIndex*s;Quaternion.multiplyQuaternionsFlat(t,o,t,n,t,i),Quaternion.slerpFlat(t,n,t,n,t,o,r)}_lerp(t,n,i,r,s){const o=1-r;for(let l=0;l!==s;++l){const c=n+l;t[c]=t[c]*o+t[i+l]*r}}_lerpAdditive(t,n,i,r,s){for(let o=0;o!==s;++o){const l=n+o;t[l]=t[l]+t[i+o]*r}}}const _RESERVED_CHARS_RE="\\[\\]\\.:\\/",_reservedRe=new RegExp("["+_RESERVED_CHARS_RE+"]","g"),_wordChar="[^"+_RESERVED_CHARS_RE+"]",_wordCharOrDot="[^"+_RESERVED_CHARS_RE.replace("\\.","")+"]",_directoryRe=/((?:WC+[\/:])*)/.source.replace("WC",_wordChar),_nodeRe=/(WCOD+)?/.source.replace("WCOD",_wordCharOrDot),_objectRe=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_wordChar),_propertyRe=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_wordChar),_trackRe=new RegExp("^"+_directoryRe+_nodeRe+_objectRe+_propertyRe+"$"),_supportedObjectNames=["material","materials","bones","map"];class Composite{constructor(t,n,i){const r=i||PropertyBinding.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,n)}setValue(t,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class PropertyBinding{constructor(t,n,i){this.path=n,this.parsedPath=i||PropertyBinding.parseTrackName(n),this.node=PropertyBinding.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new PropertyBinding.Composite(t,n,i):new PropertyBinding(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_reservedRe,"")}static parseTrackName(t){const n=_trackRe.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);_supportedObjectNames.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===n||l.uuid===n)return l;const c=i(l.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(t||(t=PropertyBinding.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const o=t[r];if(o===void 0){const h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}PropertyBinding.Composite=Composite;PropertyBinding.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};PropertyBinding.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};PropertyBinding.prototype.GetterByBindingType=[PropertyBinding.prototype._getValue_direct,PropertyBinding.prototype._getValue_array,PropertyBinding.prototype._getValue_arrayElement,PropertyBinding.prototype._getValue_toArray];PropertyBinding.prototype.SetterByBindingTypeAndVersioning=[[PropertyBinding.prototype._setValue_direct,PropertyBinding.prototype._setValue_direct_setNeedsUpdate,PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_array,PropertyBinding.prototype._setValue_array_setNeedsUpdate,PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_arrayElement,PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_fromArray,PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class AnimationObjectGroup{constructor(){this.isAnimationObjectGroup=!0,this.uuid=generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let i=0,r=arguments.length;i!==r;++i)t[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const n=this;this.stats={objects:{get total(){return n._objects.length},get inUse(){return this.total-n.nCachedObjects_}},get bindingsPerObject(){return n._bindings.length}}}add(){const t=this._objects,n=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length;let l,c=t.length,h=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const f=arguments[u],p=f.uuid;let g=n[p];if(g===void 0){g=c++,n[p]=g,t.push(f);for(let x=0,_=o;x!==_;++x)s[x].push(new PropertyBinding(f,i[x],r[x]))}else if(g<h){l=t[g];const x=--h,_=t[x];n[_.uuid]=g,t[g]=_,n[p]=x,t[x]=f;for(let m=0,y=o;m!==y;++m){const v=s[m],M=v[x];let P=v[g];v[g]=M,P===void 0&&(P=new PropertyBinding(f,i[m],r[m])),v[x]=P}}else t[g]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const t=this._objects,n=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=n[h];if(u!==void 0&&u>=s){const d=s++,f=t[d];n[f.uuid]=u,t[u]=f,n[h]=d,t[d]=c;for(let p=0,g=r;p!==g;++p){const x=i[p],_=x[d],m=x[u];x[u]=_,x[d]=m}}}this.nCachedObjects_=s}uncache(){const t=this._objects,n=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_,o=t.length;for(let l=0,c=arguments.length;l!==c;++l){const h=arguments[l],u=h.uuid,d=n[u];if(d!==void 0)if(delete n[u],d<s){const f=--s,p=t[f],g=--o,x=t[g];n[p.uuid]=d,t[d]=p,n[x.uuid]=f,t[f]=x,t.pop();for(let _=0,m=r;_!==m;++_){const y=i[_],v=y[f],M=y[g];y[d]=v,y[f]=M,y.pop()}}else{const f=--o,p=t[f];f>0&&(n[p.uuid]=d),t[d]=p,t.pop();for(let g=0,x=r;g!==x;++g){const _=i[g];_[d]=_[f],_.pop()}}}this.nCachedObjects_=s}subscribe_(t,n){const i=this._bindingsIndicesByPath;let r=i[t];const s=this._bindings;if(r!==void 0)return s[r];const o=this._paths,l=this._parsedPaths,c=this._objects,h=c.length,u=this.nCachedObjects_,d=new Array(h);r=s.length,i[t]=r,o.push(t),l.push(n),s.push(d);for(let f=u,p=c.length;f!==p;++f){const g=c[f];d[f]=new PropertyBinding(g,t,n)}return d}unsubscribe_(t){const n=this._bindingsIndicesByPath,i=n[t];if(i!==void 0){const r=this._paths,s=this._parsedPaths,o=this._bindings,l=o.length-1,c=o[l],h=t[l];n[h]=i,o[i]=c,o.pop(),s[i]=s[l],s.pop(),r[i]=r[l],r.pop()}}}class AnimationAction{constructor(t,n,i=null,r=n.blendMode){this._mixer=t,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,l=new Array(o),c={endingStart:ZeroCurvatureEnding,endingEnd:ZeroCurvatureEnding};for(let h=0;h!==o;++h){const u=s[h].createInterpolant(null);l[h]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=LoopRepeat,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,n){return this.loop=t,this.repetitions=n,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,n,i){if(t.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=t._clip.duration,o=s/r,l=r/s;t.warp(1,o,n),this.warp(l,1,n)}return this}crossFadeTo(t,n,i){return t.crossFadeFrom(this,n,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=r._lendControlInterpolant(),this._timeScaleInterpolant=l);const c=l.parameterPositions,h=l.sampleValues;return c[0]=s,c[1]=s+i,h[0]=t/o,h[1]=n/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,n,i,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*i;c<0||i===0?n=0:(this._startTime=null,n=i*c)}n*=this._updateTimeScale(t);const o=this._updateTime(n),l=this._updateWeight(t);if(l>0){const c=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case AdditiveAnimationBlendMode:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),h[u].accumulateAdditive(l);break;case NormalAnimationBlendMode:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),h[u].accumulate(r,l)}}}_updateWeight(t){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(t)[0];n*=r,t>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(t){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(t)[0];n*=r,t>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(t){const n=this._clip.duration,i=this.loop;let r=this.time+t,s=this._loopCount;const o=i===LoopPingPong;if(t===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===LoopOnce){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const l=Math.floor(r/n);r-=n*l,s+=Math.abs(l);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const h=t<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(t,n,i){const r=this._interpolantSettings;i?(r.endingStart=ZeroSlopeEnding,r.endingEnd=ZeroSlopeEnding):(t?r.endingStart=this.zeroSlopeAtStart?ZeroSlopeEnding:ZeroCurvatureEnding:r.endingStart=WrapAroundEnding,n?r.endingEnd=this.zeroSlopeAtEnd?ZeroSlopeEnding:ZeroCurvatureEnding:r.endingEnd=WrapAroundEnding)}_scheduleFading(t,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,c[0]=n,l[1]=s+t,c[1]=i,this}}const _controlInterpolantsResultBuffer=new Float32Array(1);class AnimationMixer extends EventDispatcher{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,n){const i=t._localRoot||this._root,r=t._clip.tracks,s=r.length,o=t._propertyBindings,l=t._interpolants,c=i.uuid,h=this._bindingsByRootAndName;let u=h[c];u===void 0&&(u={},h[c]=u);for(let d=0;d!==s;++d){const f=r[d],p=f.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const x=n&&n._propertyBindings[d].binding.parsedPath;g=new PropertyMixer(PropertyBinding.create(i,p,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[d]=g}l[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,r=t._clip.uuid,s=this._actionsByClip[r];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,r,i)}const n=t._propertyBindings;for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const n=t._propertyBindings;for(let i=0,r=n.length;i!==r;++i){const s=n[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const n=t._cacheIndex;return n!==null&&n<this._nActiveActions}_addInactiveAction(t,n,i){const r=this._actions,s=this._actionsByClip;let o=s[n];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[n]=o;else{const l=o.knownActions;t._byClipCacheIndex=l.length,l.push(t)}t._cacheIndex=r.length,r.push(t),o.actionByRoot[i]=t}_removeInactiveAction(t){const n=this._actions,i=n[n.length-1],r=t._cacheIndex;i._cacheIndex=r,n[r]=i,n.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,l=o[s],c=l.knownActions,h=c[c.length-1],u=t._byClipCacheIndex;h._byClipCacheIndex=u,c[u]=h,c.pop(),t._byClipCacheIndex=null;const d=l.actionByRoot,f=(t._localRoot||this._root).uuid;delete d[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const n=t._propertyBindings;for(let i=0,r=n.length;i!==r;++i){const s=n[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const n=this._actions,i=t._cacheIndex,r=this._nActiveActions++,s=n[r];t._cacheIndex=r,n[r]=t,s._cacheIndex=i,n[i]=s}_takeBackAction(t){const n=this._actions,i=t._cacheIndex,r=--this._nActiveActions,s=n[r];t._cacheIndex=r,n[r]=t,s._cacheIndex=i,n[i]=s}_addInactiveBinding(t,n,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[n];o===void 0&&(o={},r[n]=o),o[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const n=this._bindings,i=t.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,l=o[r],c=n[n.length-1],h=t._cacheIndex;c._cacheIndex=h,n[h]=c,n.pop(),delete l[s],Object.keys(l).length===0&&delete o[r]}_lendBinding(t){const n=this._bindings,i=t._cacheIndex,r=this._nActiveBindings++,s=n[r];t._cacheIndex=r,n[r]=t,s._cacheIndex=i,n[i]=s}_takeBackBinding(t){const n=this._bindings,i=t._cacheIndex,r=--this._nActiveBindings,s=n[r];t._cacheIndex=r,n[r]=t,s._cacheIndex=i,n[i]=s}_lendControlInterpolant(){const t=this._controlInterpolants,n=this._nActiveControlInterpolants++;let i=t[n];return i===void 0&&(i=new LinearInterpolant(new Float32Array(2),new Float32Array(2),1,_controlInterpolantsResultBuffer),i.__cacheIndex=n,t[n]=i),i}_takeBackControlInterpolant(t){const n=this._controlInterpolants,i=t.__cacheIndex,r=--this._nActiveControlInterpolants,s=n[r];t.__cacheIndex=r,n[r]=t,s.__cacheIndex=i,n[i]=s}clipAction(t,n,i){const r=n||this._root,s=r.uuid;let o=typeof t=="string"?AnimationClip.findByName(r,t):t;const l=o!==null?o.uuid:t,c=this._actionsByClip[l];let h=null;if(i===void 0&&(o!==null?i=o.blendMode:i=NormalAnimationBlendMode),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;h=c.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const u=new AnimationAction(this,o,n,i);return this._bindAction(u,h),this._addInactiveAction(u,l,s),u}existingAction(t,n){const i=n||this._root,r=i.uuid,s=typeof t=="string"?AnimationClip.findByName(i,t):t,o=s?s.uuid:t,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[r]||null}stopAllAction(){const t=this._actions,n=this._nActiveActions;for(let i=n-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const n=this._actions,i=this._nActiveActions,r=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let h=0;h!==i;++h)n[h]._update(r,t,s,o);const l=this._bindings,c=this._nActiveBindings;for(let h=0;h!==c;++h)l[h].apply(o);return this}setTime(t){this.time=0;for(let n=0;n<this._actions.length;n++)this._actions[n].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const n=this._actions,i=t.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let l=0,c=o.length;l!==c;++l){const h=o[l];this._deactivateAction(h);const u=h._cacheIndex,d=n[n.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=u,n[u]=d,n.pop(),this._removeInactiveBindingsForAction(h)}delete r[i]}}uncacheRoot(t){const n=t.uuid,i=this._actionsByClip;for(const o in i){const l=i[o].actionByRoot,c=l[n];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[n];if(s!==void 0)for(const o in s){const l=s[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(t,n){const i=this.existingAction(t,n);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Uniform{constructor(t){this.value=t}clone(){return new Uniform(this.value.clone===void 0?this.value:this.value.clone())}}let _id=0;class UniformsGroup extends EventDispatcher{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:_id++}),this.name="",this.usage=StaticDrawUsage,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const n=this.uniforms.indexOf(t);return n!==-1&&this.uniforms.splice(n,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const n=t.uniforms;this.uniforms.length=0;for(let i=0,r=n.length;i<r;i++){const s=Array.isArray(n[i])?n[i]:[n[i]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class InstancedInterleavedBuffer extends InterleavedBuffer{constructor(t,n,i=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class GLBufferAttribute{constructor(t,n,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=n,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,n){return this.type=t,this.elementSize=n,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const _matrix=new Matrix4;class Raycaster{constructor(t,n,i=0,r=1/0){this.ray=new Ray(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return _matrix.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_matrix),this}intersectObject(t,n=!0,i=[]){return intersect(t,this,i,n),i.sort(ascSort),i}intersectObjects(t,n=!0,i=[]){for(let r=0,s=t.length;r<s;r++)intersect(t[r],this,i,n);return i.sort(ascSort),i}}function ascSort(a,t){return a.distance-t.distance}function intersect(a,t,n,i){let r=!0;if(a.layers.test(t.layers)&&a.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const s=a.children;for(let o=0,l=s.length;o<l;o++)intersect(s[o],t,n,!0)}}class Spherical{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(clamp(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cylindrical{constructor(t=1,n=0,i=0){return this.radius=t,this.theta=n,this.y=i,this}set(t,n,i){return this.radius=t,this.theta=n,this.y=i,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+i*i),this.theta=Math.atan2(t,i),this.y=n,this}clone(){return new this.constructor().copy(this)}}const _vector$4=new Vector2;class Box2{constructor(t=new Vector2(1/0,1/0),n=new Vector2(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=_vector$4.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_vector$4).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _startP=new Vector3,_startEnd=new Vector3;class Line3{constructor(t=new Vector3,n=new Vector3){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){_startP.subVectors(t,this.start),_startEnd.subVectors(this.end,this.start);const i=_startEnd.dot(_startEnd);let s=_startEnd.dot(_startP)/i;return n&&(s=clamp(s,0,1)),s}closestPointToPoint(t,n,i){const r=this.closestPointToPointParameter(t,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _vector$3=new Vector3;class SpotLightHelper extends Object3D{constructor(t,n){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=n,this.type="SpotLightHelper";const i=new BufferGeometry,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,l=1,c=32;o<c;o++,l++){const h=o/c*Math.PI*2,u=l/c*Math.PI*2;r.push(Math.cos(h),Math.sin(h),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new Float32BufferAttribute(r,3));const s=new LineBasicMaterial({fog:!1,toneMapped:!1});this.cone=new LineSegments(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,n=t*Math.tan(this.light.angle);this.cone.scale.set(n,n,t),_vector$3.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_vector$3),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const _vector$2=new Vector3,_boneMatrix=new Matrix4,_matrixWorldInv=new Matrix4;class SkeletonHelper extends LineSegments{constructor(t){const n=getBoneList(t),i=new BufferGeometry,r=[],s=[],o=new Color(0,0,1),l=new Color(0,1,0);for(let h=0;h<n.length;h++){const u=n[h];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(l.r,l.g,l.b))}i.setAttribute("position",new Float32BufferAttribute(r,3)),i.setAttribute("color",new Float32BufferAttribute(s,3));const c=new LineBasicMaterial({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=n,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const n=this.bones,i=this.geometry,r=i.getAttribute("position");_matrixWorldInv.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){const l=n[s];l.parent&&l.parent.isBone&&(_boneMatrix.multiplyMatrices(_matrixWorldInv,l.matrixWorld),_vector$2.setFromMatrixPosition(_boneMatrix),r.setXYZ(o,_vector$2.x,_vector$2.y,_vector$2.z),_boneMatrix.multiplyMatrices(_matrixWorldInv,l.parent.matrixWorld),_vector$2.setFromMatrixPosition(_boneMatrix),r.setXYZ(o+1,_vector$2.x,_vector$2.y,_vector$2.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function getBoneList(a){const t=[];a.isBone===!0&&t.push(a);for(let n=0;n<a.children.length;n++)t.push.apply(t,getBoneList(a.children[n]));return t}class PointLightHelper extends Mesh{constructor(t,n,i){const r=new SphereGeometry(n,4,2),s=new MeshBasicMaterial({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _vector$1=new Vector3,_color1=new Color,_color2=new Color;class HemisphereLightHelper extends Object3D{constructor(t,n,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const r=new OctahedronGeometry(n);r.rotateY(Math.PI*.5),this.material=new MeshBasicMaterial({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new BufferAttribute(o,3)),this.add(new Mesh(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const n=t.geometry.getAttribute("color");_color1.copy(this.light.color),_color2.copy(this.light.groundColor);for(let i=0,r=n.count;i<r;i++){const s=i<r/2?_color1:_color2;n.setXYZ(i,s.r,s.g,s.b)}n.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(_vector$1.setFromMatrixPosition(this.light.matrixWorld).negate())}}class GridHelper extends LineSegments{constructor(t=10,n=10,i=4473924,r=8947848){i=new Color(i),r=new Color(r);const s=n/2,o=t/n,l=t/2,c=[],h=[];for(let f=0,p=0,g=-l;f<=n;f++,g+=o){c.push(-l,0,g,l,0,g),c.push(g,0,-l,g,0,l);const x=f===s?i:r;x.toArray(h,p),p+=3,x.toArray(h,p),p+=3,x.toArray(h,p),p+=3,x.toArray(h,p),p+=3}const u=new BufferGeometry;u.setAttribute("position",new Float32BufferAttribute(c,3)),u.setAttribute("color",new Float32BufferAttribute(h,3));const d=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PolarGridHelper extends LineSegments{constructor(t=10,n=16,i=8,r=64,s=4473924,o=8947848){s=new Color(s),o=new Color(o);const l=[],c=[];if(n>1)for(let d=0;d<n;d++){const f=d/n*(Math.PI*2),p=Math.sin(f)*t,g=Math.cos(f)*t;l.push(0,0,0),l.push(p,0,g);const x=d&1?s:o;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let d=0;d<i;d++){const f=d&1?s:o,p=t-t/i*d;for(let g=0;g<r;g++){let x=g/r*(Math.PI*2),_=Math.sin(x)*p,m=Math.cos(x)*p;l.push(_,0,m),c.push(f.r,f.g,f.b),x=(g+1)/r*(Math.PI*2),_=Math.sin(x)*p,m=Math.cos(x)*p,l.push(_,0,m),c.push(f.r,f.g,f.b)}}const h=new BufferGeometry;h.setAttribute("position",new Float32BufferAttribute(l,3)),h.setAttribute("color",new Float32BufferAttribute(c,3));const u=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(h,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const _v1=new Vector3,_v2=new Vector3,_v3=new Vector3;class DirectionalLightHelper extends Object3D{constructor(t,n,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",n===void 0&&(n=1);let r=new BufferGeometry;r.setAttribute("position",new Float32BufferAttribute([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new LineBasicMaterial({fog:!1,toneMapped:!1});this.lightPlane=new Line(r,s),this.add(this.lightPlane),r=new BufferGeometry,r.setAttribute("position",new Float32BufferAttribute([0,0,0,0,0,1],3)),this.targetLine=new Line(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),_v1.setFromMatrixPosition(this.light.matrixWorld),_v2.setFromMatrixPosition(this.light.target.matrixWorld),_v3.subVectors(_v2,_v1),this.lightPlane.lookAt(_v2),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_v2),this.targetLine.scale.z=_v3.length()}}const _vector=new Vector3,_camera=new Camera;class CameraHelper extends LineSegments{constructor(t){const n=new BufferGeometry,i=new LineBasicMaterial({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};l("n1","n2"),l("n2","n4"),l("n4","n3"),l("n3","n1"),l("f1","f2"),l("f2","f4"),l("f4","f3"),l("f3","f1"),l("n1","f1"),l("n2","f2"),l("n3","f3"),l("n4","f4"),l("p","n1"),l("p","n2"),l("p","n3"),l("p","n4"),l("u1","u2"),l("u2","u3"),l("u3","u1"),l("c","t"),l("p","c"),l("cn1","cn2"),l("cn3","cn4"),l("cf1","cf2"),l("cf3","cf4");function l(g,x){c(g),c(x)}function c(g){r.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(r.length/3-1)}n.setAttribute("position",new Float32BufferAttribute(r,3)),n.setAttribute("color",new Float32BufferAttribute(s,3)),super(n,i),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Color(16755200),u=new Color(16711680),d=new Color(43775),f=new Color(16777215),p=new Color(3355443);this.setColors(h,u,d,f,p)}setColors(t,n,i,r,s){const l=this.geometry.getAttribute("color");l.setXYZ(0,t.r,t.g,t.b),l.setXYZ(1,t.r,t.g,t.b),l.setXYZ(2,t.r,t.g,t.b),l.setXYZ(3,t.r,t.g,t.b),l.setXYZ(4,t.r,t.g,t.b),l.setXYZ(5,t.r,t.g,t.b),l.setXYZ(6,t.r,t.g,t.b),l.setXYZ(7,t.r,t.g,t.b),l.setXYZ(8,t.r,t.g,t.b),l.setXYZ(9,t.r,t.g,t.b),l.setXYZ(10,t.r,t.g,t.b),l.setXYZ(11,t.r,t.g,t.b),l.setXYZ(12,t.r,t.g,t.b),l.setXYZ(13,t.r,t.g,t.b),l.setXYZ(14,t.r,t.g,t.b),l.setXYZ(15,t.r,t.g,t.b),l.setXYZ(16,t.r,t.g,t.b),l.setXYZ(17,t.r,t.g,t.b),l.setXYZ(18,t.r,t.g,t.b),l.setXYZ(19,t.r,t.g,t.b),l.setXYZ(20,t.r,t.g,t.b),l.setXYZ(21,t.r,t.g,t.b),l.setXYZ(22,t.r,t.g,t.b),l.setXYZ(23,t.r,t.g,t.b),l.setXYZ(24,n.r,n.g,n.b),l.setXYZ(25,n.r,n.g,n.b),l.setXYZ(26,n.r,n.g,n.b),l.setXYZ(27,n.r,n.g,n.b),l.setXYZ(28,n.r,n.g,n.b),l.setXYZ(29,n.r,n.g,n.b),l.setXYZ(30,n.r,n.g,n.b),l.setXYZ(31,n.r,n.g,n.b),l.setXYZ(32,i.r,i.g,i.b),l.setXYZ(33,i.r,i.g,i.b),l.setXYZ(34,i.r,i.g,i.b),l.setXYZ(35,i.r,i.g,i.b),l.setXYZ(36,i.r,i.g,i.b),l.setXYZ(37,i.r,i.g,i.b),l.setXYZ(38,r.r,r.g,r.b),l.setXYZ(39,r.r,r.g,r.b),l.setXYZ(40,s.r,s.g,s.b),l.setXYZ(41,s.r,s.g,s.b),l.setXYZ(42,s.r,s.g,s.b),l.setXYZ(43,s.r,s.g,s.b),l.setXYZ(44,s.r,s.g,s.b),l.setXYZ(45,s.r,s.g,s.b),l.setXYZ(46,s.r,s.g,s.b),l.setXYZ(47,s.r,s.g,s.b),l.setXYZ(48,s.r,s.g,s.b),l.setXYZ(49,s.r,s.g,s.b),l.needsUpdate=!0}update(){const t=this.geometry,n=this.pointMap,i=1,r=1;_camera.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),setPoint("c",n,t,_camera,0,0,-1),setPoint("t",n,t,_camera,0,0,1),setPoint("n1",n,t,_camera,-1,-1,-1),setPoint("n2",n,t,_camera,i,-1,-1),setPoint("n3",n,t,_camera,-1,r,-1),setPoint("n4",n,t,_camera,i,r,-1),setPoint("f1",n,t,_camera,-1,-1,1),setPoint("f2",n,t,_camera,i,-1,1),setPoint("f3",n,t,_camera,-1,r,1),setPoint("f4",n,t,_camera,i,r,1),setPoint("u1",n,t,_camera,i*.7,r*1.1,-1),setPoint("u2",n,t,_camera,-1*.7,r*1.1,-1),setPoint("u3",n,t,_camera,0,r*2,-1),setPoint("cf1",n,t,_camera,-1,0,1),setPoint("cf2",n,t,_camera,i,0,1),setPoint("cf3",n,t,_camera,0,-1,1),setPoint("cf4",n,t,_camera,0,r,1),setPoint("cn1",n,t,_camera,-1,0,-1),setPoint("cn2",n,t,_camera,i,0,-1),setPoint("cn3",n,t,_camera,0,-1,-1),setPoint("cn4",n,t,_camera,0,r,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function setPoint(a,t,n,i,r,s,o){_vector.set(r,s,o).unproject(i);const l=t[a];if(l!==void 0){const c=n.getAttribute("position");for(let h=0,u=l.length;h<u;h++)c.setXYZ(l[h],_vector.x,_vector.y,_vector.z)}}const _box=new Box3;class BoxHelper extends LineSegments{constructor(t,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new BufferGeometry;s.setIndex(new BufferAttribute(i,1)),s.setAttribute("position",new BufferAttribute(r,3)),super(s,new LineBasicMaterial({color:n,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&_box.setFromObject(this.object),_box.isEmpty())return;const n=_box.min,i=_box.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=n.x,s[4]=i.y,s[5]=i.z,s[6]=n.x,s[7]=n.y,s[8]=i.z,s[9]=i.x,s[10]=n.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=n.z,s[15]=n.x,s[16]=i.y,s[17]=n.z,s[18]=n.x,s[19]=n.y,s[20]=n.z,s[21]=i.x,s[22]=n.y,s[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,n){return super.copy(t,n),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Box3Helper extends LineSegments{constructor(t,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new BufferGeometry;s.setIndex(new BufferAttribute(i,1)),s.setAttribute("position",new Float32BufferAttribute(r,3)),super(s,new LineBasicMaterial({color:n,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class PlaneHelper extends Line{constructor(t,n=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new BufferGeometry;o.setAttribute("position",new Float32BufferAttribute(s,3)),o.computeBoundingSphere(),super(o,new LineBasicMaterial({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=n;const l=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new BufferGeometry;c.setAttribute("position",new Float32BufferAttribute(l,3)),c.computeBoundingSphere(),this.add(new Mesh(c,new MeshBasicMaterial({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const _axis=new Vector3;let _lineGeometry,_coneGeometry;class ArrowHelper extends Object3D{constructor(t=new Vector3(0,0,1),n=new Vector3(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",_lineGeometry===void 0&&(_lineGeometry=new BufferGeometry,_lineGeometry.setAttribute("position",new Float32BufferAttribute([0,0,0,0,1,0],3)),_coneGeometry=new CylinderGeometry(0,.5,1,5,1),_coneGeometry.translate(0,-.5,0)),this.position.copy(n),this.line=new Line(_lineGeometry,new LineBasicMaterial({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Mesh(_coneGeometry,new MeshBasicMaterial({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{_axis.set(t.z,0,-t.x).normalize();const n=Math.acos(t.y);this.quaternion.setFromAxisAngle(_axis,n)}}setLength(t,n=t*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,t-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class AxesHelper extends LineSegments{constructor(t=1){const n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new BufferGeometry;r.setAttribute("position",new Float32BufferAttribute(n,3)),r.setAttribute("color",new Float32BufferAttribute(i,3));const s=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,n,i){const r=new Color,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ShapePath{constructor(){this.type="ShapePath",this.color=new Color,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new Path,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,i,r){return this.currentPath.quadraticCurveTo(t,n,i,r),this}bezierCurveTo(t,n,i,r,s,o){return this.currentPath.bezierCurveTo(t,n,i,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(m){const y=[];for(let v=0,M=m.length;v<M;v++){const P=m[v],E=new Shape;E.curves=P.curves,y.push(E)}return y}function i(m,y){const v=y.length;let M=!1;for(let P=v-1,E=0;E<v;P=E++){let C=y[P],L=y[E],A=L.x-C.x,S=L.y-C.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(C=y[E],A=-A,L=y[P],S=-S),m.y<C.y||m.y>L.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const I=S*(m.x-C.x)-A*(m.y-C.y);if(I===0)return!0;if(I<0)continue;M=!M}}else{if(m.y!==C.y)continue;if(L.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=L.x)return!0}}return M}const r=ShapeUtils.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,l,c;const h=[];if(s.length===1)return l=s[0],c=new Shape,c.curves=l.curves,h.push(c),h;let u=!r(s[0].getPoints());u=t?!u:u;const d=[],f=[];let p=[],g=0,x;f[g]=void 0,p[g]=[];for(let m=0,y=s.length;m<y;m++)l=s[m],x=l.getPoints(),o=r(x),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Shape,p:x},f[g].s.curves=l.curves,u&&g++,p[g]=[]):p[g].push({h:l,p:x[0]});if(!f[0])return n(s);if(f.length>1){let m=!1,y=0;for(let v=0,M=f.length;v<M;v++)d[v]=[];for(let v=0,M=f.length;v<M;v++){const P=p[v];for(let E=0;E<P.length;E++){const C=P[E];let L=!0;for(let A=0;A<f.length;A++)i(C.p,f[A].p)&&(v!==A&&y++,L?(L=!1,d[A].push(C)):m=!0);L&&d[v].push(C)}}y>0&&m===!1&&(p=d)}let _;for(let m=0,y=f.length;m<y;m++){c=f[m].s,h.push(c),_=p[m];for(let v=0,M=_.length;v<M;v++)c.holes.push(_[v].h)}return h}}class WebGLMultipleRenderTargets extends WebGLRenderTarget{constructor(t=1,n=1,i=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,n,{...r,count:i}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const THREE=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping,AddEquation,AddOperation,AdditiveAnimationBlendMode,AdditiveBlending,AgXToneMapping,AlphaFormat,AlwaysCompare,AlwaysDepth,AlwaysStencilFunc,AmbientLight,AnimationAction,AnimationClip,AnimationLoader,AnimationMixer,AnimationObjectGroup,AnimationUtils,ArcCurve,ArrayCamera,ArrowHelper,AttachedBindMode,Audio,AudioAnalyser,AudioContext,AudioListener,AudioLoader,AxesHelper,BackSide,BasicDepthPacking,BasicShadowMap,BatchedMesh,Bone,BooleanKeyframeTrack,Box2,Box3,Box3Helper,BoxGeometry,BoxHelper,BufferAttribute,BufferGeometry,BufferGeometryLoader,ByteType,Cache,Camera,CameraHelper,CanvasTexture,CapsuleGeometry,CatmullRomCurve3,CineonToneMapping,CircleGeometry,ClampToEdgeWrapping,Clock,Color,ColorKeyframeTrack,ColorManagement,CompressedArrayTexture,CompressedCubeTexture,CompressedTexture,CompressedTextureLoader,ConeGeometry,ConstantAlphaFactor,ConstantColorFactor,CubeCamera,CubeReflectionMapping,CubeRefractionMapping,CubeTexture,CubeTextureLoader,CubeUVReflectionMapping,CubicBezierCurve,CubicBezierCurve3,CubicInterpolant,CullFaceBack,CullFaceFront,CullFaceFrontBack,CullFaceNone,Curve,CurvePath,CustomBlending,CustomToneMapping,CylinderGeometry,Cylindrical,Data3DTexture,DataArrayTexture,DataTexture,DataTextureLoader,DataUtils,DecrementStencilOp,DecrementWrapStencilOp,DefaultLoadingManager,DepthFormat,DepthStencilFormat,DepthTexture,DetachedBindMode,DirectionalLight,DirectionalLightHelper,DiscreteInterpolant,DisplayP3ColorSpace,DodecahedronGeometry,DoubleSide,DstAlphaFactor,DstColorFactor,DynamicCopyUsage,DynamicDrawUsage,DynamicReadUsage,EdgesGeometry,EllipseCurve,EqualCompare,EqualDepth,EqualStencilFunc,EquirectangularReflectionMapping,EquirectangularRefractionMapping,Euler,EventDispatcher,ExtrudeGeometry,FileLoader,Float16BufferAttribute,Float32BufferAttribute,FloatType,Fog,FogExp2,FramebufferTexture,FrontSide,Frustum,GLBufferAttribute,GLSL1,GLSL3,GreaterCompare,GreaterDepth,GreaterEqualCompare,GreaterEqualDepth,GreaterEqualStencilFunc,GreaterStencilFunc,GridHelper,Group,HalfFloatType,HemisphereLight,HemisphereLightHelper,IcosahedronGeometry,ImageBitmapLoader,ImageLoader,ImageUtils,IncrementStencilOp,IncrementWrapStencilOp,InstancedBufferAttribute,InstancedBufferGeometry,InstancedInterleavedBuffer,InstancedMesh,Int16BufferAttribute,Int32BufferAttribute,Int8BufferAttribute,IntType,InterleavedBuffer,InterleavedBufferAttribute,Interpolant,InterpolateDiscrete,InterpolateLinear,InterpolateSmooth,InvertStencilOp,KeepStencilOp,KeyframeTrack,LOD,LatheGeometry,Layers,LessCompare,LessDepth,LessEqualCompare,LessEqualDepth,LessEqualStencilFunc,LessStencilFunc,Light,LightProbe,Line,Line3,LineBasicMaterial,LineCurve,LineCurve3,LineDashedMaterial,LineLoop,LineSegments,LinearDisplayP3ColorSpace,LinearFilter,LinearInterpolant,LinearMipMapLinearFilter,LinearMipMapNearestFilter,LinearMipmapLinearFilter,LinearMipmapNearestFilter,LinearSRGBColorSpace,LinearToneMapping,LinearTransfer,Loader,LoaderUtils,LoadingManager,LoopOnce,LoopPingPong,LoopRepeat,LuminanceAlphaFormat,LuminanceFormat,MOUSE,Material,MaterialLoader,MathUtils,Matrix3,Matrix4,MaxEquation,Mesh,MeshBasicMaterial,MeshDepthMaterial,MeshDistanceMaterial,MeshLambertMaterial,MeshMatcapMaterial,MeshNormalMaterial,MeshPhongMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshToonMaterial,MinEquation,MirroredRepeatWrapping,MixOperation,MultiplyBlending,MultiplyOperation,NearestFilter,NearestMipMapLinearFilter,NearestMipMapNearestFilter,NearestMipmapLinearFilter,NearestMipmapNearestFilter,NeutralToneMapping,NeverCompare,NeverDepth,NeverStencilFunc,NoBlending,NoColorSpace,NoToneMapping,NormalAnimationBlendMode,NormalBlending,NotEqualCompare,NotEqualDepth,NotEqualStencilFunc,NumberKeyframeTrack,Object3D,ObjectLoader,ObjectSpaceNormalMap,OctahedronGeometry,OneFactor,OneMinusConstantAlphaFactor,OneMinusConstantColorFactor,OneMinusDstAlphaFactor,OneMinusDstColorFactor,OneMinusSrcAlphaFactor,OneMinusSrcColorFactor,OrthographicCamera,P3Primaries,PCFShadowMap,PCFSoftShadowMap,PMREMGenerator,Path,PerspectiveCamera,Plane,PlaneGeometry,PlaneHelper,PointLight,PointLightHelper,Points,PointsMaterial,PolarGridHelper,PolyhedronGeometry,PositionalAudio,PropertyBinding,PropertyMixer,QuadraticBezierCurve,QuadraticBezierCurve3,Quaternion,QuaternionKeyframeTrack,QuaternionLinearInterpolant,RED_GREEN_RGTC2_Format,RED_RGTC1_Format,REVISION,RGBADepthPacking,RGBAFormat,RGBAIntegerFormat,RGBA_ASTC_10x10_Format,RGBA_ASTC_10x5_Format,RGBA_ASTC_10x6_Format,RGBA_ASTC_10x8_Format,RGBA_ASTC_12x10_Format,RGBA_ASTC_12x12_Format,RGBA_ASTC_4x4_Format,RGBA_ASTC_5x4_Format,RGBA_ASTC_5x5_Format,RGBA_ASTC_6x5_Format,RGBA_ASTC_6x6_Format,RGBA_ASTC_8x5_Format,RGBA_ASTC_8x6_Format,RGBA_ASTC_8x8_Format,RGBA_BPTC_Format,RGBA_ETC2_EAC_Format,RGBA_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format,RGBA_S3TC_DXT1_Format,RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT5_Format,RGBFormat,RGBIntegerFormat,RGB_BPTC_SIGNED_Format,RGB_BPTC_UNSIGNED_Format,RGB_ETC1_Format,RGB_ETC2_Format,RGB_PVRTC_2BPPV1_Format,RGB_PVRTC_4BPPV1_Format,RGB_S3TC_DXT1_Format,RGFormat,RGIntegerFormat,RawShaderMaterial,Ray,Raycaster,Rec709Primaries,RectAreaLight,RedFormat,RedIntegerFormat,ReinhardToneMapping,RenderTarget,RepeatWrapping,ReplaceStencilOp,ReverseSubtractEquation,RingGeometry,SIGNED_RED_GREEN_RGTC2_Format,SIGNED_RED_RGTC1_Format,SRGBColorSpace,SRGBTransfer,Scene,ShaderChunk,ShaderLib,ShaderMaterial,ShadowMaterial,Shape,ShapeGeometry,ShapePath,ShapeUtils,ShortType,Skeleton,SkeletonHelper,SkinnedMesh,Source,Sphere,SphereGeometry,Spherical,SphericalHarmonics3,SplineCurve,SpotLight,SpotLightHelper,Sprite,SpriteMaterial,SrcAlphaFactor,SrcAlphaSaturateFactor,SrcColorFactor,StaticCopyUsage,StaticDrawUsage,StaticReadUsage,StereoCamera,StreamCopyUsage,StreamDrawUsage,StreamReadUsage,StringKeyframeTrack,SubtractEquation,SubtractiveBlending,TOUCH,TangentSpaceNormalMap,TetrahedronGeometry,Texture,TextureLoader,TextureUtils,TorusGeometry,TorusKnotGeometry,Triangle,TriangleFanDrawMode,TriangleStripDrawMode,TrianglesDrawMode,TubeGeometry,UVMapping,Uint16BufferAttribute,Uint32BufferAttribute,Uint8BufferAttribute,Uint8ClampedBufferAttribute,Uniform,UniformsGroup,UniformsLib,UniformsUtils,UnsignedByteType,UnsignedInt248Type,UnsignedInt5999Type,UnsignedIntType,UnsignedShort4444Type,UnsignedShort5551Type,UnsignedShortType,VSMShadowMap,Vector2,Vector3,Vector4,VectorKeyframeTrack,VideoTexture,WebGL3DRenderTarget,WebGLArrayRenderTarget,WebGLCoordinateSystem,WebGLCubeRenderTarget,WebGLMultipleRenderTargets,WebGLRenderTarget,WebGLRenderer,WebGLUtils,WebGPUCoordinateSystem,WireframeGeometry,WrapAroundEnding,ZeroCurvatureEnding,ZeroFactor,ZeroSlopeEnding,ZeroStencilOp,createCanvasElement},Symbol.toStringTag,{value:"Module"})),_object_pattern=/^[og]\s*(.+)?/,_material_library_pattern=/^mtllib /,_material_use_pattern=/^usemtl /,_map_use_pattern=/^usemap /,_face_vertex_data_separator_pattern=/\s+/,_vA=new Vector3,_vB=new Vector3,_vC=new Vector3,_ab=new Vector3,_cb=new Vector3,_color=new Color;function ParserState(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=n!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const l={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const h={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(l),l},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,n){const i=parseInt(t,10);return(i>=0?i-1:i+n/3)*3},parseNormalIndex:function(t,n){const i=parseInt(t,10);return(i>=0?i-1:i+n/3)*3},parseUVIndex:function(t,n){const i=parseInt(t,10);return(i>=0?i-1:i+n/2)*2},addVertex:function(t,n,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(t){const n=this.vertices;this.object.geometry.vertices.push(n[t+0],n[t+1],n[t+2])},addVertexLine:function(t){const n=this.vertices;this.object.geometry.vertices.push(n[t+0],n[t+1],n[t+2])},addNormal:function(t,n,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(t,n,i){const r=this.vertices,s=this.object.geometry.normals;_vA.fromArray(r,t),_vB.fromArray(r,n),_vC.fromArray(r,i),_cb.subVectors(_vC,_vB),_ab.subVectors(_vA,_vB),_cb.cross(_ab),_cb.normalize(),s.push(_cb.x,_cb.y,_cb.z),s.push(_cb.x,_cb.y,_cb.z),s.push(_cb.x,_cb.y,_cb.z)},addColor:function(t,n,i){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(t,n,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const n=this.uvs;this.object.geometry.uvs.push(n[t+0],n[t+1])},addFace:function(t,n,i,r,s,o,l,c,h){const u=this.vertices.length;let d=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u),p=this.parseVertexIndex(i,u);if(this.addVertex(d,f,p),this.addColor(d,f,p),l!==void 0&&l!==""){const g=this.normals.length;d=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),p=this.parseNormalIndex(h,g),this.addNormal(d,f,p)}else this.addFaceNormal(d,f,p);if(r!==void 0&&r!==""){const g=this.uvs.length;d=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),p=this.parseUVIndex(o,g),this.addUV(d,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const n=this.vertices.length;for(let i=0,r=t.length;i<r;i++){const s=this.parseVertexIndex(t[i],n);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,n){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],i));for(let s=0,o=n.length;s<o;s++)this.addUVLine(this.parseUVIndex(n[s],r))}};return a.startObject("",!1),a}class OBJLoader extends Loader{constructor(t){super(t),this.materials=null}load(t,n,i,r){const s=this,o=new FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{n(s.parse(l))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},i,r)}setMaterials(t){return this.materials=t,this}parse(t){const n=new ParserState;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let r=[];for(let l=0,c=i.length;l<c;l++){const h=i[l].trimStart();if(h.length===0)continue;const u=h.charAt(0);if(u!=="#")if(u==="v"){const d=h.split(_face_vertex_data_separator_pattern);switch(d[0]){case"v":n.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(_color.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),n.colors.push(_color.r,_color.g,_color.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":n.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const f=h.slice(1).trim().split(_face_vertex_data_separator_pattern),p=[];for(let x=0,_=f.length;x<_;x++){const m=f[x];if(m.length>0){const y=m.split("/");p.push(y)}}const g=p[0];for(let x=1,_=p.length-1;x<_;x++){const m=p[x],y=p[x+1];n.addFace(g[0],m[0],y[0],g[1],m[1],y[1],g[2],m[2],y[2])}}else if(u==="l"){const d=h.substring(1).trim().split(" ");let f=[];const p=[];if(h.indexOf("/")===-1)f=d;else for(let g=0,x=d.length;g<x;g++){const _=d[g].split("/");_[0]!==""&&f.push(_[0]),_[1]!==""&&p.push(_[1])}n.addLineGeometry(f,p)}else if(u==="p"){const f=h.slice(1).trim().split(" ");n.addPointGeometry(f)}else if((r=_object_pattern.exec(h))!==null){const d=(" "+r[0].slice(1).trim()).slice(1);n.startObject(d)}else if(_material_use_pattern.test(h))n.object.startMaterial(h.substring(7).trim(),n.materialLibraries);else if(_material_library_pattern.test(h))n.materialLibraries.push(h.substring(7).trim());else if(_map_use_pattern.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=h.split(" "),r.length>1){const f=r[1].trim().toLowerCase();n.object.smooth=f!=="0"&&f!=="off"}else n.object.smooth=!0;const d=n.object.currentMaterial();d&&(d.smooth=n.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}n.finalize();const s=new Group;if(s.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let l=0,c=n.objects.length;l<c;l++){const h=n.objects[l],u=h.geometry,d=h.materials,f=u.type==="Line",p=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const x=new BufferGeometry;x.setAttribute("position",new Float32BufferAttribute(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new Float32BufferAttribute(u.normals,3)),u.colors.length>0&&(g=!0,x.setAttribute("color",new Float32BufferAttribute(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new Float32BufferAttribute(u.uvs,2));const _=[];for(let y=0,v=d.length;y<v;y++){const M=d[y],P=M.name+"_"+M.smooth+"_"+g;let E=n.materials[P];if(this.materials!==null){if(E=this.materials.create(M.name),f&&E&&!(E instanceof LineBasicMaterial)){const C=new LineBasicMaterial;Material.prototype.copy.call(C,E),C.color.copy(E.color),E=C}else if(p&&E&&!(E instanceof PointsMaterial)){const C=new PointsMaterial({size:10,sizeAttenuation:!1});Material.prototype.copy.call(C,E),C.color.copy(E.color),C.map=E.map,E=C}}E===void 0&&(f?E=new LineBasicMaterial:p?E=new PointsMaterial({size:1,sizeAttenuation:!1}):E=new MeshPhongMaterial,E.name=M.name,E.flatShading=!M.smooth,E.vertexColors=g,n.materials[P]=E),_.push(E)}let m;if(_.length>1){for(let y=0,v=d.length;y<v;y++){const M=d[y];x.addGroup(M.groupStart,M.groupCount,y)}f?m=new LineSegments(x,_):p?m=new Points(x,_):m=new Mesh(x,_)}else f?m=new LineSegments(x,_[0]):p?m=new Points(x,_[0]):m=new Mesh(x,_[0]);m.name=h.name,s.add(m)}else if(n.vertices.length>0){const l=new PointsMaterial({size:1,sizeAttenuation:!1}),c=new BufferGeometry;c.setAttribute("position",new Float32BufferAttribute(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(c.setAttribute("color",new Float32BufferAttribute(n.colors,3)),l.vertexColors=!0);const h=new Points(c,l);s.add(h)}return s}}const canvas=document.querySelector(".webgl"),label1=document.getElementById("label1"),label2=document.getElementById("label2"),zoomModal=document.getElementById("zoomModal"),backBtn=document.getElementById("backBtn"),glitchPulse=document.getElementById("glitchPulse")||null,renderer=new WebGLRenderer({canvas});renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.setSize(window.innerWidth,window.innerHeight);renderer.shadowMap.enabled=!0;const scene=new Scene;scene.background=new Color(0);window.scene=scene;window.THREE=THREE;const camera=new PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),initialCameraPos=new Vector3(0,5,15);camera.position.copy(initialCameraPos);camera.lookAt(0,2,0);const ambientLight=new AmbientLight(16777215,1);scene.add(ambientLight);const spotLights=[new SpotLight(16777215,.8),new SpotLight(16777215,.6),new SpotLight(16777215,.5)];spotLights[0].position.set(5,10,5);spotLights[1].position.set(-5,10,5);spotLights[2].position.set(0,10,-5);spotLights.forEach(a=>{a.castShadow=!0,scene.add(a)});const floorGeometry=new PlaneGeometry(100,100),floorMaterial=new MeshStandardMaterial({color:1118481,roughness:.5,metalness:.3}),floor=new Mesh(floorGeometry,floorMaterial);floor.rotation.x=-Math.PI/2;floor.position.y=-8;floor.receiveShadow=!0;scene.add(floor);const textureLoader=new TextureLoader,modelTexture={map:textureLoader.load("/textures/Tiles.png"),normalMap:textureLoader.load("/textures/Tiles_NormalGL.jpg"),roughnessMap:textureLoader.load("/textures/Tiles_Roughness.jpg"),displacementMap:textureLoader.load("/textures/Tiles_Displacement.jpg"),aoMap:textureLoader.load("/textures/Tiles.png")};Object.values(modelTexture).forEach(a=>{a.wrapS=a.wrapT=RepeatWrapping,a.repeat.set(5,5)});const modelMaterial=new MeshStandardMaterial({map:modelTexture.map,normalMap:modelTexture.normalMap,roughnessMap:modelTexture.roughnessMap,displacementMap:modelTexture.displacementMap,aoMap:modelTexture.aoMap,displacementScale:.1,roughness:10,metalness:.2}),objLoader=new OBJLoader;let sphereGroup=new Group,ring1,ring2,sphere1,sphere2;objLoader.load("/model.OBJ",a=>{a.traverse(h=>{h.isMesh&&(h.material=modelMaterial,h.castShadow=!0)}),a.scale.set(7,7,7),a.position.set(0,-7,0),scene.add(a);const t=textureLoader.load("/textures/cyber.jpg"),n=textureLoader.load("/textures/cyber2.jpeg"),i=new MeshStandardMaterial({map:t,emissive:new Color(255),emissiveIntensity:.7,roughness:.3,metalness:.6}),r=new MeshStandardMaterial({map:n,emissive:new Color(65535),emissiveIntensity:.5,roughness:.3,metalness:.6}),s=new SphereGeometry(1,32,32);sphere1=new Mesh(s,i),sphere1.position.set(7,0,0),sphere2=new Mesh(s,r),sphere2.position.set(-7,0,0);const o=new PointLight(4095,1e3,10),l=new PointLight(65535,1e3,10);sphere1.add(o),sphere2.add(l);const c=new TorusGeometry(1.5,.05,16,100);ring1=new Mesh(c,new MeshBasicMaterial({color:255,transparent:!0,opacity:.5,side:DoubleSide})),ring2=new Mesh(c,new MeshBasicMaterial({color:65535,transparent:!0,opacity:.5,side:DoubleSide})),ring1.rotation.x=ring2.rotation.x=Math.PI/2,ring1.position.copy(sphere1.position),ring2.position.copy(sphere2.position),sphereGroup.add(sphere1,sphere2,ring1,ring2),scene.add(sphereGroup)});const particlesGeometry=new BufferGeometry,particlesCount=500,positions=new Float32Array(particlesCount*3);for(let a=0;a<positions.length;a++)positions[a]=(Math.random()-.5)*60;particlesGeometry.setAttribute("position",new BufferAttribute(positions,3));scene.add(new Points(particlesGeometry,new PointsMaterial({color:8978431,size:.1,opacity:.5,transparent:!0})));const raycaster=new Raycaster,mouse=new Vector2;let zoomTarget=null,zoomedSphere=null,isZoomingOut=!1;function startTyping(a,t){t.innerHTML="";let n=0;const i=setInterval(()=>{t.innerHTML+=a[n++],n===a.length&&clearInterval(i)},30)}let terminalState={username:"",stage:"loading"};function openTerminal(){zoomModal.innerHTML=`
      <div class="terminalText">
        <div id="terminalLines">
          loading: <span id="loadingDots"></span>
        </div>
        <div class="input-wrapper">
          <input id="terminalInput" type="text" autocomplete="off" />
          <span id="hoverTooltip" class="username-tooltip">Type your username</span>
        </div>
      </div>
    `,zoomModal.style.opacity=1,zoomModal.style.pointerEvents="auto",zoomModal.style.borderColor="#0033ff",zoomModal.style.boxShadow="0 0 15px #0033ff99",backBtn.style.opacity=1,backBtn.style.pointerEvents="auto";const a=document.getElementById("terminalLines"),t=document.getElementById("terminalInput");t.focus(),t.addEventListener("keydown",function n(i){var r;if(i.key==="Enter"){const s=t.value.trim();if(t.value="",(r=document.getElementById("hoverTooltip"))==null||r.classList.add("tooltip-hidden"),terminalState.stage==="loading")terminalState.username=s||"guest",terminalState.stage="menu",a.innerHTML+=`<br>Username: ${terminalState.username}`,a.innerHTML+="<br>The default interactive shell is now zsh.",a.innerHTML+="<br>To update your account to use zsh, please run 'chsh -s /bin/zsh'.",a.innerHTML+="<br>For more details, please visit https://support.apple.com/kb/HT208050.",a.innerHTML+=`<br>choiArchive:~ ${terminalState.username}$`,a.innerHTML+="<br>See menu: <br>'menu' or type 1 <br> 'exit' or type 2";else if(terminalState.stage==="menu")if(["1","menu"].includes(s.toLowerCase())?(terminalState.stage="choice",a.innerHTML+=`<br>choiArchive:~ ${terminalState.username}$ ${s}`,a.innerHTML+="<br>Menu Options:<br>  1. GitHub<br>  2. LinkedIn<br>  3. Credits<br> 4. Exit",a.innerHTML+="<br>Type Number or Text Only"):["2","exit"].includes(s.toLowerCase())&&(a.innerHTML+=`<br>choiArchive:~ ${terminalState.username}$ ${s}`,a.innerHTML+="<br>Exiting terminal...",t.removeEventListener("keydown",n),setTimeout(()=>backBtn.click(),1e3)),cmd==="clear"){output.querySelectorAll(".console-line, .console-prompt, .ascii-art").forEach(l=>l.remove()),addPrompt();return}else a.innerHTML+=`<br>Error: Unknown command '${s}'`;else if(terminalState.stage==="choice")if(["1","git","github"].includes(s.toLowerCase()))a.innerHTML+="<br>Opening GitHub...",a.innerHTML+="<br>Launching in 5 seconds...",setTimeout(()=>{a.innerHTML+="<br>✅ GitHub opened successfully.",window.open("https://github.com/Javvvvvvvvvvvva","_blank")},3400);else if(["2","linkedin","link"].includes(s.toLowerCase()))a.innerHTML+="<br>Opening LinkedIn...",a.innerHTML+="<br>Launching in 5 seconds...",setTimeout(()=>{a.innerHTML+="<br>✅ LinkedIn opened successfully.",window.open("https://www.linkedin.com/in/choi-yoonseo-7850b8251/","_blank")},3400);else if(["3","credits","credit"].includes(s.toLowerCase())){a.innerHTML+="<br>Showing credits...";const o=document.getElementById("creditSection");if(o){if(o.style.display="block",!document.getElementById("closeCredits")){const l=document.createElement("button");l.id="closeCredits",l.innerHTML="✖",l.style.position="absolute",l.style.top="1rem",l.style.right="1.5rem",l.style.background="transparent",l.style.color="#00aaff",l.style.fontSize="1.2rem",l.style.border="none",l.style.cursor="pointer",l.style.textShadow="0 0 5px #00aaff",l.title="Close Credits",l.addEventListener("click",()=>{o.style.display="none"}),o.appendChild(l)}a.innerHTML+="<br>✅ Creadit opened successfully."}}else["4","exit"].includes(s.toLowerCase())?(a.innerHTML+="<br>Exiting terminal...",t.removeEventListener("keydown",n),setTimeout(()=>backBtn.click(),1e3)):a.innerHTML+=`<br>Error: Unknown command '${s}'`;a.scrollTop=a.scrollHeight}})}window.addEventListener("click",a=>{if(zoomTarget)return;mouse.x=a.clientX/window.innerWidth*2-1,mouse.y=-(a.clientY/window.innerHeight)*2+1,raycaster.setFromCamera(mouse,camera);const t=[...raycaster.intersectObject(sphere1||{}),...raycaster.intersectObject(sphere2||{})];if(t.length>0){glitchPulse&&(glitchPulse.classList.add("active"),setTimeout(()=>glitchPulse.classList.remove("active"),300));const n=t[0].object;zoomTarget=n.position.clone().add(new Vector3(0,1,3)),zoomedSphere=n===sphere1?"sphere1":"sphere2",label1.style.opacity=label2.style.opacity=0,zoomModal.style.opacity=1,zoomModal.style.pointerEvents="auto",zoomedSphere==="sphere2"?(zoomModal.innerHTML='<div id="typedText" class="codeText"></div>',zoomModal.style.borderColor="#00ffff",zoomModal.style.boxShadow="0 0 15px #00ffff99",startTyping(`// Access granted
let user = {
  Name: "Yoonseo Choi",
  Major: "Computer Science",
  Location: "WI in USA",
  Contact: "javacoding2022@gmail.com",
  Greet: () => "Hello, My World 🌐"
};`,document.getElementById("typedText")),backBtn.style.borderColor="#00ffff",backBtn.style.boxShadow="0 0 10px #00ffff88",backBtn.style.color="#66ffff"):zoomedSphere==="sphere1"&&(terminalState={username:"",stage:"loading"},openTerminal(),backBtn.style.borderColor="#0033ff",backBtn.style.boxShadow="0 0 10px #0033ff88",backBtn.style.color="#66aaff"),backBtn.style.opacity=1,backBtn.style.pointerEvents="auto"}});backBtn.addEventListener("click",()=>{zoomTarget=initialCameraPos.clone(),zoomedSphere=null,isZoomingOut=!0,zoomModal.style.opacity=0,zoomModal.style.pointerEvents="none",zoomModal.innerHTML="",backBtn.style.opacity=0,backBtn.style.pointerEvents="none",terminalState.username="",terminalState.stage="login"});function animate(){requestAnimationFrame(animate),sphereGroup.rotation.y+=.01,ring1&&(ring1.rotation.z+=.01),ring2&&(ring2.rotation.z-=.01);const a=particlesGeometry.attributes.position.array;for(let t=1;t<particlesCount*3;t+=3)a[t]+=.005,a[t]>20&&(a[t]=-20);particlesGeometry.attributes.position.needsUpdate=!0,sphere1&&sphere2&&[sphere1,sphere2].forEach((t,n)=>{const i=t.position.clone().project(camera),r=n===0?label1:label2;r.style.left=(i.x+1)/2*window.innerWidth+20+"px",r.style.top=-(i.y-1)/2*window.innerHeight-20+"px"}),zoomTarget&&(camera.position.lerp(zoomTarget,.05),camera.lookAt(0,0,0),camera.position.distanceTo(zoomTarget)<.2&&isZoomingOut&&(label1.style.opacity=label2.style.opacity=1,zoomTarget=null,isZoomingOut=!1)),renderer.render(scene,camera)}animate();window.addEventListener("DOMContentLoaded",()=>{const audio=document.getElementById("bgAudio"),tryPlay=()=>{audio.volume=.3,audio.play().catch(()=>{document.addEventListener("click",()=>audio.play(),{once:!0})})};tryPlay();const consoleBtn=document.getElementById("consoleBtn"),closeBtn=document.getElementById("closeConsole"),consoleArea=document.getElementById("consoleArea"),output=document.getElementById("consoleOutput");consoleBtn&&consoleBtn.addEventListener("click",a=>{if(a.preventDefault(),consoleArea.classList.contains("hidden")){let s=function(){if(r<i.length){const o=document.createElement("div");o.classList.add("console-line","initial"),o.innerHTML=i[r++],output.appendChild(o),setTimeout(s,800)}else addPrompt()};var t=s;consoleArea.classList.remove("hidden");const n=`
        ____ _   _  ___   _____ 
       / ___| | | |/ _ ||_   _|
      | |   | |_| | | | |  | |  
      | |___|  _  | |_| | _| |_  
       ____|_| |_|___/ |_____|
       <div class="terminal-title">CHOI TERMINAL</div>
        `;output.innerHTML=`<pre class="ascii-art">${n}</pre>`;const i=['[<span class="green">INIT</span>] Loading CHOI CONSOLE v1.0...','[<span class="green"> OK </span>] Environment ready','[<span class="blue"> SYS </span>] Listening on port 1997','[<span class="blue"> GUIDE </span>] JS mode active - enter command','[<span class="blue"> Help </span>] Enter command helps type help'];let r=0;s()}}),closeBtn&&closeBtn.addEventListener("click",()=>{consoleArea.classList.add("hidden"),output.innerHTML=""});function addPrompt(){const prompt=document.createElement("div");prompt.classList.add("console-prompt"),prompt.innerHTML='<span class="prompt-symbol">&gt;_</span> <input class="prompt-input" type="text" autofocus />',output.appendChild(prompt);const inputs=output.querySelectorAll(".prompt-input"),terminalInput=inputs[inputs.length-1];terminalInput.focus(),terminalInput.addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();const cmd=terminalInput.value.trim();if(!cmd)return;const echo=document.createElement("div");echo.classList.add("console-line"),echo.innerHTML=`> ${cmd}`,output.appendChild(echo);let result;if(cmd.toLowerCase()==="clear"){const a=output.querySelectorAll(".ascii-art, .console-line.initial");output.innerHTML="",a.forEach(t=>output.appendChild(t)),addPrompt(),output.scrollTop=output.scrollHeight;return}else if(cmd.toLowerCase()==="help")result=`Available Commands:
  1+1                          -     Evaluate JavaScript expression
  alert("hi")                  -     Show alert popup
  clear                        -     Clear the console
  "0".repeat(10)               -     Repeat "0" 10 times
  ["A", "B"].join(" love ")    -     Returns: "A love B"`;else try{result=eval(cmd)}catch(a){result=`⚠️ Error: ${a.message}`}const resultEl=document.createElement("div");resultEl.classList.add("console-line"),resultEl.textContent=result,output.appendChild(resultEl),terminalInput.disabled=!0,addPrompt(),output.scrollTop=output.scrollHeight}})}const flickerStyle=document.createElement("style");flickerStyle.textContent=`
    @keyframes flickerAnim {
      0% { box-shadow: 0 0 12px #00aaff44; }
      100% { box-shadow: 0 0 20px #00aaffaa; }
    }
    .console-area {
      animation: flickerAnim 2s infinite alternate;
      position: relative;
    }
    .console-header button {
      position: absolute;
      top: 8px;
      right: 10px;
      background: transparent;
      color: #00ffff;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      text-shadow: 0 0 5px #00ffff;
      transition: transform 0.2s ease;
    }
    .console-header button:hover {
      transform: scale(1.2);
      color: #ffffff;
    }
    .console-line {
      font-family: 'Courier New', monospace;
      margin-bottom: 0.25rem;
      color: #00ffff;
    }
    .ascii-art {
      color: #00ffff;
      font-family: 'Courier New', monospace;
      font-size: 0.75rem;
      margin-bottom: 1rem;
      white-space: pre;
      text-shadow: 0 0 8px #00ffffaa;
    }
    .green { color: #00ff66; }
    .blue { color: #00ccff; }
    .console-prompt {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Courier New', monospace;
      margin-top: 1rem;
      color: #00ffff;
    }
    .prompt-symbol {
      color: #00ffff;
      font-weight: bold;
    }
    .prompt-input {
      background: transparent;
      border: none;
      border-bottom: 1px solid #00ffff;
      color: #00ffff;
      font-family: 'Courier New', monospace;
      font-size: 1rem;
      width: 100%;
      outline: none;
      caret-color: #00ffff;
    }
    .prompt-input::placeholder {
      color: #007777;
    }
  `,document.head.appendChild(flickerStyle)});
//# sourceMappingURL=index-DzDjjudj.js.map
