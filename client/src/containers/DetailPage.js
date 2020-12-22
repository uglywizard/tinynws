import { Button } from "@material-ui/core";
import Card from "../components/Card";
import React, { Component } from "react";

class DetailPage extends Component {
  state = {
    id: this.props.match.params.id,
    goBack: this.props.history.goBack,
    item: {},
  };

  fetchHttpRequestDetail = async (id) => {
    const url = process.env.REACT_APP_BACKEND_API_URL;
    let response = await fetch(url + `detail/${id}`);
    const data = await response.json();

    this.setState({
      item: data,
    });
  };

  componentDidMount() {
    this.fetchHttpRequestDetail(this.state.id);
  }

  render() {
    return (
      <div>
        <Card item={this.state.item}>
          <p>
            Estimated diameter: {this.state.item.estimated_diameter_min} -{" "}
            {this.state.item.estimated_diameter_max}{" "}
          </p>
          <p>Relative velocity: {this.state.item.relative_velocity} km/h</p>
          <p>
            Url:{" "}
            <a href={this.state.item.nasa_jpl_url}>
              {this.state.item.nasa_jpl_url}
            </a>
          </p>
        </Card>
        <Button
          variant='contained'
          color='primary'
          onClick={() => this.state.goBack()}>
          Back
        </Button>
      </div>
    );
  }
}

export default DetailPage;
