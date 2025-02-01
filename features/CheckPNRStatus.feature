@Train
Feature: Validating the Check PNR Status functionality

    The feature validates the Check PNR Status functionality through both positive and negative scenarios.

    Background: Navigating to the Check PNR Status section
        Given The user switches to the Check PNR Status section

    Rule: Positive Testing

        Scenario: The 'Check Status' button is disabled when the 'Enter PNR Number' text box is empty
            When The Enter PNR Number text box is left empty
            Then The Check Status button is disabled

        Scenario: The 'Check Status' button gets enabled on entry of a ten-digit PNR number
            When The user enters "2228414383"
            Then The Check Status button is enabled

        Scenario Outline: The 'Check Status' button remains disabled until the entered digits reach a count of ten
            When The user enters "<InvalidPNR>"
            Then The Check Status button is disabled

            Examples:
                | InvalidPNR |
                | 22284      |
                | 222845     |
                | 2228467    |
                | 222846789  |

        Scenario: Check PNR Status for valid PNR number
            When The user enters "2228414383"
            And clicks on the Check Status button
            Then The user sees the ticket status of PNR "2228414383"

    Rule: Negative Testing

        Scenario Outline: The 'Enter PNR Number' text box should accept only numeric input
            When The user enters "<InvalidPNR>"
            Then Enter PNR Number text box remains empty

            Examples:
                | InvalidPNR |
                | 222er      |
                | 222841438r |

        Scenario: Check PNR Status for wrong or flushed PNR number
            When The user enters "2299414383"
            And clicks on the Check Status button
            Then The message "PNR Number doesn't exist" is displayed for PNR "2299414383"
