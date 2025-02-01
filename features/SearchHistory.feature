@Train
Feature: Live Train Status search history retention

    The feature ensures that the "Previously Searched" section retains and displays recently searched trains.
    
    Background: Navigating to the Live Train Status section
        Given The user switches to the Live Train Status section

    Scenario: Previous searched train should be displayed
        Then Previously Searched section should be hidden
        When user select valid train with train number 15274 from search window
        And clicks on Check Status button
        Then user can see train status for searched train name "Satyagrah Exp" and train number 15274
        When user navigates to the previous search page
        Then Previously Searched section should be displayed
        And Previously searched train name "SATYAGRAH EXP" should be displayed