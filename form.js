const scriptURL = 'https://script.google.com/macros/s/AKfycbyWF9HJQQCaJR-0NurHcjXHhE-TI7knbM2ZJu8IAZWLfVF35mPybuyJY5zTpDDF403Vmw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
