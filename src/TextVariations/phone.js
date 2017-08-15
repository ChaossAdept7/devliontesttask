import React, {Component, PropTypes} from 'react';
import TextVariations from './textBase';

const Phone = ({children, ...otherProps}) => <div>
    <TextVariations
        template={'phone'}
        label={children}
        {...otherProps}
    />
</div>;
export default Phone;