# sec-test-repos
Set of repositories with vulnerable and non-vulnerable code. Used for testing SSDLC pipelines

### Branch naming
Branches are named following the next pattern `<scanner_type>_<test_state>`:
- *scanner_type* - type of scanner to test. Possible params: `javascript|gitleaks|terraform|blackduck`
- *test_state* - state of the test after scanner run. Possible params: `true|false`