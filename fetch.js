fetch('https://ibb.co/ZRSh7Wg7').then(r=>r.text()).then(t => console.log(t.match(/<meta property=\"og:image\" content=\"([^\"]+)\"/)?.[1]));
