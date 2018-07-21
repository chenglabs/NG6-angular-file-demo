import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ngfModule, ngf } from 'angular-file';


import { AppComponent } from './app.component';
import { SimpleDemoComponent } from 'src/app/simple-demo/simple-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleDemoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    ngfModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
