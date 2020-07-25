import React, { Component } from 'react';
import Table from '../components/common/table';
import Like from '../components/common/like';

// const x = <h1></h1>;  // React Element = JS Object {}

class MoviesTable extends Component {
    columns = [  // Columns object is not part of the state because it won't change throughout the lifecycle of this component.
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like', 
          content: movie => (<Like liked={movie.liked} 
                         onClick={() => this.props.onLike(movie)} />) },
        { key: 'delete', 
          content: movie => (<button onClick={() => this.props.onDelete(movie)} 
                                     className="btn btn-danger btn-sm">
                             Delete
                             </button>
                            ) 
        }
    ];
    
    render() { 
        const { movies, sortColumn, onSort } = this.props;
    
        return ( 
            <Table 
                columns={this.columns} 
                data={movies} 
                sortColumn={sortColumn} 
                onSort={onSort} /> 
         );
    };
};
 
export default MoviesTable;