import {increaseVal, decreaseVal} from "../utils/interfaceUtil/barValueUtil";
import {isPlaying, notPlaying} from "../utils/interfaceUtil/happinessBarUtil";
import {isEating, isNotEating} from "../utils/interfaceUtil/hungerBarUtil";
import { test, expect } from "vitest";

// happinessBarUtil test cases
test('happinessBarUtil test case #1 passed',  () => {
    expect(isPlaying(10)).toBe(15)
});

test('happinessBarUtil test case #2 passed',  () => {
    expect(notPlaying(20)).toBe(15)
});

// hungerBarUtil test cases
test('hungerBarUtil test case #1 passed',  () => {
    expect(isEating(75)).toBe(80)
});

test('hungerBarUtil test case #2 passed',  () => {
    expect(isNotEating(65)).toBe(60)
});

// //testing increaseVal
// test('number increased by 5',  () => {
//     expect(increaseVal(20)).toBe(25)
//     expect(increaseVal(50.5)).toBe(55.5) // should technically work
//     expect(increaseVal(100)).toBe(100) // should not exceed 100
// });

// //testing decreaseVal
// test('number decreased by 5',  () => {
//     expect(decreaseVal(50)).toBe(45)
//     expect(decreaseVal(44)).toBe(39)
//     expect(decreaseVal(0)).toBe(0) // should not go below zero
// });