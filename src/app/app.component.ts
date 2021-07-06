import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(CardsComponent) cards?: CardsComponent;

  count = 4;

  form: FormGroup = this.fb.group({
    count: [this.count, [Validators.required, Validators.min(1), Validators.max(100)]]
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form.get('count')?.valueChanges.subscribe(count => {
      if (this.cards) {
        this.count = count;
        this.cards.render(this.count);
      }
    });
  }
}
