import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from "@angular/material/input";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'; 

// Aqui agregar todos los import de los componentes de Material!

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
