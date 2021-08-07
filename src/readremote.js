import React, { Component } from 'react';
import { readRemoteFile } from 'react-papaparse';

export default class ReadRemoteFile extends Component {
  handleClick = () => {
    readRemoteFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vTM6bCzKLeNnXQsvYCI5y0avGCg_Yu5DvlBH6dSwdQvMtld58_A1JUbEHcgYJLdPifUWKjfxEWVVsYc/pub?gid=0&single=true&output=csv', {
      complete: (results) => {
        console.log('Results:', results);
      },
    });
  };

  render() {
    return <button onClick={this.handleClick}>readRemoteFile</button>;
  }
}