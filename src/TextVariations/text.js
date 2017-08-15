import React, {Component, PropTypes} from 'react';
import TextVariations from './textBase';

const TextInput = ({children, ...otherProps}) => <div>
    <TextVariations
        template={'string'}
        label={children}
        {...otherProps}
    />
</div>;
export default TextInput;