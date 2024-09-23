import { Routes, RouterModule } from '@angular/router';
import { TelaComponent } from './tela/tela.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' }, 
                                { path: 'login', component: LoginComponent },
                                {path: 'tela', component: TelaComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]         
})
export class AppRoutingModule { }