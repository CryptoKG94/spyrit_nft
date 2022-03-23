
import React, { useCallback } from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import { useFetchURI, useTokenURI } from 'hooks/useNftMintCallback'
import { useActiveWeb3React } from 'hooks'
import { useNftStakeContract } from 'hooks/useContract'
import { calculateGasMargin } from 'utils'
import ReactPlayer from 'react-player'
// import { NFT_STAKE_ADDRESS } from 'constants/abis/staking-rewards'
// import Test1Img from '../../assets/nftImages/test1.png'

const StyledCard = styled(Card)`
  background: #581B7A;
  box-shadow: 0px 24px 44px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  width: 210px;
  height: 290px;
  :hover {
    cursor: pointer;
    border: 3px solid #D426FB;
    box-sizing: border-box;
    box-shadow: 0px 0px 34px rgba(212, 38, 251, 0.7);
  }
`

// const StyledImg = styled.img`
//   width: 169px;
//   height: 156px;
//   border-radius: 15px;
// `

const StyledTextName = styled.text`
  font-family: Bicubik;
  font-style: normal;
  font-weight: normal;
  color: #FFFFFF;
`

// const StyledButton = styled.button`
//   width: 90px;
//   height: 38px;
//   border: 2px solid #C824ED;;
//   box-sizing: border-box;
//   border-radius: 2px;
//   background: transparent;
//   color: white;
//   transform: skew(-20deg);
//   :hover {
//       cursor: pointer
//   }
// `

const StyledButtonUn = styled.button`
  width: 90px;
  height: 38px;
  border: 2px solid #6616AC;
  box-sizing: border-box;
  border-radius: 2px;
  background: transparent;
  color: white;
  transform: skew(-20deg);
  :hover {
    cursor: pointer
    background-image: linear-gradient(88.56deg,#6616AC -44.34%,#D426FB 77.48%);
  }
`

interface NftCardProps {
    id?: number
  }

export default function NftCardUn( {id}: NftCardProps ) {
    var nId = id? id: 1000001
    const tokenURI = useTokenURI(nId)
    var tempURI = tokenURI? tokenURI : ""
    const [imgSrc, imgName] = useFetchURI(tempURI)
    var tempImgSrc = imgSrc? imgSrc : ""
    var tempImgName = imgName? imgName : ""
    const { account } = useActiveWeb3React()
      
    const nftStakeContract = useNftStakeContract(true)

    const handleUnStake = useCallback(async (): Promise<void> => {
      if( !account ) {
        console.error('account is null')
        return
      }
  
      if (!nftStakeContract) {
        console.error('nftStakeContract is null')
        return
      }
      
      if (!nId) {
        console.error('no tokenId', nId)
        return
      }
      const estimatedGas = await nftStakeContract.estimateGas.exit(nId).catch(() => {
        // general fallback for tokens who restrict approval amounts
        return nftStakeContract.estimateGas.exit(nId)
      })
  
      return nftStakeContract
        .exit(nId, {
          gasLimit: calculateGasMargin(estimatedGas),
          gasPrice: 5000000000
        })
        .catch((error: Error) => {
          console.debug('Failed to set Fee', error)
          throw error
        })
    }, [nftStakeContract, nId])

    return(
      <div style={{marginRight: "26px", marginBottom: "26px"}}>
        <StyledCard>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "12px"}}>
              <ReactPlayer alt='mp4' url={tempImgSrc} playing={true} loop={true} width="169px" height="186px"/>
            </div>
            <div style={{display: "grid"}}>
              <StyledTextName style={{marginBottom: "4px"}}> {nId} </StyledTextName>
              <StyledTextName style={{lineHeight: "20px"}}> {tempImgName} </StyledTextName>
            </div>
        </StyledCard>
        <div style={{marginBottom: "8px"}} />
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <StyledButtonUn onClick={() => { 
                  handleUnStake() 
                  }} > Unstake 
                </StyledButtonUn>
        </div>
      </div>
    )

}

