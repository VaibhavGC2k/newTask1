
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { addToCart, removeFromCart, deleteFromCart } from '../features/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CloseIcon from '@mui/icons-material/Close';
import Checkout from './Checkout';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "60%",
    bgcolor: 'background.paper',
    border: '1px dotted blue',
    boxShadow: 24,
    padding: "20px",
    borderTopRightRadius: '30px',
    borderBottomLeftRadius: '30px',

};


export default function CartItemsModal({ openCart, setOpen }) {
    const [openCheckout, setOpenCheckout] = useState(false);
    const handleOpenCheckout = () => {
        setOpen(false)
        setOpenCheckout(true)
    }

    const handleClose = () => {
        setOpen(() => false)
    }
    const cartItems = useSelector((state) => state.cart.cartItems)
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)
    const dispatch = useDispatch()
    if (openCart)
        return (
            <Modal
                open={openCart}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography variant="h6" component="h2">
                        Your Items
                    </Typography>
                    {
                        cartItems.length === 0 ?
                            <Typography variant='h6' color="error">
                                Your cart is Empty..
                            </Typography>
                            :
                            <TableContainer >
                                <Table sx={{ minWidth: 650, margin: "20px" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Sl NO.</TableCell>
                                            <TableCell>Item Name</TableCell>
                                            <TableCell align="left">Price</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="left">Amount</TableCell>
                                            <TableCell align="left">Remove Item</TableCell>
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
                                                <TableCell align="center" sx={{ display: "flex", justifyContent: "space-around" }}><IndeterminateCheckBoxIcon onClick={() => dispatch(removeFromCart(eachItem))} />{eachItem.cartQuantity}<AddBoxIcon onClick={() => dispatch(addToCart(eachItem))} /></TableCell>
                                                <TableCell align="left">{eachItem.cartQuantity * eachItem.amount}</TableCell>
                                                <TableCell align="left">{<DeleteIcon onClick={() => dispatch(deleteFromCart(eachItem))} />}</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    <TableRow sx={{ borderTop: "2px solid blue", borderBottom: "2px solid blue" }}>
                                        <TableCell rowSpan={3} />
                                        <TableCell colSpan={0}></TableCell>
                                        <TableCell colSpan={0}></TableCell>
                                        <TableCell colSpan={0}>Subtotal</TableCell>
                                        <TableCell align="left">{cartTotalAmount}</TableCell>
                                    </TableRow>
                                </Table>
                            </TableContainer>
                    }
                    <br />
                    <br />
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button onClick={handleClose} endIcon={<CloseIcon />} variant='outlined' color="error" sx={{
                            '&:hover': {
                                color: "white",
                                backgroundColor: "rgb(240, 96, 77)"
                            }
                        }}>Close</Button>
                        {
                            cartItems.length !== 0 ?
                                <Button onClick={handleOpenCheckout}
                                    endIcon={<ShoppingCartCheckoutIcon />}
                                    variant='outlined' color="primary" sx={{
                                        '&:hover': {
                                            color: "white",
                                            backgroundColor: "rgb(67, 130, 224)"
                                        }
                                    }}>Checkout</Button> : null
                        }
                    </Box>
                </Box>
            </Modal>
        )
    if (openCheckout)
        return <Checkout setOpenCheckout={setOpenCheckout} openCheckout={openCheckout} />
}