const add = (a, b) => a + b;

let results = {
  total: 0,
  fail: 0
};

const assertEqual = (actual, expected, message) => {
  results.total += 1;
  if(actual != expected) {
    results.fail += 1;
    message = (message || "Assertion failed") + ", expect [ " + actual +" ], but get[ " + expected + " ]";
    console.log(message);
  }
}

assertEqual(add(2,3), 4);
assertEqual(add(6,7), 13);
assertEqual(add(7,7), 10);

console.log("Total " + results.total + " tests, " + results.fail + " failed, "
        + (results.total - results.fail) + " passed.");
