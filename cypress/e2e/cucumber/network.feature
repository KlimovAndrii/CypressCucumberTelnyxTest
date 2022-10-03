Feature: telnyx.com
  Scenario: Network page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    Then I click 'Network' link
    Then I should see 'Network' page header
    When I scroll to 'See Our Pricing' button
    Then I click 'See Our Pricing' button
    Then I should see 'Pricing' page header