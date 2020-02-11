(function () {
    // 6, 28, 496
    'use strict';

    function showPerfectNumbers(min, max) {
        let maxNumbers = 4,
            perfectNumbers = [],
            iterator = 1;

        do {
            if (isPerfectNumber(iterator) && iterator >= min && iterator <= max) {
                console.log(iterator);
                perfectNumbers.push(iterator);
            }
            iterator++;
        } while (iterator < max);

    }

    function isPerfectNumber(number) {
        let dividers = [];

        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                dividers.push(i);

            }
        }

        let sum = 0;
        dividers.forEach(divider => {
            sum += divider
        });

        if (sum != number) {
            return false;
        }

        return true;
    }

    showPerfectNumbers(6, 500)
})();

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 