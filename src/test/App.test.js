const { Add, Dec, Mult, Div} = require ("./Maths")
const { emotions, fruits, translations, animal } = require ("./Arrays")
const { initialLang, initialTheme, initialAuth } = require ("./InitialValues")


describe ("math operators", () => {
 it ("9.500 + 1.500 must be 11.000", () => {
  expect (Add(9500, 1500)).toBe(11000);
 });
 
 it("9.500 - 1.500 must be 8.000", () => {
  expect (Dec(9500, 1500)).toBe(8000)
 });
 
 it("100 * 100 must be 10.000", () => {
  expect(Mult(100, 100)).toBe(10000)
 })
 
 it("10.000 / 100 must be 100", () => {
  expect(Div(10000, 100)).toBe(100)
 })
 });

describe("fruits array revision",() => {
 it ("does it have an?", () => {  
  expect(fruits).toContain("apple")
  expect(fruits.length).toBeLessThan(8)
  expect(fruits.length).toBeGreaterThan(6)
  expect(fruits).toContain("watermelon")
});
});

describe ("objects", () => {
 it ("animals description", () => { 
 expect (animal.whale.sound).toEqual("ultrasonic singing!");
 expect(animal.cat.color).toEqual("orange");
 expect(animal.dog.legs).toEqual(4) 
 })
 });


 describe ("translations", () => {
  it("translation content", () => {  
  expect (translations.es.title).toEqual("Título")
  expect (translations.por.title).not.toBe("Title")
  expect (translations.por.mainGreeting).toEqual("Parabéns car@ usuári@, você chegou ao segundo tópico")
 });
})

describe ("Initial Values", () => {
 it ("Initial value must be", () => {
  expect(initialAuth).not.toBeUndefined;
  expect(initialLang).not.toBeUndefined;
  expect(initialTheme).not.toBeUndefined;
  expect (initialAuth).toBeNull;
  expect (initialLang).toBe("en");
  expect (initialTheme).toEqual("light");
 })
})