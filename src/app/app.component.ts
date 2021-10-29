import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';
  urlVideo="";
  updateVideoURL(URL:any){
    this.urlVideo=URL;
    console.log("app",this.urlVideo);
  }
}
