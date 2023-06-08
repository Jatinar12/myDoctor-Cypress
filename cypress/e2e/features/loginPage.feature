Feature: Login Page

    As a tester, user wants to test the login page

    Scenario Outline: login with valid crenentails
        Given User is on "home" page
        When User clicks on login Button
        And User enters the "<Email>" in email input field
        And User enters the "<Password>" in password input field
        And User clicks on submit button
        Then User should navigate to homepage
        Examples:
            | Email | Password |
            | Email | Password |

    Scenario Outline: login with invalid crenentails
        Given User is on "home" page
        When User clicks on login Button
        And User enters the "<Email>" in email input field
        And User enters the "<Password>" in password input field
        And User clicks on submit button
        Then User should get the error '<Message>'
        Examples:
            | Email        | Password        | Message                                                         |
            | invalidEmail | invalidpassword | Mobile Number/Email or password is incorrect. Please try again. |
