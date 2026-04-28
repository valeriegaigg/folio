const prj1 = document.getElementById('prj1');
const prj2 = document.getElementById('prj2');
const prj3 = document.getElementById('prj3');
const card = document.getElementsByClassName('card');
const msg = document.getElementsByClassName('msg');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');


function Redirect(url){
    window.location.href = url;
}

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}