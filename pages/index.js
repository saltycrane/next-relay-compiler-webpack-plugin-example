import React from "react";
import { graphql, QueryRenderer } from "react-relay";

const environment = undefined;

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query pagesUserQuery {
            user(rowId: 1) {
              name
              rowId
            }
          }
        `}
        variables={{}}
        render={() => null}
      />
    );
  }
}
