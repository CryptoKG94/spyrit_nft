import React, { Suspense, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import AddressClaimModal from '../components/claim/AddressClaimModal'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import URLWarning from '../components/Header/URLWarning'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { ApplicationModal } from '../state/application/actions'
import { useModalOpen, useToggleModal } from '../state/application/hooks'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Earn from './Earn'
import Manage from './Earn/Manage'
// import MigrateV1 from './MigrateV1'
// import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import Stake from './stake'
import Presale from './Presale'
// import NftMint from './NftMint'
import NftMintNew from './NftMintN'
import NftStake from './NftStake'
//import nft_stake from './Nft-stake'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
// import Mint from './Mint'
// import Redeem from './Redeem'
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
// import Vote from './Vote'
// import VotePage from './Vote/VotePage'
// import Bank from './Bank'
import BigNumber from 'bignumber.js'
import SideMenu from 'components/SideBar'


BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, rgb(163, 71, 255) 0%, rgb(224, 135, 255), rgb(163, 71, 255) 100%);
  border-image-slice: 1;
`

// const FooterWrapper = styled.div`
//   ${({ theme }) => theme.flexRowNoWrap}
//   width: 100%;
//   margin-top: 0px;
// `

// #A347FF 0%, ##E087FF 100% 64.1% #A347FF 0%
  // border-bottom: double;
  // border-color: #D700FF;
  
const HeaderWrapperSide = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  justify-content: space-around;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`


// function reducer(state, item) {
//   return [...state, item]
// }

function TopLevelModals() {
  const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
  const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}


export default function App() {
  // const [toggle, setToggle] = useReducer(reducer, [])
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Suspense fallback={null}>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <AppWrapper>
        <URLWarning />
          <HeaderWrapper>
            <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
          </HeaderWrapper>
          <div style={{marginTop: "33px"}} />
          <HeaderWrapperSide>
              <SideMenu showMenu={showMenu}/>
          </HeaderWrapperSide>
        <BodyWrapper>
          <Popups />
          <Polling />
          <TopLevelModals />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/swap" component={Swap} />
                <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/farm" component={Earn} />
                <Route exact strict path="/stake" component={Stake} />
                {/* <Route exact strict path="/nft-stake" component={nft_stake} /> */}
                <Route exact strict path="/presale" component={Presale} />
                <Route exact strict path="/mint" component={NftMintNew} />
                <Route exact strict path="/nftstake" component={NftStake} />
                {/* <Route exact strict path="/mint" component={Mint} /> */}
                {/* <Route exact strict path="/redeem" component={Redeem} /> */}
                {/* <Route exact strict path="/bank" component={Bank} /> */}
          {/* <Route exact strict path="/vote" component={Vote} /> */}
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact path="/create" component={AddLiquidity} />
                <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange} />
                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                {/* <Route exact strict path="/migrate/v1" component={MigrateV1} /> */}
                {/* <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange} /> */}
                <Route exact strict path="/spyrit/:currencyIdA/:currencyIdB/:rewardsAddress" component={Manage} />
                {/* <Route exact strict path="/vote/:id" component={VotePage} /> */}
                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}
