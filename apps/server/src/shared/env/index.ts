import { ConfigModule } from '@nestjs/config';

export enum Environment {
  LOCAL = 'local',
  DEV = 'development',
  PROD = 'production',
  TEST = 'test',
}

ConfigModule.forRoot({
  envFilePath: '.env',
});

export default class Env {
  static get port(): number {
    const port = this.getEnvOrDefault('PORT', '3030');

    return Number(port);
  }

  static get environment(): Environment {
    const env = this.getEnvOrDefault('NODE_ENV', Environment.LOCAL);

    return Environment[env.toUpperCase() as keyof typeof Environment];
  }

  static get duckDuckGoApiUrl(): string {
    return this.getEnvOrThrow('DUCK_DUCK_GO_API_URL');
  }

  private static getEnvOrThrow(envName: string): string {
    const env = process.env[envName];
    if (!env) {
      throw new Error(`Missing environment variable ${envName}`);
    }

    return env;
  }

  private static getEnvOrDefault(
    envName: string,
    defaultValue: string,
  ): string {
    return process.env[envName] ?? defaultValue;
  }
}
