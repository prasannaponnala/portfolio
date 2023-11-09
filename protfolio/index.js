document.querySelector('.btn.btn3').addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector('#contact-form');
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    fetch("https://script.google.com/macros/s/AKfycbzeShMebmSNJM5-xNRki-EbMjXZ1Uy5JkhEEJBdU8MbgY7xOahIx6HotqoCQeLmX1R8ng/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.text())
    .then(data => {
        console.log(data);
        // Reset the form or show a success message
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle the error or show an error message
    });
});
