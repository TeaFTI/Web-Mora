# Model

erDiagram
    ACCOUNT ||--o| ACCOUNT-TYPE-DETAIL: has
    ACCOUNT {
        uuid id PK
        text name
        uuid type
    }
    ACCOUNT-TYPE ||--o| ACCOUNT-TYPE-DETAIL: has
    ACCOUNT-TYPE {
        uuid id PK
        text name
    }
    ACCOUNT-TYPE-DETAIL {
        uuid accountid FK
        uuid accounttypeid FK
    }
    ACCOUNT ||--o{ TRANSACTION : has
    TRANSACTION ||--o{ TRANSACTION-CATEGORY-DETAIL : has
    TRANSACTION ||--o| TRANSACTION-TAG : has
    TRANSACTION {
        uuid id PK
        timestamptz timestamp
        text description
        uuid source
        uuid destination
        money originalCost
        money tax
        money adjustment
        money discount
        enum type
    }
    TRANSACTION-CATEGORY ||--o{ TRANSACTION-CATEGORY-DETAIL : associate
    TRANSACTION-CATEGORY {
        uuid id PK
        text name
    }
    TRANSACTION-CATEGORY-DETAIL {
        uuid transactionid FK
        uuid transactioncategoryid FK
    }
    TRANSACTION-TAG {
        uuid id PK
        text name
    }
