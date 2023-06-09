import { Component } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  faArrowRightLong = faArrowRightLong;
  iconSize2x: SizeProp = '2x';
}
