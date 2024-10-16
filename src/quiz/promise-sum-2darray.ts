
function arraySum(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            reject('Cannot sum an empty array');
        }

        const rowPromises = arr.map(row => {
            return new Promise<number>((resolveRow) => {
                setTimeout(() => {
                    const rowSum = row.reduce((sum, num) => sum + num, 0);
                    resolveRow(rowSum);
                }, 0);
            });
        });

        Promise.all(rowPromises)
            .then(rowSums => {
                const totalSum = rowSums.reduce((sum, rowSum) => sum + rowSum, 0);
                resolve(totalSum);
            })
            .catch(error => reject(error));
    });
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

arraySum(array2D_1)
    .then(result => console.log('Sum:', result))
    .catch(error => console.error('Error:', error));