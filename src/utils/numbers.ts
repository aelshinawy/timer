export function isNumeric(str: any): boolean {
  // if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
