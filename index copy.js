const people = require("./people");
const questions = require("./questions");
const { randomNumberPicker } = require("./utils");

const findNextQuestionTopic = (result, elements, gameResult) => {
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
      halfPlayerCount - result.filter((person) => person[cur] === result[0][cur]).length
    );
    let negativeDiff = Math.abs(
      halfPlayerCount - result.filter((person) => person[cur] !== result[0][cur]).length
    );
    if (acc.diff > currentDiff || acc.diff > negativeDiff) {
      return {
        q: cur,
        diff: acc.diff > currentDiff ? currentDiff : negativeDiff,
      };
    }
    return acc;
  }, {});
}
const checkFunQuestion = (result) => {
  if (result.length === 2) {
    if (result[0].funQuestion && result[1].funQuestion) {
      const targetIndex = randomNumberPicker(2);
      return result[targetIndex - 1].funQuestion;
    } else if (result[0].funQuestion || result[1].funQuestion) {
      return result[0].funQuestion || result[1].funQuestion;
    } else {
      return `is he/she ${result[0].name}`;
    }
  }
  return false;
};
const checkLoop = (lastResult, resultLength) => {
  if (lastResult.lengthNumber === resultLength) {
    if (lastResult.count === 5) {
      console.log("-----------------------LOOP---------------------"); //loop
      return true;
    } else {
      lastResult.count = lastResult.count + 1;
      return false;
    }
  } else {
    lastResult = {
      lengthNumber: resultLength,
      count: 0,
    };
    return false;
  }
};

const startGame = (people) => {
  let gameResult = {
    started: false,
    answers: {},
  };
  let lastResult = {
    lengthNumber: 0,
    count: 0,
  };
  const elements = Object.keys(people[0]).filter((i) => i !== "name");

  let result = [...people];
  do {
    const loopHappened = checkLoop(lastResult, result.length);
    if (loopHappened) return;

    const funQuestion = checkFunQuestion(result);
    if(funQuestion){
      console.log(result);
      console.log(funQuestion);
      return;
    }

    const nextQuestionField = findNextQuestionTopic(result, elements, gameResult);

    let targetQuestion = questions.find((step) => step.key === nextQuestionField.q);

    const targetQuestionNumber = randomNumberPicker(
      targetQuestion.questions.length
    );
    const answersOption = result
      .map((person) => person[nextQuestionField.q])
      .filter((i) => i);

    const userAnswer = randomNumberPicker(answersOption.length);

    gameResult.answers[targetQuestion.key] = answersOption[userAnswer - 1];
    result = result.filter(
      (person) => person[targetQuestion.key] === answersOption[userAnswer - 1]
    );
    console.log(targetQuestion.questions[targetQuestionNumber - 1].query);
    console.log(answersOption[userAnswer - 1]);
  } while (result.length > 1);
  console.log(result);
};
