import * as pkg from '../index';

describe('index', () => {
  it('should export all methods', () => {
    expect(pkg).toMatchInlineSnapshot(`
      {
        "PubSubHandlerResponse": [Function],
        "PubSubMessage": {
          "properties": {
            "attributes": {
              "additionalProperties": false,
              "patternProperties": {
                "^(.*)$": {
                  "type": "string",
                  Symbol(TypeBox.Kind): "String",
                },
              },
              "type": "object",
              Symbol(TypeBox.Modifier): "Optional",
              Symbol(TypeBox.Kind): "Record",
            },
            "data": {
              "type": "string",
              Symbol(TypeBox.Kind): "String",
            },
            "messageId": {
              "type": "string",
              Symbol(TypeBox.Modifier): "Optional",
              Symbol(TypeBox.Kind): "String",
            },
          },
          "required": [
            "data",
          ],
          "type": "object",
          Symbol(TypeBox.Kind): "Object",
        },
        "PubSubRequest": {
          "properties": {
            "message": {
              "properties": {
                "attributes": {
                  "additionalProperties": false,
                  "patternProperties": {
                    "^(.*)$": {
                      "type": "string",
                      Symbol(TypeBox.Kind): "String",
                    },
                  },
                  "type": "object",
                  Symbol(TypeBox.Modifier): "Optional",
                  Symbol(TypeBox.Kind): "Record",
                },
                "data": {
                  "type": "string",
                  Symbol(TypeBox.Kind): "String",
                },
                "messageId": {
                  "type": "string",
                  Symbol(TypeBox.Modifier): "Optional",
                  Symbol(TypeBox.Kind): "String",
                },
              },
              "required": [
                "data",
              ],
              "type": "object",
              Symbol(TypeBox.Kind): "Object",
            },
            "subscription": {
              "type": "string",
              Symbol(TypeBox.Kind): "String",
            },
          },
          "required": [
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
