anychart.onDocumentLoad(function() {
  // create chart and set data
  // as Array of Arrays
  var chart = anychart.pie([
    ["2-3 раза в месяц", 5],
    ["1 раз в 2-3 месяца", 27],
    ["1 раз в полгода", 16],
    ["Затрудняюсь ответить", 11],
    ["1 раз в месяц", 11],
    ["1 раз в 4-5 месяцев", 24],
    ["1 раз в год и реже", 6]
  ]);
  chart.title("Средняя частота покупки одежды");
  chart.container("container1").draw();
});

anychart.onDocumentLoad(function() {
  // create chart and set data
  var chart = anychart.column([
    ["2018", 258],
    ["2019", 330],
    ["2020", 465],
    ["2021", 830]
  ]);
  // set chart title
  chart.title("Покупка одежды за последние 4 года (в тыс. шт)");
  // set chart container and draw
  chart.container("container2").draw();
});

anychart.onDocumentLoad(function() {
  // create chart and set data
  // as Array of Objects
  var chart = anychart.column();
  chart.data({header: ["x", "2018", "2019", "2020"],
   rows:[
    {x: "В своем городе", usd: 68, eur: 71, pound: 69},
    {x: "В другом российском городе", usd: 56, eur: 60, pound: 57},
    {x: "В китае", usd: 39, eur: 50, pound: 57},
    {x: "В других страннах", usd: 26, eur: 22, pound: 21}
  ]});
  chart.title("");
  chart.legend(true);
  chart.container("container3").draw();
});

anychart.onDocumentLoad(function() {
  // create chart and set data
  // as Array of Arrays
  var chart = anychart.pie([
    ["Работа", 38],
    ["Выходные", 24],
    ["Вечера вне дома", 15],
    ["Дом", 13],
    ["Спорт", 10],
    ["Мероприятия", 2]
  ]);
  chart.title("Диаграмма занятости");
  chart.container("container4").draw();
});

anychart.onDocumentLoad(function() {
  // create chart and set data
  // as Array of Objects
  // the biggest point is marked with individually conigured marker
  var chart = anychart.line([
    {x: "2018", value: 50, marker: {enabled: true, type: "round", fill: "pink"}},
    {x: "2019", value: 120, marker: {enabled: true, type: "round", fill: "pink"}},
    {x: "2020", value: 173, marker: {enabled: true, type: "round", fill: "pink"}},
    {x: "2021",   value: 215, marker: {enabled: true, type: "round", fill: "pink"}}
  ]);
  chart.title("Посещаемость нашего сервиса");
  chart.container("container5").draw();
});