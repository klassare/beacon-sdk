import * as sodium from 'libsodium-wrappers'
import { Storage, StorageKey, P2PTransport, P2PPairingRequest } from '..'

// const logger = new Logger('DappP2PTransport')

export class WalletP2PTransport extends P2PTransport<
  P2PPairingRequest,
  StorageKey.TRANSPORT_P2P_PEERS_WALLET
> {
  constructor(name: string, keyPair: sodium.KeyPair, storage: Storage, matrixNodes: string[]) {
    super(name, keyPair, storage, matrixNodes, StorageKey.TRANSPORT_P2P_PEERS_WALLET)
  }

  public async addPeer(newPeer: P2PPairingRequest): Promise<void> {
    await super.addPeer(newPeer)
    await this.client.sendPairingResponse(newPeer) // TODO: Should we have a confirmation here?
  }
}
