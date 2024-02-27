const scriptURL = 'https://script.google.com/macros/s/AKfycbwDoNbNBvFhqnlJ1_W_amOoQmRbFv5v1QYUxUkKDORelf9rbKTn36pWZ0sr-pv39wPD/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
