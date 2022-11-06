# User signup, login and validation

** The data will be storing in localstorage
** As soon as the user signsUp data will be stored in local storage and the user will be automatically redirected to the login page.
** In login page the user can filld the email and password and then the will be taken to hompage
** In home page, theres a signout button, when the user will click on signout button, it'll redirect user to signin page.

# Logics used

1. signin and signup are in same component
2. initially we are displaying signin but not signup
3. we are doing it by making use of ternary operator
4. Initially the display is said to true, so displays "signin"
5. When the "New User?" is clicked the setDisplay changes the value to false.. so, signup page shows up.
6. When the user signup , data is saved to local storage. and the value of display again changes back to true with the help of handleToggle function which is passed as props in "signup" component.
7. for routing from signin to home and reverse, i've used useHistory hook. i.e, imported from "React-router-dom".

# Still have to work on few stuffs (in 13th task)

1. display signin and signup with the help of useHistory hook, which earlier was doing with the help of ternary operator
2. Page drops off..when the internet connection is down, and automatically loads up when internet is available.
   Take reference from here- https://www.youtube.com/watch?v=JOJgmUKbGFU&t=166s
