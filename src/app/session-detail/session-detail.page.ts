import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})
export class SessionDetailPage implements OnInit {
  @Input() session: any;

  public activeMembers: number;
  public displayRow = 1;
  public classMembers: any[];

  public blockHeight: number;
  public blockWidth: number;
  public paddingLeft: number;

  constructor(
    public modalCtrl: ModalController
  ) {
    this.classMembers = [
      {
        id: 1,
        sessionId: 1,
        memberId: 'ce32b520-817d-4c4d-9023-957dd00f55ad',
        firstName: 'Toby',
        lastName: 'Bu',
        nickName: 'Aaron',
        email: 'i@sourbell.im',
        workoutStartTime: 1559540145,
        classDuration: 780,
        maxHr: 187,
        avgHr: 110,
        highHr: 180,
        zone: [182, 32, 32, 33, 21],
        zonePercent: [61, 11, 11, 11, 7],
        calories: 41.3,
        iqPoints: 12.7,
        zonePercentSettings: [0, 60, 70, 80, 90],
        zonePointsSettings: [1, 2, 3, 4, 5],
        heartRate: 76,
        heartRatePercent: 61
      },
      {
        id: 2,
        sessionId: 2,
        memberId: 'ce32b520-817d-4c4d-9023-957dd00f55ad',
        firstName: 'Toby',
        lastName: 'Bu',
        nickName: 'Toby',
        email: 'i@sourbell.im',
        workoutStartTime: 1559540145,
        classDuration: 780,
        maxHr: 187,
        avgHr: 110,
        highHr: 180,
        zone: [182, 32, 32, 33, 21],
        zonePercent: [61, 11, 11, 11, 7],
        calories: 29.1,
        iqPoints: 9.7,
        zonePercentSettings: [0, 60, 70, 80, 90],
        zonePointsSettings: [1, 2, 3, 4, 5],
        heartRate: 82,
        heartRatePercent: 73
      }
    ];

    this.activeMembers = this.classMembers.length;
    this.displayRow = Math.ceil(Math.sqrt(this.activeMembers));

    if (this.activeMembers > 6) {
      const height = window.outerHeight;
      const width = window.outerWidth;
      const blockRatio = 0.86 * height > 0.555 * width ? 1 : (0.86 * height) / (0.555 * width);
      this.blockHeight = width * 0.555 * blockRatio / this.displayRow;
      this.blockWidth = width * 0.75 * blockRatio / this.displayRow;
      this.paddingLeft = (width * 0.75 - this.blockWidth * this.displayRow ) / 2;
    }
  }

  ngOnInit() {
    console.log(this.session);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
