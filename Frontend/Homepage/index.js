document.addEventListener("DOMContentLoaded", function () {
  // Your array of images
  const headerImages = [
    "https://media.istockphoto.com/id/1418805995/photo/happy-hiker-taking-selfie-on-the-top-of-the-mountain-young-man-having-fun-on-weekend-activity.jpg?s=2048x2048&w=is&k=20&c=8GzMT3jYYbaOzyPNUBx-N1DBsO9V3Pd1rMMKedVPLIs=",
    "https://media.istockphoto.com/id/1003990144/photo/hiker-woman-resting-in-nature.jpg?s=2048x2048&w=is&k=20&c=_CSlETSPO2TguHV8JK6lee5yHojrFZVYytx2SuWds5k=",
    "https://media.istockphoto.com/id/1176439818/photo/making-a-memory.jpg?s=2048x2048&w=is&k=20&c=WnifVqiwJu66mbH3PdCA_xSNEe14K81W3gVzAWj1hVU=",
    "https://media.istockphoto.com/id/977671068/photo/woman-traveller-at-dubrovnik-old-town-croatia.jpg?s=2048x2048&w=is&k=20&c=jXwpNFGrKI7YkEaK1cPsDMynu6JpvkLgxgxYjyFoB1c=",
    "https://media.istockphoto.com/id/1241881284/photo/hands-of-cook-photographing-mexican-tacos.jpg?s=2048x2048&w=is&k=20&c=SCSGE15dISzRRPyZGQMihZuGANfumPEQEliBXZTpmUY=",
    "https://media.istockphoto.com/id/1677793567/photo/nutritionist-girl-takes-a-picture-of-healthy-food-at-home-in-the-kitchen-close-up.jpg?s=612x612&w=0&k=20&c=Cf8q01xWSzY9ltx3dgtM4UlYXSLuCz34FAVa4ZBsjT4=",
    // Add more image paths as needed
  ];

  // Get the header element
  const header = document.querySelector(".header");

  let currentIndex = 0;

  function changeBackgroundImage() {
    // Set the background image of the header
    header.style.backgroundImage = `url('${headerImages[currentIndex]}')`;

    // Move to the next image (looping back to the start if at the end)
    currentIndex = (currentIndex + 1) % headerImages.length;
  }

  // Initial call
  changeBackgroundImage();

  // Change the background image every 2 seconds
  setInterval(changeBackgroundImage, 2000);
});


let signinBtn=document.querySelector(".signin-btn")
let createBlogBtn=document.querySelector(".create-blog-btn")

signinBtn.addEventListener("click",()=>{
  const token=JSON.parse(localStorage.getItem("blogToken"))
  if(token){
    window.location.href="../blogspage/blog.html"
  }else{
    window.location.href="../authorization/login.html"
  }
})