export default class MathCharacter {
  constructor(name, attack, stoned, distance) {
    this.name = name;
    this.attack = attack;
    this.stoned = stoned;
    this.distance = distance;
  }

  get stoned() {
    return this.dope;
  }

  set stoned(stoned) {
    this.dope = stoned;
  }

  set attack(attack) {
    this.attackValue = attack;
  }

  get attack() {
    let newAttack = this.attackValue * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      newAttack -= Math.log2(this.distance) * 5;
    }

    if (newAttack > 100) {
      newAttack = 100;
    } else if (newAttack > 0) {
      newAttack = Math.round(newAttack);
    } else {
      newAttack = 0;
    }
    return newAttack;
  }
}
