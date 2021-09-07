import { Static, Type } from '@sinclair/typebox';

export interface PubSubConfig {
  /**
   * Handler
   */
  handler: PubSubHandler;
  /**
   * OnError Handler
   *
   * When this is set, errors will not be
   * thrown.
   */
  onError?: OnErrorHandler;
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
  attributes: Type.Optional(Type.Dict(Type.String())),
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

export type PubSubHandler<T = any> = (args: {
  message: PubSubMessageType;
  data?: T;
  context?: unknown;
}) => Promise<PubSubHandlerResponse | void> | PubSubHandlerResponse | void;

export type OnErrorHandler = (error: unknown) => void | Promise<void>;
