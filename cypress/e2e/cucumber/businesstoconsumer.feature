Feature: telnyx.com
  Scenario: Business to Consumer Brands page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I hover to 'Solution' menu
    When I click 'Business Consumer Brand' link
    When I shoud see 'Business Consumer Brand' page header
    When I hover to page logo
    Then I scroll 'Get In Touch With OurExperts' button
    Then I click 'Get In Touch With OurExperts' button
    Then I should see 'Talk to expert' header