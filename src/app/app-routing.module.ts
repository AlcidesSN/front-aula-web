import { ReceitaCriarComponent } from './pages/receita/receita-criar/receita-criar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosListarComponent } from './pages/medicos/medicos-listar/medicos-listar.component';
import { MedicosCriarComponent } from './pages/medicos/medicos-criar/medicos-criar.component';
import { FarmaciaListarComponent } from './pages/farmacia/farmacia-listar/farmacia-listar.component';
import { FarmaciaCriarComponent } from './pages/farmacia/farmacia-criar/farmacia-criar.component';
import { MedicamentosListarComponent } from './pages/medicamentos/medicamentos-listar/medicamentos-listar.component';
import { MedicamentosCriarComponent } from './pages/medicamentos/medicamentos-criar/medicamentos-criar.component';
import { PacientesListarComponent } from './pages/pacientes/pacientes-listar/pacientes-listar.component';
import { PacientesCriarComponent } from './pages/pacientes/pacientes-criar/pacientes-criar.component';
import { ReceitaListarComponent } from './pages/receita/receita-listar/receita-listar.component';

const routes: Routes = [
  {path:'farmacias/listar',component:FarmaciaListarComponent },
  {path:'farmacias/criar', component:FarmaciaCriarComponent},
  {path:'medicamentos/listar', component:MedicamentosListarComponent},
  {path:'medicamentos/criar',component:MedicamentosCriarComponent},
  {path:'medicos/listar',component:MedicosListarComponent},
  {path:'medicos/criar', component:MedicosCriarComponent},
  {path:'pacientes/listar',component:PacientesListarComponent},
  {path:'pacientes/criar', component:PacientesCriarComponent},
  {path:'receitas/listar',component:ReceitaListarComponent},
  {path:'receitas/criar', component:ReceitaCriarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
