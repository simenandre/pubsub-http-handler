# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [4.5.1](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.5.0...v4.5.1) (2022-09-28)


### Bug Fixes

* revert bump @sinclair/typebox from 0.24.28 to 0.24.43 ([#182](https://www.github.com/cobraz/pubsub-http-handler/issues/182)) ([ee35c8d](https://www.github.com/cobraz/pubsub-http-handler/commit/ee35c8dea80b83b037f98365b6fc923b7d24590c))

## [4.5.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.4.1...v4.5.0) (2022-09-28)


### Features

* always provide `context` argument ([#178](https://www.github.com/cobraz/pubsub-http-handler/issues/178)) ([3fcb9e5](https://www.github.com/cobraz/pubsub-http-handler/commit/3fcb9e53c543860184841f2c354fbe96718724af))

### [4.4.1](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.4.0...v4.4.1) (2022-09-03)


### Bug Fixes

* parsing not working on fastify-plugin ([194aced](https://www.github.com/cobraz/pubsub-http-handler/commit/194aceda0e3a298d36173ed16ed3565efe269bec))

## [4.4.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.3.0...v4.4.0) (2022-08-27)


### Features

* add `makePubSubConfig` to help with type inference ([#155](https://www.github.com/cobraz/pubsub-http-handler/issues/155)) ([00d086a](https://www.github.com/cobraz/pubsub-http-handler/commit/00d086aeb4483e0300fa42bef5249c04bf81bd4a))


### Bug Fixes

* add `FastifyBaseLogger` to supported loggers in handlePubSubMessage ([cc755b2](https://www.github.com/cobraz/pubsub-http-handler/commit/cc755b296af0116de47ddb1ba8fadf19f16db677))

## [4.3.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.2.0...v4.3.0) (2022-08-26)


### Features

* Add `parser` ([#142](https://www.github.com/cobraz/pubsub-http-handler/issues/142)) ([59b90c7](https://www.github.com/cobraz/pubsub-http-handler/commit/59b90c70a80e408af279bc8046eddbf33e02b9a3))

## [4.2.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.1.0...v4.2.0) (2022-06-30)


### Features

* upgrade TypeBox plugin ([#95](https://www.github.com/cobraz/pubsub-http-handler/issues/95)) ([dee85d6](https://www.github.com/cobraz/pubsub-http-handler/commit/dee85d629efbccd29ecc2bb1ae47ba6235b83c8e))


### Bug Fixes

* use pino-cloud-logging ([b7b8fa5](https://www.github.com/cobraz/pubsub-http-handler/commit/b7b8fa559414b550836f8274e2340954ee91b763))

## [4.1.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.0.0...v4.1.0) (2022-06-13)


### Features

* make log optional for handlePubSubMessage ([f05b28a](https://www.github.com/cobraz/pubsub-http-handler/commit/f05b28ad1b42d3c541f66f332f3cbca7a34127fb))

## [4.1.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v4.0.0...v4.1.0) (2022-06-13)


### Features

* make log optional for handlePubSubMessage ([f05b28a](https://www.github.com/cobraz/pubsub-http-handler/commit/f05b28ad1b42d3c541f66f332f3cbca7a34127fb))

### [3.0.1](https://www.github.com/cobraz/pubsub-http-handler/compare/v3.0.0...v3.0.1) (2021-12-01)


### Bug Fixes

* update typebox ([#54](https://www.github.com/cobraz/pubsub-http-handler/issues/54)) ([b1d0a8e](https://www.github.com/cobraz/pubsub-http-handler/commit/b1d0a8ecf482deb8ebbf22b291541a277f148c1e))

## [3.0.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v2.1.2...v3.0.0) (2021-11-02)


### ⚠ BREAKING CHANGES

* `context` returns Fastify's request variable instead of body object.

### Features

* Add Fastify request to context ([#51](https://www.github.com/cobraz/pubsub-http-handler/issues/51)) ([343ad79](https://www.github.com/cobraz/pubsub-http-handler/commit/343ad794d17fb25f7965236e60f7428227ba0737))

### [2.1.2](https://www.github.com/cobraz/pubsub-http-handler/compare/v2.1.1...v2.1.2) (2021-09-07)


### Bug Fixes

* `attributes` should not be required. ([#31](https://www.github.com/cobraz/pubsub-http-handler/issues/31)) ([34fbcd6](https://www.github.com/cobraz/pubsub-http-handler/commit/34fbcd6049c3b4dfead0d61f4153272e7aef6b3d))

### [2.1.1](https://www.github.com/cobraz/pubsub-http-handler/compare/v2.1.0...v2.1.1) (2021-09-06)


### Bug Fixes

* change engine to node@14.x ([#24](https://www.github.com/cobraz/pubsub-http-handler/issues/24)) ([5e07e0f](https://www.github.com/cobraz/pubsub-http-handler/commit/5e07e0f94d52611389826ea2ad3a09829c56bff4))

## [2.1.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v2.0.1...v2.1.0) (2021-09-05)


### Features

* Add `onError` handle ([#18](https://www.github.com/cobraz/pubsub-http-handler/issues/18)) ([b765f8d](https://www.github.com/cobraz/pubsub-http-handler/commit/b765f8ddf5a18daca736185e93600d2a9a7b0bfd))
* Add improvements to [#18](https://www.github.com/cobraz/pubsub-http-handler/issues/18) ([edac0cb](https://www.github.com/cobraz/pubsub-http-handler/commit/edac0cb34b9b6785839ba74c43887fe7861a9d42))

### [2.0.1](https://www.github.com/cobraz/pubsub-http-handler/compare/v2.0.0...v2.0.1) (2021-08-31)


### Bug Fixes

* include express declarations for Cloud Functions users ([04a69f5](https://www.github.com/cobraz/pubsub-http-handler/commit/04a69f56cd52e2da0cdac7b28a02a1867e4c4c9c))

## [2.0.0](https://www.github.com/cobraz/pubsub-http-handler/compare/v1.0.2...v2.0.0) (2021-08-29)


### ⚠ BREAKING CHANGES

* Add support for Google Cloud Functions and fastify-plugin (#9)

### Features

* Add support for Google Cloud Functions and fastify-plugin ([#9](https://www.github.com/cobraz/pubsub-http-handler/issues/9)) ([18b1d32](https://www.github.com/cobraz/pubsub-http-handler/commit/18b1d32906f4973e9b64e04b877faaeecefe4192))

## [1.0.2](https://github.com/cobraz/pubsub-http-handler/compare/v1.0.1...v1.0.2) (2020-12-27)


### Bug Fixes

* Remove unused import ([6ab76db](https://github.com/cobraz/pubsub-http-handler/commit/6ab76db12782b68b69c8495bed112fb663622817))

## [1.0.1](https://github.com/cobraz/pubsub-handler/compare/v1.0.0...v1.0.1) (2020-12-27)


### Bug Fixes

* Smaller package size and corrected main ref ([b9f6b4d](https://github.com/cobraz/pubsub-handler/commit/b9f6b4de365d61b43607fd125cc239368259cedc))

# 1.0.0 (2020-12-27)


### Features

* Initial release ([7342e1a](https://github.com/cobraz/pubsub-handler/commit/7342e1af82aba8a7bc22c5fb5f09556fa4ad68b2))
