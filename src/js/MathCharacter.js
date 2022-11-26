export default class MathCharacter {
  constructor(name, attack, dope, distance) {
    this.name = name;
    this.attack = attack;
    this.dope = dope;
    this.distance = distance;
  }

  get stoned() {
    return this.dope;
  }

  set stoned(value) {
    this.dope = value;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    let attack = this.attackValue * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    return attack > 0 ? Math.round(attack) : 0;

    // не могу никак понять, почему условие выше отрабатывает, а эти условия полностью игнорируются.
    // Пожалуйста, объясните что не так.
    /* if (attack > 0 || attack < 101) {
      attack = Math.floor(attack);
    } else if (attack >= 100) {
      attack = 100;
    } else if (attack <= 0) {
      attack = 0;
    }
    return attack; */
  }
}
