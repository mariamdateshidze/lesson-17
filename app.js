// 1
// const myButton = document.querySelector('#my-button');
// if(myButton){
//   myButton.addEventListener('click', e => {
//     myButton.remove();
    
//     console.log('MyButton removed');
//   });
// }



// 2
// const newImg = document.createElement('img')
// if (newImg){
//     newImg.setAttribute('src', 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg');

// }

// document.body.appendChild(newImg);


const users = [
    {
      
      first_name: "John",
      last_name: "Doe",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      
        first_name: "John",
        last_name: "Doe",
        avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
     
        first_name: "John",
        last_name: "Doe",
        avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      
        first_name: "John",
        last_name: "Doe",
        avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
  ];

function renderUsers () {
    const userListContainer = document.querySelector('#user-list');
  

    const userNodeString = users.map(user => {
        return `<div class="user-item">
        <span><img src="${user.avatar}" /></span> 
        <span class="name" >${user.first_name} ${user.last_name}</span> 

        <div class="buttons">

            <button class="remove-but"> remove </button>
            <button class="info-but"> info </button> 
        </div>

        </div>`
         
          
    });

    userListContainer.innerHTML = userNodeString.join('');
    console.log(userNodeString)


    const removeButton = document.querySelector('.remove-but');

    if(removeButton){
          removeButton.addEventListener('click', e => {
            removeButton.remove();
            
            
          });
        }
        
}

renderUsers ()