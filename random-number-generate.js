/* ===================================================== */
/* random number generator in a range inclusive[min,max] */
/* ===================================================== */
// min <= randomNum <=max

function randomNumInc(min,max) {
    if(typeof(min) !=='number' || typeof(max) !== 'number'){
        throw new Error("Max and Min must be a number");
    }
    else if(min>max) {
        throw new Error('min must be less than max');
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min)) + min;
}

var output = randomNumInc(1,5);
console.log(output);

/* ===================================================== */
/* random number generator in a range [min,max) */
/* ===================================================== */
// min <= randomNum <max

function randomNum(min,max) {
    if(typeof(min) !=='number' || typeof(max) !== 'number'){
        throw new Error("Max and Min must be a number");
    }
    else if(min>max) {
        throw new Error('min must be less than max');
    }
    
    return Math.floor(Math.random() * ( max - min )) + min;
}

var output = randomNum(1,5);
console.log(output);
