import React, { Component } from "react";
import { Accordion, Form, InputGroup } from "react-bootstrap";

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
        // return (
        //     <Form>
        //         <Accordion defaultActiveKey={['0']} alwaysOpen>
        //             <Accordion.Item eventKey="0">
        //                 <Accordion.Header>Contours</Accordion.Header>
        //                 <Accordion.Body>
        //                     <InputGroup>
        //                         <InputGroup.Text>Parameter</InputGroup.Text>
        //                         <Form.Select>
        //                             <option>Pressure</option>
        //                             <option>Temperature</option>
        //                         </Form.Select>
        //                     </InputGroup>
        //                     <InputGroup>
        //                         <InputGroup.Text>Max</InputGroup.Text>
        //                         <Form.Control type="number" value="101325.2"/>
        //                     </InputGroup>
        //                 </Accordion.Body>
        //             </Accordion.Item>
        //             <Accordion.Item eventKey="1">
        //                 <Accordion.Header>Options</Accordion.Header>
        //                 <Accordion.Body>
        //                     Transparency is 1
        //                 </Accordion.Body>
        //             </Accordion.Item>
        //         </Accordion>
        //     </Form>
        // )
        let f = this.state.feature;
        let prop_arr = [];
        for (let key in f) {
            if (key === 'name')
            continue;
            const val = f[key];
            // let sview = key + ': ' + String(f[key]);
            let ctrl = {};
            switch (typeof(val)) {
                case 'string':
                    ctrl = <Form.Select>
                        <option>Pressure</option>
                        <option>Temperature</option>
                    </Form.Select>;
                    break;
                case 'number':
                    ctrl = <Form.Control type="number" value={val}/>;
                    break;
            }
            prop_arr.push(
                <InputGroup>
                    <InputGroup.Text>{key}</InputGroup.Text>
                    {ctrl}
                </InputGroup>
            );
        }
        return (
            <div>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Contours</Accordion.Header>
                        <Accordion.Body>
                            {prop_arr}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }
}

export default FeatureView;