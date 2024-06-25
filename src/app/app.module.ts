import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_components/footer/footer.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FarmaciaCriarComponent } from './pages/farmacia/farmacia-criar/farmacia-criar.component';
import { FarmaciaListarComponent } from './pages/farmacia/farmacia-listar/farmacia-listar.component';
import { MedicamentosListarComponent } from './pages/medicamentos/medicamentos-listar/medicamentos-listar.component';
import { MedicamentosCriarComponent } from './pages/medicamentos/medicamentos-criar/medicamentos-criar.component';
import { MedicosCriarComponent } from './pages/medicos/medicos-criar/medicos-criar.component';
import { PacientesListarComponent } from './pages/pacientes/pacientes-listar/pacientes-listar.component';
import { PacientesCriarComponent } from './pages/pacientes/pacientes-criar/pacientes-criar.component';
import { ReceitaCriarComponent } from './pages/receita/receita-criar/receita-criar.component';
import { ReceitaListarComponent } from './pages/receita/receita-listar/receita-listar.component';
import { MedicosListarComponent } from './pages/medicos/medicos-listar/medicos-listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FarmaciaCriarComponent,
    FarmaciaListarComponent,
    MedicamentosListarComponent,
    MedicamentosCriarComponent,
    MedicosCriarComponent,
    PacientesListarComponent,
    PacientesCriarComponent,
    ReceitaCriarComponent,
    ReceitaListarComponent,
    MedicosListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
