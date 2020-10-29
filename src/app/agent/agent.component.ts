import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { WaterboardService } from '../waterboard.service';
import { Agent } from '../model/Agent'
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  agent: Agent = new Agent();

  // array of emplyee - type: Employee
  agents: Agent[];


  constructor(private waterboardService: WaterboardService) { }

  ngOnInit(): void {
    this.getAgents();
    console.log(this.getAgents())
  }

  getAgents() {

    this.waterboardService.getAgents().subscribe(data => {

      this.agents = data.map(e => {
        return {
          id: e.payload.doc.id,

        } as Agent;
      });
    });
  }

  addAgent(agent: Agent) {
    return this.waterboardService.addAgent(agent);
  }

  deleteAgent(agentId: string) {
    this.waterboardService.deleteAgent(agentId);
  }

}

