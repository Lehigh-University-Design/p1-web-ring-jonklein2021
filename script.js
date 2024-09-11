function visitRandom() {
    const sites = [
        'https://lehigh-university-design.github.io/p1-web-ring-amandamertz14/',
        'https://lehigh-university-design.github.io/p1-web-ring-jonklein2021/',
        'https://lehigh-university-design.github.io/p1-web-ring-felicityace/',
        'https://lehigh-university-design.github.io/p1-web-ring-madisynbabb/',
        'https://lehigh-university-design.github.io/p1-web-ring-mls325/',
        'https://lehigh-university-design.github.io/p1-web-ring-paleduck/',
        'https://lehigh-university-design.github.io/p1-web-ring-DustinBraufman/'
    ]
    window.location.href = sites[Math.floor(Math.random() * sites.length)];
}