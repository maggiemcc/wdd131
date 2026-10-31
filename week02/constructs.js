const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// For Loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(`The value is ${studentReport[i]} is less than ${LIMIT}.`);
    }
};

// While Loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
};


// forEach Loop
studentReport.forEach(function (value) {
    if (value < LIMIT) {
        console.log(value);
    }
});

// For...in Loop
for (let value in studentReport) {
    if (studentReport[value] < LIMIT) {
        console.log(studentReport[value]);
    }
}

// For...in Loop option 2
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Use any type of loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today.
const numberOfDays = 6;
const today = new Date();

let todayString = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(today);

console.log(`Today is ${todayString}.`);
console.log(`The next ${numberOfDays} days are:`);

for (let i = 1; i <= numberOfDays; i++) {
    const nextDay = new Date();

    nextDay.setDate(today.getDate() + i);
    let nextDayString = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(nextDay);
    console.log(nextDayString)
}
