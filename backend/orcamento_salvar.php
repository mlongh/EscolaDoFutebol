<?php
    $nome = $_GET['name'];
    $telefone = $_GET['phone'];
    $email = $_GET['email'];
    $servico_interesse = $_GET['service'];
    $endereco = $_GET['adress'];
    $data = $_GET['date'];
    $cidade = $_GET['city'];
    $mensagem = $_GET['message'];

    require 'banco.php';

    $sql = "insert into t_orcamento (name, phone, email, service, message,adress, date, city)
            values (:nome, :telefone, :email, :servico_interesse, :endereco, :data, :cidade, :mensagem)  ";

    $consulta = $conexao->prepare($sql);
    $consulta->bindParam(':nome', $nome, PDO::PARAM_STR);
    $consulta->bindParam(':telefone', $telefone, PDO::PARAM_STR);
    $consulta->bindParam(':email', $email, PDO::PARAM_STR);
    $consulta->bindParam(':servico_interesse', $servico_interesse, PDO::PARAM_STR);
    $consulta->bindParam(':endereco', $endereco, PDO::PARAM_STR);
    $consulta->bindParam(':data', $data, PDO::PARAM_STR);
    $consulta->bindParam(':cidade', $cidade, PDO::PARAM_STR);
    $consulta->bindParam(':mensagem', $mensagem, PDO::PARAM_STR);

    $consulta->execute();
    $linhas = $consulta->rowCount();

    echo $linhas;
?>