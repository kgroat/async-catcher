
import * as Express from 'express'

declare const AsyncCatcher: AsyncCatcher.Catcher

declare namespace AsyncCatcher {
  export interface AsyncRequestHandler {
    (req: Express.Request, res: Express.Response, next: Express.NextFunction): Promise<any>
  }

  export interface Catcher {
    (originalFunction: AsyncRequestHandler, handler?: Express.ErrorRequestHandler): Express.RequestHandler
  }
}

export = AsyncCatcher
