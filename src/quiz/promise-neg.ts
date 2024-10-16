function findNegativeRow(arr: number[][]): Promise<number[]> {
    return new Promise((resolve) => {
        const rowPromises = arr.map((row, index) => 
            new Promise<number | null>((resolveRow) => {
                setTimeout(() => {
                    const hasNegative = row.some(num => num < 0);
                    resolveRow(hasNegative ? index + 1 : null);
                }, 0);
            })
        );

        Promise.all(rowPromises)
            .then(results => {
                const rowsWithNegatives = results.filter(row => row !== null);
                resolve(rowsWithNegatives);
            });
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

findNegativeRow(array2D_3)
    .then(rows => {
        console.log("Rows with negative numbers:", rows);
    })
    .catch(error => {
        console.error("Error:", error);
    });