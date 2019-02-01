import GitSrvices from "./GitHubService/GitHubService";
import UI from "./UI";

const data = new GitSrvices();
const ui = new UI();
const input   = document.querySelector('input');





input.addEventListener('keydown', (e)=>{

  const value = e.target.value;

  if(value !== ''){
    data.getUser(value)
      .then(res=>{
        console.log(res);
        if(res.message === "Not Found"  ) {
         ui.showError(`${value} name not found`, 'alert alert-warning');

        }

        else {
          ui.showProfile(res);
        }


      return res.login

      }).then(data.getRepo).then(repos =>{ui.showRepos(repos)});

  }
  else{
    ui.clearProfile()
  }
});

