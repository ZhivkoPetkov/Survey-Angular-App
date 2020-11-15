import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ApexAxisChartSeries, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ISurvey } from 'src/app/interfaces/ISurvey';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: "app-piechart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() seriesInput: any[];
  @Input() labelsInput: string[];


  updateSeries() : void {
    this.chartOptions.series = this.seriesInput;
    this.chartOptions.labels = this.labelsInput;
  }

  

  constructor() {
  }
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        width: 380,
        type: "pie"
      },
      labels: this.labelsInput,
      series: this.seriesInput,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
