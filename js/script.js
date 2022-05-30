'use strict';
/////////////// Navigation lines
let links = document.querySelectorAll('.header__nav a');

links.forEach(link => {
  let rect = link.getBoundingClientRect();
  let line = link.querySelector('span');

  link.addEventListener('mouseover', e => {
    // from left
    if (e.clientX < rect.left + rect.width / 2) {
      line.classList.remove('line--right');
      line.classList.add('line--left');

      line.style.width = '80%';
    } else if (e.clientX > rect.left + rect.width / 2) {
      line.classList.remove('line--left');
      line.classList.add('line--right');

      line.style.width = '80%';
    }
  });

  link.addEventListener('mouseout', e => {
    line.style.width = '0%';
  });
});

/////////////// Slides
const slides = document.querySelectorAll('.slide');
let index = 0;
let interval = setInterval(changeSlide, 4000);

function changeSlide() {
  if (index === 0) {
    document.querySelector(
      '.slide--1 .left.biscuit'
    ).style.transform = `translate3d(0,-130%, 0)`;
    document.querySelector(
      '.slide--1 .right.character'
    ).style.transform = `translate3d(130%,0, 0)`;
    document.querySelector('.slide--1').style.zindex = '-1';
    document.querySelector('.slide--2').style.zindex = '2';
    document.querySelector('.slide--3').style.zindex = '1';
    document.querySelector('.slide--4').style.zindex = '0';
    index++;
  } else if (index === 1) {
    document.querySelector(
      '.slide--2 .right.biscuit'
    ).style.transform = `translate3d(0,130%, 0)`;
    document.querySelector(
      '.slide--2 .left.character'
    ).style.transform = `translate3d(-130%,0, 0)`;
    document.querySelector('.slide--2').style.zindex = '-1';
    document.querySelector('.slide--3').style.zindex = '2';
    document.querySelector('.slide--4').style.zindex = '1';
    document.querySelector('.slide--1').style.zindex = '0';
    index++;
  } else if (index === 2) {
    document.querySelector(
      '.slide--3 .left.biscuit'
    ).style.transform = `translate3d(0,-130%, 0)`;
    document.querySelector(
      '.slide--3 .right.character'
    ).style.transform = `translate3d(130%,0, 0)`;
    document.querySelector('.slide--3').style.zindex = '-1';
    document.querySelector('.slide--4').style.zindex = '2';
    document.querySelector('.slide--1').style.zindex = '1';
    document.querySelector('.slide--2').style.zindex = '0';
    index++;
  } else if (index === 3) {
    document.querySelector(
      '.slide--4 .right.biscuit'
    ).style.transform = `translate3d(0,130%, 0)`;
    document.querySelector(
      '.slide--4 .left.character'
    ).style.transform = `translate3d(-130%,0, 0)`;
    document.querySelector('.slide--4').style.zindex = '-1';
    document.querySelector('.slide--1').style.zindex = '2';
    document.querySelector('.slide--2').style.zindex = '1';
    document.querySelector('.slide--3').style.zindex = '0';

    index++;
  }
  if (index > slides.length - 1) {
    index = 0;
    document.querySelector(
      '.slide--1 .left.biscuit'
    ).style.transform = `translate3d(0,0%, 0)`;
    document.querySelector(
      '.slide--1 .right.character'
    ).style.transform = `translate3d(0%,0, 0)`;
    document.querySelector(
      '.slide--2 .right.biscuit'
    ).style.transform = `translate3d(0,0%, 0)`;
    document.querySelector(
      '.slide--2 .left.character'
    ).style.transform = `translate3d(0%,0, 0)`;
    document.querySelector(
      '.slide--3 .left.biscuit'
    ).style.transform = `translate3d(0,0%, 0)`;
    document.querySelector(
      '.slide--3 .right.character'
    ).style.transform = `translate3d(0%,0, 0)`;
    document.querySelector(
      '.slide--4 .right.biscuit'
    ).style.transform = `translate3d(0,0%, 0)`;
    document.querySelector(
      '.slide--4 .left.character'
    ).style.transform = `translate3d(0%,0, 0)`;
    // document.querySelector(
    //   '.slide .right.biscuit'
    // ).style.transform = `translate3d(0,0, 0)`;
    // document.querySelector(
    //   '.slide .left.character'
    // ).style.transform = `translate3d(0,0, 0)`;
  }
}

window.addEventListener('scroll', function () {
  // const distance = window.sc;
  const distance = window.scrollY;
  document.querySelector('.spirits__image-box').style.transform = `translateY(${
    distance * 0.03
  }px)`;
  document.querySelector('.spirits__text-box').style.transform = `translateY(${
    -distance * 0.1
  }px) translateX(-50%)`;
  // if (
  //   document.querySelector('.section-squirrel').getBoundingClientRect().top <= 0
  // ) {
  //   console.log(
  //     document.querySelector('.section-squirrel').getBoundingClientRect().top
  //   );
  //   document.querySelector('.s-bg').style.transform = `translateY(${
  //     1 * 0.1
  //   }px)`;
  //   document.querySelector('.txt-container').style.transform = `translateY(${
  //     -10 * 0.1
  //   }px) translateX(-50%)`;
  // }
});

// window.addEventListener('scroll', function () {
//   const distance = window.scrollY;
//   console.log(distance);
//   let ranges = document.querySelectorAll('.range');

//   ranges.forEach(range => {
//     // console.log(range);
//     let info = range.querySelector('.range__info-box');
//     console.log(info);

//     let char = range.querySelector('.range__character');

//     let rangeTop = range.getBoundingClientRect().top;

//     if (rangeTop <= 350) {
//       info.style.transform = `translateY(${(-rangeTop * 0.3) / 10}px)`;
//       char.style.transform = `translateY(${(rangeTop * 0.3) / 10}px)`;
//     }
//   });
// });
