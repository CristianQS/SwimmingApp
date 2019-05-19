  export const line = (data) => {
    return {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },
      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },
      yAxis: {
        title: {
            text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      xAxis: {
        categories: getXaxis(),
        crosshair: true
      },
      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274]
    }],
      responsive: {
        rules: [{
          condition: {
              maxWidth: 500
          },
        chartOptions: {
          legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
          }
        }
        }]
      }
    }
  }
  export const column = (data) => {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: getXaxis(),
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: data
    }
  }

function getXaxis () {
  var today = Date.now()
  var date = new Date(today).getDay()
  let result = []
  for (let i = 0; i < 7 ; i++) {
    let day = date +i
    result.push(days(day % 7))
  }
  return result
}

function days (day) {
  switch (day) {
    case 0:  return 'Sunday'
    case 1: return 'Monday'
    case 2: return 'Tuesday'
    case 3:  return 'Wenesday'
    case 4:  return 'Thursday'
    case 5:  return 'Friday'
    case 6:  return 'Saturday'

    default:
      break;
  }
}