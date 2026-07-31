import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getStats() {
    return {
      commands: { value: 1247, change: 12.5, trend: 'up' },
      emailsHandled: { value: 832, change: 8.3, trend: 'up' },
      socialReach: { value: 24500, change: 15.2, trend: 'up' },
      aiUptime: { value: 99.97, change: -0.01, trend: 'down' },
    };
  }

  getWeeklyActivity() {
    return [
      { name: 'Mon', commands: 40 },
      { name: 'Tue', commands: 30 },
      { name: 'Wed', commands: 20 },
      { name: 'Thu', commands: 27 },
      { name: 'Fri', commands: 18 },
      { name: 'Sat', commands: 23 },
      { name: 'Sun', commands: 34 },
    ];
  }

  getTaskDistribution() {
    return [
      { name: 'System Optimization', value: 400 },
      { name: 'Email Processing', value: 300 },
      { name: 'Social Monitoring', value: 300 },
      { name: 'Security Scans', value: 200 },
    ];
  }
}
