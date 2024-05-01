const scriptURL = 'https://script.google.com/macros/s/AKfycbyRBN1JN_0DuZJlbE2albU-O3LJxnKsW5zXdW-K7tSSWMkT6OXZ0LmEivYroKiex1hr/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
