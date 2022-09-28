import { Static, Type } from '@sinclair/typebox';
import { FastifyBaseLogger, FastifyLoggerInstance } from 'fastify';
import pino from 'pino';

export interface PubSubConfig<Data, Context> {
  /**
   * Handler
   */
  handler: PubSubHandler<Data, Context>;
  /**
   * OnError Handler
   *
   * When this is set, errors will not be
   * thrown.
   */
  onError?: OnErrorHandler<Context>;

  parser?: (data: unknown) => Data | Promise<Data>;
  /**
   * This will run JSON.parse on request data
   *
   * **Tip**: `false` when sending strings
   * @default true
   */
  parseJson?: boolean; // Defaults to true

  /**
   * Use this to set a different path
   * @default /
   */
  path?: string;
}

export const PubSubMessage = Type.Object({
  attributes: Type.Optional(Type.Record(Type.String(), Type.String())),
  data: Type.String(),
  messageId: Type.Optional(Type.String()),
});

export type PubSubMessageType = Static<typeof PubSubMessage>;

export const PubSubRequest = Type.Object({
  message: PubSubMessage,
  subscription: Type.String(),
});

export type PubSubRequestType = Static<typeof PubSubRequest>;

export class PubSubHandlerResponse {
  statusCode?: number;
}

export type PubSubHandler<Data, Context> = (args: {
  message: PubSubMessageType;
  data: Data;
  context?: Context;
  log: FastifyLoggerInstance;
}) => Promise<PubSubHandlerResponse | void> | PubSubHandlerResponse | void;

export type OnErrorHandler<Context> = (
  error: unknown,
  context: Context,
) => void | Promise<void>;

export interface HandlePubSubMessageArgs<Data, Context> {
  message: PubSubMessageType;
  handler: PubSubHandler<Data, Context>;
  parseJson?: boolean;
  parser?: (data: unknown) => Data | Promise<Data>;
  context: Context;
  log?: pino.Logger | FastifyBaseLogger;
}
