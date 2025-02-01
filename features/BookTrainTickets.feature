@Train
Feature: Validating the search trains functionality

    The feature ensures the proper functioning of ticket availability checking and booking functionality

    Scenario: Alert pop-up when searching trains without source and destination
        When user click on Search Train button
        Then alert message "Please enter valid source and destination" should be displayed

    Scenario: Source and destination switch functionality
        When user select source "GKP" and destination "YPR"
        And click on switch button
        Then source "Gorakhpur Jn" and destination "Yesvantpur Jn" should be switched
