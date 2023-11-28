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
        description: "I have keys but no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
        answer: "Piano",
        explanation: "A keyboard has keys for typing but doesn't have physical locks like doors or padlocks.",
        options: ['Piano', 'Keyboard', 'Map','Computer']
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
        description: "I'm light as a feather, yet the strongest person can't hold me for much longer than a minute. What am I?",
        answer: "Breath",
        explanation: "Is is very difficult to hold your breath longer than a minute",
        options: ['Breath', 'Hope', 'Laughter', 'a Whisper'] 
    },
    {
        title: "Question 7",
        id: "Level 2",
        type: "M/Q",
        description: "A lion lies every Monday, Tuesday and Wednesday and the other days he speaks the truth. A unicorn lies on Thursdays, Fridays and Saturdays, and the other days of the week he speaks the truth. “Yesterday I was lying,” the lion said. “So was I,” said the unicorn. What day is it?",
        answer: "Thursday",
        explanation: "The only day they both tell the truth is Sunday; but today can't be Sunday because the lion also tells the truth on Saturday (yesterday). Going day by day, the only day one of them is lying and one of them is telling the truth with those two statements is Thursday.",
        options: ['Monday', 'Thursday', 'Friday', 'Saturday']
    },
    {
        title: "Question 8",
        id: "Level 2",
        type: "M/Q",
        description: "The more you take, the more you leave behind. What am I?",
        answer: "Footsteps",
        explanation: "Walking",
        options: ['Memories', 'Time', 'Love', 'Footsteps',]
    },
    {
        title: "Question 9",
        id: "Level 3",
        type: "M/Q",
        description: "I fly without wings. I cry without eyes. Whenever I go, darkness follows me. What am I?",
        answer: "Cloud",
        explanation: "Clouds",
        options: ["Cloud", "Moon", "Wind", "Bat"]
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
        description: "What has cities but no houses, forests but no trees, and rivers but no water",
        answer: "Map",
        explanation: "Map",
        options: ["Map", "Magazine", "Book", "Globe"]
    },
    {
        title: "Question 12",
        id: "Level 3",
        type: "M/Q",
        description: "I have a tail and a head but no body. What am I?",
        answer: "Snake",
        explanation: "Coins have face and tail",
        options: ["Coin'", "Fish", "Caterpillar", "Snake"]
    },
    {
        title: "Question 13",
        id: "Level 4",
        type: "M/Q",
        description: "I can be cracked, made, told, and played. What am I?",
        answer: "Joke",
        explanation: "A Joke fits all those descriptions",
        options: ["Egg", "Joke", "Whip", "Dolphin"]
    },
    {
        title: "Question 14",
        id: "Level 4",
        type: "M/Q",
        description: "I start with P and end with E but have thousands of letters. What am I in sports?",
        answer: "Practice",
        explanation: "Practice has a ton of effort and determination",
        options: ["Practice", "Pitcher", "Championship", "Practice"]
    },
    {
        title: "Question 15",
        id: "Level 4",
        type: "M/Q",
        description: "I am green on the outside, red on the inside, and have many seeds. What am I?",
        answer: "Watermelon",
        explanation: "Watermelon has all those characteristics",
        options: ["Kiwi", "Pomegranate", "Dragonfruit", "Watermelon"]
    },
    {
        title: "Question 16",
        id: "Level 4",
        type: "M/Q",
        description: "I'm yellow on the outside, white on the inside, and have black seeds. What am I",
        answer: "Papaya",
        explanation: "Papaya adds up correctly.",
        options: ["Banana", "Pear", "Pineapple", "Papaya"]
    },
    {
        title: "Question 17",
        id: "Level 5",
        type: "M/Q",
        description: "I can be dark or white, but never black. I fall from the sky but never get hurt. What am I?",
        answer: "Snow",
        explanation: "It is snow",
        options: ["Cloud", "Snow", "Rain", "Hail"]
    },
    {
        title: "Question 18",
        id: "Level 5",
        type: "M/Q",
        description: "I can fly without wings. I can cry without eyes. Whenever I go, darkness follows me. What am I among birds?",
        answer: "Owl",
        explanation: "Owls",
        options: ["Nightingale.", "Bat", "Penguin", "Owl"] 
    },
    {
        title: "Question 19",
        id: "Level 5",
        type: "M/Q",
        description: "I'm tall when I'm young and short when I'm old. What am I am?",
        answer: "Candle",
        explanation: "It is a Candle",
        options: ["Branch", "Onion", "Candle", "Noodles"]
    },
    {
        title: "Question 20",
        id: "Level 5",
        type: "M/Q",
        description: "I have keys but can't open locks. I have a soft surface but don't cushion your feet. What am I am?",
        answer: "Fork",
        explanation: "Focusing on the fork's resemblance to keys and its soft surface ",
        options: ["Knife", "Spoon", "Fork", "Chopsticks"]
    }
]