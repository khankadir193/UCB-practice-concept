export const SECTION_TWO_FORM_FIELDS = {
    relationship_name: '',
    bank: '',
    report_date: '',
    car_type: '',
    rating_changes: '',
    change_accrual_status: '',
    borrower_details: [
        {
            borrower_name: '',
            port_number: '',
            naics_code: '',
            business_description: '',
            id: Date.now(),
        },
    ],
    guarantor_details: [
        {
            guarantors: '',
            loan_id: '',
            id: Date.now(),
        },
    ],
};


export const COLLATERAL_TABLE_FORM_FIELDS = {
    data: [
        {
            id: '',
            collateral_type: '',
            collateral_desc: '',
            basis_of_value: '',
            appraised_value: '',
            date_of_appraisal: '',
            less_amount_of_prior_liens: '',
            impairment_disc: '',
            adjusted_net_collateral_value: '',
            edit_id: Date.now(),
        },
    ],
    comments_on_collateral_value: '',
    reasons_for_downgrade: '',
};

export const SCHEDULE_OF_ACCOUNTS_FORM_FIELDS = [
    {
        id: '',
        borrower_name: '',
        tax_id: '',
        loan_number: '',
        original_note_date: '',
        original_note_amount: '',
        legal_balance: '',
        current_available: '',
        part_balance: '',
        charge_off_balance: '',
        non_accrual_interest_paid: '',
        net_active_balance: '',
        amortizing: '',
        fdm: '',
        days_past_due: '',
        maturity_date: '',
        existing_risk_rating: '',
        proposed_risk_rating: '',
        non_accrual: '',
        new_non_accrual: '',
        terms: '',
        estimated_impairment: '',
        edit_id: Date.now(),
    },
];