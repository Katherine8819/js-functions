
function getFactoriasl(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial
}

console.log(getFactoriasl(8))



// Написать функцию, которая вычисляет факториал переданного ей числа.