export function calculateRewardPoints(amount) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) return 0; 
    
    if (amount <= 50) return 0;
  if (amount <= 100) return amount - 50;
  return 50 + (amount - 100) * 2;
}