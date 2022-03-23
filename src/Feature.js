import React, { Component } from "react";

class FeatureView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feature: {
                name: 'Cut Plot 1',
                parameter: "Pressure",
                transparency: 1
            }
        }
    }

    render() {
        let f = this.state.feature;
        let prop_arr = [];
        for (let key in f) {
            if (key === 'name')
                continue;
            let sview = key + ': ' + String(f[key]);
            prop_arr.push(<p>{sview}</p>);
        }
        return (
            <div>
                {prop_arr}
            </div>
        )
    }
}

export default FeatureView;