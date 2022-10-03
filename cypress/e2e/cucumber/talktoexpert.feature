Feature: telnyx.com
  Scenario: Talk to Expert page
    Given I visit telnyx.com
    Then I accept cookies, if it's appear
    When I click 'Talk To Expert' button
    Then I shoul see 'Talk To Expert' page header
    Then I choose reason for contact 'Support'
    When I enter first name
    Then I enter last name
    Then I enter business email name
    Then I choose phone code
    Then I enter phone number
    Then I enter company web site
    Then I enter additional information
    Then I click 'I want To Receive Emails' checkbox
    Then I click 'Submit' button
    Then I shoul see 'Expert Request' page header