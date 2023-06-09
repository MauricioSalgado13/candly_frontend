import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input() url_image: string | undefined;
  @Input() name: string | undefined;
  @Input() stars: string | undefined;
  @Input() price: object | undefined;

}
