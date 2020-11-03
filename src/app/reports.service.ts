import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  constructor(private db: AngularFirestore) {

    this.getReports()
  }

  getReports() {
    return this.db.collection('reports').get();
  }

}
