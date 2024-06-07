const Que=[
    {
        question:"What is the name of the method used to start a thread execution?",
        answers:[
            {text:"init();",correct:false},
            {text:"start();",correct:true},
            {text:"run();",correct:false},
            {text:"resume();",correct:false}
        ]
    },
    {
        question:"Which cannot directly cause a thread to stop executing?",
        answers:[
            {text:"Calling the SetPriority() method on a Thread object.",correct:false},
            {text:"Calling the wait() method on an object.",correct:false},
            {text:"Calling notify() method on an object",correct:true},
            {text:"Calling read() method on an InputStream object.",correct:false}
        ]

    },
    {
        question:"Which of the following will directly stop the execution of a Thread?",
        answers:[
            {text:"wait()",correct:true},
            {text:"notify()",correct:false},
            {text:"notifyall()",correct:false},
            {text:"exits synchronized code",correct:false}
        ]

    },
    {
        question:"Which will contain the body of the thread?",
        answers:[
            {text:"run();",correct:true},
            {text:"start();",correct:false},
            {text:"stop();",correct:false},
            {text:"main();",correct:false}
        ]

    }
]


const questionEle=document.getElementById("que");
const answersbtn=document.getElementById("ans");
const next=document.getElementById("next");

let currentQI=0;
let score=0;

function showQue()
{

    resetState();

    let currentQ=Que[currentQI];
    let queNo=currentQI+1;
    questionEle.innerHTML=queNo+"."+currentQ.question;

    currentQ.answers.forEach(ans => {
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add('btn');
        answersbtn.appendChild(button);
    if(ans.correct)
    {
        button.dataset.correct=ans.correct;
    }
        button.addEventListener("click",selectAns)

    });
}

function selectAns(e)
{
    const selectedAns=e.target;
    const isCorrect=selectedAns.dataset.correct==="true";
    if(isCorrect)
    {
        selectedAns.classList.add("correct");
        score++;
    }
    else{
        selectedAns.classList.add("incorrect");
    }


    Array.from(answersbtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }

        button.disabled=true;
    });

    next.style.display="block";
    
}

function startQuiz()
{
    currentQI=0;
    score=0;
    next.innerHTML='Next';
    showQue();
}
function resetState()
{
    next.style.display="none";
    while(answersbtn.firstChild){
        answersbtn.removeChild(answersbtn.firstChild);
    }
}

next.addEventListener("click",()=>{
    if(currentQI<Que.length){
        handleNext();
    }
    else{
        startQuiz();
    }
})

function handleNext(){
    currentQI++;
    if(currentQI<Que.length)
    {
        showQue();
    }
    else{
        showScore();
    }
}

function showScore()
{
    resetState();
    questionEle.innerHTML=`You Scored ${score} out of ${Que.length}.`;
    next.innerHTML="Play Again";
    next.style.display= "block";
}

startQuiz();