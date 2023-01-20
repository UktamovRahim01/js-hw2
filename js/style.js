


//ввод данных
let ask = prompt ("write the word");


// изменение str(ask) путем обрезки до последних трех символов
let otv1 = ask.slice(ask.length - 3);
// добавил к str(otv2) дополнительный текст 
let otv2 = ask.slice(0, ask.length - 3) + ".com";


//проверка
console.log(otv1);
console.log(otv2);





