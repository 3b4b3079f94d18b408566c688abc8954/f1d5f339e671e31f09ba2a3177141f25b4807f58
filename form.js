const scriptURL = 'https://script.google.com/macros/s/AKfycby_LQ4PKQEvOWKdAZQwFSrdL-4MmAkUI78PkXUMMaBPRAQQhNe9y29Hu7FM5WTjgqAu8w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
