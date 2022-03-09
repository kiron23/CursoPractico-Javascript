const lista1 = [
    500,
    200,
    300,
    700,
    1100,
    50,
];

const min = lista1[0];

for (let i = 0; i < lista1.length; i++ ){
    if(lista1[i] < min){
        min = lista1[i];
    }
};

console.log(min);
