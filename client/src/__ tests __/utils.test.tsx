import {isPlaying, notPlaying} from "../utils/interfaceUtil/happinessBarUtil";
import {isEating, isNotEating} from "../utils/interfaceUtil/hungerBarUtil";
import { test, expect } from "vitest";

// happinessBarUtil test cases
test('Increase happinessBar value ',  () => {
    expect(isPlaying(10)).toBe(15)
});

test('Decrease happinessBar value',  () => {
    expect(notPlaying(20)).toBe(15)
});

// hungerBarUtil test cases
test('Increase hungerBar value',  () => {
    expect(isEating(75)).toBe(80)
});

test('Decrease hungerBar value',  () => {
    expect(isNotEating(65)).toBe(60)
});
