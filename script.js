// let components
let check = document.querySelector("#check");
let userText = document.querySelector("#text");
let passInput = document.querySelector("#password");
const login = document.querySelector("#login");
const loginBox = document.querySelector(".loginBox");
const body = document.querySelector(".section1");
const loade = document.querySelector(".load");
const main = document.querySelector(".portfolio")
let mainname = document.querySelectorAll("#mainName")
let secoundname = document.querySelector("#userhead")
let darkBtn = document.querySelectorAll("#darkBtn")
let secoundBorder = document.querySelector(".profile2")
let right = document.querySelector(".right")
let mainp = document.querySelector("#mainp")
let nabBtn = document.querySelectorAll(".nabBtn")
let can = document.querySelectorAll(".can")
let darkim = document.querySelector("#darkim")
let nav = document.querySelector(".nav")
let section3 = document.querySelector(".section3")
let home = document.querySelector(".home")
let ppp = home.innerHTML
let btnabout = document.querySelectorAll(".btnabout")
let section4 = document.querySelector(".section4")
let sec4about = document.querySelector(".sec4about")
let homeBtn = document.querySelector(".homeBtn")
let abdark = document.querySelectorAll(".abdark")
let sec4nav = document.querySelectorAll(".sec4nav")
let upperdark = document.querySelectorAll(".upperdark")
let homeBtnn = document.querySelectorAll(".home")
// store all data in this arry

let arr = [Data = {}]
//get and push all data in arry
function store() {
    const username = userText.value
    const userpassword = passInput.value
    Data.password = userpassword
    Data.username = username
    console.log(arr[0])
}

// login button
login.addEventListener("click", () => {
    store()
    loader()
    addName()
    ham()

})

// dark theme button


darkBtn.forEach((element) => {
    element.addEventListener("click", () => {
        dark1()

    })
})


// function to show loader screen
function loader() {
    loginBox.style.display = "none"
    loade.style.display = "block"
    console.log("load")
    setTimeout(() => {
        loade.style.display = "none"
        body.style.background = "none"
        body.style.display = "none"
        main.style.display = "flex"
    }, 1000);
}

// add name
function addName() {
    let name = arr[0].
        username
    secoundname.innerHTML = name

    mainname.forEach((element) => {
        element.innerHTML = name
    })
    console.log(name)
}

// hamburger functionb
function ham() {
    // add blur
    const ham = document.createElement("button")
    ham.classList.add("ham")
    nav.appendChild(ham)
    let hamimg = document.createElement("img")
    hamimg.src = "Asists/icons/list.png"
    ham.appendChild(hamimg)
    let hamcancle = document.createElement("img")
    hamcancle.classList.add("cnacle")
    hamcancle.src = "Asists/icons/close.png"
    section3.appendChild(hamcancle)
    hamcancle.addEventListener("click", () => {
        hamremove()
    })
    // btn for cancle ham burger

    // btn for ham burger
    ham.addEventListener("click", () => {
        hamnav()

    })
}
// show the ham burger  function
function hamnav() {
    console.log("click ham")
    section3.style.top = "0"
    section3.style.transition = "0.5s ease-in-out"


    console.log("add")
}
function hamremove() {
    section3.style.top = "-27vh"
    console.log("remove")
}

// dark function
let flag = 0
function dark1() {
    if (flag == 0) {
        secoundBorder.classList.add("darkborder")
        secoundname.style.color = "white"
        secoundBorder.style.border = " 20px solid black"
        aboutDark()
        right.classList.add("darkback")
        mainp.style.color = "white"
        nabBtn.forEach((element) => {
            if (backgroundColor = "transparent") {
                console.log("hey their")
                element.style.backgroundColor = "transparent"
                element.style.color = "white"
            }

        })
        can.forEach((element) => {
            element.style.filter = "invert(1)"
        })
        darkim.style.filter = "invert(1)"
        console.log("dark")
        flag = 1
    } else {
        aboutlight()
        secoundBorder.classList.remove("darkborder")
        secoundname.style.color = "";
        mainname.forEach((element) => {
            element.style.color = "";
        })
        secoundBorder.style.border = " 20px solid white"

        right.classList.remove("darkback");
        mainp.style.color = "";
        nabBtn.forEach((element) => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });

        can.forEach((element) => {
            element.style.filter = "";
        });

        darkim.style.filter = ""; // Reset filter to default
        console.log("light");
        flag = 0
    }

}
//about btn
btnabout.forEach((elements) => {
    elements.addEventListener("click", () => {

        aboutBtn()

    })

})

homeBtnn.forEach((element) => {
    element.addEventListener("click", () => {
        main.style.display = "flex"
        section4.style.display = "none"
        section4.style.transition = "0.5s ease-in-out"

    })

})

//about function
function aboutBtn() {
    main.style.display = "none"

    section4.style.display = "flex"
    console.log("about")
}
// about section dark

// home btn
homeBtn.addEventListener("click", () => {
    section4.style.display = "none"
    main.style.display = "flex"


})
// about dark function
function aboutDark() {
    abdark.forEach((element) => {
        element.style.color = "white"
        element.style.transition = "0.5s ease-in-out"
    })
    sec4nav.forEach((element) => {
        element.style.backgroundColor = "black"
        element.style.transition = "0.5s ease-in-out"
    })
    mainname.forEach((element) => {
        element.style.color = "white"
        element.style.transition = "0.5s ease-in-out"
    })
    sec4about.style.backgroundColor = "black"
    sec4about.style.transition = "0.5s ease-in-out"
    upperdark.forEach((element) => {
        element.style.filter = "invert(1)"
    })
}
function aboutlight() {
    abdark.forEach((element) => {
        element.style.color = "black"
    })
    sec4nav.forEach((element) => {
        element.style.backgroundColor = "white"
    })
    sec4about.style.backgroundColor = "white"
    upperdark.forEach((element) => {
        element.style.filter = "invert(0)"
    })
}
