import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import HeaderButton from "./HeaderButton";

const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #fff;
  border-bottom: 1px solid #bbc;

  -webkit-box-shadow: 0px 1px 11px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 1px 11px 0px rgba(0,0,0,0.1);
  box-shadow: 0px 1px 11px 0px rgba(0,0,0,0.1);
`;

const HeaderTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 24px;
  color: #777;
  margin: 0;
`;

const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;

const HeaderBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
`;

@observer
class Header extends React.Component {
  render() {
    const { orderFilter } = this.props.store;
    const {
      setFilterPending,
      setFilterCompleted,
      setFilterCancelled,
    } = this.props;

    return (
      <HeaderBar>
        <HeaderLeft>
          <HeaderTitle>Kitchen Display</HeaderTitle>
        </HeaderLeft>
        <HeaderBody>
          <HeaderButton
            text="Pending"
            icon={faList} 
            active={orderFilter === "Pending"}
            onClick={setFilterPending}
          />
          <HeaderButton
            text="Completed"
            icon={faCheck}
            active={orderFilter === "Completed"}
            onClick={setFilterCompleted}
          />
          <HeaderButton
            borderRight
            text="Cancelled"
            icon={faBan}
            active={orderFilter === "Cancelled"}
            onClick={setFilterCancelled}
          />
        </HeaderBody>
        <HeaderRight>
          <Button danger>
            Close
          </Button>
        </HeaderRight>
      </HeaderBar>
    );
  }
}

export default Header;
