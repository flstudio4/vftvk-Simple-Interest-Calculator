"use strict";

/*
    Project: Final project
    Author: Dmitrii Sumenko
    Date: 9/23/2022
    file name: script.js

 */

    function compute() {
        let principal = document.getElementById("principal").value;

        // Validates principal input field for positive numbers and numbers that starts with 0
        if (principal <= 0 || principal[0] === 0) {
            alert("Enter a positive number");
            document.getElementById("principal").value = "";
            document.getElementById("principal").focus();
        }

        // If input is valid, proceed to calculations
        else if (principal > 0) {
            let rate = document.getElementById("rate").value;
            let years = document.getElementById("years").value;
            let interest = principal * years * rate / 100;
            let year = new Date().getFullYear() + parseInt(years);

            // compose inner HTML for displaying results of calculations
            document.getElementById("result").innerHTML = `<p id="text">If you deposit <mark>${principal}</mark>,<br>at an interest
                                                                   rate of <mark>${rate}%</mark>.<br>You will receive an amount
                                                                   of <mark>${interest}</mark>,<br>in the year <mark>${year}</mark></p>`;
        }
    }

    // Update number of percent for slider
    function updateRate() {
        document.getElementById("rate_val").innerText=document.getElementById("rate").value + "%";
    }
        