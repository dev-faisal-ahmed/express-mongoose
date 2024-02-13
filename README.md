# Express Js Mongoose Template

## How to get started

- At first update the `mongoUri` in `src/config/config.js`
- Your can create all routes at the `src/routes/` Folder
- In the `app.js` you can add all the routes

```js
// parser ---- don't touch here
app.use(express.json());
app.use(cors());

// routes ----- update here
app.use("/auth", userRouter);

app.get("/", async (_, res) => {
  res.status(200).json({ message: "Hello to my server" });
});
```

- Now go the terminal and type `npm run dev` and you are good to go😎

## If you are having trouble to update your node version try this

- Make sure if you have npm installed or not
- To check if you have npm installed write `npm -v` in terminal. By typing this you should be able to the version of your npm.
- If you don't get see the version that means you don't have npm installed
- To install npm in try :

```bash
sudo apt install npm
```

- Now try to update node js

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
