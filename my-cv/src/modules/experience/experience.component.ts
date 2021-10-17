import { Component, OnInit } from '@angular/core';
import { Work } from 'src/dto/experience/work';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  companyList: Work[] = [
		{
			id: 1,
			company: {
        name:'Amazon',
        period: { dateStart: new Date(), dateEnd: new Date()},
        currentlyWorking: true,
      },
      project: [
        {
        section: 'Banking',
        description: 'Curabitur at nunc orci. Nunc tempus orci lacus, et porta odio elementum et. Pellentesque sed nunc quis metus sagittis lacinia. Phasellus ut lobortis ligula. Nam non ex id nulla pretium suscipit. Vivamus egestas eu velit id luctus. Aenean lacinia maximus sem',
        technolgies: ['C#','Java','HTML','JS','SQL','Scala','Bootstrap'],
        period: { dateStart: new Date(), dateEnd: new Date()},
      },
      {
        section: 'Banking',
        description: 'Curabitur at nunc orci. Nunc tempus orci lacus, et porta odio elementum et. Pellentesque sed nunc quis metus sagittis lacinia. Phasellus ut lobortis ligula. Nam non ex id nulla pretium suscipit. Vivamus egestas eu velit id luctus. Aenean lacinia maximus sem',
        technolgies: ['C#','Java','HTML','jQuery','SCSS'],
        period: { dateStart: new Date(), dateEnd: new Date()},
      }
    ]
		},
	];
  constructor() { }

  ngOnInit(): void {
  }
}
