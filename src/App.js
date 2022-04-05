import logo from './logo.svg';
import React from 'react';
import './App.css';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import LeftPanel from './components/LeftPanel';
import SplitPane from 'react-split-pane.js';
// import FeatureView from './Feature';

function App() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>                    <Typography variant='h5' component="span">FLOEFD Viewer</Typography>
                </Toolbar>
            </AppBar>
            <SplitPane split="vertical" defaultSize={300} minSize={50}>
                <LeftPanel />
                <div>
                    <Button variant='contained' color='secondary'>Right content</Button>
                </div>
            </SplitPane>
        </div>
    );
}

export default App;
