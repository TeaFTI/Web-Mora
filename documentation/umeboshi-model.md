# Model

erDiagram
    %% User
    %% The user of the system
    user |o--o| contact : is
    user {
        uuid id PK
        uuid contact_id FK
        text username
        text password
        text salt
    }

    %% Contact
    contact {
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

    %% Email
    email {
        uuid id PK
        text email
    }

    contact ||--o| contact_email : has
    email ||--o| contact_email : is
    contact_email {
        uuid contact_id PK,FK
        uuid email_id PK,FK
    }

    %% Telephone Number
    telephone_number {
        uuid id PK
        text country_code
        text number
    }

    contact ||--o| contact_telephone_number : has
    contact_telephone_number ||--o| telephone_number : is
    contact_telephone_number {
        uuid contact_id PK
        uusid telephone_number_id PK
    }

    %% Address
    address }|--|| city : has
    address {
        uuid id PK
        text city_id
        text street
        text postal_code
    }

    contact ||--o| contact_address : has
    address ||--o| contact_address : belong
    contact_address {
        uuid contact_id PK,FK
        uusid address_id PK,FK
    }

    %% City
    city }|--|| division : has
    city {
        uuid id PK
        uuid division_id FK
        text name
    }

    %% Division
    division }|--|| country : has
    division {
        uuid id PK
        uuid country_id FK
        text name
        text iso_3166_2
    }

    %% Country
    country {
        uuid id PK
        text name
        text official_state_name
        text iso_3166_1
        text iso_3166_1_alpha_2
        text iso_3166_1_alpha_3
    }

    %% Account
    account {
        uuid id PK
        uuid account_type_id FK
        text name
        uuid type
    }

    account ||--o| account_type : has
    account_type {
        uuid id PK
        text name
        text description
    }

    %% Transaction
    transaction {
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

    transaction ||--o| transaction_type : has
    transaction_type {
        uuid id PK
        text name
        text description
    }

    %% Property
    property ||--|| address : is
    property {
        uuid id PK
        text key PK
        uuid address_id FK
        text parcel_number_local
        text parcel_number_state
        text parcel_number_property_id
        text taxing_district_code
        text taxing_district_description
        smallint section
        smallint township
        smallint range
        text subdivision_name
        smallint subdivision_section
        smallint deeded_acres
        text political_township
        smallint lot_number
        text state_tax_district
        text lot
        text block
    }

    %% Tenant
    tenant ||--|| contact : is
    tenant {
        uuid id PK
        uuid contact_id FK
        uuid property_id FK
    }

    %% Contract
    contract {
        uuid id PK
    }
