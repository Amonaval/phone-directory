import React from 'react';
import ErrorComponent from './ErrorComponent';

export default function AddSubcriberForm({currentItem, 
    showAddForm, 
    showValidationError,
    updateField,
    addSubscriber}) {
    return (
       <React.Fragment>
      {showAddForm && <section className="register-form">
          <div>
            <div className="label">Name</div>
            <span><input onChange={updateField('name')} value={currentItem.name} /></span>
          </div>
          <div>
            <div className="label">Phone No.</div>
            <span><input type="number" onChange={updateField('number')}  value={currentItem.number} /></span>
          </div>

          <ErrorComponent 
            showValidationError={showValidationError} 
            currentItem={currentItem} />

          <div className="notification">
            <div>Subscriber to be added</div>
            {currentItem.name && <div>Name: <b>{currentItem.name}</b></div>}
            {currentItem.number && <div>Phone no: <b>{currentItem.number}</b></div>}
          </div>

          <div>
            <button className="btn btn-secondary add-subsciber" onClick={addSubscriber}>
              Add Subscriber
            </button>
          </div>
        </section>}
      </React.Fragment>
    )
}