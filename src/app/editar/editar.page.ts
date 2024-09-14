import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonChip , IonBackButton, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonChip, IonButton, IonIcon , IonBackButton, IonButtons, ReactiveFormsModule]
})
export class EditarPage implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  volver(){
    this.location.back();
  }

}
