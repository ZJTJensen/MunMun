var mark = {
    x: 50,
    y: 0
}
var direction = 0;
var velocity = 0;
function displayMark(){
    document.getElementById('mark').style['top']=mark.y+'px';
    if(mark.y > 350){
        mark.y = 350;
    }
    document.getElementById('mark').style['left']=mark.x+'px';
}
function gravity(){
    if (mark.y < 350){
        mark.y += 20;
    }
}

        
function gameloop(){
    gravity();
    displayMark();
    velocity = 0;
} setInterval(gameloop, 75);

document.onkeydown= function(e){
    if(e.keyCode==37){
        mark.x-=15;
        direction = -1;
        velocity = -1;
        char = document.getElementById('hero').src
        if(char == "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/mark/loading/standstill-1.png" || char == "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/mark/movement/reverse/Ridle-1.png" ){
        document.getElementById('hero').src="mark/movement/reverse/Rstep-1.png";
        document.getElementById('mark').style['width']= "64px";
        }
        else{
            document.getElementById('hero').src="mark/movement/reverse/Ridle-1.png";
            document.getElementById('mark').style['width']= "50px";
        }
        if(mark.x<=0){
            mark.x+=15;
        }
    }
    else if(e.keyCode==39){
        direction = 1;
        velocity = 1;
        mark.x+=35;
        char = document.getElementById('hero').src
        if(char == "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/mark/loading/standstill-1.png" || char == "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/mark/movement/reverse/Ridle-1.png"){
        document.getElementById('hero').src="mark/movement/step-1.png";
        document.getElementById('mark').style['width']= "64px";
        }
        else{
            document.getElementById('hero').src="mark/loading/standstill-1.png";
            document.getElementById('mark').style['width']= "50px";
        }
        if(mark.x>=1000){
            mark.x-=35;
            
        }
    }
    if(e.keyCode==38 && mark.y == 350){
        if(velocity == 1){
            mark.x += 35;
            if(mark.x>=1000){
                mark.x-=35;
                
            }
        }else if (velocity == -1){
            mark.x -= 15;
            if(mark.x<=0){
                mark.x+=15;
            }
        }
        mark.y-=150;
        char = document.getElementById('hero').src;
        if (char != "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/mark/movement/step-1.png" || char != "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/mark/movement/reverse/Rstep-1.png" ){
            if (direction == -1){
                document.getElementById('hero').src="mark/movement/reverse/Rstep-1.png";
                document.getElementById('mark').style['width']= "64px";
            }else{
                document.getElementById('hero').src="mark/movement/step-1.png";
                document.getElementById('mark').style['width']= "64px";
            }
        }
        
        if(mark.y<=0){
            mark.y+=10;
        }
    }
    else if(e.keyCode==40){
        
    }
    else if(e.keyCode==32){
        function punch(){
        document.getElementById('hero').src="mark/movement/punch-1.png";
        }setTimeout(punch, 200 );
        function punch2(){
           document.getElementById('hero').src="mark/movement/punch-2.png";
           document.getElementById('mark').style['width']= "66px";
        }setTimeout(punch2, 400 );
        function punch3(){
            document.getElementById('hero').src="mark/loading/standstill-1.png";
            document.getElementById('mark').style['width']= "50px";
        }setTimeout(punch3, 1000 );
    
    
        
    }
}