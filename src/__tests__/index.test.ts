import * as pkg from '../index';

describe('index', () => {
  it('should export all methods', () => {
    expect(pkg).toMatchInlineSnapshot(`
      Object {
        "PubSubHandlerResponse": [Function],
        "PubSubMessage": Object {
          "properties": Object {
            "attributes": Object {
              "additionalProperties": false,
              "patternProperties": Object {
                "^.*$": Object {
                  "type": "string",
                  Symbol(TypeBox.Kind): "String",
                },
              },
              "type": "object",
              Symbol(TypeBox.Modifier): "Optional",
              Symbol(TypeBox.Kind): "Record",
            },
            "data": Object {
              "type": "string",
              Symbol(TypeBox.Kind): "String",
            },
            "messageId": Object {
              "type": "string",
              Symbol(TypeBox.Modifier): "Optional",
              Symbol(TypeBox.Kind): "String",
            },
          },
          "required": Array [
            "data",
          ],
          "type": "object",
          Symbol(TypeBox.Kind): "Object",
        },
        "PubSubRequest": Object {
          "properties": Object {
            "message": Object {
              "properties": Object {
                "attributes": Object {
                  "additionalProperties": false,
                  "patternProperties": Object {
                    "^.*$": Object {
                      "type": "string",
                      Symbol(TypeBox.Kind): "String",
                    },
                  },
                  "type": "object",
                  Symbol(TypeBox.Modifier): "Optional",
                  Symbol(TypeBox.Kind): "Record",
                },
                "data": Object {
                  "type": "string",
                  Symbol(TypeBox.Kind): "String",
                },
                "messageId": Object {
                  "type": "string",
                  Symbol(TypeBox.Modifier): "Optional",
                  Symbol(TypeBox.Kind): "String",
                },
              },
              "required": Array [
                "data",
              ],
              "type": "object",
              Symbol(TypeBox.Kind): "Object",
            },
            "subscription": Object {
              "type": "string",
              Symbol(TypeBox.Kind): "String",
            },
          },
          "required": Array [
            "message",
            "subscription",
          ],
          "type": "object",
          Symbol(TypeBox.Kind): "Object",
        },
        "createPubSubCloudFunctions": [Function],
        "createPubSubServer": [Function],
        "handlePubSubMessage": [Function],
        "makePubSubConfig": [Function],
        "pubSubFastifyPlugin": [Function],
      }
    `);
  });
});
