module.exports = function toReadable(num) {
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred'
    }

    let result = ''

    const calculateDozens = numb => {
        let number = +numb.join('')
        let res = ''
        numb.filter(el => {
            for (let [key, value] of Object.entries(numbers)) {
                if (el == key) {
                    let dozen = Math.floor(number / 10) * 10;
                    for (let [key, val] of Object.entries(numbers)) {
                        if (dozen == key) {
                            res = `${val} ${value}`
                        };
                    }
                }
            }
        })
        return res;
    }

    for (let [key, value] of Object.entries(numbers)) {
        if (key == num) {
            result = value
        } else if (key !== num && !numbers.hasOwnProperty(num)) {
            let number = num.toString().split('');
            if (number.length == 2) {
                let dozen = calculateDozens(number);
                result = dozen;
            } else if (number.length == 3) {
                for (let [key, value] of Object.entries(numbers)) {
                    if (key == number[0]) {
                        let arrDozen = [number[1], number[2]];
                        let dozen = calculateDozens(arrDozen);
                        result = `${value} hundred ${dozen}`
                    }
                }
            }
        }
    }
    return result.trim()
}
