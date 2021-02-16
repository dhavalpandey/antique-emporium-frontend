import React, { useEffect, useState } from 'react';
import URL from '../../config/config'

//Lazy Load
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from 'react-lazyload';

//Material Ui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './Shop.css'

const useStyles = makeStyles({
    root: {
      width: 320,
    },
  });
  
  const productionURL = 'http://localhost:5000/'

function Shop() {
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(4)
    const classes = useStyles();
    const onlyAlphanumericRegex = /[^a-z0-9]/gi;
    let dataReturn = [];

useEffect(() => {
        const variables = {
            skip: Skip,
            limit: Limit
        }
        getProducts(variables);
}, [])

    const getProducts = (variables) => {
        fetch(URL+'/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }, variables).then(function(res) {
            return res.json()
        }).then(function(data) {
            dataReturn = data;
            console.log(dataReturn)
            setProducts(data)
        }).catch(function(error) {
            console.error(error)
        })
    }

    const renderCards = Products.map((product, index) => {
        var date = new Date(product.date);
        var newDate = date.toLocaleDateString()

        return <div className="item">
        <Card className={classes.root} key={product._id}>
        <CardActionArea>
        <LazyLoadImage
                    alt={`${product._id}`}
                    src={`${product.imageUrl}`}
                    width={200}
                    effect="blur" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {product.name}
            </Typography>
            <LazyLoad once={true} >
            <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
            </Typography>
            </LazyLoad>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="primary" href={`https://antique-emporium.netlify.app/${product._id}`}>
            View
        </Button>
        </CardActions>
        </Card>
        </div>
    })

    return (
       <div className="shopping-page">
           <h1>Shop</h1>
           {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Loading...</h2>
                </div> :
                <div>
                    <div className="container">
                        {Products.map((product, index) => {})}
                        {renderCards}
                        </div>
                </div>
            }
            <br /><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                </div>
       </div>
    )
}

export default Shop;