import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

export default class NewSongForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            url: ''
        };
    }

    handleTitleChange = (e) => this.setState({title: e.target.value});
    handleUrlChange = (e) => this.setState({url: e.target.value});
    
    addSong = () => {
        this.props.addSong(this.state.title, this.state.url);
    };

    isValid = () => {
        return this.state.title.length !== 0 && this.state.url.length !== 0;
    };

    render() {
        return (
          <form>
              <FormGroup>
                  <ControlLabel>Song title</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <ControlLabel>Backing track URL</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.url}
                    onChange={this.handleUrlChange}
                  />
              </FormGroup>
              <Button
                disabled={!this.isValid()}
                onClick={this.addSong}
              >
                  Add
              </Button>
              <Button onClick={this.props.hideForm}>
                  Cancel
              </Button>
          </form>
        )
    }
}
