import React from 'react';

class Review extends React.Component {

  render() {
    return (
      <form>
        <div className="reviewed">
          <div className="cl-item">
            <h4>REVIEWED BY</h4>
            <label>Signature: </label>
            <input type="text" />
          </div>
        </div>
      </form>
    )
  }
}

export default Review;