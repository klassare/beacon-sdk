import { PeerInfo } from './PeerInfo'

export interface P2PPairingResponse extends PeerInfo {
  id: string
  type: 'p2p-pairing-response'
  name: string
  publicKey: string
  relayServer: string
  icon?: string // TODO: Should this be a URL or base64 image?
  appUrl?: string
}

export type ExtendedP2PPairingResponse = P2PPairingResponse & {
  senderId: string
}
// TODO: Rename to "WalletPeerInfo"?
