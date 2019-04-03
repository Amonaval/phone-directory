import React from 'react';

export default function DirectoryListComponent({subsciberList, deleteSubscriber}) {
    return (
      <section className="directory-list">
      <table>
          {subsciberList.length > 0 &&   
          <tr>
            <th>Name</th>
            <th>Phone No.</th>
          </tr>}
          {subsciberList.map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>
                <button className="btn btn-secondary" type="button" onClick={deleteSubscriber(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    )
}