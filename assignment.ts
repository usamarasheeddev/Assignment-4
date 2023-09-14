// Q2: Personal Message: Store a person’s name in a variable, and print a message to
// that person. Your message should be simple, such as, “Hello Eric, would you like
// to learn some Python today?”

var Name: string = "Farhan";
console.log("Hello " + Name + " would you like to learn some Python today?");

function Greetings(Name: string) {
    console.log("Hello " + Name + " would you like to learn some Python today?");
}

Greetings("farhan,Ali")

//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function titleCase(Name: string) {
    console.log("Name in upper case: " + Name.toUpperCase());
    console.log("Name in lower case: " + Name.toLowerCase());

    const TitleCase: string = Name
        .split(' ')
        .map((words) => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
        .join(' ');
    console.log(TitleCase)
}

titleCase("farhan Ali")

// Q4 Famous Quote: Find a quote from a famous person you admire. Print the quote
// and the name of its author. Your output should look something like the following,
// including the quotation marks:


var Qoute: string = '"A person who never made a mistake never tried anything new" ';
console.log("Albert Einstein once said, ", Qoute);

// Q5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
// in a variable called famous_person. Then compose your message and store it in a
// new variable called message. Print your message.


var personName: string = "David";
var message: string = '"Eyes never lies"';

console.log(personName, "once Said, ", message);


// Q6 Stripping Names: Store a person’s name, and include some whitespace characters
// at the beginning and end of the name. Make sure you use each character
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace
// around the name is displayed. Then print the name after striping the white
// spaces.


var stripName: string = "\tFarhan\n\tAli";
console.log(stripName);

const NewName: string = stripName.trim()
console.log(NewName);

// Q7+ Q8 Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print
// statements to see the results.

// it will print sum, sub, mult, div, of two numberrs
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


// Q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var FavNum: number = 5;
var message: string = "Your Favourite number is";
// it will combine both of above two variables and print message
console.log(message, " ", FavNum);

// Question 10 related to comments so i have added comments in the above questions


// Q11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var Names: string[] = ["Shaheen", "Shahdab", "Shoaib Malik", "Haris Rauf", "Naseem Shah"];
console.log(Names);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);

}

// Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing
// each person’s name, print a message to them. The text of each message should
// be the same, but each message should be personalized with the person’s name.

var Names: string[] = ["Ali", "Asad", "Alina", "Ayesha"];
console.log(Names);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i], "Good Evening");

}

// 13. Your Own Array: Think of your favorite mode of transportation, such as a
// motorcycle or a car, and make a list that stores several examples. Use your list to
// print a series of statements about these items, such as “I would like to own a
// Honda motorcycle.”


var transportation: string[] = ["BMW", "YBR", "Heavy Bike"];
console.log(Names);

for (let i = 0; i < transportation.length; i++) {
    // console.log(Names[i],"Good Evening");
    if (transportation[i] == "BMW") {
        console.log(transportation[i], "i like BMW");

    } else if (transportation[i] == "YBR") {
        console.log(transportation[i], "fav bike");
    } else if (transportation[i] == "Heavy Bike") {
        console.log(transportation[i], "Most fav bike");
    }
}

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
// dinner.

var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza")


for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
            // functinality includein next function
// Q16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.

var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza")
// b. Add one new guest to the beginning of your array.
Guest.unshift("Waleed")
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length / 2 + 1, 0, "Afridi")
// • Use append() to add one new guest to the end of your list. •
Guest.push("Razaq")
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Waleed") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Afridi") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Razaq") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
console.log("We found a bigger table so we will invite more mehmaan");






// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza")

Guest.unshift("Waleed")

Guest.splice(Guest.length / 2 + 1, 0, "Afridi")
for (let i = 0; i < Guest.length; i++) {


    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Waleed") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Afridi") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");

console.log("We found a bigger table so we will invite more mehmaan");
// 17(a). Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("you can invite only two people for dinner.");

// 17(b). Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

var Guest1: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
while (Guest1.length > 2) {
    var Final = Guest1.pop()
    console.log("you’re sorry you can’t invite them to dinner.", Final);

}



// 17(c). Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < Guest1.length; i++) {
    console.log(Guest1[i], "You are still invited");

}
// 17(d). Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i <= Guest1.length; i++) {
    Guest1.pop()

}
console.log(Guest1);



// 18. Seeing the World: Think of at least five places in the world you’d like to visit

// 18(a) Store the locations in a array. Make sure the array is not in alphabetical order.
var favLocations: string[] = ["a", "e", "t", "c", "f"];
// 18(b). Print your array in its original order.
console.log("Array in its origional order is: ", favLocations);
// 18(c). Print your array in alphabetical order without modifying the actual list.
var copyArray: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray.sort();
console.log(copyArray);

// 18(d). Show that your array is still in its original order by printing it.
console.log(favLocations);

// 18(e). Print your array in reverse alphabetical order without changing the order of the original list.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(f). Show that your array is still in its original order by printing it again
console.log("18(f) origional", favLocations);

// 18(g). Reverse the order of your list. Print the array to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(h). Reverse the order of your list again. Print the list to show it’s back to its original order.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);
// 18(i). Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);

// 18(j). Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Dinner: string[] = ["Ali", "fatima", "Ahmed"]
var Maxpeople: number = 0
for (let i = 0; i < Dinner.length; i++) {

    Maxpeople = Maxpeople + i;


}
console.log("Totall nuber of people you invited are ", Maxpeople);

// 20. Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
// a program that creates a list containing these items.

var Arr: string[] = ["Python", "Farhan", "Nokia", "Open Ai", "Meta"];
console.log("List of items");
console.log(".............");
var Arr_1 = Arr.map((items, index) => {
    console.log((index + 1) + ". " + items);


})

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

var car: { model: number, name: string, color: string } = {
    model: 2020,
    name: "BMW",
    color: "Black"
};

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

var ErrorIndex: string[] = ["Farhan", "Leo", "AI", "Specialist"];
ErrorIndex.splice(1, 0, "DataScience");
console.log(ErrorIndex);
console.log(ErrorIndex[10]); // it will cause an error

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// a. Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Example 1 test for equality
let num: number = 42;
console.log("Is number == 42? I predict True.");
console.log(num == 42);
// Example 2  test for enequality
let fruit: string = "banana";
console.log("is fruit is not equal to apple? i pridict the true");
console.log(fruit != "Apple");
// Example 3  Numeric comparison
let num1: number = 20;
console.log("is number<30? i pridecit the true");
console.log(num1 < 30);

// Example 4  weekend test
let day: string = "sunday"
console.log("is it sunday? i pridict true");
console.log(day == "sunday");

// Example 5  weekend test
let year: string = "September"
console.log("is it September? i pridict true");
console.log(year == "September");


// Example 6  logical
let isweekend = true;
let hasPlane = false;
console.log("today i have a plan i pridict false");
console.log(isweekend && hasPlane);

// Example 7  logical
let isRainyDay = true;
console.log("it is raining ? i pridict false ");
console.log(!isRainyDay);

// Example 8  logical
let isFeePaid = false;
console.log(" fee is paid ? i pridict false ");
console.log(isFeePaid);

// Example 9 logical operators

let isNameFarhan = true;
let isAge26 = true;
console.log("my age is 26? i pridict false");
console.log(!isAge26);

// Example 10 logical operators

let uni = true;
console.log("i didnt go to uni i prodict false");
console.log(!uni);


// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// a. Tests for equality and inequality with strings
// Equality
let equality: string = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality == "Leo");
// inequality
let equality1: string = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality1 == "leo");



// b. Tests using the lower case function

let lowerCase: string = "farhan";
let isLowerCase = false;
console.log("it is lower case? i predict true");
console.log(lowerCase.toLowerCase() == "farhan");

// c. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a: number = 10;
let b: number = 20;
console.log("start", a == b);
console.log(a != b);
console.log(a >= b && a <= b);
console.log(a >= b || a <= b);
console.log(a <= b);
console.log("............");

// d. Tests using "and" and "or" operators
let c: number = 20;
let d: number = 30;
console.log(c == d && c < d);
console.log(c == d || c < d);
console.log("*****");

// e. Test whether an item is in a array
var arr2: string[] = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr2.includes("Chocolate")) {
    console.log("Chocolate");
} else {
    console.log("item not include");

}

