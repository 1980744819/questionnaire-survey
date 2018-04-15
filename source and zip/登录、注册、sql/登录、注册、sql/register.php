<?php
	include("connection.php");
	
	$name = $_POST['name'];
	$password1 = $_POST['password1'];
	$password2 = $_POST['password2'];

	if($_POST['name']!=null && $_POST['password1']!=null && $_POST['password2']!=null){
		$result = mysql_query("select * from users where name='".$_POST['name']."'");
		if((mysql_num_rows($result))){//查询表中有多少行
			echo "<script> alert('该用户名已存在');parent.location.href='register.html'; </script>";
		}
		else{
			if($_POST['password1']==$_POST['password2']){
				mysql_query("insert into users(name,password) values ('$name','$password1')");
				if(mysql_affected_rows()>0)
					echo "<script>alert('注册成功');parent.location.href='login.html';</script>" ;
				else echo "<script> alert('注册失败，请重试');parent.location.href='register.html';</script>";
			}
			else{
				echo "<script> alert('两次密码输入不一致，请重新输入');parent.location.href='register.html';</script>";
			}
		}
	}
	else echo "<script> alert('输入不能为空');parent.location.href='register.html'; </script>";
	mysql_close($con);
?>