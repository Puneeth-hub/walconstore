let listEl_1 = document.getElementById("list1");
let listEl_2 = document.getElementById("list2");
let listEl_3 = document.getElementById("list3");
let listEl_4 = document.getElementById("list4");

let sizeEl_1 = document.getElementById("size1");
let sizeEl_2 = document.getElementById("size2");
let sizeEl_3 = document.getElementById("size3");
let sizeEl_4 = document.getElementById("size4");
let sizeEl_5 = document.getElementById("size5");

let buttonEl = document.getElementById("button");

let decreaseEl = document.getElementById("decrease");
let increaseEl = document.getElementById("increase");
let numberEl = document.getElementById("number");
let number = numberEl.textContent

function decreaseCount() {
    let number = numberEl.textContent
    if (number > 1) {
        let value = parseInt(number) - 1
        numberEl.textContent = value
    }
}

function increaseCount() {
    let number = numberEl.textContent
    let value = parseInt(number) + 1
    numberEl.textContent = value
}


function clickColor1() {
    listEl_1.classList.add("click")
    listEl_2.classList.remove("click")
    listEl_3.classList.remove("click")
    listEl_4.classList.remove("click")
}

function clickColor2() {
    listEl_2.classList.add("click")
    listEl_1.classList.remove("click")
    listEl_3.classList.remove("click")
    listEl_4.classList.remove("click")
}

function clickColor3() {
    listEl_3.classList.add("click")
    listEl_1.classList.remove("click")
    listEl_2.classList.remove("click")
    listEl_4.classList.remove("click")
}

function clickColor4() {
    listEl_4.classList.add("click")
    listEl_1.classList.remove("click")
    listEl_2.classList.remove("click")
    listEl_3.classList.remove("click")
}

function changeSize1() {
    sizeEl_1.classList.add("click")
    sizeEl_2.classList.remove("click")
    sizeEl_3.classList.remove("click")
    sizeEl_4.classList.remove("click")
    sizeEl_5.classList.remove("click")
}

function changeSize2() {
    sizeEl_1.classList.remove("click")
    sizeEl_2.classList.add("click")
    sizeEl_3.classList.remove("click")
    sizeEl_4.classList.remove("click")
    sizeEl_5.classList.remove("click")
}

function changeSize3() {
    sizeEl_1.classList.remove("click")
    sizeEl_2.classList.remove("click")
    sizeEl_3.classList.add("click")
    sizeEl_4.classList.remove("click")
    sizeEl_5.classList.remove("click")
}

function changeSize4() {
    sizeEl_1.classList.remove("click")
    sizeEl_2.classList.remove("click")
    sizeEl_3.classList.remove("click")
    sizeEl_4.classList.add("click")
    sizeEl_5.classList.remove("click")
}

function changeSize5() {
    sizeEl_1.classList.remove("click")
    sizeEl_2.classList.remove("click")
    sizeEl_3.classList.remove("click")
    sizeEl_4.classList.remove("click")
    sizeEl_5.classList.add("click")
}

function addCartItem() {
    alert("The Product has been added to the Cart")
}