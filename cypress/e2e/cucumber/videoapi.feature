Feature: telnyx.com
  Scenario: Video API page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Products' menu
    Then I click 'Video API' link
    Then I shoul see 'Get Started' page header
    When I hover to page logo
    Then I click 'Get Started' button
    Then I should see 'Log in' page header