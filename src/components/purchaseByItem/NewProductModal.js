import React from 'react'
import useInput from '../../hooks/useInput';
import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/actions/productActions';

export default function NewProductModal({ CloseModal }) {
    const dispatch = useDispatch();
    const isNotEmpty = (value) => value.trim() !== '';

    const {
        value: itemNameValue,
        isValid: itemNameIsValid,
        hasError: itemNameHasError,
        valueChangeHandler: itemNameChangeHandler,
        inputBlurHandler: itemNameBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: storeNameValue,
        isValid: storeNameIsValid,
        hasError: storeNameHasError,
        valueChangeHandler: storeNameChangeHandler,
        inputBlurHandler: storeNameBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: priceValue,
        isValid: priceIsValid,
        hasError: priceHasError,
        valueChangeHandler: priceChangeHandler,
        inputBlurHandler: priceBlurHandler,
    } = useInput(isNotEmpty);
    const {
        value: estDateValue,
        isValid: estDateIsValid,
        hasError: estDateHasError,
        valueChangeHandler: estDateChangeHandler,
        inputBlurHandler: estDateBlurHandler,
    } = useInput(isNotEmpty);

    let formIsValid = false;

    if (itemNameIsValid && storeNameIsValid && priceIsValid && estDateIsValid) {
        formIsValid = true;
    }

    const onFormSubmissionHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        dispatch(addProduct({
            id: Date.now(),
            title: itemNameValue,
            store: storeNameValue,
            price: parseInt(priceValue),
            deliveryEstimatedDate: new Date(estDateValue)
        }));

        CloseModal();
    };
    return (
        <section>
            <div className="actions-row">
                <h3>Add Item</h3>
                <span className="close-x" onClick={CloseModal}>╳</span>
            </div>

            <form onSubmit={onFormSubmissionHandler}>
                <div className='control-group'>
                    <div className='form-control'>
                        <label htmlFor='name'>Item Name</label>
                        <input
                            className={`${itemNameHasError ? "error" : ""}`}
                            type='text'
                            id='name'
                            value={itemNameValue}
                            onChange={itemNameChangeHandler}
                            onBlur={itemNameBlurHandler}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='name'>Store Name</label>
                        <input
                            className={`${storeNameHasError ? "error" : ""}`}
                            type='text'
                            id='name'
                            value={storeNameValue}
                            onChange={storeNameChangeHandler}
                            onBlur={storeNameBlurHandler}
                        />
                    </div>
                </div>
                <div className='control-group'>
                    <div className='form-control'>
                        <label htmlFor='price'>Price</label>
                        <input
                            className={`${priceHasError ? "error" : ""}`}
                            type='number'
                            id='price'
                            value={priceValue}
                            onChange={priceChangeHandler}
                            onBlur={priceBlurHandler}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='name'>Estimated delivery date</label>
                        <input
                            className={`${estDateHasError ? "error" : ""}`}
                            type='date'
                            id='name'
                            value={estDateValue}
                            onChange={estDateChangeHandler}
                            onBlur={estDateBlurHandler}
                        />
                    </div>
                </div>
                <div className='form-actions'>
                    <button disabled={!formIsValid}>Submit</button>
                </div>
            </form>
        </section>
    )
}
