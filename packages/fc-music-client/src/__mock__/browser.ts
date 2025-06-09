import { setupWorker } from "msw/browser";
import { hanlders } from "./handlers";

export const worker = setupWorker(...hanlders);
