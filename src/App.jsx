import "./App.css";
//import * as THREE from "three";
import React, { useState, useContext } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  TbArrowsMaximize,
  TbLayoutSidebarLeftExpand,
  TbPlant2,
} from "react-icons/tb";
import {
  GiHummingbird,
  GiSquirrel,
  GiSpottedBug,
  GiFrog,
} from "react-icons/gi";
import { SiPluscodes } from "react-icons/si";
import ReactTooltip from "react-tooltip";
import Map from "./components/Map";

const { useEffect, useRef } = React;

function App() {
  // custom globe material
  /*const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.bumpScale = 10;
  /*new THREE.TextureLoader().load(
    "https:////unpkg.com/three-globe/example/img/earth-water.png",
    (texture) => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color("grey");
      globeMaterial.shininess = 15;
    }
  );*/

  const [taxa, setTaxa] = React.useState("All");
  const [COGUrl, setCOGUrl] = React.useState(
    "https://object-arbutus.cloud.computecanada.ca/bq-io/io/inat_canada_heatmaps/All_density_inat_100m.tif"
  );

  const globeEl = useRef();

  /*useEffect(() => {
    setTimeout(() => {
      // wait for scene to be populated (asynchronously)
      const directionalLight = globeEl.current
        .scene()
        .children.find((obj3d) => obj3d.type === "DirectionalLight");
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  }, []);*/

  const changeTaxa = (selected) => {
    setTaxa(selected);
    setCOGUrl(
      `https://object-arbutus.cloud.computecanada.ca/bq-io/io/inat_canada_heatmaps/${taxa}_density_inat_100m.tif`
    );
  };

  return (
    <>
      <Map COGUrl={COGUrl} opacity={100} />
      <SideNav
        onSelect={changeTaxa}
        style={{ backgroundColor: "#111111", top: "auto" }}
      >
        <SideNav.Nav defaultSelected="all">
          <NavItem
            eventKey="All"
            data-tip="All taxa"
            style={{ marginTop: "20px", cursor: "pointer" }}
          >
            <SiPluscodes
              style={{
                fontSize: "2em",
                marginLeft: "15px",
                marginRight: "10px",
              }}
            />
          </NavItem>
          <NavItem
            eventKey="Plantae"
            data-tip="Plants"
            style={{ marginTop: "20px" }}
          >
            <TbPlant2 style={{ fontSize: "2em", marginLeft: "15px" }} />
          </NavItem>
          <NavItem
            eventKey="Aves"
            data-tip="Birds"
            style={{ marginTop: "20px" }}
          >
            <GiHummingbird style={{ fontSize: "2em", marginLeft: "15px" }} />
          </NavItem>
          <NavItem
            eventKey="Mammalia"
            data-tip="Mammals"
            style={{ marginTop: "20px" }}
          >
            <GiSquirrel style={{ fontSize: "2em", marginLeft: "15px" }} />
          </NavItem>
          <NavItem
            eventKey="Insecta"
            data-tip="Insects"
            style={{ marginTop: "20px" }}
          >
            <GiSpottedBug style={{ fontSize: "2em", marginLeft: "15px" }} />
          </NavItem>
          <NavItem
            eventKey="Amphibia"
            data-tip="Amphibians"
            style={{ marginTop: "20px" }}
          >
            <GiFrog style={{ fontSize: "2em", marginLeft: "15px" }} />
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <ReactTooltip
        effect="solid"
        type="dark"
        scrollHide="true"
        event="mousemove"
        eventOff="mouseleave"
        delayHide={1000}
      />
    </>
  );
}
export default App;
