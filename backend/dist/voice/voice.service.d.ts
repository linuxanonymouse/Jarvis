export declare class VoiceService {
    getStatus(): {
        status: string;
        mode: string;
        latency: string;
        uptime: string;
        lastCommand: {
            text: string;
            timestamp: string;
            result: string;
        };
    };
    processCommand(command: string): {
        received: string;
        interpreted: string;
        confidence: number;
        timestamp: string;
        status: string;
    };
}
