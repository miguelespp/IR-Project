import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link1 from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import SendIcon from "@mui/icons-material/Send";

interface copyrightProps {
  name: string;
  year: number;
  style: object;
}

function Copyright({ name, year, style }: copyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={style}
    >
      {"Copyright © "}
      <Link1 color="inherit" href="https://mui.com/">
        {name}
      </Link1>{" "}
      {year}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/006/712/964/non_2x/abstract-health-medical-science-healthcare-icon-digital-technology-doctor-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <EditCalendarIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              FIsiConsultas
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ mt: 3, mb: 2 }}
                href="IR-Project/#/reservas"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link1 href="#" variant="body2">
                    Forgot password?
                  </Link1>
                </Grid>
                <Grid item>
                  <Link1 href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link1>
                </Grid>
              </Grid>
              <Copyright style={{ mt: 5 }} name="FisiConsultas" year={2003} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
