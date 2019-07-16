import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConstruirComponent } from './construir/construir.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'construir', component: ConstruirComponent },
    { path: 'documentacion', component: DocumentacionComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
