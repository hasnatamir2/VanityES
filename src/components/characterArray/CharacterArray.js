import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../style.css'

// images
import image from '../../public/characters/Abc.png'


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
}));

const tileData = [
    {
        img: 'Abc.png',
        title: 'Abc',
        author: 'author',
        cols: 2,
    },
    {
        img: 'Omen.png',
        title: 'Omen',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Sova.png',
        title: 'Sova',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Abc.png',
        title: 'Abc',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 2,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 1,
    },
    {
        img: 'Viper.png',
        title: 'Viper',
        author: 'author',
        cols: 2,
    },
  ];

export default function CharacterArray() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360}  cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1} className={classes.gridList}>
          <div className="character-tile">
            <img src={image} alt={tile.title} className="characters"  />
            <div className="character-details">
                <h3>{tile.title}</h3>
                <h5>DUELIST</h5>
                <p>Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”</p>
            </div>
          </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
