Feature: telnyx.com
  Scenario: Contact Centre page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    Then I hover to 'Solution' menu
    When I click 'Contact Centre' link
    Then I When I shoud see 'Contact Centre' page header
    When I hover to page logo
    Then I scroll to 'Join The Industry Leaders' button
    When I click to 'Join The Industry Leaders' button
    When I should see 'Talk to expert' header