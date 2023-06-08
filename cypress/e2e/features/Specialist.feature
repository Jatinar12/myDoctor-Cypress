Feature: Specialist Page

  As a tester, user wants to test the specialist cards

  Scenario Outline: Checking the functionality of specialist dashboard
    Given User is on "home" page
    When User clicks on Specialities tab
    Then User should navigate to all specialist page
    When User clicks on '<Specialities>' card
    Then corresponding doctors should be visible to the user

    Examples:
      | Page type | Specialities |
      | homepage  | Cosmetology  |

  Scenario: Checking the functionality of doctor card
    Given User navigate to '<PageType>' page
    When User clicks on doctor card
    Then corresponding page appears with doctor specifications


  Scenario: Checking the functionality of slots
    Given  User navigate to '<PageType>' page
    When User clicks on doctor card
    Then User is on doctor specification page
    When User selects the date tab
    Then corresponding available slots should display
    When User clicks on available slots
    Then User should able to Register

  Scenario Outline: Checking the functionality of qualification and experience of a doctor
    Given  User navigate to '<PageType>' page
    And User clicks on doctor card
    And User is on doctor specification page
    When User clicks on '<Element>'
    Then doctor speciality should display
    Examples:
      | Element       |
      | specialities  |
      | qualification |
      | Experience    |

  Scenario: Checking the qualification of doctor
    Given  User navigate to '<PageType>' page
    And User clicks on doctor card
    And User is on doctor specification page
    When User clicks on Qualification
    Then doctor qualification should display

  Scenario: Checking the experience of doctor
    Given  User navigate to '<PageType>' page
    And User clicks on doctor card
    And User is on doctor specification page
    When User clicks on experience
    Then doctor experience should display

  Scenario: Checking the reviews of an doctor
    Given  User navigate to '<PageType>' page
    And User clicks on doctor card
    And User is on doctor specification page
    When User clicks on write a review
    Then Available fields shoud be display
    When User selects rating
    When User writes a review in review field
    When User enters the submit button
    Then doctor specification page will be re-loaded


  Scenario Outline: Checking the functionality of signIn link to book an appointment
    Given  User navigate to '<PageType>' page
    And User clicks on doctor card
    And User is on doctor specification page
    When User selects the date tab
    Then corresponding available slots should display
    When User clicks on available slots

    Then User should get '<Message>'
    When User clicks on signIn link
    And User enters the "<Email>" in email input field
    And User enters the "<Password>" in password input field
    And User clicks on submit button
    Then User should navigate to homepage
    Examples:
      | Email | Password | Message                                           |
      | Email | Password | Please Sign in / Register to book an appointment. |

