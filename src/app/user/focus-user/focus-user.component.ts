import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-focus-user',
  templateUrl: './focus-user.component.html'
})
export class FocusUserComponent implements OnInit{

  users: User[]|any;
  user: User|any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers;
    const userId: string|null = this.route.snapshot.paramMap.get('id');
    if(userId) {
      this.userService.getUserById(+userId)
      .subscribe(user => this.user = user);
    }
  }

}
