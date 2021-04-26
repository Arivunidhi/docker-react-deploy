// Function declaration
walk();

function walk(){
    console.log('function declaration');
}

// Named function call
let run=function walk(){
    console.log('named function call');
}

run();


// Ananymous function call
let run2=function(){
    console.log('ananymous function call')
}

run2();

//create object
const circle=function(){
radius:1;
}

console.log(circle);


//create object using constructor
function circleConst(radius){
    this.radius=radius;
}

const circleConstValue=new circleConst(1);
console.log(circleConstValue);


const person={
    firstname:'Arivu',
    lastname:'Nidhi',
    get fullName(){
        return `${person.firstname} ${person.lastname}`;
    
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstname=parts[0];
        this.lastname=parts[1];
    }
};

person.fullName='Arivu Nidhi';
console.log(person);

