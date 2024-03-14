import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxidth: 400,
    bgcolor: 'background.paper',
    border: '1px dotted blue',
    boxShadow: 24,
    p: 4,
};

export default function CartItemsModal({ openCart, setOpen }) {
    const handleClose = () => {
        console.log("modal", openCart)
        setOpen(() => false)
    }
    return (


        <Modal
            open={openCart}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Your Items
                </Typography>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl NO.</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">efecc</TableCell>
                                <TableCell align="left">dcdc</TableCell>
                                <TableCell align="left">dcd</TableCell>
                                <TableCell align="left">dcd</TableCell>
                                <TableCell align="left">dcdc</TableCell>
                            </TableRow>
                        </TableBody>
                        <Divider sx={{width:"100%"}}/>
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={0}></TableCell>
                            <TableCell colSpan={0}></TableCell>
                            <TableCell colSpan={0}>Subtotal</TableCell>
                            <TableCell align="left">7171</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
                <Button onClick={handleClose} variant='outlined' color="error" sx={{
                    '&:hover': {
                        color: "white",
                        backgroundColor: "rgb(240, 96, 77)"
                    }
                }}>Close</Button>
            </Box>
        </Modal>

    );
}