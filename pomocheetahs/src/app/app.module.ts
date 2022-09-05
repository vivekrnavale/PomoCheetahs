import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { HeaderTextComponent } from './atoms/header-text/header-text.component';
import { LinkComponent } from './atoms/link/link.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { NavBarLinkComponent } from './atoms/nav-bar-link/nav-bar-link.component';
import { ParagraphTextComponent } from './atoms/paragraph-text/paragraph-text.component';
import { TextBoxPasswordComponent } from './atoms/text-box-password/text-box-password.component';
import { TextBoxStandardComponent } from './atoms/text-box-standard/text-box-standard.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormLabelComponent,
    HeaderTextComponent,
    LinkComponent,
    LogoComponent,
    NavBarLinkComponent,
    ParagraphTextComponent,
    TextBoxPasswordComponent,
    TextBoxStandardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
