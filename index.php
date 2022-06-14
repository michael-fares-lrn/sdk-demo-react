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


$request = [
  'activity_id' => 'itemsinlinedemo',
  'activity_template_id' => 'demo-activity-1',
  'rendering_type' => 'inline',
  'type' => 'submit_practice',
  'session_id' => Uuid::generate(),
  'user_id' => '$ANONYMIZED_USER_ID',
  'items' => [
      'Demo3',
      'Demo4',
      'Demo6',
      'Demo7',
      'Demo8',
      'Demo9',
      'Demo10'
  ]
];


$Init = new Init('items', $security, $consumer_secret, $request);
$signedRequest = $Init->generate();
?>
<!DOCTYPE html>
<html>
<head>
    <title>React SPA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<script src="https://items.learnosity.com?v2021.1.LTS"></script>
<!-- REACT APP HERE -->
<div id="root"></div>
<!-- END REACT APP -->



   
    <script 
        src="./public/main.js"
        id="main-script"
        data-parameters='<?php echo htmlspecialchars($signedRequest, ENT_QUOTES); ?>'
    ></script>
<br><br>
<pre>
  <?=json_encode($request, JSON_PRETTY_PRINT)?>
</pre>

</body>
</html>