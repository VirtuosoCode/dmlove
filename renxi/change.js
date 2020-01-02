validate
@CustomValidator({ name: 'showOneTimeAlertMsg', async: false })
public showOneTimeAlertMsg(config: ComponentConfig, context: DynamicContext): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let GeographicalCode = context["fieldMap"].get("GeographicalCode").value;
        if (GeographicalCode === "26") {
            let formGroup = control.parent;
            const purchaseType = formGroup.get('OnetimeOrRecurringPurchases').value
            if (purchaseType === "10") {
                config.errorMessage['showOneTimeAlertMsg'] = 'If this is a one-time purchase with an invoice value of less than $1k please be <br> aware Supplier set-up is not required. In this instance please send the invoice <br> directly to acn.ireland.einv@accenture.com for processing.'
                const currentError = { 'showOneTimeAlertMsg': false }
                return currentError
            }
        }
        return null
    }
}


dropdown.compoent.html <
    app - error - msg[message] = "errorMessage()" [isWarning] = "isWarning()" > < /app-error-msg>



base.component.html
public hasError(controlName: any) {
    if (this.config.name === 'OnetimeOrRecurringPurchases') {
        debugger
    }
    if (controlName) {
        return this.formGroup.get(this.config.name).get(controlName).errors && this.context.SubmitState
    } else if (this.config.validateOn === 'change' && this.formGroup.get(this.config.name).dirty) {
        return this.formGroup.get(this.config.name).errors
    } else {
        return this.formGroup.get(this.config.name).errors && this.context.SubmitState ||
            (this.formGroup.get(this.config.name).errors && this.config.validateOn === 'blur' && (this.formGroup.controls[this.config.name].touched || this.formGroup.controls[this.config.name].dirty))

    }
}



request - form.component.html
const GeographicalCode = this.onBoardingService.supplierModel.RequestForm.RequestorDetailsInfo.SupplierGeographical
this.context.set("GeographicalCode", GeographicalCode)
SpendCategoryGroup === '2' ? this.requestFormStatus.isShowUploadMail = true : this.requestFormStatus.isShowUploadMail = false

this.disableTimeLimit = true



validateOn: 'change',
    validators: [
        { name: 'showOneTimeAlertMsg' }
    ],