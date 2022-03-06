// List all possible number combinations if given a phone number

const input = 12;

function combinator(nbr) {
    // If not an number then exit the function
    if (typeof nbr !== 'number') return 'NaN'
    const combinedArr = []
    // Convert the number to an array
    const _nbr = `${nbr}`.split('')
    combinatorRec(_nbr, [])

    function combinatorRec(_nbr, prev){
        // If the length is 0 then exit with an empty array
        if (_nbr.length === 0) {
            combinedArr.push(parseInt(prev));
            return
        }
        console.log("step5 "+_nbr);
        _nbr.forEach((char,i)=>{
            const _nbrI = [..._nbr];
            _nbrI.splice(i,1);
            combinatorRec(_nbrI, prev+char );
        })
    }

    // combinedArr.indexOf(item) returns the first index at which a given element can be found
    return combinedArr.filter((item, index) => (combinedArr.indexOf(item) === index));
}

console.log(combinator(input));