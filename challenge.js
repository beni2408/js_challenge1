const massMark = 78;
const massJohn = 93;

const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiJohn > bmiMark) {
    console.log("John has the higher BMI value of ", bmiJohn);
} else {
    console.log("Mark has the higher BMI value of", bmiMark);
}