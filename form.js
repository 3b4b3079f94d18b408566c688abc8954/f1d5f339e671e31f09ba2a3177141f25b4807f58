const scriptURL = 'https://script.google.com/macros/library/d/1r_IU_5s1Sa8XxrYbeOP9TpvXUV8l-KsswiqiteXUSJB4vAFKnRDnYDdv/3'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
