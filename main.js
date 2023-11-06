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

window.addEventListener('load', ()=>{
    const ul = document.getElementById('ul');
    const lastLi = document.createElement('li');
    lastLi.innerText = 'item 4';
    ul.appendChild(lastLi);
    const item5 = document.createElement('li');
    item5.innerText = 'item 5';
    ul.insertBefore(item5, ul.children[0]);
});

// Exercise 5

window.addEventListener('load', ()=>{
    const divBlu = document.getElementById('blu-div');
    divBlu.addEventListener('click', function(){
        if(this.classList.contains('blu')){
            this.classList.add('rosso');
            this.classList.remove('blu');
        }
    })
})

// Exercise 6

window.addEventListener('load', ()=>{
    const button = document.getElementById('button');
    button.setAttribute('disabled', null);
});

// Exercise 7

window.addEventListener('load', ()=>{
    const changingDiv = document.getElementById('ex-7');
    changingDiv.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'powderblue';
    })
    changingDiv.addEventListener('mouseout', function(){
        this.style.backgroundColor = 'transparent';
    })
    changingDiv.addEventListener('click', function(){
        console.log('You clicked me!');
    })
});