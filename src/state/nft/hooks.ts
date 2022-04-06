import { useActiveWeb3React } from '../../hooks'
import { useMultipleContractSingleData, useSingleContractMultipleData } from '../multicall/hooks'
import { NFT_MINT_INTERFACE } from 'constants/abis/staking-rewards'
import { useEffect, useMemo, useState } from 'react'
import { useNftMintContract } from 'hooks/useContract'
// import { NFT_MINT_ADDRESS } from 'constants/abis/staking-rewards'


export function useNftMintInfo(): {
  mintPrice?: any
  whiteListed?: any
  nftBalance?: any
  mintPaused?: any
  maxIds?: any
} {
  const { account } = useActiveWeb3React()
  const [mintPrice, setPrice] = useState(0)
  const [whiteListed, setWhiteListed] = useState(false)
  const [nftBalance, setNftBalance] = useState(0)
  const [mintPaused, setMintPaused] = useState(false)
  const [maxIds, setMaxID] = useState(0)
  const accountArg = useMemo(() => [account ?? undefined], [account])

  const nftMintContract = useNftMintContract()
  useEffect(() => {
    async function fetchData() {
      const resPrice = await nftMintContract?.cost()
      const resWhiteListed = await nftMintContract?.whiteListed(account)
      const resNftBalance = await nftMintContract?.tokenIdsBalance(account)
      const resMintPaused = await nftMintContract?.mintActive()
      const resMaxid = await nftMintContract?.MAX_ID()
      // const 
      // console.log('debug fetch price', contractAIN)
      setPrice(resPrice)
      setWhiteListed(resWhiteListed);
      setNftBalance(resNftBalance);
      setMintPaused(resMintPaused);
      setMaxID(resMaxid);
    }
    fetchData()
  })

  // const nftMintContract = [NFT_MINT_ADDRESS]

  // const mintPrice = useMultipleContractSingleData(nftMintContract, NFT_MINT_INTERFACE, 'cost')
  // const whiteListed = useMultipleContractSingleData(nftMintContract, NFT_MINT_INTERFACE, 'whiteListed', accountArg)
  // const nftBalance = useMultipleContractSingleData(nftMintContract, NFT_MINT_INTERFACE, 'tokenIdsBalance', accountArg)
  // const mintPaused = useMultipleContractSingleData(nftMintContract, NFT_MINT_INTERFACE, 'mintActive')
  // const maxIds = useMultipleContractSingleData(nftMintContract, NFT_MINT_INTERFACE, 'MAX_ID')
  return {
    mintPrice,
    whiteListed,
    nftBalance,
    mintPaused,
    maxIds,
  }
}

export const useTokenIds = (balance: any) => {
  
  const { account } = useActiveWeb3React()
  const nftMintContract = useNftMintContract()
  const [mintIds, setmintIds] = useState<any>([]);
  const indexes: any = []

  // useEffect(() => {
  //   async function fetchData() {
  //     for (let i = 0; i < balance; i ++) {
  //       let res = await nftMintContract?.tokenIds(account, i);
  //       indexes[i] = res;
  //     }
  //     if (indexes.length > 0)
  //       setmintIds(indexes);
  //   }

  //   fetchData();
  // })

  // return mintIds;
  for(let k=0; k < balance; k++) {
    indexes[k] = k;
  }
  const results = useSingleContractMultipleData(
    nftMintContract,
    'tokenIds',
    indexes.map((index: any) => [account, index])
  )
  
  return results
}

// export const useTokenIds = (balance: any) => {
  
//   const { account } = useActiveWeb3React()
//   const nftMintContract = useNftMintContract()

//   let k = 0
//   const indexes = []
//   for(k=0; k < balance; k++) {
//     indexes[k] = k;
//   }
//   const results = useSingleContractMultipleData(
//     nftMintContract,
//     'tokenOfOwnerByIndex',
//     indexes.map((index: any) => [account, index])
//   )
  
//   return results
// }
