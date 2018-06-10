import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoutingModule } from '../routing.module';
import { FrameworkModule } from '../framework/framework.module';
import { 
          MatButtonModule,
          MatCardModule,
          MatProgressBarModule,
          MatRippleModule,
          MatSidenavModule,
          MatIconModule,
          MatToolbarModule,
          MatFormFieldModule,
          MatInputModule
      } from '@angular/material';
import { AboutComponent } from './about/about.component';
import { LocalSettingsComponent } from './local-settings/local-settings.component';


@NgModule({
  imports:      [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    RoutingModule,
                    FrameworkModule,
                    FlexLayoutModule,
                    MatButtonModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatRippleModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatToolbarModule,
                    MatFormFieldModule,
                    MatInputModule                                                                     
                ],
  declarations: [ShellComponent, AboutComponent, LocalSettingsComponent],
  bootstrap:    [ShellComponent]
})
export class HostModule 
{ 
  
}