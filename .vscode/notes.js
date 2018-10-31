const greatJobFunction = number => {
    if (number % 15 === 0 ) {
        return "Great job!";
    } else if (number % 5 === 0 ) {
        return "Great";
    } else if ( number % 3 === 0 ) {
        return "job!"
    } else {
        return number;
    }
};
greatJobFunction();


const consecOnes = binaryArray => {
    for (i = 0; i < binaryArray.length; i++) {
        if(binaryArray)
        return i;
    }
    return 0;
};