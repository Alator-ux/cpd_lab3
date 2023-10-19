class LaunchList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.chosen = undefined;
        this.chosenBackgroundColor = "gray";

        this.setOnMouseClickCallback((e) => {
            if (!(e.target.tagName === "LI")) {
                return;
            }
            if (this.chosen == e.target) {
                this.chosen.style.backgroundColor = "";
                this.chosen = undefined;
                return;
            }
            if (this.chosen === undefined) {
                this.chosen = e.target;
            }
            this.chosen.style.backgroundColor = "";
            this.chosen = e.target;
            this.chosen.style.backgroundColor = this.chosenBackgroundColor;
        });
    }
    draw(launches) {
        const list = document.createElement("ul");
        launches.forEach(launch => {
            const item = document.createElement("li");
            item.innerHTML = launch.name;
            list.appendChild(item);
        })
        this.container.replaceChildren(list);
    }
    // setOnMouseOverCallback(callback){
    //     this.container.addEventListener("mouseover", callback);
    // }
    setOnMouseClickCallback(callback) {
        this.container.addEventListener("click", callback);
    }
}

export { LaunchList }