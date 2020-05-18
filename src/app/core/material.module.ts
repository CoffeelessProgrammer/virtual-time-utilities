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

/* -------------------------- Miscellaneous -------------------------- */
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  exports: [
    MatToolbarModule, MatButtonModule,
    MatTableModule, MatPaginatorModule,
    MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatNativeDateModule, MatDatepickerModule,
    MatTabsModule, MatIconModule, MatCardModule
  ]
})
export class AngularMaterialModule { }