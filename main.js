// Exercise 1

const subtraction = (num1, num2) => num1 - num2;

// Exercise 2

const student = {
    name: 'Brian',
    age: 16,
    personalInformation: function(){
        console.log(this.name, this.age);
    },
    aging: passingTime = (years) => student.age += years,
}
