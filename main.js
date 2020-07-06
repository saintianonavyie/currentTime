

    var now, months, year, month, day;
    now = new Date();
    months = ['january', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' , 'November', 'December'];

    year = now.getFullYear();
    month = now.getMonth();
    day = now.getDate();

    


function clock() {
    var  hours, minutes, seconds, pmOrAm, hrs, min, sec, amPm;
    hours = document.getElementById('hour');
    minutes = document.getElementById('minutes');
    seconds = document.getElementById('seconds');
    pmOrAm = document.getElementById('ampm');


    
    hrs = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    hrs = (hrs % 12 || 12)
    amPm = hrs >= 12 ? pmOrAm.innerHTML = 'AM' : pmOrAm.innerHTML = 'PM';
    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = sec;

    document.getElementById('date').textContent = months[month] + ' ' + day + ' ' + year;
}
var interval = setInterval(clock, 1);




