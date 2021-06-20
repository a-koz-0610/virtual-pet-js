import VirtualPet from './virtual-pet';

describe('VirtualPet', () => {
  test('does it return a name', () => {
    const underTest = new VirtualPet('name', 'desc', 50, 50);
    expect(typeof underTest.name).toMatch('string');
  });

  test('does it return 45 for hunger when fed', () => {
    const underTest = new VirtualPet('name', 'desc', 50, 50);
    underTest.feed();
    expect(underTest.hunger).toEqual(45);
  });

  test('does it return 60 for thirst when fed', () => {
    const underTest = new VirtualPet('name', 'desc', 50, 50);
    underTest.feed();
    expect(underTest.thirst).toEqual(60);
  });
});
