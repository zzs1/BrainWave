export const logicProblems = [
//Option 2 is always the correct answer
    {
        title: "Question 1",
        id: "Level 1",
        type: "M/Q",
        description: "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?",
        answer: "Three",
        explanation: "Two ducks are in front of the last duck; the first duck has two ducks behind; one duck is between the other two.",
        options: ['one', 'three', 'two', 'four']
    },
    {
        title: "Question 2",
        id: "Level 1",
        type: "M/Q",
        description: "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
        answer: "CABDE",
        explanation: "Putting the first three in order, A finished in front of B but behind C, so CAB. Then, we know D finished before B, so CABD. We know E finished after D, so CABDE.",
        options: ['ABCDE', 'CABDE', 'EDCBA', 'EDBAC']
    },
    {
        title: "Question 3",
        id: "Level 1",
        type: "M/Q",
        description: "If five cats can catch five mice in five minutes, how long will it take one cat to catch one mouse?",
        answer: "Five Minutes",
        explanation: "Using the information we know, it would take one cat 25 minutes to catch all five mice (5x5=25). Then working backward and dividing 25 by five, we get five minutes for one cat to catch each mouse.",
        options: ['Twenty minutes', 'Five minutes', 'Ten minutes', 'Three minutes']
    },
    {
        title: "Question 4",
        id: "Level 1",
        type: "M/Q",
        description: "A boy has 53 socks in his drawer: 21 identical blue, 15 identical black and 17 identical red. The lights are out and he is completely in the dark. How many socks must he take out to make 100 percent certain he has at least one pair of black socks?",
        answer: "40",
        explanation: "If he takes out 38 socks (adding the two biggest amounts, 21 and 17), although it is very unlikely, it is possible they could all be blue and red. To make 100 percent certain that he also has a pair of black socks he must take out a further two socks.",
        options: ['53', '40', '21','17']
    },
    {
        title: "Question 5",
        id: "Level 2",
        type: "M/Q",
        description: "The day before two days after the day before tomorrow is Saturday. What day is it today?",
        answer: "Friday",
        explanation: "The “day before tomorrow” is today; “the day before two days after” is really one day after. So if “one day after today is Saturday,” then it must be Friday.",
        options: ['Monday', 'Friday', 'Wednesday', 'Sunday']
    },
    {
        title: "Question 6",
        id: "Level 2",
        type: "M/Q",
        description: "You're at a fork in the road in which one direction leads to the City of Lies (where everyone always lies) and the other to the City of Truth (where everyone always tells the truth). There's a person at the fork who lives in one of the cities, but you're not sure which one. What question could you ask the person to find out which road leads to the City of Truth?",
        answer: "Which direction do you live?",
        explanation: "The “day before tomorrow” is today; “the day before two days after” is really one day after. So if “one day after today is Saturday,” then it must be Friday.",
        options: ['Is this the road to the City of Truth?', 'Which direction do you live?', 'Will you lead me to the City of Truth?', 'Are you from the City of Truth?'] 
    },
    {
        title: "Question 7",
        id: "Level 2",
        type: "M/Q",
        description: "A girl meets a lion and unicorn in the forest. The lion lies every Monday, Tuesday and Wednesday and the other days he speaks the truth. The unicorn lies on Thursdays, Fridays and Saturdays, and the other days of the week he speaks the truth. “Yesterday I was lying,” the lion told the girl. “So was I,” said the unicorn. What day is it?",
        answer: "Thursday",
        explanation: "The only day they both tell the truth is Sunday; but today can't be Sunday because the lion also tells the truth on Saturday (yesterday). Going day by day, the only day one of them is lying and one of them is telling the truth with those two statements is Thursday.",
        options: ['Monday', 'Thursday', 'Friday', 'Saturday']
    },
    {
        title: "Question 8",
        id: "Level 2",
        type: "M/Q",
        description: "You have three light switches in a room, and in the next room, there are three light bulbs. You can only make one trip to the room with the light bulbs. How can you determine which switch goes to which bulb?",
        answer: "Turn on one switch and wait a few minutes",
        explanation: "The only day they both tell the truth is Sunday; but today can't be Sunday because the lion also tells the truth on Saturday (yesterday). Going day by day, the only day one of them is lying and one of them is telling the truth with those two statements is Thursday.",
        options: ['Turn on all three switches and quickly go to the other room', 'Turn on one switch and wait a few minutes', 'Turn on one switch, turn it off, and then turn on a different switch.', 'Turn on all three switches, wait a few minutes, and then turn off two of them',]
    },
    {
        title: "Question 9",
        id: "Level 3",
        type: "M/Q",
        description: "Three friends go to a restaurant, and the bill is $30. They each contribute $10. The waiter realizes there was a special, and the bill should have been $25. He gives $5 to the waiter to return to them. However, the waiter decides to keep $2 as a tip and gives $1 back to each of the friends. Now, each friend has paid $9, totaling $27. The waiter kept $2, which makes $29. Where is the missing dollar?",
        answer: "The friends didn't lose any money; it's a trick question",
        explanation: "There is no missing dollar. The calculation is misleading, as the $27 is the total amount paid by the friends, and the $2 kept by the waiter is included in that amount.",
        options: ["The missing dollar is with the waiter", "The friends didn't lose any money; it's a trick question", "The total cost was $27, not $30", "The missing dollar is in the friends' pockets"]
    },
    {
        title: "Question 10",
        id: "Level 3",
        type: "M/Q",
        description: "Four people need to cross a rickety bridge at night. They only have one flashlight, and the bridge can only hold two people at a time. The four people walk at different speeds: one can cross the bridge in 1 minute, another in 2 minutes, another in 5 minutes, and the slowest in 10 minutes. When two people cross the bridge together, they must go at the slower person's pace. What is the fastest time they can all get to the other side?",
        answer: "15 minutes",
        explanation: "To minimize the time, the two fastest people (1 and 2 minutes) cross first. The fastest returns (1 additional minute), and then the two slowest (5 and 10 minutes) cross together (10 minutes). The second-fastest person returns (2 minutes), and the two fastest (1 and 2 minutes) cross again (2 minutes). The total is 15 minutes.",
        options: ["17 minutes", "15 minutes", "19 minutes", "12 minutes"]
    },
    {
        title: "Question 11",
        id: "Level 3",
        type: "M/Q",
        description: "You are given two pills, one red and one blue. You need to take one of them, but you don't know which one is which. If you take the red pill, you gain superpowers, and if you take the blue pill, you become invisible. Which pill should you choose?",
        answer: "There is no such thing as superpowers or invisibility from pills",
        explanation: "Both pills are fictional, and neither grants superpowers nor invisibility. The scenario is designed to be a trick question.",
        options: ["Take the red pill", "There is no such thing as superpowers or invisibility from pills", "It doesn't matter which one you choose; they both have the same effect", "Take the blue pill"]
    },
    {
        title: "Question 12",
        id: "Level 3",
        type: "M/Q",
        description: "There are three boxes, each labeled as 'Apples,' 'Oranges,' and 'Apples and Oranges.' However, each box is incorrectly labeled. You are allowed to pick one fruit from one box. How can you determine the correct labeling of all three boxes?",
        answer: "Pick a fruit from the box labeled 'Apples and Oranges.'",
        explanation: "Since all labels are incorrect, the box labeled 'Apples and Oranges' must contain only one type of fruit. By picking a fruit from this box, you can determine the correct label for that box and consequently the other two.",
        options: ["Pick a fruit from the box labeled 'Oranges.'", "Pick a fruit from the box labeled 'Apples and Oranges.'", "Pick a fruit from the box labeled 'Apples.'", "Shake the boxes to guess the contents."]
    },
    {
        title: "Question 13",
        id: "Level 4",
        type: "M/Q",
        description: "In a room with just 23 people, what is the probability that at least two of them share the same birthday?",
        answer: "The probability is approximately 50%",
        explanation: "This is known as the Birthday Paradox. The probability is surprisingly high due to the number of possible pairs of people with shared birthdays. When you have 23 people, there are 253 possible pairs, increasing the chances of a shared birthday.",
        options: ["The probability is close to 0%.", "The probability is approximately 50%", "The probability is 75% or higher.", "The probability depends on the specific birthdays of the people in the room."]
    },
    {
        title: "Question 14",
        id: "Level 4",
        type: "M/Q",
        description: "Three friends (Alex, Bob, and Charlie) are suspects in the theft of a wallet. The detective asks each of them for an alibi. Alex says, 'I was at the library.' Bob says, 'I was at the movies.' Charlie says, 'I was at the gym.' The detective knows that one of them is lying. Who stole the wallet?",
        answer: "Bob stole the wallet.",
        explanation: "The detective notices that one of them is lying. Bob cannot be at the movies because he would need a wallet to buy a ticket. Alex and Charlie's alibis do not require a wallet. Therefore, Bob is the thief.",
        options: ["Alex stole the wallet.", "Bob stole the wallet.", "It's impossible to determine who stole the wallet with the given information.", "Charlie is lying about being at the gym."]
    },
    {
        title: "Question 15",
        id: "Level 4",
        type: "M/Q",
        description: "A man lives on the 10th floor of a building. Every day, he takes the elevator down to the ground floor to go to work. When he returns, he takes the elevator to the 7th floor and walks up the stairs to reach his apartment on the 10th floor. Why does he do this?",
        answer: "He's short and can only reach the button for the 7th floor in the elevator.",
        explanation: "The man is too short to reach the button for the 10th floor in the elevator, so he takes the elevator to the 7th floor, which is the highest button he can reach, and then climbs the stairs for the last three floors.",
        options: ["He is avoiding using the elevator for exercise.", "He's short and can only reach the button for the 7th floor in the elevator.", "The elevator only goes up to the 7th floor, so he has to use the stairs for the last three floors.", "He wants to save energy by not using the elevator for the whole journey."]
    },
    {
        title: "Question 16",
        id: "Level 4",
        type: "M/Q",
        description: "Three friends go to a restaurant and order food that costs $25. They decide to split the bill equally, so each person contributes $10. The waiter, however, gives them a $5 discount and returns $5 in cash. The friends take back $1 each and leave $2 as a tip. Now, each friend has contributed $9, totaling $27, and the waiter has $2. What happened to the missing dollar?",
        answer: "There is no missing dollar; the math adds up correctly.",
        explanation: "The $27 paid by the friends includes the $25 for the food and the $2 tip. There is no missing dollar; the math adds up correctly.",
        options: ["The waiter made an error in giving them a $5 discount.", "There is no missing dollar; the math adds up correctly.", "The friends forgot to account for the tax in their calculation.", "The missing dollar was stolen by someone at the restaurant."]
    },
    {
        title: "Question 17",
        id: "Level 5",
        type: "M/Q",
        description: "Samantha borrowed a library book, but it's now overdue. The librarian calls Samantha and asks her to return the book. Samantha tells the librarian that she will return the book tomorrow. The librarian agrees. Why does the librarian allow this?",
        answer: "The library is closed tomorrow, so it doesn't matter.",
        explanation: "The librarian knows the library will be closed tomorrow, so there's no expectation for the book to be returned on that day.",
        options: ["The librarian trusts Samantha to return the book.", "The library is closed tomorrow, so it doesn't matter.", "The librarian doesn't want to charge Samantha a fine.", "The librarian made a mistake and didn't mean to agree."]
    },
    {
        title: "Question 18",
        id: "Level 5",
        type: "M/Q",
        description: "Solve this equation by adding just one line: 5 + 5 + 5 = 550.",
        answer: "Add a line to make the equation true: 545 + 5 = 550.",
        explanation: "To make the equation true, add a vertical line to the plus sign, converting it into a 4. This results in 545 + 5 = 550.",
        options: ["There is no solution.", "Add a line to make the equation true.", "Change the equation to make it true.", "The equation is already true."] 
    },
    {
        title: "Question 19",
        id: "Level 5",
        type: "M/Q",
        description: "You come across a sealed box with a note attached. The note says, 'This box contains exactly one lie and one truth. Open it to reveal your fate.' What is in the box?",
        answer: "The box is empty.",
        explanation: "If the box contains one lie and one truth, the box itself can be considered both the lie and the truth, making it empty.",
        options: ["The box contains a lie.", "The box is empty.", "The box contains the truth.", "It's impossible to determine what's in the box based on the note."]
    },
    {
        title: "Question 20",
        id: "Level 5",
        type: "M/Q",
        description: "A farmer has three hens: one red, one blue, and one yellow. Every morning, the hens lay eggs of the same color. One day, the farmer finds a green egg in the coop. How is this possible?",
        answer: "A different bird laid a green egg in the coop.",
        explanation: "The only logical explanation for finding a green egg in the coop is that a different bird, not one of the three hens, laid the green egg.",
        options: ["The farmer painted one of the eggs green.", "A different bird laid a green egg in the coop.", "The hens somehow produced a green egg naturally.", "The farmer is colorblind and mistook the egg's color."]
    }
]