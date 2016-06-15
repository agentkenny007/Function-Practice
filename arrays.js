// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
//numbers.sort();
numbers.sort(function(a, b) { return a - b; });
var largest = numbers.pop();
numbers.push(largest);



// ---------------------------
// 2. Find longest string
// ---------------------------
var max = 0, longest;
for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > max){
        max = strings[i].length;
        longest = strings[i];
    }
};



// ---------------------------
// 3. Find even numbers
// ---------------------------
var evenNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) evenNumbers.push(numbers[i]);
};


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var oddNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) oddNumbers.push(numbers[i]);
};

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var isWords = [];
for (var i = 0; i < strings.length; i++) {
    if (strings[i].includes('is')) isWords.push(strings[i]);
};


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var numbersAndStrings = numbers.concat(strings);



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
jsInstructors = [];
for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].teaches == 'JavaScript') jsInstructors.push(instructors[i]);
}
jsInstructors.sort(function(a, b){
    if (a.firstname < b.firstname) return -1;
    if (a.firstname > b.firstname) return 1;
    return 0;
});
//jsInstructors = jsInstructors.sort();
