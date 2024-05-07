import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 800, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Grid container spacing={2} columns={10}>
          <Grid item xs={5}>
            <Item>
              <TextField label="Nombres" color="primary" fullWidth />
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <TextField label="Apellidos" color="primary" fullWidth />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <TextField label="Correo" color="primary" fullWidth />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TextField label="Celular" color="primary" fullWidth />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TextField label="Direccion" color="primary" fullWidth />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Guardar</Button>
            </Stack>
          </Grid>
        </Grid>
      </AppBar>
    </Paper>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
