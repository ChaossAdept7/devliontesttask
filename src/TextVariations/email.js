import React, {Component, PropTypes} from 'react';
import TextVariations from './textBase';

const Email = ({children, ...otherProps}) => <div>
    <TextVariations
        template={'email'}
        label={children}
        {...otherProps}
    />
</div>;
export default Email;