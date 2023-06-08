Feature: Dashboard services page

  As a tester, user wants to test the dashboard

  # Scenario: Checking the functionality of view all specialities link
  #   Given User navigate to '<PageType>' page
  #   When User clicks on view all specialities
  #   Then corresponding page appears with expected "<Item>"
  #   Examples:
  #     | PageType | Item        |
  #     | homepage | Bone Marrow |

  # Scenario: Checking the functionality of Specialities card
  #   Given User navigate to '<PageType>' page
  #   When User clicks on Specialities card
  #   Then corresponding page appears with expected '<Item>' doctors
  #   Examples:
  #     | PageType | Item            |
  #     | homepage | Cardiac Surgery |

  # Scenario: Checking the functionality of service search input field

  #   Given User navigate to '<Page Type>' page
  #   When User enters the '<service>' in service search field
  #   When User clicks on search logo
  #   Then Doctors matching the search should display

  #   Examples:
  #     | PageType | service                        |
  #     | homepage | Clinical Nutrition & Dietetics |


  # Scenario: Checking the functionality of doctor search input field
  #   Given User navigate to '<Page Type>' page
  #   When User enters the doctor name in doctor search field
  #   When User clicks on search logo
  #   Then Doctor matching the search should display



  # Scenario: Checking the functionality of Pagination
  #   Given User navigate to '<Page Type>' page
  #   When User clicks on pagination button
  #   Then User is on '<Value>' pagination page
  #   Examples:
  #     | Page Type | Value |
  #     | homepage  | 2     |
  #     | homepage  | 2     |

  Scenario Outline: Checking the visibility of UI elements
    Given User navigate to "<Page Type>" page
    And corresponding page appears with the expected "<Item>"
    Examples:
      | Page Type | Item                 |
      | homepage  | Specialities,Doctors |




