<?php
    require 'banco.php';

    $sql = "select * from t_servicos order by id";    
    $consulta = $conexao->prepare($sql);
    
    $consulta->execute();

    $dados = $consulta->fetchAll(PDO::FETCH_OBJ);

    echo json_encode($dados);

?>