import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestLogin } from 'src/app/models/request-login';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginServiceService: LoginServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  public getLogin(login: RequestLogin) {
    
    console.log("Conponent email: " + login.email + ", password: " + login.password)
    this.loginServiceService.getLogin(login)
      .subscribe({
        next: (res) => {
          console.log(res)
          if(res.status){
            console.log(res.user)
            localStorage.setItem('userGA', JSON.stringify(res.user))
            this.router.navigate(['logistica'], { relativeTo: this.route });
          } else {
            alert(res.info)
          }
        },
        error: (err) => console.error(err)
      });
  }


}
