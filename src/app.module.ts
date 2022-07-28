import { Module } from '@cordwork/core';
import { PingCommand } from './controllers/ping.command';

@Module({
  commands: [PingCommand],
})
export class App {

}
