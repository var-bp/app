export interface FetchError {
  status: number;
  message: string;
}

export interface AuthState {
  isFetching: boolean;
  data: null | object;
  error: null | FetchError;
}

export interface State {
  auth: AuthState;
}
