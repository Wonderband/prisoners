let prisonersNumbers;
let boxesNumbers;
let positive = 0;
let negative = 0;
const NUMBER_OF_TESTS = 1000;
const NUMBER_OF_PRISONERS = 1000;
for (let index = 0; index < NUMBER_OF_TESTS; index++) {  
    prisonersNumbers = returnRandom(NUMBER_OF_PRISONERS);    
    boxesNumbers = returnRandom(NUMBER_OF_PRISONERS);
    let result = allPrisonersGoFind(NUMBER_OF_PRISONERS); 
    if (result)   positive +=1;
    else negative += 1;
}
console.log('Probability of positive: ', positive * 100 / NUMBER_OF_TESTS, '%');
console.log('Probability of negative: ', negative * 100 / NUMBER_OF_TESTS, '%');


function returnRandom(numberOf) {
    const boxesInnerNumbers = [0];
    while (boxesInnerNumbers.length < numberOf + 1) {
        let newRnd = Math.floor(1 + Math.random() * numberOf);
        if ( !boxesInnerNumbers.includes(newRnd)) {
            boxesInnerNumbers.push(newRnd);
        }        
    }
    return boxesInnerNumbers;    
}

function goFindYourBox(prisonerIndex, numberOf) {   
    const PRISONER_NUMBER = prisonersNumbers[prisonerIndex]
    let currentBox = PRISONER_NUMBER;
    //console.log(PRISONER_NUMBER, '- number to find');
    for (let index = 1; index <= numberOf / 2; index++) {
        //console.log('Iteration: ', index, currentBox, '- box number',  boxesNumbers[currentBox], '- number inside');
        if (boxesNumbers[currentBox] === PRISONER_NUMBER) {            
            //console.log('SUCCESS! We searched for: ', PRISONER_NUMBER); 
            return index;
        }
        else {
            currentBox = boxesNumbers[currentBox];
        }        
    }
    //console.log('we searched for: ', PRISONER_NUMBER, 'it was here: ', boxesNumbers.indexOf(PRISONER_NUMBER));
    return false; 
}

function allPrisonersGoFind(numberOf) {
    for (let index = 1; index < prisonersNumbers.length; index++) {
        let result = goFindYourBox(index, numberOf);
        if (! result) {
            //console.log('We lost! Prisoner number: ', index);
            return false;
        }  
        //else console.log('Prisoner number:', index, 'found it on iteration: ', result);          
    } 
    //console.log('YES!!! We found all!!!');
    return true;
}
