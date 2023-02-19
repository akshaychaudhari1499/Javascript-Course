// const Akshay = ['Akshay', 'Chaudhari', 'Bagapur',{name:'Akshay',
// age:23},['Akshay','single'],24,true];
// for(let i=0;i<Akshay.length;i++){
//     console.log(Akshay[i]);
// }
// const years=[1999,1998,1991,1923,1967];
// const age=[];
// for (let i=0;i<years.length;i++){
//     age.push(2023-years[i]);
//     // if(age[i]>=50) continue;            //continue statement will skip the current iteration and will move on to next iteration
//     // console.log(age[i]);                //continue will not work for the things written above the condition
// if(age[i]===100) break; //

// }
// console.log(age);

//while loop

let dice=Math.trunc(Math.random()*6+1);
if (dice===6) console.log("congrats ! you got 6 in the first go");
while(dice !==6){
   // console.log('dice rolled');
    console.log(`you rolled ${dice}`);
    dice=Math.trunc(Math.random()*6+1);
    if (dice===6) console.log("loop is about to end as you got 6");
}

