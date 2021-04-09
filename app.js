const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;


const getPost = async ()=>{
     const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
     let data = await response.json();

     data.map((curElem,index)=>{
           const htmlData = `
           <div class="posts">
           <p class="post-id">${pageCount++}</p>
           <h2 class="title">${curElem.title}</h2>
           <p class="post-info">${curElem.body}</p>
           </div>
           `;

           container.insertAdjacentHTML('beforeend',htmlData)
          
     })

}
getPost();




const showData = ()=>{
     setTimeout(()=>{
          pageCount++;
          getPost();
     },300);
}
window.addEventListener("scroll",()=>{
     const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
     if(scrollTop + clientHeight >= scrollHeight){
          console.log("Iam At Bottom");
          showData();
     }
})