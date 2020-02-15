# Best Buy Pal

Search into Best Buy's API for products and save them in your cart. 

## Site Pictures

1. Live Site

![Site](client/public/live.gif)

2. Search results available whether user is logged in or not

![Site](client/public/search.gif)


3. 

![Site](assets/images/.png)

## Code Snippets


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

## Available Scripts for cloned repos

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MongoDB](https://www.mongodb.com/)
* [React](https://reactjs.org/)


## Deployed Link

* [See Live Site](https://shrouded-refuge-91628.herokuapp.com/)

## Author

 * **Carlos Toledo** 

## Links

- [Link to site repository](https://github.com/kqarlos/bestbuy)
- [Link to Github](https://www.github.com/kqarlos)
- [Link to LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)


## Acknowledgments

* [W3 Schools](https://www.w3schools.com/)
* [Bootstrap components](https://getbootstrap.com/docs/4.4/components/navbar/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)