Brief Documentation for OpenCart Store (FAKESTORE DEMO) website

DESIGN DECISIONS
`
    We have designed OpenCart Store with the user in mind, as such we made the UI to be simple and be like a single page application.

    - We have a cart-icon on the Nav, this is used to toggle the Shopping cart container, it also have a red bubble on it when the cart has items in it and it disappears when the cart is emptied/empty.
    - A shopping cart is displayed on the same page (Home page) where we're displaying the products so that the user still has the ability to select more products and avoid too much/unnecessary maneuverability.
    - When a view details button is clicked on a product, we're showing a pop-up window instead of going to another page so that we can make the user stay on the same products page and reduce too much movements of the user to make the user feel doing less work and focused on the products.
    - Only the login/register pages are on separate screens/windows as this feels to be comforting and give focus to user when trying to login or create an account in OpenCart Store.
    - when removing an item from the cart say a user added more than 1 item we're decrementing until it reaches one and it get's removed instead of just removing at once

`

CHALLENGES FACED
`
   OpenCart Store has been an interesting assignment to do, but during implementation we faced the following challenges.

   'api we used and that is been refered to is ("https://fakestoreapi.com/")'

   1. The api now doesn't support writing to the database as such we could'nt
        - store a created user, hence we just showed how it could've been used.
        - use the endpoint for 'cart' since we can't use our own data.
   

`

ADDITIONAL FEATURES
`
    Apart from the basic requirements given on the assignment we have made the UI look pleasant by playing with CSS and using FONTAWESOME ICONS, and GOOGLE FONTS ("poppins").
    We added a clear button on the shopping cart in case the cart get big and removing an item one by one becomes inconvenient, hitting the clear button clears the cart for you.
    The cart icon for toggling the shopping cart gives a choice for the user to see the cart when the want to. 
`