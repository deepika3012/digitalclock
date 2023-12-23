function currentDate(){
var date=new Date(); 
console.log(date);
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var dd=date.getDate();
var mo=date.getMonth();
var yy=date.getFullYear();
var dy=date.getDay();
console.log(hh,mm,ss,dd,mo,yy,dy)
var am_pm="Am";
if(hh>=12){
    am_pm="Pm";
    if(hh>12){
        hh-=12;
    } 

}
if(hh==0){
    hh=12;
}
var day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
dy=day[dy];
var month=["jan","feb","march","Apr","may","june","july","aug","sep","oct","nov","dec"]
mo=month[mo];


console.log(dy,mo);
var allh1=document.querySelectorAll("h1")
allh1[0].innerHTML=`${hh}:${mm} ${am_pm}`;
allh1[1].innerHTML=`${dd}/${mo}/${yy}`;
allh1[2].innerHTML=dy;
 allh1[3].innerHTML=ss;
setTimeout(currentDate,1000);
} 
currentDate()
 

