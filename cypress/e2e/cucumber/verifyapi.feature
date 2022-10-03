Feature: telnyx.com
  Scenario: Verify API page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Pricing' menu
    Then I click 'Verify API' link
    Then I shoul see 'API Pricing' page header
    When I hover to page logo
    Then I scroll 'Talk To Sales' button
    Then I click 'Talk To Sales' button
    Then I should see 'Talk To Expert' page header