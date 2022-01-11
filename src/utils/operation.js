/**
 * js加减乘除运算(解决js运算精度丢失问题)
 */

// 加法
export function accAdd(num1, num2) {
  let len1, len2;
  try {
    len1 = num1.toString().split(".")[1].length;
  } catch (e) {
    len1 = 0;
  }
  try {
    len2 = num2.toString().split(".")[1].length;
  } catch (e) {
    len2 = 0;
  }
  const pow = Math.pow(10, Math.max(len1, len2));
  return Math.round(num1 * pow + num2 * pow) / pow;
}
// 减法
export function accSub(num1, num2) {
  let len1, len2;
  try {
    len1 = num1.toString().split(".")[1].length;
  } catch (e) {
    len1 = 0;
  }
  try {
    len2 = num2.toString().split(".")[1].length;
  } catch (e) {
    len2 = 0;
  }
  const pow = Math.pow(10, Math.max(len1, len2));
  const len = len1 >= len2 ? len1 : len2;
  return (Math.round(num1 * pow - num2 * pow) / pow).toFixed(len);
}
// 除法
export function accDiv(num1, num2) {
  let len1, len2;
  try {
    len1 = num1.toString().split(".")[1].length;
  } catch (e) {
    len1 = 0;
  }
  try {
    len2 = num2.toString().split(".")[1].length;
  } catch (e) {
    len2 = 0;
  }
  const r1 = Number(num1.toString().replace(".", ""));
  const r2 = Number(num2.toString().replace(".", ""));
  return accMul(r1 / r2, Math.pow(10, len2 - len1));
}
// 乘法
export function accMul(num1, num2) {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {
    console.log(e)
  }
  try {
    m += s2.split(".")[1].length;
  } catch (e) {
    console.log(e)
  }
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
