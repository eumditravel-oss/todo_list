# Claim Center Studio — Pilot Launch Board

2026년 8월 25일 회의에서 확정된 클레임 센터 스튜디오 파일럿 오픈 TODO를 공유하기 위한 정적 웹 대시보드입니다.

## 공개 페이지

GitHub Pages 배포가 완료되면 아래 주소에서 확인할 수 있습니다.

`https://eumditravel-oss.github.io/todo_list/`

## 구성

- `index.html`: 대시보드 구조와 회의 핵심 결정사항
- `styles.css`: 반응형 레이아웃과 인쇄용 스타일
- `app.js`: 우선순위 필터, 검색, 개인 체크 저장, 진행률 계산
- `.github/workflows/pages.yml`: GitHub Pages 자동 배포

## 운영 방식

- 웹사이트는 모든 사람이 같은 기준 TODO를 열람할 수 있는 공개 정적 페이지입니다.
- 완료 체크는 각 사용자의 브라우저 `localStorage`에만 저장됩니다.
- 팀 공용 진행상태를 변경하려면 `app.js`의 업무 데이터 또는 별도 백엔드 연동이 필요합니다.
- `main` 브랜치에 반영되면 GitHub Actions가 페이지를 자동 배포합니다.
