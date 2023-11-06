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

// Exercise 3

window.addEventListener('load', ()=>{
    const ex3 = document.getElementById('exercise-3');
    ex3.innerText = 'This is the inner text after using JS';    
    ex3.innerHTML += `<p></p>`;
});

// Exercise 4

