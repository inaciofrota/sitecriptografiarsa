function isPrime(num) {
  for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
     if(num % i === 0) return false;
  return num > 1;
 }
 
 function getRandomPrimes() {
  const primes = [];
  while (primes.length < 2) {
     const randomNum = Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
     if (isPrime(randomNum)) {
       primes.push(randomNum);
     }
  }
  return primes;
 }
 
 console.log(getRandomPrimes());


 <!DOCTYPE html>
<html>
<head>
    <title>RSA Encryption and Decryption</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
body>
    <h1>RSA Encryption and Decryption</h1>
    <form id="rsa-form">
        <label for="public-key">Public Key:</label>
        <textarea id="public-key" name="public-key"></textarea><br>
        <label for="private-key">Private Key:</label>
        <textarea id="private-key" name="private-key"></textarea><br>
        <label for="input-text">Input Text:</label>
        <textarea id="input-text" name="input-text"></textarea><br>
        <label for="encrypted-text">Encrypted Text:</label>
        <textarea id="encrypted-text" name="encrypted-text" readonly></textarea><br>
        <label for="decrypted-text">Decrypted Text:</label>
        <textarea id="decrypted-text" name="decrypted-text" readonly></textarea><br>
        <button type="button" id="encrypt-btn">Encrypt</button>
        <button type="button" id="decrypt-btn">Decrypt</button>
    </form>
    <script src="script.js"></script>
</body>
</html>

css
body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

javascript

document.getElementById('encrypt-btn').addEventListener('click', () => {
    const publicKey = document.getElementById('public-key').value;
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptRSA(inputText, publicKey);
    document.getElementById('encrypted-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const privateKey = document.getElementById('private-key').value;
    const encryptedText = document.getElementById('encrypted-text').value;
    const decryptedText = decryptRSA(encryptedText, privateKey);
    document.getElementById('decrypted-text').value = decryptedText;
});

function encryptRSA(data, publicKey) {
    // Implement RSA encryption here
}

function decryptRSA(data, privateKey) {
    // Implement RSA decryption here
}