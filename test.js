document.write("<p>this is a java script paragraph from extrenal file</p>");
// simple function.
document.getElementById('demo').innerHTML = "Hello nJavascript from Js file";
// some vars
let x = 10,
 y = 30,
 z = 100,
 firstName = "Mohamad ",
 lastName = "Asfour";
//  document.getElementById("test").innerHTML = (x + z )* y;
//  document.getElementById('test').innerHTML = lastName + ', ' + firstName;
if(x + z === 110){
    document.getElementById("test").innerText = 'that it, the result is ' + 110;
    

}else{
    document.getElementById('test').innerText = 'please be sure about what you type';
}

let myArray = [firstName, lastName, x, z, y];
console.log('length of array is ' +myArray.length);

console.log(myArray.slice(0, 4));
document.write(myArray.splice(0,3,4));
 let r = {"lastName": 'Asfour', 'age': '30' };
 console.log(r);

let dwarv = ['bifur', 'bofur', 'damin', 'adny', 'nore', 'iron', 'wood','white'];
let nameLength = dwarv.map(function(item, index, array){
    return item;

});



console.log(nameLength);





 