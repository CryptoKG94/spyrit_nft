import { Interface } from '@ethersproject/abi'
import { abi as STAKING_REWARDS_ABI } from '@uniswap/liquidity-staker/build/StakingRewards.json'
import NFT_MINT_ABI from '../abis/nftMint.json'
import NFT_STAKE_ABI from '../abis/nftStake.json'
import { abi as STAKING_REWARDS_FACTORY_ABI } from '@uniswap/liquidity-staker/build/StakingRewardsFactory.json'

const STAKING_REWARDS_INTERFACE = new Interface(STAKING_REWARDS_ABI)
const STAKING_REWARDS_FACTORY_INTERFACE = new Interface(STAKING_REWARDS_FACTORY_ABI)

const NFT_MINT_ADDRESS = '0xaDb1C2203474148442dbD5FA7228e23719092bA2'
const NFT_MINT_INTERFACE =  new Interface(NFT_MINT_ABI)

const NFT_STAKE_ADDRESS = '0x82FE2FF96db0E17921F19b261cdE5Db7B320Ea07'
const NFT_STAKE_INTERFACE =  new Interface(NFT_STAKE_ABI)

export { STAKING_REWARDS_FACTORY_INTERFACE, STAKING_REWARDS_INTERFACE, NFT_MINT_ADDRESS, NFT_MINT_INTERFACE, NFT_STAKE_ADDRESS, NFT_STAKE_INTERFACE }
