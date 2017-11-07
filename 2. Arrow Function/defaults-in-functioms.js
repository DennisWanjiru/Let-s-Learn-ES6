//ES5
/*
    function calBill(total, tax, tip) {
        tax = tax || .13;
        tip = tip || .15;

        let grossTotal = total + (total*tax) + (total*tip)
        console.log(grossTotal)
    }

    calBill(100);
*/

//ES6

let calcBill = (total, tax= .13, tip = .15) => {
    let grossTotal = total + (total*tax) + (total*tip)
    console.log(grossTotal)
}

calcBill(100);
calcBill(100, undefined, .25) //If you want to pass one value use undefined for the one you want to use the default value