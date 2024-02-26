import classes from "./Loaders.module.css";

const Loading = () => {
  return (
    <div className={classes["loading-wrapper"]}>
      <div className={classes.loading} />
    </div>
  );
};

export default Loading;
