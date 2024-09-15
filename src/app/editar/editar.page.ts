import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonChip , IonBackButton, IonButton, IonButtons, IonIcon, IonItem } from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonChip, IonButton, IonIcon , IonBackButton, IonButtons, ReactiveFormsModule, FormsModule, IonItem]
})
export class EditarPage implements OnInit {


  FormEdit = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    edad: new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
  })


  constructor(
    private location: Location,
    private toastController: ToastController,
    private router: Router,


  ) { }

  ngOnInit() {
  }

  async Toasteditar(position: 'top') {
    const toast = await this.toastController.create({
      message: '¡Editado con exito!',
      duration: 1000,
      position: position,
      color: "success",
    });
    await toast.present();
  }

  async ToasteditarError(position: 'bottom') {
    const toast = await this.toastController.create({
      message: '¡Error al editar, verifique los campos!',
      duration: 1000,
      position: position,
      color: "danger",
    });
    await toast.present();
  }


  volver(){
    this.location.back();
  }



  Editar() {
     this.router.navigate(['/tabs/tab3']);
     this.Toasteditar("top")
  }
}
