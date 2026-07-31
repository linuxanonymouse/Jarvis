import { VoiceService } from './voice.service';
export declare class VoiceController {
    private readonly voiceService;
    constructor(voiceService: VoiceService);
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
    processCommand(body: {
        command: string;
    }): {
        received: string;
        interpreted: string;
        confidence: number;
        timestamp: string;
        status: string;
    };
}
