class GitSrvices {
constructor(){
  this.client_id = '08ad1fdda76524dfbc8c';
  this.client_secret = 'e4f232b38f068c2598f02ccd182eb236a9e59031'
}

  getData= async (url) =>{
    const body = await fetch(url);
    const jsonData = body.json();
    return  await jsonData
  };

  getUser = async (name) =>{
    const res = await this.getData(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const transf = this.userTransform(res)
    return transf;
  };

  getRepo = async(name)=>{
    const res =  await this.getData(`https://api.github.com/users/${name}/repos?per_page=${5}&sort=${'created:asc'}client_id=${this.client_id}&client_secret=${this.client_secret}`);
   //const mapd = res.map(this.reposTransform);
    return res
  };


  userTransform = (user) =>{

    return {
      id :user.id,
      name : user.name,
      img:user.avatar_url,
      repos : user.public_repos,
      login : user.login,
      message : user.message,
      create : user.created_at,
      followers : user.followers,
      following : user.following,
      url : user.html_url,
      location : user.location,
      email : user.email,
      gists : user.public_gists,


    }
}
 reposTransform = async (repos) =>{

    return {
      name : repos.name,
      url : repos.html_url,
    }
  }
};

export default GitSrvices
