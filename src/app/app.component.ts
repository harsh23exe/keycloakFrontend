import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'keycloakFrontend';
  selectedHeaderComponent: string;
  fetchedContent: any; 

  constructor(private http: HttpClient){
    this.selectedHeaderComponent = 'default';
    this.fetchedContent = null;
  }

  changeColor(): void {
   
  }

  callAnonymous(): void{

  this.http.get(environment.API+"anonymous", { responseType: 'text' } ).subscribe((data)=>{
    this.fetchedContent=data;
  });
    // return JSON.parse("Hello");
  }

  callUser(): void{
    this.http.get(environment.API+"user", { responseType: 'text' } ).subscribe((data)=>{
      this.fetchedContent=data;
    });
  }

  updateSelectedHeaderAndFetchContent(header: string) {
    this.selectedHeaderComponent = header;

    // Make the HTTP GET request to the external URL based on the selected header component
    if (header === 'anonymous') {
      this.callAnonymous();
    } else if (header === 'user') {
      this.callUser();
    }
  }

}
