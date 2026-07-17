<?php
$archivos = glob("dioses/*.*");
$dioses = [];

foreach($archivos as $archivo)
{
    $nombre = pathinfo($archivo, PATHINFO_FILENAME);
    $nombre = ucfirst($nombre);

        $dioses[] =
        [
            "nombre" => $nombre,
            "ruta" => $archivo
        ];
}

echo json_encode($dioses, JSON_PRETTY_PRINT);
?>
