import {Component, OnInit} from '@angular/core';
import {TaxItem} from '../../custom-types';

@Component({
  selector: 'app-interest-accumulator',
  templateUrl: './interest-accumulator.component.html',
  styleUrls: ['./interest-accumulator.component.css']
})
export class InterestAccumulatorComponent implements OnInit {

  taxValue = 0;

  taxList: number[] = [
    20, 30, 40, 50, 30
  ];

  taxItens: TaxItem[] = [];
  numberOfFees = 0;
  taxAccumulator = 1;

  ngOnInit(): void {
    this.generateTableValues(this.taxList);
    console.log(this.taxItens);
  }

  addTax() {
    this.taxList.push(this.taxValue);
    this.taxValue = 0;
    this.generateTableValues(this.taxList);
  }

  generateTableValues(taxList: number[]) {
    let count = 1;
    this.taxAccumulator = 1;
    this.taxItens = [];

    taxList.forEach(element => {
      const decimalValue = 1 + element / 100.0;
      this.taxAccumulator *= decimalValue;
      this.taxItens.push({position: count++, taxValue: element, accumulatedTax: this.taxAccumulator});
    });

    this.numberOfFees = taxList.length;
  }

  removeTax(taxValue: number, index: number) {
    if (taxValue && index) {
      this.taxList.splice(index, taxValue)
      this.generateTableValues(this.taxList);
      alert(`${taxValue} has been removed.`);
    }
  }
}
