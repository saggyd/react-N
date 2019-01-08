import React from 'react';

import {Row, Grid} from 'react-bootstrap';

const InnerWrapper = (props) => {
  const panelHeight = {
        height: window.innerHeight - 102
    };
    return (
        <Grid className="inner-wrapper" id="innerWrapper" style = {panelHeight}>
          <Row className="show-grid">
            {props.children}
          </Row>
        </Grid>
    );
}

export default InnerWrapper;