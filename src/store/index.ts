import { OperationType, User } from "./type";

type Action = { type: "OWNER_LOGIN"; payload: { user: User; token: string } };
