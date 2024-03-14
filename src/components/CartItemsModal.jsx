import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "60%",
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
    const cartItems = useSelector((state) => state.cart.cartItems)
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)

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
                {
                    cartItems.length === 0 ? 
                    <Typography variant='h6' color="error">
                        Your cart is Empty..
                    </Typography> 
                    
                    :

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
                                    {cartItems.map((eachItem, index) =>

                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                                            <TableCell align="left">{eachItem.item}</TableCell>
                                            <TableCell align="left">{eachItem.amount}</TableCell>
                                            <TableCell align="left">{eachItem.cartQuantity}</TableCell>
                                            <TableCell align="left">{eachItem.cartQuantity * eachItem.amount}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                                <Divider sx={{ width: "100%" }} />
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={0}></TableCell>
                                    <TableCell colSpan={0}></TableCell>
                                    <TableCell colSpan={0}>Subtotal</TableCell>
                                    <TableCell align="left">{cartTotalAmount}</TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                }
                <hr />
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