import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export const Page = forwardRef(({
    title,
    children,
    ...rest
}, ref) => {

    return (
        <div
            ref={ref}
            {...rest}
        >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
});

Page.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};

