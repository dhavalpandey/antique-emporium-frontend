/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

function RightMenu(props) {
  const history = useHistory()
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout">
          <a onClick={() => history.push("/login")}>Login</a>
        </Menu.Item>
      </Menu>
    )
  }

export default withRouter(RightMenu);