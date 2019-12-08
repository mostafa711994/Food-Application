import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/hux';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
    <Aux>
        <BackDrop showed={props.showed} clicked={props.modalClose}/>
        <div className={classes.Modal}
             style={{
                 transform: props.showed ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.showed ? '1' : '0'
             }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;

