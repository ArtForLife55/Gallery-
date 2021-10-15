// $(".page1").hide();
$("#carrousell").hide();
// $(".page2").hide();

function next() {
    $(".page1").hide();
    $("#carrousell").show();
}
function next1() {
    $(".page1").hide();
    $("#carrousell").hide();
    $(".page2").show();
}
var sliderContainer = document.querySelector(".slider-container");
var slideRight = document.querySelector(".right-slide");
var slideLeft = document.querySelector(".left-slide");
var upButton = document.querySelector(".up-button");
var downButton = document.querySelector(".down-button");
var slidesLength = slideRight.querySelectorAll("div").length;
// The  querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

var activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
// Heni helped me with this line i understood that its based on styling the vertical height as an animation number and using the backtiks lets use any javascript context were ever you need it .

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

var changeSlide = (direction) => {
    var sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
    }px)`;
    slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
    }px)`;
};

// LIKE button

$(document).ready(function () {
    $(".content").click(function () {
        $(".content").toggleClass("heart-active");
        $(".text").toggleClass("heart-active");
        $(".numb").toggleClass("heart-active");
        $(".heart").toggleClass("heart-active");
    });
});
// ==> toggleClass :Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
