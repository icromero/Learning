import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports: [
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatCardModule
    ],
    exports: [
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatCardModule
    ]

})

export class MaterialModule { }