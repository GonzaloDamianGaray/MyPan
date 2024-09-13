import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon , IonBackButton, IonButtons, IonInputPasswordToggle, IonInput } from '@ionic/angular/standalone';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonIcon , IonBackButton, IonButtons, IonInputPasswordToggle, IonInput, ReactiveFormsModule]
})
export class RegistrarPage implements OnInit {

  FormRegister = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    contraseña: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),

  })


  constructor(
    private router: Router,
    private toastController: ToastController
  ) { 
  
  }

  async ToastRegistro(position: 'top') {
    const toast = await this.toastController.create({
      message: '¡Cuenta creada!',
      duration: 1000,
      position: position,
      color: "success",
    });
    await toast.present();
  }

  async ToastErrorRegistro(position: 'bottom') {
    const toast = await this.toastController.create({
      message: '¡Error al registrar, verifique los campos!',
      duration: 1500,
      position: position,
      color: "danger",
    });
    await toast.present();
  }


  ngOnInit() {
  }


  Registrar(){
    if (this.FormRegister.valid){
      console.log(this.FormRegister.value)
      this.router.navigate(['/login']);
      this.ToastRegistro("top")
    }else{
      this.ToastErrorRegistro("bottom")
    }
      
  }


}
