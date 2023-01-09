
function remove(){
    let ad=document.getElementById("ad");
    let back=document.getElementById("back");
    ad.style.display="none"
    back.style.display="none"
}
var width=document.getElementById("mais")
var tue=document.getElementById("tue")
var wed=document.getElementById("wed")
var thur=document.getElementById("thur")
var fri=document.getElementById("fri")
var sat=document.getElementById("sat")
var sun=document.getElementById("sun")

let mond=document.getElementById("mond");
let tues=document.getElementById("tues");
let wedn=document.getElementById("wedn");
let thurs=document.getElementById("thurs");
let frid=document.getElementById("frid");
let satu=document.getElementById("satu");
let sund=document.getElementById("sund");

function monday(){
    width.style.width="100%"
    tue.style.width="2.53%"
    wed.style.width="2.53%"
    thur.style.width="2.53%"
    fri.style.width="2.53%"
    sat.style.width="2.53%"
    sun.style.width="2.53%"
    mond.style.position-="fixed"
    mond.style.backgroundColor="rgba(247, 8, 120, 0.295)";
    tues.style.backgroundColor="transparent"
    wedn.style.backgroundColor="transparent"
    thurs.style.backgroundColor="transparent"
    frid.style.backgroundColor="transparent"
    satu.style.backgroundColor="transparent"
    sund.style.backgroundColor="transparent"

}
function tuesday(){
    console.log("ok")
    width.style.width="2.53%"
    tue.style.width="100%"
    wed.style.width="2.53%"
    thur.style.width="2.53%"
    fri.style.width="2.53%"
    sat.style.width="2.53%"
    sun.style.width="2.53%"

    mond.style.backgroundColor="transparent";
    tues.style.backgroundColor="rgba(247, 8, 120, 0.295)"
    wedn.style.backgroundColor="transparent"
    thurs.style.backgroundColor="transparent"
    frid.style.backgroundColor="transparent"
    satu.style.backgroundColor="transparent"
    sund.style.backgroundColor="transparent"
}

function wednesday(){

    width.style.width="2.53%"
    tue.style.width="2.53%"
    wed.style.width="100%"
    thur.style.width="2.53%"
    fri.style.width="2.53%"
    sat.style.width="2.53%"
    sun.style.width="2.53%"

    mond.style.backgroundColor="transparent";
    tues.style.backgroundColor="transparent"
    wedn.style.backgroundColor="rgba(247, 8, 120, 0.295)"
    thurs.style.backgroundColor="transparent"
    frid.style.backgroundColor="transparent"
    satu.style.backgroundColor="transparent"
    sund.style.backgroundColor="transparent"
}

function thursday(){
    width.style.width="2.53%"
    tue.style.width="2.53%"
    wed.style.width="2.53%"
    thur.style.width="100%"
    fri.style.width="2.53%"
    sat.style.width="2.53%"
    sun.style.width="2.53%"

    mond.style.backgroundColor="transparent";
    tues.style.backgroundColor="transparent"
    wedn.style.backgroundColor="transparent"
    thurs.style.backgroundColor="rgba(247, 8, 120, 0.295)"
    frid.style.backgroundColor="transparent"
    satu.style.backgroundColor="transparent"
    sund.style.backgroundColor="transparent"
}

function friday(){
    width.style.width="2.53%"
    tue.style.width="2.53%"
    wed.style.width="2.53%"
    thur.style.width="2.53%"
    fri.style.width="100%"
    sat.style.width="2.53%"
    sun.style.width="2.53%"

    mond.style.backgroundColor="transparent";
    tues.style.backgroundColor="transparent"
    wedn.style.backgroundColor="transparent"
    thurs.style.backgroundColor="transparent"
    frid.style.backgroundColor="rgba(247, 8, 120, 0.295)"
    satu.style.backgroundColor="transparent"
    sund.style.backgroundColor="transparent"
}

function saturday(){
    width.style.width="2.53%"
    tue.style.width="2.53%"
    wed.style.width="2.53%"
    thur.style.width="2.53%"
    fri.style.width="2.53%"
    sat.style.width="100%"
    sun.style.width="2.53%"

    mond.style.backgroundColor="transparent";
    tues.style.backgroundColor="transparent"
    wedn.style.backgroundColor="transparent"
    thurs.style.backgroundColor="transparent"
    frid.style.backgroundColor="transparent"
    satu.style.backgroundColor="rgba(247, 8, 120, 0.295)"
    sund.style.backgroundColor="transparent"
}

function sunday(){
    width.style.width="2.53%"
    tue.style.width="2.53%"
    wed.style.width="2.53%"
    thur.style.width="2.53%"
    fri.style.width="2.53%"
    sat.style.width="2.53%"
    sun.style.width="100%"

    mond.style.backgroundColor="transparent";
    tues.style.backgroundColor="transparent"
    wedn.style.backgroundColor="transparent"
    thurs.style.backgroundColor="transparent"
    frid.style.backgroundColor="transparent"
    satu.style.backgroundColor="transparent"
    sund.style.backgroundColor="rgba(247, 8, 120, 0.295)"
}
document.addEventListener("mouseover", mouseover);
let curse=document.querySelector('#curse');

function mouseover(e){
    let x=e.pageX;
    let y=e.pageY;
   
    curse.setAttribute("style", "top:"+e.pageY+"px; left:"+e.pageX+"px;")
}

