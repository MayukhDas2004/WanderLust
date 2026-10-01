// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



///filter
const categorySelect = document.getElementById("category");

categorySelect.addEventListener("change", function () {
    const selected = Array.from(this.selectedOptions);

    if (selected.length > 3) {
        selected[selected.length - 1].selected = false;
        alert("You can select maximum 3 categories.");
    }
});
