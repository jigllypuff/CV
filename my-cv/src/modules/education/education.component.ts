import { Component, OnInit } from '@angular/core';
import { Univeristy } from 'src/dto/education/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  univeristyList: Univeristy[] = [
		{
			id: 1,
			name: 'Warszawska Wyższa Szkoła Informatyki w Warszawie',
      specialization: 'Inżynieria Internetu',
      period: { dateStart: new Date(), dateEnd: new Date()},
      graduationTitle: 'Inżynier',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use',
		},
		{
      id: 2,
			name: 'Uczelnia Warszawska Imienia Marii Skłodowskiej-Curie',
      specialization: "Systemy Informacji Przestrzennej",
      period: { dateStart: new Date(), dateEnd: new Date()},
      graduationTitle: 'Inżynier',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use',
		},
	];
  constructor() { }

  ngOnInit(): void {
  }
}
