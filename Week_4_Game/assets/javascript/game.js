//alert("Hello, welcome to Crystal Collector");






		var numbToMatch;
		var PlyCntNum;
		var blueRock;
		var greenRock;
		var purpleRock;
		var metalRock;
		var playesrunningtotal = "";
		var winz;
		var lz;
		var sum = [];


//this is to make the start button change to on
	function startButtonAlt(){

	var image = document.getElementById("buttonSTL");
	image.src = "assets/images/starty2.png";
	numbToMatch = Math.floor(Math.random() * 50 + 1 );
	document.getElementById("compNum").innerHTML = numbToMatch;

//crystals are assigned random values
	blueRock = Math.floor(Math.random() * 10 + 1 );
	greenRock = Math.floor(Math.random() * 10 + 1 );
	purpleRock = Math.floor(Math.random() * 10 + 1 );
	metalRock = Math.floor(Math.random() * 10 + 1 );
	
	//console.log(blueRock);
	//console.log(greenRock);
	//console.log(purpleRock);
	//console.log(metalRock);
	}
//when icon is clicked, pull value and add to sum function
//update value with each icon click
		function iconB(){

		sum.push(blueRock);


		//document.getElementById("PlyzNum").innerHTML = ;	
	}

		function iconG(){

		sum.push(greenRock);	
	}

		function iconT(){

		sum.push(purpleRock);	
	}

		function iconP(){

		sum.push(metalRock);	
	}	

console.log(sum);



//do conditional


//feed into win and losses

//reset


	
