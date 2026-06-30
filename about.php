<?php

include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>about</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<?php include 'header.php'; ?>

<div class="heading">
   <h3>about us</h3>
   <p> <a href="home.php">home</a> / about </p>
</div>

<section class="about">

   <div class="flex">

      <div class="image">
         <img src="images/about-img.jpg" alt="">
      </div>

      <div class="content">
         <h3>why choose us?</h3>
         <p>At Online Book Shop, we pride ourselves on curating a diverse and extensive collection of books. Whether you're into classic literature, contemporary fiction, or niche genres, we have something for every reader.
 We believe in building a strong reading community. 

         <p>Choose Online Book Shop for a personalized, diverse, and engaging book-buying experience. Thank you for being a part of our reading community</p>
</p>
         <a href="contact.php" class="btn">contact us</a>
      </div>

   </div>

</section>

<section class="reviews">

   <h1 class="title">client's reviews</h1>

   <div class="box-container">

      <div class="box">
         <img src="image/pic-1.png" alt=" pic is loading">
         <p>Going to Online Book Shop makes me want to get lost! Beautiful covers, matching scents, and countless stories. Truly a book dreamland.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Tanvir Islam Robin</h3>
      </div>

      <div class="box">
      <img src="image/pic-2.png" alt=" pic is loading">
      
         <p>What could be more fun and enjoyable than buying books from an online store like Online Book Shop? Any book, right at hand, in minutes! <br> Excellent!</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Tanif Mia</h3>
      </div>

      <div class="box">
         <img src="image/pic-3.png" alt="">
         <p>Not sure which book to buy? The beautiful reviews and great recommendations of Online Book Shop are absolute lifesavers! Great help in finding the right book.<br></p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Azrul Amalin</h3>
      </div>

      <div class="box">
         <img src="image/pic-4.png" alt="">
         <p>Offers and discount storms hit Online Book Shop! Getting favorite books cheap makes it twice the fun. Online Book Shop is not just a book shop, it's a meeting place for book lovers. Everything in one place! Total win-win</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Salauddin Ahmen</h3>
      </div>

      <div class="box">
         <img src="image/pic-5.png" alt="">
         <p>Buying books at Online Book Shop is not just shopping, it's an exploration! Where else to find new authors, unknown stories, and hidden gems? Like a journey in the world of books.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Maksudor Rahman Roman</h3>
      </div>

      <div class="box">
         <img src="image/pic-6.png" alt="">
         <p>I forgot all online shopping hassles at Online Book Shop! Easy ordering, fast delivery, and perfect packaging - everything is so smooth that I keep coming back.</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>Rana Matria</h3>
      </div>

   </div>

</section>

<section class="authors">

   <h1 class="title">greate authors</h1>

   <div class="box-container">

      <div class="box">
         <img src="image/author-1.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>তৌকির আহমেদ</h3>
      </div>

      <div class="box">
         <img src="image/author-2.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>নিশান রায়</h3>
      </div>

      <div class="box">
         <img src="image/author-3.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>মিহির কান্তি রায়</h3>
      </div>

      <div class="box">
         <img src="image/author-4.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>তানভীর আহমেদ</h3>
      </div>

      <div class="box">
         <img src="image/author-5.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>সাকিব আল হাসান</h3>
      </div>

      <div class="box">
         <img src="image/author-6.jpg" alt="">
         <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
         </div>
         <h3>সুস্মিতো রানা মৈত্র </h3>
      </div>

   </div>

</section>







<?php include 'footer.php'; ?>

<!-- custom js file link  -->
<script src="js/script.js"></script>

</body>
</html>