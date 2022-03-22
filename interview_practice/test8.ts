// Given the following formula, speed = ((STRIDE_LENGTH / LEG_LENGTH) - 1) * SQRT(LEG_LENGTH * g)
// Where g = 9.8 m/s^2 (gravitational constant)
//
// Write a program to read in the data files from disk, it must then print the names of only the bipedal dinosaurs from fastest to slowest.


const fs = require("fs");
const parse = require("csv-parse");

const parseCSV = async (s1) => {
    let records = []
    const parser = fs
        .createReadStream(`${__dirname}/${s1}`)
        .pipe(parse.parse({
            // CSV options if any
        }));
    for await (const record of parser) {
        if (record[2] === 'bipedal') {
            records.push(record)
        }
    }
    return records;
}

async function mainFunction(s1, s2) {
    try {
        const file1 =   await parseCSV(s1);
        const file2  =   await parseCSV(s2);
        const file3 = file1.concat(file2);
        file3.sort(function (a,b){return b[1]-a[1]});
        console.log(file3);
    } catch (e) {
        console.log(e);
    }
}

mainFunction('./csv/1.csv', './csv/2.csv');