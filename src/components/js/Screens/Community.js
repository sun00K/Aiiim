import React, { useState } from "react";
import { PageButton, NavButton } from "../../css/StyleButton";
import {
  WholeScreenContainer,
  MainScreenContainer,
  HeaderContainer,
  BodyContainer,
  HeaderTextContainer,
  HeaderButtonContainer,
} from "../../css/StyleContainers";

import { Header1, Header2 } from "../../css/StyleText";
import GlobalStyle from "../../css/global-style";
import Board from "../CommunityComponents/Board";
import Card from "../card";
import logo from "../../../assets/logo.png"

import ChangePngColor from "../../css/changePngColor";

import { Eng } from '../../css/StyleText';

const Community = () => {

  const [ board, setBoard ] = useState('Rankings');

  const rankingHandler = () => {
    setBoard('Rankings')
  }
  const announcementHandler = () => {
    setBoard('Announcement')
  }
  const settingsHandler = () => {
    setBoard('Settings')
  }
  console.log(board)
  return (
    <WholeScreenContainer>
      <GlobalStyle />
      {/* <PageButton><ChangePngColor background = '#FFFCEB'></ChangePngColor></PageButton> */}
      <PageButton>{">"}</PageButton>
      <MainScreenContainer>
        <HeaderContainer>
          <HeaderTextContainer>
                <Header1>Week 3</Header1>
                <Header2>Nov. 19, 2020</Header2>
          </HeaderTextContainer>
          <HeaderButtonContainer>
                <NavButton onClick={rankingHandler}>Rankings</NavButton>
                <NavButton onClick={announcementHandler}>Announcement</NavButton>
                <NavButton onClick={settingsHandler}>Settings</NavButton>
                <img  src={logo} style={{height: '32px'} } alt='logo'/>
          </HeaderButtonContainer>
        </HeaderContainer>
        <BodyContainer>
          <Card name="호두"/>
          <Card name="호두"/>
          <Card name="호두"/>
          <Card name="호두"/>
          <Card name="호두"/>
          <Board current = {board} />
        </BodyContainer>
      </MainScreenContainer>
    </WholeScreenContainer>
  );
};
//
export default Community;

//99, 48, 358, 95, 106, 101