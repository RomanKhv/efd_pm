import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AccountTree, DataObject } from '@mui/icons-material';
import FeatureTree from './FeatureTree';
import { FeatureEditor } from './FeatureEditor';


export default function LeftPanel()
{
    const [activeTab, setActiveTab] = React.useState('1');

    const handleChange = (event, newValue) =>
    {
        setActiveTab(newValue);
    };

    return (
        <TabContext value={activeTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                    onChange={handleChange}
                >
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
                <FeatureEditor />
            </TabPanel>

        </TabContext>
    );
}
