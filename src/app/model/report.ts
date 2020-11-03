export class Report {
    AgentID: string;
    co2: number;
    note: string;
    pH: number;
    reportDate: string;
    reportID: string;
    sampleLocation: {
        latitude: number;
        longitude: number;
    };
    status: string;
    temperature: number;
    turbidity: number;
}