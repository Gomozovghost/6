let Calendar = []
let Week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]
let Day = "Воскресенье"
let indexWeek = Week.indexOf(Day)
for (let i = 1; i < 32; i++) {Calendar.push(i)}
for (let element of Calendar) {const y = (indexWeek + element - 1) % 7; console.log(`${element} Января, ${Week[y]}`)}