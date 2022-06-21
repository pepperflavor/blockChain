// // git 프로젝트

// //git은 뭔가

// // 1 형상관리 도구중의 하나
// // 형상관리 도구란? 버전 관리 시스템
// // 작업을 하면서 작업의 리스트를 관리할 수 있다.

// // 2. git의 장점
// //  협업하는 단계에서 소스코드를 파일로 직접 주고 받을 필요없이
// // 같은 파일을 팀원들과 동시에 병렬로 작업이 가능하다.

// // A작업을 하고 -> B작업을 넘겨주는데
// // A랑 B가 메인페이지를 같이 작업하고 있는데
// // A는 상품페이지, B는 장바구니 페이지
// // 파일로 넘겨주고 어디가 다른지 눈으로 찾는 방식으로 작업을 하면
// // 시간도 오래걸리고 버그도 잡기 힘들다.
// // 어느 부분이 수정되었는지 찾기 힘들다.

// // 서버에 서로 푸쉬를 하면 서버에 있는 파일이 자동으로 갱신된다.
// // A와 B가 작업을 하는데 C라는 새로운 팀원이 합류함.
// // A와 B가 C에게 파일을 전달하면서 설명해줄 수는 없으니
// // git이라는 저장소에서 클론으로 파일을 내려받아서 바로 작업이 가능하다.


// // git 설치

// // git init
// // 새로운 git 저장소를 생성할 때 사용하는 git 명령어
// // git 저장소를 생성한 폴더에서
// // 숨김파일 보기를 체크하면 .git

// // git add 커밋을 추가하는데 git 저장소에 추가하려고 대기
// // git add README.md 이렇게 쓰면 git 저장소에 README.md 추가하려고 대기

// // git commit -m커밋 메시지를 작성할 수 있다.
// // git commit -m "first commit" 이거면 저장소에 추가하면서
// // 작업내용 메시지는 first commit <- 이 메세지가 보인다.

// // git branch -M 이건 마스터 브런치를 설정한다.
// // git branch -M main 이렇게 하면 main 이라는 마스터 브런치 설정

// // git remote add origin 깃 저장소 링크를 추가한다.
// // origin : 복제한 원격 git 저장소의 기본 이름
// // git remote : origin 복제한 url을 참조하기 위해 호출
// // git remote add origin https://github.com/pepperflavor/blockChain.git(자신의 깃 저장소 주소)를 추가해준다.






// 깃 저장소 생성 키워드
// start a working area (see also: git help tutorial)
//    clone     Clone a repository into a new directory


// 빈 레파지토리 생성
//    init      Create an empty Git repository or reinitialize an existing one

// work on the current change (see also: git help everyday)
//    add       Add file contents to the index
//    mv        Move or rename a file, a directory, or a symlink
//    restore   Restore working tree files
//    rm        Remove files from the working tree and from the index

// examine the history and state (see also: git help revisions)
//    bisect    Use binary search to find the commit that introduced a bug
//    diff      Show changes between commits, commit and working tree, etc
//    grep      Print lines matching a pattern
//    log       Show commit logs
//    show      Show various types of objects
//    status    Show the working tree status

// grow, mark and tweak your common history
//    branch    List, create, or delete branches
//    commit    Record changes to the repository
//    merge     Join two or more development histories together
//    rebase    Reapply commits on top of another base tip
//    reset     Reset current HEAD to the specified state
//    switch    Switch branches
//    tag       Create, list, delete or verify a tag object signed with GPG

// collaborate (see also: git help workflows)
//    fetch     Download objects and refs from another repository
//    pull      Fetch from and integrate with another repository or a local branch
//    push      Update remote refs along with associated objects

// 'git help -a' and 'git help -g' list available subcommands and some
// concept guides. See 'git help <command>' or 'git help <concept>'
// to read about a specific subcommand or concept.
// See 'git help git' for an overview of the system.
