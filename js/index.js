const slideImages = document.querySelectorAll('.slide-images');
const images = document.querySelectorAll('.images');
const nextSlide = document.getElementById('next-slide');
const previousSlide = document.getElementById('previous-slide');
const showSlide = document.getElementById('show-slide');
const like1 = document.getElementById('like-1');
const like2 = document.getElementById('like-2');

window.onload = (() => {
  if (testGroup()) {
    loadImages(slideImages);
    thumb.style.color = 'white';
  }
  loadImages(images);
  important();
  showSlide.src = slideImages[0].src

  // Like button
  like1.addEventListener('click', () => {
    like1.style.color === 'black' ? like1.style.color = 'royalblue' : like1.style.color = 'black';
  });

  like2.addEventListener('click', () => {
    like2.style.color === 'black' ? like2.style.color = 'royalblue' : like2.style.color = 'black';
  });

  document.getElementById('like-slide').addEventListener('click', () => alert(`You liked this slide`))


  // Button to submit form
  document.getElementById('submit-form').addEventListener('click', () => {
    document.getElementById('form').style.display='none';
    document.getElementById('thank-you').style.display='flex';
  });

  // Slideshow buttons
  nextSlide.addEventListener('click', () => slideShow(1));
  previousSlide.addEventListener('click', () => slideShow(-1));
});

const testGroup = () => {
  const arr = ['Variation', 'Control'];
  const i = Math.round(Math.random());
  const group = arr[i];

  if(group === 'Variation') {
    document.getElementById('variation-group').style.display = 'block'
    $('#myModal').modal('show');
  } else {
    document.getElementById('control-group').style.display = 'block'
  }
}

// Load images with version number
const loadImages = (imgs) => {
  let d = new Date();
  imgs.forEach((image, i) => {
    image.src = `${image.src}?ver=${i + '-' + d.getTime()}`
  });
}

let current = 0;
let imagesLength = images.length -1;
// num should be a 1 or -1
slideShow = (num) => {
  console.log('Current Slide:', current);
  current = current + num;
  if (current > imagesLength) current = 0;
  if (current < 0) current = imagesLength;

  showSlide.src = slideImages[current].src;
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
