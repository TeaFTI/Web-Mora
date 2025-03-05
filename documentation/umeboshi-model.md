# Model

erDiagram
    ACCOUNT ||--o| ACCOUNT-TYPE : has
    ACCOUNT {
        uuid id PK
        text name
        uuid type
    }
    ACCOUNT-TYPE {
        uuid id PK
        text name
    }
    ACCOUNT ||--o{ TRANSACTION : has
    TRANSACTION ||--o{ TRANSACTION-CATEGORY : has
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
    CATEGORY ||--o{ TRANSACTION-CATEGORY : associate
    CATEGORY {
        uuid id PK
        text name
    }
    TRANSACTION-CATEGORY {
        uuid transaction
        uuid category
    }
    TRANSACTION-TAG {
        uuid id PK
        text name
    }
