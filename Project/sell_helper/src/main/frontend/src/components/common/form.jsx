import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SelectInput from "./selectInput";
import SearchBar from "./searchBar";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };
  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error }; //copy error in state
    const errorMessage = this.validateProperty(input); // pass the input(input tage) to another function
    if (errorMessage) error[input.name] = errorMessage;
    // set the property of error according to input.name, to errorMessage.
    else delete error[input.name]; // if there is no errorMessage, delete the property of error according to input.name

    const data = { ...this.state.data };
    data[input.name] = input.value; //this is for update input field when user type somethings
    this.setState({ data, error }); // I forgeot to update {error} as well, so the error message didn't display
  };
  handleSubmit = (e) => {
    this.doSubmit();
    e.preventDefault();

    const error = this.validate();
    this.setState({ error: error || {} }); // if error === null, then error = {}
    if (error) return;
  };
  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);
    console.log(result);
    // Joi.validate([object we want to validate], [validation schema],{abortEarly})
    if (!result.error) return null; //if no error, return null
    const error = {}; // set error object in state
    //iterate the "details" array to get output
    result.error.details.map(
      (item) => (error[item.path[0]] = item.message)
      //item.path[0] gives the property name of error, and item.message gives the error message
    );

    return error;
  };
  validateProperty = ({ name, value }) => {
    //since we can't just do "Joi.validate(this.state.data, this.schema);"
    // it gonna validate the entire form. but we want just validate single field
    // first, we need to extract the single field from state and schema
    // computed property method is used for easier way implement
    //@name, name of input field
    //@value, the error message

    const obj = { [name]: value }; // this is a computed property
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null; // I forgot ".message" here cause error
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, error } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  }
  renderSelectInput(name, label, options) {
    const { data, error } = this.state;
    return (
      <SelectInput
        options={options} // the options
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  }

  renderSearchBar(name, label) {
    const { data, error } = this.state;
    return (
      <SearchBar
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  }
}

export default Form;
