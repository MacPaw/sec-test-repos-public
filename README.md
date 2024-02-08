# sec-test-repos
Set of repositories with vulnerable and non-vulnerable code. Used for testing SSDLC pipelines

### Branch naming
Branches are named following the next pattern `<scanner_type>_<test_state>`:
- *scanner_type* - type of scanner to test. Possible params: `javascript|gitleaks|terraform|blackduck`
- *test_state* - state of the test after scanner run. Possible params: `true|false`

### Test config
Each branch with test repo contains `projects/config.json` file.
The file has the following properties:
- `scanner` - scanner type
- `test-state` - state of the test
- `findings` - number of findings scanner should find (0 - for non-vulnerable project)