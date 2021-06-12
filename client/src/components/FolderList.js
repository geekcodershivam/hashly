import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: '#f5f6f7',
    overflow: 'auto',
    fontWeight: '500',
  },
}));

export default function FolderList(props) {
  const classes = useStyles();

  const renderlist = props.result.map((obj, idx) => (
    <span
      className="bitlink-item--ACTIVE"
      onClick={(e) => props.handleSideView(idx)}
    >
      <time
        className="bitlink-item--created-date"
        datetime={obj['createAt'].split('T')[0]}
      >
        {obj['createAt'].split('T')[0]}
      </time>
      <div className="bitlink-item--title">{obj['originalUrl']}</div>
      <div>
        <div className="bitlink--MAIN">
          <span className="bitlink--hash">/{obj['slug']}</span>
        </div>
        <span class="click-count--MAIN">
          <SendIcon color="secondary" />
        </span>
      </div>
    </span>
  ));

  const renderEmpty = (
    <ListItem className="ListItem">
      <ListItemText primary="Empty Item" secondary="NA" />
    </ListItem>
  );

  return (
    <List className={classes.root}>
      <span className="list--total">{props.result.length} Links</span>
      {props.result.length === 0 ? renderEmpty : renderlist}
    </List>
  );
}
