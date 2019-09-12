import { LightningElement, track } from 'lwc';
import setParam from '@salesforce/apex/ArrayParam.setParam';

export default class ArrayParam extends LightningElement {
    @track
    result;

    handleClick() {
        const param = [
            { intParam: 1, boolParam: true, strParam: 'ABC' },
            { intParam: 2, boolParam: false, strParam: 'DEF' }
        ];

        setParam({param: JSON.stringify(param)})
        .then(result => {
            this.result = result;
        })
        .catch(error => {
            /*eslint no-console: "off"*/
            console.log(error);
            this.result = error;
        })
    }
}