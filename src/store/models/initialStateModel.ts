export interface InitialStateModel<T> {
  loading: boolean;
  error?: any;
  data: T;
}
