export interface Result {
  id: string;
  created: string;
  device: number | string;
  user: string;
  results: Array<{
    parameter: string;
    value: number;
  }>;
}
