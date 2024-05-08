import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { margin } from "@mui/system";
import Select from "./sub_components/Select";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Content() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2024-05-07"));
  return (
    <Paper sx={{ maxWidth: 900, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)", padding: 4, backgroundImage:'url(https://img.freepik.com/free-vector/hand-drawn-international-nurses-day-background_23-2149341238.jpg?w=1380&t=st=1715127605~exp=1715128205~hmac=38593f2950d11b43866dc397f91f39625f3f75ce624200c706b874b366d34357)', backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <Grid
          container
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          margin={2}
        >
          <Grid item xs={4} id="a">
            <Item id="b">
              <TextField
                id="c"
                label="Asunto"
                color="primary"
                rows={4}
                fullWidth
              />
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <Select
                type="Area"
                espacios={[
                  "Gastroentorologia",
                  "Traumatologia",
                  "Cardiologia",
                  "Pediatria",
                  "Dermatologia",
                  "Ginecologia",
                  "Obstreticia",
                ]}
                minWidth={300}
              />
            </Item>
          </Grid>
        </Grid>

        <Grid
          container
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          margin={2}
        >
          <Grid item xs={4}>
            <Item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                  <DemoItem label="Seleccion la fecha">
                    <DateCalendar
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <Select
                type="Especialista"
                espacios={[
                  "Jorge Campos",
                  "Juan Perez",
                  "Maria Rodriguez",
                  "Pedro Martinez",
                  "Ana Lopez",
                  "Julia Perez",
                  "Rosa Rodriguez",
                ]}
                minWidth={300}
              />
            </Item>
          </Grid>
        </Grid>

        <Stack spacing={2} direction="row" margin={2}>
          <Button variant="contained" color="primary">
            Guardar
          </Button>
          <Button variant="contained" color="primary">
            Cancelar
          </Button>
        </Stack>
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
