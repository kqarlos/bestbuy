# Best Buy Pal 📱


</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/bestbuy?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/bestbuy?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/bestbuy?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/bestbuy?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/bestbuy?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/bestbuy/express?style=for-the-badge" alt="Express Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/bestbuy/cors?style=for-the-badge" alt="Cors Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/bestbuy/if-env?style=for-the-badge" alt="if-env Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/bestbuy/axios?style=for-the-badge" alt="Axios Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/bestbuy/mongoose?style=for-the-badge" alt="Mongoose Version" />
    <img src="https://img.shields.io/github/last-commit/kqarlos/bestbuy?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/bestbuy?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>


## Description

Search into Best Buy's API for products and save them in your cart. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

In the project directory, you can run:

### npm start

    Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.

### npm test

    Launches the test runner in the interactive watch mode.
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

    Builds the app for production to the `build` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

<p align="center">
    <a href="https://best-buy-cart.herokuapp.com/"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screenshots

1. Live Site

![Site](client/public/live.gif)

2. Search results available whether user is logged in or not

![Site](client/public/search.gif)


### Snippets


1. Sigup

```javascript

    const emailRef = useRef();
    const passRef = useRef();
    const history = useHistory();
    const handleClick = () => {
        API.signup({ email: emailRef.current.value, password: passRef.current.value })
            .then(user => {
                console.log("API RESPONSE");
                console.log(user)
                history.push("/");
                dispatch({
                    type: LOGIN,
                    _id: user.data._id
                })
            });
      
    }

    <input ref={emailRef} type="email" placeholder="Enter email" />
    <input ref={passRef} type="password" placeholder="Password" />
    
```
* These are the main elements that play an important role in the signup process in the frontend in the Sigup page component. Here there are two listeners on the email and password input fields. These are placed to have easy access to their value. Once the user clicks the sigup button, the _handleClick_ function runs. This will call the API to update the database with the new user's information. We get a user object in return. With that object we can update the state of the application with the user now logged in. _history.push("/")_ will make sure that we go to the home page after signup.


2. Search Item Card Component

```javascript

function ItemCard(props) {
const [state, dispatch] = useStoreContext();
function setCurrentItem() {
    dispatch({
        type: SET_CURRENT_ITEM,
        item: props.item
    });
}

return(
    <img className="card-img-top" src={props.item.image} />
    <div className="card-body">
    <Link className="card-title" onClick={() => setCurrentItem()} to="/Item">
        {props.item.name}
    </Link>
    <p className="card-text">${props.item.salePrice}</p>
    <p className="card-text">{props.item.shortDescription}</p>
    </div>
);
}

```
* This is a component that generates a card given an item. These cards are placed in the Home page when displaying search results. The function _setCurrentItem()_ takes care of saving the item before going into a page that allows to view the item in more detail. It takes the item that came from the _props_ input and uses it to update the state. Not only going to a different page with the _Link_ component, but also making sure that the next page has acces to this item.

## Credits 

### Author

- 💼 Carlos Toledo: [portfolio](https://kqarlos.github.io/)
- :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)


### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blue?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express-green?style=for-the-badge" alt="Express" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-blue?style=for-the-badge" alt="React" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/-MongoDB-green?style=for-the-badge" alt="MongoDB" /></a>
</p>

## License

</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/bestbuy?style=for-the-badge" alt="MIT license" />
</p>