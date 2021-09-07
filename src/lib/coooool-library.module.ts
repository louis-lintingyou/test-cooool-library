import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibCptComponent } from './lib-cpt/lib-cpt.component';
import { LibCpt3Component } from './lib-cpt3/lib-cpt3.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LibCptComponent,
    LibCpt3Component
  ],
})
export class CooooolLibraryModule {}
