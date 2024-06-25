import { ActivatedRoute, Router } from '@angular/router';
import { medico, paciente, farmacias, medicamentos, receitas } from './../../../_models/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../_services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-receita-criar',
  templateUrl: './receita-criar.component.html',
  styleUrl: './receita-criar.component.css'
})
export class ReceitaCriarComponent implements OnInit{
  userForm:FormGroup = new FormGroup({});

  pacientes:paciente[]|undefined;
  medicos:medico[]|undefined;
  farmacias:farmacias[]|undefined;
  medicamentos:medicamentos[]|undefined;
  receitas:receitas[]|undefined;

  ////////
  id:Number = 0;
  id_paciente:String = '';
  id_medico:String = '';
  id_farmacia:String = '';


  ngOnInit(): void {
    this.initializeForm();
    this.getPacientes();
    this.getMedicos();
    this.getMedicamentos();
    this.getFarmacia();
    this.getParams();
  }



  constructor(
    private UsersService: UsersService,
    private fb: FormBuilder,
    private router:Router,
    private route:ActivatedRoute){}

  async subumitForm(){
    console.log(this.userForm.value);
    await this.UsersService.postReceitas(this.userForm.value).subscribe();
    this.router.navigate(['/receitas/listar']);
  }
  attForm(){
    this.UsersService.putPacientes(this.userForm.value,this.id).subscribe();
    this.router.navigate(['/receitas/listar']);
  }
  getParams():void {
    this.route.queryParams.subscribe((params)=>{
      if(params['id'] != null){
        this.id = params['id'];
        this.id_paciente = params['id_paciente'];
        this.id_medico = params['id_medico'];
        this.id_farmacia = params['id_farmacia'];
      }

    });

  }

  getPacientes(){
    this.UsersService.getPacientes().subscribe((Response: any)=> {
      this.pacientes = Response;
    });
  }
  getMedicos(){
    this.UsersService.getMedicos().subscribe((response:any)=>{
      this.medicos = response;
    });
  }
  getMedicamentos(){
    this.UsersService.getMedicamentos().subscribe((response:any)=>{
      this.medicamentos = response;
    });
  }

  getFarmacia(){
    this.UsersService.getFarmacias().subscribe((response:any)=>{
      this.farmacias = response;
    });
  }
  initializeForm(){
    this.userForm = this.fb.group({
      paciente:['',[Validators.required,]],
      medico:['',[Validators.required,]],
      medicamentos:['',[Validators.required,]],
      farmacia:['',[Validators.required,]],
      data:['',[Validators.required,]],

    });
  }
  ////////////

}
