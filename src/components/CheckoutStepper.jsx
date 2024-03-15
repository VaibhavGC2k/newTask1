import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BillingAddress from '../pages/BillingAddress';
import PaymentPage from '../pages/PaymentPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import { redirect, useNavigate } from 'react-router-dom';

const steps = [
  {
    label: 'Billing Address',
    description: <BillingAddress />
  },
  {
    label: 'Payment Method',
    description: <PaymentPage />
  },
  {
    label: 'Confirmation',
    description: <ConfirmationPage />
  },
];

export default function CheckoutStepper({ handleCheckoutClose }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleGoToMarketplace = () => {
    handleCheckoutClose()
    navigate('/marketplace')
  };

  const navigate = useNavigate()
  return (
    <>

      <Stepper activeStep={activeStep} orientation="vertical" sx={{
        padding: "10px",

      }} >
        {steps.map((step, index) => (
          <Step key={step.label} sx={{ maxHeight: "300px", overflow: "auto", }}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography sx={{ fontSize: "17px" }} >Last step</Typography>
                ) : null
              }
            >
              <Typography sx={{ fontSize: "17px" }} >
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant='h6'>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: "white !important" }}

                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleGoToMarketplace} sx={{ mt: 1, mr: 1 }}>
            Go to Marketplace
          </Button>
        </Paper>
      )}
    </>
  );
}