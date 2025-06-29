import { calculateRewardPoints } from './helpers';

describe('calculateRewardPoints', () => {

  //Positive Cases
  it('should return 0 points for amount <= 50', () => {
    expect(calculateRewardPoints(10)).toBe(0);
    expect(calculateRewardPoints(50)).toBe(0);
  });

  it('should return correct points for amount between 51 and 100', () => {
    expect(calculateRewardPoints(60)).toBe(10);
    expect(calculateRewardPoints(100)).toBe(50);
  });

  it('should return correct points for amount above 100', () => {
    expect(calculateRewardPoints(120)).toBe(90); 
    expect(calculateRewardPoints(150)).toBe(150);
  });

  // Boundary Cases
  it('should return 1 point for amount = 51', () => {
    expect(calculateRewardPoints(51)).toBe(1);
  });

  it('should return 52 points for amount = 101', () => {
    expect(calculateRewardPoints(101)).toBe(52);
  });

  // Negative/Invalid Input Cases
  it('should return 0 for zero or negative amounts', () => {
    expect(calculateRewardPoints(0)).toBe(0);
    expect(calculateRewardPoints(-10)).toBe(0);
  });

  it('should return 0 for non-numeric input', () => {
    expect(calculateRewardPoints('100')).toBe(0);
    expect(calculateRewardPoints(null)).toBe(0);
    expect(calculateRewardPoints(undefined)).toBe(0);
    expect(calculateRewardPoints(NaN)).toBe(0);
  });
});