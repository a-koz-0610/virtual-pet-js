class VirtualPet {
  constructor(name, description, hunger, thirst) {
    this.name = name;
    this.description = description;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  feed() {
    this.hunger -= 5;
    this.thirst += 10;
  }

  water() {
    this.thirst -= 10;
  }
}

export default VirtualPet;
