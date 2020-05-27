import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SessionDetailPage } from '../session-detail/session-detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public sessions: any[];
  public keyCode: string

  constructor(
    public modalController: ModalController
  ) {

    document.addEventListener('keydown', (e: any) => {
      this.keyCode = e.code;
      console.log(e)
      if (this.keyCode === 'BrowserBack'){
        e.preventDefault();
      }
    });

    this.sessions = [
      {
        id: 1,
        createTime: 1559571158,
        startTime: 1559571158,
        classTime: 900,
        timezoneOffset: 8,
        timeRemaining: 120,
        cutoffTime: 100,
        emailThreshold: 60,
        instructor: 'Ricardo',
        className: 'HIIT Bumpbee',
        totalCalories: 123.5,
        avgCalories: 123.5,
        avgHeartRate: 87,
        leaderboard: [
          {
            nickName: 'Aaron',
            iqPoints: 12.7
          },
          {
            nickName: 'Toby',
            iqPoints: 9.7
          }
        ]
      }
    ];
  }

  async openSessionDetail(session) {
    const modal = await this.modalController.create({
      component: SessionDetailPage,
      cssClass: 'session-detail',
      componentProps: {
        session
      }
    });
    return await modal.present();
  }

}
