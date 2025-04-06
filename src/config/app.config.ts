/**
 * @Author: ask
 * @Date:  2025-04-06
 * @Description:
 */
import { registerAs } from '@nestjs/config';
import { AmLogLevel } from '@prisma/client';

export default registerAs('app', () => ({
  level: process.env.LOG_LEVEL || AmLogLevel.INFO, // warn
  // level: process.env.LOG_LEVEL ,   //  debug
  // level: process.env.LOG_LEVEL ?? 'info' ,   //  debug
}));
