import { Component, OnInit } from '@angular/core';

import { RequestRegisterWorker } from '../../../models/request/request-register-worker';

import { RegisterWorkerService } from '../../../services/register-worker.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit{

  public isError: boolean = false;
  public hintNameError: boolean = false;
  public hintEmailError: boolean = false;
  public hintPasswordError: boolean = false;
  public hintConfirmError: boolean = false;

  private timeout: number = 4000;

  public confirmPassword: string = ""
  public confirmHint: string = "Campo Inválido!"

  public cleanRegister: RequestRegisterWorker = 
  {
    name: "",
    email: "",
    password: "",
    role: 0
  }

  public register: RequestRegisterWorker = this.cleanRegister;

  constructor(private service: RegisterWorkerService) {}
  
  ngOnInit(): void {
  }

  public registerWorkers() {

    console.log(this.register)

    if(this.register.name.trim() === "" ) {
      this.hintNameError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintNameError = false;
      }, this.timeout);
    }

    if(this.register.email.trim() === "" ) {
      this.hintEmailError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintEmailError = false;
      }, this.timeout);
    }

    if(this.register.password.trim() === "" ) {
      this.hintPasswordError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintPasswordError = false;
      }, this.timeout);
    }

    if(this.confirmPassword.trim() === "" || this.confirmPassword != this.register.password) {
      if(this.confirmPassword != this.register.password) {
        this.confirmHint = "Senha não Confere!"
      }
      this.hintConfirmError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintConfirmError = false;
        this.confirmHint = "Campo Inválido!"
      }, this.timeout);
    }

    if( !this.isError ) {
      this.isError = false;
      console.log(this.register)

      this.service.SyncRegisterWorker(this.register).subscribe(
        {
          next: (res) => {
            console.log(res)
            alert(res.info)
            if(res.status){
              this.register = this.cleanRegister;
            } 
          },
          error: (err) => console.error(err)
        }
      )

    }

  }
}
