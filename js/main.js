const elForm = document.getElementById('form');
const NameInput = document.getElementById('inputName');
const LastNameInput = document.getElementById('inputLastname');
const NumberInput = document.getElementById('inputNumber');
const listGroup = document.getElementById('List');
const friendBtn = document.getElementById('friendBtn');
const familyBtn = document.getElementById('familyBtn');
const allBtn = document.getElementById('allBtn');
const SelectBtn = document.querySelector('.main-select');

let triangle = document.getElementById('triangleBtn');



elForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  let fname =  NameInput.value;
  let lname =  LastNameInput.value;
  let number =  NumberInput.value;

  NumberInput.value = '';
  LastNameInput.value = '';
  NameInput.value = '';

  
  let li = document.createElement('li');
  listGroup.append(li);
  li.className = 'list-group-item';

  li.innerHTML = `
  <p class="mb-2">First name: ${fname} </p>
  <p class="mb-2">Last name: ${lname} </p>
  <p>Number: ${number} </p>
  `;

  listGroup.style.background = '#fff';
  li.style.padding = '15px'; 

  friendBtn.addEventListener('click', (e) =>{
    // let friendItem = document.createElement('li');
    // friendItem.className = 'list-group-item';
    // let newlist = document.createElement('ul');
    // newlist.append = friendItem;
    
    
  
  })
})












friendBtn.addEventListener('click', (e) =>{
  allBtn.style.background = '#000';
  allBtn.style.color = '#fff';

  friendBtn.style.background = '#fff';
  friendBtn.style.color = '#000';
  friendBtn.style.border = 'none';
  triangle.style.left = '123px';
  familyBtn.style.background = '#000';
  familyBtn.style.color = '#fff';

})


allBtn.addEventListener('click', () =>{
   allBtn.style.background = '#fff';
   allBtn.style.color = '#000';
   triangle.style.left = '20px';
   friendBtn.style.background = '#000';
   friendBtn.style.color = '#fff';
   familyBtn.style.background = '#000';
   familyBtn.style.color = '#fff';
})

familyBtn.addEventListener('click', () =>{
  familyBtn.style.background = '#fff';
  familyBtn.style.color = '#000';
  friendBtn.style.background = '#000';
  friendBtn.style.color = '#fff';
  triangle.style.left = '238px';
  allBtn.style.background = '#000';
  allBtn.style.color = '#fff';

})