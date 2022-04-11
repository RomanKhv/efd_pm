

class FeatureDlg {

    constructor() {
        this.formState = {
            contoursParam: 1,
            interpolate: true,
        };
    }

    onComboSelectionChange(currSel) {
        // console.log(`onComboSelectionChange(${currSel})`);
        this.formState.contoursParam = currSel;
        this.formState.interpolate = (this.formState.contoursParam === 1);
    }
}

export let active_pm_dlg = new FeatureDlg();