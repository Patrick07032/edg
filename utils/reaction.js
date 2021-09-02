// alert("JS is working also...");
"use strict";

const login_form = document.getElementById("form");
const fp_form = document.getElementById("forgotpasswordform");
const fp_btn = document.getElementById("fp_btn");
const ca_btn = document.getElementById("ca_btn");
const el_btn = document.getElementById("el_btn");

fp_btn.addEventListener("click", () => {
    fp_form.style.display = "block";
    login_form.style.display = "none";
    fp_btn.style.display = "none";
    ca_btn.style.display = "none";
});

el_btn.addEventListener("click", () => {
    fp_form.style.display = "none";
    login_form.style.display = "block";
    fp_btn.style.display = "block";
    ca_btn.style.display = "block";
});
