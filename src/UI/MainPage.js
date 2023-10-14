import { LaunchList } from "./LaunchList";
import { MapWidget } from "./Map";
class MainPage {
    constructor() {
        this.launchList = new LaunchList('listContainer');
        this.launchList.setOnMouseClickCallback((e) => {
            if((this.launchpads === undefined) || (this.launches === undefined)){
                return;
            }
            if(this.launchList.chosen === undefined){
                this.mapWidget.draw(this.launchpads);
                return;
            }
            let launch = this.launches.find((launch) => launch.name === this.launchList.chosen.textContent);
            this.mapWidget.draw(this.launchpads, launch.launchpad);
        });
        
        let proportions = {
            width: 640,
            height: 480,
            margin: { top: 20, right: 10, bottom: 40, left: 100 }
        };
        this.mapWidget = new MapWidget(proportions);

        this.launches = undefined;
        this.launchpads = undefined;
    }
    setLaunches(launches){
        this.launches = launches;
    }
    setLaunchpads(launchpads){
        this.launchpads = launchpads;
    }
    drawLaunchList() {
        this.launchList.draw(this.launches)
    }

    drawLaunchpadPoints() {
        console.log(this.launchpads)
        this.mapWidget.draw(this.launchpads)
    }
}

export { MainPage }