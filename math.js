
main();//


function main(){//function definition

    const ex= false;//boolean
    let re = "Hello World!";//string

    let num1 = 10;//creating arguments
    let num2 =4;
    let result =0; 

    let inf = 100/0; 

    console.log(ex);//printing to console
    console.log(re);

    result = addition(num1,num2,result);//using arguments
    console.log(result);

    result=subtraction(num1,num2,result);
    console.log(result);

    result=multiplication(num1,num2,result);
    console.log(result);

    result=division(num1,num2,result);
    console.log(result);

    result=mod(num1,num2,result);
    console.log(result);

    testNumber(inf);
    randomRound();
}

function addition(num1,num2,answer){//created parameters
    answer = num1+num2;
    return answer;//return
}
function subtraction(num1,num2,answer){//created parameters
    answer = num1-num2;
    return answer;//return
}
function multiplication(num1,num2,answer){//created parameters
    answer = num1*num2;
    return answer;//return
}
function division(num1,num2,answer){//created parameters
    answer = num1/num2;
    return answer;//return
}
function mod(num1,num2,answer){//created parameters
    answer = num1%num2;
    return answer;//return
}

/*function testNumber(num1){
    if(num1%2===0){
        console.log("This number " + num1 + " is even.");
    }
    else{
        console.log("This number "+num1+" is odd.");
    }
}

function randomRound(){
    let ran = Math.random()*1000000000;
    ran = Math.ceil(ran);
    ran = Math.sqrt(ran);
    ran = Math.round(ran);
    console.log(ran);
}*/

function testNumber(num1){
    if(num1%2===0){
        console.log("This number "+ num1 + " is even");
    }
    else{
        console.log("This number " +num1+ " is odd");
    }
}

function randomRound(){
    let num = Math.random()*1000000000;
    console.log(num);
    if(num>900000000){
        num = Math.ceil(num);
        console.log("This number is to the ceiling " +num);
    }
    if(num<900000000&&num>500000000){
        num=Math.round(num);
        console.log("This number is rounded "+ num);
    }
    if(num<500000000){
        num = Math.floor(num);
        console.log("This number is floored "+ num);
    }
}