// List all possible combinations if given a string
// List all possible number combinations if given a phone number

const input = 'abcdef';

function combinator(nbr) {
    // If not an string then exit the function
    if (typeof nbr !== 'string') return 'NaS'
    const combinedArr = [];
    // Convert the string to an array
    const _nbr = `${nbr}`.split('')
    combinatorRec(_nbr, [])

    function combinatorRec(_nbr, prev){
        // If the length is 0 then exit with an empty array
        if (_nbr.length === 0) {
            combinedArr.push(prev);
            return
        }
        _nbr.forEach((char,i)=>{
            const _nbrI = [..._nbr];
            console.log(_nbrI);
            _nbrI.splice(i,1);
            combinatorRec(_nbrI, prev+char );
        })
    }

    // combinedArr.indexOf(item) returns the first index at which a given element can be found
    return combinedArr.filter((item, index) => (combinedArr.indexOf(item) === index));
}

console.log(combinator(input));