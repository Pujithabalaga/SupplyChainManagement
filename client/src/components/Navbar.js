import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // appBar: {
  //   backgroundColor: "#5C2D91", 
  //   transition: theme.transitions.create(["margin", "width"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // }
  appBar: {
    background: "linear-gradient(90deg, #0F2027, #203A43, #2C5364)", // Dark blue gradient
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  // drawerPaper: {
  //   width: drawerWidth,
  //   backgroundColor: "#5C2D91", 
  //   color: "#fff",
  // }
  drawerPaper: {
    width: drawerWidth,
    // background: "#1E1E2E", // Darker, more modern color
    color: "#fff",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border

    background:  " #0F2027", // Dark blue gradient
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  hoverItem: {
    padding:"8px 10px",// Adds space inside the border
    borderRadius: "5px", // Soft rounded corners
    border: "2px solid #0F2027", // Adds border with your theme color
    backgroundColor: "#2C5364", // Default background
    color: "#fff", // Default text color
    transition: "0.3s ease-in-out",
    display: "inline-block", // Ensures proper spacing
    textDecoration: "none", // Removes underline
   textAlign: "center",
    width: "100%",
    "&:hover": {
      backgroundColor: "#fff", // Reverse background color
      color: "#2C5364", // Reverse text color
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Optional shadow effect
    },
  }
  
  
}));

export default function PersistentDrawerLeft({ pageTitle, navItems, children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              alt="."
              src="/logo.png"
              style={{ height: "100px", width: "auto" }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItemText>
            <b style={{fontSize:"25px", color:"#c0c0c0"}}>{pageTitle}</b>
          </ListItemText>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#fff" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List style={{marginTop: "100px"}}>
          <Link to="/" style={{ width: "100%", textDecoration: "none" }}>
            <ListItem className={classes.hoverItem}>
              <ListItemText ><span style={{fontSize: "23px", textAlign: "center"}}>Home</span></ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/explorer"  
            style={{ width: "100%", textDecoration: "none" }}
          >
            <ListItem className={classes.hoverItem}>
              <ListItemText ><span style={{fontSize: "23px"}}>Explorer</span></ListItemText>
            </ListItem>
          </Link>
        </List>
        <List style={{marginTop: "-15px"}}>
          {navItems.length !== 0 ? (
            navItems.map((item) => (
              <Link
                to={item[1]}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItem button key={item[0]} className={classes.hoverItem}>
                 
                 <ListItemText ><span style={{fontSize: "21px"}}>{item[0]}</span></ListItemText>
                </ListItem>
              </Link>
            ))
          ) : (
            <></>
          )}
        </List>
        <div
          style={{ height: "100%", display: "flex", alignItems: "flex-end" }}
        >
          <div
            style={{
              width: "100%",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 500,
              fontSize: 17,
              borderTop: "1px solid #44a",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="#"
            >
              <GitHubIcon style={{ color: "#fff" }} />
            </a>
          </div>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ margin: "0 auto", maxWidth: 1300 }}>{children}</div>
      </main>
    </div>
  );
}
