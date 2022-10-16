import { expect, test, describe } from 'vitest';
import { capitalize, getTemperature } from './api';

describe('Functions inside api. capitalize function should return an only first letter capitalized string', ()=>{

      test('Should return a string', () => {
        expect(typeof(capitalize('string'))).toBe('string')
      }),

      test('Should return an only first letter capitalized word or phrase', () => {
        expect(capitalize('string')).toBe('String')
      }),

      test('Should return an only first letter capitalized word or phrase', () => {
        expect(capitalize('string to be evaluated')).toBe('String to be evaluated')
      })
      
    }),
    
describe('Functions inside api. getTemperature function should return an only one decimal (tops) number', ()=>{

    test('Should return a number', () => {
      expect(typeof(getTemperature(10))).toBe('number')
    }),

    test('Should return a number', () => {
        expect(typeof(getTemperature(10.058978))).toBe('number')
      }),

    test('Should return an only first letter capitalized word or phrase', () => {
      expect(getTemperature(10.058978)).toBe(10.1)
    }),

    test('Should return an only first letter capitalized word or phrase', () => {
      expect(getTemperature(10.1)).toBe(10.1)
    }),

    test('Should return an only first letter capitalized word or phrase', () => {
      expect(getTemperature(10)).toBe(10)
    })
    
  })