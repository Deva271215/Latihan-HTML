<?php

$name = $_POST['Full Name'];
$nim = $_POST['NIM'];
$date = $_POST['Date of Birth'];
$bp = $_POST['Place of Birth'];
$age = $_POST['Age'];
$hobby = $_POST['Hobby'];
$annotation = $_POST['Annotation'];

echo "Full Name : ", $name;
echo "<br><br>"; 
echo "NIM : ", $nim;
echo "<br><br>"; 
echo "Date of Birth : ", $date;
echo "<br><br>"; 
echo "Place of Birth : ", $bp;
echo "<br><br>"; 
echo "Age : ", $age, " ";

if ($age <= 10){
    echo "(Children)";
}elseif ($age <= 20){
    echo "(Teenager)";
}elseif ($age <= 25){
    echo "(Adult)";
}else{
    echo "(Elderly)";
}
echo "<br><br>"; 
echo "Hobby : ", $hobby;
echo "<br><br>"; 
echo "Annotation : ", $annotation;
?>