import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {

  chartOptions = {};
  Highcharts = Highcharts;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'spline',
        backgroundColor: 'none',
        // plotBackgroundImage: 'linear-gradient(180deg,#740091,#2d1a4c);',
      },
      credits: {
        enabled: false
      },
      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },
      // plotOptions: {
      //   series: {
      //     marker: {
      //       enabled: false,
      //     },
      //     events: {
      //       mouseOver: function (e: any) {
      //         e.target.update({
      //           marker: {
      //             enabled: true,
      //           },
      //         });
      //       },
      //       mouseOut: function (e: any) {
      //         e.target.update({
      //           marker: {
      //             enabled: false,
      //           },
      //         });
      //       },
      //     },
      //     lineWidth: 1,
      //     states: {
      //       inactive: {
      //         enabled: false,
      //       },
      //     },
      //   },
      // },

      yAxis: {
        title: {
          text: '',
        },
        labels: {
          enabled: false,
        },
      },
      xAxis: [
        {
          categories: ['14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00'],
          labels: {
            style: {
              color: '#ffffff'
            }
          },
          crosshair: {
            width: 1,
            color: '#7cb5ec',
          },
        },
        {
          linkedTo: 0,
          crosshair: {
            width: 1,
            color: 'red',
          },
          visible: false,
        },
        {
          linkedTo: 1,
          crosshair: {
            width: 1,
            color: 'black',
          },
          visible: false,
        },
      ],

      legend: {
        enabled: false,
      },

      tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><td><img src="{series.options.img}" title="" height="35" width="35"></td>' +
          '<td style="color: {series.color}">{series.name} </td>' +
          '<td style="text-align: right"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
      },

      series: [
        {
          name: 'Installation',
          data: [
            43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 97031,
            119931, 137133, 154175,
          ],

          xAxis: 0,
          img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/6/0/5/e605481aea2385108b9487838bea5984.jpg',

        },
        {
          name: 'Manufacturing',
          data: [
            24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 24916,
            24064, 29742, 29851,
          ],
          color: 'red',

          img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/3/3/c/e33c610b13a496e649e2df6f11e58c92.jpg',
          xAxis: 1,
        },
        {
          name: 'Sales & Distribution',
          data: [
            11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 16005,
            19771, 20185, 24377,
          ],
          color: 'black',
          img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/d/f/f/5dff3a00b56fd8f908c08b402ddde2c0.jpg',
          xAxis: 2,
        },
      ],
    };
  }
}
