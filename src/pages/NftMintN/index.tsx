import React from 'react'
// import { Text } from 'rebass'
// import { ButtonConfirmed, ButtonLight } from '../../components/Button'
import { RowBetween } from '../../components/Row'
// import { BottomGrouping, Wrapper } from '../../components/swap/styleds'
import styled from 'styled-components'
import Card from 'components/Card'
// import { UNI } from '../../constants'
// import { useActiveWeb3React } from '../../hooks'
// import useUSDCPrice from '../../utils/useUSDCPrice'
// import { useActiveWeb3React } from '../../hooks'
// import { useWalletModalToggle } from '../../state/application/hooks'
import { TYPE } from '../../theme'
// import AppBody from '../AppBody'
import { useNftMintInfo } from 'state/nft/hooks'
import NftMintCard from './nftMintCard'
// import { useNftGetRewardCallback, useReward, useRewardRate, useStakedTokenIds, useStakeTotalSupply, useTotalEarn } from 'hooks/useNftMintCallback'

const StyledTextCard = styled.text`
  font-family: Bicubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 40px;
  color: #FFFFFF;
`

const Wrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  margin-left: 0px;
`};
`

const StyleddivNFT = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 350px;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: repeat(3, 1fr);
    margin-left: 270px;
  `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 100px;
  `};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    align-items: center;
    display: flex;
    flex-direction: column;
  `};
`

const InfoWrapper = styled.div`
  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: flex;
    justify-content: center;
  `};
`


const StyledCardInfo = styled(Card)`
  height: 242px;
  width: 240px
  background: linear-gradient(83.13deg, rgba(88, 27, 122, 0.5) 26.7%, rgba(31, 3, 34, 0) 74.76%);
  border-radius: 20px;
  padding: 23px 0px 26px 29px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    height: 272px
    padding: 23px 5px 26px 10px;
    width: auto;
  `};

`


export default function NftMintNew() {

  const {
    mintPrice,
    whiteListed,
    nftBalance,
    // mintPaused,
    maxIds,
  } = useNftMintInfo()


  const mintPrice_result = parseInt(((mintPrice?.[0])?.result)?.[0]._hex, 16)
  const nftBalance_result = parseInt(((nftBalance?.[0])?.result)?.[0]._hex, 16)
  // const maxMintAmount_result=parseInt(((maxMintAmount?.[0])?.result)?.[0]._hex,16)
  // const totalSupply_result=parseInt(((totalSupply?.[0])?.result)?.[0]._hex,16)
  const maxSupply_result = parseInt(((maxIds?.[0])?.result)?.[0]._hex, 16)

  const whiteListed_result = ((whiteListed?.[0])?.result)?.[0]
  // const mintPaused_result = ((mintPaused?.[0])?.result)?.[0]

  // toggle wallet when disconnected

  // const tokenIds = useTokenIds(nftBalance_result)

  let indexes = []
  for (let k = 1; k <= maxSupply_result; k++) {
    indexes.push(k);
  }

  return (
    <Wrapper>
      <StyleddivNFT>
        {indexes.map((index) => {
          return (
            <NftMintCard
              id={index}
              key={index}
            />
          )
        })
        }
      </StyleddivNFT>
      <InfoWrapper>
        <StyledCardInfo>
          <StyledTextCard> MINTING INFO </StyledTextCard>
          <RowBetween style={{ lineHeight: "20px", marginBottom: "20px" }}>
            <TYPE.black fontSize={14} color="rgba(255, 255, 255, 0.7)">White Listed</TYPE.black> {whiteListed_result ? 'Yes' : 'No'}
          </RowBetween >
          <RowBetween style={{ lineHeight: "20px", marginBottom: "20px" }}>
            <TYPE.black fontSize={14} color="rgba(255, 255, 255, 0.7)">Balance</TYPE.black> {nftBalance_result ? nftBalance_result : '0'} {'SPYR'}
          </RowBetween >
          <RowBetween style={{ lineHeight: "20px", marginBottom: "20px" }}>
            <TYPE.black fontSize={14} color="rgba(255, 255, 255, 0.7)"> Mint Price</TYPE.black> {mintPrice_result ? mintPrice_result / 10 ** 18 : '0'} {'MATIC'}
          </RowBetween>

        </StyledCardInfo>
      </InfoWrapper>
    </Wrapper>
  )
}
