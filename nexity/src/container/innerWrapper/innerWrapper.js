import React from 'react';

import {Row, Grid} from 'react-bootstrap';

const InnerWrapper = (props) => {
    return (
        <Grid className="inner-wrapper">
          <Row className="show-grid">
            {props.children}
          </Row>
        </Grid>
    );
}

export default InnerWrapper;