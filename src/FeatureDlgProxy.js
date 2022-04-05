

class FeatureDlg {

    constructor() {
        this.formState = {
            contoursParam: 1,
            interpolate: true,
        };
    }

    onComboSelectionChange(currSel) {
        console.log(`onComboSelectionChange(${currSel})`);
        this.interpolate = (currSel === 1);
    }
}

export let active_pm_dlg = new FeatureDlg();