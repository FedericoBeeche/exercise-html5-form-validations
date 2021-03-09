window.onload = function validation() {

    var cardNum = document.getElementById('tarjetaCredito');
    var cardCVC = document.getElementById('CVCTarjeta');
    var amountUSD = document.getElementById('montoDolares'); //este no lo necesito porque el "required" del HTML no lo deja quedar sin input
    var name = document.getElementById('firstName');
    var nameLast = document.getElementById('lastName');
    var ciudad = document.getElementById('ciudadInput');
    var postalCode = document.getElementById('codigoPostal');
    var errorCC = document.getElementById('errorCC');
    var errorCVC = document.getElementById('errorCVC');
    var errorPostalCode = document.getElementById('errorPostCode');

    var formValidate = document.getElementById('formulario');
    formValidate.addEventListener('submit', function (event) {
        event.preventDefault();
        if (cardNum.value.length < 13 || cardNum.value.length > 19 || cardNum.value.length <= 0) {
            errorCC.innerHTML = "Please enter a valid CC Number containing 13 to 19 digits.";
            cardNum.style.backgroundColor = "#FFA5A5";
        }
        if (cardCVC.value.length !== 3 || cardCVC.value.length > 3 || cardCVC.value.length <= 0) {
            errorCVC.innerHTML = "Please enter a valid CVC Number of 3 digits.";
            cardCVC.style.backgroundColor = "#FFA5A5"
        }
        if (postalCode.value.length !== 5){
            errorPostalCode.innerHTML = "Please enter a valid Postal Code of 5 digits."
            postalCode.style.backgroundColor = "#FFA5A5"
        }
        else {
            alert("Form sent successfully!")
            formValidate.reset();
            cardNum.style.backgroundColor = "white"
            cardCVC.style.backgroundColor = "white"
            postalCode.style.backgroundColor = "white"
        }
    
    })

}