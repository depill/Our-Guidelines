# Git Workflow
We use [`git flow`](http://danielkummer.github.io/git-flow-cheatsheet/) with our own flavour.

## Main branches
**Master** _(Represent production-ready state of source code)_

**Develop** _(Represent latest delivered development changes, should be in a ready state for a potential release)_

## Supporting branches
These branches are created as needed and deleted once they are completed.

* **Feature branches** _(feature/???) e.g feature/support-search_
* **Release branches** _(release/[Date]) e.g release/20180105_
* **Hotfix branches** _(hotfix/???) e.g hotfix/footer-menu_

??? - _Descriptive of feature or hotfix_

### Feature branches
_Branch off from: develop_

_Must merge back into: develop_

1. Merge back to develop when we definitely want to add the new feature, it has been code reviewed and gone through QA. If the feature is unstable/incomplete do not merge in to develop branch.
2. Delete feature branches when they are finished.

### Release branches
_Branch off from: develop_

_Must merge back into: develop and master_

1. Preparation of a new production release. Deploy to test or stage environment
2. Do bug fixing in this branch, bug fixes may be continuously merged back into the develop branch
3. Adding large new features to this branch is forbidden
4. If release branch is ready to be released on the production server do the following steps
   * Merge release branch into master
   * Create tag for future reference, e.g 1.1.0
   * Merge changes (if any) back to develop branch
   * Delete release branch

### Hotfix branches
_Branch off from: master_

_Must merge back into: develop and master_

1. Fix the bug in the hotfix branch, when finished with bug fixing perform the following steps
   * Merged hotfix branch into master
   * Create Tag for future reference e.g (1.1.1)
   * Merge changes back to develop branch
   * Delete hotfix Branch
