import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader2 = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {

  const classes = classNames(
    className
  );

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
        >
          <div className="container" >
            {
              <Component className={
                classNames(
                  'mt-0',
                  'mb-0',
                  'text-color-light',
                  {/* empower people together police*/}
                )} style={{fontSize:"min(40px,max(25px,4vw))", fontWeight: 'normal'}}>{data.title}</Component>
            }
          </div>
        </div>
      }
    </>
  );
}

SectionHeader2.propTypes = propTypes;
SectionHeader2.defaultProps = defaultProps;

export default SectionHeader2;