const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const messageArea = document.getElementById('message');
const submitBtn = document.querySelector('button');
const successMsg = document.querySelector('.success--message');
const generalEnq = document.querySelector('.general-enquiry');
const supportRequest = document.getElementById('support-request');
const generalInquiry = document.getElementById('general-enquiry');
const consent = document.getElementById('consent');
const fnErrorMsg = document.querySelector('.f-name-error');
const lnErrorMsg = document.querySelector('.l-name-error');
const emailErrorMsg = document.querySelector('.em-error');
const queryErrorMsg = document.querySelector('.query-error');
const ErrorMsg = document.querySelector('.message-error');
const consentErrorMsg = document.querySelector('.consent-error');
const errorColor = '1px solid red';
const inputColor = '1px solid hsl(186, 15%, 59%)';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if(!firstName.value) {
    fnErrorMsg.style.display = 'block';
    firstName.style.border = errorColor;
  } else if (firstName.value) {
    fnErrorMsg.style.display = 'none';
    firstName.style.border = inputColor;
  }
  if(!lastName.value) {
    lnErrorMsg.style.display = 'block';
    lastName.style.border = errorColor;
  } else if(lastName.value) {
    lnErrorMsg.style.display = 'none';
    lastName.style.border = inputColor;
  }
  if(!email.value || !email.value.includes('@') ) {
    emailErrorMsg.style.display = 'block';
    email.style.border = errorColor;
  } else if(email.value && email.value.includes('@')) {
    emailErrorMsg.style.display = 'none';
    email.style.border = inputColor;
  }
  if(!supportRequest.checked && !generalInquiry.checked) {
    queryErrorMsg.style.display = 'block';
  } else if(supportRequest.checked || generalInquiry.checked) {
    queryErrorMsg.style.display = 'none';
  }

  if(!messageArea.value) {
    ErrorMsg.style.display = 'block';
    messageArea.style.border = errorColor;
  } else if(messageArea.value) {
    ErrorMsg.style.display = 'none';
    messageArea.style.border = inputColor;
  }
  if(!consent.checked) {
    consentErrorMsg.style.display = 'block';
  } else if(consent.checked) {
    consentErrorMsg.style.display = 'none';
  }

  if(firstName.value && lastName.value && email.value && messageArea.value && consent.checked && (generalInquiry.checked || supportRequest.checked)) {
    successMsg.style.display = 'block';
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    generalInquiry.checked = false;
    supportRequest.checked = false;
    messageArea.value = '';
    consent.checked = false;
  } else {
    successMsg.style.display = 'none';
  }
});