import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "../../Components/Tabs/Tabs";
import { Box, SearchBar, SearchInput } from "./Styles";
import SearchIcon from "../../Assets/SearchIcon";
import ResourcesList from "../../Components/ResourcesList/ResourcesList";

const Homepage = () => {
  const resourcesData = useSelector((state) => state.resources.data);
  const [allResources, setallResources] = useState(resourcesData);
  const searchResource = useRef();
  const onTabSelected = (index) => {
    searchResource.current.value = "";
    setallResources(
      !index
        ? resourcesData
        : resourcesData.filter(
          (resource) => resource.tag === (index === 1 ? "request" : "user")
        )
    );
  };
  const handleChange = (e) => {
    setallResources(
      resourcesData.filter((resource) =>
        resource.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <>
      <Tabs tabsList={tabsList} onTabSelected={onTabSelected} />
      <Box>
        <SearchBar>
          <SearchIcon />
          <SearchInput
            ref={searchResource}
            onChange={handleChange}
            placeholder="Search"
          />
        </SearchBar>
        <ResourcesList resources={allResources} />
      </Box>
    </>
  );
}

export default Homepage;

const tabsList = [
  {
    name: "Resources",
    index: 0,
    first: true,
  },
  {
    name: "Requests",
    index: 1,
    center: true,
  },
  {
    name: "Users",
    index: 2,
    last: true,
  },
];