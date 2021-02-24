import React, { useEffect, useState } from 'react';
import URL from '../../config/config'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";


//Material UI
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

export default function View() {
    let { id } = useParams();
    const [myData, setData] = useState({});

    useEffect(() => {
        getProducts();
}, [])

    const getProducts = async () => {
        await fetch(URL+'/api/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(function(res) {
            return res.json()
        }).then(function(data) {
            setData(data)
        }).catch(function(error) {
            console.error(error)
        })
    }
    
    return (
        <>
        <div>
            <Tooltip
            disableFocusListener
            interactive
            placement="bottom-start"
            title={`Product ID: ${myData._id}`}>
        <h1>{myData.name}</h1>
        </Tooltip>
          <p>{myData.price}</p>
        </div>
        </>
    )
}