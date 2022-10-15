import { expect, test, describe } from 'vitest';
import { dayStringToShow } from './Forecast';


describe('Functions inside Forecast Component. dayStringToShow should return a string indicating the day according to the index', ()=>{
  test('Should return a string', () => {
    expect(typeof(dayStringToShow(0, 'else'))).toBe('string')
  }),

  test('Should return a string', () => {
    expect(typeof(dayStringToShow(1, 'else'))).toBe('string')
  }),

  test('Should return a string', () => {
    expect(typeof(dayStringToShow(2, 'else'))).toBe('string')
  }),

  test('should return "mañana"', () => {
    expect(dayStringToShow(0, 'else')).toBe('mañana')
  }),

  test('should return "pasado mañana"', () => {
    expect(dayStringToShow(1, 'else')).toBe('pasado mañana')
  }),

  test('should return "else"', () => {
    expect(dayStringToShow(2, 'else')).toBe('else')
  })

})




