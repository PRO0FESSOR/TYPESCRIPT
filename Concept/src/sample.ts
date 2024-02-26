let a = 35;
// console.log(a);


// type declaration

let stringType :string;
let inttype:number;
let booltype:boolean;

//different type declaration

let anothertype = <number>67;


// union type declaration

let surname : string | number ;

surname = 85;

// function 


const fun = (n:number,m:number) => {
    return n+m;
}

//another type declaration  (type is used here )

type username = number | string;

let differnttype :username = 55;

type funs = ( n:number , m:number) => number;

let difffuntype:funs = (n,m) => n+m;




