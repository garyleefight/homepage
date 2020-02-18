import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React, {Component} from 'react';

export interface TabsProps {
    keys: string[];

}

interface TabsState {

}


export default class CustomTabs extends Component<TabsProps, TabsState>{
    constructor(props: TabsProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="Home">
                        <div>tab 1</div>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <div>tab 2</div>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <div>tab3 </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}