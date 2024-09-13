import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule ]
})
export class LoginPage implements OnInit {

  FormNuevo = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    contraseña: new FormControl('',[Validators.required]),
  })


  constructor(
    private router: Router,
    private toastController: ToastController
    
  ) {
    
    // this.FormNuevo.setValue({nombre: 'prueba', contraseña: 'xd'});
    // this.FormNuevo.patchValue({nombre:'hola'})

   }

  async ToastIngreso(position: 'top') {
    const toast = await this.toastController.create({
      message: '¡Bienvenido!',
      duration: 1000,
      position: position,
      color: "success",
    });
    await toast.present();
  }

  async ToastErrorIngreso(position: 'bottom') {
    const toast = await this.toastController.create({
      message: '¡Credenciales Invalidadas, verifique lo ingresado!',
      duration: 1500,
      position: position,
      color: "danger",
    });
    await toast.present();
  }




  OnSubmit(){
    console.log(this.FormNuevo.value)
  }


  navigateToLogin() {
    
    this.router.navigate(['/tabs/tab1']);
  }

  navigateToRegistrar() {
    this.router.navigate(['/registrar/registrar']);
  }
  
  Loguear(){
    const nombre =this.FormNuevo.get('nombre')?.value
    const contraseña =this.FormNuevo.get('contraseña')?.value

    if (nombre == "gonzalo" && contraseña =="garay"){
      this.router.navigate(['/tabs/tab1']);
      this.ToastIngreso("top")
    } else{
      this.ToastErrorIngreso("bottom")
    }

  }


  ngOnInit() {
  }

}
