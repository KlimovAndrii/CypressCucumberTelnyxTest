Feature: telnyx.com
  Scenario: Resource Hub page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    Then I should see 'Talk to expert' button
    Then I scroll to 'Recource Hub' link
    Then I click 'Recource Hub' link
    When I should see 'Recource Hub' page header
    Then I click 'SMS Guide' button
    Then I should see 'SMS Complete Guide' page header
    Then I click 'Sign Up' button
    When I should see 'Sign up' page header