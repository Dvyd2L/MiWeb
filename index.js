// variables
const body = document.querySelector('body');

// funcions
const msg = (msg = 'Aparece un mensaje') => alert(msg);

// events
body.onload = (ev) => {
  console.log(ev);
  msg();
};
