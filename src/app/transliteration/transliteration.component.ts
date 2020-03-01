import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transliteration',
  templateUrl: './transliteration.component.html',
  styleUrls: ['./transliteration.component.scss']
})
export class TransliterationComponent implements OnInit {

  inputIndex: number; // 0 => Lotin; 1 => Kirill
  outputIndex: number; 

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.inputIndex = this.route.snapshot.data.input;
    this.outputIndex = this.route.snapshot.data.output;
  }


  /**
   * Both Input and Output changes
   */
  public inputSwitch(index: number) {
    this.outputIndex = this.inputIndex;
    this.inputIndex = index;

    console.log('Input: ', index);
  }

}
