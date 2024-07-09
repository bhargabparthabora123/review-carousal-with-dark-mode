const reviews=[
    {
        id:1,
        name:"Susan Smith",
        job:"web developer",
        img:"./person-1.jpeg",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, urna vel scelerisque fringilla, nunc orci consectetur felis, nec pellentesque nisi nulla nec arcu. Duis nec magna facilisis, convallis justo a, sollicitudin lorem. Suspendisse potenti. Curabitur et felis id odio fringilla consectetur. Aenean pretium magna vitae erat convallis, at dignissim nulla sollicitudin."
    },
    {
        id:2,
        name:"Anna Johnson",
        job:"web designer",
        img:"./person-2.jpeg",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a velit at dui dictum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet arcu non tortor sagittis laoreet. Praesent volutpat arcu in lectus vestibulum, quis aliquam tortor hendrerit."
    },
    {
        id:3,
        name:"Peter Jones",
        job:"Intern",
        img:"./person-3.jpeg",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a velit at dui dictum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere "
    },
    {
        id:4,
        name:"Bill Anderson",
        job:"the boss",
        img:"./person-4.jpeg",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a velit at dui dictum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet arcu non tortor sagittis laoreet. Praesent volutpat arcu in lectus vestibulum, quis aliquam tortor hendrerit"
    }
];

// select items
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');


const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");


//set starting item
let currentItem=0;

//load the initial item

window.addEventListener("DOMContentLoaded",function(){
  showperson(currentItem);
})
//show person item

function showperson(currentItem){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showperson(currentItem);
})

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>=reviews.length){
        currentItem=0;
    }
    showperson(currentItem);
})

randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showperson(currentItem);
  });