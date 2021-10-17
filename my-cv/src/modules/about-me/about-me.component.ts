import { Component, OnInit } from '@angular/core';
import { User } from 'src/dto/user/user';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  get userInitials(): string {
    return this.userInfo.firstName && this.userInfo.lastName ? this.userInfo.firstName[0] + this.userInfo.lastName[0] : '';
  }

  userInfo: User = 
		{
			firstName: 'Ioremimpsum',
      lastName: 'Loremimpsum',
      position: 'Lorem Impsum Dev',
      city: 'Lorem',
      contact: {
        mobile: '+48 500-000-000',
        email: 'lorem@gmail.com',
      },
      descriptions: {
        goals: 'Loremimpsum libero eros.',
        about: 'Curabitur ut libero eros. Aenean vel eros eu est rhoncus gravida. Integer vitae sapien euismod, bibendum odio non, semper nunc.',
        educationInfo: 'Curabitur ut libero eros. Aenean vel eros eu est rhoncus gravida. Integer vitae sapien euismod, bibendum odio non, semper nunc. Donec pretium nibh vel dictum tincidunt. Curabitur nec ultricies lacus. Mauris eget odio odio',
        learningInfo: 'Donec pretium nibh vel dictum tincidunt. Curabitur nec ultricies lacus. Mauris eget odio odio',
      },
      links: {
        github: 'Loremimpsum',
        linkedin: 'Loremimpsum',
      },
		};
	

  constructor() { }

  ngOnInit(): void {
  }

}
