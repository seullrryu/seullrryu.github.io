const ghpages = require('gh-pages'); 
ghpages.publish(
    'public',
    {
      branch: 'master',
      repo: 'https://github.com/seullrryu/seullrryu.github.io.git',
    },
    () => {
      console.log('Deploy Complete!')
    }
)