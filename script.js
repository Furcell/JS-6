"use strict";

// HomeWork - 6

// დავალება #1 - Input მაგალითს დაუმატეთ წაშლის აიქონი fontawesome-იდან;

let inputElement = document.getElementById("input-element");
let addButton = document.getElementById("add-btn");
let listUl= document.getElementById("ul-list");



addButton.addEventListener("click",function (e) {
    let inputValue = inputElement.value;

    if (inputValue === "") {
        return;
    }


    let liElement = document.createElement("li");
    liElement.textContent = inputValue;
    listUl.appendChild(liElement);


    let iconDelete = document.createElement("i");
    iconDelete.classList.add("fa-solid","fa-trash");
    iconDelete.addEventListener("click",function () {
        liElement.remove();
    })
      liElement.appendChild(iconDelete);


    inputElement.value = "";
})



// დავალება #2 - 2.	Burger bar ის აწყობა ანიმაციით ( ბურგერი თქვენით უნდა ააწყოთ)
let menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click",() => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});


let nav = document.getElementById("navBar")
let burger = document.getElementById("burgerBar")

burger.addEventListener("click",function (params) {
    nav.classList.toggle("navActive");
})