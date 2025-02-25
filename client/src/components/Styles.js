import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  pageWrap: {
    textAlign: "center",
    color: "#2C5364",
  },
  pageHeading: {
    textAlign: "center",
    margin: "10px auto",
    padding: 0,
    color: "#2C5364",
  },

  TableRoot: {
    width: "100%",
    maxWidth: 1200,
    margin: "5px auto",
    border: "2px solid #2C5364",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
  },
  TableContainer: {
    maxHeight: 600,
    borderRadius: 7,
  },
  AddressCell: {
    maxWidth: 150,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tableCount: {
    textAlign: "center",
    margin: "10px auto",
    padding: 0,
    color: "#2C5364",
  },
  TableHead: {
    backgroundColor: "#2C5364 !important",
    color: "#fff !important",
  },
  TableCell: {
    color: "#2C5364 !important",
  },

  FormWrap: {
    maxWidth: 900,
    margin: "30px auto",
    padding: 20,
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
  },

  RoleForm: {
    display: "flex",
    alignItems: "center",
    margin: "20px auto",
  },

  Explorerroot: {
    padding: "2px 4px",
    margin: "10px",
    width: "100%",
  },
  ProductPaper: {
    padding: 10,
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
    border: "2px solid #2C5364",
  },
  ExplorerdRow: {
    width: "100%",
    borderBottom: "0px solid #222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: "0 auto",
    fontWeight: 600,
    color: "#2C5364",
  },
  TableRoot2: {
    width: "100%",
    maxWidth: 1300,
    margin: "5px auto",
    border: "2px solid #2C5364",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    padding: 15,
    outline: "none",
    width: "min(90%, 650px)",
    height: "80%",
    border: "2px solid #2C5364",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
    overflow: "scroll",
  },
  Reciptpaper: {
    backgroundColor: "#fff",
    // border: "0px solid #000",
    padding: 15,
    outline: "none",
    width: "min(95%, 950px)",
    height: "500px",
    border: "2px solid #2C5364",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
    overflow: "scroll",
  },
  dRow: {
    width: "100%",
    borderBottom: "1px solid #222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: "0 auto",
  },

  dCol1: {
    width: "30%",
    textAlign: "left",
    fontWeight: 600,
    color: "#2C5364",
  },
  dCol2: {
    width: "70%",
    textAlign: "left",
    fontWeight: 600,
    color: "#2C5364",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  HomeBtn: {
    margin: 10,
  },
  HomeCardWrap: {
    maxWidth: 500,
    width: "90%",
    padding: 20,
    borderRadius: 10,
    boxShadow: "2px 2px 10px #c0c0c0",
    border: "2px solid #2C5364",
    margin: "10px auto",
    background: "rgba(128, 128, 128, 0.4)" // Using rgba with an opacity of 0.8
  },
  
  
});
