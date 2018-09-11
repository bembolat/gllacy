var popup = document.querySelector(".feedback");
var linkPopup = document.querySelector(".link-connect");
var wrapperPopup = document.querySelector(".wrapper-popup");
var closePopup = document.querySelector(".button-close");
var linkLogin = document.querySelector(".wrapper-login");
var login = document.querySelector(".modal-login");
var shell = document.querySelector(".wrap");
var boxLogin = login.querySelector(".focus");
var search = document.querySelector(".search");
var searching = document.querySelector(".search-form");
var field = searching.querySelector("[type=search]");
var btn1 = document.querySelector("[for=btn-1]");
var btn2 = document.querySelector("[for=btn-2]");
var btn3 = document.querySelector("[for=btn-3]");
var body = document.querySelector("body");
var show = "modal-show";
var cream = "cream";
var chocolate = "chocolate";
var berry = "berry";
var objectPopup = [popup, wrapperPopup];

var gathering = function (object, selector) {
  for (var i = 0; i < object.length; i++) {
    if (object[i].classList.contains(selector)) {
    object[i].classList.remove(selector);
  } else {
    object[i].classList.add(selector);
  }
  }
  }
/*function handler() {
  foo();
}

function foo() {
  var event = foo.caller.arguments[0];

  event.preventDefault();
}

document.querySelector('button').addEventListener('click', handler);var gathering = function(object, selector){
    Object.values(object).map( item => item.classList.toggle(selector) )
}*/
linkLogin.addEventListener("mouseover", function (evt) {
  evt.preventDefault;
  login.classList.add(show);
});

linkLogin.addEventListener("mouseout", function (evt) {
  login.classList.remove(show);
});

search.addEventListener("mouseover", function (evt) {
  evt.preventDefault;
  searching.classList.add(show);
  field.focus();
});

search.addEventListener("mouseout", function (evt) {
  searching.classList.remove(show);
});

linkPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
 gathering(objectPopup, show)
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
 gathering(objectPopup, show)
});

wrapperPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
 gathering(objectPopup, show)
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
  popup.classList.remove(show);
  wrapperPopup.classList.remove(show);
  }
  });

btn1.addEventListener("click", function (evt) {
    shell.classList.add(cream);
    shell.classList.remove(chocolate, berry);
    body.style.backgroundColor = "#849d8f";
});

btn2.addEventListener("click", function (evt) {
    shell.classList.add (chocolate);
    shell.classList.remove (cream, berry);
    body.style.backgroundColor = "#8996a6";
});

btn3.addEventListener("click", function (evt) {
    shell.classList.add (berry);
    shell.classList.remove (cream, chocolate);
    body.style.backgroundColor = "#9d8b84";
})
