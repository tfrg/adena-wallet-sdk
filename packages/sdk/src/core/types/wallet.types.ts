export interface WalletState {
  address: string | null;
  connected: boolean;
}

export type WalletEvent = 'connect' | 'disconnect';

export type WalletListener = (state: WalletState) => void;

export interface WalletResponse<D> {
  code: number;
  status: WalletResponseStatus;
  type: WalletResponseType;
  message: string;
  data: D | null;
}

export enum WalletResponseStatus {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export type WalletResponseType = WalletResponseSuccessType | WalletResponseFailedType | WalletResponseRejectedType;

export enum WalletResponseSuccessType {
  CONNECTION_SUCCESS = 'CONNECTION_SUCCESS',
  GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS',
  SIGN_SUCCESS = 'SIGN_SUCCESS',
  ADD_NETWORK_SUCCESS = 'ADD_NETWORK_SUCCESS',
  SWITCH_NETWORK_SUCCESS = 'SWITCH_NETWORK_SUCCESS',
  TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS',
}

export enum WalletResponseFailedType {
  NOT_CONNECTED = 'NOT_CONNECTED',
  UNRESOLVED_TRANSACTION_EXISTS = 'UNRESOLVED_TRANSACTION_EXISTS',
  INVALID_FORMAT = 'INVALID_FORMAT',
  WALLET_LOCKED = 'WALLET_LOCKED',
  ACCOUNT_MISMATCH = 'ACCOUNT_MISMATCH',
  NO_ACCOUNT = 'NO_ACCOUNT',
  TRANSACTION_FAILED = 'TRANSACTION_FAILED',
  SIGN_FAILED = 'SIGN_FAILED',
  ALREADY_CONNECTED = 'ALREADY_CONNECTED',
  NETWORK_TIMEOUT = 'NETWORK_TIMEOUT',
  REDUNDANT_CHANGE_REQUEST = 'REDUNDANT_CHANGE_REQUEST',
  NETWORK_ALREADY_EXISTS = 'NETWORK_ALREADY_EXISTS',
  UNADDED_NETWORK = 'UNADDED_NETWORK',
  UNSUPPORTED_TYPE = 'UNSUPPORTED_TYPE',
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
}

export enum WalletResponseRejectedType {
  TRANSACTION_REJECTED = 'TRANSACTION_REJECTED',
  SIGN_REJECTED = 'SIGN_REJECTED',
  CONNECTION_REJECTED = 'CONNECTION_REJECTED',
  SWITCH_NETWORK_REJECTED = 'SWITCH_NETWORK_REJECTED',
  ADD_NETWORK_REJECTED = 'ADD_NETWORK_REJECTED',
}
