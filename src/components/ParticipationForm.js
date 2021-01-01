import React from 'react'
import {
    Button,
    TextField,
    DialogActions,
    DialogContent,
    DialogContentText,
    Step,
    Stepper,
    StepLabel,
  } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { GoogleSpreadsheet } from "google-spreadsheet";

import './style.css'


function getSteps() {
    return ['Player information', 'Payment process'];
}


function ParticipationForm() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = React.useState({
        email: '',
        userName: ''
    })
    const [err, setErr] = React.useState('')
    const [alert, setAlert] = React.useState(false)

    const steps = getSteps();

    const handleNext = () => {
        if(validate()){
            setActiveStep((prevActiveStep) => prevActiveStep + 1) 
            setAlert(false)
        }else{
            setAlert(true)
        }
    };
    
    const handleBack = () => {
        setAlert(false)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }

    const validate = () => {
        const reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if(reg.test(data.email)){
            if(data.userName.length > 6){
                return true
            }else{
                setErr('Username length must be greater than 6')
                return false
            }
        }else{
            setErr('Invalid Email')
            return false
        }
    }

    const appendSpreadsheet = async () => {
        try {
            const response = await fetch("https://v1.nocodeapi.com/hasnatamir2/google_sheets/ggRoMQRZrNFEgxIk?tabId=Sheet1", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([
                    ["email",data['email'],"userName",data['userName']],
                ]),
            });
            const json = await response.json();
            console.log(json)
        } catch (e) {
          console.error('Error: ', e);
        }
        // console.log(validate())
    };

    function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return (<>
            <TextField 
                name="email" 
                label="Email" 
                type='email'
                variant="outlined" 
                value = {data.email}
                onChange={handleChange}
                margin="normal"
                fullWidth
                placeholder='abc@gmail.com' 
            />
            <TextField 
                name="userName" 
                label="Player User Name" 
                type='text'
                margin="normal"
                variant="outlined" 
                value = {data.userName}
                onChange={handleChange}
                fullWidth
                placeholder='killer bot' 
            /></>);
          case 1:
            return (<>
                <h4>We will be accepting payment soon</h4>
            </>);
          default:
            return 'Unknown stepIndex';
        }
    }

    return (
        <>
            <DialogContent>
                <DialogContentText>
                    To participate in this gaming tournamnet fill the form below
                    {alert ? <div className="alert">{err}</div> : <div></div>}
                </DialogContentText>
                <div>
                    {activeStep === steps.length ? (
                    <div>
                    
                        <h4 className='typo'>All completed</h4>
                        <div className="complete"><FontAwesomeIcon icon={['fas', 'check']}/></div>
                        <Button className="button" color="primary" onClick={() => appendSpreadsheet()} >submit</Button>
                    </div>
                    ) : (
                    <div>
                        <div className='typo'>{getStepContent(activeStep)}</div>
                        {console.log(data)}
                        <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className='button'
                        >
                            Back
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            className="button"
                            onClick={handleNext}
                        >
                            {activeStep === steps.length - 1 ? 'All Set' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </DialogContent>
            <DialogActions>
                
            </DialogActions>
        </>
    )
}

export default ParticipationForm
