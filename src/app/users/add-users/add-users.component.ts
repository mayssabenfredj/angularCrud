import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  constructor(private service : UserService,
    private router : Router){}

    addUser = (f : NgForm)=>{
      const newUser = {
        name : f.value.name,
        email : f.value.email,
        password : f.value.password
       }
      this.service.addUser(newUser).subscribe(
        user => this.router.navigate(['/users'])
      );
  
  
    }

}
