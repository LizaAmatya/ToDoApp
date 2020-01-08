import React from "react";
import Button from "./components/Button";
import List from "./components/ListItem";
import Search from "./components/Search";
import Nav from "./components/Nav";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [{ title: "jdhsjkf", completed: false, index: 0 }],

      clearBox: "",
      searchTerm: "",
      tabs: [
        {
          tabTitle: "Home",
          activeStatus: true
        },
        { tabTitle: "Completed", activeStatus: false },
        { tabTitle: "Remaining", activeStatus: false }
      ]
    };
  }

  updateChange = el => {
    this.setState({ clearBox: el.target.value });
  };

  checkToDoitem = index => {
    this.setState({
      list: this.state.list.map((listItem, currentIndex) => {
        if (index === currentIndex) {
          return {
            title: listItem.title,
            completed: !listItem.completed
          };
        } else {
          return listItem;
        }
      })
    });
  };

  addItem = el => {
    if (el.keyCode === 13 && el.target.value) {
      this.setState({
        list: [
          ...this.state.list,
          {
            title: el.target.value,
            completed: false,
            index: this.state.list.length
          }
        ],
        clearBox: "",
        searchTerm: ""
      });
    }
  };

  filterList = (displayArr, el) => {
    let filteredItems = displayArr.filter(item => {
      return item.title.toLowerCase().includes(el.target.value.toLowerCase());
    });
    this.setState({
      filtered: filteredItems,
      searchTerm: el.target.value
    });
  };

  selectTab = el => {
    let newtabState = this.state.tabs.map((tab, currIndex) => {
      if (currIndex === el) {
        tab.activeStatus = true;
      } else {
        tab.activeStatus = false;
      }
      return tab;
    });
    this.setState({
      tabs: newtabState
    });
  };

  checkTab = () => {
    for (let i = 0; i < this.state.tabs.length; i++) {
      if (this.state.tabs[i].activeStatus === true) {
        return i;
      }
    }
  };

  displayItems = tabIndex => {
    if (tabIndex == 0) {
      return this.state.list;
    } else if (tabIndex == 1) {
      return this.state.list.filter(item => {
        return item.completed === true;
      });
    } else {
      return this.state.list.filter(item => {
        return item.completed === false;
      });
    }
  };

  deleteItem = index => {
    let test = [...this.state.list];
    test.splice(index, 1);
    this.setState({
      list: test.map((item, i) => {
        item.index = i;
        return item;
      })
    });
  };

  render() {
    let toDisplay = this.displayItems(this.checkTab());

    return (
      <div className="App">
        <h1>FAIRE</h1>
        <div className="TabDiv">
          {this.state.tabs.map((tab, index) => (
            <Nav
              className="tabsDiv"
              key={index}
              tabTitle={tab.tabTitle}
              index={index}
              activeStatus={tab.activeStatus}
              onTabClick={this.selectTab}
            />
          ))}
        </div>
        <Search onSearchChange={this.filterList} dis={toDisplay}></Search>
        {/* Add Item */}
        <input
          type="text"
          className="textfield"
          onChange={this.updateChange}
          onKeyDown={this.addItem}
          value={this.state.clearBox}
          placeholder="Add Item"
        />
        {/* <Button label="Add ToDo"> </Button> */}
        {/* Search */}

        {this.state.searchTerm === ""
          ? toDisplay.map((item, index) => {
              return (
                <List
                  key={index}
                  title={item.title}
                  status={item.completed}
                  onCheckClick={this.checkToDoitem}
                  index={index}
                  onDelete={this.deleteItem}
                />
              );
            })
          : this.state.filtered.map((item, index) => {
              return (
                <List key={index} title={item.title} status={item.completed} />
              );
            })}
      </div>
    );
  }
}
export default App;
