import {
  PermissionResponse,
  PermissionRequest,
  OperationRequest,
  OperationResponse,
  SignPayloadRequest,
  SignPayloadResponse,
  BroadcastRequest,
  BroadcastResponse,
  AcknowledgeResponse,
  DisconnectMessage,
  ErrorResponse
} from '../..'

export type BeaconMessage =
  | PermissionRequest
  | PermissionResponse
  | OperationRequest
  | OperationResponse
  | SignPayloadRequest
  | SignPayloadResponse
  | BroadcastRequest
  | BroadcastResponse
  | AcknowledgeResponse
  | DisconnectMessage
  | ErrorResponse
