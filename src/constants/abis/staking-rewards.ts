import { Interface } from '@ethersproject/abi'
import { abi as STAKING_REWARDS_ABI } from '@uniswap/liquidity-staker/build/StakingRewards.json'
import { abi as NFT_MINT_ABI } from '../abis/nftMint.json'
import { abi as NFT_STAKE_ABI } from '../abis/nftStake.json'
import { abi as STAKING_REWARDS_FACTORY_ABI } from '@uniswap/liquidity-staker/build/StakingRewardsFactory.json'
import { ChainId } from '@uniswap/sdk'

const STAKING_REWARDS_INTERFACE = new Interface(STAKING_REWARDS_ABI)
const STAKING_REWARDS_FACTORY_INTERFACE = new Interface(STAKING_REWARDS_FACTORY_ABI)

const NFT_MINT_ADDRESS : any = {
    [ChainId.MAINNET]: '0xaDb1C2203474148442dbD5FA7228e23719092bA2',
    [ChainId.RINKEBY]: '0x6cd44847bd14f03876edbc8911bb1ed9efd548b4',
    [ChainId.BSC]: '0x1d8ece425d36207ed1d8f14a1274807b572b6f41',
    [ChainId.BSC_TEST]: '0x1d8ece425d36207ed1d8f14a1274807b572b6f41',
    [ChainId.POLYGON]: '0xaDb1C2203474148442dbD5FA7228e23719092bA2',
    [ChainId.POLYGON_MUMBAI]: '0xaDb1C2203474148442dbD5FA7228e23719092bA2'
}

const NFT_MINT_INTERFACE =  new Interface(NFT_MINT_ABI)

const NFT_STAKE_ADDRESS : any = {
    [ChainId.MAINNET]: '0x2fe12661b026581800addac87f26336ce445ef31',
    [ChainId.RINKEBY]: '0x2fe12661b026581800addac87f26336ce445ef31',
    [ChainId.BSC]: '0x6469ea0a765dca9b9960511a3d4f20e3ada6bed3',
    [ChainId.BSC_TEST]: '0x6469ea0a765dca9b9960511a3d4f20e3ada6bed3',
    [ChainId.POLYGON]: '0x82FE2FF96db0E17921F19b261cdE5Db7B320Ea07',
    [ChainId.POLYGON_MUMBAI]: '0x82FE2FF96db0E17921F19b261cdE5Db7B320Ea07'
}

const NFT_STAKE_INTERFACE =  new Interface(NFT_STAKE_ABI)

export { STAKING_REWARDS_FACTORY_INTERFACE, STAKING_REWARDS_INTERFACE, NFT_MINT_ADDRESS, NFT_MINT_INTERFACE, NFT_STAKE_ADDRESS, NFT_STAKE_INTERFACE }
