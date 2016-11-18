const images = document.querySelectorAll('.images');
const nextSlide = document.getElementById('next-slide');
const previousSlide = document.getElementById('previous-slide');
const showSlide = document.getElementById('show-slide');

window.onload = (() => {
  // delayer();
  loadImages();
  // testGroup();
  showSlide.src = images[0].src
});

document.getElementById('submit-form').addEventListener('click', () => {
  document.getElementById('form').style.display='none';
  document.getElementById('thank-you').style.display='flex';
});


const testGroup = () => {
  const arr = ['Variation', 'Control'];
  const i = Math.round(Math.random());
  const group = arr[i];

  if(group === 'Control') {
    document.getElementById('myModal').modal('show');
    document.getElementById('form-container').style.display='none';
  }
}

// Load images with version number
const loadImages = () => {
  let url = 'https://s-media-cache-ak0.pinimg.com/736x/4b/fe/44/4bfe443c1db09c0943de27164783e4fc.jpg';
  let d = new Date();
  images.forEach((image, i) => {
    image.src = `${image.src}?ver=${i + '-' + d.getTime()}`
  });
}

// Slideshow
nextSlide.addEventListener('click', () => slideShow(1));
previousSlide.addEventListener('click', () => slideShow(-1));

let current = 0;
let imagesLength = images.length -1;

// num should be a 1 or -1
slideShow = (num) => {
  console.log('Current Slide:', current);
  current = current + num;
  if (current > imagesLength) current = 0;
  if (current < 0) current = imagesLength;

  showSlide.src = images[current].src;
}

// Functions from script tags
const important = () => {
  delayer();
}

const sleep = (milliseconds) => {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const delayer = () => {
  sleep(7000);
}
