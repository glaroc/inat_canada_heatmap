import { useEffect, useState, useRef, useCallback } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { amfhot, haline, ocean, custom } from "./colormaps";
import { darkpositron } from "./mapstyle";

export default function Map(props: any) {
  const { COGUrl, opacity } = props;

  const [mapp, setMapp]: any = useState(false);
  const mapRef = useRef();

  const colormap = encodeURIComponent(JSON.stringify(custom));

  useEffect(() => {
    if (COGUrl && !mapp) {
      const map = new maplibregl.Map({
        container: "App",
        zoom: 3,
        center: [-90, 55],
        style: darkpositron,
        _style: {
          version: 8,
          projection: {
            type: "globe",
          },
          sources: {
            satellite: {
              url: "https://api.maptiler.com/tiles/satellite-v2/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
              type: "raster",
            },
            backlight: {
              type: "raster",
              url: "https://tiles.openfreemap.org/styles/liberty",
            },
            cog: {
              type: "raster",
              tiles: [
                `https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}?url=${COGUrl}&rescale=0,10&colormap=${colormap}&resampling=cubic`,
              ],
              tileSize: 256,
            },
            terrain: {
              type: "raster-dem",
              tiles: [
                "https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}?url=https://object-arbutus.cloud.computecanada.ca/bq-io/io/earthenv/topography/elevation_1KMmn_GMTEDmn.tif&rescale=0,2013&bidx=1&expression=b1",
                /*"https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}?url=https://object-arbutus.cloud.computecanada.ca/bq-io/io/gbif_heatmaps/gbif_all_density_05-2024.tif&rescale=0,1&assets=data&colormap_name=binary&bidx=1&expression=b1",*/
              ],
              tileSize: 256,
            },
            background: {
              type: "raster",
              tiles: [
                "https://01.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
              ],
              tileSize: 256,
            },
          },
          /*terrain: { source: "terrain", exaggeration: 0.025 },*/
          layers: [
            /*{
            id: "sat",
            type: "raster",
            source: "satellite",
          },*/

            {
              id: "back2",
              type: "raster",
              source: "satellite",
            },

            {
              id: "cog",
              type: "raster",
              source: "cog",
              paint: {
                "raster-opacity": opacity / 100,
              },
            },
            /*{
              id: "hillsh",
              type: "hillshade",
              source: "terrain",
              paint: {
                "hillshade-exaggeration": 0.01,
                "hillshade-shadow-color": "#473B24",
              },
              layout: {
                visibility: "none",
              },
            },*/
          ],
          sky: {
            "atmosphere-blend": [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              1,
              5,
              1,
              7,
              0,
            ],
          },
          light: {
            anchor: "viewport",
            position: [1.5, 90, 40],
            intensity: 0.25,
            color: "#555",
          },
        },
      });
      map.on("load", () => {
        map.addControl(new maplibregl.GlobeControl());
        map.addControl(
          new maplibregl.NavigationControl({
            showZoom: true,
            showCompass: false,
          })
        );
        map.setProjection({
          type: "globe",
        });
        map.addSource("cog", {
          type: "raster",
          tiles: [
            `https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}?url=${COGUrl}&rescale=0,10&colormap=${colormap}&resampling=cubic`,
          ],
          tileSize: 256,
        });
        map.addLayer({
          id: "cog",
          type: "raster",
          source: "cog",
          paint: {
            "raster-opacity": opacity / 100,
          },
        });
      });

      setMapp(map);
      return () => {
        map.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (mapp && COGUrl) {
      mapp
        .getSource("cog")
        .setTiles([
          `https://tiler.biodiversite-quebec.ca/cog/tiles/{z}/{x}/{y}?url=${COGUrl}&rescale=0,10&colormap=${colormap}&resampling=cubic`,
        ]);
      mapp.setPaintProperty("cog", "raster-opacity", opacity / 100);
      mapp.triggerRepaint();
    }
    return () => {};
  }, [COGUrl, opacity]);

  return (
    <div
      id="App"
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: "0",
        background: "url('/inat_canada_heatmap/night-sky.png')",
      }}
    ></div>
  );
}
