import VirtualPet from './virtual-pet';

//demo of logging a basic method and property call
const hardCodedPetExample = new VirtualPet('Fido', 'Happy Dog', 50, 50);
console.log(hardCodedPetExample);
hardCodedPetExample.feed();
console.log('hunger level: ', hardCodedPetExample.hunger);

//start on functionality for front end view
const createBtn = document.querySelector('.createBtn'),
  myPetsDiv = document.getElementById('myPets');

createBtn.addEventListener('click', () => {
  let name = prompt('Enter a name'),
    description = prompt('Enter a description');
  const createdPet = new VirtualPet(name, description, 50, 50);

  const petPara = document.createElement('p');
  petPara.innerText =
    createdPet.name +
    ' ' +
    createdPet.description +
    ' Hunger: ' +
    createdPet.hunger +
    ' Thirst: ' +
    createdPet.thirst;

  myPetsDiv.appendChild(petPara);

  const feedBtn = document.createElement('button');
  feedBtn.innerText = 'Feed';
  myPetsDiv.appendChild(feedBtn);

  feedBtn.addEventListener('click', () => {
    createdPet.feed();
    petPara.innerText =
      createdPet.name +
      ' ' +
      createdPet.description +
      ' Hunger: ' +
      createdPet.hunger +
      ' Thirst: ' +
      createdPet.thirst;
  });
});
