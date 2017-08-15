import React, {Component, PropTypes} from 'react';
import TextVariations from './textBase';

const Numeric = ({children, ...otherProps}) => <div>
    <TextVariations
        template={'numeric'}
        label={children}
        {...otherProps}
    />
</div>;
export default Numeric;