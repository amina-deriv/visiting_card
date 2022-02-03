import { Fragment } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QrCode from '../qr-code/qr-code';
import VCard from '../vcard/vcard';
import 'react-tabs/style/react-tabs.css';
import classes from './display-board.module.scss'


const DisplayBoard = (props) => {
    return (
        <Fragment>
            {props.userData ? (
                <Tabs>
                    <TabList>
                        <Tab>QR Code</Tab>
                        <Tab>Business Card</Tab>
                    </TabList>
                    <TabPanel>
                        <QrCode vCard={props.userData} />
                    </TabPanel>
                    <TabPanel>
                        <VCard user={props.userData} />
                    </TabPanel>
                </Tabs>
            ) :
                (<h1 className={classes.err_msg}>No data found</h1>)}
        </Fragment>
    )
}

export default DisplayBoard