<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="addNum.php" method="get">
        Enter a number: <input type="number" name="firstNum">
        Enter another number<input type="number" name="secondNum">
    </form>
    <?php echo $_GET[intval("firstNum")] + $_GET[intval("secondNum")]?> 
    <!-- this has not been solved. I am trying to use HTML to collect the data and calculating the input using PHP -->


    <!-- we can make do with the below -->
    <?php
    $fn = 3;
    $sn = 3;
    $totn = $fn + $sn;
    echo $totn;
    ?>
</body>
</html>