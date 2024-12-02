import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProdutoComponent]
})
export class ProdutoModule { }