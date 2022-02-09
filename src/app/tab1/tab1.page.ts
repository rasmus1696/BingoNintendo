import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  private bingoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.bingoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(10)]],
      opcion1: [false],
      opcion2: [false],
      opcion3: [false],
      opcion4: [false],
      opcion5: [false],
      opcion6: [false],
      opcion7: [false],
      opcion8: [false],
      opcion9: [false],
      opcion10: [false],
      opcion11: [false],
      opcion12: [false],
      opcion13: [false],
      opcion14: [false],
      opcion15: [false],
      opcion16: [false],
      opcion17: [false],
      opcion18: [false],
      opcion19: [false],
      opcion20: [false],
      opcion21: [false],
      opcion22: [false],
      opcion23: [false],
      opcion24: [false],
      opcion25: [false],
    });
  }

  onSubmit(){
    console.log(this.bingoForm.value)
  }
}
