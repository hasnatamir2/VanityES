import React from 'react'
import {
  Dialog,
  DialogTitle,
} from '@material-ui/core';
import ParticipationForm from './ParticipationForm'
import './style.css'
import CharacterArray from './characterArray/CharacterArray' 


  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
  
function GameInfo(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="gameInfo" id="game">
        <h3 className="heading">Know the Agents</h3>
          <CharacterArray/>
          <div className="participate" id="participate">
            <h4 className="">
              VALORANT
            </h4>
              A 5v5 character-based tactical shooter
            <p id="timer">{setTimeout}</p>
            <button className="button" onClick={handleClickOpen} >participate</button>
          </div>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Participate</DialogTitle>
              <ParticipationForm/>
          </Dialog>
        </div>
    )
}

export default GameInfo
