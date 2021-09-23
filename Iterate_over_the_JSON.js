//JSON ITERATION
//ARRAY
//FOR LOOP
let str = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp1 = "";
for(let i=0; i<str.length; i++){
    temp1 += str[i] + " ";
}
console.log("FOR LOOP : ", temp1.trim());

//FOR OF LOOP
let temp2 = "";
for(let num of str){
    temp2 += num + " ";
}
console.log("FOR OF :", temp2.trim());

//FOR EACH LOOP
console.log("FOR EACH LOOP :");
str.forEach(function(number, index){
    
    console.log("index: ", index, "number: ", number);
});

//FOR IN LOOP
let obj = {
    name : "Karthick Raja S",
    age : 24,
    schooling : "Don bosco",
    college : "PEC Vaniyambadi",
    education : "Mechanical Engineering",
    contact_num : 6782453298
};
console.log("FOR IN LOOP :");
for(let details in obj){
    console.log(`${details} => ${obj[details]}`);
}