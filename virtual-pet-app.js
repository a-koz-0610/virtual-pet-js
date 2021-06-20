import VirtualPet from './virtual-pet';
import { careForPetEvent, createActionButton, petStats } from './utils';

const createBtn = document.querySelector('.createBtn'),
  myPetsDiv = document.getElementById('myPets');

//the call to load the page and fire any functions
renderPage();

function renderPage() {
  createPet();
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
