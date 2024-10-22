import React from "react";
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";

const CartDetailsCard = ({ handleIncrement, handleDecrement, handleRemove, handleEmptyCart, totalAmount }) => {
  // Sample cart item data
  const {cart} = useSelector((state) => state.allCart);
  

  return (
    <div className="p-6"> {/* Tailwind padding class */}
      <Typography variant="h4" className="font-bold mb-4"> {/* Tailwind margin-bottom */}
        Cart Calculation
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        className="mb-4"
        onClick={handleEmptyCart}
        disabled={cart.length === 0}
      >
        Empty Cart
      </Button>

      <TableContainer component={Paper} className="shadow-lg"> {/* Tailwind for shadow */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Hardcoded values instead of mapping */}
            <TableRow key={1}>
              <TableCell>Burger</TableCell>
              <TableCell>$10</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <IconButton size="small" onClick={() => handleDecrement({ id: 1 })}>
                    <RemoveIcon />
                  </IconButton>
                  <span className="mx-2">2</span> {/* Hardcoded quantity */}
                  <IconButton size="small" onClick={() => handleIncrement({ id: 1 })}>
                    <AddIcon />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>$20</TableCell> {/* Hardcoded total for 2 Burgers */}
              <TableCell>
                <IconButton color="secondary" onClick={() => handleRemove({ id: 1 })}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>Pizza</TableCell>
              <TableCell>$15</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <IconButton size="small" onClick={() => handleDecrement({ id: 2 })}>
                    <RemoveIcon />
                  </IconButton>
                  <span className="mx-2">1</span> {/* Hardcoded quantity */}
                  <IconButton size="small" onClick={() => handleIncrement({ id: 2 })}>
                    <AddIcon />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>$15</TableCell> {/* Hardcoded total for 1 Pizza */}
              <TableCell>
                <IconButton color="secondary" onClick={() => handleRemove({ id: 2 })}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" className="mt-4"> {/* Tailwind margin-top */}
        Total Amount: ${totalAmount}
      </Typography>
    </div>
  );
};

export default CartDetailsCard;
