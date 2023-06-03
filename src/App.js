import { ConnectedRouter } from 'connected-react-router';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import InfoPage from './container/infoPage'
import ChatPage from './container/chatPage'
import ResultPage from './container/resultPage'

class App extends Component{
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Redirect exact from="/" to="/info" />
            <Route exact path="/info" component={InfoPage}/>
            <Route exact path="/chat" component={ChatPage}/>
            <Route exact path="/result" component={ResultPage}/>
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
