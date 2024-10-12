//1
console.log(Boolean("ss"));
console.log(Boolean(22));
console.log(Number("32"));
console.log(Boolean(null));
console.log(Boolean(undefined));
//2
let user = {
    one: 'serg',
    two: 'yarik',
    three: 'aleks',
    four: {
        fname: 'oleg',
        lname: 'vasilov',
        age: 25,
        hobbie: {
            football: 'yes',
            swimming: 'no',
            IT: 'yes'
        }
    }

}
//2.1
console.log(user.four.fname);
console.log(user.four.hobbie.swimming);

//3
let massiv = ['cola', 'fanta', 'sprite', 'pepsi', [.5, 1, 1.5, 2, ['no-sugar', 'sugar', 'no-sugar', 'sugar']]];
//3.1
console.log(massiv[4] [0]);
console.log(massiv[4] [4] [1]);
//4 
for(let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}
//5
let favorit = ['peach', 'gray', 30]
console.log(typeof favorit[0]);
console.log(typeof favorit[1]);
console.log(typeof favorit[2])
//6

//7
for(let a = 1; a <= 15; a = a + 2) {
    console.log(a);
}
//8
let mas1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
for(let b = 0; b < mas1.length; b += 2) {
    console.log(mas1[b]);
}
//9 
let mas2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
for(let b = 1; b < mas2.length; b+=2) {
    console.log(mas1[b]);
}
//10
let mas3 = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let a1 = 0;
for( let i = 0; i < mas3.length; i++) {
    a1 += mas3[i]
    console.log(a1);
}
//11
let mas4 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let a2 = 1;
for( let i = 0; i < mas4.length-1; i++) {
    a2 *= mas4[i]
    console.log(a2);
}