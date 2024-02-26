import { Typography } from "@mui/material";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

const Breadcrumbs = () => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" separator=">">
      <Typography variant="body1" color="primary.main">
        <a href="#/">الرئيسية</a>
      </Typography>
      <Typography variant="body1" color="primary.main">
        <a href="#/">حلويات</a>
      </Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
