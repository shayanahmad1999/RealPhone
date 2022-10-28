const circle = document.querySelector("#circle");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.addEventListener("click", () => {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});

downBtn.addEventListener("click", () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});
const main = document.querySelector('.main');``
main.addEventListener("mouseover", (e)=>{
    circle.style.borderTop = `15px solid rgb(${e.offsetX}, ${e.offsetY}, 150)`;
    circle.style.borderBottom = `15px solid rgb(${e.offsetY}, 150, ${e.offsetX})`;
});

const home = document.getElementById('home');
const phone = document.getElementById('phone');
const acc = document.getElementById('acc');
const cart = document.getElementById('cart');

home.addEventListener("mouseover", () => {
    home.style.opacity = '0.7';
    home.style.color = '#750688';
});
home.addEventListener("mouseleave", () => {
    home.style.opacity = '1';
    home.style.color = '';
});

phone.addEventListener("mouseover", () => {
    phone.style.opacity = '0.7';
    phone.style.color = '#750688';
});
phone.addEventListener("mouseleave", () => {
    phone.style.opacity = '1';
    phone.style.color = '';
});

acc.addEventListener("mouseover", () => {
    acc.style.opacity = '0.7';
    acc.style.color = '#750688';
});
acc.addEventListener("mouseleave", () => {
    acc.style.opacity = '1';
    acc.style.color = '';
});

cart.addEventListener("mouseover", () => {
    cart.style.opacity = '0.7';
    cart.style.color = '#750688';
});
cart.addEventListener("mouseleave", () => {
    cart.style.opacity = '1';
    cart.style.color = '';
});

const logoText = document.getElementById('logo-text');

logoText.addEventListener("mouseover", ()=>{
    logoText.style.borderBottom = '4px solid #f08629';
    logoText.style.borderRadius = "20px";
    logoText.style.color = "#f08629";
});

logoText.addEventListener("mouseleave", ()=>{
    logoText.style.borderBottom = '';
    logoText.style.color = "";
});

// const container1 = document.getElementById('container1');
// const container2 = document.getElementById('container2');

// window.addEventListener('scroll', ()=>{
//     let value = window.scrollY;
//     container1.style.bottom = value + 100 + 'px';
// });

const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const container = document.querySelector('.grid-container');

container.forEach((el)=> observer.observe(el));