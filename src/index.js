module.exports = function check(str, bracketsConfig) {
    //get the elements
    var bracketSet = str.split("");
    //if the number of elements
    // is odd
    // brackets are not balanced
    if (bracketSet.length % 2 !== 0) return false;

    //run through the array of brackets
    for (let i = 0; i < bracketSet.length; i++) {
        //run throught brackets config
        for (let j = 0; j < bracketsConfig.length; j++) {
            //check if current and next array bracket
            //elements are present in the config sub array
            if (
                bracketSet[i] === bracketsConfig[j][0] &&
                bracketSet[i + 1] === bracketsConfig[j][1]
            ) {
                //cut that pair of brackets
                bracketSet.splice(i, 2);
                /*
        as our set has new elements in the beginning 
        set i to negative number 
        so that loop starts over
        */
                i = -1;
            }
        }
    }
    //if nothing left in the set
    //return true
    return bracketSet.length === 0;
};
