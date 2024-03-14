
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CheckoutStepper from './CheckoutStepper';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    minWidth:"700px",
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Checkout({ openCheckout, setOpenCheckout }) {
    ;
    const handleCheckoutClose = () => setOpenCheckout(false);

    return (
        <div>
            <Modal
                open={openCheckout}
                onClose={handleCheckoutClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CheckoutStepper />
                </Box>
            </Modal>
        </div>
    );
}