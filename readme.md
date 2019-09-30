접속하여 Test 가능한 URL
http://ec2-13-209-15-44.ap-northeast-2.compute.amazonaws.com:3000/

React를 사용하여 만들었습니다.
리눅스 환경에서 설치 및 배포하는 방법

## 1. Node.js 설치
(Using Ubuntu)
` curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs`

(Using Debian, as root)
`curl -sL https://deb.nodesource.com/setup_12.x | bash - 
apt-get install -y nodejs`

(참고: https://github.com/nodesource/distributions/blob/master/README.md)

## 2. Yarn 설치
`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
`sudo apt-get update && sudo apt-get install yarn`

(참고: https://yarnpkg.com/en/docs/install#debian-stable)

## 3. 리액트 설치 (create react app)
`npx create-react-app my-app`

`cd my-app`

`npm start`

## 4. yarn build
(create-react-app 폴더에서)

## 5. yarn global add serve

(6번 실행시 serve 명령을 찾을 수 없다고 나온다면
`sudo snap install serve`
실행)

## 6. nohup serve -s build 3000

