import React, { Component } from 'react';
import Tablee from '../table/Table.js';

class Content extends Component {
    render() {
        return (
            <section>
                <div className="tieude">
                    <h2>Dữ Liệu Nằm Ở Đây</h2>
                </div>
                <Tablee/>
            </section>
        );
    }
}

export default Content;