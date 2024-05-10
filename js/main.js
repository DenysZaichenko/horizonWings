var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

loginBtn.onclick = function() {
    modal.style.display = "block";
}
signupBtn.onclick = function() {
    modal.style.display = "block";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем значения из формы
    var departureCity = document.getElementById('departure-city').value;
    var destinationCity = document.getElementById('destination-city').value;
    var departureDate = document.getElementById('departure-date').value;
    var arrivalDate = document.getElementById('arrival-date').value; 
    var seats = document.getElementById('seats').value;
    var luggage = document.getElementById('luggage').value;

    var message = 'Flights found from ' + departureCity + ' to ' + destinationCity + ' departing on ' + departureDate + ' and arriving on ' + arrivalDate + ' for ' + seats + ' seats with ' + luggage + ' luggage.';

    document.getElementById('flight-description').innerText = message;
});
document.getElementById('clear-flight-description').addEventListener('click', function() {
    document.getElementById('flight-description').value = ''; 
});

function toggleArrivalDate() {
    var arrivalCheckbox = document.getElementById("arrival-checkbox");
    var arrivalDateInput = document.getElementById("arrival-date");

    if (arrivalCheckbox.checked) {
        arrivalDateInput.disabled = false;
    } else {
        arrivalDateInput.disabled = true;
    }
}

