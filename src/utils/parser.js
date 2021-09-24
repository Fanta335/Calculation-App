const expressionParser = (expression) => {
  let nums = []; // 数字を入れるためのスタック
  let ops = []; // 演算子を入れるためのスタック

  const operators = ["+", "-", "*", "/", "%"];

  for (let i = 0; i < expression.length; i++) {
    // 演算子が来たときの処理
    if (operators.indexOf(expression[i]) !== -1) {
      let currOP = expression[i];
      // 現在の演算子とスタックに入っている演算子の優先順位を比較します。
      // スタックに入っている演算子の方が優先順位が高い時は先に計算します。
      while (ops.length > 0 && getPriority(currOP) <= getPriority(ops[ops.length - 1])) {
        process(nums, ops[ops.length - 1]);
        ops.pop();
      }
      ops.push(currOP);
    }

    // 数字が来たときの処理 ここでは文字列として扱います。
    else {
      let number = "";
      // 2桁以上の数字に対応するため、演算子がくるまで文字を結合していきます。
      while (i < expression.length && operators.indexOf(expression[i]) === -1) {
        number += expression[i];
        i++;
      }
      i--; // 最後に増やしたiを1つ戻しておきます。
      nums.push(number);
    }
  }
  // 演算子のスタックが空になるまでprocessを呼び出して計算を続けます。
  while (ops.length > 0) {
    process(nums, ops[ops.length - 1]);
    ops.pop();
  }
  // 数字のスタックの先頭に答えが入っています。
  return nums[0];
};

// スタックから数字を取り出し、受け取った演算子で計算する関数
const process = (stack, op) => {
  // 数字のスタックから文字列を取り出しNumberで数字にします。
  const right = Number(stack.pop());
  const left = Number(stack.pop());

  let value = 0;

  if(isNaN(left)) {
    value = right;
    stack.push(value);
    return;
  }

  switch (op) {
    case "+":
      value = left + right;
      break;
    case "-":
      value = left - right;
      break;
    case "*":
      value = left * right;
      break;
    case "/":
      value = Math.round((left / right) * Math.pow(10, 5)) / Math.pow(10, 5);
      break;
    case "%":
      value = left % right;
      break;
    default:
      console.log("invalid operator");
  }
  // 計算した結果は、次の演算子での計算のため再度スタックに入れます。
  stack.push(value);
};

// 演算子の優先順位を返す関数
const getPriority = (op) => {
  if (op === "+" || op === "-") return 1;
  else if (op === "*" || op === "/") return 2;
};

export default expressionParser;
