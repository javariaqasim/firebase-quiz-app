
alert('You are successfully loged in!!!')

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello" +" "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}


var Questions=[
    {
      question: ' "Who invented JavaScript?" ?',
      options:["Douglas Crockford","Sheryl Sandberg","Brendan Eich"],
      answer:3
    },
    {
      question: ' "Which one of these is a JavaScript package manager?"',
      options:["Node.js","TypeScript","npm"],
      answer:3
    },
    {
      question: '"Which tool can you use to ensure code quality?"',
      options:["Angular","jQuery","ESLint"],
      answer:1
    },
    {
      question: '"What is 30/3?"',
      options:['3','5','10'],
      answer:3
    },
    {
      question: '"What is 10/2?"',
      options:[ '3','5','115'],
      answer:2
    },
    {
        question: ' "What does HTML stand for?" ?',
        options:["All of the abovw","HTML is the standard markup language mainly used to create web pages","HTML consists of a set of elements that helps the browser how to view the content"],
        answer:1
      },
      {
        question: ' "Who is the father of HTML?"',
        options:["Rasmus Lerdorf","Tim Berners-Lee","Brendan Eich"],
        answer:2
      },
      {
        question: 'HTML stands for ___"',
        options:["HyperText Markup Language","HyperText Machine Language","HyperText Marking Language"],
        answer:1
      },
      {
        question: '"Which is used to read an HTML page and render it?"',
        options:[' Web server','Web network','Web browser'],
        answer:3
      },
      {
        question: '"Which tag is used for inserting the largest heading in HTML?"',
        options:[ 'head',' <h1>','<h6>'],
        answer:2
      },
      {
        question: '"Which is used to create Web Pages ?"',
        options:['  C++',' Java','HTML'],
        answer:3
      },
      {
        question: '" HTML is a set of markup ___."',
        options:[ 'attributes',' tags',' sets'],
        answer:2
      },
      {
        question: '"Which is used to read an HTML page and render it?"',
        options:[' Web server','Web network','Web browser'],
        answer:3
      },
      {
        question: '"HTML tags are used to describe document ___."',
        options:[ ' definition',' content','language'],
        answer:2
      },
      {
        question: ' HTML program is saved using ___ extension.',
        options:[' htnl','.htnl',' .html'],
        answer:3
      },
      {
        question: '"HTML program can be read and rendered by ___."',
        options:[ 'Compiler',' Server','Web Browser'],
        answer:2
      },
      {
        question: '" Java is a"',
        options:[' high-level programming language','Web network','Web browser'],
        answer:1
      },
      {
        question: '"Java is designed by"',
        options:[ 'James Gosling',' Charles Babbage',' Dennis Ritchie>'],
        answer:2
      },
      {
        question: '"Java first appeared in"',
        options:['23 July, 1994','18 August, 2001','May 23, 1995'],
        answer:3
      },
      {
        question: '" Java influenced by"',
        options:[ ' All the above',' Objective-C','C++'],
        answer:2
      },
  ]
  

   var numbers = document.querySelector(".question-number");
   var question = document.querySelector(".questions");
   var optionList = document.querySelector(".list-options");
   var app2 = document.querySelector("#quizapp2");
   var app4 = document.querySelector("#quizapp4");
   var app6 = document.querySelector("#quizapp6");
   var app8 = document.querySelector("#quizapp8");
   var app10 = document.querySelector("#quizapp10");
   var showquestion;
   
  
   var counter = 0;
   var rightans = 0;
   var attemptans = 0;
   var wrongans = 0;
   
  
   var questionarray = [];
   var optionarray = [];
   
  
   function pushquestion() {
     for (var i = 0; i < Questions.length; i++) {
       questionarray.push(Questions[i]);
     }
   }
   
  
   function setquestion() {
  
     numbers.innerHTML = "Question" + (counter + 1) + " of " + Questions.length;
   
  
     var qindex = questionarray[Math.floor(Math.random() * questionarray.length)];
     showquestion = qindex;
     question.innerHTML = showquestion.question;
   
  
     questionarray.splice(questionarray.indexOf(qindex), 1);
  
     var optlen = qindex.options.length;
   
  
     for (var i = 0; i < optlen; i++) {
  
       optionarray.push(i);
     }
   
     optionList.innerHTML = " ";
   
     for (var i = 0; i < optlen; i++) {
  
       var optindex = optionarray[Math.floor(Math.random() * optionarray.length)];
   
  
       optionarray.splice(optionarray.indexOf(optindex), 1);
   
       var opttag = document.createElement("li");
       var opttext = document.createTextNode(qindex.options[optindex]);
       opttag.appendChild(opttext);
       opttag.id = optindex;
       opttag.setAttribute("onclick", "getli(this)");
       optionList.appendChild(opttag);
     }
     counter++;
   }
   
  
   function start() {
     document.querySelector(".start").classList.add("hidden");
     document.querySelector(".question").classList.remove("hidden");
     pushquestion();
     setquestion();
   }
   
  
   function next() {
     if (counter === Questions.length) {
       end();
     } else {
       setquestion();
     }
   }
   
  
   function disableli() {
     var ullen = optionList.children.length;
     for (var i = 0; i < ullen; i++) {
       optionList.children[i].classList.add("disable");
     }
   }
   
  
   function end() {
     document.querySelector(".question").classList.add("hidden");
     document.querySelector(".end").classList.remove("hidden");
     result();
   }
  
   function result() {
    app2.innerHTML = Questions.length;
    app4.innerHTML = attemptans;
    app6.innerHTML = rightans;
    app8.innerHTML = attemptans - rightans;
    app10.innerHTML = (rightans / Questions.length) * 100 + "%";
   }
   
  
   function getli(u) {
     var id = parseInt(u.id);
     if (id === showquestion.answer) {
       u.classList.add("right");
       rightans++;
     } else {
       u.classList.add("wrong");
       wrongans++;
     }
     attemptans++;
     disableli();
   }
   
  
   function tryagain() {
     document.querySelector(".end").classList.add("hidden");
     document.querySelector(".start").classList.remove("hidden");
     counter = 0;
     rightans = 0;
     attemptans = 0;
     wrongans = 0;
   }

