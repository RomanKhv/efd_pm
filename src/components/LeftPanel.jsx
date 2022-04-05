import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AccountTree, DataObject } from '@mui/icons-material';
import FeatureTree from './FeatureTree';
import FeatureEdit from './FeatureEdit';

export default function LeftPanel() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Feature Tree" icon={<AccountTree />} value="1" />
                    <Tab label="Edit Feature" icon={<DataObject />} value="2" />
                </TabList>
            </Box>

            <TabPanel value="1"
                sx={{
                    backgroundColor: 'lightgrey',
                }}
            >
                <FeatureTree />
            </TabPanel>

            <TabPanel value="2">
                <FeatureEdit />
            </TabPanel>

        </TabContext>
    );
}
