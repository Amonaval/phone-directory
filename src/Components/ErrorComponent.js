import React from 'react';

export default function ErrorComponent({showValidationError, currentItem}) {
    return (
      <React.Fragment>
      {showValidationError && <div className="validataion-error">
          Please enter valid 
          {!currentItem.name && !currentItem.number && <span>   name and number</span>}
          {!currentItem.name && <span>  name</span>}
          {!currentItem.number && <span>  number</span>}
          </div>}
      </React.Fragment>
    )
}