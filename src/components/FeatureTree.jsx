import * as React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import { ChevronRight, ExpandMore } from '@mui/icons-material';

export default function FeatureTree() {
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
            sx={{
                flexGrow: 1, maxWidth: 400, overflowY: 'auto',
                backgroundColor: 'white',
            }}
        >
            <TreeItem nodeId='1' label="Ball Valve">
                <TreeItem nodeId="20" label="Input Data">
                    <TreeItem nodeId="201" label="Computational Domain" />
                </TreeItem>
                <TreeItem nodeId="30" label="Results">
                    <TreeItem nodeId="301" label="Cut plot" />
                </TreeItem>
            </TreeItem>
        </TreeView>
    );
}
