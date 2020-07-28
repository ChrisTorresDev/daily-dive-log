import React from 'react';

class PostDive extends React.Component {

  render() {
    return (
      <div className="post-dive">
        <div className="cl-item">
          <h4>POST DIVING STATEMENT TO BE SIGNED BY THE WORKING DIVER:</h4>
          <label>I have reviewed the dive record and reported any errors to the Supervisor/DPIC for correction. I have been advised of the procedures to be used during the dive and have reported any physiological effects including decompression illness that I maybe experiencing now. I have been alerted to the potential hazards of flying after diving. </label>
          <input type="text" />
        </div>
      </div>
    )
  }
}

export default PostDive;