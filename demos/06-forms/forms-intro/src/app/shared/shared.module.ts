import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  MarkdownEditorComponent,
  IntroComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule { }
