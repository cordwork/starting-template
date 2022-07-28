import { Module } from '@cordwork/core';
import { PingCommand } from './commands/ping.command';

@Module({
  commands: [PingCommand],
})
export class App {

}
