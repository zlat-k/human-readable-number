module.exports = function toReadable(number) {
    let numberLength = number.toString();
    let arrNumbStr = numberLength.split('');
    let oneNumber = ['arr', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoNumber = ['arr', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dec = ["arr", 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    if (number === 0) {
        return "zero";
    }
    if (numberLength.length === 1) {
        return oneNumber[number]
    }
    if (numberLength.length === 2 && number < 20) {
        if (number === 10) {
            return 'ten';
        }
        let tmp = +arrNumbStr[1]

        return twoNumber[tmp];
    }
    if (numberLength.length === 2 && number >= 20) {
        if (arrNumbStr[1] === "0") {
            let tmp = +arrNumbStr[0]
            return dec[tmp];
        } else {
            let tmpN = +arrNumbStr[1];
            let tmpD = +arrNumbStr[0];
            return dec[tmpD] + " " + oneNumber[tmpN];
        }

    }


    if (numberLength.length === 3 && number < 1000) {
        if (arrNumbStr[1] === "0" && arrNumbStr[2] === "0") {
            return oneNumber[+arrNumbStr[0]] + ' ' + hundred;
        } else if (arrNumbStr[1] === "0") {
            return oneNumber[+arrNumbStr[0]] + ' ' + hundred + " " + oneNumber[+arrNumbStr[2]];
        } else if (arrNumbStr[2] === '0') {
            return oneNumber[+arrNumbStr[0]] + ' ' + hundred + " " + dec[+arrNumbStr[1]];
        } else {
            if(arrNumbStr[1]==="1"&& arrNumbStr[2]!=='0'){
                return oneNumber[+arrNumbStr[0]] + ' ' + hundred + " " + twoNumber[+arrNumbStr[2]]
            }
            return oneNumber[+arrNumbStr[0]] + ' ' + hundred + " " + dec[+arrNumbStr[1]] + " " + oneNumber[+arrNumbStr[2]];
        }

    }
    
}
