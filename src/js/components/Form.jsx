import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
function mapDispatchToProps(dispatch) {
  return {
    addArticleIn: article => {
      dispatch(addArticle(article));
    }
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentWillMount() {
  //   alert("componentWillMount");
  // }
  // componentDidMount() {
  //   alert("componentDidMount");
  // }
  // shouldComponentUpdate() {
  //   alert("shouldComponentUpdate");
  //   return true;
  // }
  // componentWillUpdate() {
  //   alert("componentWillUpdate");
  // }
  // componentDidUpdate() {
  //   alert("componentDidUpdate");
  // }
  // componentWillReceiveProps() {
  //   alert("componentWillReceiveProps");
  // }

  // componentWillUnmount() {
  //   alert("componentWillUnmount");
  // }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, message } = this.state;
    const id = uuidv1();
    this.props.addArticleIn({ article: { title, id }, message });
    this.setState({ title: "", message: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
