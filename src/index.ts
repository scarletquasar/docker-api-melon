const app = http.app("0.0.0.0", "3000", false)

app.get("/", "() => 'Hello World!'")

app.run()