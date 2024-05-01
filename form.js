const scriptURL = 'https://script.google.com/macros/s/AKfycbwX0RX2SJ-daD8s9XOvXQZ1ANXN-Yc0SnTjWVHmKjXbOwtFTC8GEpoQYiUFilpbmWk9/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
