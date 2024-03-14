import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerClosed, setDrawerOpened } from "../../store/slices/drawerSlice";

const CustomDrawer = ({ children }) => {
  const dispatch = useDispatch()
  const open = useSelector(state => state.drawer.open)

  return (
    <Drawer
      anchor="right"
      open={open}
      onOpen={() => dispatch(setDrawerOpened())}
      onClose={() => dispatch(setDrawerClosed())}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
