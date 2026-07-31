import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(): {
        commands: {
            value: number;
            change: number;
            trend: string;
        };
        emailsHandled: {
            value: number;
            change: number;
            trend: string;
        };
        socialReach: {
            value: number;
            change: number;
            trend: string;
        };
        aiUptime: {
            value: number;
            change: number;
            trend: string;
        };
    };
    getActivity(): {
        name: string;
        commands: number;
    }[];
    getTaskDistribution(): {
        name: string;
        value: number;
    }[];
}
