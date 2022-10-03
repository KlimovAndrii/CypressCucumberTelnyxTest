Feature: telnyx.com
  Scenario: About Us page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Company' menu
    Then I click 'About Telnyx' Link
    Then I should see 'About Us' header
    When I hover to page logo
    Then I scroll into 'See Open Jobs' link
    Then I click 'See Open Jobs' link
    Then I should see 'Careers' header