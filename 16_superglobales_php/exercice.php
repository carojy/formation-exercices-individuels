<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice PHP</title>
</head>

    <body>
        <h1>Exercice PHP</h1>


        <form action="exercice.php" method="post">
        <p>Votre nom : <input type="text" name="first_name" /></p>
        <p><input type="submit" value="OK"></p>
        </form>

        <form method="post" action="exercice.php">
        <input type="hidden" name="reset" value="true" />
        <input type="button" value="Reset" />
        </form>


        <?php session_start();

        $firstname="anonyme";
        
        if (isset($_GET["first_name"]) ){
            $firstname = $_GET["first_name"] ;
        }

        else if (isset($_POST["first_name"])) {
            $firstname = $_POST["first_name"];
            $_SESSION["first_name"] = $_POST["first_name"];
        }

        else if (isset($_SESSION["first_name"])){
            $firstname = $_SESSION["first_name"];
        }
        
        echo 'Bonjour ' . $firstname . ' !';

        ?>



    </body>

</html>







