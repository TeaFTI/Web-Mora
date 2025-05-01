# Model

erDiagram
    %% Global User
    %% The user of the system
    global_user ||--o| base_email : has
    global_user {
        uuid id PK
        uuid email_id FK
        text username
        text password
        text first_name
        text middle_name
        text last_name
    }
    %% Base Contact
    base_contact {
        uuid id PK
        text prefix
        text first_name
        text middle_name
        text last_name
        text suffix
        text phonetic_first_name
        text phonetic_middle_name
        text phonetic_last_lame
        text nickname
        text company
    }
    base_contact ||--o| base_contact_email : has
    base_email ||--o| base_contact_email : belong
    base_email {
        uuid id PK
        text email
    }
    base_contact_email {
        uuid contact_id PK
        uuid email_id PK
    }
    base_contact ||--o| base_contact_telephone_number : has
    base_contact_telephone_number ||--o| base_telephone_number : belong
    base_telephone_number {
        uuid id PK
        text country_code
        text number
    }
    base_contact_telephone_number {
        uuid contact_id PK
        uusid telephone_number_id PK
    }
    base_contact ||--o| base_contact_address : has
    base_address ||--o| base_contact_address : belong
    base_address {
        uuid id PK
        text street
        text city
        text state
        text postalCode
    }
    base_contact_address {
        uuid contact_id PK
        uusid address_id PK
    }
    %% Account
    base_account {
        uuid id PK
        uuid account_type_id FK
        text name
        uuid type
    }
    base_account ||--o| base_account_type : has
    base_account_type {
        uuid id PK
        text name
        text description
    }
    %% Base Transaction
    base_transaction {
        uuid id PK
        uuid transaction_type_id FK
        timestamptz timestamp
        text description
        uuid source
        uuid destination
        money original_cost
        money tax
        money adjustment
        money discount
        enum tax_expense
    }
    base_transaction ||--o| base_transaction_type : has
    base_transaction_type {
        uuid id PK
        text name
        text description
    }
