import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeaderComponent } from './topo/header/header.component';
import { PlanosComponent } from './home/planos/planos.component';
import { EquipeComponent } from './home/equipe/equipe.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminGeralComponent } from './admin-geral/admin-geral.component';
import { TopoMenuComponent } from './topo-menu/topo-menu.component';
import { RodapeMenuComponent } from './rodape-menu/rodape-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    HeaderComponent,
    PlanosComponent,
    EquipeComponent,
    AdminUserComponent,
    AdminGeralComponent,
    TopoMenuComponent,
    RodapeMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
