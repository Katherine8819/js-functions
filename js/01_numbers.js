function getTwoNumbers(firstNumber, secondNumber) {

    if (firstNumber < secondNumber) {
        return -1;
    } else {
        if (firstNumber == secondNumber) {
            return 0
        } else {
            return 1;
        }
    }


}

console.log(getTwoNumbers(2, 5))


// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.