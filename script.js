/* 
Web Design & Client Side Scripting
Lab Week 10
index.html
script.js

Damien Portanier
30 11 2022

Question 3
Create an application that generates an array of 5 random numbers 1-10. The user should then guess a number and the app will tell them how many time that number exists within the array.
*/

//Input (ask to the user to input a number between 1-10)
userChoice=parseInt(prompt("Guess a number that appears in the array between 1 and 10 (please enter a number between 1 and 10) : "));

//Variables + Declare, create and initial an array named array 
min = 1;
max = 11;
array=[5]; //create 5 index 
	
	random1=Math.floor(Math.random() * (max - min) ) + min; //Math.floor() method used to return random integers
	random2=Math.floor(Math.random() * (max - min) ) + min;
	random3=Math.floor(Math.random() * (max - min) ) + min;
	random4=Math.floor(Math.random() * (max - min) ) + min;
	random5=Math.floor(Math.random() * (max - min) ) + min;
	
	array[0]=random1;
	array[1]=random2;
	array[2]=random3;
	array[3]=random4;
	array[4]=random5;
		
counter=0; //to count the number of true
	
function random(){

for(i=0;i<array.length;i++){ 
	document.getElementById("main").innerHTML += "index "+(i+1) + ": " + array[i]+"<br/>"; //output the array for test if it's correct

	if(array[i]==userChoice){ //if statement to compare the result 
		counter++; //count the number of true 
	}		 
}
	return counter; 
}
//output 
document.getElementById("main").innerHTML="Your number choice : "+userChoice+"<br/>Number of time your number appears in the array: "+random()+"<br/>Random numbers in the array:<br/>";


