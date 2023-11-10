export const numberPuzzles = [
    {
        title: "Question 1",
        id: "Level 1",
        type: "M/Q",
        description: "The price of a shirt increased by 15%. If the original price was $40, what is the new price?",
        answer: "$46",
        explanation: "The new price is found by multiplying the original price by (1 + 15/100).",
        options: ['$42', '$45', '$46', '$48']
    },
    {
        title: "Question 2",
        id: "Level 1",
        type: "M/Q",
        description: "If 25% of a number is 50, what is the number?",
        answer: "200",
        explanation: "To find the number, divide 50 by (25/100) or multiply 50 by (100/25).",
        options: ['150', '180', '200', '225']
    },
    {
        title: "Question 3",
        id: "Level 1",
        type: "M/Q",
        description: "The population of a town decreased by 10% last year. If the current population is 9,000, what was the population a year ago?",
        answer: "10,000",
        explanation: "The original population is found by dividing the current population by (1 - 10/100).",
        options: ['8,000', '9,500', '10,000', '10,500']
    },
    {
        title: "Question 4",
        id: "Level 1",
        type: "M/Q",
        description: "A book was originally priced at $80, but it is now on sale for 30% off. What is the sale price?",
        answer: "$56",
        explanation: "The sale price is found by subtracting 30% of the original price from the original price.",
        options: ['$52', '$56', '$60', '$70']
    },
    {
        title: "Question 5",
        id: "Level 2",
        type: "M/Q",
        description: "Solve for x: 3x + 5 = 20.",
        answer: "5",
        explanation: "Subtract 5 from both sides, then divide by 3.",
        options: ['-1', '3', '5', '8']
    },
    {
        title: "Question 6",
        id: "Level 2",
        type: "M/Q",
        description: "If y is 4 less than twice the value of x, express this relationship as an algebraic expression.",
        answer: "2x - 4",
        explanation: "Twice the value of x is 2x, and 4 less than that is 2x - 4.",
        options: ['x + 2', '2x - 4', '4x - 2', 'x - 4']
    },
    {
        title: "Question 7",
        id: "Level 2",
        type: "M/Q",
        description: "Factor the quadratic expression: x^2 + 5x + 6.",
        answer: "(x + 2)(x + 3)",
        explanation: "Find two numbers whose product is 6 and sum is 5.",
        options: ['(x + 2)(x + 3)', '(x - 2)(x - 3)', '(x + 1)(x + 6)', '(x - 1)(x - 6)']
    },
    {
        title: "Question 8",
        id: "Level 2",
        type: "M/Q",
        description: "Determine the solution to the inequality: 2y - 7 < 11.",
        answer: "y < 9",
        explanation: "Add 7 to both sides, then divide by 2 (while reversing the inequality).",
        options: ['y < 5', 'y > 9', 'y < 9', 'y > 5']
    },
    {
        title: "Question 9",
        id: "Level 3",
        type: "M/Q",
        description: "Solve for x: (2(x - 4) = 16).",
        answer: "10",
        explanation: "Distribute and then solve for x.",
        options: ['-2', '4', '10', '12']
    },
    {
        title: "Question 10",
        id: "Level 3",
        type: "M/Q",
        description: "Determine the solution to the inequality: (3y + 7 > 22).",
        answer: "y > 5",
        explanation: "Subtract 7, then divide by 3 (while reversing the inequality).",
        options: ['y < 5', 'y = 5', 'y > 5', 'y < 6']
    },
    {
        title: "Question 11",
        id: "Level 3",
        type: "M/Q",
        description: "Solve the quadratic equation: (x^2 - 5x + 6 = 0).",
        answer: "(x - 2)(x - 3)",
        explanation: "Factor or use the quadratic formula to find the solutions.",
        options: ['(x + 2)(x + 3)', '(x - 2)(x - 3)', '(x - 1)(x - 6)', '(x + 1)(x + 6)']
    },
    {
        title: "Question 12",
        id: "Level 3",
        type: "M/Q",
        description: "Solve the system of equations: {(2x + y = 8), (3x - 2y = 5)}.",
        answer: "x = 3, y = 2",
        explanation: "Solve simultaneously by substitution or elimination.",
        options: ['x = 2, y = 3', 'x = 3, y = 2', 'x = 4, y = 1', 'x = 1, y = 4']
    },
    {
        title: "Question 13",
        id: "Level 4",
        type: "M/Q",
        description: "Calculate the product of 356 and 24.",
        answer: "8544",
        explanation: "Multiply the two numbers together.",
        options: ['6784', '7420', '8544', '9202']
    },
    {
        title: "Question 14",
        id: "Level 4",
        type: "M/Q",
        description: "Divide 789 by 13 and express the result as a decimal.",
        answer: "60.69230",
        explanation: "Perform the division and express the result as a decimal.",
        options: ['48.15384', '55.84615', '60.69230', '72.23076']
    },
    {
        title: "Question 15",
        id: "Level 4",
        type: "M/Q",
        description: "Add 4567 and 8912.",
        answer: "13479",
        explanation: "Simply add the two numbers.",
        options: ['11234', '12456', '13479', '14502']
    },
    {
        title: "Question 16",
        id: "Level 4",
        type: "M/Q",
        description: "Subtract 398 from 652.",
        answer: "254",
        explanation: "Perform the subtraction with borrowing if necessary.",
        options: ['134', '186', '254', '307']
    },
    {
        title: "Question 17",
        id: "Level 5",
        type: "M/Q",
        description: "Find the area of a rectangle with length 12 cm and width 8 cm.",
        answer: "96 square cm",
        explanation: "Multiply the length by the width to find the area.",
        options: ['64 square cm', '80 square cm', '96 square cm', '120 square cm']
    },
    {
        title: "Question 18",
        id: "Level 5",
        type: "M/Q",
        description: "Calculate the perimeter of a square with a side length of 15 units.",
        answer: "60 units",
        explanation: "Multiply the length of one side by 4 to find the perimeter.",
        options: ['45 units', '52 units', '60 units', '75 units']
    },
    {
        title: "Question 19",
        id: "Level 5",
        type: "M/Q",
        description: "In a right-angled triangle, if the legs are 5 cm and 12 cm, what is the length of the hypotenuse?",
        answer: "13 cm",
        explanation: "Use the Pythagorean Theorem: c² = a² + b².",
        options: ['9 cm', '11 cm', '13 cm', '15 cm']
    },
    {
        title: "Question 20",
        id: "Level 5",
        type: "M/Q",
        description: "Find the circumference of a circle with a radius of 6 cm. (Use π = 3.14)",
        answer: "37.68 cm",
        explanation: "Use the formula: C = 2πr.",
        options: ['28.26 cm', '31.42 cm', '37.68 cm', '42.56 cm']
    }
    

] 