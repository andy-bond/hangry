import { Option } from './option';

export interface Decision {
  id: string;
  header: string;
  options: Option[];
}
