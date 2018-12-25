import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class Beer extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        let props = this.props;
        console.log(props)
        const { classes } = props;
        let imageURL = ""
        if (props.beer.fields.heroUrl) {
            imageURL = props.beer.fields.heroUrl;
        }
        return (
            <div>
                {props.beer ? (
                    <Card className={classes.card}>
                        <CardHeader
                            title={props.beer.fields.name}
                            subheader="Kegged on November 14, 2018"
                        />
                        <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                            image={imageURL}
                        />
                        <CardContent>
                            <Typography variant="subheading" style={{ marginBottom: 14 }} gutterBottom align="center">
                                {props.beer.fields.type}
                            </Typography>
                            <Typography style={{ marginBottom: 20 }} component="p" align="center">
                                {props.beer.fields.shortDescription}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                ABV: <b>{props.beer.fields.abv}</b>
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                IBU: <b>{props.beer.fields.ibu}</b>
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                          <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton
                            className={classnames(classes.expand, {
                              [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <Typography paragraph>
                              {props.beer.fields.longDescription}
                            </Typography>
                          </CardContent>
                        </Collapse>
                    </Card>
                ) : null}
            </div>
        )
    };
}

export default withStyles(styles)(Beer);