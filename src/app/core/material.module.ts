import { NgModule } from '@angular/core';

/* -------------------------- Navigation Bar -------------------------- */
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonModule } from '@angular/material/button';

/* -------------------------- Tables -------------------------- */
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';

/* -------------------------- Forms -------------------------- */
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
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