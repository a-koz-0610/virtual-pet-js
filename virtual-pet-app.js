import VirtualPet from './virtual-pet';
import { careForPetEvent, createActionButton, petStats } from './utils';
import Form from './Form';

const createBtn = document.querySelector('.createBtn'),
  createFormBtn = document.querySelector('.createFormBtn'),
  container = document.querySelector('.container'),
  myPetsDiv = document.getElementById('myPets');

//the call to load the page and fire any functions
renderPage();

function renderPage() {
  createPet();
  createAPetFromForm();
}

function createPet() {
  createBtn.addEventListener('click', () => {
    let name = prompt('Enter a name'),
      description = prompt('Enter a description');

    const createdPet = new VirtualPet(name, description, 50, 50);

    const petPara = document.createElement('p');
    petPara.innerText = petStats(createdPet);

    myPetsDiv.appendChild(petPara);

    const feedBtn = document.createElement('button');
    const thirstBtn = document.createElement('button');

    interactWithPet(feedBtn, thirstBtn, petPara, createdPet);
  });
}

const interactWithPet = (feedBtn, thirstBtn, petPara, createdPet) => {
  createActionButton(myPetsDiv, feedBtn, 'Feed');
  createActionButton(myPetsDiv, thirstBtn, 'Water');

  careForPetEvent(feedBtn, petPara, createdPet);
  careForPetEvent(thirstBtn, petPara, createdPet);
};

//Make the Form component come into existence when the user clicks the create form button!
createFormBtn.addEventListener('click', () => {
  myPetsDiv.innerHTML = Form();
});

function createAPetFromForm() {
  container.addEventListener('click', (event) => {
    //event delegation
    if (event.target.classList.contains('submit')) {
      //once we click submit, have the parent "look for" a child element with a .petName class
      const petName =
        event.target.parentElement.querySelector('.petName').value;
      const petDescription =
        event.target.parentElement.querySelector('.petDescription').value;
      const createdPet = new VirtualPet(petName, petDescription, 50, 50);
      const petPara = document.createElement('p');
      petPara.innerText = petStats(createdPet);
      myPetsDiv.appendChild(petPara);
    }
  });
}
