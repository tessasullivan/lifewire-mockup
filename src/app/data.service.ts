import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  howTo: FirebaseListObservable<any[]>;
  fix: FirebaseListObservable<any[]>;
  doMore: FirebaseListObservable<any[]>;
  buy: FirebaseListObservable<any[]>;
  editorsPick: FirebaseListObservable<any[]>;
  editorsPickMain: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.howTo = database.list('how-to');
    this.fix = database.list('fix');
    this.buy = database.list('buy');
    this.doMore = database.list('do-more');
    this.editorsPick = database.list('editors-pick');
    this.editorsPickMain = database.list('editors-pick-main');
  }

  getHowToSection() {
    return this.howTo;
  }
  getFixSection() {
    return this.fix;
  }
  getBuySection() {
    return this.buy;
  }
  getDoMoreSection() {
    return this.doMore;
  }
  getEditorsPickSection() {
    return this.editorsPick;
  }
  getEditorsPickSectionMain() {
    return this.editorsPickMain;
  }
}
