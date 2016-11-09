<?php
header('Content-type: text/html;charset=utf-8');

$name = $_POST['name'];
$pwd = $_POST['pwd'];

$pwd = md5($pwd);

$conn = new mysqli('localhost', 'root', '', 'hlm');

$conn->query('set names utf8');

$sql = "SELECT * from `hlm-reg` WHERE name='$name' and pwd='$pwd'";

$result = $conn->query($sql);


$data = array(
    'code' => 0,
    'msg'  => '登录成功！'
);

if ($result->num_rows > 0) {


    $row = $result->fetch_assoc();


    echo json_encode($data);
} else {
    $data['code'] = 1;
    $data['msg'] = '登录失败,用户名或密码错误！';
    echo json_encode($data);
}

$conn->close();
 ?>