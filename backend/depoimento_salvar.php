<?php
    $nome = $_GET['nome'];
    $cidade = $_GET['cidade'];
    $mensagem = $_GET['mensagem'];

    require 'banco.php';

    $sql = "insert into t_depoimentos (Nome, Cidade, Mensagem)
            values (:nome, :cidade, :mensagem)  ";

    $consulta = $conexao->prepare($sql);
    $consulta->bindParam(':nome', $nome, PDO::PARAM_STR);
    $consulta->bindParam(':cidade', $cidade, PDO::PARAM_STR);
    $consulta->bindParam(':mensagem', $mensagem, PDO::PARAM_STR);

    $consulta->execute();
    $linhas = $consulta->rowCount();

    echo $linhas;
?>