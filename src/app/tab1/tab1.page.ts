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

  makeEntryKey(name: string): string {
    return name.toString().toLowerCase().replace(/\s/g, '');
  }

  async addBingoEntry(data): Promise<boolean> {
    let entrykey : string = this.makeEntryKey(data.nombre);
    let newEntry = {[entrykey]: data};
    try{
      let res = await fetch('https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/bingo', {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          "content-type": "application/json;charset=UTF-8",
        },
        method: 'put',
        body: JSON.stringify({entries:newEntry}),
      });
      console.log(res);
      return true;
    } catch(err){
      console.log(err);
      return false;
    }
  }

  async onSubmit(){
    console.log(this.bingoForm.value);
    let was_added = await this.addBingoEntry(this.bingoForm.value);
    if(was_added){
      alert("GG WP IZI");
    } else {
      alert("algo salió mal D:");
    }
  }
}
