main();
function main(){

 let array = [true,false,true];
 console.log(array.length);
 console.log(array[3]);
    console.log(array);
    createArray();
}

function createArray(){
    let arr =[];
    let ranLength = Math.floor(Math.random()*100);
    for(let i =0; i<ranLength; i++){
        arr.push(Math.round(Math.random()*20));
    }
    console.log(arr);

}



//TASK: Make a function that create a random length
//      array full of random numbers.
//      Math.random()   Math.floor()
//      USE A FOR LOOP
//      array.push()    array.pop()