import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles, CircularProgress, Avatar } from 'material-ui';

import PatreonService from '../../../services/PatreonService';

class PatreonSponsors extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    patrons: null,
  }

  componentDidMount = () => {
    PatreonService.getPatrons()
      .then(patrons => this.setState({ patrons }));
  }

  render() {
    const { classes } = this.props;

    if (!this.state.patrons) {
      return <CircularProgress className={classes.spinner} />;
    }

    if (this.state.patrons.length === 0) {
      return 'There is no sponsors yet 😢';
    }

    return (
      <List className={classes.patronList}>
        {
          this.state.patrons.map(patron => (
            <Link
              key={patron.full_name}
              to={patron.url}
              target="_blank"
              rel="noopenner noreferrer"
            >
              <ListItem button>
                <Avatar alt={patron.full_name} src={patron.image_url} />
                <ListItemText primary={patron.full_name} secondary={patron.email} />
              </ListItem>
            </Link>
          ))
        }
      </List>
    );
  }
}

const styles = {
  spinner: {
    margin: '0 auto',
  },
  patronList: {
    maxWidth: 400,
    margin: '0 auto',
  },
};

export default withStyles(styles)(PatreonSponsors);
