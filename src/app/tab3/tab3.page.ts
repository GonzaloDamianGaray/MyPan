import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonLabel, IonChip , IonBackButton, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonAvatar, IonLabel, IonChip, IonButton, IonIcon , IonBackButton, IonButtons],
})
export class Tab3Page {
  constructor(private location: Location) {}

  volver(){
    this.location.back();
  }

}
