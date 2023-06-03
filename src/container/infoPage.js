import { withRouter } from 'react-router';

import { Container, Header, Button, Form } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {
  state={ name: null, age: 0, gender: null }
  render() {
    return (
      <Container text>
        <Header as="h2">
          Info
        </Header>
        <Form>
          <Form.Input
            label="name"
          />
          <Form.Input
            label="age"
          />
          <Form.Group inline>
            <label>gender</label>
            <Form.Radio
              label='male'
              value='m'
              checked={this.state.gender === 'm'}
              onChange={(e)=>this.setState({...this.state,gender:e.target.value})}
            />
            <Form.Radio
              label='female'
              value='f'
              checked={this.state.gender === 'f'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            primary
          >
            Confirm
          </Button>
          <Button>
            Cancel
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InfoPage));
