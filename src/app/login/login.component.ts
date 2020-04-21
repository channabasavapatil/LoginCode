import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginval: boolean = false;
 error: string = "";

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  LoginApplication(form : NgForm)
  {
    console.log(form.value);
    console.log(form.value.UserName);
    console.log(form.value.Password);

    if(form.value.UserName=="Channa"&&form.value.Password=="Channa"){
      this.error="";
      this.loginval=true;
      this.router.navigate(['/homepage']);
    }
    else{
      this.loginval=false;
      this.error="Invalid Credentials";
      return;
    }
  }
}
