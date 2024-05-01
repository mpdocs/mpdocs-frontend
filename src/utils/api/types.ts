export interface AuthTokenResponse {
  access: string;
  refresh: string;
}

export interface UserDetail {
  id: string | number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}
