import { calculateResistorValue as crv } from './core.ts';
import toast from "./toast.js";

export function calculateResistorValue(value) {
  return crv(value);
}

export function createToast() {
  return toast.createToast();
}

