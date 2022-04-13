import * as React from 'react';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControl, FormControlLabel, MenuItem, Select, Typography } from '@mui/material';
import { active_pm_dlg } from '../floefd/FeatureEdit';


export class FeatureEditor extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleComboChange = this.handleComboChange.bind(this);
    }


    createControls(ctrlLabel, ctrlDescription, isTopChild)
    {
        console.assert((typeof (ctrlDescription) === 'object'));

        const isGroup = ctrlDescription.groupLabel !== undefined;
        if (isGroup) {
            console.assert(isTopChild);
            let { groupLabel, ...children } = ctrlDescription;
            return (
                <Accordion defaultExpanded disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        id="panel1a-header"
                    >
                        <Typography>{groupLabel}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {Object.entries(children).map(
                            ([key, value]) => 
                            {
                                return this.createControls(key, value, false);
                            }
                        )}
                    </AccordionDetails>
                </Accordion>
            );
        }

        switch (ctrlDescription.type) {
            case 'check':
                return (
                    <FormControlLabel
                        control={<Checkbox checked={ctrlDescription.value} />}
                        label={ctrlLabel}
                    />
                );
            case 'combo':
                return (
                    <FormControl fullWidth>
                        <Select
                            label={ctrlLabel}
                            value={ctrlDescription.value}
                            onChange={this.handleComboChange}
                        >
                            <MenuItem value={1}>Pressure</MenuItem>
                            <MenuItem value={2}>Domain Index</MenuItem>
                        </Select>
                    </FormControl>
                );
        }

        console.warn("unsupported control type");
        return null;
    }


    handleComboChange(event)
    {
        // console.log(event);
        active_pm_dlg.onComboSelectionChange(event.target.value);
        this.forceUpdate();
    }


    render()
    {
        if (!active_pm_dlg)
            return null;
        console.log('FeatureEdit::render');

        // let auto = true;
        // auto = false;

        // if (auto) {
            return (
                <Box>
                    {Object.entries(active_pm_dlg.formState).map(
                        ([key, value]) => 
                        {
                            return this.createControls(key, value, true);
                        }
                    )}
                </Box>
            );
        // } else
        //     return (
        //         <Box>
        //             <Accordion>
        //                 <AccordionSummary
        //                     expandIcon={<ExpandMore />}
        //                     id="panel1a-header"
        //                 >
        //                     <Typography>Options</Typography>
        //                 </AccordionSummary>
        //                 <AccordionDetails>
        //                 </AccordionDetails>
        //             </Accordion>
        //         </Box>
        //     );
    }
}
