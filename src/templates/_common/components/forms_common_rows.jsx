import React from 'react';
import { FormRow } from '../../_common/components/forms.jsx';

export const Salutation = ({ className }) => (
    <FormRow
        type='select'
        className={className}
        id='salutation'
        label={it.L('Title')}
    >
        <option value='Mr'>{it.L('Mr')}</option>
        <option value='Mrs' className='ru-hide'>{it.L('Mrs')}</option>
        <option value='Ms'>{it.L('Ms')}</option>
        <option value='Miss' className='ru-hide'>{it.L('Miss')}</option>
    </FormRow>
);

export const FirstName = ({ className, hint }) => (
    <FormRow
        type='text'
        id='first_name'
        label={it.L('First name')}
        attributes={{maxLength: '30', className: className || undefined}}
        hint={hint}
    />
);

export const LastName = ({ className, hint }) => (
    <FormRow
        type='text'
        id='last_name'
        label={it.L('Family name')}
        attributes={{maxLength: '30', className: className || undefined}}
        hint={hint}
    />
);

export const DateOfBirth = ({ className }) => (
    <FormRow
        type='text'
        id='date_of_birth'
        label={it.L('Date of birth')}
        attributes={{size: '12', readOnly: true, className: className || undefined }}
    />
);

export const Residence = () => (
    <FormRow type='custom' id='residence' label={it.L('Country of residence')}>
        <label id='lbl_residence'></label>
    </FormRow>
);

export const AccountOpeningReason  = ({ row_id, row_class }) => (
    <FormRow
        type='select'
        id='account_opening_reason'
        label={it.L('Account opening reason')}
        row_id={row_id}
        row_class={row_class}
    >
        <option value=''>{it.L('Please select')}</option>
        <option value='Speculative'>{it.L('Speculative')}</option>
        <option value='Income Earning'>{it.L('Income earning')}</option>
        <option value='Hedging'>{it.L('Hedging')}</option>
    </FormRow>
);

export const AddressLine1 = ({ hint, no_hint }) => (
    <FormRow
        type='text'
        id='address_line_1'
        label={it.L('First line of home address')}
        attributes={{maxLength: '70'}}
        hint={hint || (no_hint ? '' : it.L('Kindly provide your complete address.<br>This will be used to authenticate your identity when you open a real account.'))}
    />
);

export const AddressLine2 = ({ hint }) => (
    <FormRow
        type='text'
        id='address_line_2'
        label={it.L('Second line of home address')}
        attributes={{maxLength: '70'}}
        hint={hint}
    />
);

export const AddressCity = ({ hint }) => (
    <FormRow
        type='text'
        id='address_city'
        label={it.L('Town/City')}
        attributes={{maxLength: 35}}
        hint={hint}
    />
);

export const AddressState = () => (
    <FormRow type='select' id='address_state' label={it.L('State/Province')} />
);

export const AddressPostcode = ({ hint }) => (
    <FormRow
        type='text'
        id='address_postcode'
        label={it.L('Postal code/ZIP')}
        attributes={{maxLength: '20'}}
        hint={hint}
    />
);

export const Phone = ({ hint }) => (
    <FormRow
        type='text'
        id='phone'
        label={it.L('Telephone')}
        attributes={{maxLength: '35'}}
        hint={hint}
    />
);

export const SecretQuestion = () => (
    <FormRow type='select' id='secret_question' label={it.L('Secret question')}>
        <option value='Favourite dish'>{it.L('Favourite dish')}</option>
        <option value="Mother's maiden name">{it.L('Mother\'s maiden name')}</option>
        <option value='Name of your pet'>{it.L('Name of your pet')}</option>
        <option value='Name of first love'>{it.L('Name of first love')}</option>
        <option value='Memorable town/city'>{it.L('Memorable town/city')}</option>
        <option value='Memorable date'>{it.L('Memorable date')}</option>
        <option value='Brand of first car'>{it.L('Brand of first car')}</option>
        <option value='Favourite artist'>{it.L('Favourite artist')}</option>
    </FormRow>
);

export const SecretAnswer = () => (
    <FormRow
        type='text'
        id='secret_answer'
        label={it.L('Answer to secret question')}
        attributes={{ maxLength: '50', autoComplete: 'off' }}
    />
);

export const Tnc = () => (
    <div className='center-text'>
        <div className='gr-row'>
            <div className='gr-12-m gr-padding-10 gr-centered'>
                <input type='checkbox' name='tnc' id='tnc' />
                <label htmlFor='tnc'>
                    {it.L(
                        'I have read and agree to the [_1]terms and conditions[_2] of the site.',
                        `<a target="_blank" href="${it.url_for('terms-and-conditions')}">`,
                        '</a>'
                    )}
                </label>
            </div>
        </div>

        <button className='button' type='submit'>{it.L('Open Account')}</button>
    </div>
);

export const ClientMessage = () => (
    <div className='errorbox rbox invisible' id='client_message'>
        <div className='rbox-wrap'>
            <div className='gr-12 rbox-content' id='client_message_content'>
                <p className='center-text notice-msg'></p>
            </div>
        </div>
    </div>
 );

export const TaxIdentificationNumberTerms = () => (
    <div id='tax_id_terms'>
        <div className='gr-12 gr-padding-10'>
            <input type='checkbox' id='chk_tax_id' />
            <label htmlFor='chk_tax_id'>
                {it.L('I hereby declare that all the above information is true and complete. Furthermore, I will inform Binary Investments (Europe) Ltd. about any changes to this information without undue delay.')}
            </label>
        </div>
        <div className='gr-12 gr-padding-10'>
            <p className='no-margin'>
                <i><span className='errorfield'>* </span>{it.L('You may be considered a tax resident in more than one jurisdiction. [_1] does not provide tax advice. If you have any doubts, kindly consult your tax advisor and provide us with correct information about your tax residency.', it.website_name)}</i>
            </p>
        </div>
    </div>
);

export const TaxInformationNote = ({ className }) => (
    <div id='tax_information_note' className={`gr-12 ${className || ''}`}>
        <p>{it.L('As a legal and regulatory requirement, Binary Investments (Europe) Ltd. is obliged to collect certain information relating to CRS/FATCA compliance. Please fill in the following self-certification form before we can enable any further activity on your account.')}</p>
        <p>{it.L('The information provided by you may only be disclosed to the authorities legally charged with collecting this information for the purposes of CRS/FATCA reporting and only to the extent to which Binary Investments (Europe) Ltd. is legally obliged to collect and disclose it. The information shall not be used, disclosed, or processed in any other way at any time.')}</p>
        <p>{it.L('Please note that we have the right and obligation not to accept the information provided by you if we know of a reason to believe that it is incorrect, inaccurate, or incomplete. In such cases, we will be asking you to clarify or correct the details provided in the CRS/FATCA questionnaire.')}</p>
    </div>
);

export const GeocodeResponse = () => (
    <div className='gr-row'>
        <div className='gr-12 gr-padding-10 center-text'>
            <p id='geocode_error' className='notice-msg no-margin invisible'>
                {it.L('Your address could not be verified by our automated system. You may proceed but please ensure that your address is complete.')}
            </p>
        </div>
    </div>
);

