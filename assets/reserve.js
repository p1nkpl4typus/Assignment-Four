var weekdaySession = document.getElementById('reserve-session');
var weekendSession = document.getElementById('reserve-session-wkd');
var date = document.getElementsByTagName('td');
var sessionTime = document.getElementsByClassName('time');
var guests = document.querySelector("#num").value + " Crafter(s)";

function getDate(e) {
    var selectedDate = "October " + e.currentTarget.textContent;
    if (e.currentTarget.classList.contains('open-wkd')){
        weekendSession.style.display = 'flex';
        weekdaySession.style.display = 'none';
    } else if (e.currentTarget.classList.contains('open')){
        weekdaySession.style.display = 'flex';
        weekendSession.style.display = 'none' ;
}
    console.log(selectedDate);
}

function getTime(f) {
    var selectedTime = "Time: " + f.currentTarget.value;
    console.log(selectedTime);
}


for (var i = 0; i < date.length; i++){
    date[i].addEventListener('click', getDate, false);
  }

for (var j = 0; j < sessionTime.length; j++) {
    sessionTime[j].addEventListener('click', getTime, false);
}







// document.addEventListener('click', function(el) {
//     if (el.target.classList.contains('open-wkd')){
//         console.log(date, guests);
//         weekendSession.style.display = 'flex';
//         weekdaySession.style.display = 'none';
//     } else if (el.target.classList.contains('open')){
//         var date = "October " + el.target.textContent;
//         console.log(date);
//         weekdaySession.style.display = 'flex';
//         weekendSession.style.display = 'none' ;
//     } else if (el.target.classList.contains('time')) {
//         var time = "Time: " + el.target.value;
//         console.log(date, guests, time);
//     }
// })



