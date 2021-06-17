import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Dialog from "components/dialog";
import { AccordionActions, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    minHeight:55,
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
  { props.data.map(
      item => <Accordion key={item.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{item.title.toUpperCase()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.body}</Typography>
        </AccordionDetails>
        <Divider/>
        <AccordionActions>
          <Dialog data={item}/>
        </AccordionActions>
      </Accordion>
      )}
    </div>
  );
}
