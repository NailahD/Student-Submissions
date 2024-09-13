let submissions = [
  (student1 = {
    name: "Jane",
    score: 95,
    passed: true,
  }),
  (student2 = {
    name: "Joe",
    score: 77,
    passed: true,
  }),
  (student3 = {
    name: "Jack",
    score: 59,
    passed: false,
  }),
  (student4 = {
    name: "Jill",
    score: 88,
    passed: true,
  }),
];

//----------------------------------------------------------

const addSubmission = (array, newName, newScore) => {
  let didPass;
  if (newScore >= 60) {
    didPass = true;
  } else didPass = false;

  let newSub = {
    name: newName,
    score: newScore,
    passed: didPass,
  };
  array.push(newSub);
};

addSubmission(submissions, "Jose", 45);
console.log(submissions);

// function addSubmission(array, newName, newScore) {
// let passed = newScore >= 60 ? true : false;
// let newSubmission = { name: newName, score: newScore, passed: passed };
//  array.push(newSubmission);
//}

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1); //(index, 1) allows us to remove only the specified entry while still keeping index as a single parameter
};

deleteSubmissionByIndex(submissions, 0);
console.log(submissions);

//---------------------------------------------------

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((student) => student.name === name);
  array.splice(index, 1);
};

deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

//---------------------------------------------------

const editSubmission = (array, index, score) => {
  let didPass;
  if (score >= 60) {
    didPass = true;
  } else didPass = false;

  let name = array[index].name;
  array[index] = {
    name: name,
    score: score,
    passed: didPass,
  };
};

editSubmission(submissions, 2, 56);
console.log(submissions);

//----------------------------------------------

const findSubmissionByName = (array, name) => {
  return array.find((student) => student.name === name);
};

console.log(findSubmissionByName(submissions, "Jill"));

//------------------------------------------------------
const findLowestScore = (array) => {
  array.sort((a, b) => a - b);
  let lowScore = array[0];
  return lowScore;
};

console.log(findLowestScore(submissions));

//-------------------------------------------------------

const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((student) => {
    sum += student.score;
  });

  return sum / array.length;
};

//---------------------------------------------------

const filterPassing = (array) => {
  return array.filter((student) => student.passed === true);
};

console.log(filterPassing(submissions));

//--------------------------------------------------

const filter90AndAbove = (array) => {
  return array.filter((student) => student.score >= 90);
};

console.log(filter90AndAbove(submissions));
