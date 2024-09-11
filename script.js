function visitRandom() {
    const sites = [
        'https://lehigh-university-design.github.io/p1-web-ring-sjm325/',
        'https://lehigh-university-design.github.io/jp-web-ring/',
        'https://lehigh-university-design.github.io/p1-web-ring-mls325/',
        'https://lehigh-university-design.github.io/p1-web-ring-paleduck/',
        'https://lehigh-university-design.github.io/p1-web-ring-DustinBraufman/',
        'https://lehigh-university-design.github.io/p1-web-ring-madisynbabb/',
        'https://lehigh-university-design.github.io/p1-web-ring-KaitMarchiony/',
        'https://lehigh-university-design.github.io/p1-web-ring-camila-des/',
        'https://lehigh-university-design.github.io/p1-web-ring-codingwithamy/',
        'https://lehigh-university-design.github.io/p1-web-ring-Renach/',
        'https://lehigh-university-design.github.io/p1-web-ring-marincormier/',
        'https://lehigh-university-design.github.io/p1-web-ring-maribritto13/',
        'https://lehigh-university-design.github.io/p1-web-ring-amandamertz14/',
        'https://lehigh-university-design.github.io/p1-web-ring-jonklein2021/',
        'https://lehigh-university-design.github.io/p1-web-ring-felicityace/',
    ]
    window.location.href = sites[Math.floor(Math.random() * sites.length)];
}