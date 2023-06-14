import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  roles!: string | null;
  customerId: any;
  userProfile: any;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.roles = localStorage.getItem("ROLES");
    if (localStorage.getItem("id") != undefined) {
      this.customerId = localStorage.getItem("id");
    }
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    if (this.auth.getRole().includes('ADMIN')) {
      this.auth.getAdminProfile().subscribe(
        (profile) => {
          this.userProfile = profile;
        },
        (error) => {
          console.log('Error fetching admin profile:', error);
        }
      );
    } else if (this.auth.getRole().includes('CHEF_FIL')) {
      this.auth.getChefFilProfile().subscribe(
        (profile) => {
          this.userProfile = profile;
        },
        (error) => {
          console.log('Error fetching enseignant profile:', error);
        }
      );
    } else if (this.auth.getRole().includes('ETUDIANT')) {
      this.auth.getEtudiantProfile().subscribe(
        (profile) => {
          this.userProfile = profile;
        },
        (error) => {
          console.log('Error fetching etudiant profile:', error);
        }
      );
    } else if (this.auth.getRole().includes('ENCADRANT')) {
      this.auth.getEncadrantPedagogiqueProfile().subscribe(
        (profile) => {
          this.userProfile = profile;
        },
        (error) => {
          console.log('Error fetching encadrant pedagogique profile:', error);
        }
      );
    } else {
      console.log('Unknown user type');
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
