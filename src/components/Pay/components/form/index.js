import React, { useEffect, useState, useRef } from 'react';

//Material UI
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//Stripe
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import StripeInput from '../StripeInput'

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
    const month = i + 1;
    return month <= 9 ? '0' + month : month;
});
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #1b1e23',
    },
  }))(Tooltip);

export default function CForm({
    cardMonth,
    cardYear,
    onUpdateState,
    cardNumberRef,
    cardHolderRef,
    cardDateRef,
    onCardInputFocus,
    onCardInputBlur,
    cardCvv,
    children
}) {
    const [cardNumber, setCardNumber] = useState('');
    const onlyAlphanumericRegex = /[^a-z0-9]/gi;
    const regex = /^[a-zA-Z\s]*$/;
    const CHARACTER_LIMIT = 19;
    const [values, setValues] = React.useState({
      name: "Hello"
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: event.target.value });
        onUpdateState(name, value);
    };

    // TODO: We can improve the regex check with a better approach like in the card component.
    const onCardNumberChange = (event) => {
        let { value, name } = event.target;
        let cardNumber = value;
        value = value.replace(/\D/g, '');
        if (/^3[47]\d{0,13}$/.test(value)) {
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
            // diner's club, 14 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        } else if (/^\d{0,16}$/.test(value)) {
            // regular cc number, 16 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
                .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
        }

        setCardNumber(cardNumber.trimRight());
        onUpdateState(name, cardNumber);
    };

    const onCvvFocus = (event) => {
        onUpdateState('isCardFlipped', true);
    };

    const onCvvBlur = (event) => {
        onUpdateState('isCardFlipped', false);
    };

    return (
        
        <div className="card-form">
            <div className="card-list">{children}</div>
            <div className="card-form__inner">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <HtmlTooltip TransitionComponent={Zoom} arrow title="Any information entered here is not stored and is private" interactive>
            <h1>Please fill out your billing details:</h1>
            </HtmlTooltip>
                <div className="card-input">
                <Tooltip placement="right" arrow title="Only accepts numbers" interactive>
                    <TextField
                    required
                    onlyAlphanumericRegex={true}
                    type="tel"
                    id="outlined-basic"
                    label="Card Number"
                    inputProps={{
                    maxlength: CHARACTER_LIMIT
                    }}
                    variant="outlined"
                    name="cardNumber"
                    className="card-input__input"
                    autoComplete="off"
                    onChange={onCardNumberChange}
                    maxLength="19"
                    ref={cardNumberRef}
                    onFocus={(e) => onCardInputFocus(e, 'cardNumber')}
                    onBlur={onCardInputBlur}
                    value={cardNumber}
                     />
              </Tooltip>
                </div>
                <div className="card-input">
                <Tooltip placement="right" arrow title="Only accepts letters" interactive>
                    <TextField
                    required
                    type="text"
                    id="outlined-basic"
                    label="Card Holder"
                    variant="outlined"
                    className="card-input__input"
                    autoComplete="off"
                    name="cardHolder"
                    onChange={handleFormChange}
                    ref={cardHolderRef}
                    onFocus={(e) => onCardInputFocus(e, 'cardHolder')}
                    onBlur={onCardInputBlur}
                    inputProps={{
                        maxlength: 25
                      }}
                      onKeyPress={(event) => {
                        if (!regex.test(event.key)) {
                          event.preventDefault();
                        }
                      }}/>
                      </Tooltip>
                </div>

                <div className="card-form__row">
                    <div className="card-form__col">
                        <div className="card-form__group">
                            <label
                                htmlFor="cardMonth"
                                className="card-input__label"
                            >
                                Expiration Date
                            </label>
                            <select
                                className="card-input__input -select"
                                value={cardMonth}
                                name="cardMonth"
                                onChange={handleFormChange}
                                ref={cardDateRef}
                                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                                onBlur={onCardInputBlur}
                            >
                                <option value="" disabled>
                                    Month
                                </option>

                                {monthsArr.map((val, index) => (
                                    <option key={index} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="cardYear"
                                className="card-input__input -select"
                                value={cardYear}
                                onChange={handleFormChange}
                                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                                onBlur={onCardInputBlur}
                            >
                                <option value="" disabled>
                                    Year
                                </option>

                                {yearsArr.map((val, index) => (
                                    <option key={index} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="card-form__col -cvv">
                    <label htmlFor="cardCVV"
                            className="card-input__label">
                                CVV
                            </label>
                        <div className="card-input">
                            <Input
                            placeholder="CVV"
                            id="outlined-basic"
                            label="CVV"
                            variant="outlined"
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                                type="tel"
                                className="card-input__input"
                                inputProps={{
                                    maxlength: 4
                                  }}
                                autoComplete="off"
                                name="cardCvv"
                                onChange={handleFormChange}
                                onFocus={onCvvFocus}
                                onBlur={onCvvBlur}
                                ref={cardCvv}
                            />
                            <button type="submit">Enter</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}
