import { withRouter } from 'react-router';

import { Container, Header } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';

class ChatPage extends Component {
  render() {
    return (
      <Container text>
        <Header as="h2">
          Chat
        </Header>
        Chat
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatPage));