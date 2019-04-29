var name1;
var name2;
var name3;
var state1 = 0;
var state2 = 0;
var state3 = 0;
function change(input) {
    var inputName = input.getAttribute("name")
    var c = input.parentNode;
    var x = document.getElementsByName(inputName);
    if (state1 == 0 || state2 == 0 || state3 == 0) {
        for (var i = 0; i < x.length; i++) {
            x[i].setAttribute("src", "./images/unchecked.png")
            var OP = x[i].parentNode;
            OP.style.backgroundColor = "#f4f4f4"
            OP.style.opacity = "0.6";
        }
        input.setAttribute("src", "./images/checked.png");
        c.style.backgroundColor = "#cfe3ff";
        c.style.opacity = "1";
        if (c.getAttribute("data-question-id") == 'one') {
            name1 = c.getAttribute("data-choice-id");
            state1 = 1;
        }
        if (c.getAttribute("data-question-id") == 'two') {
            name2 = c.getAttribute("data-choice-id");
            state2 = 1;
        }
        if (c.getAttribute("data-question-id") == 'three') {
            name3 = c.getAttribute("data-choice-id");
            state3 = 1;
        }
    }
    if (state1 == 1 && state2 == 1 && state3 == 1) {
        var cnt = document.getElementById("p2");
        var til = document.getElementById("p1");
        if (name1 != name2 && name2 != name3 && name3 != name1 || name1 == name2 || name1 == name3)
            //????? or ???????name2)
            switch (name1) {
                case 'blep':
                    til.innerText = 'You got: ' + RESULTS_MAP.blep.title;
                    cnt.innerText = RESULTS_MAP.blep.contents;
                    break;
                case 'happy':
                    til.innerText = 'You got: ' + RESULTS_MAP.happy.title;
                    cnt.innerText = RESULTS_MAP.happy.contents;
                    break;
                case 'sleepng':
                    til.innerText = 'You got: ' + RESULTS_MAP.sleeping.title;
                    cnt.innerText = RESULTS_MAP.sleeping.contents;
                    break;
                case 'doepy':
                    til.innerText = 'You got: ' + RESULTS_MAP.dopey.title;
                    cnt.innerText = RESULTS_MAP.dopey.contents;
                    break;
                case 'burger':
                    til.innerText = 'You got: ' + RESULTS_MAP.burger.title;
                    cnt.innerText = RESULTS_MAP.burger.contents;
                    break;
                case 'cart':
                    til.innerText = 'You got: ' + RESULTS_MAP.cart.title;
                    cnt.innerText = RESULTS_MAP.cart.contents;
                    break;
                case 'nerd':
                    til.innerText = 'You got: ' + RESULTS_MAP.nerd.title;
                    cnt.innerText = RESULTS_MAP.nerd.contents;
                    break;
                case 'shy':
                    til.innerText = 'You got: ' + RESULTS_MAP.shy.title;
                    cnt.innerText = RESULTS_MAP.shy.contents;
                    break;
                case 'sleepy':
                    til.innerText = 'You got: ' + RESULTS_MAP.sleepy.title;
                    cnt.innerText = RESULTS_MAP.sleepy.contents;
                    break;
            }
        if (name2 == name3 || (name1 == name2 && name2 == name3))  //??1.3???????
            switch (name1) {
                case 'blep':
                    til.innerText = 'You got: ' + RESULTS_MAP.blep.title;
                    cnt.innerText = RESULTS_MAP.blep.contents;
                    break;
                case 'happy':
                    til.innerText = 'You got: ' + RESULTS_MAP.happy.title;
                    cnt.innerText = RESULTS_MAP.happy.contents;
                    break;
                case 'sleepng':
                    til.innerText = 'You got: ' + RESULTS_MAP.sleeping.title;
                    cnt.innerText = RESULTS_MAP.sleeping.contents;
                    break;
                case 'doepy':
                    til.innerText = 'You got: ' + RESULTS_MAP.dopey.title;
                    cnt.innerText = RESULTS_MAP.dopey.contents;
                    break;
                case 'burger':
                    til.innerText = 'You got: ' + RESULTS_MAP.burger.title;
                    cnt.innerText = RESULTS_MAP.burger.contents;
                    break;
                case 'cart':
                    til.innerText = 'You got: ' + RESULTS_MAP.cart.title;
                    cnt.innerText = RESULTS_MAP.cart.contents;
                    break;
                case 'nerd':
                    til.innerText = 'You got: ' + RESULTS_MAP.nerd.title;
                    cnt.innerText = RESULTS_MAP.nerd.contents;
                    break;
                case 'shy':
                    til.innerText = 'You got: ' + RESULTS_MAP.shy.title;
                    cnt.innerText = RESULTS_MAP.shy.contents;
                    break;
                case 'sleepy':
                    til.innerText = 'You got: ' + RESULTS_MAP.sleepy.title;
                    cnt.innerText = RESULTS_MAP.sleepy.contents;
                    break;
            }
    }
}

function reset() {
     state1 = 0;
     state2 = 0;
     state3 = 0;
    var x = document.getElementsByName("first");
    var y = document.getElementsByName("sec");
    var z = document.getElementsByName("thi");;
    for (var i = 0; i < x.length; i++) {
        x[i].setAttribute("src", "./images/unchecked.png")
        var OPx = x[i].parentNode;
        var OPy = y[i].parentNode;
        var OPz = z[i].parentNode;
        OPx.style.backgroundColor = "#f4f4f4"
        OPx.style.opacity = "1";
        OPy.style.backgroundColor = "#f4f4f4"
        OPy.style.opacity = "1";
        OPz.style.backgroundColor = "#f4f4f4"
        OPz.style.opacity = "1";
        x[i].setAttribute("src", "./images/unchecked.png")
        y[i].setAttribute("src", "./images/unchecked.png")
        z[i].setAttribute("src", "./images/unchecked.png")
        var cnt = document.getElementById("p2");
        var til = document.getElementById("p1");
        til.innerText = 'You got: ';
        cnt.innerText = 'Something about you';
    }
}