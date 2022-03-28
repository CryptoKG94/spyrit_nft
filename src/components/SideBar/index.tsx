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
// import swapIcon from "../../assets/icons/swap.png"
// import poolIcon from "../../assets/icons/pool2.png"
// import farmIcon from "../../assets/icons/farm.png"
// import stakeIcon from "../../assets/icons/stake.png"
// import presaleIcon from "../../assets/icons/presale.png"
// import mintIcon from "../../assets/icons/mint.png"
// import nftStakeIcon from "../../assets/icons/nftstake.png"
import { useWindowSize } from "hooks/useWindowSize";
// import telegramIcon from "../../assets/telegram20.png"
// import twitterIcon from "../../assets/twitter20.png"
// import discordIcon from "../../assets/discord20.png"
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
              <MenuItem active={true} icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAMAAAC27AbQAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAtBQTFRFAAAA/////////////////////////////////////////v7+/v7+/v7+/////////////////////////////////////v7+/v7+/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v7+/v7+/////////////////////v7+/////////////////////v7+/v7+/////////////////v7+/v7+/////////////////////////v7+/////////////v7+/v7+/////v7+/v7+/v7+/////v7+/////////////////////////////////////v7+/////v7+/////////v7+/v7+/////////v7+/////////////////////////////////////////v7+/////v7+/////////////////////v7+/v7+/v7+/////////////////////////////////////////////v7+/v7+/////////////////////////////////////////////////////////////////////////v7+/////////////////////v7+/v7+/////////////////v7+/////v7+/////////////v7+/////////v7+/////v7+/////v7+/v7+/v7+/v7+/////v7+/////////v7+/v7+/////////////////////////////////v7+/v7+/v7+/////v7+DTDDcQAAAPB0Uk5TAAQOOnpOGAkBAgAAAQIGFlCjimE5GQgEBQUKI3Tm69eGQRIDLVpmbWppaH+t1LWrk2Q4DWC90NnS0dPb3qV2vrt5JA9y2piIhYeLflUyWYGop45eER+N7ZdaR0JGRT4xGRA1gLPYpCg0d7zpbyAXFRQQCgdy2gklRXWv2Ow2LiwgPdTKCC9ls87M5Pa6j31zXF3Jg0ukoJ7Et6GfoKqneE57tFHc4ZI/orKwwtCs3+KZcabLmmwhHE9NTPBISugLBmvqHb/lHSIiHkSxGlthYl5jC8bHT8XL4OJ2DB5YlpWUkkv38RonMwzEbiwNFhsD0GhAKwAAAp5JREFUeJxjYMACGJmYWVjZ2Dk4OTm40KS4eXg5OXiAEnz8AoJCwiKiYhxAgKqKW1yCkVFcUpJTSlpGVk5eQVGJi4tDmQOhgINTRVVNXUNTU0NDS11bR05XT9/A0MhYkgOqhgsIOCVNTM3MLSwtLCwsraxtbGzt7G0cHJ2cYeZwAd3Ayejiqufm7uHu7unp7uXp7ePr5x8QGBSsEgIxhINTmdM4NCw8IjIqOiYWCGLi4hOUE5OSU1LTDNN5gWo4ODg5lMUyMrOyc3Lz8vnBoKCwSLI4JL2kNDWLtYyBG6iGMaS8orKqusa7tq5eRaUeiNMblPgSGxq9m5oDYloYeHi4uPha29o7Oru6e3r9+5K1tbWT/fsnqEimT6zqnDRZJI+XgYeDQ3qK99T2aSzTZ8zUnzV7zpw5s2cFzJ03f8HC2YvmyCgqFXMBnaO82HbJ0mVTxJb7r9BLWblyZcqqlNWu3WvWrlu/YTE70EMcDJwqGzdt3rI1ehvfdqOYHaw7d7Ky7hKY4LZ7Sc+Wyj3SjODIUN7bs25f/7b9ysqMjAcO8IGBFP/BQ+Y6fofFQMECDEOODIUjR1cIS4txSuUfO75t27YTJ05KG/lnzz51Yr8kJ1ARKE5Psnrond5gYnSmde/ZNmGTc+fPX7iYGSjbd0kcmDagkV6spCLgdvnKhqt2c6/pdjZf37x5s5n1jZu32JWBZkDVcHDcvnPXa1VVxMzqa6vclt27/8BtesCKh48kOZESBaMyL9824an7Hj+5/+hYyFPRvJPPnrduS+RCSlxAl3NwvKj38dB5+er1G0ax4mIppgKlF5KoaRSkist42wSvmLcHuLkZuLm5QQkKVQ3QbRycfMbSSe9a3oPV8GAkY4hRYG9y8/BwgwjUDAEAXWzJDpstrNkAAAAASUVORK5CYII=" />}>
                SWAP
                <Link to="/swap" />
              </MenuItem>
              <MenuItem icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAMAAAAbzM5ZAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAqlQTFRFAAAA/////////////////////////v7+////////////7u7u////////////////6Ojo////////////////+vr6/////////////////////////////////////////////////////////////f39////////////////////////////////////7e3t////////////////////9fX1AAAA////////////urq6/v7+////////////////////////////9vb2/Pz8////9/f38PDw/////////////////////Pz8+vr6/v7+////////+vr6////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PT0////////////////////////5eXl////////////////////////////////7+/v+Pj4/////////////////////////////v7+srKy/v7+/////Pz8+fn5wsLCGBgY+/v7+fn59PT06urqoaGhERER7e3t/Pz8+fn56Ojox8fH////////////9/f3WVlZAAAAq6ur2dnZzMzM/////v7+j4+PAAAA7u7u////+Pj4AAAAAAAAuLi44eHhAAAAn5+f9/f3////////////////////////9fX1kJCQAAAAo6Oj////////9PT0mZmZAAAAAAAAW1tbycnJ9vb2////////////YmJiAAAAFBQUbGxsvLy83t7ezs7O5+fnr6+vaGhoCgoKAAAAAAAAAAAA8nCZJgAAAON0Uk5TAA+WMBnI+7kJnNWdVew56Gq4ogTzW/IpZmfWCrWUkb1y5AURYpYy/jYNrL8CHxd30gG6zbm4ARLEw0nwKkvpYfoxpaAf67jYqtPPqKaYHupU//Eg5ze7LwfMrS0DIjtp3xPUmo+GCPQW2oCxQf2MBryjZe4rI/A0Se2HHOLbXD+fnkKiJV60nZW+eavTscvRJpeZavf9aL2D9++SDdewqMhxHa717ohe5hpQ6T4LUKeRDvIzD9ULywQaNbYFVuinHVjePTjkPw1sY4LhZAkKQZzm/CHjQgYhUY63Jk+BTiAUJA7cq8nPAAAB0ElEQVR4nGNggAJGJmYGdMDCysaOLsbBycXFjS7Iw8vHL4AuKCgkLCKKJsYoJs7AL4EmKCklzSAjiyYoJ8/AoKCoBGQpq8BdpirIwKCmrsHAoKmlrq0DFtLV0zfgYDBkFTKUNjI2MTUDiZlbWFpZ2zAw2Nox2zs4OjmDFbq48rq5KwAZHp5e3gw+vmBBP/+AwCAhICM4JDCUQS4MLBguFhEZGMUQHcMQG8fAEJ+QCBKMT2JIDkxhSFVJA/FC04EyDBmZWQwa2Y4MObl5MUBufkEhkCwqLgG6z5ChNLCsHKS0opKRgSGpCsgC6qwOrMkGh0NtHUM9fzWQ1dDI2BTYbNDSCmS3tTN0dIJM6gr06O7p7eufAGRPlGcQnATSMzlwytRptVN4QeyUTobp4BCbMXPW7DlzA9l0gWyfeQzzBQ2B9vQtWLiIYfGSpR1ANxkvY1i+YiUDw6rVa9YyMKxbv4FtI4Pjps0MW7bKbGNI3b4DqG/tzl2BjoxJu/cwMOzdt//AwUPm4GA4HHgk6ugxIOP4iZqkk5UnDUGCpwL7T585C2KdO3/h4iWxcCDr8pWaC1fPQmLo2vUbN2/dZmAwvHP33v1riOh88BDEefAIwgMAUNV+I2t6qLsAAAAASUVORK5CYII=" />}>POOL <Link to="/pool" /> </MenuItem>
              <MenuItem icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAMAAADHso01AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZVQTFRFAAAA////////////////////////////////2NjY5OTk5eXl5+fn/v7+////19fX////AAAABQUFRUVF5OTk/f39X19f////////////5eXl8fHx+Pj4+vr64eHh+/v76+vrAAAA////////kZGRqamp/Pz82NjY/////////f3909PTYGBgAAAA////8/Pzn5+f/////////////v7+3t7eiYmJAAAAAAAA9fX13t7eAAAA/////////////v7+9PT0wMDAR0dHCQkJAAAAd3d3ampqAAAA////////////////+/v75+fnubm5VVVVAAAAAAAAq6urrq6u////////7OzsuLi4Hx8fAAAAAAAA////////wsLC1dXVubm5Y2NjAAAAAAAAAAAA////AAAAAAAAAAAA////////////////////////////////////////vb29vb290tLS6urq1NTUkpKS4uLi3t7e3Nzc39/fvb29WlpaMDAwZWVlPj4+VVVVS0tLRkZGTk5OAAAAAAAAnviq3wAAAId0Uk5TAAQWGBA8rLBoRMLEx/v/XwgTN0nA+yCepBIMa9HyvPLJBpr4cHf2hgbv+alVGrfbOiR/6fy4aCMI2pcJH2LN8uGSQR4EVzkBKFSh3vHGikgcBR8TFM/Ri0IoDKlmFayMVzEZAp8yJg0JSyAt7Icwj6NIGykfv2AHvXN9gA5KC0khRSksLgcDKkptDgAAAQZJREFUeJxjYKAiYGRiBgEWHNKsbOwgwIFDmpOLm4eXj48fZJAAprSgkLAIH5+oGJApLiGJIS0lLSMrJ6+gCGSyszOjyzIrKcuqqKqpM2CT1uDQ1NLW0dXTN8AibWhkbGJqZm7BYGlljS7NaGNrZ+/g6OTswsDg6uaOKu3h6eXt4+vnHxAI4gUFM6BIh4TyaYWFR0RGQbjRMajSsXHxCYlJyVCjWPhSUKUVU9PSEU7EkGaAaMzIzMIuDQHZObn4pPM088mRDilgxiedx1c4PKWLeIpBVElpGYgqr6gEi1ZV10CkLWrBMV1X3wCikhubwKLNLS7Q4GwFk+6tkJhTbANTbTBZPAAADGM/Ih6rhQQAAAAASUVORK5CYII=" />}>FARMS <Link to="/farm" /> </MenuItem>
              <MenuItem icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAF1QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////USr75QAAAB90Uk5TABBfn7/f/++vbyBgz5BAUICwj8AvfzA/T6BwHw/w0IwMTGYAAAEsSURBVHicvVLLYoQgDEQJAQWUh7hqd/v/n9kQ7a7ae+cGE5LMDEKc0bQSFBI0mK6/UMJq5+3AGEPEdCGzmz6HKeGVVBodQCkGANHdyCLmMTDsIB438jJluZHoSvdgtIUa317aNe9S8rq1f2aewDOHIoEhlWu/fqnnYpCEqxi2qnsLUVNHx4WIClCgPHV6ghsGG2pxU9uiRjCFAY48/VTSQrjMNvhM8GHsi9q1dMXQ1sIjlOXQlpxeSWutjGGsJvQRd6jsZVsULmcpwW3ZHQVutag5mkfHxm+64+PAd4lFVI8kkTPgW13VaZQk0ZSnfNUQJU599SCEcZjFpKCk6kKcK8l/JrHURI/XI8/D7WrKugsw2JzNt693iAuF6C85icb6/F2XeuW43f7j/+MHLrIU6sVs1zMAAAAASUVORK5CYII=" />}>STAKE <Link to="/stake" /> </MenuItem>
              {/* <MenuItem icon={<img src={presaleIcon} />}>PRESALE <Link to="/presale" /></MenuItem> */}
              <MenuItem icon={<img src="data:image/png;base64,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" />}>NFT MINT <Link to="/mint" /> </MenuItem>
              <MenuItem icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvRQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v7/////v7+9fX1+Pj4+/v7////////////////pqam9fX1/f395+fnAAAAWFhYhoaG8PDw////////////////////////////AAAAXl5ed3d3Nzc3AAAAAAAATk5O5OTk9vb29vb2////////////REREAAAAAAAAIiIiS0tLTk5O////////////////////////////////AAAAAAAA////////////////////////////////////////////////////////////////////////6+vr/Pz8/////v7+6OjozMzM2tra4+Pj+/v7////////////////Ghoak5OT2tram5ubJycnAAAAAAAAAAAAVFRUpKSkrq6u/////////////////////Pz8mJiYAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////9vb2/////v7+5OTknZ2dxsbGzc3N+Pj4////////////eXl5ysrKubm5QkJCAAAAf39/19fX5ubm////////////////AAAAAAAAAAAAAAAAICAgPDw8/////////////////////////////////////////////////////////////////////////////f3909PT2NjY9/f32dnZj4+PoaGhbGxsCQkJhoaGx8fHk5OTLy8vAAAAAAAAAAAAAAAAAAAA/////////////////v7++Pj4/////v7+0dHRV1dXRkZG8fHx/v7+19fX5OTksrKyLS0t////////////hoaG4eHh8fHxwsLCNDQ0MTExBwcH/////f39AAAAAAAA1dXV+vr6zc3NAAAAZJ48UQAAAPx0Uk5TACiRmX4bJkwM3vPs954w5efJBkRGFP9VDQiMv2ON/Sjq8rgBsy4w5PjFC05k2t+BbaaA1KUITGA1Bw1DwubnBLIPCgMFJz0+GpvPrjQLkBIBBAqVgsIFP/mI7le82dVxKek9Lzb1xvdKlLPA9CNfQCUMarJyERQaIE17g3P81rECHyQiEQYWA0t9XmrXuhwQE7Tidji1F+Hm8WgqlJ/shIaLTp2IGRdVrcb+ymfMCR8ZAig2g+11+iF89rmnvRZlcPVB8etc8PmoLulBbXlbJFWaYw4PEwoeDll/SmLt66r2pE1GXfskv4EhTTkJJLvbkjMyF4+8KDSq8HUmf8KBKgAAAitJREFUeJxjYEABjEzMcMDCChFjY+eAynJyccMBDy9YiI9fQFBIWEQUyBQTl4AASQYGKWmwrAynrJy8gqISmzKDmKAKBPCqwmTV1DU0tbR1dPX0DcQMjSDA2AQma2pmbsFgaWVtY2snxg7k2yszMDA7QGWVHZ20nIG0i6ubO1DWw9PL2wcu62tk7OcPNiMg0EWMPSiYMyTUOAwmGx4RGRUdExsbGxfvzyDGnpCYxJAglgyTTUlNS8/IzMrKys7h4RZjz9XLY8gXK4DJFhYVl5SWlZeXV1RWVYuxK9fU1nHVw+xtaGxqbgkA29ta1gZ0VXtHZ5c9TLa7p7dPuX/CBHuwArCPQAAqyz1x0uQpU6WlO6dhk50+Y+as2XPmzp0XNx8YRGILFoYrMyh7SEJlFy1esrR1WXn58hUrgUBs1WruNUGdM9b2QmTXrd+wEWSU1qbNQCDGzLpl60TubZzbYSEZtiMMHFLOQAC0l2Pnrt0N4Vuhso57xPbuA0m37+/hBrvqwMEaeDgfOpx35OgxMSA4fqIa4ma+XLjsyVNHUk+fOQsE5863ofuIwfTCxUuXr1wFgmuY/gW69voNcEgqJ0ffxJRlELq19zYwRdy5e89OrMsDAgzrYbIix3qOOW65/+Dho8diW2dAwDEjmOwTAaWnz55nv3jZ6iIW8goCXr+Byb599/6D6cdPn4G2y325CQdKX8Gyzt++L4M65sdxMTj4+YsBDVz/jQTKGAAvBNktxsX2sAAAAABJRU5ErkJggg==" />}>NFT STAKE <Link to="/nftstake" /> </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter style={{display: "flex", height: "154px"}}>
              <div style={{marginLeft: "120px"}}></div>
              <a href="https://t.me/spyritcoin" style={{marginTop: "auto", marginBottom: "auto"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAAlFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7+uFk7QAAABl0Uk5TAA6Aqo4c4//VB1W43CuVOb/x+E5xxkAjsX3eCW4AAAB/SURBVHicndDRFsIgCAZgEApHrenalu//pLXDYYdcV/1X+h0FBeDfYCLu6EJXkRxl0JvsCYh6Fws5jQ85okZTsW0+EFM1mslq7seKX3su0mNBDn0wrZ8lw9I1R86weZXRXzTNr/WEUNkt/IfkB6pIs1YahtHaALDVL/TR6dk8b6ZcBljzjDhhAAAAAElFTkSuQmCC" ></img></a>
              <div style={{marginLeft: "30px"}}></div>
              <a href="https://Twitter.com/spyritcoin" style={{marginTop: "auto", marginBottom: "auto"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFAAAAlFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7xJomoQAAAB10Uk5TABVOuP8jQHHqHPjVK/EO44BVMqpcvzlH3JWxB8a9c/O6AAAAiUlEQVR4nI3Q2w7CMAgAUFwpm725ivP+/98p6VpcjYnyRE6AAAD/x06zwSAaCzSCnfbNHEo4jwQBIxVLWCMeBBHnJJgVj2BLE1M4NZRxgWs+Ndx24QbDN4Tlw7isYnpcF4ydLeslc4fnet/l+rabfmJUuz8KMLMOdUOtoqeWyds0Umbvfc4//v4C22gGWT+j2o0AAAAASUVORK5CYII=" ></img></a>
              <div style={{marginLeft: "30px"}}></div>
              <a href="https://discord.com/invite/xzyeMr3Rbb" style={{marginTop: "auto", marginBottom: "auto"}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlQTFRFAAAAlFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7lFX7XHE99AAAABN0Uk5TAA4rHKrj/7g5MvH4jlXVsc2V3NLJ9hkAAACFSURBVHiclZBLDoAgDAWhlKJgEb3/YW2hxkjcOAtCJunvOfcPD+Dv1wgYKS3OLYkihuHWXDbMJGTcSl67RCqFDPlh70cT2pdnySLrLOstd4hEEXaTYCVIMmK0ApONZafM7SVfDImPwC69ltTjrMJ56NSmMSQ9sJ8c9NhkoTBbDIH5Z75fXEEIBm+lzMsnAAAAAElFTkSuQmCC" ></img></a>
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