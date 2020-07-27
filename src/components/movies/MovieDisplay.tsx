import React from "react";
import { Item } from "../../models/movie.model";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 400,
    marginTop: 20,
    marginRight: 20,
  },
});

const HtmlTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: "white",
    maxWidth: 345,
    fontSize: theme.typography.pxToRem(16),
    border: "none",
  },
}))(Tooltip);

export function MovieDisplay(props: { item: Item }) {
  const classes = useStyles();
  const item = props.item;
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={"http://image.tmdb.org/t/p/w342/" + item.poster_path}
            title="Contemplative Reptile"
          />
          <div
            style={{
              overflow: "hidden",
              height: "150px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                {item.title}
              </Typography>
              <HtmlTooltip
                arrow
                title={<React.Fragment>{item.overview}</React.Fragment>}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ textOverflow: "ellipsis" }}
                >
                  {item.overview}
                </Typography>
              </HtmlTooltip>
            </CardContent>
          </div>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
    // <div className={`mt-4 col-xs-1 col-sm-4 ${styles.container}`}>
    //   <Box
    //     component="span"
    //     display="block"
    //     p={1}
    //     m={1}
    //     bgcolor="background.paper"
    //     textOverflow="ellipsis"
    //   >
    //     <img
    //       className={styles.image}
    //       alt={item.original_title + " Image"}
    //       src={"http://image.tmdb.org/t/p/w342/" + item.poster_path}
    //     />
    //     <div className={styles.middle}>
    //       <div className={styles.text}>{item.overview}</div>
    //     </div>
    //   </Box>
    // </div>
  );
}
