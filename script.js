/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score

11. Display the score in the console. Use yet another method for this.
*/


//IIFE Code is private and doesn't interfere with the other programmers code
(function() {
//Init question object constructor
function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.userAnswer = null;
}

//Display actual question with the question number and the answers. Display prompt for user answer and call the checking method
Question.prototype.displayQuestion = function(){
        console.log((questionScores.length + 1) + ". kérdés: ---------------------------\n----------\n" + this.question + "\n" + "Add meg a helyes válasz számát:\n" + this.answers);
        this.userAnswer = prompt("A helyes válasz száma: "); 
        console.log("A megadott válasz: " + this.userAnswer);
        this.checkAnswer();
}

//Check the answer if its correct or not and log it, if the answer is exit than stop the game
Question.prototype.checkAnswer = function(){
    if(parseInt(this.userAnswer) == this.correctAnswer){
        console.log("Helyes válasz!");
        this.displayScore(1);
    }else if(this.userAnswer == "exit"){
        console.log("Exit Game");         
    }else{
        console.log("Rossz válasz!");    
        this.displayScore(0);
    };    
}
//Log the actual score and start a new question
Question.prototype.displayScore = function(score){
    questionScores.push(score);
    console.log("A pontszámod: " + questionScores.reduce((a, b) => a + b, 0) + "\n--------------------------------------");
    getRandomQuestion();
}

//Create questions with answers and the correct answers, and the array for the questionScores
var questions = [
"Hány tojás kell a palacsintához?", 
"Meddig kell sütni a sütő tököt?", 
"Hány lába van egy póknak?", 
"Hány lába van két póknak?", 
"Hány darab ilyen idióta kérdés van összesen?"
];
var answers = [
" 0 = egysem \n 1 = 1db elég \n 2 = 2db \n 3 = 3db", 
" 0 = 10perc \n 1 = 25perc \n 2 = 45perc \n 3 = 1óra", 
" 0 = 2db \n 1 = 4db \n 2 = 6db \n 3 = 8db", 
" 0 = 2db \n 1 = 8db \n 2 = 16db \n 3 = 18db", 
" 0 = 1db \n 1 = 3db \n 2 = 5db \n 3 = 8db"
];
var correctAnswerAll = [2, 3, 3, 2, 2];
var questionScores = [];
    
//Get a question randomly with the answers and the correct answer and call a display method for them
function getRandomQuestion(){
    var questionNumber = Math.floor(Math.random() * 5);
    var question = new Question(questions[questionNumber], answers[questionNumber], correctAnswerAll[questionNumber]);
    question.displayQuestion();
}

//Start Game
getRandomQuestion();

})();