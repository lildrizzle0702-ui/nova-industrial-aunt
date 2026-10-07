export const isNonEmpty = (value: string): boolean => value.trim().length > 0;

export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export interface FieldErrors {
  [key: string]: string | undefined;
}
