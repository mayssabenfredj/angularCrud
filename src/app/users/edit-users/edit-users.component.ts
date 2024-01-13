import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent {
  @ViewChild('f') userForm!: NgForm;

  constructor( private activatedRoute : ActivatedRoute,
    private service : UserService,
    private router : Router){}

    user ?: User

    editUser= (f : NgForm)=>{
      const editUser = {
        name : f.value.name,
        email : f.value.email,
        password : f.value.password
       }
      this.service.editUsers(new User (this.user!.id , editUser.name! , editUser.email! , editUser.password!)).subscribe(
        user => this.router.navigate(['/users'])
      );
    }
  
  
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        params=>{
          this.service.getUserById(+params['id']).subscribe(
            user=> {
              this.user = user;
  
             this.userForm.form.setValue({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
        });
            }
          )
        }
      )
  
    }
}
