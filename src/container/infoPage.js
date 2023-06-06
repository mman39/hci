import { withRouter } from 'react-router';
import { Container, Input, Header, Button, Form, Segment } from 'semantic-ui-react';
import { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions';

class InfoPage extends Component {
  state = {
    name: null,
    age: 0,
    gender: null,
    birth: '',
    email: '',
    symptom: '',
    symptomList: [],
  }

  render() {
    const symptomBtn = this.props.relatedSymptom.map((s, idx) => (
      <Button primary onClick={() => {
        const modifiedSymptomList = [
          ...this.state.symptomList,
          {
            name: s,
            dateOccurnece: '',
            intensity: 0,
          }
        ]
        this.setState({
          ...this.state,
          symptomList: modifiedSymptomList
        });
        this.props.onGetRelatedSymptom(this.state.symptomList)
      }}>{s}</Button>
    ))

    const symptomForm = this.state.symptomList.map((s, idx) => (
      <Segment>
        <Form>
          <Header as='h2'>{s.name}</Header>
          <Form.Input
            value={s.dateOccurnece}
            onChange={(e) => {
              const modifiedSymptomList = this.state.symptomList.map((s_) => {
                if (s.name === s_.name) {
                  return { ...s_, dateOccurnece: e.target.value };
                } else {
                  return { ...s_ };
                }
              });
              this.setState({ ...this.state, symptomList: modifiedSymptomList });
            }}
            label="occured date"
          />
          <Form.Input
            value={s.intensity}
            onChange={(e) => {
              const modifiedSymptomList = this.state.symptomList.map((s_) => {
                if (s.name === s_.name) {
                  return { ...s_, intensity: e.target.value };
                } else {
                  return { ...s_ };
                }
              });
              this.setState({ ...this.state, symptomList: modifiedSymptomList });
            }}
            label="intensity"
          />
        </Form>
      </Segment>
    ))

    return (
      <Container text>
        <Header as="h2">
          Info
        </Header>
        <Form>
          <Form.Input
            value={this.state.name}
            onChange={(e) =>
              this.setState({ name: e.target.value })
            }
            label="name"
          />
          <Form.Input
            value={this.state.age}
            onChange={(e) =>
              this.setState({ age: e.target.value })
            }
            label="age"
          />
          <Form.Group inline>
            <label>gender</label>
            <Form.Radio
              label='male'
              value='m'
              checked={this.state.gender === 'm'}
              onChange={(e, value)=>{this.setState({gender:value.value})}}
            />
            <Form.Radio
              label='female'
              value='f'
              checked={this.state.gender === 'f'}
              onChange={(e, value)=>{this.setState({gender:value.value})}}
            />
          </Form.Group>
          <Form.Input
            value={this.state.birth}
            onChange={(e) =>
              this.setState({ birth: e.target.value })
            }
            label="birth"
          />
          <Form.Input
            value={this.state.email}
            onChange={(e) =>
              this.setState({ email: e.target.value })
            }
            label="e-mail"
          />
          {symptomForm}
          <Input
            value={this.state.symptom}
            action={
              <Button primary onClick={() => {
                const modifiedSymptomList = [
                  ...this.state.symptomList,
                  {
                    name: this.state.symptom,
                    dateOccurnece: '',
                    intensity: 0,
                  }
                ]
                this.setState({
                  ...this.state,
                  symptomList: modifiedSymptomList
                });
                this.setState({ symptom: '' });
                this.props.onGetRelatedSymptom(this.state.symptomList)
              }}>Add</Button>
            }
            onChange={(e) =>
              this.setState({ symptom: e.target.value })
            }
          />
          <div>
            {symptomBtn}
          </div>
          <div>
            <Button
              onClick={() => {
                this.props.onSaveBasicInfo(this.state)
                this.props.history.push('/chat')
              }}
              primary
            >
              Chat
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedSymptom: state.patientInfo.relatedSymptom,
    basicInfo: state.patientInfo.basicInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRelatedSymptom: (symptom) =>
      dispatch(actionCreators.getRelatedSymptom(symptom)),
    onSaveBasicInfo: (basicInfo) =>
      dispatch(actionCreators.saveBasicInfo(basicInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InfoPage));
