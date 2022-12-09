import { Remitly as RemitlyType } from "./types";

export const Remitly = (window as any).Remitly as RemitlyType;

// Must be kept in sync with template.html
export const rootId = 'root';
