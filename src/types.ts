import { Static, Type } from '@fastify/type-provider-typebox';

/**
 * PubSub Message Type
 *
 * This describes the message object that is sent to the handler
 * from Google PubSub.
 */
export const pubSubMessageSchema = Type.Object({
  attributes: Type.Optional(Type.Record(Type.String(), Type.String())),
  data: Type.String(),
  messageId: Type.Optional(Type.String()),
});

export type PubSubMessage = Static<typeof pubSubMessageSchema>;

/**
 * PubSub Request Type
 *
 * This describes the request object that is sent to the handler
 * from Google PubSub.
 */
export const pubSubRequestSchema = Type.Object({
  message: pubSubMessageSchema,
  subscription: Type.String(),
});

export type PubSubRequest = Static<typeof pubSubRequestSchema>;

export type OnErrorHandler<Context> = (
  error: unknown,
  context: Context,
) => void | Promise<void>;

export class PubSubHandlerResponse {
  statusCode?: number;
}

export type PubSubHandler<Data, Context, Logger> = (args: {
  message: PubSubMessage;
  data: Data;
  context: Context;
  log: Logger;
}) => Promise<PubSubHandlerResponse | void> | PubSubHandlerResponse | void;

export interface PubSubConfig<Data, Context> {
  /**
   * OnError Handler
   *
   * When this is set, errors will not be
   * thrown.
   */
  onError?: OnErrorHandler<Context>;

  parser?: (data: unknown) => Data | Promise<Data>;

  context?: () => Context | Promise<Context>;

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
