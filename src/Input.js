import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  render() {
    console.log(this.props.success)
    const contents = this.props.success
      ? null :
      (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="Enter a guess" />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      );
    return (
      <div data-test="component-input">
        { contents }
      </div>
    )
  }
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
