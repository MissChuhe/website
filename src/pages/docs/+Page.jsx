import React, { useMemo, useState } from 'react';
import '../../styles/Docs.scss';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'API Documentation | Taifa Mobile Developer Portal' },
  {
    name: 'description',
    content:
      'Explore Taifa Mobile API documentation for SMS and Data services, including authentication, endpoints, request examples, and response formats for fast integrations.'
  }
];

const sendSmsCurl = `curl --location --request POST 'https://api.taifamobile.co.ke/sms/sendsms' \\
--header 'api-key: YOUR_API_KEY' \\
--header 'Content-Type: application/json' \\
--data-raw '{
  "mobile": "+254707556633",
  "response_type": "json",
  "sender_name": "TaifaMobile",
  "service_id": 0,
  "message": "This is a message.\\n\\nRegards\\nTaifa Mobile Ltd"
}'`;

const sendSmsPhp = `$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.taifamobile.co.ke/sms/sendsms',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 15,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "mobile": "+254707556633",
    "response_type": "json",
    "sender_name": "TaifaMobile",
    "service_id": 0,
    "message": "This is a message.\\n\\nRegards\\nTaifa Mobile Ltd"
}',
  CURLOPT_HTTPHEADER => array(
    'api-key: YOUR_API_KEY',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`;

const validateMobileCurl = `curl --location --request GET 'https://api.taifamobile.co.ke/sms/mobile?mobile=707556633' \\
--header 'api-key: YOUR_API_KEY'`;

const validateMobilePhp = `$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.taifamobile.co.ke/sms/mobile?return=json&mobile=707556633',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 15,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'api-key: YOUR_API_KEY'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`;

const successStatus = `[
  {
    "status_code": "1000",
    "status_desc": "Success",
    "message_id": 8692671,
    "mobile_number": "+254707556633",
    "network_id": "1",
    "message_cost": "0.75",
    "credit_balance": "7231"
  }
]`;

const failedStatus = `[
  {
    "status_code": "1001",
    "status_desc": "Invalid short code",
    "message_id": "0",
    "mobile_number": "+254707556633",
    "network_id": "",
    "message_cost": "",
    "credit_balance": ""
  }
]`;

const statusCodes = [
  ['1', '1000', 'Success'],
  ['2', '1001', 'Invalid short code'],
  ['3', '1002', 'Network not allowed'],
  ['4', '1003', 'Invalid mobile number'],
  ['5', '1004', 'Low bulk credits'],
  ['6', '1005', 'Internal system error'],
  ['7', '1006', 'Invalid credentials'],
  ['8', '1007', 'Db connection failed'],
  ['9', '1008', 'Db selection failed'],
  ['10', '1009', 'Data type not supported'],
  ['11', '1010', 'Request type not supported'],
  ['12', '1011', 'Invalid user state or account suspended'],
  ['13', '1012', 'Mobile number in DND'],
  ['14', '1013', 'Invalid API Key'],
  ['15', '1014', 'IP not allowed']
];

function CodeSnippet({ code, label = 'Code snippet' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else if (typeof document !== 'undefined') {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div className="docs-code-shell">
      <button
        type="button"
        className={`docs-copy-btn ${copied ? 'is-copied' : ''}`}
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  );
}

const dataOverview = {
  Authentication: [
    ['POST', '/api/v1/token', 'Obtain an API token']
  ],
  Account: [
    ['GET', '/api/v1/account', 'Get account details'],
    ['GET', '/api/v1/account/balance', 'Get wallet balance'],
    ['POST', '/api/v1/account/balance', 'Top-up wallet (STK push)']
  ],
  Bundles: [
    ['GET', '/api/v1/bundles', 'List all bundles'],
    ['GET', '/api/v1/bundles/{id}', 'Bundle details']
  ],
  Disbursements: [
    ['POST', '/api/v1/disburse', 'Disburse to a single subscriber or many subscribers'],
    ['POST', '/api/v1/disburse/group', 'Disburse to a group'],
    ['GET', '/api/v1/disbursements', 'List all disbursements'],
    ['GET', '/api/v1/disbursements/{id}', 'Disbursement details'],
    ['GET', '/api/v1/batch-disbursements', 'List all batch disbursements'],
    ['GET', '/api/v1/batch-disbursements/{id}', 'Batch disbursement details']
  ],
  'Groups & Contacts': [
    ['GET', '/api/v1/groups', 'List all groups'],
    ['POST', '/api/v1/groups', 'Create a group'],
    ['GET', '/api/v1/groups/{id}', 'Group details'],
    ['PATCH', '/api/v1/groups/{id}', 'Update a group'],
    ['DELETE', '/api/v1/groups/{id}', 'Delete a group'],
    ['GET', '/api/v1/groups/{id}/contacts', 'List group contacts'],
    ['POST', '/api/v1/groups/{id}/contacts', 'Add contact to group'],
    ['DELETE', '/api/v1/groups/{groupId}/contacts/{contactId}', 'Remove contact from group']
  ]
};

const dataEndpointDocs = [
  {
    key: 'token',
    title: 'POST /api/v1/token',
    authentication: 'None',
    description: 'Obtain an API token.',
    headers: ['Accept: application/json', 'Content-Type: application/json'],
    bodyParameters: ['email (string, required)', 'password (string, required)'],
    sampleBody: `{
  "email": "user@example.com",
  "password": "your_password"
}`,
    response: `{
  "data": {
    "token": "a1b2c3d4e5f6g7h8i9j0k"
  },
  "message": "token generated successfully"
}`,
    errors: ['401: invalid credentials']
  },
  {
    key: 'account',
    title: 'GET /api/v1/account',
    authentication: 'Bearer',
    description: "Get the authenticated user's details.",
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "phone": "254712345678",
    "joined_at": "2025-07-04T13:25:43.000000Z"
  },
  "message": "user fetched successfully"
}`,
    errors: ['401: Unauthenticated.']
  },
  {
    key: 'balance-get',
    title: 'GET /api/v1/account/balance',
    authentication: 'Bearer',
    description: "Get the user's wallet balance.",
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": {
    "id": 1,
    "balance": 1000,
    "currency": "KES"
  },
  "message": "Wallet retrieved successfully."
}`,
    errors: ['401: Unauthenticated.']
  },
  {
    key: 'balance-topup',
    title: 'POST /api/v1/account/balance',
    authentication: 'Bearer',
    description: 'Top-up account wallet. It initiates an STK push (M-Pesa payment request).',
    headers: [
      'Accept: application/json',
      'Content-Type: application/json',
      'Authorization: Bearer {token}'
    ],
    bodyParameters: [
      'amount (number, required)',
      'phone (string, required, format: 2547XXXXXXXX)'
    ],
    sampleBody: `{
  "amount": 500,
  "phone": "254712345678"
}`,
    response: `{
  "message": "top-up request processed successfully. Please complete the payment on your phone."
}`,
    errors: ['401: Unauthenticated.', '422: validation error', '500: Internal server error']
  },
  {
    key: 'bundles',
    title: 'GET /api/v1/bundles',
    authentication: 'Bearer',
    description: 'List all bundles.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": [
    {
      "id": 1,
      "type": "PROMO",
      "name": "20MB",
      "denomination": 20
    }
  ],
  "message": "Bundles fetched successfully"
}`,
    errors: ['401: Unauthenticated.']
  },
  {
    key: 'bundle-by-id',
    title: 'GET /api/v1/bundles/{id}',
    authentication: 'Bearer',
    description: 'Get details for a specific bundle.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": {
    "id": 1,
    "type": "PROMO",
    "name": "20MB",
    "denomination": 20
  },
  "message": "Bundle fetched successfully"
}`,
    errors: ['401: Unauthenticated.', '404: Bundle not found']
  },
  {
    key: 'disburse',
    title: 'POST /api/v1/disburse',
    authentication: 'Bearer',
    description: 'Disburse a data unit to one or many subscribers. Multiple numbers are separated by new lines.',
    headers: [
      'Accept: application/json',
      'Content-Type: application/json',
      'Authorization: Bearer {token}'
    ],
    bodyParameters: [
      'bundle_id (number, required)',
      'phones (string, required, format: 2547XXXXXXXX)'
    ],
    sampleBody: `{
  "bundle_id": 1,
  "phones": "254712345678\\r\\n254112345678"
}`,
    response: `{
  "single_phone": {
    "data": {
      "disbursement_id": 1,
      "disbursement_status": "PENDING",
      "bundle_name": "50MB"
    },
    "message": "disbursement scheduled successfully"
  },
  "multiple_phones": {
    "data": {
      "batch_id": 1,
      "batch_status": "PENDING",
      "bundle_name": "50MB"
    },
    "message": "disbursements scheduled successfully"
  }
}`,
    errors: [
      '401: Unauthenticated.',
      '422: invalid bundle requested.',
      '422: bundle_id should be of type integer.',
      '422: provide at least one phone number.',
      '422: phones should be of type string.',
      '422: each phone should start on a new line in the format 254XXXXXXXXX.'
    ]
  },
  {
    key: 'disburse-group',
    title: 'POST /api/v1/disburse/group',
    authentication: 'Bearer',
    description: 'Disburse a data unit to an existing group of subscribers.',
    headers: [
      'Accept: application/json',
      'Content-Type: application/json',
      'Authorization: Bearer {token}'
    ],
    bodyParameters: ['group_id (number, required)', 'bundle_id (number, required)'],
    sampleBody: `{
  "group_id": 1,
  "bundle_id": 1
}`,
    response: `{
  "data": {
    "batch_id": 1,
    "batch_status": "PENDING",
    "bundle_name": "50MB"
  },
  "message": "disbursements scheduled successfully"
}`,
    errors: [
      '401: Unauthenticated.',
      '422: invalid bundle requested.',
      '422: bundle_id should be of type integer.',
      '422: invalid group requested.',
      '422: group_id should be of type integer.',
      '429: group not found.',
      '429: group has no active contacts.'
    ]
  },
  {
    key: 'disbursements',
    title: 'GET /api/v1/disbursements',
    authentication: 'Bearer',
    description: 'List all disbursements made by the account.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": [
    {
      "id": 33,
      "phone": "254712345678",
      "bundle": {
        "type": "PROMO",
        "name": "20MB"
      },
      "status": "FAILED",
      "description": "insufficient balance",
      "issued_at": "2025-07-18 11:50:51"
    }
  ],
  "message": "disbursements fetched successfully"
}`,
    errors: ['401: Unauthenticated.']
  },
  {
    key: 'disbursement-by-id',
    title: 'GET /api/v1/disbursements/{id}',
    authentication: 'Bearer',
    description: 'Get details of a specific disbursement.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    bodyParameters: ['Path parameter: id (integer, required)'],
    response: `{
  "data": {
    "id": 1,
    "phone": "254712345678",
    "bundle": {
      "type": "PROMO",
      "name": "20MB"
    },
    "status": "FAILED",
    "issued_at": "2025-06-26 11:47:15"
  },
  "message": "disbursement fetched successfully"
}`,
    errors: ['401: Unauthenticated.', '404: disbursement not found']
  },
  {
    key: 'batch-disbursements',
    title: 'GET /api/v1/batch-disbursements',
    authentication: 'Bearer',
    description: 'List all disbursement batches made by the account.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": [
    {
      "id": 13,
      "status": "PARTIAL",
      "type": "batch",
      "scheduled_at": "2025-07-11 16:27:45"
    }
  ],
  "message": "batch disbursements fetched successfully"
}`,
    errors: ['401: Unauthenticated.']
  },
  {
    key: 'batch-disbursement-by-id',
    title: 'GET /api/v1/batch-disbursements/{id}',
    authentication: 'Bearer',
    description: 'Get details of a specific batch disbursement.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    bodyParameters: ['Path parameter: id (integer, required)'],
    response: `{
  "data": {
    "id": 14,
    "status": "PARTIAL",
    "type": "batch",
    "bundle": "20MB",
    "group_name": null,
    "total_disbursements": 2,
    "failed_disbursements": 1,
    "scheduled_at": "2025-07-18 11:50:50"
  },
  "message": "batch disbursement fetched successfully"
}`,
    errors: ['401: Unauthenticated.', '404: batch disbursement not found']
  },
  {
    key: 'groups-create',
    title: 'POST /api/v1/groups',
    authentication: 'Bearer',
    description: 'Create a new group.',
    headers: [
      'Accept: application/json',
      'Content-Type: application/json',
      'Authorization: Bearer {token}'
    ],
    bodyParameters: ['name (string, required)', 'description (string, optional)'],
    sampleBody: `{
  "name": "awesome group",
  "description": "awesome description"
}`,
    response: `{
  "data": {
    "id": 1,
    "name": "awesome group",
    "description": "awesome description"
  },
  "message": "group created successfully"
}`,
    errors: ['401: Unauthenticated.', '422: validation error']
  },
  {
    key: 'groups-list',
    title: 'GET /api/v1/groups',
    authentication: 'Bearer',
    description: 'List all groups.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    response: `{
  "data": [
    {
      "id": 1,
      "name": "awesome group",
      "description": "awesome description"
    }
  ],
  "message": "groups fetched successfully"
}`,
    errors: ['401: Unauthenticated.']
  },
  {
    key: 'groups-by-id',
    title: 'GET /api/v1/groups/{id}',
    authentication: 'Bearer',
    description: 'Get details of a group.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    bodyParameters: ['Path parameter: id (integer, required)'],
    response: `{
  "data": {
    "id": 1,
    "name": "awesome group",
    "description": "awesome description"
  },
  "message": "group fetched successfully"
}`,
    errors: ['401: Unauthenticated.', '404: group not found']
  },
  {
    key: 'groups-update',
    title: 'PATCH /api/v1/groups/{id}',
    authentication: 'Bearer',
    description: "Update a group's details.",
    headers: [
      'Accept: application/json',
      'Content-Type: application/json',
      'Authorization: Bearer {token}'
    ],
    bodyParameters: [
      'Path parameter: id (integer, required)',
      'name (string, optional)',
      'description (string, optional)'
    ],
    response: `{
  "data": {
    "id": 1,
    "name": "Updated Name",
    "description": "Updated description"
  },
  "message": "group updated successfully"
}`,
    errors: ['401: Unauthenticated.', '404: group not found', '422: validation error']
  },
  {
    key: 'groups-delete',
    title: 'DELETE /api/v1/groups/{id}',
    authentication: 'Bearer',
    description: 'Delete a group.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    bodyParameters: ['Path parameter: id (integer, required)'],
    response: `{
  "message": "group deleted successfully"
}`,
    errors: ['401: Unauthenticated.', '404: group not found']
  },
  {
    key: 'group-contacts-list',
    title: 'GET /api/v1/groups/{id}/contacts',
    authentication: 'Bearer',
    description: 'List contacts in a group.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    bodyParameters: ['Path parameter: id (integer, required)'],
    response: `{
  "data": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "phone": "254712345678"
    }
  ],
  "message": "contacts fetched successfully"
}`,
    errors: ['401: Unauthenticated.', '404: group not found']
  },
  {
    key: 'group-contacts-add',
    title: 'POST /api/v1/groups/{id}/contacts',
    authentication: 'Bearer',
    description: 'Add a contact to a group.',
    headers: [
      'Accept: application/json',
      'Content-Type: application/json',
      'Authorization: Bearer {token}'
    ],
    bodyParameters: [
      'Path parameter: id (integer, required)',
      'phone (string, required)',
      'first_name (string, optional)',
      'last_name (string, optional)'
    ],
    sampleBody: `{
  "phone": "254712345678",
  "first_name": "John",
  "last_name": "Doe"
}`,
    response: `{
  "message": "contact added to group successfully"
}`,
    errors: [
      '401: Unauthenticated.',
      '404: group not found',
      '409: contact already exists in the group',
      '422: validation error'
    ]
  },
  {
    key: 'group-contacts-delete',
    title: 'DELETE /api/v1/groups/{groupId}/contacts/{contactId}',
    authentication: 'Bearer',
    description: 'Remove a contact from a group.',
    headers: ['Accept: application/json', 'Authorization: Bearer {token}'],
    bodyParameters: [
      'Path parameter: groupId (integer, required)',
      'Path parameter: contactId (integer, required)'
    ],
    response: `{
  "message": "contact removed from group successfully"
}`,
    errors: ['401: Unauthenticated.', '404: group not found', '409: contact does not exist in the group']
  }
];

function DataEndpointCard({ endpoint }) {
  return (
    <article className="docs-endpoint" id={endpoint.key}>
      <h3>{endpoint.title}</h3>
      <p>{endpoint.description}</p>
      <div className="docs-meta-grid">
        <div><strong>Authentication:</strong> {endpoint.authentication}</div>
      </div>

      {endpoint.headers && endpoint.headers.length > 0 && (
        <>
          <h4>Headers</h4>
          <ul className="docs-list">
            {endpoint.headers.map((header) => (
              <li key={header}><code>{header}</code></li>
            ))}
          </ul>
        </>
      )}

      {endpoint.bodyParameters && endpoint.bodyParameters.length > 0 && (
        <>
          <h4>Parameters</h4>
          <ul className="docs-list">
            {endpoint.bodyParameters.map((param) => (
              <li key={param}>{param}</li>
            ))}
          </ul>
        </>
      )}

      {endpoint.sampleBody && (
        <div className="docs-code-block">
          <h4>Sample Body</h4>
          <CodeSnippet code={endpoint.sampleBody} label={`${endpoint.title} sample body`} />
        </div>
      )}

      {endpoint.response && (
        <div className="docs-code-block">
          <h4>Response</h4>
          <CodeSnippet code={endpoint.response} label={`${endpoint.title} response`} />
        </div>
      )}

      {endpoint.errors && endpoint.errors.length > 0 && (
        <>
          <h4>Errors</h4>
          <ul className="docs-list">
            {endpoint.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}

function SmsDocs() {
  return (
    <>
      <section className="docs-hero">
        <div className="container">
          <h1>Get Into Messaging!</h1>
          <p>SMS API Endpoint</p>
          <code>https://api.taifamobile.co.ke/sms/sendsms</code>
          <p className="docs-intro">
            Below is a quick step by step guide on how to integrate into our Bulk and Short code / Premium messaging gateway through an application programming interface (API).
          </p>
          <p>
            To use this API, you need an API Key. If you have already signed up, you can get your API Key from your account.
          </p>
          <p className="docs-note">
            NOTE: You can import the cURL examples into Postman and generate sample code in different languages.
          </p>
        </div>
      </section>

      <section className="docs-section container">
        <h2>Send SMS - Bulk &amp; Shortcodes</h2>

        <div className="docs-code-block">
          <h3>cURL example</h3>
          <CodeSnippet code={sendSmsCurl} label="Send SMS cURL example" />
        </div>

        <div className="docs-code-block">
          <h3>PHP example</h3>
          <CodeSnippet code={sendSmsPhp} label="Send SMS PHP example" />
        </div>

        <p>
          Send a message to a mobile subscriber using a Sender Name (alphanumeric sender ID):
        </p>
        <code>https://api.taifamobile.co.ke/sms/sendsms</code>

        <div className="docs-meta-grid">
          <div><strong>Request Type:</strong> POST</div>
        </div>

        <h3>Parameters</h3>
        <div className="docs-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>api-key</td>
                <td>String</td>
                <td>Your API key. It goes to the header.</td>
              </tr>
              <tr>
                <td>mobile</td>
                <td>String</td>
                <td>The customer mobile number. Can be 722xxxyyy, 0722xxxyyy, or +254722xxxyyy. For multiple numbers, separate with commas.</td>
              </tr>
              <tr>
                <td>response_type</td>
                <td>String</td>
                <td>[Optional, defaults to json] either json or plain.</td>
              </tr>
              <tr>
                <td>sender_name</td>
                <td>String</td>
                <td>The origination alphanumeric or numeric code, e.g. TaifaMobile or 12345 for shortcode messages.</td>
              </tr>
              <tr>
                <td>service_id</td>
                <td>Integer</td>
                <td>Identifier of the service allocated to the customer. This is always 0 for bulk messaging.</td>
              </tr>
              <tr>
                <td>link_id</td>
                <td>String</td>
                <td>[Optional] Leave empty for bulk messages. For shortcode on-demand messages, include the received link_id.</td>
              </tr>
              <tr>
                <td>message</td>
                <td>String</td>
                <td>The message to send. Maximum 920 characters (up to 6 SMS units). Every SMS unit is charged.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Messaging Status Codes</h3>

        <div className="docs-code-block">
          <h4>Success status</h4>
          <CodeSnippet code={successStatus} label="Success status response" />
        </div>

        <div className="docs-code-block">
          <h4>Failed status</h4>
          <CodeSnippet code={failedStatus} label="Failed status response" />
        </div>

        <div className="docs-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Status Id</th>
                <th>Status Code</th>
                <th>Status Description</th>
              </tr>
            </thead>
            <tbody>
              {statusCodes.map(([id, code, desc]) => (
                <tr key={code}>
                  <td>{id}</td>
                  <td>{code}</td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="docs-section container">
        <h2>Validate Mobile Number</h2>

        <div className="docs-code-block">
          <h3>cURL example</h3>
          <CodeSnippet code={validateMobileCurl} label="Validate mobile cURL example" />
        </div>

        <div className="docs-code-block">
          <h3>PHP example</h3>
          <CodeSnippet code={validateMobilePhp} label="Validate mobile PHP example" />
        </div>

        <p>Validate and check the network a mobile number belongs to.</p>

        <div className="docs-meta-grid">
          <div><strong>Request Type:</strong> GET</div>
        </div>

        <h3>Request Parameters</h3>
        <div className="docs-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>return</td>
                <td>String</td>
                <td>The return type: either json or just the validated mobile number.</td>
              </tr>
              <tr>
                <td>mobile</td>
                <td>String</td>
                <td>The mobile number to be validated.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function DataDocs() {
  return (
    <>
      <section className="docs-hero docs-hero--data">
        <div className="container">
          <h1>Data API v1 Documentation</h1>
          <p>Switch to the Data API menu to access data services integration endpoints.</p>
          <code>Base: /api/v1</code>
          <p className="docs-intro">Authentication uses bearer tokens. Obtain a token first, then include it in every protected request header.</p>
        </div>
      </section>

      <section className="docs-section container">
        <h2>Dashboard</h2>
        <p>Use this endpoint map to quickly locate each service area.</p>

        {Object.entries(dataOverview).map(([groupName, rows]) => (
          <div key={groupName} className="docs-group-block">
            <h3>{groupName}</h3>
            <div className="docs-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([method, endpoint, description]) => (
                    <tr key={`${method}-${endpoint}`}>
                      <td><span className={`docs-method docs-method--${method.toLowerCase()}`}>{method}</span></td>
                      <td><code>{endpoint}</code></td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <section className="docs-section container">
        <h2>Endpoint Reference</h2>
        <p>Detailed request and response documentation for Data API v1.</p>
        <div className="docs-endpoints-stack">
          {dataEndpointDocs.map((endpoint) => (
            <DataEndpointCard key={endpoint.key} endpoint={endpoint} />
          ))}
        </div>
      </section>
    </>
  );
}

export default function ApiDocsPage() {
  const [activeService, setActiveService] = useState('sms');

  const services = useMemo(() => ([
    { key: 'sms', label: 'SMS API' },
    { key: 'data', label: 'Data API v1' }
  ]), []);

  return (
    <main className={`docs-page ${activeService === 'data' ? 'docs-page--data' : 'docs-page--sms'}`}>
      <div className="docs-layout container">
        <aside className="docs-sidebar" aria-label="Documentation services">
          <h2>Services</h2>
          <p>Select a service to view its API documentation.</p>
          <nav className="docs-service-nav">
            {services.map((service) => (
              <button
                key={service.key}
                type="button"
                className={`docs-service-btn ${activeService === service.key ? 'is-active' : ''}`}
                onClick={() => setActiveService(service.key)}
              >
                {service.label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="docs-content">
          <section className="docs-welcome">
            <h1>Welcome Geeks</h1>
            <p>Choose a service on the left to browse API endpoints, request examples, and response formats.</p>
          </section>
          {activeService === 'sms' ? <SmsDocs /> : <DataDocs />}
        </div>
      </div>
    </main>
  );
}
