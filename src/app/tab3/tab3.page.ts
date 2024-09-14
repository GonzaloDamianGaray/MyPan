import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonChip , IonBackButton, IonButton, IonButtons, IonIcon, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonAvatar, IonLabel, IonChip, IonButton, IonIcon , IonBackButton, IonButtons, IonInputPasswordToggle],
})
export class Tab3Page {
  constructor(
    private location: Location,
    private router: Router,
    private toastController: ToastController


  ) {}

  async ToastSession(position: 'top') {
    const toast = await this.toastController.create({
      message: '¡Sesion Cerrada!',
      duration: 1000,
      position: position,
      color: "warning",
    });
    await toast.present();
  }


  volver(){
    this.location.back();
  }

  CerrarSesion( ){
  this.router.navigate(['/login']);
  this.ToastSession("top")
}

Editar(){
  this.router.navigate(['/editar']);
}
}
