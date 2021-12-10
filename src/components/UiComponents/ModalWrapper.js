import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className="back-drop" onClick={props.onBackDropClick} >{props.children}</div>;
};

const ModalWrapper = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onBackDropClick={props.onBackDropClick} >
                    <div onClick={e => e.stopPropagation()} className='modal-inner-card'>{props.children}</div>
                </Backdrop>,
                document.getElementById('modal-wrapper-root')
            )}
        </React.Fragment>
    );
};
export default ModalWrapper;