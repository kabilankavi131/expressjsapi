// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Pages/")
});
app.get('/api/userdata', (req, res) => {
    const userData = [{ id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com' },
    { id: 3, username: 'alice_wonderland', email: 'alice@example.com' },
    { id: 4, username: 'bob_builder', email: 'bob@example.com' },
    { id: 5, username: 'charlie_brown', email: 'charlie@example.com' },
    { id: 6, username: 'david_jones', email: 'david@example.com' },
    { id: 7, username: 'emily_smith', email: 'emily@example.com' },
    { id: 8, username: 'fred_flintstone', email: 'fred@example.com' },
    { id: 9, username: 'grace_kelly', email: 'grace@example.com' },
    { id: 10, username: 'harry_potter', email: 'harry@example.com' },
    { id: 11, username: 'irene_adler', email: 'irene@example.com' },
    { id: 12, username: 'jack_sparrow', email: 'jack@example.com' },
    { id: 13, username: 'kate_middleton', email: 'kate@example.com' },
    { id: 14, username: 'leonardo_da_vinci', email: 'leonardo@example.com' },
    { id: 15, username: 'mary_poppins', email: 'mary@example.com' },
    { id: 16, username: 'nancy_drew', email: 'nancy@example.com' },
    { id: 17, username: 'oliver_twist', email: 'oliver@example.com' },
    { id: 18, username: 'peter_pan', email: 'peter@example.com' },
    { id: 19, username: 'quincy_jones', email: 'quincy@example.com' },
    { id: 20, username: 'rachel_green', email: 'rachel@example.com' },
    { id: 21, username: 'sherlock_holmes', email: 'sherlock@example.com' },
    { id: 22, username: 'tina_turner', email: 'tina@example.com' },
    { id: 23, username: 'ulysses_grant', email: 'ulysses@example.com' },
    { id: 24, username: 'vincent_van_gogh', email: 'vincent@example.com' },
    { id: 25, username: 'william_shakespeare', email: 'william@example.com' },
    { id: 26, username: 'xena_warrior', email: 'xena@example.com' },
    { id: 27, username: 'yoko_ono', email: 'yoko@example.com' },
    { id: 28, username: 'zorro_legend', email: 'zorro@example.com' },
    { id: 29, username: 'arthur_dent', email: 'arthur@example.com' },
    { id: 30, username: 'ford_prefect', email: 'ford@example.com' }]

    // Sending JSON response
    res.json(userData);
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
