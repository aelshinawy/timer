import { isNumeric } from "./numbers";

export class Parser {
  static SEPARATOR = " ";
  static tokenize(str: string, separator?: string): string[] {
    return str.split(separator ?? Parser.SEPARATOR);
  }

  static tokensToSeconds(tokenArray: Array<any>) {
    // Get number of tokens
    const numberOfTokens = tokenArray.length;
    // locate indicies of numbers
    const numberIndicies = [];
    tokenArray.forEach((value, index) => {
      if (isNumeric(value)) numberIndicies.push(index);
    });

    const numberOfNumericTokens = numberIndicies.length;
    if (numberOfTokens > 0 && numberOfNumericTokens > 0) {
      return parseInt(tokenArray[0]);
    }
  }
}
