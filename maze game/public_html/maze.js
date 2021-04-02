var chests=0,gold=0,i=1;
function act(i){
    if($("#maze").length){
        item();
    }
}
function winscreen(){
    console.log(gold);
         c=$('<div>');
    c.appendTo("body");
    $(c).attr('id', 'winscreen');
    $('#winscreen').css('display','none');
    c.css('background-color',"#d4af37");
    c.css("border","8px double blue");
    c.css("width","460px");
    c.css("height","370px");
    c.css("margin-left", "36%");
    c.css("margin-top", "15%");
    c=$('<h1>');
    c.appendTo($("#winscreen"));
    c.text("Вы нашли выход");
    c=$('<h2>');
    c.appendTo($("#winscreen"));
    c.text("Открытых сундуков: " +chests);
    c=$('<h2>');
    c.appendTo($("#winscreen"));
    c.text("Золота найдено: " +gold);
    $("#winscreen").fadeIn("slow");
    
    if(localStorage.getItem("counter")){
        i=localStorage.getItem("counter");
    }
    else{
    if(i==11){
        localStorage.setItem("counter",i=1);
    }
    else{
        localStorage.setItem("counter",i);
    }
    }
localStorage.setItem(i,"лабиринт " +i+": "+gold);
i++;
}
function item(){
    chests++;
 gold+=parseInt(Math.random()*(513));
 return 0;
}