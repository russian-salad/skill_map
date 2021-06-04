import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";

export default function Login () {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loginSubmit = (event) => {
    event.preventDefault();
  };
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
        <DialogTitle>
          YoursRoadMap{" "}
          <IconButton
            aria-label="close"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={loginSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              autoFocus
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
              type="submit"
              style={{ margin: "20px auto", width: 200 }}
              variant="contained"
              color="primary"
            >
              Войти
            </Button>
          </form>
          <Divider />
          <b>У вас ещё нет аккаунта?</b>{" "}
          <Button color="secondary">Зарегестрируйтесь</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
