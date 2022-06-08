let header_top = document.querySelector(".header_top");
let home = document.querySelector(".home");
let scroll_up = document.querySelector(".scroll_up")
let navbar = document.querySelector(".navbar")
let arrow_down = document.querySelectorAll(".fa-angle-down")
let arrow_up = document.querySelectorAll(".fa-angle-up")
let list_text=document.querySelectorAll(".experience_list_text")
let list_head=document.querySelectorAll(".experience_list_head")
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")

let ar = ['https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1654603044~exp=1654603644~hmac=dad9e955faf5b0369ffd0fee3ecacd140820679779f1bf6f27ebb58c2c9960a3&w=1380',
    'https://img.freepik.com/free-vector/business-leader-consulting-hr-expert_1262-21207.jpg?t=st=1654675726~exp=1654676326~hmac=cb5f4744441e6c180f685dd766f9dd08151f8c374c74f3efab76e9b4e9b21634&w=1060',
'https://img.freepik.com/free-vector/business-consultant-thoughtful-man-working-laptop_1262-20611.jpg?t=st=1654688832~exp=1654689432~hmac=38b93d5f8622ec276ce7ac4b94a609b040ed1e67274b61db530db1108055c748&w=1060']

let count = 0;

// console.log(arrow_down);

arrow_left.addEventListener('click', () => {
    if (count == 0) {
        count = ar.length - 1;
    }
    else {
        count -= 1;
    }
    document.querySelector(".home").style.backgroundImage = `url(${ar[count]})`;
})

arrow_right.addEventListener('click', () => {
    if (count == ar.length-1) {
        count = 0;
    }
    else {
        count += 1;
    }
    document.querySelector(".home").style.backgroundImage = `url(${ar[count]})`;
})

window.addEventListener('scroll', () => {
    if (window.scrollY <= 300) {
        scroll_up.classList.add('scroll_hide')
    }
    else {
        scroll_up.classList.remove('scroll_hide')
    }

    if (window.scrollY >= 50) {
        header_top.classList.add("header_top_hide");
        navbar.classList.add("navbar_bg")
    }
    else {
        header_top.classList.remove("header_top_hide");
        navbar.classList.remove("navbar_bg")
    }
})

scroll_up.addEventListener('click', () => {
    home.scrollIntoView(false);
})

for (let i = 0; i < arrow_down.length; i++){
    arrow_down[i].addEventListener("click", () => {
        arrow_down[i].classList.add("arrow_hide");
        arrow_up[i].classList.remove("arrow_hide");
        list_text[i].classList.remove("arrow_hide")
    })
    arrow_up[i].addEventListener("click", () => {
        arrow_down[i].classList.remove("arrow_hide");
        arrow_up[i].classList.add("arrow_hide");
        list_text[i].classList.add("arrow_hide")
    })
}



