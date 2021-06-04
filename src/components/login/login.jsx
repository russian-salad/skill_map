import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

export default function () {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        LogIn
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>YoursRoadMap</DialogTitle>
        <DialogContent >
          <form  style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="login"
              margin="dense"
              label="Логин"
              type="login"
              autoFocus
            />
            <TextField
              id="Password"
              margin="dense"
              label="Пароль"
              type="password"
            />
            <Button
              type='submit'
              style={{ margin: "20px auto", width: 200 }}
              variant="contained"
              color="primary"
            >
              Войти
            </Button>
          </form>
          <Divider/>
          <b>У вас ещё нет аккаунта?</b>{" "}
          <Button color="secondary">Зарегестрируйтесь</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
