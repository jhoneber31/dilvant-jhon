import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1Component } from './pages/home/section-1/section-1.component';
import { Section2Component } from './pages/home/section-2/section-2.component';
import { Section3Component } from './pages/home/section-3/section-3.component';
import { Section4Component } from './pages/home/section-4/section-4.component';
import { Section5Component } from './pages/home/section-5/section-5.component';
import { Section6Component } from './pages/home/section-6/section-6.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component
  ]
})
export class SharedModule { }
