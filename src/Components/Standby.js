import React from 'react';

class Standby extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sbd">
          <div className="cl-item">
            <h4>STANDBY DIVER</h4>
          </div>
          <div className="cl-item">
            <label for="sbd">SBD: </label>
            <select name="sbd" id="sbd">
              <option value="chris">Chris</option>
              <option value="cate">Cate</option>
              <option value="nick">Nick</option>
              <option value="michael">Michael</option>
              <option value="katie">Katie</option>
              <option value="taylor">Taylor</option>
              <option value="jason">Jason</option>
              <option value="maddie">Maddie</option>
              <option value="josh">Josh</option>
              <option value="ethen">Ethen</option>
            </select>
          </div>
          <div className="cl-item">
            <label>Gear Function Test: </label>
            <input type="text" placeholder="(SBD/DPIC Initial)" />
          </div>
          <div className="cl-item">
            <label>Gear # (s): </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Main Tank Inventory #: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Main Tank PSI: </label>
            <input type="text" placeholder="MIN 2000 PSI" />
          </div>
          <div className="cl-item">
            <label>RAS Tank Inventory #: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>RAS Tank PSI: </label>
            <input type="text" placeholder="MIN 2000 PSI" />
          </div>
        </div>
      </form>
    )
  }
}

export default Standby;