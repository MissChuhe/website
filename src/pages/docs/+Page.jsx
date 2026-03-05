import React from 'react';
import '../../styles/Docs.scss';

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

export default function SmsApiDocsPage() {
  return (
    <main className="docs-page">
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
          <pre><code>{sendSmsCurl}</code></pre>
        </div>

        <div className="docs-code-block">
          <h3>PHP example</h3>
          <pre><code>{sendSmsPhp}</code></pre>
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
          <pre><code>{successStatus}</code></pre>
        </div>

        <div className="docs-code-block">
          <h4>Failed status</h4>
          <pre><code>{failedStatus}</code></pre>
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
          <pre><code>{validateMobileCurl}</code></pre>
        </div>

        <div className="docs-code-block">
          <h3>PHP example</h3>
          <pre><code>{validateMobilePhp}</code></pre>
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
    </main>
  );
}
