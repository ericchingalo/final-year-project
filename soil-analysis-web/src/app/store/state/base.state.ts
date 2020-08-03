export interface BaseState {
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  adding: boolean;
  added: boolean;
  updating: boolean;
  updated: boolean;
  deleting: boolean;
  deleted: boolean;
  error: string;
}

export const initialBaseState: BaseState = {
  loading: true,
  loaded: false,
  updated: false,
  updating: false,
  deleted: false,
  deleting: false,
  added: false,
  adding: false,
  hasError: false,
  error: null,
};

export const loadingBaseState: BaseState = {
  ...initialBaseState,
  loading: true,
};

export const loadedBaseState: BaseState = {
  ...loadingBaseState,
  loaded: true,
  loading: false,
};

export const updatingBaseState: BaseState = {
  ...initialBaseState,
  updating: true,
  updated: false,
};

export const updatedBaseState: BaseState = {
  ...initialBaseState,
  updated: true,
  updating: false,
};

export const addingBaseState: BaseState = {
  ...initialBaseState,
  adding: true,
  added: false,
};

export const addedBaseState: BaseState = {
  ...initialBaseState,
  added: true,
  adding: false,
};

export const deletingBaseState: BaseState = {
  ...initialBaseState,
  deleting: true,
  deleted: false,
};

export const deletedBaseState: BaseState = {
  ...initialBaseState,
  deleted: true,
  deleting: false,
};

export const errorBaseState: BaseState = {
  ...initialBaseState,
  hasError: true,
};
