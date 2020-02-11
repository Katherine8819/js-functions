function showFullTime(seconds) {

    let fullHours = Math.floor(seconds / 3600)
    let fullMinutes = Math.floor((seconds - (fullHours * 3600)) / 60);
    let fullSeconds = Math.floor(seconds - ((fullHours * 3600) + (fullMinutes * 60)))

    fullHours = fullHours.toString().length == 1 ? ('0' + fullHours) : fullHours;
    fullMinutes = fullMinutes.toString().length == 1 ? ('0' + fullMinutes) : fullMinutes;
    fullSeconds = fullSeconds.toString().length == 1 ? ('0' + fullSeconds) : fullSeconds;

    document.write(`${fullHours}:${fullMinutes}:${fullSeconds}`)
}

console.log(showFullTime(3543))


// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».