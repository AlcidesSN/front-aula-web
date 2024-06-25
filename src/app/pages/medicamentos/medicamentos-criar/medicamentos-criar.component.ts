import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../_services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicamentos-criar',
  templateUrl: './medicamentos-criar.component.html',
  styleUrl: './medicamentos-criar.component.css'
})
export class MedicamentosCriarComponent implements OnInit {

  userForm:FormGroup = new FormGroup({});

  /////
  id:Number = 0;
  nome:String = '';
  quantidade:String = '';
  dosagem:String = '';
  viaAdm:String = '';
  obs:String = '';

  ////


  constructor(
    private fb: FormBuilder,
    private UsersService:UsersService,
    private router:Router,
    private route:ActivatedRoute ){}

  ngOnInit(): void {
    this.initializeForm();
    this.getParams();
  }
  async subumitForm(){
   await this.UsersService.postMedicamentos(this.userForm.value).subscribe();
   this.router.navigate(['/medicamentos/listar']);
  }
  attForm(){
    this.UsersService.putMedicamentos(this.userForm.value,this.id).subscribe();
    this.router.navigate(['/medicamentos/listar']);
  }
  getParams():void {
    this.route.queryParams.subscribe((params)=>{
      if(params['id'] != null){
        this.id = params['id'];
        this.nome = params['nome'];
        this.quantidade = params['quantidade'];
        this.dosagem = params['dosagem'];
        this.viaAdm = params['viaAdm'];
        this.obs = params['obs']
      }

    });
  }


  initializeForm(){
    this.userForm = this.fb.group({
      nome:['',[Validators.required,Validators.maxLength(250)]],
      dosagem:['',[Validators.required,Validators.max(250)]],
      quantidade:['',[Validators.required,Validators.max(250)]],
      viaAdm:['',[Validators.required,Validators.maxLength(250)]],
      obs:['',[Validators.required,Validators.maxLength(250)]],

    });
  }
}
