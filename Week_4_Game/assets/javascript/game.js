

		var numbToMatch;
		var PlyCntNum;
		var blueRock;
		var greenRock;
		var purpleRock;
		var metalRock;
		var winz = 0;
		var lz;
		var newSum = 0;


//this is to make the start button change to on
	function startButtonAlt(){

	var image = document.getElementById("buttonSTL");
	image.src = "assets/images/starty2.png";
	numbToMatch = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
	document.getElementById("compNum").innerHTML = numbToMatch;

//crystals are assigned random values
	blueRock = Math.floor(Math.random() * 10) + 1 ;
	greenRock = Math.floor(Math.random() * 10) + 1 ;
	purpleRock = Math.floor(Math.random() * 10) + 1 ;
	metalRock = Math.floor(Math.random() * 10) + 1 ;
	
	//console.log(blueRock);
	//console.log(greenRock);
	//console.log(purpleRock);
	//console.log(metalRock);
	}



//when icon is clicked, pull value and add to sum function
//update value with each icon click
		function iconB(){

		newSum = newSum + blueRock;
		console.log(newSum, blueRock);
			document.getElementById("PlyzNum").innerHTML = newSum;
			xyz();

	}

		function iconG(){

		newSum = newSum + greenRock;
		console.log(newSum);	
				document.getElementById("PlyzNum").innerHTML = newSum;
				xyz();

	}

		function iconT(){

		newSum = newSum + purpleRock;
		console.log(newSum);
			document.getElementById("PlyzNum").innerHTML = newSum;
			xyz();		
	}

		function iconP(){

		newSum = newSum + metalRock;
		console.log(newSum);
			document.getElementById("PlyzNum").innerHTML = newSum;
			xyz();
	}	
	
//do conditional

function xyz(){

	var i = 1;

 	if( newSum === numbToMatch ){


 		document.getElementById("winCount").innerHTML = i++;

 		//you win pop up START///////////////////////////////////////////////////////////

				// function that activates pop up goes here; linked with resetting page

 		//you win pop up END///////////////////////////////////////////////////////////
 		


 		//reset TO INSERT HERE
 		console.log(newSum);



 	}

 	else if(newSum > numbToMatch){

  		document.getElementById("loseCount").innerHTML = i++;
  		// you lose START//////////////////////////////////////////////////////
 
				// function that activates pop up goes here; linked with resetting page

		// you lose END//////////////////////////////////////////////////////


   		console.log(newSum);	
 	}




//reset


}

			//works with button on page but doesn't work when put into function xyz(){}
 		function POPOPENWin(){


		document.getElementById("modalWin").style.display = "block";

		}

		function POPCLOSEWin(){


		document.getElementById("modalWin").style.display = "none";

		}