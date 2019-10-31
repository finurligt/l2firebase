// listen for Submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e) {
  e.preventDefault();

  name = getInputVal('name');
  company = getInputVal('company');
  email = getInputVal('email');
  phone = getInputVal('phone');
  message = getInputVal('message');

  saveMessage(name,company,email,phone,message);
}

var messagesRef = firebase.database().ref('messages');

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save message to firebaseio
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
