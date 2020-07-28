import React from 'react';

class Checklist extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="checklist">
          <div className="cl-item">
            <h4>SEA DAILY DIVE LOG / CHECKLIST</h4>
            <label for="facility">Facility Name: </label>
            <select name="facility" id="facility">
              <option value="swc">SWC</option>
            </select>
          </div>
          <div className="cl-item">
            <label>Date: </label>
            <input type="date" name="date" />
          </div>
          <div className="cl-item">
            <label>DPIC (Enter Full Name): </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label>All Divers Fit to Dive and Perfom All Duties: </label>
            <input type="text" placeholder="(WD/SBD/DPIC Initial)" />
          </div>
          <div className="cl-item">
            <label>First Aid Kit & Backboard </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Oxygen </label>
            <input type="text" placeholder="(PSI)" />
            <label> Initial </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Landline </label>
            <input type="checkbox" />
            <br/>
            <label> checkbox </label>
            <input type="checkbox" />
            <label> VHF(Boat) </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Review P&A </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Dive Manual On Site </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Pre-dive Briefing </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>SAR Contact (Offshore) </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Flag "ALPHA" (Offshore) </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>LO/TO or Animal Accountability </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>SDS </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label>Post Dive Physical Assement (10min after dive) </label>
            <input type="checkbox" />
          </div>
          <div className="cl-item">
            <label for="accedent">Injury / Illness / Incident </label>
            <select name="accedent" id="Accedent">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="cl-item">
            <label>Work Description: </label>
            <input type="text" />
          </div>
          <div className="cl-item">
            <label for="buddy">Buddy Diver: </label>
            <select name="buddy" id="buddy">
              <option value="chris">Chris Torres</option>
              <option value="cate">Cate Vaz</option>
              <option value="nick">Nick Herrel</option>
              <option value="michael">Michael Woodard</option>
              <option value="katie">Katie Taylor</option>
              <option value="taylor">Taylor Wren</option>
              <option value="jason">Jason Carroll</option>
              <option value="maddie">Maddie Gates</option>
              <option value="josh">Josh</option>
              <option value="ethen">Ethen</option>
            </select>
          </div>
        </div>
      </form>
    )
  }
}

export default Checklist;