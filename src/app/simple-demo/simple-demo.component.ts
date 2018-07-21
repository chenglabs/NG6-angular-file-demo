import { Component, NgModule  } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.css']
})
export class SimpleDemoComponent {
  accept = '*';
  files: File[] = [];

  progress: number;
  url = 'https://evening-anchorage-3159.herokuapp.com/api/';
  hasBaseDropZoneOver = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<Event>;
  lastFileAt: Date;


  sendableFormData: FormData; // populated via ngfFormData directive;

  constructor(public http: HttpClient) { }

  cancel() {
    this.progress = 0;
    if ( this.httpEmitter ) {
      console.log('cancelled');
      this.httpEmitter.unsubscribe();
    }
  }

  uploadFiles(files: File[]): Subscription {
    const req = new HttpRequest<FormData>('POST', this.url, this.sendableFormData, {
      reportProgress: true  // , responseType: 'text'
    });

    return this.httpEmitter = this.http.request<Event>(req)
    .subscribe(
      event => {
        this.httpEvent = event;

        if (event instanceof HttpResponse) {
          delete this.httpEmitter;
          console.log('request done', event);
        }
      },
      error => { console.log('Error Uploading', error); }
    );
  }

  getDate() {
    return new Date();
  }
}

