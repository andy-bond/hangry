import { Choice } from './choice';

export interface Decision {
  id: string;
  header: string;
  choices: Choice[];
}
