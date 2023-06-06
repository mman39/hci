import { withRouter } from 'react-router';
import { Container, Header, Button } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions';

class ResultPage extends Component {
  render() {
    const binfo = JSON.stringify(this.props.basicInfo)
    const res = JSON.stringify(this.props.result)
    return (
      <Container text>
        {binfo}
        {res}
        <div>
          <Button
            onClick={() => {
              this.props.history.push('/chat')
            }}
            primary
          >
            Chat
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basicInfo: state.patientInfo.basicInfo,
    result: state.patientInfo.result
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResultPage));
