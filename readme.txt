Node Practice

1. 패키지
    - 프로젝트에서 사용하는 Module(library)
    - 완전한 애플리케이션(babel, webpack, nodemon)

2. 의존성
    - 개발하는 프로젝트(애플리케이션, 라이브러리)에서 설치하고 사용하는 패키지
    - 일반 의존성 : 애플리케이션 실행 시 필요한 것
        개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 빌드와 배포에 포함되어야 한다.
    - 개발 의존성 : 개발할 때만 필요한 것
        개발에 필요하거나 도움이 되는 패키지로 빌드와 배포에 포함하지 않는다.

3. 패키지 설치
    npm init -y
    의존성 설치 
    npm i ejs

    1) 전역 설치(global) : 여러 프로젝트에서 공통으로 사용하는 도구
    2) 지역 설치(local, 프로젝트 안) : 특정 프로젝트에 종속적인 도구/라이브러리
    3) 패키지 설치 실습
        $ npm i ejs         : local, general dependency
        $ npm i -D nodemon  : local, dev. dependency
        $ npm i -g gulp     : global, general dependency
            $ npx gulp --version
    3) 패키지 삭제 
        $ npm un ejs        : local install delete
        $ npm un nodemon    : local install delete
        $ npm un -g gulp    : global install delete

4. Node(JavaScript) Project 생성
    1) 프로젝트 생성(mkdir)
    2) 프로젝트 이동(cd)
    3) 프로젝트 초기화 : 프로젝트 설명 manifest 파일인 package.json 생성
        $[project-ex01] npm init -y
5. Module 
    1) 코어 모듈 : node에서 제공하는 모듈(fs, os, process, http, ...)
    2) 파일 모듈 : 파일 경로로 불러온 모듈 안의 함수, 객체를 사용
    3) npm 모듈  : npm을 통해 node_modules에 설치하고 사용하는 모듈
        - 원격 배포가 된 패키지를 설치 
            npmjs.com의 npm registry에 패키지를 배포, 단, unique한 이름으로 올려야함)
            [참고] https://github.com/kickscar/javascript-practices/blob/main/TechNotes/javascript-practices/11.Development%20Environments/02.%20npm.md
        - 로컬 설치
            $ npm i ../douzone-math

6. helloweb-ex01: 웹 애플리케이션 만들어 보기(express 프레임워크x)
    npm connect
    npm i serve-static
    npm i connect-route
7. helloweb-ex02: 웹 애플리케이션 만들어 보기(express 프레임워크O)
    npm i express
    npm i ejs
    npm i -D nodemon
        "scripts": {
            "start": "node index.js" : 표준 스테이징, npm start
            "debug": "nodemon index.js" : npm run debug
        }