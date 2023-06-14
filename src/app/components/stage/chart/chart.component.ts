import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../services/stage.service';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  roles!: string | null;
  customerId: any;
  stageCount: { entreprise: string, count: number }[] = [];

  constructor(private stageService: StageService, private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.roles = localStorage.getItem("ROLES");
    if (localStorage.getItem("id") != undefined) {
      this.customerId = localStorage.getItem("id");
    }
    this.getStageCount();
  }

  getStageCount(): void {
    this.stageService.getStagesCountByEntreprise().subscribe(
      data => {
        this.stageCount = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  handleLogout() {
    this.auth.logout();
    this.roles = null;
    this.router.navigateByUrl("/login");
  }
}
