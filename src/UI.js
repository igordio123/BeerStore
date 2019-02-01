class UI {

  constructor(){
    this.element = document.querySelector('.input');
    this.avatar = document.querySelector('.inf');
    this.repos = document.querySelector('.bottom')


  }

 showError = (message,className) =>{

    this.currentAllert();
   const div = `<div class="${className}">${message}</div>`;
   this.element.insertAdjacentHTML('afterbegin' , div);

  };

  currentAllert = () =>{
    const thisalert = document.querySelector('.alert');
    if(thisalert){
      thisalert.remove();
    }
  };

  showProfile = (user) => {
    this.avatar.innerHTML = `
            <div class="col-md-4" style="text-align: center;display: flex;
            flex-direction: column;justify-content: center">
            <img src="${user.img}" alt="" class="avatar" style="width: 300px ; height: 300px">
            <div><button style="width: 200px;height: 60px;margin-top: 10px;background: #007bff;border-radius:15px ;border:none;"><a href="${user.url}" style="text-decoration: none; color:white;">View User</a></button></div>
        </div> 
        <div class="col-md-8">
            <h4>${user.name}</h4>
            <div>
            <span><button type="button" class="btn btn-primary">Followers : ${user.followers}</button></span>
            <span><button type="button" class="btn btn-secondary">Following : ${user.following} </button></span>
            <span><button type="button" class="btn btn-info">Repos : ${user.repos}</button></span>
            <span><button type="button" class="btn btn-dark">Gists : ${user.gists}</button></span>
                <ul class="list-group list-group-flush" style="margin-top: 20px;">
                    <li class="list-group-item">Location : ${user.location} </li>
                    <li class="list-group-item">E-mail : ${user.email}</li>
                    <li class="list-group-item">Create : ${user.create}</li>
                    <li class="list-group-item">Login : ${user.login}</li>
                </ul>
            </div>

        </div>`
  }
clearProfile = () =>{
    this.avatar.innerHTML = '';
};
loader =() =>{
   this.avatar.innerText = "loading";
};
showRepos = (arr) =>{

  let rep = '';
  arr.forEach(e=>{

    rep+= `<li class="list-group-item"><a href=${e.html_url}>${e.name}</a></li>`

  });
this.repos.innerHTML = rep ;
}

}

export default UI

