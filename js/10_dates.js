function showSeconds(hours, minutes, seconds) {
    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    return totalSeconds;
}

function showFullTime(seconds) {

    let fullHours = Math.floor(seconds / 3600)
    let fullMinutes = Math.floor((seconds - (fullHours * 3600)) / 60);
    let fullSeconds = Math.floor(seconds - ((fullHours * 3600) + (fullMinutes * 60)))

    fullHours = fullHours.toString().length == 1 ? ('0' + fullHours) : fullHours;
    fullMinutes = fullMinutes.toString().length == 1 ? ('0' + fullMinutes) : fullMinutes;
    fullSeconds = fullSeconds.toString().length == 1 ? ('0' + fullSeconds) : fullSeconds;

    document.write(`${fullHours}:${fullMinutes}:${fullSeconds}`)
}

function getDifference(firstHours, firstMinutes, firstSeconds, secondHours, SecondMinutes, Secondseconds) {
    let firstTime = showSeconds(firstHours, firstMinutes, firstSeconds)
    let secondTime = showSeconds(secondHours, SecondMinutes, Secondseconds)

    let difference = firstTime - secondTime;
    let totalDifference = showFullTime(difference)

    return (totalDifference)
}

getDifference(5, 12, 56, 3, 15, 12)

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»