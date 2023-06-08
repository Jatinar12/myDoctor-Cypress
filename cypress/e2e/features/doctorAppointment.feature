Feature: Doctor Appointment

    Scenario Outline: Checking the visibility of UI element
        Given User logs in with "<Role>" credentails
        When User click on the "<PageType>"
        Then corresponding page appears with "<Item>"

        Examples:
            | Role   | PageType         | Item           |
            | Doctor | Appointment page | My Appointment |


    Scenario Outline: Checking the functionality of cancel button
        Given User logs in with "<Role>" credentails
        When User click on the "<PageType>"
        Then Cancel button should be visible to user

    Scenario Outline:Checking the functionality of appointment filter
        Given User logs in with "<Role>" credentails
        When User click on the "<PageType>"
        When User clicks on Appointment filter field
        And User clicks on Number
        Then User can view all list of appointment

    Scenario Outline: Checking the functionality of side navigation button
        Given User logs in with "<Role>" credentails
        When User click on the "<PageType>"
        When User clicks on '<Page>' "pagination page"
        Then User is on '<Value>' "pagination page"

        Examples:
            | Role   | PageType         | Page | Value |
            | Doctor | Appointment page | 1    | 1     |
