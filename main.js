guest_arre = [];
function submit() {
   display_arre=[];
   for (var j = 1; j <=5; j++) {
       var name_guest=document.getElementById("name_"+j).value;
       console.log(name_guest);
       guest_arre.push(name_guest);
   }
   console.log(guest_arre);
   for (var k = 0; k <guest_arre.length; k++) {
       display_arre.push("<h4> NAME - "+guest_arre[k]+"</h4>");
   }
   document.getElementById("with_comma").innerHTML=display_arre;
    console.log(guest_arre);
    document.getElementById("name_div").innerHTML=guest_arre;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("show_button").style.display="inline-block";
}
function showing() {
    guest_arre.show();
    console.log(guest_arre);
    document.getElementById("name_div").innerHTML=guest_arre;
}