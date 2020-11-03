import { Component, OnInit } from '@angular/core';
import { WaterboardService } from '../waterboard.service'
import { Agent } from '../model/Agent'
@Component({
  selector: 'app-agent-delete',
  templateUrl: './agent-delete.component.html',
  styleUrls: ['./agent-delete.component.scss']
})
export class AgentDeleteComponent implements OnInit {


  agentArray = [];
  // agent: Agent = new Agent();
  // agents: Agent[];

  constructor(private waterboardService: WaterboardService) { }

  ngOnInit(): void {
    this.getAgent();
  }
  deleteAgent(agentId: string) {
    console.log("agent delete works")
    this.waterboardService.deleteAgent(agentId);
  }

  // getAgents() {

  //   this.waterboardService.getAgents().subscribe(data => {

  //     this.agents = data.map(e => {
  //       return {
  //         id: e.payload.doc.id,

  //       } as Agent;
  //     });
  //   });
  // }
  getAgent() {
    this.waterboardService.getAgent().subscribe((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
        this.agentArray.push(doc.data())

      })

      console.log(this.agentArray)
    });
  }


}
