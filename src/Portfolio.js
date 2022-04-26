import React from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
      projects: this.projectsArr(),
    };
  }

  projectsArr = () => {
    return [
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards",
      },

      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites",
      },
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers",
      },
    ];
  };

  onSelectFilter = (e) => {
    const filter = e.target.textContent;
    console.log("Выбранный фильтр", filter);
    this.setState({ selected: filter });
    let arr = this.projectsArr();
    if (filter !== "All") {
      arr = arr.filter((p) => p.category === filter);
    }
    this.setState({ projects: arr });
  };

  render() {
    return (
      <main className="portfolio">
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.state.projects} />
      </main>
    );
  }
}

export default Portfolio;
