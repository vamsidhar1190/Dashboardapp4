import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';
import {
  ApexStroke,
  ApexMarkers,
  ApexGrid,
  ApexLegend,
  ApexTooltip,
} from 'ng-apexcharts';
import { series } from './data';
import { Recentusers } from '../interfaces/recentusers';
import { MedicalService } from '../services/medical.service';

export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type ChartOptions4 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

export type ChartOptions6 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public data1: any;
  public options1: any;
  public date!: Date[];
  public chartOptions1: any;
  public chartOptions2: any;
  public chartOptions3: any;
  public chartOptions4: any;
  public chartOptions5: any;
  public chartOptions6: any;
  public piechartdata!: any;
  public Years!: any[];
  public recentUsers: Recentusers[] = [];

  public barchartdata: any;
  public barchardata: any;

  public reportedcase: any;
  public reportdata: any;

  public Gendervists: any;
  public gendervisits: any;


  public Recetactivity:any
  public doctoractivity:any

  constructor(private serviceRef: MedicalService) {}
  ngOnInit() {
    this.defaultAvgvisit();
    this.Reportedcases();
    this.defaultgendervisit();
    this.malevisit();
    this.femalevisit();
    this.patients();
    this.bardata();
    this.femalevisit();
    this.onRecentUsers();
    this.reportsdata();
    this.defaultPieChart();
    this.visitgender();
    this.docactivity()
  }

  public defaultPieChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    // console.log(this.piechartdata.code);

    console.log(this.piechartdata);

    this.data1 = {
      labels: ['Cardiology', 'Neurology', 'Dermatology'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    console.log(this.data1);

    this.options1 = {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  public visitsDep(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    console.log(this.piechartdata.code);

    if (this.piechartdata.code === 'YEST') {
      console.log(this.piechartdata);

      this.data1 = {
        labels: ['Cardiology', 'Neurology', 'Dermatology'],
        datasets: [
          {
            data: [100, 500, 900],
            backgroundColor: [
              documentStyle.getPropertyValue('--blue-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--blue-400'),
              documentStyle.getPropertyValue('--yellow-400'),
              documentStyle.getPropertyValue('--green-400'),
            ],
          },
        ],
      };

      console.log(this.data1);
    } else if (this.piechartdata.code === 'TD') {
      this.data1 = {
        labels: ['Cardiology', 'Neurology', 'Dermatology'],
        datasets: [
          {
            data: [300, 600, 90],
            backgroundColor: [
              documentStyle.getPropertyValue('--blue-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--blue-400'),
              documentStyle.getPropertyValue('--yellow-400'),
              documentStyle.getPropertyValue('--green-400'),
            ],
          },
        ],
      };
      console.log(this.data1);
    } else if (this.piechartdata.code === 'TW') {
      this.data1 = {
        labels: ['Cardiology', 'Neurology', 'Dermatology'],
        datasets: [
          {
            data: [400, 900, 300],
            backgroundColor: [
              documentStyle.getPropertyValue('--blue-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--blue-400'),
              documentStyle.getPropertyValue('--yellow-400'),
              documentStyle.getPropertyValue('--green-400'),
            ],
          },
        ],
      };
      console.log(this.data1);
    }

    this.options1 = {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }
  defaultbarchartdata: number[] = [
    2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4,
  ];

  public defaultAvgvisit(): void {
    this.chartOptions2 = {
      series: [
        {
          name: 'Visit',
          data: this.defaultbarchartdata,
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        position: 'top',
        labels: {
          offsetY: -18,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + '%';
          },
        },
      },
      title: {
        text: 'Avg Patient Visit',
        floating: 0,
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    };
  }
  public Avgvisit(): void {
    console.log(this.barchartdata);
    console.log(this.chartOptions2);

    if (this.barchartdata.code === 'L2T') {
      this.defaultbarchartdata = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4];
      this.defaultAvgvisit();
    } else if (this.barchartdata.code === 'L1W') {
      this.defaultbarchartdata = [5.2, 6.4, 4.8, 8.7, 3.9, 5.6, 6.1, 7.2, 4.5];
      this.defaultAvgvisit();
    } else if (this.barchartdata.code === 'L1M') {
      this.defaultbarchartdata = [7.1, 5.9, 6.8, 9.2, 8.5, 7.3, 6.4, 7.9, 6.1];
      this.defaultAvgvisit();
    }
  }

  defaultreportcases1: number[] = [
    45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10,
  ];
  defaultreportcases2: number[] = [
    35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35,
  ];

  public Reportedcases(): void {
    this.chartOptions3 = {
      series: [
        {
          name: 'Negative',
          data: this.defaultreportcases1,
        },
        {
          name: 'Positive',
          data: this.defaultreportcases2,
        },
      ],
      chart: {
        height: 280,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      title: {
        text: '',
        align: 'left',
      },
      legend: {
        tooltipHoverFormatter: function (val: any, opts: any) {
          return (
            val +
            ' - <strong>' +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            '</strong>'
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        labels: {
          trim: false,
        },
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan',
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val: any) {
                return val + ' patients';
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val + ' Patients';
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    };
  }
  public Reported(): void {
    console.log(this.reportedcase);

    if (this.reportedcase.code === 'L2T') {
      (this.defaultreportcases1 = [
        45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10,
      ]),
        (this.defaultreportcases2 = [
          35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35,
        ]);
      this.Reportedcases();
    } else if (this.reportedcase.code === 'L1W') {
      (this.defaultreportcases1 = [
        22, 10, 44, 22, 44, 53, 55, 80, 12, 35, 17, 78,
      ]),
        (this.defaultreportcases2 = [
          19, 28, 93, 19, 30, 44, 45, 78, 20, 34, 69, 67,
        ]);
      this.Reportedcases();
    } else if (this.reportedcase.code === 'L1M') {
      (this.defaultreportcases1 = [
        78, 33, 23, 22, 22, 10, 44, 22, 44, 53, 55, 80,
      ]),
        (this.defaultreportcases2 = [
          20, 34, 69, 67, 98, 70, 56, 19, 28, 93, 19, 30,
        ]);
      this.Reportedcases();
    }
  }

  defaultgender1: number[] = [31, 40, 28, 51, 42, 109, 100];
  defaultgender2: number[] = [11, 32, 45, 32, 34, 52, 41];

  public defaultgendervisit(): void {
    this.chartOptions4 = {
      series: [
        {
          name: 'Male',
          data: this.defaultgender1,
        },
        {
          name: 'female',
          data: this.defaultgender2,
        },
      ],
      chart: {
        height: 470,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }

  genderdata() {
    console.log(this.Gendervists);

    if (this.Gendervists.code === 'L2T') {
      (this.defaultgender1 = [31, 40, 28, 51, 42, 109, 100]),
        (this.defaultgender2 = [11, 32, 45, 32, 34, 52, 4]);
      this.defaultgendervisit();
    } else if (this.Gendervists.code === 'L1W') {
      (this.defaultgender1 = [12, 33, 15, 27, 20, 39, 50]),
        (this.defaultgender2 = [30, 25, 38, 40, 29, 20, 35]);
      this.defaultgendervisit();
    } else if (this.Gendervists.code === 'L1M') {
      (this.defaultgender1 = [30, 67, 20, 50, 30, 23, 12]),
        (this.defaultgender2 = [45, 60, 23, 45, 35, 60, 90]);
      this.defaultgendervisit();
    }
  }

  public malevisit(): void {
    this.chartOptions5 = {
      series: [
        {
          name: 'Male Patients',
          data: series.monthDataSeries1.prices,
          color: '#ff0000', // Specify the desired color here
        },
      ],
      chart: {
        type: 'area',
        height: 175,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      title: {
        text: '',
        align: 'left',
      },
      subtitle: {
        // text: "Male",
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }
  public femalevisit(): void {
    this.chartOptions6 = {
      series: [
        {
          name: 'Female Patients',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 175,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      title: {
        text: '',
        align: 'left',
      },
      subtitle: {
        // text: "Male",
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }

  public patients(): void {
    this.Years = [
      { name: 'Last 7 Days', code: 'YEST' },
      { name: 'Last 1 Month', code: 'TD' },
      { name: 'Last 6 Months', code: 'TW' },
    ];
  }

  public bardata(): void {
    this.barchardata = [
      { name: 'Last 2 Days', code: 'L2T' },
      { name: 'Last 1 Week', code: 'L1W' },
      { name: 'Last 1 Month', code: 'L1M' },
    ];
  }

  public reportsdata(): void {
    this.reportdata = [
      { name: 'Last 1 Week', code: 'L2T' },
      { name: 'Last 1 Month', code: 'L1W' },
      { name: 'Last 6 Months', code: 'L1M' },
    ];
  }

  public visitgender() {
    this.gendervisits = [
      { name: 'Last 10 Days', code: 'L2T' },
      { name: 'Last 1 Month', code: 'L1W' },
      { name: 'Last 10 Months', code: 'L1M' },
    ];
  }

  public docactivity() {
    this.doctoractivity = [
      { name: 'Last 10 Days', code: 'L2T' },
      { name: 'Last 1 Month', code: 'L1W' },
      { name: 'Last 10 Months', code: 'L1M' },
    ];
  }
  public onRecentUsers(): void {
    this.serviceRef.onRecentUsers().subscribe((data) => {
      this.recentUsers = data;
    });
  }
}
