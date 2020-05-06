import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [
    MatToolbarModule, MatButtonModule,
    MatTableModule, MatPaginatorModule
  ]
})
export class AngularMaterialModule { }