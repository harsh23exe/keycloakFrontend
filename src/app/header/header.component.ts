import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() headerSelected = new EventEmitter<string>();
 
  constructor(private route: ActivatedRoute, private router: Router, private keycloakService: KeycloakService){

    }
    ngOnInit(): void {
    
    }

    logout(){
      this.keycloakService.logout( "http://localhost:4200/");

    }

    login(){
      this.keycloakService.login();
    }

    checklogged(){
      return this.keycloakService.isLoggedIn();
    }

    selectHeader(header: string) {
      this.headerSelected.emit(header); 
    }
}
