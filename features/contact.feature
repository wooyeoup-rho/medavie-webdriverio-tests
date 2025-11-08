Feature: Medavie Website

  Scenario Outline: When a user navigates to the contact page, the correct page and information is displayed.

    Given I am on the <language> home page
    When I navigate to the contact page
    Then I should see a header displaying <expectedHeader>
    And I should see the following contact information:
      | <atlanticInfo> | <quebecInfo> | <ontarioInfo> | <elseInfo> |

    Examples:
      | language | expectedHeader | atlanticInfo                            | quebecInfo              | ontarioInfo              | elseInfo                            |
      | en       | Contact        | Atlantic Region: 1-888-227-3400         | Quebec: 1-888-588-1212  | Ontario: 1-800-355-9133  | Elsewhere in Canada: 1-800-667-4511 |
      | fr       | Coordonnées    | Région de l’Atlantique : 1‑888‑227‑3400 | Québec : 1‑888‑588‑1212 | Ontario : 1-800‑355‑9133 | Ailleurs au Canada : 1‑800‑667‑4511 |
