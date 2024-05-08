import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useLocation } from "react-router-dom";

const categories = [
  {
    id: "Build",
    children: [
      {
        id: "Registrar Cita",
        icon: <AppRegistrationIcon />,
        href: "/IR-Project/reservas",
      },
      {
        id: "Mi Historial Medico",
        icon: <PeopleIcon />,
        href: "/IR-Project/historial",
      },
      {
        id: "Contacto",
        icon: <PermContactCalendarIcon />,
        href: "/IR-Project/contacto",
      },
    ],
  },
  {
    id: " ",
    children: [
      { id: "Mi perfil", icon: <SettingsIcon />, href: "/IR-Project/perfil" },
      { id: "Salir", icon: <ExitToAppIcon />, href: "/IR-Project/login" },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          DashBoard
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Menu</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, href }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  selected={href == location.pathname ? true : false}
                  sx={item}
                  href={href}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
