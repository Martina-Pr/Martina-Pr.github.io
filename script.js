/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/*
 $(document).ready(function () {
 $("#button").hide();
 $(function () {
 $(window).scroll(function () {
 if ($(this).scrollTop() > 500) {
 $('#button').fadeIn();
 } else {
 $('#button').fadeOut();
 }
 });
 $('#button').click(function () {
 $('body,html').animate({scrollTop: 0}, 800);
 return false;
 });
 });
 });
 */
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("button");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 500) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#B8FB94 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;