<?php
	include("connection.php");
	if($_POST['name']!=null && $_POST['password']!=null){
		$result = mysql_query("select * from users where name='".$_POST['name']."'");
		if($row = mysql_fetch_array($result)){
			if($row['password']==$_POST['password']){
				//setcookie("UserName","zs");
				setcookie("username",$_POST['name'],time()+3600);
				header("Location: home.php"); 
			}
			else
				echo "<script> alert('密码输入错误');parent.location.href='login.html'; </script>"; 	
		}
		else {
			echo "<script> alert('用户未注册');parent.location.href='login.html'; </script>"; 
		}
	}
	else echo "<script> alert('输入不能为空');parent.location.href='login.html'; </script>";
	mysql_close($con);
?>