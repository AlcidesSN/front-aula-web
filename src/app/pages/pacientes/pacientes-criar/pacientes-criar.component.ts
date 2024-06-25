import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../_services/users.service';

@Component({
  selector: 'app-pacientes-criar',
  templateUrl: './pacientes-criar.component.html',
  styleUrl: './pacientes-criar.component.css'
})
export class PacientesCriarComponent implements OnInit {

  userForm:FormGroup = new FormGroup({});

  /////
  id:Number = 0;
  name:String = '';
  cpf:String = '';
  birth:Date = new Date();

  /////

  constructor(
    private fb: FormBuilder,
    private UsersService:UsersService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.initializeForm();
    this.getParams();
  }
  async subumitForm(){
   await this.UsersService.postPacientes(this.userForm.value).subscribe();
   this.router.navigate(['/pacientes/listar']);
  }

attForm(){
  this.UsersService.putPacientes(this.userForm.value,this.id).subscribe();
  this.router.navigate(['/pacientes/listar']);
}

getParams():void {
  this.route.queryParams.subscribe((params)=>{
    if(params['id'] != null){
      this.id = params['id'];
      this.name = params['name'];
      this.cpf = params['cpf'];
      this.birth = params['birth'];
    }

  });

}


  initializeForm(){
    this.userForm = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(250)]],
      cpf:['',[Validators.required,Validators.maxLength(250)]],
      birth:['',[Validators.required]],
    });
  }
}
