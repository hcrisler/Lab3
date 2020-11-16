const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  if (newScore >= 60) {
    passValue = true;
  } else {
    passValue = false;
  }
  const newPerson = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: passValue,
  };
  array.push(newPerson);
}
// addSubmission(submissions, "Jonah", 25, "2020-11-12");
// console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((array) => array.name === name);
  array.splice(index, 1);
}
// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

function editSubmission(array, index, score) {
  const updateSubmission = array[index];
  if (updateSubmission.score > 60) {
    passed = true;
  } else {
    passed = false;
  }
  array[index].passed = passed;
  array[index].score = score;
}
// editSubmission(submissions, 2, 75);
// console.log(submissions);

function findSubmissionByName(array, name) {
  const submission = array.find((element) => element.name === name);
  return submission;
}
// findSubmissionByName(submissions, 'Jane');

function findLowestScore(submissions) {
  let lowest = null;
  submissions.forEach(function (submission) {
    if (lowest === null || lowest.score > submission.score) {
      lowest = submission;
    }
  });
  return lowest;
}
// let lowest = findLowestScore(submissions);
// console.log(lowest);

function findAverageScore(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}
// let averageScore = [95,77,59,88];
// console.log (findAverageScore(averageScore));


function filterPassing(array) {
  let passingScore = array.filter((submission) => submission.score >= 60);
  return passingScore;
}
// let pass = filterPassing(submissions);
// console.log(pass);

function filter90AndAbove(array) {
  let score90Plus = array.filter((submission) => submission.score >= 90);
  return score90Plus;
}
// let pass = filter90AndAbove(submissions);
// console.log(pass);
