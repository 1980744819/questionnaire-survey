<?php
$con = mysql_connect("localhost","root","12345678");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
else{
	//echo "连接成功";
	mysql_select_db("questionnaire",$con);
	// $result = mysql_query("select * from users");
	// while($row = mysql_fetch_array($result)){
	// 	echo "name:".$row['id'];
	// }
	// mysql_close($con);
}
?>