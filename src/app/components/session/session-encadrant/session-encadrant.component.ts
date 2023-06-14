import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EncadrantEtudiantService} from "../../../services/encadrant_etudiant/encadrant-etudiant.service";
import {SessionService} from "../../../services/session/session.service";

@Component({
  selector: 'app-session-encadrant',
  templateUrl: './session-encadrant.component.html',
  styleUrls: ['./session-encadrant.component.css']
})
export class SessionEncadrantComponent {
  roles!: string | null;
  customerId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private encadrantEtudiantService: EncadrantEtudiantService,
    private sessionService: SessionService,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.roles = localStorage.getItem("ROLES");
    if (localStorage.getItem("id") != undefined) {
      this.customerId = localStorage.getItem("id");
    }
  }

  handleLogout() {
    this.auth.logout();
    this.roles = null;
    this.router.navigateByUrl("/login");
  }

  handleProfile() {
    this.router.navigateByUrl("/profile");
  }
}
