import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, RouterModule ]
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  async Toast(position: 'top') {
    const toast = await this.toastController.create({
      message: '¡Bienvenido!',
      duration: 1000,
      position: position,
      color: "success",
    });
    await toast.present();
  }

  navigateToLogin() {
    console.log('Navigating to /tabs/tab1');
    this.router.navigate(['/tabs/tab1']);
  }

  navigateToRegistrar() {
    console.log('Navigating to /registrar/registrar');
    this.router.navigate(['/registrar/registrar']);
  }
  
  ngOnInit() {
  }

}
