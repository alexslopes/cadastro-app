import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { AlunoModule } from './aluno/aluno.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    TemplateModule,
    AppRoutingModule,
    AlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
