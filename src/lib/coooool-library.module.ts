import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibCptComponent } from './lib-cpt/lib-cpt.component';
import { LibCpt2Component } from './lib-cpt2/lib-cpt2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LibCptComponent,
    LibCpt2Component
  ],
})
export class CooooolLibraryModule {}
