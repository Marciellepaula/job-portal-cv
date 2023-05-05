<?php
define('Token', 'HGsZOXpfNC');
$skills = array();
$skill_levels = array();
$hobbies = array();
$institutes = array();
$degrees = array();
$froms = array();
$tos = array();
$grades = array();
$titles = array();
$descriptions = array();

if (Token === $_POST['token']) {
    $temp_profile = $_FILES['profile_image']['tmp_name'];
    $profile = $_FILES['profile_image']['name'];
    $dir = 'images/';
    $file_destination = $dir . $profile;

    // Create the directory if it doesn't exist
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }

    // Move the uploaded file to the destination directory
    if (move_uploaded_file($temp_profile, $file_destination)) {
        echo '';
    } else {
        echo 'Error uploading file.';
    }

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $profession = $_POST['profession'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $about_me = $_POST['about_me'];
    
    // Add the first skill and level to the arrays
    if (isset($_POST['skill1']) && !empty($_POST['skill1']) && isset($_POST['skill_level1']) && !empty($_POST['skill_level1'])) {
        $skills[] = $_POST['skill1'];
        $skill_levels[] = intval($_POST['skill_level1']);
    }

    // Add additional skills and levels to the arrays
    for ($i = 2; $i <= 5; $i++) {
        $skill_field = 'skill' . $i;
        $level_field = 'skill_level' . $i;
        if (isset($_POST[$skill_field]) && !empty($_POST[$skill_field]) && isset($_POST[$level_field]) && !empty($_POST[$level_field])) {
            $skills[] = $_POST[$skill_field];
            $skill_levels[] = intval($_POST[$level_field]);
        }
    }

    // Add hobbies to the hobbies array
    for ($i = 1; $i <= 4; $i++) {
        $hobby_field = 'hobby' . $i;
        if (isset($_POST[$hobby_field]) && !empty($_POST[$hobby_field])) {
            $hobbies[] = $_POST[$hobby_field];
        }
    }

    // Add education details to the arrays
    
    for ($i = 2; $i <= 3; $i++) {
    if (isset($_POST['institute'.$i]) && !empty($_POST['institute'.$i]) &&
        isset($_POST['degree'.$i]) && !empty($_POST['degree'.$i]) &&
        isset($_POST['from'.$i]) && !empty($_POST['from'.$i]) &&
        isset($_POST['to'.$i]) && !empty($_POST['to'.$i]) &&
        isset($_POST['grade'.$i]) && !empty($_POST['grade'.$i])) {
        
        array_push($institutes, $_POST['institute'.$i]);
        array_push($degrees, $_POST['degree'.$i]);
        array_push($froms, $_POST['from'.$i]);
        array_push($tos, $_POST['to'.$i]);
        array_push($grades, $_POST['grade'.$i]);
    }
    
    if (isset($_POST['title'.$i]) && !empty($_POST['title'.$i]) &&
        isset($_POST['description'.$i]) && !empty($_POST['description'.$i])) {
        
        array_push($titles, $_POST['title'.$i]);
        array_push($descriptions, $_POST['description'.$i]);
    }
}

if (empty($institutes) && empty($titles)) {
    header('location: /resumegenerator');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link type="text/css" media="all" rel="stylesheet" href="{{ asset('css1/style.css') }}">
    <title><?php echo ucwords($first_name) . ' Resume'; ?></title>
</head>

<body>
    <div class="grid-container">
        <div class="zone-1">
            <div class="toCenter">
                <img src="images/<?php echo $profile; ?>" class="profile">
            </div>
            <div class="contact-box">
                <div class="title">
                    <h2>Contact</h2>
                </div>
                <div class="call"><i class="fas fa-phone-alt"></i>
                    <div class="text"><?php echo $phone; ?></div>
                </div>
                <div class="email"><i class="fas fa-envelope"></i>
                    <div class="text"><?php echo $email; ?></div>
                </div>
            </div>
            <div class="personal-box">
                <div class="title">
                    <h2>Skills</h2>
                </div>
                <?php
                for ($j = 0; $j < count($skills); $j++) {
                    echo "<div class='skill-1'>
                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p><strong>" .
                        strtoupper($skills[$j]) .
                        "</strong></p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                  <div class='progress'>";
                    for ($i = 0; $i < $skill_levels[$j]; $i++) {
                        echo '<div class="fas fa-star active"></div>';
                    }
                    echo '</div></div>';
                }
                ?>
            </div>
            <div class="hobbies-box">
                <div class="title">
                    <h2>Hobbies</h2>
                </div>
                <?php
                foreach ($hobbies as $hobby) {
                    echo "<div class='d-flex align-items-center'>
                                                                                                                                                                                                                                                                                                                                                                                                                                          <div class='circle'></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                          <div><strong>" .
                        ucwords($hobby) .
                        "</strong></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>";
                }
                
                ?>
            </div>
        </div>
        <div class="zone-2">
            <div class="headTitle">
                <h1><?php echo ucwords($first_name); ?><br><b><?php echo ucwords($last_name); ?></b></h1>
            </div>
            <div class="subTitle">
                <h1><?php echo ucwords($profession); ?><h1>
            </div>
            <div class="group-1">
                <div class="title">
                    <div class="box">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div class="desc"><?php echo $about_me; ?></div>
            </div>
            <div class="group-2">
                <div class="title">
                    <div class="box">
                        <h2>Education</h2>
                    </div>
                </div>
                <div class="desc">
                    <?php
                    for ($i = 0; $i < count($institutes); $i++) {
                        echo "<ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div class='msg-1'>" .
                            $froms[$i] .
                            '-' .
                            $tos[$i] .
                            ' | ' .
                            ucwords($degrees[$i]) .
                            ', ' .
                            $grades[$i] .
                            "</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div class='msg-2'>" .
                            ucwords($institutes[$i]) .
                            "</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </ul>";
                    }
                    ?>
                </div>
            </div>
            <div class="group-3">
                <div class="title">
                    <div class="box">
                        <h2>Experience</h2>
                    </div>
                </div>
                <div class="desc">
                    <?php
                    for ($i = 0; $i < count($titles); $i++) {
                        echo "<ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div class='msg-1'><br></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div class='msg-2'>" .
                            ucwords($titles[$i]) .
                            "</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div class='msg-3'>" .
                            ucfirst($descriptions[$i]) .
                            "</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </ul>";
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
