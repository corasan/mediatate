window.onload = (() => {
  // delayer();
  images();
  // testGroup();
  submitForm();
});

const submitForm = () => {
  $('#submit-form').click(() => {
    document.getElementById('form').style.display='none';
    document.getElementById('thank-you').style.display='flex';
  });
}

const testGroup = () => {
  const arr = ['Variation', 'Control'];
  const i = Math.round(Math.random());
  const group = arr[i];

  if(group === 'Control') {
    $('#myModal').modal('show');
    document.getElementById('form-container').style.display='none';
  }
}

const images = () => {
  let url = "https://s-media-cache-ak0.pinimg.com/736x/4b/fe/44/4bfe443c1db09c0943de27164783e4fc.jpg";
  let d = new Date();
  document.querySelectorAll(".images").forEach((image, i) => {
    image.src = `${url}?ver=${i + '-' + d.getTime()}`
  });
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
