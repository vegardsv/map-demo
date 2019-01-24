import React, { Component } from "react";
import styled from "styled-components";
import FETCH_STATUS from "./fetchStatus";

const FieldLabel = styled.span`
  color: "blue";
  display: block;
`;

const Submit = styled.input.attrs({ type: "submit" })`
  display: block;
`;

const PaddedPage = styled.div`
  padding: 2em;
`;

const Card = styled.li`
  display: inline-block;
  margin: 1em;
  background-color: #fff;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const CardImage = styled.img`
  display: block;
`;

const CardText = styled.span`
  padding: 1em;
  display: block;
`;

class Meters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchMeters: FETCH_STATUS.UNTOUCHED,
      meters: [
        {
          id: "1",
          latitude: 63.398171,
          longitude: 10.359139,
          thumbnail: "http://placekitten.com/100/100"
        },
        {
          id: "2",
          latitude: 63.395202,
          longitude: 10.395073,
          thumbnail: "http://placekitten.com/200/200"
        },
        {
          id: "3",
          latitude: 63.404744,
          longitude: 10.367655,
          thumbnail: "http://placekitten.com/300/300"
        },
        {
          id: "4",
          latitude: 63.439163,
          longitude: 10.459903,
          thumbnail: "http://placekitten.com/400/400"
        }
      ]
    };
  }

  render() {
    return (
      <PaddedPage>
        <form
          onSubmit={e => {
            e.preventDefault();
            Promise.resolve("")
              .then(() =>
                this.setState({
                  fetchMeters: FETCH_STATUS.FETCHING
                })
              )
              .then(() => fetch("http://localhost:3001/meters"))
              .then(response => response.json())
              .then(json =>
                this.setState({
                  fetchMeters: FETCH_STATUS.FETCH_DONE,
                  meters: json
                })
              );
          }}
        >
          <label htmlFor="search">
            <FieldLabel>Meter search</FieldLabel>
          </label>
          <input type="search" id="search-field" name="search-field" />
          <Submit value="Search" />
        </form>

        <ul>
          {this.state.meters.map(({ id, thumbnail }) => (
            <Card>
              <CardImage width="100%" height="auto" src={thumbnail} />
              <CardText>{thumbnail}</CardText>
            </Card>
          ))}
        </ul>

        <pre>{JSON.stringify(this.state.meters, null, 3)}</pre>
      </PaddedPage>
    );
  }
}

export default Meters;
