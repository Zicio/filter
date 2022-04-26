import classNames from "classnames";
import PropTypes from "prop-types";

const Toolbar = (props) => {
  const { selected, filters, onSelectFilter } = props;
  const onClickFilter = (e) => onSelectFilter(e);

  return (
    <div className="portfolio__tool-bar">
      {filters.map((filter, index) => {
        const classes =
          filter === selected ? classNames("filter", "selected") : "filter";
        return (
          <button
            className={classes}
            key={index}
            onClick={onClickFilter}
            type="button"
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

Toolbar.propTypes = {
  selected: PropTypes.string.isRequired,
  filters: PropTypes.array.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
