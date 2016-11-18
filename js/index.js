$(document).ready(() => {
  testGroup();
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

  if(group === 'Control') $('#myModal').modal('show');
}
