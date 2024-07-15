Feature: Login feature
    As a client I can log in the website

    Scenario: 
    Given I open the log in page
    When I enter the username "tomsmith"
    And I enter the password "SuperSecretPassword!"
    And I click on the log in button
    Then A succesful message is displayed

    Scenario: Logout succesful
    Given I open the log in page
    When I enter the username "tomsmith"
    And I enter the password "SuperSecretPassword!"
    And I click on the log in button
    Then A succesful message is displayed
    And that I clicked the logout button
    Then the logout successful message is displayed