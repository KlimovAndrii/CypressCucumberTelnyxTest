Feature: telnyx.com
  Scenario: Global Numbers page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    Then I should see 'Talk to expert' button
    When I scroll to 'Global Numbers' link
    Then I click 'Global Numbers' link
    When I should see 'Numbers' page header
    Then I click 'Claim Your Free Testing Credit' button
    When I should see 'Sign up' page header