import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { GridPanelComponent } from './grid-panel/grid-panel.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { SearchPanelComponent } from './search-panel/search-panel.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
    GridPanelComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
