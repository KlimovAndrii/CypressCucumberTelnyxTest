Feature: telnyx.com
  Scenario: Bring Your Own Carrier page test
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Resources' menu
    Then I click 'Bring Your Own Carrier' link
    When I shoul see 'Bring Your Own Carrier' page header
    When I hover to page logo
    Then I click 'Try it free' button
    Then I should see 'Sign Up' header