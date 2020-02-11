function showSeconds(hours, minutes, seconds) {

    totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    return totalSeconds;
}

console.log(showSeconds(16, 59, 59))

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.