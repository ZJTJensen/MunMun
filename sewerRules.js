
var fellinsewer=false;
var checker = false;
var plat ={
    x:320,
    y:250,
    h:80,
    w:200
};

var log ={
    x:620,
    y:150,
    h:300,
    w:50
};

var plat2 ={
    x:1790,
    y:250,
    h:80,
    w:200
};

var area;
var largesum;

function colision(platform){
    if (
        mark.x < platform.x + platform.w && 
        platform.x < mark.x + mark.w &&
        mark.y < platform.y + platform.h &&
        platform.y < mark.y + mark.h

    ){
        var sums = [
            mark.x + mark.w, 
            //platform.y + platform.h 
            // platform.x + platform.w, 
            // mark.y + mark.h
        ];
             largesum = sums[0];
            for (i=0 ; i < sums.length; i++){
                
                if (sums[i]<=largesum){
                    area = i;
                    largesum = sums[i];
                }
            }
            if(area == 0){
                mark.x -=5;
                mark.y -= mark.y- platform.y;
                isJump = false;
            }
            // else if (area == 1){
            //     mark.y += platform.y - mark.y;
            // }
            // else if (area == 2){
            //     mark.x += platform.x-platform.w;
            // }
            // else if(area == 0){
            //     mark.x -= platform.x-platform.w;
     }

}

function colision2(platform){
    if ( mark.x < platform.x + platform.w && platform.x < mark.x + mark.w && mark.y < platform.y + platform.h && platform.y < mark.y + mark.h){
        var sums = [
            mark.x - (platform.x + platform.w),


            platform.x - (mark.x + mark.w), 
            mark.x - (platform.y + platform.h), 
            platform.x - (mark.y + mark.h)
        ];
             largesum = sums[0];
            for (i=0 ; i < sums.length; i++){
                
                if (sums[i]>=largesum){
                    area = i;
                    largesum = sums[i];
                }
            }
            console.log(area, largesum)
            if(area == 0){
                mark.x -=5;
                mark.y -= mark.y- log.y;
                isJump = false;
            }


            else if (area == 1){
                mark.x -=5;
                mark.x -= log.x -mark.x;
            }
            // else if (area == 2){
            //     mark.x += platform.x-platform.w;
            // }
            // else if(area == 3){
            //     mark.x -= platform.x-platform.w;
            // }
      }

}


function sewerMove(){
    if(mark.y >= 320){
        fellinsewer = true;
        // mark.x -= 1;
    }
}

function Moon(){
    if(mark.x <= 20){
        window.location = "file:///C:/Users/Zach/Desktop/personal/Mun/cahr/end.html";
    }
}

function mapMove(){
    plat.x -=5;
    document.getElementById("platform").style["left"] = plat.x + 'px';

    log.x -=5;
    document.getElementById("stick").style["left"] = log.x + 'px'; 
    
    plat2.x -=5;
    document.getElementById("platform2").style["left"] = plat2.x + 'px';
    //= plat.x + "px"

}

function gamelooper(){
    if(plat2.x  > 1000){
        document.getElementById("platform2").style["display"] = "none";
        }else {
            document.getElementById("platform2").style["display"] = "inline-block";
        }
    

    sewerMove();
    Moon();

    // first plat 
    colision(plat);
    colision(plat2);
    colision2(log);
    mapMove()
}
var int= setInterval(gamelooper, 75);


  
  
