<?php
    //Conectar com o banco de dados
    require 'banco.php';

    $sql = "select * from t_servicos order by id";    
    $consulta = $conexao->prepare($sql);
    
    $consulta->execute();

    //$linhas = $consulta->rowCount();

    //echo $linhas;
    $dados = $consulta->fetchAll(PDO::FETCH_OBJ);

    echo json_encode($dados);

?>