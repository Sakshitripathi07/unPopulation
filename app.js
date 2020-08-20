function graph(path, graphFunction) {
  fetch(path)
    .then((response) => response.json())
    .then((data) => graphFunction(data));
}

function task1(data) {
  const series = Object.entries(data);
  console.log(series);
  Highcharts.chart('container', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'POPULATION OF INDIA FROM 2005-2015.',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
    },
    series: [
      {
        name: 'Population',
        data: series,
      },
    ],
  });
}
function task2(data) {
  const series = Object.entries(data);
  console.log(series);
  Highcharts.chart('container1', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'POPULATION OF ASEAN COUNTIRES FOR THE YEAR 2014.',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
    },
    series: [
      {
        name: 'Population',
        data: series,
      },
    ],
  });
}
function task3(data) {
  const series = Object.entries(data);
  Highcharts.chart('container2', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Population of SAARC  2005-2015.',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
    },
    series: [
      {
        name: 'Population',
        data: series,
      },
    ],
  });
}

function task4(data) {
  const result = Object.entries(data);
  const years = [
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
  ];
  let series = [];
  result.forEach((element) => {
    var temp = Object();
    temp.name = element[0];
    temp.data = element[1];
    series.push(temp);
  });
  console.log(series);

  Highcharts.chart('container3', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Population of ASEAN countries over 2004-2014',
    },
    xAxis: {
      categories: years,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
    },
    series: series,
  });
}

graph('task1.json', task1);
graph('task2.json', task2);
graph('task3.json', task3);
graph('task4.json', task4);
