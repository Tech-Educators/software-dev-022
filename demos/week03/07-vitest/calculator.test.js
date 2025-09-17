import { sum, multiply, findMaxValue } from "./calculator.js"
import { test, expect, describe} from "vitest"

// test takes two argumetns
// the name of the test,
// and what to run
test('test if sum works', () => {
    // I expect the result of sum(1,2) to be 3
    expect(sum(1,2)).toBe(3)
})

test('max value of array', () => {
    expect(findMaxValue([3, 7, 2, 8, 5])).toBe(8)
})
// in your package.json, you can run the commands in your script tags by writing 'npm run scriptname' in your terminal. 
// For example, `npm run test`

// describe lets you group together tests

describe("Sum tests", () => {
    test('add 1 & 5 to equal 6', () => {
        expect(sum(1,5)).toBe(6)
    });

    test('add 5 and -2 to equal 3', () => {
        expect(sum(5, -2)).toBe(3)
    })
})

describe("Multiply Tests", () => {
    test('multiply 3 and 4 to be 12', () => {
        expect(multiply(3,4)).toBe(12)
    })
})