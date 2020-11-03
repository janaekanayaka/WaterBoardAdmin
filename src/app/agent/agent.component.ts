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


  }

  addAgent(agent: Agent) {
    return this.waterboardService.addAgent(agent);
  }

  deleteAgent(agentId: string) {
    this.waterboardService.deleteAgent(agentId);
  }

}

