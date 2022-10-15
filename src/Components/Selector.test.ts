import { expect, test, describe } from 'vitest';
import { filterAndSortData } from './Selector';


describe('Functions inside Selector Component. filterAndSortData should return an alphabetical sorted filtered array', ()=>{

const expected = [{name:'d'}, {name:'e'}, {name:'b'}, {name:'a'}, {name:'c'} ];
const toBe = [{name:'a'}, {name:'c'}, {name:'d'}, {name:'e'} ]

  test('Should return an array', () => {
    expect(Array.isArray(filterAndSortData(expected, 'b'))).toBe(true)
  }),

  test('Should return a filtered sorted array', () => {
    expect(filterAndSortData(expected, 'b')).toStrictEqual(toBe)
  })

})




