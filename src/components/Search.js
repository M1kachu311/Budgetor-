import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
        <div class="item">
            <div class="ui icon">
                <input type="text" placeholder="Search..."/>
                <i class="search link icon"></i>
            </div>
        </div>
    )
  }
}

export default Search
