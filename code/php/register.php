<?php
header('Content-type: text/html;charset=utf-8');

$name     = $_REQUEST['name'];
$password = $_REQUEST['pwd'];

$password = md5($password);


$conn = new mysqli('localhost', 'root', '', 'hlm');

$conn->query('set names utf8');

$data = array(
    'code' => 0,
    'msg'  => '注册成功！'
);

$sql1 = "SELECT id from `hlm-reg` WHERE name='$name'";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
    $data['code'] = 2;
    $data['msg'] = '用户名已被注册了！';

    echo json_encode($data);
} else {
    $sql = "INSERT INTO `hlm-reg` (name, pwd) VALUES ('$name', '$password')";

    if ($conn->query($sql) === true) {
        echo json_encode($data);
    } else {

        $data['code'] = 1;
        $data['msg'] = '注册失败！';

        echo json_encode($data);
    }
}

$conn->close();