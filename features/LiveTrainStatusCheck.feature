@Train
Feature: Validating Live Train Status Functionality

    Validating the Live Train Status functionality with positive and negative scenarios.

    Rule: Positive Testing
        Background: Navigating to the Live Train Status section
            Given The user switches to the Live Train Status section

        Scenario: 'Check Status' button should be disabled for empty 'Enter train name or number' text box
            When Enter train name or number text box is empty
            Then Check Status button is disabled

        Scenario: 'Check Status' button enables on valid train selection
            When user select valid train with train number "15274" from search window
            Then Check Status button is enabled

        Scenario: Train name and train number is displayed in 'Enter train name or number' text box on valid selection from search window
            When user select valid train with train number "15274" from search window
            Then Train name "Satyagrah Exp" and train number "15274" should be displayed in Enter train name or number text box

        Scenario: Checking train status with valid train number
            When user select valid train with train number "15274" from search window
            And clicks on Check Status button
            Then user can see train status for searched train name "Satyagrah Exp" and train number "15274"

        Scenario: Refreshing train status
            When user select valid train with train number "15274" from search window
            And clicks on Check Status button
            Then user can see train status for searched train name "Satyagrah Exp" and train number "15274"
            When click on train status refresh button
            Then user should see "Fetching latest data..." message
            And Last updated time should be system's current time