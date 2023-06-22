import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';
import { StageService } from "../../../services/stageservice/stage.service";
import { Stage } from "../../../model/stage";

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html'
})
export class AddStageComponent implements OnInit {

  newStageFormGroup!: FormGroup;
  roles!: string | null;
  customerId: any;

  constructor(private fb: FormBuilder, private stageservice: StageService, private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.roles = localStorage.getItem("ROLES");
    if (localStorage.getItem("id") !== undefined) {
      this.customerId = localStorage.getItem("id");
    }
    this.newStageFormGroup = this.fb.group({
      titre: [null, Validators.required],
      description: [null, Validators.required],
      date_debut: [null, Validators.required],
      date_fin: [null, Validators.required],
      utite_d_accueil: [null, Validators.required]
    });
  }

  addStage() {
    let stage: Stage = this.newStageFormGroup.value;
    this.stageservice.createStage(stage).subscribe(
      data => {
        Swal.fire({
          position: 'center',
          title: "Stage successfully saved!",
          showConfirmButton: false,
          timer: 1500
        });
        this.newStageFormGroup.reset();
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }

  OnResetedForm(){
    this.newStageFormGroup.reset();
  }

  handleLogout() {
    this.auth.logout();
    this.roles = null;
    this.router.navigateByUrl("/login");
  }
}
