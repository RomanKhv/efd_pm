import { merge } from 'lodash';


function backend_BuildFeatureFormState()
{
    return {
        contours: {
            groupLabel: 'Contours',
            parameter: {
                type: 'combo',
                value: 1,
            },
        },
        options: {
            groupLabel: 'Options',
            interpolate: {
                type: 'check',
                value: true,
            }
        },
    };
}

function backend_ChangeContoursParameter(paramIndex)
{
    let newFormState = {
        contours: {
            parameter: {
                value: paramIndex,
            }
        },
        options: {
            interpolate: {
                value: paramIndex === 1,
            },
        },
    };
    return newFormState;
}


class FeatureEdit
{
    constructor()
    {
        this.formState = backend_BuildFeatureFormState();
    }

    onComboSelectionChange(currSel)
    {
        // console.log(`onComboSelectionChange(${currSel})`);
        let newState = backend_ChangeContoursParameter(currSel);
        this.formState = merge(this.formState, newState);
    }
}

export function editFeature()
{
    let dlg = new FeatureEdit();
    return dlg;
}

export let active_pm_dlg = editFeature();