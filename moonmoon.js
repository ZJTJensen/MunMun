// Tony's collioon
// function isColliding(a,b){
//     return a.x < b.x +b.w &&
//     b.x < a.x +a.w &&
//     a.y< b.y +b.w &&
//     b.y < a.y +a.h;
// }





var mark = {
    x: 50,
    y: 0,
    w: 55,
    h: 135
}

var isJump = false;

var direction = 0;
var velocity = 0;

// function rectangle(){
//     this.x;
//     this.y;
//     this.w;
//     this.h;
// }

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
    mark.w= parseInt(document.getElementById('mark').style['width'], 10)
} setInterval(gameloop, 75);

var counter = 0;

function check(){
    if (counter == 0){
    if(direction == 1){
        document.getElementById('hero').src="mark/loading/standstill-1.png";
        document.getElementById('mark').style['width']= "50px";
    }else{
        document.getElementById('hero').src="mark/movement/reverse/Ridle-1.png";
        document.getElementById('mark').style['width']= "50px";
    }
}
}  setInterval(check, 1000)

document.onkeydown= function move(e){
    clearInterval(check);
    if(e.keyCode==37){
        mark.x-=35;
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
            mark.x+=35;
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
    if (mark.y == 350){
        isJump = false;
    }
    if(e.keyCode==38 && isJump == false){
        isJump = true;
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
        

        if(direction == 1){
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
        } else{
        function punch(){
            document.getElementById('hero').src="mark/movement/reverse/Rpunch-1.png";
        }setTimeout(punch, 200 );
        function punch2(){
           document.getElementById('hero').src="mark/movement/reverse/Rpunch-2.png";
           document.getElementById('mark').style['width']= "66px";
        }setTimeout(punch2, 400 );
        function punch3(){
            document.getElementById('hero').src="mark/movement/reverse/Ridle-1.png";
            document.getElementById('mark').style['width']= "50px";
        }setTimeout(punch3, 1000 );
        }   
    
    
        
    }
    
}