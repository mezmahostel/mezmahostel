body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f0f0f;
  color: white;
}

.hero {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210e9') center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 50px;
  margin: 0;
}

.hero p {
  margin: 10px 0 20px;
  color: #ccc;
}

.btn {
  padding: 12px 25px;
  background: gold;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}

.section {
  padding: 60px 20px;
  text-align: center;
}

.dark {
  background: #1a1a1a;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 10px;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  padding: 8px 0;
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

.form input,
.form button {
  margin: 8px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.form button {
  background: gold;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 20px;
  background: black;
  color: gray;
}
