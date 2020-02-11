function showTime(hours, minutes, seconds) {


    if (hours == undefined) {
        hours = 0;
    }
    if (minutes == undefined) {
        minutes = 0;
    }
    if (seconds == undefined) {
        seconds = 0;
    }

    hours = hours.toString().length == 1 ? ('0' + hours) : hours;
    minutes = minutes.toString().length == 1 ? ('0' + minutes) : minutes;
    seconds = seconds.toString().length == 1 ? ('0' + seconds) : seconds;


    document.write(`${hours}:${minutes}:${seconds}`)
}

showTime(16, 22, 3)

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.