import React, { PropTypes } from 'react';
import classnames from 'classnames';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _pickBy from 'lodash/pickBy';

function _buildClassnames(props) {
    return classnames({
        demoBox: true,
        'mix-demoBox_padded': props.isPadded,
        'mix-demoBox_verticalRhythm': props.shouldIncludeVerticalRhythm,
        [props.className]: !_isNil(props.className)
    });
}

const DemoBox = (props) => {
    const handlers = _pickBy(props, (value, property) => property.indexOf('on') === 0 && _isFunction(value));
    return (
        <div className={ _buildClassnames(props) }
             style={ props.style }
             { ...handlers }>
            { props.children }
        </div>
    );
}

DemoBox.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    isPadded: PropTypes.bool.isRequired,
    shouldIncludeVerticalRhythm: PropTypes.bool.isRequired
};

DemoBox.defaultProps = {
    isPadded: false,
    shouldIncludeVerticalRhythm: true
};

export default DemoBox;
