export interface User {
  id: string;
  username: string;
  roles: string[];
  region: string;
  created: string;
  lastupdated: string;
  device: string;
  password?: string;
  authdata?: string;
}
