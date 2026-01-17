import { generateUUID as gu } from './core.ts';
import toast from "./toast.js";

export function generateUUID() {
  return gu();
}

export function createToast() {
  return toast.createToast();
}

