const scriptURL = 'https://script.google.com/macros/s/AKfycbyTupm2GXP7nFq59EjaO1709dwVPVF1NsPWWfTWEo7Up2D_oXGvRfbwA07m9zy1TdR6bg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
