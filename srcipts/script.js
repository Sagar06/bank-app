'use strict';

const main = document.getElementById('main');
const btnAddUser = document.getElementById('add-user');
const btnDouble = document.getElementById('double');
const btnFilter = document.getElementById('filter-rich');
const btnTotal= document.getElementById('total');

// add user btn
let data =[];

// fetch randon user

const getRandomUser = async function(){
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random() * 1000000),
    };
    addData(newUser);

};
const addData = function(obj){
    data.push(obj);
    UpdateDom();
};
// fucntion dom
const UpdateDom = function(providedData = data){

    main.innerHTML = ' <h2><strong>Name</strong> Balance</h2>';
    providedData.forEach(item =>{
        const element = document.createElement('div');
        element.classList.add('users');
        element.innerHTML = `<strong>${item.name}</strong>₹
        ${item.balance}`;
        main.appendChild(element);
    });
}
// double balance
const doubleBalance = function(){
    data = data.map(user =>{
        return{...user,  balance: user.balance *2};
    });
    UpdateDom();
}
const filterRich = function(){
    data = data.filter((user) => user.balance > 50000);
    UpdateDom();
}
getRandomUser();

btnAddUser.addEventListener('click' , getRandomUser);

btnDouble.addEventListener('click', doubleBalance);

btnFilter.addEventListener('click' , filterRich);

btnTotal.addEventListener('click' , totalBalance);