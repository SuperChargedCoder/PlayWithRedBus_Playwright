@Bus
Feature: Auto scrolling to page top

    This feature ensures the functionality of the "Scroll to Top" button

    Scenario: Scrolling from page bottom to page top using scroll to top button
        Given user scroll to page bottom
        When user clicks on scroll to top button
        Then page should automatically scroll to the top