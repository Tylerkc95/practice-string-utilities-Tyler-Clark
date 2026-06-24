const stringUtils = require('./stringUtils');

console.log("\nCapitalize the string \"lowercase\": " + stringUtils.capitalize("lowercase"))
console.log("Capitalize the number 123: " + stringUtils.capitalize(123))
console.log("capitalize function with no argument: " + stringUtils.capitalize())

console.log("\nReverse the string \"ABCDEFG\": " + stringUtils.reverse("ABCDEFG"))
console.log("Reverse the number 123: " + stringUtils.reverse(123))
console.log("reverse function with no argument: " + stringUtils.reverse())

console.log("\nCheck if the string \"string\" contains the substring \"substring\": " + stringUtils.contains("substring","string"))
console.log("Check if the string \"string\" contains the substring \"number\": " + stringUtils.contains("substring","number"))
console.log("Check if the number 123 contains the number 2: " + stringUtils.contains(123,2))
console.log("contains function with no argument: " + stringUtils.contains())
