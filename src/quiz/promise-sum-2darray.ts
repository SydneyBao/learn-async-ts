async function sumRow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log(`begin sumRow... ${rowIdx}`);
        if (arr.length > rowIdx) {
            let sum = 0;
            for (let i = 0; i < arr[rowIdx].length; i++) {
                sum += arr[rowIdx][i];
            }
            resolve(sum);
        } else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    })
}

async function calculateSum(numArr: number[][]): Promise<number> {
    if (numArr.length === 0) {
        throw 'Cannot calculate sum of empty array';
    }
    const rowSumPromises = [];
    for (let x = 0; x < numArr.length; x++) {
        rowSumPromises.push(sumRow(numArr, x));
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        console.log(rowSums);
        const sum = rowSums.reduce((acc, curr) => acc + curr, 0);
        console.log(`Sum = ${sum}`);
        return sum;
    } catch(error) {
        console.log(`Error: ${error}`);
        throw error;
    }
}

const array2D_4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

calculateSum(array2D_4).then((status) => console.log(status));
calculateSum([]).catch((error) => console.log(error));