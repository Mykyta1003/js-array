const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
// Приймає масив студентів і повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  return students
    .filter(student => student.score > 80) 
    .map(student => student.name); 
}



// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
// Приймає масив студентів і повертає середній вік студентів
function getAverageAge(students) {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, newStudent) {
  const updatedStudents = [...students]; 
  updatedStudents.push(newStudent); 
  return updatedStudents; 
}

module.exports = addStudent;

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
// Приймає масив студентів та ім'я студента, якого потрібно видалити
function removeStudentByName(students, name) {
  const updatedStudents = []; 
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      updatedStudents.push(students[i]);
    }
  }
  return updatedStudents; 
}


module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
