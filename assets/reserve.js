var main = document.querySelector('.reserve-form');
var result = document.querySelector('#reserve-details');
var weekdaySession = document.getElementById('reserve-session');
var weekendSession = document.getElementById('reserve-session-wkd');
var date = document.getElementsByTagName('td');
var sessionTime = document.getElementsByClassName('time');
var crafter = document.querySelector("#crafter");
var reserveBtn = document.querySelector("#reserve-submit");
var email = document.querySelector("#email");
var dateDisplay = document.querySelector("#date-display");
var dateDisplayWkd = document.querySelector("#date-display-wkd");


function getDate(e) {
    var selectedDate = "October " + e.currentTarget.textContent;
    if (e.currentTarget.classList.contains('open-wkd')){
        weekendSession.style.display = 'flex';
        weekdaySession.style.display = 'none';
        dateDisplayWkd.textContent = selectedDate;
    } else if (e.currentTarget.classList.contains('open')){
        weekdaySession.style.display = 'flex';
        weekendSession.style.display = 'none' ;
        dateDisplay.textContent = selectedDate;
}
    console.log(selectedDate);
}

function getTime(f) {
    var crafterName = document.querySelector("#crafter-name").value;
    var crafterEmail = document.querySelector("#crafter-email").value;
    var selectedTime = "Time: " + f.currentTarget.value;
    console.log(selectedTime);
    if (crafterName != "" && crafterEmail != "") {
        reserveBtn.removeAttribute('disabled');
        reserveBtn.classList.remove('btn-disabled');
    }
}

for (var i = 0; i < date.length; i++){
    date[i].addEventListener('click', getDate, false);
  }

for (var j = 0; j < sessionTime.length; j++) {
    sessionTime[j].addEventListener('click', getTime, false);
}

function recap() {
    var crafterName = document.querySelector("#crafter-name").value;
    var crafterEmail = document.querySelector("#crafter-email").value;
    crafter.textContent = crafterName;
    email.textContent = crafterEmail;
    main.style.display = 'none';
    result.style.display = 'block';
}

reserveBtn.addEventListener('click', recap)

