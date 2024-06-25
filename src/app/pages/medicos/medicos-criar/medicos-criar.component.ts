import { UsersService } from './../../../_services/users.service';
import { Component, OnInit } from '@angular/core';
import { user } from '../../../_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicos-criar',
  templateUrl: './medicos-criar.component.html',
  styleUrl: './medicos-criar.component.css'
})
export class MedicosCriarComponent implements OnInit {

  userForm:FormGroup = new FormGroup({});

  //////
  id:Number = 0;
  nome:String = '';
  crm:String = '';
  assinatura:String = '';

  //////

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
   await this.UsersService.postMedicos(this.userForm.value).subscribe();
   this.router.navigate(['/medicos/listar']);

  }
  attForm(){
    this.UsersService.putMedicos(this.userForm.value,this.id).subscribe();
    this.router.navigate(['/medicos/listar']);
  }

  getParams():void {
    this.route.queryParams.subscribe((params)=>{
      if(params['id'] != null){
        this.id = params['id'];
        this.nome = params['nome'];
        this.crm = params['crm'];
        this.assinatura = params['assinatura'];
      }

    });
  }

  initializeForm(){
    this.userForm = this.fb.group({
      nome:['',[Validators.required,Validators.maxLength(250)]],
      crm:['',[Validators.required,Validators.maxLength(250)]],
      senha:['',[Validators.required,Validators.maxLength(250)]],
      assinatura:['',[Validators.required,Validators.maxLength(250)]],

    });
  }
}
