import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StageService } from '../../services/stage.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild('pieChart') pieChartElementRef!: ElementRef<HTMLCanvasElement>;

  constructor(private stageService: StageService) {}

  ngOnInit(): void {
    this.stageService.getStagesCountByEntreprise().subscribe(data => {
      this.createPieChart(data);
    });
  }

  createPieChart(data: { entreprise: string; count: number }[]): void {
    const pieChartElement = this.pieChartElementRef.nativeElement.getContext('2d');

    if (!pieChartElement) {
      console.error('Unable to get canvas context');
      return;
    }

    const labels = data.map(item => item.entreprise);
    const counts = data.map(item => item.count);

    new Chart(pieChartElement, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: counts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }
        ]
      }
    });
  }
}
