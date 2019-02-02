// Created by iWeb 3.0.4 local-build-20190202

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.800000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.800000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Dobro_pozalovat!_files/Dobro_pozalovat!Moz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id1');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
