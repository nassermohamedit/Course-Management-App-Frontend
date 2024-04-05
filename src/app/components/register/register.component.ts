import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule]
})

export class RegisterComponent {
  
  registerForm: FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(7),]),
    });
  }
  //Get Form Controls
  public control(name: string) {
    return this.registerForm.get(name);
  }
  //Submit Form
  public onSubmit() {
    this.userService.registerUser(this.registerForm.value).subscribe({
      next: (res: any) => {
        //response
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/list-course']);
      },
      error: (error) => {
        // handle error
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

}



