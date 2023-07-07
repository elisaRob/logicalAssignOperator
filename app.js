const restaurant1={
    name:"Capri",
    numGuests1:20,
};

const restaurant2={
    name:"La Pizza",
    owner:"Giovanni Rossi"
}

// restaurant1.numGuests1=restaurant1.numGuests1 || 10;
// restaurant2.numGuests2=restaurant2.numGuests2 || 10;

// restaurant1.numGuests1||=10;
// restaurant2.numGuests2 ||=10;

restaurant1.numGuests1 ??=10;
restaurant2.numGuests2 ??=10;

console.log(restaurant1);
console.log(restaurant2);

restaurant1.owner &&='anonyme';
restaurant2.owner &&='anonyme';

console.log(restaurant1)
console.log(restaurant2)