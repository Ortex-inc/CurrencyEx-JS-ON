var xc=0;
var obj;
var Div = document.getElementById("cChosed");
var selectList = document.getElementById("select");
var lineArr;
var inc=0;

//clean
function isoCode(x){
var iso;
iso=x.split(' ');
return iso[0].toLowerCase();

}

function clean(str){

if(str=="all"){
  for(var x=0;x<lineArr.length-1;x++){
var id=isoCode(lineArr[x]);

var element = document.getElementById(id);
element.parentNode.removeChild(element);
//
}
}
else{
  var allcookies = document.cookie;
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  cookiearray = allcookies.split(' ');
  // Now take key value pair out of this array
  for(var w=0;w<cookiearray.length; w++){
    var id=cookiearray[w].split('=')[0];
var element = document.getElementById(id);
element.parentNode.removeChild(element);
 }
}
}
function injection(x) {

    var option = document.createElement("option");
    option.value = x;
    option.text = x;
option.id="option"+inc;

    selectList.appendChild(option);
inc++;

}


function getDB(path){
   var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
var lines=xmlhttp.responseText;
 lineArr = lines.split('\n');



///

for(var x=0;x<lineArr.length;x++){
injection(lineArr[x]);

}

        }
    }

    xmlhttp.open("GET", path, true);
    xmlhttp.send();


}



function getCurr() {

var api_key="d3eb22fae57611b7a2e9013163b3ac05";
var url="http://www.apilayer.net/api/live";

var Request = new XMLHttpRequest();
Request.open("GET",url+"?access_key="+api_key+"&format=1.json", false);
Request.send(null);

obj = JSON.parse(Request.response);



}





function Load (){
var path="flags/";
var ext=".png";
for(var x=0;x<lineArr.length;x++){

var id="option"+x;
if(document.getElementById(id).selected==true){
var flag=isoCode(document.getElementById(id).value);
document.getElementById("mainCurr").src=path+flag+ext;
document.getElementById("mainp").innerHTML=lineArr[x];
}
}
}


function init(str,x){
  var path="flags/";
  var ext=".png";
  alert("");
  document.getElementById("mainCurr").src=path+str+ext;
  document.getElementById("mainp").innerHTML=lineArr[x];

}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function list(){
clean("cookie");




document.getElementById("cList").style.display="block";

  document.getElementById("costumize").style.display="none";
//
document.getElementById("ok").style.display="block";


var path="flags/";
var ext=".png";


alert('asna');

  for(var x=0;x<lineArr.length-1;x++){
var src=isoCode(lineArr[x]);

var mydiv=document.createElement("div");
mydiv.className="other";
mydiv.id=src;
//








 mydiv.addEventListener("click", function(){

//alert(this.id);
if(getCookie(this.id).length<=0){
var coChunk= this.id+'='+this.id;
var exChunk=";expires=Thu, 31 Dec 3216 12:00:00 UTC; path=/";
document.cookie =coChunk+exChunk;
document.getElementById(this.id).style.borderRight= "5px solid #6bc6b2";

}
else{
      document.cookie=this.id+"=;expires=Thu, 31 Dec 1400 12:00:00 UTC; path=/";
      document.getElementById(this.id).style.borderRight= "0px solid #ffffff";

}


   });





var img=document.createElement("img");




img.className="cFlag";
var img_id="flag"+x;
img.id=img_id;

img.src=path+src+ext;

var label=document.createElement("label");
var name=document.createElement("p");

  name.className="name";
name.id="name"+x;
    name.innerHTML=lineArr[x];

  label.className="symbole";
label.id="symbole"+x;
    label.innerHTML=obj.quotes["USD"+arr[src]];


 if(label.innerHTML=="undefined"){
label.innerHTML="N/A";
}

  mydiv.appendChild(img);
  mydiv.appendChild(name);
  mydiv.appendChild(label);

document.getElementById("cList").appendChild(mydiv);


if(getCookie(mydiv.id).length>0){

document.getElementById(mydiv.id).style.borderRight= "5px solid #6bc6b2";
//.style.width = "2px";
}

  }

}


function compare(tmp){

var path="flags/";
var ext=".png";




//must change classes and ids
var mydiv=document.createElement("div");
mydiv.className="other";
mydiv.id=tmp;
var img=document.createElement("img");


img.className="cFlag";
var img_id="flag"+xc;
img.id=img_id;

img.src=path+tmp+ext;
var label=document.createElement("label");

  label.className="symbole";
label.id="symbole"+xc;
    label.innerHTML=obj.quotes["USD"+arr[tmp]];
    if(label.innerHTML=="undefined"){
   label.innerHTML="N/A";
   }


  mydiv.appendChild(img);
  mydiv.appendChild(label);

document.getElementById("cList").appendChild(mydiv);
xc++;



}



function menu (){
document.getElementById("costumize").style.display="block";
}


function share (){
document.getElementById("costumize").style.display="none";
document.getElementById("share").style.display="block";
}


function about (){
alert("Developed by Ortex .inc 2017©");
}

function ok (){
  document.getElementById("ok").style.display="none";
clean("all");
 document.getElementById("cList").style.display="block";
ReadCookie();
}



function ReadCookie() {

               var allcookies = document.cookie;
               // Get all the cookies pairs in an array
               cookiearray = allcookies.split(';');
               cookiearray = allcookies.split(' ');
               // Now take key value pair out of this array

               for(var i=0; i<cookiearray.length; i++){
              compare(cookiearray[i].split('=')[0]);
              }
            xc=0;
           }






getCurr();
getDB("data/clist.db");
//alert(isoCode("AE ee"));
ReadCookie();
init("ae",1);
