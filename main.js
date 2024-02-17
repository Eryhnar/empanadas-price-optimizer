
export const fn = (a, b, c) => {

    // check for invalid input
    if (a+b+c>=40 || (a+b+c)%3 !==0 || (a)<0 || (b)<0 || (c)<0 || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        throw new Error("Invalid input");
    }

    let price = 0;
    let mainArray = []
    let finalArray = [];
    let mix
    let empSet = []

    // Push all a, b, and c into mainArray transformed into their numeric value
    mainArray = [...Array(a).fill(12), ...Array(b).fill(14), ...Array(c).fill(16)];

    // Take the max and min of mainArray into tempArray, calculate the average of their value and push that value twice into finalArray. Do this until mainArray is empty.
    while (mainArray.length > 0) {
        let maxVal = Math.max(...mainArray);
        let minVal = Math.min(...mainArray);

        mainArray.splice(mainArray.indexOf(maxVal), 1);
        mainArray.splice(mainArray.indexOf(minVal), 1);

        mix = (maxVal + minVal) / 2;
        finalArray.push(mix, mix);
    }

    // Sort finalArray
    finalArray.sort((a, b) => a - b);

    // Take the last 3 items in finalArray and push them into set. Add the value of the highest value in set to price. Do this until finalArray is empty.
    while (finalArray.length >= 3) {
        let set = finalArray.splice(-3);
        price += Math.max(...set);
        empSet.push(set);
    }

    
    return price;
};


/*
export const fn = (a, b, c) => {
    // check for invalid input
    if (a+b+c>=40 || (a+b+c)%3 !==0 || (a)<0 || (b)<0 || (c)<0 || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        throw new Error("Invalid input");
    }

    let price = 0;
    let mainArray = []
    let finalArray = [];
    let mix
    
    let total = []

    // Push all a, b, and c into mainArray transformed into their numeric value
    mainArray = [...Array(a).fill(12), ...Array(b).fill(14), ...Array(c).fill(16)];

    // Take the max and min of mainArray into tempArray, calculate the average of their value and push that value twice into finalArray. Do this until mainArray is empty.
    while (mainArray.length > 0) {
        let maxVal = Math.max(...mainArray);
        let minVal = Math.min(...mainArray);

        mainArray.splice(mainArray.indexOf(maxVal), 1);
        mainArray.splice(mainArray.indexOf(minVal), 1);

        mix = (maxVal + minVal) / 2;
        finalArray.push(mix, mix);
    }

    // Sort finalArray
    finalArray.sort((a, b) => a - b);

    // Take the last 3 items in finalArray and push them into set. Add the value of the highest value in set to price. Do this until finalArray is empty.
    while (finalArray.length >= 3) {
        let set = finalArray.splice(-3);
        price += Math.max(...set);
        let empSet = [{"a":0},{"b":0},{"c":0},{"price":0}]
        for (let i = 0; i < set.length; i++) {
            switch (set[i]) {
                case 12:
                    empSet[0]["a"] += 1;
                    break;
                case 13:
                    empSet[0]["a"] += 0.5;
                    empSet[1]["b"] += 0.5;
                    break;
                case 14:
                    empSet[1]["b"] += 1;
                    break;
                case 15:
                    empSet[1]["b"] += 0.5;
                    empSet[2]["c"] += 0.5;
                    break;
                case 16:
                    empSet[2]["c"] += 1;
                    break;
            }
        }
        empSet[3]["price"] = Math.max(...set);
        total.push(empSet);
    }
    
    // return price;
    total.push({"total": price});
    return total;
};
*/