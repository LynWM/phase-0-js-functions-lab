function calculateTax(amount) {
    let tax = amount*0.1;

    return tax;
}
// console.log(calculateTax(300));


function convertToUpperCase (text) {
    text = "hello world";
    if (!text) {
        return 0;
    } else {
        return text.toUpperCase();
    }
    
}

console.log(convertToUpperCase());

function findMaximum (numI, numII) {
    if (numI > numII) {
        return maximum = numI;
    } else if (numII > numI) {
        return maximum = numII;
    } else 
        return numI;       
}

// console.log(findMaximum(9, 9));

function isPalindrome(word) {

    let reversed = word.split('').reverse().join('');

    if (reversed === word) {
        return true;
    } else {
        return false;
    }
}

// console.log(isPalindrome("madam"));


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discount = originalPrice * discountPercentage;
    let discountPrice = originalPrice - discount;

    return discountPrice;
}

// console.log(calculateDiscountedPrice(1800, 0.4));



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };