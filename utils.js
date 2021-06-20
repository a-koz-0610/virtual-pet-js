export const petStats = (createdPet) => {
  return (
    createdPet.name +
    ' ' +
    createdPet.description +
    ' Hunger: ' +
    createdPet.hunger +
    ' Thirst: ' +
    createdPet.thirst
  );
};

export const createActionButton = (parentElem, childElem, childText) => {
  childElem.innerText = childText;
  parentElem.appendChild(childElem);
};

export const careForPetEvent = (buttonVar, petElem, createdPet) => {
  buttonVar.addEventListener('click', () => {
    if (buttonVar.innerText === 'Feed') {
      createdPet.feed();
    } else {
      createdPet.water();
    }
    warnUser(petElem, createdPet);
    petElem.innerText = petStats(createdPet);
  });
};

const warnUser = (petElem, createdPet) => {
  if (createdPet.thirst > 80) {
    petElem.className = 'warning';
  } else {
    petElem.className = '';
  }
};
