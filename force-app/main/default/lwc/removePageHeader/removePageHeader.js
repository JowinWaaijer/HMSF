/**
 * Created by krisjacobs on 04/12/2023.
 */

import {LightningElement} from 'lwc';
import noHeader from '@salesforce/resourceUrl/noAppPageHeader';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class RemovePageHeader extends LightningElement {
    connectedCallback() {
        loadStyle(this, noHeader)
    }
}