export declare class DashboardService {
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
    getWeeklyActivity(): {
        name: string;
        commands: number;
    }[];
    getTaskDistribution(): {
        name: string;
        value: number;
    }[];
}
