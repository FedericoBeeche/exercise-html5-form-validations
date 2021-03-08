window.onload = function validation() {

    var cardNum = document.getElementById('tarjetaCredito');
    var cardCVC = document.getElementById('CVCTarjeta');
    var amountUSD = document.getElementById('montoDolares');
    var name = document.getElementById('firstName');
    var nameLast = document.getElementById('lastName');
    var ciudad = document.getElementById('ciudadInput');
    var postalCode = document.getElementById('codigoPostal');
    var errorCC = document.getElementById('errorCC');
    var errorCVC = document.getElementById('errorCVC');

    var formValidate = document.getElementById('formulario');
    formValidate.addEventListener('submit', function (event) {
        event.preventDefault();
        if (cardNum.value.length < 13 || cardNum.value.length > 19 || cardNum.value.length <= 0) {
            errorCC.innerHTML = "Please enter a valid CC Number";
        }
        else if (cardCVC.value.length !== 3 || cardCVC.value.length > 3 || cardCVC.value.length <= 0) {
            errorCVC.innterHTML = "Please enter a valid CVC Number";
        }

        else {
            alert("Form sent successfully!")
        }

    })

}