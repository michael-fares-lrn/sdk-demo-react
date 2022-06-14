<?php

include_once './vendor/autoload.php';

use LearnositySdk\Request\Init;
use LearnositySdk\Utils\Uuid;

$consumer_key = 'yis0TYCu7U9V4o7M';
$consumer_secret = '74c5fd430cf1242a527f6223aebd42d30464be22';

$security = [
    'consumer_key' => $consumer_key,
    'domain'       => 'localhost'
];


//simple api request object for Items API
// practice config
$request = json_decode('
{
  "activity_id": "itemsinlinedemo",
  "activity_template_id": "demo-activity-1",
  "retrieve_tags": true,
  "name": "Items API demo - inline activity",
  "rendering_type": "inline",
  "type": "submit_practice",
  "session_id": "'.Uuid::generate().'",
  "user_id": "ANONYMIZED_USER_ID",
  "items": [
    "inline_demo_q1",
    "inline_demo_q2",
    "Tut002_Item2"
  ]
}
', true);

$Init = new Init('items', $security, $consumer_secret, $request);
$signedRequest = $Init->generate();
?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<!-- REACT APP HERE -->
<script src="https://items.learnosity.com?v2021.1.LTS"></script>
<div id="root"></div>



   
    <script 
        src="./public/main.js"
        id="main-script"
        data-parameters='<?php echo htmlspecialchars($signedRequest, ENT_QUOTES); ?>'
    ></script>



</body>
</html>