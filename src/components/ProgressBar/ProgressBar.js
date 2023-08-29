/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        "height": "8px",
        "radius": "4px",
        "padding": "0"
    },
    medium: {
        "height": "12px",
        "radius": "4px",
        "padding": "0"
    },
    large: {
        "height": "24px",
        "radius": "8px",
        "padding": "4px"
    }
}

const ProgressBar = ({ value, size }) => {
    const style = STYLES[size]
    return (
        <Wrapper style={{'--padding': style.padding, '--radius': style.radius}}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper style={{'--radius': style.radius}}>
                <Bar style={{'--width': value + '%', '--height': style.height}}></Bar>
            </BarWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--radius);
    padding: var(--padding);
`;

const BarWrapper = styled.div`
    border-radius: var(--radius);

    /* Hides Bar when it reaches 100% */
    overflow: hidden;
`;

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
`;

export default ProgressBar;
