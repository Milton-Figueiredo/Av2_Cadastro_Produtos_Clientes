import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: string;
  name: string;
  description: string;
  purchasePrice: number;
  salePrice: number;
  stock: number;
  brand: string;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  products: Product[] = [];
  newProduct: Product = { id: '', name: '', description: '', purchasePrice: 0, salePrice: 0, stock: 0, brand: "" };
  editing: boolean = false;

  constructor(private router: Router) {
    this.loadProductsFromStorage();
  }

  onSaveProduct() {
    if (this.editing) {
      // Encontrar o índice do produto a ser editado
      const index = this.products.findIndex(product => product.id === this.newProduct.id);
      if (index !== -1) {
        this.products[index] = { ...this.newProduct };
      }
      this.editing = false; // Sair do modo de edição
    } else {
      // Adicionar um novo produto
      this.newProduct.id = this.generateUniqueId();
      this.products.push(this.newProduct);
    }

    this.saveProductsToStorage();
    this.clearNewProduct();
  }

  onEditProduct(product: Product) {
    this.newProduct = { ...product }; // Copiar os dados do produto selecionado
    this.editing = true; // Entrar no modo de edição
  }

  onDeleteProduct(index: number) {
    this.products.splice(index, 1);
    this.saveProductsToStorage();
  }

  private generateUniqueId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private saveProductsToStorage() {
    sessionStorage.setItem('products', JSON.stringify(this.products));
  }

  private loadProductsFromStorage() {
    const productsJson = sessionStorage.getItem('products');
    if (productsJson) {
      this.products = JSON.parse(productsJson);
    }
  }

  private clearNewProduct() {
    this.newProduct = { id: '', name: '', description: '', purchasePrice: 0, salePrice: 0, stock: 0, brand: "" };
  }

  irParaCliente() {
    this.router.navigate(['/cliente']);
  }
}
