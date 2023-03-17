import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CreditsComponent } from './credits/credits.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@visurel/iconify-angular';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    CreditsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    CreditsComponent
  ]
})
export class SharedModule { }
