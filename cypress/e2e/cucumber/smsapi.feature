Feature: telnyx.com
  Scenario: SMS API page page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Pricing' menu
    Then I click 'SMS API' link
    Then I shoul see 'Messaging Pricing' page header
    When I hover to page logo
    Then I scroll 'Talk To Sales' button
    Then I click 'Talk To Sales' button
    Then I should see 'TalkTo Expert' page header