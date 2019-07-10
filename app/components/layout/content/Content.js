/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import Tablee from '../table/Table.js';
import TableSorting from '../table/TableSorting';

class Content extends Component {
  render() {
    return (
      <section>
        <div className="tieude">
          <h2>Dữ Liệu Nằm Ở Đây</h2>
        </div>
        <TableSorting />
      </section>
    );
  }
}

export default Content;
