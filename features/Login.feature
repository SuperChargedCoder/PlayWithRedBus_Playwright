# @Bus
Feature: Login functionality

    This feature validates the login functionality with both positive and negative scenarios

    Background: Opening login window
        Given user open the login window

    Rule: Positive Testing

        # Scenario: Disabled 'GENERATE OTP(One Time Password)' button for empty 'Enter your mobile number' text field
        #     When Enter your mobile number is empty
        #     Then GENERATE OTP(One Time Password) button should be disabled

    #     Scenario: Validating login window UI consistency
    #         Then login window UI should match the master reference image

        # Scenario: "I'm not a robot" confirmation on entry of mobile number
        #     When user enter mobile number "7674856523"
        #     Then "I'm not a robot" confirmation message should be displayed
        #     And GENERATE OTP(One Time Password) button should be disabled


        Scenario: 'GENERATE OTP(One Time Password)' button enablement
            When user enter mobile number "7674856523"
            And user confirm "I'm not a robot"
            Then GENERATE OTP(One Time Password) button gets enabled

    #     Scenario: OTP Generation validation
    #         When user enter mobile number "7674856523"
    #         And user confirm "I'm not a robot"
    #         And user clicks on GENERATE OTP(One Time Password) button
    #         Then confirmation message "To continue, please enter OTP sent to verify mobile number" should be displayed for mobile number 7674856523

    #     Scenario: Resend OTP validation
    #         When user enter mobile number "7674856523"
    #         And user confirm "I'm not a robot"
    #         And user clicks on GENERATE OTP(One Time Password) button
    #         Then RESEND OTP button should be disabled
    #         When user waits for 30 seconds
    #         Then RESEND OTP button gets enabled

    # Rule: Negative Testing

    #     Scenario Outline: Invalid mobile number error message
    #         When user enter mobile number "<MobileNumber>"
    #         Then "Please enter valid mobile number" error message should be displayed

    #         Examples:
    #             | MobileNumber     |
    #             | 859685           |
    #             | 8596858596859633 |

    #     Scenario: Error message for expired robot verification
    #         When user enter mobile number "7674856523"
    #         And user confirm "I'm not a robot"
    #         And user wait for 40 seconds
    #         Then error message "Verification expired. Check the checkbox again." should be displayed


