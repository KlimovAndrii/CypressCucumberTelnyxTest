Feature: telnyx.com
  Scenario: Integrations page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    Then I When I hover to 'Company' menu
    Then I click 'Integrations' link
    Then I should see 'Telnyx To The Tools' header
    Then I hover to page logo
    Then I click 'Explore Our Marketplace' button
    Then I should see 'Marketplace' header