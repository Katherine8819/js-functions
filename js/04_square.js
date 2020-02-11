function getSquare(width, height) {
    let square = 0;

    if (height == undefined) {
        square = width * width
    } else {
        square = width * height
    }

    return square;
}

console.log(getSquare(5))
// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.