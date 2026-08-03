import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, // Allow all origins for easy deployment
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 4001);
  console.log(`🚀 Jarvis Backend running on http://localhost:${process.env.PORT ?? 4001}`);
}
bootstrap();
