Feature: Patient login Page

    Scenario Outline: Patient Signup with valid credentials

        Given User is on "patient signup" page
        When User enters the "<Fullname>" in name input field
        When User selects the '<Gender>' gender
        When User selects the "<Date>" "<Month>" "<Year>" in date select field
        When User enters the mobile number in number input field
        When User entrs the email in email input field
        When User enters the '<Password>' in password field
        When User enters the '<Confirm_Password>' in confirm password field
        When User clicks on register buttton
        # Then User should get the '<Message>'
        Examples:
            | Fullname   | Gender | Date | Month    | Year | Mobile_Number | Email            | Password | Confirm_Password | Message                 |
            | Aman Gupta | Male   | 1    | February | 1996 | 9682325462    | Abcd34@gmail.com | Asdx@34  | Asdx@34          | Signed up successfully! |


    Scenario Outline: Patient Signup with invalid email

        Given User is on "patient signup" page
        When User enters the "<Fullname>" in name input field
        When User selects the '<Gender>' gender
        When User selects the "<Date>" "<Month>" "<Year>" in date select field
        When  User enters the mobile number in number input field
        When User entrs the "<Email>" in email input field
        When User enters the '<Password>' in password field
        When User enters the '<Confirm_Password>' in confirm password field
        Then User should get the error message

        Examples:
            | Fullname   | Gender | Date | Month    | Year | Mobile_Number | Email           | Password | Confirm_Password | Message                              |
            | Aman Gupta | Male   | 1    | February | 1996 | 9682325462    | Abcd34gmail.com | Asdx@34  | Asdx@34          | Please enter a valid e-mail address! |

    Scenario Outline: Patient Signup with invalid password

        Given User is on "patient signup" page
        When User enters the "<Fullname>" in name input field
        When User selects the '<Gender>' gender
        When User selects the "<Date>" "<Month>" "<Year>" in date select field
        When User enters the mobile number in number input field
        When User entrs the email in email input field
        When User enters the '<password>' in password field
        When User enters the '<confirm_Password>' in confirm password field
        Then User should get the error '<Message>' message
        Examples:
            | Fullname   | Gender | Date | Month    | Year | password | confirm_Password | Message                                      |
            | Aman Gupta | Male   | 1    | February | 1996 | ASDX@34  | ASDX@34          | Must contain lowercase letter.               |
            | Aman Gupta | Male   | 1    | February | 1996 | asdx@34  | asdx@34          | Must contain uppercase letter.               |
            | Aman Gupta | Male   | 1    | February | 1996 | Asdx34   | Asdx34           | Must contain at least one special character. |
            | Aman Gupta | Male   | 1    | February | 1996 | Asdx@we  | Asdx@we          | Must contain at least one number.            |
            | Aman Gupta | Male   | 1    | February | 1996 | Asdx4    | Asdx4            | Must contain at least 6 characters.          |
            | Aman Gupta | Male   | 1    | February | 1996 | Asdx@3   | Asdx@34          | Passwords must match.                        |


    Scenario Outline:Patient Signup with invalid mobile number

        Given User is on "patient signup" page
        When User enters the "<Fullname>" in name input field
        When User selects the '<Gender>' gender
        When User selects the "<Date>" "<Month>" "<Year>" in date select field
        When User enters the "<Mobile_Number>" in number input field
        When User entrs the email in email input field
        When User enters the '<Password>' in password field
        When User enters the '<Confirm_Password>' in confirm password field
        Then User should get the error '<Message>' messags

        Examples:
            | Fullname   | Gender | Date | Month    | Year | Mobile_Number | Password | Confirm_Password | Message                                      |
            | Aman Gupta | Male   | 1    | February | 1996 | 968232        | Asdx@34  | Asdx@34          | Please enter a valid 10-digit mobile number! |


    Scenario Outline: User is not able to register by entering wrong credentials
        Given User is on "patient signup" page
        When User did not enters the "<Fullname>" in name input field
        When User selects the '<Gender>' gender
        When User selects the "<Date>" "<Month>" "<Year>" in date select field
        When User enters the mobile number in number input field
        When User entrs the email in email input field
        When User enters the '<Password>' in password field
        When User enters the '<Confirm_Password>' in confirm password field
        Then User should get the errors '<Message>'

        Examples:
            | Fullname | Gender | Date | Month    | Year | Mobile_Number | Password | Confirm_Password | Message                    |
            | @#       | Male   | 1    | February | 1996 | 968232        | Asdx@34  | Asdx@34          | Please enter a valid name! |

