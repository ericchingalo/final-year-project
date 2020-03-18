export interface Result {
  id: number;
  created: string;
  device: number;
  user: string;
  results: Array<{
    parameter: string;
    value: number;
  }>;
}
