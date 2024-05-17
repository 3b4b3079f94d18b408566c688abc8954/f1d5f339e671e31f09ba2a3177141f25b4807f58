const scriptURL = 'https://script.google.com/macros/s/AKfycbzJXD0bVXt4MZQjHOZPovnLhoDqBf3Fb32pTAzccj3W0jR_4M_PnGMRwXKtJtNELIcqaA/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show loading message
  Swal.fire({
    title: 'Please wait...',
    html: 'Submitting your form',
    allowOutsideClick: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Thank you! Your form is submitted successfully.',
        showConfirmButton: false,
        timer: 2000 // Auto close after 2 seconds
      }).then(() => {
        window.location.reload();
      });
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('Error!', error.message);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  });
