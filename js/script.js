// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays what type of movie the user can see depending on the age given by the user
 */
function displayAnswer () {
  
  	// initialize variables (answer)
	let answer = ""
	
	// get user input (age)
	let age = parseInt(document.getElementById('age').value)


   // determine the answer based on the users age

    if (age > 17) {

        answer = "You can see an R rated movie alone."

    }

    else if (age > 13) {

        answer = "You can see a PG-13 rated movie alone."

    }  

	else if (age > 9) {

        answer = "You can see a G or PG rated movie alone."
    }

  else {

        answer = "You can't watch a movie alone."

    }


  // display the results 
  document.getElementById('answer').innerHTML = answer

}