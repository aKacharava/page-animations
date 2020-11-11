const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger-menu-icon');
const headline = document.querySelector('.headline');

var timeline = gsap.timeline();

// displaying image inside hero class with height + width animations
timeline.fromTo(hero, 0.8, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(hero, 0.6, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
// Moving background from left to right
.fromTo(slider, 1.1, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, "-=0.8")
// Moving text in te x and y positions
.fromTo(logo, 0.5, {opacity: 0, x: 50}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: -50}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, y: 50}, {opacity: 1, y: 0}, "-=0.5")