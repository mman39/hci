import { withRouter } from 'react-router';
import { Container, Item, Segment, Button, Form } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions';

class ChatPage extends Component {
  state = { writing: '' }

  render() {
    const chatHistory = this.props.chatHistory.map((c, idx) => (
      <Segment>
        <Container textAlign={(c.from === 'user') ? 'left' : 'right'}>
          {c.content}
        </Container>
      </Segment>
    ))

    return (
      <Container text>
        {chatHistory}
        <Form>
          <Form.TextArea
            style={{ minHeight: 100 }}
            value={this.state.writing}
            onChange={(e) =>
              this.setState({ writing: e.target.value })
            }
          />
        </Form>
        <Button primary onClick={() => {
          this.props.onChat(this.state.writing)
          this.setState({ writing: '' });
        }}>Send</Button>
        <div>
          <Button
            onClick={() => {
              this.props.onGetResult(this.state)
              this.props.history.push('/result')
            }}
            primary
          >
            Result
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chatHistory: state.patientInfo.chatHistory
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChat: (content) =>
      dispatch(actionCreators.chat(content)),
    onGetResult: () =>
      dispatch(actionCreators.getResult()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatPage));
