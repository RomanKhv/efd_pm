import * as React from 'react';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Select, Typography } from '@mui/material';
import { active_pm_dlg } from '../floefd/FeatureDlgProxy';

export default class FeatureEdit extends React.Component {
    constructor(props) {
        super(props);

        this.handleComboChange = this.handleComboChange.bind(this);
    }

    handleComboChange(event) {
        // console.log(event);
        active_pm_dlg.onComboSelectionChange(event.target.value);
        this.forceUpdate();
    };

    render() {
        console.log('FeatureEdit::render');

        return (
            <Box>
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
                                onChange={this.handleComboChange}
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
            </Box >
        );
    }
}
