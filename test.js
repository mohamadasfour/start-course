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
 