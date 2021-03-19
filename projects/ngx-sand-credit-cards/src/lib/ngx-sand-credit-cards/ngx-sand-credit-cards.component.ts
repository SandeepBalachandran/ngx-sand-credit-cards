import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { providerImages } from '../enums/provider-images.enum'

@Component({
  selector: 'ngx-sand-credit-cards',
  templateUrl: './ngx-sand-credit-cards.component.html',
  styleUrls: ['./ngx-sand-credit-cards.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSandCreditCardsComponent),
      multi: true
    }
  ],

})
export class NgxSandCreditCardsComponent implements OnInit {
  selector: any = [false, false, false, false];
  clickedInside: boolean;
  showBack: any;
  name: string;
  expiry: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardNumber: any;
  providerLogo: any
  providerType: any = '1'
  cardType: any = 'DEBIT';
  cardProviders = [{
    id: 1,
    name: 'VISA'
  }, {
    id: 2,
    name: 'MASTERCARD'
  }, {
    id: 3,
    name: 'RuPay'
  }]

  /**
   * Get the card type
   */
  // @Input() public cardType = 'DEBIT';

  /**
  * Get the card type
  */
  @Input() public bankName = 'HDFZ BANK';

  /**
  * Get the card name
  */
  @Input() public cardName = 'MILLENIA';




  /**
   * Select event when user select a value from list
   */
  @Output() public valueSelect: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.changeProvider()
  }

  onClick(event) {
    this.showBack = false;
    switch (event) {
      case 0:
        this.selector = [true, false, false, false]

        return;
      case 1:
        this.selector = [false, true, false, false]
        return;
      case 2:
        this.selector = [false, false, true, false]
        return
      case 3:
        this.selector = [false, false, false, true]
        this.showBack = true;
        return
      default:
        this.selector = [false, false, false, false]
    }
  }

  changeMonth() {

  }
  changeYear() {

  }

  /*
  *
  *
  * */

  changeProvider() {
    this.showBack = false;
    switch (this.providerType) {
      case "1":
        this.providerLogo = providerImages.VISA;
        break;
      case "2":
        this.providerLogo = providerImages.MASTERCARD;
        break
      default:
        this.providerLogo = providerImages.MASTERCARD
    }
    console.log(this.providerLogo)
  }

  changeCardType(event) {
    console.log(event.target.value)
    this.cardType = event.target.value === 'credit' ? 'CREDIT' : 'DEBIT'
    console.log(this.cardType)
  }

  /**
  * click listener for host inside this component i.e
  * if many instances are there, this detects if clicked inside
  * this instance
  */
  @HostListener("click")
  public clickInsideComponent() {
    this.clickedInside = true;
  }

  @HostListener("blur", ["$event"]) public blur(event) {

  }

  @HostListener("focus", ["$event"]) public focus(event) {
    /* istanbul ignore else */

  }
  /**
   * click handler on documnent to hide the open dropdown if clicked outside
   */
  @HostListener("document:click")
  public clickOutsideComponent() {
    /* istanbul ignore else */
    if (!this.clickedInside) {
      this.selector = [false, false, false, false]
      this.showBack = false;
    }
    this.clickedInside = false;
  }

}
