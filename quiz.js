function check() {
    var c = 0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    
    if (q1=="Javascript") {c++}
    if (q2=="Russia") {c++}
    if (q3=="Beijing") {c++}
    if (q4=="Coronavirus") {c++}
    if (q5=="4") {c++}
       document.write(c);
}

