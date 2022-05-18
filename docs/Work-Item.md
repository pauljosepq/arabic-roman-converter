# Work Item

## Requirements

- Req-1: The application should verify the number format.
- Req-2: The application should follow roman numbers rules.
- Req-3: The application must run in any operating system that supports Node.js and npm.
- Req-4: The application must run with a Node version higher than or equal to 16.x.

## Acceptance Criteria

- Cri-1-1: The application should throw an "Invalid" message when number doesn't have a valid format.
- Cri-2-1: The application should not allow numbers greater that 99,999.
- Cri-2-2: Roman numbers should be provided in uppercase.
- Cri-2-3: Letter should not be repeated more than three times.
- Cri-2-4: When a letter is followed by another letter with the same or a lower value, their values are added.
- Cri-2-5: When the letters I, X, C are followed by another of greater value, they are subtracted.

## Test Cases

### Unit tests

1. Converting 333 should be equal to CCCXXXIII

1. Converting 444 should be equal to CDXLIV

1. Converting 1970 should be equal to MCMLXX

1. Converting 11234 should be equal to -(X)MCCXXXIV

1. Converting 12.5 is Invalid

1. Converting 112.12 is Invalid

### End-to-End

1. Converting 5 should be equal to V

   1. Type 5 in the console
   1. Press enter
   1. Roman: V

1. Converting 15 should be equal to V

   1. Type 15 in the console
   1. Press enter
   1. Roman: XV

1. Converting 1971 should be equal to MCMLXXI

   1. Type 1971 in the console
   1. Press enter
   1. Roman: MCMLXXI

## References

- [Readme](../Readme.md)

- [Questions](Questions.md)
