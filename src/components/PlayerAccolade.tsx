import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { PlayerAccolade } from '../Accolade';

interface Props {
  accolade: PlayerAccolade;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 350,
      height: 350
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: "contain"
    },
    avatar: {
    },
  }),
);

export default function Accolade({ accolade }: Props) {
  const classes = useStyles();
  const { imageUrl, payout, player, team, title, week } = accolade;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {week}
          </Avatar>
        }
        title={`${player.firstName} ${player.lastName}: ${player.points} fpts`}
        subheader={title}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Manager: {`${team.user.firstName} ${team.user.lastName}`}
          <br/>
          Payout: ${payout}
        </Typography>
      </CardContent>
    </Card>
  );
}