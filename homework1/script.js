let money = prompt("Ваш бюджет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");

let addData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let q1 = prompt("Введите ообязательную статью расходов в этом месяце",""),
    q2 = prompt("Во сколько обойдется?",""),
    q3 = prompt("Введите ообязательную статью расходов в этом месяце",""),
    q4 = prompt("Во сколько обойдется?","");

console.log(addData.expenses.q1 = q2);
console.log(addData.expenses.q3 = q4);

alert(addData.budget / 30);
