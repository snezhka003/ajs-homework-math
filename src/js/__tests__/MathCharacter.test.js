import MathCharacter from '../MathCharacter';

test('Тест линейного падения атаки без "дурмана"', () => {
  const daemon = new MathCharacter('Daemon', 100, false, 3);
  expect(daemon.attack).toBe(80);
});

test('Тест падения атаки с "дурманом"', () => {
  const magician = new MathCharacter('Magician', 100, true, 2);
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('get attack возвращает корректное значение при attack < 0', () => {
  const magician = new MathCharacter('Magician', -20, false, 2);
  expect(magician.attack).toBe(0);
});

test('get attack возвращает корректное значение при attack > 100', () => {
  const daemon = new MathCharacter('Daemon', 200, true, 3);
  expect(daemon.attack).toBe(100);
});
