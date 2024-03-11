function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let arrivalDate = document.getElementById("arrivalDate").value;
    let departureDate = document.getElementById("departureDate").value;

    alert("Senhor(a) " + name + ". As informações de sua vida a Aracaju se encontram no email: " + email + ".\nCom a data de chegada: " + arrivalDate + ".\nE data de saída: " + departureDate + ".\nAracaju360 agradece a preferência.");
}