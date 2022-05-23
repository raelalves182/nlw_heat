const linksSocialMedia = {
  GitHub: 'raelalves182',
  Linkedin: 'in/israel-alves-234749208',
  Instagram: '_israelalves',
  Twitter: 'ysraelescence'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.GitHub}`

  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userbio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  });
}

getGitHubProfileInfo()