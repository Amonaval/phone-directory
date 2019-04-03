import React, { Component } from 'react';
import _bindAll from 'lodash/bindAll';
import _isEmpty from 'lodash/isEmpty';
import DirectoryListComponent from './Components/DirectoryListComponent';
import AddSubcriberForm from './Components/AddSubcriberForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subsciberList: [],
      currentItem: {
        name: '',
        number: '',
      },
      showValidationError: false,
      showAddForm: false
    }
    _bindAll(this, ['addSubscriber', 'addForm', 'hideForm', 'updateState']);
  }

  addSubscriber(item) {
    const {currentItem, subsciberList} = this.state;
    const {name, number} = currentItem;
    if(!_isEmpty(name) && !_isEmpty(number)) {
      const updatedList = [...subsciberList, currentItem];
      this.updateState({
        subsciberList: updatedList,
        currentItem: {
          name: '',
          number: '',
        }
      });
    } else {
      this.updateState({showValidationError: true});
    }
  }

  deleteSubscriber = (index) => (e) => {
    const {subsciberList} = this.state;
    const newArr = [...subsciberList.slice(0,index), ...subsciberList.slice(index+1,subsciberList.length)];
    this.updateState({subsciberList: newArr});
  }

  updateField = (attrName) => (e) => {
    const newProperty = {[attrName]: e.target.value}
    const newProp = {...this.state.currentItem, ...newProperty};
    this.updateState({currentItem: newProp, showValidationError: false});
  }

  addForm () {
    this.updateState({
      showAddForm: true,
      currentItem: {
        name: '',
        number: '',
      },
    });
  }

  hideForm () {
    this.updateState({showAddForm: false});
  }

  updateState(options) {
    this.setState({...options});
  }

  render() {
    const {currentItem, showAddForm, showValidationError, subsciberList} = this.state;
    return (
      <React.Fragment>
        <div className="stick-header-title">Phone Directory</div>
        <div className="directory-container">
          <div className="btn btn-primary" onClick={this.addForm}>
            ADD
          </div>
          {showAddForm && <div className="btn back-button" onClick={this.hideForm}>
            Hide Form
          </div>}
          <DirectoryListComponent 
            subsciberList={subsciberList} 
            deleteSubscriber={this.deleteSubscriber} />
          <AddSubcriberForm 
            currentItem={currentItem} 
            showAddForm={showAddForm}
            updateField={this.updateField}
            addSubscriber={this.addSubscriber}
            showValidationError={showValidationError} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
