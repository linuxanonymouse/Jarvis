"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
let DashboardService = class DashboardService {
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
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)()
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map