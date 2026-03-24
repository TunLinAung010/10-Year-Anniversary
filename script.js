let images = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
];

let i=0;
setInterval(()=>{
i=(i+1)%images.length;
document.getElementById("slide").src=images[i];
},3000);
