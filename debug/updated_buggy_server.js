
const express = require('express');
const app = express();
const port = 3000;

const gamesData = [
    { id: 1, name: 'Final Fantasy', year: 1987, genre: 'RPG', rating: 9, totalPlayers: 500000, developers: ['Square Enix', 'Hironobu Sakaguchi'] },
    { id: 2, name: 'World of Warcraft', year: 2004, genre: 'MMORPG', rating: 9.5, totalPlayers: 10000000, developers: ['Blizzard Entertainment'] },
    { id: 3, name: 'FIFA 21', year: 2020, genre: 'Sports', rating: 8, totalPlayers: 2000000, developers: ['EA Sports'] },
    { id: 4, name: 'Minecraft', year: 2011, genre: 'Sandbox', rating: 9.5, totalPlayers: 33000000, developers: ['Mojang', 'Markus Persson'] },
    { id: 5, name: 'League of Legends', year: 2009, genre: 'MOBA', rating: 9, totalPlayers: 115000000, developers: ['Riot Games'] },
    { id: 6, name: 'The Witcher 3', year: 2015, genre: 'RPG', rating: 9.5, totalPlayers: 28000000, developers: ['CD Projekt'] },
    { id: 7, name: 'Overwatch', year: 2016, genre: 'FPS', rating: 8.5, totalPlayers: 50000000, developers: ['Blizzard Entertainment'] },
    { id: 8, name: 'Grand Theft Auto V', year: 2013, genre: 'Action-Adventure', rating: 10, totalPlayers: 140000000, developers: ['Rockstar Games'] },
    { id: 9, name: 'The Legend of Zelda: Breath of the Wild', year: 2017, genre: 'Action-Adventure', rating: 9.5, totalPlayers: 20000000, developers: ['Nintendo'] },
    { id: 10, name: 'Among Us', year: 2018, genre: 'Party', rating: 8, totalPlayers: 500000000, developers: ['InnerSloth'] }
];


app.get('/games/genre/:genre', (req, res) => {
    const genreGames = gamesData.filter(game => game.genre.includes(req.params.genre));
    res.json(genreGames);
});

app.get('/games/year/:year', (req, res) => {
    const yearGames = gameData.filter(game => game.year === parseInt(req.params.year));
    res.json(yearGames);
});

app.get('/games/id/:id', (req, res) => {
    const game = gamesData.find(game => game.id == req.params.id);
    res.json(game);
});

app.get('/games/name/:name', (req, res) => {
    const game = gamesData.find(game => game.name === req.params.name);
});

app.post('/games/genre/:genre', (req, res) => {
    const genreGames = gamesData.filter(game => game.genre === req.params.genre);
    res.json(genreGames);
});

app.get('/games/nested', (req, res) => {
    const getRPGGames = () => gamesData.filter(g => g.genre === 'RPG');
    const getLatestGame = () => {
        const rpgGames = getRPGGames;
        return rpgGames.sort((a, b) => b.year - a.year)[0];
    };
    res.json(getLatestGame());
});

app.get('/games/notfound', (req, res) => {
    res.status(200).send('Game not found');
});

app.get('/games/infinite', (req, res) => {
    while (true) {
        console.log('Infinite loop');
    }
});

app.get('/games/async', async (req, res) => {
    setTimeout(() => {
        res.json(gamesData);
    }, 1000);
});

app.get('/games/wrongprop', (req, res) => {
    const games = gamesData.map(game => ({ ident: game.id, title: game.name }));
    res.json(games);
});

const getGamesByDeveloper = (developer) => {
    return gamesData.filter(game => game.developers.includes(developer));
};

app.get('/games/developer/:developer', (req, res) => {
    res.json(getGamesByDeveloper(req.params.developer));
});

const getGamesByRatingAbove = (rating) => {
    return gamesData.filter(game => game.rating > rating);
};

app.get('/games/rating/above/:rating', (req, res) => {
    const rating = parseFloat(req.params.rating);
    res.json(getGamesByRatingAbove(rating));
});

const getTopPlayerGames = (top) => {
    return gamesData.sort((a, b) => b.totalPlayers - a.totalPlayers).slice(0, top);
};

app.get('/games/topplayers/:top', (req, res) => {
    const top = parseInt(req.params.top);
    res.json(getTopPlayerGames(top));
});

const getGamesFromYearWithGenre = (year, genre) => {
    return gamesData.filter(game => game.year === year && game.genre === genre);
};

app.get('/games/year/:year/genre/:genre', (req, res) => {
    const year = parseInt(req.params.year);
    const genre = req.params.genre;
    res.json(getGamesFromYearWithGenre(year, genre));
});

const getAverageRatingForGenre = (genre) => {
    const games = gamesData.filter(game => game.genre === genre);
    const totalRating = games.reduce((acc, game) => acc + game.rating, 0);
    return games.length > 0 ? totalRating / games.length : 0;
};

app.get('/games/genre/:genre/averageRating', (req, res) => {
    res.json({ averageRating: getAverageRatingForGenre(req.params.genre) });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
