const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    const { sender, recipient, message } = req.body;
    // Envoyer les données au backend (Django)
    res.json({ status: 'Données reçues pour traitement' });
});

app.listen(port, () => {
    console.log(`Serveur frontend en cours d'exécution sur http://localhost:${port}`);
});