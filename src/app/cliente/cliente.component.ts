import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Client {
  id: string;
  name: string;
  cpf: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clients: Client[] = [];
  newClient: Client = { id: '', name: '', cpf: '', address: '', phone: '' };

  constructor(private router: Router) {
    this.loadClientsFromStorage();
  }

  onSaveClient() {
    if (this.newClient.id) {
      // Atualizar cliente existente
      const index = this.clients.findIndex(client => client.id === this.newClient.id);
      if (index !== -1) {
        this.clients[index] = { ...this.newClient };
      }
    } else {
      // Criar novo cliente
      this.newClient.id = this.generateUniqueId();
      this.clients.push({ ...this.newClient });
    }
    this.saveClientsToStorage();
    this.clearNewClient();
  }

  onEditClient(client: Client) {
    this.newClient = { ...client }; // Clonar cliente selecionado
  }

  onDeleteClient(index: number) {
    this.clients.splice(index, 1); // Remover cliente
    this.saveClientsToStorage();
  }

  irParaProduto() {
    this.router.navigate(['/produto']); // Navegar para a rota de produtos
  }

  private generateUniqueId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private saveClientsToStorage() {
    sessionStorage.setItem('clients', JSON.stringify(this.clients)); // Salvar no storage
  }

  private loadClientsFromStorage() {
    const clientsJson = sessionStorage.getItem('clients');
    if (clientsJson) {
      this.clients = JSON.parse(clientsJson); // Carregar do storage
    }
  }

  private clearNewClient() {
    this.newClient = { id: '', name: '', cpf: '', address: '', phone: '' }; // Limpar cliente
  }
}
