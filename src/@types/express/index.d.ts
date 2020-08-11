// eslint-disable-next-line
import { User } from "core/entities/User";

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
