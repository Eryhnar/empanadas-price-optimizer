
export const fn = (a, b, c) => {

    let tempArray = []
    let set = []
    let price = 0
    
    // check for invalid input
    if (a+b+c>=40 || (a+b+c)%3 !==0 || (a)<0 || (b)<0 || (c)<0 || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c))
    {
        throw new Error("Invalid input")
    }

    //add a to tempArray
    for (let i = 0; i < a; i++) 
    {
        (a>0) ? tempArray.push(12) : null
    }

    //add b to tempArray
    for (let i = 0; i < b; i++) 
    {
        (b>0) ? tempArray.push(14) : null
    }

    //add c to tempArray
    for (let i = 0; i < c; i++) 
    {
        (c>0) ? tempArray.push(16) : null
    }
    // make sets of 3
    while (tempArray.length >= 3) 
    {

        set = []

        //add 3 to set
        for (let i = 0; i < 3; i++) 
        {
            set.push(tempArray.pop())
        }
        let finalArray = [];

        let expensive = set[0];
        let cheap = set[0];
        let midValue = set[0];

        // determine range of values in set
        for (let i = 1; i < set.length; i++) {
            if (set[i] > expensive) {
                midValue = expensive;
                expensive = set[i];
            } else if (set[i] < cheap) {
                midValue = cheap;
                cheap = set[i];
            } else {
                midValue = set[i];
            }
        }

        // add values to finalArray
        finalArray.push((cheap + expensive) / 2);
        finalArray.push((cheap + expensive) / 2);
        finalArray.push(midValue);

        // determine the highest value in finalArray and add it to price
        price += Math.max(...finalArray);

    }
    return price
 };
