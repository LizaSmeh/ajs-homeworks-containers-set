import Team from './team.js';
import Character from './character.js';

test('Добавить персонажа', () => {
  const char = new Character('Liza');
  const team = new Team();
  team.add(char);
  expect(team.members).toEqual(new Set([{ name: 'Liza' }]));
});

test('Добавить повторно', () => {
  const char = new Character('Liza');
  const team = new Team();
  team.add(char);
  expect(() => team.add(char)).toThrow(`Персонаж ${char.name} уже в команде`);
});

test('Добавить нескольких персонажей', () => {
  const char = new Character('Liza');
  const char1 = new Character('Biza');
  const char2 = new Character('Fiza');
  const team = new Team();
  team.addAll(char, char1, char2);
  expect(team.members).toEqual(new Set([
    { name: 'Liza' },
    { name: 'Biza' },
    { name: 'Fiza' },
  ]));
});

test('Конвертация в массив', () => {
  const char = new Character('Liza');
  const char1 = new Character('Biza');
  const char2 = new Character('Fiza');
  const team = new Team();
  team.addAll(char, char1, char2);
  expect(team.toArray()).toEqual([
    { name: 'Liza' },
    { name: 'Biza' },
    { name: 'Fiza' },
  ]);
});
