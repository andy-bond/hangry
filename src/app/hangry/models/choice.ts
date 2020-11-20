import { Action } from './action';

export interface Choice {
  text: string;
  icon?: string;
  value: string;
  action: Action;
  selected?: boolean;
}
