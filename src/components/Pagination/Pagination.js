// @flow
import React, { Component, type Node } from 'react'; // eslint-disable-line

type Props = {
  limit?: number,
  offset?: number,
  onLoadMore: (limit: number, offset: number) => void,
  children: ({ limit: number, offset: number, loadMore: () => void }) => Node,
};
type State = {
  limit: number,
  offset: number,
};

class Pagination extends Component<Props, State> {
  initialState = {
    limit: this.props.limit || 5,
    offset: this.props.offset || 0,
  };

  state = this.initialState;

  loadMore = () => {
    this.setState(
      prevState => ({
        offset: prevState.offset + this.initialState.limit,
      }),
      () => {
        this.props.onLoadMore(this.state.limit, this.state.offset);
      },
    );
  };

  render() {
    return this.props.children({
      limit: this.state.limit,
      offset: this.state.offset,
      loadMore: this.loadMore,
    });
  }
}

export default Pagination;
