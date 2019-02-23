import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerDog } from "../../actions/authActions";
import classnames from "classnames";

class AddDog extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      age: "",
      breed: "",
      gender: "",
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newDog = {
      email: this.state.email,
      name: this.state.name,
      age: this.state.age,
      breed: this.state.breed,
      gender: this.state.gender
    };

    this.props.registerDog(newDog, this.props.history);  // push dog directly to array here?
  };

  render() {
    const  errors  = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  name="email"
                  type="text"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />

                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <label htmlFor="name">Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  name="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />

                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <label htmlFor="age">Age</label>
                <input
                  onChange={this.onChange}
                  value={this.state.age}
                  error={errors.age}
                  id="age"
                  type="age"
                  className={classnames("", {
                    invalid: errors.age
                  })}
                />
                <span className="red-text">{errors.age}</span>
              </div>
              <div className="input-field col s12">
                              <label htmlFor="breed">Breed</label>
                <input
                  onChange={this.onChange}
                  value={this.state.breed}
                  error={errors.breed}
                  id="breed"
                  type="breed"
                  className={classnames("", {
                    invalid: errors.breed
                  })}
                />
                <span className="red-text">{errors.breed}</span>
              </div>
              <div className="input-field col s12">
                              <label htmlFor="gender">Gender</label>

                <input
                  onChange={this.onChange}
                  value={this.state.gender}
                  error={errors.gender}
                  id="gender"
                  type="gender"
                  className={classnames("", {
                    invalid: errors.gender
                  })}
                />
                <span className="red-text">{errors.gender}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Add Dog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddDog.propTypes = {
  registerDog: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerDog }
)(withRouter(AddDog));