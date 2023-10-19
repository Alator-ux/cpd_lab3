import { SpaceX } from "./api/spacex";
import { MainPage } from './Pages/MainPage'
document.addEventListener("DOMContentLoaded", setup)

function setup() {
    const spaceX = new SpaceX();

    let mainPage = new MainPage()
    spaceX.launches().then(data => {
        mainPage.setLaunches(data)
        mainPage.drawLaunchList();
    })
    spaceX.launchpads().then(data => {
        mainPage.setLaunchpads(data)
        mainPage.drawLaunchpadPoints();
    })
}
