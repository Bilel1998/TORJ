import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
@Input() url:any;
safeSrc: SafeResourceUrl;
  constructor( private _sanitizer: DomSanitizer) {
      this.safeSrc="";
     }

  ngOnInit(): void {
    this.safeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }
  
}
