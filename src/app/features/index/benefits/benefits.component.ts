import { Component } from '@angular/core';
import { faTruckFast, faShieldHalved, faWallet, faAward, faPercent, faCertificate} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  faTruckFast = faTruckFast;
  faShieldHalved = faShieldHalved;
  faWallet = faWallet;
  faAward = faAward;
  faPercent = faPercent;
  faCertificate = faCertificate
  iconSize3x: SizeProp = '3x';
  iconSize2x: SizeProp = '2x';
}
