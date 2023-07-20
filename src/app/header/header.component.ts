import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router, private keycloakService: KeycloakService){

    }
    ngOnInit(): void {
        
    }

    logout(){
      this.keycloakService.logout();
    }
}
