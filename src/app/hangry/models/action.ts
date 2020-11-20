import { Decision } from './decision';

export interface Action {
  type: string;
  value: Decision | string;
}
