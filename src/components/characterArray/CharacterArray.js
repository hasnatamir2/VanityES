import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  GridList,
  GridListTile,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import '../style.css'

// images
import Breach from '../../public/characters/Breach.png'
import Brimestone from '../../public/characters/Brimestone.png'
import Cypher from '../../public/characters/Cypher.png'
import Jett from '../../public/characters/Jett.png'
import Killjoy from '../../public/characters/Killjoy.png'
import Omen from '../../public/characters/Omen.png'
import Phoenix from '../../public/characters/Phoenix.png'
import Raze from '../../public/characters/Raze.png'
import Reyna from '../../public/characters/Reyna.png'
import Sage from '../../public/characters/Sage.png'
import Skye from '../../public/characters/Skye.png'
import Sova from '../../public/characters/Sova.png'
import Viper from '../../public/characters/Viper.png'


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
  },
}));

const tileData = [
    {
        img: Breach,
        title: 'Breach',
        role: 'INITIATOR',
        desc: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
        cols: 6,
        smCol: 5.5,
    },
    {
        img: Brimestone,
        title: 'Brimestone',
        role: 'CONTROLLER',
        desc: 'Joining from the USA, Brimstones orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.',
        cols: 3,
        smCol: 6,
    },
    {
        img: Sova,
        title: 'Sova',
        role: 'INITIATOR',
        desc: 'Born from the eternal winter of Russias tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.',
        cols: 3,
        smCol: 6,
    },
    {
        img: Viper,
        title: 'Viper',
        role: 'CONTROLLER',
        desc: 'The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemys vision. If the toxins dont kill her prey, her mind games surely will.',
        cols: 3,
        smCol: 6,
    },
    {
        img: Cypher,
        title: 'Cypher',
        role: 'SENTINEL',
        desc: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemys every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.',
        cols: 3,
        smCol: 6,
    },
    {
        img: Jett,
        title: 'Jett',
        role: 'DUELIST',
        desc: 'Representing her home country of South Korea, Jetts agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.',
        cols: 3,
        smCol: 6,
    },
    {
        img: Killjoy,
        title: 'Killjoy',
        role: 'SENTINEL',
        desc: 'The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesnt stop her enemies, her robots debuff will help make short work of them.',
        cols: 3,
        smCol: 6,
    },
    {
        img: Omen,
        title: 'Omen',
        role: 'CONTROLLER',
        desc: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        cols: 3,
        smCol: 6,
    },
    {
        img: Phoenix,
        title: 'Phoenix',
        role: 'DUELIST',
        desc: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        cols: 6,
        smCol: 6,
    },
    {
        img: Raze,
        title: 'Raze',
        role: 'DUELIST',
        desc: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
        cols: 3,
        smCol: 6,
    },
    {
        img: Reyna,
        title: 'Reyna',
        role: 'DUELIST',
        desc: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        cols: 3,
        smCol: 6,
    },
    {
        img: Sage,
        title: 'Sage',
        role: 'SENTINEL',
        desc: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        cols: 3,
        smCol: 6,
    },
    {
        img: Skye,
        title: 'Skye',
        role: 'INITIATOR',
        desc: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.",
        cols: 6,
        smCol: 6,
    },
  ];

export default function CharacterArray() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} className={classes.gridList} cols={12}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.title} 
            cols={matches ? tile.smCol : tile.cols}
          >
            <div className="character-tile">
              <img src={tile.img} alt={tile.title} className="characters"  />
              <div className="character-details">
                  <h3>{tile.title}</h3>
                  <h5>{tile.role}</h5>
                  <p>{tile.desc}</p>
              </div>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
