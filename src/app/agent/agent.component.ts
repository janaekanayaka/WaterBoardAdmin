import { Component, OnInit } from '@angular/core';
import { WaterboardService } from '../waterboard.service';
import { Agent } from '../model/Agent'
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  agent: Agent = new Agent();
  agents= [];
  reports = []
  _temp_one_post: any | undefined;


  constructor(private waterboardService: WaterboardService) { }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents() {

    this.waterboardService.getAgents().subscribe((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
        this.agents.push(doc.data())
       
      })

     
    });

  }

  viewReports(agentId){
    console.log(agentId)
    this.waterboardService.viewReports(agentId).subscribe((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
        this.reports.push(doc.data())
       
      })

     
    });
    try{
      this._temp_one_post = undefined
      delete this._temp_one_post
      console.log(this._temp_one_post)
    }catch(e){
      console.log(e)
    }

    this._temp_one_post = this.reports;


  }

  addAgent(agent: Agent) {
    this.waterboardService.addAgent(agent)
    this.agents = []

    this.getAgents();
    // window.location.reload();

  }

  deleteAgent(agentId: string) {
    this.waterboardService.deleteAgent(agentId);
    // window.location.reload();
  }

}

