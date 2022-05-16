// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays whether or not you get a discount at the museum depending on the input from the user
 */
function displayAnswer () {
  
  	// initialize variables (answer)
	let answer = ""

  // get user input (day of the week)
  let age = parseInt(document.getElementById('age').value)
  
  let select = document.getElementById('day');
  let day = select.options[select.selectedIndex].value;


  
   // determine the answer based on the users age and the day of the week

    if ( (age > 95) || (age <5) ) {

        answer = "You get in for free."

    }

    else if ( (age > 11) && (age < 22) ) {

        answer = "You get a discount."

    }  

	else if ( (day == "tuesday") || (day == "thursday") ) {

        answer = "You get a discount."
    }

  else {

        answer = "You have to pay full price."

    }


  // display the results 
  document.getElementById('answer').innerHTML = answer

}