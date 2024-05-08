import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardHeader } from "@mui/material";

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Historial Médico
              </Typography>
              <Tooltip title="Buscar">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Actualizar">
                <IconButton>
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ minWidth: 275, margin: 2, maxWidth: 300, border: 1 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="Doctor Gomez Olivera"
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Ultima vez
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="h5" component="div">
                Traumatologia
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Consulta
              </Typography>
              <Typography variant="body2">
                Archivado
                <br />
                {'"se mostro mejoras en la ultima consulta"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ minWidth: 275, margin: 2, maxWidth: 300, border: 1 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="Doctor Soto Orellana"
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Mes pasado
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="h5" component="div">
                Nutricion
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Consulta
              </Typography>
              <Typography variant="body2">
                En proceso
                <br />
                {'"No mejoro los resultados"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}
