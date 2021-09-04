import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Accolade } from '../Accolade';

interface Props {
  accolade: Accolade;
}

function getTitle(name: string, points?: number): string {
  if (points) {
    return `${name}: ${points} fpts`;
  }
  return name;
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

export default function TeamAccolade({ accolade }: Props) {
  const classes = useStyles();
  const { id, payout, team, title, week } = accolade;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {week}
          </Avatar>
        }
        title={getTitle(team.name, team.points)}
        subheader={title}
      />
      <CardMedia
        className={classes.media}
        image={`/static/${id}.png`}
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