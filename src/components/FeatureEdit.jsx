import * as React from 'react';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Select, Typography } from '@mui/material';
import { active_pm_dlg } from '../FeatureDlgProxy';

export default function FeatureEdit() {
    console.log('FeatureEdit::render');

    const handleComboChange = (event) => {
        // console.log(event);
        active_pm_dlg.onComboSelectionChange(event.target.value);
    };

    return (
        <Box
        >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id="panel1a-header"
                >
                    <Typography>Contours</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl fullWidth>
                        <Select
                            label="Parameter"
                            value={active_pm_dlg.formState.contoursParam}
                            onChange={handleComboChange}
                        >
                            <MenuItem value={1}>Pressure</MenuItem>
                            <MenuItem value={2}>Domain Index</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id="panel1a-header"
                >
                    <Typography>Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={active_pm_dlg.formState.interpolate} />}
                            label="Interpolate"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
