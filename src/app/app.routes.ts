import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' }, 
                                { path: 'login', component: LoginComponent },
                                {path: 'produto', component: ProdutoComponent},
                                {path: 'cliente', component: ClienteComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]         
})
export class AppRoutingModule { }