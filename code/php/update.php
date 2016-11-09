<?php
header('Content-type: text/html;charset=utf-8');

$name = $_POST['name'];
$oldpwd = $_POST['oldpwd'];
$newpwd = $_POST['newpwd'];
$oldpwd = md5($oldpwd);
$newpwd = md5($newpwd);

$conn = new mysqli('localhost', 'root', '', 'hlm');
$conn->query('set names utf8');

$data = array(
    'code' => 0,
    'msg'  => '修改成功！3秒后跳转到登录界面...'
);

$sqlcheck = "SELECT id from `hlm-reg` WHERE name='$name' and pwd='$oldpwd'";

$result = $conn->query($sqlcheck);

if ($result->num_rows > 0) {
	
	$sql = "update `hlm-reg` set pwd='$newpwd' WHERE name='$name'";
	
	if ($conn->query($sql) === true) {
		echo json_encode($data);
	} else {
		$data['code'] = 1;
    	$data['msg'] = '修改失败！';
    	echo json_encode($data);
	}
} else {
	$data['code'] = 1;
	$data['msg'] = '原密码错误';
	echo json_encode($data);
}
$conn->close();
 ?>