import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ padding: '24px' }}>
          <Grid item xs={12}>
            <AppBar position="static" color="default" elevation={0}>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Contact Information
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
            <Tooltip title="Search">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh">
              <IconButton>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
  );
}