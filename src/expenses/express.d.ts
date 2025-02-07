// src/types/express.d.ts
import { User } from '../user/userTypes';

declare global {
  namespace Express {
    // Now every Request has an optional user property of type User.
    interface Request {
      user?: User;
    }
  }
}

// Export an empty object to make this file a module.
export {};
