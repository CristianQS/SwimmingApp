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
            text: 'Times (seconds)'
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
      series: data,
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
            text: 'Meters (m)'
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
  var date = new Date(today)
  let result = []
  for (let i = 0; i < 7 ; i++) {
    let day = date.getDay() +i
    var h = today - 86400*i*1000
    result.push(new Date(h).toUTCString().substring(0,12))
  }
  return result
}
