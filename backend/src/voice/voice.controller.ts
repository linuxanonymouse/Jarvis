import { Controller, Get, Post, Body } from '@nestjs/common';
import { VoiceService } from './voice.service';

@Controller('api/voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @Get('status')
  getStatus() {
    return this.voiceService.getStatus();
  }

  @Post('command')
  processCommand(@Body() body: { command: string }) {
    return this.voiceService.processCommand(body.command);
  }
}
