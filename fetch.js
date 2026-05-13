fetch('https://ibb.co/RG4XVyQq').then(r=>r.text()).then(t => console.log(t.match(/<meta property=\"og:image\" content=\"([^\"]+)\"/)?.[1]));
