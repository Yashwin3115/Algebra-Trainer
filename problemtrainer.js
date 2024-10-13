// Problem difficulty levels (adjust values and labels as needed)
const difficultyLevels = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
];

// Sample problems (replace with your own)
const problems = {
    easy: [
        {
            question: "Solve 3x = 9.",
            answer: ["3"],
            explanation: "We need to isolate x by dividing both sides by 3 to get x = 3.",
            hint: "Divide both sides by 3.",
            category: "Algebra"
        },
        {
            question: "Solve x - 5 = 2.",
            answer: ["7"],
            explanation: "Add 5 to both sides to get x = 7.",
            hint: "Add 5 to both sides.",
            category: "Algebra"
        },
        {
            question: "Find the value of y in the equation y + 3 = 8.",
            answer: ["5"],
            explanation: "Subtract 3 from both sides to get y = 5.",
            hint: "Subtract 3 from both sides.",
            category: "Algebra"
        },
        {
            question: "Solve for x: 4x = 16.",
            answer: ["4"],
            explanation: "Divide both sides by 4 to get x = 4.",
            hint: "Divide both sides by 4.",
            category: "Algebra"
        },
        {
            question: "Find the y-intercept of the equation y = 2x + 5.",
            answer: ["5"],
            explanation: "In the slope-intercept form y = mx + b, the y-intercept is b. Here, b = 5.",
            hint: "Look at the constant term.",
            category: "Algebra"
        },
        {
            question: "Solve 2x = 6.",
            answer: ["3"],
            explanation: "We need to isolate x by itself, so we divide both sides by 2 to get x=3.",
            hint: "Divide both sides by 2.",
            category: "Algebra",
        },
        {
            question: "Solve 2x - 4 = x - 10.",
            answer: ["-6"],
            explanation: "You need to isolate x, so subtract both sides by x, and add 4 to both sides to get x = -6.",
            hint: "Isolate x by moving terms.",
            category: "Algebra",
        },
        {
            question: "What is the slope of the line y = 2x + 1?",
            answer: ["2"],
            explanation: "The slope of a linear equation in the form y = mx + b is represented by m. In this case, m = 2.",
            hint: "Identify the coefficient of x.",
            category: "Algebra",
        },
        {
            question: "The product of 4x and 0 is:",
            answer: ["0"],
            explanation: "Anything multiplied by 0 is 0, thus (4x)(0) = 0",
            hint: "Anything multiplied by 0 is...",
            category: "Algebra",
        },
        {
            question: "If the sum of three times of y is equal to 9, then what is the value of y?",
            answer: ["3"],
            explanation: "The sum of three times y is just 3y and we know that it equals to 9. So we have 3y = 9. Dividing both sides by 3 we get y = 3.",
            hint: "Evaluete it into an equation.",
            category: "Algebra",
        },
        {
            question: "If Vidya is x years old now, how old will she be in 10 years? Write it as an expression.",
            answer: ["x + 10", "10 + x", "x+10", "10+x"],
            explanation: "We are adding 10 years to x thus we will have x + 10.",
            hint: "You are adding 10 years to x",
            category: "Algebra",
        },
    ],

    medium: [
        {
            question: "Solve for x: 2x + 3 = 11.",
            answer: ["4"],
            explanation: "Subtract 3 from both sides to get 2x = 8, then divide both sides by 2 to get x = 4.",
            hint: "First, subtract 3 from both sides.",
            category: "Algebra"
        },
        {
            question: "Solve for y: 3y - 2 = 7.",
            answer: ["3"],
            explanation: "Add 2 to both sides to get 3y = 9, then divide both sides by 3 to get y = 3.",
            hint: "First, add 2 to both sides.",
            category: "Algebra"
        },
        {
            question: "Solve for x: 5x - 4 = 3x + 2.",
            answer: ["3"],
            explanation: "Subtract 3x from both sides to get 2x - 4 = 2, then add 4 to both sides to get 2x = 6, and divide by 2 to get x = 3.",
            hint: "First, subtract 3x from both sides.",
            category: "Algebra"
        },
        {
            question: "What is the slope of the line y = -3x + 7?",
            answer: ["-3"],
            explanation: "In the slope-intercept form y = mx + b, the slope is m. Here, m = -3.",
            hint: "Look at the coefficient of x.",
            category: "Algebra"
        },
        {
            question: "Solve for x: 4x - 7 = 2x + 1.",
            answer: ["4"],
            explanation: "Subtract 2x from both sides to get 2x - 7 = 1, then add 7 to both sides to get 2x = 8, and divide by 2 to get x = 4.",
            hint: "First, subtract 2x from both sides.",
            category: "Algebra"
        },
        {
            question: "Factor x in the equation: x\u00B2 + 5x - 6 = 0",
            answer: "(x-1)(x+6)",
            explanation: "This is a quadratic equation. You can solve it by factoring or using the quadratic formula.",
            hint: "Look for factors of -6 that add up to 5.",
            category: "Algebra",
        },
        {
            question: "An algebraic expression that contains three terms is called?",
            answer: ["Trinomial", "trinomial"],
            explanation: "Monomials are 1-term polynomials. Binomials are 2-term polynomials. So Trinomials are 3-term polynomials. Mono = 1, Bi = 2, Tri = 3",
            hint: "TRIceratops means three horned face",
            category: "Algebra",
        },
        {
            question: "What is a polynomial with 1-term called?",
            answer: ["Trinomal", "trinomial"],
            explanation: "Monomials are 1-term polynomials. Binomials are 2-term polynomials. So Trinomials are 3-term polynomials. Mono = 1, Bi = 2, Tri = 3",
            hint: "TRIceratops means three horned face",
            category: "Algebra",
        },
        {
            question: "If we add, 7xy + 5yz – 3zx, 4yz + 9zx – 4y and –3xz + 5x – 2xy, then the answer is:",
            answer: "5xy+9yz+3zx+5x-4y",
            explanation: "The slope of a linear equation in the form y = mx + b is represented by m. In this case, m = 2.",
            hint: "If we add, 7xy+5yz-3zx, 4yz + 9zx - 4y and -3xz + 5x - 2xy",
            category: "Algebra",
        },
        {
            question: "Solve for x: 2x + 3 = 11.",
            answer: ["4"],
            explanation: "Subtract 3 from both sides to get 2x = 8, then divide both sides by 2 to get x = 4.",
            hint: "First, subtract 3 from both sides.",
            category: "Algebra"
          },
    ],

    hard: [
        {
            question: "Solve for x: x² - 4x - 5 = 0.",
            answer: ["5", "-1"],
            explanation: "Factor the equation to (x - 5)(x + 1) = 0, then solve for x by setting each factor to zero: x - 5 = 0 or x + 1 = 0, giving x = 5 or x = -1.",
            hint: "Factor the quadratic equation.",
            category: "Algebra"
        },
        {
            question: "Solve for x: 2x² + 3x - 2 = 0.",
            answer: ["0.5", "-2"],
            explanation: "Use the quadratic formula x = [-b ± √(b² - 4ac)] / 2a with a = 2, b = 3, and c = -2. This gives x = ( -3 ± √(9 + 16) ) / 4, resulting in x = 0.5 or x = -2.",
            hint: "Use the quadratic formula.",
            category: "Algebra"
        },
        {
            question: "Solve for x: 3x² - 2x - 8 = 0.",
            answer: ["2", "-4/3"],
            explanation: "Use the quadratic formula x = [-b ± √(b² - 4ac)] / 2a with a = 3, b = -2, and c = -8. This gives x = ( 2 ± √(4 + 96) ) / 6, resulting in x = 2 or x = -4/3.",
            hint: "Use the quadratic formula.",
            category: "Algebra"
        },
        {
            question: "Solve for x: x² + 6x + 9 = 0.",
            answer: ["-3"],
            explanation: "Factor the equation to (x + 3)² = 0, then solve for x by setting the factor to zero: x + 3 = 0, giving x = -3.",
            hint: "Recognize the perfect square trinomial.",
            category: "Algebra"
        },
        {
            question: "Solve for x: 4x² - 12x + 9 = 0.",
            answer: ["1.5"],
            explanation: "Recognize the perfect square trinomial: (2x - 3)² = 0. Solve for x by setting the factor to zero: 2x - 3 = 0, giving x = 1.5.",
            hint: "Recognize the perfect square trinomial.",
            category: "Algebra"
        },
        {
            question: "Solve (2x+y)\u00B2",
            answer: "4x\u00B2 + 4xy + y\u00B2",
            explanation: "Using the difference of squares factorization: (a+b)2 = a\u00B2 + 2ab + b\u00B2, we get: (2x+y) = (2x)\u00B2 + 2(2xy) y\u00B2 = 4x\u00B2 + 4xy + y\u00B2.",
            hint: "This is a difference of squares: a\u00B2 + 2ab + b\u00B2",
            category: "Algebra",
        },
        {
            question: "If x and y are integers and |x - y| = 12, what is the minimum possible value of xy?",
            answer: "-36",
            explanation: "Square both sides and solve. Squaring both sides, we get (x - y)\u00B2 = 144. x\u00B2 + y\u00B2 - 2xy = 144. Add, 4xy to both sides of the equation. x\u00B2 + y\u00B2 - 2xy + 4xy = 144 + 4xy. x\u00B2 + y\u00B2 + 2xy = 144 + 4xy. Or (x + y)\u00B2 = 144 + 4xy. (x + y)\u00B2 will NOT be negative for real values of x and y. i.e., (x + y)\u00B2 ≥ 0. 144 + 4xy ≥ 0. Or 4xy ≥ -144. So, xy ≥ -36. The least value that xy can take is -36.",
            category: "Algebra",
        },
        {
            question: "Working alone, person A can complete a task in a days and person B in b days. They take turns in doing the task with each working 2 days at a time. If A starts they finish the task in exactly 10 days. If B starts, they take half a day more. How long does it take to complete the task if they both work together?",
            answer: "36/7",
            explanation: "6/a+ 4/b = 1 .... eqn (1) 4.5/a + 6/b  = 1 .... eqn (2) Solving the two equations we get a = 9 days and b = 12 days.  Working together A and B will complete 1/9 + 1/12 = 4 + 3/36 = 7/36th of the task in a day. Hence, they will complete the task in 36/7 days.",
            category: "Algebra",
        },
        
    ]
};

// User information (replace with storage mechanism like local storage)
let user = {
    name: "", // Get user name
    score: 0,
    completedProblems: {}, // Track completed problems by difficulty
};

// Current problem data
let currentProblem = null;
let currentDifficulty = difficultyLevels[0].value; // Default to easy

// Function to get element by ID with basic error handling
function getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with ID "${id}" not found.`);
    }
    return element;
}

// Function to display difficulty selection
function displayDifficultySelection() {
    const difficultySelection = getElementById("difficulty-selection");
    difficultySelection.innerHTML = ""; // Clear previous content

    for (const difficulty of difficultyLevels) {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "difficulty";
        radioInput.value = difficulty.value;
        radioInput.id = `difficulty-${difficulty.value}`;
        radioInput.checked = currentDifficulty === difficulty.value;
        radioInput.addEventListener('change', function () {
            currentDifficulty = this.value;
            currentProblem = selectRandomProblem(currentDifficulty);
            displayProblem();
        });

        const label = document.createElement("label");
        label.textContent = difficulty.label;
        label.htmlFor = `difficulty-${difficulty.value}`;

        difficultySelection.appendChild(radioInput);
        difficultySelection.appendChild(label);
    }
}

// Function to select a random problem from a difficulty level
function selectRandomProblem(difficulty) {
    const problemsList = problems[difficulty];
    if (!problemsList || problemsList.length === 0) {
        return null; // No problems available for this difficulty
    }
    const randomIndex = Math.floor(Math.random() * problemsList.length);
    return problemsList[randomIndex];
}

// Function to display the current problem
function displayProblem() {
    const problemContainer = getElementById("problem-container");
    problemContainer.innerHTML = ""; // Clear previous content

    if (!currentProblem) return;

    const questionElement = document.createElement("p");
    questionElement.textContent = currentProblem.question;
    problemContainer.appendChild(questionElement);

    const explanationElement = getElementById("explanation-container");
    explanationElement.textContent = ""; // Clear previous explanation

    const submitButton = getElementById("submit-button");
    submitButton.disabled = false;

    // Enable the hint button
    const hintButton = getElementById("hintButton");
    hintButton.disabled = false;
}

// Function to display a hint
function displayHint() {
    const hintElement = getElementById('hintElement');
    if (currentProblem && currentProblem.hint) {
        hintElement.textContent = `Hint: ${currentProblem.hint}`;
    } else {
        hintElement.textContent = "No hint available.";
    }
}

// Function to handle submit button click (add logic for checking answer and update score)
function handleSubmit() {
    const userAnswer = getElementById('user-answer').value.trim().toLowerCase();

    const feedbackElement = getElementById('feedbackElement');
    if (currentProblem.answer.includes(userAnswer)) {
        user.score++;
        feedbackElement.textContent = "Correct! " + currentProblem.explanation;
        feedbackElement.classList.remove('incorrect');
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.textContent = "Incorrect. " + currentProblem.explanation;
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('incorrect');
    }

    // Update user score display
    const scoreElement = getElementById('score');
    scoreElement.textContent = `Score: ${user.score}`;

    // Disable submit button after submission
    const submitButton = getElementById("submit-button");
    submitButton.disabled = true;

    // Enable next problem button
    const nextProblemButton = getElementById("next-problem-button");
    nextProblemButton.disabled = false;
}

// Function to setup event listeners for submit button and next problem button
function setupEventListeners() {
    const submitButton = getElementById("submit-button");
    if (submitButton) {
        submitButton.addEventListener("click", handleSubmit);
    }

    const nextProblemButton = getElementById("next-problem-button");
    if (nextProblemButton) {
        nextProblemButton.addEventListener("click", function () {
            currentProblem = selectRandomProblem(currentDifficulty);
            displayProblem();
            const feedbackElement = getElementById('feedbackElement');
            feedbackElement.textContent = ""; // Clear previous feedback
            nextProblemButton.disabled = true;
            const submitButton = getElementById("submit-button");
            submitButton.disabled = false;
            getElementById('user-answer').value = ''; // Clear user answer input
        });
    }

    const hintButton = getElementById("hintButton");
    if (hintButton) {
        hintButton.addEventListener("click", displayHint);
    }
}

// Initialize page content
displayDifficultySelection();
currentProblem = selectRandomProblem(currentDifficulty);
displayProblem();
setupEventListeners(); // Call the setupEventListeners function to initialize event listeners

// Run the initialization on page load
window.onload = function () {
    setupEventListeners(); // Ensure event listeners are set up on page load
};
