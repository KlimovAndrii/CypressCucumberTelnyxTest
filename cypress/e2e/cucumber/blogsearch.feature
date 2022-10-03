Feature: telnyx.com
  Scenario: Blog Search page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I should see 'Talk to expert' button
    Then I shoul scroll to footer
    Then I should click 'Blog' footer link
    When I shoud see 'Blog' search field
    Then I click on 'Blog' search field
    Then I enter 'product' require
    Then I click 'Enter'
    Then I shoud see 'Blog' search results