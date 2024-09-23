export function formatNumberString(input) {
  // Convert to float, then to integer, then back to string
  let numStr = String(Math.floor(parseFloat(input)));
  
  // Add commas
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
