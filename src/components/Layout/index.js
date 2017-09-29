import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Container } from 'semantic-ui-react'
import store from '../../store'
import ConnectedComponent from '../ConnectedComponent'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container textAlign="center">
          <ConnectedComponent />
        </Container>
      </Provider>
    );
  }
}
