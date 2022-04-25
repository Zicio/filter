import classNames from "classnames";

const Toolbar = (props) => {
  const { selected, filters, onSelectFilter } = props;
  const onClickFilter = (e) => onSelectFilter(e);

  return (
    <div className="tool-bar">
      {filters.map((filter, index) => {
        const classes =
          filter === selected && filter !== "All"
            ? classNames("button", "selected")
            : "button";
        return (
          <button className={classes} key={index} onClick={onClickFilter}>
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;
