import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { SagaActions } from '../../actions'

class ConnectedComponent extends Component {
  render() {
    const { dispatch, sagaCounter = 0 } = this.props
    return (
      <div>
        <Button color="teal" onClick={() => dispatch(SagaActions.test())}>Sagas Completed: {sagaCounter}</Button>
      </div>
    )
  }
}


export default connect((state) => ({
  sagaCounter: state.sagaCounter
}))(ConnectedComponent)
