//import useState hook to create menu collapse state
import React from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  // SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

// import {  FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import {  FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom'


//import sidebar css from react-pro-sidebar module and our custom css 

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
// import styled from 'styled-components'
import swapIcon from "../../assets/icons/swap.png"
import poolIcon from "../../assets/icons/pool2.png"
import farmIcon from "../../assets/icons/farm.png"
import stakeIcon from "../../assets/icons/stake.png"
// import presaleIcon from "../../assets/icons/presale.png"
import mintIcon from "../../assets/icons/mint.png"
import nftStakeIcon from "../../assets/icons/nftstake.png"
import { useWindowSize } from "hooks/useWindowSize";
import telegramIcon from "../../assets/telegram20.png"
import twitterIcon from "../../assets/twitter20.png"
import discordIcon from "../../assets/discord20.png"
// import { useToggleState } from "state/toggle/hooks";

// export const ToggleContext = createContext(false);

// const StyledMenu = styled(Menu)`
//   padding-left: 20px;
//   width: 50px;
// `

const SideMenu = ({showMenu: showMenu}: {showMenu: boolean}) => {
  
    //create initial menuCollapse state using useState hook
    // const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  // const menuIconClick = () => {
  //   //condition checking to change state from true to false and vice versa
  //   menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  // };
  // const toggleMenu = useToggleState()
  let closeMenu = true;
  const { width } = useWindowSize()
  closeMenu = width && width < 1096 ? closeMenu && showMenu : false

  return (
    // <ToggleContext.Provider value={false}>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={closeMenu} collapsedWidth='0'>
          <div style={{paddingTop: "30px"}} />
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<img src={swapIcon} />}>
                SWAP
                <Link to="/swap" />
              </MenuItem>
              <MenuItem icon={<img src={poolIcon} />}>POOL <Link to="/pool" /> </MenuItem>
              <MenuItem icon={<img src={farmIcon} />}>FARMS <Link to="/farm" /> </MenuItem>
              <MenuItem icon={<img src={stakeIcon} />}>STAKE <Link to="/stake" /> </MenuItem>
              {/* <MenuItem icon={<img src={presaleIcon} />}>PRESALE <Link to="/presale" /></MenuItem> */}
              <MenuItem icon={<img src={mintIcon} />}>NFT MINT <Link to="/mint" /> </MenuItem>
              <MenuItem icon={<img src={nftStakeIcon} />}>NFT STAKE <Link to="/nftstake" /> </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter style={{display: "flex", height: "154px"}}>
              <div style={{marginLeft: "120px"}}></div>
              <a href="https://t.me/spyritcoin" style={{marginTop: "auto", marginBottom: "auto"}}><img src={telegramIcon} ></img></a>
              <div style={{marginLeft: "30px"}}></div>
              <a href="https://Twitter.com/spyritcoin" style={{marginTop: "auto", marginBottom: "auto"}}><img src={twitterIcon} ></img></a>
              <div style={{marginLeft: "30px"}}></div>
              <a href="https://discord.com/invite/xzyeMr3Rbb" style={{marginTop: "auto", marginBottom: "auto"}}><img src={discordIcon} ></img></a>
            {/* <StyledMenu iconShape="square">
              <a href="https://t.me/spyritcoin"><img src={telegramIcon} ></img></a>
            </StyledMenu>
            <StyledMenu iconShape="square" >
              <a href="https://Twitter.com/spyritcoin"><img src={twitterIcon} ></img></a>
            </StyledMenu>
            <StyledMenu iconShape="square" >
              <a href="https://discord.com/invite/xzyeMr3Rbb"><img src={discordIcon} ></img></a>
            </StyledMenu> */}
          </SidebarFooter>
        </ProSidebar>
      </div>
    // </ToggleContext.Provider>
  );
};

export default SideMenu;