import React from 'react';

class WorkingDiver extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="wd">
          <div className="cl-item">
            <h4>WORKING DIVER</h4>
          </div>
          <div className="cl-item">
            <label for="diver">Working Diver: </label>
            <select name="diver" id="diver">
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
            <input type="text" placeholder="(WD/DPIC Initial)" />
          </div>
          <div className="cl-item">
            <label for="location">Dive Location: </label>
            <select name="location" id="location">
              <option value="orca">Orca</option>
              <option value="dolphin">Dolphin</option>
              <option value="rp">Rocky Point</option>
              <option value="arctic">Arctic</option>
            </select>
          </div>
          <div className="cl-item">
            <label>Temperature: </label>
            <input type="text" placeholder="~ 70 degrees" />
          </div>
          <div className="cl-item">
            <label>Current: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Bottom Conditions: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Apparatus: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label for="gas">Gas Mixture: </label>
            <select name="gas" id="gas">
              <option value="air">Standard Air</option>
            </select>
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
          <div className="cl-item">
            <label>Surface Interval: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Left Surface: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>On Surface: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Bottom Time: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Residual Nitrogen Time or RNT Excep.: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Total Time: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>Decompression: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label for="depth">Maximum Depth: </label>
            <select name="depth" id="depth">
              <option value="15">15 ft.</option>
              <option value="20">20 ft.</option>
              <option value="30">30 ft.</option>
              <option value="40">40 ft.</option>
            </select>
          </div>
          <div className="cl-item">
            <label>Repetitive Group: </label>
            <input type="text" />
          </div>
        </div>
      </form>
    );
  }
}

export default WorkingDiver;