import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service'
import { Report } from '../model/report';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reports: any;
  reportArray = [];

  //displayedColumns: string[] = ['CO2', 'note', 'PH', 'Latitude'];
  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.getReports();
  }


  getReports() {
    this.reportsService.getReports().subscribe((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
        this.reportArray.push(doc.data())
      })

      console.log(this.reportArray)
    });
  }

}
