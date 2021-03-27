import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ListTestComponent } from './list-test/list-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap(){
    const el = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('tag-button', el);
    const el2 = createCustomElement(ListTestComponent, {injector: this.injector});
    customElements.define('tag-list', el2);
    }

 }
