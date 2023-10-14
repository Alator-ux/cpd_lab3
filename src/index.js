import { SpaceX } from "./api/spacex";
import * as d3 from "d3";
import * as Geo from './geo.json'
import ColorScale from "color-scales";
import { MainPage } from './UI/MainPage'
document.addEventListener("DOMContentLoaded", setup)

function setup() {
    const spaceX = new SpaceX();

    let mainPage = new MainPage()
    spaceX.launches().then(data => {
        mainPage.setLaunches(data)
        mainPage.drawLaunchList();
    })
    spaceX.launchpads().then(data => {
        mainPage.setLaunchpads(data.filter(launchpad => launchpad.launch_attempts > 0))
        mainPage.drawLaunchpadPoints();
    })
}
