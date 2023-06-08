Feature: Doctort register Page

    Scenario: Doctor Signup with valid credentials

        Given User is on "doctor signup" page
        When User enters the "<Fullname>" in name input field
        When User selects the '<Gender>' gender
        When User enters the mobile number in number input field
        When User entrs the email in email input field
        When User enters the '<Password>' in password field
        When User enters the '<Confirm_Password>' in confirm password field
        When User clicks on register buttton
        # Then User should get the '<Message>'

        Examples:
            | Fullname | Gender | MobileNumber | Email         | Password | Confirm_Password | Message                 |
            | Aman     | Male   | 9419146672   | abc@gmail.com | 123@Ab1  | 123@Ab1          | Signed up successfully! |

    # Scenario: Doctor Signup with invalid Email
    #     Given User is on "doctor signup" page
    #     When User enters the "<Fullname>" in name input field

    #     When User selects the '<Gender>' gender
    #     When User enters the mobile number in number input field
    #     When User entrs the '<Email>' in email input field
    #     When User enters the '<Password>' in password field
    #     When User enters the '<Confirm_Password>' in confirm password field
    #     Then User should get the error message

    #     Examples:
    #         | Fullname     | Gender | Date | Month    | Year | Mobile_Number | Email           | Password | Confirm_Password | Message                              |
    #         | Aman Gupta   | Male   | 24   | February | 1996 | 9682325462    | Abcd34gmail.com | Asdx@34  | Asdx@34          | Please enter a valid e-mail address! |
    #         | Hitesh verma | Male   | 4    | January  | 1996 | 9682325462    | abcl.com        | Asdx@34  | Asdx@34          | Please enter a valid e-mail address! |

    # Scenario: Doctor Signup with invalid password

    #     Given User is on "doctor signup" page
    #     When User enters the "<Fullname>" in name input field

    #     When User selects the '<Gender>' gender
    #     When User enters the mobile number in number input field
    #     When User entrs the email in email input field
    #     When User enters the '<password>' in password field
    #     When User enters the '<confirm_Password>' in confirm password field
    #     Then User should get the error '<Message>' message

    #     Examples:
    #         | Fullname   | Gender | Date | Month    | Year | password | confirm_Password | Message                                      |
    #         | Aman Gupta | Male   | 24   | February | 1996 | ASDX@34  | ASDX@34          | Must contain lowercase letter.               |
    #         | Aman Gupta | Male   | 24   | February | 1996 | asdx@34  | asdx@34          | Must contain uppercase letter.               |
    #         | Aman Gupta | Male   | 24   | February | 1996 | Asdx34   | Asdx34           | Must contain at least one special character. |
    #         | Aman Gupta | Male   | 24   | February | 1996 | Asdx@we  | Asdx@we          | Must contain at least one number.            |
    #         | Aman Gupta | Male   | 24   | February | 1996 | Asdx4    | Asdx4            | Must contain at least 6 characters.          |
    #         | Aman Gupta | Male   | 24   | February | 1996 | Asdx@3   | Asdx@34          | Passwords must match.                        |

    # Scenario: Doctor SignUp with invalid number

    #     Given User is on "doctor signup" page
    #     When User enters the "<Fullname>" in name input field

    #     When User selects the '<Gender>' gender
    #     When User enters the '<Mobile_Number>' in number input field
    #     When User entrs the email in email input field
    #     When User enters the '<password>' in password field
    #     When User enters the '<confirm_Password>' in confirm password field
    #     Then User should get the error '<Message>' mssg

    #     Examples:
    #         | Fullname   | Gender | Date | Month    | Year | Mobile_Number | password | confirm_Password | Message                                      |
    #         | Aman Gupta | Male   | 24   | February | 1996 | 968232        | Asdx@34  | Asdx@34          | Please enter a valid 10-digit mobile number! |