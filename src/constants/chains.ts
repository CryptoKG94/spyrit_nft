/**
 * List of all the networks supported by the Uniswap Interface
 */
 export enum SupportedChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
  
    BSC = 56,
    BSC_TEST = 97,
  
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
  }
  
  export const CHAIN_IDS_TO_NAMES = {
    [SupportedChainId.MAINNET]: 'mainnet',
    [SupportedChainId.ROPSTEN]: 'ropsten',
    [SupportedChainId.RINKEBY]: 'rinkeby',
    [SupportedChainId.BSC]: 'binance smart chain',
    [SupportedChainId.BSC_TEST]: 'bsc_test',
    [SupportedChainId.POLYGON]: 'polygon',
    [SupportedChainId.POLYGON_MUMBAI]: 'polygon_mumbai',
  }
  
  /**
   * Array of all the supported chain IDs
   */
  export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
    (id) => typeof id === 'number'
  ) as SupportedChainId[]
  
  export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.RINKEBY,
    SupportedChainId.POLYGON,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.BSC,
    SupportedChainId.BSC_TEST
  ]
  
  /**
   * All the chain IDs that are running the Ethereum protocol.
   */
  export const L1_CHAIN_IDS = [
    SupportedChainId.MAINNET,
    SupportedChainId.ROPSTEN,
    SupportedChainId.RINKEBY,
    SupportedChainId.BSC,
    SupportedChainId.BSC_TEST,
    SupportedChainId.POLYGON,
    SupportedChainId.POLYGON_MUMBAI,
  ] as const
  
  export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]
  
  /**
   * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
   * The expectation is that all of these networks have immediate transaction confirmation.
   */
  export const L2_CHAIN_IDS = [
  ] as const
  
  export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]
  