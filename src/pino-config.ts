import { randomUUID } from 'crypto';
import pino from 'pino';

const levelToSeverity: Record<string, string> = {
  trace: 'DEBUG',
  debug: 'DEBUG',
  info: 'INFO',
  warn: 'WARNING',
  error: 'ERROR',
  fatal: 'CRITICAL',
};

export function gcpLogOptions(config?: pino.LoggerOptions): pino.LoggerOptions {
  return {
    formatters: {
      level(label: string) {
        const severity = levelToSeverity[label] ?? 'INFO';
        const logObject: any = { severity };

        const pinoLevel = label as pino.Level;
        if (pinoLevel === 'error' || pinoLevel === 'fatal') {
          logObject['@type'] =
            'type.googleapis.com/google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent';
        }
        return logObject;
      },

      log(object: any) {
        const logObject: any = {
          insertId: randomUUID(),
        };

        if (object?.error?.stack) {
          logObject.stack_trace = logObject.error.stack;
        }

        if (object?.err?.stack) {
          logObject.stack_trace = logObject.err.stack;
        }

        return logObject;
      },
    },
    messageKey: 'message',
    ...config,
  };
}
