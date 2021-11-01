const questions = [
  {
    key: "goa",
    questions: [
      {
        query: "Has he/she been in goa???",
      },
    ],
  },
  {
    key: "moreThanYear",
    questions: [
      {
        query: "has he/she been working for HFC for more than a year???",
      },
    ],
  },
  {
    key: "glass",
    questions: [
      {
        query: "is he/she wearing a  eye glass???",
      },
    ],
  },
  {
    key: "nationality",
    questions: [
      {
        query: "what is his/her nationality???",
      },
    ],
  },
  {
    key: "hair",
    questions: [
      {
        query: "what color is his/her hair???",
      },
    ],
  },
  {
    key: "beard",
    questions: [
      {
        query: "Does he have a beard???",
      },
    ],
  },
  {
    key: "location",
    questions: [
      {
        query: "Is he/she working in goa office???",
      },
      {
        query: "Is he/she working in Berlin office??????",
      },
    ],
  },
  {
    key: "role",
    questions: [
      {
        query: "What is his/her role in HFC?!",
      },
    ],
  },
  {
    key: "squad",
    questions: [
      {
        query: "which squad is he/she belong to???",
      },
    ],
  },
];
const people = [
  {
    name: "Noor",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
  {
    name: "Shreyanesh",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
  },
  {
    name: "Srikar",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "No",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
  },
  {
    name: "Manpreet",
    role: "qa",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "No",
    glass: "No",
  },
  {
    name: "Jaideep",
    role: "qa",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "No",
    goa: "No",
    glass: "Yes",
  },
  {
    name: "Ishan",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "No",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
    funQuestion: "is he/she a big fan og NBA",
  },
  {
    name: "Dinesh",
    role: "qa",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "No",
    glass: "No",
  },
  {
    name: "Abhay",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "No",
    goa: "Yes",
    glass: "No",
  },
  {
    name: "Zurez",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "No",
    goa: "No",
    glass: "Yes",
  },
  {
    name: "Muzammil",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
  },
  {
    name: "Nihal",
    role: "developer",
    squad: "excellence",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
    funQuestion: "is he service owner of OPS master?",
  },
  {
    name: "Behnam",
    role: "developer",
    squad: "center",
    location: "goa",
    nationality: "IRAN",
    beard: "No",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
    funQuestion: "is this website written by him?",
  },
  {
    name: "Rahul",
    role: "qa",
    squad: "kitchen",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "No",
    goa: "Yes",
    glass: "Yes",
  },
  {
    name: "Rohit",
    role: "developer",
    squad: "kitchen",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "brown",
    moreThanYear: "No",
    goa: "Yes",
    glass: "Yes",
  },
  {
    name: "Sam",
    role: "developer",
    squad: "excellence",
    location: "berlin",
    nationality: "USA",
    beard: "Yes",
    hair: "bald",
    moreThanYear: "Yes",
    goa: "No",
    glass: "No",
    funQuestion:
      "is he going to pay 30 euros to the winner of this competition???",
  },
  {
    name: "Baris",
    role: "teamLead",
    squad: "center",
    location: "berlin",
    nationality: "TURKEY",
    beard: "Yes",
    hair: "brown",
    moreThanYear: "No",
    goa: "No",
    glass: "Yes",
    funQuestion: "is he a big fan of Beşiktaş?",
  },
  {
    name: "Janosch",
    role: "cto",
    location: "goa",
    nationality: "GERMANY",
    beard: "No",
    hair: "brown",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
    funQuestion: "is he a big fan of hertha berlin?!",
  },
  {
    name: "Pragna",
    role: "qa",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "No",
    hair: "black",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
  {
    name: "Milosha",
    role: "HR",
    location: "goa",
    nationality: "INDIA",
    beard: "No",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
  },
  {
    name: "Ronald",
    role: "qa",
    squad: "center",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
    funQuestion: "is he cycler",
  },
  {
    name: "Clemens",
    role: "devops",
    squad: "excellence",
    location: "berlin",
    nationality: "GERMANY",
    beard: "No",
    hair: "brown",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No"
  },
  {
    name: "Ketan",
    role: "teamLead",
    squad: "kitchen",
    location: "berlin",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "Yes",
  },
  {
    name: "Irwin",
    role: "developer",
    squad: "center",
    location: "berlin",
    nationality: "INDIA",
    hair: "black",
    beard: "Yes",
    moreThanYear: "Yes",
    goa: "Yes",
    glass: "No",
    funQuestion: "is he in love with partner app",
  },
  {
    name: "Mukesh",
    role: "devops",
    squad: "devops",
    location: "goa",
    nationality: "INDIA",
    hair: "black",
    beard: "Yes",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
    funQuestion: "has he had a tech talk presentation about HELM recently?",
  },
  {
    name: "Jennifer",
    role: "Product Manager",
    squad: "excellence",
    location: "berlin",
    nationality: "USA",
    beard: "No",
    hair: "brown",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
  {
    name: "Tharun",
    role: "developer",
    squad: "kitchen",
    location: "goa",
    nationality: "INDIA",
    beard: "Yes",
    hair: "black",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
  {
    name: "Anandu",
    role: "developer",
    squad: "kitchen",
    location: "goa",
    nationality: "INDIA",
    hair: "black",
    beard: "Yes",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
  {
    name: "Frank",
    role: "Product Manager",
    squad: "kitchen",
    location: "berlin",
    nationality: "GERMANY",
    beard: "Yes",
    hair: "brown",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
  {
    name: "Luis",
    role: "Product Manager",
    squad: "kitchen",
    location: "berlin",
    nationality: "GERMANY",
    beard: "No",
    hair: "brown",
    moreThanYear: "No",
    goa: "No",
    glass: "No",
  },
];
let result = [];
const elements = Object.keys(people[0]).filter((i) => i !== "name");
const randomNumberPicker = (max) => Math.floor(Math.random() * max + 1);

let gameResult = {
  started: "No",
  status: 1,
  answers: {},
};
let lastResult = {
  lengthNumber: 0,
  count: 0,
};

function fadeOutAndChange(id, status) {
  const element = document.getElementById(id);
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.src = `./styles/images/${status}.png`;
      fadeIn(element);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.2;
  }, 50);
}
function fadeIn(element) {
  var op = 0.1; // initial opacity
  var timer = setInterval(function () {
    if (op >= 0.9) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.2;
  }, 50);
}

const findNextQuestionTopic = () => {
  let remainingPlayer = result.length;
  let halfPlayerCount = Math.floor(remainingPlayer / 2);
  return elements.reduce((acc, cur) => {
    if (
      gameResult.answers[cur] ||
      !questions.find((step) => step.key === cur)
    ) {
      return acc;
    }
    if (acc.diff === undefined) {
      return {
        q: cur,
        diff: Math.abs(
          halfPlayerCount -
            result.filter((person) => person[cur] === result[0][cur]).length
        ),
      };
    }
    let currentDiff = Math.abs(
      halfPlayerCount -
        result.filter((person) => person[cur] === result[0][cur]).length
    );
    let negativeDiff = Math.abs(
      halfPlayerCount -
        result.filter((person) => person[cur] !== result[0][cur]).length
    );
    if (acc.diff > currentDiff || acc.diff > negativeDiff) {
      return {
        q: cur,
        diff: acc.diff > currentDiff ? currentDiff : negativeDiff,
      };
    }
    return acc;
  }, {});
};
const checkFunQuestion = () => {
  if (result.length === 2) {
    if (result[0].funQuestion && result[1].funQuestion) {
      const targetIndex = randomNumberPicker(2);
      return {
        question: result[targetIndex - 1].funQuestion,
        yes: result[targetIndex - 1].name,
        no: result[targetIndex - 1 === 0 ? 1 : 0].name,
      };
    } else if (result[0].funQuestion || result[1].funQuestion) {

      return result[0].funQuestion
        ? {
            question: result[0].funQuestion,
            yes: result[0].name,
            no: result[1].name,
          }
        : {
            question: result[1].funQuestion,
            yes: result[1].name,
            no: result[0].name,
          };
    }
    //  else {
    //   return {
    //     question: `is he/she ${result[0].name}`,
    //     yes: result[0].name,
    //     no: result[1].name,
    //   };
    // }
  }
  return false;
};

const showGuess = (currentResult) => {
  fadeOutAndChange("akinator-image", "happy");

  clearBox();
  let questionBox = document.getElementById("question-box");

  const para = document.createElement("img");
  para.className = "profile";

  document.getElementById("start-game").style.display = `flex`;

  const name = document.createElement("h3");
  name.innerHTML = currentResult[0].name;
  para.src = `./styles/images/staffs/${currentResult[0].name}.jpeg`;
  para.style.opacity = 0;
  fadeIn(para);
  questionBox.appendChild(para);
  questionBox.appendChild(name);
};
const checkLoop = () => {
  if (result.length === 1) {
    showGuess(result);
    return true;
  }
  if (lastResult.lengthNumber === result.length) {
    if (lastResult.count === 5) {
      console.log("-----------------------LOOP---------------------"); //loop
      return true;
    } else {
      lastResult.count = lastResult.count + 1;
      return false;
    }
  } else {
    lastResult = {
      lengthNumber: result.length,
      count: 0,
    };
    return false;
  }
};
const clearBox = () => {
  let myNode = document.getElementById("question-box");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
};
const startGame = () => {
  result = [...people];
  gameResult = {
    started: "Yes",
    status: 1,
    answers: {},
  };
  document.getElementById("start-game").style.display = `none`;
  const fistQuestion = randomNumberPicker(questions.length)
  updateQuestion(questions[fistQuestion-1].key);

};
const nextRound = () => {

  updateProgressBar();

  const loopHappened = checkLoop();
  if (loopHappened) return;

  const funQuestion = checkFunQuestion();
  if (funQuestion) {

    showFunQuestion(funQuestion);
    return;
  }

  updateQuestion(findNextQuestionTopic().q);

  // clean dom
  // find next question and call function
};
const showFunQuestion = (funQuestion) => {
  clearBox();

  let questionBox = document.getElementById("question-box");

  const para = document.createElement("p");
  const node = document.createTextNode(funQuestion.question);
  para.setAttribute("key", "fun");
  para.className = "question";
  para.appendChild(node);
  questionBox.appendChild(para);

  const yesBtn = document.createElement("BUTTON"); // Create a <button> element
  yesBtn.innerHTML = "YES";
  yesBtn.value = funQuestion.yes;
  yesBtn.className = "answer";
  questionBox.appendChild(yesBtn);
  const noBtn = document.createElement("BUTTON"); // Create a <button> element
  noBtn.innerHTML = "NO";
  noBtn.value = funQuestion.no;
  noBtn.className = "answer";
  questionBox.appendChild(noBtn);
};
const updateProgressBar = () => {
  fadeOutAndChange("akinator-image", gameResult.status);
  document.getElementById("myBar").style.width = `${
    (1 - (result.length - 1) / people.length) * 100
  }%`;
  // fadeIn("akinator-image")
};
const updateQuestion = (questionKey) => {
  clearBox();
  let question = questions.find((step) => step.key === questionKey);

  let questionBox = document.getElementById("question-box");

  const para = document.createElement("p");
  const node = document.createTextNode(question.questions[0].query);
  para.setAttribute("key", question.key);
  para.className = "question";
  para.appendChild(node);
  questionBox.appendChild(para);
  const answersOption = result.map((person) => person[question.key]);

  const uniqAnswer = new Set(answersOption);
  if (uniqAnswer.size === 1) {
    if (result.length === 2) {
      showFunQuestion({
        question: `is he/she ${result[0].name}`,
        yes: result[0].name,
        no: result[1].name,
      });
      return;
    } else {
      uniqAnswer.forEach((answer) => {
        result = result.filter((person) => person[question.key] === answer);
        nextRound();
      })
    }
  }

  const btnContainer = document.createElement("div");
  uniqAnswer.forEach((element) => {
    const btn = document.createElement("BUTTON"); // Create a <button> element
    btn.innerHTML = element !== undefined ? element : "N/A";
    btn.value = element;
    btn.className = "answer";
    btnContainer.appendChild(btn);
  });
  questionBox.appendChild(btnContainer);
};

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "answer") {
    if (gameResult.status < 4) {
      gameResult.status = gameResult.status + 1;
    }
    const userAnswer =
      e.target.value === "undefined" ? undefined : e.target.value;

    let q = document.getElementsByClassName("question");
    let key = q[0].getAttribute("key");
    if (key === "fun") {
      return showGuess(result.filter((person) => person.name === userAnswer));
    }
    result = result.filter((person) => person[key] === userAnswer);
    nextRound();
  }
});
