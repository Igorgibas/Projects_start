let array: number[] = [1, 2, 3, 4];

array.push(6, -1);
console.log(array.sort((a: number, b: number) => b - a));

console.log(array.join("!"));