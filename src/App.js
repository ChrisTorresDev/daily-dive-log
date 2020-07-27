import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>

        <div className="checklist">
          <div className="column">
            <h4>SEA DAILY DIVE LOG / CHECKLIST</h4>
            <label for="facility">Facility Name: </label>
            <select name="facility" id="facility">
              <option value="swc">SWC</option>
            </select>
          </div>
          <div className="column">
            <label>Date: </label>
            <input type="text" name="date" />
          </div>
          <div className="column">
            <label>DPIC (Enter Full Name): </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>All Divers Fit to Dive and Perfom All Duties: </label>
            <input type="text" placeholder="(WD/SBD/DPIC Initial)" />
          </div>
          <div className="column">
            <label>First Aid Kit & Backboard </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Oxygen </label>
            <input type="text" placeholder="(PSI)" />
            <label> Initial </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Landline </label>
            <input type="radio" />
            <label> Radio </label>
            <input type="radio" />
            <label> VHF(Boat) </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Review P&A </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Dive Manual On Site </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Pre-dive Briefing </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>SAR Contact (Offshore) </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Flag "ALPHA" (Offshore) </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>LO/TO or Animal Accountability </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>SDS </label>
            <input type="text" placeholder="Initials" />
            <label> N/A </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label>Post Dive Physical Assement (10min after dive) </label>
            <input type="radio" />
          </div>
          <div className="column">
            <label for="accedent">Injury / Illness / Incident </label>
            <select name="accedent" id="Accedent">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="column">
            <label>Work Description: </label>
            <input type="text" />
          </div>
          <div className="column">
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

        <div className="wd">
          <div className="column">
            <h4>WORKING DIVER</h4>
          </div>
          <div className="column">
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
          <div className="column">
            <label>Gear Function Test: </label>
            <input type="text" placeholder="(WD/DPIC Initial)" />
          </div>
          <div className="column">
            <label for="location">Dive Location: </label>
            <select name="location" id="location">
              <option value="orca">Orca</option>
              <option value="dolphin">Dolphin</option>
              <option value="rp">Rocky Point</option>
              <option value="arctic">Arctic</option>
            </select>
          </div>
          <div className="column">
            <label>Temperature: </label>
            <input type="text" placeholder="~ 70 degrees" />
          </div>
          <div className="column">
            <label>Current: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Bottom Conditions: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Apparatus: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label for="gas">Gas Mixture: </label>
            <select name="gas" id="gas">
              <option value="air">Standard Air</option>
            </select>
          </div>
          <div className="column">
            <label>Gear # (s): </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Main Tank Inventory #: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Main Tank PSI: </label>
            <input type="text" placeholder="MIN 2000 PSI" />
          </div>
          <div className="column">
            <label>RAS Tank Inventory #: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>RAS Tank PSI: </label>
            <input type="text" placeholder="MIN 2000 PSI" />
          </div>
          <div className="column">
            <label>Surface Interval: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Left Surface: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>On Surface: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Bottom Time: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Residual Nitrogen Time or RNT Excep.: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Total Time: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Decompression: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label for="depth">Maximum Depth: </label>
            <select name="depth" id="depth">
              <option value="15">15 ft.</option>
              <option value="20">20 ft.</option>
              <option value="30">30 ft.</option>
              <option value="40">40 ft.</option>
            </select>
          </div>
          <div className="column">
            <label>Repetitive Group: </label>
            <input type="text" />
          </div>
        </div>

        <div className="sbd">
          <div className="column">
            <h4>STANDBY DIVER</h4>
          </div>
          <div className="column">
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
          <div className="column">
            <label>Gear Function Test: </label>
            <input type="text" placeholder="(SBD/DPIC Initial)" />
          </div>
          <div className="column">
            <label>Gear # (s): </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Main Tank Inventory #: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>Main Tank PSI: </label>
            <input type="text" placeholder="MIN 2000 PSI" />
          </div>
          <div className="column">
            <label>RAS Tank Inventory #: </label>
            <input type="text" />
          </div>
          <div className="column">
            <label>RAS Tank PSI: </label>
            <input type="text" placeholder="MIN 2000 PSI" />
          </div>
        </div>

        <div className="post-dive">
          <div className="column">
            <h4>POST DIVING STATEMENT TO BE SIGNED BY THE WORKING DIVER:</h4>
            <label>I have reviewed the dive record and reported any errors to the Supervisor/DPIC for correction. I have been advised of the procedures to be used during the dive and have reported any physiological effects including decompression illness that I maybe experiencing now. I have been alerted to the potential hazards of flying after diving. </label>
            <input type="text"/>
          </div>
        </div>

        <div className="reviewed">
          <div className="column">
            <h4>REVIEWED BY</h4>
            <label>Signature: </label>
            <input type="text"/>
          </div>
        </div>

      </form>
    </div>
  );
}

export default App;

