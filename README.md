# OpenCart Store (FAKESTORE DEMO) website

OpenCart is a fake online store that demonstrates how to work with an API using JavaScript, it has features like adding, removing product or products to a cart, calculating the products cost, viewing product details, and some basic authentication etc.

If you found this repo helpful, please give it a (⭐). Thank you!

## Table of Contents

- [Demo](#demo)
- [Features and Components](#features-and-components)
- [Design Decisions](#design-decisions)
- [Languages and Tools](#languages-and-tools)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Tools](#tools)
- [CHALLENGES FACED](#challenges-faced)
- [Author](#author)
- [Contributing](#contributing)
- [License](#license)



## Demo

Online Demo: [opencart-fakestore](https://opencart-fakestore.000webhostapp.com/)

<img src="homepage.jpeg" alt="OTickets - Screenshot" width="100%">

<a href="#table-of-contents" title="Go back to the table of contents">
⬆️ Go back to the table of contents
</a>

## Features and Components

- Implements a responsive design to ensure a good user experience on all devices.
- Follows clean code, Commenting and Separation of Concerns principles.
- Shopping Cart
- Product catalogue
- Account creation and authentication
- And more...

<a href="#table-of-contents" title="Go back to the table of contents">
⬆️ Go back to the table of contents
</a>

## Design Decisions

OpenCart Store has been designed with the user in mind, as such the UI was made to be simple and be like a single page application.

- There's a cart-icon on the Nav, this is used to toggle the Shopping cart container, it also have a red bubble on it when the cart has items in it and it disappears when the cart is emptied/empty.
- A shopping cart is displayed on the same page (Home page) where we're displaying the products so that the user still has the ability to select more products and avoid too much/unnecessary maneuverability.
- When a view details button is clicked on a product, we're showing a pop-up window instead of going to another page so that we can make the user stay on the same products page and reduce too much movements of the user to make the user feel doing less work and focused on the products.
- Only the login/register pages are on separate screens/windows as this feels to be comforting and give focus to user when trying to login or create an account in OpenCart Store.
- when removing an item from the cart, say a user added more than 1 item, we're decrementing until a single item is remaining to get it removed instead of just removing at once
- We added a clear button on the shopping cart in case the cart get big and removing an item one by one becomes inconvenient, hitting the clear button clears the cart for you.
- The cart icon for toggling the shopping cart gives a choice for the user to see the cart when the user wants to. 

<a href="#table-of-contents" title="Go back to the table of contents">
⬆️ Go back to the table of contents
</a>

## Languages and Tools

### Frontend

- JavaScript
- HTML
- CSS
- FontAwesome
- Google Fonts (Poppins)

### Backend

- FakeStore API: [https://fakestoreapi.com/](https://fakestoreapi.com/)

### Tools

- Git
- GitHub

<a href="#table-of-contents" title="Go back to the table of contents">
⬆️ Go back to the table of contents
</a>

## CHALLENGES FACED

OpenCart Store has been an interesting simple project to do, but during implementation I faced the following challenges.

1. The api now doesn't support writing to the database as such I could'nt
    - Store a created user, hence I just showed how it could've been used.
    - Use the endpoint for the 'cart' since we can't use our own data.

## Author

| Website  | [Seamnex](https://seamnex.rf.gd)             |
| -------- | -------------------------------------------- |
| LinkedIn | [/in/james-kamwendo](https://linkedin.com/in/james-kamwendo) |
| GitHub   | [/james-kamwendo](https://github.com/james-kamwendo)         |

<a href="#table-of-contents" title="Go back to the table of contents">
⬆️ Go back to the table of contents
</a>

## Contributing

Let's be sincere, the project is pretty simple basic, contributions, issues and feature suggestions are welcome!

## License

This project is [MIT licensed](https://choosealicense.com/licenses/mit/).

Please give credit to this project if you plan to use it elsewhere ❤️.

Your support is greatly appreciated!
