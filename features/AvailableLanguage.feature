@Bus
Feature: Available Language Selection

    This feature ensures that the desired language can be selected from the drop-down

    Scenario Outline:  Validating available language options in the drop-down
        When user click on select language drop-down
        Then user should be able to see "<Language>" from drop-down

        Examples:
            | Language |
            | English  |
            | Hindi    |
            | Tamil    |