module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const CLOSE_BRACKETS = new Map();
  const SIMILAR_BRACKETS = [];

  const stack = [];

  if (str.length % 2 != 0) {
    return false;
  }

  for (let arr of bracketsConfig) {
    if (arr[0] === arr[1]) {
      SIMILAR_BRACKETS.push(arr[0]);
    } else {
      OPEN_BRACKETS.push(arr[0]);
      CLOSE_BRACKETS.set(arr[1], arr[0]);
    }
  }

  for (let i = 0; i < str.length; i++) {
      let currentBracket = str[i];
      if (OPEN_BRACKETS.includes(currentBracket)) {
        stack.push(currentBracket);
      } else {

        let topElem = stack[stack.length - 1];

          if (SIMILAR_BRACKETS.includes(currentBracket) && topElem === currentBracket) {
            stack.pop();
          } else if (SIMILAR_BRACKETS.includes(currentBracket) && topElem !== currentBracket) {
            stack.push(currentBracket);
          } else if (CLOSE_BRACKETS.get(currentBracket) === topElem) {

            stack.pop();

          } else if (stack.length === 0) {
            return false;
          }
      }
    }

  return stack.length === 0;
}
