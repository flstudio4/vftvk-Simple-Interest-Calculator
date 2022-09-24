"use strict";

/*
    Project: Final project
    Author: Dmitrii Sumenko
    Date: 9/23/2022
    file name: script.js

 */

    function compute() {
        let principal = document.getElementById("principal").value;
        principal = parseInt(principal);

        if (principal <= 0) {
            alert("Enter a positive number");
            document.getElementById("principal").value = "";
            document.getElementById("principal").focus();
        }

        else if (principal > 0) {
            let rate = document.getElementById("rate").value;
            let years = document.getElementById("years").value;
            let interest = principal * years * rate / 100;
            let year = new Date().getFullYear() + parseInt(years);

            document.getElementById("result").innerHTML = `<p id="text">If you deposit <mark>${principal}</mark>,<br>at an interest
                                                                   rate of <mark>${rate}%</mark>.<br>You will receive an amount
                                                                   of <mark>${interest}</mark>,<br>in the year <mark>${year}</mark></p>`;
        }
    }

    function updateRate() {
        document.getElementById("rate_val").innerText=document.getElementById("rate").value + "%";
    }
        