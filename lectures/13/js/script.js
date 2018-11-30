var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "which one of these is not a database language",
    choices: ["Oracle",
        "My SQL",
        "COBOL",
        "Sybase"],
    correctAnswer: 2
},{
    question: "The first internet search engine was",
    choices: ["Google",
        "Yahoo",
        "altavista",
        "Archie"],
    correctAnswer: 3
}];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    if(currentQuestion==5){
        resetQuiz();
    }
    var f=document.querySelector("input[name='choices']:checked");
    if (f == null)
    {
        document.getElementById("quiz-message").style.display = 'block';
        document.getElementById("quiz-message").innerHTML = "Select answer first";
        return;
    }
    document.getElementById("quiz-message").style.display = 'none';
    if(f!=null){
        var correct=questions[currentQuestion].correctAnswer;
        if(f.value==correct){
            correctAnswers++;
        }
        if(currentQuestion==4){
            displayScore();
        }
    }
    displayCurrentQuestion();
    currentQuestion++;
}
function displayCurrentQuestion() {
    var a=document.getElementById("question");
    a.innerHTML=questions[currentQuestion].question;
    var b=document.getElementById("choice-list");
    b.innerHTML="";
    for(var i=0;i<questions[currentQuestion].choices.length;i++){
        var c=document.createElement("li")
        c.innerHTML="<input type=radio id="+i+"   data-value="+i+" name='choices'>"+questions[currentQuestion].choices[i]+"</input>";
        b.appendChild(c);
    }
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}