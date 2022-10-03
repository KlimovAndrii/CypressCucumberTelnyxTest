Feature: telnyx.com
  Scenario: Savings Calculator page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Resources' menu
    Then I click 'Savings Calculator' link
    Then I shoul see 'Savings Calculator' page header
    When I hover to page logo
    Then I scroll 'Start Your Free Trial' button
    Then I click 'Start Your Free Trial' button
    Then I should see 'Sing Up' page header    