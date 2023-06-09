import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjetsService} from "../../../services/projets/projets.service";
import {Projet} from "../../../model/Projet.model";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent implements OnInit {
  newProjetFormGroup!: FormGroup
  roles!: string | null;
  customerId: any;
  constructor(private fb: FormBuilder, public projetsService: ProjetsService, private router:Router, private auth: AuthService) {
  }
  ngOnInit(): void {
    this.roles = localStorage.getItem("ROLES");
    if (localStorage.getItem("id") != undefined) {
      this.customerId = localStorage.getItem("id");
    }
    this.newProjetFormGroup = this.fb.group({
      intitule: this.fb.control("",[Validators.required,Validators.minLength(4)]),
      description: [null, Validators.required],
      path: [null, Validators.required],
      stage: [null, Validators.required],
    });
  }

    handleSaveCustomer() {
      let projet: Projet = this.newProjetFormGroup.value;
      this.projetsService.saveProjet(projet).subscribe({
        next : data => {
          alert("stage has been successfully saved !!")
          this.newProjetFormGroup.reset()
          this.router.navigateByUrl("/projets")
        }, error : err => {
          console.log(err)
        }
      });
    }
  handleLogout() {
    this.auth.logout();
    this.roles = null;
    this.router.navigateByUrl("/login");
  }

  OnResetedForm(){
    this.newProjetFormGroup.reset()
  }

  handleProfile() {
    this.router.navigateByUrl("/profile");
  }
}
