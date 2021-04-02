window.onload=init;
var x,y, lvl,color,color2,si=0,sj=0,a=1,z=0,check=1;
var lever=0;
function init(){
    $("#start").prop("disabled", true);
    if((!$("#wd").val())||(!$("#hi").val())||(!$("#lvl").val())){
        $("#start").prop("disabled", true);
    }
    
    $("#but").click(function (){
        if(check==1){
        check--;
        scan();
    }
    });
}
function scan(){
  x=$("#wd").val();
  y=$("#hi").val();
  lvl=$("#lvl").val();
  color=$("#color").val();
  color2=$("#color2").val();
  console.log(x);
  if((x<=0||x==undefined)){
      x=10;
  }
  if((y<=0||y==undefined)){
      y=10;
  }
  if((lvl<=0||lvl==undefined)){
      lvl=3;
  }
  var radios = document.getElementsByName('class2');
for (var i = 0, length = radios.length; i < length; i++){
    if (radios[i].checked){
       letter=radios[i].value;
        break;
    }
}
  $( "#wind" ).fadeOut( "slow" );
  setTimeout(function() { $("#wind").remove(); }, 1000);
  setTimeout(area, 1000);

}
function area(){
    c=$('<table>');
    place=c;
    c.appendTo("body");
    $(c).attr('id', 'maze');
    c=$('<tbody>');
    $(c).attr('id', 'maze2');
    c.appendTo(place);
    $('#maze').css('display','none');
    gen();
}
function gen(){
    var calss;//что будет в клетке
    var disp = newMaze(x,y);
    for (var i = 0; i < disp.length; i++) {
        $('#maze > tbody').append("<tr>");
        for (var j = 0; j < disp[i].length; j++) {
            calss=parseInt(Math.random()*800);
            var selector = i+"-"+j;
            $('#maze > tbody').append("<td id='"+selector+"'>&nbsp;</td>");
            if (disp[i][j][0] == 0) { $('#'+selector).css('border-top', '2px solid'+color2 ); }
            if (disp[i][j][1] == 0) { $('#'+selector).css('border-right', '2px solid' +color2); }
            if (disp[i][j][2] == 0) { $('#'+selector).css('border-bottom', '2px solid' +color2); }
            if (disp[i][j][3] == 0) { $('#'+selector).css('border-left', '2px solid' +color2); }
            if(calss>=150&&calss<=200){
                    $('#'+selector).addClass("item");
                }
        }
}
c=$("#"+(i-1)+"-"+(j-1));
        c.addClass("end");
        $('#maze > tbody').append("</tr>");
draw();
if(lever==0)
setTimeout(fadein,1000);
if(a==1){
    move();
    a--;
}
}
function fadein(){
    $("#maze").fadeIn("slow");
}
function fadeout(){
    $("#maze").fadeOut("slow");
}
function draw(){
    c=$('#0-0');
    c.addClass("player");
    c.css('background-color',color);
}


function move(){
    if(lever==0){
$(document).keydown(function (e) {
    if($("#maze").length&&z==0){
        switch(e.keyCode){
            case 37:
        if($("#"+si+"-"+sj).css("border-left-style")!=="solid"){
            $("#"+si+"-"+sj).removeClass();
            $("#"+si+"-"+sj).css("background-color","#0e4db2");
            sj--;
            $("#"+si+"-"+sj).addClass("player");
            $("#"+si+"-"+sj).css('background-color',color);
        }
        break;
    case 38:
        if($("#"+si+"-"+sj).css("border-top-style")!=="solid"){
            $("#"+si+"-"+sj).css("background-color","#0e4db2");
            $("#"+si-1+"-"+sj).removeClass();
            si--;
            $("#"+si+"-"+sj).addClass("player");
            $("#"+si+"-"+sj).css('background-color',color);
            
}
break;
case 39:
                if($("#"+si+"-"+sj).css("border-right-style")!=="solid"){
            $("#"+si+"-"+sj).removeClass();
            $("#"+si+"-"+sj).css("background-color","#0e4db2");
            sj++;
            $("#"+si+"-"+sj).addClass("player");
            $("#"+si+"-"+sj).css('background-color',color);
}
break;
case 40:
    if($("#"+si+"-"+sj).css("border-bottom-style")!=="solid"){
        $("#"+si+"-"+sj).removeClass();
            $("#"+si+"-"+sj).css("background-color","#0e4db2");
            si++;
            $("#"+si+"-"+sj).addClass("player");
            $("#"+si+"-"+sj).css('background-color',color);
            
}
break;
    }
    if($("#"+si+"-"+sj).hasClass("end")&&$("#"+si+"-"+sj).hasClass("player")){
        $("#maze").fadeOut("slow");
        setTimeout(function(){
                $("#"+si+"-"+sj).removeClass();
                $("#maze2").empty();
                lvl--;
                si=sj=0;
                console.log("da");
                    if(lvl<=0){
                        console.log("no");
                        lever=1;
                        winscreen();
    }
     else{ gen();}           
            },1000);
    }
    if($("#"+si+"-"+sj).hasClass("item")&&$("#"+si+"-"+sj).hasClass("player")){
        z=1;
        act(z);
        z=0;
    }
    }
});
}
}

