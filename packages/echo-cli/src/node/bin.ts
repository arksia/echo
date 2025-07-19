#!/usr/bin/env node

import { Command } from 'commander'
import { dev } from './commands/dev.js'

const program = new Command()

program
  .command('dev')
  .description('Run echo-ui development environment')
  .action(dev)

program.parse()
