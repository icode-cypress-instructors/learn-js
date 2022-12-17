main();
function main(){
   
    const box = document.querySelector(".box");
    const xItem = document.querySelector(".x");
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    const box3 = document.querySelector(".box3");
    const box4 = document.querySelector(".box4");
    const body = document.querySelector("body");
    const scoreboard = document.querySelector(".scoreboard");
    let condition=true;
   for(let j =0; j<100; j++){
    let limit =200;
    setTimeout(function(){
        body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        for(let i =0; i<200; i++){
            setTimeout(function(){
                limit--;
                if(i%2===0){
                    xItem.style.color='blue';
                }else{
                    xItem.style.color = 'red';
                }
                xItem.innerHTML =i;
                if(i>100){
                    box1.style.width = limit+'px';
                    box2.style.width = limit+'px';
                    box3.style.width = limit+'px';
                    box4.style.width = limit+'px';
                }else{
                    box1.style.width=i+'px';
                    box2.style.width=i+'px';
                    box3.style.width=i+'px';
                    box4.style.width=i+'px';
                }
                
            },i*50);
    
        }
        box1.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        box2.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        box3.style.backgroundColor= "#" + Math.floor(Math.random()*16777215).toString(16);
        box4.style.backgroundColor== "#" + Math.floor(Math.random()*16777215).toString(16);
    },j*10000);
   }
   let score =0; 
   box.addEventListener("click",function(){
        let ranRad = Math.floor(Math.random()*50);
        box.style.borderRadius = ranRad +'px';
        score+=10;
        scoreboard.innerHTML =score;
        box.style.marginTop = Math.floor(Math.random()*400)+'px';
        box.style.marginLeft = Math.floor(Math.random()*800)+'px';
        box.style.border = 'solid'+"#" + Math.floor(Math.random()*16777215).toString(16);;
        box.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
   });
}



