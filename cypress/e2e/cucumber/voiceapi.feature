Feature: telnyx.com
  Scenario: Voice API page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Products' menu
    Then I click 'Voice API' link
    Then I shoul see 'Voice API' page header
    When I hover to page logo
    When I scroll to 'Schedule Demo' button
    Then I click 'Schedule Demo' button
    Then I should see 'Talk To Expert' page header