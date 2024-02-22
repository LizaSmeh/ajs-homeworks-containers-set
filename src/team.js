export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Персонаж ${character.name} уже в команде`);
    }
    this.members.add(character);
  }

  addAll(...arrCharacter) {
    arrCharacter.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
