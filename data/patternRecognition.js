const patternRecognition = [
    {
        title: "Question 1",
        description: "What comes next?",
        question: "7, 9, 11, ?",
        option1: 15,
        option2: 13,
        option3: 18,
        option4: 12,
        answer: 13,
        explanation: "The numbers in the sequence go up by 2 each time. We start with 7, then add 2 to get 9, add 2 again to get 11. So, the next number is 13 because we add 2 once more. That's how the pattern works in this sequence!"

    },

    {
        title: "Question 2",
        description: "What comes next?",
        question: "3 6 9 12 ?",
        option1: 14,
        option2: 21,
        option3: 15 ,
        option4: 18,
        answer: 15,
        explanation:"The numbers in the sequence go up by 3 each time. We start with 3, then add 3 to get 6, add 3 again to get 12. So, the next number is 15 because we add 3 once more. That's how the pattern works in this sequence!"

    },
    {
        title: "Question 3",
        description: "What comes next?",
        question: "72, 66, 60, 54, ?",
        option1: 50,
        option2: 48,
        option3: 60 ,
        option4: 46,
        answer: 48,
        explanation:"The numbers are going down by 6 each time. We start with 72, then subtract 6 to get 66, subtract 6 again to get 60, and so on. To find the next number, we subtract 6 from 54. So, the answer is 48 because 54 minus 6 equals 48. That's how the pattern works in this sequence!"

    },
    {
        title: "Question 4",
        description: "What comes next?",
        question: "66, 64, 62, 60, ?",
        option1: 62,
        option2: 58,
        option3: 56 ,
        option4: 54,
        answer: 58,
        explanation:"The numbers are going down by 2 each time. We start with 66, then subtract 2 to get 64, subtract 2 again to get 62, and so on. To find the next number, we subtract 2 from 60. So, the answer is 58 because 60 - 2 = 58 . That's how the pattern works in this sequence!"

    },
    {
        title: "Question 5",
        description: "What comes next?",
        question: "1, 2, 4, 8, ?",
        option1: 10,
        option2: 12,
        option3: 14 ,
        option4: 16,
        answer: 16,
       explanation: "The numbers are doubling each time. We start with 1, then multiply it to get 2, multiply 2 with 2 again  to get 4, and multiply with 2 to get 8. So, to find the next number, we multiply 8 with 2. That's why the answer is 16. It's like each number is doubling, getting twice as big each step in the pattern!"

    },
    {
        title: "Question 6",
        description: "What comes next?",
        question: "1, 5, 25, 125, ?",
        option1: 250,
        option2: 625,
        option3:  375,
        option4: 450,
        answer: 625,
       explanation: "The pattern in this sequence involves multiplying each number by 5. We start with 1, then multiply it by 5 to get 5. Next, we multiply 5 by 5 to get 25, and then 25 by 5 to get 125. So, to find the next number, we multiply 125 by 5, which equals 625. Therefore, the answer is 625, as each number in the sequence is obtained by multiplying the previous one by 5."

    },
    {
        title: "Question 7",
        description: "What comes next?",
        question: "243, 81, 27, 9, ?",
        option1: 7,
        option2: 6,
        option3:  3,
        option4: 5,
        answer: 3,
       explanation: "The pattern in this sequence involves dividing each number by 3. We start with 729, then divide it by 3 to get 27. Next, we divide 27 by 3 to get 9. So, to find the next number, we divide 9 by 3, which equals 3. Therefore, the answer is 3, as each number in the sequence is obtained by dividing the previous one by 3."

    },
    {
        title: "Question 8",
        description: "What comes next?",
        question: "256, 64, 16, ?",
        option1: 4,
        option2: 6,
        option3:  3,
        option4: 5,
        answer: 4,
       explanation: "The pattern in this sequence involves dividing each number by 4. We start with 256, then divide it by 4 to get 64. Next, we divide 64 by 4 to get 16. So, to find the next number, we divide 16 by 4, which equals 4. Therefore, the answer is 4, as each number in the sequence is obtained by dividing the previous one by 4."

    },
    
    

    {
        title: "Question 9",
        description: "What comes next?",
        image: require("../assets/patternRecognition/question_1.png"),
        option1: require("../assets/patternRecognition/triangle.png"),
        option2: require("../assets/patternRecognition/4-angle.png"),
        option3: require("../assets/patternRecognition/5-angle.png"),
        option4: require("../assets/patternRecognition/6-angle.png"),
        answer: require("../assets/patternRecognition/6-angle.png"),
        explanation: "The pattern in this sequence involves the number of angles in each shape. We start with a 3-angle shape, then move to a 4-angle shape, and then a 5-angle shape. To find the next shape, we need to continue the pattern by adding one more angle. So, the next shape will have 6 angles. Therefore, the correct answer is a 6-angle shape, as it follows the established pattern of increasing the number of angles by one with each step."

    },
    {
        title: "Question 10",
        description: "What comes next?",
        image: require("../assets/patternRecognition/question_10.png"),
        option1: require("../assets/patternRecognition/question_10_answer_1.png"),
        option2: require("../assets/patternRecognition/question_10_answer_2.png"),
        option3: require("../assets/patternRecognition/question_10_answer_3.png"),
        option4: require("../assets/patternRecognition/question_10_answer_4.png"),
        answer: require("../assets/patternRecognition/question_10_answer_1.png"),
        explanation: "The pattern involves the rotation of the line, every second object has a cicrle on the line.By following the rotation of the line for 90 degrees and knowing that the 3rd object has a circle on the line, the correct answer is number 1."

    },
    {
        title: "Question 11",
        description: "What comes next?",
        image: require("../assets/patternRecognition/question_11.png"),
        option1: require("../assets/patternRecognition/question_11_answer_1.png"),
        option2: require("../assets/patternRecognition/question_11_answer_2.png"),
        option3: require("../assets/patternRecognition/question_11_answer_3.png"),
        option4: require("../assets/patternRecognition/question_11_answer_4.png"),
        answer: require("../assets/patternRecognition/question_11_answer_4.png"),
        explanation: "The pattern involves two arrows, the secont arrow always rotates 90 degrees clock-wise, therefor the correct answer is number 4"

    },
    {
        title: "Question 12",
        description: "What comes next?",
        image: require("../assets/patternRecognition/question_12.png"),
        option1: require("../assets/patternRecognition/question_12_answer_1.png"),
        option2: require("../assets/patternRecognition/question_12_answer_2.png"),
        option3: require("../assets/patternRecognition/question_12_answer_3.png"),
        option4: require("../assets/patternRecognition/question_12_answer_4.png"),
        answer:require("../assets/patternRecognition/question_12_answer_3.png"),
        explanation:"The pattern involves a reflection of an object",

    },
 
]