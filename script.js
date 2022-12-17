main();




function main(){


    const number = document.querySelector(".num");
    const can1 = document.querySelector(".c");
    const can2 = document.querySelector(".c2");
    const can3 = document.querySelector(".c3");
    const can4 = document.querySelector(".c4");
    let temp = Math.ceil(Math.random()*100000);
    number.innerHTML=temp;
    let c =Math.floor(Math.random()*16777215).toString(16);
    number.style.color= "#"+ c;
    can1.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    can2.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    can3.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    can4.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    setTimeout(function(){window.location.reload()},300);


}