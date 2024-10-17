// З масива людей(people) Вам потрібно знайти людину за іменем(name)
// Приймає масив людей та ім'я, і шукає людину з таким ім'ям
function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
  return undefined;
}

module.exports = findByName;
