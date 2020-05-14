import { NgModule } from '@angular/core';

/* -------------------------- Navigation Bar -------------------------- */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

/* -------------------------- Tables -------------------------- */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

/* -------------------------- Forms -------------------------- */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/* -------------------------- Datepicker -------------------------- */
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  exports: [
    MatToolbarModule, MatButtonModule,
    MatTableModule, MatPaginatorModule,
    MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatNativeDateModule, MatDatepickerModule
  ]
})
export class AngularMaterialModule { }