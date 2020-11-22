import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

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
  @ViewChild(ChartComponent) chart: ChartComponent;
  @Input() inputLabels: [];
  @Input() inputVotes: [];
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        width: 500,
        type: "pie"
      },
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
  ngOnInit(): void {
  }

  updateSeries(votes){
    this.chart.updateSeries(votes,true);
  }
}
