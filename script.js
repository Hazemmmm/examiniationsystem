var submit = document.getElementById("submit");
var Fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var confirmpass = document.getElementById("confirmPass");
var female = document.getElementById("female");
var male = document.getElementById("male");
var flag = true;
var current = 0;
var radioBtns= document.getElementsByClassName("radio-input");

loginbtn = document.getElementById("login");
var logemail = document.getElementById("log-email");
var logpass = document.getElementById("log-pass");

var next = document.getElementById("next-btn");
var skip = document.getElementById("skip-btn");
var finish = document.getElementById("finish-btn");

function validateRegistry() {
    flag = true;
    if (Fullname.value == null || Fullname.value.length > 25 || Fullname.value == " " || Fullname.value == "" || validateName(Fullname.value) == false) {
        alert("Please Enter Valid name!");
        flag = false;
    }
    if (validateEmail(email.value) == false) {
        alert("Please Enter valid Email! ");
        flag = false;
    }
    if (pass.value == null || pass.value.length < 8 || pass.value == " " || pass.value == "") {
        alert("Please Enter valid password!\nPassword should be at least 8 characters.");
        flag = false;
    }
    if (confirmpass.value == null || confirmpass.value != pass.value || pass.value == " " || pass.value == "") {
        alert("Password confirmation is wrong! re validate password.")
        flag = false;
    }
}

function validateName(Fullname) {
    var re = /^([a-z]+\s)*[a-z]+$/;
    return re.test(Fullname);
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatenumber(length) {
    var re = /^[0-9]+$/;
    return re.test(length);
}

submit.addEventListener('click', function () {
    validateRegistry();
    if (flag == true) {
        document.getElementsByClassName("main")[0].style.display = 'none';
        document.getElementsByClassName("login")[0].style.display = 'block';
    }
});

loginbtn.addEventListener('click', function () {
    if ((logemail.value != email.value) || (logpass.value != pass.value)) {
        alert("Wrong email or password! Please try again!");
    }
    else {
        document.getElementsByClassName("login")[0].style.display = 'none';
        document.getElementsByClassName("exam-cont")[0].style.display = 'flex';
    }
});

function question(ID, Q, Ans, rightAns) {
    this.ID = ID;
    this.Qus = Q;
    this.Ans = Ans;
    this.rightAns = rightAns;
}
var questions = new Array();

var Q1 = new question(1, "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop ____________.’ Fill in the blank to complete this quotation by Albert Einstein.", ['Wishing ', 'Questioning', 'Thinking', 'Reading'], "Questioning");
var Q2 = new question(2, " In Alice’s Adventures in Wonderland, which game was played by the Queen of Hearts using hedgehogs as balls?", [' Quintet', 'Quidditch', 'Croquet', 'none of them'], "Croquet");
var Q3 = new question(3, "Apart from Venus, which planet rotates from east to west?", ['Earth', ' Jupiter', 'Mars', 'Uranus'], "Uranus");
var Q4 = new question(4, "How long does it take to travel from Cairo to Aswan by train?", ['One hour', 'Two hours', 'Three hours', 'twelve hours'], "twelve hours");
var Q5 = new question(5, "Which is the largest internal organ in the human body?", ['Liver', 'Heart', 'Lung', 'Kidney'], "Liver");
var Q6 = new question(6, "Which famous philosopher was also the tutor of Alexander the Great?", ['Aristotle', 'Socrates', 'Rousseau', 'none of them'], "Aristotle");
var Q7 = new question(7, "What do you call a system of serving when a meal, consisting of several dishes is set out and guests serve themselves?", ['Buffet', 'A la carte', 'Menu', 'Take Away'], "Buffet");
var Q8 = new question(8, "Collectively, how many moons do the planets Mercury and Venus have?", ['One', 'None', 'Fifty-five', 'five'], "None");
var Q9 = new question(9, "Which of the following is the actor of the Ironman movie series?", ['Chris Evans', 'Mark Ruffalo', 'Robert Downey, Jr.', 'Vin Diesel'], "Robert Downey, Jr.");
var Q10 = new question(10, "Who's the best student is this track for the past 20 centuries and even before?", ['rawan', 'rawan shaarawy', 'rawan shaarawy abdelhalim', 'All of them'], "All of them");

questions.push(Q1);
questions.push(Q2);
questions.push(Q3);
questions.push(Q4);
questions.push(Q5);
questions.push(Q6);
questions.push(Q7);
questions.push(Q8);
questions.push(Q9);
questions.push(Q10);

var index = new Array();
index[0] = Math.ceil(Math.random() * 10);

var flag;
for (var i = 1;  ; i++) {
    flag = true;
    if(index.length < 5)
    {
        var temp = Math.ceil(Math.random() * 10);
        for (var j = 0; j < index.length; j++) {
            if (temp == index[j]) {
                flag = false;
            }
        }
        if (flag == true) {
            index[i] = temp;
        }
        else {
            i--;
        }
    }
    else
    {
        break;
    }
}

document.getElementsByClassName("question-body")[0].textContent = 1 + ". " + questions[index[current]].Qus ;
document.getElementsByClassName("answer-body")[0].textContent = questions[index[current]].Ans[0];
radioBtns[0].value = questions[index[current]].Ans[0];
document.getElementsByClassName("answer-body")[1].textContent = questions[index[current]].Ans[1];
radioBtns[1].value = questions[index[current]].Ans[1];
document.getElementsByClassName("answer-body")[2].textContent = questions[index[current]].Ans[2];
radioBtns[2].value = questions[index[current]].Ans[2];
document.getElementsByClassName("answer-body")[3].textContent = questions[index[current]].Ans[3];
radioBtns[3].value = questions[index[current]].Ans[3];

var score = 0;
var i = 2;
var ind = 0;

function nextfun()
{    
    for(var z = 0 ; z<radioBtns.length ; z++)
    {
        if(radioBtns[z].checked)
        {
            if(current < 5)
            {
                if(radioBtns[z].value == questions[index[current]].rightAns )
                {
                    score += 10;
                }
            }
            else if(isNaN(skipped[ind]) == false)
            {
                if(radioBtns[z] == questions[skipped[ind]].rightAns)
                {
                    score +=10;
                }
            }
        }
        
    }
    current++;
    if(current < 4)
    {
        document.getElementsByClassName("question-body")[0].textContent = i++ + ". " + questions[index[current]].Qus ;
        document.getElementsByClassName("answer-body")[0].textContent = questions[index[current]].Ans[0];
        radioBtns[2].value = questions[index[current]].Ans[0];
        document.getElementsByClassName("answer-body")[1].textContent = questions[index[current]].Ans[1];
        radioBtns[3].value = questions[index[current]].Ans[1];
        document.getElementsByClassName("answer-body")[2].textContent = questions[index[current]].Ans[2];
        radioBtns[4].value = questions[index[current]].Ans[2];
        document.getElementsByClassName("answer-body")[3].textContent = questions[index[current]].Ans[3];
        radioBtns[5].value = questions[index[current]].Ans[3];
    }
    else if(current == 4)
    {
        document.getElementsByClassName("question-body")[0].textContent = i++ + ". " + questions[index[current]].Qus ;
        document.getElementsByClassName("answer-body")[0].textContent = questions[index[current]].Ans[0];
        radioBtns[2].value = questions[index[current]].Ans[0];
        document.getElementsByClassName("answer-body")[1].textContent = questions[index[current]].Ans[1];
        radioBtns[3].value = questions[index[current]].Ans[1];
        document.getElementsByClassName("answer-body")[2].textContent = questions[index[current]].Ans[2];
        radioBtns[4].value = questions[index[current]].Ans[2];
        document.getElementsByClassName("answer-body")[3].textContent = questions[index[current]].Ans[3];
        radioBtns[5].value = questions[index[current]].Ans[3];
        next.textContent = 'Skipped Answers';
    }
    else
    {
        if(isNaN(skipped[ind])==false)
        {
            document.getElementsByClassName("question-body")[0].textContent = "Skipped: " + questions[skipped[ind]].Qus ;
            document.getElementsByClassName("answer-body")[0].textContent = questions[skipped[ind]].Ans[0];
            document.getElementsByClassName("answer-body")[1].textContent = questions[skipped[ind]].Ans[1];
            document.getElementsByClassName("answer-body")[2].textContent = questions[skipped[ind]].Ans[2];
            document.getElementsByClassName("answer-body")[3].textContent = questions[skipped[ind]].Ans[3];
            next.style.display = 'block';
                skip.style.display = 'none';
            ind ++;
            next.textContent = 'next';
            if(ind == skipped.length)
            {
                next.style.display = 'none';
                skip.style.display = 'none';
            }
        }
    }
}
next.addEventListener('click',function(){
    nextfun();
});

var skipped = new Array();
skip.addEventListener('click',function(){
    
    var loop = true
    var i = 0;
    var exists = false ;
    while(loop)
    {
        if(i <= skipped.length)
        {
            if(skipped[i] == index[current])
            {
                exists = true;
            }
        }
        else
        {
            loop=false;
        }
        i++;
        
    }
    if(exists == false)
    {
        var node = document.createElement("p");
            var nodeText = document.createTextNode( " Question number " + (current+1));
            node.appendChild(nodeText);
            document.getElementById("side-bar__body").appendChild(node);
            skipped.push(index[current]);
            nextfun();
    }
});

finish.addEventListener('click',function(){
    document.getElementsByClassName("exam-cont")[0].style.display = 'none';
    document.getElementsByClassName("result")[0].style.display = 'flex';

    document.getElementsByClassName("result")[0].textContent += score;
    
})
    