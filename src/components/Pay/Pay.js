import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Elements, } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CForm from './components/form';
import Card from './components/card';

const initialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    isCardFlipped: false
};

const MainScreen = () => {
    const [state, setState] = useState(initialState);
    const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

    //Stripe
    const STRIPE_PUBLIC_KEY = "pk_test_51IGQq0I6UP1sMoBUZ9R2ncKJu6YZKT3OfO3wyO0HkGmSeDAT9lw2M6eyEc0ETNVnqrkhgK7uj7TOLdtpGmYgqYyt003SAN0Qe4";
    const [stripePromise, setStripePromise] = useState(null)

    useEffect(() => {
        const retrievePublishableKey = async () => {
            const stripe = loadStripe(STRIPE_PUBLIC_KEY);
            setStripePromise(stripe)
        }
        retrievePublishableKey()
    }, [])

    const updateStateValues = useCallback(
        (keyName, value) => {
            setState({
                ...state,
                [keyName]: value || initialState[keyName]
            });
        },
        [state]
    );

    // References for the Form Inputs used to focus corresponding inputs.
    let formFieldsRefObj = {
        cardNumber: useRef(),
        cardHolder: useRef(),
        cardDate: useRef(),
        cardCvv: useRef()
    };

    let focusFormFieldByKey = useCallback((key) => {
        formFieldsRefObj[key].current.focus();
    });

    // This are the references for the Card DIV elements.
    let cardElementsRef = {
        cardNumber: useRef(),
        cardHolder: useRef(),
        cardDate: useRef()
    };

    let onCardFormInputFocus = (_event, inputName) => {
        const refByName = cardElementsRef[inputName];
        setCurrentFocusedElm(refByName);
    };

    let onCardInputBlur = useCallback(() => {
        setCurrentFocusedElm(null);
    }, []);

    return (
        <div className="wrapper">
            {stripePromise
                    ? <Elements stripe={stripePromise}>
                          <CForm
                cardMonth={state.cardMonth}
                cardYear={state.cardYear}
                onUpdateState={updateStateValues}
                cardNumberRef={formFieldsRefObj.cardNumber}
                cardHolderRef={formFieldsRefObj.cardHolder}
                cardDateRef={formFieldsRefObj.cardDate}
                onCardInputFocus={onCardFormInputFocus}
                onCardInputBlur={onCardInputBlur}>

                <Card
                    cardNumber={state.cardNumber}
                    cardHolder={state.cardHolder}
                    cardMonth={state.cardMonth}
                    cardYear={state.cardYear}
                    cardCvv={state.cardCvv}
                    isCardFlipped={state.isCardFlipped}
                    currentFocusedElm={currentFocusedElm}
                    onCardElementClick={focusFormFieldByKey}
                    cardNumberRef={cardElementsRef.cardNumber}
                    cardHolderRef={cardElementsRef.cardHolder}
                    cardDateRef={cardElementsRef.cardDate}
                ></Card>  
            </CForm>
                    </Elements>
                    : null
                }
    </div>
    );
};

export default MainScreen;
